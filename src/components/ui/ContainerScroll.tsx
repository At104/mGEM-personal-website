
import React, { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type ContainerScrollProps = {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

/**
 * Hero wordmark + video — single viewport block in normal document flow (one page scroll).
 * Flex + spacer mirrors origin vertical rhythm; video always sits below the title.
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
              end: "bottom top",
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
    <div
      ref={containerRef}
      className={cn(
        "relative w-full pt-[5.5rem] sm:pt-24",
        className
      )}
    >
      <div className="relative mx-auto flex min-h-[calc(100dvh-4.25rem)] w-full max-w-6xl flex-col px-4 pb-10 sm:min-h-[calc(100dvh-6rem)] sm:px-6 sm:pb-12">
        <div
          ref={titleRef}
          className="pointer-events-none z-[1] shrink-0 pt-[4%] text-center md:pt-[5%] xl:pt-[6%]"
        >
          {titleComponent}
        </div>

        <div className="min-h-[1.5rem] flex-1" aria-hidden />

        <div className="relative z-[2] flex shrink-0 justify-center pb-[4%] md:pb-[5%]">
          <div
            ref={cardRef}
            className={cn(
              "aspect-video h-auto w-full max-w-5xl rounded-2xl bg-maroon p-1 shadow-2xl shadow-maroon/30 will-change-transform sm:rounded-3xl",
              "max-h-[720px]:mx-auto max-h-[720px]:w-[min(100%,calc(38svh*16/9))] max-h-[720px]:max-h-[38svh]"
            )}
          >
            <div className="hero-card-inner relative h-full w-full bg-maroon-deep">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
