import type { Metadata } from "next";
import CaseLayout from "@/components/CaseLayout";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import { caseStudies } from "@/lib/cases";
import Link from "next/link";

const caseStudy = caseStudies.find((c) => c.slug === "conformite-documentaire")!;

export const metadata: Metadata = {
  title: `${caseStudy.title} | Cas client Factory`,
  description: "Zéro échéance documentaire manquée depuis le déploiement. Découvrez comment Factory a automatisé le suivi des documents d'identité pour un cabinet monégasque.",
  alternates: { canonical: `https://factory-ai.com/resultats/${caseStudy.slug}` },
};

export default function CasePage() {
  return (
    <CaseLayout caseStudy={caseStudy}>
      {/* Section: Le défi */}
      <RevealOnScroll>
        <h2 className="text-xl font-bold mb-5">Le défi</h2>
        <p className="text-foreground/55 text-[14px] leading-relaxed mb-4">
          Ce cabinet d&apos;administration de sociétés à Monaco gère les dossiers de plus de 400 entités juridiques. Pour chaque société, les documents d&apos;identité des administrateurs, actionnaires et bénéficiaires effectifs doivent être maintenus à jour : passeports, cartes de séjour monégasques, permis de conduire et justificatifs de domicile. Le non-renouvellement d&apos;un seul document peut entraîner un blocage administratif, voire une observation lors d&apos;un contrôle de la CCAF.
        </p>
        <p className="text-foreground/55 text-[14px] leading-relaxed mb-12">
          Jusqu&apos;alors, une assistante vérifiait manuellement un tableur Excel contenant plus de 1 200 dates d&apos;expiration. Cette vérification, effectuée une fois par mois, laissait des angles morts : certains documents expiraient entre deux contrôles. Le cabinet avait besoin d&apos;un système d&apos;alertes proactif, fiable et intégré à leur outil de gestion existant, sans bouleverser les habitudes de l&apos;équipe.
        </p>
      </RevealOnScroll>

      {/* Section: Notre approche */}
      <RevealOnScroll>
        <h2 className="text-xl font-bold mb-5">Notre approche</h2>
        <div className="grid sm:grid-cols-3 gap-3 mb-12">
          <div className="p-5 rounded-2xl bg-surface border border-border">
            <span className="text-accent text-[10px] font-bold">Phase 1</span>
            <h3 className="text-[13px] font-semibold mt-1 mb-1">Migration et structuration</h3>
            <p className="text-foreground/45 text-[12px] leading-relaxed">Import des 1 200 entrées Excel dans une base Supabase structurée, avec validation des dates, identification des doublons et normalisation des formats de pièces d&apos;identité.</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border">
            <span className="text-accent text-[10px] font-bold">Phase 2</span>
            <h3 className="text-[13px] font-semibold mt-1 mb-1">Moteur d&apos;alertes automatisé</h3>
            <p className="text-foreground/45 text-[12px] leading-relaxed">Workflow n8n déclenchant des alertes email à J-90, J-60 et J-30 avant expiration, avec relances automatiques et escalade vers le responsable si aucune action n&apos;est prise.</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border">
            <span className="text-accent text-[10px] font-bold">Phase 3</span>
            <h3 className="text-[13px] font-semibold mt-1 mb-1">Tableau de bord temps réel</h3>
            <p className="text-foreground/45 text-[12px] leading-relaxed">Interface web affichant le statut de chaque document avec code couleur, filtres par société et export pour les audits de conformité CCAF.</p>
          </div>
        </div>
      </RevealOnScroll>

      {/* Section: Résultats détaillés */}
      <RevealOnScroll>
        <h2 className="text-xl font-bold mb-5">Résultats détaillés</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter value={0} suffix=" oubli" /></div>
            <p className="text-muted text-[11px] mt-1">Depuis le déploiement</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter value={1200} suffix="+" /></div>
            <p className="text-muted text-[11px] mt-1">Documents suivis</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter prefix="-" value={100} suffix="%" /></div>
            <p className="text-muted text-[11px] mt-1">Vérifications manuelles</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter value={3} suffix=" sem." /></div>
            <p className="text-muted text-[11px] mt-1">Délai de mise en production</p>
          </div>
        </div>
      </RevealOnScroll>

      {/* Section: Technologies utilisées */}
      <RevealOnScroll>
        <h2 className="text-xl font-bold mb-5">Technologies déployées</h2>
        <div className="flex flex-wrap gap-2 mb-12">
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">n8n</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">Supabase</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">Next.js</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">SendGrid</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">Vercel</span>
        </div>
      </RevealOnScroll>

      {/* Section: Related links */}
      <RevealOnScroll>
        <div className="flex flex-wrap gap-3">
          <Link href="/secteurs/services-professionnels" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Services professionnels</Link>
          <Link href="/expertise/automatisation-processus" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Automatisation</Link>
        </div>
      </RevealOnScroll>
    </CaseLayout>
  );
}
