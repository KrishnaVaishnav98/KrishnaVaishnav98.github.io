export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-12 text-center">
        <p className="font-display text-lg font-bold">Krishna Vaishnav</p>
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} · Bengaluru, India · Designed &amp; built by hand.
        </p>
      </div>
    </footer>
  );
}
