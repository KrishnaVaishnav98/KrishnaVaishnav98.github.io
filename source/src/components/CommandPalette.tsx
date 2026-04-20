"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const commands = [
  { label: "Home", section: "#home", icon: "⌂" },
  { label: "Projects", section: "#projects", icon: "□" },
  { label: "Skills", section: "#skills", icon: "◇" },
  { label: "Experience", section: "#journey", icon: "→" },
  { label: "GitHub", section: "#github", icon: "⊙" },
  { label: "Contact", section: "#contact", icon: "✉" },
  { label: "Download Resume", section: "resume", icon: "↓", isResume: true },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  const execute = useCallback((cmd: (typeof commands)[0]) => {
    setOpen(false);
    setQuery("");
    if ("isResume" in cmd && cmd.isResume) {
      window.open("https://drive.google.com/file/d/1ILLDrSitZimLm417V5MaVDDgXHWgrVG5/view?usp=sharing", "_blank");
      const a = document.createElement("a");
      a.href = "https://drive.google.com/uc?export=download&id=1ILLDrSitZimLm417V5MaVDDgXHWgrVG5";
      a.download = "Krishna-Vaishnav-Resume.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      const id = cmd.section.replace("#", "");
      window.dispatchEvent(new CustomEvent("slide-to", { detail: id }));
    }
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
        setQuery("");
        setSelectedIndex(0);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  useEffect(() => { setSelectedIndex(0); }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setSelectedIndex((i) => (i + 1) % filtered.length); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setSelectedIndex((i) => (i - 1 + filtered.length) % filtered.length); }
    else if (e.key === "Enter" && filtered[selectedIndex]) execute(filtered[selectedIndex]);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70]"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-[90%] max-w-lg glass rounded-2xl overflow-hidden shadow-2xl z-[80]"
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5">
              <span className="text-accent text-sm">⌘</span>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search or jump to..."
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
              />
              <kbd className="px-1.5 py-0.5 rounded bg-surface border border-border text-muted-foreground text-[10px]">ESC</kbd>
            </div>
            <div className="max-h-[300px] overflow-y-auto py-2">
              {filtered.map((cmd, i) => (
                <button
                  key={cmd.label}
                  onClick={() => execute(cmd)}
                  onMouseEnter={() => setSelectedIndex(i)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                    i === selectedIndex ? "bg-accent/10 text-accent" : "text-muted hover:bg-card-hover"
                  }`}
                >
                  <span className="w-5 text-center text-xs opacity-60">{cmd.icon}</span>
                  <span className="flex-1 text-sm">{cmd.label}</span>
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="px-4 py-6 text-center text-sm text-muted-foreground">No results</p>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
