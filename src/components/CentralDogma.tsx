
import React, { useRef } from "react";
import { HiArrowRight } from "react-icons/hi";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { igemIntro } from "@/lib/content";
import ButtonLink from "./ButtonLink";

function MiniHelix({ className, opacity = 1 }: { className?: string; opacity?: number }) {
  const dots = Array.from({ length: 10 }, (_, i) => {
    const t = (i / 9) * Math.PI * 2;
    return {
      x1: 50 + Math.cos(t) * 22,
      y1: 20 + i * 14,
      x2: 50 + Math.cos(t + Math.PI) * 22,
      y2: 20 + i * 14,
      c1: ["#7A003C", "#17B6C9", "#7B6EF6", "#F4B740"][i % 4],
      c2: ["#17B6C9", "#7B6EF6", "#FF6B6B", "#7A003C"][(i + 2) % 4],
    };
  });

  return (
    <svg viewBox="0 0 100 160" className={className} style={{ opacity }} aria-hidden>
      {dots.map((d, i) => (
        <g key={i}>
          <line x1={d.x1} y1={d.y1} x2={d.x2} y2={d.y2} stroke="white" strokeOpacity="0.15" strokeWidth="1" />
          <circle cx={d.x1} cy={d.y1} r="4" fill={d.c1} />
          <circle cx={d.x2} cy={d.y2} r="4" fill={d.c2} />
        </g>
      ))}
    </svg>
  );
}

function RnaStrand({ className, opacity = 1 }: { className?: string; opacity?: number }) {
  return (
    <svg viewBox="0 0 120 80" className={className} style={{ opacity }} aria-hidden>
      <path d="M10 40 Q30 10, 50 40 T90 40 T110 40" fill="none" stroke="#F4B740" strokeWidth="2.5" strokeLinecap="round" />
      {[20, 40, 60, 80, 100].map((x, i) => (
        <circle key={i} cx={x} cy={40 + Math.sin(i) * 8} r="5" fill="#F4B740" fillOpacity="0.9" />
      ))}
    </svg>
  );
}

function ProteinShape({ className, opacity = 1 }: { className?: string; opacity?: number }) {
  return (
    <svg viewBox="0 0 120 100" className={className} style={{ opacity }} aria-hidden>
      <path
        d="M60 12 C85 12, 98 35, 95 55 C92 78, 75 92, 60 92 C38 92, 22 72, 25 50 C28 28, 38 12, 60 12Z"
        fill="#7A003C"
        fillOpacity="0.25"
        stroke="#FF6B6B"
        strokeWidth="2"
      />
      {[[45, 35], [60, 28], [75, 38], [52, 55], [68, 58], [60, 72]].map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r="6"
          fill={["#98f898", "#17B6C9", "#7B6EF6", "#F4B740", "#FF6B6B", "#98f898"][i]}
        />
      ))}
    </svg>
  );
}

