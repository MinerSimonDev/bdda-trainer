"use client";

import { CHAPTERS } from "@/data/cards";

export function ChapterPicker({
  selected,
  onChange,
}: {
  selected: number[];
  onChange: (next: number[]) => void;
}) {
  const toggle = (id: number) =>
    onChange(
      selected.includes(id)
        ? selected.filter((x) => x !== id)
        : [...selected, id].sort((a, b) => a - b)
    );

  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => onChange([])}
        className={chip(selected.length === 0)}
      >
        Alle
      </button>
      {CHAPTERS.map((ch) => (
        <button
          key={ch.id}
          type="button"
          onClick={() => toggle(ch.id)}
          className={chip(selected.includes(ch.id))}
          title={ch.sub}
        >
          {ch.id} · {ch.name}
        </button>
      ))}
    </div>
  );
}

function chip(active: boolean) {
  return [
    "rounded-full border px-3 py-1.5 text-sm transition-colors",
    active
      ? "border-primary bg-primary text-primary-foreground"
      : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground",
  ].join(" ");
}
