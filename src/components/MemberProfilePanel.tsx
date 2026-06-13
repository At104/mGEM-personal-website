import React, { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { LinkedInIcon } from "./LinkedInIcon";
import type { TeamNode } from "@/lib/teamConfig";
import type { Member } from "./MemberCard";

const gradients = [
  "from-leaf to-cyan",
  "from-cyan to-violet",
  "from-maroon to-coral",
  "from-violet to-leaf",
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}

function avatarGradient(name: string) {
  const h = name.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  return gradients[h % gradients.length];
}

function MemberProfilePanel({
  node,
  open,
}: {
  node: TeamNode | null;
  open: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !node) return;
    if (open) {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 48, scale: 0.92 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.55, ease: "power3.out" }
      );
    } else {
      gsap.to(el, { autoAlpha: 0, y: 24, scale: 0.96, duration: 0.3, ease: "power2.in" });
    }
  }, [open, node]);

  if (!node) return null;
  const { member, color, text, groupLabel } = node;
  const role = member.role ?? "";

  const body = (
    <article
      className="overflow-hidden rounded-3xl border border-ink/10 bg-paper-warm shadow-2xl shadow-forest/10"
      style={{ borderTopColor: color, borderTopWidth: 4 }}
    >
      <div className="relative h-[320px] w-full overflow-hidden bg-leaf-soft sm:h-[400px]">
        {member.cover ? (
          <img
            src={member.cover}
            alt={`Portrait of ${member.name}`}
            className="absolute inset-0 h-full w-full object-contain object-center"
          />
        ) : (
          <div
            className={cn(
              "flex h-full w-full items-center justify-center bg-gradient-to-br text-5xl font-bold text-white",
              avatarGradient(member.name)
            )}
          >
            {initials(member.name)}
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/90 to-transparent p-5 pt-16">
          <span className={cn("inline-block rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white", node.bar)}>
            {groupLabel}
          </span>
          {role && <p className="mt-1 text-sm font-semibold text-white">{role}</p>}
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-2xl font-bold leading-tight sm:text-3xl">{member.name}</h3>
          {member.link && <LinkedInIcon className="mt-1 shrink-0 text-ink-mute" />}
        </div>

        {member.about && (
          <p className="mt-3 text-base leading-relaxed text-ink-soft">{member.about}</p>
        )}
        {member.funFact && (
          <p className={cn("mt-4 rounded-2xl bg-paper px-4 py-3 text-sm italic leading-relaxed", text)}>
            {member.funFact}
          </p>
        )}
      </div>
    </article>
  );

  if (!member.link) {
    return (
      <div ref={ref} className="w-full max-w-lg">
        {body}
      </div>
    );
  }

  return (
    <div ref={ref} className="w-full max-w-lg">
      <a
        href={member.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf"
      >
        {body}
      </a>
    </div>
  );
}

export { MemberProfilePanel };
export type { Member };
