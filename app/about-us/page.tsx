import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import StatStrip from "../components/StatStrip";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import ButtonLink from "../components/ButtonLink";
import { missionIntro, igemIntro, subteams } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about mGEM and the subteams that bring our iGEM projects to life.",
};

export default function AboutUs() {
  return (
    <>
      <PageHeader
        eyebrow="About mGEM"
        title="Student-led synthetic biology at McMaster"
        lede={missionIntro}
      />
      <StatStrip />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading eyebrow="Our mission" title="Novel biology, real-world impact" />
        <Reveal delay={0.1} className="mt-8 max-w-3xl text-lg leading-relaxed text-ink-soft">
          {igemIntro}
        </Reveal>
      </section>

      <section className="border-t border-ink/8 bg-paper-warm py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Subteams" title="How we're organized" align="center" />
          <div className="mt-16 space-y-20">
            {subteams.map((t, i) => {
              const flip = i % 2 === 1;
              return (
                <div key={t.id} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  <Reveal from={flip ? "right" : "left"} className={cn(flip && "lg:order-2")}>
                    <div className="overflow-hidden rounded-3xl border border-ink/8 shadow-lg">
                      <Image src={t.image} alt={t.imageAlt} width={720} height={480} className="h-72 w-full object-cover sm:h-96" />
                    </div>
                  </Reveal>
                  <Reveal from={flip ? "left" : "right"} delay={0.08} className={cn(flip && "lg:order-1")}>
                    <span className={`font-mono text-xs font-bold ${t.text}`}>{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">{t.name}</h3>
                    <span className={`mt-4 block h-1 w-14 rounded-full ${t.bar}`} />
                    <p className="mt-5 leading-relaxed text-ink-soft">{t.body}</p>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <SectionHeading align="center" eyebrow="Join us" title="Meet the people behind the science" />
        <Reveal delay={0.1} className="mt-8 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/our-team">Our team</ButtonLink>
          <ButtonLink href="/get-involved" variant="outline">Get involved</ButtonLink>
        </Reveal>
      </section>
    </>
  );
}
