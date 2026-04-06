"use client";

import { motion } from "framer-motion";

const elements = [
  { char: "</>", x: "10%", y: "20%", duration: 6, delay: 0, size: "text-2xl" },
  { char: "{}", x: "85%", y: "15%", duration: 7, delay: 1, size: "text-xl" },
  { char: "=>", x: "75%", y: "70%", duration: 5, delay: 0.5, size: "text-lg" },
  { char: "[]", x: "15%", y: "75%", duration: 8, delay: 2, size: "text-xl" },
  { char: "//", x: "90%", y: "45%", duration: 6, delay: 1.5, size: "text-lg" },
  { char: "&&", x: "5%", y: "50%", duration: 7, delay: 0.8, size: "text-sm" },
  { char: "**", x: "50%", y: "10%", duration: 5, delay: 2.5, size: "text-sm" },
  { char: "$()", x: "60%", y: "85%", duration: 6, delay: 1.2, size: "text-sm" },
];

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          className={`absolute font-mono ${el.size} text-accent/[0.04] select-none`}
          style={{ left: el.x, top: el.y }}
          animate={{
            y: [0, -20, 0, 15, 0],
            x: [0, 10, 0, -10, 0],
            rotate: [0, 5, 0, -5, 0],
            opacity: [0.03, 0.07, 0.03],
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {el.char}
        </motion.div>
      ))}
    </div>
  );
}
