"use client";

import { motion } from "framer-motion";
import TerminalWindow from "./TerminalWindow";

const tests = [
  {
    name: "LCP (Largest Contentful Paint)",
    before: { value: "4.1s", bar: 82 },
    after: { value: "1.2s", bar: 24 },
    fix: "ISR + Next/Image + critical CSS inlining",
    passed: true,
  },
  {
    name: "CLS (Cumulative Layout Shift)",
    before: { value: "0.42", bar: 84 },
    after: { value: "0.05", bar: 10 },
    fix: "Explicit dimensions + font-display swap + skeletons",
    passed: true,
  },
  {
    name: "Bundle Size",
    before: { value: "1.6 MB", bar: 80 },
    after: { value: "380 KB", bar: 19 },
    fix: "Code splitting + tree shaking Ant Design + dynamic imports",
    passed: true,
  },
  {
    name: "SEO Score",
    before: { value: "58/100", bar: 58 },
    after: { value: "96/100", bar: 96 },
    fix: "SSR meta + structured data + semantic HTML + heading hierarchy",
    passed: true,
  },
];

export default function Performance() {
  return (
    <section id="performance" className="py-24 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 font-mono text-sm"
        >
          <span className="text-green">$</span>{" "}
          <span className="text-muted">npm run test:performance</span>
        </motion.div>

        <TerminalWindow title="test:performance — orchids-website">
          <div className="font-mono text-xs space-y-6">
            <div className="text-muted">
              Running performance benchmark suite...
            </div>

            {tests.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="space-y-2"
              >
                {/* Test name */}
                <div className="flex items-center gap-2">
                  <span className="text-green font-bold text-sm">
                    {t.passed ? "PASS" : "FAIL"}
                  </span>
                  <span className="text-foreground font-medium text-sm">{t.name}</span>
                </div>

                {/* Before bar */}
                <div className="flex items-center gap-2 pl-4">
                  <span className="text-red font-medium w-14">before:</span>
                  <span className="text-red font-bold w-16">{t.before.value}</span>
                  <div className="flex-1 h-2 bg-card rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${t.before.bar}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.15 }}
                      className="h-full bg-red/40 rounded-full"
                    />
                  </div>
                </div>

                {/* After bar */}
                <div className="flex items-center gap-2 pl-4">
                  <span className="text-green font-medium w-14">after:</span>
                  <span className="text-green font-bold w-16">{t.after.value}</span>
                  <div className="flex-1 h-2 bg-card rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${t.after.bar}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
                      className="h-full bg-green/40 rounded-full"
                    />
                  </div>
                </div>

                {/* Fix */}
                <div className="pl-4 text-muted">
                  <span className="text-accent">→</span> {t.fix}
                </div>
              </motion.div>
            ))}

            {/* Summary */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="pt-4 border-t border-card-border"
            >
              <div className="text-green">
                Test Suites: <span className="font-bold">4 passed</span>, 4 total
              </div>
              <div className="text-green">
                Tests: <span className="font-bold">4 passed</span>, 4 total
              </div>
              <div className="text-muted">
                Platform: Orchids The International School — production
              </div>
            </motion.div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
