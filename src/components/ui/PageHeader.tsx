import { useRef, type ReactNode } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

export default function PageHeader({
  eyebrow,
  title,
  lede,
  aside,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  aside?: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".ph-eyebrow", { autoAlpha: 0, y: 16, duration: 0.5 })
        .from(".ph-title", { yPercent: 110, duration: 0.9 }, "-=0.2")
        .from(".ph-lede", { autoAlpha: 0, y: 20, duration: 0.6 }, "-=0.45")
        .from(".ph-aside", { autoAlpha: 0, x: 32, duration: 0.8 }, "-=0.5");
    },
    { scope: ref }
  );

  return (
    <header
      ref={ref}
      className="relative overflow-hidden border-b border-ink/5 bg-paper-warm pb-20 pt-36 sm:pb-24 sm:pt-44"
    >
      <div className="bg-grid absolute inset-0 opacity-40" />
      <div className="glow -left-20 top-0 h-72 w-72 bg-maroon/15" />
      <div className="glow right-0 top-10 h-64 w-64 bg-cyan/15" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div
          className={
            aside
              ? "grid items-center gap-10 lg:grid-cols-[1fr_minmax(0,22rem)] lg:gap-12 xl:grid-cols-[1fr_minmax(0,26rem)]"
              : undefined
          }
        >
          <div>
            <p className="ph-eyebrow font-mono text-xs font-semibold uppercase tracking-[0.3em] text-maroon-deep">
              {eyebrow}
            </p>
            <div className="overflow-hidden">
              <h1 className="ph-title mt-4 max-w-4xl font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:max-w-none lg:text-6xl">
                {title}
              </h1>
            </div>
            {lede && (
              <p className="ph-lede mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft lg:max-w-none">
                {lede}
              </p>
            )}
          </div>
          {aside && <div className="ph-aside mx-auto w-full max-w-sm lg:max-w-none">{aside}</div>}
        </div>
      </div>
    </header>
  );
}
