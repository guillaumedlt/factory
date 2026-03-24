"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const processes = [
  { label: "Collecte documentaire", before: { time: "5 jours/mois", bar: 88 }, after: { time: "2h/mois", bar: 7, saved: "−98%" } },
  { label: "Vérification conformité", before: { time: "3 jours/mois", bar: 62 }, after: { time: "Automatique", bar: 4, saved: "−95%" } },
  { label: "Production d'actes", before: { time: "3h / document", bar: 52 }, after: { time: "30 min", bar: 14, saved: "−80%" } },
  { label: "Campagnes marketing", before: { time: "2 semaines", bar: 72 }, after: { time: "2 jours", bar: 10, saved: "−85%" } },
  { label: "Création de site web", before: { time: "3–6 mois", bar: 95 }, after: { time: "2 semaines", bar: 8, saved: "−90%" } },
  { label: "Suivi des échéances", before: { time: "Manuel", bar: 38 }, after: { time: "0 oubli", bar: 2, saved: "−100%" } },
];

export default function Conviction() {
  const [isAfter, setIsAfter] = useState(false);
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasAutoPlayed) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsAfter(true);
            setHasAutoPlayed(true);
          }, 1000);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAutoPlayed]);

  return (
    <section ref={sectionRef} className="section-padding section-surface overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — text */}
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted font-semibold">Conviction</span>
            <h2 className="text-[1.75rem] sm:text-4xl font-bold mt-3 mb-7 tracking-tight leading-snug">
              L&apos;excellence opérationnelle passe désormais par l&apos;intelligence artificielle.
            </h2>
            <p className="text-foreground/60 text-[15px] leading-relaxed mb-5">
              Classements manuels, conformité ligne par ligne, campagnes qui traînent, sites web qui prennent des mois. Vos équipes perdent du temps sur des tâches que l&apos;IA peut absorber en quelques secondes.
            </p>
            <Link href="/resultats" className="group text-[13px] font-medium text-accent hover:underline inline-flex items-center gap-1 mb-4">
              Voir nos résultats concrets
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <p className="text-foreground/80 text-[15px] leading-relaxed font-medium">
              L&apos;IA ne remplace pas votre expertise. Elle en décuple la portée.
            </p>
          </div>

          {/* Right — animated before/after card */}
          <div>
            <div className={`rounded-2xl p-6 sm:p-7 border transition-all duration-500 ${
              isAfter
                ? "bg-dark text-white border-white/[0.06] shadow-xl shadow-black/15"
                : "bg-surface text-foreground border-border"
            }`}>
              {/* Toggle */}
              <div className="flex items-center justify-between mb-7">
                <div className="flex items-center gap-2.5">
                  <div className={`w-2 h-2 rounded-full transition-colors duration-500 ${isAfter ? "bg-accent" : "bg-foreground/20"}`} />
                  <span className={`text-[10px] uppercase tracking-wider font-semibold transition-colors duration-500 ${isAfter ? "text-white/40" : "text-muted"}`}>
                    {isAfter ? "Avec Factory" : "Processus actuel"}
                  </span>
                </div>

                <button
                  onClick={() => setIsAfter(!isAfter)}
                  className={`relative w-[120px] h-8 rounded-full p-0.5 transition-colors duration-500 ${
                    isAfter ? "bg-accent" : "bg-surface-dark"
                  }`}
                >
                  <div className={`absolute top-0.5 w-[58px] h-7 rounded-full shadow-md transition-all duration-500 ease-out ${
                    isAfter ? "left-[60px] bg-dark" : "left-0.5 bg-surface"
                  }`} />
                  <div className="relative flex items-center h-full">
                    <span className={`flex-1 text-center text-[10px] font-semibold uppercase tracking-wider transition-colors duration-500 ${
                      !isAfter ? "text-foreground" : "text-dark/60"
                    }`}>Avant</span>
                    <span className={`flex-1 text-center text-[10px] font-semibold uppercase tracking-wider transition-colors duration-500 ${
                      isAfter ? "text-white" : "text-muted/60"
                    }`}>Après</span>
                  </div>
                </button>
              </div>

              {/* Bars */}
              <div className="space-y-3.5">
                {processes.map((p) => {
                  const data = isAfter ? p.after : p.before;
                  return (
                    <div key={p.label}>
                      <div className="flex justify-between mb-1.5">
                        <span className={`text-[11px] transition-colors duration-500 ${isAfter ? "text-white/50" : "text-foreground/50"}`}>
                          {p.label}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-medium transition-colors duration-500 ${isAfter ? "text-accent" : "text-foreground/30"}`}>
                            {data.time}
                          </span>
                          {isAfter && "saved" in data && (
                            <span className="text-[9px] text-accent/60 bg-accent/10 px-1.5 py-0.5 rounded font-medium">
                              {(data as { saved?: string }).saved}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className={`h-2 rounded-full overflow-hidden transition-colors duration-500 ${
                        isAfter ? "bg-white/[0.06]" : "bg-surface-dark"
                      }`}>
                        <div
                          className={`h-full rounded-full transition-all duration-700 ease-out ${
                            isAfter ? "bg-accent" : "bg-foreground/15"
                          }`}
                          style={{ width: `${data.bar}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom summary */}
              <div className={`mt-6 pt-5 border-t flex items-center justify-between transition-colors duration-500 ${
                isAfter ? "border-white/[0.06]" : "border-border"
              }`}>
                <span className={`text-[11px] transition-colors duration-500 ${isAfter ? "text-white/30" : "text-muted"}`}>
                  Temps total mobilisé
                </span>
                <span className={`text-lg font-bold transition-colors duration-500 ${isAfter ? "text-accent" : "text-foreground"}`}>
                  {isAfter ? "~3h/mois" : "~10 jours/mois"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
