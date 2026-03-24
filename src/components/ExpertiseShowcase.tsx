"use client";

import { useState } from "react";
import Link from "next/link";

const expertises = [
  {
    slug: "audit-strategie-ia",
    num: "01",
    title: "Audit & stratégie IA",
    headline: "Savoir où frapper avant d'agir.",
    desc: "Cartographie complète de vos opportunités d'automatisation, hiérarchisée par ROI et complexité.",
    deliverables: ["Rapport d'audit", "Matrice d'opportunités", "Feuille de route"],
    metrics: [
      { label: "Processus analysés", value: "100%" },
      { label: "Durée diagnostic", value: "2 sem." },
      { label: "Leviers identifiés", value: "8-15" },
    ],
  },
  {
    slug: "automatisation-processus",
    num: "02",
    title: "Automatisation des processus",
    headline: "Vos outils actuels, augmentés par l'IA.",
    desc: "Extraction documentaire, classification, conformité, reporting. Intégré à votre environnement existant.",
    deliverables: ["Solutions déployées", "Documentation", "Protocoles"],
    metrics: [
      { label: "Temps économisé", value: "-80%" },
      { label: "Précision", value: "97%" },
      { label: "Erreurs humaines", value: "-95%" },
    ],
  },
  {
    slug: "developpement-ia-sur-mesure",
    num: "03",
    title: "Développement IA sur mesure",
    headline: "Des solutions pensées pour votre juridiction.",
    desc: "Assistants juridiques, veille réglementaire, KYC augmenté. Calibrés pour Monaco.",
    deliverables: ["Solution propriétaire", "Validation", "Compétences"],
    metrics: [
      { label: "Précision droit MC", value: "95%+" },
      { label: "Temps de réponse", value: "30s" },
      { label: "Propriété code", value: "100%" },
    ],
  },
  {
    slug: "marketing-acquisition",
    num: "04",
    title: "Marketing & acquisition",
    headline: "Des campagnes en jours, pas en mois.",
    desc: "Sites web en deux semaines. Campagnes IA. Landing pages. Machine d'acquisition.",
    deliverables: ["Site performant", "Campagnes IA", "Analytics"],
    metrics: [
      { label: "Trafic organique", value: "x3" },
      { label: "Score Lighthouse", value: "95+" },
      { label: "Coût acquisition", value: "-60%" },
    ],
  },
  {
    slug: "outils-internes",
    num: "05",
    title: "Outils internes",
    headline: "Vos logiciels métier, livrés 10x plus vite.",
    desc: "CRM, dashboards, portails clients. Applications métier en une fraction du temps traditionnel.",
    deliverables: ["App déployée", "Back-office", "Maintenance"],
    metrics: [
      { label: "Coût vs traditionnel", value: "÷10" },
      { label: "Délai livraison", value: "3 sem." },
      { label: "Propriété code", value: "100%" },
    ],
  },
  {
    slug: "formation-ia",
    num: "06",
    title: "Formation & appropriation",
    headline: "L'autonomie comme objectif final.",
    desc: "Du prompt engineering à la maîtrise de vos outils. Chaque collaborateur repart autonome.",
    deliverables: ["Formation", "Guides internes", "Suivi"],
    metrics: [
      { label: "Satisfaction", value: "96%" },
      { label: "Taux d'adoption", value: "85%" },
      { label: "Max participants", value: "10" },
    ],
  },
];

export default function ExpertiseShowcase() {
  const [active, setActive] = useState(0);
  const e = expertises[active];

  return (
    <section className="section-padding section-light">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[280px_1fr] gap-6">
          {/* Left: selector tabs */}
          <div className="space-y-1.5">
            {expertises.map((item, i) => (
              <button
                key={item.num}
                onClick={() => setActive(i)}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                  active === i
                    ? "bg-surface border border-accent/20 shadow-md shadow-accent/5"
                    : "hover:bg-surface/60"
                }`}
              >
                <span className={`w-7 h-7 rounded-md flex items-center justify-center text-[10px] font-bold shrink-0 transition-all duration-300 ${
                  active === i ? "bg-accent text-dark" : "bg-surface-dark text-muted"
                }`}>
                  {item.num}
                </span>
                <span className={`text-[13px] font-medium transition-colors duration-300 ${
                  active === i ? "text-foreground" : "text-foreground/45"
                }`}>
                  {item.title}
                </span>
              </button>
            ))}
          </div>

          {/* Right: detail panel */}
          <div className="rounded-2xl bg-surface border border-border p-8 sm:p-10 min-h-[380px] flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="text-accent text-[11px] font-bold uppercase tracking-wider">{e.num}</span>
                <h2 className="text-xl sm:text-2xl font-bold mt-1">{e.title}</h2>
                <p className="text-foreground/50 text-[13px] mt-2">{e.headline}</p>
              </div>
              <Link
                href={`/expertise/${e.slug}`}
                className="shrink-0 w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted hover:border-accent hover:text-accent transition-all"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Description */}
            <p className="text-foreground/45 text-[14px] leading-relaxed mb-8">{e.desc}</p>

            {/* Metrics row */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {e.metrics.map((m) => (
                <div key={m.label} className="p-4 rounded-xl bg-background text-center">
                  <div className="text-lg font-bold text-foreground">{m.value}</div>
                  <div className="text-[10px] text-muted mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Deliverables + CTA */}
            <div className="mt-auto flex items-center justify-between pt-6 border-t border-border">
              <div className="flex flex-wrap gap-1.5">
                {e.deliverables.map((d) => (
                  <span key={d} className="text-[10px] font-medium text-foreground/40 bg-surface-dark px-2.5 py-1 rounded-lg">
                    {d}
                  </span>
                ))}
              </div>
              <Link
                href={`/expertise/${e.slug}`}
                className="group text-[12px] text-accent font-medium inline-flex items-center gap-1 hover:underline shrink-0 ml-4"
              >
                En savoir plus
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
