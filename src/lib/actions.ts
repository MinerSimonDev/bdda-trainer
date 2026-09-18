"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { supabaseAdmin } from "@/lib/supabase";
import { CARDS } from "@/data/cards";
import type { ProgressMap, ProgressRow } from "@/lib/types";

export async function getProgress(): Promise<ProgressMap> {
  const { userId } = await auth();
  if (!userId) return {};

  const { data, error } = await supabaseAdmin()
    .from("bdda_progress")
    .select("card_id, status, seen, correct")
    .eq("user_id", userId);

  if (error || !data) return {};

  const map: ProgressMap = {};
  for (const row of data as ProgressRow[]) map[row.card_id] = row;
  return map;
}

export async function recordAnswer(
  cardId: string,
  status: number,
  wasCorrect: boolean
) {
  const { userId } = await auth();
  if (!userId) return;

  const db = supabaseAdmin();
  const { data: existing } = await db
    .from("bdda_progress")
    .select("seen, correct")
    .eq("user_id", userId)
    .eq("card_id", cardId)
    .maybeSingle();

  await db.from("bdda_progress").upsert(
    {
      user_id: userId,
      card_id: cardId,
      status,
      seen: (existing?.seen ?? 0) + 1,
      correct: (existing?.correct ?? 0) + (wasCorrect ? 1 : 0),
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id,card_id" }
  );
}

/**
 * Setzt den Fortschritt zurück: für die genannten Kapitel, oder für alles,
 * wenn keine Kapitel übergeben werden.
 */
export async function resetProgress(chapters: number[]): Promise<boolean> {
  const { userId } = await auth();
  if (!userId) return false;

  const db = supabaseAdmin();
  let query = db.from("bdda_progress").delete().eq("user_id", userId);

  if (chapters.length) {
    const ids = CARDS.filter((c) => chapters.includes(c.ch)).map((c) => c.id);
    if (!ids.length) return false;
    query = query.in("card_id", ids);
  }

  const { error } = await query;
  if (error) return false;

  revalidatePath("/");
  return true;
}

export async function logSession(
  mode: string,
  chapters: number[],
  answered: number,
  correct: number
) {
  const { userId } = await auth();
  if (!userId) return;
  await supabaseAdmin().from("bdda_sessions").insert({
    user_id: userId,
    mode,
    chapters,
    answered,
    correct,
  });
}

export async function getStreak(): Promise<{ days: number; today: number }> {
  const { userId } = await auth();
  if (!userId) return { days: 0, today: 0 };

  const { data } = await supabaseAdmin()
    .from("bdda_sessions")
    .select("answered, started_at")
    .eq("user_id", userId)
    .order("started_at", { ascending: false })
    .limit(200);

  if (!data?.length) return { days: 0, today: 0 };

  const dayKey = (d: Date) => d.toISOString().slice(0, 10);
  const today = dayKey(new Date());
  const daysWithWork = new Set(
    data.map((r) => dayKey(new Date(r.started_at as string)))
  );

  let streak = 0;
  const cursor = new Date();
  while (daysWithWork.has(dayKey(cursor))) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }

  const answeredToday = data
    .filter((r) => dayKey(new Date(r.started_at as string)) === today)
    .reduce((s, r) => s + (r.answered as number), 0);

  return { days: streak, today: answeredToday };
}
