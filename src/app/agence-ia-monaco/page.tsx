import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import FAQ from "@/components/FAQ";
import FaqSchema from "@/components/FaqSchema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Agence IA Monaco : expertise locale et résultats concrets",
  description:
    "Agence IA à Monaco spécialisée dans l'intégration de l'intelligence artificielle pour les entreprises de la Principauté. Présence sur site, connaissance réglementaire, résultats mesurables.",
  alternates: { canonical: "https://quantamonaco.com/agence-ia-monaco" },
  openGraph: {
    title: "Agence IA Monaco : expertise locale et résultats concrets",
    description:
      "Agence IA à Monaco spécialisée dans l'intégration de l'intelligence artificielle pour les entreprises de la Principauté. Présence sur site, connaissance réglementaire, résultats mesurables.",
    url: "https://quantamonaco.com/agence-ia-monaco",
    siteName: "Quanta",
    locale: "fr_FR",
    type: "website",
  },
};

const faqItems = [
  {
    q: "Quelle agence IA choisir à Monaco ?",
    a: "Le choix d'une agence IA à Monaco doit reposer sur trois critères : la présence locale (capacité à intervenir sur site), la connaissance du cadre réglementaire monégasque (SICCFIN, CCAF, droit monégasque), et des résultats documentés. Quanta remplit ces trois conditions avec plus de 50 projets livrés en Principauté.",
  },
  {
    q: "Pourquoi choisir une agence IA locale plutôt qu'une agence parisienne ?",
    a: "Une agence basée à Monaco comprend les spécificités du tissu économique local : le droit monégasque, les obligations de conformité SICCFIN, la culture de discrétion propre à la Principauté, et les attentes d'une clientèle habituée à l'excellence. Une agence parisienne appliquera des solutions génériques qui ne tiennent pas compte de ces particularités.",
  },
  {
    q: "Combien coûte une mission avec une agence IA à Monaco ?",
    a: "Les missions d'intégration IA débutent à partir de 5 000 euros pour un audit stratégique, et les projets d'automatisation ou de développement sur mesure se situent entre 15 000 et 50 000 euros selon la complexité. Chaque devis est précédé d'un entretien gratuit de 30 minutes pour cadrer précisément le besoin.",
  },
  {
    q: "Quelle est la différence entre une agence IA et un cabinet de conseil en IA ?",
    a: "Une agence IA met l'accent sur la production et le déploiement : elle construit, intègre et livre des solutions opérationnelles. Un cabinet de conseil classique produit des recommandations et des rapports. Quanta combine les deux approches : nous conseillons, puis nous déployons. Pas de slide deck sans livrable concret.",
  },
  {
    q: "L'agence intervient-elle uniquement à Monaco ?",
    a: "Quanta intervient principalement à Monaco et dans l'environnement immédiat de la Principauté (Beausoleil, Cap-d'Ail, Menton). Cette focalisation géographique est un choix stratégique : elle garantit une disponibilité maximale, des déplacements rapides et une expertise réglementaire approfondie sur le contexte monégasque.",
  },
];

