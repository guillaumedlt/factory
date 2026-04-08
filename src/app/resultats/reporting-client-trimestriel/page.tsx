import type { Metadata } from "next";
import CaseLayout from "@/components/CaseLayout";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import { caseStudies } from "@/lib/cases";
import Link from "next/link";

const caseStudy = caseStudies.find((c) => c.slug === "reporting-client-trimestriel")!;

export const metadata: Metadata = {
  title: `${caseStudy.title} | Cas client Quanta`,
  description: "Un family office monégasque économise 6 jours par an en automatisant la génération de ses rapports trimestriels clients grâce aux solutions Quanta.",
  alternates: { canonical: `https://quantamonaco.com/resultats/${caseStudy.slug}` },
};

export default function CasePage() {
  return (
    <CaseLayout caseStudy={caseStudy}>
      {/* Section: Le défi */}
      <RevealOnScroll>
        <h2 className="text-xl font-bold mb-5">Le défi</h2>
        <p className="text-foreground/55 text-[14px] leading-relaxed mb-4">
          Ce family office monégasque gère les actifs d&apos;une dizaine de familles fortunées, chacune disposant de structures patrimoniales complexes : holdings, assurances-vie luxembourgeoises, comptes titres multi-dépositaires et immobilier. Chaque trimestre, l&apos;équipe devait compiler les données de performance depuis cinq sources différentes, les consolider dans un rapport personnalisé par famille, puis le mettre en forme selon la charte graphique du cabinet.
        </p>
        <p className="text-foreground/55 text-[14px] leading-relaxed mb-12">
          Ce travail de compilation mobilisait le directeur d&apos;investissement et un analyste pendant deux jours complets. Le risque d&apos;erreur de copier-coller était permanent, et chaque rapport nécessitait des dizaines de vérifications croisées. Les clients, habitués à un service irréprochable, attendaient leurs rapports dans les cinq jours ouvrés suivant la clôture du trimestre. Ce délai contraint laissait peu de marge en cas d&apos;imprévu.
        </p>
      </RevealOnScroll>

      {/* Section: Notre approche */}
      <RevealOnScroll>
        <h2 className="text-xl font-bold mb-5">Notre approche</h2>
        <div className="grid sm:grid-cols-3 gap-3 mb-12">
          <div className="p-5 rounded-2xl bg-surface border border-border">
            <span className="text-accent text-[10px] font-bold">Phase 1</span>
            <h3 className="text-[13px] font-semibold mt-1 mb-1">Connecteurs de données</h3>
            <p className="text-foreground/45 text-[12px] leading-relaxed">Intégration automatisée avec les plateformes des dépositaires, extraction des valorisations et performances via API ou scraping sécurisé des portails clients.</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border">
            <span className="text-accent text-[10px] font-bold">Phase 2</span>
            <h3 className="text-[13px] font-semibold mt-1 mb-1">Moteur de consolidation</h3>
            <p className="text-foreground/45 text-[12px] leading-relaxed">Pipeline Python consolidant les données par famille, calculant les performances pondérées par classe d&apos;actifs et générant les graphiques de répartition automatiquement.</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border">
            <span className="text-accent text-[10px] font-bold">Phase 3</span>
            <h3 className="text-[13px] font-semibold mt-1 mb-1">Génération PDF brandée</h3>
            <p className="text-foreground/45 text-[12px] leading-relaxed">Template de rapport personnalisé par famille avec commentaires IA pré-rédigés par Claude, export PDF haute qualité et envoi sécurisé au client.</p>
          </div>
        </div>
      </RevealOnScroll>

      {/* Section: Résultats détaillés */}
      <RevealOnScroll>
        <h2 className="text-xl font-bold mb-5">Résultats détaillés</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter value={6} suffix=" j/an" /></div>
            <p className="text-muted text-[11px] mt-1">Économisés sur le reporting</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter value={30} suffix=" min" /></div>
            <p className="text-muted text-[11px] mt-1">Validation humaine par rapport</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter value={10} suffix=" familles" /></div>
            <p className="text-muted text-[11px] mt-1">Rapports personnalisés</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter value={5} suffix=" sources" /></div>
            <p className="text-muted text-[11px] mt-1">De données consolidées</p>
          </div>
        </div>
      </RevealOnScroll>

      {/* Section: Technologies utilisées */}
      <RevealOnScroll>
        <h2 className="text-xl font-bold mb-5">Technologies déployées</h2>
        <div className="flex flex-wrap gap-2 mb-12">
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">Python</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">Claude</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">n8n</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">Matplotlib</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">WeasyPrint</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">Supabase</span>
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
