"use client";

import { useEffect, useRef } from "react";
import Reveal from "./Reveal";
import { AtomIcon, WaveIcon, LeafIcon, BranchIcon, HexIcon } from "./icons";

type Tile = {
  name: string;
  level: string;
  bg: string;
  fly?: string;
  glyph: React.ReactNode;
};

const tiles: Tile[] = [
  { name: "React", level: "Expert", bg: "#0e2a3a", fly: "react", glyph: <AtomIcon className="h-9 w-9" /> },
  { name: "Next.js", level: "Expert", bg: "#111", fly: "next", glyph: <span className="font-display text-xl font-bold text-white">N</span> },
  { name: "JavaScript", level: "Advanced", bg: "#f7df1e", fly: "js", glyph: <span className="font-display text-lg font-bold text-[#222]">JS</span> },
  { name: "Tailwind", level: "Advanced", bg: "#0f172a", glyph: <WaveIcon className="h-9 w-9" /> },
  { name: "Redux", level: "Advanced", bg: "#764abc", glyph: <span className="font-display text-lg font-bold text-white">Rx</span> },
  { name: "Django", level: "Proficient", bg: "#092e20", fly: "django", glyph: <span className="font-display text-lg font-bold text-white">dj</span> },
  { name: "PostgreSQL", level: "Proficient", bg: "#336791", glyph: <span className="font-display text-lg font-bold text-white">Pg</span> },
  { name: "MongoDB", level: "Proficient", bg: "#001e2b", glyph: <LeafIcon className="h-9 w-9" /> },
  { name: "Node.js", level: "Proficient", bg: "#233329", glyph: <HexIcon className="h-9 w-9" /> },
  { name: "Git", level: "Advanced", bg: "#f05033", glyph: <BranchIcon className="h-8 w-8" /> },
];

const notes = [
  { title: "React.js & Next.js", body: "SSR, ISR and Core Web Vitals — production experience at scale.", color: "#2f6bff" },
  { title: "JavaScript / ES6+", body: "Modern, strict and readable patterns across large codebases.", color: "#ff7a59" },
  { title: "CSS & Tailwind", body: "Pixel-accurate, responsive builds from design to production.", color: "#2ec99b" },
  { title: "Redux & State", body: "Predictable state across large role-based applications.", color: "#a78bfa" },
  { title: "Django & DRF", body: "Payment APIs, models and serializers — running in production.", color: "#ffc531" },
  { title: "PostgreSQL & MongoDB", body: "Schema design, migrations and query optimisation.", color: "#2fc4b2" },
];

