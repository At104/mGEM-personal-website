import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import StatStrip from "../components/StatStrip";
import CentralDogma from "../components/CentralDogma";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { subteams, showcasePhotos } from "@/lib/content";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>mGEM — McMaster iGEM</title>
        <meta name="description" content="mGEM is McMaster University's award-winning synthetic biology research and design team, competing annually in the international iGEM competition." />
      </Helmet>
      <Hero />
      <StatStrip />
      <CentralDogma />

      {/* Subteams — horizontal cards with color bars */}
      <section className="border-y border-ink/8 bg-paper-warm py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="How we work"
            title="One team, many disciplines"
            description="Every project is built by subteams working in parallel — from the bench to the browser."
            align="center"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {subteams.map((t, i) => (
              <Reveal key={t.id} delay={(i % 3) * 0.08}>
                <Link
                  to="/about-us"
                  className="group block overflow-hidden rounded-3xl border border-ink/8 bg-paper transition hover:shadow-lg hover:shadow-leaf/10"
                >
                  <span className={`block h-1.5 ${t.bar}`} />
                  <span className="block p-6">
                    <span className={`font-mono text-xs font-bold ${t.text}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-2 block font-display text-xl font-bold">{t.name}</span>
                    <span className="mt-2 block text-sm text-ink-soft">{t.short}</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Photo bento */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <SectionHeading eyebrow="Life at mGEM" title="From lab to Jamboree" align="center" />
        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-4">
          {showcasePhotos.map((p, i) => (
            <Reveal key={p.src} delay={i * 0.06} className={p.span}>
              <div className="group relative h-full min-h-[180px] overflow-hidden rounded-3xl border border-ink/8">
                <img
                  src={p.src}
                  alt={p.alt}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

    </>
  );
}
