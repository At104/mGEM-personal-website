"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { heroTagline } from "@/lib/content";
import ButtonLink from "./ButtonLink";
import ClientOnly from "./ClientOnly";
import DnaScene from "./DnaScene";
import Parallax from "./Parallax";

const dnaFallback = (
  <div className="h-full w-full animate-pulse rounded-full bg-leaf/10" aria-hidden />
);

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".hero-badge", { autoAlpha: 0, y: 14, duration: 0.5 })
        .from(".hero-line", { yPercent: 120, duration: 0.95, stagger: 0.12 }, "-=0.2")
        .from(".hero-body", { autoAlpha: 0, y: 24, duration: 0.7 }, "-=0.5")
        .from(".hero-actions", { autoAlpha: 0, y: 16, duration: 0.6 }, "-=0.4")
        .from(".hero-visual", { autoAlpha: 0, scale: 0.92, duration: 1 }, "-=0.8");

      gsap.to(".hero-3d", {
        y: -80,
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: true },
      });
    },
    { scope: ref }
  );

  return (
    <section ref={ref} className="relative min-h-[92vh] overflow-hidden bg-paper pt-28 sm:pt-32">
      <div className="bg-dots absolute inset-0" />
      <div className="glow left-[5%] top-[10%] h-80 w-80 bg-leaf/20" />
      <div className="glow right-[8%] top-[20%] h-72 w-72 bg-cyan/15" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 lg:min-h-[calc(92vh-8rem)] lg:grid-cols-2 lg:gap-8">
        <div className="z-10">
          <p className="hero-badge inline-flex items-center gap-2 rounded-full border border-leaf/25 bg-paper-warm/80 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-leaf-deep backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-leaf" />
            McMaster University · iGEM
          </p>

          <h1 className="mt-6 font-display text-[2.75rem] font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="hero-line block overflow-hidden pb-1">
              <span className="block">Engineering</span>
            </span>
            <span className="hero-line block overflow-hidden pb-1">
              <span className="text-gradient block">synthetic biology</span>
            </span>
            <span className="hero-line block overflow-hidden pb-2">
              <span className="block">for real problems.</span>
            </span>
          </h1>

          <p className="hero-body mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
            {heroTagline}
          </p>

          <div className="hero-actions mt-9 flex flex-wrap gap-4">
            <ButtonLink href="/projects">Explore projects</ButtonLink>
            <ButtonLink href="/get-involved" variant="outline">
              Join mGEM
            </ButtonLink>
          </div>
        </div>

        <div className="hero-visual relative mx-auto aspect-square w-full max-w-lg lg:max-w-none">
          {/* 3D helix */}
          <div className="hero-3d absolute inset-0 z-0 opacity-90">
            <ClientOnly fallback={dnaFallback}>
              <DnaScene />
            </ClientOnly>
          </div>

          {/* Floating photo — new position, not old layout */}
          <Parallax speed={0.12} className="absolute -bottom-6 -left-4 z-10 w-[46%] sm:-left-8">
            <div className="overflow-hidden rounded-2xl border-4 border-paper-warm shadow-2xl shadow-leaf/15">
              <Image
                src="/WetLab_TeamPhoto.jpg"
                alt="Wet Lab members in the lab"
                width={320}
                height={240}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </Parallax>

          <Parallax speed={0.08} className="absolute -right-2 top-8 z-10 w-[42%] sm:-right-6">
            <div className="rotate-3 overflow-hidden rounded-2xl border-4 border-paper-warm shadow-2xl">
              <Image
                src="/JamboreePhoto.png"
                alt="mGEM at the iGEM Grand Jamboree"
                width={300}
                height={220}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </Parallax>

          <span className="absolute left-1/2 top-4 z-20 -translate-x-1/2 rounded-full bg-amber px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider shadow-lg sm:text-xs">
            <span className="text-gold-deep">Gold</span>
            <span className="text-ink"> · iGEM 2025</span>
          </span>
        </div>
      </div>

      <div className="section-divider" aria-hidden />
    </section>
  );
}
