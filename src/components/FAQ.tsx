"use client";

import { useState } from "react";

export default function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div
          key={i}
          className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
            open === i ? "bg-surface border-border shadow-md" : "bg-surface/50 border-border/60"
          }`}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
          >
            <h3 className="text-[14px] font-semibold pr-4">{item.q}</h3>
            <span
              className={`w-7 h-7 rounded-full border border-border flex items-center justify-center shrink-0 transition-all duration-300 ${
                open === i ? "bg-accent border-accent rotate-45" : ""
              }`}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className={open === i ? "text-dark" : "text-muted"}
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </button>
          <div
            className={`grid transition-all duration-300 ${
              open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="px-5 sm:px-6 pb-6 text-[13px] text-foreground/50 leading-relaxed">
                {item.a}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
