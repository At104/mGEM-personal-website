"use client";

import ClientOnly from "./ClientOnly";
import DnaScene from "./DnaScene";

const fallback = (
  <div className="h-full min-h-[280px] w-full animate-pulse rounded-3xl bg-leaf/10 sm:min-h-[360px]" aria-hidden />
);

/** Reusable 3D DNA helix showcase — used on About and other inner pages. */
export default function DnaShowcase({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <ClientOnly fallback={fallback}>
        <div className="relative mx-auto aspect-square w-full max-w-md">
          <DnaScene />
        </div>
      </ClientOnly>
    </div>
  );
}
