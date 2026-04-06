"use client";

import { motion } from "framer-motion";

const current = [
  {
    process: "erp-finance",
    pid: "2847",
    status: "RUNNING",
    description: "Transportation module — live bus tracking via LocoNav, route assignments, fee processing",
  },
  {
    process: "nammasuper30",
    pid: "3102",
    status: "RUNNING",
    description: "Karnataka scholarship platform — secure registration, student dashboards, study materials",
  },
];

export default function CurrentlyBuilding() {
  return (
    <section id="currently" className="py-16 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-6 font-mono text-sm"
        >
          <span className="text-green">$</span>{" "}
          <span className="text-muted">ps aux | grep &quot;currently-building&quot;</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-terminal-bg border border-card-border rounded-lg p-5 font-mono text-xs"
        >
          {/* Header */}
          <div className="text-muted/60 mb-3 flex gap-4">
            <span className="w-28">PROCESS</span>
            <span className="w-12">PID</span>
            <span className="w-16">STATUS</span>
            <span>DESCRIPTION</span>
          </div>

          {current.map((c, i) => (
            <motion.div
              key={c.process}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex gap-4 py-2 items-start"
            >
              <span className="text-cyan w-28">{c.process}</span>
              <span className="text-muted/70 w-12">{c.pid}</span>
              <span className="w-16 flex items-center gap-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green" />
                </span>
                <span className="text-green">{c.status}</span>
              </span>
              <span className="text-muted flex-1">{c.description}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
