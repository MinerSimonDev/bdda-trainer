"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/button-link";
import { Card } from "@/components/ui/card";
import { ChapterPicker } from "@/components/chapter-picker";
import { CHAPTERS } from "@/data/cards";
import { buildQueue, poolFor, shuffle, statusOf } from "@/lib/study";
import { recordAnswer, logSession } from "@/lib/actions";
import type { Card as CardType, ProgressMap } from "@/lib/types";

type Shuffled = { card: CardType; options: string[]; correct: number };

export function QuizSession({
  initialProgress,
  initialChapters,
}: {
  initialProgress: ProgressMap;
  initialChapters: number[];
}) {
  const [progress, setProgress] = useState<ProgressMap>(initialProgress);
  const [chapters, setChapters] = useState<number[]>(initialChapters);
  const [length, setLength] = useState(15);
  const [queue, setQueue] = useState<Shuffled[] | null>(null);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [wrongCards, setWrongCards] = useState<CardType[]>([]);

  const available = useMemo(() => poolFor(chapters, true).length, [chapters]);

  const start = useCallback(() => {
    const pool = poolFor(chapters, true);
    const picked = buildQueue(pool, progress, length);
    setQueue(
      picked.map((card) => {
        const pairs = card.options!.map((text, i) => ({
          text,
          right: i === card.correct,
        }));
        const mixed = shuffle(pairs);
        return {
          card,
          options: mixed.map((p) => p.text),
          correct: mixed.findIndex((p) => p.right),
        };
      })
    );
    setIndex(0);
    setPicked(null);
    setScore(0);
    setWrongCards([]);
  }, [chapters, length, progress]);

  const current = queue?.[index];
  const done = queue !== null && index >= queue.length;

  useEffect(() => {
    if (done && queue?.length) {
      void logSession("quiz", chapters, queue.length, score);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  function choose(i: number) {
    if (picked !== null || !current) return;
    setPicked(i);
    const right = i === current.correct;
    const prev = statusOf(progress, current.card.id);
    const status = right ? (prev >= 2 ? 3 : 2) : 1;
    setProgress((p) => ({
      ...p,
      [current.card.id]: {
        card_id: current.card.id,
        status,
        seen: (p[current.card.id]?.seen ?? 0) + 1,
        correct: (p[current.card.id]?.correct ?? 0) + (right ? 1 : 0),
      },
    }));
    if (right) setScore((s) => s + 1);
    else setWrongCards((w) => [...w, current.card]);
    void recordAnswer(current.card.id, status, right);
  }

  function next() {
    setPicked(null);
    setIndex((i) => i + 1);
  }

  if (queue === null) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Quiz</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Multiple Choice mit sofortiger Rückmeldung — gut für die schnelle
            Runde zwischendurch.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Kapitel
          </h2>
          <ChapterPicker selected={chapters} onChange={setChapters} />
        </div>

        <div className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Länge
          </h2>
          <div className="flex gap-2">
            {[10, 15, 25].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setLength(n)}
                className={[
                  "rounded-full border px-4 py-1.5 text-sm transition-colors",
                  length === n
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:text-foreground",
                ].join(" ")}
              >
                {n} Fragen
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button size="lg" onClick={start} disabled={!available}>
            Quiz starten
          </Button>
          <span className="text-sm text-muted-foreground tabular-nums">
            {available} Fragen verfügbar
          </span>
        </div>
      </div>
    );
  }

  if (done) {
    const pct = queue.length ? Math.round((score / queue.length) * 100) : 0;
    return (
      <div className="space-y-6 py-4">
        <div className="text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            {score} von {queue.length} richtig
          </h1>
          <p className="mt-1 text-sm text-muted-foreground tabular-nums">{pct} %</p>
        </div>

        {wrongCards.length > 0 && (
          <div className="space-y-2">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Nochmal anschauen
            </h2>
            {wrongCards.map((c) => (
              <Card key={c.id} className="gap-2 p-4">
                <p
                  className="prose-card text-sm font-medium"
                  dangerouslySetInnerHTML={{ __html: c.q }}
                />
                <div
                  className="prose-card text-sm text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: c.a }}
                />
              </Card>
            ))}
          </div>
        )}

        <div className="flex justify-center gap-2">
          <Button onClick={start}>Nochmal</Button>
          <Button variant="outline" onClick={() => setQueue(null)}>
            Einstellungen
          </Button>
          <ButtonLink href="/" variant="ghost">Übersicht</ButtonLink>
        </div>
      </div>
    );
  }

  const chapter = CHAPTERS.find((c) => c.id === current!.card.ch);

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setQueue(null)}
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          ← Abbrechen
        </button>
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${(index / queue.length) * 100}%` }}
          />
        </div>
        <span className="text-sm text-muted-foreground tabular-nums">
          {score}/{index + (picked !== null ? 1 : 0)}
        </span>
      </div>

      <Card className="gap-5 p-6 sm:p-8">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="rounded bg-muted px-2 py-0.5 font-medium">
            {chapter?.name}
          </span>
          <span>{current!.card.topic}</span>
        </div>

        <p
          className="prose-card text-balance text-lg font-medium leading-snug sm:text-xl"
          dangerouslySetInnerHTML={{ __html: current!.card.q }}
        />

        <div className="grid gap-2">
          {current!.options.map((opt, i) => {
            const isCorrect = i === current!.correct;
            const isPicked = i === picked;
            let cls =
              "border-border bg-card hover:border-primary/50 hover:bg-accent/40";
            if (picked !== null) {
              if (isCorrect) cls = "border-good bg-good-bg text-good";
              else if (isPicked) cls = "border-bad bg-bad-bg text-bad";
              else cls = "border-border bg-card opacity-55";
            }
            return (
              <button
                key={i}
                type="button"
                disabled={picked !== null}
                onClick={() => choose(i)}
                className={`rounded-lg border px-4 py-3 text-left text-sm transition-colors ${cls}`}
              >
                <span className="mr-2 font-medium opacity-60">
                  {String.fromCharCode(65 + i)}
                </span>
                {opt}
              </button>
            );
          })}
        </div>

        {picked !== null && (
          <div className="space-y-4 border-t pt-5">
            <div
              className="prose-card text-sm leading-relaxed text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: current!.card.a }}
            />
            <Button className="w-full" onClick={next}>
              {index + 1 === queue.length ? "Auswertung" : "Weiter"}
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}
