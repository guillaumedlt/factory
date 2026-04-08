import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ExpertiseHero from "@/components/ExpertiseHero";
import { AutomatisationIllustration } from "@/components/ExpertiseIllustration";
import FAQ from "@/components/FAQ";
import FaqSchema from "@/components/FaqSchema";
import RevealOnScroll from "@/components/RevealOnScroll";
import StepTimeline from "@/components/StepTimeline";
import AnimatedCounter from "@/components/AnimatedCounter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Automatisation des processus par IA à Monaco",
  description:
    "Automatisation intelligente pour entreprises monégasques. Extraction documentaire, classification, conformité KYC/AML et workflows orchestrés par IA.",
  alternates: { canonical: "https://quantamonaco.com/expertise/automatisation-processus" },
  openGraph: {
    title: "Automatisation des processus par IA à Monaco",
    description:
      "Automatisation intelligente pour entreprises monégasques. Extraction documentaire, classification, conformité KYC/AML et workflows orchestrés par IA.",
    url: "https://quantamonaco.com/expertise/automatisation-processus",
    siteName: "Quanta",
    locale: "fr_FR",
    type: "website",
  },
};

const steps = [
  {
    title: "Identification des processus",
    text: "Analyse détaillée de vos flux de travail pour identifier les tâches répétitives, chronophages et sujettes aux erreurs. Priorisation selon le volume, la fréquence et l'impact business.",
  },
  {
    title: "Conception du workflow",
    text: "Architecture du pipeline d'automatisation avec définition des règles métier, des seuils de confiance et des points de validation humaine. Intégration avec vos outils existants.",
  },
  {
    title: "Prototypage rapide",
    text: "Livraison d'un prototype fonctionnel en 2 à 3 semaines sur un échantillon réel de vos données. Validation de la précision et de la pertinence avec vos équipes métier.",
  },
  {
    title: "Entraînement sur vos données",
    text: "Fine-tuning des modèles IA sur votre corpus documentaire spécifique. Adaptation au jargon métier, aux formats utilisés et aux particularités des documents monégasques.",
  },
  {
    title: "Déploiement progressif",
    text: "Mise en production par lots avec montée en charge contrôlée. Surveillance continue des performances et ajustements en temps réel. Formation des utilisateurs à chaque étape.",
  },
  {
    title: "Monitoring et amélioration",
    text: "Tableau de bord de suivi des performances : volume traité, taux de précision, temps gagné, cas escaladés. Amélioration continue des modèles basée sur les retours terrain.",
  },
];

const faqItems = [
  {
    q: "Quels processus peuvent être automatisés par IA dans une entreprise à Monaco ?",
    a: "Toute tâche répétitive qui suit des règles identifiables est candidate à l'automatisation : extraction de données depuis des documents, classification de courriers, vérification de conformité, génération de rapports, suivi des échéances contractuelles, traitement des demandes clients standard. Les secteurs les plus concernés à Monaco sont la finance, le juridique, l'immobilier de luxe et l'hôtellerie haut de gamme.",
  },
  {
    q: "L'automatisation IA va-t-elle remplacer mes collaborateurs ?",
    a: "Non. Notre approche vise à augmenter vos équipes, pas à les remplacer. L'IA prend en charge les tâches répétitives et à faible valeur ajoutée (saisie, tri, vérification manuelle) pour que vos collaborateurs se concentrent sur la relation client, l'analyse, la stratégie et la prise de décision. Les cas complexes ou ambigus sont toujours traités par un humain. Le résultat est une équipe plus efficace et plus satisfaite.",
  },
  {
    q: "Combien de temps faut-il pour automatiser un processus ?",
    a: "Un processus simple (extraction documentaire, classification d'emails) peut être automatisé en 3 à 4 semaines, prototype inclus. Un workflow complexe impliquant plusieurs systèmes et des règles métier spécifiques prend 6 à 10 semaines. Nous livrons toujours un prototype fonctionnel dans les 2 à 3 premières semaines pour valider l'approche avant d'investir dans le développement complet.",
  },
  {
    q: "Mes données sont-elles en sécurité avec une automatisation IA ?",
    a: "La sécurité des données est au coeur de notre approche, surtout pour les entreprises monégasques soumises à des obligations de confidentialité strictes. Chaque solution est déployée avec chiffrement de bout en bout, accès restreints et traçabilité complète. Pour les données les plus sensibles, nous pouvons déployer des modèles on-premise qui fonctionnent sans envoyer de données à l'extérieur.",
  },
  {
    q: "L'automatisation s'intègre-t-elle à nos outils existants ?",
    a: "Oui, c'est un principe fondamental de notre approche. Nous ne vous demandons jamais de changer vos outils. Nos solutions se connectent à votre environnement existant : Google Workspace, Microsoft 365, Salesforce, HubSpot, systèmes comptables (Sage, QuickBooks), outils métier spécialisés. L'intégration se fait via API ou connecteurs dédiés, sans interruption de vos opérations.",
  },
];

