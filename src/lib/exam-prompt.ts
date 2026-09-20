import { z } from "zod";
import { CARDS, CHAPTERS, EXAM_CASES } from "@/data/cards";

export const GENERATOR_POOLS = [1, 2, 3, 4, 5, 6, 7];

const FORMAT = `Aufbau jeder Aufgabe (genau wie in den Beispielprüfungen):

• Problemstellung — zwei bis drei Sätze, die das Themenfeld einordnen. Keine Frage.
• Reproduktion — Wiedergabe von Gelerntem. Operatoren: beschreiben, definieren, nennen, aufzählen.
  Verlangt Fachbegriffe plus ein Beispiel.
• Transfer — Anwenden auf etwas Neues. Operatoren: erläutern, erörtern, erklären, vergleichen, übertragen.
  Hängt an einer Grafik oder einem konkreten Fall.
• Reflexion — Beurteilen und Entwerfen. Operatoren: begründen, bewerten, prüfen, entwerfen, beurteilen.
  Immer ein konkreter Sachverhalt aus der Praxis (Firma, Behörde, Messwerte, Ausfall, Vergleich zweier Systeme),
  der im Aufgabentext ausformuliert dasteht, und mindestens zwei Arbeitsaufträge.

Regeln:
• Deutsch, Sie-Form, Prüfungssprache der HTL. Keine Anrede, keine Meta-Sätze, keine Punkteangaben.
• Die drei Teile bauen aufeinander auf und behandeln dasselbe Thema aus einem Pool.
• Fachlich ausschließlich der übergebene Stoff. Nichts erfinden, was dort nicht steht.
• Die Musterantwort ist die Antwort, die volle Punkte gibt: vollständig ausformuliert,
  mit allen Fachbegriffen, Beispielen und Zahlen aus dem Stoff — kein Stichwortzettel.
• Musterantworten als HTML-Fragment: <b> für Begriffe, <br> für Zeilen, <code> für Befehle
  und Schlüsselwörter, • für Aufzählungen. Keine Überschriften, keine <ul>, kein Markdown.`;

function stripHtml(html: string) {
  return html
    .replace(/<br\s*\/?>/g, " | ")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function poolStoff(ch: number) {
  const chapter = CHAPTERS.find((c) => c.id === ch);
  const cards = CARDS.filter((c) => c.ch === ch);
  const lines = cards.map(
    (c) => `[${c.topic}] ${stripHtml(c.q)}\n→ ${stripHtml(c.a)}`
  );
  return `Pool ${ch}: ${chapter?.name} (${chapter?.sub})\n\n${lines.join("\n\n")}`;
}

export function poolSlides(ch: number) {
  return [...new Set(CARDS.filter((c) => c.ch === ch && c.img).map((c) => c.img!))];
}

/** Die beiden Originalprüfungen als Stilvorlage. */
function examples() {
  return EXAM_CASES.map((e) =>
    [
      `### Beispielprüfung: ${e.title}`,
      `Problemstellung: ${e.intro}`,
      ...e.parts.map((p) => `${p.level}:\n${p.q}\nMusterantwort:\n${p.a}`),
    ].join("\n\n")
  ).join("\n\n---\n\n");
}

export function schemaFor(slides: string[]) {
  const part = z.object({
    q: z
      .string()
      .describe("Der Aufgabentext dieses Teils, ausformuliert in Sie-Form."),
    a: z
      .string()
      .describe("Die vollständige Musterantwort als HTML-Fragment."),
    img: z
      .enum(["", ...slides] as [string, ...string[]])
      .describe(
        "Dateiname einer Folie, die als Angabe-Grafik über der Frage gezeigt wird, sonst leerer String. Nur bei Transfer oder Reflexion sinnvoll, höchstens einmal pro Aufgabe."
      ),
  });

  return z.object({
    subject: z
      .string()
      .describe('Fachgebiet für den Kopf, z.B. "Datenanalyse – Verfahren".'),
    title: z
      .string()
      .describe('Titel der Aufgabe, z.B. "RDBMS – Anomalien / Non Repeatable Read".'),
    intro: z.string().describe("Die Problemstellung, zwei bis drei Sätze."),
    reproduktion: part,
    transfer: part,
    reflexion: part,
  });
}

export function buildSystem() {
  return `Du bist Prüfer für "Big Data & Data Analytics" an der HTL Dornbirn und schreibst Aufgaben für die mündliche Matura.

${FORMAT}

Die folgenden zwei Aufgaben sind die Originale des Fachs. Triff ihren Ton, ihre Länge und ihren Anspruch — aber übernimm nie ihr Thema.

${examples()}`;
}

export function buildUser({
  ch,
  focus,
  avoid = [],
  slides,
}: {
  ch: number;
  focus?: string;
  avoid?: string[];
  slides: string[];
}) {
  return [
    `Schreibe eine neue Prüfungsaufgabe aus Pool ${ch}.`,
    focus?.trim() ? `Schwerpunkt: ${focus.trim()}` : null,
    avoid.length
      ? `Diese Themen sind schon drangekommen, nimm ein anderes: ${avoid.join("; ")}`
      : null,
    slides.length
      ? `Verfügbare Folien für die Angabe-Grafik: ${slides.join(", ")}. Nur eine davon wählen, wenn die Aufgabe wirklich an der Grafik hängt — sonst überall leerer String.`
      : `Es gibt keine Folien für diesen Pool. img bleibt überall leer.`,
    "",
    "Der gesamte Stoff dieses Pools, mehr darf fachlich nicht vorkommen:",
    "",
    poolStoff(ch),
  ]
    .filter((x) => x !== null)
    .join("\n");
}
