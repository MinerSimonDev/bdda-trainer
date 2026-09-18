"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CHAPTERS, EXAM_CASES } from "@/data/cards";

export function ExamCases() {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  return (
    <div className="space-y-6">
      {EXAM_CASES.map((exam, ei) => (
        <Card key={ei} className="gap-4 p-6">
          <div>
            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {CHAPTERS.find((c) => c.id === exam.ch)?.name}
            </span>
            <h2 className="mt-1 text-lg font-semibold tracking-tight">
              {exam.title}
            </h2>
            <p className="mt-2 rounded-lg bg-muted px-4 py-3 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Problemstellung: </span>
              {exam.intro}
            </p>
          </div>

          <div className="space-y-4">
            {exam.parts.map((part, pi) => {
              const key = `${ei}-${pi}`;
              const shown = open[key];
              return (
                <div key={pi} className="border-t pt-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground">
                      {part.level}
                    </span>
                  </div>
                  <p className="mt-2 text-[15px] font-medium leading-snug">
                    {part.q}
                  </p>
                  {shown ? (
                    <div
                      className="prose-card mt-3 rounded-lg border-l-2 border-primary bg-muted/50 px-4 py-3 text-sm leading-relaxed text-muted-foreground"
                      dangerouslySetInnerHTML={{ __html: part.a }}
                    />
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-3"
                      onClick={() => setOpen((o) => ({ ...o, [key]: true }))}
                    >
                      Musterantwort zeigen
                    </Button>
                  )}
                </div>
              );
            })}
          </div>
        </Card>
      ))}
    </div>
  );
}
