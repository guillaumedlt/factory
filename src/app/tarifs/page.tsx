import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import FAQ from "@/components/FAQ";
import FaqSchema from "@/components/FaqSchema";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tarifs et investissement IA",
  description:
    "Grilles tarifaires indicatives pour nos missions IA à Monaco. Audit, automatisation, développement sur mesure, formation. ROI dès les premiers mois.",
  alternates: { canonical: "https://factory-ai.com/tarifs" },
  openGraph: {
    title: "Tarifs et investissement IA",
    description:
      "Grilles tarifaires indicatives pour nos missions IA à Monaco. Audit, automatisation, développement sur mesure, formation. ROI dès les premiers mois.",
    url: "https://factory-ai.com/tarifs",
    siteName: "Factory",
    locale: "fr_FR",
    type: "website",
  },
};

const offers = [
  {
    title: "Audit & Diagnostic",
    price: "À partir de 5 000 \u20AC",
    duration: "1 à 3 semaines",
    items: [
      "Entretiens individuels avec vos équipes",
      "Cartographie des processus existants",
      "Identification des leviers d'automatisation",
      "Scoring des opportunités par ROI",
      "Feuille de route priorisée",
      "Présentation au comité de direction",
    ],
  },
  {
    title: "Automatisation",
    price: "10 000 \u2013 40 000 \u20AC",
    duration: "4 à 8 semaines",
    items: [
      "Automatisation de workflows ciblés",
      "Intégration avec vos outils existants",
      "Extraction et traitement documentaire",
      "Tests en conditions réelles",
      "Mise en production progressive",
      "Formation des utilisateurs",
    ],
  },
  {
    title: "Développement sur mesure",
    price: "Sur devis",
    duration: "6 à 12 semaines",
    items: [
      "Conception d'outils internes IA",
      "Agents conversationnels spécialisés",
      "Tableaux de bord intelligents",
      "Intégration API avancées",
      "Architecture technique complète",
      "Maintenance et évolutions",
    ],
  },
  {
    title: "Formation",
    price: "À partir de 2 000 \u20AC/jour",
    duration: "1 à 5 jours",
    items: [
      "IA générative et prompt engineering",
      "Automatisation no-code avec n8n",
      "Ateliers pratiques sur cas réels",
      "Supports de formation personnalisés",
      "Sessions adaptées à chaque profil",
      "Suivi post-formation inclus",
    ],
  },
];

const inclus = [
  {
    title: "Confidentialité garantie",
    text: "Accord de confidentialité signé avant chaque mission. Données chiffrées et hébergées en Europe.",
  },
  {
    title: "Documentation complète",
    text: "Documentation technique et fonctionnelle livrée à la fin de chaque mission. Guides de référence pour vos équipes.",
  },
  {
    title: "Support post-déploiement",
    text: "30 jours de support inclus après chaque déploiement. Réactivité garantie pour les ajustements.",
  },
  {
    title: "Formation des équipes",
    text: "Sessions pratiques adaptées à chaque profil utilisateur. L'objectif est votre autonomie complète.",
  },
  {
    title: "Propriété intellectuelle",
    text: "Vous êtes propriétaire de l'intégralité des solutions développées. Aucun verrouillage technique.",
  },
  {
    title: "Indicateurs de suivi",
    text: "Tableau de bord de mesure des gains mis en place à chaque déploiement. Bilan chiffré en fin de mission.",
  },
];

