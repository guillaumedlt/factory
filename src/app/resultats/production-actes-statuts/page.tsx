import type { Metadata } from "next";
import CaseLayout from "@/components/CaseLayout";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import { caseStudies } from "@/lib/cases";
import Link from "next/link";

const caseStudy = caseStudies.find((c) => c.slug === "production-actes-statuts")!;

export const metadata: Metadata = {
  title: `${caseStudy.title} | Cas client Quanta`,
  description: "Un cabinet juridique monégasque réduit de 80 % le temps de rédaction de statuts grâce à un assistant IA calibré sur le droit monégasque par Quanta.",
  alternates: { canonical: `https://quantamonaco.com/resultats/${caseStudy.slug}` },
};

export default function CasePage() {
  return (
    <CaseLayout caseStudy={caseStudy}>
      {/* Section: Le défi */}
      <RevealOnScroll>
        <h2 className="text-xl font-bold mb-5">Le défi</h2>
        <p className="text-foreground/55 text-[14px] leading-relaxed mb-4">
          Ce cabinet juridique monégasque, composé de cinq avocats et deux collaborateurs, produit en moyenne 15 jeux de statuts par mois pour des créations de SAM, SCS et sociétés civiles. Chaque rédaction nécessitait trois heures de travail qualifié : recherche des clauses applicables au droit monégasque, adaptation aux souhaits spécifiques du client, vérification de la conformité avec les dernières ordonnances souveraines et mise en forme selon les standards du Greffe du Tribunal de Première Instance.
        </p>
        <p className="text-foreground/55 text-[14px] leading-relaxed mb-12">
          La particularité du droit monégasque impose des formulations précises qui divergent du droit français. Les collaborateurs perdaient un temps considérable à vérifier les spécificités locales : droit de préemption de l&apos;État, clauses d&apos;agrément obligatoires, mentions relatives au RCI (Répertoire du Commerce et de l&apos;Industrie). Le cabinet souhaitait accélérer la production sans compromettre la rigueur juridique qui fait sa réputation sur la place monégasque.
        </p>
      </RevealOnScroll>

      {/* Section: Notre approche */}
      <RevealOnScroll>
        <h2 className="text-xl font-bold mb-5">Notre approche</h2>
        <div className="grid sm:grid-cols-3 gap-3 mb-12">
          <div className="p-5 rounded-2xl bg-surface border border-border">
            <span className="text-accent text-[10px] font-bold">Phase 1</span>
            <h3 className="text-[13px] font-semibold mt-1 mb-1">Constitution du corpus juridique</h3>
            <p className="text-foreground/45 text-[12px] leading-relaxed">Indexation de 200 actes validés du cabinet, des ordonnances souveraines pertinentes et de la jurisprudence monégasque dans une base vectorielle RAG dédiée.</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border">
            <span className="text-accent text-[10px] font-bold">Phase 2</span>
            <h3 className="text-[13px] font-semibold mt-1 mb-1">Assistant de rédaction IA</h3>
            <p className="text-foreground/45 text-[12px] leading-relaxed">Développement d&apos;un assistant Claude alimenté par RAG, capable de générer un premier jet de statuts complet à partir d&apos;un questionnaire structuré rempli par le collaborateur.</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border">
            <span className="text-accent text-[10px] font-bold">Phase 3</span>
            <h3 className="text-[13px] font-semibold mt-1 mb-1">Validation et itération</h3>
            <p className="text-foreground/45 text-[12px] leading-relaxed">Workflow de relecture avec traçabilité des modifications, export Word formaté pour le Greffe et boucle de feedback pour améliorer le modèle en continu.</p>
          </div>
        </div>
      </RevealOnScroll>

      {/* Section: Résultats détaillés */}
      <RevealOnScroll>
        <h2 className="text-xl font-bold mb-5">Résultats détaillés</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter prefix="-" value={80} suffix="%" /></div>
            <p className="text-muted text-[11px] mt-1">Temps de rédaction</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter value={5} suffix=" min" /></div>
            <p className="text-muted text-[11px] mt-1">Pour un premier jet complet</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter value={200} suffix="+" /></div>
            <p className="text-muted text-[11px] mt-1">Actes dans le corpus RAG</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter value={30} suffix=" min" /></div>
            <p className="text-muted text-[11px] mt-1">Finalisation par l&apos;avocat</p>
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
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">Docx-templater</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">Supabase</span>
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
