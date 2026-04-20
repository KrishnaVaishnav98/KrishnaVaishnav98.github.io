"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface GradientOrbProps {
  color?: string;
  size?: string;
  top?: string;
  left?: string;
  delay?: number;
  speed?: number;
}

export default function GradientOrb({
  color = "rgba(99, 102, 241, 0.15)",
  size = "600px",
  top = "20%",
  left = "50%",
  delay = 0,
  speed = 0.3,
}: GradientOrbProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200 * speed]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay }}
      className="absolute pointer-events-none"
    >
      <div
        className="rounded-full blur-[120px]"
        style={{
          width: size,
          height: size,
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          position: "absolute",
          top,
          left,
          transform: "translate(-50%, -50%)",
        }}
      />
    </motion.div>
  );
}
