"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v));

  useEffect(() => {
    if (!ref.current || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animate(count, target, { duration: 2, ease: "easeOut" });
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [count, target, hasAnimated]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = v.toLocaleString() + suffix;
      }
    });
    return unsubscribe;
  }, [rounded, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { number: 60, suffix: "%", label: "Orchids modules", detail: "Built 60% of the entire website" },
  { number: 7, suffix: "+", label: "Apps shipped", detail: "Production education platforms" },
  { number: 2, suffix: "", label: "Days for MyNOST", detail: "Solo-built, thousands of users" },
  { number: 96, suffix: "", label: "SEO score", detail: "Up from 58 — Orchids website" },
];

export default function Impact() {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 font-mono text-xs text-muted/70 text-center"
        >
          $ krishna --stats --production
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-terminal-bg border border-card-border rounded-lg p-4 text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-accent font-mono mb-1">
                <AnimatedCounter target={s.number} suffix={s.suffix} />
              </p>
              <p className="text-xs font-medium text-foreground mb-0.5 font-mono">
                {s.label}
              </p>
              <p className="text-[10px] text-muted/70">{s.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
