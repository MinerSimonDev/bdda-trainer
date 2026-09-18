import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { ChapterGrid } from "@/components/chapter-grid";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/button-link";
import { Card } from "@/components/ui/card";
import { getProgress, getStreak } from "@/lib/actions";
import { chapterStats } from "@/lib/study";
import { CARDS } from "@/data/cards";

const EXAM_DATE = new Date("2026-09-22T08:00:00+02:00");

export default async function Home() {
  const [progress, streak] = await Promise.all([getProgress(), getStreak()]);
  const stats = chapterStats(progress);

  const totals = Object.values(stats).reduce(
    (acc, s) => ({
      total: acc.total + s.total,
      solid: acc.solid + s.solid,
      shaky: acc.shaky + s.shaky,
      weak: acc.weak + s.weak,
    }),
    { total: 0, solid: 0, shaky: 0, weak: 0 }
  );
  const pct = totals.total ? Math.round((totals.solid / totals.total) * 100) : 0;
  const offen = totals.total - totals.solid;

  const daysLeft = Math.max(
    0,
    Math.ceil((EXAM_DATE.getTime() - Date.now()) / 86_400_000)
  );

  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6 sm:py-10">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Dein Stand
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {CARDS.length} Karten aus allen Unterlagen ·{" "}
              {daysLeft > 0 ? (
                <>
                  noch <span className="font-medium text-foreground">{daysLeft} Tage</span> bis zur Matura
                </>
              ) : (
                "Heute ist der Tag"
              )}
            </p>
          </div>
          <div className="flex gap-2">
            <ButtonLink href="/lernen" size="lg">Schwachstellen üben</ButtonLink>
            <ButtonLink href="/pruefung" size="lg" variant="outline">Prüfung</ButtonLink>
          </div>
        </div>

        <div className="mb-6 grid gap-3 sm:grid-cols-3">
          <Card className="gap-1 p-4">
            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Sitzt
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-semibold tabular-nums">{pct}%</span>
              <span className="text-sm text-muted-foreground tabular-nums">
                {totals.solid}/{totals.total}
              </span>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full bg-good" style={{ width: `${pct}%` }} />
            </div>
          </Card>

          <Card className="gap-1 p-4">
            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Noch offen
            </span>
            <span className="text-3xl font-semibold tabular-nums">{offen}</span>
            <span className="text-sm text-muted-foreground">
              davon {totals.weak} schwach, {totals.shaky} wackelig
            </span>
          </Card>

          <Card className="gap-1 p-4">
            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Heute
            </span>
            <span className="text-3xl font-semibold tabular-nums">{streak.today}</span>
            <span className="text-sm text-muted-foreground">
              Karten beantwortet
              {streak.days > 1 ? ` · ${streak.days} Tage in Folge` : ""}
            </span>
          </Card>
        </div>

        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Kapitel
        </h2>
        <ChapterGrid progress={progress} />

        <Card className="mt-6 flex-row items-center gap-4 p-4">
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold tracking-tight">Prüfungssimulation</h3>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Originalaufgaben im Format Reproduktion · Transfer · Reflexion, mit
              ausformulierter Musterantwort.
            </p>
          </div>
          <ButtonLink href="/pruefung" variant="outline">Öffnen</ButtonLink>
        </Card>
      </main>
    </>
  );
}
