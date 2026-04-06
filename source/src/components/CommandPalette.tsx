"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const commands = [
  { label: "Go to Home", section: "#home", icon: "~", shortcut: "H" },
  { label: "View Journey (v1 → v5)", section: "#journey", icon: "⟩", shortcut: "J" },
  { label: "Orchids Case Study", section: "#case-study", icon: "◆", shortcut: "C" },
  { label: "View Projects", section: "#projects", icon: "□", shortcut: "P" },
  { label: "Currently Building", section: "#currently", icon: "●", shortcut: "B" },
  { label: "Failures & Mistakes", section: "#failures", icon: "✕", shortcut: "F" },
  { label: "Performance Metrics", section: "#performance", icon: "▲", shortcut: "M" },
  { label: "How I Think", section: "#thinking", icon: "◇", shortcut: "T" },
  { label: "GitHub Activity", section: "#github", icon: "⊙", shortcut: "G" },
  { label: "Contact", section: "#contact", icon: "→", shortcut: "N" },
  {
    label: "Download Resume",
    section: "resume",
    icon: "↓",
    shortcut: "R",
    isResume: true,
  },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  const execute = useCallback(
    (cmd: (typeof commands)[0]) => {
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
        document.querySelector(cmd.section)?.scrollIntoView({ behavior: "smooth" });
      }
    },
    []
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
        setQuery("");
        setSelectedIndex(0);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => (i + 1) % filtered.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => (i - 1 + filtered.length) % filtered.length);
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      execute(filtered[selectedIndex]);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70]"
            onClick={() => setOpen(false)}
          />

          {/* Palette */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-[90%] max-w-lg bg-terminal-bg border border-card-border rounded-xl overflow-hidden shadow-2xl z-[80]"
          >
            {/* Input */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-card-border">
              <span className="text-accent text-sm">⟩</span>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a command or search..."
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted/70 outline-none font-mono"
              />
              <kbd className="px-1.5 py-0.5 rounded bg-card border border-card-border text-muted/70 text-[10px]">
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div className="max-h-[300px] overflow-y-auto py-2">
              {filtered.map((cmd, i) => (
                <button
                  key={cmd.label}
                  onClick={() => execute(cmd)}
                  onMouseEnter={() => setSelectedIndex(i)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                    i === selectedIndex
                      ? "bg-accent/10 text-accent"
                      : "text-muted hover:bg-card"
                  }`}
                >
                  <span className="w-5 text-center text-xs opacity-60">
                    {cmd.icon}
                  </span>
                  <span className="flex-1 text-sm font-mono">{cmd.label}</span>
                  <kbd className="px-1.5 py-0.5 rounded bg-card border border-card-border text-muted/60 text-[10px]">
                    {cmd.shortcut}
                  </kbd>
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="px-4 py-6 text-center text-sm text-muted/70">
                  No commands found
                </p>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
