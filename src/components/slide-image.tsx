"use client";

import Image from "next/image";
import { useState } from "react";

export function SlideImage({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block w-full overflow-hidden rounded-lg border bg-white transition-colors hover:border-primary"
        title="Folie vergrößern"
      >
        <Image
          src={`/slides/${src}.jpg`}
          alt={alt}
          width={1100}
          height={619}
          className="h-auto w-full"
          unoptimized
        />
        <span className="pointer-events-none absolute right-2 top-2 rounded bg-foreground/70 px-2 py-0.5 text-[10px] font-medium text-background opacity-0 transition-opacity group-hover:opacity-100">
          Vergrößern
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/70 p-4 backdrop-blur-sm"
        >
          <Image
            src={`/slides/${src}.jpg`}
            alt={alt}
            width={1600}
            height={900}
            className="max-h-full w-auto max-w-full rounded-lg bg-white shadow-2xl"
            unoptimized
          />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-4 rounded-md bg-background px-3 py-1.5 text-sm font-medium shadow"
            style={{ top: "calc(1rem + env(safe-area-inset-top, 0px))" }}
          >
            Schließen
          </button>
        </div>
      )}
    </>
  );
}
