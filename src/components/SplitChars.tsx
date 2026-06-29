
import React from "react";
import { cn } from "@/lib/utils";

type SplitCharsProps = {
  text: string;
  brand?: boolean;
  className?: string;
};

/** Per-character spans for GSAP hero entrance animations. */
export function SplitChars({ text, brand = false, className = "" }: SplitCharsProps) {
  return (
    <span className={cn("inline-block", className)}>
      {text.split("").map((char, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <span
            data-hero-char
            className={cn("inline-block", brand && "text-gradient-maroon")}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ))}
    </span>
  );
}

type SplitWordsProps = {
  text: string;
  accentWords?: string[];
  className?: string;
};

/** Per-word spans — matches the old mGEM site tagline reveal. */
export function SplitWords({ text, accentWords = [], className = "" }: SplitWordsProps) {
  const words = text.split(" ");
  return (
    <span className={cn("inline", className)}>
      {words.map((word, i) => (
        <span key={i} className="mr-[0.28em] inline-block overflow-hidden align-bottom">
          <span
            data-hero-word
            className={cn(
              "inline-block",
            accentWords.includes(word.replace(/[.,!?]/g, "")) && "text-gradient"
            )}
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}
