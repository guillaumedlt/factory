"use client";

import { useState } from "react";
import Link from "next/link";

const results = [
  {
    tag: "Société de gestion",
    title: "Gestion documentaire",
    before: "5 jours ouvrés/mois pour 150 relevés bancaires PDF",
    after: "Collecte et classement automatisés, contrôle ramené à 2h",
    metric: "4 jours/mois récupérés",
  },
  {
    tag: "Société de gestion",
    title: "Échéancier obligataire",
    before: "Impression intégrale des portefeuilles, vérification ligne par ligne",
    after: "Extraction automatique, tableau généré en un clic",
    metric: "1 clic au lieu d'une demi-journée",
  },
  {
    tag: "Cabinet juridique",
    title: "Production d'actes",
    before: "3 heures de travail qualifié par jeu de statuts",
    after: "Premier jet en 5 min, finalisation en 30 min",
    metric: "−80% du temps de production",
  },
  {
    tag: "Administration",
    title: "Conformité documentaire",
    before: "Vérification manuelle périodique des échéances",
    after: "Alertes automatiques à 90, 60 et 30 jours",
    metric: "0 échéance manquée",
  },
  {
    tag: "Family office",
    title: "Reporting client",
    before: "2 jours de compilation manuelle par trimestre",
    after: "Rapport généré automatiquement depuis les sources",
    metric: "6 jours/an récupérés",
  },
  {
    tag: "Immobilier",
    title: "Dossiers de présentation",
    before: "1 journée par dossier de bien, mise en page manuelle",
    after: "Génération automatique avec données et visuels",
    metric: "45 min au lieu d'1 jour",
  },
];

export default function Results() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? results : results.slice(0, 3);

  return (
    <section id="resultats" className="section-padding section-light">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <div className="max-w-xl">
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted font-semibold">Résultats</span>
            <h2 className="text-[1.75rem] sm:text-4xl font-bold mt-3 mb-4 tracking-tight leading-snug">
              Ce que nos interventions produisent.
            </h2>
            <p className="text-foreground/60 text-[15px] leading-relaxed">
              Des résultats documentés, issus de missions auprès d&apos;entreprises de la Principauté.
            </p>
          </div>
          <a
            href="/resultats"
            className="group text-[13px] font-medium text-foreground/60 hover:text-foreground transition-colors inline-flex items-center gap-1.5 shrink-0"
          >
            Voir tous les cas
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {visible.map((r, i) => (
            <article
              key={r.title}
              className="group p-6 rounded-2xl bg-surface border border-border hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 flex flex-col"
            >
              {/* Tag */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-[10px] text-muted font-semibold uppercase tracking-wider">
                  {r.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[15px] font-semibold mb-4">{r.title}</h3>

              {/* Before / After */}
              <div className="space-y-3 flex-1 mb-5">
                <div className="flex gap-3">
                  <span className="text-[10px] text-foreground/25 font-semibold uppercase tracking-wider mt-0.5 w-10 shrink-0">Avant</span>
                  <p className="text-[12px] text-foreground/40 leading-relaxed">{r.before}</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[10px] text-accent font-semibold uppercase tracking-wider mt-0.5 w-10 shrink-0">Après</span>
                  <p className="text-[12px] text-foreground/65 leading-relaxed">{r.after}</p>
                </div>
              </div>

              {/* Metric */}
              <div className="bg-accent/10 rounded-xl px-4 py-2.5 mt-auto">
                <span className="text-[13px] font-bold text-foreground">{r.metric}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Show more / CTA */}
        <div className="flex items-center justify-center gap-4 mt-10">
          {!showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="text-[13px] font-medium text-foreground/50 hover:text-foreground transition-colors inline-flex items-center gap-1.5 bg-surface border border-border px-5 py-2.5 rounded-xl hover:border-accent/30"
            >
              Voir plus de résultats
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          )}
          <a
            href="/resultats"
            className="group text-[13px] font-semibold bg-accent text-dark px-5 py-2.5 rounded-xl hover:bg-accent-dark transition-colors inline-flex items-center gap-2"
          >
            Découvrir tous nos cas
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
