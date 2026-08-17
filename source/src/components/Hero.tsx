import Reveal from "./Reveal";
import {
  PaperPlane,
  Pencil,
  Paperclip,
  StarSticker,
  CircleScribble,
  Squiggle,
} from "./doodles";

const facts = [
  { label: "Currently", value: "SDE 1 @ K12 Techno Services, Bengaluru" },
  { label: "Experience", value: "Dec 2023 — present" },
  { label: "Core stack", value: "React.js · Next.js · Django REST · PostgreSQL" },
];

export default function Hero() {
  return (
    <section id="top" className="bg-ruled relative overflow-hidden px-4 pb-20 pt-14 lg:pl-24">
      <PaperPlane className="right-[6%] top-10 w-16 text-pen/40 animate-plane" />
      <Pencil className="bottom-12 left-[3%] hidden w-20 text-ink/20 animate-floaty lg:block" />

      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* LEFT — intro */}
        <div className="text-center lg:text-left">
          <Reveal>
            <p className="font-hand text-2xl text-pen sm:text-3xl">
              Hello, I&apos;m —
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-3 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Krishna{" "}
              <span className="relative inline-block px-2">
                Vaishnav
                <CircleScribble className="text-redpen/70" />
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-9 max-w-lg text-lg leading-relaxed text-ink/75 lg:mx-0">
              Software Development Engineer building{" "}
              <strong className="mark-hi font-semibold text-ink">
                web platforms used at scale across India
              </strong>{" "}
              — by students, parents and educators every single day. Frontend
              at heart, full-stack in practice.
            </p>
          </Reveal>

          {/* quick facts */}
          <Reveal delay={300}>
            <dl className="mx-auto mt-8 max-w-lg space-y-4 lg:mx-0">
              {facts.map((f) => (
                <div key={f.label} className="text-sm sm:text-base lg:flex lg:items-baseline lg:gap-3">
                  <dt className="mr-2 inline font-serif font-semibold text-ink/60 lg:mr-0 lg:block lg:shrink-0">
                    {f.label}:
                  </dt>
                  <dd className="fill-line inline pb-0.5 font-hand text-lg text-pen sm:text-xl lg:block lg:grow">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="#projects"
                className="rounded-xl bg-ink px-6 py-3 text-sm font-semibold text-paper shadow-lg transition-transform hover:-translate-y-0.5"
              >
                View my projects ↓
              </a>
              <a
                href="#contact"
                className="font-hand text-xl font-bold text-redpen underline decoration-wavy underline-offset-4 transition-colors hover:text-pen"
              >
                or get in touch
              </a>
            </div>
          </Reveal>
        </div>

        {/* RIGHT — paper-clipped photo */}
        <Reveal delay={250}>
          <div className="relative mx-auto w-64 sm:w-72">
            <div className="rotate-2 rounded-sm border-[12px] border-b-[52px] border-white bg-white shadow-[0_24px_50px_-20px_rgba(35,44,67,0.5)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/krishna-profile.jpeg"
                alt="Krishna Vaishnav"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <Paperclip className="-top-6 left-8 w-8 -rotate-12 text-pencil" />
            <StarSticker className="-right-4 top-16 w-10 rotate-12 animate-floaty" />
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap font-hand text-xl text-ink/80 -rotate-1">
              Based in Bengaluru, India
            </span>
            <div className="absolute -bottom-9 left-1/2 w-40 -translate-x-1/2">
              <Squiggle className="w-full text-redpen/50" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
