/** Bio + medal decorations for the sponsors page. */

import type { ReactNode } from "react";

type MedalProps = { className?: string; size?: "sm" | "lg" };

function MedalBase({
  className,
  size = "lg",
  metalId,
  ribbonA,
  ribbonB,
  rim,
  face,
  shine,
  children,
}: MedalProps & {
  metalId: string;
  ribbonA: string;
  ribbonB: string;
  rim: string;
  face: string;
  shine: string;
  children?: ReactNode;
}) {
  const dim = size === "lg" ? 120 : 56;

  return (
    <svg
      viewBox="0 0 120 140"
      width={dim}
      height={(dim * 140) / 120}
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id={`${metalId}-face`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={face} stopOpacity="1" />
          <stop offset="45%" stopColor={shine} stopOpacity="1" />
          <stop offset="100%" stopColor={rim} stopOpacity="1" />
        </linearGradient>
        <linearGradient id={`${metalId}-ribbon`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={ribbonA} />
          <stop offset="100%" stopColor={ribbonB} />
        </linearGradient>
      </defs>
      {/* Ribbon */}
      <path d="M38 0 L52 36 L60 28 L68 36 L82 0 Z" fill={`url(#${metalId}-ribbon)`} />
      <path d="M46 0 L52 36 L60 28" fill="white" fillOpacity="0.12" />
      {/* Outer rim */}
      <circle cx="60" cy="88" r="44" fill={rim} />
      {/* Face */}
      <circle cx="60" cy="88" r="38" fill={`url(#${metalId}-face)`} />
      <circle cx="60" cy="88" r="38" fill="none" stroke="white" strokeOpacity="0.35" strokeWidth="1.5" />
      <ellipse cx="48" cy="76" rx="14" ry="8" fill="white" fillOpacity="0.22" />
      {children}
    </svg>
  );
}

function MedalNumeral({ n, metalId, rim }: { n: number; metalId: string; rim: string }) {
  const textProps = {
    x: 0,
    y: 13,
    textAnchor: "middle" as const,
    fontFamily: "var(--font-display, Georgia, serif)",
    fontWeight: 800,
    fontSize: "38",
  };

  return (
    <g transform="translate(60 90)">
      {/* recessed shadow, offset down-right */}
      <text {...textProps} x={1.4} y={14.4} fill="black" fillOpacity="0.3">
        {n}
      </text>
      {/* raised highlight, offset up-left */}
      <text {...textProps} x={-1} y={11.6} fill="white" fillOpacity="0.55">
        {n}
      </text>
      {/* metallic body, same material as the medal face */}
      <text
        {...textProps}
        fill={`url(#${metalId}-face)`}
        stroke={rim}
        strokeOpacity="0.5"
        strokeWidth="0.75"
      >
        {n}
      </text>
    </g>
  );
}

function MedalAtom({ rim }: { rim: string }) {
  return (
    <g transform="translate(60 88)">
      <ellipse rx="24" ry="10" fill="none" stroke={rim} strokeOpacity="0.75" strokeWidth="1.8" />
      <ellipse rx="24" ry="10" fill="none" stroke={rim} strokeOpacity="0.75" strokeWidth="1.8" transform="rotate(60)" />
      <ellipse rx="24" ry="10" fill="none" stroke="white" strokeOpacity="0.6" strokeWidth="1.8" transform="rotate(120)" />
      <circle r="6" fill={rim} />
      <circle r="6" fill="none" stroke="white" strokeOpacity="0.5" strokeWidth="1" />
      <circle cx="24" cy="0" r="2.4" fill="white" fillOpacity="0.9" />
    </g>
  );
}

export function PlatinumMedal({ className, size }: MedalProps) {
  const rim = "#2A96A8";
  return (
    <MedalBase
      className={className}
      size={size}
      metalId="platinum-medal"
      ribbonA="#0E5C6E"
      ribbonB="#063845"
      rim={rim}
      face="#5BC8D8"
      shine="#E0F7FA"
    >
      <MedalAtom rim={rim} />
    </MedalBase>
  );
}

export function GoldMedal({ className, size }: MedalProps) {
  const rim = "#9A7B0A";
  const ribbonB = "#5E0230";
  return (
    <MedalBase
      className={className}
      size={size}
      metalId="gold-medal"
      ribbonA="#7A003C"
      ribbonB={ribbonB}
      rim={rim}
      face="#C9A227"
      shine="#F4E08A"
    >
      <MedalNumeral n={1} metalId="gold-medal" rim={rim} />
    </MedalBase>
  );
}

export function SilverMedal({ className, size }: MedalProps) {
  const rim = "#888888";
  const ribbonB = "#0C1B14";
  return (
    <MedalBase
      className={className}
      size={size}
      metalId="silver-medal"
      ribbonA="#3A4A42"
      ribbonB={ribbonB}
      rim={rim}
      face="#C8C8C8"
      shine="#F5F5F5"
    >
      <MedalNumeral n={2} metalId="silver-medal" rim={rim} />
    </MedalBase>
  );
}

export function BronzeMedal({ className, size }: MedalProps) {
  const rim = "#8B5A2B";
  const ribbonB = "#5C3310";
  return (
    <MedalBase
      className={className}
      size={size}
      metalId="bronze-medal"
      ribbonA="#8B4513"
      ribbonB={ribbonB}
      rim={rim}
      face="#CD7F32"
      shine="#E8A55B"
    >
      <MedalNumeral n={3} metalId="bronze-medal" rim={rim} />
    </MedalBase>
  );
}

export function DnaHelix({ className }: { className?: string }) {
  const rungs = Array.from({ length: 9 }, (_, i) => {
    const y = 14 + i * 16;
    const phase = (i / 9) * Math.PI * 2;
    const x1 = 50 + Math.cos(phase) * 28;
    const x2 = 50 + Math.cos(phase + Math.PI) * 28;
    return { y, x1, x2, i };
  });

  return (
    <svg viewBox="0 0 100 160" className={className} aria-hidden>
      {rungs.map(({ y, x1, x2, i }) => (
        <g key={i}>
          <line x1={x1} y1={y} x2={x2} y2={y} stroke="#A8A8A8" strokeOpacity="0.4" strokeWidth="1.5" />
          <circle cx={x1} cy={y} r="5" fill={i % 2 === 0 ? "#C0C0C0" : "#888888"} />
          <circle cx={x2} cy={y} r="5" fill={i % 2 === 0 ? "#888888" : "#C0C0C0"} />
        </g>
      ))}
    </svg>
  );
}

export function RnaStrand({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 64" className={className} aria-hidden>
      <path
        d="M4 32 Q36 4, 68 32 T132 32 T196 32"
        fill="none"
        stroke="#E8C547"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {[16, 48, 80, 112, 144, 176].map((x, i) => (
        <circle
          key={i}
          cx={x}
          cy={32 + (i % 2 === 0 ? -10 : 10)}
          r="6"
          fill={["#E8C547", "#C9A227", "#F4E08A", "#E8C547", "#C9A227", "#F4E08A"][i]}
        />
      ))}
    </svg>
  );
}

export function PromoterDiagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 48" className={className} aria-hidden>
      <line x1="8" y1="24" x2="200" y2="24" stroke="#CD7F32" strokeOpacity="0.35" strokeWidth="2" />
      <rect x="24" y="14" width="36" height="20" rx="2" fill="none" stroke="#CD7F32" strokeOpacity="0.55" strokeWidth="1.5" strokeDasharray="3 2" />
      <rect x="72" y="14" width="28" height="20" rx="2" fill="none" stroke="#CD7F32" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="3 2" />
      <polygon points="118,24 132,16 132,32" fill="#CD7F32" fillOpacity="0.75" />
      <rect x="138" y="10" width="56" height="28" rx="3" fill="#CD7F32" fillOpacity="0.12" stroke="#CD7F32" strokeOpacity="0.45" />
    </svg>
  );
}

export function GelLane({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 120" className={className} aria-hidden>
      <rect x="1" y="1" width="22" height="118" rx="2" fill="none" stroke="currentColor" strokeOpacity="0.2" />
      {[18, 38, 58, 78, 98].map((y, i) => (
        <rect
          key={i}
          x="6"
          y={y}
          width="12"
          height={i === 2 ? 14 : 8}
          rx="1"
          fill="currentColor"
          fillOpacity={0.15 + i * 0.07}
        />
      ))}
    </svg>
  );
}

export function PlasmidRing({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden>
      <circle cx="40" cy="40" r="32" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2" />
      <circle cx="40" cy="40" r="22" fill="none" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="4 3" />
      <circle cx="68" cy="40" r="4" fill="#C0C0C0" fillOpacity="0.9" />
      <circle cx="40" cy="12" r="3" fill="#888888" fillOpacity="0.8" />
    </svg>
  );
}

export const tierMedals = {
  Platinum: PlatinumMedal,
  Gold: GoldMedal,
  Silver: SilverMedal,
  Bronze: BronzeMedal,
} as const;
