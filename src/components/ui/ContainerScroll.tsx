import React, { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type ContainerScrollProps = {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  /** Seconds to wait before fading in the card — lets the title animation finish first. */
  revealDelay?: number;
};

/**
 * Sticky scroll hero — wordmark sits behind a tilted video card that overlaps it;
 * scrolling lifts the title and untilts the card into a flat frame.
 */
export function ContainerScroll({ titleComponent, children, className, revealDelay = 0 }: ContainerScrollProps) {
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

      gsap.set(card, { opacity: 0 });
      gsap.to(card, {
        opacity: 1,
        duration: 0.65,
        ease: "power2.out",
        delay: revealDelay,
      });

      const mm = gsap.matchMedia();

      const setupScroll = (initialScale: number, finalScale: number) => {
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
          .to(card, { scale: finalScale, ease: "none", duration: 1 }, 0);
      };

      mm.add("(min-width: 769px)", () => setupScroll(0.88, 1.03));
      mm.add("(max-width: 768px)", () => setupScroll(0.84, 1));

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
            {/* bg-maroon + p-1 simulates a 4 px border without a CSS border property,
                which doesn't respect border-radius through a 3D transform.
                The inner .hero-card-inner uses clip-path (3D-transform-safe) instead
                of overflow-hidden to clip the video to the rounded corner. */}
            <div
              ref={cardRef}
              className="w-full max-w-5xl rounded-2xl bg-maroon p-1 shadow-2xl shadow-maroon/30 will-change-transform sm:rounded-3xl"
            >
              <div className="hero-card-inner bg-maroon-deep">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