export default function AgenceIAMonacoPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="section-padding pt-32 sm:pt-40 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Agence IA Monaco</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4 mb-6">
              Agence IA à Monaco : votre partenaire en intelligence artificielle
            </h1>
            <p className="text-foreground/60 text-[15px] leading-relaxed max-w-3xl mx-auto mb-8">
              Quanta est l&apos;agence IA de référence à Monaco. Implantée en Principauté, notre équipe intervient sur site pour intégrer l&apos;intelligence artificielle dans vos opérations quotidiennes. Pas de solutions génériques : chaque projet est conçu pour le contexte monégasque, avec des résultats documentés et un accompagnement de proximité.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/33645636107"
                className="group bg-accent text-dark font-semibold px-6 py-3 rounded-xl text-[13px] hover:bg-accent-dark transition-all inline-flex items-center gap-2 shadow-lg shadow-accent/20"
              >
                Contacter l&apos;agence
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <Link href="/contact" className="bg-surface text-foreground font-medium px-6 py-3 rounded-xl text-[13px] border border-border hover:border-foreground/20 transition-all">
                Demander un devis
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 section-surface">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={50} suffix="+" /></div>
                <p className="text-foreground/40 text-[12px]">projets livrés en Principauté</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={100} suffix="%" /></div>
                <p className="text-foreground/40 text-[12px]">interventions sur site</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={6} /></div>
                <p className="text-foreground/40 text-[12px]">domaines d&apos;expertise IA</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={4} suffix="h" /></div>
                <p className="text-foreground/40 text-[12px]">temps de réponse moyen</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Pourquoi une agence locale */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Proximité</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Pourquoi choisir une agence IA basée à Monaco</h2>
            <div className="space-y-4 text-foreground/60 text-[14px] leading-relaxed">
              <p>
                L&apos;intelligence artificielle n&apos;est pas un produit que l&apos;on installe à distance. C&apos;est une transformation qui touche les processus, les équipes et la culture de l&apos;entreprise. Pour réussir cette transformation, il faut une présence physique : observer les flux de travail, comprendre les interactions entre services, accompagner chaque collaborateur dans le changement.
              </p>
              <p>
                Les agences parisiennes ou les prestataires internationaux proposent des visioconférences et des solutions standardisées. Le résultat ? Des outils qui ne correspondent pas à la réalité du terrain, des équipes qui n&apos;adhèrent pas, et un investissement sans retour tangible. Monaco mérite mieux.
              </p>
              <p>
                En tant qu&apos;agence IA implantée à Monaco, Quanta intervient directement dans vos locaux. Nos consultants connaissent les spécificités du droit monégasque, les exigences de la SICCFIN et de la CCAF, et les codes d&apos;une clientèle qui attend discrétion et excellence. Cette expertise locale fait toute la différence entre un projet IA qui fonctionne et un projet qui reste au stade du PowerPoint.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Dark bubble - Agence vs Conseil */}
      <section className="bg-dark text-white rounded-[2rem] mx-4 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Notre différence</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-4">Agence IA vs cabinet de conseil : ce qui nous distingue à Monaco</h2>
            <p className="text-white/50 text-[14px] leading-relaxed max-w-3xl mb-10">
              Les cabinets de conseil traditionnels produisent des rapports. Une agence IA comme Quanta produit des résultats. Voici la différence concrète dans le contexte monégasque.
            </p>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 gap-4">
            <RevealOnScroll>
              <div className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-4 text-white/70">Cabinet de conseil classique</h3>
                <ul className="space-y-2 text-white/40 text-[13px]">
                  <li>Livrables : slides et recommandations</li>
                  <li>Intervention à distance, ponctuellement sur site</li>
                  <li>Méthodologie générique, non adaptée à Monaco</li>
                  <li>Pas de déploiement technique</li>
                  <li>Engagement facturé au jour, sans garantie de résultat</li>
                </ul>
              </div>
            </RevealOnScroll>
            <RevealOnScroll>
              <div className="p-6 rounded-xl border border-accent/20 bg-accent/5">
                <h3 className="text-[14px] font-semibold mb-4 text-accent">Agence IA Quanta</h3>
                <ul className="space-y-2 text-white/60 text-[13px]">
                  <li>Livrables : solutions déployées et opérationnelles</li>
                  <li>Présence sur site à Monaco, interventions régulières</li>
                  <li>Méthodologie calibrée pour le contexte monégasque</li>
                  <li>Audit, développement et déploiement intégrés</li>
                  <li>Engagement orienté résultats avec métriques claires</li>
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Expertise réglementaire */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Réglementation</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Une agence IA qui connait le cadre réglementaire monégasque</h2>
            <div className="space-y-4 text-foreground/60 text-[14px] leading-relaxed">
              <p>
                Monaco dispose d&apos;un cadre juridique propre, distinct du droit français. Les obligations en matière de lutte contre le blanchiment (Loi 1.362), les contrôles de la SICCFIN, les exigences de la CCAF pour les professions réglementées : autant de contraintes que votre agence IA doit maitriser avant de déployer la moindre solution.
              </p>
              <p>
                Notre équipe a accompagné des <Link href="/secteurs/banque-privee" className="text-accent hover:underline">banques privées</Link>, des <Link href="/secteurs/cabinets-avocats" className="text-accent hover:underline">cabinets d&apos;avocats</Link> et des <Link href="/secteurs/gestion-patrimoine" className="text-accent hover:underline">gestionnaires de patrimoine</Link> dans l&apos;automatisation de leurs processus de conformité. Chaque solution respecte les normes locales et intègre les spécificités du contrôle monégasque.
              </p>
              <p>
                Découvrez comment nous avons automatisé le <Link href="/blog/automatiser-conformite-lcb-ft-monaco" className="text-accent hover:underline">contrôle LCB-FT pour une institution financière de Monaco</Link>, réduisant de 40 % le temps de traitement des alertes tout en améliorant la qualité de la détection.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Secteurs couverts */}
      <section className="section-padding section-surface">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Secteurs</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-8">Les secteurs accompagnés par notre agence IA à Monaco</h2>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { name: "Banque privée", href: "/secteurs/banque-privee" },
              { name: "Gestion de patrimoine", href: "/secteurs/gestion-patrimoine" },
              { name: "Immobilier de luxe", href: "/secteurs/immobilier-luxe" },
              { name: "Cabinets d'avocats", href: "/secteurs/cabinets-avocats" },
              { name: "Hôtellerie-restauration", href: "/secteurs/hotellerie-restauration" },
              { name: "Commerce de luxe", href: "/secteurs/commerce-luxe" },
              { name: "Santé et cliniques", href: "/secteurs/sante-cliniques" },
              { name: "Services professionnels", href: "/secteurs/services-professionnels" },
            ].map((s) => (
              <RevealOnScroll key={s.name}>
                <Link href={s.href} className="block p-4 rounded-xl border border-border hover:border-accent/30 transition-all text-center group">
                  <h3 className="text-[13px] font-semibold group-hover:text-accent transition-colors">{s.name}</h3>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Notre approche */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Approche</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Comment fonctionne notre agence IA à Monaco</h2>
            <div className="space-y-4 text-foreground/60 text-[14px] leading-relaxed">
              <p>
                Tout commence par un entretien gratuit de 30 minutes. Nous écoutons, nous posons les bonnes questions, et nous évaluons si l&apos;IA peut réellement créer de la valeur pour votre activité. Pas de promesses vides : si votre entreprise n&apos;est pas prête, nous vous le dirons.
              </p>
              <p>
                Si le projet fait sens, nous passons à la phase d&apos;<Link href="/expertise/audit-strategie-ia" className="text-accent hover:underline">audit stratégique IA</Link>. Nos consultants viennent dans vos locaux, observent vos processus, échangent avec vos équipes. En une à deux semaines, nous produisons une cartographie précise de vos opportunités d&apos;automatisation.
              </p>
              <p>
                Puis vient le déploiement. Qu&apos;il s&apos;agisse d&apos;<Link href="/expertise/automatisation-processus" className="text-accent hover:underline">automatiser vos processus</Link>, de <Link href="/expertise/developpement-ia-sur-mesure" className="text-accent hover:underline">développer un outil IA sur mesure</Link> ou de <Link href="/expertise/formation-ia" className="text-accent hover:underline">former vos équipes</Link>, chaque étape suit notre <Link href="/methode" className="text-accent hover:underline">méthodologie en quatre phases</Link> : immersion, diagnostic, déploiement, transmission.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Résultats */}
      <section className="section-padding section-surface">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Impact</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Résultats obtenus par notre agence IA pour des clients monégasques</h2>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="p-5 rounded-2xl border border-border bg-surface text-center">
                <div className="text-2xl font-bold tracking-tight text-accent mb-1"><AnimatedCounter value={50} suffix="+" /></div>
                <p className="text-foreground/50 text-[12px]">projets IA déployés</p>
              </div>
              <div className="p-5 rounded-2xl border border-border bg-surface text-center">
                <div className="text-2xl font-bold tracking-tight text-accent mb-1"><AnimatedCounter value={30} suffix="%" /></div>
                <p className="text-foreground/50 text-[12px]">gain de productivité moyen</p>
              </div>
              <div className="p-5 rounded-2xl border border-border bg-surface text-center">
                <div className="text-2xl font-bold tracking-tight text-accent mb-1"><AnimatedCounter value={95} suffix="%" /></div>
                <p className="text-foreground/50 text-[12px]">taux de satisfaction client</p>
              </div>
            </div>
            <p className="text-foreground/60 text-[14px] leading-relaxed">
              Consultez nos <Link href="/resultats" className="text-accent hover:underline">études de cas et résultats documentés</Link> pour voir l&apos;impact concret de nos interventions sur des entreprises de la Principauté.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Questions fréquentes</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-8">Questions sur notre agence IA à Monaco</h2>
          </RevealOnScroll>
          <FAQ items={faqItems} />
          <FaqSchema items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-background via-accent-light/30 to-accent/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">Travaillons ensemble sur votre projet IA à Monaco</h2>
            <p className="text-foreground/60 text-[14px] mb-8">
              Premier entretien de 30 minutes offert. Nous identifions vos leviers prioritaires et vous donnons une estimation claire du potentiel de l&apos;IA pour votre activité.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="https://wa.me/33645636107" className="group bg-accent text-dark font-semibold px-6 py-3 rounded-xl text-[13px] hover:bg-accent-dark transition-all inline-flex items-center gap-2 shadow-lg shadow-accent/20">
                Échanger sur WhatsApp
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <Link href="/contact" className="bg-surface text-foreground font-medium px-6 py-3 rounded-xl text-[13px] border border-border hover:border-foreground/20 transition-all">
                Formulaire de contact
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </PageLayout>
  );
}
