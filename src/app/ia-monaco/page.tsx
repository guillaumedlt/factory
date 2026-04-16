import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import FAQ from "@/components/FAQ";
import FaqSchema from "@/components/FaqSchema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IA Monaco : cabinet d'expertise en intelligence artificielle",
  description:
    "Cabinet spécialisé en IA à Monaco. Audit, automatisation, développement sur mesure et formation pour les entreprises de la Principauté. Résultats mesurables en 12 semaines.",
  alternates: { canonical: "https://quantamonaco.com/ia-monaco" },
  openGraph: {
    title: "IA Monaco : cabinet d'expertise en intelligence artificielle",
    description:
      "Cabinet spécialisé en IA à Monaco. Audit, automatisation, développement sur mesure et formation pour les entreprises de la Principauté. Résultats mesurables en 12 semaines.",
    url: "https://quantamonaco.com/ia-monaco",
    siteName: "Quanta",
    locale: "fr_FR",
    type: "website",
  },
};

const faqItems = [
  {
    q: "Quels services d'IA propose Quanta à Monaco ?",
    a: "Quanta couvre six domaines d'expertise en intelligence artificielle : l'audit stratégique IA, l'automatisation des processus, le développement sur mesure, le marketing et l'acquisition, la création d'outils internes, et la formation des équipes. Chaque intervention est adaptée au contexte monégasque et aux contraintes réglementaires locales.",
  },
  {
    q: "Combien de temps faut-il pour intégrer l'IA dans une entreprise à Monaco ?",
    a: "Un projet typique d'intégration IA se déroule en 8 à 12 semaines, de l'audit initial à la mise en production. La phase d'immersion dure 1 à 2 semaines, le diagnostic 1 semaine, le déploiement 4 à 8 semaines, et la transmission des compétences 2 semaines. Les premiers résultats concrets apparaissent généralement dès la sixième semaine.",
  },
  {
    q: "L'IA est-elle adaptée aux petites entreprises de Monaco ?",
    a: "Absolument. L'intelligence artificielle n'est pas réservée aux grands groupes. Une entreprise de 5 à 10 personnes peut automatiser sa facturation, son suivi client ou sa conformité documentaire et récupérer 15 à 20 heures par semaine. Le retour sur investissement est souvent plus rapide pour les petites structures car les gains de productivité sont immédiatement perceptibles.",
  },
  {
    q: "Quels secteurs d'activité à Monaco bénéficient le plus de l'IA ?",
    a: "Huit secteurs concentrent le plus fort potentiel : la banque privée et la gestion de patrimoine, l'immobilier de luxe, les cabinets d'avocats, l'hôtellerie-restauration, le commerce de luxe, la santé, les services professionnels et les family offices. Chaque secteur présente des cas d'usage spécifiques avec un ROI documenté.",
  },
  {
    q: "Quelle est la différence entre Quanta et les grandes agences parisiennes ?",
    a: "Quanta est implanté à Monaco et intervient exclusivement en Principauté. Cette proximité signifie une connaissance approfondie des réglementations locales (SICCFIN, CCAF), une présence physique pour les sessions de travail, et une compréhension de la culture d'affaires monégasque. Les grandes agences parisiennes proposent des solutions génériques sans ancrage local.",
  },
];

const sectors = [
  { name: "Banque privée", href: "/secteurs/banque-privee", desc: "Conformité, reporting, analyse de portefeuille" },
  { name: "Gestion de patrimoine", href: "/secteurs/gestion-patrimoine", desc: "Due diligence, suivi client, allocation" },
  { name: "Immobilier de luxe", href: "/secteurs/immobilier-luxe", desc: "Dossiers de présentation, estimation, CRM" },
  { name: "Cabinets d'avocats", href: "/secteurs/cabinets-avocats", desc: "Recherche juridique, production d'actes" },
  { name: "Hôtellerie-restauration", href: "/secteurs/hotellerie-restauration", desc: "Avis clients, revenue management" },
  { name: "Commerce de luxe", href: "/secteurs/commerce-luxe", desc: "Clienteling, personnalisation, stock" },
  { name: "Santé et cliniques", href: "/secteurs/sante-cliniques", desc: "Parcours patient, documentation médicale" },
  { name: "Services professionnels", href: "/secteurs/services-professionnels", desc: "Propositions, facturation, prospection" },
];

