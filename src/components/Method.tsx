"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const phases = [
  { n: "01", title: "Immersion", dur: "1–2 semaines", text: "Entretiens individuels, observation des processus en conditions réelles, cartographie des flux documentaires et points de friction." },
  { n: "02", title: "Diagnostic", dur: "1 semaine", text: "Analyse structurée sur cinq critères : volume, fréquence, complexité, potentiel d'automatisation, contraintes réglementaires." },
  { n: "03", title: "Déploiement", dur: "4–8 semaines", text: "Leviers à fort impact d'abord. Cycle court : prototype, test réel, ajustement, production. Résultats dès le premier mois." },
  { n: "04", title: "Transmission", dur: "2 semaines", text: "Formation des équipes, documentation complète, indicateurs de suivi. Objectif : votre autonomie totale." },
];

export default function Method() {
  const [active, setActive] = useState(-1);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && active === -1) {
          let i = 0;
          const interval = setInterval(() => {
            setActive(i);
            i++;
            if (i >= phases.length) clearInterval(interval);
          }, 400);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [active]);

  return (
    <section ref={ref} id="methode" className="bg-dark text-white rounded-[2rem] mx-4 py-14 sm:py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/[0.04] rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="max-w-xl mb-10">
          <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Méthode</span>
          <h2 className="text-[1.75rem] sm:text-3xl font-bold mt-3 mb-3 tracking-tight leading-snug">
            Un protocole éprouvé, quatre phases.
          </h2>
          <p className="text-white/40 text-[14px] leading-relaxed">
            Rigueur d&apos;exécution, résultats mesurables, calendrier maîtrisé.
          </p>
        </div>

        {/* Horizontal timeline */}
        <div className="grid sm:grid-cols-4 gap-3">
          {phases.map((p, i) => (
            <div
              key={p.n}
              className={`group p-6 rounded-2xl border transition-all duration-500 ${
                active >= i
                  ? "bg-white/[0.05] border-accent/20"
                  : "bg-transparent border-white/[0.04]"
              }`}
            >
              {/* Number + progress line */}
              <div className="flex items-center gap-3 mb-4">
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold shrink-0 transition-all duration-500 ${
                  active >= i ? "bg-accent text-dark" : "bg-white/[0.06] text-white/20"
                }`}>{p.n}</span>
                <div className="h-px flex-1 bg-white/[0.06] overflow-hidden">
                  <div className={`h-full bg-accent/40 transition-all duration-700 ${active >= i ? "w-full" : "w-0"}`} />
                </div>
              </div>

              <h3 className={`text-[14px] font-semibold mb-1 transition-colors duration-500 ${
                active >= i ? "text-white" : "text-white/30"
              }`}>{p.title}</h3>

              <span className={`text-[10px] uppercase tracking-wider block mb-3 transition-colors duration-500 ${
                active >= i ? "text-accent/60" : "text-white/15"
              }`}>{p.dur}</span>

              <p className={`text-[12px] leading-relaxed transition-colors duration-500 ${
                active >= i ? "text-white/45" : "text-white/15"
              }`}>{p.text}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/methode" className="group text-[13px] font-medium text-white/40 hover:text-white transition-colors inline-flex items-center gap-1.5">
            Découvrir notre méthode en détail
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
