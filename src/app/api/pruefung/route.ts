import { auth } from "@clerk/nextjs/server";
import { generateExam } from "@/lib/exam-generate";
import { GENERATOR_POOLS } from "@/lib/exam-prompt";

export const maxDuration = 60;

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) return Response.json({ error: "Nicht angemeldet." }, { status: 401 });

  let body: { ch?: unknown; focus?: unknown; avoid?: unknown };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const ch = Number(body.ch);
  if (!GENERATOR_POOLS.includes(ch)) {
    return Response.json(
      { error: `Pool ${body.ch} gibt es nicht. Erlaubt: ${GENERATOR_POOLS.join(", ")}.` },
      { status: 400 }
    );
  }

  const focus = typeof body.focus === "string" ? body.focus.slice(0, 200) : undefined;
  const avoid = Array.isArray(body.avoid)
    ? body.avoid.filter((x): x is string => typeof x === "string").slice(0, 20)
    : [];

  try {
    const exam = await generateExam({ ch, focus, avoid });
    return Response.json({ exam });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Die Aufgabe konnte nicht erzeugt werden.";
    console.error("[pruefung] generate failed", err);
    return Response.json({ error: message }, { status: 500 });
  }
}
