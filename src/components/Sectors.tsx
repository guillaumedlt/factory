"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";

const sectors: { title: string; icon: ReactNode; items: string[] }[] = [
  {
    title: "Gestion de patrimoine & Family offices",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    items: [
      "Collecte documentaire bancaire automatisée",
      "Échéanciers d'obligations et dépôts à terme",
      "Conformité LCB-FT avec filtrage par profil",
      "Facturation sur encours gérés",
      "Reporting réglementaire SICCFIN",
    ],
  },
  {
    title: "Banque privée & institutions financières",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
      </svg>
    ),
    items: [
      "Processus KYC/KYB et due diligence",
      "Scoring de risques assisté par IA",
      "Détection d'anomalies anti-blanchiment",
      "Rapports réglementaires automatiques",
      "Notes d'investissement et recherche marché",
    ],
  },
  {
    title: "Cabinets d'avocats & études juridiques",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    items: [
      "Rédaction d'actes en droit monégasque (SASURE)",
      "Recherches comparatives multi-juridictions",
      "Bases documentaires propriétaires",
      "Transcription et synthèse d'audiences",
    ],
  },
  {
    title: "Immobilier de luxe & promotion",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    items: [
      "Suivi des échéances contractuelles",
      "Brochures et dossiers de présentation",
      "Veille urbanistique Principauté",
      "Matching acheteurs/biens par IA",
    ],
  },
  {
    title: "Hôtellerie, restauration & événementiel",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    items: [
      "Optimisation du yield et réservations",
      "Analyse automatisée des avis clients",
      "Contenus marketing multilingues",
      "Facturation et reporting opérationnel",
    ],
  },
  {
    title: "Commerce de luxe & retail",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    items: [
      "CRM augmenté et scoring client",
      "Stocks prédictifs et réapprovisionnement",
      "Contenus produit et campagnes email IA",
      "Analyse des performances temps réel",
    ],
  },
  {
    title: "Santé, bien-être & cliniques privées",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    items: [
      "Gestion dossiers patients et rendez-vous",
      "Synthèse de comptes rendus médicaux",
      "Suivi accréditations réglementaires",
      "Communication patient multicanale",
    ],
  },
  {
    title: "Services professionnels & corporate",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    items: [
      "Facturation et comptabilité automatisées",
      "OCR et classement documentaire prédictif",
      "Suivi titres de séjour, permis, visas",
      "Correspondance professionnelle assistée",
    ],
  },
];

export default function Sectors() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="section-padding section-tinted">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted font-semibold">Secteurs</span>
          <h2 className="text-[1.75rem] sm:text-3xl font-bold mt-3 mb-4 tracking-tight leading-snug">
            Une expertise ancrée dans la Principauté
          </h2>
          <p className="text-foreground/60 text-[14px] leading-relaxed">
            Chaque secteur a ses exigences propres. Nous les connaissons.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {sectors.map((s, i) => (
            <div
              key={s.title}
              className={`group relative rounded-2xl border p-5 transition-all duration-300 cursor-pointer overflow-hidden ${
                active === i
                  ? "bg-dark text-white border-white/[0.06] shadow-xl shadow-black/15 sm:col-span-2"
                  : "bg-surface border-border hover:border-accent/30 hover:shadow-md"
              }`}
              onClick={() => setActive(active === i ? null : i)}
            >
              <div className={`transition-all duration-300 ${active === i ? "mb-4" : ""}`}>
                <div className="flex items-center justify-between mb-3">
                  <span className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                    active === i ? "bg-accent text-dark" : "bg-accent/10 text-foreground/40 group-hover:bg-accent/20"
                  }`}>
                    {s.icon}
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className={`transition-all duration-300 ${
                      active === i ? "text-accent rotate-45" : "text-muted/30 group-hover:text-muted"
                    }`}
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </div>
                <h3 className={`text-[13px] font-semibold leading-snug transition-colors duration-300 ${
                  active === i ? "text-white" : ""
                }`}>
                  {s.title}
                </h3>
              </div>

              {active === i && (
                <ul className="space-y-2 animate-fade-in">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[12px] text-white/50 leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-accent mt-[6px] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/secteurs" className="group text-[13px] font-medium text-muted hover:text-foreground transition-colors inline-flex items-center gap-1.5">
            Tous nos secteurs d&apos;intervention
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
