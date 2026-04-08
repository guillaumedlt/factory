import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ExpertiseHero from "@/components/ExpertiseHero";
import { AuditIllustration } from "@/components/ExpertiseIllustration";
import FAQ from "@/components/FAQ";
import FaqSchema from "@/components/FaqSchema";
import RevealOnScroll from "@/components/RevealOnScroll";
import StepTimeline from "@/components/StepTimeline";
import AnimatedCounter from "@/components/AnimatedCounter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Audit & stratégie IA à Monaco",
  description:
    "Audit IA approfondi pour entreprises à Monaco. Cartographie des processus, identification des opportunités d'automatisation et feuille de route priorisée par ROI.",
  alternates: { canonical: "https://quantamonaco.com/expertise/audit-strategie-ia" },
  openGraph: {
    title: "Audit & stratégie IA à Monaco",
    description:
      "Audit IA approfondi pour entreprises à Monaco. Cartographie des processus, identification des opportunités d'automatisation et feuille de route priorisée par ROI.",
    url: "https://quantamonaco.com/expertise/audit-strategie-ia",
    siteName: "Quanta",
    locale: "fr_FR",
    type: "website",
  },
};

const steps = [
  {
    title: "Cadrage stratégique",
    text: "Définition du périmètre, des objectifs business et des contraintes réglementaires propres à votre activité à Monaco. Alignement avec la direction sur les priorités et les critères de succès.",
  },
  {
    title: "Immersion terrain",
    text: "Entretiens individuels avec vos équipes, observation des processus en conditions réelles et collecte des données opérationnelles. Nous passons du temps avec chaque service pour comprendre le quotidien.",
  },
  {
    title: "Cartographie des processus",
    text: "Modélisation visuelle de vos flux de travail, identification des tâches répétitives, des points de friction et des dépendances entre services. Mesure précise du temps consacré à chaque activité.",
  },
  {
    title: "Analyse des opportunités",
    text: "Évaluation de chaque processus selon son potentiel d'automatisation. Estimation du ROI, de la complexité technique et des risques associés. Benchmarking avec des entreprises similaires.",
  },
  {
    title: "Priorisation par ROI",
    text: "Classement des opportunités selon une matrice ROI, complexité et risque. Les quick wins d'abord pour générer de la valeur rapidement, puis les projets structurants à moyen terme.",
  },
  {
    title: "Restitution et feuille de route",
    text: "Présentation détaillée à votre direction avec budget estimatif, planning de déploiement trimestriel et indicateurs de performance. Document exploitable immédiatement.",
  },
];

const faqItems = [
  {
    q: "Combien de temps dure un audit IA pour une entreprise à Monaco ?",
    a: "Un audit complet dure généralement entre 3 et 6 semaines selon la taille de l'organisation et le nombre de processus à analyser. Pour une PME monégasque de 10 à 50 collaborateurs, comptez 4 semaines. Pour une structure plus importante ou un secteur très réglementé (banque, assurance), prévoyez 6 semaines. La phase d'immersion terrain représente environ la moitié de cette durée.",
  },
  {
    q: "Quel est le coût d'un audit stratégie IA à Monaco ?",
    a: "Le budget varie selon le périmètre. Un audit ciblé sur un département ou un processus spécifique démarre à quelques milliers d'euros. Un diagnostic global couvrant l'ensemble des opérations d'une entreprise se situe entre 8 000 et 25 000 euros. Le ROI des premières automatisations identifiées couvre généralement le coût de l'audit en moins de 3 mois.",
  },
  {
    q: "Faut-il des compétences techniques internes pour bénéficier d'un audit IA ?",
    a: "Non. Notre audit est conçu pour des entreprises qui n'ont pas d'équipe technique dédiée à l'IA. Nous intervenons auprès de vos équipes métier (direction, opérations, conformité, administration) et traduisons leurs besoins en solutions techniques. Les livrables sont rédigés dans un langage accessible, avec des recommandations que n'importe quel dirigeant peut comprendre et valider.",
  },
  {
    q: "Quels sont les livrables concrets d'un audit IA Quanta ?",
    a: "Vous recevez trois documents : un rapport d'audit complet (état des lieux des processus, inefficacités identifiées, benchmarks sectoriels), une matrice d'opportunités (tableau de priorisation croisant impact business, complexité et délai, avec estimation du ROI à 6 et 12 mois), et une feuille de route IA trimestrielle sur 12 mois (projets à lancer, ressources nécessaires, dépendances et jalons de validation).",
  },
  {
    q: "L'audit couvre-t-il les contraintes réglementaires monégasques (AMSF, CCIN) ?",
    a: "Absolument. C'est l'un de nos différenciants. Chaque recommandation est évaluée au regard des obligations réglementaires spécifiques à Monaco. Pour les secteurs régulés (finance, assurance, immobilier), nous intégrons les exigences de l'AMSF, de la CCIN et des ordonnances souveraines dans notre analyse. Les solutions proposées respectent les normes de confidentialité et de traçabilité imposées par la Principauté.",
  },
];

