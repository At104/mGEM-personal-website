import { cn } from "@/lib/utils";

type SplitCharsProps = {
  text: string;
  brand?: boolean;
  className?: string;
};

/** Per-character spans for GSAP hero entrance animations. Words stay intact while wrapping. */
export function SplitChars({ text, brand = false, className = "" }: SplitCharsProps) {
  const parts = text.split(/(\s+)/);

  return (
    <span className={className}>
      {parts.map((part, i) =>
        /^\s+$/.test(part) ? (
          <span key={i}>{" "}</span>
        ) : (
          <span key={i} className="inline-block whitespace-nowrap">
            {part.split("").map((char, j) => (
              <span key={j} className="inline-block overflow-hidden align-bottom">
                <span
                  data-hero-char
                  className={cn("inline-block", brand && "text-gradient-maroon")}
                >
                  {char}
                </span>
              </span>
            ))}
          </span>
        )
      )}
    </span>
  );
}
