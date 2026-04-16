import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import FAQ from "@/components/FAQ";
import FaqSchema from "@/components/FaqSchema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IA pour petite entreprise à Monaco : guide pratique",
  description:
    "Guide complet de l'IA pour les petites entreprises monégasques. Mythes, cas d'usage, outils accessibles, quick wins sous 5 000 euros. Par où commencer quand on a 5 à 50 collaborateurs.",
  alternates: { canonical: "https://quantamonaco.com/ia-petite-entreprise-monaco" },
  openGraph: {
    title: "IA pour petite entreprise à Monaco : guide pratique",
    description:
      "Guide complet de l'IA pour les petites entreprises monégasques. Mythes, cas d'usage, outils accessibles, quick wins sous 5 000 euros. Par où commencer quand on a 5 à 50 collaborateurs.",
    url: "https://quantamonaco.com/ia-petite-entreprise-monaco",
    siteName: "Quanta",
    locale: "fr_FR",
    type: "website",
  },
};

const faqItems = [
  {
    q: "Mon entreprise est-elle trop petite pour bénéficier de l'IA ?",
    a: "Au contraire. Les entreprises de 5 à 50 personnes sont souvent celles qui bénéficient le plus de l'IA en relatif. Un gain de 15 heures par semaine sur une équipe de dix personnes représente un impact bien plus fort que pour un grand groupe. Les décisions vont plus vite, l'adoption est plus simple, le retour sur investissement se mesure en mois plutôt qu'en années.",
  },
  {
    q: "Combien faut-il investir pour commencer ?",
    a: "Pour une petite entreprise, les premiers quick wins se déploient pour moins de 5 000 euros. Un audit ciblé plus l'automatisation d'un processus critique suffit pour démontrer la valeur. Les licences récurrentes des outils IA coûtent entre 20 et 100 euros par utilisateur et par mois. Budget total maîtrisé, retour mesurable en quelques semaines.",
  },
  {
    q: "Faut-il une équipe technique pour utiliser l'IA ?",
    a: "Non. Les outils modernes (ChatGPT, Claude, Notion IA, Zapier, Make) sont conçus pour être utilisés par des non-techniciens. Un cabinet comme Quanta se charge de la mise en place initiale et forme vos équipes. Ensuite, vos collaborateurs utilisent les outils comme une boîte mail ou un tableur : sans compétence technique particulière.",
  },
  {
    q: "Quels sont les meilleurs quick wins pour une PME monégasque ?",
    a: "Les quatre automatisations les plus rentables : la facturation et la comptabilité automatisées, le suivi client enrichi par IA, la génération de propositions commerciales, et la conformité documentaire (KYC, LCB-FT). Chacune libère entre 5 et 10 heures par semaine et se déploie en deux à trois semaines.",
  },
  {
    q: "Quand faut-il recruter plutôt que faire appel à un cabinet ?",
    a: "Tant que l'IA représente moins de 20 pour cent de votre activité, un cabinet externe est plus efficace et moins risqué. Passé ce seuil, envisager le recrutement d'un profil hybride métier et IA devient pertinent. Pour la très grande majorité des PME monégasques, le cabinet reste la bonne option pendant les trois premières années.",
  },
];