export default function IAMonacoPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="section-padding pt-32 sm:pt-40 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">IA Monaco</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4 mb-6">
              Intelligence artificielle à Monaco : services, expertise et accompagnement
            </h1>
            <p className="text-foreground/60 text-[15px] leading-relaxed max-w-3xl mx-auto mb-8">
              L&apos;IA à Monaco n&apos;est plus une option. Les entreprises de la Principauté qui intègrent l&apos;intelligence artificielle dans leurs opérations gagnent en moyenne 30 % de productivité sur les processus automatisés. Quanta est le cabinet de référence en IA à Monaco : nous accompagnons les dirigeants monégasques dans cette transformation avec rigueur, proximité et résultats mesurables.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/33645636107"
                className="group bg-accent text-dark font-semibold px-6 py-3 rounded-xl text-[13px] hover:bg-accent-dark transition-all inline-flex items-center gap-2 shadow-lg shadow-accent/20"
              >
                Discuter de votre projet IA
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
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={50} suffix="+" /></div>
                <p className="text-foreground/40 text-[12px]">projets IA livrés à Monaco</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={8} /></div>
                <p className="text-foreground/40 text-[12px]">secteurs couverts</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={30} suffix="%" /></div>
                <p className="text-foreground/40 text-[12px]">gain de productivité moyen</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={12} suffix=" sem." /></div>
                <p className="text-foreground/40 text-[12px]">délai max de déploiement</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Pourquoi l'IA à Monaco maintenant */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Contexte</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Pourquoi l&apos;IA à Monaco est devenue incontournable</h2>
            <div className="space-y-4 text-foreground/60 text-[14px] leading-relaxed">
              <p>
                La Principauté de Monaco vit une accélération sans précédent de sa transformation numérique. Le programme <Link href="/blog/extended-monaco-programme-digital-principaute" className="text-accent hover:underline">Extended Monaco</Link>, lancé par le gouvernement, a posé les bases d&apos;une économie digitale ambitieuse. Mais la vraie révolution vient de l&apos;intelligence artificielle appliquée aux métiers.
              </p>
              <p>
                Les entreprises monégasques font face à des contraintes spécifiques : un cadre réglementaire exigeant (SICCFIN, CCAF, lois anti-blanchiment), une clientèle internationale habituée à l&apos;excellence, et une concurrence accrue des places financières voisines. L&apos;IA permet de répondre à ces trois défis simultanément : conformité automatisée, service personnalisé à grande échelle, et efficacité opérationnelle supérieure.
              </p>
              <p>
                Selon notre expérience terrain, les entreprises qui intègrent l&apos;intelligence artificielle dans leurs processus critiques constatent une réduction de 40 à 70 % du temps consacré aux tâches répétitives. Pour une banque privée, cela signifie des heures libérées pour le conseil client. Pour un cabinet d&apos;avocats, davantage de temps consacré à la stratégie plutôt qu&apos;à la recherche documentaire.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Nos expertises IA */}
      <section className="section-padding section-surface">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Expertises</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-8">Six expertises IA pour transformer vos opérations à Monaco</h2>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Audit stratégique IA", href: "/expertise/audit-strategie-ia", text: "Cartographie de vos processus et identification des leviers d'automatisation les plus rentables pour votre activité." },
              { title: "Automatisation des processus", href: "/expertise/automatisation-processus", text: "Suppression des tâches répétitives : saisie, tri, relances, reporting. Vos équipes se concentrent sur la valeur ajoutée." },
              { title: "Développement IA sur mesure", href: "/expertise/developpement-ia-sur-mesure", text: "Agents IA, chatbots, outils d'analyse et applications métier conçus spécifiquement pour votre contexte." },
              { title: "Marketing et acquisition", href: "/expertise/marketing-acquisition", text: "Contenus, campagnes email, SEO et prospection optimisés par l'intelligence artificielle pour générer plus de leads qualifiés." },
              { title: "Outils internes", href: "/expertise/outils-internes", text: "Tableaux de bord, CRM enrichis, bases de données intelligentes qui centralisent et valorisent vos informations." },
              { title: "Formation IA", href: "/expertise/formation-ia", text: "Programmes de montée en compétences adaptés à chaque profil, de la direction aux équipes opérationnelles." },
            ].map((e) => (
              <RevealOnScroll key={e.title}>
                <Link href={e.href} className="block p-6 rounded-2xl border border-border bg-surface hover:border-accent/30 transition-all group">
                  <h3 className="text-[14px] font-semibold mb-2 group-hover:text-accent transition-colors">{e.title}</h3>
                  <p className="text-foreground/50 text-[13px] leading-relaxed">{e.text}</p>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 8 secteurs - Dark bubble */}
      <section className="bg-dark text-white rounded-[2rem] mx-4 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Secteurs</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-4">IA à Monaco : huit secteurs, huit transformations</h2>
            <p className="text-white/50 text-[14px] leading-relaxed max-w-3xl mb-10">
              Chaque secteur d&apos;activité à Monaco présente des cas d&apos;usage spécifiques. Notre expertise couvre l&apos;ensemble du tissu économique de la Principauté, avec des résultats documentés et des références vérifiables.
            </p>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {sectors.map((s) => (
              <RevealOnScroll key={s.name}>
                <Link href={s.href} className="block p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] transition-all group">
                  <h3 className="text-[13px] font-semibold group-hover:text-accent transition-colors">{s.name}</h3>
                  <p className="text-white/35 text-[12px] mt-1">{s.desc}</p>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Notre méthode */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Méthode</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Comment nous intégrons l&apos;IA dans votre entreprise à Monaco</h2>
            <p className="text-foreground/60 text-[14px] leading-relaxed mb-8">
              Notre <Link href="/methode" className="text-accent hover:underline">méthode d&apos;intégration IA</Link> repose sur quatre phases éprouvées. Pas de théorie abstraite : chaque étape produit des livrables concrets et mesurables.
            </p>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { n: "01", title: "Immersion", dur: "1-2 semaines", text: "Entretiens avec vos équipes, observation des processus, cartographie des flux. Nous comprenons votre activité avant de proposer quoi que ce soit." },
              { n: "02", title: "Diagnostic", dur: "1 semaine", text: "Scoring de chaque processus sur 5 critères. Matrice d'opportunités priorisée par ROI et faisabilité. Présentation à la direction." },
              { n: "03", title: "Déploiement", dur: "4-8 semaines", text: "Mise en place des solutions IA retenues. Prototypage rapide, tests en conditions réelles, itérations courtes et mise en production progressive." },
              { n: "04", title: "Transmission", dur: "2 semaines", text: "Formation de vos équipes, documentation complète, indicateurs de suivi. Objectif : votre autonomie totale." },
            ].map((p) => (
              <RevealOnScroll key={p.n}>
                <div className="p-6 rounded-2xl border border-border bg-surface">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-accent text-[11px] font-bold bg-accent/10 px-2 py-1 rounded">{p.n}</span>
                    <h3 className="text-[14px] font-semibold">{p.title}</h3>
                    <span className="text-foreground/30 text-[11px] ml-auto">{p.dur}</span>
                  </div>
                  <p className="text-foreground/50 text-[13px] leading-relaxed">{p.text}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Résultats */}
      <section className="section-padding section-surface">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Résultats</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Des résultats concrets pour les entreprises monégasques</h2>
            <p className="text-foreground/60 text-[14px] leading-relaxed mb-6">
              Chaque mission produit des résultats quantifiables. Consultez nos <Link href="/resultats" className="text-accent hover:underline">études de cas détaillées</Link> pour découvrir l&apos;impact de l&apos;IA sur des entreprises similaires à la vôtre.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl border border-border bg-surface text-center">
                <div className="text-2xl font-bold tracking-tight text-accent mb-1"><AnimatedCounter value={40} suffix="%" /></div>
                <p className="text-foreground/50 text-[12px]">de temps économisé sur la conformité documentaire</p>
              </div>
              <div className="p-5 rounded-2xl border border-border bg-surface text-center">
                <div className="text-2xl font-bold tracking-tight text-accent mb-1"><AnimatedCounter value={3} suffix="x" /></div>
                <p className="text-foreground/50 text-[12px]">plus de leads qualifiés en marketing</p>
              </div>
              <div className="p-5 rounded-2xl border border-border bg-surface text-center">
                <div className="text-2xl font-bold tracking-tight text-accent mb-1"><AnimatedCounter value={20} suffix="h" /></div>
                <p className="text-foreground/50 text-[12px]">récupérées par semaine en moyenne</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Ressources et blog */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Ressources</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Approfondir le sujet de l&apos;IA à Monaco</h2>
            <p className="text-foreground/60 text-[14px] leading-relaxed mb-8">
              Notre blog couvre l&apos;actualité de l&apos;intelligence artificielle appliquée aux entreprises monégasques. Articles de fond, guides pratiques et retours d&apos;expérience.
            </p>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: "5 processus rentables à automatiser", href: "/blog/5-processus-rentables-automatiser" },
              { title: "ChatGPT vs Claude : quel LLM pour votre entreprise ?", href: "/blog/chatgpt-claude-entreprise-monaco-quel-llm-choisir" },
              { title: "Agent IA autonome en entreprise à Monaco", href: "/blog/agent-ia-autonome-entreprise-monaco" },
              { title: "Former ses équipes à l'IA générative", href: "/blog/former-equipes-ia-generative" },
              { title: "Extended Monaco : le programme digital de la Principauté", href: "/blog/extended-monaco-programme-digital-principaute" },
              { title: "IA et conformité LCB-FT à Monaco", href: "/blog/automatiser-conformite-lcb-ft-monaco" },
            ].map((a) => (
              <RevealOnScroll key={a.title}>
                <Link href={a.href} className="block p-4 rounded-xl border border-border hover:border-accent/30 transition-all group">
                  <h3 className="text-[13px] font-semibold group-hover:text-accent transition-colors">{a.title}</h3>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding section-surface">
        <div className="max-w-3xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Questions fréquentes</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-8">Tout savoir sur l&apos;IA à Monaco</h2>
          </RevealOnScroll>
          <FAQ items={faqItems} />
          <FaqSchema items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-background via-accent-light/30 to-accent/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">Prêt à intégrer l&apos;IA dans votre entreprise à Monaco ?</h2>
            <p className="text-foreground/60 text-[14px] mb-8">
              Un premier entretien de 30 minutes suffit pour identifier vos leviers prioritaires. Sans engagement, en toute confidentialité.
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
