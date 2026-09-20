export type Chapter = {
  id: number;
  name: string;
  sub: string;
};

export type Card = {
  id: string;
  ch: number;
  topic: string;
  q: string;
  a: string;
  /** Folienausschnitt unter /public/slides, ohne Endung */
  img?: string;
  /** Begriffe, die im Ausfüllmodus eingetippt werden */
  blanks?: string[];
};

export type ExamPart = {
  level: string;
  q: string;
  a: string;
  /** Folie unter /public/slides, die als Angabe-Grafik gezeigt wird */
  img?: string;
};

export type ExamCase = {
  ch: number;
  title: string;
  intro: string;
  parts: ExamPart[];
};

export type ProgressRow = {
  card_id: string;
  status: number;
  seen: number;
  correct: number;
};

export type ProgressMap = Record<string, ProgressRow>;

export const STATUS_LABEL: Record<number, string> = {
  0: "Neu",
  1: "Schwach",
  2: "Wackelig",
  3: "Sitzt",
};

/** Ein abzudeckendes Label auf einer Folie, Angaben in Prozent des Bildes. */
export type LabelSpot = {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  /** Weitere Schreibweisen, die als richtig zählen. */
  alt?: string[];
};

export type LabelTask = {
  id: string;
  ch: number;
  img: string;
  title: string;
  intro?: string;
  /** Ausschnitt der Folie in Prozent — blendet Folientext aus, der die Lösung verrät. */
  crop?: { x: number; y: number; w: number; h: number };
  spots: LabelSpot[];
};
