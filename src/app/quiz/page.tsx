import { SiteHeader } from "@/components/site-header";
import { QuizSession } from "@/components/quiz-session";
import { getProgress } from "@/lib/actions";

export default async function QuizPage({ searchParams }: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const progress = await getProgress();
  const params = await searchParams;
  const raw = params?.ch;
  const initial = (Array.isArray(raw) ? raw : raw ? [raw] : [])
    .flatMap((v) => v.split(","))
    .map((v) => Number(v))
    .filter((n) => Number.isInteger(n) && n >= 1 && n <= 8);

  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-6 sm:py-10">
        <QuizSession initialProgress={progress} initialChapters={initial} />
      </main>
    </>
  );
}
