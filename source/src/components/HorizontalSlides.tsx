"use client";

import { useState, useEffect, useRef, useCallback, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  id: string;
  label: string;
  content: ReactNode;
}

interface VerticalSlidesProps {
  slides: Slide[];
}

export default function VerticalSlides({ slides }: VerticalSlidesProps) {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const wheelLockRef = useRef(false);
  const touchStartY = useRef<number | null>(null);

  const goTo = useCallback((index: number) => {
    if (index < 0 || index >= slides.length) return;
    setActive(index);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${slides[index].id}`);
    }
  }, [slides]);

  const next = useCallback(() => {
    setActive((i) => Math.min(i + 1, slides.length - 1));
  }, [slides.length]);

  const prev = useCallback(() => {
    setActive((i) => Math.max(i - 1, 0));
  }, []);

  // Update URL on active change + reset scroll on previous slide
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${slides[active].id}`);
    }
    if (containerRef.current) {
      containerRef.current.querySelectorAll<HTMLElement>("[data-slide]").forEach((el) => {
        if (el.id !== slides[active].id) el.scrollTop = 0;
      });
    }
  }, [active, slides]);

  // Read initial hash
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.slice(1);
    const index = slides.findIndex((s) => s.id === hash);
    if (index >= 0) setActive(index);
  }, [slides]);

  // Wheel hijack — vertical wheel changes slides when at edge
  useEffect(() => {
    let edgeAccumulator = 0;
    let edgeResetTimeout: ReturnType<typeof setTimeout> | null = null;
    const EDGE_THRESHOLD = 120;

    const handler = (e: WheelEvent) => {
      if (wheelLockRef.current) {
        e.preventDefault();
        return;
      }

      const delta = e.deltaY;
      if (Math.abs(delta) < 4) return;

      const slidesContainer = containerRef.current;
      if (!slidesContainer) return;
      const activeSlideEl = slidesContainer.querySelector<HTMLElement>(`#${slides[active].id}`);
      if (!activeSlideEl) return;

      const atBottom = activeSlideEl.scrollTop + activeSlideEl.clientHeight >= activeSlideEl.scrollHeight - 2;
      const atTop = activeSlideEl.scrollTop <= 2;
      const canScrollDown = !atBottom;
      const canScrollUp = !atTop;

      if (delta > 0 && canScrollDown) {
        edgeAccumulator = 0;
        return;
      }
      if (delta < 0 && canScrollUp) {
        edgeAccumulator = 0;
        return;
      }

      e.preventDefault();

      if (edgeResetTimeout) clearTimeout(edgeResetTimeout);
      edgeResetTimeout = setTimeout(() => {
        edgeAccumulator = 0;
      }, 200);

      edgeAccumulator += Math.abs(delta);

      if (edgeAccumulator < EDGE_THRESHOLD) return;

      edgeAccumulator = 0;
      wheelLockRef.current = true;
      if (delta > 0) next();
      else prev();

      setTimeout(() => {
        wheelLockRef.current = false;
      }, 950);
    };

    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("wheel", handler, { passive: false });
    return () => el.removeEventListener("wheel", handler);
  }, [next, prev, slides, active]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") return;
      if ((e.metaKey || e.ctrlKey) && e.key === "k") return;

      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") {
        e.preventDefault();
        goTo(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goTo(slides.length - 1);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev, goTo, slides.length]);

  // Touch swipe (vertical)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };
    const onEnd = (e: TouchEvent) => {
      if (touchStartY.current === null) return;
      const endY = e.changedTouches[0].clientY;
      const diff = touchStartY.current - endY;
      if (Math.abs(diff) > 50) {
        if (diff > 0) next();
        else prev();
      }
      touchStartY.current = null;
    };

    el.addEventListener("touchstart", onStart, { passive: true });
    el.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchend", onEnd);
    };
  }, [next, prev]);

  // Listen for hash changes
  useEffect(() => {
    const handler = () => {
      const hash = window.location.hash.slice(1);
      const index = slides.findIndex((s) => s.id === hash);
      if (index >= 0) setActive(index);
    };
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, [slides]);

  // Listen for custom slide-to events (from navbar)
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as string;
      const index = slides.findIndex((s) => s.id === detail);
      if (index >= 0) setActive(index);
    };
    window.addEventListener("slide-to", handler);
    return () => window.removeEventListener("slide-to", handler);
  }, [slides]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-screen h-screen overflow-hidden"
      style={{ touchAction: "pan-x" }}
    >
      {/* Slides — stacked vertically */}
      <motion.div
        className="flex flex-col w-full will-change-transform"
        animate={{ y: `-${active * 100}vh` }}
        transition={{
          type: "spring",
          stiffness: 90,
          damping: 22,
          mass: 0.9,
          restDelta: 0.001,
        }}
        style={{ height: `${slides.length * 100}vh` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            id={slide.id}
            data-slide
            className="w-screen h-screen overflow-y-auto overflow-x-hidden flex-shrink-0"
            style={{ scrollbarWidth: "none" }}
          >
            {slide.content}
          </div>
        ))}
      </motion.div>

      {/* Vertical slide indicator on the RIGHT with bouncing ball */}
      <div className="fixed top-1/2 right-6 -translate-y-1/2 z-40 px-2.5 py-4 rounded-full glass">
        <div className="relative flex flex-col items-center gap-3">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              data-hover
              aria-label={`Go to ${s.label}`}
              className="group relative flex items-center justify-center w-6 h-6"
            >
              {/* Track dot */}
              <span
                className={`block rounded-full transition-all duration-500 ${
                  active === i ? "w-1.5 h-6 opacity-30 bg-accent" : "w-1.5 h-1.5 bg-muted/30 hover:bg-muted"
                }`}
              />

              {/* Bouncing ball — only on active */}
              {active === i && (
                <motion.span
                  layoutId="bouncing-ball"
                  initial={false}
                  animate={{
                    x: [0, -18, 0, -8, 0, -3, 0],
                    scaleX: [1, 1, 0.7, 1, 0.85, 1, 1],
                    scaleY: [1, 1, 1.2, 1, 1.1, 1, 1],
                  }}
                  transition={{
                    layout: { type: "spring", stiffness: 400, damping: 28, mass: 0.8 },
                    x: { duration: 0.85, times: [0, 0.2, 0.5, 0.7, 0.85, 0.95, 1], ease: "easeOut" },
                    scaleX: { duration: 0.85, times: [0, 0.2, 0.5, 0.7, 0.85, 0.95, 1], ease: "easeOut" },
                    scaleY: { duration: 0.85, times: [0, 0.2, 0.5, 0.7, 0.85, 0.95, 1], ease: "easeOut" },
                  }}
                  className="absolute w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_rgba(10,132,255,0.6)]"
                  style={{ originX: 1 }}
                />
              )}

              {/* Tooltip on hover */}
              <span className="absolute right-full mr-3 px-2 py-1 rounded text-[10px] bg-card border border-border text-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {s.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Up / Down arrows */}
      <AnimatePresence>
        {active > 0 && (
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onClick={prev}
            data-hover
            aria-label="Previous slide"
            className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-10 h-10 rounded-full glass flex items-center justify-center text-muted hover:text-foreground transition-colors"
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active < slides.length - 1 && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={next}
            data-hover
            aria-label="Next slide"
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-10 h-10 rounded-full glass flex items-center justify-center text-muted hover:text-foreground transition-colors"
          >
            ↓
          </motion.button>
        )}
      </AnimatePresence>

      {/* Slide counter */}
      <div className="fixed top-4 right-4 z-40 px-3 py-1.5 rounded-full glass text-[10px] font-mono text-muted">
        {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>

      {/* Hint — first time only */}
      <AnimatePresence>
        {active === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0.5, 0] }}
            transition={{ duration: 6, times: [0, 0.15, 0.85, 1] }}
            className="fixed bottom-20 left-1/2 -translate-x-1/2 z-40 text-[10px] text-muted-foreground uppercase tracking-widest pointer-events-none"
          >
            scroll · swipe · ↑ ↓
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