export default function IAPetiteEntreprisePage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="section-padding pt-32 sm:pt-40 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">IA petite entreprise Monaco</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4 mb-6">
              L&apos;IA pour les petites entreprises à Monaco : par où commencer
            </h1>
            <p className="text-foreground/60 text-[15px] leading-relaxed max-w-3xl mx-auto mb-8">
              Les dirigeants de PME monégasques pensent souvent à tort que l&apos;intelligence artificielle est réservée aux grands groupes. La réalité est exactement inverse : les petites structures sont celles qui tirent le plus grand bénéfice de l&apos;IA, en relatif comme en absolu. Moins de bureaucratie, décisions plus rapides, impact immédiat sur les résultats. Ce guide pratique explique comment une entreprise de 5 à 50 collaborateurs à Monaco peut déployer l&apos;IA intelligemment, sans exploser son budget ni mobiliser une DSI.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/33645636107"
                className="group bg-accent text-dark font-semibold px-6 py-3 rounded-xl text-[13px] hover:bg-accent-dark transition-all inline-flex items-center gap-2 shadow-lg shadow-accent/20"
              >
                Discuter de votre projet PME
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
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={5000} prefix="" suffix=" €" /></div>
                <p className="text-foreground/40 text-[12px]">budget premier quick win</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={15} suffix=" h" /></div>
                <p className="text-foreground/40 text-[12px]">récupérées par semaine en moyenne</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={3} suffix=" mois" /></div>
                <p className="text-foreground/40 text-[12px]">délai moyen de retour sur investissement</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={70} suffix="%" /></div>
                <p className="text-foreground/40 text-[12px]">des PME monégasques sous-équipées</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Pourquoi les PME bénéficient plus */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Avantage structurel</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Pourquoi les petites entreprises bénéficient plus de l&apos;IA que les grands groupes</h2>
            <div className="space-y-4 text-foreground/60 text-[14px] leading-relaxed">
              <p>
                Contre-intuitif mais vérifié sur le terrain : une PME monégasque de 15 personnes tire souvent plus de valeur de l&apos;IA qu&apos;un groupe de 500. Trois raisons expliquent ce phénomène. D&apos;abord, l&apos;absence de couches hiérarchiques. Dans une petite structure, le dirigeant décide le lundi et le déploiement commence le mercredi. Dans un grand groupe, la même décision peut prendre six mois, entre comités, validations juridiques et arbitrages politiques.
              </p>
              <p>
                Ensuite, l&apos;impact relatif. Automatiser cinq heures par semaine sur une équipe de dix représente un gain de 6 pour cent sur la capacité totale. Le même gain sur une équipe de 500 se noie dans la masse et passe inaperçu. C&apos;est pour cela que les dirigeants de PME sentent concrètement la différence après une mission, alors que les grands groupes doivent se battre pour prouver le retour sur investissement.
              </p>
              <p>
                Enfin, la proximité avec les processus. Un dirigeant de PME monégasque connaît en détail chaque flux de son entreprise. Il voit directement quels irritants l&apos;IA peut supprimer. Pas besoin d&apos;une étude de six mois pour identifier les leviers : un entretien d&apos;une heure suffit souvent à dresser la liste des dix automatisations les plus rentables. Pour une analyse ciblée, consultez notre <Link href="/expertise/audit-strategie-ia" className="text-accent hover:underline">audit stratégique IA</Link>.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Les mythes qui freinent les PME */}
      <section className="section-padding section-surface">
        <div className="max-w-5xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Mythes</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Les cinq mythes qui empêchent les PME monégasques de se lancer</h2>
            <p className="text-foreground/60 text-[14px] leading-relaxed mb-10 max-w-3xl">
              Chaque mois, nous rencontrons des dirigeants monégasques qui repoussent leur projet IA à cause d&apos;idées reçues. Voici les plus fréquentes, et la réalité derrière chacune.
            </p>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                mythe: "C'est trop cher pour une PME",
                realite: "Les premiers quick wins se déploient pour 3 000 à 5 000 euros. Les licences d'outils coûtent entre 20 et 100 euros par mois et par utilisateur. Budget d'entrée comparable à une nouvelle machine à café d'entreprise.",
              },
              {
                mythe: "C'est trop complexe techniquement",
                realite: "Les outils modernes sont conçus pour des utilisateurs non techniques. ChatGPT, Claude, Notion IA, Zapier : interfaces comparables à une messagerie. Les équipes apprennent en une demi-journée de formation.",
              },
              {
                mythe: "C'est réservé à la tech et aux grandes banques",
                realite: "Tous les secteurs bénéficient de l'IA : immobilier, restauration, cabinets d'avocats, médecine, commerce de luxe, services aux entreprises. Les cas d'usage sont partout, pas seulement dans les banques privées.",
              },
              {
                mythe: "Mes équipes vont résister",
                realite: "L'expérience prouve le contraire. Bien introduit, un outil IA qui supprime des tâches ingrates est accueilli avec soulagement. Les collaborateurs se concentrent sur ce qui a de la valeur. Un bon programme de formation IA fait toute la différence à l'adoption.",
              },
              {
                mythe: "L'IA va remplacer mes salariés",
                realite: "Faux dans une PME monégasque. L'IA ne remplace pas les rôles stratégiques ou relationnels. Elle supprime les tâches répétitives à faible valeur. Les équipes existantes deviennent plus productives, pas obsolètes. Aucun licenciement n'a été nécessaire sur nos 50 missions livrées.",
              },
              {
                mythe: "J'attendrai que la technologie mûrisse",
                realite: "La technologie est déjà mûre. Les entreprises qui attendent perdent leur avance compétitive. Les concurrents qui déploient dès maintenant captent des gains cumulés qui deviendront impossibles à rattraper en deux ans.",
              },
            ].map((m) => (
              <RevealOnScroll key={m.mythe}>
                <div className="p-6 rounded-2xl border border-border bg-background">
                  <p className="text-foreground/40 text-[11px] uppercase tracking-wider mb-2">Mythe</p>
                  <h3 className="text-[14px] font-semibold mb-3">{m.mythe}</h3>
                  <p className="text-accent text-[11px] uppercase tracking-wider mb-2">Réalité</p>
                  <p className="text-foreground/60 text-[13px] leading-relaxed">{m.realite}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Quick wins sous 5K - Dark bubble */}
      <section className="bg-dark text-white rounded-[2rem] mx-4 py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Quick wins</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-4">Cinq quick wins IA pour PME monégasque, tous sous 5 000 euros</h2>
            <p className="text-white/50 text-[14px] leading-relaxed max-w-3xl mb-10">
              Voici cinq projets concrets, déployables rapidement et rentables dès le premier trimestre. Chacun a été mené avec succès dans au moins trois PME monégasques différentes.
            </p>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                n: "1",
                title: "Automatisation de la facturation",
                text: "Génération automatique des factures depuis les bons de commande, relances intelligentes, classement comptable. Gain : 5 à 8 heures par semaine sur une équipe de 10.",
                budget: "3 500 €",
              },
              {
                n: "2",
                title: "Assistant commercial IA",
                text: "Rédaction automatique des propositions, suivi des opportunités, relances personnalisées. Plus aucune proposition ne traîne une semaine sur un bureau.",
                budget: "4 200 €",
              },
              {
                n: "3",
                title: "Base de connaissance centralisée",
                text: "Tous les documents de l'entreprise interrogeables en langage naturel. Réponse instantanée à des questions métier qui prenaient 30 minutes de recherche.",
                budget: "4 800 €",
              },
              {
                n: "4",
                title: "Email marketing automatisé",
                text: "Newsletters générées, campagnes ciblées, A/B tests automatiques. Taux d'ouverture multiplié par 2 en trois mois sur les bases clients moyennes.",
                budget: "3 200 €",
              },
              {
                n: "5",
                title: "Chatbot de réponse interne",
                text: "Assistant pour répondre aux questions récurrentes des équipes (procédures, congés, notes de frais). Libère la RH et la direction.",
                budget: "2 800 €",
              },
              {
                n: "6",
                title: "Résumé automatique de réunions",
                text: "Enregistrement, transcription, synthèse et extraction des actions. Plus aucun compte rendu à rédiger manuellement. Gain : 3 heures par semaine.",
                budget: "1 800 €",
              },
            ].map((q) => (
              <RevealOnScroll key={q.n}>
                <div className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-accent text-[11px] font-bold bg-accent/10 px-2 py-1 rounded">{q.n}</span>
                    <h3 className="text-[14px] font-semibold">{q.title}</h3>
                    <span className="text-accent text-[12px] font-bold ml-auto">{q.budget}</span>
                  </div>
                  <p className="text-white/60 text-[13px] leading-relaxed">{q.text}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Outils accessibles */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Boîte à outils</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Les outils IA accessibles aux petites équipes</h2>
            <p className="text-foreground/60 text-[14px] leading-relaxed mb-10 max-w-3xl">
              Une PME monégasque n&apos;a pas besoin d&apos;un budget de startup financée à 10 millions pour accéder aux meilleurs outils d&apos;IA. Voici la boîte à outils que nous recommandons dans la grande majorité des missions PME.
            </p>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "ChatGPT Team", text: "L'assistant IA généraliste, 25 euros par utilisateur par mois. Rédaction, analyse, brainstorming. Déploiement en une journée." },
              { title: "Claude Pro", text: "Idéal pour l'analyse documentaire longue et le raisonnement complexe. 20 dollars par utilisateur par mois. Parfait pour juristes et financiers." },
              { title: "Notion IA", text: "Votre base de connaissance interne enrichie par IA. 10 euros par utilisateur par mois. Centralise documents, procédures et projets." },
              { title: "Zapier et Make", text: "Connecter vos outils sans code. 30 à 100 euros par mois selon le volume. Automatisations entre Gmail, CRM, comptabilité et IA." },
              { title: "HubSpot gratuit puis Starter", text: "CRM avec fonctions IA intégrées. Démarrage gratuit, puis 20 euros par utilisateur. Suivi commercial automatisé." },
              { title: "Descript et Fathom", text: "Résumés automatiques de réunions. 15 à 25 euros par mois. Transcription et synthèse des visios Zoom et Teams." },
            ].map((o) => (
              <RevealOnScroll key={o.title}>
                <div className="p-6 rounded-2xl border border-border bg-surface">
                  <h3 className="text-[14px] font-semibold mb-2">{o.title}</h3>
                  <p className="text-foreground/60 text-[13px] leading-relaxed">{o.text}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Extended Monaco */}
      <section className="section-padding section-surface">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Écosystème</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Les ressources monégasques pour les PME qui se lancent dans l&apos;IA</h2>
            <div className="space-y-4 text-foreground/60 text-[14px] leading-relaxed">
              <p>
                La Principauté soutient activement la transformation numérique des entreprises locales. Le programme <Link href="/blog/extended-monaco-programme-digital-principaute" className="text-accent hover:underline">Extended Monaco</Link>, porté par le gouvernement, propose un accompagnement personnalisé aux PME qui souhaitent franchir le pas. Des sessions de découverte gratuites, des aides potentielles à l&apos;investissement numérique et un réseau d&apos;experts référencés sont disponibles à Monaco.
              </p>
              <p>
                Le Monaco Economic Board (MEB) organise régulièrement des événements autour de l&apos;IA et de la digitalisation. La Jeune Chambre Économique Monégasque (JCEM) anime également un réseau de dirigeants qui échangent sur leurs expériences de transformation. Participer à ces cercles locaux permet de capitaliser sur les retours d&apos;expérience des autres PME monégasques.
              </p>
              <p>
                Enfin, sur le plan réglementaire, les PME monégasques doivent rester attentives à la conformité <Link href="/blog/rgpd-donnees-personnelles-ia-monaco" className="text-accent hover:underline">RGPD appliquée à l&apos;IA</Link> et, pour les activités financières, aux exigences de la CCAF et du SICCFIN. Un cabinet spécialisé comme Quanta intègre ces dimensions dès la phase d&apos;audit pour éviter tout risque en production.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Exemples concrets */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Retours d&apos;expérience</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Trois PME monégasques qui ont déployé l&apos;IA</h2>
            <p className="text-foreground/60 text-[14px] leading-relaxed mb-10 max-w-3xl">
              Exemples anonymisés de missions récentes pour des PME de 8 à 40 personnes à Monaco. Chaque cas illustre un type de transformation réaliste et rentable.
            </p>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                taille: "8 personnes",
                secteur: "Cabinet de courtage immobilier de luxe",
                projet: "Automatisation des dossiers de présentation clients et relances intelligentes",
                resultat: "12 heures récupérées par semaine, délai de réponse divisé par trois, taux de conversion en hausse de 20 pour cent",
              },
              {
                taille: "22 personnes",
                secteur: "Société de conseil en gestion de patrimoine",
                projet: "CRM enrichi IA, reporting client automatisé, synthèses de réunions",
                resultat: "Capacité de suivi client doublée sans embauche, satisfaction client mesurée en hausse, temps administratif divisé par deux",
              },
              {
                taille: "40 personnes",
                secteur: "Groupe hôtelier indépendant",
                projet: "Réponse automatisée aux avis en ligne, email marketing personnalisé, revenue management assisté",
                resultat: "Score de réputation en ligne amélioré, taux d'occupation en hausse de 8 points, équipe marketing recentrée sur le créatif",
              },
            ].map((e) => (
              <RevealOnScroll key={e.secteur}>
                <div className="p-6 rounded-2xl border border-border bg-surface h-full">
                  <p className="text-accent text-[11px] uppercase tracking-wider mb-2">{e.taille}</p>
                  <h3 className="text-[14px] font-semibold mb-3">{e.secteur}</h3>
                  <p className="text-foreground/60 text-[13px] leading-relaxed mb-3">{e.projet}</p>
                  <p className="text-foreground/80 text-[12px] italic">Résultat : {e.resultat}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Ressources et blog */}
      <section className="section-padding section-surface">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Ressources</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Pour aller plus loin sur l&apos;IA en PME monégasque</h2>
            <p className="text-foreground/60 text-[14px] leading-relaxed mb-8">
              Notre <Link href="/blog" className="text-accent hover:underline">blog sur l&apos;IA à Monaco</Link> propose des articles ciblés pour les dirigeants de PME. Voici notre sélection pour bien démarrer.
            </p>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: "Transformation digitale des PME à Monaco", href: "/blog/transformation-digitale-pme-monaco" },
              { title: "5 processus rentables à automatiser", href: "/blog/5-processus-rentables-automatiser" },
              { title: "Automatiser la facturation et la comptabilité", href: "/blog/automatiser-facturation-comptabilite-monaco" },
              { title: "Automatiser la prospection commerciale", href: "/blog/automatiser-prospection-commerciale-monaco" },
              { title: "No-code et low-code avec IA à Monaco", href: "/blog/no-code-low-code-ia-monaco" },
              { title: "Former ses équipes à l'IA générative", href: "/blog/former-equipes-ia-generative" },
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
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-8">Les questions des dirigeants de PME à Monaco</h2>
          </RevealOnScroll>
          <FAQ items={faqItems} />
          <FaqSchema items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-background via-accent-light/30 to-accent/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">Votre PME monégasque mérite un projet IA à sa mesure</h2>
            <p className="text-foreground/60 text-[14px] mb-8">
              Premier entretien offert. Nous analysons ensemble vos processus et identifions les quick wins à moins de 5 000 euros qui transformeront votre productivité.
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