function FlowArrowHead({ className }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className ?? ""}`}>
      <div className="h-px w-3 bg-gradient-to-r from-transparent to-white/30 sm:w-4" />
      <svg width="20" height="12" viewBox="0 0 20 12" className="shrink-0" aria-hidden>
        <path d="M0 6h14M10 1l5 5-5 5" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" fill="none" />
      </svg>
      <div className="h-px w-3 bg-gradient-to-l from-transparent to-white/30 sm:w-4" />
    </div>
  );
}

function FlowArrowLabel({ label, className }: { label: string; className?: string }) {
  return (
    <p className={`mt-1 text-center font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-white/80 sm:text-xs ${className ?? ""}`}>
      {label}
    </p>
  );
}

/** What is iGEM copy + central dogma scroll visual (DNA → RNA → Protein). */
export default function CentralDogma() {
  const root = useRef<HTMLElement>(null);
  const dnaAnimation = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const buildTimeline = (trigger: HTMLElement | null, start = "top top") => {
        if (!trigger || !root.current) return;

        gsap.set(".cd-vis-rna", { autoAlpha: 0.2, scale: 0.8 });
        gsap.set(".cd-vis-protein", { autoAlpha: 0.2, scale: 0.8 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger,
            start,
            end: "+=2000",
            scrub: 0.5,
            pin: root.current,
          },
        });

        tl.fromTo(".cd-flow-line", { scaleX: 0 }, { scaleX: 1, ease: "none" }, 0)
          .to(".cd-vis-dna", { autoAlpha: 0.25, scale: 0.85 }, 0.28)
          .to(".cd-vis-rna", { autoAlpha: 1, scale: 1, duration: 0.08, ease: "power2.out" }, 0.28)
          .to(".cd-vis-protein", { autoAlpha: 0.2, scale: 0.8 }, 0.32)
          .to(".cd-arrow-1, .cd-flow-transcription-label", { autoAlpha: 1 }, 0.34)
          .to(".cd-vis-rna", { autoAlpha: 0.25, scale: 0.85, duration: 0.08, ease: "power2.in" }, 0.62)
          .to(".cd-vis-protein", { autoAlpha: 1, scale: 1, duration: 0.08, ease: "power2.out" }, 0.66)
          .to(".cd-arrow-2, .cd-flow-translation-label", { autoAlpha: 1 }, 0.68)
          .to(".cd-vis-dna, .cd-vis-rna, .cd-vis-protein", { autoAlpha: 1, scale: 1, duration: 0.12, ease: "power2.out" }, 0.85);

        return tl;
      };

      const scrollLockStart = () =>
        getComputedStyle(root.current!).getPropertyValue("--cd-scroll-lock-start").trim() || "top top";

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        buildTimeline(root.current, scrollLockStart());
      });

      mm.add("(min-width: 640px) and (max-width: 1023px)", () => {
        buildTimeline(dnaAnimation.current, scrollLockStart());
      });

      mm.add("(max-width: 639px)", () => {
        buildTimeline(dnaAnimation.current, scrollLockStart());
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="central-dogma-section relative flex min-h-screen items-center overflow-hidden bg-maroon-deep text-white"
      aria-label="What is iGEM and the central dogma of molecular biology"
    >
      <div className="bg-dots-dark absolute inset-0 opacity-40" />
      <div className="glow left-1/4 top-1/3 h-96 w-96 -translate-x-1/2 bg-maroon/20" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-12 lg:grid-cols-2 lg:gap-16">
        {/* What is iGEM — static copy */}
        <div className="max-w-xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.35em] text-coral">
            The competition
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">What is iGEM?</h2>
          <p className="mt-5 text-base leading-relaxed text-white/90 sm:text-lg">{igemIntro}</p>
          <p className="mt-4 text-sm leading-relaxed text-white/90">
            Genetic information flows{" "}
            <span className="text-cyan">DNA</span>
            {" → "}
            <span className="text-amber">RNA</span>
            {" → "}
            <span className="text-coral">Protein</span>
            {" — scroll to see the central dogma in action."}
          </p>
          <ButtonLink href="/about-us" variant="ghost" className="mt-8 border-white/20">
            About mGEM <HiArrowRight aria-hidden />
          </ButtonLink>
        </div>

        {/* DNA animation — title, flow line, DNA/RNA/Protein, transcription/translation */}
        <div className="relative mx-auto w-full max-w-lg">
          <div ref={dnaAnimation} className="dna-animation relative -translate-x-6 -translate-y-8 sm:-translate-x-10 sm:-translate-y-10">
            <div className="cd-flow-line absolute left-[18%] right-[8%] top-[calc(50%+12px)] h-0.5 origin-left -translate-y-1/2 scale-x-0 bg-gradient-to-r from-cyan via-amber to-maroon opacity-40" />

            <div className="relative grid grid-cols-[1fr_auto_1fr_auto_1fr] grid-rows-[auto_auto_auto] items-center gap-x-2 gap-y-0 sm:gap-x-4">
              <p className="cd-flow-central-dogma col-start-3 col-end-4 row-start-1 mb-6 text-center font-mono text-xs font-bold uppercase tracking-[0.35em] text-white sm:text-sm">
                Central dogma
              </p>

              <div className="cd-vis-dna relative col-start-1 row-start-2 flex flex-col items-center self-end">
                <div className="absolute inset-0 rounded-3xl bg-cyan/10 blur-2xl" />
                <div className="cd-flow-dna relative">
                  <MiniHelix className="relative h-36 w-20 sm:h-44 sm:w-24" />
                </div>
              </div>

              <div className="col-start-2 row-start-2 flex w-16 flex-col items-center self-end sm:w-24">
                <div className="cd-flow-transcription-arrow">
                  <FlowArrowHead className="cd-arrow-1 opacity-0" />
                </div>
                <FlowArrowLabel label="Transcription" className="cd-flow-transcription-label opacity-0" />
              </div>

              <div className="cd-vis-rna relative col-start-3 row-start-2 flex scale-[0.8] flex-col items-center self-end opacity-20">
                <div className="absolute inset-0 rounded-3xl bg-amber/10 blur-2xl" />
                <div className="cd-flow-rna relative">
                  <RnaStrand className="relative h-16 w-24 sm:h-20 sm:w-28" />
                </div>
              </div>

              <div className="col-start-4 row-start-2 flex w-16 flex-col items-center self-end sm:w-24">
                <div className="cd-flow-translation-arrow">
                  <FlowArrowHead className="cd-arrow-2 opacity-0" />
                </div>
                <FlowArrowLabel label="Translation" className="cd-flow-translation-label opacity-0" />
              </div>

              <div className="cd-vis-protein relative col-start-5 row-start-2 flex scale-[0.8] flex-col items-center self-end opacity-20">
                <div className="absolute inset-0 rounded-3xl bg-maroon/10 blur-2xl" />
                <div className="cd-flow-protein relative">
                  <ProteinShape className="relative h-20 w-24 sm:h-24 sm:w-28" />
                </div>
              </div>

              <p className="cd-flow-dna-label col-start-1 row-start-3 mt-2 text-center font-mono text-xs font-bold uppercase tracking-wider text-cyan sm:text-sm">
                DNA
              </p>
              <p className="cd-flow-rna-label col-start-3 row-start-3 mt-2 text-center font-mono text-xs font-bold uppercase tracking-wider text-amber sm:text-sm">
                RNA
              </p>
              <p className="cd-flow-protein-label col-start-5 row-start-3 mt-2 text-center font-mono text-xs font-bold uppercase tracking-wider text-coral sm:text-sm">
                Protein
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
