import { useEffect, useRef } from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { LinkedInIcon } from "@/components/ui/LinkedInIcon";
import type { TeamNode } from "@/lib/teamConfig";


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
  const isLeadership = node.groupKey === "PI" || node.groupKey === "advisor";

  const body = (
    <article
      className="overflow-hidden rounded-3xl border border-ink/10 bg-paper-warm shadow-xl shadow-forest/10 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-ink/20 group-hover:shadow-2xl group-active:translate-y-0 group-active:scale-[0.98]"
      style={{ borderTopColor: color, borderTopWidth: 4 }}
    >
      <div
        className={cn(
          "relative w-full overflow-hidden bg-leaf-soft",
          !isLeadership && "h-40 sm:h-56 lg:h-[320px] xl:h-[400px]"
        )}
      >
        {member.cover ? (
          isLeadership ? (
            <img
              src={member.cover}
              alt={`Portrait of ${member.name}`}
              className="block h-auto w-full object-contain object-center"
            />
          ) : (
            <>
              <img
                src={member.cover}
                aria-hidden="true"
                className="absolute inset-0 h-full w-full scale-110 object-cover object-center opacity-60 blur-xl"
              />
              <img
                src={member.cover}
                alt={`Portrait of ${member.name}`}
                className="absolute inset-0 h-full w-full object-contain object-center"
              />
            </>
          )
        ) : (
          <div
            className={cn(
              "flex h-full w-full items-center justify-center bg-gradient-to-br text-3xl font-bold text-white sm:text-4xl lg:text-5xl",
              avatarGradient(member.name)
            )}
          >
            {initials(member.name)}
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/90 to-transparent p-3 pt-8 sm:p-5 sm:pt-16">
          <span className={cn("inline-block rounded-full px-2 py-0.5 font-mono text-[8px] font-bold uppercase tracking-wider text-white sm:px-3 sm:py-1 sm:text-[10px]", node.bar)}>
            {groupLabel}
          </span>
          {role && <p className="mt-1 text-xs font-semibold text-white sm:text-sm">{role}</p>}
        </div>
      </div>

      <div className="p-3 sm:p-5 lg:p-6">
        <div className="flex items-start justify-between gap-2 sm:gap-3">
          <h3 className="font-display text-base font-bold leading-tight sm:text-xl lg:text-2xl xl:text-3xl">{member.name}</h3>
          {member.link && (
            <span
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-transparent bg-transparent text-ink-mute transition-all duration-300 group-hover:text-white group-hover:shadow-md group-active:scale-90 sm:h-9 sm:w-9",
                isLeadership ? "group-hover:bg-maroon-deep" : "group-hover:bg-[#0A66C2]"
              )}
            >
              {isLeadership ? (
                <HiOutlineArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              ) : (
                <LinkedInIcon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              )}
            </span>
          )}
        </div>

        {member.about && (
          <p className="mt-2 text-xs leading-relaxed text-ink-soft sm:mt-3 sm:text-sm lg:text-base">{member.about}</p>
        )}
        {member.funFact && (
          <p className={cn("mt-2 rounded-2xl bg-paper px-3 py-2 text-xs italic leading-relaxed sm:mt-4 sm:px-4 sm:py-3 sm:text-sm", text)}>
            {member.funFact}
          </p>
        )}
      </div>
    </article>
  );

  if (!member.link) {
    return (
      <div ref={ref} className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-lg">
        {body}
      </div>
    );
  }

  return (
    <div ref={ref} className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-lg">
      <a
        href={member.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block rounded-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf"
      >
        {body}
      </a>
    </div>
  );
}

export { MemberProfilePanel };
