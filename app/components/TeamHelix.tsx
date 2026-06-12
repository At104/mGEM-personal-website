"use client";

import React, { useCallback, useMemo, useRef, useState } from "react";
import { gsap, useGSAP, prefersReducedMotion, ScrollTrigger } from "@/lib/gsap";
import { activeIndexAtProgress } from "@/lib/dnaHelix";
import { cn } from "@/lib/utils";
import type { Member } from "./MemberCard";
import { MemberProfilePanel } from "./MemberProfilePanel";
import TeamDnaScene from "./TeamDnaScene";
import { buildTeamNodes, type TeamGroupKey } from "@/lib/teamConfig";

/** Viewport heights of scroll = full journey from first node to last. */
const SCROLL_VH_PER_MEMBER = 90;

/**
 * Scroll down one continuous DNA strand — each member owns exactly one node.
 * Scroll progress travels the helix; the matching profile opens at each stop.
 */
export default function TeamHelix({ data }: { data: Record<TeamGroupKey, Member[]> }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const nodes = useMemo(() => buildTeamNodes(data), [data]);
  const colors = useMemo(() => nodes.map((n) => n.color), [nodes]);
  const activeNode = nodes[activeIndex] ?? null;

  const journeyHeightVh = Math.max((nodes.length - 1) * SCROLL_VH_PER_MEMBER + 100, 120);

  const updateFromProgress = useCallback(
    (progress: number) => {
      const p = Math.max(0, Math.min(1, progress));
      setScrollProgress(p);
      setActiveIndex(activeIndexAtProgress(nodes.length, p));
    },
    [nodes.length]
  );

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      ScrollTrigger.create({
        trigger: rootRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.4,
        onUpdate: (self) => updateFromProgress(self.progress),
      });
    },
    { scope: rootRef, dependencies: [nodes.length, updateFromProgress] }
  );

  return (
    <div
      ref={rootRef}
      className="relative bg-paper"
      style={{ height: `${journeyHeightVh}vh` }}
    >
      {/* Sticky viewport — stay pinned while we scroll through the journey height */}
      <div className="sticky top-[4.25rem] h-[calc(100vh-4.25rem)] overflow-hidden border-b border-ink/8">
        <div className="bg-dots absolute inset-0 opacity-30" />
        <div className="glow left-0 top-1/4 h-72 w-72 -translate-x-1/3 bg-leaf/15" />
        <div className="glow right-0 top-1/3 h-64 w-64 translate-x-1/3 bg-cyan/10" />

        <div className="relative mx-auto grid h-full max-w-7xl grid-cols-1 items-center gap-4 px-4 sm:px-6 lg:grid-cols-[auto_1fr_1fr] lg:gap-8">
          {/* Strand progress — where we are on the journey */}
          <StrandProgress
            className="absolute left-4 top-1/2 hidden -translate-y-1/2 lg:static lg:flex"
            scrollProgress={scrollProgress}
            activeIndex={activeIndex}
            total={nodes.length}
            color={activeNode?.color ?? "#15A06B"}
          />

          {/* 3D strand — scroll scrubs position along the helix */}
          <div className="relative mx-auto h-[min(50vh,440px)] w-full max-w-md lg:h-[min(70vh,600px)] lg:max-w-lg">
            <TeamDnaScene
              colors={colors}
              scrollProgress={scrollProgress}
              activeIndex={activeIndex}
              className="h-full w-full"
            />

            {activeNode && (
              <div className="pointer-events-none absolute left-1/2 top-2 -translate-x-1/2 text-center">
                <p className="rounded-full border border-ink/10 bg-paper-warm/95 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-ink-mute backdrop-blur-sm">
                  Node {activeIndex + 1} of {nodes.length}
                </p>
                <p className={cn("mt-1 font-mono text-[9px] uppercase tracking-[0.2em]", activeNode.text)}>
                  {activeNode.groupLabel}
                </p>
              </div>
            )}

            <p className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.28em] text-ink-mute">
              Scroll ↓ travel the strand
            </p>
          </div>

          {/* Profile for the node currently in view */}
          <div className="flex items-center justify-center pb-16 lg:pb-0">
            <MemberProfilePanel node={activeNode} open={!!activeNode} />
          </div>
        </div>

        {/* Mobile strand progress */}
        <StrandProgress
          className="absolute bottom-4 right-4 flex lg:hidden"
          scrollProgress={scrollProgress}
          activeIndex={activeIndex}
          total={nodes.length}
          color={activeNode?.color ?? "#15A06B"}
          compact
        />
      </div>
    </div>
  );
}

function StrandProgress({
  scrollProgress,
  activeIndex,
  total,
  color,
  className,
  compact = false,
}: {
  scrollProgress: number;
  activeIndex: number;
  total: number;
  color: string;
  className?: string;
  compact?: boolean;
}) {
  const h = compact ? "h-24 w-1" : "h-52 w-1 sm:h-64";
  return (
    <div className={cn("flex-col items-center gap-2", className)}>
      {!compact && (
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-ink-mute">Strand</span>
      )}
      <div className={cn("relative rounded-full bg-ink/10", h)}>
        <div
          className="absolute inset-x-0 top-0 rounded-full bg-gradient-to-b from-maroon via-leaf to-cyan"
          style={{ height: `${scrollProgress * 100}%` }}
        />
        <div
          className="absolute left-1/2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-paper shadow-md"
          style={{
            top: `calc(${scrollProgress * 100}% - 6px)`,
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}66`,
          }}
        />
      </div>
      <span className="font-mono text-[10px] tabular-nums text-ink-mute">
        {activeIndex + 1}/{total}
      </span>
    </div>
  );
}
