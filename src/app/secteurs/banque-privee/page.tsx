import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import FAQ from "@/components/FAQ";
import FaqSchema from "@/components/FaqSchema";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IA pour la banque privée à Monaco",
  description:
    "Accélérez KYC, KYB et due diligence grâce à l'IA. Scoring risques, reporting réglementaire et anti-blanchiment pour banques privées à Monaco.",
  alternates: { canonical: "https://quantamonaco.com/secteurs/banque-privee" },
  openGraph: {
    title: "IA pour la banque privée à Monaco",
    description:
      "Accélérez KYC, KYB et due diligence grâce à l'IA. Scoring risques, reporting réglementaire et anti-blanchiment pour banques privées à Monaco.",
    url: "https://quantamonaco.com/secteurs/banque-privee",
    siteName: "Quanta",
    locale: "fr_FR",
    type: "website",
  },
};

const faqItems = [
  {
    q: "Comment garantissez-vous la sécurité des données bancaires ?",
    a: "Les données sont traitées dans un environnement cloisonné, hébergé sur cloud privé européen ou on-premise selon vos politiques de sécurité. Aucune donnée n'est partagée avec des modèles tiers. Nous respectons les exigences de souveraineté posées par les autorités monégasques et signons un accord de confidentialité renforcé avant toute mission. Le chiffrement est appliqué au repos et en transit.",
  },
  {
    q: "Vos agents remplacent-ils le compliance officer ?",
    a: "Non. L'agent IA automatise la collecte, la vérification et la mise en forme des données. La décision finale reste toujours entre les mains du compliance officer ou du banquier privé. L'IA agit comme un assistant qui prépare le travail, signale les anomalies et propose des actions, mais c'est l'humain qui valide et engage la responsabilité de l'établissement.",
  },
  {
    q: "Quels systèmes bancaires pouvez-vous intégrer ?",
    a: "Nous avons l'expérience des principaux core banking et outils de gestion utilisés dans les banques privées monégasques. L'intégration se fait via API, connecteurs dédiés ou extraction de fichiers. Nous travaillons en étroite collaboration avec votre équipe IT pour garantir une intégration sans disruption de vos opérations quotidiennes.",
  },
  {
    q: "Quel est le délai de déploiement pour une banque privée ?",
    a: "Le déploiement complet prend entre 6 et 12 semaines, selon le nombre de processus à automatiser et la complexité de votre infrastructure. Nous procédons par phases : audit initial, prototype sur un périmètre restreint, validation avec vos équipes, puis déploiement progressif. Chaque phase inclut des points de validation avec votre direction conformité.",
  },
  {
    q: "Comment l'IA gère-t-elle les PPE et les structures complexes ?",
    a: "L'agent est entraîné à identifier les personnes politiquement exposées selon les critères du GAFI et les listes spécifiques à Monaco. Pour les structures de détention complexes (trusts, fondations, chaînes de sociétés), il reconstruit l'organigramme de bénéficiaires effectifs et signale les niveaux de risque associés. Les cas ambigus sont systématiquement remontés au compliance officer avec un dossier argumenté.",
  },
];

