import { useEffect, useState } from "react";
import { HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";

type LightboxImage = {
  src: string;
  alt: string;
};

type LightboxProps = {
  images: readonly LightboxImage[];
  initialIndex: number;
  onClose: () => void;
};

// Full-screen photo viewer. Opens at `initialIndex`, then lets the user step
// through the rest of `images` with arrow buttons, arrow keys, or swiping.
// Closes on Escape or backdrop click; locks body scroll while open.
export default function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [index, setIndex] = useState(initialIndex);

  const goPrev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const goNext = () => setIndex((i) => (i + 1) % images.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  const current = images[index];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={current.alt}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-forest/85 backdrop-blur-sm"
      />

      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2.5 text-white transition hover:bg-white/20"
      >
        <HiX className="h-6 w-6" />
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white transition hover:bg-white/20 sm:left-4 sm:p-3"
          >
            <HiChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next image"
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white transition hover:bg-white/20 sm:right-4 sm:p-3"
          >
            <HiChevronRight className="h-6 w-6 sm:h-7 sm:w-7" />
          </button>
        </>
      )}

      <div className="relative z-[5] flex max-h-full max-w-full flex-col items-center gap-4">
        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          className="max-h-[80vh] max-w-[92vw] rounded-2xl object-contain shadow-2xl sm:max-w-[85vw]"
        />
        {images.length > 1 && (
          <p className="font-mono text-xs tracking-wider text-white/70">
            {index + 1} / {images.length}
          </p>
        )}
      </div>
    </div>
  );
}
