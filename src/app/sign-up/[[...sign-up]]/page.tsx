import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 px-4 py-12">
      <div className="text-center">
        <div className="mx-auto mb-4 grid size-12 place-items-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
          BD
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">Konto anlegen</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Mit Google anmelden — dein Fortschritt gehört nur dir.
        </p>
      </div>
      <SignUp />
    </main>
  );
}
