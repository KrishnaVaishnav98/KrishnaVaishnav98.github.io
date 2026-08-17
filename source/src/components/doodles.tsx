/* Hand-drawn SVG doodles — all strokes inherit currentColor */

export function PaperPlane({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 48" fill="none" className={`absolute ${className}`} aria-hidden>
      <path
        d="M4 26 58 6 34 42l-6-13-24-3Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M28 29 58 6" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path
        d="M10 38c4 1 7 4 8 7M4 34c2 0 4 1 5 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="1 5"
      />
    </svg>
  );
}

export function Pencil({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 72 24" fill="none" className={`absolute ${className}`} aria-hidden>
      <path
        d="M6 12 14 5h44a6 6 0 0 1 0 14H14L6 12Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M14 5v14M50 5v14" stroke="currentColor" strokeWidth="2" />
      <path d="M6 12l4-1.5M6 12l4 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function Ruler({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 20" fill="none" className={`absolute ${className}`} aria-hidden>
      <rect x="2" y="3" width="76" height="14" rx="2" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M14 3v6M26 3v4M38 3v6M50 3v4M62 3v6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function StarSticker({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={`absolute drop-shadow-md ${className}`} aria-hidden>
      <path
        d="M20 2l5.2 11.4L37 15l-8.8 8.2L30.5 36 20 29.6 9.5 36l2.3-12.8L3 15l11.8-1.6L20 2Z"
        fill="#f0b429"
        stroke="#fffdf6"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Rough hand-drawn ellipse — wrap around text to "circle" it in red pen */
export function CircleScribble({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 120"
      fill="none"
      preserveAspectRatio="none"
      className={`absolute -inset-x-5 -inset-y-3 ${className}`}
      aria-hidden
    >
      <path
        d="M285 45C270 14 202 5 150 7 72 10 14 32 11 60c-3 30 70 52 149 51 80-1 132-24 130-55-1-19-28-34-60-40"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* Squiggly red-pen underline */
export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 14" fill="none" preserveAspectRatio="none" className={className} aria-hidden>
      <path
        d="M3 9c18-8 30 6 48-2s30 4 48-3 30 5 48-2 32 4 50-2 18 6 20 4"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Paperclip({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 34 70" fill="none" className={`absolute ${className}`} aria-hidden>
      <path
        d="M25 14v38a8 8 0 0 1-16 0V16a5 5 0 0 1 10 0v34"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* Red-pen tick mark */
export function Tick({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 26 22" fill="none" className={className} aria-hidden>
      <path
        d="M3 12c3 2 6 6 7 8C13 13 19 5 24 2"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
