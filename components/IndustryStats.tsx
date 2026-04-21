"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { numeric: 4.45, prefix: "$", suffix: "M", decimals: 2, label: "Average Cost of a Data Breach", source: "IBM Security 2023" },
  { numeric: 3.5,  prefix: "",  suffix: "M", decimals: 1, label: "Unfilled Cyber Positions Globally", source: "ISC2 Workforce Study" },
  { numeric: 83,   prefix: "",  suffix: "%", decimals: 0, label: "Organizations Breached More Than Once", source: "IBM Security" },
  { numeric: 266,  prefix: "$", suffix: "B", decimals: 0, label: "Global Cybersecurity Market by 2027", source: "MarketsandMarkets" },
];

function StatCircle({
  numeric, prefix, suffix, decimals, label, source, animate, delay,
}: (typeof stats)[0] & { animate: boolean; delay: number }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!animate) return;
    const duration = 1600;
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

  const display = `${prefix}${value.toFixed(decimals)}${suffix}`;

  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center mb-4">
        <div
          className="w-32 h-32 sm:w-36 sm:h-36 rounded-full flex items-center justify-center"
          style={{
            border: "2px solid rgba(2,193,157,0.3)",
            background: "radial-gradient(circle, rgba(2,193,157,0.07) 0%, transparent 68%)",
            boxShadow: animate ? "0 0 24px rgba(2,193,157,0.12)" : "none",
            transition: "box-shadow 0.6s ease",
          }}
        >
          <span
            className="text-2xl sm:text-3xl font-black leading-none tabular-nums"
            style={{ color: "#02c19d" }}
          >
            {display}
          </span>
        </div>
      </div>
      <div className="text-xs font-bold text-white uppercase tracking-wider leading-relaxed mb-1">
        {label}
      </div>
      <div className="text-[10px] text-gray-500">{source}</div>
    </div>
  );
}

export default function IndustryStats() {
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
        <StatCircle key={s.label} {...s} animate={animate} delay={i * 120} />
      ))}
    </div>
  );
}
