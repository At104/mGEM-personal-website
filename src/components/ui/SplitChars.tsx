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
