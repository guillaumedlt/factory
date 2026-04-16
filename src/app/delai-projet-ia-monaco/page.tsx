import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import FAQ from "@/components/FAQ";
import FaqSchema from "@/components/FaqSchema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Délai d'un projet IA à Monaco : 8 à 13 semaines",
  description:
    "Combien de temps prend un projet d'intelligence artificielle à Monaco ? Calendrier détaillé par phase, quick wins, comparatif avec une agence parisienne ou un développement interne.",
  alternates: { canonical: "https://quantamonaco.com/delai-projet-ia-monaco" },
  openGraph: {
    title: "Délai d'un projet IA à Monaco : 8 à 13 semaines",
    description:
      "Combien de temps prend un projet d'intelligence artificielle à Monaco ? Calendrier détaillé par phase, quick wins, comparatif avec une agence parisienne ou un développement interne.",
    url: "https://quantamonaco.com/delai-projet-ia-monaco",
    siteName: "Quanta",
    locale: "fr_FR",
    type: "website",
  },
};

const faqItems = [
  {
    q: "Combien de temps dure un projet IA à Monaco en moyenne ?",
    a: "Un projet d'intégration IA complet dure entre 8 et 13 semaines. La phase d'immersion prend 1 à 2 semaines, le diagnostic 1 semaine, le déploiement 4 à 8 semaines, et la transmission 2 semaines. Pour un audit seul, comptez 3 semaines. Pour un développement sur mesure avancé, jusqu'à 16 semaines.",
  },
  {
    q: "Quand apparaissent les premiers résultats concrets ?",
    a: "Les premiers quick wins sont généralement livrés dès la sixième semaine. Il peut s'agir d'une automatisation simple, d'un agent IA de réponse client, ou d'un tableau de bord centralisé. Ces livrables intermédiaires permettent de valider l'approche et de mesurer le retour sur investissement avant la mise en production complète.",
  },
  {
    q: "Pourquoi votre approche est-elle plus rapide qu'une agence parisienne ?",
    a: "Trois raisons : la proximité géographique évite les allers-retours, notre méthode itérative délivre de la valeur chaque semaine plutôt qu'à la fin du projet, et nous utilisons des outils de développement assisté par IA qui divisent par dix certaines phases. Une agence parisienne classique travaille en cycles waterfall de six mois minimum.",
  },
  {
    q: "Que dois-je préparer pour accélérer le projet ?",
    a: "Trois éléments permettent d'aller vite : un point de contact unique chez vous qui décide, l'accès aux processus à auditer dès la première semaine, et la disponibilité de la direction pour les comités de pilotage bi-hebdomadaires. Sans ces trois conditions, comptez 2 à 3 semaines de délai supplémentaire.",
  },
  {
    q: "Quels facteurs peuvent rallonger le délai d'un projet IA ?",
    a: "Le principal facteur d'allongement reste la disponibilité des équipes internes pour les entretiens et la validation. Viennent ensuite la complexité des intégrations SI, les contraintes réglementaires spécifiques (SICCFIN, CCAF, RGPD), et la nécessité de nettoyer des données historiques. Un périmètre trop large au démarrage est aussi une cause fréquente de retards.",
  },
];

export default function DelaiProjetIAMonacoPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="section-padding pt-32 sm:pt-40 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Délai projet IA Monaco</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4 mb-6">
              Combien de temps prend un projet IA à Monaco ? Calendrier détaillé
            </h1>
            <p className="text-foreground/60 text-[15px] leading-relaxed max-w-3xl mx-auto mb-8">
              La question du délai revient systématiquement lors du premier entretien avec un dirigeant monégasque. La réponse précise est : entre 8 et 13 semaines pour la grande majorité des projets d&apos;intelligence artificielle. Cette page détaille le calendrier phase par phase, explique pourquoi notre approche va plus vite qu&apos;une agence parisienne ou qu&apos;un développement interne, et décrit les quick wins livrés dès le premier mois.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/33645636107"
                className="group bg-accent text-dark font-semibold px-6 py-3 rounded-xl text-[13px] hover:bg-accent-dark transition-all inline-flex items-center gap-2 shadow-lg shadow-accent/20"
              >
                Estimer le délai de votre projet
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
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={8} suffix=" sem." /></div>
                <p className="text-foreground/40 text-[12px]">délai minimum projet complet</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={13} suffix=" sem." /></div>
                <p className="text-foreground/40 text-[12px]">délai maximum projet standard</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={6} /></div>
                <p className="text-foreground/40 text-[12px]">semaines avant les premiers quick wins</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={3} suffix="x" /></div>
                <p className="text-foreground/40 text-[12px]">plus rapide qu&apos;une agence parisienne</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Pourquoi la vitesse compte */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Enjeu</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Pourquoi le délai d&apos;un projet IA est un sujet stratégique à Monaco</h2>
            <div className="space-y-4 text-foreground/60 text-[14px] leading-relaxed">
              <p>
                À Monaco, le temps est une ressource encore plus précieuse qu&apos;ailleurs. Les dirigeants de la Principauté opèrent sur des cycles courts : saison touristique, calendrier réglementaire SICCFIN, reporting trimestriel, levées de fonds. Attendre douze ou dix-huit mois avant de voir le moindre résultat d&apos;un projet technologique n&apos;est plus acceptable. C&apos;est précisément pour cela que notre <Link href="/methode" className="text-accent hover:underline">méthode d&apos;intégration IA</Link> a été pensée pour livrer de la valeur dès les premières semaines.
              </p>
              <p>
                La vraie différence entre un bon et un mauvais projet IA n&apos;est pas le budget, c&apos;est le rythme. Un projet qui traîne perd son momentum : les équipes se démobilisent, la direction change de priorité, la concurrence avance. À l&apos;inverse, un projet qui délivre toutes les deux semaines crée un cercle vertueux d&apos;adoption, de mesure et d&apos;itération. C&apos;est le principe que nous appliquons pour chaque mission à Monaco, qu&apos;il s&apos;agisse d&apos;un <Link href="/secteurs/banque-privee" className="text-accent hover:underline">projet IA en banque privée</Link> ou d&apos;une automatisation pour un <Link href="/secteurs/cabinets-avocats" className="text-accent hover:underline">cabinet d&apos;avocats monégasque</Link>.
              </p>
              <p>
                Les délais annoncés dans cette page reflètent une réalité mesurée sur plus de cinquante projets livrés. Nous ne promettons pas des miracles : les 8 à 13 semaines supposent un engagement minimum de votre part, un périmètre clair et des accès fournis à temps. Toutes ces conditions sont détaillées plus bas.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Calendrier détaillé par phase */}
      <section className="section-padding section-surface">
        <div className="max-w-5xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Calendrier</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-8">Le calendrier détaillé d&apos;un projet IA à Monaco</h2>
            <p className="text-foreground/60 text-[14px] leading-relaxed mb-10 max-w-3xl">
              Voici la chronologie exacte d&apos;un projet standard d&apos;intégration IA. Chaque phase produit des livrables concrets. Les durées indiquées s&apos;appliquent à une entreprise de 10 à 100 personnes avec un périmètre de 2 à 4 processus à transformer.
            </p>
          </RevealOnScroll>
          <div className="space-y-4">
            {[
              {
                n: "Semaines 1-2",
                title: "Immersion",
                text: "Entretiens avec la direction et les équipes opérationnelles. Observation terrain des processus existants. Collecte des documents, workflows et systèmes d'information. Cartographie des flux de données. À l'issue de cette phase, nous comprenons votre activité mieux que la moyenne des nouveaux arrivants dans votre entreprise.",
                livrables: "Cartographie des processus, liste priorisée des irritants, note d'observation terrain",
              },
              {
                n: "Semaine 3",
                title: "Diagnostic et arbitrage",
                text: "Scoring de chaque processus selon cinq critères : volume, fréquence, valeur ajoutée, complexité et faisabilité technique. Matrice d'opportunités classée par retour sur investissement. Présentation à la direction pour arbitrage. Choix du périmètre de déploiement.",
                livrables: "Matrice d'opportunités, scénarios chiffrés, roadmap de déploiement validée",
              },
              {
                n: "Semaines 4-8",
                title: "Déploiement et quick wins",
                text: "Mise en production des premières automatisations. Développement des outils sur mesure. Configuration des agents IA. Tests en conditions réelles avec un utilisateur pilote. À partir de la semaine 6, les premiers quick wins sont opérationnels et mesurables. Itérations courtes de deux semaines.",
                livrables: "Outils fonctionnels en production, tableaux de bord, premiers indicateurs de performance",
              },
              {
                n: "Semaines 9-11",
                title: "Généralisation",
                text: "Extension des solutions à l'ensemble des équipes concernées. Traitement des cas particuliers. Intégrations avec les systèmes tiers (ERP, CRM, comptabilité). Sécurisation des flux de données. Validation de la conformité réglementaire selon le secteur.",
                livrables: "Documentation technique, procédures opérationnelles, guide utilisateur",
              },
              {
                n: "Semaines 12-13",
                title: "Transmission et autonomie",
                text: "Formation des équipes selon trois niveaux : direction, référents internes et utilisateurs finaux. Mise en place d'un comité de pilotage trimestriel. Définition des indicateurs de suivi. Transfert complet de la propriété intellectuelle. Votre équipe devient autonome.",
                livrables: "Programme de formation, indicateurs de suivi, documentation d'exploitation",
              },
            ].map((p) => (
              <RevealOnScroll key={p.title}>
                <div className="p-6 rounded-2xl border border-border bg-background">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-accent text-[11px] font-bold bg-accent/10 px-2 py-1 rounded">{p.n}</span>
                    <h3 className="text-[15px] font-semibold">{p.title}</h3>
                  </div>
                  <p className="text-foreground/60 text-[13px] leading-relaxed mb-3">{p.text}</p>
                  <p className="text-foreground/40 text-[12px] italic">Livrables : {p.livrables}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi plus rapide - Dark bubble */}
      <section className="bg-dark text-white rounded-[2rem] mx-4 py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Comparatif</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-4">Pourquoi notre approche va plus vite qu&apos;un développement traditionnel</h2>
            <p className="text-white/50 text-[14px] leading-relaxed max-w-3xl mb-10">
              Les dirigeants monégasques qui ont vécu des projets SI classiques sont souvent sceptiques face à nos annonces de délais. Voici les trois raisons techniques et méthodologiques qui expliquent pourquoi un projet IA bien mené prend des semaines et non des années. Pour une analyse approfondie, consultez notre page <Link href="/ia-vs-developpement-traditionnel" className="text-accent hover:underline">IA vs développement traditionnel</Link>.
            </p>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                title: "Outils assistés par IA",
                text: "Cursor, Claude Code, v0, Lovable : ces outils divisent par cinq à dix certaines phases de développement. Une interface qui prenait deux semaines à développer est livrée en deux jours. Un prototype métier complet en une semaine.",
              },
              {
                title: "Méthode itérative",
                text: "Plutôt qu'un cycle waterfall de six mois, nous livrons toutes les deux semaines. Chaque livraison est testée en conditions réelles et ajustée. Aucun effet tunnel, aucune mauvaise surprise en fin de projet.",
              },
              {
                title: "Proximité monégasque",
                text: "Nos consultants interviennent physiquement à Monaco. Les comités de pilotage se tiennent en présentiel. Les validations se font en temps réel. Aucun décalage horaire, aucun aller-retour par email de trois jours.",
              },
            ].map((c) => (
              <RevealOnScroll key={c.title}>
                <div className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <h3 className="text-[14px] font-semibold text-accent mb-3">{c.title}</h3>
                  <p className="text-white/60 text-[13px] leading-relaxed">{c.text}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Trois scénarios types */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Scénarios</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Trois scénarios types et leurs délais</h2>
            <p className="text-foreground/60 text-[14px] leading-relaxed mb-10 max-w-3xl">
              Tous les projets ne demandent pas la même durée. Voici trois cas de figure que nous rencontrons fréquemment à Monaco, avec les délais associés. Pour aller plus loin sur le cadrage initial, consultez notre page sur la <Link href="/expertise/audit-strategie-ia" className="text-accent hover:underline">stratégie et audit IA</Link>.
            </p>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                title: "Audit stratégique seul",
                duree: "3 semaines",
                text: "Cartographie complète, scoring des processus, matrice d'opportunités, recommandations chiffrées. Aucun déploiement. Idéal pour une direction qui souhaite d'abord comprendre avant de décider.",
                exemple: "Family office de 15 personnes, audit de trois directions métier.",
              },
              {
                title: "Automatisation complète",
                duree: "12 semaines",
                text: "Audit plus mise en production de 3 à 5 processus automatisés avec agents IA. Intégrations SI, tableaux de bord, formation des équipes. Scénario le plus fréquent à Monaco.",
                exemple: "Cabinet d'avocats de 30 personnes, automatisation de la facturation, du suivi de dossiers et de la recherche juridique.",
              },
              {
                title: "Développement sur mesure",
                duree: "8 à 16 semaines",
                text: "Conception et développement d'une application métier complète avec IA embarquée. Intégrations profondes, personnalisation avancée, formation approfondie.",
                exemple: "Gestionnaire de patrimoine, CRM interne avec scoring client IA et reporting automatisé.",
              },
            ].map((s) => (
              <RevealOnScroll key={s.title}>
                <div className="p-6 rounded-2xl border border-border bg-surface h-full">
                  <h3 className="text-[15px] font-semibold mb-1">{s.title}</h3>
                  <p className="text-accent text-[12px] font-bold mb-4">{s.duree}</p>
                  <p className="text-foreground/60 text-[13px] leading-relaxed mb-4">{s.text}</p>
                  <p className="text-foreground/40 text-[12px] italic">Exemple : {s.exemple}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Ce qu'il faut fournir */}
      <section className="section-padding section-surface">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Conditions</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Ce que vous devez fournir pour respecter le calendrier</h2>
            <p className="text-foreground/60 text-[14px] leading-relaxed mb-8">
              Un projet IA rapide suppose une collaboration fluide. Voici les cinq éléments que nous demandons systématiquement à nos clients pour tenir les 8 à 13 semaines. Sans ces conditions, comptez 2 à 4 semaines de délai supplémentaire. Cette organisation fait partie de notre <Link href="/methode" className="text-accent hover:underline">méthode éprouvée</Link>.
            </p>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Un sponsor unique", text: "Une personne chez vous, idéalement dans la direction, qui tranche en cas d'ambiguïté. Pas de comité à convaincre à chaque décision." },
              { title: "Accès aux processus", text: "Possibilité d'observer les équipes travailler dès la première semaine. Documents existants, procédures, outils utilisés, accès lecture aux systèmes concernés." },
              { title: "Disponibilité des référents", text: "Deux heures par semaine et par référent métier pour les entretiens et les tests utilisateurs. Sans cette disponibilité, les itérations ralentissent." },
              { title: "Comités bi-hebdomadaires", text: "Un comité de pilotage toutes les deux semaines avec la direction. Une heure suffit pour arbitrer, valider les livraisons et fixer les priorités suivantes." },
              { title: "Environnements techniques", text: "Accès aux outils internes dans des délais raisonnables. Si votre DSI ouvre les accès en six semaines, le projet démarre avec six semaines de retard." },
              { title: "Décision budgétaire rapide", text: "Le budget est validé avant le démarrage. Les ajustements éventuels en cours de projet restent dans l'enveloppe convenue initialement." },
            ].map((c) => (
              <RevealOnScroll key={c.title}>
                <div className="p-5 rounded-2xl border border-border bg-background">
                  <h3 className="text-[14px] font-semibold mb-2">{c.title}</h3>
                  <p className="text-foreground/50 text-[13px] leading-relaxed">{c.text}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Comparatif */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Comparatif</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Quanta vs autres options : le vrai coût du temps</h2>
            <p className="text-foreground/60 text-[14px] leading-relaxed mb-8">
              Trois voies sont possibles pour intégrer l&apos;IA dans votre entreprise monégasque. Voici les délais réalistes de chacune, observés sur le terrain. Pour comparer au-delà du délai, lisez notre <Link href="/comparatif-agence-ia-monaco" className="text-accent hover:underline">comparatif des agences IA à Monaco</Link>.
            </p>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-3 gap-5">
            <RevealOnScroll>
              <div className="p-6 rounded-2xl border border-border bg-surface">
                <h3 className="text-[15px] font-semibold mb-1">Développement interne</h3>
                <p className="text-foreground/40 text-[12px] font-bold mb-4">12 à 18 mois</p>
                <p className="text-foreground/60 text-[13px] leading-relaxed">Recruter, former, cadrer, prototyper, itérer, industrialiser : un chemin long et coûteux pour une entreprise qui ne fait pas de la tech son métier. Risque fort d&apos;abandon après six mois.</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll>
              <div className="p-6 rounded-2xl border border-border bg-surface">
                <h3 className="text-[15px] font-semibold mb-1">Agence parisienne</h3>
                <p className="text-foreground/40 text-[12px] font-bold mb-4">6 à 9 mois</p>
                <p className="text-foreground/60 text-[13px] leading-relaxed">Structure lourde, cycles en cascade, présence limitée sur site. Délai allongé par les allers-retours et l&apos;éloignement. Coût moyen double à triple comparé à une structure locale.</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll>
              <div className="p-6 rounded-2xl border-2 border-accent bg-accent/5">
                <h3 className="text-[15px] font-semibold mb-1 text-accent">Quanta à Monaco</h3>
                <p className="text-accent text-[12px] font-bold mb-4">8 à 13 semaines</p>
                <p className="text-foreground/70 text-[13px] leading-relaxed">Méthode itérative, outils IA modernes, proximité physique. Livraisons toutes les deux semaines. Transmission complète à la fin du projet. Autonomie garantie.</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Ressources et blog */}
      <section className="section-padding section-surface">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Ressources</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Aller plus loin sur les délais et l&apos;exécution IA</h2>
            <p className="text-foreground/60 text-[14px] leading-relaxed mb-8">
              Notre blog documente les retours d&apos;expérience de projets IA récents à Monaco. Plusieurs articles détaillent les phases critiques et les gains de temps observés sur des missions concrètes.
            </p>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: "Créer un site web avec l'IA en 2 semaines", href: "/blog/creer-site-web-ia-2-semaines" },
              { title: "5 processus rentables à automatiser", href: "/blog/5-processus-rentables-automatiser" },
              { title: "Transformation digitale des PME à Monaco", href: "/blog/transformation-digitale-pme-monaco" },
              { title: "No-code et low-code avec IA à Monaco", href: "/blog/no-code-low-code-ia-monaco" },
              { title: "ROI de l'intelligence artificielle : mesurer les gains", href: "/blog/roi-intelligence-artificielle-mesurer-gains" },
              { title: "IA à Monaco : état des lieux 2026", href: "/blog/ia-monaco-etat-des-lieux-2026" },
            ].map((a) => (
              <RevealOnScroll key={a.title}>
                <Link href={a.href} className="block p-4 rounded-xl border border-border hover:border-accent/30 transition-all group bg-background">
                  <h3 className="text-[13px] font-semibold group-hover:text-accent transition-colors">{a.title}</h3>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Questions fréquentes</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-8">Les questions sur le délai d&apos;un projet IA à Monaco</h2>
          </RevealOnScroll>
          <FAQ items={faqItems} />
          <FaqSchema items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-background via-accent-light/30 to-accent/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">Prêt à cadrer le calendrier de votre projet IA ?</h2>
            <p className="text-foreground/60 text-[14px] mb-8">
              Un entretien de 30 minutes suffit pour estimer précisément la durée de votre projet. Présentez-nous votre contexte, nous revenons avec un calendrier chiffré.
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
