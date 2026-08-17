import Reveal from "./Reveal";
import { AtomIcon, WaveIcon, LeafIcon, BranchIcon, HexIcon } from "./icons";

type Tile = {
  name: string;
  level: string;
  bg: string;
  glyph: React.ReactNode;
};

const tiles: Tile[] = [
  { name: "React", level: "Expert", bg: "#0e2a3a", glyph: <AtomIcon className="h-9 w-9" /> },
  { name: "Next.js", level: "Expert", bg: "#111", glyph: <span className="font-display text-xl font-bold text-white">N</span> },
  { name: "JavaScript", level: "Advanced", bg: "#f7df1e", glyph: <span className="font-display text-lg font-bold text-[#222]">JS</span> },
  { name: "Tailwind", level: "Advanced", bg: "#0f172a", glyph: <WaveIcon className="h-9 w-9" /> },
  { name: "Redux", level: "Advanced", bg: "#764abc", glyph: <span className="font-display text-lg font-bold text-white">Rx</span> },
  { name: "Django", level: "Proficient", bg: "#092e20", glyph: <span className="font-display text-lg font-bold text-white">dj</span> },
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
  return (
    <section id="skills" className="relative px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
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
        </Reveal>

        <Reveal delay={150}>
          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-5">
            {tiles.map((t, i) => (
              <div
                key={t.name}
                className="tile flex flex-col items-center gap-2.5"
                style={{ "--d": `${i * 70}ms` } as React.CSSProperties}
              >
                <div className="tile-hop" style={{ "--i": i } as React.CSSProperties}>
                  <div
                    className="tile-btn flex h-16 w-16 cursor-default items-center justify-center rounded-2xl shadow-[0_14px_28px_-14px_rgba(28,41,64,0.5)]"
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
            ))}
          </div>
        </Reveal>

        <Reveal delay={250}>
          <div className="mx-auto mt-16 grid max-w-4xl gap-x-10 gap-y-4 sm:grid-cols-2">
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
        </Reveal>
      </div>
    </section>
  );
}
