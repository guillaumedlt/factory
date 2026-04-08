import type { Metadata } from "next";
import CaseLayout from "@/components/CaseLayout";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import { caseStudies } from "@/lib/cases";
import Link from "next/link";

const caseStudy = caseStudies.find((c) => c.slug === "echeancier-obligataire")!;

export const metadata: Metadata = {
  title: `${caseStudy.title} | Cas client Quanta`,
  description: "Une société de gestion à Monaco génère désormais son échéancier obligataire en un clic au lieu d'une demi-journée grâce à l'extraction PDF automatisée par Quanta.",
  alternates: { canonical: `https://quantamonaco.com/resultats/${caseStudy.slug}` },
};

export default function CasePage() {
  return (
    <CaseLayout caseStudy={caseStudy}>
      {/* Section: Le défi */}
      <RevealOnScroll>
        <h2 className="text-xl font-bold mb-5">Le défi</h2>
        <p className="text-foreground/55 text-[14px] leading-relaxed mb-4">
          Pour cette société de gestion monégasque spécialisée en gestion obligataire, la construction de l&apos;échéancier mensuel constituait un point de friction majeur. Chaque mois, un analyste devait imprimer l&apos;intégralité des relevés de portefeuille, identifier manuellement chaque ligne obligataire, relever les dates de maturité, les coupons et les montants nominaux, puis saisir ces données dans un tableur Excel consolidé.
        </p>
        <p className="text-foreground/55 text-[14px] leading-relaxed mb-12">
          Ce processus prenait une demi-journée entière et comportait un risque d&apos;erreur significatif : une date de maturité mal reportée pouvait entraîner un décalage de trésorerie impactant la gestion de la liquidité du fonds. Avec un encours de plus de 200 millions d&apos;euros répartis sur 300 lignes obligataires, la direction exigeait une fiabilité absolue. L&apos;enjeu était d&apos;automatiser l&apos;extraction tout en garantissant la précision des données au centime près.
        </p>
      </RevealOnScroll>

      {/* Section: Notre approche */}
      <RevealOnScroll>
        <h2 className="text-xl font-bold mb-5">Notre approche</h2>
        <div className="grid sm:grid-cols-3 gap-3 mb-12">
          <div className="p-5 rounded-2xl bg-surface border border-border">
            <span className="text-accent text-[10px] font-bold">Phase 1</span>
            <h3 className="text-[13px] font-semibold mt-1 mb-1">Analyse des formats PDF</h3>
            <p className="text-foreground/45 text-[12px] leading-relaxed">Étude des relevés de quatre dépositaires distincts. Identification des structures de tableaux, des variantes de mise en page et des cas particuliers (obligations convertibles, perpétuelles).</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border">
            <span className="text-accent text-[10px] font-bold">Phase 2</span>
            <h3 className="text-[13px] font-semibold mt-1 mb-1">Pipeline d&apos;extraction intelligente</h3>
            <p className="text-foreground/45 text-[12px] leading-relaxed">Développement d&apos;un pipeline Python combinant OCR et Claude pour extraire les données structurées des relevés PDF avec un taux de précision supérieur à 99,5 %.</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border">
            <span className="text-accent text-[10px] font-bold">Phase 3</span>
            <h3 className="text-[13px] font-semibold mt-1 mb-1">Génération automatique</h3>
            <p className="text-foreground/45 text-[12px] leading-relaxed">Interface de génération en un clic produisant l&apos;échéancier consolidé au format Excel, avec tri par date de maturité et agrégation par devise et par fonds.</p>
          </div>
        </div>
      </RevealOnScroll>

      {/* Section: Résultats détaillés */}
      <RevealOnScroll>
        <h2 className="text-xl font-bold mb-5">Résultats détaillés</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter prefix="-" value={95} suffix="%" /></div>
            <p className="text-muted text-[11px] mt-1">Temps de production</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter value={300} suffix="+" /></div>
            <p className="text-muted text-[11px] mt-1">Lignes obligataires traitées</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter value={99} suffix=",5%" /></div>
            <p className="text-muted text-[11px] mt-1">Taux de précision</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter value={6} suffix=" j/an" /></div>
            <p className="text-muted text-[11px] mt-1">Économisés pour l&apos;analyste</p>
          </div>
        </div>
      </RevealOnScroll>

      {/* Section: Technologies utilisées */}
      <RevealOnScroll>
        <h2 className="text-xl font-bold mb-5">Technologies déployées</h2>
        <div className="flex flex-wrap gap-2 mb-12">
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">Python</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">Claude</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">OCR (pdf2image)</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">Pandas</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">OpenPyXL</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">n8n</span>
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
