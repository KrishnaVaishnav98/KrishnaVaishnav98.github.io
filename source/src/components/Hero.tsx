"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionNumber from "./SectionNumber";

const line1 = "Krishna";
const line2 = "Vaishnav.";

const letterAnim = {
  hidden: { opacity: 0, y: 80, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      delay: 0.3 + i * 0.04,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMouse({ x, y });
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMouse({ x: 0, y: 0 })}
    >
      <SectionNumber number="01" label="Intro" />

      {/* Asymmetric content grid */}
      <div className="relative z-10 min-h-screen grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 px-6 md:px-12 lg:px-16 pt-28 md:pt-32 pb-16">
        {/* LEFT — name + role */}
        <div className="flex flex-col justify-center">
          {/* Available chip */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 border border-success/20 mb-8 w-fit"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-success" />
            </span>
            <span className="text-[10px] font-medium text-success uppercase tracking-widest">
              Open to opportunities
            </span>
          </motion.div>

          {/* Massive name */}
          <h1
            className="text-[3.5rem] md:text-[6rem] lg:text-[8rem] font-bold tracking-tighter leading-[0.85] mb-8"
            style={{
              perspective: "1000px",
              transform: `translate3d(${mouse.x * 4}px, ${mouse.y * 3}px, 0)`,
              transition: "transform 0.4s ease-out",
            }}
          >
            <span className="block">
              {line1.split("").map((char, i) => (
                <motion.span
                  key={`l1-${i}`}
                  custom={i}
                  variants={letterAnim}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                  style={{ transformOrigin: "bottom" }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
            <span className="block text-muted">
              {line2.split("").map((char, i) => (
                <motion.span
                  key={`l2-${i}`}
                  custom={i + line1.length}
                  variants={letterAnim}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                  style={{ transformOrigin: "bottom" }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Role with serif accent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <p className="text-2xl md:text-3xl font-light text-foreground mb-2">
              <span className="font-serif italic">Frontend</span> Developer
            </p>
            <p className="text-sm md:text-base text-muted">
              SDE at K12 Techno Services · Bengaluru
            </p>
          </motion.div>

          {/* Bracketed tech */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-xs md:text-sm font-mono text-accent/70 mb-10 tracking-wide"
          >
            [ React.js, Next.js, TypeScript, Tailwind, Node.js ]
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("slide-to", { detail: "projects" }))}
              data-hover
              className="group px-8 py-3.5 rounded-full bg-foreground text-background text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)]"
            >
              View My Work
              <span className="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
            <a
              href="https://drive.google.com/file/d/1ILLDrSitZimLm417V5MaVDDgXHWgrVG5/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              data-hover
              className="px-8 py-3.5 rounded-full text-muted text-sm font-medium hover:text-foreground transition-all duration-300"
              onClick={() => {
                const a = document.createElement("a");
                a.href = "https://drive.google.com/uc?export=download&id=1ILLDrSitZimLm417V5MaVDDgXHWgrVG5";
                a.download = "Krishna-Vaishnav-Resume.pdf";
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
              }}
            >
              Resume ↓
            </a>
          </motion.div>
        </div>

        {/* RIGHT — photo + small bio */}
        <div className="flex flex-col items-center lg:items-end justify-center gap-8">
          {/* Photo with mouse parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              transform: `translate3d(${mouse.x * -10}px, ${mouse.y * -10}px, 0)`,
              transition: "transform 0.3s ease-out",
            }}
            className="relative"
          >
            <div className="relative w-44 h-44 md:w-56 md:h-56 lg:w-64 lg:h-64">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 40px 10px rgba(10,132,255,0.15)",
                    "0 0 60px 20px rgba(10,132,255,0.25)",
                    "0 0 40px 10px rgba(10,132,255,0.15)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full"
              />
              <div className="relative w-full h-full rounded-full overflow-hidden ring-1 ring-white/15">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/krishna-profile.jpeg"
                  alt="Krishna Vaishnav"
                  className="w-full h-full object-cover object-[center_10%] scale-[1.8]"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Personal note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="max-w-xs text-center lg:text-right"
          >
            <p className="text-sm text-muted leading-relaxed italic">
              <span className="text-accent">&ldquo;</span>
              A civil engineer who fell in love with the web. Two years in,
              still chasing the thrill of building things you can see, click, and use.
              <span className="text-accent">&rdquo;</span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative grid lines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]" />
    </section>
  );
}
