import { Link } from "react-router-dom";
import React from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  external?: boolean;
  className?: string;
};

const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon";

const variants = {
  primary:
    "bg-maroon text-white shadow-lg shadow-maroon/20 hover:bg-maroon-deep hover:shadow-maroon/30 active:scale-[0.98]",
  outline:
    "border border-ink/15 bg-paper-warm text-ink hover:border-maroon hover:text-maroon-deep active:scale-[0.98]",
  ghost:
    "border border-white/25 text-white hover:bg-white/10 active:scale-[0.98]",
};

const shimmer = (
  <span
    aria-hidden
    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
  />
);

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  className,
}: ButtonLinkProps) {
  const cls = cn(base, variants[variant], className);

  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {variant === "primary" && shimmer}
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </a>
    );
  }

  return (
    <Link to={href} className={cls}>
      {variant === "primary" && shimmer}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </Link>
  );
}
