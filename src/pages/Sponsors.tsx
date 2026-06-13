import React from "react";
import { Helmet } from "react-helmet-async";
import { HiOutlineMail } from "react-icons/hi";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import ButtonLink from "../components/ButtonLink";
import { sponsorTiers } from "../data/sponsors";
import { sponsorsPitch } from "@/lib/content";

export default function SponsorsPage() {
  return (
    <>
      <Helmet>
        <title>Sponsors — McMaster iGEM</title>
        <meta name="description" content="Thank you to the sponsors who make McMaster iGEM possible." />
      </Helmet>
      <PageHeader
        eyebrow="Sponsors"
        title="Powered by our partners"
        lede={sponsorsPitch.thanks}
      />

      <div className="mx-auto max-w-7xl space-y-20 px-6 py-20">
        {sponsorTiers.map((tier) => (
          <section key={tier.tier}>
            <Reveal>
              <span className={`inline-block rounded-full px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wider ${tier.badge}`}>
                {tier.tagline}
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold">{tier.tier}</h2>
            </Reveal>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {tier.sponsors.map((s, i) => (
                <Reveal key={s.name} delay={(i % 2) * 0.08}>
                  <a
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col gap-5 rounded-3xl border border-ink/8 bg-paper-warm p-6 transition hover:shadow-lg sm:flex-row"
                  >
                    <div className="relative h-28 w-full shrink-0 overflow-hidden rounded-2xl border border-ink/5 bg-paper sm:w-40">
                      <img src={s.icon} alt={`${s.name} logo`} className="absolute inset-0 h-full w-full object-contain p-3" loading="lazy" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold group-hover:text-maroon">{s.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.description}</p>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="bg-maroon-deep py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/60">Partner with us</p>
            <h2 className="mt-3 font-display text-3xl font-bold">Sponsorship & collaboration</h2>
            <p className="mt-3 text-white/70">{sponsorsPitch.cta}</p>
          </div>
          <ButtonLink href={`mailto:${sponsorsPitch.email}`} variant="ghost" external>
            <HiOutlineMail aria-hidden /> Email us
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
