import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

export async function SiteHeader() {
  const { userId } = await auth();

  return (
    <header className="sticky top-0 z-30 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center gap-2 px-4 sm:gap-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="grid size-7 place-items-center rounded-md bg-primary text-[11px] font-bold text-primary-foreground">
            BD
          </span>
          <span className="hidden tracking-tight sm:inline">BDDA Trainer</span>
        </Link>
        <nav className="ml-1 flex gap-0.5 text-sm text-muted-foreground sm:ml-2 sm:gap-1">
          <Link href="/lernen" className="rounded-md px-2 py-1.5 hover:bg-muted hover:text-foreground sm:px-2.5">
            Lernen
          </Link>
          <Link href="/quiz" className="rounded-md px-2 py-1.5 hover:bg-muted hover:text-foreground sm:px-2.5">
            Quiz
          </Link>
          <Link href="/pruefung" className="rounded-md px-2 py-1.5 hover:bg-muted hover:text-foreground sm:px-2.5">
            Prüfung
          </Link>
        </nav>
        <div className="ml-auto flex items-center">
          {userId ? <UserButton /> : null}
        </div>
      </div>
    </header>
  );
}
