import Reveal from "./Reveal";
import { Squiggle, Tick, Ruler } from "./doodles";

const delivered = [
  "Razorpay payments — order APIs, signature verification, failure handling",
  "Full-stack wishlist feature: Django models → REST APIs → Next.js UI",
  "Live bus tracking with maps and real-time location updates for parents",
  "ERP modules for finance, transport & operations",
  "Role-based dashboards with secure access control for four user roles",
  "CMS-driven blogs and marketing pages for non-technical teams",
  "Core Web Vitals & ISR — faster loads, better SEO rankings",
];

const upNext = "System design at scale";

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden px-4 py-20 lg:pl-24">
      <Ruler className="right-[5%] top-16 hidden w-24 rotate-12 text-ink/15 animate-floaty lg:block" />

      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <Reveal className="text-center lg:text-left">
            <p className="font-hand text-2xl text-pen">Two years at K12 Techno Services —</p>
            <h2 className="mt-1 inline-block text-4xl font-semibold tracking-tight sm:text-5xl">
              Experience
            </h2>
            <Squiggle className="mx-auto mt-1 block w-44 text-redpen/60 lg:mx-0" />
          </Reveal>

          <Reveal delay={150}>
            <ul className="mt-9 space-y-4">
              {delivered.map((item) => (
                <li key={item} className="flex items-start gap-3.5">
                  <span className="relative mt-0.5 h-5 w-5 shrink-0 rounded border-2 border-ink/35 bg-card">
                    <Tick className="absolute -right-1.5 -top-2 w-6 rotate-3 text-redpen" />
                  </span>
                  <span className="leading-relaxed text-ink/80">{item}</span>
                </li>
              ))}
              <li className="flex items-start gap-3.5">
                <span className="mt-0.5 h-5 w-5 shrink-0 rounded border-2 border-dashed border-ink/30 bg-card" />
                <span className="leading-relaxed text-ink/50">
                  {upNext}{" "}
                  <span className="font-hand text-lg text-pencil">
                    — currently upskilling, notes in the margin
                  </span>
                </span>
              </li>
            </ul>
          </Reveal>
        </div>

        {/* sticky note on backend growth */}
        <Reveal delay={250} className="self-center">
          <aside className="sticky-note mx-auto max-w-xs rotate-2 rounded-sm p-6 sm:p-7">
            <p className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-ink/55">
              Growth Note
            </p>
            <p className="mt-3 font-hand text-xl leading-relaxed text-ink/85">
              Expanded into <strong>Backend Development</strong> this year —
              Django REST Framework, PostgreSQL schema design, payment APIs
              with signature verification.
            </p>
            <p className="mt-3 font-hand text-xl leading-relaxed text-ink/85">
              Frontend polish now comes with backend depth.
            </p>
            <p className="mt-4 text-right font-hand text-lg font-bold text-redpen">
              — full-stack, officially ✓
            </p>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
