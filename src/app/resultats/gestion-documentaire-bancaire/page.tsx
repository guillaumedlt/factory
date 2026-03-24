import type { Metadata } from "next";
import CaseLayout from "@/components/CaseLayout";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import { caseStudies } from "@/lib/cases";
import Link from "next/link";

const caseStudy = caseStudies.find((c) => c.slug === "gestion-documentaire-bancaire")!;

export const metadata: Metadata = {
  title: `${caseStudy.title} | Cas client Factory`,
  description: "Comment une société de gestion monégasque a automatisé le traitement de 150 relevés bancaires PDF par mois et récupéré 4 jours de travail grâce à Factory.",
  alternates: { canonical: `https://factory-ai.com/resultats/${caseStudy.slug}` },
};

export default function CasePage() {
  return (
    <CaseLayout caseStudy={caseStudy}>
      {/* Section: Le défi */}
      <RevealOnScroll>
        <h2 className="text-xl font-bold mb-5">Le défi</h2>
        <p className="text-foreground/55 text-[14px] leading-relaxed mb-4">
          Cette société de gestion basée à Monaco administre plus de 80 portefeuilles pour une clientèle internationale exigeante. Chaque mois, l&apos;équipe back-office devait télécharger manuellement les relevés bancaires depuis les portails de sept établissements dépositaires différents, les renommer selon une nomenclature interne, puis les classer dans l&apos;arborescence documentaire réglementaire. Ce processus mobilisait une collaboratrice à temps plein pendant cinq jours ouvrés chaque début de mois.
        </p>
        <p className="text-foreground/55 text-[14px] leading-relaxed mb-12">
          Au-delà du temps consommé, les erreurs de classement étaient fréquentes : un relevé mal nommé ou rangé dans le mauvais dossier pouvait retarder un audit de la Commission de Contrôle des Activités Financières (CCAF). La direction souhaitait réaffecter cette ressource à des tâches à plus forte valeur ajoutée, notamment le suivi de la relation client et la préparation des comités d&apos;investissement trimestriels.
        </p>
      </RevealOnScroll>

      {/* Section: Notre approche */}
      <RevealOnScroll>
        <h2 className="text-xl font-bold mb-5">Notre approche</h2>
        <div className="grid sm:grid-cols-3 gap-3 mb-12">
          <div className="p-5 rounded-2xl bg-surface border border-border">
            <span className="text-accent text-[10px] font-bold">Phase 1</span>
            <h3 className="text-[13px] font-semibold mt-1 mb-1">Audit des flux documentaires</h3>
            <p className="text-foreground/45 text-[12px] leading-relaxed">Cartographie de chaque portail bancaire, identification des formats PDF, analyse de la nomenclature de classement et des règles métier spécifiques à chaque dépositaire.</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border">
            <span className="text-accent text-[10px] font-bold">Phase 2</span>
            <h3 className="text-[13px] font-semibold mt-1 mb-1">Automatisation de la collecte</h3>
            <p className="text-foreground/45 text-[12px] leading-relaxed">Développement de workflows n8n connectés aux portails bancaires pour télécharger automatiquement les relevés, les renommer selon la convention interne et les classer dans le bon répertoire.</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border">
            <span className="text-accent text-[10px] font-bold">Phase 3</span>
            <h3 className="text-[13px] font-semibold mt-1 mb-1">Contrôle et alertes</h3>
            <p className="text-foreground/45 text-[12px] leading-relaxed">Mise en place d&apos;un tableau de bord de suivi avec alertes en cas de relevé manquant, validation humaine simplifiée et journal d&apos;audit pour la conformité CCAF.</p>
          </div>
        </div>
      </RevealOnScroll>

      {/* Section: Résultats détaillés */}
      <RevealOnScroll>
        <h2 className="text-xl font-bold mb-5">Résultats détaillés</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter prefix="-" value={80} suffix="%" /></div>
            <p className="text-muted text-[11px] mt-1">Temps de traitement</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter value={150} suffix=" PDF" /></div>
            <p className="text-muted text-[11px] mt-1">Traités automatiquement / mois</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter value={0} suffix=" erreur" /></div>
            <p className="text-muted text-[11px] mt-1">De classement depuis le lancement</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter value={4} suffix=" jours" /></div>
            <p className="text-muted text-[11px] mt-1">Récupérés chaque mois</p>
          </div>
        </div>
      </RevealOnScroll>

      {/* Section: Technologies utilisées */}
      <RevealOnScroll>
        <h2 className="text-xl font-bold mb-5">Technologies déployées</h2>
        <div className="flex flex-wrap gap-2 mb-12">
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">n8n</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">Python</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">OCR (Tesseract)</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">Claude</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">Google Drive API</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">Slack Webhooks</span>
        </div>
      </RevealOnScroll>

      {/* Section: Related links */}
      <RevealOnScroll>
        <div className="flex flex-wrap gap-3">
          <Link href="/secteurs/gestion-patrimoine" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Gestion de patrimoine</Link>
          <Link href="/expertise/automatisation-processus" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Automatisation</Link>
        </div>
      </RevealOnScroll>
    </CaseLayout>
  );
}
