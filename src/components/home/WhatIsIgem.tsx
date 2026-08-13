import { useRef } from "react";
import { HiArrowRight } from "react-icons/hi";
import { igemIntro } from "@/lib/content";
import ButtonLink from "@/components/ui/ButtonLink";
import DnaFlowBackground from "@/components/home/DnaFlowBackground";

/** What is iGEM — intro copy with full-width DNA helix background. */
export default function WhatIsIgem() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-0 items-center overflow-hidden bg-maroon-deep text-white lg:min-h-screen"
      aria-label="What is iGEM"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <DnaFlowBackground triggerRef={sectionRef} />
      </div>
      <div className="bg-dots-dark pointer-events-none absolute inset-0 z-[1] opacity-20" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-6 lg:py-24">
        <div className="relative max-w-xl">
          <div
            className="pointer-events-none absolute -inset-x-4 -inset-y-6 -z-10 rounded-3xl bg-gradient-to-b from-maroon-deep/90 via-maroon-deep/70 to-maroon-deep/40 sm:-inset-x-6 sm:-inset-y-8 sm:bg-gradient-to-r sm:from-maroon-deep/75 sm:via-maroon-deep/35 sm:to-transparent"
            aria-hidden
          />
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.35em] text-maroon-light">
            The competition
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">What is iGEM?</h2>
          <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">{igemIntro}</p>
          <ButtonLink
            href="/about-us"
            variant="outline"
            className="mt-8 border-0 bg-white text-maroon-deep shadow-lg hover:bg-white/90 hover:text-maroon-deep"
          >
            About McMaster iGEM <HiArrowRight aria-hidden />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
