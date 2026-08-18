import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

type Project = {
  title: string;
  category: string;
  description: string;
  tech: string[];
  impact: string;
  badge?: string;
  link: { href: string; label: string };
  accent: string;
};

const projects: Project[] = [
  {
    title: "Orchids International School",
    category: "Flagship · Full-Stack",
    description:
      "The main website of one of India's largest school chains. Razorpay payments built end-to-end — Django REST APIs for order creation and signature-verified confirmation with the Next.js checkout UI — plus CMS-driven marketing pages and admissions flows.",
    tech: ["Next.js", "Django REST", "Razorpay", "PostgreSQL"],
    impact: "Lakhs of visitors every month",
    link: { href: "https://orchidsinternationalschool.com/", label: "Visit site" },
    accent: "#ff7a59",
  },
  {
    title: "SchoolsUniverse",
    category: "Flagship · Full-Stack",
    description:
      "A discovery platform helping parents across India find the right school. Shipped the wishlist feature across the whole stack — Django models and REST APIs to Next.js UI — and lifted Core Web Vitals with ISR and rendering optimisations.",
    tech: ["Next.js", "Django REST", "ISR", "Redux"],
    impact: "Fast, findable, full-stack",
    link: { href: "https://www.schoolsuniverse.com/", label: "Visit site" },
    accent: "#2f6bff",
  },
  {
    title: "Science Explorer",
    category: "Full-Stack",
    description:
      "An event platform for a hands-on science experience for kids — custom design, registrations wired through a Django REST API into the CMS leads dashboard. Concept to production in a single day.",
    tech: ["Next.js", "Tailwind", "Django REST"],
    impact: "Brief to production in one day",
    badge: "Built in 1 day",
    link: { href: "https://scienceexplorer.in/", label: "Visit site" },
    accent: "#2ec99b",
  },
  {
    title: "Arts At Orchids",
    category: "Frontend",
    description:
      "An arts-programme site for Orchids International — designed, built and deployed in a week, matching the school's brand while standing on its own visually.",
    tech: ["Next.js", "Tailwind"],
    impact: "One week from brief to live",
    badge: "Built in 1 week",
    link: { href: "https://arts.orchidsinternationalschool.com/", label: "Visit site" },
    accent: "#a78bfa",
  },
  {
    title: "TaskFlow",
    category: "Personal project",
    description:
      "A Kanban task-management app for teams — drag-and-drop boards, secure authentication and a clean, fast UI. Built end-to-end in TypeScript.",
    tech: ["React", "TypeScript", "Kanban", "Auth"],
    impact: "Built after hours, shipped anyway",
    link: { href: "https://cheery-kheer-d25b65.netlify.app/", label: "Visit site" },
    accent: "#ffc531",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <div className="torch-card">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue">
              Selected work
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Projects
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ink/65">
              Five live platforms, shipped to production and used by real people.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal
              key={p.title}
              delay={(i % 2) * 120}
              className={
                projects.length % 2 && i === projects.length - 1
                  ? "md:col-span-2 md:w-full md:max-w-[calc(50%-0.875rem)] md:justify-self-center"
                  : ""
              }
            >
              <TiltCard className="torch-card h-full rounded-2xl">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-card p-7 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.7)] transition-shadow duration-300 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.85)]">
                <span className="absolute inset-x-0 top-0 h-1.5" style={{ backgroundColor: p.accent }} />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink/45">
                      {p.category}
                    </p>
                    <h3 className="mt-1.5 font-display text-2xl font-bold tracking-tight">
                      {p.title}
                    </h3>
                  </div>
                  {p.badge && (
                    <span
                      className="mt-1 shrink-0 rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white"
                      style={{ backgroundColor: p.accent }}
                    >
                      ⚡ {p.badge}
                    </span>
                  )}
                </div>

                <p className="mt-3 grow text-sm leading-relaxed text-ink/70">{p.description}</p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-ink/15 bg-cloud px-3 py-1 text-xs font-medium text-ink/75"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-ink/10 pt-4">
                  <p className="text-sm font-semibold" style={{ color: p.accent }}>
                    {p.impact}
                  </p>
                  <a
                    href={p.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-ink/70 transition-colors hover:text-blue"
                  >
                    {p.link.label} →
                  </a>
                </div>
              </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
