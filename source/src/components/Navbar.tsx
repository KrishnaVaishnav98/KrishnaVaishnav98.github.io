const links = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

function LogoCube() {
  return (
    <svg viewBox="0 0 24 26" className="h-6 w-6" aria-hidden>
      <polygon points="12,1 23,7 12,13 1,7" fill="#8fc1ff" />
      <polygon points="1,7 12,13 12,25 1,19" fill="#2f6bff" />
      <polygon points="23,7 12,13 12,25 23,19" fill="#1c4fd6" />
    </svg>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-night/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="flex items-center gap-2.5">
          <LogoCube />
          <span className="font-display text-lg font-bold tracking-tight">
            Krishna Vaishnav
          </span>
        </a>
        <div className="hidden items-center gap-7 sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-blue"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1xpDCzPE7qCdnKQRGQ_DlG10uw3nBLJoy/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-blue px-4 py-1.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-coral hover:shadow-md"
          >
            Resume ↗
          </a>
        </div>
        <a href="#contact" className="text-sm font-semibold text-blue sm:hidden">
          Contact
        </a>
      </nav>
    </header>
  );
}
