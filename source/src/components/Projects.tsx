import Reveal from "./Reveal";
import { Squiggle, Tick } from "./doodles";

type Project = {
  no: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  impact: string;
  stamp?: string;
  link?: { href: string; label: string };
  tilt: string;
};

const projects: Project[] = [
  {
    no: "01",
    title: "Orchids International School",
    category: "Flagship · Full-Stack",
    description:
      "The main website of one of India's largest school chains — my primary product. Built Razorpay payments end-to-end: Django REST APIs for order creation and signature-verified payment confirmation, with the React/Next.js checkout UI. Plus CMS-driven marketing pages and admissions flows.",
    tech: ["Next.js", "Django REST", "Razorpay", "PostgreSQL", "CMS"],
    impact: "Lakhs of visitors every month.",
    link: { href: "https://orchidsinternationalschool.com/", label: "Visit site" },
    tilt: "-0.6deg",
  },
  {
    no: "02",
    title: "SchoolsUniverse",
    category: "Flagship · Full-Stack",
    description:
      "A discovery platform helping parents across India find the right school. Shipped the wishlist feature across the whole stack — Django models and REST APIs to Next.js UI — and pushed Core Web Vitals up with ISR and rendering optimisations.",
    tech: ["Next.js", "Django REST", "ISR", "SEO", "Redux"],
    impact: "Fast, findable, full-stack.",
    link: { href: "https://www.schoolsuniverse.com/", label: "Visit site" },
    tilt: "0.7deg",
  },
  {
    no: "03",
    title: "Science Explorer",
    category: "Rapid delivery · Full-Stack",
    description:
      "An event platform for a hands-on science experience — playful custom design, registrations wired through a Django REST API into the CMS leads dashboard. Concept to production in a single day.",
    tech: ["Next.js", "Tailwind", "Django REST"],
    impact: "Design, build, deploy — one day.",
    stamp: "1-Day Build",
    link: { href: "https://scienceexplorer.in/", label: "Visit site" },
    tilt: "0.9deg",
  },
  {
    no: "04",
    title: "Arts At Orchids",
    category: "Rapid delivery · Frontend",
    description:
      "An arts-programme site for Orchids International — designed, built and deployed in a week, matching the brand while standing on its own visually.",
    tech: ["Next.js", "Tailwind"],
    impact: "One week from brief to live.",
    stamp: "1-Week Build",
    link: { href: "https://arts.orchidsinternationalschool.com/", label: "Visit site" },
    tilt: "-0.8deg",
  },
  {
    no: "05",
    title: "TaskFlow",
    category: "Personal project",
    description:
      "A Kanban task-management app for teams — drag-and-drop boards, secure authentication and a clean, fast UI. Built end-to-end in TypeScript as a personal project.",
    tech: ["React", "TypeScript", "Kanban", "Auth"],
    impact: "Built after hours, shipped anyway.",
    link: { href: "https://cheery-kheer-d25b65.netlify.app/", label: "Visit site" },
    tilt: "0.6deg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-ruled relative overflow-hidden px-4 py-20 lg:pl-24">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center lg:text-left">
          <p className="font-hand text-2xl text-pen">Shipped to production, used at scale —</p>
          <h2 className="mt-1 inline-block text-4xl font-semibold tracking-tight sm:text-5xl">
            Selected Projects
          </h2>
          <Squiggle className="mx-auto mt-1 block w-56 text-redpen/60 lg:mx-0" />
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal
              key={p.no}
              delay={(i % 2) * 120}
              className={
                projects.length % 2 && i === projects.length - 1
                  ? "md:col-span-2 md:w-full md:max-w-[calc(50%-1rem)] md:justify-self-center"
                  : ""
              }
            >
              <article
                className="sheet relative flex h-full flex-col rounded-md p-6 sm:p-7"
                style={{ transform: `rotate(${p.tilt})` }}
              >
                {p.stamp && (
                  <span className="stamp absolute -top-4 right-5 text-xs">{p.stamp}</span>
                )}

                <p className="font-serif text-xs font-semibold uppercase tracking-[0.2em] text-ink/45">
                  Project {p.no} · {p.category}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-3 grow text-sm leading-relaxed text-ink/70">{p.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>

                {/* handwritten impact note */}
                <div className="mt-5 flex items-end justify-between gap-4 border-t border-dashed border-ink/20 pt-4">
                  <p className="font-hand text-lg leading-snug text-redpen">
                    <Tick className="mr-1 inline-block w-5 align-[-2px] text-redpen" />
                    {p.impact}
                  </p>
                  {p.link && (
                    <a
                      href={p.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-sm font-semibold text-pen underline decoration-pen/40 underline-offset-4 transition-colors hover:text-redpen hover:decoration-wavy"
                    >
                      {p.link.label} ↗
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
