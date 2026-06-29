import React from "react";
import { Helmet } from "react-helmet-async";
import { HiOutlineExternalLink } from "react-icons/hi";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import ButtonLink from "../components/ButtonLink";
import MailingListForm from "../components/MailingListForm";
import { getInvolved, testimonies } from "@/lib/content";

const paths = [
  { ...getInvolved.joinTeam, bar: "bg-leaf", accent: "text-leaf-deep" },
  { ...getInvolved.generalMember, bar: "bg-cyan", accent: "text-cyan-deep" },
];

export default function GetInvolvedPage() {
  return (
    <>
      <Helmet>
        <title>Get Involved — McMaster iGEM</title>
        <meta name="description" content="Join mGEM — apply to a subteam or become a general member." />
      </Helmet>
      <PageHeader eyebrow="Get involved" title="Join the mGEM community" lede={getInvolved.intro} />

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {paths.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-ink/8 bg-paper-warm">
                <span className={`block h-1.5 ${p.bar}`} />
                <div className="flex flex-1 flex-col p-8">
                  <span className={`font-mono text-xs font-bold ${p.accent}`}>{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="mt-2 font-display text-2xl font-bold">{p.title}</h2>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">{p.body}</p>
                  <ButtonLink href={p.href} external className="mt-6 self-start">
                    {p.cta} <HiOutlineExternalLink aria-hidden />
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.16}>
            <div className="relative min-h-[280px] overflow-hidden rounded-3xl border border-ink/8 lg:min-h-full">
              <img src="/photos/get-involved/GeneralMembers.jpg" alt="mGEM general members" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-ink/8 bg-paper-warm py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Testimonies" title="What members say" align="center" />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonies.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <figure className="flex h-full flex-col rounded-3xl border border-ink/8 bg-paper p-8">
                  <span className={`font-display text-4xl leading-none ${["text-leaf", "text-cyan", "text-amber"][i]}`} aria-hidden>
                    &ldquo;
                  </span>
                  <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{t.quote}</blockquote>
                  <figcaption className="mt-6 border-t border-ink/8 pt-4">
                    <p className="font-display font-bold">{t.name}</p>
                    <p className="text-sm text-ink-mute">{t.title}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <SectionHeading eyebrow="Mailing list" title="Never miss a workshop" description={getInvolved.mailingListBlurb} />
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-ink/8 bg-paper-warm p-8 shadow-lg">
              <MailingListForm />
            </div>
          </Reveal>
        </div>
        <div className="section-divider mx-auto mt-16 max-w-7xl" aria-hidden />
      </section>
    </>
  );
}
