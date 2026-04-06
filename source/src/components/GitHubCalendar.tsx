"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Repositories", value: "30+", icon: "□" },
  { label: "Contributions", value: "500+", icon: "◆" },
  { label: "Languages", value: "6+", icon: "⟩" },
  { label: "Profile", value: "KrishnaVaishnav98", icon: "◎" },
];

const languages = [
  { name: "JavaScript", percent: 42, color: "#f7df1e" },
  { name: "TypeScript", percent: 22, color: "#3178c6" },
  { name: "CSS", percent: 15, color: "#563d7c" },
  { name: "HTML", percent: 12, color: "#e34c26" },
  { name: "SCSS", percent: 5, color: "#c6538c" },
  { name: "Other", percent: 4, color: "#71717a" },
];

export default function GitHubCalendar() {
  return (
    <section id="github" className="py-16 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 font-mono text-sm"
        >
          <span className="text-green">$</span>{" "}
          <span className="text-muted">gh profile KrishnaVaishnav98 --stats</span>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-terminal-bg border border-card-border rounded-lg p-4 text-center font-mono"
            >
              <div className="text-muted/60 text-lg mb-1">{s.icon}</div>
              <div className="text-xl font-bold text-accent mb-1">{s.value}</div>
              <div className="text-xs text-muted">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Top Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-terminal-bg border border-card-border rounded-lg p-5 font-mono text-xs"
        >
          <div className="text-muted mb-4">
            <span className="text-green">$</span> gh api /users/KrishnaVaishnav98/languages
          </div>

          {/* Language bar */}
          <div className="flex h-3 rounded-full overflow-hidden mb-4">
            {languages.map((l) => (
              <motion.div
                key={l.name}
                initial={{ width: 0 }}
                whileInView={{ width: `${l.percent}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ backgroundColor: l.color }}
                className="h-full"
                title={`${l.name}: ${l.percent}%`}
              />
            ))}
          </div>

          {/* Language labels */}
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {languages.map((l) => (
              <div key={l.name} className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: l.color }}
                />
                <span className="text-foreground">{l.name}</span>
                <span className="text-muted">{l.percent}%</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-4 text-center font-mono text-xs text-muted"
        >
          <a
            href="https://github.com/KrishnaVaishnav98"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            → view full profile on github
          </a>
        </motion.div>
      </div>
    </section>
  );
}
