import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import DnaShowcase from "@/components/about/DnaShowcase";
import { missionIntro, subteams } from "@/lib/content";
import { cn } from "@/lib/utils";

function SubteamShowcase() {
  return (
    <div className="relative isolate mt-16 space-y-16 sm:space-y-24">
      {subteams.map((t, i) => {
        const flip = i % 2 === 1;
        return (
          <Fragment key={t.id}>
            <div className="relative z-10">
            <Reveal from={flip ? "right" : "left"}>
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-0">
              
              <div className={cn("relative", flip ? "lg:order-2" : "lg:order-1")}>
                <div
                  className={cn("pointer-events-none absolute inset-0 translate-y-6 scale-95 rounded-[2rem] opacity-40 blur-2xl", t.bar)}
                  aria-hidden
                />
                <div className="relative overflow-hidden rounded-[2rem] border border-ink/8 shadow-lg">
                  <img src={t.image} alt={t.imageAlt} className="h-72 w-full object-cover sm:h-[28rem]" loading="lazy" />
                </div>
              </div>
              <div className={cn("relative z-10", flip ? "lg:order-1 lg:-mr-12" : "lg:order-2 lg:-ml-12")}>
                <div className="relative overflow-hidden rounded-3xl border border-ink/8 bg-paper p-6 shadow-xl sm:p-8">
                  <span className="pointer-events-none absolute right-3 top-3 font-display text-7xl font-black text-ink/[0.06] sm:text-8xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="relative flex items-center gap-4">
                    <span className={cn("flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl", t.bar)}>
                      <img src={t.icon} alt="" className="h-7 w-7 object-contain [filter:brightness(0)_invert(1)]" />
                    </span>
                    <h3 className="font-display text-2xl font-bold sm:text-3xl">{t.name}</h3>
                  </div>
                  <span className={cn("relative mt-5 block h-1 w-14 rounded-full", t.bar)} />
                  <p className="relative mt-5 leading-relaxed text-ink-soft">{t.body}</p>
                </div>
              </div>
            </div>
            </Reveal>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}

export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>About Us — McMaster iGEM</title>
        <meta name="description" content="Learn about mGEM and the subteams that bring our iGEM projects to life." />
      </Helmet>
      <PageHeader
        eyebrow="About mGEM"
        title="Student-led synthetic biology at McMaster"
        lede={missionIntro}
        aside={<DnaShowcase className="lg:-my-4" />}
      />

      <section className="bg-paper-warm py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Subteams" title="How we're organized" align="center" />
          <SubteamShowcase />
        </div>
      </section>

    </>
  );
}
