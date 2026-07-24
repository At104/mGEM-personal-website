import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import { HiOutlineExternalLink } from "react-icons/hi";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ButtonLink from "@/components/ui/ButtonLink";
import MailingListForm from "@/components/get-involved/MailingListForm";
import { getInvolved, testimonies, socials } from "@/lib/content";

const INSTAGRAM_URL = socials.find(s => s.label === "Instagram")!.link;
const INSTAGRAM_EMBED = "https://www.instagram.com/igemmcmaster/embed";

const paths = [
  { ...getInvolved.joinTeam, bar: "bg-leaf", accent: "text-leaf-deep" },
];

const TESTIMONY_COLORS = ["text-leaf", "text-cyan", "text-amber"] as const;

export default function GetInvolvedPage() {
  return (
    <>
      <Helmet>
        <title>Get Involved — McMaster iGEM</title>
        <meta name="description" content="Join mGEM — apply to a subteam and follow us on Instagram." />
      </Helmet>
      <PageHeader eyebrow="Get Involved" title="Join the McMaster iGEM Community" lede={getInvolved.intro} />

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {paths.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-ink/8 bg-paper-warm">
                <span className={`block h-1.5 ${p.bar}`} />
                <div className="px-8 pb-4 pt-8">
                  <span className={`font-mono text-xs font-bold ${p.accent}`}>{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="mt-2 font-display text-2xl font-bold">{p.title}</h2>
                </div>
                <div className="flex flex-1 flex-col px-8 pb-8">
                  <p className="flex-1 text-sm leading-relaxed text-ink-soft">
                    {p.body.split("@igemmcmaster").map((part, idx, parts) => (
                      <Fragment key={idx}>
                        {part}
                        {idx < parts.length - 1 && (
                          <a
                            href={INSTAGRAM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-ink-soft underline underline-offset-2 transition hover:text-maroon"
                          >
                            @igemmcmaster
                          </a>
                        )}
                      </Fragment>
                    ))}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col overflow-visible rounded-3xl border border-ink/8 bg-paper-warm">
              <span className="block h-1.5 rounded-t-3xl bg-cyan" />
              <div className="px-8 pb-4 pt-8">
                <span className="font-mono text-xs font-bold text-cyan-deep">{String(paths.length + 1).padStart(2, "0")}</span>
                <h2 className="mt-2 font-display text-2xl font-bold">Follow Our Instagram</h2>
              </div>
              <iframe
                src={INSTAGRAM_EMBED}
                title="@igemmcmaster on Instagram"
                className="min-h-[480px] w-full flex-1 border-0"
                loading="lazy"
                allow="encrypted-media; clipboard-write"
              />
              <div className="flex justify-center px-8 pb-8 pt-4">
                <div className="group relative">
                  <ButtonLink href={INSTAGRAM_URL} external>
                    View on Instagram <HiOutlineExternalLink aria-hidden />
                  </ButtonLink>
                  <span
                    role="tooltip"
                    className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 w-56 -translate-x-1/2 rounded-xl border border-ink/8 bg-paper px-3 py-2 text-center text-xs leading-relaxed text-ink-soft opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100"
                  >
                    Follow us for the latest events and updates!
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="relative min-h-[280px] overflow-hidden rounded-3xl border border-ink/8 lg:min-h-full">
              <img
                src="/photos/get-involved/GeneralMembers.jpg"
                alt="mGEM general members"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-ink/8 bg-paper-warm py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Testimonies" title="What Members Say" align="center" />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonies.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <figure className="flex h-full flex-col rounded-3xl border border-ink/8 bg-paper p-8">
                  <span className={`font-display text-4xl leading-none ${TESTIMONY_COLORS[i]}`} aria-hidden>
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
