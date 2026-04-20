"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionNumber from "./SectionNumber";

interface Project {
  name: string;
  tag: string;
  description: string;
  tech: string[];
  live: string | null;
  repo: string | null;
  current?: boolean;
  category: "professional" | "personal";
}

const featuredProjects: Project[] = [
  {
    name: "Orchids International",
    tag: "Website & CMS",
    description: "Leading frontend for 60% of website modules — Blogs, Study Material, Campuses, Activities, Admission Campaigns. Built CMS for dynamic content management.",
    tech: ["Next.js", "React", "Tailwind", "ISR"],
    live: "https://orchidsinternationalschool.com/",
    repo: null,
    current: true,
    category: "professional",
  },
  {
    name: "SchoolsUniverse",
    tag: "Listing Platform & CMS",
    description: "Building school listing & comparison platform — details, ratings, reviews, filtering. Built CMS for content management.",
    tech: ["Next.js", "Tailwind", "SSR"],
    live: "https://www.schoolsuniverse.com/",
    repo: null,
    current: true,
    category: "professional",
  },
];

const otherProjects: Project[] = [
  {
    name: "MyNOST",
    tag: "Scholarship Platform",
    description: "Solo-built in 2 days. Student registration, hall ticket generation, study materials. Thousands of monthly applicants.",
    tech: ["Next.js", "Tailwind", "AOS"],
    live: "https://mynost.com/",
    repo: null,
    category: "professional",
  },
  {
    name: "DIYWebMaker",
    tag: "Website Builder",
    description: "Drag-and-drop website builder for schools. Modular components, real-time preview.",
    tech: ["React", "Ant Design"],
    live: "https://diywebmaker.in/",
    repo: null,
    category: "professional",
  },
  {
    name: "NammaSuper30",
    tag: "Scholarship Platform",
    description: "Karnataka-specific scholarship platform with secure registration and dashboards.",
    tech: ["Next.js", "Tailwind"],
    live: "https://nammasuper30.com/",
    repo: null,
    category: "professional",
  },
  {
    name: "ERP Finance",
    tag: "Internal · Transportation",
    description: "Bus trip scheduling, route assignments, fee processing. Live bus tracking with map integration.",
    tech: ["React", "Ant Design", "LocoNav"],
    live: null,
    repo: null,
    category: "professional",
  },
  {
    name: "ERP Eduvate",
    tag: "Internal · Communication",
    description: "Announcement module across dashboards. Assessment module for report card templates.",
    tech: ["React", "Ant Design", "Redux"],
    live: null,
    repo: null,
    category: "professional",
  },
  {
    name: "TaskFlow",
    tag: "Personal · SaaS",
    description: "Production-feel task manager with Kanban, command palette (⌘K), calendar, and team workload.",
    tech: ["React 19", "TypeScript", "Vite", "Zustand"],
    live: "https://cheery-kheer-d25b65.netlify.app/",
    repo: "https://github.com/KrishnaVaishnav98/taskflow-krishna-vaishnav",
    category: "personal",
  },
  {
    name: "Mangalam HDPE Pipes",
    tag: "Personal · Landing Page",
    description: "Premium responsive landing page. Figma pixel-perfect. Sticky scroll header, mobile menu.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    live: "https://stupendous-sfogliatella-52782d.netlify.app/",
    repo: "https://github.com/KrishnaVaishnav98/GushWork",
    category: "personal",
  },
];

// ------------------ FEATURED CARD ------------------
function FeaturedCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-hover
      className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-accent/30 transition-all duration-500 hover:-translate-y-1"
    >
      {/* Live preview top */}
      <div className="relative w-full aspect-[16/9] bg-surface overflow-hidden">
        {project.live && (
          <>
            <div className="absolute inset-0 origin-top-left scale-[0.45] w-[222%] h-[222%] pointer-events-none">
              <iframe
                src={project.live}
                title={project.name}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
                className="w-full h-full border-0"
                style={{ background: "white" }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent pointer-events-none" />
          </>
        )}

        {/* Currently working badge */}
        {project.current && (
          <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-success/90 text-background backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-background opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-background" />
            </span>
            Currently Working
          </div>
        )}

        {/* Live indicator on hover */}
        <AnimatePresence>
          {hovered && project.live && (
            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 text-[10px] font-medium px-3 py-1.5 rounded-full bg-foreground text-background"
            >
              Visit Live ↗
            </motion.a>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <p className="text-[10px] text-accent font-medium tracking-widest uppercase mb-2">
          {project.tag}
        </p>
        <h3 className="text-lg md:text-xl font-bold tracking-tight mb-3">
          {project.name}
        </h3>
        <p className="text-xs text-muted leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] px-2 py-0.5 rounded-full bg-surface border border-border text-muted font-mono"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ------------------ LIST ROW ------------------
function ListRow({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-hover
      className="group relative grid grid-cols-[auto_1fr_auto] gap-4 items-center py-4 px-4 md:px-5 rounded-xl border border-transparent hover:border-border hover:bg-card/40 transition-all duration-300"
    >
      {/* Number */}
      <span className="text-[11px] font-mono text-muted-foreground tabular-nums">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Title + tag */}
      <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-3 min-w-0">
        <h4 className="text-sm md:text-base font-semibold text-foreground truncate">
          {project.name}
        </h4>
        <p className="text-[10px] md:text-xs text-muted-foreground truncate">
          {project.tag}
        </p>
      </div>

      {/* Tech + arrow */}
      <div className="flex items-center gap-3">
        <div className="hidden md:flex flex-wrap gap-1 max-w-[220px] justify-end">
          {project.tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="text-[9px] px-1.5 py-0.5 rounded-full bg-surface border border-border text-muted font-mono"
            >
              {t}
            </span>
          ))}
        </div>
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            data-hover
            className="text-accent text-base inline-flex items-center justify-center w-7 h-7 rounded-full hover:bg-accent/10 transition-all"
            style={{
              transform: hovered ? "translateX(2px)" : "translateX(0)",
            }}
          >
            ↗
          </a>
        ) : (
          <span className="text-muted-foreground text-[10px] italic w-7 text-center">internal</span>
        )}
      </div>

      {/* Hover description tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="col-span-3 text-xs text-muted leading-relaxed overflow-hidden pl-10 md:pl-12 pr-4"
          >
            {project.description}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ------------------ MAIN ------------------
export default function Projects() {
  return (
    <section className="relative min-h-screen flex flex-col px-4 md:px-12 lg:px-16 py-16 md:py-20 overflow-y-auto">
      <SectionNumber number="02" label="Work" />

      <div className="max-w-6xl w-full mx-auto flex-1 flex flex-col mt-10 md:mt-12">
        {/* Heading */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2">
            Things I&apos;ve
          </h2>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-muted tracking-tight">
            <span className="font-serif italic">built.</span>
          </h2>
        </div>

        {/* Featured Projects — large 2-column grid */}
        <div className="mb-10">
          <p className="text-[10px] text-success uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-success" />
            </span>
            Currently Building
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featuredProjects.map((p, i) => (
              <FeaturedCard key={p.name} project={p} index={i} />
            ))}
          </div>
        </div>

        {/* Other Projects — list view */}
        <div>
          <div className="flex items-baseline justify-between mb-3">
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
              All Projects
            </p>
            <p className="text-[10px] font-mono text-muted-foreground">
              {String(otherProjects.length).padStart(2, "0")} projects
            </p>
          </div>
          <div className="border-t border-border">
            {otherProjects.map((p, i) => (
              <ListRow key={p.name} project={p} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]" />
    </section>
  );
}
