"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import TerminalWindow from "./TerminalWindow";

const contactCommands = [
  {
    cmd: "email",
    output: "krishnavaishnav125@gmail.com",
    href: "mailto:krishnavaishnav125@gmail.com",
    color: "text-orange",
  },
  {
    cmd: "phone",
    output: "+91 7041704194",
    href: "tel:+917041704194",
    color: "text-green",
  },
  {
    cmd: "github",
    output: "github.com/KrishnaVaishnav98",
    href: "https://github.com/KrishnaVaishnav98",
    color: "text-cyan",
  },
  {
    cmd: "linkedin",
    output: "linkedin.com/in/krishna-vaishnav-707ab1144",
    href: "https://www.linkedin.com/in/krishna-vaishnav-707ab1144/",
    color: "text-accent",
  },
  {
    cmd: "location",
    output: "Bengaluru, Karnataka, India",
    href: "",
    color: "text-yellow",
  },
  {
    cmd: "resume",
    output: "→ Download Resume (opens in new tab + auto-downloads)",
    href: "https://drive.google.com/file/d/1ILLDrSitZimLm417V5MaVDDgXHWgrVG5/view?usp=sharing",
    downloadHref: "https://drive.google.com/uc?export=download&id=1ILLDrSitZimLm417V5MaVDDgXHWgrVG5",
    color: "text-purple",
  },
];

export default function Contact() {
  const [typedCmd, setTypedCmd] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && typedCmd.trim()) {
      const cmd = typedCmd.trim().toLowerCase();
      setHistory((h) => [...h, cmd]);
      setTypedCmd("");

      const match = contactCommands.find((c) => c.cmd === cmd);
      if (match?.href) {
        setTimeout(() => {
          window.open(match.href, match.cmd === "email" || match.cmd === "phone" ? "_self" : "_blank");
          if ("downloadHref" in match && match.downloadHref) {
            const a = document.createElement("a");
            a.href = match.downloadHref as string;
            a.download = "Krishna-Vaishnav-Resume.pdf";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          }
        }, 300);
      }
    }
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 font-mono text-sm"
        >
          <span className="text-green">$</span>{" "}
          <span className="text-muted">krishna --contact</span>
        </motion.div>

        <TerminalWindow title="contact@krishna ~ %">
          <div className="font-mono text-xs space-y-3">
            <div className="text-muted/70 mb-4">
              // Type a command to connect. Available: email, phone, github, linkedin, location, resume
            </div>

            {contactCommands.map((c, i) => (
              <motion.div
                key={c.cmd}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex items-start gap-2">
                  <span className="text-green">$</span>
                  <span className="text-muted">krishna --{c.cmd}</span>
                </div>
                <div className="pl-5">
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.cmd === "email" || c.cmd === "phone" ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      className={`${c.color} hover:underline`}
                      onClick={"downloadHref" in c && c.downloadHref ? (e) => {
                        e.preventDefault();
                        window.open(c.href, "_blank");
                        const a = document.createElement("a");
                        a.href = c.downloadHref as string;
                        a.download = "Krishna-Vaishnav-Resume.pdf";
                        document.body.appendChild(a);
                        a.click();
                        document.body.removeChild(a);
                      } : undefined}
                    >
                      {c.output}
                    </a>
                  ) : (
                    <span className={c.color}>{c.output}</span>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Interactive input */}
            <div className="pt-4 border-t border-card-border mt-4">
              <div className="text-muted/60 mb-2">
                // try it yourself — type: email, github, linkedin, resume
              </div>
              {history.map((cmd, i) => {
                const match = contactCommands.find((c) => c.cmd === cmd);
                return (
                  <div key={i} className="mb-1">
                    <div className="flex gap-2">
                      <span className="text-green">$</span>
                      <span className="text-muted">krishna --{cmd}</span>
                    </div>
                    <div className="pl-5">
                      {match ? (
                        <span className={match.color}>
                          {match.output}
                          {match.href && " ✓ opening..."}
                        </span>
                      ) : (
                        <span className="text-red">
                          error: unknown command &quot;{cmd}&quot;. try: email, phone, github, linkedin, location, resume
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
              <div className="flex items-center gap-2">
                <span className="text-green">$</span>
                <span className="text-muted">krishna --</span>
                <input
                  type="text"
                  value={typedCmd}
                  onChange={(e) => setTypedCmd(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="type a command..."
                  className="flex-1 bg-transparent text-foreground outline-none placeholder:text-muted/50 font-mono text-xs"
                />
                <span className="cursor-blink text-accent">▊</span>
              </div>
            </div>
          </div>
        </TerminalWindow>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-6 border-t border-card-border text-center font-mono text-[10px] text-muted/50 space-y-1"
        >
          <p>
            built by krishna vaishnav — with next.js, tailwind, framer-motion, and honest reflection
          </p>
          <p>
            this portfolio is also a project. v5 of many more to come.
          </p>
          <p className="pt-2 text-muted/10">
            © {new Date().getFullYear()} • process exited with code 0
          </p>
        </motion.div>
      </div>
    </section>
  );
}
