import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ExpertiseHero from "@/components/ExpertiseHero";
import { DevSurMesureIllustration } from "@/components/ExpertiseIllustration";
import FAQ from "@/components/FAQ";
import FaqSchema from "@/components/FaqSchema";
import RevealOnScroll from "@/components/RevealOnScroll";
import StepTimeline from "@/components/StepTimeline";
import AnimatedCounter from "@/components/AnimatedCounter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Développement IA sur mesure à Monaco",
  description:
    "Solutions IA sur mesure pour Monaco. Assistants juridiques, veille réglementaire, KYC augmenté. Architecture souveraine, données protégées, modèles spécialisés.",
  alternates: { canonical: "https://quantamonaco.com/expertise/developpement-ia-sur-mesure" },
  openGraph: {
    title: "Développement IA sur mesure à Monaco",
    description:
      "Solutions IA sur mesure pour Monaco. Assistants juridiques, veille réglementaire, KYC augmenté. Architecture souveraine, données protégées, modèles spécialisés.",
    url: "https://quantamonaco.com/expertise/developpement-ia-sur-mesure",
    siteName: "Quanta",
    locale: "fr_FR",
    type: "website",
  },
};

const steps = [
  {
    title: "Ateliers de spécification",
    text: "Sessions de travail avec vos équipes pour définir les cas d'usage prioritaires, les critères de succès et les contraintes techniques. Rédaction d'un cahier des charges fonctionnel clair et partagé.",
  },
  {
    title: "Architecture technique",
    text: "Conception de l'architecture système : choix des modèles, stratégie de données, hébergement, sécurité et intégrations. Validation de la faisabilité technique et estimation des performances attendues.",
  },
  {
    title: "Prototypage en 2 à 4 semaines",
    text: "Livraison d'un prototype fonctionnel testable par vos équipes sur des données réelles. Validation de l'approche avant d'investir dans le développement complet. Ajustements itératifs rapides.",
  },
  {
    title: "Développement et intégration",
    text: "Construction de la solution complète avec intégration à vos systèmes existants. Tests de charge, de sécurité et de précision. Développement des connecteurs API et des interfaces utilisateur.",
  },
  {
    title: "Formation et déploiement",
    text: "Mise en production progressive avec accompagnement des utilisateurs. Sessions de formation adaptées à chaque profil (technique, métier, direction). Documentation complète et transfert de compétences.",
  },
  {
    title: "Maintenance et évolution",
    text: "Suivi continu des performances, mise à jour des modèles et des données de référence. Intégration des nouvelles réglementations. Développement de fonctionnalités additionnelles selon vos besoins.",
  },
];

const faqItems = [
  {
    q: "Pourquoi développer une IA sur mesure plutot qu'utiliser ChatGPT ou un outil existant ?",
    a: "Les outils IA génériques comme ChatGPT sont performants pour des tâches générales, mais ils ne connaissent pas le droit monégasque, vos processus internes, votre jargon métier ou vos obligations réglementaires spécifiques. Une solution sur mesure est entrainée sur vos données et calibrée pour votre contexte. Elle atteint une précision de 95%+ sur vos cas d'usage, là où un outil générique plafonne souvent à 70-80%. De plus, vos données ne transitent pas par des serveurs tiers.",
  },
  {
    q: "Combien coute le développement d'une solution IA sur mesure à Monaco ?",
    a: "Le budget dépend de la complexité du projet. Un assistant IA spécialisé sur un cas d'usage précis (recherche documentaire, classification, extraction) démarre autour de 15 000 euros. Une plateforme complète intégrant plusieurs modules (veille, conformité, reporting) se situe entre 30 000 et 80 000 euros. Chaque projet commence par un prototype à budget maitrisé pour valider l'approche avant de s'engager sur le développement complet.",
  },
  {
    q: "Mes données confidentielles sont-elles protégées pendant le développement ?",
    a: "La confidentialité est notre priorité absolue, particulièrement pour les entreprises monégasques soumises au secret professionnel. Nous signons systématiquement un NDA avant tout échange de données. Les données d'entrainement sont anonymisées quand c'est possible. Les modèles peuvent être déployés en infrastructure dédiée ou on-premise. Aucune donnée n'est partagée avec des tiers et nous pouvons garantir un hébergement conforme aux exigences de la Principauté.",
  },
  {
    q: "Quel est le délai de livraison d'une solution IA sur mesure ?",
    a: "Un prototype fonctionnel est livré en 2 à 4 semaines. La solution complète, intégrée à vos systèmes et testée en conditions réelles, est déployée en 2 à 4 mois selon la complexité. Nous travaillons en cycles courts avec des démonstrations régulières pour que vous puissiez valider chaque étape et ajuster les priorités en cours de route.",
  },
  {
    q: "Que se passe-t-il après la livraison ? Comment la solution évolue-t-elle ?",
    a: "Chaque solution est livrée avec un contrat de maintenance évolutive. Nous assurons la mise à jour des modèles IA (nouvelles versions, amélioration de la précision), l'intégration des nouvelles réglementations monégasques au fil de leur publication, et le développement de fonctionnalités additionnelles selon vos besoins. Un tableau de bord de monitoring vous permet de suivre les performances en temps réel.",
  },
];

