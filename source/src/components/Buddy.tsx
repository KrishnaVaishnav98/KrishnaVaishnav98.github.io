"use client";

import { useEffect, useRef } from "react";

/* Torch-bearer guide — walks down the whole page along the left rail,
   following your scroll, lighting up whichever content block you're reading.
   Everything else waits in the dark. */
export default function Buddy() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const coneRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const cone = coneRef.current;
    const glow = glowRef.current;
    if (!wrap || !cone || !glow) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const container = wrap.parentElement as HTMLElement | null;
    if (!container) return;
    const cards = Array.from(container.querySelectorAll<HTMLElement>(".torch-card"));
    if (!cards.length) return;
    container.classList.add("torch-on");

    let y = -1;
    let state = "";
    let raf = 0;
    let lastSY = window.scrollY;
    let vel = 0;
    let ax = -1;
    let ay = 0;
    let agw = 0;
    let agh = 0;
    let aim = 0;
    let current = -1;

    const tick = () => {
      const vh = window.innerHeight;
      const mobile = window.innerWidth < 1024;
      const cr = container.getBoundingClientRect();
      const sv = wrap.querySelector("svg")!.getBoundingClientRect();
      const scale = sv.height / 112;

      /* nearest content block to viewport centre — with hysteresis so the
         light doesn't flicker between blocks at section boundaries */
      let act = 0;
      let best = Infinity;
      const dists = cards.map((c, i) => {
        const r = c.getBoundingClientRect();
        const d = Math.abs(r.top + r.height / 2 - vh * 0.5);
        if (d < best) {
          best = d;
          act = i;
        }
        return d;
      });
      if (current >= 0 && dists[current] - best < 80) act = current;
      current = act;
      cards.forEach((c, i) => {
        const rel = dists[i] - dists[act];
        c.classList.toggle("is-lit", rel < 40);
        c.classList.toggle("is-near", rel >= 40 && rel < vh * 0.6);
      });

      const ar = cards[act].getBoundingClientRect();
      const cx = ar.left - cr.left + ar.width / 2;
      const cy = ar.top + ar.height / 2 - cr.top;
      const gw = ar.width * 1.25;
      const gh = ar.height * 1.6;

      /* eased aim — the light sweeps between blocks instead of snapping */
      if (ax < 0) {
        ax = cx;
        ay = cy;
        agw = gw;
        agh = gh;
      }
      ax += (cx - ax) * 0.12;
      ay += (cy - ay) * 0.12;
      agw += (gw - agw) * 0.12;
      agh += (gh - agh) * 0.12;

      /* soft light pool enveloping the lit block */
      glow.style.width = `${agw}px`;
      glow.style.height = `${agh}px`;
      glow.style.transform = `translate(${ax - agw / 2}px, ${ay - agh / 2}px)`;
      let tipX: number;
      let tipY: number;

      if (mobile) {
        /* fixed at bottom centre — walks in place with scroll, torch up */
        const sy = window.scrollY;
        vel = vel * 0.85 + Math.abs(sy - lastSY) * 60 * 0.15;
        lastSY = sy;
        const s = vel > 900 ? "run" : vel > 40 ? "walk" : "idle";
        if (s !== state) {
          state = s;
          wrap.dataset.state = s;
        }
      } else {
        const target = ar.top + ar.height / 2 - cr.top - 45 * scale;
        if (y < 0) y = target;
        const dy = target - y;
        y += dy * 0.09;

        const s = Math.abs(dy) > 300 ? "run" : Math.abs(dy) > 8 ? "walk" : "idle";
        if (s !== state) {
          state = s;
          wrap.dataset.state = s;
        }

        const left = Math.max((cr.width - 1152) / 2 - 122, 2);
        wrap.style.transform = `translate(${left}px, ${y}px)`;
        lastSY = window.scrollY;
      }

      /* torch tip measured from the rendered arm position — exact on every
         viewport, immune to URL-bar resizes */
      const svr = wrap.querySelector("svg")!.getBoundingClientRect();
      tipX = svr.left - cr.left + ((75 + 38 * Math.cos(aim)) / 130) * svr.width;
      tipY = svr.top - cr.top + ((44 + 38 * Math.sin(aim)) / 112) * svr.height;

      /* torch beam — spread widens with distance so it covers the block */
      const ang = Math.atan2(ay - tipY, ax - tipX);
      aim += (ang - aim) * 0.2;
      wrap.style.setProperty("--arm", `${(-90 + aim * 57.2958).toFixed(1)}deg`);
      let dist = Math.hypot(ax - tipX, ay - tipY) + 80;
      if (mobile) dist = Math.min(dist, 430);
      const spread = Math.min(Math.max(dist * 0.9, 240), 680);
      cone.style.transform = `translate(${tipX}px, ${tipY}px) rotate(${ang}rad)`;
      cone.style.width = `${dist}px`;
      cone.style.height = `${spread}px`;
      cone.style.marginTop = `${-spread / 2}px`;

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      container.classList.remove("torch-on");
      cards.forEach((c) => c.classList.remove("is-lit"));
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className="torch-glow" aria-hidden />
      <div ref={coneRef} className="torch-cone" aria-hidden>
        <div className="torch-cone-wide" />
        <div className="torch-cone-core" />
      </div>
      <div ref={wrapRef} data-state="idle" className="buddy torch-buddy absolute left-0 top-0 z-30" aria-hidden>
        <svg viewBox="0 0 130 112" className="h-24 w-auto drop-shadow-sm">
          <ellipse className="b-shadow" cx="50" cy="106" rx="22" ry="4.5" fill="#000" opacity="0.35" />
          <g className="b-lean">
            <g className="b-fig">
              {/* legs */}
              <g className="b-leg b-leg-l">
                <rect x="37" y="74" width="9" height="27" rx="4.5" fill="#1c2940" stroke="#f5faff" strokeWidth="1.2" />
              </g>
              <g className="b-leg b-leg-r">
                <rect x="54" y="74" width="9" height="27" rx="4.5" fill="#1c2940" stroke="#f5faff" strokeWidth="1.2" />
              </g>

              {/* body */}
              <rect x="27" y="14" width="46" height="66" rx="23" fill="#2f6bff" />
              <ellipse cx="50" cy="60" rx="14" ry="11" fill="#5c8dff" opacity="0.5" />

              {/* antenna */}
              <line x1="50" y1="14" x2="50" y2="7" stroke="#8fb3ff" strokeWidth="2" />
              <circle className="b-bulb" cx="50" cy="5" r="4" fill="#ffc531" />

              {/* face */}
              <circle className="b-eye" cx="45" cy="40" r="4.6" fill="#fff" />
              <circle className="b-eye" cx="60" cy="40" r="4.6" fill="#fff" />
              <path className="b-mouth" d="M46 52q6 5 12 0" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" />

              {/* left arm with the watch */}
              <g className="b-arm b-arm-l">
                <rect x="21" y="42" width="8" height="22" rx="4" fill="#1c4fd6" />
                <rect x="19.5" y="57" width="11" height="5" rx="2.5" fill="#ffc531" />
                <circle cx="25" cy="59.5" r="2" fill="#fff" />
              </g>

              {/* right arm holds the torch */}
              <g className="b-arm b-arm-r">
                <rect x="71" y="42" width="8" height="22" rx="4" fill="#1c4fd6" />
                <circle cx="75" cy="63" r="4.5" fill="#1c4fd6" />
                <rect x="70" y="65" width="10" height="13" rx="2.5" fill="#1c2940" />
                <rect x="68.5" y="76" width="13" height="3.5" rx="1.5" fill="#ffc531" />
                <circle cx="75" cy="83" r="5.5" fill="#ffd54a" opacity="0.9" />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </>
  );
}
