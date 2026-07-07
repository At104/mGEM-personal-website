import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { HiVolumeOff, HiVolumeUp, HiPlay, HiPause } from "react-icons/hi";

function PastProjectVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [paused, setPaused] = useState(false);

  const btnCls = "rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition hover:bg-black/70";

  const togglePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    if (paused) { v.play().catch(() => {}); } else { v.pause(); }
    setPaused(!paused);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !muted;
    setMuted(!muted);
  };

  return (
    <div className="relative h-full w-full">
      <video ref={videoRef} className="h-full w-full object-cover" muted loop autoPlay playsInline>
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute bottom-2 right-2 flex items-center gap-1.5">
        <button type="button" onClick={togglePlay} aria-label={paused ? "Play video" : "Pause video"} className={btnCls}>
          {paused ? <HiPlay className="h-4 w-4" /> : <HiPause className="h-4 w-4" />}
        </button>
        <button type="button" onClick={toggleMute} aria-label={muted ? "Unmute video" : "Mute video"} className={btnCls}>
          {muted ? <HiVolumeOff className="h-4 w-4" /> : <HiVolumeUp className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}
import { HiArrowRight, HiOutlineExternalLink } from "react-icons/hi";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import VideoPlayer from "@/components/ui/VideoPlayer";
import ButtonLink from "@/components/ui/ButtonLink";
import { projects } from "@/lib/content";

export default function ProjectsPage() {
  const { current, past } = projects;

  return (
    <>
      <Helmet>
        <title>Projects — McMaster iGEM</title>
        <meta name="description" content="Explore mGEM's current and past iGEM competition projects." />
      </Helmet>
      <PageHeader
        eyebrow="Projects"
        title="Building biology, season after season"
        lede="Each year mGEM designs and builds a new synthetic biology project for the international iGEM competition."
      />

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <SectionHeading eyebrow="Current" title={`${current.year} season`} />
        <Reveal delay={0.1} className="mt-10">
          <div className="overflow-hidden rounded-3xl border border-ink/8 bg-paper-warm shadow-xl">
            <VideoPlayer src={current.video} />
            <div className="flex flex-col gap-4 p-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-display text-2xl font-bold">{current.title}</h3>
                <p className="mt-1 text-ink-soft">Follow our latest work on the competition wiki.</p>
              </div>
              <ButtonLink href={current.wiki} external>
                Visit wiki <HiOutlineExternalLink aria-hidden />
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-ink/8 bg-paper-warm py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Archive" title="Past projects & publications" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {past.map((p, i) => (
              <Reveal key={p.title + p.year} delay={(i % 2) * 0.08}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/8 bg-paper transition hover:shadow-xl hover:shadow-leaf/10"
                >
                  <div className="relative aspect-video bg-leaf-soft">
                    {"video" in p && p.video ? (
                      <PastProjectVideo src={p.video} />
                    ) : (
                      "image" in p &&
                      p.image && (
                        <img src={p.image} alt={p.title} className="absolute inset-0 h-full w-full object-cover transition group-hover:scale-105" loading="lazy" />
                      )
                    )}
                    <span className="absolute left-4 top-4 rounded-full bg-forest/85 px-3 py-1 font-mono text-xs text-white">{p.year}</span>
                    {"badge" in p && p.badge && (
                      <span className="absolute right-4 top-4 rounded-full bg-amber px-3 py-1 font-mono text-xs font-bold text-ink">{p.badge}</span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-bold">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-ink-soft">{p.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-leaf-deep">
                      View <HiArrowRight className="transition group-hover:translate-x-1" aria-hidden />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 rounded-3xl border border-dashed border-leaf/40 bg-leaf-soft/50 p-8 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-leaf-deep">HP Initiatives & Storybook</p>
            <p className="text-gradient mt-2 font-display text-xl font-bold">Coming soon</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}