import Reveal from "./Reveal";
import PopDot from "./PopDot";

const stops = [
  {
    when: "Dec 2023",
    title: "Joined K12 Techno Services",
    body: "Started on React.js/Next.js features for Orchids International and SchoolsUniverse.",
    color: "#2f6bff",
  },
  {
    when: "2024",
    title: "Core Web Vitals overhaul",
    body: "ISR and rendering optimisations across the platforms — faster loads, better SEO rankings.",
    color: "#2ec99b",
  },
  {
    when: "2024",
    title: "ERP & role-based dashboards",
    body: "Finance, transport and operations modules with secure access control for four user roles.",
    color: "#ff7a59",
  },
  {
    when: "2024",
    title: "Live bus tracking",
    body: "Real-time maps and location updates for parents and school administrators.",
    color: "#ffc531",
  },
  {
    when: "2025",
    title: "Full-stack expansion",
    body: "Took ownership end-to-end: Django REST Framework APIs and PostgreSQL schema design.",
    color: "#a78bfa",
  },
  {
    when: "2025",
    title: "Payments in production",
    body: "Razorpay integration — order APIs, signature verification and failure handling, end-to-end.",
    color: "#2fc4b2",
  },
  {
    when: "2026",
    title: "Rapid builds",
    body: "Science Explorer shipped in a single day; Arts At Orchids in a week — both live in production.",
    color: "#e85d3d",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <div className="torch-card">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue">
              Career
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Experience
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ink/65">
              One company, two and a half years, an expanding scope — everything
              below is running in production today.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-16">
          {/* timeline spine */}
          <div
            className="absolute inset-y-0 left-6 w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-blue via-mint to-lilac opacity-25 sm:left-1/2"
            aria-hidden
          />

          <ol className="space-y-12 pt-2">
            {stops.map((s, i) => (
              <li key={s.title} className="relative">
                <PopDot color={s.color} />

                <Reveal
                  delay={80}
                  className={`ml-16 sm:ml-0 sm:w-[calc(50%-3rem)] ${
                    i % 2 ? "sm:ml-[calc(50%+3rem)]" : "sm:mr-[calc(50%+3rem)] sm:text-right"
                  }`}
                >
                  <div className="torch-card rounded-xl border border-ink/10 bg-card p-5 shadow-[0_16px_40px_-28px_rgba(0,0,0,0.8)] transition-transform duration-300 hover:-translate-y-1">
                    <p className="text-xs font-bold uppercase tracking-wider" style={{ color: s.color }}>
                      {s.when}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-bold">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{s.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}

            {/* next stop */}
            <li className="relative">
              <PopDot dashed />
              <Reveal
                delay={80}
                className="ml-16 sm:ml-0 sm:w-[calc(50%-3rem)] sm:mr-[calc(50%+3rem)] sm:text-right"
              >
                <div className="torch-card rounded-xl border-2 border-dashed border-ink/20 bg-cloud/60 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-steel">
                    Next stop
                  </p>
                  <h3 className="mt-1 font-display text-lg font-bold text-ink/70">
                    System design at scale
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/55">
                    Currently upskilling — the route keeps extending.
                  </p>
                </div>
              </Reveal>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
