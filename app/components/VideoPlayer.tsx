"use client";

import React, { useRef, useState } from "react";
import { HiVolumeOff, HiVolumeUp } from "react-icons/hi";
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

  const toggle = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
    videoRef.current.play().catch(() => {});
  };

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
      <button
        type="button"
        onClick={toggle}
        aria-label={muted ? "Unmute video" : "Mute video"}
        className="absolute right-4 top-4 rounded-full bg-black/45 p-2.5 text-white backdrop-blur transition hover:bg-black/65"
      >
        {muted ? <HiVolumeOff className="h-5 w-5" /> : <HiVolumeUp className="h-5 w-5" />}
      </button>
    </div>
  );
}
