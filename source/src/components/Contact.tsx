"use client";

import { motion } from "framer-motion";
import SectionNumber from "./SectionNumber";

const links = [
  { label: "GitHub", value: "KrishnaVaishnav98", href: "https://github.com/KrishnaVaishnav98" },
  { label: "LinkedIn", value: "Krishna Vaishnav", href: "https://www.linkedin.com/in/krishna-vaishnav-707ab1144/" },
  { label: "Phone", value: "+91 7041704194", href: "tel:+917041704194" },
];

export default function Contact() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <SectionNumber number="06" label="Contact" />

      <div className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-28 md:pt-32 pb-16">
        {/* Top label */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs text-accent font-medium tracking-widest uppercase mb-6"
        >
          Let&apos;s talk
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2"
        >
          Got a project
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-5xl lg:text-6xl font-light text-muted tracking-tight mb-12 md:mb-16"
        >
          in mind? <span className="font-serif italic">Drop me a line.</span>
        </motion.h2>

        {/* MASSIVE clickable email */}
        <motion.a
          href="mailto:krishnavaishnav125@gmail.com"
          data-hover
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="group inline-block w-fit text-[2rem] md:text-[4rem] lg:text-[6rem] font-bold tracking-tighter leading-none mb-12 md:mb-16 break-all md:break-normal"
        >
          <span className="relative inline-block">
            <span className="text-muted group-hover:text-foreground transition-colors duration-500">
              krishnavaishnav125
            </span>
            <span className="text-accent group-hover:text-accent-hover transition-colors duration-500">
              @gmail
            </span>
            <span className="text-muted group-hover:text-foreground transition-colors duration-500">
              .com
            </span>
            {/* Underline that draws on hover */}
            <span className="absolute left-0 -bottom-2 h-[3px] md:h-[4px] w-0 group-hover:w-full bg-accent transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
          </span>
          <span className="inline-block ml-4 text-base md:text-2xl text-accent transition-transform duration-500 group-hover:translate-x-2">
            ↗
          </span>
        </motion.a>

        {/* Bottom row — quick links + resume */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-end pt-8 border-t border-border">
          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-3 gap-4 md:gap-8"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.label === "Phone" ? undefined : "_blank"}
                rel="noopener noreferrer"
                data-hover
                className="group"
              >
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1.5">
                  {l.label}
                </p>
                <p className="text-xs md:text-sm text-foreground group-hover:text-accent transition-colors truncate">
                  {l.value} <span className="opacity-50 group-hover:opacity-100 inline-block transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
                </p>
              </a>
            ))}
          </motion.div>

          {/* Resume CTA */}
          <motion.a
            href="https://drive.google.com/file/d/1ILLDrSitZimLm417V5MaVDDgXHWgrVG5/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            data-hover
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            onClick={() => {
              const a = document.createElement("a");
              a.href = "https://drive.google.com/uc?export=download&id=1ILLDrSitZimLm417V5MaVDDgXHWgrVG5";
              a.download = "Krishna-Vaishnav-Resume.pdf";
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
            }}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:scale-105 transition-all duration-300 w-fit"
          >
            Download Resume
            <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
          </motion.a>
        </div>

        {/* Footer line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="mt-12 text-[10px] text-muted-foreground"
        >
          Based in Bengaluru, Karnataka · Available worldwide
        </motion.p>
      </div>

      {/* Decorative grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]" />
    </section>
  );
}
