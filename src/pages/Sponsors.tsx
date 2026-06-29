import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { HiOutlineMail, HiArrowRight } from "react-icons/hi";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import ButtonLink from "../components/ButtonLink";
import { tierMedals } from "../components/sponsors/SponsorBioDecor";
import {
  sponsorTierMeta,
  sponsorTiers,
  type Sponsor,
  type SponsorTierName,
} from "../data/sponsors";
import { sponsorsPitch } from "@/lib/content";
import { cn } from "@/lib/utils";

function SponsorLogo({
  name,
  icon,
  tier,
}: {
  name: string;
  icon?: string;
  tier: SponsorTierName;
}) {
  const [failed, setFailed] = useState(false);
  const { bio } = sponsorTierMeta[tier];

  if (!icon || failed) {
    return (
      <span className={cn("font-mono text-2xl font-bold", bio.metalSheen)}>
        {name.charAt(0)}
      </span>
    );
  }

  return (
    <img
      src={icon}
      alt={`${name} logo`}
      className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-105"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

function SponsorCard({
  sponsor,
  tier,
}: {
  sponsor: Sponsor;
  tier: SponsorTierName;
}) {
  const { bio } = sponsorTierMeta[tier];
  const Medal = tierMedals[tier];

  return (
    <a
      href={sponsor.link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex h-full overflow-hidden rounded-3xl p-6 transition-all duration-300 sm:p-8",
        bio.card,
        bio.cardHover
      )}
    >
      <div className="absolute right-6 top-6 z-10 opacity-90 transition-transform duration-300 group-hover:scale-110 sm:right-8 sm:top-8">
        <Medal size="sm" />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
        {/* Logo in metal frame */}
        <div className="relative flex w-full shrink-0 items-center justify-center sm:w-44">
          <div className={cn("rounded-2xl p-[3px]", bio.logoFrame)}>
            <div className="relative flex h-32 w-36 items-center justify-center rounded-xl bg-white p-4">
              <div className="relative flex h-full w-full items-center justify-center">
                <SponsorLogo name={sponsor.name} icon={sponsor.icon} tier={tier} />
              </div>
            </div>
          </div>
        </div>

        <div className="relative min-w-0 flex-1 pr-14 sm:pr-16">
          <h3
            className={cn(
              "line-clamp-2 font-display text-xl font-bold leading-snug text-ink transition-colors sm:text-2xl",
              bio.headingHover
            )}
          >
            {sponsor.name}
          </h3>
          <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-ink-soft">
            {sponsor.description}
          </p>
          <p
            className={cn(
              "mt-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider",
              bio.linkText
            )}
          >
            View partner <HiArrowRight className="h-3.5 w-3.5" />
          </p>
        </div>
      </div>
    </a>
  );
}

function TierSection({ tierName }: { tierName: SponsorTierName }) {
  const tier = sponsorTiers.find((t) => t.tier === tierName)!;
  const { label, subtitle, bio } = sponsorTierMeta[tierName];

  return (
    <section className={cn("relative overflow-x-clip py-20 sm:py-28", bio.section)}>
      <div className={cn("absolute inset-0", bio.grid)} aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="tier-heading max-w-2xl">
            <div className={cn("h-1.5 w-24 rounded-full", bio.accent)} aria-hidden />

            <p className={cn("mt-4 font-mono text-xs font-semibold uppercase tracking-[0.28em]", bio.accentText)}>
              {subtitle}
            </p>

            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              {label} sponsor
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid auto-rows-fr gap-8 lg:grid-cols-2">
          {tier.sponsors.map((sponsor, i) => (
            <Reveal key={sponsor.name} delay={i * 0.12} from={i % 2 === 0 ? "left" : "right"} className="h-full">
              <SponsorCard sponsor={sponsor} tier={tierName} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function SponsorsPage() {
  return (
    <>
      <Helmet>
        <title>Sponsors — McMaster iGEM</title>
        <meta
          name="description"
          content="Thank you to the sponsors who make McMaster iGEM possible."
        />
      </Helmet>

      <PageHeader
        eyebrow="Sponsors"
        title="Powered by our partners"
        lede={sponsorsPitch.thanks}
      />

      {sponsorTiers.map((tier) => (
        <TierSection key={tier.tier} tierName={tier.tier} />
      ))}

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
