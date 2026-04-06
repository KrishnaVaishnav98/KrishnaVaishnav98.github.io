"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
  cursor?: boolean;
}

export default function Typewriter({
  text,
  speed = 30,
  delay = 0,
  className = "",
  onComplete,
  cursor = true,
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setDone(true);
      onComplete?.();
    }
  }, [displayed, started, text, speed, onComplete]);

  if (!started) return <span className={className}>&nbsp;</span>;

  return (
    <span className={className}>
      {displayed}
      {cursor && !done && (
        <span className="cursor-blink text-accent">▊</span>
      )}
    </span>
  );
}
