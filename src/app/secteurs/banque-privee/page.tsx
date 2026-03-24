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
    "Accelerez KYC, KYB et due diligence grace a l'IA. Scoring risques, reporting reglementaire et anti-blanchiment pour banques privees a Monaco.",
  alternates: { canonical: "https://factory-ai.com/secteurs/banque-privee" },
  openGraph: {
    title: "IA pour la banque privée à Monaco",
    description:
      "Accelerez KYC, KYB et due diligence grace a l'IA. Scoring risques, reporting reglementaire et anti-blanchiment pour banques privees a Monaco.",
    url: "https://factory-ai.com/secteurs/banque-privee",
    siteName: "Factory",
    locale: "fr_FR",
    type: "website",
  },
};

const faqItems = [
  {
    q: "Comment garantissez-vous la securite des donnees bancaires ?",
    a: "Les donnees sont traitees dans un environnement cloisonne, heberge sur cloud prive europeen ou on-premise selon vos politiques de securite. Aucune donnee n'est partagee avec des modeles tiers. Nous respectons les exigences de souverainete posees par les autorites monegasques et signons un accord de confidentialite renforce avant toute mission. Le chiffrement est applique au repos et en transit.",
  },
  {
    q: "Vos agents remplacent-ils le compliance officer ?",
    a: "Non. L'agent IA automatise la collecte, la verification et la mise en forme des donnees. La decision finale reste toujours entre les mains du compliance officer ou du banquier prive. L'IA agit comme un assistant qui prepare le travail, signale les anomalies et propose des actions, mais c'est l'humain qui valide et engage la responsabilite de l'etablissement.",
  },
  {
    q: "Quels systemes bancaires pouvez-vous integrer ?",
    a: "Nous avons l'experience des principaux core banking et outils de gestion utilises dans les banques privees monegasques. L'integration se fait via API, connecteurs dedies ou extraction de fichiers. Nous travaillons en etroite collaboration avec votre equipe IT pour garantir une integration sans disruption de vos operations quotidiennes.",
  },
  {
    q: "Quel est le delai de deploiement pour une banque privee ?",
    a: "Le deploiement complet prend entre 6 et 12 semaines, selon le nombre de processus a automatiser et la complexite de votre infrastructure. Nous procedons par phases : audit initial, prototype sur un perimetre restreint, validation avec vos equipes, puis deploiement progressif. Chaque phase inclut des points de validation avec votre direction conformite.",
  },
  {
    q: "Comment l'IA gere-t-elle les PPE et les structures complexes ?",
    a: "L'agent est entraine a identifier les personnes politiquement exposees selon les criteres du GAFI et les listes specifiques a Monaco. Pour les structures de detention complexes (trusts, fondations, chaines de societes), il reconstruit l'organigramme de beneficiaires effectifs et signale les niveaux de risque associes. Les cas ambigus sont systematiquement remontes au compliance officer avec un dossier argumente.",
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
                Intelligence artificielle pour la banque privee a Monaco
              </h1>
              <p className="text-foreground/60 text-[15px] leading-relaxed max-w-xl">
                Renforcez vos dispositifs KYC, de due diligence et de lutte anti-blanchiment tout en reduisant la charge operationnelle de vos equipes conformite et back-office.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="animate-float">
                <div className="bg-dark rounded-2xl p-6 text-white shadow-2xl">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-white/40 mb-4 font-semibold">Surveillance conformite</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.04]">
                      <span className="text-[12px] text-white/60">Dossiers KYC traites</span>
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
                      <span className="text-[13px] font-bold text-emerald-400">Pret</span>
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
                <p className="text-muted text-[13px] mt-2">delai reponse SICCFIN</p>
              </div>
              <div className="p-6 rounded-2xl bg-surface border border-border text-center">
                <div className="text-3xl font-bold text-foreground">
                  <AnimatedCounter value={0} />
                </div>
                <p className="text-muted text-[13px] mt-2">anomalie non detectee en controle</p>
              </div>
              <div className="p-6 rounded-2xl bg-surface border border-border text-center">
                <div className="text-3xl font-bold text-foreground">
                  <AnimatedCounter value={200} suffix="+" />
                </div>
                <p className="text-muted text-[13px] mt-2">relations onboardees par an</p>
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
                  Monaco accueille plus de trente etablissements bancaires gerant des encours considerables pour une clientele internationale. Un analyste conformite passe en moyenne 6 heures par dossier d'onboarding. Les inspections du SICCFIN et de la CCAF exigent des audit trails complets et une tracabilite sans faille, ajoutant une pression croissante sur des equipes deja sollicitees.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">L'opportunite IA</h2>
                <p className="text-foreground/60 text-[14px] leading-relaxed">
                  Nos agents prennent en charge collecte, verification et reporting. L'extraction automatique (OCR intelligent, analyse de structures juridiques) reduit de 70 % le temps de traitement d'un dossier KYC. Ils comprennent les specificites monegasques : formulaires SICCFIN, attendus CCAF, structures SAM, SCI et trusts de droit etranger.
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
                <h3 className="text-[14px] font-semibold mb-2">Onboarding client accelere</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Collecte de documents, extraction OCR, verifications croisees et pre-remplissage du dossier KYC. Le compliance officer valide un dossier finalise en quelques jours.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Due diligence renforcee</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Organigramme de detention, source des fonds, presse negative, screening sanctions (ONU, UE, OFAC). Rapport structure avec score de risque argumente.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Detection d'operations atypiques</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Analyse en temps reel des transactions : fractionnement, virements circulaires, montants incoherents. Alertes contextualisees pour le compliance officer.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Reporting reglementaire automatise</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Production automatique des rapports periodiques au format SICCFIN et CCAF : declarations, statistiques de conformite, indicateurs de risque.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Revue de portefeuille client</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Synthese par client avant chaque comite : performance, mouvements recents, alertes conformite et suggestions d'allocation. Vision complete et actualisee.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Correspondance reglementaire</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Redaction assistee des reponses aux demandes SICCFIN/CCAF. Pieces rassemblees, projet structure et soumis pour validation. Delai moyen : moins de 48 heures.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Comparaison Sans IA vs Avec Factory */}
      <section className="section-padding section-surface">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-8 text-center">Sans IA vs Avec Factory</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl border border-red-200 bg-red-50/50">
                <p className="text-[12px] uppercase tracking-[0.15em] text-red-400 font-semibold mb-4">Sans IA</p>
                <ul className="space-y-3 text-[13px] text-foreground/60">
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span>6 heures par dossier d'onboarding KYC</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span>Screening sanctions manuel et ponctuel</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span>5 jours pour repondre au SICCFIN</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span>Detection d'operations atypiques tardive</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span>Reportings produits manuellement</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl border border-emerald-200 bg-emerald-50/50">
                <p className="text-[12px] uppercase tracking-[0.15em] text-emerald-500 font-semibold mb-4">Avec Factory</p>
                <ul className="space-y-3 text-[13px] text-foreground/60">
                  <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>Dossier KYC pre-rempli, validation en quelques clics</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>Screening continu en temps reel, alertes instantanees</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>Reponse SICCFIN en moins de 48 heures</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>Analyse transactionnelle en temps reel</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>Rapports generes au format requis, prets a soumettre</li>
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
              <Link href="/secteurs/gestion-patrimoine" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Gestion de patrimoine</Link>
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
              Transformez votre conformite en avantage concurrentiel
            </h2>
            <p className="text-foreground/60 text-[14px] mb-8">
              Echangeons sur vos defis reglementaires lors d'un entretien confidentiel. Nous vous montrerons comment l'IA peut renforcer votre dispositif sans compromettre la securite de vos donnees.
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
