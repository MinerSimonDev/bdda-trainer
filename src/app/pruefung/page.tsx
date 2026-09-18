import { SiteHeader } from "@/components/site-header";
import { ExamCases } from "@/components/exam-cases";

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
            Originalaufgaben aus den Beispielprüfungen. Erst selbst formulieren —
            laut, wie in der mündlichen Prüfung — dann die Musterantwort
            aufdecken.
          </p>
        </div>
        <ExamCases />
      </main>
    </>
  );
}
