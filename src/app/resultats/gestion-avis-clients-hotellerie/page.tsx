import type { Metadata } from "next";
import CaseLayout from "@/components/CaseLayout";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import { caseStudies } from "@/lib/cases";
import Link from "next/link";

const caseStudy = caseStudies.find((c) => c.slug === "gestion-avis-clients-hotellerie")!;

export const metadata: Metadata = {
  title: `${caseStudy.title} | Cas client Factory`,
  description: "Un hôtel de luxe à Monaco répond désormais aux avis clients en 4 heures au lieu de 72 grâce à l'analyse de sentiment et aux réponses IA déployées par Factory.",
  alternates: { canonical: `https://factory-ai.com/resultats/${caseStudy.slug}` },
};

export default function CasePage() {
  return (
    <CaseLayout caseStudy={caseStudy}>
      {/* Section: Le défi */}
      <RevealOnScroll>
        <h2 className="text-xl font-bold mb-5">Le défi</h2>
        <p className="text-foreground/55 text-[14px] leading-relaxed mb-4">
          Cet hôtel cinq étoiles situé sur le Carré d&apos;Or à Monaco reçoit en moyenne 120 avis par mois répartis sur cinq plateformes : Google, TripAdvisor, Booking.com, Expedia et les réseaux sociaux. La directrice de la relation client devait consulter chaque plateforme quotidiennement, lire et analyser le contenu de chaque avis, puis rédiger une réponse personnalisée dans la langue du client (français, anglais, italien ou russe).
        </p>
        <p className="text-foreground/55 text-[14px] leading-relaxed mb-12">
          Le temps de réponse moyen atteignait 72 heures, un délai inacceptable pour un établissement de ce standing. Les études montrent qu&apos;un avis négatif sans réponse rapide impacte directement le taux de réservation. Par ailleurs, l&apos;analyse des tendances (mentions récurrentes du spa, du service de voiturier, de la vue) restait purement intuitive, sans données structurées pour guider les décisions opérationnelles de la direction.
        </p>
      </RevealOnScroll>

      {/* Section: Notre approche */}
      <RevealOnScroll>
        <h2 className="text-xl font-bold mb-5">Notre approche</h2>
        <div className="grid sm:grid-cols-3 gap-3 mb-12">
          <div className="p-5 rounded-2xl bg-surface border border-border">
            <span className="text-accent text-[10px] font-bold">Phase 1</span>
            <h3 className="text-[13px] font-semibold mt-1 mb-1">Centralisation des avis</h3>
            <p className="text-foreground/45 text-[12px] leading-relaxed">Collecte automatisée des avis depuis les cinq plateformes via API et scraping, centralisation dans un tableau de bord unique avec détection de la langue et analyse de sentiment en temps réel.</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border">
            <span className="text-accent text-[10px] font-bold">Phase 2</span>
            <h3 className="text-[13px] font-semibold mt-1 mb-1">Réponses IA multilingues</h3>
            <p className="text-foreground/45 text-[12px] leading-relaxed">Génération automatique de réponses personnalisées par Claude dans la langue du client, calibrées sur le ton de l&apos;établissement. Validation humaine en deux clics avant publication.</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border">
            <span className="text-accent text-[10px] font-bold">Phase 3</span>
            <h3 className="text-[13px] font-semibold mt-1 mb-1">Tableau d&apos;analyse des tendances</h3>
            <p className="text-foreground/45 text-[12px] leading-relaxed">Dashboard mensuel avec catégorisation thématique des avis, évolution du sentiment par service et alertes prioritaires sur les avis négatifs nécessitant une attention immédiate.</p>
          </div>
        </div>
      </RevealOnScroll>

      {/* Section: Résultats détaillés */}
      <RevealOnScroll>
        <h2 className="text-xl font-bold mb-5">Résultats détaillés</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter value={4} suffix="h" /></div>
            <p className="text-muted text-[11px] mt-1">Temps de réponse moyen</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter value={4} suffix=" langues" /></div>
            <p className="text-muted text-[11px] mt-1">Réponses automatiques</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter value={120} suffix="/mois" /></div>
            <p className="text-muted text-[11px] mt-1">Avis traités automatiquement</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter prefix="+" value={0.4} suffix=" pt" /></div>
            <p className="text-muted text-[11px] mt-1">Note moyenne Google</p>
          </div>
        </div>
      </RevealOnScroll>

      {/* Section: Technologies utilisées */}
      <RevealOnScroll>
        <h2 className="text-xl font-bold mb-5">Technologies déployées</h2>
        <div className="flex flex-wrap gap-2 mb-12">
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">Claude</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">n8n</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">Make</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">Supabase</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">Next.js</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">Google Business API</span>
        </div>
      </RevealOnScroll>

      {/* Section: Related links */}
      <RevealOnScroll>
        <div className="flex flex-wrap gap-3">
          <Link href="/secteurs/hotellerie-restauration" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Hotellerie et restauration</Link>
          <Link href="/expertise/automatisation-processus" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Automatisation</Link>
        </div>
      </RevealOnScroll>
    </CaseLayout>
  );
}
