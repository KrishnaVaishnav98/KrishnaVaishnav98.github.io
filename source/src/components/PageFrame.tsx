export default function PageFrame() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-y-0 left-0 z-40 hidden lg:block"
    >
      {/* red margin line */}
      <span className="absolute inset-y-0 left-16 w-px bg-redpen/40" />
      <span className="absolute inset-y-0 left-[4.35rem] w-px bg-redpen/20" />
      {/* hole punches */}
      <span className="absolute inset-y-0 left-5 flex flex-col justify-between py-14">
        {Array.from({ length: 7 }).map((_, i) => (
          <span key={i} className="punch-hole" />
        ))}
      </span>
    </div>
  );
}
