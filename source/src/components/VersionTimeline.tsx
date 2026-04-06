"use client";

import { motion } from "framer-motion";
import TerminalWindow from "./TerminalWindow";

const versions = [
  {
    version: "v1",
    branch: "origin/civil-engineering",
    date: "2016–2020",
    title: "The Beginning",
    commitMsg: "feat: graduate from Uka Tarsadia University (9.44 CGPA)",
    files: ["AutoCAD", "Excel", "Concrete & Steel"],
    diff: [
      { type: "add", text: "B.Tech Civil Engineering — Bardoli, Gujarat" },
      { type: "add", text: "Engineering mindset: think in systems" },
      { type: "rem", text: "Any knowledge of what a <div> is" },
    ],
    color: "text-red",
  },
  {
    version: "v2",
    branch: "origin/masai-school",
    date: "2022–2023",
    title: "The Career Switch",
    commitMsg: "feat: complete Full Stack Web Development at Masai School",
    files: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    diff: [
      { type: "add", text: "Intensive bootcamp — Bengaluru, Karnataka" },
      { type: "add", text: "Components, state management, REST APIs" },
      { type: "add", text: "Built 4 projects from scratch" },
      { type: "rem", text: "Thinking I know everything after learning React" },
    ],
    color: "text-yellow",
  },
  {
    version: "v3",
    branch: "origin/first-projects",
    date: "2023",
    title: "First Real Projects",
    commitMsg: "feat: ship CodeFuse, Money Mentor, SchoolSync, Skinnetics to prod",
    files: ["React", "Redux", "TypeScript", "Firebase", "Tailwind", "Spring Boot"],
    diff: [
      { type: "add", text: "Led 5-member team on Money Mentor" },
      { type: "add", text: "AI-powered interview platform (GPT-3)" },
      { type: "add", text: "Role-based auth, real-time features" },
      { type: "rem", text: "Building only for assignments, not users" },
    ],
    color: "text-accent",
  },
  {
    version: "v4",
    branch: "origin/k12-techno",
    date: "Dec 2023–2024",
    title: "Professional Work",
    commitMsg: "feat: join K12 Techno Services as SDE1, ship Orchids + MyNOST",
    files: ["Next.js", "React", "Tailwind CSS", "Ant Design", "Redux", "ISR"],
    diff: [
      { type: "add", text: "Led frontend for education platforms used across India" },
      { type: "add", text: "Built 60% of Orchids website modules" },
      { type: "add", text: "Solo-built MyNOST scholarship platform in 2 days" },
      { type: "add", text: "Improved Core Web Vitals (LCP, CLS) & SEO rankings" },
      { type: "rem", text: "Ignoring performance until production" },
    ],
    color: "text-purple",
  },
  {
    version: "v5",
    branch: "origin/current",
    date: "2025 — Present",
    title: "Current Me",
    commitMsg: "feat: ERP systems, live tracking, scholarship platforms at scale",
    files: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Ant Design", "Redux", "LocoNav"],
    diff: [
      { type: "add", text: "ERP Finance — live bus tracking with map integration" },
      { type: "add", text: "ERP Eduvate — announcements + assessment systems" },
      { type: "add", text: "NammaSuper30 — Karnataka scholarship platform" },
      { type: "add", text: "SchoolsUniverse — school listing & comparison" },
      { type: "add", text: "DIYWebMaker — drag-and-drop website builder for schools" },
      { type: "rem", text: "Writing code I can't maintain 6 months later" },
    ],
    color: "text-green",
  },
];

export default function VersionTimeline() {
  return (
    <section id="journey" className="py-24 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 font-mono text-sm"
        >
          <span className="text-green">$</span>{" "}
          <span className="text-muted">git log --oneline --graph krishna-career</span>
        </motion.div>

        <div className="space-y-8">
          {versions.map((v, i) => (
            <motion.div
              key={v.version}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <TerminalWindow title={`${v.branch} — ${v.version}`} delay={i * 0.05}>
                {/* Commit header */}
                <div className="font-mono text-xs space-y-2">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                        v.color
                      } border-current/20 bg-current/5`}
                    >
                      {v.version}
                    </span>
                    <span className="text-muted/70">{v.date}</span>
                    <span className="text-muted/50">•</span>
                    <span className="text-muted/60">{v.title}</span>
                  </div>

                  {/* Commit message */}
                  <div className="text-yellow text-sm mb-3">
                    {v.commitMsg}
                  </div>

                  {/* Files changed */}
                  <div className="text-muted/70 mb-2">
                    {v.files.length} files changed:{" "}
                    <span className="text-muted/60">
                      {v.files.join(", ")}
                    </span>
                  </div>

                  {/* Diff */}
                  <div className="bg-background/50 rounded-md p-3 space-y-0.5 border border-card-border">
                    {v.diff.map((d, j) => (
                      <div
                        key={j}
                        className={`font-mono ${
                          d.type === "add"
                            ? "text-green"
                            : "text-red"
                        }`}
                      >
                        {d.type === "add" ? "+" : "-"} {d.text}
                      </div>
                    ))}
                  </div>
                </div>
              </TerminalWindow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
