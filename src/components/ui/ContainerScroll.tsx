import { useRef, type ReactNode } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type ContainerScrollProps = {
  titleComponent: ReactNode;
  children: ReactNode;
  className?: string;
  /** Seconds to wait before fading in the card — lets the title animation finish first. */
  revealDelay?: number;
};

const CINEMATIC = "(min-width: 1024px)";

/**
 * Sticky scroll hero — wordmark sits behind a tilted video card that overlaps it;
 * scrolling lifts the title and untilts the card into a flat frame.
 * Below the cinematic breakpoint the wordmark and video stack so nothing clips.
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

      mm.add(CINEMATIC, () => {
        gsap.set(card, {
          rotationX: 40,
          scale: 0.88,
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
          .to(card, { scale: 1.03, ease: "none", duration: 1 }, 0);
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.set(card, { rotationX: 0, scale: 1 });
        gsap.set(title, { y: 0, autoAlpha: 1 });
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={cn("hero-scroll-shell", className)}>
      <div className="hero-scroll-sticky">
        <div className="hero-scroll-stage">
          <div ref={titleRef} className="hero-scroll-title pointer-events-none">
            {titleComponent}
          </div>

          <div className="hero-scroll-card-wrap">
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
