
import React, { useRef, useState } from "react";
import { HiVolumeOff, HiVolumeUp, HiPlay, HiPause } from "react-icons/hi";
import { cn } from "@/lib/utils";

export default function VideoPlayer({
  src,
  className,
  poster,
}: {
  src: string;
  className?: string;
  poster?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [paused, setPaused] = useState(false);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !muted;
    setMuted(!muted);
    v.play().catch(() => {});
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (paused) { v.play().catch(() => {}); } else { v.pause(); }
    setPaused(!paused);
  };

  const btnCls = "rounded-full bg-black/45 p-2.5 text-white backdrop-blur transition hover:bg-black/65";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-ink/10 bg-forest shadow-xl",
        className
      )}
    >
      <div className="relative pt-[56.25%]">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          loop
          muted
          autoPlay
          playsInline
          preload="metadata"
          poster={poster}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
      <div className="absolute bottom-3 right-3 flex items-center gap-2 sm:bottom-4 sm:right-4">
        <button type="button" onClick={togglePlay} aria-label={paused ? "Play video" : "Pause video"} className={btnCls}>
          {paused ? <HiPlay className="h-5 w-5" /> : <HiPause className="h-5 w-5" />}
        </button>
        <button type="button" onClick={toggleMute} aria-label={muted ? "Unmute video" : "Mute video"} className={btnCls}>
          {muted ? <HiVolumeOff className="h-5 w-5" /> : <HiVolumeUp className="h-5 w-5" />}
        </button>
      </div>
    </div>
  );
}
