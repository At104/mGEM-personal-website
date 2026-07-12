import { useEffect, useRef, useState } from "react";
import { HiVolumeOff, HiVolumeUp, HiPlay, HiPause } from "react-icons/hi";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import ButtonLink from "@/components/ui/ButtonLink";
import { ContainerScroll } from "@/components/ui/ContainerScroll";
import { SplitChars } from "@/components/ui/SplitChars";

function HeroVideo({ ready }: { ready: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [paused, setPaused] = useState(true);

  // Start playback only after the wordmark animation completes (~1.8 s)
  useEffect(() => {
    if (ready) videoRef.current?.play().then(() => setPaused(false)).catch(() => {});
  }, [ready]);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !muted;
    setMuted(!muted);
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (paused) { v.play().catch(() => {}); } else { v.pause(); }
    setPaused(!paused);
  };

  const btnCls = "rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition hover:bg-black/70";

  return (
    <div className="relative">
      <video
        ref={videoRef}
        className="mx-auto aspect-video h-full w-full object-cover object-center"
        src="/Videos/what_is_igemf.mp4"
        loop
        muted={muted}
        playsInline
        preload="auto"
        aria-label="What is iGEM — McMaster iGEM"
      />
      <div className="absolute bottom-3 right-3 flex items-center gap-2 sm:bottom-4 sm:right-4">
        <button type="button" onClick={togglePlay} aria-label={paused ? "Play video" : "Pause video"} className={btnCls}>
          {paused ? <HiPlay className="h-5 w-5" /> : <HiPause className="h-5 w-5" />}
        </button>
        <button type="button" onClick={toggleMute} aria-label={muted ? "Unmute video" : "Mute video"} className={btnCls}>
          {muted ? <HiVolumeOff className="h-5 w-5" /> : <HiVolumeUp className="h-5 w-5" />}
        </button>
      </div>
    </div>
  );
}

const mgemSize = "font-bold text-7xl md:text-9xl lg:text-9xl xl:text-[14rem]";


// Three stacked "mGEM" rows that reveal on load.
//
// The middle (inverse/stroke) row slides in first. Once it settles, the
// solid maroon rows above and below split off from its position and glide
// out to their resting slots — reading as one wordmark duplicating and
// separating into its final three-row stack.
const ROW2_SLIDE_DURATION = 1.05;
const ROW2_SPLIT_OVERLAP = 0.4;
const SPLIT_DURATION = 1.1;

// Total time from mount until the wordmark finishes settling — used to
// delay the hero card's fade-in until the text animation is done.
export const MGEM_INTRO_DURATION = ROW2_SLIDE_DURATION - ROW2_SPLIT_OVERLAP + SPLIT_DURATION;

function MgemWordmark() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const row3Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const row1 = row1Ref.current;
      const row2 = row2Ref.current;
      const row3 = row3Ref.current;
      if (!row1 || !row2 || !row3) return;

      const row1Top = row1.getBoundingClientRect().top;
      const row2Top = row2.getBoundingClientRect().top;
      const row3Top = row3.getBoundingClientRect().top;

      // Park the solid rows on top of the inverse row so they can "split"
      // outward from a shared origin once it slides in.
      gsap.set(row1, { y: row2Top - row1Top, opacity: 0 });
      gsap.set(row3, { y: row2Top - row3Top, opacity: 0 });
      gsap.set(row2, { x: -220, opacity: 0, filter: "blur(6px)" });

      gsap
        .timeline()
        .to(row2, {
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: ROW2_SLIDE_DURATION,
          ease: "power3.out",
        })
        .to(
          [row1, row3],
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: SPLIT_DURATION,
            ease: "power4.out",
          },
          `-=${ROW2_SPLIT_OVERLAP}`
        );
    },
    { scope: wrapRef }
  );

  return (
    <div
      ref={wrapRef}
      className="hero-mgem-wordmark font-montserrat select-none text-center"
      aria-label="mGEM"
    >
      <div ref={row1Ref} className={`italic leading-none text-maroon ${mgemSize}`}>
        mGEM
      </div>
      <div ref={row2Ref} className={`stroke italic leading-none ${mgemSize}`}>
        mGEM
      </div>
      <div ref={row3Ref} className={`italic leading-none text-maroon ${mgemSize}`}>
        mGEM
      </div>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const subRef = useRef<HTMLDivElement>(null);

  // Delay video autoplay until the card fades in, right after the wordmark settles
  const [videoReady, setVideoReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVideoReady(true), MGEM_INTRO_DURATION * 1000);
    return () => clearTimeout(t);
  }, []);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const chars = subRef.current?.querySelectorAll("[data-hero-char]");
      if (chars?.length) {
        gsap.from(chars, {
          yPercent: 130,
          rotateX: -90,
          opacity: 0,
          filter: "blur(8px)",
          transformOrigin: "50% 100%",
          duration: 1,
          ease: "power4.out",
          stagger: 0.028,
          scrollTrigger: {
            trigger: subRef.current,
            start: "top 85%",
            once: true,
          },
        });
      }

      gsap.from(".hero-sub-actions", {
        autoAlpha: 0,
        y: 24,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: subRef.current,
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="home" className="overflow-hidden bg-paper">
      <div className="bg-dots absolute inset-0 opacity-50" aria-hidden />
      <div className="glow left-[8%] top-[12%] h-72 w-72 bg-maroon/15" aria-hidden />
      <div className="glow right-[10%] top-[18%] h-64 w-64 bg-cyan/10" aria-hidden />

      <ContainerScroll titleComponent={<MgemWordmark />} revealDelay={MGEM_INTRO_DURATION}>
        <HeroVideo ready={videoReady} />
      </ContainerScroll>

      <div ref={subRef} className="relative mx-auto max-w-7xl px-6 pb-20 pt-4 text-center sm:pb-24">
        <h1
          className="mx-auto max-w-4xl font-display text-[2.5rem] font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          style={{ perspective: "600px" }}
        >
          <span className="block pb-1">
            <SplitChars text="Engineering " />
            <SplitChars text="synthetic biology" brand />
          </span>
          <span className="mt-1 block">
            <SplitChars text="for real problems." />
          </span>
        </h1>

        <div className="hero-sub-actions mt-9 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink href="/projects">Explore projects</ButtonLink>
          <ButtonLink href="/get-involved" variant="outline">
            Join mGEM
          </ButtonLink>
        </div>
      </div>

      <div className="section-divider" aria-hidden />
    </section>
  );
}
