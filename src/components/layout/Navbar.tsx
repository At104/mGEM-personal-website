import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { cn } from "@/lib/utils";

const links = [
  { label: "About", href: "/about-us" },
  { label: "Team", href: "/our-team" },
  { label: "Projects", href: "/projects" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "News", href: "/news" },
];

export default function Navbar() {
  const location = useLocation();
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
      <div className="h-0.5 w-full bg-gradient-to-r from-maroon-deep via-maroon to-maroon-light" />

      <nav aria-label="Main" className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3" aria-label="mGEM home">
          <img src="/photos/site/MGEM-Logo.png" alt="" width={40} height={26} className="h-7 w-auto" />
          <div className="leading-none">
            <span className="font-display text-lg font-bold tracking-tight">mGEM</span>
            <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-ink-mute">McMaster iGEM</span>
          </div>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                to={l.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  location.pathname === l.href
                    ? "bg-maroon-soft text-maroon-deep"
                    : "text-ink-soft hover:bg-ink/5 hover:text-ink"
                )}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="ml-2">
            <Link
              to="/get-involved"
              className="rounded-full bg-maroon px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-maroon/20 transition hover:bg-maroon-deep"
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
                <Link to={l.href} className="block rounded-xl px-4 py-3 font-display font-semibold" onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link to="/get-involved" className="block rounded-xl bg-maroon px-4 py-3 text-center font-semibold text-white" onClick={() => setOpen(false)}>
                Get Involved
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
