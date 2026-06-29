/** Bio + medal decorations for the sponsors page. */

import React from "react";

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
  children?: React.ReactNode;
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

export function GoldMedal({ className, size }: MedalProps) {
  return (
    <MedalBase
      className={className}
      size={size}
      metalId="gold-medal"
      ribbonA="#7A003C"
      ribbonB="#5E0230"
      rim="#9A7B0A"
      face="#C9A227"
      shine="#F4E08A"
    >
      <text
        x="60"
        y="96"
        textAnchor="middle"
        fill="#5C4A08"
        fontSize="28"
        fontWeight="bold"
        fontFamily="var(--font-display, Georgia, serif)"
      >
        1
      </text>
    </MedalBase>
  );
}

export function SilverMedal({ className, size }: MedalProps) {
  return (
    <MedalBase
      className={className}
      size={size}
      metalId="silver-medal"
      ribbonA="#3A4A42"
      ribbonB="#0C1B14"
      rim="#888888"
      face="#C8C8C8"
      shine="#F5F5F5"
    >
      <text
        x="60"
        y="96"
        textAnchor="middle"
        fill="#555555"
        fontSize="28"
        fontWeight="bold"
        fontFamily="var(--font-display, Georgia, serif)"
      >
        2
      </text>
    </MedalBase>
  );
}

export function BronzeMedal({ className, size }: MedalProps) {
  return (
    <MedalBase
      className={className}
      size={size}
      metalId="bronze-medal"
      ribbonA="#8B4513"
      ribbonB="#5C3310"
      rim="#8B5A2B"
      face="#CD7F32"
      shine="#E8A55B"
    >
      <text
        x="60"
        y="96"
        textAnchor="middle"
        fill="#5C3310"
        fontSize="28"
        fontWeight="bold"
        fontFamily="var(--font-display, Georgia, serif)"
      >
        3
      </text>
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
  Gold: GoldMedal,
  Silver: SilverMedal,
  Bronze: BronzeMedal,
} as const;