export default function AutomatisationProcessus() {
  return (
    <PageLayout>
      <FaqSchema items={faqItems} />
      <ExpertiseHero
        tag="Expertise"
        title="Automatisation des processus par IA."
        description="Vos équipes passent des heures sur des tâches répétitives. Nous construisons les systèmes intelligents qui les libèrent pour se concentrer sur ce qui compte vraiment : la relation client, la stratégie et la prise de décision."
        illustration={<AutomatisationIllustration />}
      />

      {/* Section 1 — section-surface: Intro courte + Metrics dashboard */}
      <section className="section-padding section-surface">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-xl font-bold mb-5">L&apos;automatisation intelligente, pas aveugle</h2>
                <p className="text-foreground/60 text-[14px] leading-relaxed">
                  Grace aux modèles de langage et à la vision par ordinateur, il est désormais possible de traiter des documents non structurés, comprendre le contexte d&apos;un email, classifier des pièces comptables ou vérifier la conformité d&apos;un dossier en quelques secondes. Chaque workflow conserve une trace complète pour l&apos;audit, et les cas ambigus sont remontés à un opérateur humain.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-5">Des résultats mesurables dès les premières semaines</h2>
                <p className="text-foreground/60 text-[14px] leading-relaxed">
                  Nos clients constatent une réduction de 70 à 90% du temps de traitement documentaire, une baisse des erreurs de saisie de plus de 95%, et la libération de plusieurs heures par jour par collaborateur. Pour une entreprise de 20 personnes, cela représente l&apos;équivalent de 2 à 3 postes réaffectés à des taches à forte valeur ajoutée.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Metrics dashboard */}
          <RevealOnScroll delay={100}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-16">
              <div className="p-5 rounded-2xl bg-surface border border-border text-center">
                <div className="mb-2">
                  <svg className="w-6 h-6 mx-auto text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" /></svg>
                </div>
                <div className="text-2xl font-bold"><AnimatedCounter prefix="-" value={80} suffix="%" /></div>
                <p className="text-muted text-[11px] mt-1">temps de traitement documentaire</p>
              </div>
              <div className="p-5 rounded-2xl bg-surface border border-border text-center">
                <div className="mb-2">
                  <svg className="w-6 h-6 mx-auto text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a10 10 0 11-20 0 10 10 0 0120 0z" /></svg>
                </div>
                <div className="text-2xl font-bold"><AnimatedCounter value={97} suffix="%" /></div>
                <p className="text-muted text-[11px] mt-1">précision d&apos;extraction</p>
              </div>
              <div className="p-5 rounded-2xl bg-surface border border-border text-center">
                <div className="mb-2">
                  <svg className="w-6 h-6 mx-auto text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div className="text-2xl font-bold"><AnimatedCounter prefix="-" value={95} suffix="%" /></div>
                <p className="text-muted text-[11px] mt-1">erreurs de saisie</p>
              </div>
              <div className="p-5 rounded-2xl bg-surface border border-border text-center">
                <div className="mb-2">
                  <svg className="w-6 h-6 mx-auto text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div className="text-2xl font-bold"><AnimatedCounter prefix="x" value={3} /></div>
                <p className="text-muted text-[11px] mt-1">plus rapide en réponse client</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Section 2 — section-tinted: Steps timeline */}
      <section className="section-padding section-tinted">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-6">Notre approche en 6 étapes</h2>
            <StepTimeline steps={steps} />
          </RevealOnScroll>
        </div>
      </section>

      {/* Section 3 — dark bubble: Cas d'application + Technologies + Garanties */}
      <section className="bg-dark text-white rounded-[2rem] mx-4 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-6">Cas d&apos;application concrets</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                {
                  title: "Extraction documentaire intelligente",
                  desc: "OCR enrichi par IA pour contrats, factures, pièces d'identité et formulaires monégasques. Précision supérieure à 97%.",
                },
                {
                  title: "Classification et routage du courrier",
                  desc: "Tri automatique des emails et documents entrants. Détection d'intention, priorisation et attribution au bon service.",
                },
                {
                  title: "Conformité KYC et AML automatisée",
                  desc: "Vérification des dossiers clients, croisement des listes de sanctions et génération des rapports réglementaires AMSF.",
                },
                {
                  title: "Génération de rapports et reporting",
                  desc: "Rapports personnalisés automatiques : synthèses de portefeuille, comptes-rendus de gestion, bilans périodiques.",
                },
                {
                  title: "Gestion des contrats et échéances",
                  desc: "Suivi automatisé des dates clés, alertes anticipées, extraction des conditions et comparaison entre versions.",
                },
                {
                  title: "Traitement des demandes clients",
                  desc: "Analyse, catégorisation et pré-remplissage des réponses standard. Escalade intelligente pour les cas complexes.",
                },
              ].map((item) => (
                <div key={item.title} className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                  <h3 className="text-[14px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-white/50 text-[13px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* Technologies */}
          <RevealOnScroll delay={100}>
            <h2 className="text-xl font-bold mb-6 mt-14">Technologies mobilisées</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { title: "OCR avancé", desc: "Reconnaissance optique enrichie par deep learning pour tous types de documents, y compris manuscrits." },
                { title: "LLM spécialisés", desc: "Modèles de langage fine-tunés sur vos données pour comprendre votre jargon et le contexte monégasque." },
                { title: "Workflows orchestrés", desc: "Pipelines robustes avec gestion des exceptions, files prioritaires et points de validation humaine." },
                { title: "API et connecteurs natifs", desc: "Intégration avec Google Workspace, Microsoft 365, Salesforce, HubSpot, Sage et outils métier." },
              ].map((tech) => (
                <div key={tech.title} className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                  <h3 className="text-[14px] font-semibold mb-2">{tech.title}</h3>
                  <p className="text-white/50 text-[13px] leading-relaxed">{tech.desc}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* Garanties */}
          <RevealOnScroll delay={200}>
            <h2 className="text-xl font-bold mb-6 mt-14">Nos garanties</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              <div className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-3">Traçabilité complète</h3>
                <p className="text-white/50 text-[13px] leading-relaxed">
                  Chaque action automatisée est journalisée. Vos auditeurs peuvent retracer chaque décision. Conformité native avec les exigences de l&apos;AMSF.
                </p>
              </div>
              <div className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-3">Validation humaine intégrée</h3>
                <p className="text-white/50 text-[13px] leading-relaxed">
                  Les cas ambigus sont remontés à un opérateur humain. Vous définissez les seuils de confiance et les règles d&apos;escalade.
                </p>
              </div>
              <div className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-3">Retour en arrière possible</h3>
                <p className="text-white/50 text-[13px] leading-relaxed">
                  Chaque déploiement est réversible en quelques minutes. Aucun risque pour vos opérations courantes.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Section 4 — section-light: Comparison module */}
      <section className="section-padding section-light">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-6">Traitement manuel vs automatisation IA</h2>
            <div className="grid sm:grid-cols-2 gap-3 mb-16">
              <div className="p-7 rounded-2xl bg-surface border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-foreground/20" />
                  <span className="text-[11px] uppercase tracking-wider text-muted font-semibold">Sans Quanta</span>
                </div>
                <ul className="space-y-2">
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Saisie manuelle depuis chaque document reçu
                  </li>
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Erreurs de copie fréquentes et couts de correction
                  </li>
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Collaborateurs mobilisés sur du tri et de la vérification
                  </li>
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Délais de traitement de plusieurs jours
                  </li>
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Risques de non-conformité par oubli ou retard
                  </li>
                </ul>
              </div>
              <div className="p-7 rounded-2xl bg-dark text-white border border-white/[0.06]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-[11px] uppercase tracking-wider text-white/40 font-semibold">Avec Quanta</span>
                </div>
                <ul className="space-y-2">
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Extraction automatique avec 97% de précision
                  </li>
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    95% d&apos;erreurs de saisie éliminées
                  </li>
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Equipes recentrées sur la relation client et la stratégie
                  </li>
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Traitement en temps réel, 24h/24
                  </li>
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Conformité automatique et traçabilité complète
                  </li>
                </ul>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Section 5 — section-tinted: FAQ */}
      <section className="section-padding section-tinted">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-6">Questions fréquentes</h2>
            <FAQ items={faqItems} />
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className="flex flex-wrap gap-3 mt-12">
              <Link href="/methode" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Notre méthode</Link>
              <Link href="/resultats" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Résultats clients</Link>
              <Link href="/expertise/audit-strategie-ia" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Audit & stratégie IA</Link>
              <Link href="/expertise/developpement-ia-sur-mesure" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Développement IA sur mesure</Link>
              <Link href="/secteurs/banque-privee" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Banque privée</Link>
              <Link href="/secteurs/gestion-patrimoine" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Gestion de patrimoine</Link>
              <Link href="/secteurs/cabinets-avocats" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Cabinets d&apos;avocats</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA gradient */}
      <section className="section-padding bg-gradient-to-b from-background via-accent-light/30 to-accent/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">
              Automatisez ce qui peut l&apos;être, gardez le contrôle sur le reste.
            </h2>
            <p className="text-foreground/60 text-[14px] leading-relaxed mb-8">
              Montrez-nous un processus qui vous ralentit. Nous vous dirons en 48 heures s&apos;il peut être automatisé, à quel cout et avec quel retour sur investissement.
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
                href="/expertise"
                className="bg-surface text-foreground font-medium px-6 py-3 rounded-xl text-[13px] border border-border hover:border-foreground/20 transition-all"
              >
                Toutes nos expertises
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </PageLayout>
  );
}