export default function AuditStrategieIA() {
  return (
    <PageLayout>
      <FaqSchema items={faqItems} />
      <ExpertiseHero
        tag="Expertise"
        title="Audit & stratégie IA à Monaco."
        description="Avant de transformer, il faut comprendre. Nous analysons vos processus en profondeur pour identifier les leviers d'automatisation les plus rentables et construire une feuille de route IA adaptée à la Principauté."
        illustration={<AuditIllustration />}
      />

      {/* Section 1 — section-surface: Intro courte + Metrics dashboard */}
      <section className="section-padding section-surface">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-xl font-bold mb-5">Pourquoi un audit IA est indispensable à Monaco</h2>
                <p className="text-foreground/60 text-[14px] leading-relaxed">
                  La majorité des entreprises monégasques savent que l&apos;IA peut les aider, mais peu savent par où commencer. Nous cartographions chaque processus métier, identifions les goulots d&apos;étranglement, mesurons le temps perdu sur les tâches répétitives et quantifions le potentiel de gains concrets. Le résultat : une vision claire de ce qui peut être automatisé, dans quel ordre, et avec quel ROI.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-5">Immersion et co-construction</h2>
                <p className="text-foreground/60 text-[14px] leading-relaxed">
                  Notre méthode repose sur l&apos;immersion complète : entretiens individuels, observation des flux réels, analyse de vos outils (CRM, ERP, tableurs). Nous croisons ces observations avec notre connaissance des solutions IA pour livrer un plan d&apos;action concret, chiffré et réaliste, pas un rapport de 200 pages qui finit dans un tiroir.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Metrics dashboard */}
          <RevealOnScroll delay={100}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-16">
              <div className="p-5 rounded-2xl bg-surface border border-border text-center">
                <div className="mb-2">
                  <svg className="w-6 h-6 mx-auto text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" /></svg>
                </div>
                <div className="text-2xl font-bold"><AnimatedCounter value={35} suffix="h" /></div>
                <p className="text-muted text-[11px] mt-1">de travail manuel identifiées/semaine</p>
              </div>
              <div className="p-5 rounded-2xl bg-surface border border-border text-center">
                <div className="mb-2">
                  <svg className="w-6 h-6 mx-auto text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a10 10 0 11-20 0 10 10 0 0120 0z" /></svg>
                </div>
                <div className="text-2xl font-bold"><AnimatedCounter value={12} /></div>
                <p className="text-muted text-[11px] mt-1">taches automatisables en moyenne</p>
              </div>
              <div className="p-5 rounded-2xl bg-surface border border-border text-center">
                <div className="mb-2">
                  <svg className="w-6 h-6 mx-auto text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <div className="text-2xl font-bold"><AnimatedCounter prefix="&lt;" value={3} suffix=" mois" /></div>
                <p className="text-muted text-[11px] mt-1">pour rentabiliser l&apos;audit</p>
              </div>
              <div className="p-5 rounded-2xl bg-surface border border-border text-center">
                <div className="mb-2">
                  <svg className="w-6 h-6 mx-auto text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <div className="text-2xl font-bold"><AnimatedCounter value={3} /></div>
                <p className="text-muted text-[11px] mt-1">livrables exploitables</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Section 2 — section-tinted: Steps timeline */}
      <section className="section-padding section-tinted">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-6">Notre approche en 6 étapes</h2>
            <StepTimeline steps={steps} />
          </RevealOnScroll>
        </div>
      </section>

      {/* Section 3 — dark bubble: Cas d'application + Livrables + Secteurs */}
      <section className="bg-dark text-white rounded-[2rem] mx-4 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-6">Cas d&apos;application concrets</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                {
                  title: "Family office monégasque",
                  desc: "12 taches automatisables identifiées, 35h/semaine de travail manuel éliminées. Feuille de route déployée en 3 phases sur 9 mois.",
                },
                {
                  title: "Cabinet d'avocats",
                  desc: "Gain de 40% sur le temps de préparation des dossiers grace à un assistant IA spécialisé en droit monégasque.",
                },
                {
                  title: "Banque privée",
                  desc: "Automatisation KYC et AML : collecte documentaire, croisement des sanctions, rapports AMSF. ROI estimé à 6 mois.",
                },
                {
                  title: "Société de gestion de patrimoine",
                  desc: "Rapports personnalisés et veille réglementaire automatisés. Suivi de portefeuille optimisé pour les clients UHNW.",
                },
                {
                  title: "Hotel de luxe",
                  desc: "Traitement des requêtes clients accéléré, conciergerie et facturation automatisées pour un service personnalisé.",
                },
                {
                  title: "Commerce de luxe",
                  desc: "Gestion des stocks, relation client VIP et marketing personnalisé optimisés par l'IA pour le point de vente.",
                },
              ].map((item) => (
                <div key={item.title} className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                  <h3 className="text-[14px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-white/50 text-[13px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* Livrables */}
          <RevealOnScroll delay={100}>
            <h2 className="text-xl font-bold mb-6 mt-14">Ce que vous recevez</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              <div className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-3">Rapport d&apos;audit complet</h3>
                <p className="text-white/50 text-[13px] leading-relaxed">
                  Etat des lieux de vos processus, inefficacités identifiées, risques opérationnels et benchmarks sectoriels. Chaque constat est accompagné de données chiffrées.
                </p>
              </div>
              <div className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-3">Matrice d&apos;opportunités priorisées</h3>
                <p className="text-white/50 text-[13px] leading-relaxed">
                  Tableau croisant impact business, complexité et délai. Estimation du ROI à 6 et 12 mois. Quick wins identifiés pour générer de la valeur rapidement.
                </p>
              </div>
              <div className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-3">Feuille de route IA trimestrielle</h3>
                <p className="text-white/50 text-[13px] leading-relaxed">
                  Planning sur 12 mois : projets à lancer, ressources, dépendances et jalons. Estimations budgétaires et indicateurs de succès pour chaque phase.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Secteurs */}
          <RevealOnScroll delay={200}>
            <h2 className="text-xl font-bold mb-6 mt-14">Secteurs que nous auditons à Monaco</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { title: "Finance et banque privée", desc: "KYC, AML, reporting AMSF, gestion de portefeuille et relation client UHNW." },
                { title: "Juridique et cabinets d'avocats", desc: "Recherche juridique, rédaction contractuelle, veille réglementaire et gestion dossiers." },
                { title: "Immobilier de luxe", desc: "Gestion locative, estimation de biens, relation propriétaires et conformité transactions." },
                { title: "Hotellerie et commerce de luxe", desc: "Réservations, conciergerie, relation client VIP et optimisation opérationnelle." },
              ].map((sector) => (
                <div key={sector.title} className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                  <h3 className="text-[14px] font-semibold mb-2">{sector.title}</h3>
                  <p className="text-white/50 text-[13px] leading-relaxed">{sector.desc}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Section 4 — section-light: Comparison module */}
      <section className="section-padding section-light">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-6">Ce qui change avec un audit structuré</h2>
            <div className="grid sm:grid-cols-2 gap-3 mb-16">
              <div className="p-7 rounded-2xl bg-surface border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-foreground/20" />
                  <span className="text-[11px] uppercase tracking-wider text-muted font-semibold">Sans Quanta</span>
                </div>
                <ul className="space-y-2">
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Intuition sur les processus à automatiser
                  </li>
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Projets IA lancés sans données de référence
                  </li>
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Budget dispersé sur des initiatives non priorisées
                  </li>
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Risques réglementaires non anticipés (AMSF, CCIN)
                  </li>
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    ROI impossible à mesurer
                  </li>
                </ul>
              </div>
              <div className="p-7 rounded-2xl bg-dark text-white border border-white/[0.06]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-[11px] uppercase tracking-wider text-white/40 font-semibold">Avec Quanta</span>
                </div>
                <ul className="space-y-2">
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Cartographie complète et chiffrée de vos processus
                  </li>
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Quick wins identifiés pour un ROI dès le 1er trimestre
                  </li>
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Feuille de route priorisée par impact et complexité
                  </li>
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Conformité réglementaire intégrée dès la conception
                  </li>
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Indicateurs de succès mesurables à chaque étape
                  </li>
                </ul>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Section 5 — section-tinted: FAQ */}
      <section className="section-padding section-tinted">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-6">Questions fréquentes</h2>
            <FAQ items={faqItems} />
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className="flex flex-wrap gap-3 mt-12">
              <Link href="/methode" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Notre méthode</Link>
              <Link href="/resultats" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Résultats clients</Link>
              <Link href="/expertise/automatisation-processus" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Automatisation des processus</Link>
              <Link href="/expertise/developpement-ia-sur-mesure" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Développement IA sur mesure</Link>
              <Link href="/secteurs/banque-privee" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Banque privée</Link>
              <Link href="/secteurs/cabinets-avocats" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Cabinets d&apos;avocats</Link>
              <Link href="/secteurs/gestion-patrimoine" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Gestion de patrimoine</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA gradient */}
      <section className="section-padding bg-gradient-to-b from-background via-accent-light/30 to-accent/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">
              Identifions ensemble vos opportunités IA.
            </h2>
            <p className="text-foreground/60 text-[14px] leading-relaxed mb-8">
              Un premier échange de 30 minutes suffit pour évaluer le potentiel d&apos;automatisation de votre organisation et définir les prochaines étapes.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/33645636107"
                className="group bg-accent text-dark font-semibold px-6 py-3 rounded-xl text-[13px] hover:bg-accent-dark transition-all inline-flex items-center gap-2 shadow-lg shadow-accent/20"
              >
                Solliciter un entretien
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <Link
                href="/expertise"
                className="bg-surface text-foreground font-medium px-6 py-3 rounded-xl text-[13px] border border-border hover:border-foreground/20 transition-all"
              >
                Toutes nos expertises
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </PageLayout>
  );
}
