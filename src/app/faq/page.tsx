import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import FAQ from "@/components/FAQ";
import FaqSchema from "@/components/FaqSchema";
import RevealOnScroll from "@/components/RevealOnScroll";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Questions fréquentes sur l'IA en entreprise",
  description:
    "FAQ Quanta : réponses sur l'IA pour les entreprises monégasques. Automatisation, coûts, méthode, confidentialité, secteurs et délais d'un projet IA à Monaco.",
  alternates: { canonical: "https://quantamonaco.com/faq" },
  openGraph: {
    title: "Questions fréquentes sur l'IA en entreprise",
    description:
      "FAQ Quanta : réponses sur l'IA pour les entreprises monégasques. Automatisation, coûts, méthode, confidentialité, secteurs et délais d'un projet IA à Monaco.",
    url: "https://quantamonaco.com/faq",
    siteName: "Quanta",
    locale: "fr_FR",
    type: "website",
  },
};

const cat1 = [
  {
    q: "Qu'est-ce que Quanta ?",
    a: "Quanta est un cabinet de conseil spécialisé dans l'intégration de l'intelligence artificielle en entreprise, basé à Monaco. Nous accompagnons les organisations de la Principauté et de la Côte d'Azur dans l'audit, l'automatisation et le déploiement de solutions IA adaptées à leurs enjeux métier. Notre approche privilégie la rigueur opérationnelle et les résultats mesurables.",
  },
  {
    q: "Comment se passe un premier échange ?",
    a: "Le premier entretien est confidentiel, gratuit et dure environ 30 minutes. Nous écoutons vos problématiques, identifions les premiers leviers d'optimisation et vous donnons une vision claire de ce que l'IA peut apporter à votre activité. Aucun engagement n'est requis pour ce premier contact.",
  },
  {
    q: "Travaillez-vous uniquement à Monaco ?",
    a: "Notre siège est à Monaco et la majorité de nos clients sont établis dans la Principauté. Nous intervenons également sur la Côte d'Azur et dans le Sud de la France pour des missions ponctuelles ou récurrentes. La proximité géographique nous permet d'assurer une présence terrain régulière.",
  },
  {
    q: "Quelle est votre méthode d'intervention ?",
    a: "Nous suivons un protocole en quatre phases : immersion, diagnostic, déploiement et transmission. Chaque mission débute par une observation terrain approfondie avant toute recommandation. Ce cadre garantit des résultats concrets et une autonomie complète de votre organisation à la fin de la mission.",
  },
  {
    q: "Combien de temps dure une mission type ?",
    a: "La durée varie selon le périmètre. Un audit stratégique prend 2 à 4 semaines. Un projet d'automatisation complet s'étend sur 6 à 12 semaines, de l'immersion à la transmission. Les formations intensives sont programmées sur 1 à 5 jours selon le niveau et les objectifs.",
  },
  {
    q: "Quelle est la taille de votre équipe ?",
    a: "Quanta est une structure volontairement resserrée composée d'experts seniors en intelligence artificielle, en automatisation et en stratégie. Ce format nous permet de garantir un interlocuteur unique par mission et une réactivité que les grands cabinets ne peuvent offrir.",
  },
];

const cat2 = [
  {
    q: "Combien coûte un audit IA ?",
    a: "Un audit IA débute à partir de 5 000 euros. Le coût final dépend du nombre de processus à analyser et de la taille de votre organisation. Pour une PME monégasque de 10 à 50 collaborateurs, le budget se situe généralement entre 5 000 et 15 000 euros.",
  },
  {
    q: "Quel budget prévoir pour un projet d'automatisation ?",
    a: "Les projets d'automatisation se situent entre 10 000 et 40 000 euros selon la complexité et le nombre de processus concernés. Un projet ciblé sur un seul workflow démarre autour de 10 000 euros. Les transformations multi-processus avec intégrations avancées se rapprochent du haut de la fourchette.",
  },
  {
    q: "Comment calculer le ROI d'un projet IA ?",
    a: "Nous mesurons le ROI en comparant le temps et les coûts avant et après déploiement. Les indicateurs incluent les heures récupérées, la réduction des erreurs, l'accélération des délais de traitement et l'amélioration de la qualité de service. Chaque mission inclut un tableau de bord de suivi des gains.",
  },
  {
    q: "En combien de temps l'investissement est-il rentabilisé ?",
    a: "En moyenne, nos clients constatent un retour sur investissement en 3 mois. Les projets d'automatisation de tâches répétitives sont souvent rentabilisés dès le premier mois. Les projets plus structurants nécessitent 3 à 6 mois pour atteindre leur plein potentiel.",
  },
  {
    q: "Proposez-vous des missions ponctuelles ou uniquement des engagements longs ?",
    a: "Nous proposons les deux formats. Un audit ou une formation peuvent être réalisés de manière ponctuelle, sans engagement de suite. Pour les projets d'automatisation, nous recommandons un accompagnement de 2 à 3 mois afin de garantir une adoption durable par vos équipes.",
  },
  {
    q: "Y a-t-il des frais de maintenance après le déploiement ?",
    a: "Chaque mission inclut une période de support post-déploiement de 30 jours. Au-delà, nous proposons des contrats de maintenance optionnels adaptés à vos besoins. L'objectif reste votre autonomie : nos solutions sont documentées et conçues pour être maintenues en interne.",
  },
];

