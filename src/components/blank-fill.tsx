"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { matchesBlank } from "@/lib/study";

export function BlankFill({
  cardId,
  blanks,
  onDone,
}: {
  cardId: string;
  blanks: string[];
  onDone: (hits: number) => void;
}) {
  const [values, setValues] = useState<string[]>(() => blanks.map(() => ""));
  const [checked, setChecked] = useState(false);
  const firstRef = useRef<HTMLInputElement>(null);

  /** Jede Eingabe zählt, wenn sie zu irgendeinem noch offenen Begriff passt. */
  const resolve = () => {
    const open = blanks.map((b, i) => ({ b, i }));
    const hitFor: (number | null)[] = blanks.map(() => null);
    blanks.forEach((_, vi) => {
      const v = values[vi] ?? "";
      const found = open.findIndex((o) => matchesBlank(v, o.b));
      if (found !== -1) {
        hitFor[vi] = open[found].i;
        open.splice(found, 1);
      }
    });
    return hitFor;
  };

  const hits = checked ? resolve() : [];
  const correctCount = hits.filter((h) => h !== null).length;

  function check() {
    setChecked(true);
    onDone(resolve().filter((h) => h !== null).length);
  }

  return (
    <div className="rounded-lg border bg-muted/40 p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Begriffe eintippen
        </span>
        {checked && (
          <span
            className={`text-xs font-medium tabular-nums ${
              correctCount === blanks.length ? "text-good" : "text-mid"
            }`}
          >
            {correctCount} von {blanks.length} richtig
          </span>
        )}
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        {blanks.map((b, i) => {
          const hit = checked ? hits[i] !== null : false;
          return (
            <div key={i} className="relative">
              <input
                ref={i === 0 ? firstRef : undefined}
                id={`${cardId}-blank-${i}`}
                value={values[i] ?? ""}
                disabled={checked}
                onChange={(e) => {
                  const val = e.target.value;
                  setValues((v) => {
                    const next = blanks.map((_, j) => v[j] ?? "");
                    next[i] = val;
                    return next;
                  });
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    if (!checked) check();
                  }
                }}
                placeholder={`${i + 1}.`}
                autoComplete="off"
                spellCheck={false}
                className={[
                  "w-full rounded-md border bg-background px-3 py-2 text-sm outline-none transition-colors",
                  "focus:border-primary focus:ring-2 focus:ring-primary/20",
                  checked
                    ? hit
                      ? "border-good bg-good-bg text-good"
                      : "border-bad bg-bad-bg text-bad"
                    : "border-border",
                ].join(" ")}
              />
              {checked && !hit && (
                <span className="mt-1 block px-1 text-xs text-muted-foreground">
                  → {b}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {!checked && (
        <Button
          variant="outline"
          size="sm"
          className="mt-3 h-8 px-3"
          onClick={check}
        >
          Prüfen
        </Button>
      )}
    </div>
  );
}
