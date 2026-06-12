import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SiGmail, SiInstagram } from "react-icons/si";
import { MdBiotech } from "react-icons/md";
import { landAcknowledgment, socials } from "@/lib/content";
import { LinkedInIcon } from "./LinkedInIcon";

const icons = [SiGmail, SiInstagram, LinkedInIcon, MdBiotech];

export default function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="h-0.5 w-full bg-gradient-to-r from-maroon via-leaf to-cyan" />
      <div className="section-divider-dark border-b border-white/10" aria-hidden />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image src="/MGEM-Logo.png" alt="" width={48} height={32} className="h-8 w-auto" />
              <span className="font-display text-2xl font-bold">mGEM</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              McMaster University&apos;s synthetic biology research and design team, competing annually in the international iGEM competition.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s, i) => {
                const Icon = icons[i];
                return (
                  <a
                    key={s.label}
                    href={s.link}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white/10 p-2.5 transition hover:bg-leaf"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-leaf-300">Pages</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {["About Us", "Our Team", "Projects", "Sponsors", "Get Involved"].map((label, i) => {
                const hrefs = ["/about-us", "/our-team", "/projects", "/sponsors", "/get-involved"];
                return (
                  <li key={label}>
                    <Link href={hrefs[i]} className="transition hover:text-white">
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-leaf-300">Land acknowledgment</p>
            <p className="mt-4 text-sm leading-relaxed text-white/60">{landAcknowledgment}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p suppressHydrationWarning>© {new Date().getFullYear()} mGEM — McMaster iGEM</p>
          <a href="mailto:igemmcmaster@gmail.com" className="hover:text-white">
            igemmcmaster@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
