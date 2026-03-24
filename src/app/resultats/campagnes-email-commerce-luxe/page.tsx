import type { Metadata } from "next";
import CaseLayout from "@/components/CaseLayout";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import { caseStudies } from "@/lib/cases";
import Link from "next/link";

const caseStudy = caseStudies.find((c) => c.slug === "campagnes-email-commerce-luxe")!;

export const metadata: Metadata = {
  title: `${caseStudy.title} | Cas client Factory`,
  description: "Une maison de luxe monégasque augmente de 35 % son taux d'ouverture email grâce à la segmentation IA et au contenu personnalisé déployés par Factory.",
  alternates: { canonical: `https://factory-ai.com/resultats/${caseStudy.slug}` },
};

export default function CasePage() {
  return (
    <CaseLayout caseStudy={caseStudy}>
      {/* Section: Le défi */}
      <RevealOnScroll>
        <h2 className="text-xl font-bold mb-5">Le défi</h2>
        <p className="text-foreground/55 text-[14px] leading-relaxed mb-4">
          Cette maison de joaillerie et horlogerie de luxe implantée à Monaco depuis trois générations dispose d&apos;une base clients de 2 500 contacts à fort pouvoir d&apos;achat. Les campagnes email, créées manuellement par la responsable marketing, suivaient un calendrier mensuel uniforme : même message envoyé à l&apos;ensemble de la base, sans personnalisation ni segmentation. Le taux d&apos;ouverture stagnait à 18 %, bien en dessous des standards du secteur luxe.
        </p>
        <p className="text-foreground/55 text-[14px] leading-relaxed mb-12">
          La clientèle de la Principauté attend une communication sur mesure, en cohérence avec l&apos;expérience exclusive vécue en boutique. Un client fidèle depuis dix ans recevait le même email qu&apos;un nouveau contact issu d&apos;un salon horloger. La direction souhaitait exploiter les données d&apos;achat et de comportement existantes dans leur CRM pour créer des parcours email véritablement personnalisés, sans recruter un data analyst ni investir dans une plateforme marketing complexe.
        </p>
      </RevealOnScroll>

      {/* Section: Notre approche */}
      <RevealOnScroll>
        <h2 className="text-xl font-bold mb-5">Notre approche</h2>
        <div className="grid sm:grid-cols-3 gap-3 mb-12">
          <div className="p-5 rounded-2xl bg-surface border border-border">
            <span className="text-accent text-[10px] font-bold">Phase 1</span>
            <h3 className="text-[13px] font-semibold mt-1 mb-1">Segmentation comportementale</h3>
            <p className="text-foreground/45 text-[12px] leading-relaxed">Analyse des données CRM pour créer des segments dynamiques basés sur l&apos;historique d&apos;achat, la fréquence de visite, les préférences de marque et le panier moyen. Six profils clients identifiés.</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border">
            <span className="text-accent text-[10px] font-bold">Phase 2</span>
            <h3 className="text-[13px] font-semibold mt-1 mb-1">Contenu généré par IA</h3>
            <p className="text-foreground/45 text-[12px] leading-relaxed">Rédaction automatique par GPT-4 de variantes d&apos;email adaptées à chaque segment, avec personnalisation du ton, des produits mis en avant et des offres. Validation par la directrice artistique.</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border">
            <span className="text-accent text-[10px] font-bold">Phase 3</span>
            <h3 className="text-[13px] font-semibold mt-1 mb-1">A/B testing et optimisation</h3>
            <p className="text-foreground/45 text-[12px] leading-relaxed">Workflow automatisé testant objets, visuels et horaires d&apos;envoi. Analyse des résultats par segment et optimisation continue des campagnes suivantes basée sur les données de performance.</p>
          </div>
        </div>
      </RevealOnScroll>

      {/* Section: Résultats détaillés */}
      <RevealOnScroll>
        <h2 className="text-xl font-bold mb-5">Résultats détaillés</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter prefix="+" value={35} suffix="%" /></div>
            <p className="text-muted text-[11px] mt-1">Taux d&apos;ouverture</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter prefix="+" value={22} suffix="%" /></div>
            <p className="text-muted text-[11px] mt-1">Taux de clic</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter value={6} suffix=" segments" /></div>
            <p className="text-muted text-[11px] mt-1">Profils clients identifiés</p>
          </div>
          <div className="p-5 rounded-2xl bg-surface border border-border text-center">
            <div className="text-2xl font-bold"><AnimatedCounter prefix="-" value={70} suffix="%" /></div>
            <p className="text-muted text-[11px] mt-1">Temps de création</p>
          </div>
        </div>
      </RevealOnScroll>

      {/* Section: Technologies utilisées */}
      <RevealOnScroll>
        <h2 className="text-xl font-bold mb-5">Technologies déployées</h2>
        <div className="flex flex-wrap gap-2 mb-12">
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">GPT-4</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">Make</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">Mailchimp API</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">Python</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">Supabase</span>
          <span className="text-[11px] text-foreground/50 bg-surface-dark px-3 py-1.5 rounded-lg">HubSpot CRM</span>
        </div>
      </RevealOnScroll>

      {/* Section: Related links */}
      <RevealOnScroll>
        <div className="flex flex-wrap gap-3">
          <Link href="/secteurs/commerce-luxe" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Commerce de luxe</Link>
          <Link href="/expertise/marketing-acquisition" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Marketing</Link>
        </div>
      </RevealOnScroll>
    </CaseLayout>
  );
}
