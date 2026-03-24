"use client";

import { useEffect, useRef, useState } from "react";

export default function StepTimeline({
  steps,
}: {
  steps: { title: string; text: string }[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [activeCount, setActiveCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let i = 0;
          const interval = setInterval(() => {
            i++;
            setActiveCount(i);
            if (i >= steps.length) clearInterval(interval);
          }, 350);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [steps.length]);

  return (
    <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {steps.map((step, i) => (
        <div
          key={i}
          className={`p-6 rounded-2xl border transition-all duration-500 ${
            i < activeCount
              ? "bg-surface border-accent/20 shadow-md shadow-accent/5"
              : "bg-surface/50 border-border"
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <span
              className={`w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold shrink-0 transition-all duration-500 ${
                i < activeCount ? "bg-accent text-dark" : "bg-surface-dark text-muted"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="h-px flex-1 bg-border overflow-hidden">
              <div
                className={`h-full bg-accent/40 transition-all duration-700 ${
                  i < activeCount ? "w-full" : "w-0"
                }`}
              />
            </div>
          </div>
          <h3
            className={`text-[13px] font-semibold mb-2 transition-colors duration-500 ${
              i < activeCount ? "text-foreground" : "text-foreground/30"
            }`}
          >
            {step.title}
          </h3>
          <p
            className={`text-[12px] leading-relaxed transition-colors duration-500 ${
              i < activeCount ? "text-foreground/50" : "text-foreground/20"
            }`}
          >
            {step.text}
          </p>
        </div>
      ))}
    </div>
  );
}
