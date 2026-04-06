"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const files = [
  {
    name: "why-nextjs.md",
    icon: "📄",
    question: "Why Next.js for education platforms?",
    content: `SEO is critical when parents search for schools.
SSR gives indexable content out of the box.
ISR rebuilds pages without redeploying.
App Router keeps data fetching clean.

For Orchids and SchoolsUniverse —
Next.js wasn't optional. It was the right tool.`,
  },
  {
    name: "when-no-library.md",
    icon: "📄",
    question: "When NOT to use a library?",
    content: `If I can write it in 30 lines and
it won't need to scale — skip the library.

I've seen projects with 40 dependencies
for features that could be 200 lines of code.

Every dependency is a liability.
Add them when the problem is genuinely complex —
like LocoNav for live bus tracking.`,
  },
  {
    name: "large-listings.md",
    icon: "📄",
    question: "Handling large listing pages",
    content: `Pagination on the API level. Never fetch-all.
Server-side filtering for city/locality/ratings.
Debounced search inputs.
Skeleton loaders for perceived performance.

The goal: user never waits,
browser never chokes.`,
  },
  {
    name: "tight-deadlines.md",
    icon: "📄",
    question: "My approach to tight deadlines",
    content: `MyNOST was 2 days.
You can't build reusable architecture in 2 days.
But you CAN build clean code.

Focus on: proper component boundaries,
clean data flow, no shortcuts on accessibility.

The refactoring comes in the next sprint.`,
  },
  {
    name: "core-web-vitals.md",
    icon: "📄",
    question: "How I optimize Core Web Vitals",
    content: `CLS: explicit image dimensions, font-display swap,
skeleton loaders.

LCP: Next/Image for optimized loading,
ISR for fast server responses,
critical CSS inlining.

I check Lighthouse during development, not after.
Orchids went from 58 to 96 — by treating
metrics as requirements, not afterthoughts.`,
  },
];

const techStack = [
  "ReactJS", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3",
  "Tailwind CSS", "Ant Design", "Bootstrap", "Redux",
  "Node.js", "Express.js", "MongoDB", "RESTful APIs",
  "Git", "GitHub", "GitLab",
];

const softSkills = [
  "Analytical Thinking", "Ownership & Accountability",
  "Team Collaboration", "UI/UX Sensitivity", "Problem-Solving",
  "Adaptability", "Communication", "Time & Project Management",
  "Continuous Learning",
];

export default function HowIThink() {
  const [activeFile, setActiveFile] = useState(0);

  return (
    <section id="thinking" className="py-24 px-4 md:px-6 bg-card/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 font-mono text-sm"
        >
          <span className="text-green">$</span>{" "}
          <span className="text-muted">cat ~/thoughts/*.md</span>
        </motion.div>

        {/* File explorer style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-terminal-bg border border-card-border rounded-lg overflow-hidden shadow-2xl shadow-black/20"
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-window-bar border-b border-card-border">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red" />
              <div className="w-3 h-3 rounded-full bg-yellow" />
              <div className="w-3 h-3 rounded-full bg-green" />
            </div>
            <span className="text-xs text-muted ml-2">
              ~/thoughts/
            </span>
          </div>

          <div className="flex flex-col md:flex-row min-h-[350px]">
            {/* Sidebar */}
            <div className="md:w-52 border-b md:border-b-0 md:border-r border-card-border bg-window-bar/50 p-2 overflow-x-auto md:overflow-x-visible">
              <div className="text-[10px] text-muted/60 uppercase tracking-widest px-2 py-1 mb-1">
                ~/thoughts
              </div>
              <div className="flex md:flex-col gap-0.5 min-w-max md:min-w-0">
                {files.map((f, i) => (
                  <button
                    key={f.name}
                    onClick={() => setActiveFile(i)}
                    className={`flex items-center gap-2 px-2 py-1.5 rounded text-xs text-left w-full transition-colors font-mono ${
                      i === activeFile
                        ? "bg-accent/10 text-accent"
                        : "text-muted hover:bg-card hover:text-foreground"
                    }`}
                  >
                    <span className="text-[10px]">{f.icon}</span>
                    <span className="truncate">{f.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFile}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="font-mono text-xs"
                >
                  <div className="text-accent text-sm mb-4">
                    # {files[activeFile].question}
                  </div>
                  <pre className="text-muted whitespace-pre-wrap leading-relaxed">
                    {files[activeFile].content}
                  </pre>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack — styled as package.json */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <div className="font-mono text-xs text-muted/70 mb-3">
            // package.json — dependencies
          </div>
          <div className="bg-terminal-bg border border-card-border rounded-lg p-5 font-mono text-xs">
            <div className="text-purple mb-2">
              {'"'}
              <span className="text-green">technicalSkills</span>
              {'"'}: {"{"}
            </div>
            <div className="pl-4 space-y-0.5">
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, x: -5 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                >
                  <span className="text-cyan">&quot;{tech}&quot;</span>
                  <span className="text-muted">: </span>
                  <span className="text-orange">&quot;proficient&quot;</span>
                  {i < techStack.length - 1 && <span className="text-muted">,</span>}
                </motion.div>
              ))}
            </div>
            <div className="text-purple mt-1">{"}"}</div>

            <div className="text-purple mt-4 mb-2">
              {'"'}
              <span className="text-green">softSkills</span>
              {'"'}: [
            </div>
            <div className="pl-4 flex flex-wrap gap-x-1 gap-y-0.5">
              {softSkills.map((skill, i) => (
                <span key={skill}>
                  <span className="text-orange">&quot;{skill}&quot;</span>
                  {i < softSkills.length - 1 && <span className="text-muted">, </span>}
                </span>
              ))}
            </div>
            <div className="text-purple mt-1">]</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
