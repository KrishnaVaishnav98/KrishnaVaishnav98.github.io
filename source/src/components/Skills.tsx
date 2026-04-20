"use client";

import { motion } from "framer-motion";
import SectionNumber from "./SectionNumber";

interface SkillCategory {
  title: string;
  subtitle?: string;
  items: string[];
  color: string;
}

const categories: SkillCategory[] = [
  {
    title: "Frontend",
    subtitle: "What I do every day",
    items: ["React.js", "Next.js", "Redux", "HTML5", "CSS3", "JavaScript (ES6+)", "Tailwind CSS", "Bootstrap", "Ant Design", "React Router"],
    color: "#60a5fa",
  },
  {
    title: "Backend",
    subtitle: "Learning & building small projects",
    items: ["Node.js", "Express.js", "MongoDB"],
    color: "#34d399",
  },
  {
    title: "Tools & Platforms",
    subtitle: "Daily workflow",
    items: ["GitHub", "GitLab", "GitHub Desktop", "Postman", "Vercel", "Netlify", "VS Code"],
    color: "#a78bfa",
  },
];

const exploring = ["Next.js App Router", "ISR & Caching", "TypeScript", "Backend Fundamentals"];

export default function Skills() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <SectionNumber number="03" label="Skills" />

      <div className="min-h-screen px-6 md:px-12 lg:px-16 pt-28 md:pt-32 pb-16">
        {/* Header */}
        <div className="mb-10 md:mb-14 max-w-3xl">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2">
            What I work
          </h2>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-muted tracking-tight">
            <span className="font-serif italic">with.</span>
          </h2>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: ci * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl bg-card/40 border border-border p-6 backdrop-blur-sm"
              style={{ borderTopColor: cat.color, borderTopWidth: "2px" }}
            >
              {/* Category header */}
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="text-lg md:text-xl font-bold tracking-tight">
                  {cat.title}
                </h3>
                <span className="text-[10px] font-mono" style={{ color: cat.color }}>
                  {String(cat.items.length).padStart(2, "0")}
                </span>
              </div>
              {cat.subtitle && (
                <p className="text-[11px] text-muted-foreground italic mb-5">
                  {cat.subtitle}
                </p>
              )}

              {/* Items as chips */}
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.1 + i * 0.03 }}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-surface border border-border text-foreground hover:border-accent/30 transition-colors"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently exploring */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="rounded-2xl bg-accent/5 border border-accent/20 p-5 md:p-6"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <p className="text-[10px] text-accent uppercase tracking-widest font-semibold whitespace-nowrap">
                Currently Exploring
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {exploring.map((item) => (
                <span
                  key={item}
                  className="text-[11px] px-2.5 py-1 rounded-full bg-card border border-accent/20 text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]" />
    </section>
  );
}
