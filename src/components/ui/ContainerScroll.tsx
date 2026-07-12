import React, { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type ContainerScrollProps = {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

/**
 * Hero stage — wordmark above video in normal document flow (no sticky overlap).
 * Scroll tilts/scales the video card; the headline below stays in the page flow.
 */
export function ContainerScroll({ titleComponent, children, className }: ContainerScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const card = cardRef.current;
      if (!card) return;

      if (prefersReducedMotion()) {
        gsap.set(card, { clearProps: "transform,opacity" });
        return;
      }

      const mm = gsap.matchMedia();

      const setupScroll = (initialScale: number, finalScale: number) => {
        gsap.set(card, {
          rotationX: 40,
          scale: initialScale,
          transformPerspective: 1000,
          transformOrigin: "50% 50%",
          force3D: true,
        });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.65,
            },
          })
          .to(card, { rotationX: 0, ease: "none", duration: 1 }, 0)
          .to(card, { scale: finalScale, ease: "none", duration: 1 }, 0);
      };

      mm.add("(min-width: 769px)", () => setupScroll(0.88, 1.03));
      mm.add("(max-width: 768px)", () => setupScroll(0.84, 1));

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex min-h-[calc(100dvh-4.25rem)] flex-col pt-[5.5rem] sm:pt-24",
        className
      )}
    >
      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 sm:px-6">
        {/* Wordmark — document flow, above video */}
        <div className="shrink-0 pt-[4%] text-center md:pt-[5%] xl:pt-[6%]">
          {titleComponent}
        </div>

        {/* Flexible spacer keeps video lower on tall screens */}
        <div className="min-h-4 flex-1 sm:min-h-6" aria-hidden />

        {/* Video card — always below wordmark, never overlays the headline */}
        <div className="mx-auto w-full max-w-5xl shrink-0 pb-6 sm:pb-8 md:pb-10">
          {/* bg-maroon + p-1 simulates a 4 px border without a CSS border property,
              which doesn't respect border-radius through a 3D transform.
              The inner .hero-card-inner uses clip-path (3D-transform-safe) instead
              of overflow-hidden to clip the video to the rounded corner. */}
          <div
            ref={cardRef}
            className="w-full rounded-2xl bg-maroon p-1 shadow-2xl shadow-maroon/30 will-change-transform sm:rounded-3xl"
          >
            <div className="hero-card-inner bg-maroon-deep">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
