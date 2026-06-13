
import React, { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { stats } from "@/lib/content";

export default function StatStrip() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from(".stat-cell", {
        autoAlpha: 0,
        y: 36,
        stagger: 0.1,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 82%", once: true },
      });
      gsap.utils.toArray<HTMLElement>(".stat-num").forEach((el) => {
        const target = Number(el.dataset.target);
        const suffix = el.dataset.suffix ?? "";
        if (!target) return;
        const counter = { n: 0 };
        gsap.to(counter, {
          n: target,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: { trigger: ref.current, start: "top 82%", once: true },
          onUpdate: () => {
            el.textContent = `${Math.round(counter.n)}${suffix}`;
          },
        });
      });
    },
    { scope: ref }
  );

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-white/10 bg-maroon-deep py-16 text-white sm:py-20"
    >
      <div className="bg-dots-dark absolute inset-0 opacity-50" />
      <div className="glow left-1/4 top-0 h-64 w-64 -translate-x-1/2 bg-maroon/25" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="stat-cell text-center">
            <p className={`font-display text-4xl font-bold sm:text-5xl ${s.accent}`}>
              {"numeric" in s && s.numeric != null ? (
                <span
                  className="stat-num"
                  data-target={s.numeric}
                  {...("suffix" in s && s.suffix ? { "data-suffix": s.suffix } : {})}
                >
                  {s.value}
                </span>
              ) : (
                s.value
              )}
            </p>
            <p className="mx-auto mt-2 max-w-[14ch] text-sm text-white/60">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
