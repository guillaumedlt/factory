import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import FAQ from "@/components/FAQ";
import FaqSchema from "@/components/FaqSchema";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IA gestion de patrimoine à Monaco",
  description:
    "Automatisez conformité LCB-FT, KYC, reportings clients et échéanciers obligataires pour family offices et SGP à Monaco. Agents IA sur mesure.",
  alternates: { canonical: "https://quantamonaco.com/secteurs/gestion-patrimoine" },
  openGraph: {
    title: "IA gestion de patrimoine à Monaco",
    description:
      "Automatisez conformité LCB-FT, KYC, reportings clients et échéanciers obligataires pour family offices et SGP à Monaco. Agents IA sur mesure.",
    url: "https://quantamonaco.com/secteurs/gestion-patrimoine",
    siteName: "Quanta",
    locale: "fr_FR",
    type: "website",
  },
};

const faqItems = [
  {
    q: "Vos agents IA sont-ils conformes aux exigences du SICCFIN ?",
    a: "Oui. Nos agents sont concus pour respecter le cadre defini par la loi n° 1.362 et l'ordonnance souveraine n° 2.318. Chaque action est tracee dans un audit trail complet, les donnees sont hebergees dans l'espace europeen, et les regles de screening sont alignees sur les listes de sanctions applicables a Monaco. Nous accompagnons egalement nos clients lors des preparations aux controles CCAF.",
  },
  {
    q: "Combien de temps faut-il pour deployer un agent IA dans un family office ?",
    a: "Le deploiement initial prend entre 4 et 8 semaines selon la complexite de vos processus et le nombre d'outils a integrer. Nous commencons par un audit de vos flux existants, puis nous configurons et entrainons l'agent sur vos donnees. La phase de validation se fait conjointement avec votre equipe conformite avant la mise en production.",
  },
  {
    q: "Mes donnees clients restent-elles confidentielles ?",
    a: "Absolument. Les donnees sont traitees dans un environnement cloisonne, sans transfert vers des modeles tiers. Nous proposons un hebergement sur cloud prive europeen ou on-premise selon vos exigences. Aucune donnee client n'est utilisee pour entrainer des modeles externes. Nous signons systematiquement un accord de confidentialite avant le demarrage de toute mission.",
  },
  {
    q: "Vos solutions s'integrent-elles avec nos outils de gestion de portefeuille ?",
    a: "Oui. Nous avons l'experience des principaux PMS et outils de gestion utilises en Principaute. L'integration se fait via API ou connecteurs dedies, sans modification de vos systemes existants. Si votre outil ne dispose pas d'API, nous pouvons travailler par extraction de fichiers ou par automatisation d'interface.",
  },
  {
    q: "Quel est le cout d'un agent IA pour la gestion de patrimoine ?",
    a: "Le cout depend du nombre de processus automatises et du volume de dossiers traites. Nous proposons un modele de facturation mensuel, sans engagement longue duree, qui inclut la maintenance, les mises a jour reglementaires et le support. Un premier entretien gratuit permet d'evaluer le perimetre et de fournir une estimation precise.",
  },
];