export default function Skills() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* drag / throw / collide physics — tiles spring home and knock each other around */
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const els = itemRefs.current.filter(Boolean) as HTMLDivElement[];
    const n = els.length;
    const st = els.map(() => ({ ox: 0, oy: 0, vx: 0, vy: 0, drag: false, lx: 0, ly: 0, lt: 0 }));
    let homes: { x: number; y: number }[] = [];

    const computeHomes = () => {
      const wr = wrap.getBoundingClientRect();
      homes = els.map((el, i) => {
        const r = el.getBoundingClientRect();
        return {
          x: r.left - wr.left + r.width / 2 - st[i].ox,
          y: r.top - wr.top + r.height / 2 - st[i].oy,
        };
      });
    };
    computeHomes();
    const ro = new ResizeObserver(computeHomes);
    ro.observe(wrap);

    const R = 46;
    let raf = 0;
    let last = 0;

    const step = (t: number) => {
      const dt = Math.min((t - last) / 1000, 1 / 30) || 1 / 60;
      last = t;
      let alive = false;

      st.forEach((s) => {
        if (s.drag) {
          alive = true;
          return;
        }
        const k = 130;
        const c = 9;
        s.vx += (-k * s.ox - c * s.vx) * dt;
        s.vy += (-k * s.oy - c * s.vy) * dt;
        s.ox += s.vx * dt;
        s.oy += s.vy * dt;
        if (Math.abs(s.ox) + Math.abs(s.oy) + Math.abs(s.vx) + Math.abs(s.vy) > 0.9) alive = true;
        else {
          s.ox = s.oy = s.vx = s.vy = 0;
        }
      });

      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          const a = st[i];
          const b = st[j];
          let dx = homes[j].x + b.ox - (homes[i].x + a.ox);
          let dy = homes[j].y + b.oy - (homes[i].y + a.oy);
          const dist = Math.hypot(dx, dy) || 0.001;
          if (dist < R * 2) {
            dx /= dist;
            dy /= dist;
            const overlap = R * 2 - dist;
            const aK = a.drag ? 0 : 1;
            const bK = b.drag ? 0 : 1;
            const tot = aK + bK || 1;
            a.ox -= (dx * overlap * aK) / tot;
            a.oy -= (dy * overlap * aK) / tot;
            b.ox += (dx * overlap * bK) / tot;
            b.oy += (dy * overlap * bK) / tot;
            const vn = (b.vx - a.vx) * dx + (b.vy - a.vy) * dy;
            if (vn < 0) {
              const imp = (-(1 + 0.55) * vn) / tot;
              a.vx -= dx * imp * aK;
              a.vy -= dy * imp * aK;
              b.vx += dx * imp * bK;
              b.vy += dy * imp * bK;
            }
            alive = true;
          }
        }
      }

      els.forEach((el, i) => {
        el.style.transform = `translate(${st[i].ox.toFixed(2)}px, ${st[i].oy.toFixed(2)}px)`;
      });
      raf = alive ? requestAnimationFrame(step) : 0;
    };

    const kick = () => {
      if (!raf) {
        last = performance.now();
        raf = requestAnimationFrame(step);
      }
    };

    const onDown = (e: PointerEvent) => {
      const idx = els.findIndex((el) => el.contains(e.target as Node));
      if (idx < 0) return;
      wrap.classList.add("physics-on");
      const s = st[idx];
      s.drag = true;
      s.lx = e.clientX;
      s.ly = e.clientY;
      s.lt = performance.now();
      kick();
    };
    const onMove = (e: PointerEvent) => {
      const idx = st.findIndex((s) => s.drag);
      if (idx < 0) return;
      const s = st[idx];
      const now = performance.now();
      const dt = Math.max(now - s.lt, 1) / 1000;
      s.vx = ((e.clientX - s.lx) / dt) * 0.9;
      s.vy = ((e.clientY - s.ly) / dt) * 0.9;
      s.ox += e.clientX - s.lx;
      s.oy += e.clientY - s.ly;
      s.lx = e.clientX;
      s.ly = e.clientY;
      s.lt = now;
      kick();
    };
    const onUp = () => {
      st.forEach((s) => {
        if (!s.drag) return;
        s.drag = false;
        const sp = Math.hypot(s.vx, s.vy);
        const max = 1500;
        if (sp > max) {
          s.vx *= max / sp;
          s.vy *= max / sp;
        }
      });
      kick();
    };

    wrap.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      ro.disconnect();
      if (raf) cancelAnimationFrame(raf);
      wrap.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, []);

  return (
    <section id="skills" className="relative px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <div className="torch-card">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue">
              Tech stack
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Tools I ship with
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ink/65">
              The everyday stack — frontend depth, growing backend ownership,
              everything below is in production use today.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div ref={wrapRef} className="torch-card relative mx-auto mt-14 grid max-w-3xl grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-5">
            {tiles.map((t, i) => (
              <div
                key={t.name}
                className="tile flex flex-col items-center"
                style={{ "--d": `${i * 70}ms` } as React.CSSProperties}
              >
                <div
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  className="flex flex-col items-center gap-2.5 will-change-transform"
                >
                  <div className="tile-hop" style={{ "--i": i } as React.CSSProperties}>
                    <div
                      data-fly-dst={t.fly}
                      className="tile-btn flex h-16 w-16 items-center justify-center rounded-2xl shadow-[0_14px_28px_-14px_rgba(28,41,64,0.5)]"
                      style={{ backgroundColor: t.bg }}
                      title={`${t.name} — ${t.level}`}
                    >
                      {t.glyph}
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="-mt-1.5 text-[0.65rem] font-bold uppercase tracking-wider text-ink/45">
                    {t.level}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={250}>
          <div className="torch-card">
            <p className="mt-8 text-center text-sm italic text-ink/40">
              psst — the tiles are draggable. Go on, throw one.
            </p>
            <div className="mx-auto mt-10 grid max-w-4xl gap-x-10 gap-y-4 sm:grid-cols-2">
            {notes.map((n) => (
              <p key={n.title} className="flex items-start gap-3 text-sm leading-relaxed text-ink/70">
                <span
                  className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-sm"
                  style={{ backgroundColor: n.color }}
                />
                <span>
                  <strong className="font-semibold text-ink">{n.title}.</strong> {n.body}
                </span>
              </p>
            ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
