import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import RevealOnScroll from "@/components/RevealOnScroll";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Glossaire IA et termes techniques",
  description:
    "Définitions claires des termes clés de l'intelligence artificielle et de la réglementation monégasque. KYC, LCB-FT, LLM, RAG, OCR et plus.",
  alternates: { canonical: "https://quantamonaco.com/glossaire" },
  openGraph: {
    title: "Glossaire IA et termes techniques",
    description:
      "Définitions claires des termes clés de l'intelligence artificielle et de la réglementation monégasque. KYC, LCB-FT, LLM, RAG, OCR et plus.",
    url: "https://quantamonaco.com/glossaire",
    siteName: "Quanta",
    locale: "fr_FR",
    type: "website",
  },
};

const terms: { term: string; definition: string; link?: string }[] = [
  {
    term: "Agent IA",
    definition:
      "Programme autonome capable d'exécuter des tâches complexes en enchaînant plusieurs actions : recherche d'information, prise de décision, interaction avec des outils externes. Contrairement à un simple chatbot, un agent IA peut orchestrer des workflows complets sans intervention humaine.",
    link: "/expertise/developpement-ia-sur-mesure",
  },
  {
    term: "API",
    definition:
      "Interface de programmation applicative (Application Programming Interface). Protocole permettant à deux logiciels de communiquer entre eux. Les API sont la colonne vertébrale de toute intégration IA avec vos outils existants (CRM, ERP, suites bureautiques).",
  },
  {
    term: "Automatisation",
    definition:
      "Remplacement de tâches manuelles répétitives par des processus exécutés automatiquement. En entreprise, l'automatisation IA couvre la collecte de données, le traitement documentaire, la génération de rapports et le suivi des échéances.",
    link: "/expertise/automatisation-processus",
  },
  {
    term: "Claude",
    definition:
      "Modèle de langage développé par Anthropic, conçu pour être fiable, sûr et précis. Utilisé par Quanta dans de nombreuses missions pour la rédaction assistée, l'analyse documentaire et le développement d'agents IA spécialisés.",
  },
  {
    term: "Computer Vision",
    definition:
      "Branche de l'intelligence artificielle permettant aux machines d'analyser et d'interpréter des images ou des vidéos. Applications courantes : reconnaissance de documents, analyse de plans immobiliers, contrôle qualité visuel.",
  },
  {
    term: "Conformité",
    definition:
      "Ensemble des processus garantissant le respect des réglementations applicables (RGPD, LCB-FT, directives SICCFIN). L'IA permet d'automatiser une grande partie des contrôles de conformité tout en maintenant une piste d'audit complète.",
    link: "/secteurs/gestion-patrimoine",
  },
  {
    term: "CRM",
    definition:
      "Customer Relationship Management. Logiciel de gestion de la relation client (HubSpot, Salesforce, Pipedrive). L'IA enrichit les CRM en automatisant la saisie, en scorant les prospects et en générant des analyses prédictives.",
  },
  {
    term: "Deep Learning",
    definition:
      "Sous-domaine du machine learning utilisant des réseaux de neurones profonds (plusieurs couches). Le deep learning excelle dans la reconnaissance d'images, le traitement du langage naturel et la détection de patterns complexes dans de grands volumes de données.",
  },
  {
    term: "Due Diligence",
    definition:
      "Processus d'investigation approfondie réalisé avant une transaction financière ou un investissement. L'IA accélère la due diligence en automatisant l'extraction et l'analyse de documents juridiques, financiers et réglementaires.",
    link: "/secteurs/gestion-patrimoine",
  },
  {
    term: "Extraction documentaire",
    definition:
      "Processus automatisé d'identification et d'extraction d'informations structurées à partir de documents non structurés (PDF, images, emails). Combine OCR et NLP pour transformer des documents papier en données exploitables.",
  },
  {
    term: "Fine-tuning",
    definition:
      "Technique d'adaptation d'un modèle IA pré-entraîné à un domaine ou un cas d'usage spécifique. Le fine-tuning permet d'obtenir des réponses plus précises et pertinentes pour votre secteur d'activité sans entraîner un modèle de zéro.",
  },
  {
    term: "Formation IA",
    definition:
      "Programme de montée en compétence des équipes sur les outils et méthodes de l'intelligence artificielle. Chez Quanta, chaque formation est adaptée au niveau des participants et à leurs cas d'usage métier concrets.",
    link: "/expertise/formation-ia",
  },
  {
    term: "Gouvernance IA",
    definition:
      "Cadre de règles, processus et responsabilités encadrant l'utilisation de l'IA au sein d'une organisation. Couvre la qualité des données, l'éthique, la conformité réglementaire et la gestion des risques liés aux modèles déployés.",
  },
  {
    term: "GPT",
    definition:
      "Generative Pre-trained Transformer. Architecture de modèle de langage développée par OpenAI. Les modèles GPT sont capables de générer du texte, de résumer des documents, de traduire et de répondre à des questions complexes.",
  },
  {
    term: "IA Générative",
    definition:
      "Catégorie d'intelligence artificielle capable de créer du contenu original : texte, images, code, présentations. Les LLM comme Claude et GPT sont les exemples les plus connus. Utilisée en entreprise pour la rédaction, l'analyse et l'automatisation.",
  },
  {
    term: "Intelligence Artificielle",
    definition:
      "Ensemble de technologies permettant aux machines de simuler des capacités cognitives humaines : compréhension du langage, analyse de données, prise de décision. En entreprise, l'IA est un levier de productivité et de compétitivité.",
  },
  {
    term: "KYB",
    definition:
      "Know Your Business. Processus de vérification de l'identité et de la légitimité d'une entreprise cliente. Obligatoire dans le secteur financier à Monaco, le KYB peut être largement automatisé grâce à l'extraction documentaire et aux bases de données réglementaires.",
    link: "/secteurs/banque-privee",
  },
  {
    term: "KYC",
    definition:
      "Know Your Customer. Procédure d'identification et de vérification de l'identité des clients, exigée par la réglementation financière. L'IA réduit le temps de vérification KYC de 90 % tout en renforçant la fiabilité des contrôles.",
    link: "/secteurs/banque-privee",
  },
  {
    term: "LCB-FT",
    definition:
      "Lutte Contre le Blanchiment et le Financement du Terrorisme. Obligation réglementaire majeure à Monaco, supervisée par le SICCFIN. L'IA automatise le filtrage des listes de sanctions, le scoring de risque et la génération des déclarations de soupçon.",
    link: "/secteurs/gestion-patrimoine",
  },
  {
    term: "LLM",
    definition:
      "Large Language Model (grand modèle de langage). Modèle d'IA entraîné sur de vastes corpus de texte, capable de comprendre et de générer du langage naturel. Claude, GPT et Mistral sont les LLM les plus utilisés en entreprise.",
  },
  {
    term: "Lovable",
    definition:
      "Plateforme de développement no-code permettant de créer des applications web complètes à l'aide de l'IA. Utilisée pour le prototypage rapide et le développement d'outils internes avec une mise en production accélérée.",
  },
  {
    term: "Machine Learning",
    definition:
      "Apprentissage automatique. Sous-domaine de l'IA où les algorithmes apprennent à partir de données pour améliorer leurs performances sans être explicitement programmés. Utilisé pour la détection de fraudes, le scoring et l'analyse prédictive.",
  },
  {
    term: "Mistral",
    definition:
      "Entreprise française développant des modèles de langage performants et souverains. Les modèles Mistral offrent une alternative européenne aux solutions américaines, un point important pour les organisations soucieuses de souveraineté des données.",
  },
  {
    term: "Modèle de langage",
    definition:
      "Système d'IA spécialisé dans la compréhension et la génération de texte. Les modèles de langage modernes (LLM) peuvent rédiger, résumer, analyser, traduire et répondre à des questions complexes dans des contextes professionnels variés.",
  },
  {
    term: "n8n",
    definition:
      "Plateforme d'automatisation open source permettant de connecter des applications et de créer des workflows automatisés sans code. Quanta utilise n8n pour concevoir des automatisations robustes et maintenables intégrées à votre écosystème technique.",
    link: "/expertise/automatisation-processus",
  },
  {
    term: "NLP",
    definition:
      "Natural Language Processing (traitement du langage naturel). Technologie permettant aux machines de comprendre, interpréter et générer du langage humain. Essentiel pour l'analyse de documents, la classification d'emails et les assistants conversationnels.",
  },
  {
    term: "OCR",
    definition:
      "Optical Character Recognition (reconnaissance optique de caractères). Technologie convertissant des documents numérisés ou photographiés en texte exploitable. Indispensable pour l'automatisation du traitement de factures, contrats et pièces d'identité.",
  },
  {
    term: "OpenAI",
    definition:
      "Entreprise américaine à l'origine des modèles GPT et de ChatGPT. OpenAI développe des modèles de langage et des API utilisés par des millions d'entreprises pour intégrer l'IA dans leurs processus.",
  },
  {
    term: "PEP",
    definition:
      "Personne Politiquement Exposée. Individu occupant ou ayant occupé une fonction publique importante. La vérification PEP est obligatoire dans le cadre de la LCB-FT à Monaco. L'IA automatise le filtrage contre les bases de données PEP internationales.",
    link: "/secteurs/gestion-patrimoine",
  },
  {
    term: "Prompt Engineering",
    definition:
      "Discipline consistant à formuler des instructions précises pour obtenir les meilleurs résultats d'un modèle de langage. Un bon prompt engineering multiplie la qualité et la pertinence des réponses de l'IA dans un contexte professionnel.",
    link: "/expertise/formation-ia",
  },
  {
    term: "RAG",
    definition:
      "Retrieval-Augmented Generation. Technique combinant la recherche d'information dans une base de données avec la génération de texte par un LLM. Le RAG permet à l'IA de répondre avec précision en s'appuyant sur vos documents internes.",
    link: "/expertise/developpement-ia-sur-mesure",
  },
  {
    term: "RGPD",
    definition:
      "Règlement Général sur la Protection des Données. Cadre réglementaire européen encadrant la collecte et le traitement des données personnelles. Toutes les solutions déployées par Quanta respectent le RGPD et les réglementations monégasques équivalentes.",
  },
  {
    term: "ROI",
    definition:
      "Return On Investment (retour sur investissement). Indicateur mesurant la rentabilité d'un investissement. Chez Quanta, chaque mission est associée à des métriques de ROI définies en amont et mesurées tout au long du projet.",
  },
  {
    term: "SASURE",
    definition:
      "Système Automatisé de Surveillance des Risques. Solution de surveillance et d'évaluation des risques utilisée dans le cadre réglementaire monégasque pour le suivi des obligations de conformité des entreprises financières.",
  },
  {
    term: "Scoring",
    definition:
      "Méthode d'attribution d'un score numérique pour évaluer un risque, une opportunité ou une priorité. En conformité, le scoring automatise l'évaluation du risque client. En commercial, il hiérarchise les prospects par probabilité de conversion.",
  },
  {
    term: "SICCFIN",
    definition:
      "Service d'Information et de Contrôle sur les Circuits Financiers. Cellule de renseignement financier de la Principauté de Monaco, en charge de la lutte contre le blanchiment. Le SICCFIN définit les obligations auxquelles sont soumis les acteurs financiers monégasques.",
    link: "/secteurs/gestion-patrimoine",
  },
  {
    term: "Tokenisation",
    definition:
      "Processus de découpage du texte en unités élémentaires (tokens) compréhensibles par un modèle de langage. La tokenisation détermine la capacité de traitement et le coût d'utilisation des API d'IA générative.",
  },
  {
    term: "Transfert de compétences",
    definition:
      "Phase finale de chaque mission Quanta, au cours de laquelle nous formons vos équipes et documentons l'intégralité des solutions déployées. L'objectif est votre autonomie totale, sans dépendance à un prestataire externe.",
    link: "/methode",
  },
];

