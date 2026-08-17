const links = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b-4 border-double border-ink/15 bg-paper/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 lg:pl-24">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-hand text-xl font-bold text-pen">Krishna</span>
          <span className="font-serif text-lg font-semibold tracking-tight">
            Vaishnav
          </span>
        </a>
        <div className="hidden items-center gap-6 sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-redpen hover:underline hover:decoration-redpen hover:decoration-wavy hover:underline-offset-4"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1xpDCzPE7qCdnKQRGQ_DlG10uw3nBLJoy/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border-2 border-ink/25 px-3 py-1.5 text-sm font-semibold text-ink transition-colors hover:border-redpen hover:text-redpen"
          >
            Resume ↗
          </a>
        </div>
        <a
          href="#contact"
          className="font-hand text-lg font-bold text-redpen underline decoration-wavy underline-offset-4 sm:hidden"
        >
          Say hi
        </a>
      </nav>
    </header>
  );
}
