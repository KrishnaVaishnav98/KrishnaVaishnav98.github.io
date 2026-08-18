"use client";

import { useEffect, useRef } from "react";

/* Timeline dot that bursts when it crosses the middle of the viewport */
export default function PopDot({ color, dashed = false }: { color?: string; dashed?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("dot-pop");
          void el.offsetWidth;
          el.classList.add("dot-pop");
        }
      },
      { rootMargin: "-42% 0px -52% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (dashed) {
    return (
      <span
        ref={ref}
        className="absolute left-6 top-1.5 z-10 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-dashed border-steel/60 bg-white sm:left-1/2"
        aria-hidden
      />
    );
  }

  return (
    <span
      ref={ref}
      className="absolute left-6 top-1.5 z-10 flex h-5 w-5 -translate-x-1/2 items-center justify-center sm:left-1/2"
      aria-hidden
    >
      <span
        className="dot-ring absolute inline-flex h-full w-full rounded-full"
        style={{ backgroundColor: color, opacity: 0 }}
      />
      <span
        className="dot-core relative inline-flex h-5 w-5 rounded-full border-4 border-white shadow"
        style={{ backgroundColor: color }}
      />
    </span>
  );
}
