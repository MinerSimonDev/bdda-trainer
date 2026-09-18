"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/button-link";
import { Card } from "@/components/ui/card";
import { ChapterPicker } from "@/components/chapter-picker";
import { BlankFill } from "@/components/blank-fill";
import { SlideImage } from "@/components/slide-image";
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
  const [revealed, setRevealed] = useState(false);
  const [tally, setTally] = useState({ good: 0, half: 0, bad: 0 });

  const available = useMemo(() => poolFor(chapters).length, [chapters]);

  const start = useCallback(() => {
    setQueue(buildQueue(poolFor(chapters), progress, length));
    setIndex(0);
    setRevealed(false);
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
      setRevealed(false);
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
      if (!revealed && (e.code === "Space" || e.key === " " || e.key === "Enter")) {
        e.preventDefault();
        setRevealed(true);
        return;
      }
      if (revealed) {
        if (e.key === "1") grade("bad");
        if (e.key === "2") grade("half");
        if (e.key === "3") grade("good");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [card, revealed, grade]);

  if (queue === null) {
    const withBlanks = poolFor(chapters).filter((c) => c.blanks?.length).length;
    const withImg = poolFor(chapters).filter((c) => c.img).length;
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
            {available} Karten im Pool · {withBlanks} mit Ausfüllübung ·{" "}
            {withImg} mit Folie
          </span>
        </div>
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
          {index + 1}/{queue.length}
        </span>
      </div>

      <Card className="gap-5 p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span className="rounded bg-muted px-2 py-0.5 font-medium">
            {chapter?.name}
          </span>
          <span>{card!.topic}</span>
          <StatusPill status={statusOf(progress, card!.id)} />
        </div>

        <p
          className="prose-card text-balance text-xl font-medium leading-snug sm:text-2xl"
          dangerouslySetInnerHTML={{ __html: card!.q }}
        />

        {!revealed && hasBlanks && (
          <BlankFill
            cardId={card!.id}
            blanks={card!.blanks!}
            onDone={() => undefined}
          />
        )}

        {revealed ? (
          <div className="space-y-4 border-t pt-5">
            <div
              className="prose-card text-[15px] leading-relaxed text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: card!.a }}
            />
            {card!.img && (
              <SlideImage src={card!.img} alt={`Folie zu ${card!.topic}`} />
            )}
          </div>
        ) : (
          <Button
            size="lg"
            variant="outline"
            className="h-12 w-full"
            onClick={() => setRevealed(true)}
          >
            Antwort zeigen
            <kbd className="ml-2 rounded border px-1.5 py-0.5 text-[10px] text-muted-foreground">
              Leertaste
            </kbd>
          </Button>
        )}
      </Card>

      {revealed && (
        <div className="grid grid-cols-3 gap-2">
          <GradeButton onClick={() => grade("bad")} tone="bad" label="Nicht gewusst" hint="1" />
          <GradeButton onClick={() => grade("half")} tone="mid" label="Halb" hint="2" />
          <GradeButton onClick={() => grade("good")} tone="good" label="Gewusst" hint="3" />
        </div>
      )}
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
      {label}
      <span className="text-[10px] opacity-60">Taste {hint}</span>
    </button>
  );
}

function StatusPill({ status }: { status: number }) {
  if (status === 0) return null;
  const map: Record<number, [string, string]> = {
    1: ["schwach", "text-bad"],
    2: ["wackelig", "text-mid"],
    3: ["sitzt", "text-good"],
  };
  const [label, cls] = map[status];
  return <span className={`ml-auto font-medium ${cls}`}>{label}</span>;
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
