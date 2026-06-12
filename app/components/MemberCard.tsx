import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LinkedInIcon } from "./LinkedInIcon";
import { cn } from "@/lib/utils";

export type Member = {
  name: string;
  about: string;
  link: string;
  cover: string;
  funFact: string;
};

const gradients = [
  "from-leaf to-cyan",
  "from-cyan to-violet",
  "from-amber to-coral",
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

function grad(name: string) {
  const h = name.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  return gradients[h % gradients.length];
}

export default function MemberCard({ member }: { member: Member }) {
  const inner = (
    <article className="group relative h-full overflow-hidden rounded-3xl border border-ink/8 bg-paper-warm transition-shadow duration-300 hover:shadow-xl hover:shadow-leaf/10">
      <div className="relative aspect-[4/5] overflow-hidden bg-leaf-soft">
        {member.cover ? (
          <Image
            src={member.cover}
            alt={`Portrait of ${member.name}`}
            fill
            sizes="(max-width:640px) 100vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className={cn("flex h-full w-full items-center justify-center bg-gradient-to-br", grad(member.name))}>
            <span className="font-display text-5xl font-bold text-white/90">{initials(member.name)}</span>
          </div>
        )}
        {member.funFact && (
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-forest/95 via-forest/50 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="text-sm leading-snug text-white">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-leaf-300">Fun fact</span>
              <br />
              {member.funFact}
            </p>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-bold leading-tight">{member.name}</h3>
          {member.link && <LinkedInIcon className="mt-1 shrink-0 text-ink-mute group-hover:text-leaf" />}
        </div>
        <p className="mt-1.5 text-sm leading-snug text-ink-soft">{member.about}</p>
      </div>
    </article>
  );

  if (!member.link) return inner;
  return (
    <Link href={member.link} target="_blank" rel="noopener noreferrer" className="block h-full rounded-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf">
      {inner}
    </Link>
  );
}
