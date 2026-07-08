import React, { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  from?: "up" | "left" | "right" | "scale";
};

const fromVars = {
  up: { y: 40 },
  left: { x: -48 },
  right: { x: 48 },
  scale: { scale: 0.92 },
};

export default function Reveal({
  children,
  className,
  delay = 0,
  from = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from(ref.current, {
        autoAlpha: 0,
        ...fromVars[from],
        duration: 0.85,
        delay,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 88%", once: true },
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
