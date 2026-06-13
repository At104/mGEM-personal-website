
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { activeIndexAtProgress } from "@/lib/dnaHelix";
import { cn } from "@/lib/utils";
import type { Member } from "./MemberCard";
import { MemberProfilePanel } from "./MemberProfilePanel";
import TeamDnaScene from "./TeamDnaScene";
import { buildTeamNodes, type TeamGroupKey } from "@/lib/teamConfig";

type Breakpoint = { progress: number; color: string; label: string };

/**
 * Scroll down one continuous DNA strand — each member owns exactly one node.
 *
 * Navigation:
 *   - Scroll wheel / touch-swipe on the helix canvas area
 *   - Drag (or click) the left strand-progress slider
 *
 * The component is a fixed viewport-height block; it does NOT add extra height
 * to the page or hijack the page scroll.
 */
export default function TeamHelix({ data }: { data: Record<TeamGroupKey, Member[]> }) {
  const helixAreaRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const nodes = useMemo(() => buildTeamNodes(data), [data]);
  const colors = useMemo(() => nodes.map((n) => n.color), [nodes]);
  const activeNode = nodes[activeIndex] ?? null;

  const updateProgress = useCallback(
    (p: number) => {
      const clamped = Math.max(0, Math.min(1, p));
      progressRef.current = clamped;
      setScrollProgress(clamped);
      setActiveIndex(activeIndexAtProgress(nodes.length, clamped));
    },
    [nodes.length]
  );

  // Wheel + touch scroll on the helix area — non-passive so we can preventDefault
  useEffect(() => {
    const el = helixAreaRef.current;
    if (!el) return;

    // Wheel speed: deltaMode 1 = line-based mouse (1 click = 1 member).
    // deltaMode 0 = pixel-based trackpad (scaled by TRACKPAD_SENSITIVITY).
    // Tune TRACKPAD_SENSITIVITY (line ~52): higher = faster, lower = slower.
    const TRACKPAD_SENSITIVITY = 0.0003;
    const stepPerMember = 1 / Math.max(1, nodes.length - 1);

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const delta =
        e.deltaMode === 1
          ? Math.sign(e.deltaY) * stepPerMember   // mouse wheel: 1 click = 1 member
          : e.deltaY * TRACKPAD_SENSITIVITY;       // trackpad: proportional
      updateProgress(progressRef.current + delta);
    };

    let touchAnchor: { y: number; progress: number } | null = null;

    const onTouchStart = (e: TouchEvent) => {
      touchAnchor = { y: e.touches[0].clientY, progress: progressRef.current };
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!touchAnchor) return;
      e.preventDefault();
      const dy = e.touches[0].clientY - touchAnchor.y;
      // Normalize swipe distance against the element height; factor 2 for feel
      const delta = -(dy / (el.clientHeight || 400)) * 2;
      updateProgress(touchAnchor.progress + delta);
    };

    const onTouchEnd = () => { touchAnchor = null; };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [nodes.length, updateProgress]);

  // Subteam breakpoints — one tick per first member of each group
  const breakpoints = useMemo<Breakpoint[]>(
    () =>
      nodes
        .filter((n) => n.isFirstInGroup)
        .map((n) => ({
          progress: n.index / Math.max(1, nodes.length - 1),
          color: n.color,
          label: n.groupLabel,
        })),
    [nodes]
  );

  return (
    <div className="relative h-[calc(100vh-4.25rem)] overflow-hidden border-b border-ink/8 bg-paper">
      <div className="bg-dots absolute inset-0 opacity-30" />
      <div className="glow left-0 top-1/4 h-72 w-72 -translate-x-1/3 bg-leaf/15" />
      <div className="glow right-0 top-1/3 h-64 w-64 translate-x-1/3 bg-cyan/10" />

      <div className="relative mx-auto grid h-full max-w-7xl grid-cols-1 items-center gap-4 px-4 sm:px-6 lg:grid-cols-[auto_1fr_1fr] lg:gap-8">
        {/* Desktop strand-progress slider — drag or click to seek */}
        <StrandProgress
          className="absolute left-4 top-1/2 hidden -translate-y-1/2 lg:static lg:flex lg:translate-y-0"
          scrollProgress={scrollProgress}
          activeIndex={activeIndex}
          total={nodes.length}
          color={activeNode?.color ?? "#15A06B"}
          onSeek={updateProgress}
          breakpoints={breakpoints}
        />

        {/* DNA strand canvas — wheel/swipe here to navigate */}
        <div
          ref={helixAreaRef}
          className="relative mx-auto h-[min(50vh,440px)] w-full max-w-md cursor-ns-resize select-none lg:h-[min(70vh,600px)] lg:max-w-lg"
        >
          {/* Mask fades nodes in/out at top and bottom edges */}
          <div className="helix-canvas-mask h-full w-full">
            <TeamDnaScene
              colors={colors}
              scrollProgress={scrollProgress}
              activeIndex={activeIndex}
              className="h-full w-full"
            />
          </div>

          {activeNode && (
            <div className="pointer-events-none absolute left-1/2 top-2 -translate-x-1/2 text-center">
              <p className={cn("font-mono text-[9px] uppercase tracking-[0.2em]", activeNode.text)}>
                {activeNode.groupLabel}
              </p>
            </div>
          )}

          <p className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.28em] text-ink-mute">
            Scroll ↕ · drag slider
          </p>
        </div>

        {/* Profile panel for the active node */}
        <div className="flex items-center justify-center pb-16 lg:pb-0">
          <MemberProfilePanel node={activeNode} open={!!activeNode} />
        </div>
      </div>

      {/* Mobile strand-progress slider */}
      <StrandProgress
        className="absolute bottom-4 right-4 flex lg:hidden"
        scrollProgress={scrollProgress}
        activeIndex={activeIndex}
        total={nodes.length}
        color={activeNode?.color ?? "#15A06B"}
        compact
        onSeek={updateProgress}
        breakpoints={breakpoints}
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// StrandProgress — vertical track that shows scroll position.
// Draggable: click anywhere on the track or drag the thumb to seek.
// Shows subteam breakpoint ticks on the desktop (non-compact) version.
// ---------------------------------------------------------------------------