const alphabet = [...new Set(terms.map((t) => t.term[0].toUpperCase()))].sort();

export default function GlossairePage() {
  return (
    <PageLayout>
      <PageHeader
        tag="Glossaire"
        title="Glossaire IA et termes techniques."
        description="Définitions claires et accessibles des termes clés de l'intelligence artificielle, de l'automatisation et de la réglementation monégasque."
      />

      {/* Alphabet navigation */}
      <section className="section-padding section-surface py-6">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <div className="flex flex-wrap gap-2 justify-center">
              {alphabet.map((letter) => (
                <a
                  key={letter}
                  href={`#letter-${letter}`}
                  className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center text-[12px] font-semibold hover:bg-accent hover:text-dark hover:border-accent transition-colors"
                >
                  {letter}
                </a>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Terms by letter */}
      {alphabet.map((letter, i) => {
        const letterTerms = terms.filter((t) => t.term[0].toUpperCase() === letter);
        const sectionStyle = i % 2 === 0 ? "section-light" : "section-surface";
        return (
          <section key={letter} id={`letter-${letter}`} className={`section-padding ${sectionStyle}`}>
            <div className="max-w-6xl mx-auto px-6">
              <RevealOnScroll>
                <h2 className="text-2xl font-bold tracking-tight mb-6">{letter}</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {letterTerms.map((t) => (
                    <div key={t.term} className="p-6 rounded-2xl bg-surface border border-border">
                      <h3 className="text-[14px] font-bold mb-2">
                        {t.link ? (
                          <Link href={t.link} className="hover:text-accent transition-colors">
                            {t.term}
                          </Link>
                        ) : (
                          t.term
                        )}
                      </h3>
                      <p className="text-foreground/50 text-[13px] leading-relaxed">{t.definition}</p>
                    </div>
                  ))}
                </div>
              </RevealOnScroll>
            </div>
          </section>
        );
      })}

      {/* Navigation interne */}
      <section className="section-padding section-surface">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold tracking-tight mb-6">Pour aller plus loin</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/expertise" className="p-6 rounded-2xl bg-surface border border-border hover:border-accent/40 transition-colors group">
                <h3 className="text-[14px] font-semibold mb-2 group-hover:text-accent transition-colors">Nos expertises</h3>
                <p className="text-[12px] text-foreground/50 leading-relaxed">Découvrez comment nous appliquons ces technologies à vos enjeux métier.</p>
              </Link>
              <Link href="/blog" className="p-6 rounded-2xl bg-surface border border-border hover:border-accent/40 transition-colors group">
                <h3 className="text-[14px] font-semibold mb-2 group-hover:text-accent transition-colors">Blog et analyses</h3>
                <p className="text-[12px] text-foreground/50 leading-relaxed">Articles approfondis sur l'IA en entreprise et les cas d'usage à Monaco.</p>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section-tinted bg-gradient-to-b from-background via-accent-light/30 to-accent/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">Un terme vous manque ?</h2>
            <p className="text-foreground/60 text-[14px] mb-8">Contactez-nous pour un premier entretien confidentiel de 30 minutes, gratuit et sans engagement.</p>
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
