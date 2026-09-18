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
  options?: string[];
  correct?: number;
};

export type ExamPart = {
  level: string;
  q: string;
  a: string;
};

export type ExamCase = {
  ch: number;
  title: string;
  intro: string;
  parts: ExamPart[];
};

export const STATUS = {
  NEW: 0,
  WEAK: 1,
  SHAKY: 2,
  SOLID: 3,
} as const;

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