export default function GestionPatrimoinePage() {
  return (
    <PageLayout>
      <FaqSchema items={faqItems} />

      {/* Hero */}
      <div className="pt-32 pb-10 sm:pt-36 sm:pb-16 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_340px] gap-10 items-center">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted font-semibold">Secteur</span>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3 mb-4">
                Intelligence artificielle pour la gestion de patrimoine a Monaco
              </h1>
              <p className="text-foreground/60 text-[15px] leading-relaxed max-w-xl">
                Family offices, SGP et societes de gestion : automatisez vos obligations reglementaires, votre collecte documentaire et vos reportings clients grace a des agents IA adaptes au cadre monegasque.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="animate-float">
                <div className="bg-dark rounded-2xl p-6 text-white shadow-2xl">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-white/40 mb-4 font-semibold">Tableau de bord patrimoine</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.04]">
                      <span className="text-[12px] text-white/60">Dossiers KYC a jour</span>
                      <span className="text-[13px] font-bold text-emerald-400">95 %</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.04]">
                      <span className="text-[12px] text-white/60">Revues periodiques</span>
                      <span className="text-[13px] font-bold text-amber-400">12 en cours</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.04]">
                      <span className="text-[12px] text-white/60">Alertes sanctions</span>
                      <span className="text-[13px] font-bold text-white/80">0 en attente</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.04]">
                      <span className="text-[12px] text-white/60">Reportings Q1</span>
                      <span className="text-[13px] font-bold text-emerald-400">Generes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics dashboard */}
      <section className="section-padding section-surface">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="p-6 rounded-2xl bg-surface border border-border text-center">
                <div className="text-3xl font-bold text-foreground">
                  <AnimatedCounter prefix="-" value={62} suffix="%" />
                </div>
                <p className="text-muted text-[13px] mt-2">temps KYC et revue periodique</p>
              </div>
              <div className="p-6 rounded-2xl bg-surface border border-border text-center">
                <div className="text-3xl font-bold text-foreground">
                  <AnimatedCounter value={95} suffix="%" />
                </div>
                <p className="text-muted text-[13px] mt-2">completude documentaire</p>
              </div>
              <div className="p-6 rounded-2xl bg-surface border border-border text-center">
                <div className="text-3xl font-bold text-foreground">
                  <AnimatedCounter value={4} suffix="h/sem" />
                </div>
                <p className="text-muted text-[13px] mt-2">economisees par gerant</p>
              </div>
              <div className="p-6 rounded-2xl bg-surface border border-border text-center">
                <div className="text-3xl font-bold text-foreground">
                  <AnimatedCounter value={0} />
                </div>
                <p className="text-muted text-[13px] mt-2">anomalie non detectee en controle</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Intro condensee */}
      <section className="section-padding section-light">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-xl font-bold mb-4">Le constat</h2>
                <p className="text-foreground/60 text-[14px] leading-relaxed">
                  La Principaute impose aux acteurs du patrimoine des regles strictes supervisees par le SICCFIN et la CCAF. Conformite LCB-FT, echange automatique CRS, revues periodiques : un responsable conformite consacre en moyenne 40 % de son temps a la collecte et a la verification documentaire. Pour une structure gerant 50 a 200 relations, la charge devient insoutenable sans automatisation.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">L'opportunite IA</h2>
                <p className="text-foreground/60 text-[14px] leading-relaxed">
                  Nos agents s'integrent a vos outils existants (PMS, GED, messagerie) pour automatiser la collecte de justificatifs, croiser les listes de sanctions en temps reel et generer des fiches de vigilance conformes. Notre connaissance des formulaires du SICCFIN et des attendus de la CCAF nous differencie des solutions generiques. Gain moyen constate : plus de 60 % sur les processus KYC.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Use cases - dark bubble */}
      <section className="bg-dark text-white rounded-[2rem] mx-4 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-6">Ce que nous automatisons</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Collecte documentaire automatisee</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Envoi de demandes, relances automatiques a J+7 et J+14, extraction des informations cles et classement dans votre GED. Taux de completude : de 65 % a plus de 95 %.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Screening et listes de sanctions</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Verification continue des beneficiaires effectifs contre les listes ONU, UE, OFAC et monegasques. Alertes structurees avec niveau de risque et mesures recommandees.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Echeanciers obligataires intelligents</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Suivi automatise des tombees de coupons, dates de call et maturites. Tableau de bord consolide chaque lundi, alertes a J-30, J-15 et J-5.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Reporting client multidevise</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Rapports de performance trimestriels en EUR, USD et CHF integrant benchmarks, frais de gestion et commentaires de marche. Conformes aux normes GIPS.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Revue periodique des dossiers</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Planification et declenchement automatique selon le profil de risque. Pre-remplissage des formulaires, signalement des ecarts et documents expires.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Veille reglementaire monegasque</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Surveillance quotidienne du Journal de Monaco, du SICCFIN et de la CCAF. Resumes avec analyse d'impact et recommandations concretes.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Comparaison Sans IA vs Avec Quanta */}
      <section className="section-padding section-surface">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-8 text-center">Sans IA vs Avec Quanta</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl border border-red-200 bg-red-50/50">
                <p className="text-[12px] uppercase tracking-[0.15em] text-red-400 font-semibold mb-4">Sans IA</p>
                <ul className="space-y-3 text-[13px] text-foreground/60">
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span>Collecte documentaire manuelle, relances oubliees</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span>40 % du temps conformite en verification de pieces</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span>Screening sanctions ponctuel, risque de retard</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span>Reportings produits manuellement sur Excel</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span>Echeances suivies dans des tableaux disperses</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl border border-emerald-200 bg-emerald-50/50">
                <p className="text-[12px] uppercase tracking-[0.15em] text-emerald-500 font-semibold mb-4">Avec Quanta</p>
                <ul className="space-y-3 text-[13px] text-foreground/60">
                  <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>Collecte automatisee avec relances a J+7 et J+14</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>95 % de completude documentaire sans effort</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>Screening continu en temps reel, alertes instantanees</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>Rapports generes automatiquement, valides en un clic</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>Dashboard centralise avec alertes a J-30, J-15, J-5</li>
                </ul>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding section-tinted">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-6">Questions frequentes</h2>
            <FAQ items={faqItems} />
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="flex flex-wrap gap-3 mt-12">
              <Link href="/expertise/audit-strategie-ia" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Audit & strategie</Link>
              <Link href="/expertise/developpement-ia-sur-mesure" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Developpement IA sur mesure</Link>
              <Link href="/secteurs/banque-privee" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Banque privee</Link>
              <Link href="/resultats" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Tous les resultats</Link>
              <Link href="/methode" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Notre methode</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-background via-accent-light/30 to-accent/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">
              Securisez votre conformite et liberez du temps pour la relation client
            </h2>
            <p className="text-foreground/60 text-[14px] mb-8">
              Discutons de vos enjeux reglementaires et operationnels lors d'un entretien confidentiel de 30 minutes, sans engagement.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/33645636107"
                className="group bg-accent text-dark font-semibold px-6 py-3 rounded-xl text-[13px] hover:bg-accent-dark transition-all inline-flex items-center gap-2 shadow-lg shadow-accent/20"
              >
                Solliciter un entretien
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <Link
                href="/secteurs"
                className="bg-surface text-foreground font-medium px-6 py-3 rounded-xl text-[13px] border border-border hover:border-foreground/20 transition-all"
              >
                Tous nos secteurs
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </PageLayout>
  );
}
