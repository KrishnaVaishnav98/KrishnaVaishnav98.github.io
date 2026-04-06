"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [time, setTime] = useState("");
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const percent = Math.round(
        (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100
      );
      setScrollPercent(Math.min(percent, 100));
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-window-bar/90 backdrop-blur-md border-b border-card-border">
      <div className="flex items-center justify-between px-4 h-8 text-[11px] font-mono">
        {/* Left — Apple-style menu */}
        <div className="flex items-center gap-4">
          <span className="text-accent font-bold">
            KV
          </span>
          <span className="text-foreground/80 hidden sm:block">
            Krishna Vaishnav
          </span>
          <span className="text-muted hidden md:block">|</span>
          <span className="text-muted hidden md:block">
            SDE1 @ K12 Techno Services
          </span>
        </div>

        {/* Center — Scroll progress */}
        <div className="flex items-center gap-2">
          <div className="w-24 h-1 bg-card rounded-full overflow-hidden hidden sm:block">
            <div
              className="h-full bg-accent/60 rounded-full transition-all duration-150"
              style={{ width: `${scrollPercent}%` }}
            />
          </div>
          <span className="text-muted w-8 text-right">{scrollPercent}%</span>
        </div>

        {/* Right — Time & cmd hint */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              window.dispatchEvent(
                new KeyboardEvent("keydown", { key: "k", metaKey: true })
              );
            }}
            className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-card border border-card-border text-muted hover:text-foreground hover:border-accent/30 transition-colors"
          >
            <span>⌘K</span>
          </button>
          <span className="text-muted">{time}</span>
        </div>
      </div>
    </nav>
  );
}
