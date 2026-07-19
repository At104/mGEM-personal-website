import React from "react";
import { Link } from "react-router-dom";
import { SiGmail, SiInstagram } from "react-icons/si";
import { MdBiotech } from "react-icons/md";
import { landAcknowledgment, socials } from "@/lib/content";
import { LinkedInIcon } from "@/components/ui/LinkedInIcon";

const icons = [SiGmail, SiInstagram, LinkedInIcon, MdBiotech];

export default function Footer() {
  return (
    <footer className="bg-paper text-ink">
      <div className="h-0.5 w-full bg-gradient-to-r from-maroon-deep via-maroon to-maroon-light" />
      <div className="section-divider border-b border-ink/8" aria-hidden />

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img src="/photos/site/MGEM-Logo.png" alt="" width={48} height={32} className="h-8 w-auto" />
              <span className="font-display text-2xl font-bold">mGEM</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
              McMaster University&apos;s synthetic biology research and design team, competing annually in the international iGEM competition.
            </p>
            <div className="mt-4 flex gap-3">
              {socials.map((s, i) => {
                const Icon = icons[i];
                return (
                  <a
                    key={s.label}
                    href={s.link}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-ink/8 p-2.5 transition hover:bg-maroon hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-maroon">Pages</p>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              {["About Us", "Our Team", "Projects", "Sponsors", "News", "Get Involved"].map((label, i) => {
                const hrefs = ["/about-us", "/our-team", "/projects", "/sponsors", "/news", "/get-involved"];
                return (
                  <li key={label}>
                    <Link to={hrefs[i]} className="transition hover:text-ink">
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-maroon">Land acknowledgment</p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">{landAcknowledgment}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-ink/8 pt-5 text-xs text-ink-mute sm:flex-row">
          <p>© {new Date().getFullYear()} mGEM — McMaster iGEM</p>
          <a href="mailto:igem@mcmaster.ca" className="hover:text-ink">
            igem@mcmaster.ca
          </a>
        </div>
      </div>
    </footer>
  );
}
