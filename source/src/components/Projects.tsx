"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    name: "Orchids The International School",
    file: "orchids.tsx",
    tag: "Website & CMS",
    description:
      "Worked on 60% of website modules — Blogs, Study Material, Campuses, Learning Concepts, Activities. Created admission campaign pages. Built CMS for dynamic content.",
    impact: "Optimized Core Web Vitals (CLS, LCP), improved ISR & SEO.",
    tech: ["Next.js", "React.js", "Tailwind CSS"],
    status: "deployed",
  },
  {
    name: "MyNOST",
    file: "mynost.tsx",
    tag: "Scholarship Platform",
    description:
      "Solo-built scholarship registration platform in 2 days. Students register, verify details, download hall tickets and study materials.",
    impact: "Thousands of monthly applicants across India.",
    tech: ["Next.js", "Tailwind CSS", "AOS"],
    status: "deployed",
  },
  {
    name: "DIYWebMaker",
    file: "diywebmaker.tsx",
    tag: "Website Builder",
    description:
      "Dynamic website builder — schools create customizable websites by selecting modular components and templates. Real-time preview + one-click publishing.",
    impact: "Scalable component-based architecture.",
    tech: ["React.js", "Ant Design", "Tailwind CSS", "JavaScript"],
    status: "deployed",
  },
  {
    name: "ERP Finance",
    file: "erp-finance.tsx",
    tag: "Transportation Module",
    description:
      "Refactored bus trip scheduling, route assignments, and fee processing. Live bus tracking with map integration and real-time student pickup details.",
    impact: "Improved transparency for parents and admins.",
    tech: ["React.js", "Ant Design", "LocoNav"],
    status: "active",
  },
  {
    name: "ERP Eduvate",
    file: "erp-eduvate.tsx",
    tag: "Announcement & Assessment",
    description:
      "Announcement module for all dashboards. Assessment module for report card templates and previews across categories.",
    impact: "Streamlined communication across school hierarchies.",
    tech: ["React.js", "Ant Design", "Bootstrap", "Redux"],
    status: "deployed",
  },
  {
    name: "SchoolsUniverse",
    file: "schools-universe.tsx",
    tag: "Listing Platform",
    description:
      "School listing and comparison platform — details, ratings, reviews. Blog pages, filtering features, dynamic listings.",
    impact: "Improved school discoverability for parents.",
    tech: ["Next.js", "Tailwind CSS"],
    status: "deployed",
  },
  {
    name: "NammaSuper30",
    file: "nammasuper30.tsx",
    tag: "Scholarship Platform",
    description:
      "Karnataka-specific scholarship platform. Secure registration, dashboard, study materials access.",
    impact: "Modern responsive UI for scholarship experience.",
    tech: ["Next.js", "Tailwind CSS", "AOS"],
    status: "active",
  },
];

export default function Projects() {
  const [activeFile, setActiveFile] = useState(0);
  const active = projects[activeFile];

  return (
    <section id="projects" className="py-24 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 font-mono text-sm"
        >
          <span className="text-green">$</span>{" "}
          <span className="text-muted">ls ~/projects/k12-techno/</span>
        </motion.div>

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
              ~/projects/k12-techno
            </span>
          </div>

          <div className="flex flex-col md:flex-row min-h-[400px]">
            {/* Sidebar — File explorer */}
            <div className="md:w-56 border-b md:border-b-0 md:border-r border-card-border bg-window-bar/50 p-2 overflow-x-auto md:overflow-x-visible">
              <div className="text-[10px] text-muted/60 uppercase tracking-widest px-2 py-1 mb-1">
                Explorer
              </div>
              <div className="flex md:flex-col gap-0.5 min-w-max md:min-w-0">
                {projects.map((p, i) => (
                  <button
                    key={p.name}
                    onClick={() => setActiveFile(i)}
                    className={`flex items-center gap-2 px-2 py-1.5 rounded text-xs text-left w-full transition-colors ${
                      i === activeFile
                        ? "bg-accent/10 text-accent"
                        : "text-muted hover:bg-card hover:text-foreground"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        p.status === "active" ? "bg-green" : "bg-accent/40"
                      }`}
                    />
                    <span className="truncate font-mono">{p.file}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content — Code view */}
            <div className="flex-1 p-5 font-mono text-xs overflow-auto">
              <motion.div
                key={activeFile}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="space-y-1"
              >
                <div className="text-muted/60">
                  {"// "}{active.file}
                </div>
                <div className="text-muted/60">&nbsp;</div>

                <div>
                  <span className="text-purple">export</span>{" "}
                  <span className="text-purple">const</span>{" "}
                  <span className="text-cyan">{active.name.replace(/\s+/g, "")}</span>{" "}
                  <span className="text-muted">=</span>{" "}
                  <span className="text-yellow">{"{"}</span>
                </div>

                <div className="pl-4">
                  <span className="text-green">name</span>
                  <span className="text-muted">: </span>
                  <span className="text-orange">&quot;{active.name}&quot;</span>
                  <span className="text-muted">,</span>
                </div>

                <div className="pl-4">
                  <span className="text-green">type</span>
                  <span className="text-muted">: </span>
                  <span className="text-orange">&quot;{active.tag}&quot;</span>
                  <span className="text-muted">,</span>
                </div>

                <div className="pl-4">
                  <span className="text-green">status</span>
                  <span className="text-muted">: </span>
                  <span className={active.status === "active" ? "text-green" : "text-cyan"}>
                    &quot;{active.status}&quot;
                  </span>
                  <span className="text-muted">,</span>
                </div>

                <div className="text-muted/60 pl-4">&nbsp;</div>
                <div className="pl-4 text-muted/60">
                  {"// what I built"}
                </div>
                <div className="pl-4">
                  <span className="text-green">description</span>
                  <span className="text-muted">: </span>
                  <span className="text-orange">&quot;{active.description}&quot;</span>
                  <span className="text-muted">,</span>
                </div>

                <div className="text-muted/60 pl-4">&nbsp;</div>
                <div className="pl-4 text-muted/60">
                  {"// what changed"}
                </div>
                <div className="pl-4">
                  <span className="text-green">impact</span>
                  <span className="text-muted">: </span>
                  <span className="text-green italic">&quot;{active.impact}&quot;</span>
                  <span className="text-muted">,</span>
                </div>

                <div className="text-muted/60 pl-4">&nbsp;</div>
                <div className="pl-4">
                  <span className="text-green">tech</span>
                  <span className="text-muted">: [</span>
                  {active.tech.map((t, j) => (
                    <span key={t}>
                      <span className="text-cyan">&quot;{t}&quot;</span>
                      {j < active.tech.length - 1 && (
                        <span className="text-muted">, </span>
                      )}
                    </span>
                  ))}
                  <span className="text-muted">],</span>
                </div>

                <div>
                  <span className="text-yellow">{"}"}</span>
                  <span className="text-muted">;</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
