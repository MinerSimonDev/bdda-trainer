import { CARDS } from "@/data/cards";
import type { Card, ProgressMap } from "@/lib/types";

const WEIGHT: Record<number, number> = { 0: 3, 1: 6, 2: 3, 3: 1 };

export function statusOf(progress: ProgressMap, id: string): number {
  return progress[id]?.status ?? 0;
}

export function poolFor(chapters: number[]): Card[] {
  if (!chapters.length) return CARDS;
  return CARDS.filter((c) => chapters.includes(c.ch));
}

/** Tippfehler-tolerant: Groß/Klein, Bindestriche und Leerzeichen egal. */
export function matchesBlank(input: string, expected: string): boolean {
  const norm = (s: string) =>
    s
      .toLowerCase()
      .replace(/[\s\-_.()]/g, "")
      .replace(/ä/g, "a")
      .replace(/ö/g, "o")
      .replace(/ü/g, "u")
      .replace(/ß/g, "ss");
  const a = norm(input);
  const b = norm(expected);
  if (!a) return false;
  return a === b || (a.length >= 4 && b.startsWith(a)) || b.includes(a) && a.length >= 5;
}

export function buildQueue(
  pool: Card[],
  progress: ProgressMap,
  length: number
): Card[] {
  const weighted: { card: Card; w: number }[] = pool.map((card) => ({
    card,
    w: WEIGHT[statusOf(progress, card.id)] ?? 3,
  }));

  const queue: Card[] = [];
  const remaining = [...weighted];
  const target = Math.min(length, remaining.length);

  while (queue.length < target && remaining.length) {
    const total = remaining.reduce((s, x) => s + x.w, 0);
    let roll = Math.random() * total;
    let idx = 0;
    for (let i = 0; i < remaining.length; i++) {
      roll -= remaining[i].w;
      if (roll <= 0) {
        idx = i;
        break;
      }
    }
    queue.push(remaining[idx].card);
    remaining.splice(idx, 1);
  }
  return queue;
}

export function chapterStats(progress: ProgressMap) {
  const stats: Record<
    number,
    { total: number; solid: number; shaky: number; weak: number; fresh: number }
  > = {};
  for (const card of CARDS) {
    const s = (stats[card.ch] ??= {
      total: 0,
      solid: 0,
      shaky: 0,
      weak: 0,
      fresh: 0,
    });
    s.total++;
    const st = statusOf(progress, card.id);
    if (st === 3) s.solid++;
    else if (st === 2) s.shaky++;
    else if (st === 1) s.weak++;
    else s.fresh++;
  }
  return stats;
}

export function nextStatus(current: number, grade: "good" | "half" | "bad") {
  if (grade === "bad") return 1;
  if (grade === "half") return 2;
  return current >= 2 ? 3 : 2;
}

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
