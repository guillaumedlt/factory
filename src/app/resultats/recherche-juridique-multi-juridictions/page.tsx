import type { Metadata } from "next";
import CaseLayout from "@/components/CaseLayout";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import { caseStudies } from "@/lib/cases";
import Link from "next/link";

const caseStudy = caseStudies.find((c) => c.slug === "recherche-juridique-multi-juridictions")!;

export const metadata: Metadata = {
  title: `${caseStudy.title} | Cas client Factory`,
  description: "Un cabinet d'avocats monégasque passe de 2 heures à 10 minutes par recherche juridique multi-juridictions grâce au moteur IA déployé par Factory.",
  alternates: { canonical: `https://factory-ai.com/resultats/${caseStudy.slug}` },
};

export default function CasePage() {
  return (
    <CaseLayout caseStudy={caseStudy}>
      {/* Section: Le défi */}
      <RevealOnScroll>
        <h2 className="text-xl font-bold mb-5">Le défi</h2>
        <p className="text-foreground/55 text-[14px] leading-relaxed mb-4">
          Ce cabinet d&apos;avocats monégasque intervient régulièrement sur des dossiers impliquant plusieurs juridictions : droit monégasque, droit français, droit suisse, droit luxembourgeois et common law britannique. Chaque recherche juridique nécessitait la consultation de bases de données distinctes pour chaque juridiction (Legimonaco, Légifrance, Swisslex, Legilux, Westlaw), avec des interfaces et des langues différentes.
        </p>
        <p className="text-foreground/55 text-[14px] leading-relaxed mb-12">
          Un collaborateur passait en moyenne deux heures par recherche pour couvrir l&apos;ensemble des juridictions pertinentes. La synthèse comparative exigeait ensuite un travail de mise en perspective des différences entre les régimes juridiques. Dans un contexte où la clientèle monégasque dispose fréquemment de structures dans plusieurs pays, cette capacité de recherche transversale est un facteur différenciant essentiel pour le cabinet.
        </p>
      </RevealOnScroll>

      {/* Section: Notre approche */}
      <RevealOnScroll>
        <h2 className="text-xl font-bold mb-5">Notre approche</h2>
        <div className="grid sm:grid-cols-3 gap-3 mb-12">
          <div className="p-5 rounded-2xl bg-surface border border-border">
            <span className="text-accent text-[10px] font-bold">Phase 1</span>
            <h3 className="text-[13px] font-semibold mt-1 mb-1">Indexation multi-sources</h3>
            <p className="text-foreground/45 text-[12px] leading-relaxed">Constitution d&apos;une base vectorielle RAG indexant les textes législatifs monégasques, la jurisprudence locale et les principaux codes étrangers pertinents pour la pratique du cabinet.</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border">
            <span className="text-accent text-[10px] font-bold">Phase 2</span>
            <h3 className="text-[13px] font-semibold mt-1 mb-1">Moteur de recherche IA</h3>
            <p className="text-foreground/45 text-[12px] leading-relaxed">Interface de requête en langage naturel alimentée par Claude, interrogeant simultanément toutes les sources indexées et restituant les résultats avec citations précises et liens vers les textes originaux.</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border">
            <span className="text-accent text-[10px] font-bold">Phase 3</span>
            <h3 className="text-[13px] font-semibold mt-1 mb-1">Synthèse comparative</h3>
            <p className="text-foreground/45 text-[12px] leading-relaxed">Génération automatique d&apos;un tableau comparatif entre juridictions, avec mise en évidence des convergences et divergences. Export Word pour intégration directe dans les notes juridiques.</p>
          </div>
        </div>
      </RevealOnScroll>

      {/* Section: Résultats détaillés */}
      <RevealOnScroll>
        <h2 className="text-xl font-bold mb-5">Résultats détaillés</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter value={10} suffix=" min" /></div>
            <p className="text-muted text-[11px] mt-1">Au lieu de 2 heures</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter value={5} suffix=" juridictions" /></div>
            <p className="text-muted text-[11px] mt-1">Consultées simultanément</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter prefix="-" value={92} suffix="%" /></div>
            <p className="text-muted text-[11px] mt-1">Temps de recherche</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter value={100} suffix="%" /></div>
            <p className="text-muted text-[11px] mt-1">Sources citées et traçables</p>
          </div>
        </div>
      </RevealOnScroll>

      {/* Section: Technologies utilisées */}
      <RevealOnScroll>
        <h2 className="text-xl font-bold mb-5">Technologies déployées</h2>
        <div className="flex flex-wrap gap-2 mb-12">
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">Claude</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">RAG (Pinecone)</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">Python</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">Next.js</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">Supabase</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">LangChain</span>
        </div>
      </RevealOnScroll>

      {/* Section: Related links */}
      <RevealOnScroll>
        <div className="flex flex-wrap gap-3">
          <Link href="/secteurs/cabinets-avocats" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Cabinets d&apos;avocats</Link>
          <Link href="/expertise/developpement-ia-sur-mesure" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">IA sur mesure</Link>
        </div>
      </RevealOnScroll>
    </CaseLayout>
  );
}
