"use client";

import React, { useRef, useEffect, useLayoutEffect, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useMotionValueEvent,
  useMotionValue,
} from "framer-motion";

const GEM_LETTER =
  "text-[3.65rem] sm:text-[5.06rem] md:text-[6.75rem] lg:text-[7.875rem] font-black leading-none";

const COIN_DEPTH = 28;

const RIM_OFFSETS = [-0.88, -0.58, -0.28, 0.28, 0.58, 0.88];

function FallTrail({
  opacity,
  sway,
}: {
  opacity: MotionValue<number>;
  sway: MotionValue<number>;
}) {
  const streaks = [
    { delay: "0s" },
    { delay: "0.18s" },
    { delay: "0.36s" },
  ];

  return (
    <motion.div
      style={{ opacity, x: sway }}
      className="petri-fall-trail pointer-events-none"
      aria-hidden="true"
    >
      <div className="petri-fall-trail-streaks">
        {streaks.map((streak, index) => (
          <div
            key={index}
            className="petri-wind-streak"
            style={{ animationDelay: streak.delay }}
          />
        ))}
      </div>
    </motion.div>
  );
}

function PetriDish({
  rotateX,
  rotateY,
  rotateZ,
  letterOpacity,
  trailOpacity,
  trailSway,
}: {
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
  rotateZ: MotionValue<number>;
  letterOpacity: MotionValue<number>;
  trailOpacity: MotionValue<number>;
  trailSway: MotionValue<number>;
}) {
  const size =
    "w-[12.375rem] h-[12.375rem] sm:w-[14.625rem] sm:h-[14.625rem] md:w-[18rem] md:h-[18rem] lg:w-[19.125rem] lg:h-[19.125rem]";
  const halfDepth = COIN_DEPTH / 2;

  return (
    <div className={`relative ${size} shrink-0`}>
      <FallTrail opacity={trailOpacity} sway={trailSway} />

      <motion.div
        style={{
          rotateY,
          rotateZ,
          transformPerspective: 800,
          transformStyle: "preserve-3d",
        }}
        className="relative h-full w-full"
      >
        <motion.div
          style={{
            rotateX,
            transformStyle: "preserve-3d",
            filter:
              "drop-shadow(0 12px 26px rgba(196, 0, 0, 0.38)) drop-shadow(0 0 32px rgba(241, 117, 35, 0.3))",
          }}
          className="relative h-full w-full"
        >
          {RIM_OFFSETS.map((offset, index) => (
            <div
              key={index}
              className="petri-coin-rim absolute inset-0 rounded-full p-[7px]"
              style={{ transform: `translateZ(${halfDepth * offset}px)` }}
            >
              <div className="h-full w-full rounded-full bg-mgem-navy" />
            </div>
          ))}

          {/* Back cap */}
          <div
            className="petri-coin-back absolute inset-[5px] rounded-full"
            style={{
              transform: `translateZ(-${halfDepth}px) rotateX(180deg)`,
            }}
          />

          {/* Front face */}
          <div
            className="petri-coin-face absolute inset-0 rounded-full p-[4px] bg-gradient-to-br from-mgem-red via-mgem-orange to-mgem-gold shadow-[0_0_32px_rgba(196,0,0,0.5)]"
            style={{ transform: `translateZ(${halfDepth}px)` }}
          >
            <div className="relative h-full w-full rounded-full bg-mgem-navy p-[5px]">
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-mgem-indigo/40 bg-gradient-to-br from-mgem-indigo/55 via-mgem-navy to-mgem-maroon/35">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_28%,rgba(242,181,153,0.22),transparent_60%)]" />
                <div className="petri-coin-specular absolute inset-0 rounded-full" />
                <motion.span
                  style={{ opacity: letterOpacity }}
                  className={`relative ${GEM_LETTER} home-gradient-text select-none`}
                >
                  M
                </motion.span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

const DISH_HEIGHT_LG = 306;
const LAND_SCALE = 1.12;
const MOVE_START = 0.03;
const MOVE_END = 0.64;
const REVEAL_END = 0.66;
const MGEM_REVEAL_START = 0.56;
const GEM_REVEAL_START = 0.54;
const NAV_CLEARANCE = 96;
const HEADER_GAP = 28;
const FADE_END_GAP = 140;
const FADE_START_GAP = 400;
const OPACITY_CUTOFF = 0.06;
const SCROLL_TRACK_VH = 480;
const TITLE_LIFT = 36;
const GEM_TUCK_X = 0;

function getNavBottom() {
  return NAV_CLEARANCE + HEADER_GAP;
}

function getNavFloor(groupHeight: number) {
  return Math.round(
    getNavBottom() - (groupHeight * (1 - LAND_SCALE)) / 2
  );
}

function clampAboveHeader(layoutTop: number, groupHeight: number) {
  return Math.max(layoutTop, getNavFloor(groupHeight));
}

/** Center the group in the band between the header and the viewport bottom */
function getCenteredTop(vh: number, groupHeight = DISH_HEIGHT_LG) {
  const visualCenterY = (getNavBottom() + vh) / 2 - TITLE_LIFT;
  return clampAboveHeader(Math.round(visualCenterY - groupHeight / 2), groupHeight);
}

interface PetriDishHeroProps {
  videoSectionRef: React.RefObject<HTMLDivElement | null>;
  videoCardRef: React.RefObject<HTMLDivElement | null>;
}

export default function PetriDishHero({
  videoSectionRef,
  videoCardRef,
}: PetriDishHeroProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const startTopRef = useRef(300);
  const lockedEndTopRef = useRef<number | null>(null);

  const dishTop = useMotionValue(300);
  const heroOpacity = useMotionValue(1);
  const heroVisibility = useMotionValue<"visible" | "hidden">("visible");

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const measureLanding = useCallback(() => {
    const vh = window.innerHeight;
    const groupHeight = groupRef.current?.offsetHeight ?? DISH_HEIGHT_LG;
    startTopRef.current = getCenteredTop(vh, groupHeight);
  }, []);

  const computeLockedEndTop = useCallback(() => {
    const vh = window.innerHeight;
    const groupHeight = groupRef.current?.offsetHeight ?? DISH_HEIGHT_LG;
    return getCenteredTop(vh, groupHeight);
  }, []);

  const updateHeroOpacity = useCallback(() => {
    const group = groupRef.current;
    const videoCard = videoCardRef.current;
    const track = trackRef.current;

    let opacity = 1;

    if (group && videoCard) {
      const groupRect = group.getBoundingClientRect();
      const cardTop = videoCard.getBoundingClientRect().top;
      const gap = cardTop - groupRect.bottom;

      if (gap <= FADE_END_GAP) {
        opacity = 0;
      } else if (gap < FADE_START_GAP) {
        const t = (gap - FADE_END_GAP) / (FADE_START_GAP - FADE_END_GAP);
        opacity = t * t;
      }

      if (cardTop < groupRect.bottom + FADE_END_GAP) {
        opacity = 0;
      }
    }

    if (track && track.getBoundingClientRect().bottom < 80) {
      opacity = 0;
    }

    if (opacity < OPACITY_CUTOFF) {
      opacity = 0;
    }

    heroOpacity.set(opacity);
    heroVisibility.set(opacity === 0 ? "hidden" : "visible");
  }, [heroOpacity, heroVisibility, videoCardRef]);

  const setDishTopIfChanged = useCallback(
    (next: number) => {
      const rounded = Math.round(next);
      if (Math.abs(dishTop.get() - rounded) > 0.5) {
        dishTop.set(rounded);
      }
    },
    [dishTop]
  );

  const updateDishPosition = useCallback(() => {
    const start = startTopRef.current;
    const p = scrollYProgress.get();

    if (p >= MOVE_END) {
      if (lockedEndTopRef.current === null) {
        lockedEndTopRef.current = computeLockedEndTop();
      }
      setDishTopIfChanged(lockedEndTopRef.current);
    } else {
      lockedEndTopRef.current = null;
      const end = getCenteredTop(
        window.innerHeight,
        groupRef.current?.offsetHeight ?? DISH_HEIGHT_LG
      );
      if (p <= MOVE_START) {
        setDishTopIfChanged(start);
      } else {
        const t = (p - MOVE_START) / (MOVE_END - MOVE_START);
        const eased = 1 - (1 - t) ** 2;
        setDishTopIfChanged(start + eased * (end - start));
      }
    }

    updateHeroOpacity();
  }, [
    scrollYProgress,
    computeLockedEndTop,
    setDishTopIfChanged,
    updateHeroOpacity,
  ]);

  useLayoutEffect(() => {
    measureLanding();
    dishTop.set(startTopRef.current);
    updateDishPosition();
  }, [measureLanding, updateDishPosition, dishTop]);

  useEffect(() => {
    const onResize = () => {
      measureLanding();
      lockedEndTopRef.current = null;
      updateDishPosition();
    };

    measureLanding();
    updateDishPosition();
    window.addEventListener("resize", onResize);
    const t1 = setTimeout(onResize, 200);
    const t2 = setTimeout(onResize, 700);
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [measureLanding, updateDishPosition]);

  useMotionValueEvent(scrollYProgress, "change", () => {
    updateDishPosition();
  });

  const tumbleProgress = [
    0,
    MOVE_START,
    0.11,
    0.2,
    0.3,
    0.4,
    0.52,
    0.6,
    MOVE_END,
    1,
  ];

  const rotateX = useTransform(
    scrollYProgress,
    tumbleProgress,
    [0, 0, 85, 195, 330, 470, 590, 680, 720, 720]
  );

  const rotateY = useTransform(
    scrollYProgress,
    tumbleProgress,
    [0, 0, 48, 115, 195, 275, 320, 345, 360, 360]
  );

  const rotateZ = useTransform(
    scrollYProgress,
    tumbleProgress,
    [0, 0, 10, -7, 12, -5, 8, 3, 0, 0]
  );

  const trailOpacity = useTransform(
    scrollYProgress,
    [MOVE_START, 0.12, 0.38, 0.58, MOVE_END],
    [0, 0.9, 0.75, 0.35, 0]
  );

  const trailSway = useTransform(
    scrollYProgress,
    [MOVE_START, 0.2, 0.35, 0.5, MOVE_END],
    [0, -10, 8, -6, 0]
  );

  const groupScale = useTransform(
    scrollYProgress,
    [0, MOVE_END, MGEM_REVEAL_START, REVEAL_END],
    [1, 1, 1.04, LAND_SCALE]
  );

  const letterOpacity = useTransform(
    scrollYProgress,
    [MGEM_REVEAL_START, REVEAL_END - 0.02],
    [0, 1]
  );
  const gemOpacity = useTransform(
    scrollYProgress,
    [GEM_REVEAL_START, REVEAL_END],
    [0, 1]
  );
  const gemX = useTransform(
    scrollYProgress,
    [GEM_REVEAL_START + 0.02, REVEAL_END],
    [-40, GEM_TUCK_X]
  );

  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.03, 0.1], [1, 0.4, 0]);

  return (
    <>
      <div
        ref={trackRef}
        className="relative w-full"
        style={{ height: `${SCROLL_TRACK_VH}vh` }}
        aria-hidden="true"
      />

      <motion.div
        style={{ top: dishTop, opacity: heroOpacity, visibility: heroVisibility }}
        className="fixed left-0 right-0 z-30 flex justify-center pointer-events-none will-change-[top,opacity]"
      >
        <motion.div
          ref={groupRef}
          style={{ scale: groupScale, transformOrigin: "center center" }}
          className="flex items-center justify-center will-change-transform"
        >
          <div
            style={{ perspective: "800px", perspectiveOrigin: "50% 45%" }}
            className="relative z-0 overflow-visible"
          >
            <PetriDish
              rotateX={rotateX}
              rotateY={rotateY}
              rotateZ={rotateZ}
              letterOpacity={letterOpacity}
              trailOpacity={trailOpacity}
              trailSway={trailSway}
            />
          </div>
          <motion.div
            style={{ x: gemX, opacity: gemOpacity }}
            className="relative z-10 flex items-baseline -ml-[4.725rem] sm:-ml-[5.01rem] md:-ml-[5.29rem] lg:-ml-[5.68rem] tracking-tight"
          >
            {["G", "E", "M"].map((letter) => (
              <span
                key={letter}
                className={`home-gem-letter ${GEM_LETTER}`}
              >
                {letter}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.p
        style={{ opacity: scrollHintOpacity }}
        className="fixed bottom-5 left-0 right-0 z-20 flex flex-col items-center gap-3 text-mgem-peach text-xs uppercase tracking-[0.4em] pointer-events-none"
      >
        Scroll down
        <span className="text-lg animate-bounce">↓</span>
      </motion.p>
    </>
  );
}
