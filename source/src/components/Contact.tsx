import Reveal from "./Reveal";

const channels = [
  {
    label: "Email",
    value: "krishnavaishnav125@gmail.com",
    href: "mailto:krishnavaishnav125@gmail.com",
    mono: "@",
    color: "#2f6bff",
  },
  {
    label: "LinkedIn",
    value: "krishna-vaishnav",
    href: "https://www.linkedin.com/in/krishna-vaishnav-707ab1144/",
    mono: "in",
    color: "#2ec99b",
  },
  {
    label: "GitHub",
    value: "KrishnaVaishnav98",
    href: "https://github.com/KrishnaVaishnav98",
    mono: "gh",
    color: "#ff7a59",
  },
  {
    label: "Resume",
    value: "View my resume",
    href: "https://drive.google.com/file/d/1xpDCzPE7qCdnKQRGQ_DlG10uw3nBLJoy/view?usp=sharing",
    mono: "cv",
    color: "#a78bfa",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-4 py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <div className="torch-card">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue">
              Contact
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Let&apos;s build something together
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ink/65">
              Open to interesting problems, good teams and anything that ships to
              real users. The fastest way to reach me is a plain old email — I
              usually reply within a day.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="torch-card mt-12 grid gap-4 sm:grid-cols-2">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-ink/10 bg-card p-5 shadow-[0_16px_40px_-30px_rgba(0,0,0,0.8)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(0,0,0,0.9)]"
              >
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-display text-lg font-bold text-white transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: c.color }}
                >
                  {c.mono}
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-ink/50">
                    {c.label}
                  </span>
                  <span className="block truncate font-medium text-ink transition-colors group-hover:text-blue">
                    {c.value}
                  </span>
                </span>
                <span className="ml-auto text-ink/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue">
                  →
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
