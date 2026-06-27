
import React, { useRef, useState } from "react";
import { HiVolumeOff, HiVolumeUp, HiPlay, HiPause } from "react-icons/hi";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import ButtonLink from "./ButtonLink";
import { ContainerScroll } from "./ui/ContainerScroll";
import { SplitChars } from "./SplitChars";

function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [paused, setPaused] = useState(false);

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
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
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

const mgemSize =
  "font-bold text-7xl md:text-9xl lg:text-9xl xl:text-[14rem]";

function MgemWordmark() {
  return (
    <div
      className="hero-mgem-wordmark font-montserrat select-none text-center"
      aria-label="mGEM"
    >
      <div className={`italic leading-none text-maroon ${mgemSize}`}>mGEM</div>
      <div className={`stroke reverse-italic inline-block leading-none ${mgemSize}`}>
        mGEM
      </div>
      <div className={`italic leading-none text-maroon ${mgemSize}`}>mGEM</div>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const subRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.from(".hero-mgem-wordmark > div", {
        autoAlpha: 0,
        y: 40,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.12,
      });

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
    <section ref={sectionRef} id="home" className="overflow-x-hidden bg-paper">
      <div className="bg-dots absolute inset-0 opacity-50" aria-hidden />
      <div className="glow left-[8%] top-[12%] h-72 w-72 bg-maroon/15" aria-hidden />
      <div className="glow right-[10%] top-[18%] h-64 w-64 bg-cyan/10" aria-hidden />

      <ContainerScroll titleComponent={<MgemWordmark />}>
        <HeroVideo />
      </ContainerScroll>

      <div ref={subRef} className="mx-auto max-w-7xl px-6 pb-20 pt-10 text-center sm:pb-24 sm:pt-12">
        <h1
          className="mx-auto max-w-4xl font-display text-3xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
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
