/* Minimal brand glyphs for tech tiles */

export function AtomIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <g className="spin-slow" stroke="#61dafb" strokeWidth="1.8" fill="none">
        <ellipse cx="20" cy="20" rx="16" ry="6.5" />
        <ellipse cx="20" cy="20" rx="16" ry="6.5" transform="rotate(60 20 20)" />
        <ellipse cx="20" cy="20" rx="16" ry="6.5" transform="rotate(120 20 20)" />
      </g>
      <circle cx="20" cy="20" r="3" fill="#61dafb" />
    </svg>
  );
}

export function WaveIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="#38bdf8" aria-hidden>
      <path d="M20 12c-5.3 0-8.7 2.7-10 8 2-2.7 4.3-3.7 7-3 1.5.4 2.6 1.5 3.8 2.7C22.7 21.6 25 24 30 24c5.3 0 8.7-2.7 10-8-2 2.7-4.3 3.7-7 3-1.5-.4-2.6-1.5-3.8-2.7C27.3 14.4 25 12 20 12Z" transform="translate(-5 -3) scale(0.85)" />
      <path d="M10 22c-5.3 0-8.7 2.7-10 8 2-2.7 4.3-3.7 7-3 1.5.4 2.6 1.5 3.8 2.7C12.7 31.6 15 34 20 34c5.3 0 8.7-2.7 10-8-2 2.7-4.3 3.7-7 3-1.5-.4-2.6-1.5-3.8-2.7C17.3 24.4 15 22 10 22Z" transform="translate(3 -8) scale(0.85)" />
    </svg>
  );
}

export function LeafIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <path
        d="M20 4c5 6.5 8 12 8 17.5C28 28.5 24.5 33 20.6 35.4L20 36l-.6-.6C15.5 33 12 28.5 12 21.5 12 16 15 10.5 20 4Z"
        fill="#47a248"
      />
      <path d="M20 10v24" stroke="#2e6b34" strokeWidth="1.6" />
    </svg>
  );
}

export function BranchIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} stroke="#fff" strokeWidth="2.4" fill="none" aria-hidden>
      <circle cx="12" cy="9" r="4" fill="#fff" stroke="none" />
      <circle cx="12" cy="31" r="4" fill="#fff" stroke="none" />
      <circle cx="28" cy="15" r="4" fill="#fff" stroke="none" />
      <path d="M12 13v14M28 19c0 6-7 5-12 8" />
    </svg>
  );
}

export function HexIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <path
        d="M20 3 34.7 11.5v17L20 37 5.3 28.5v-17L20 3Z"
        fill="none"
        stroke="#8cc84b"
        strokeWidth="2.5"
      />
      <text x="20" y="25" textAnchor="middle" fontSize="12" fontWeight="700" fill="#8cc84b">
        n
      </text>
    </svg>
  );
}
