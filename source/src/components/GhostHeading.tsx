"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GhostHeadingProps {
  ghost: string;
  children: ReactNode;
  className?: string;
  ghostClassName?: string;
}

export default function GhostHeading({
  ghost,
  children,
  className = "",
  ghostClassName = "",
}: GhostHeadingProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* Outlined ghost text behind */}
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 0.05, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`absolute inset-0 flex items-center justify-center text-[3.5rem] md:text-[6rem] lg:text-[9rem] font-bold tracking-tighter text-transparent select-none pointer-events-none whitespace-nowrap ${ghostClassName}`}
        style={{
          WebkitTextStroke: "1px currentColor",
          color: "var(--foreground)",
          top: "-30%",
          zIndex: 0,
        }}
        aria-hidden="true"
      >
        {ghost}
      </motion.span>

      {/* Actual heading on top */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
