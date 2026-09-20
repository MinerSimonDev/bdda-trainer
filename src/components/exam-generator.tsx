"use client";

import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ExamCaseCard } from "@/components/exam-case-card";
import { CHAPTERS } from "@/data/cards";
import type { ExamCase } from "@/lib/types";

const POOLS = CHAPTERS.filter((c) => c.id <= 7);

const WAITING = [
  "Pool wird gelesen …",
  "Problemstellung wird gebaut …",
  "Reproduktion, Transfer, Reflexion …",
  "Musterantworten werden ausformuliert …",
];

export function ExamGenerator() {
  const [pool, setPool] = useState<number | null>(null);
  const [focus, setFocus] = useState("");
  const [busy, setBusy] = useState(false);
  const [step, setStep] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [exams, setExams] = useState<ExamCase[]>([]);
  const top = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!busy) return;
    const t = setInterval(() => setStep((s) => (s + 1) % WAITING.length), 6000);
    return () => clearInterval(t);
  }, [busy]);

  async function generate(chOverride?: number) {
    const ch =
      chOverride ?? pool ?? POOLS[Math.floor(Math.random() * POOLS.length)].id;
    setBusy(true);
    setStep(0);
    setError(null);
    try {
      const res = await fetch("/api/pruefung", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ch,
          focus,
          avoid: exams.filter((e) => e.ch === ch).map((e) => e.title),
        }),
      });
      if (!res.headers.get("content-type")?.includes("application/json")) {
        throw new Error("Sitzung abgelaufen. Seite neu laden und noch einmal anmelden.");
      }
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Die Aufgabe konnte nicht erzeugt werden.");
      setExams((prev) => [data.exam as ExamCase, ...prev]);
      top.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-6">
      <Card className="gap-4 p-6">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">Neue Aufgabe erzeugen</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Im Format der Beispielprüfungen, fachlich nur aus dem Stoff des gewählten
            Pools.
          </p>
        </div>

        <div>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Pool
          </span>
          <div className="mt-2 flex flex-wrap gap-2">
            <button type="button" onClick={() => setPool(null)} className={chip(pool === null)}>
              Zufall
            </button>
            {POOLS.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setPool(c.id)}
                className={chip(pool === c.id)}
                title={c.sub}
              >
                {c.id} · {c.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="focus"
            className="text-xs font-medium uppercase tracking-wide text-muted-foreground"
          >
            Schwerpunkt (optional)
          </label>
          <input
            id="focus"
            value={focus}
            onChange={(e) => setFocus(e.target.value)}
            placeholder="z.B. CAP-Theorem, Cassandra-Konsistenz, k-Means"
            className="mt-2 w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
          />
        </div>

        <div className="flex items-center gap-3">
          <Button onClick={() => generate()} disabled={busy}>
            {busy ? "Läuft …" : "Aufgabe erzeugen"}
          </Button>
          {busy ? (
            <span className="text-sm text-muted-foreground">{WAITING[step]}</span>
          ) : (
            <span className="text-sm text-muted-foreground">
              Dauert etwa eine halbe Minute.
            </span>
          )}
        </div>

        {error ? (
          <p className="rounded-lg border-l-2 border-destructive bg-destructive/10 px-4 py-3 text-sm text-destructive">
            {error}
          </p>
        ) : null}
      </Card>

      <div ref={top} className="scroll-mt-20 space-y-6">
        {busy ? (
          <Card className="gap-3 p-6">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-1/2" />
          </Card>
        ) : null}

        {exams.map((exam, i) => (
          <ExamCaseCard
            key={`${exam.title}-${i}`}
            exam={exam}
            badge="generiert"
            action={
              <Button variant="outline" size="sm" onClick={() => generate(exam.ch)} disabled={busy}>
                Noch eine aus Pool {exam.ch}
              </Button>
            }
          />
        ))}
      </div>
    </div>
  );
}

function chip(active: boolean) {
  return [
    "rounded-full border px-3 py-1.5 text-sm transition-colors",
    active
      ? "border-primary bg-primary text-primary-foreground"
      : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground",
  ].join(" ");
}
