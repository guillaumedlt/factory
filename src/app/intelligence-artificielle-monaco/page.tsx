import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import FAQ from "@/components/FAQ";
import FaqSchema from "@/components/FaqSchema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Intelligence artificielle Monaco : transformer votre entreprise",
  description:
    "Comment l'intelligence artificielle transforme concrètement les entreprises à Monaco. Impact secteur par secteur, ROI documenté, cadre réglementaire et guide pour démarrer.",
  alternates: { canonical: "https://quantamonaco.com/intelligence-artificielle-monaco" },
  openGraph: {
    title: "Intelligence artificielle Monaco : transformer votre entreprise",
    description:
      "Comment l'intelligence artificielle transforme concrètement les entreprises à Monaco. Impact secteur par secteur, ROI documenté, cadre réglementaire et guide pour démarrer.",
    url: "https://quantamonaco.com/intelligence-artificielle-monaco",
    siteName: "Quanta",
    locale: "fr_FR",
    type: "website",
  },
};

const faqItems = [
  {
    q: "Qu'est-ce que l'intelligence artificielle peut apporter à une entreprise à Monaco ?",
    a: "L'intelligence artificielle permet d'automatiser les tâches répétitives (saisie, tri, reporting), d'améliorer la prise de décision grâce à l'analyse de données, de personnaliser l'expérience client à grande échelle, et de renforcer la conformité réglementaire. Pour une entreprise monégasque, cela se traduit concrètement par 15 à 30 heures récupérées par semaine, une réduction des erreurs de 80 % et une accélération des processus critiques.",
  },
  {
    q: "Le programme Extended Monaco inclut-il des aides pour l'IA ?",
    a: "Le programme Extended Monaco vise à faire de la Principauté un pôle d'excellence numérique. Il favorise la transformation digitale des entreprises locales et soutient l'adoption de technologies avancées, dont l'intelligence artificielle. Les entreprises monégasques peuvent bénéficier d'un écosystème favorable et d'initiatives gouvernementales pour accélérer leur transition numérique.",
  },
  {
    q: "L'intelligence artificielle respecte-t-elle la confidentialité des données à Monaco ?",
    a: "Oui, à condition de travailler avec un prestataire qui connait le cadre juridique monégasque. Monaco dispose de sa propre législation en matière de protection des données (Loi n. 1.165). Les solutions IA que nous déployons intègrent dès la conception le respect de la confidentialité, le chiffrement des données et la conformité aux obligations locales.",
  },
  {
    q: "Quels sont les premiers processus à automatiser avec l'IA à Monaco ?",
    a: "Les processus les plus rentables à automatiser en priorité sont : la conformité documentaire (KYC, LCB-FT), le reporting client, la gestion des emails et relances, la production de contenus marketing, et le suivi comptable. Ces cinq leviers génèrent le retour sur investissement le plus rapide, souvent dès les premières semaines.",
  },
  {
    q: "Faut-il des compétences techniques pour utiliser l'IA en entreprise ?",
    a: "Non. Les solutions d'intelligence artificielle modernes sont conçues pour être utilisées par des non-techniciens. Notre approche inclut une phase de formation complète où chaque collaborateur apprend à utiliser les outils déployés dans son contexte métier. L'objectif est l'autonomie totale de vos équipes après la mission.",
  },
];

export default function IntelligenceArtificielleMonacoPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="section-padding pt-32 sm:pt-40 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Intelligence artificielle Monaco</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4 mb-6">
              L&apos;intelligence artificielle au service des entreprises monégasques
            </h1>
            <p className="text-foreground/60 text-[15px] leading-relaxed max-w-3xl mx-auto mb-8">
              L&apos;intelligence artificielle à Monaco n&apos;est plus un sujet de prospective. C&apos;est un levier opérationnel que les entreprises de la Principauté utilisent dès aujourd&apos;hui pour automatiser leurs processus, améliorer leur service client et renforcer leur conformité. Voici ce que cela signifie concrètement pour votre activité.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/33645636107"
                className="group bg-accent text-dark font-semibold px-6 py-3 rounded-xl text-[13px] hover:bg-accent-dark transition-all inline-flex items-center gap-2 shadow-lg shadow-accent/20"
              >
                Évaluer le potentiel IA de votre entreprise
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <Link href="/contact" className="bg-surface text-foreground font-medium px-6 py-3 rounded-xl text-[13px] border border-border hover:border-foreground/20 transition-all">
                Prendre rendez-vous
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
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={70} suffix="%" /></div>
                <p className="text-foreground/40 text-[12px]">de tâches répétitives automatisables</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={20} suffix="h" /></div>
                <p className="text-foreground/40 text-[12px]">récupérées par semaine en moyenne</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={80} suffix="%" /></div>
                <p className="text-foreground/40 text-[12px]">de réduction des erreurs manuelles</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={6} suffix=" mois" /></div>
                <p className="text-foreground/40 text-[12px]">pour un retour sur investissement</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Avant / Après */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Impact concret</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Avant et après l&apos;intelligence artificielle : ce qui change vraiment</h2>
            <p className="text-foreground/60 text-[14px] leading-relaxed mb-8">
              L&apos;intelligence artificielle ne remplace pas vos équipes. Elle supprime les tâches sans valeur ajoutée pour que vos collaborateurs se concentrent sur ce qui compte : le conseil, la relation client, la stratégie. Voici des exemples concrets observés chez nos clients monégasques.
            </p>
          </RevealOnScroll>
          <div className="space-y-3">
            {[
              { before: "Vérification manuelle de 200 documents KYC par mois", after: "Contrôle automatisé en temps réel, alertes uniquement sur les anomalies", gain: "15h/semaine" },
              { before: "Rédaction de 20 emails de relance par jour", after: "Séquences personnalisées générées et envoyées automatiquement", gain: "8h/semaine" },
              { before: "3 jours pour produire un reporting client trimestriel", after: "Rapport généré en 15 minutes avec données actualisées", gain: "12h/trimestre" },
              { before: "Recherche juridique manuelle sur 5 bases de données", after: "Synthèse multi-sources en quelques minutes avec citations", gain: "10h/semaine" },
            ].map((item, i) => (
              <RevealOnScroll key={i}>
                <div className="grid sm:grid-cols-[1fr_auto_1fr] gap-4 items-center p-5 rounded-2xl border border-border bg-surface">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-foreground/30 font-semibold">Avant</span>
                    <p className="text-foreground/60 text-[13px] mt-1">{item.before}</p>
                  </div>
                  <div className="hidden sm:flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-accent font-semibold">Après</span>
                    <p className="text-foreground/80 text-[13px] mt-1">{item.after}</p>
                    <span className="text-accent text-[11px] font-bold mt-1 inline-block">{item.gain} récupérées</span>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Impact secteur par secteur - Dark bubble */}
      <section className="bg-dark text-white rounded-[2rem] mx-4 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Par secteur</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-4">L&apos;intelligence artificielle à Monaco, secteur par secteur</h2>
            <p className="text-white/50 text-[14px] leading-relaxed max-w-3xl mb-10">
              Chaque industrie de la Principauté tire un bénéfice différent de l&apos;intelligence artificielle. Voici les cas d&apos;usage les plus impactants pour les huit secteurs clés de l&apos;économie monégasque.
            </p>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { name: "Banque privée", href: "/secteurs/banque-privee", impact: "Conformité LCB-FT automatisée, analyse de portefeuille en temps réel, reporting client personnalisé." },
              { name: "Gestion de patrimoine", href: "/secteurs/gestion-patrimoine", impact: "Due diligence accélérée, suivi de performance automatisé, alertes proactives sur les opportunités." },
              { name: "Immobilier de luxe", href: "/secteurs/immobilier-luxe", impact: "Dossiers de présentation générés en minutes, estimation prédictive, matching acheteur-bien." },
              { name: "Cabinets d'avocats", href: "/secteurs/cabinets-avocats", impact: "Recherche juridique multi-juridictions, production d'actes standardisés, veille réglementaire." },
              { name: "Hôtellerie-restauration", href: "/secteurs/hotellerie-restauration", impact: "Gestion des avis en temps réel, revenue management, personnalisation du parcours client." },
              { name: "Commerce de luxe", href: "/secteurs/commerce-luxe", impact: "Clienteling prédictif, gestion de stock optimisée, campagnes marketing personnalisées." },
              { name: "Santé et cliniques", href: "/secteurs/sante-cliniques", impact: "Parcours patient digitalisé, documentation médicale assistée, planification optimisée." },
              { name: "Services professionnels", href: "/secteurs/services-professionnels", impact: "Propositions commerciales automatisées, facturation intelligente, prospection ciblée." },
            ].map((s) => (
              <RevealOnScroll key={s.name}>
                <Link href={s.href} className="block p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] transition-all group">
                  <h3 className="text-[13px] font-semibold group-hover:text-accent transition-colors">{s.name}</h3>
                  <p className="text-white/35 text-[12px] mt-1 leading-relaxed">{s.impact}</p>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Retour sur investissement</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Le ROI de l&apos;intelligence artificielle pour une entreprise monégasque</h2>
            <div className="space-y-4 text-foreground/60 text-[14px] leading-relaxed">
              <p>
                L&apos;investissement dans l&apos;intelligence artificielle à Monaco n&apos;est pas un pari. C&apos;est un calcul. Pour chaque processus automatisé, nous mesurons trois indicateurs : le temps récupéré, la réduction des erreurs et l&apos;impact sur le chiffre d&apos;affaires.
              </p>
              <p>
                Sur l&apos;ensemble de nos missions, le retour sur investissement moyen se situe entre 3 et 6 mois. Concrètement, une entreprise de 10 personnes qui investit 20 000 euros dans l&apos;automatisation de ses processus récupère en moyenne 20 heures par semaine, soit l&apos;équivalent d&apos;un demi-poste. En un an, l&apos;économie dépasse largement l&apos;investissement initial.
              </p>
              <p>
                Consultez nos <Link href="/resultats" className="text-accent hover:underline">études de cas avec métriques détaillées</Link> pour des chiffres spécifiques à votre secteur d&apos;activité.
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <div className="p-5 rounded-2xl border border-border bg-surface text-center">
                <div className="text-2xl font-bold tracking-tight text-accent mb-1"><AnimatedCounter value={3} suffix="-6 mois" /></div>
                <p className="text-foreground/50 text-[12px]">retour sur investissement moyen</p>
              </div>
              <div className="p-5 rounded-2xl border border-border bg-surface text-center">
                <div className="text-2xl font-bold tracking-tight text-accent mb-1"><AnimatedCounter value={200} suffix="%" /></div>
                <p className="text-foreground/50 text-[12px]">ROI moyen sur 12 mois</p>
              </div>
              <div className="p-5 rounded-2xl border border-border bg-surface text-center">
                <div className="text-2xl font-bold tracking-tight text-accent mb-1"><AnimatedCounter value={5000} prefix="" suffix=" EUR" /></div>
                <p className="text-foreground/50 text-[12px]">investissement minimum pour démarrer</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Extended Monaco et contexte réglementaire */}
      <section className="section-padding section-surface">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Contexte</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Intelligence artificielle et cadre institutionnel à Monaco</h2>
            <div className="space-y-4 text-foreground/60 text-[14px] leading-relaxed">
              <p>
                La Principauté de Monaco a fait de la transformation numérique une priorité stratégique. Le programme <Link href="/blog/extended-monaco-programme-digital-principaute" className="text-accent hover:underline">Extended Monaco</Link> porte cette ambition avec des investissements significatifs dans les infrastructures digitales et l&apos;accompagnement des entreprises locales.
              </p>
              <p>
                Dans ce contexte favorable, l&apos;intelligence artificielle s&apos;impose comme le prochain palier de maturité numérique. Les entreprises qui ont digitalisé leurs processus de base peuvent maintenant les rendre intelligents : anticipation, personnalisation, optimisation automatique.
              </p>
              <p>
                Le cadre réglementaire monégasque, souvent perçu comme une contrainte, est en réalité un atout pour l&apos;adoption de l&apos;IA. Les obligations de conformité (SICCFIN, CCAF) créent un volume considérable de tâches répétitives et documentées, exactement le type de processus que l&apos;intelligence artificielle automatise le mieux. C&apos;est pourquoi les secteurs les plus régulés sont souvent ceux qui tirent le plus grand bénéfice de l&apos;IA.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Comment démarrer */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Par où commencer</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Comment intégrer l&apos;intelligence artificielle dans votre entreprise à Monaco</h2>
            <div className="space-y-4 text-foreground/60 text-[14px] leading-relaxed mb-8">
              <p>
                La première étape n&apos;est pas technique. Elle est stratégique. Avant de choisir un outil ou un prestataire, vous devez identifier les processus qui concentrent le plus de temps perdu, d&apos;erreurs récurrentes ou de frustrations pour vos équipes. C&apos;est là que l&apos;IA créera le plus de valeur.
              </p>
              <p>
                Notre <Link href="/expertise/audit-strategie-ia" className="text-accent hover:underline">audit stratégique IA</Link> est conçu exactement pour cela. En une à deux semaines, nous cartographions vos opérations et identifions les cinq à dix leviers les plus rentables. Vous repartez avec une feuille de route claire, chiffrée et priorisée.
              </p>
              <p>
                Pour approfondir le sujet avant de nous contacter, consultez notre article sur les <Link href="/blog/5-processus-rentables-automatiser" className="text-accent hover:underline">5 processus les plus rentables à automatiser</Link> ou notre guide sur le choix du bon <Link href="/blog/chatgpt-claude-entreprise-monaco-quel-llm-choisir" className="text-accent hover:underline">modèle d&apos;IA pour votre entreprise</Link>.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding section-surface">
        <div className="max-w-3xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Questions fréquentes</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-8">Questions sur l&apos;intelligence artificielle à Monaco</h2>
          </RevealOnScroll>
          <FAQ items={faqItems} />
          <FaqSchema items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-background via-accent-light/30 to-accent/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">Explorez le potentiel de l&apos;intelligence artificielle pour votre entreprise</h2>
            <p className="text-foreground/60 text-[14px] mb-8">
              Un entretien de 30 minutes pour comprendre ce que l&apos;IA peut apporter à votre activité à Monaco. Sans jargon, sans engagement.
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
