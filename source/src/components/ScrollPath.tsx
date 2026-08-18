"use client";

import { useEffect, useRef, useState } from "react";

/* A path that weaves down the whole page, drawing itself as you scroll,
   with an arrow travelling at its tip. */
export default function ScrollPath() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const trailRef = useRef<SVGPathElement>(null);
  const arrowRef = useRef<SVGGElement>(null);
  const [geom, setGeom] = useState<{ w: number; h: number; d: string } | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const build = () => {
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      if (!w || !h) return;
      const xl = w * 0.08;
      const xr = w * 0.92;
      const xc = w * 0.5;
      const anchors: [number, number][] = [
        [xr, h * 0.075],
        [xl, h * 0.24],
        [xr, h * 0.42],
        [xl, h * 0.62],
        [xr, h * 0.8],
        [xc, h * 0.965],
      ];
      let d = `M ${anchors[0][0]} ${anchors[0][1]}`;
      for (let i = 1; i < anchors.length; i++) {
        const [x0, y0] = anchors[i - 1];
        const [x1, y1] = anchors[i];
        const my = (y0 + y1) / 2;
        d += ` C ${x0} ${my}, ${x1} ${my}, ${x1} ${y1}`;
      }
      setGeom({ w, h, d });
    };

    build();
    const ro = new ResizeObserver(build);
    ro.observe(wrap);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const path = pathRef.current;
    const arrow = arrowRef.current;
    const wrap = wrapRef.current;
    if (!path || !arrow || !wrap || !geom) return;

    const len = path.getTotalLength();
    path.style.strokeDasharray = `${len}`;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* y along the path is monotonic, so binary-search the length whose
       point sits at the viewport anchor — keeps the arrow on screen */
    const lengthAtY = (targetY: number) => {
      let lo = 0;
      let hi = len;
      for (let i = 0; i < 22; i++) {
        const mid = (lo + hi) / 2;
        if (path.getPointAtLength(mid).y < targetY) lo = mid;
        else hi = mid;
      }
      return (lo + hi) / 2;
    };

    const trail = trailRef.current;
    let raf = 0;
    let prevAt = 0;
    let vel = 0;
    const update = () => {
      raf = 0;
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrolled = Math.max(-rect.top, 0);
      const targetY = scrolled + vh * 0.55;
      const at = lengthAtY(targetY);
      vel = vel * 0.82 + (at - prevAt) * 0.18;
      prevAt = at;
      path.style.strokeDashoffset = `${len - at}`;
      const p = path.getPointAtLength(at);
      const q = path.getPointAtLength(Math.max(at - 2, 0));
      const angle = (Math.atan2(p.y - q.y, p.x - q.x) * 180) / Math.PI;
      const stretch = 1 + Math.min(Math.abs(vel) / 30, 0.9);
      arrow.setAttribute("transform", `translate(${p.x},${p.y}) rotate(${angle}) scale(${stretch},1)`);
      arrow.style.opacity = at > 4 && at < len - 2 ? "1" : "0";
      /* comet trail grows with scroll speed */
      if (trail) {
        const tl = Math.min(Math.abs(vel) * 5, 140);
        trail.style.strokeDasharray = `${tl} ${len}`;
        trail.style.strokeDashoffset = `${tl - at}`;
        trail.style.opacity = tl > 3 ? "0.14" : "0";
      }
      /* keep decaying the trail after scrolling stops */
      if (Math.abs(vel) > 0.6 && !raf) raf = requestAnimationFrame(update);
    };

    if (reduced) {
      path.style.strokeDasharray = "none";
      arrow.style.opacity = "0";
      return;
    }

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
    };
  }, [geom]);

  return (
    <div ref={wrapRef} aria-hidden className="pointer-events-none absolute inset-0">
      {geom && (
        <svg
          width={geom.w}
          height={geom.h}
          viewBox={`0 0 ${geom.w} ${geom.h}`}
          className="absolute inset-0"
        >
          <defs>
            <linearGradient id="path-grad" x1="0" y1="0" x2="0" y2={geom.h} gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#4d82ff" />
              <stop offset="0.45" stopColor="#2ec99b" />
              <stop offset="0.75" stopColor="#ff7a59" />
              <stop offset="1" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
          <mask
            id="path-mask"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width={geom.w}
            height={geom.h}
          >
            {/* solid copy that "draws" with scroll, revealing the dashed line */}
            <path
              ref={pathRef}
              d={geom.d}
              fill="none"
              stroke="#fff"
              strokeWidth="8"
              strokeLinecap="round"
            />
          </mask>
          {/* faint guide */}
          <path
            d={geom.d}
            fill="none"
            stroke="#e8eef8"
            strokeOpacity="0.04"
            strokeWidth="1.5"
            strokeDasharray="5 12"
            strokeLinecap="round"
          />
          {/* drawn progress — dashed */}
          <path
            d={geom.d}
            fill="none"
            stroke="url(#path-grad)"
            strokeWidth="1.8"
            strokeOpacity="0.28"
            strokeDasharray="8 14"
            strokeLinecap="round"
            mask="url(#path-mask)"
          />
          {/* comet trail behind the arrow when scrolling fast */}
          <path
            ref={trailRef}
            d={geom.d}
            fill="none"
            stroke="url(#path-grad)"
            strokeWidth="4"
            strokeLinecap="round"
            style={{ opacity: 0, transition: "opacity 0.25s" }}
          />
          {/* travelling arrow tip */}
          <g ref={arrowRef} style={{ opacity: 0, transition: "opacity 0.3s" }}>
            <g transform="scale(0.75)">
              <circle r="9" fill="#4d82ff" opacity="0.12" />
              <path d="M -7 -6 L 9 0 L -7 6 L -3 0 Z" fill="#4d82ff" fillOpacity="0.55" />
            </g>
          </g>
        </svg>
      )}
    </div>
  );
}
