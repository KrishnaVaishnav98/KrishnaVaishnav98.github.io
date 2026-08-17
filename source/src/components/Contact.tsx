import Reveal from "./Reveal";
import { PaperPlane, StarSticker } from "./doodles";

const channels = [
  {
    label: "Email",
    value: "krishnavaishnav125@gmail.com",
    href: "mailto:krishnavaishnav125@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "krishna-vaishnav",
    href: "https://www.linkedin.com/in/krishna-vaishnav-707ab1144/",
  },
  {
    label: "GitHub",
    value: "KrishnaVaishnav98",
    href: "https://github.com/KrishnaVaishnav98",
  },
  {
    label: "Resume",
    value: "View my resume",
    href: "https://drive.google.com/file/d/1xpDCzPE7qCdnKQRGQ_DlG10uw3nBLJoy/view?usp=sharing",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-ruled relative overflow-hidden px-4 py-24 lg:pl-24">
      <PaperPlane className="left-[8%] top-12 w-14 -scale-x-100 text-pen/35 animate-plane" />

      <Reveal>
        <div className="relative mx-auto max-w-2xl -rotate-1 rounded-md border border-ink/15 bg-card p-8 shadow-[0_28px_60px_-28px_rgba(35,44,67,0.5)] sm:p-12"
        >
          <StarSticker className="-left-4 -top-4 w-10 -rotate-12" />

          <p className="text-center font-serif text-xs font-semibold uppercase tracking-[0.25em] text-ink/50">
            Open to new opportunities
          </p>

          <h2 className="mt-4 text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s build something together
          </h2>
          <p className="mx-auto mt-4 max-w-md text-center leading-relaxed text-ink/70">
            Open to interesting problems, good teams and anything that ships to
            real users. The fastest way to reach me is a plain old email.
          </p>

          <div className="mt-8 space-y-4">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-1 sm:flex-row sm:items-baseline sm:gap-3"
              >
                <span className="font-serif text-sm font-semibold text-ink/55 sm:w-20 sm:shrink-0 sm:text-right">
                  {c.label}:
                </span>
                <span className="fill-line max-w-full pb-0.5 text-center font-hand text-xl text-pen transition-colors group-hover:text-redpen sm:grow sm:text-left sm:text-2xl">
                  {c.value}
                </span>
              </a>
            ))}
          </div>

          <p className="mt-9 text-center font-hand text-2xl text-redpen">
            Usually replies within a day ✓
          </p>
        </div>
      </Reveal>
    </section>
  );
}
