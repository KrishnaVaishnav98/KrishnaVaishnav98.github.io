"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface TerminalWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function TerminalWindow({
  title,
  children,
  className = "",
  delay = 0,
}: TerminalWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={`bg-terminal-bg border border-card-border rounded-lg overflow-hidden shadow-2xl shadow-black/20 ${className}`}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-window-bar border-b border-card-border">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red" />
          <div className="w-3 h-3 rounded-full bg-yellow" />
          <div className="w-3 h-3 rounded-full bg-green" />
        </div>
        <span className="text-xs text-muted ml-2 flex-1 text-center">
          {title}
        </span>
        <div className="w-12" />
      </div>
      {/* Content */}
      <div className="p-5">{children}</div>
    </motion.div>
  );
}
