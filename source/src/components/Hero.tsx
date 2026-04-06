"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "./Typewriter";

const bootLines = [
  { text: "$ initializing krishna-portfolio v5.0.0...", color: "text-muted" },
  { text: "✓ loaded: 2 years of production experience", color: "text-green" },
  { text: "✓ loaded: 7+ shipped applications", color: "text-green" },
  { text: "✓ loaded: K12 Techno Services — SDE1", color: "text-green" },
  { text: "✓ loaded: React, Next.js, TypeScript, Tailwind", color: "text-green" },
  { text: "⚠ warning: this portfolio is also a project", color: "text-yellow" },
  { text: "$ boot complete. welcome.", color: "text-accent" },
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(1);
  const [bootDone, setBootDone] = useState(false);

  const handleLineComplete = useCallback(() => {
    setVisibleLines((prev) => {
      if (prev < bootLines.length) {
        return prev + 1;
      }
      return prev;
    });
  }, []);

  const handleLastLine = useCallback(() => {
    setTimeout(() => setBootDone(true), 400);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 md:px-6 relative overflow-hidden scanline"
    >
      {/* Grid bg */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-3xl w-full mx-auto relative z-10">
        {/* Terminal boot sequence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-terminal-bg border border-card-border rounded-lg overflow-hidden shadow-2xl shadow-black/30"
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-window-bar border-b border-card-border">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red" />
              <div className="w-3 h-3 rounded-full bg-yellow" />
              <div className="w-3 h-3 rounded-full bg-green" />
            </div>
            <span className="text-xs text-muted ml-2 flex-1 text-center">
              krishna@portfolio ~ %
            </span>
            <div className="w-12" />
          </div>

          {/* Terminal content */}
          <div className="p-5 md:p-6 font-mono text-sm space-y-1 min-h-[320px]">
            {bootLines.slice(0, visibleLines).map((line, i) => (
              <div key={i} className={line.color}>
                {i < visibleLines - 1 ? (
                  <span>{line.text}</span>
                ) : (
                  <Typewriter
                    text={line.text}
                    speed={20}
                    delay={0}
                    onComplete={
                      i === bootLines.length - 1
                        ? handleLastLine
                        : handleLineComplete
                    }
                    cursor={i === visibleLines - 1 && !bootDone}
                  />
                )}
              </div>
            ))}

            {/* After boot — main intro */}
            <AnimatePresence>
              {bootDone && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="pt-6 space-y-4"
                >
                  <div className="flex flex-col sm:flex-row gap-5 items-start">
                    {/* Profile photo */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="flex-shrink-0 mx-auto sm:mx-0"
                    >
                      <div className="w-36 h-44 md:w-44 md:h-56 rounded-lg overflow-hidden border-2 border-accent/30 shadow-lg shadow-accent/10 relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="/krishna-profile.jpeg"
                          alt="Krishna Vaishnav"
                          className="w-full h-full object-cover object-[center_10%] scale-[1.8]"
                        />
                      </div>
                      <div className="text-[10px] text-muted/60 text-center mt-1.5 font-mono">
                        krishna.jpeg
                      </div>
                    </motion.div>

                    {/* Code block */}
                    <div className="flex-1 space-y-1">
                      <div className="text-muted text-xs">
                        // ─────────────────────────────────
                      </div>
                      <div>
                        <span className="text-purple">const</span>{" "}
                        <span className="text-cyan">developer</span>{" "}
                        <span className="text-muted">=</span>{" "}
                        <span className="text-yellow">{"{"}</span>
                      </div>
                      <div className="pl-4">
                        <span className="text-green">name</span>
                        <span className="text-muted">:</span>{" "}
                        <span className="text-orange">&quot;Krishna Vaishnav&quot;</span>
                        <span className="text-muted">,</span>
                      </div>
                      <div className="pl-4">
                        <span className="text-green">role</span>
                        <span className="text-muted">:</span>{" "}
                        <span className="text-orange">&quot;SDE1 — Frontend Developer&quot;</span>
                        <span className="text-muted">,</span>
                      </div>
                      <div className="pl-4">
                        <span className="text-green">company</span>
                        <span className="text-muted">:</span>{" "}
                        <span className="text-orange">&quot;K12 Techno Services&quot;</span>
                        <span className="text-muted">,</span>
                      </div>
                      <div className="pl-4">
                        <span className="text-green">location</span>
                        <span className="text-muted">:</span>{" "}
                        <span className="text-orange">&quot;Bengaluru, Karnataka&quot;</span>
                        <span className="text-muted">,</span>
                      </div>
                      <div className="pl-4">
                        <span className="text-green">motto</span>
                        <span className="text-muted">:</span>{" "}
                        <span className="text-orange">&quot;Not the best developer. But definitely not the same one as last year.&quot;</span>
                      </div>
                      <div>
                        <span className="text-yellow">{"}"}</span>
                        <span className="text-muted">;</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <a
                      href="#journey"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-accent/10 border border-accent/20 text-accent text-xs hover:bg-accent/20 transition-colors"
                    >
                      <span className="text-green">$</span> krishna --journey
                    </a>
                    <a
                      href="#projects"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-card border border-card-border text-muted text-xs hover:border-accent/30 hover:text-accent transition-colors"
                    >
                      <span className="text-green">$</span> krishna --projects
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-card border border-card-border text-muted text-xs hover:border-accent/30 hover:text-accent transition-colors"
                    >
                      <span className="text-green">$</span> krishna --contact
                    </a>
                  </div>

                  <div className="pt-3 text-xs text-muted/30">
                    hint: press{" "}
                    <kbd className="px-1.5 py-0.5 rounded bg-card border border-card-border text-muted/50 text-[10px]">
                      ⌘K
                    </kbd>{" "}
                    to navigate anywhere
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
