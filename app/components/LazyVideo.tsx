"use client";

import { useEffect, useRef } from "react";

export default function LazyVideo({ src, poster, label, eager = false }: { src: string; poster: string; label: string; eager?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const activate = () => {
      if (!video.src) { video.src = src; video.load(); }
      video.play().catch(() => undefined);
    };
    if (eager) { activate(); return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) activate(); else video.pause();
    }, { rootMargin: "300px 0px" });
    observer.observe(video);
    return () => observer.disconnect();
  }, [eager, src]);

  return <video ref={videoRef} autoPlay={eager} muted loop playsInline preload="none" poster={poster} aria-label={label} />;
}
