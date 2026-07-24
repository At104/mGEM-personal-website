import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Helmet } from "react-helmet-async";
import { HiArrowRight, HiOutlineExternalLink, HiVolumeOff, HiVolumeUp, HiPlay, HiPause, HiX } from "react-icons/hi";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import VideoPlayer from "@/components/ui/VideoPlayer";
import ButtonLink from "@/components/ui/ButtonLink";
import { projects, communityInitiatives } from "@/lib/content";
import { cn } from "@/lib/utils";

// Rotating accent colours applied per-card in CommunityGallery and InitiativeModal.
// Add/remove entries here to change the colour cycle — order matches card index % length.
const galleryAccents = [
  { eyebrow: "text-cyan-deep",   bar: "bg-cyan",   shadow: "hover:shadow-cyan/20" },
  { eyebrow: "text-amber-deep",  bar: "bg-amber",  shadow: "hover:shadow-amber/20" },
  { eyebrow: "text-coral-deep",  bar: "bg-coral",  shadow: "hover:shadow-coral/20" },
  { eyebrow: "text-violet-deep", bar: "bg-violet", shadow: "hover:shadow-violet/20" },
  { eyebrow: "text-leaf-deep",   bar: "bg-leaf",   shadow: "hover:shadow-leaf/20" },
];

// Video player for past project archive cards. Autoplays muted; exposes play/pause and mute controls.
function PastProjectVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [paused, setPaused] = useState(false);

  const btnCls = "rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition hover:bg-black/70";

  const togglePlay = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    if (paused) { v.play().catch(() => {}); } else { v.pause(); }
    setPaused(!paused);
  };

  const toggleMute = (e: MouseEvent) => {
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

// ─── InitiativeModal ─────────────────────────────────────────────────────────
// Full-screen modal that shows detail for a single HP initiative.
// Opened by CommunityGallery when a polaroid card is clicked.
// Data comes from communityInitiatives[index] in src/lib/content.ts.
// Locks body scroll while open; closes on Escape key or backdrop click.
function InitiativeModal({ index, onClose }: { index: number; onClose: () => void }) {
  const item = communityInitiatives[index];
  const accent = galleryAccents[index % galleryAccents.length];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-label={item.title}>
      <button type="button" aria-label="Close details" onClick={onClose} className="absolute inset-0 h-full w-full cursor-default bg-forest/70 backdrop-blur-sm" />
      <div className="relative z-10 flex max-h-[88vh] w-full max-w-2xl flex-col overflow-y-auto rounded-3xl bg-paper-warm text-ink shadow-2xl [scrollbar-color:#c9c3b2_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#c9c3b2] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-2">
        <span className={cn("absolute inset-x-0 top-0 z-20 h-1.5", accent.bar)} aria-hidden />
        <div className="flex h-60 shrink-0 gap-2 p-3 sm:h-72">
          <div className="min-w-0 flex-[1.6] overflow-hidden rounded-2xl bg-leaf-soft">
            <img src={item.images[0]} alt={`${item.title} — photo 1`} className="h-full w-full object-cover" loading="lazy" />
          </div>
          {item.images.length > 1 && (
            <div className="flex flex-1 flex-col gap-2">
              {item.images.slice(1).map((src, k) => (
                <div key={src} className="min-h-0 flex-1 overflow-hidden rounded-2xl bg-leaf-soft">
                  <img src={src} alt={`${item.title} — photo ${k + 2}`} className="h-full w-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="p-6 sm:p-8">
          <h3 className="font-display text-2xl font-bold leading-tight text-ink sm:text-3xl">{item.title}</h3>
          <div className={cn("mt-4 h-1 w-16 rounded-full", accent.bar)} aria-hidden />
          <p className="mt-5 text-sm leading-relaxed text-ink-soft">{item.description}</p>
        </div>
        <button type="button" onClick={onClose} aria-label="Close details" className="absolute right-4 top-4 z-30 rounded-full bg-white/90 p-2 text-ink shadow-md ring-1 ring-ink/10 transition hover:bg-white hover:text-leaf-deep">
          <HiX className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

// ─── CommunityGallery ────────────────────────────────────────────────────────
// "Human Practices Initiatives" section — horizontal scrolling polaroid gallery.
// Data comes from communityInitiatives[] in src/lib/content.ts.
// Clicking a card opens InitiativeModal. Slider below the track maps directly
// to scrollLeft so dragging is frame-smooth (no behavior:"smooth" fighting the input).
function CommunityGallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [sliderVal, setSliderVal] = useState(0);
  const [maxScroll, setMaxScroll] = useState(1);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => setMaxScroll(track.scrollWidth - track.clientWidth || 1);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    setSliderVal(track.scrollLeft);
  };

  return (
    <>
      <section className="border-t border-ink/8 bg-paper py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Connecting with the community"
            title="Human Practices Initiatives"
            description="From running workshops to releasing storybooks, here's where our team makes an impact outside the lab."
          />
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="mt-12 flex gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {communityInitiatives.map((item, i) => {
              const accent = galleryAccents[i % galleryAccents.length];
              return (
                <article
                  key={item.title}
                  onClick={() => setOpenIndex(i)}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpenIndex(i); } }}
                  role="button"
                  tabIndex={0}
                  aria-label={`View details for ${item.title}`}
                  className={cn(
                    "group relative w-[280px] shrink-0 cursor-pointer rounded-sm border border-ink/10 bg-white p-3 shadow-md transition duration-300 hover:-translate-y-1 hover:rotate-0 hover:shadow-xl sm:w-[340px]",
                    i % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]",
                    accent.shadow
                  )}
                >
                  <span className={cn("absolute -top-2 left-1/2 h-5 w-16 -translate-x-1/2 rotate-[-3deg] opacity-80", accent.bar)} aria-hidden />
                  <div className="relative aspect-[4/5] overflow-hidden bg-leaf-soft">
                    <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0" loading="lazy" />
                  </div>
                  <div className="px-1 pb-2 pt-4">
                    <p className={cn("font-mono text-[10px] font-bold uppercase tracking-[0.2em]", accent.eyebrow)}>{item.eyebrow}</p>
                    <h3 className="mt-1 line-clamp-2 font-display text-base font-bold leading-snug text-ink">{item.title}</h3>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="mt-6 mx-auto w-48">
            <input
              type="range"
              min={0}
              max={maxScroll}
              value={sliderVal}
              onChange={(e) => {
                const val = Number(e.target.value);
                setSliderVal(val);
                if (trackRef.current) trackRef.current.scrollLeft = val;
              }}
              aria-label="Browse initiatives"
              className="w-full cursor-pointer appearance-none bg-transparent [&::-webkit-slider-runnable-track]:h-1.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-ink/15 [&::-webkit-slider-thumb]:mt-[-5px] [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-ink [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-150 [&::-webkit-slider-thumb]:hover:scale-125 [&::-moz-range-track]:h-1.5 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-ink/15 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-ink"
            />
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
        <meta name="description" content="Explore McMaster iGEM's current and past competition projects." />
      </Helmet>
      <PageHeader
        eyebrow="Projects"
        title="Building Biology, Season After Season"
        lede="Each year McMaster iGEM designs and builds a new synthetic biology project for the international iGEM competition."
      />

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-20">
        <SectionHeading eyebrow="Latest project" title={`${current.year} Season`} />
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
                      "image" in p && p.image && (
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
