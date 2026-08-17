import Reveal from "./Reveal";
import { Squiggle, StarSticker } from "./doodles";

const skills = [
  {
    name: "React.js & Next.js",
    level: "Expert",
    note: "SSR, ISR and Core Web Vitals — my home turf.",
  },
  {
    name: "JavaScript / ES6+",
    level: "Advanced",
    note: "Clean, readable code. Rarely any red marks in the console.",
  },
  {
    name: "CSS & Tailwind",
    level: "Advanced",
    note: "Pixel-perfect layouts. Margins always aligned.",
  },
  {
    name: "Redux & State Management",
    level: "Advanced",
    note: "Keeps complex app state firmly under control.",
  },
  {
    name: "Python, Django & DRF",
    level: "Proficient",
    note: "Newest addition to the stack — already shipping production APIs.",
    fresh: true,
  },
  {
    name: "PostgreSQL & MongoDB",
    level: "Proficient",
    note: "Schema design, migrations and query tuning.",
  },
  {
    name: "Git, Postman & Tooling",
    level: "Advanced",
    note: "Disciplined commits, thorough API testing.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-4 py-20 lg:pl-24">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center lg:text-left">
          <p className="font-hand text-2xl text-pen">An honest self-assessment —</p>
          <h2 className="mt-1 inline-block text-4xl font-semibold tracking-tight sm:text-5xl">
            Skills
          </h2>
          <Squiggle className="mx-auto mt-1 block w-40 text-redpen/60 lg:mx-0" />
        </Reveal>

        <Reveal delay={150}>
          <div className="relative mt-10 rounded-lg border-4 border-double border-ink/25 bg-card p-6 shadow-[0_24px_60px_-28px_rgba(35,44,67,0.45)] sm:p-10">
            <StarSticker className="-right-3 -top-3 w-11 rotate-12" />

            {/* header row like an official document */}
            <div className="flex flex-wrap items-baseline justify-center gap-2 border-b-2 border-ink/15 pb-4 text-center sm:justify-between sm:text-left">
              <p className="font-serif text-sm font-semibold uppercase tracking-[0.18em] text-ink/60">
                Skill Matrix · Full-Stack Development
              </p>
              <p className="font-hand text-lg text-pen">
                Krishna Vaishnav
              </p>
            </div>

            <ul className="divide-y divide-dashed divide-ink/15">
              {skills.map((s, i) => (
                <li
                  key={s.name}
                  className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 py-4 sm:grid-cols-[220px_1fr_auto]"
                >
                  <span className="font-semibold text-ink">
                    {s.name}
                    {s.fresh && (
                      <span className="ml-2 align-middle font-hand text-sm font-bold text-redpen">
                        new this year!
                      </span>
                    )}
                  </span>
                  <span className="col-span-2 text-sm leading-relaxed text-ink/65 sm:col-span-1 sm:col-start-2 sm:row-start-1">
                    <span className="font-hand text-base text-pen">“{s.note}”</span>
                  </span>
                  <span
                    className="relative row-start-1 justify-self-end font-hand text-xl font-bold text-redpen sm:col-start-3"
                    style={{ transform: `rotate(${i % 2 ? 2 : -2}deg)` }}
                  >
                    {s.level}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-end justify-between gap-6 border-t-2 border-ink/15 pt-6">
              <div>
                <p className="fill-line inline-block pb-1 font-hand text-xl text-ink/70">
                  Reviewed by: Production, esq.
                </p>
                <p className="mt-1 text-xs text-ink/50">
                  (strictest reviewer I know — everything above ships to real users)
                </p>
              </div>
              <span className="stamp text-sm">Production-Tested</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
