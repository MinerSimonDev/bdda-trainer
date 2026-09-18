"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { matchesBlank } from "@/lib/study";
import type { LabelTask } from "@/lib/types";

export function LabelExercise({ task }: { task: LabelTask }) {
  const [values, setValues] = useState<string[]>(() => task.spots.map(() => ""));
  const [checked, setChecked] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const hits = task.spots.map((spot, i) => {
    const v = values[i] ?? "";
    if (!v.trim()) return false;
    return [spot.label, ...(spot.alt ?? [])].some((l) => matchesBlank(v, l));
  });
  const correct = hits.filter(Boolean).length;
  const crop = task.crop ?? { x: 0, y: 0, w: 100, h: 100 };

  function reset() {
    setValues(task.spots.map(() => ""));
    setChecked(false);
    setRevealed(false);
  }

  return (
    <Card className="gap-5 p-4 sm:p-6">
      <div>
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-lg font-semibold tracking-tight">{task.title}</h2>
          {checked && (
            <span
              className={`text-sm font-medium tabular-nums ${
                correct === task.spots.length ? "text-good" : "text-mid"
              }`}
            >
              {correct} von {task.spots.length} richtig
            </span>
          )}
        </div>
        {task.intro && (
          <p className="mt-1 text-sm text-muted-foreground">{task.intro}</p>
        )}
      </div>

      <div
        className="relative overflow-hidden rounded-lg border bg-white"
        style={{ aspectRatio: `${(crop.w * 1100) / (crop.h * 619)}` }}
      >
        <div
          className="absolute"
          style={{
            left: `${(-crop.x * 100) / crop.w}%`,
            top: `${(-crop.y * 100) / crop.h}%`,
            width: `${(100 * 100) / crop.w}%`,
            height: `${(100 * 100) / crop.h}%`,
          }}
        >
        <Image
          src={`/slides/${task.img}.jpg`}
          alt={task.title}
          width={1100}
          height={619}
          className="h-full w-full"
          unoptimized
          priority
        />
        {task.spots.map((spot, i) => {
          const show = revealed || (checked && hits[i]);
          return (
            <div
              key={i}
              className={[
                "absolute flex items-center justify-center rounded border text-[10px] font-semibold leading-tight sm:text-xs",
                show
                  ? "border-good bg-good text-white"
                  : checked && !hits[i]
                    ? "border-bad bg-bad text-white"
                    : "border-primary bg-primary text-primary-foreground",
              ].join(" ")}
              style={{
                left: `${spot.x}%`,
                top: `${spot.y}%`,
                width: `${spot.w}%`,
                height: `${spot.h}%`,
              }}
            >
              <span className="px-0.5 text-center">
                {show ? spot.label : i + 1}
              </span>
            </div>
          );
        })}
        </div>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        {task.spots.map((spot, i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              className={[
                "grid size-6 shrink-0 place-items-center rounded text-xs font-semibold",
                checked
                  ? hits[i]
                    ? "bg-good-bg text-good"
                    : "bg-bad-bg text-bad"
                  : "bg-muted text-muted-foreground",
              ].join(" ")}
            >
              {i + 1}
            </span>
            <input
              id={`${task.id}-${i}`}
              value={values[i] ?? ""}
              disabled={checked}
              onChange={(e) => {
                const val = e.target.value;
                setValues((v) => {
                  const next = task.spots.map((_, j) => v[j] ?? "");
                  next[i] = val;
                  return next;
                });
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !checked) {
                  e.preventDefault();
                  setChecked(true);
                }
              }}
              placeholder="Beschriftung…"
              autoComplete="off"
              spellCheck={false}
              className={[
                "w-full rounded-md border bg-background px-3 py-2 text-sm outline-none transition-colors",
                "focus:border-primary focus:ring-2 focus:ring-primary/20",
                checked
                  ? hits[i]
                    ? "border-good bg-good-bg text-good"
                    : "border-bad bg-bad-bg text-bad"
                  : "border-border",
              ].join(" ")}
            />
            {checked && !hits[i] && (
              <span className="shrink-0 text-xs text-muted-foreground">
                → {spot.label}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {!checked ? (
          <>
            <Button className="h-10 px-4" onClick={() => setChecked(true)}>
              Prüfen
            </Button>
            <Button
              variant="ghost"
              className="h-10 px-4"
              onClick={() => {
                setChecked(true);
                setRevealed(true);
              }}
            >
              Lösung zeigen
            </Button>
          </>
        ) : (
          <>
            <Button className="h-10 px-4" onClick={reset}>
              Nochmal
            </Button>
            {!revealed && (
              <Button
                variant="outline"
                className="h-10 px-4"
                onClick={() => setRevealed(true)}
              >
                Alle Beschriftungen zeigen
              </Button>
            )}
          </>
        )}
      </div>
    </Card>
  );
}