function StrandProgress({
  scrollProgress,
  activeIndex,
  total,
  color,
  className,
  compact = false,
  onSeek,
  breakpoints = [],
}: {
  scrollProgress: number;
  activeIndex: number;
  total: number;
  color: string;
  className?: string;
  compact?: boolean;
  onSeek?: (progress: number) => void;
  breakpoints?: Breakpoint[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const seekFromClientY = useCallback(
    (clientY: number) => {
      const track = trackRef.current;
      if (!track || !onSeek) return;
      const rect = track.getBoundingClientRect();
      onSeek(Math.max(0, Math.min(1, (clientY - rect.top) / rect.height)));
    },
    [onSeek]
  );

  // Height matches the helix canvas container: h-[min(50vh,440px)] on mobile,
  // h-[min(70vh,600px)] on desktop. Adjust these values to resize the slider.
  const h = compact ? "h-24 w-1" : "h-[min(50vh,440px)] w-1.5 lg:h-[min(70vh,600px)]";

  return (
    <div className={cn("flex-col items-center gap-2", className)}>
      {/* Wrapper gives labels a proper containing block — the track is only w-1.5 (6px)
          so labels placed inside it get ~0px available text width and wrap at every char.
          Labels are absolute children of this wrapper instead. */}
      {(() => {
        // Compute adjusted tick positions (min 7% gap between groups so they don't overlap).
        const MIN_GAP_PCT = 7;
        const naturalPcts = breakpoints.map((bp) => bp.progress * 100);
        const adjPcts = naturalPcts.reduce<number[]>((acc, p, i) => {
          acc.push(Math.max(p, i > 0 ? acc[i - 1] + MIN_GAP_PCT : 0));
          return acc;
        }, []);

        // Piecewise-linear map: raw scroll progress → adjusted visual % so the
        // thumb always lands exactly on the right tick.
        const mapThumb = (raw: number): number => {
          const p = raw * 100;
          if (naturalPcts.length === 0) return p;
          if (p <= naturalPcts[0]) return adjPcts[0];
          const last = naturalPcts.length - 1;
          if (p >= naturalPcts[last]) {
            const seg = 100 - naturalPcts[last];
            const adjSeg = 100 - adjPcts[last];
            return seg > 0 ? adjPcts[last] + ((p - naturalPcts[last]) / seg) * adjSeg : adjPcts[last];
          }
          for (let i = 0; i < last; i++) {
            if (p >= naturalPcts[i] && p <= naturalPcts[i + 1]) {
              const t = (p - naturalPcts[i]) / (naturalPcts[i + 1] - naturalPcts[i]);
              return adjPcts[i] + t * (adjPcts[i + 1] - adjPcts[i]);
            }
          }
          return p;
        };

        const thumbPct = mapThumb(scrollProgress);

        return (
          <div className="relative">
            <div
              ref={trackRef}
              className={cn("relative touch-none cursor-pointer rounded-full bg-ink/10", h)}
              onPointerDown={(e) => {
                e.currentTarget.setPointerCapture(e.pointerId);
                seekFromClientY(e.clientY);
              }}
              onPointerMove={(e) => {
                if (e.buttons === 0) return;
                seekFromClientY(e.clientY);
              }}
            >
              {/* Filled portion */}
              <div
                className="absolute inset-x-0 top-0 rounded-full bg-gradient-to-b from-maroon via-leaf to-cyan"
                style={{ height: `${thumbPct}%` }}
              />

              {/* Breakpoint ticks at adjusted positions */}
              {!compact && breakpoints.map((bp, i) => (
                <div
                  key={bp.label}
                  className="pointer-events-none absolute left-1/2 h-[3px] w-4 -translate-x-1/2 -translate-y-px rounded-full ring-1 ring-paper/50"
                  style={{ top: `${adjPcts[i]}%`, backgroundColor: bp.color }}
                />
              ))}

              {/* Thumb */}
              <div
                className="absolute left-1/2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-paper shadow-md"
                style={{
                  top: `calc(${thumbPct}% - 6px)`,
                  backgroundColor: color,
                  boxShadow: `0 0 10px ${color}66`,
                }}
              />
            </div>

            {/* Labels beside the track at adjusted positions */}
            {!compact && breakpoints.map((bp, i) => (
              <span
                key={`label-${bp.label}`}
                className="pointer-events-none absolute -translate-y-1/2 font-mono text-[8px] uppercase leading-tight tracking-wider"
                style={{
                  top: `${adjPcts[i]}%`,
                  left: "1rem",
                  width: "72px",
                  color: bp.color,
                }}
              >
                {bp.label.replace(/-/g, "\u2011")}
              </span>
            ))}
          </div>
        );
      })()}

      <span className="font-mono text-[10px] tabular-nums text-ink-mute">
        {activeIndex + 1}/{total}
      </span>
    </div>
  );
}
