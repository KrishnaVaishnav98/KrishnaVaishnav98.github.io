"use client";

import { motion } from "framer-motion";
import SectionNumber from "./SectionNumber";

const languages = [
  { name: "JavaScript", percent: 42, color: "#f7df1e" },
  { name: "TypeScript", percent: 22, color: "#3178c6" },
  { name: "CSS", percent: 15, color: "#0071e3" },
  { name: "HTML", percent: 12, color: "#e34c26" },
  { name: "SCSS", percent: 5, color: "#c6538c" },
  { name: "Other", percent: 4, color: "#6e6e73" },
];

export default function GitHubCalendar() {
  return (
    <section id="github" className="relative py-32 md:py-40 px-6">
      <SectionNumber number="05" label="GitHub" />
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-card/60 border border-border/50 p-8 backdrop-blur-sm"
        >
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm font-medium">GitHub</p>
            <a
              href="https://github.com/KrishnaVaishnav98"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-accent hover:underline"
            >
              @KrishnaVaishnav98 →
            </a>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              { v: "30+", l: "Repositories" },
              { v: "500+", l: "Contributions" },
              { v: "6+", l: "Languages" },
            ].map((s) => (
              <div key={s.l} className="text-center px-3 py-4 rounded-2xl bg-surface border border-border hover:border-accent/20 hover:-translate-y-0.5 transition-all duration-500">
                <p className="text-xl md:text-2xl font-semibold text-accent-gradient leading-none mb-1.5 whitespace-nowrap">{s.v}</p>
                <p className="text-[11px] text-muted">{s.l}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-muted mb-3">Top Languages</p>
          <div className="flex h-2 rounded-full overflow-hidden mb-4">
            {languages.map((l) => (
              <motion.div
                key={l.name}
                initial={{ width: 0 }}
                whileInView={{ width: `${l.percent}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ backgroundColor: l.color }}
                className="h-full"
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            {languages.map((l) => (
              <div key={l.name} className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: l.color }} />
                <span className="text-xs text-foreground">{l.name}</span>
                <span className="text-xs text-muted">{l.percent}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
