"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SlideImage } from "@/components/slide-image";
import { CHAPTERS } from "@/data/cards";
import type { ExamCase } from "@/lib/types";

export function ExamCaseCard({
  exam,
  badge,
  action,
}: {
  exam: ExamCase;
  /** Zusatzkennzeichnung neben dem Kapitel, z.B. "generiert" */
  badge?: string;
  /** Knopf unter der Aufgabe, z.B. "Nächste Aufgabe" */
  action?: React.ReactNode;
}) {
  const [open, setOpen] = useState<Record<number, boolean>>({});

  return (
    <Card className="gap-4 p-6">
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Pool {exam.ch} · {CHAPTERS.find((c) => c.id === exam.ch)?.name}
          </span>
          {badge ? (
            <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-accent-foreground">
              {badge}
            </span>
          ) : null}
        </div>
        <h2 className="mt-1 text-lg font-semibold tracking-tight">{exam.title}</h2>
        <p className="mt-2 rounded-lg bg-muted px-4 py-3 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Problemstellung: </span>
          {exam.intro}
        </p>
      </div>

      <div className="space-y-4">
        {exam.parts.map((part, pi) => (
          <div key={pi} className="border-t pt-4">
            <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground">
              {part.level}
            </span>
            <p className="mt-2 text-[15px] font-medium leading-snug">{part.q}</p>
            {part.img ? (
              <div className="mt-3">
                <SlideImage src={part.img} alt={`Angabe zu ${part.level}`} />
              </div>
            ) : null}
            {open[pi] ? (
              <div
                className="prose-card mt-3 rounded-lg border-l-2 border-primary bg-muted/50 px-4 py-3 text-sm leading-relaxed text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: part.a }}
              />
            ) : (
              <Button
                variant="outline"
                size="sm"
                className="mt-3"
                onClick={() => setOpen((o) => ({ ...o, [pi]: true }))}
              >
                Musterantwort zeigen
              </Button>
            )}
          </div>
        ))}
      </div>

      {action ? <div className="border-t pt-4">{action}</div> : null}
    </Card>
  );
}
