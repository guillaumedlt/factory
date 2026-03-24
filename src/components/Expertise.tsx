"use client";

import { useState } from "react";
import Link from "next/link";

const expertises = [
  {
    num: "01",
    slug: "audit-strategie-ia",
    title: "Audit & stratégie IA",
    headline: "Savoir où frapper avant d'agir.",
    text: "Entretiens individuels, analyse de chaque flux de travail sur trois axes (potentiel, complexité, ROI) et cartographie complète de vos opportunités, hiérarchisée par priorité d'exécution.",
    deliverables: ["Rapport d'audit", "Matrice d'opportunités", "Feuille de route"],
    speed: "2 semaines",
  },
  {
    num: "02",
    slug: "automatisation-processus",
    title: "Automatisation des processus",
    headline: "Vos outils actuels, augmentés par l'IA.",
    text: "Extraction documentaire, classification intelligente, contrôles de conformité, génération de rapports, facturation. Chaque solution s'intègre à votre environnement existant.",
    deliverables: ["Solutions déployées", "Documentation technique", "Protocoles de contrôle"],
    speed: "4 semaines",
  },
  {
    num: "03",
    slug: "developpement-ia-sur-mesure",
    title: "Développement IA sur mesure",
    headline: "Des solutions pensées pour votre juridiction.",
    text: "Assistants juridiques formés au droit monégasque, veille réglementaire, KYC augmenté, analyse documentaire. Chaque développement intègre les contraintes de la Principauté.",
    deliverables: ["Solution IA propriétaire", "Tests de validation", "Transfert de compétences"],
    speed: "6 semaines",
  },
  {
    num: "04",
    slug: "marketing-acquisition",
    title: "Marketing & acquisition",
    headline: "Des campagnes en jours, pas en mois.",
    text: "Sites web livrés en deux semaines. Campagnes générées et optimisées par IA. Landing pages, contenus, emails. Votre machine d'acquisition construite avec les meilleurs outils du marché.",
    deliverables: ["Site web performant", "Campagnes IA", "Analytics & optimisation"],
    speed: "2 semaines",
  },
  {
    num: "05",
    slug: "outils-internes",
    title: "Outils internes sur mesure",
    headline: "Vos logiciels métier, livrés 10x plus vite.",
    text: "CRM internes, dashboards de pilotage, portails clients, outils de reporting. Nous développons vos applications métier avec l'IA en une fraction du temps et du coût traditionnels.",
    deliverables: ["Application web déployée", "Back-office admin", "Hébergement & maintenance"],
    speed: "3 semaines",
  },
  {
    num: "06",
    slug: "formation-ia",
    title: "Formation & appropriation",
    headline: "L'autonomie comme objectif final.",
    text: "Programmes calibrés sur vos cas d'usage réels, des fondamentaux de l'IA générative jusqu'à la maîtrise avancée de vos solutions métier. Chaque collaborateur repart autonome.",
    deliverables: ["Formation sur mesure", "Guides internes", "Sessions de suivi"],
    speed: "1 semaine",
  },
];

export default function Expertise() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="expertise" className="section-padding section-light">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-14">
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted font-semibold">Expertises</span>
          <h2 className="text-[1.75rem] sm:text-4xl font-bold mt-3 mb-4 tracking-tight leading-snug">
            Ce que nous déployons pour vous
          </h2>
          <p className="text-foreground/60 text-[15px] leading-relaxed">
            Six leviers concrets pour transformer vos opérations, de l&apos;audit initial jusqu&apos;à l&apos;autonomie de vos équipes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {expertises.map((e, i) => (
            <Link
              href={`/expertise/${e.slug}`}
              key={e.num}
              className="group relative p-7 rounded-2xl bg-surface border border-border hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 flex flex-col overflow-hidden"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Hover glow */}
              <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full blur-[50px] transition-opacity duration-500 bg-accent/10 ${hovered === i ? "opacity-100" : "opacity-0"}`} />

              <div className="relative">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center text-[11px] font-bold text-foreground/50 group-hover:bg-accent group-hover:text-dark transition-all duration-300 shrink-0">
                      {e.num}
                    </span>
                    <h3 className="text-[14px] font-semibold leading-tight">{e.title}</h3>
                  </div>
                  <span className="text-[10px] text-muted bg-surface-dark px-2 py-0.5 rounded-md font-medium shrink-0 group-hover:bg-accent/10 group-hover:text-accent transition-all duration-300">
                    {e.speed}
                  </span>
                </div>

                {/* Headline */}
                <p className="text-foreground/80 text-[13px] font-medium mb-3">{e.headline}</p>

                {/* Text — reveal on hover */}
                <div className={`transition-all duration-300 overflow-hidden ${
                  hovered === i ? "max-h-40 opacity-100 mb-5" : "max-h-0 opacity-0 mb-0 sm:max-h-40 sm:opacity-100 sm:mb-5"
                }`}>
                  <p className="text-foreground/45 text-[12px] leading-relaxed">{e.text}</p>
                </div>

                {/* Deliverables */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                  {e.deliverables.map((d) => (
                    <span key={d} className="text-[10px] font-medium text-foreground/40 bg-surface-dark px-2.5 py-1 rounded-lg group-hover:bg-accent/10 group-hover:text-foreground/60 transition-all duration-300">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/expertise" className="group text-[13px] font-medium text-muted hover:text-foreground transition-colors inline-flex items-center gap-1.5">
            Toutes nos expertises
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
