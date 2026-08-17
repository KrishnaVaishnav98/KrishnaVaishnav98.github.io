export default function Footer() {
  return (
    <footer className="border-t-4 border-double border-ink/15 px-4 py-8 lg:pl-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 text-center sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:text-left">
        <p className="text-sm text-ink/55">
          © {new Date().getFullYear()} Krishna Vaishnav · Bengaluru, India
        </p>
        <p className="font-hand text-lg text-pen">
          Thanks for stopping by ✎
        </p>
      </div>
    </footer>
  );
}
