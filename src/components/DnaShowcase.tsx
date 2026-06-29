
import ClientOnly from "./ClientOnly";
import DnaScene, { type DnaSceneProps } from "./DnaScene";

const fallback = (
  <div className="h-full min-h-[280px] w-full animate-pulse rounded-3xl bg-maroon/10 sm:min-h-[360px]" aria-hidden />
);

type DnaShowcaseProps = DnaSceneProps & {
  className?: string;
};

/** Reusable 3D DNA helix showcase — used on About and other inner pages. */
export default function DnaShowcase({
  className = "",
  orientation = "vertical",
  bright = false,
}: DnaShowcaseProps) {
  const aspect = orientation === "horizontal" ? "aspect-[2/1]" : "aspect-square";
  const minH = orientation === "horizontal" ? "min-h-[200px] sm:min-h-[240px]" : "min-h-[280px] sm:min-h-[360px]";

  return (
    <div className={className}>
      <ClientOnly fallback={fallback}>
        <div className={`relative mx-auto w-full max-w-md ${aspect}`}>
          <div className={`h-full w-full ${minH}`}>
            <DnaScene orientation={orientation} bright={bright} />
          </div>
        </div>
      </ClientOnly>
    </div>
  );
}
