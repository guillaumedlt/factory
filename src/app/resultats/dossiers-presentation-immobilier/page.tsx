import type { Metadata } from "next";
import CaseLayout from "@/components/CaseLayout";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import { caseStudies } from "@/lib/cases";
import Link from "next/link";

const caseStudy = caseStudies.find((c) => c.slug === "dossiers-presentation-immobilier")!;

export const metadata: Metadata = {
  title: `${caseStudy.title} | Cas client Factory`,
  description: "Une agence immobilière de luxe à Monaco génère ses dossiers de présentation en 45 minutes au lieu d'une journée grâce à l'automatisation Factory.",
  alternates: { canonical: `https://factory-ai.com/resultats/${caseStudy.slug}` },
};

export default function CasePage() {
  return (
    <CaseLayout caseStudy={caseStudy}>
      {/* Section: Le défi */}
      <RevealOnScroll>
        <h2 className="text-xl font-bold mb-5">Le défi</h2>
        <p className="text-foreground/55 text-[14px] leading-relaxed mb-4">
          Cette agence immobilière de prestige, spécialisée dans les biens haut de gamme en Principauté de Monaco, produit chaque semaine des dossiers de présentation destinés à sa clientèle internationale. Chaque dossier comprend une description détaillée du bien, des plans, des visuels haute résolution, les données cadastrales, l&apos;historique des prix au mètre carré dans le quartier et une analyse comparative avec les biens similaires récemment commercialisés.
        </p>
        <p className="text-foreground/55 text-[14px] leading-relaxed mb-12">
          La production d&apos;un seul dossier mobilisait un agent pendant une journée complète : collecte d&apos;informations auprès du propriétaire, recherche de données de marché, sélection et retouche des photos, rédaction bilingue français-anglais et mise en page. Sur un marché aussi compétitif que celui de Monaco, où un bien d&apos;exception peut se vendre en quelques jours, la rapidité de production d&apos;un dossier professionnel constitue un avantage concurrentiel décisif.
        </p>
      </RevealOnScroll>

      {/* Section: Notre approche */}
      <RevealOnScroll>
        <h2 className="text-xl font-bold mb-5">Notre approche</h2>
        <div className="grid sm:grid-cols-3 gap-3 mb-12">
          <div className="p-5 rounded-2xl bg-surface border border-border">
            <span className="text-accent text-[10px] font-bold">Phase 1</span>
            <h3 className="text-[13px] font-semibold mt-1 mb-1">Template intelligent</h3>
            <p className="text-foreground/45 text-[12px] leading-relaxed">Création d&apos;un template dynamique intégrant la charte graphique de l&apos;agence, avec zones automatiques pour les visuels, plans, données chiffrées et descriptions bilingues.</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border">
            <span className="text-accent text-[10px] font-bold">Phase 2</span>
            <h3 className="text-[13px] font-semibold mt-1 mb-1">Rédaction IA bilingue</h3>
            <p className="text-foreground/45 text-[12px] leading-relaxed">Assistant Claude générant les descriptions en français et anglais à partir des caractéristiques du bien, avec un ton adapté au segment luxe et des références aux quartiers monégasques.</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border">
            <span className="text-accent text-[10px] font-bold">Phase 3</span>
            <h3 className="text-[13px] font-semibold mt-1 mb-1">Assemblage automatique</h3>
            <p className="text-foreground/45 text-[12px] leading-relaxed">Pipeline de génération PDF intégrant les visuels uploadés, les données de marché et les descriptions IA dans le template, avec export prêt à l&apos;envoi en un clic.</p>
          </div>
        </div>
      </RevealOnScroll>

      {/* Section: Résultats détaillés */}
      <RevealOnScroll>
        <h2 className="text-xl font-bold mb-5">Résultats détaillés</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter value={45} suffix=" min" /></div>
            <p className="text-muted text-[11px] mt-1">Au lieu d&apos;une journée</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter value={2} suffix=" langues" /></div>
            <p className="text-muted text-[11px] mt-1">Français et anglais</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter prefix="x" value={3} /></div>
            <p className="text-muted text-[11px] mt-1">Plus de dossiers produits / semaine</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter value={4} suffix=" sem." /></div>
            <p className="text-muted text-[11px] mt-1">Délai de mise en production</p>
          </div>
        </div>
      </RevealOnScroll>

      {/* Section: Technologies utilisées */}
      <RevealOnScroll>
        <h2 className="text-xl font-bold mb-5">Technologies déployées</h2>
        <div className="flex flex-wrap gap-2 mb-12">
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">Claude</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">Next.js</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">Puppeteer</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">Cloudinary</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">Supabase</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">Vercel</span>
        </div>
      </RevealOnScroll>

      {/* Section: Related links */}
      <RevealOnScroll>
        <div className="flex flex-wrap gap-3">
          <Link href="/secteurs/immobilier-luxe" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Immobilier de luxe</Link>
          <Link href="/expertise/outils-internes" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Outils internes</Link>
        </div>
      </RevealOnScroll>
    </CaseLayout>
  );
}
