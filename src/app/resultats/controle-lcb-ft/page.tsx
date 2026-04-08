import type { Metadata } from "next";
import CaseLayout from "@/components/CaseLayout";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import { caseStudies } from "@/lib/cases";
import Link from "next/link";

const caseStudy = caseStudies.find((c) => c.slug === "controle-lcb-ft")!;

export const metadata: Metadata = {
  title: `${caseStudy.title} | Cas client Quanta`,
  description: "Une société de gestion monégasque réduit de 90 % le temps de vérification LCB-FT grâce au filtrage automatisé et au scoring de risque déployés par Quanta.",
  alternates: { canonical: `https://quantamonaco.com/resultats/${caseStudy.slug}` },
};

export default function CasePage() {
  return (
    <CaseLayout caseStudy={caseStudy}>
      {/* Section: Le défi */}
      <RevealOnScroll>
        <h2 className="text-xl font-bold mb-5">Le défi</h2>
        <p className="text-foreground/55 text-[14px] leading-relaxed mb-4">
          Cette société de gestion agréée par la CCAF à Monaco doit se conformer aux obligations strictes de lutte contre le blanchiment de capitaux et le financement du terrorisme (LCB-FT). Chaque nouveau client, bénéficiaire effectif et opération significative doit faire l&apos;objet d&apos;une vérification contre les listes de sanctions internationales (ONU, UE, OFAC), les registres de Personnes Politiquement Exposées (PEP) et les bases de presse négative.
        </p>
        <p className="text-foreground/55 text-[14px] leading-relaxed mb-12">
          Avec un portefeuille de 120 clients et leurs structures associées, le responsable conformité passait en moyenne 45 minutes par vérification initiale et devait procéder à des revues périodiques tous les six mois. Les faux positifs étaient nombreux sur les patronymes courants, obligeant à des investigations complémentaires chronophages. Monaco, en tant que place financière soumise au regard de Moneyval, impose un niveau d&apos;exigence particulièrement élevé que le cabinet souhaitait satisfaire sans multiplier les effectifs.
        </p>
      </RevealOnScroll>

      {/* Section: Notre approche */}
      <RevealOnScroll>
        <h2 className="text-xl font-bold mb-5">Notre approche</h2>
        <div className="grid sm:grid-cols-3 gap-3 mb-12">
          <div className="p-5 rounded-2xl bg-surface border border-border">
            <span className="text-accent text-[10px] font-bold">Phase 1</span>
            <h3 className="text-[13px] font-semibold mt-1 mb-1">Intégration multi-sources</h3>
            <p className="text-foreground/45 text-[12px] leading-relaxed">Connexion aux API des listes de sanctions (ONU, UE, OFAC, UK Treasury), aux bases PEP et aux services de screening de presse négative via un hub centralisé.</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border">
            <span className="text-accent text-[10px] font-bold">Phase 2</span>
            <h3 className="text-[13px] font-semibold mt-1 mb-1">Scoring de risque intelligent</h3>
            <p className="text-foreground/45 text-[12px] leading-relaxed">Algorithme de matching pondéré combinant similarité phonétique, date de naissance et nationalité pour réduire les faux positifs. Score de risque paramétrable selon la politique interne du cabinet.</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border">
            <span className="text-accent text-[10px] font-bold">Phase 3</span>
            <h3 className="text-[13px] font-semibold mt-1 mb-1">Piste d&apos;audit complète</h3>
            <p className="text-foreground/45 text-[12px] leading-relaxed">Historisation de chaque vérification avec horodatage, sources consultées, résultats et décision du responsable conformité. Export PDF pour les contrôles CCAF.</p>
          </div>
        </div>
      </RevealOnScroll>

      {/* Section: Résultats détaillés */}
      <RevealOnScroll>
        <h2 className="text-xl font-bold mb-5">Résultats détaillés</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter prefix="-" value={90} suffix="%" /></div>
            <p className="text-muted text-[11px] mt-1">Temps de vérification</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter prefix="-" value={75} suffix="%" /></div>
            <p className="text-muted text-[11px] mt-1">Faux positifs</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter value={120} suffix="+" /></div>
            <p className="text-muted text-[11px] mt-1">Clients monitorés en continu</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter value={100} suffix="%" /></div>
            <p className="text-muted text-[11px] mt-1">Traçabilité des contrôles</p>
          </div>
        </div>
      </RevealOnScroll>

      {/* Section: Technologies utilisées */}
      <RevealOnScroll>
        <h2 className="text-xl font-bold mb-5">Technologies déployées</h2>
        <div className="flex flex-wrap gap-2 mb-12">
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">Python</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">Claude</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">Supabase</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">Next.js</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">API sanctions (ONU, UE, OFAC)</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">n8n</span>
        </div>
      </RevealOnScroll>

      {/* Section: Related links */}
      <RevealOnScroll>
        <div className="flex flex-wrap gap-3">
          <Link href="/secteurs/gestion-patrimoine" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Gestion de patrimoine</Link>
          <Link href="/expertise/developpement-ia-sur-mesure" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">IA sur mesure</Link>
        </div>
      </RevealOnScroll>
    </CaseLayout>
  );
}
