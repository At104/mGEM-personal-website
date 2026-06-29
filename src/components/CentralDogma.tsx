
import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { igemIntro } from "@/lib/content";
import ButtonLink from "./ButtonLink";
import DnaShowcase from "./DnaShowcase";

/** What is iGEM copy + DNA helix visual. */
export default function CentralDogma() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-maroon-deep text-white"
      aria-label="What is iGEM"
    >
      <div className="bg-dots-dark absolute inset-0 opacity-40" />
      <div className="glow left-1/4 top-1/3 h-96 w-96 -translate-x-1/2 bg-maroon/20" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-12 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.35em] text-maroon-light">
            The competition
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">What is iGEM?</h2>
          <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">{igemIntro}</p>
          <ButtonLink href="/about-us" variant="ghost" className="mt-8 border-white/20">
            About mGEM <HiArrowRight aria-hidden />
          </ButtonLink>
        </div>

        <DnaShowcase className="mx-auto w-full max-w-xl" orientation="horizontal" bright />
      </div>
    </section>
  );
}
