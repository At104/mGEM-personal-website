"use client";

import React, { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import ButtonLink from "./ButtonLink";
import { ContainerScroll } from "./ui/ContainerScroll";
import { SplitChars } from "./SplitChars";

const mgemSize =
  "font-bold text-7xl md:text-9xl lg:text-9xl xl:text-[14rem]";

function MgemWordmark() {
  return (
    <div
      className="hero-mgem-wordmark font-montserrat select-none text-center"
      aria-label="mGEM"
    >
      <div className={`italic leading-none text-maroon ${mgemSize}`}>mGEM</div>
      <div className={`stroke reverse-italic inline-block leading-none ${mgemSize}`}>
        mGEM
      </div>
      <div className={`italic leading-none text-maroon ${mgemSize}`}>mGEM</div>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const subRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.from(".hero-mgem-wordmark > div", {
        autoAlpha: 0,
        y: 40,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.12,
      });

      const chars = subRef.current?.querySelectorAll("[data-hero-char]");
      if (chars?.length) {
        gsap.from(chars, {
          yPercent: 130,
          rotateX: -90,
          opacity: 0,
          filter: "blur(8px)",
          transformOrigin: "50% 100%",
          duration: 1,
          ease: "power4.out",
          stagger: 0.028,
          scrollTrigger: {
            trigger: subRef.current,
            start: "top 85%",
            once: true,
          },
        });
      }

      gsap.from(".hero-sub-body, .hero-sub-actions", {
        autoAlpha: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: subRef.current,
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="home" className="overflow-hidden bg-paper">
      <div className="bg-dots absolute inset-0 opacity-50" aria-hidden />
      <div className="glow left-[8%] top-[12%] h-72 w-72 bg-leaf/15" aria-hidden />
      <div className="glow right-[10%] top-[18%] h-64 w-64 bg-cyan/10" aria-hidden />

      <ContainerScroll titleComponent={<MgemWordmark />}>
        <video
          className="mx-auto aspect-video h-full w-full object-cover object-center"
          src="/Videos/what_is_igemf.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label="What is iGEM — McMaster iGEM"
        />
      </ContainerScroll>

      {/* Headline + CTAs — sits directly under the scroll hero */}
      <div ref={subRef} className="relative mx-auto max-w-7xl px-6 pb-20 pt-4 sm:pb-24">
        <p className="hero-sub-body inline-flex items-center gap-2 rounded-full border border-leaf/25 bg-paper-warm/80 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-leaf-deep">
          <span className="h-2 w-2 animate-pulse rounded-full bg-leaf" />
          McMaster University · iGEM
        </p>

        <h1
          className="mt-6 max-w-4xl font-display text-[2.5rem] font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          style={{ perspective: "600px" }}
        >
          <span className="block pb-1">
            <SplitChars text="Engineering " />
            <SplitChars text="synthetic biology" brand />
          </span>
          <span className="mt-1 block">
            <SplitChars text="for real problems." />
          </span>
        </h1>

        <div className="hero-sub-actions mt-9 flex flex-wrap items-center gap-4">
          <ButtonLink href="/projects">Explore projects</ButtonLink>
          <ButtonLink href="/get-involved" variant="outline">
            Join mGEM
          </ButtonLink>
          <span className="rounded-full bg-amber px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider sm:text-xs">
            <span className="text-gold-deep">Gold</span>
            <span className="text-ink"> · iGEM 2025</span>
          </span>
        </div>
      </div>

      <div className="section-divider" aria-hidden />
    </section>
  );
}
