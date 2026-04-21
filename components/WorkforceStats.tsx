"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { numeric: 1500, format: (n: number) => `${Math.round(n).toLocaleString()}+`, label: "Professionals Trained" },
  { numeric: 85,   format: (n: number) => `${Math.round(n)}%`,                  label: "First-Attempt Pass Rate" },
  { numeric: 9,    format: (n: number) => `${Math.round(n)}`,                   label: "Certification Programs" },
  { numeric: 60,   format: (n: number) => `$${Math.round(n)}M+`,                label: "Career Value Generated" },
];

function StatItem({
  numeric, format, label, animate, delay,
}: (typeof stats)[0] & { animate: boolean; delay: number }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!animate) return;
    const duration = 1400;
    let raf: number;
    const startTime = performance.now() + delay;

    const step = (now: number) => {
      if (now < startTime) { raf = requestAnimationFrame(step); return; }
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(eased * numeric);
      if (progress < 1) raf = requestAnimationFrame(step);
      else setValue(numeric);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [animate, numeric, delay]);

  return (
    <div className="text-center">
      <div
        className="text-4xl font-bold tabular-nums"
        style={{ fontFamily: "var(--font-dm-serif)", color: "#021a62" }}
      >
        {format(value)}
      </div>
      <div className="text-sm text-gray-500 mt-1">{label}</div>
    </div>
  );
}

export default function WorkforceStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setAnimate(true); observer.disconnect(); }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((s, i) => (
        <StatItem key={s.label} {...s} animate={animate} delay={i * 110} />
      ))}
    </div>
  );
}
