import { SiteHeader } from "@/components/site-header";
import { ExamCases } from "@/components/exam-cases";
import { ExamGenerator } from "@/components/exam-generator";

export default function PruefungPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-6 sm:py-10">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">
            Prüfungssimulation
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Aufgaben im Format Reproduktion · Transfer · Reflexion. Erst selbst
            formulieren — laut, wie in der mündlichen Prüfung — dann die
            Musterantwort aufdecken.
          </p>
        </div>

        <ExamGenerator />

        <div className="mt-10 mb-6 border-t pt-8">
          <h2 className="text-lg font-semibold tracking-tight">
            Originale Beispielprüfungen
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Die zwei Angaben aus dem Unterricht, an denen sich der Generator
            orientiert.
          </p>
        </div>

        <ExamCases />
      </main>
    </>
  );
}