const cat3 = [
  {
    q: "Quelles technologies utilisez-vous ?",
    a: "Nous travaillons avec les modèles de langage les plus avancés (Claude, GPT, Mistral) ainsi que des outils d'automatisation comme n8n, des frameworks de développement modernes et des solutions d'OCR et de NLP spécialisées. Le choix technologique est toujours guidé par votre cas d'usage, jamais par une préférence de marque.",
  },
  {
    q: "Nos données sont-elles en sécurité ?",
    a: "La confidentialité est au centre de notre approche. Nous signons un accord de confidentialité avant chaque mission. Les données sont traitées sur des infrastructures sécurisées, conformes aux normes européennes, avec un chiffrement de bout en bout. Aucune donnée client n'est utilisée pour entraîner des modèles tiers.",
  },
  {
    q: "Êtes-vous conforme au RGPD ?",
    a: "Oui, l'ensemble de nos pratiques respectent le RGPD et les réglementations monégasques en matière de protection des données. Nous intégrons les principes de privacy by design dès la conception de chaque solution. Chaque traitement de données est documenté et traçable.",
  },
  {
    q: "Les solutions fonctionnent-elles avec nos outils existants ?",
    a: "Nous concevons chaque solution pour s'intégrer à votre environnement technique existant : CRM, ERP, suites bureautiques, outils métier spécifiques. L'interopérabilité est un critère de conception fondamental. Nous ne remplaçons pas vos outils, nous les connectons intelligemment.",
  },
  {
    q: "Faut-il des compétences techniques en interne ?",
    a: "Non. Nos solutions sont conçues pour être utilisées par des profils non techniques. La phase de transmission inclut une formation complète de vos équipes et une documentation détaillée. L'objectif est que chaque collaborateur puisse exploiter les outils de manière autonome.",
  },
  {
    q: "Que se passe-t-il si nous voulons changer de prestataire ?",
    a: "Vous restez propriétaire de l'intégralité des solutions développées pour vous. La documentation technique complète est livrée à la fin de chaque mission. Aucun verrouillage technique, aucune dépendance à Quanta. Votre autonomie est notre priorité.",
  },
];

const cat4 = [
  {
    q: "Quels secteurs accompagnez-vous ?",
    a: "Nous accompagnons principalement les acteurs de la gestion de patrimoine, de la banque privée, des cabinets juridiques, de l'immobilier de luxe, de l'hôtellerie et du commerce haut de gamme à Monaco. Notre expertise sectorielle nous permet de comprendre les contraintes réglementaires et opérationnelles propres à chaque métier.",
  },
  {
    q: "Avez-vous de l'expérience en gestion de patrimoine ?",
    a: "Oui, c'est l'un de nos secteurs de référence. Nous avons déployé des solutions d'automatisation documentaire, de reporting client et de conformité pour plusieurs sociétés de gestion monégasques. Les gains documentés incluent jusqu'à 4 jours par mois récupérés sur la gestion administrative.",
  },
  {
    q: "Pouvez-vous automatiser la conformité LCB-FT ?",
    a: "Absolument. Nous avons conçu des solutions de filtrage automatisé intégrant les listes de sanctions, le scoring PEP et la vérification KYC/KYB. Ces outils respectent les exigences du SICCFIN et de la loi monégasque. Le temps de vérification est réduit de 90 % avec une piste d'audit complète.",
  },
  {
    q: "Proposez-vous des solutions pour les cabinets d'avocats ?",
    a: "Oui. Nous avons déjà accompagné des cabinets monégasques sur la rédaction assistée d'actes juridiques, la recherche documentaire multi-juridictions et la gestion automatisée des échéances. Un premier jet de statuts de société est produit en 5 minutes au lieu de 3 heures.",
  },
  {
    q: "L'IA peut-elle aider dans l'immobilier de luxe ?",
    a: "L'IA transforme l'immobilier de luxe à Monaco : génération automatique de dossiers de présentation, scoring de prospects, analyse de marché en temps réel et suivi intelligent des mandats. Nos solutions permettent de réduire le temps de production d'un dossier de présentation d'une journée à 45 minutes.",
  },
  {
    q: "Formez-vous les équipes après le déploiement ?",
    a: "La formation fait partie intégrante de chaque mission. La phase de transmission comprend des sessions pratiques adaptées à chaque profil utilisateur, des guides de référence et un support de 30 jours. Nous proposons également des formations dédiées à l'IA générative pour monter en compétence vos équipes.",
  },
];

