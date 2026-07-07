import React, { useEffect, useRef, useState } from "react";
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
import { HiArrowRight, HiOutlineExternalLink, HiChevronLeft, HiChevronRight, HiX } from "react-icons/hi";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import VideoPlayer from "../components/VideoPlayer";
import ButtonLink from "../components/ButtonLink";
import { projects, communityInitiatives } from "@/lib/content";
import { cn } from "@/lib/utils";

/** Rotating fluorescent-protein accents so each card in the gallery pops differently. */
const galleryAccents = [
  { eyebrow: "text-cyan-deep", bar: "bg-cyan", dot: "bg-cyan", shadow: "hover:shadow-cyan/20" },
  { eyebrow: "text-amber-deep", bar: "bg-amber", dot: "bg-amber", shadow: "hover:shadow-amber/20" },
  { eyebrow: "text-coral-deep", bar: "bg-coral", dot: "bg-coral", shadow: "hover:shadow-coral/20" },
  { eyebrow: "text-violet-deep", bar: "bg-violet", dot: "bg-violet", shadow: "hover:shadow-violet/20" },
  { eyebrow: "text-leaf-deep", bar: "bg-leaf", dot: "bg-leaf", shadow: "hover:shadow-leaf/20" },
];

//Modal popup for HP initiative info
function InitiativeModal({ index, onClose }: { index: number; onClose: () => void }) {
  const item = communityInitiatives[index];
  const accent = galleryAccents[index % galleryAccents.length];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      {/* Backdrop — click to dismiss */}
      <button
        type="button"
        aria-label="Close details"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-forest/70 backdrop-blur-sm"
      />

      {/* Modal Design 3 — Forest feature */}
      <div className="relative z-10 flex max-h-[88vh] w-full max-w-2xl flex-col overflow-y-auto rounded-3xl bg-paper-warm text-ink shadow-2xl [scrollbar-color:#c9c3b2_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#c9c3b2] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-2">
        <span className={cn("absolute inset-x-0 top-0 z-20 h-1.5", accent.bar)} aria-hidden />

        {/* Image mosaic — fixed height, no scrolling */}
        <div className="flex h-60 shrink-0 gap-2 p-3 sm:h-72">
          <div className="min-w-0 flex-[1.6] overflow-hidden rounded-2xl bg-leaf-soft">
            <img
              src={item.images[0]}
              alt={`${item.title} — photo 1`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          {item.images.length > 1 && (
            <div className="flex flex-1 flex-col gap-2">
              {item.images.slice(1).map((src, k) => (
                <div key={src} className="min-h-0 flex-1 overflow-hidden rounded-2xl bg-leaf-soft">
                  <img
                    src={src}
                    alt={`${item.title} — photo ${k + 2}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Write-up */}
        <div className="p-6 sm:p-8">
          <h3 className="font-display text-2xl font-bold leading-tight text-ink sm:text-3xl">
            {item.title}
          </h3>
          <div className={cn("mt-4 h-1 w-16 rounded-full", accent.bar)} aria-hidden />
          <p className="mt-5 text-sm leading-relaxed text-ink-soft">{item.description}</p>
        </div>

        {/* Corner close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close details"
          className="absolute right-4 top-4 z-30 rounded-full bg-white/90 p-2 text-ink shadow-md ring-1 ring-ink/10 transition hover:bg-white hover:text-leaf-deep"
        >
          <HiX className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

//HP Initiatives gallery 
function CommunityGallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const scrollToIndex = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(i, communityInitiatives.length - 1));
    const card = track.children[clamped] as HTMLElement | undefined;
    if (card) track.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
  };

    const scrollPrev = () => {
    const track = trackRef.current;
    if (!track) return;
    const children = Array.from(track.children) as HTMLElement[];
    let target = 0;
    for (let i = 0; i < children.length; i++) {
      if (children[i].offsetLeft < track.scrollLeft - 1) target = i;
      else break;
    }
    track.scrollTo({ left: children[target].offsetLeft, behavior: "smooth" });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    // Trailing cards can't fully left-align (not enough scroll room), so once we
    // hit the end, treat the last card as active.
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (maxScroll - track.scrollLeft < 4) {
      setActive(communityInitiatives.length - 1);
      return;
    }
    // Cards snap to their left edge, so match `active` to the card whose left
    // edge is nearest the scroll position (consistent with scrollToIndex).
    let nearest = 0;
    let min = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const el = child as HTMLElement;
      const dist = Math.abs(el.offsetLeft - track.scrollLeft);
      if (dist < min) {
        min = dist;
        nearest = i;
      }
    });
    setActive(nearest);
  };

  return (
    <>
      <section className="border-t border-ink/8 bg-paper py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Connecting with the community"
              title="Human Practices Initatives"
              description="From running workshops to releasing storybooks, here's where our team makes an impact outside the lab."
            />
            <div className="hidden shrink-0 gap-2 sm:flex">
              <button
                type="button"
                onClick={scrollPrev}
                disabled={active === 0}
                aria-label="Previous initiative"
                className="rounded-full border border-ink/15 p-3 text-ink transition hover:bg-ink/5 disabled:cursor-not-allowed disabled:opacity-30"
              >
                <HiChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollToIndex(active + 1)}
                disabled={active === communityInitiatives.length - 1}
                aria-label="Next initiative"
                className="rounded-full border border-ink/15 p-3 text-ink transition hover:bg-ink/5 disabled:cursor-not-allowed disabled:opacity-30"
              >
                <HiChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {communityInitiatives.map((item, i) => {
              const accent = galleryAccents[i % galleryAccents.length];
              // Polaroid design for cards
              return (
                <article
                  key={item.title}
                  onClick={() => setOpenIndex(i)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setOpenIndex(i);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`View details for ${item.title}`}
                  className={cn(
                    "group relative w-[280px] shrink-0 cursor-pointer snap-start rounded-sm border border-ink/10 bg-white p-3 shadow-md transition duration-300 hover:-translate-y-1 hover:rotate-0 hover:shadow-xl sm:w-[340px]",
                    i % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]",
                    accent.shadow
                  )}
                >
                  <span
                    className={cn("absolute -top-2 left-1/2 h-5 w-16 -translate-x-1/2 rotate-[-3deg] opacity-80", accent.bar)}
                    aria-hidden
                  />
                  <div className="relative aspect-[4/5] overflow-hidden bg-leaf-soft">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                      loading="lazy"
                    />
                  </div>
                  <div className="px-1 pb-2 pt-4">
                    <p className={cn("font-mono text-[10px] font-bold uppercase tracking-[0.2em]", accent.eyebrow)}>
                      {item.eyebrow}
                    </p>
                    <h3 className="mt-1 line-clamp-2 font-display text-base font-bold leading-snug text-ink">
                      {item.title}
                    </h3>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {openIndex !== null && (
        <InitiativeModal index={openIndex} onClose={() => setOpenIndex(null)} />
      )}
    </>
  );
}

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
        </div>
      </section>

      <CommunityGallery />
    </>
  );
}