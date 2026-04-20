"use client";

import { motion } from "framer-motion";

interface SectionNumberProps {
  number: string;
  label: string;
}

export default function SectionNumber({ number, label }: SectionNumberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="absolute top-6 md:top-10 left-6 md:left-12 z-20 flex items-center gap-3"
    >
      <span className="text-xs font-mono text-accent tracking-widest">
        {number}.
      </span>
      <span className="w-8 h-px bg-accent/40" />
      <span className="text-[10px] uppercase tracking-[0.3em] text-muted">
        {label}
      </span>
    </motion.div>
  );
}
