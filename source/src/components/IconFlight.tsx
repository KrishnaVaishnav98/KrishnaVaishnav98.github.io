"use client";

import { useEffect, useRef } from "react";
import { AtomIcon } from "./icons";

/* Scroll-linked icon flight: the hero's floating tech badges travel down the
   page and settle into their matching Skills tiles. A fixed overlay renders
   the flying badges; each frame we interpolate between the live rects of the
   hero badge ([data-fly-src]) and the tile ([data-fly-dst]) on one
   scroll-driven progress, handing off to the real elements at both ends. */

const BADGES = [
  { key: "react", bg: "#0e2a3a", glyph: <AtomIcon className="h-[62%] w-[62%]" /> },
  { key: "next", bg: "#111", glyph: <span className="font-display font-bold text-white" style={{ fontSize: "1.1em" }}>N</span> },
  { key: "js", bg: "#f7df1e", glyph: <span className="font-display font-bold text-[#222]" style={{ fontSize: "1em" }}>JS</span> },
  { key: "django", bg: "#092e20", glyph: <span className="font-display font-bold text-white" style={{ fontSize: "1em" }}>dj</span> },
];

const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

export default function IconFlight() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    /* flight needs room — on small screens badges stay in the hero */
    if (window.innerWidth < 1024) return;

    const srcs = BADGES.map((b) =>
      document.querySelector<HTMLElement>(`[data-fly-src="${b.key}"]`)
    );
    const dsts = BADGES.map((b) =>
      document.querySelector<HTMLElement>(`[data-fly-dst="${b.key}"]`)
    );
    if (srcs.some((el) => !el) || dsts.some((el) => !el)) return;

    let raf = 0;

    const update = () => {
      raf = 0;
      const vh = window.innerHeight || 1;
      const rowTop = dsts[0]!.getBoundingClientRect().top;
      const startY = vh * 1.04;
      const endY = vh * 0.34;
      let p = (startY - rowTop) / (startY - endY);
      p = Math.max(0, Math.min(1, p));

      for (let i = 0; i < BADGES.length; i++) {
        const el = refs.current[i];
        if (!el) continue;

        /* staggered take-off: each badge lags a little behind the previous */
        const lag = i * 0.09;
        const pi = Math.max(0, Math.min(1, (p - lag) / (1 - BADGES.length * 0.09 + 0.09)));
        const e = easeInOut(pi);
        const flying = pi > 0.001 && pi < 0.999;
        const settled = pi >= 0.999;

        const s = srcs[i]!.getBoundingClientRect();
        const d = dsts[i]!.getBoundingClientRect();

        const sx = s.left + s.width / 2;
        const sy = s.top + s.height / 2;
        const dx = d.left + d.width / 2;
        const dy = d.top + d.height / 2;

        /* curved trajectory — bulge sideways at mid-flight, alternating */
        const side = i % 2 ? 1 : -1;
        const arc = Math.sin(e * Math.PI) * 90 * side;

        const x = sx + (dx - sx) * e + arc;
        const y = sy + (dy - sy) * e;
        const size = s.width + (d.width - s.width) * e;

        el.style.width = `${size}px`;
        el.style.height = `${size}px`;
        el.style.fontSize = `${size * 0.3}px`;
        el.style.transform = `translate(${x - size / 2}px, ${y - size / 2}px) rotate(${Math.sin(e * Math.PI) * 14 * side}deg)`;
        el.style.opacity = flying ? "1" : "0";

        srcs[i]!.style.opacity = pi <= 0.001 ? "" : "0";
        dsts[i]!.style.opacity = settled ? "" : "0";
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
      srcs.forEach((el) => el && (el.style.opacity = ""));
      dsts.forEach((el) => el && (el.style.opacity = ""));
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {BADGES.map((b, i) => (
        <div
          key={b.key}
          ref={(el) => {
            refs.current[i] = el;
          }}
          className="absolute left-0 top-0 will-change-transform"
          style={{ opacity: 0 }}
        >
          <div
            className="flex h-full w-full items-center justify-center rounded-[30%] shadow-lg"
            style={{ backgroundColor: b.bg }}
          >
            {b.glyph}
          </div>
        </div>
      ))}
    </div>
  );
}
