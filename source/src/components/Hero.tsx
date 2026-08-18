import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import { AtomIcon } from "./icons";

const roles = [
  "React frontends",
  "Django REST APIs",
  "payment systems",
  "education platforms",
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-[#121d33] to-night">
      <div className="torch-card mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:pt-20">
        {/* LEFT — intro */}
        <div className="text-center lg:text-left">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-blue/25 bg-card/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="stop-ping absolute h-full w-full rounded-full bg-mint" />
                <span className="relative h-2 w-2 rounded-full bg-mint" />
              </span>
              Open to opportunities
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Krishna <span className="text-sheen">Vaishnav</span>
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-5 font-display text-xl font-semibold text-ink/80 sm:text-2xl">
              Software Development Engineer building{" "}
              <span className="word-rotator text-blue">
                <span>
                  {[...roles, roles[0]].map((r, i) => (
                    <span key={i} className="h-[1.35em]">
                      {r}
                    </span>
                  ))}
                </span>
              </span>
            </p>
          </Reveal>

          <Reveal delay={340}>
            <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-ink/65 lg:mx-0">
              Web platforms used at scale across India — by students, parents
              and educators every single day. Frontend at heart, full-stack in
              practice, at K12 Techno Services, Bengaluru.
            </p>
          </Reveal>

          <Reveal delay={440}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="#projects"
                className="rounded-full bg-blue px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue/40"
              >
                See my work ↓
              </a>
              <a
                href="#contact"
                className="rounded-full border-2 border-ink/15 bg-card px-7 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-blue hover:text-blue"
              >
                Get in touch
              </a>
            </div>
          </Reveal>
        </div>

        {/* RIGHT — photo with floating badges */}
        <Reveal delay={250}>
          <div className="relative mx-auto w-64 sm:w-72">
            <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-blue via-mint to-coral opacity-25 blur-xl" aria-hidden />
            <TiltCard max={10} className="rounded-[2rem]">
              <div className="relative overflow-hidden rounded-[2rem] border-4 border-white/15 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.8)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/krishna-profile.jpeg"
                  alt="Krishna Vaishnav"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </TiltCard>

            <div
              data-fly-src="react"
              className="float-badge absolute -left-8 top-8 rounded-2xl bg-[#0e2a3a] p-2.5 shadow-lg"
              style={{ "--fd": "0s", "--tilt": "-8deg" } as React.CSSProperties}
            >
              <AtomIcon className="h-8 w-8" />
            </div>
            <div
              data-fly-src="js"
              className="float-badge absolute -right-7 top-24 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7df1e] font-display text-sm font-bold text-[#222] shadow-lg"
              style={{ "--fd": "1.2s", "--tilt": "7deg" } as React.CSSProperties}
            >
              JS
            </div>
            <div
              data-fly-src="django"
              className="float-badge absolute -left-6 bottom-20 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#092e20] font-display text-sm font-bold text-white shadow-lg"
              style={{ "--fd": "2.1s", "--tilt": "6deg" } as React.CSSProperties}
            >
              dj
            </div>
            <div
              data-fly-src="next"
              className="float-badge absolute -bottom-4 right-10 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#111] font-display text-lg font-bold text-white shadow-lg"
              style={{ "--fd": "0.6s", "--tilt": "-6deg" } as React.CSSProperties}
            >
              N
            </div>
          </div>
        </Reveal>
      </div>

      {/* scroll cue */}
      <div className="flex justify-center pb-8">
        <a href="#skills" className="scroll-cue text-ink/40" aria-label="Scroll down">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}
