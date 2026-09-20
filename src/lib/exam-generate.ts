import "server-only";

import OpenAI from "openai";
import { zodTextFormat } from "openai/helpers/zod";
import { buildSystem, buildUser, poolSlides, schemaFor } from "@/lib/exam-prompt";
import type { ExamCase } from "@/lib/types";

const MODEL = process.env.OPENAI_MODEL ?? "gpt-5.5";

export type GenerateInput = {
  ch: number;
  focus?: string;
  avoid?: string[];
};

export async function generateExam({
  ch,
  focus,
  avoid = [],
}: GenerateInput): Promise<ExamCase> {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error(
      "OPENAI_API_KEY fehlt — Schlüssel in .env.local eintragen und den Dev-Server neu starten."
    );
  }

  const slides = poolSlides(ch);
  const client = new OpenAI();

  const response = await client.responses.parse({
    model: MODEL,
    instructions: buildSystem(),
    input: buildUser({ ch, focus, avoid, slides }),
    reasoning: { effort: "high" },
    max_output_tokens: 16000,
    text: { format: zodTextFormat(schemaFor(slides), "pruefungsaufgabe") },
  });

  if (response.status === "incomplete") {
    throw new Error(
      "Die Antwort wurde abgeschnitten, bevor die Aufgabe fertig war. Bitte nochmal versuchen."
    );
  }

  const out = response.output_parsed;
  if (!out) throw new Error("Das Modell hat kein verwertbares Ergebnis geliefert.");

  const part = (level: string, p: { q: string; a: string; img: string }) => ({
    level,
    q: p.q,
    a: p.a,
    ...(p.img && slides.includes(p.img) ? { img: p.img } : {}),
  });

  return {
    ch,
    title: out.subject ? `${out.subject} — ${out.title}` : out.title,
    intro: out.intro,
    parts: [
      part("Reproduktion", out.reproduktion),
      part("Transfer", out.transfer),
      part("Reflexion", out.reflexion),
    ],
  };
}
