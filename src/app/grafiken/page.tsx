import { SiteHeader } from "@/components/site-header";
import { LabelExercise } from "@/components/label-exercise";
import { CHAPTERS } from "@/data/cards";
import { LABEL_TASKS } from "@/data/labels";

export default function GrafikenPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-6 sm:py-10">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">Grafiken</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Die Skizzen, die du in der Prüfung zeichnen und erklären können musst.
            Die Beschriftungen sind abgedeckt — tippe sie selbst ein.
          </p>
        </div>

        <div className="space-y-6">
          {LABEL_TASKS.map((task) => (
            <div key={task.id}>
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {CHAPTERS.find((c) => c.id === task.ch)?.name}
              </div>
              <LabelExercise task={task} />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
