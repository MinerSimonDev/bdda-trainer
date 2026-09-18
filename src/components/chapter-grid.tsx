import Link from "next/link";
import { CHAPTERS } from "@/data/cards";
import { Card } from "@/components/ui/card";
import type { ProgressMap } from "@/lib/types";
import { chapterStats } from "@/lib/study";

export function ChapterGrid({ progress }: { progress: ProgressMap }) {
  const stats = chapterStats(progress);

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {CHAPTERS.map((ch) => {
        const s = stats[ch.id] ?? { total: 0, solid: 0, shaky: 0, weak: 0, fresh: 0 };
        const pct = s.total ? Math.round((s.solid / s.total) * 100) : 0;
        return (
          <Card key={ch.id} className="gap-0 p-4 transition-colors hover:border-primary/40">
            <Link href={`/lernen?ch=${ch.id}`} className="flex flex-col gap-3">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="grid size-5 shrink-0 place-items-center rounded bg-muted text-[11px] font-semibold text-muted-foreground">
                      {ch.id}
                    </span>
                    <h3 className="truncate font-semibold tracking-tight">{ch.name}</h3>
                  </div>
                  <p className="mt-1 truncate text-xs text-muted-foreground">{ch.sub}</p>
                </div>
                <span className="shrink-0 text-lg font-semibold tabular-nums">{pct}%</span>
              </div>

              <div className="flex h-2 w-full overflow-hidden rounded-full bg-muted">
                <Bar n={s.solid} total={s.total} className="bg-good" />
                <Bar n={s.shaky} total={s.total} className="bg-mid" />
                <Bar n={s.weak} total={s.total} className="bg-bad" />
              </div>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground tabular-nums">
                <Dot className="bg-good" label={`${s.solid} sitzt`} />
                <Dot className="bg-mid" label={`${s.shaky} wackelig`} />
                <Dot className="bg-bad" label={`${s.weak} schwach`} />
                <span className="ml-auto">{s.total} Karten</span>
              </div>
            </Link>
          </Card>
        );
      })}
    </div>
  );
}

function Bar({ n, total, className }: { n: number; total: number; className: string }) {
  if (!n || !total) return null;
  return <div className={className} style={{ width: `${(n / total) * 100}%` }} />;
}

function Dot({ className, label }: { className: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={`size-1.5 rounded-full ${className}`} />
      {label}
    </span>
  );
}
