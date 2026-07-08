import React, { useRef } from "react";
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
      className="relative flex min-h-screen items-center overflow-hidden bg-maroon-deep text-white"
      aria-label="What is iGEM"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <DnaFlowBackground triggerRef={sectionRef} />
      </div>
      <div className="bg-dots-dark pointer-events-none absolute inset-0 z-[1] opacity-20" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">
        <div className="relative max-w-xl">
          <div
            className="pointer-events-none absolute -inset-x-6 -inset-y-8 -z-10 rounded-3xl bg-gradient-to-r from-maroon-deep/75 via-maroon-deep/35 to-transparent"
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
