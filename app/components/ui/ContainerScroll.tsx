"use client";

import React, { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type ContainerScrollProps = {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

/**
 * Sticky scroll hero — wordmark sits behind a tilted video card that overlaps it;
 * scrolling lifts the title and untilts the card into a flat frame.
 */
export function ContainerScroll({ titleComponent, children, className }: ContainerScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const card = cardRef.current;
      const title = titleRef.current;
      if (!card || !title) return;

      if (prefersReducedMotion()) {
        gsap.set(card, { clearProps: "transform,opacity" });
        gsap.set(title, { clearProps: "transform,opacity" });
        return;
      }

      const mm = gsap.matchMedia();

      const setupScroll = (initialScale: number) => {
        gsap.set(card, {
          rotationX: 40,
          scale: initialScale,
          transformPerspective: 1000,
          transformOrigin: "50% 50%",
          force3D: true,
        });
        gsap.set(title, { y: 0, autoAlpha: 1 });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.65,
            },
          })
          .to(title, { y: -100, autoAlpha: 0, ease: "none", duration: 1 }, 0)
          .to(card, { rotationX: 0, ease: "none", duration: 1 }, 0)
          .to(card, { scale: 1, ease: "none", duration: 1 }, 0);
      };

      mm.add("(min-width: 769px)", () => setupScroll(1.05));
      mm.add("(max-width: 768px)", () => setupScroll(0.9));

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={cn("relative h-[130vh] sm:h-[135vh]", className)}>
      <div
        className="sticky top-0 h-[100vh] w-full pt-[5.5rem] sm:pt-24"
      >
        <div className="relative mx-auto h-full w-full max-w-6xl px-4 sm:px-6">
          <div
            ref={titleRef}
            className="pointer-events-none absolute inset-x-4 top-[2%] z-[1] text-center sm:inset-x-6 md:top-[3%]"
          >
            {titleComponent}
          </div>

          <div className="absolute inset-x-4 top-[52%] z-[2] flex justify-center sm:inset-x-6 md:top-[54%]">
            <div
              ref={cardRef}
              className="w-full max-w-5xl overflow-hidden rounded-2xl border border-ink/10 bg-forest shadow-2xl shadow-forest/20 will-change-transform sm:rounded-3xl"
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