const faqItems = [
  {
    q: "Les tarifs sont-ils négociables ?",
    a: "Nos tarifs sont calibrés pour refléter la qualité de notre intervention et l'expertise mobilisée. Le périmètre de chaque mission est ajusté à vos besoins et votre budget. Nous préférons adapter le scope plutôt que de réduire la qualité d'exécution.",
  },
  {
    q: "Proposez-vous des facilités de paiement ?",
    a: "Oui. Pour les projets dépassant 15 000 euros, nous proposons un échelonnement en deux ou trois versements alignés sur les phases de la mission. Un acompte de 30 % est demandé au démarrage.",
  },
  {
    q: "Que se passe-t-il si le projet dépasse le budget initial ?",
    a: "Le périmètre et le budget sont définis et validés avant le démarrage. Toute évolution de scope fait l'objet d'un avenant discuté en amont. Il n'y a jamais de surprise sur la facture finale.",
  },
  {
    q: "Est-il possible de commencer par un petit projet pour tester ?",
    a: "Absolument. Nous recommandons de démarrer par un audit ou un projet pilote ciblé. Cela permet de valider la pertinence de notre approche et de mesurer les premiers résultats avant un engagement plus large.",
  },
  {
    q: "Les formations sont-elles éligibles à des aides ou financements ?",
    a: "Nos formations peuvent être éligibles à certains dispositifs de financement de la formation professionnelle selon votre structure juridique et votre implantation. Nous vous accompagnons dans les démarches si nécessaire.",
  },
];

export default function TarifsPage() {
  return (
    <PageLayout>
      <FaqSchema items={faqItems} />

      <PageHeader
        tag="Tarifs"
        title="Investissement transparent, résultats mesurables."
        description="Des grilles tarifaires claires, adaptées à la taille et aux enjeux de votre organisation à Monaco. Chaque mission est dimensionnée pour maximiser le retour sur investissement."
      />

      {/* Intro */}
      <section className="section-padding section-light">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <p className="text-foreground/60 text-[14px] leading-relaxed mb-5">
              Nous croyons à la transparence tarifaire. Les grilles ci-dessous donnent une indication fiable des budgets à prévoir selon le type de mission. Chaque projet fait l'objet d'un devis détaillé après un premier entretien gratuit.
            </p>
            <p className="text-foreground/60 text-[14px] leading-relaxed">
              Notre objectif est que chaque euro investi génère un retour mesurable. Les entreprises que nous accompagnons à Monaco constatent en moyenne un payback en trois mois et un ROI multiplié par trois sur la première année.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="section-padding section-surface">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {offers.map((offer, i) => (
              <RevealOnScroll key={offer.title} delay={i * 100}>
                <div className="p-7 rounded-2xl bg-surface border border-border flex flex-col h-full">
                  <h2 className="text-[15px] font-bold mb-3">{offer.title}</h2>
                  <p className="text-xl font-bold tracking-tight text-accent mb-1">{offer.price}</p>
                  <p className="text-[11px] text-muted uppercase tracking-wider mb-6">{offer.duration}</p>
                  <ul className="space-y-2.5 flex-1">
                    {offer.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[13px] text-foreground/60 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-[6px] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ROI metrics */}
      <section className="section-padding section-tinted">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <div className="rounded-2xl bg-dark text-white p-10 sm:p-14">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-8 text-center">Retour sur investissement constaté</h2>
              <div className="grid sm:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold tracking-tight mb-2">
                    <AnimatedCounter value={3} suffix=" mois" />
                  </div>
                  <p className="text-white/50 text-[13px]">payback moyen</p>
                </div>
                <div>
                  <div className="text-3xl font-bold tracking-tight mb-2">
                    <AnimatedCounter value={3} suffix="x" />
                  </div>
                  <p className="text-white/50 text-[13px]">ROI constaté</p>
                </div>
                <div>
                  <div className="text-3xl font-bold tracking-tight mb-2">
                    <AnimatedCounter value={98} suffix="%" />
                  </div>
                  <p className="text-white/50 text-[13px]">clients satisfaits</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Ce qui est toujours inclus */}
      <section className="section-padding section-light">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-8">Ce qui est toujours inclus</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {inclus.map((item, i) => (
                <div key={item.title} className="p-6 rounded-2xl bg-surface border border-border">
                  <h3 className="text-[14px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[12px] text-foreground/50 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQ tarifs */}
      <section className="section-padding section-surface">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-8">Questions fréquentes sur nos tarifs</h2>
            <FAQ items={faqItems} />
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section-tinted bg-gradient-to-b from-background via-accent-light/30 to-accent/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">Obtenez un devis personnalisé</h2>
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