export default function DeveloppementIASurMesure() {
  return (
    <PageLayout>
      <FaqSchema items={faqItems} />
      <ExpertiseHero
        tag="Expertise"
        title="Développement IA sur mesure à Monaco."
        description="Les solutions génériques ne suffisent pas quand votre métier exige précision et conformité. Nous construisons des outils IA propriétaires, pensés pour votre contexte monégasque et vos exigences de souveraineté."
        illustration={<DevSurMesureIllustration />}
      />

      {/* Section 1 — section-surface: Intro courte + Metrics dashboard */}
      <section className="section-padding section-surface">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-xl font-bold mb-5">Des solutions calibrées pour la Principauté</h2>
                <p className="text-foreground/60 text-[14px] leading-relaxed">
                  Le droit monégasque, les ordonnances souveraines, les circulaires de l&apos;AMSF et les réglementations de la CCIN forment un corpus qu&apos;aucun outil IA généraliste ne maitrise. Nos assistants IA sont entrainés sur ces textes et développés en collaboration étroite avec vos équipes métier pour répondre à vos vrais problèmes, pas à des cas d&apos;usage théoriques.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-5">Architecture propriétaire et souveraineté</h2>
                <p className="text-foreground/60 text-[14px] leading-relaxed">
                  Vos données restent vos données. Hébergement dédié, chiffrement de bout en bout, pas de transfert vers des serveurs tiers. Notre stack combine les meilleurs modèles open source (Mistral, Llama, DeepSeek) avec des couches de spécialisation fine-tunées sur vos données métier pour une précision inégalée.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Metrics dashboard */}
          <RevealOnScroll delay={100}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-16">
              <div className="p-5 rounded-2xl bg-surface border border-border text-center">
                <div className="mb-2">
                  <svg className="w-6 h-6 mx-auto text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a10 10 0 11-20 0 10 10 0 0120 0z" /></svg>
                </div>
                <div className="text-2xl font-bold"><AnimatedCounter value={95} suffix="%+" /></div>
                <p className="text-muted text-[11px] mt-1">précision sur vos cas d&apos;usage</p>
              </div>
              <div className="p-5 rounded-2xl bg-surface border border-border text-center">
                <div className="mb-2">
                  <svg className="w-6 h-6 mx-auto text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div className="text-2xl font-bold"><AnimatedCounter value={30} suffix="s" /></div>
                <p className="text-muted text-[11px] mt-1">au lieu de 2h de recherche manuelle</p>
              </div>
              <div className="p-5 rounded-2xl bg-surface border border-border text-center">
                <div className="mb-2">
                  <svg className="w-6 h-6 mx-auto text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" /></svg>
                </div>
                <div className="text-2xl font-bold"><AnimatedCounter value={2} suffix="-4 sem." /></div>
                <p className="text-muted text-[11px] mt-1">pour un prototype fonctionnel</p>
              </div>
              <div className="p-5 rounded-2xl bg-surface border border-border text-center">
                <div className="mb-2">
                  <svg className="w-6 h-6 mx-auto text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
                <div className="text-2xl font-bold"><AnimatedCounter value={100} suffix="%" /></div>
                <p className="text-muted text-[11px] mt-1">propriété intellectuelle conservée</p>
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

      {/* Section 3 — dark bubble: Cas d'application + Stack + Avantages */}
      <section className="bg-dark text-white rounded-[2rem] mx-4 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-6">Cas d&apos;application concrets</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                {
                  title: "Assistant juridique en droit monégasque",
                  desc: "Recherche instantanée dans le corpus juridique : Code civil, ordonnances souveraines, jurisprudence. Réponses sourcées.",
                },
                {
                  title: "Veille réglementaire automatisée",
                  desc: "Surveillance du Journal de Monaco, publications AMSF et circulaires CCIN. Alertes personnalisées et résumés automatiques.",
                },
                {
                  title: "KYC augmenté pour la finance",
                  desc: "Vérification d'identité, croisement registres monégasques (RCI), détection bénéficiaires effectifs et screening sanctions.",
                },
                {
                  title: "Assistant de gestion patrimoniale",
                  desc: "Aide à la décision : analyse de portefeuille, simulation de scénarios, rapports personnalisés pour clients UHNW.",
                },
                {
                  title: "Chatbot concierge de luxe",
                  desc: "Agent conversationnel multilingue 24h/24 formé sur vos services, événements monégasques et activités locales.",
                },
                {
                  title: "Pricing intelligent immobilier",
                  desc: "Modèle prédictif entrainé sur les transactions monégasques pour estimer les biens et identifier les tendances.",
                },
              ].map((item) => (
                <div key={item.title} className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                  <h3 className="text-[14px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-white/50 text-[13px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* Stack technique */}
          <RevealOnScroll delay={100}>
            <h2 className="text-xl font-bold mb-6 mt-14">Notre stack technique</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { title: "Modèles de langage", desc: "Mistral, Llama, DeepSeek et modèles propriétaires. Fine-tuning pour une précision maximale sur vos cas d'usage." },
                { title: "RAG et bases vectorielles", desc: "Architecture Retrieval-Augmented Generation pour des réponses sourcées et vérifiables depuis vos documents." },
                { title: "Vision par ordinateur", desc: "OCR avancé, analyse d'images et extraction de données depuis tout type de support, y compris manuscrits." },
                { title: "Infrastructure souveraine", desc: "Déploiement dédié ou on-premise. Chiffrement bout en bout et conformité avec les exigences monégasques." },
              ].map((tech) => (
                <div key={tech.title} className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                  <h3 className="text-[14px] font-semibold mb-2">{tech.title}</h3>
                  <p className="text-white/50 text-[13px] leading-relaxed">{tech.desc}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* Avantages du sur-mesure */}
          <RevealOnScroll delay={200}>
            <h2 className="text-xl font-bold mb-6 mt-14">Pourquoi le sur-mesure fait la différence</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              <div className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-3">Précision métier supérieure</h3>
                <p className="text-white/50 text-[13px] leading-relaxed">
                  95%+ de précision sur vos cas d&apos;usage, contre 70-80% pour un outil générique. La différence se traduit en heures gagnées chaque jour.
                </p>
              </div>
              <div className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-3">Propriété intellectuelle totale</h3>
                <p className="text-white/50 text-[13px] leading-relaxed">
                  Vous êtes propriétaire de la solution. Pas de dépendance éditeur, pas de licence récurrente. Le code source et les modèles vous appartiennent.
                </p>
              </div>
              <div className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-3">Evolutivité garantie</h3>
                <p className="text-white/50 text-[13px] leading-relaxed">
                  Nouveaux cas d&apos;usage, nouvelles réglementations, nouveaux marchés : l&apos;architecture est conçue pour évoluer sans repartir de zéro.
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
            <h2 className="text-xl font-bold mb-6">Outil générique vs solution sur mesure</h2>
            <div className="grid sm:grid-cols-2 gap-3 mb-16">
              <div className="p-7 rounded-2xl bg-surface border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-foreground/20" />
                  <span className="text-[11px] uppercase tracking-wider text-muted font-semibold">Sans Quanta</span>
                </div>
                <ul className="space-y-2">
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    ChatGPT ne connait pas le droit monégasque
                  </li>
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    70-80% de précision sur vos cas d&apos;usage métier
                  </li>
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Données sensibles envoyées sur des serveurs tiers
                  </li>
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Aucune intégration avec vos systèmes internes
                  </li>
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Dépendance à un éditeur et licences récurrentes
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
                    Modèle entrainé sur le corpus juridique monégasque
                  </li>
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    95%+ de précision calibrée pour votre métier
                  </li>
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Hébergement souverain, données chiffrées bout en bout
                  </li>
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Connecté à votre CRM, ERP et outils métier
                  </li>
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Code source et modèles 100% votre propriété
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
              <Link href="/expertise/automatisation-processus" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Automatisation des processus</Link>
              <Link href="/secteurs/banque-privee" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Banque privée</Link>
              <Link href="/secteurs/cabinets-avocats" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Cabinets d&apos;avocats</Link>
              <Link href="/secteurs/immobilier-luxe" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Immobilier de luxe</Link>
              <Link href="/secteurs/hotellerie-restauration" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Hotellerie et restauration</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA gradient */}
      <section className="section-padding bg-gradient-to-b from-background via-accent-light/30 to-accent/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">
              Votre métier est unique. Votre IA devrait l&apos;être aussi.
            </h2>
            <p className="text-foreground/60 text-[14px] leading-relaxed mb-8">
              Décrivez-nous votre besoin. Nous vous proposerons une architecture technique et un prototype fonctionnel en moins d&apos;un mois.
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
