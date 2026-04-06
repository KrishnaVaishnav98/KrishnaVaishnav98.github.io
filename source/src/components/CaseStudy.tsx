"use client";

import { motion } from "framer-motion";
import TerminalWindow from "./TerminalWindow";

const codeLines = [
  { indent: 0, text: "// orchids-case-study.ts", color: "text-muted/70" },
  { indent: 0, text: "", color: "" },
  { indent: 0, text: "const project = {", color: "text-purple" },
  { indent: 1, text: 'name: "Orchids The International School",', color: "text-orange" },
  { indent: 1, text: 'role: "Led frontend — 60% of all modules",', color: "text-orange" },
  { indent: 1, text: 'stack: ["Next.js", "React", "Tailwind CSS", "ISR", "SSR"],', color: "text-orange" },
  { indent: 0, text: "};", color: "text-purple" },
  { indent: 0, text: "", color: "" },
  { indent: 0, text: "const modulesOwned = [", color: "text-purple" },
  { indent: 1, text: '"Blogs", "Study Material", "Campuses",', color: "text-green" },
  { indent: 1, text: '"Learning Concepts", "Activities",', color: "text-green" },
  { indent: 1, text: '"Admission Campaigns", "CMS Platform"', color: "text-green" },
  { indent: 0, text: "];", color: "text-purple" },
];

const phases = [
  {
    cmd: "$ orchids --phase discovery",
    output: [
      "Inherited codebase with performance issues.",
      "Slow listing pages. Poor CLS scores.",
      "SEO gaps affecting organic traffic.",
    ],
  },
  {
    cmd: "$ orchids --phase architecture",
    output: [
      "Broke monolith components into modular pieces.",
      "Implemented ISR for content pages.",
      "Set up CMS pipeline for dynamic content.",
    ],
  },
  {
    cmd: "$ orchids --phase optimization",
    output: [
      "Explicit image dimensions → CLS fixed.",
      "Next/Image + ISR → LCP improved.",
      "Code splitting → Bundle size reduced 76%.",
    ],
  },
  {
    cmd: "$ orchids --phase seo",
    output: [
      "Added SSR meta tags + structured data (JSON-LD).",
      "Semantic HTML + proper heading hierarchy.",
      "Built admission campaign pages for conversions.",
    ],
  },
];

const results = [
  { metric: "LCP", from: "4.1s", to: "1.2s", bar: 29 },
  { metric: "CLS", from: "0.42", to: "0.05", bar: 12 },
  { metric: "Bundle", from: "1.6MB", to: "380KB", bar: 24 },
  { metric: "SEO", from: "58", to: "96", bar: 96 },
];

export default function CaseStudy() {
  return (
    <section id="case-study" className="py-24 px-4 md:px-6 bg-card/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 font-mono text-sm"
        >
          <span className="text-green">$</span>{" "}
          <span className="text-muted">cat orchids-case-study.ts</span>
        </motion.div>

        {/* Code block */}
        <TerminalWindow title="orchids-case-study.ts — ~/projects/orchids">
          <div className="font-mono text-xs space-y-0.5">
            {codeLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className={`${line.color} flex`}
              >
                <span className="text-muted/50 w-6 text-right mr-3 select-none">
                  {i + 1}
                </span>
                <span style={{ paddingLeft: `${line.indent * 16}px` }}>
                  {line.text}
                </span>
              </motion.div>
            ))}
          </div>
        </TerminalWindow>

        {/* Process phases as terminal commands */}
        <div className="mt-8 space-y-4">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.cmd}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="font-mono text-xs"
            >
              <div className="text-accent mb-1">{phase.cmd}</div>
              <div className="pl-4 space-y-0.5">
                {phase.output.map((line, j) => (
                  <div key={j} className="text-muted">
                    <span className="text-green mr-2">→</span>
                    {line}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <TerminalWindow title="orchids --metrics --before-after">
            <div className="font-mono text-xs space-y-3">
              <div className="text-green mb-2">$ orchids --results</div>
              {results.map((r, i) => (
                <motion.div
                  key={r.metric}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-muted w-14">{r.metric}</span>
                  <span className="text-red line-through w-12">{r.from}</span>
                  <span className="text-muted/30">→</span>
                  <span className="text-green font-bold w-12">{r.to}</span>
                  <div className="flex-1 h-1.5 bg-card rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${r.bar}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.15 }}
                      className="h-full bg-green/50 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  );
}
