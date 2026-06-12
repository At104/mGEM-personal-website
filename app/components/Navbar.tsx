"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { cn } from "@/lib/utils";

const links = [
  { label: "About", href: "/about-us" },
  { label: "Team", href: "/our-team" },
  { label: "Projects", href: "/projects" },
  { label: "Sponsors", href: "/sponsors" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-ink/8 bg-paper-warm/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="h-0.5 w-full bg-gradient-to-r from-maroon via-leaf via-45% to-cyan" />

      <nav aria-label="Main" className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="mGEM home">
          <Image src="/MGEM-Logo.png" alt="" width={40} height={26} className="h-7 w-auto" priority />
          <div className="leading-none">
            <span className="font-display text-lg font-bold tracking-tight">mGEM</span>
            <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-ink-mute">McMaster iGEM</span>
          </div>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  pathname === l.href
                    ? "bg-leaf-soft text-leaf-deep"
                    : "text-ink-soft hover:bg-ink/5 hover:text-ink"
                )}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="ml-2">
            <Link
              href="/get-involved"
              className="rounded-full bg-leaf px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-leaf/20 transition hover:bg-leaf-deep"
            >
              Get Involved
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="rounded-full p-2 md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiX className="h-6 w-6" /> : <HiMenuAlt3 className="h-6 w-6" />}
        </button>
      </nav>

      <div className={cn("grid transition-all duration-300 md:hidden", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <div className="overflow-hidden border-t border-ink/8 bg-paper-warm">
          <ul className="space-y-1 px-6 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="block rounded-xl px-4 py-3 font-display font-semibold" onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link href="/get-involved" className="block rounded-xl bg-leaf px-4 py-3 text-center font-semibold text-white" onClick={() => setOpen(false)}>
                Get Involved
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
