"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/button-link";
import { Card } from "@/components/ui/card";
import { ChapterPicker } from "@/components/chapter-picker";
import { BlankFill } from "@/components/blank-fill";
import { SlideImage } from "@/components/slide-image";
import { ResetProgress } from "@/components/reset-progress";
import { CHAPTERS } from "@/data/cards";
import { buildQueue, nextStatus, poolFor, statusOf } from "@/lib/study";
import { recordAnswer, logSession } from "@/lib/actions";
import type { Card as CardType, ProgressMap } from "@/lib/types";

const LENGTHS = [10, 20, 40];

type Grade = "good" | "half" | "bad";

export function StudySession({
  initialProgress,
  initialChapters,
}: {
  initialProgress: ProgressMap;
  initialChapters: number[];
}) {
  const [progress, setProgress] = useState<ProgressMap>(initialProgress);
  const [chapters, setChapters] = useState<number[]>(initialChapters);
  const [length, setLength] = useState(20);
  const [queue, setQueue] = useState<CardType[] | null>(null);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [tally, setTally] = useState({ good: 0, half: 0, bad: 0 });

  const available = useMemo(() => poolFor(chapters).length, [chapters]);

  const start = useCallback(() => {
    setQueue(buildQueue(poolFor(chapters), progress, length));
    setIndex(0);
    setFlipped(false);
    setTally({ good: 0, half: 0, bad: 0 });
  }, [chapters, length, progress]);

  const card = queue?.[index];
  const done = queue !== null && index >= queue.length;

  const grade = useCallback(
    (g: Grade) => {
      if (!card) return;
      const status = nextStatus(statusOf(progress, card.id), g);
      setProgress((p) => ({
        ...p,
        [card.id]: {
          card_id: card.id,
          status,
          seen: (p[card.id]?.seen ?? 0) + 1,
          correct: (p[card.id]?.correct ?? 0) + (g === "good" ? 1 : 0),
        },
      }));
      setTally((t) => ({ ...t, [g]: t[g] + 1 }));
      void recordAnswer(card.id, status, g === "good");
      setFlipped(false);
      setIndex((i) => i + 1);
    },
    [card, progress]
  );

  useEffect(() => {
    if (done && queue?.length) {
      void logSession("lernen", chapters, queue.length, tally.good);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  useEffect(() => {
    if (!card) return;
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA")) return;
      if (e.code === "Space" || e.key === " ") {
        e.preventDefault();
        setFlipped((f) => !f);
        return;
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        grade("bad");
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        grade("good");
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        grade("half");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [card, grade]);

  if (queue === null) {
    const pool = poolFor(chapters);
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Lernen</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Karteikarten mit Selbsteinschätzung. Was du nicht kannst, kommt
            häufiger dran.
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
            {LENGTHS.map((n) => (
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
                {n} Karten
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Button size="lg" className="h-11 px-5" onClick={start} disabled={!available}>
            Los geht&apos;s
          </Button>
          <span className="text-sm text-muted-foreground tabular-nums">
            {available} Karten · {pool.filter((c) => c.img).length} mit Folie
          </span>
        </div>

        <div className="rounded-lg border bg-muted/40 px-4 py-3 text-sm text-muted-foreground">
          <b className="text-foreground">Steuerung:</b> Leertaste dreht die Karte
          um · <b className="text-bad">←</b> nicht gewusst ·{" "}
          <b className="text-mid">↑</b> halb · <b className="text-good">→</b>{" "}
          gewusst
        </div>

        <ResetProgress
          chapters={chapters}
          affected={pool.filter((c) => (progress[c.id]?.status ?? 0) > 0).length}
          onReset={() =>
            setProgress((p) => {
              const next = { ...p };
              for (const c of pool) delete next[c.id];
              return next;
            })
          }
        />
      </div>
    );
  }

  if (done) {
    return (
      <div className="mx-auto max-w-lg space-y-6 py-6 text-center">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Runde fertig</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {queue.length} Karten durchgearbeitet.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <Score label="Gewusst" value={tally.good} className="text-good" />
          <Score label="Halb" value={tally.half} className="text-mid" />
          <Score label="Nicht" value={tally.bad} className="text-bad" />
        </div>
        <div className="flex justify-center gap-2">
          <Button className="h-10 px-4" onClick={start}>
            Nochmal
          </Button>
          <Button variant="outline" className="h-10 px-4" onClick={() => setQueue(null)}>
            Einstellungen
          </Button>
          <ButtonLink href="/" variant="ghost">
            Übersicht
          </ButtonLink>
        </div>
      </div>
    );
  }

  const chapter = CHAPTERS.find((c) => c.id === card!.ch);
  const hasBlanks = !!card!.blanks?.length;

  return (
    <div className="space-y-4">
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
          {index + 1}/{queue.length}
        </span>
      </div>

      <div className="flip-scene">
        <div className={`flip-card ${flipped ? "is-flipped" : ""}`}>
          {/* Vorderseite: Frage */}
          <div className="flip-face front" aria-hidden={flipped}>
            <Card
              onClick={() => setFlipped(true)}
              className="min-h-[19rem] cursor-pointer justify-center gap-6 p-6 transition-colors hover:border-primary/40 sm:min-h-[21rem] sm:p-8"
            >
              <Meta chapter={chapter?.name} topic={card!.topic} status={statusOf(progress, card!.id)} />
              <p
                className="prose-card text-balance text-center text-xl font-medium leading-snug sm:text-2xl"
                dangerouslySetInnerHTML={{ __html: card!.q }}
              />
              {hasBlanks && (
                <div onClick={(e) => e.stopPropagation()}>
                  <BlankFill
                    key={card!.id}
                    cardId={card!.id}
                    blanks={card!.blanks!}
                    onDone={() => undefined}
                  />
                </div>
              )}
              <p className="text-center text-xs text-muted-foreground">
                Leertaste oder tippen zum Umdrehen
              </p>
            </Card>
          </div>

          {/* Rückseite: Antwort */}
          <div className="flip-face back" aria-hidden={!flipped}>
            <Card
              onClick={() => setFlipped(false)}
              className="min-h-[19rem] cursor-pointer gap-4 bg-accent/40 p-6 sm:min-h-[21rem] sm:p-8"
            >
              <Meta chapter={chapter?.name} topic={card!.topic} status={statusOf(progress, card!.id)} />
              <div
                className="prose-card text-[15px] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: card!.a }}
              />
              {card!.img && (
                <div onClick={(e) => e.stopPropagation()}>
                  <SlideImage src={card!.img} alt={`Folie zu ${card!.topic}`} />
                </div>
              )}
              <p className="mt-auto pt-2 text-center text-xs text-muted-foreground">
                Leertaste dreht zurück
              </p>
            </Card>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <GradeButton onClick={() => grade("bad")} tone="bad" label="Nicht gewusst" hint="←" />
        <GradeButton onClick={() => grade("half")} tone="mid" label="Halb" hint="↑" />
        <GradeButton onClick={() => grade("good")} tone="good" label="Gewusst" hint="→" />
      </div>
    </div>
  );
}

function Meta({
  chapter,
  topic,
  status,
}: {
  chapter?: string;
  topic: string;
  status: number;
}) {
  const map: Record<number, [string, string]> = {
    1: ["schwach", "text-bad"],
    2: ["wackelig", "text-mid"],
    3: ["sitzt", "text-good"],
  };
  const pill = map[status];
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
      <span className="rounded bg-muted px-2 py-0.5 font-medium">{chapter}</span>
      <span>{topic}</span>
      {pill && <span className={`ml-auto font-medium ${pill[1]}`}>{pill[0]}</span>}
    </div>
  );
}

function GradeButton({
  onClick,
  tone,
  label,
  hint,
}: {
  onClick: () => void;
  tone: "bad" | "mid" | "good";
  label: string;
  hint: string;
}) {
  const tones = {
    bad: "border-bad/30 bg-bad-bg text-bad hover:border-bad",
    mid: "border-mid/30 bg-mid-bg text-mid hover:border-mid",
    good: "border-good/30 bg-good-bg text-good hover:border-good",
  };
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col items-center gap-0.5 rounded-lg border px-3 py-3 text-sm font-medium transition-colors ${tones[tone]}`}
    >
      <span className="text-base leading-none">{hint}</span>
      {label}
    </button>
  );
}

function Score({
  label,
  value,
  className,
}: {
  label: string;
  value: number;
  className: string;
}) {
  return (
    <Card className="gap-0 p-4">
      <span className={`text-2xl font-semibold tabular-nums ${className}`}>
        {value}
      </span>
      <span className="text-xs text-muted-foreground">{label}</span>
    </Card>
  );
}
