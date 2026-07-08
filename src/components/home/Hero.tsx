import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
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


// Three stacked "mGEM" rows that flipravel on load.
//
// Row 1: drops from above the viewport (y: -120) while simultaneously
// flipping in from behind (rotateX: -90 → 0). The combination reads as
// the text tumbling down out of the top of the screen.
//
// Rows 2 and 3: start at rotateX ±180 (folded flat on the row above),
// quick-fade to opacity 1 so you briefly see each row sitting on the
// previous one, then the full rotation peels it down into its slot.
function MgemWordmark() {
  const reduced = useReducedMotion();
  const ease = [0.25, 0.46, 0.45, 0.94] as const;

  return (
    <div
      className="hero-mgem-wordmark font-montserrat select-none text-center"
      style={{ perspective: "600px" }}
      aria-label="mGEM"
    >
      <motion.div
        className={`italic leading-none text-maroon ${mgemSize}`}
        style={{ transformOrigin: "top center" }}
        initial={reduced ? false : { y: -100, rotateX: -90, opacity: 0 }}
        animate={{ y: 0, rotateX: 0, opacity: 1 }}
        transition={{
          y:       { type: "spring", stiffness: 220, damping: 24, mass: 0.9 },
          rotateX: { duration: 0.75, ease },
          opacity: { duration: 0.15, ease: "linear" },
        }}
      >
        mGEM
      </motion.div>

      <motion.div
        className={`stroke italic leading-none ${mgemSize}`}
        style={{ transformOrigin: "top center", scaleX: 1 }}
        initial={reduced ? false : { rotateX: -180, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        transition={{
          rotateX: { duration: 0.85, ease, delay: 0.45 },
          opacity:  { duration: 0.18, ease: "linear", delay: 0.45 },
        }}
      >
        mGEM
      </motion.div>

      <motion.div
        className={`italic leading-none text-maroon ${mgemSize}`}
        style={{ transformOrigin: "top center" }}
        initial={reduced ? false : { rotateX: 180, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        transition={{
          rotateX: { duration: 0.85, ease, delay: 0.9 },
          opacity:  { duration: 0.18, ease: "linear", delay: 0.9 },
        }}
      >
        mGEM
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const subRef = useRef<HTMLDivElement>(null);

  // Delay video autoplay until the last row animation begins (~1 s into the sequence)
  const [videoReady, setVideoReady] = useState(false);
  useEffect(() => { 
    const t = setTimeout(() => setVideoReady(true), 1000);
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

      <ContainerScroll titleComponent={<MgemWordmark />}>
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
