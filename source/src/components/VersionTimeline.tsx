"use client";

import { motion } from "framer-motion";
import SectionNumber from "./SectionNumber";

const milestones = [
  {
    period: "Dec 2023 – Present",
    title: "SDE — Frontend Developer",
    company: "K12 Techno Services",
    location: "Bengaluru",
    description: "Leading frontend for Orchids International (60% of modules), SchoolsUniverse, ERP systems, and scholarship platforms. Optimized Core Web Vitals, improved SEO from 58 to 96.",
    color: "#34d399",
    current: true,
  },
  {
    period: "Dec 2022 – Sep 2023",
    title: "Full Stack Web Development",
    company: "Masai School",
    location: "Bengaluru",
    description: "Intensive full-stack bootcamp. Built 4 production projects: CodeFuse (AI interview platform with GPT-3), Money Mentor (led 5-member team), SchoolSync, Skinnetics.",
    color: "#60a5fa",
  },
  {
    period: "Jun 2016 – Dec 2020",
    title: "B.Tech Civil Engineering",
    company: "Uka Tarsadia University",
    location: "Gujarat · 9.44 CGPA",
    description: "Engineering fundamentals that shaped how I approach systems and problem-solving.",
    color: "#a78bfa",
  },
];

export default function VersionTimeline() {
  const current = milestones[0];
  const past = milestones.slice(1);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <SectionNumber number="04" label="Experience" />

      <div className="min-h-screen px-6 md:px-12 lg:px-16 pt-28 md:pt-32 pb-16">
        {/* Heading */}
        <div className="mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2">
            My
          </h2>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-muted tracking-tight">
            <span className="font-serif italic">journey</span> so far.
          </h2>
        </div>

        {/* Featured current role */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-emerald-500/20 p-6 md:p-10 mb-8 backdrop-blur-sm overflow-hidden"
        >
          {/* "Now" badge */}
          <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-success/20 text-success">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-success" />
            </span>
            Currently
          </div>

          <p className="text-xs text-muted-foreground mb-3">{current.period}</p>
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2">
            {current.title}
          </h3>
          <p className="text-base md:text-lg mb-1" style={{ color: current.color }}>
            {current.company}
          </p>
          <p className="text-xs text-muted-foreground mb-4">{current.location}</p>
          <p className="text-sm md:text-base text-muted leading-relaxed max-w-3xl">
            {current.description}
          </p>
        </motion.div>

        {/* Past roles — smaller, in a grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {past.map((m, i) => (
            <motion.div
              key={m.period}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl bg-card/40 border border-border p-5 md:p-6 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm"
              style={{ borderLeftColor: m.color, borderLeftWidth: "2px" }}
            >
              <p className="text-[10px] text-muted-foreground mb-2 uppercase tracking-widest">
                {m.period}
              </p>
              <h3 className="text-base md:text-lg font-bold tracking-tight mb-1">
                {m.title}
              </h3>
              <p className="text-xs mb-3" style={{ color: m.color }}>
                {m.company} · <span className="text-muted-foreground">{m.location}</span>
              </p>
              <p className="text-xs md:text-sm text-muted leading-relaxed">
                {m.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]" />
    </section>
  );
}
