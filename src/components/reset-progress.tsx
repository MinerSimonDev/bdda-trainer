"use client";

import { useState } from "react";
import { CHAPTERS } from "@/data/cards";
import { resetProgress } from "@/lib/actions";

export function ResetProgress({
  chapters,
  affected,
  onReset,
}: {
  chapters: number[];
  /** Wie viele Karten in dieser Auswahl bereits einen Stand haben. */
  affected: number;
  onReset: () => void;
}) {
  const [asking, setAsking] = useState(false);
  const [busy, setBusy] = useState(false);
  const [doneAt, setDoneAt] = useState<number | null>(null);

  const scope = chapters.length
    ? chapters.map((id) => CHAPTERS.find((c) => c.id === id)?.name).join(", ")
    : "alle Kapitel";

  async function run() {
    setBusy(true);
    await resetProgress(chapters);
    setBusy(false);
    setAsking(false);
    setDoneAt(Date.now());
    onReset();
  }

  if (doneAt) {
    return (
      <p className="text-sm text-good">
        Stand zurückgesetzt — {scope} fängt wieder bei 0 an.
      </p>
    );
  }

  if (!asking) {
    return (
      <button
        type="button"
        onClick={() => setAsking(true)}
        disabled={!affected}
        className="text-sm text-muted-foreground underline-offset-4 hover:text-bad hover:underline disabled:cursor-not-allowed disabled:opacity-50"
      >
        {affected
          ? `Stand zurücksetzen (${affected} Karten)`
          : "Kein Stand zum Zurücksetzen"}
      </button>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-3 rounded-lg border border-bad/30 bg-bad-bg px-4 py-3">
      <span className="text-sm text-bad">
        Stand für <b>{scope}</b> wirklich löschen? {affected} Karten stehen
        danach wieder auf „neu“.
      </span>
      <div className="ml-auto flex gap-2">
        <button
          type="button"
          onClick={() => setAsking(false)}
          className="rounded-md border border-border bg-background px-3 py-1.5 text-sm"
        >
          Abbrechen
        </button>
        <button
          type="button"
          onClick={run}
          disabled={busy}
          className="rounded-md bg-bad px-3 py-1.5 text-sm font-medium text-background disabled:opacity-60"
        >
          {busy ? "Läuft…" : "Zurücksetzen"}
        </button>
      </div>
    </div>
  );
}
