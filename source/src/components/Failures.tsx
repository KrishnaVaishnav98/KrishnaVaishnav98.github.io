"use client";

import { motion } from "framer-motion";
import TerminalWindow from "./TerminalWindow";

const commits = [
  {
    hash: "e4f2a1b",
    date: "6 months ago",
    title: "fix: break apart the monolith listing page",
    body: "The Orchids listing page was a single Next.js component — filters, cards, pagination, API calls, all in one file. It worked. Until I had to add city and locality filters. CLS scores dropped. LCP was embarrassing.",
    lesson: "Structure > Speed. Breaking components early saves weeks later.",
    files: ["pages/listings.tsx → components/ListingCard.tsx, FilterBar.tsx, Pagination.tsx"],
    insertions: 412,
    deletions: 891,
  },
  {
    hash: "a8c3d2f",
    date: "8 months ago",
    title: "refactor: rewrite MyNOST for reusability after 2-day hack",
    body: "Solo-built MyNOST in 2 days. Shipped. But hardcoded values, no abstractions, no tests. When NammaSuper30 came along, I had to rewrite instead of reuse.",
    lesson: "Speed without structure creates debt that compounds.",
    files: ["scholarship/ — extracted shared registration components"],
    insertions: 680,
    deletions: 520,
  },
  {
    hash: "f1b9e7c",
    date: "10 months ago",
    title: "fix: add SSR meta tags and structured data for SEO",
    body: "Built beautiful pages for Orchids that scored 58 on SEO. Missing meta tags, no structured data, images without dimensions causing CLS issues. Marketing team noticed before I did.",
    lesson: "SEO is engineering, not marketing. Treat it as a requirement.",
    files: ["components/SEOHead.tsx, utils/structuredData.ts"],
    insertions: 245,
    deletions: 12,
  },
  {
    hash: "d4a7c8e",
    date: "1 year ago",
    title: "refactor: remove unnecessary Redux from local-state module",
    body: "Used Redux for a module that only had local UI state. Every button click went through actions, reducers, dispatchers. 3x complexity for zero benefit.",
    lesson: "Right tool for the problem's size. useState > Context > Redux.",
    files: ["modules/settings/ — replaced Redux with useState + useContext"],
    insertions: 48,
    deletions: 312,
  },
];

export default function Failures() {
  return (
    <section id="failures" className="py-24 px-4 md:px-6 bg-card/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 font-mono text-sm"
        >
          <span className="text-green">$</span>{" "}
          <span className="text-muted">
            git log --grep=&quot;fix\|refactor&quot; --format=medium mistakes.log
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-6 font-mono text-xs text-muted/70"
        >
          // Every developer has a graveyard of bad decisions.
          <br />
          // Here are mine — because pretending otherwise helps no one.
        </motion.div>

        <div className="space-y-6">
          {commits.map((c, i) => (
            <motion.div
              key={c.hash}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <TerminalWindow title={`commit ${c.hash}`}>
                <div className="font-mono text-xs space-y-2">
                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-yellow font-bold">{c.hash}</span>
                    <span className="text-muted/60">—</span>
                    <span className="text-muted/70">{c.date}</span>
                  </div>

                  {/* Title */}
                  <div className="text-red text-sm font-medium">
                    {c.title}
                  </div>

                  {/* Body */}
                  <div className="text-muted leading-relaxed pl-2 border-l border-card-border">
                    {c.body}
                  </div>

                  {/* Files */}
                  <div className="text-muted/70">
                    {c.files.map((f, j) => (
                      <div key={j}>
                        <span className="text-muted/60">M</span> {f}
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-3 pt-1">
                    <span className="text-green">
                      +{c.insertions}
                    </span>
                    <span className="text-red">
                      -{c.deletions}
                    </span>
                    <span className="text-muted/20">|</span>
                    <span className="text-accent text-[11px]">
                      lesson: {c.lesson}
                    </span>
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