export default function BanquePriveePage() {
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
                Intelligence artificielle pour la banque privée à Monaco
              </h1>
              <p className="text-foreground/60 text-[15px] leading-relaxed max-w-xl">
                Renforcez vos dispositifs KYC, de due diligence et de lutte anti-blanchiment tout en réduisant la charge opérationnelle de vos équipes conformité et back-office.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="animate-float">
                <div className="bg-dark rounded-2xl p-6 text-white shadow-2xl">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-white/40 mb-4 font-semibold">Surveillance conformité</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.04]">
                      <span className="text-[12px] text-white/60">Dossiers KYC traités</span>
                      <span className="text-[13px] font-bold text-emerald-400">217</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.04]">
                      <span className="text-[12px] text-white/60">Alertes PPE</span>
                      <span className="text-[13px] font-bold text-amber-400">3 en revue</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.04]">
                      <span className="text-[12px] text-white/60">Ops atypiques</span>
                      <span className="text-[13px] font-bold text-white/80">0 en attente</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.04]">
                      <span className="text-[12px] text-white/60">Rapport SICCFIN</span>
                      <span className="text-[13px] font-bold text-emerald-400">Prêt</span>
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
                  <AnimatedCounter prefix="-" value={70} suffix="%" />
                </div>
                <p className="text-muted text-[13px] mt-2">temps par dossier KYC</p>
              </div>
              <div className="p-6 rounded-2xl bg-surface border border-border text-center">
                <div className="text-3xl font-bold text-foreground">
                  <AnimatedCounter value={48} suffix="h" />
                </div>
                <p className="text-muted text-[13px] mt-2">délai réponse SICCFIN</p>
              </div>
              <div className="p-6 rounded-2xl bg-surface border border-border text-center">
                <div className="text-3xl font-bold text-foreground">
                  <AnimatedCounter value={0} />
                </div>
                <p className="text-muted text-[13px] mt-2">anomalie non détectée en contrôle</p>
              </div>
              <div className="p-6 rounded-2xl bg-surface border border-border text-center">
                <div className="text-3xl font-bold text-foreground">
                  <AnimatedCounter value={200} suffix="+" />
                </div>
                <p className="text-muted text-[13px] mt-2">relations onboardées par an</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Intro condensée */}
      <section className="section-padding section-light">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-xl font-bold mb-4">Le constat</h2>
                <p className="text-foreground/60 text-[14px] leading-relaxed">
                  Monaco accueille plus de trente établissements bancaires gérant des encours considérables pour une clientèle internationale. Un analyste conformité passe en moyenne 6 heures par dossier d&apos;onboarding. Les inspections du SICCFIN et de la CCAF exigent des audit trails complets et une traçabilité sans faille, ajoutant une pression croissante sur des équipes déjà sollicitées.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">L&apos;opportunité IA</h2>
                <p className="text-foreground/60 text-[14px] leading-relaxed">
                  Nos agents prennent en charge collecte, vérification et reporting. L&apos;extraction automatique (OCR intelligent, analyse de structures juridiques) réduit de 70 % le temps de traitement d&apos;un dossier KYC. Ils comprennent les spécificités monégasques : formulaires SICCFIN, attendus CCAF, structures SAM, SCI et trusts de droit étranger.
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
                <h3 className="text-[14px] font-semibold mb-2">Onboarding client accéléré</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Collecte de documents, extraction OCR, vérifications croisées et pré-remplissage du dossier KYC. Le compliance officer valide un dossier finalisé en quelques jours.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Due diligence renforcée</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Organigramme de détention, source des fonds, presse négative, screening sanctions (ONU, UE, OFAC). Rapport structuré avec score de risque argumenté.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Détection d&apos;opérations atypiques</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Analyse en temps réel des transactions : fractionnement, virements circulaires, montants incohérents. Alertes contextualisées pour le compliance officer.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Reporting réglementaire automatisé</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Production automatique des rapports périodiques au format SICCFIN et CCAF : déclarations, statistiques de conformité, indicateurs de risque.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Revue de portefeuille client</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Synthèse par client avant chaque comité : performance, mouvements récents, alertes conformité et suggestions d&apos;allocation. Vision complète et actualisée.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Correspondance réglementaire</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Rédaction assistée des réponses aux demandes SICCFIN/CCAF. Pièces rassemblées, projet structuré et soumis pour validation. Délai moyen : moins de 48 heures.
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
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span>6 heures par dossier d&apos;onboarding KYC</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span>Screening sanctions manuel et ponctuel</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span>5 jours pour répondre au SICCFIN</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span>Détection d&apos;opérations atypiques tardive</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span>Reportings produits manuellement</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl border border-emerald-200 bg-emerald-50/50">
                <p className="text-[12px] uppercase tracking-[0.15em] text-emerald-500 font-semibold mb-4">Avec Quanta</p>
                <ul className="space-y-3 text-[13px] text-foreground/60">
                  <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>Dossier KYC pré-rempli, validation en quelques clics</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>Screening continu en temps réel, alertes instantanées</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>Réponse SICCFIN en moins de 48 heures</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>Analyse transactionnelle en temps réel</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>Rapports générés au format requis, prêts à soumettre</li>
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
            <h2 className="text-xl font-bold mb-6">Questions fréquentes</h2>
            <FAQ items={faqItems} />
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="flex flex-wrap gap-3 mt-12">
              <Link href="/expertise/audit-strategie-ia" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Audit & stratégie</Link>
              <Link href="/expertise/developpement-ia-sur-mesure" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Développement IA sur mesure</Link>
              <Link href="/secteurs/gestion-patrimoine" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Gestion de patrimoine</Link>
              <Link href="/resultats" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Tous les résultats</Link>
              <Link href="/methode" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Notre méthode</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-background via-accent-light/30 to-accent/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">
              Transformez votre conformité en avantage concurrentiel
            </h2>
            <p className="text-foreground/60 text-[14px] mb-8">
              Échangeons sur vos défis réglementaires lors d&apos;un entretien confidentiel. Nous vous montrerons comment l&apos;IA peut renforcer votre dispositif sans compromettre la sécurité de vos données.
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
