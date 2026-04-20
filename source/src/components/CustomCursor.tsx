"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    // Don't show on touch devices
    if (window.matchMedia("(hover: none)").matches) {
      setHidden(true);
      return;
    }

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHoverStart = () => setHovered(true);
    const handleHoverEnd = () => setHovered(false);
    const handleLeave = () => setHidden(true);
    const handleEnter = () => setHidden(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    // Watch for interactive elements
    const observer = new MutationObserver(() => {
      document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
        el.addEventListener("mouseenter", handleHoverStart);
        el.addEventListener("mouseleave", handleHoverEnd);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Initial pass
    document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  if (hidden) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        style={{ x: springX, y: springY }}
        animate={{
          width: hovered ? 48 : 12,
          height: hovered ? 48 : 12,
          opacity: hovered ? 0.15 : 0.6,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="fixed top-0 left-0 rounded-full bg-accent pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2"
      />
      {/* Outer ring */}
      <motion.div
        style={{ x: springX, y: springY }}
        animate={{
          width: hovered ? 60 : 36,
          height: hovered ? 60 : 36,
          opacity: hovered ? 0.3 : 0.1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="fixed top-0 left-0 rounded-full border border-accent/30 pointer-events-none z-[99] -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
}