const cat5 = [
  {
    q: "Par où commencer ?",
    a: "Le point de départ recommandé est un entretien gratuit de 30 minutes par téléphone ou en présentiel à Monaco. Nous évaluons ensemble vos besoins et identifions les premiers leviers. Si un projet se dessine, nous proposons un audit structuré pour cadrer précisément le périmètre et les objectifs.",
  },
  {
    q: "Combien de temps avant les premiers résultats ?",
    a: "Les premiers résultats sont visibles dès la fin du premier mois de déploiement. Les quick wins (automatisation de tâches simples, extraction documentaire) produisent des gains immédiats. Les projets plus structurants montrent leur plein impact après 2 à 3 mois.",
  },
  {
    q: "Faut-il un projet pilote avant un déploiement complet ?",
    a: "Nous le recommandons systématiquement. Un projet pilote de 4 à 6 semaines permet de valider la pertinence technique, de mesurer les premiers gains et de sécuriser l'adhésion des équipes. Le passage à l'échelle est ensuite beaucoup plus fluide et maîtrisé.",
  },
  {
    q: "Comment mesurez-vous les résultats ?",
    a: "Chaque mission est associée à des indicateurs de performance définis en amont : temps économisé, taux d'erreur, délais de traitement, satisfaction des équipes. Nous livrons un tableau de bord de suivi et réalisons un bilan chiffré à la fin de chaque phase.",
  },
  {
    q: "Que comprend la phase de transmission ?",
    a: "La phase de transmission inclut la formation de vos équipes, la documentation technique et fonctionnelle complète, la mise en place des indicateurs de suivi et un support post-déploiement de 30 jours. L'objectif est que votre organisation soit totalement autonome à la fin de la mission.",
  },
];

const allFaqItems = [...cat1, ...cat2, ...cat3, ...cat4, ...cat5];

const categories = [
  { title: "Quanta et notre approche", items: cat1 },
  { title: "Coûts et retour sur investissement", items: cat2 },
  { title: "Technologie et confidentialité", items: cat3 },
  { title: "Secteurs et cas d'usage", items: cat4 },
  { title: "Démarrer un projet", items: cat5 },
];

const sectionStyles = [
  "section-surface",
  "section-light",
  "section-tinted",
  "section-surface",
  "section-light",
];

export default function FaqPage() {
  return (
    <PageLayout>
      <FaqSchema items={allFaqItems} />

      <PageHeader
        tag="FAQ"
        title="Questions fréquentes sur l'IA en entreprise."
        description="Réponses claires et directes aux interrogations les plus courantes sur l'intégration de l'intelligence artificielle à Monaco. Coûts, délais, confidentialité, méthode."
      />

      {categories.map((cat, i) => (
        <section key={cat.title} className={`section-padding ${sectionStyles[i]}`}>
          <div className="max-w-4xl mx-auto px-6">
            <RevealOnScroll>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-8">{cat.title}</h2>
              <FAQ items={cat.items} />
            </RevealOnScroll>
          </div>
        </section>
      ))}

      {/* Navigation interne */}
      <section className="section-padding section-surface">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold tracking-tight mb-6">Pour aller plus loin</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/expertise" className="p-6 rounded-2xl bg-surface border border-border hover:border-accent/40 transition-colors group">
                <h3 className="text-[14px] font-semibold mb-2 group-hover:text-accent transition-colors">Nos expertises</h3>
                <p className="text-[12px] text-foreground/50 leading-relaxed">Audit, automatisation, développement sur mesure et formation IA.</p>
              </Link>
              <Link href="/methode" className="p-6 rounded-2xl bg-surface border border-border hover:border-accent/40 transition-colors group">
                <h3 className="text-[14px] font-semibold mb-2 group-hover:text-accent transition-colors">Notre méthode</h3>
                <p className="text-[12px] text-foreground/50 leading-relaxed">Un protocole en quatre phases, de l'immersion à la transmission.</p>
              </Link>
              <Link href="/contact" className="p-6 rounded-2xl bg-surface border border-border hover:border-accent/40 transition-colors group">
                <h3 className="text-[14px] font-semibold mb-2 group-hover:text-accent transition-colors">Contact</h3>
                <p className="text-[12px] text-foreground/50 leading-relaxed">Prenez rendez-vous pour un premier entretien confidentiel.</p>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section-tinted bg-gradient-to-b from-background via-accent-light/30 to-accent/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">Vous avez une question spécifique ?</h2>
            <p className="text-foreground/60 text-[14px] mb-8">Premier entretien confidentiel de 30 minutes, gratuit et sans engagement.</p>
            <a href="https://wa.me/33645636107" className="group bg-accent text-dark font-semibold px-6 py-3 rounded-xl text-[13px] hover:bg-accent-dark transition-all inline-flex items-center gap-2 shadow-lg shadow-accent/20">
              Solliciter un entretien
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </RevealOnScroll>
        </div>
      </section>
    </PageLayout>
  );
}
