import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ExpertiseHero from "@/components/ExpertiseHero";
import { OutilsInternesIllustration } from "@/components/ExpertiseIllustration";
import FAQ from "@/components/FAQ";
import FaqSchema from "@/components/FaqSchema";
import RevealOnScroll from "@/components/RevealOnScroll";
import StepTimeline from "@/components/StepTimeline";
import AnimatedCounter from "@/components/AnimatedCounter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outils internes sur mesure à Monaco",
  description:
    "CRM, dashboards, portails clients : applications metier developpees 10x plus vite grace a l'IA. Quanta construit vos outils internes a Monaco.",
  alternates: { canonical: "https://quantamonaco.com/expertise/outils-internes" },
  openGraph: {
    title: "Outils internes sur mesure à Monaco",
    description:
      "CRM, dashboards, portails clients : applications metier developpees 10x plus vite grace a l'IA. Quanta construit vos outils internes a Monaco.",
    url: "https://quantamonaco.com/expertise/outils-internes",
    siteName: "Quanta",
    locale: "fr_FR",
    type: "website",
  },
};

const faqItems = [
  {
    q: "Combien coute le developpement d'un outil interne sur mesure ?",
    a: "Le cout depend de la complexite du projet. Un outil simple (dashboard, formulaire avance, mini-CRM) demarre a partir de 5 000 euros. Une application metier complete avec integrations multiples se situe entre 15 000 et 40 000 euros. C'est 5 a 10 fois moins qu'un developpement traditionnel, et surtout, il n'y a pas d'abonnement mensuel recurrent. Le code vous appartient.",
  },
  {
    q: "Pourquoi ne pas utiliser un logiciel SaaS existant ?",
    a: "Les logiciels SaaS sont excellents pour des besoins standards. Mais des qu'un processus est specifique a votre metier ou a votre facon de travailler, le SaaS atteint ses limites. Vous finissez par adapter votre organisation au logiciel au lieu de l'inverse. Un outil sur mesure epouse exactement votre processus, sans compromis fonctionnel, et sans les couts d'abonnement qui s'accumulent annee apres annee.",
  },
  {
    q: "Que se passe-t-il si nous avons besoin de modifications apres la livraison ?",
    a: "C'est prevu et c'est normal. Un outil interne evolue avec votre activite. Grace a l'architecture modulaire et au developpement assiste par IA, les modifications sont rapides et peu couteuses. Nous proposons des contrats de maintenance qui incluent un volume d'heures d'evolution mensuel. Les ajustements mineurs sont souvent livres en quelques jours.",
  },
  {
    q: "Nos donnees sont-elles en securite ?",
    a: "La securite est notre priorite absolue, d'autant plus a Monaco ou les exigences de confidentialite sont elevees. Chaque application est construite avec authentification forte (multi-facteurs), chiffrement des donnees, gestion fine des permissions et journalisation des acces. L'hebergement peut etre configure selon vos exigences : cloud europeen, cloud prive ou infrastructure sur site.",
  },
  {
    q: "Combien de temps faut-il pour livrer un outil interne fonctionnel ?",
    a: "Un prototype fonctionnel est livre en 1 a 2 semaines. L'application complete, testee et deployee, est generalement prete en 4 a 8 semaines selon la complexite. C'est 3 a 5 fois plus rapide qu'un developpement classique. Nous privilegions une approche iterative : vous utilisez l'outil des les premieres semaines et nous l'ameliorons en continu sur la base de vos retours.",
  },
];

const steps = [
  {
    title: "Audit des processus existants",
    text: "Nous passons une journee avec vos equipes pour comprendre leurs workflows quotidiens, identifier les taches repetitives, les goulots d'etranglement et les sources d'erreur. Chaque minute d'observation sur le terrain vaut des heures de specification theorique.",
  },
  {
    title: "Specification fonctionnelle",
    text: "Redaction d'un cahier des charges precis avec les fonctionnalites prioritaires, les integrations necessaires et les contraintes de securite. Nous definissons ensemble le perimetre du MVP (produit minimum viable) qui sera livre en premier.",
  },
  {
    title: "Prototype interactif en 5 jours",
    text: "Grace a l'IA, nous produisons un prototype fonctionnel en moins d'une semaine. Vos equipes peuvent tester les ecrans, le parcours utilisateur et les principales fonctionnalites avant que le developpement complet ne commence.",
  },
  {
    title: "Developpement assiste par IA",
    text: "Developpement complet de l'application avec les meilleures pratiques : code propre, tests automatises, documentation technique. L'IA accelere l'ecriture du code, nos developpeurs assurent la qualite, la securite et la maintenabilite.",
  },
  {
    title: "Deploiement et formation",
    text: "Mise en production securisee, migration des donnees existantes, formation de vos equipes a l'utilisation du nouvel outil. Nous ne livrons pas un logiciel : nous livrons un changement de pratique, accompagne jusqu'a son adoption complete.",
  },
  {
    title: "Iterations et maintenance",
    text: "Apres le lancement, nous recueillons les retours terrain et procedons aux ajustements. Votre outil evolue avec vos besoins. Les modifications sont rapides et peu couteuses grace a l'architecture modulaire que nous mettons en place des le depart.",
  },
];

export default function OutilsInternes() {
  return (
    <PageLayout>
      <FaqSchema items={faqItems} />
      <ExpertiseHero
        tag="Expertise"
        title="Outils internes sur mesure, livres 10x plus vite."
        description="Vos equipes meritent des outils penses pour elles, pas des logiciels generiques detournes de leur usage initial. Nous construisons vos applications metier avec l'IA pour une livraison en semaines, pas en mois."
        illustration={<OutilsInternesIllustration />}
      />

      {/* Intro courte + Metrics dashboard */}
      <section className="section-padding section-surface">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-xl font-bold mb-5">Pourquoi le sur-mesure redevient accessible a Monaco</h2>
                <p className="text-foreground/60 text-[14px] leading-relaxed">
                  L&apos;IA a change l&apos;equation du developpement logiciel de facon radicale. Nous construisons des applications metier completes en quelques semaines au lieu de plusieurs mois, a un cout divise par 5 a 10. Le sur-mesure n&apos;est plus un luxe reserve aux grandes structures disposant de budgets IT importants.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-5">Des applications integrees a votre ecosysteme</h2>
                <p className="text-foreground/60 text-[14px] leading-relaxed">
                  Chaque outil que nous developpons fonctionne avec vos systemes existants : CRM, comptabilite, bases de donnees, Slack, Teams. Pas de double saisie, pas de silos d&apos;information. Le code vous appartient, sans abonnement mensuel ni dependance a un editeur.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-16">
              <div className="p-5 rounded-2xl bg-surface border border-border text-center">
                <div className="text-2xl font-bold"><AnimatedCounter value={5} suffix=" jours" /></div>
                <p className="text-muted text-[11px] mt-1">Pour un prototype fonctionnel testable</p>
              </div>
              <div className="p-5 rounded-2xl bg-surface border border-border text-center">
                <div className="text-2xl font-bold"><AnimatedCounter value={10} suffix="x" /></div>
                <p className="text-muted text-[11px] mt-1">Moins cher qu&apos;un developpement traditionnel</p>
              </div>
              <div className="p-5 rounded-2xl bg-surface border border-border text-center">
                <div className="text-2xl font-bold"><AnimatedCounter value={100} suffix="%" /></div>
                <p className="text-muted text-[11px] mt-1">Propriete du code source, zero abonnement</p>
              </div>
              <div className="p-5 rounded-2xl bg-surface border border-border text-center">
                <div className="text-2xl font-bold">4-8 sem.</div>
                <p className="text-muted text-[11px] mt-1">Application complete deployee et adoptee</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* StepTimeline — tinted background */}
      <section className="section-padding section-tinted">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-6">Notre approche en 6 etapes</h2>
            <StepTimeline steps={steps} />
          </RevealOnScroll>
        </div>
      </section>

      {/* Cas d'application — dark bubble */}
      <section className="bg-dark text-white rounded-[2rem] mx-4 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-6">Cas d&apos;application concrets</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">CRM sur mesure pour un family office</h3>
                <p className="text-white/50 text-[13px] leading-relaxed">
                  Suivi des familles, historique des interactions, gestion documentaire securisee et reporting automatise. Livre en 6 semaines, adopte a 100%.
                </p>
              </div>
              <div className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Dashboard de pilotage pour un groupe immobilier</h3>
                <p className="text-white/50 text-[13px] leading-relaxed">
                  Vision consolidee temps reel : avancement travaux, budget, commercialisation, tresorerie. 2 jours de reporting manuel elimines chaque mois.
                </p>
              </div>
              <div className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Portail client pour un cabinet d&apos;avocats</h3>
                <p className="text-white/50 text-[13px] leading-relaxed">
                  Espace securise pour consulter les dossiers, echanger des documents et suivre l&apos;avancement. Chiffrement de bout en bout, livre en 4 semaines.
                </p>
              </div>
              <div className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Outil de gestion pour une societe de services</h3>
                <p className="text-white/50 text-[13px] leading-relaxed">
                  Plannings, intervenants et facturation centralises dans une application unique. Generation automatique des factures et suivi GPS des interventions.
                </p>
              </div>
              <div className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Plateforme de suivi pour une clinique privee</h3>
                <p className="text-white/50 text-[13px] leading-relaxed">
                  Suivi des patients integre au systeme de rendez-vous. Alertes automatiques, historique des consultations, interface mobile pour les praticiens.
                </p>
              </div>
              <div className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Outil de conformite pour une banque privee</h3>
                <p className="text-white/50 text-[13px] leading-relaxed">
                  Suivi KYC et due diligence avec workflows d&apos;approbation, rapports reglementaires et alertes de mise a jour. Conforme aux exigences de l&apos;AMAF.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Comparaison Sans / Avec Quanta */}
      <section className="section-padding section-light">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-8 text-center">Ce qui change avec Quanta</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-7 rounded-2xl bg-surface border border-border">
                <h3 className="text-[13px] font-semibold text-muted mb-4 uppercase tracking-wide">Sans Quanta</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-[13px] text-foreground/60">
                    <span className="text-red-400 mt-0.5 shrink-0">&#x2715;</span>
                    Tableurs Excel empiles, processus manuels, donnees dispersees
                  </li>
                  <li className="flex items-start gap-3 text-[13px] text-foreground/60">
                    <span className="text-red-400 mt-0.5 shrink-0">&#x2715;</span>
                    Logiciels SaaS generiques qui ne collent pas a votre metier
                  </li>
                  <li className="flex items-start gap-3 text-[13px] text-foreground/60">
                    <span className="text-red-400 mt-0.5 shrink-0">&#x2715;</span>
                    Abonnements mensuels cumules qui gonflent annee apres annee
                  </li>
                  <li className="flex items-start gap-3 text-[13px] text-foreground/60">
                    <span className="text-red-400 mt-0.5 shrink-0">&#x2715;</span>
                    Developpement sur mesure a 6 chiffres et 6+ mois de delai
                  </li>
                  <li className="flex items-start gap-3 text-[13px] text-foreground/60">
                    <span className="text-red-400 mt-0.5 shrink-0">&#x2715;</span>
                    Dependance totale a un prestataire ou un editeur
                  </li>
                </ul>
              </div>
              <div className="p-7 rounded-2xl bg-dark text-white">
                <h3 className="text-[13px] font-semibold text-white/50 mb-4 uppercase tracking-wide">Avec Quanta</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-[13px] text-white/70">
                    <span className="text-accent mt-0.5 shrink-0">&#x2713;</span>
                    Application unique, donnees centralisees, processus fluides
                  </li>
                  <li className="flex items-start gap-3 text-[13px] text-white/70">
                    <span className="text-accent mt-0.5 shrink-0">&#x2713;</span>
                    Outil construit autour de vos workflows, pas l&apos;inverse
                  </li>
                  <li className="flex items-start gap-3 text-[13px] text-white/70">
                    <span className="text-accent mt-0.5 shrink-0">&#x2713;</span>
                    Code proprietaire, zero abonnement, investissement unique
                  </li>
                  <li className="flex items-start gap-3 text-[13px] text-white/70">
                    <span className="text-accent mt-0.5 shrink-0">&#x2713;</span>
                    Prototype en 5 jours, application complete en 4 a 8 semaines
                  </li>
                  <li className="flex items-start gap-3 text-[13px] text-white/70">
                    <span className="text-accent mt-0.5 shrink-0">&#x2713;</span>
                    Maitrise totale, architecture modulaire, evolutions rapides
                  </li>
                </ul>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQ + Links */}
      <section className="section-padding section-tinted">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-6">Questions frequentes</h2>
            <FAQ items={faqItems} />
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <h2 className="text-xl font-bold mt-12 mb-6">Notre stack technique</h2>
            <p className="text-foreground/60 text-[14px] leading-relaxed mb-4">
              Nous utilisons des technologies web modernes, eprouvees et maintenables : React et Next.js pour l&apos;interface utilisateur, Supabase ou PostgreSQL pour la base de donnees, Vercel pour l&apos;hebergement et le deploiement continu. Cette stack permet un developpement rapide, une securite native et une scalabilite sans limite.
            </p>
            <p className="text-foreground/60 text-[14px] leading-relaxed mb-12">
              Pour les integrations, nous connectons vos outils existants via leurs API : HubSpot, Salesforce, Xero, QuickBooks, Slack, Microsoft 365, Google Workspace. L&apos;objectif est de creer un ecosysteme ou l&apos;information circule automatiquement entre vos systemes, sans saisie manuelle et sans perte de donnees.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/methode" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Notre methode</Link>
              <Link href="/resultats" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Resultats clients</Link>
              <Link href="/expertise/automatisation-processus" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Automatisation des processus</Link>
              <Link href="/expertise/developpement-ia-sur-mesure" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Developpement IA sur mesure</Link>
              <Link href="/secteurs/gestion-patrimoine" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Secteur gestion de patrimoine</Link>
              <Link href="/secteurs/cabinets-avocats" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Secteur cabinets d&apos;avocats</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA gradient */}
      <section className="section-padding bg-gradient-to-b from-background via-accent-light/30 to-accent/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">
              Remplacez vos tableurs par de vrais outils.
            </h2>
            <p className="text-foreground/60 text-[14px] mb-8">
              Decrivez-nous le processus que vous gerez encore manuellement. Nous vous montrerons ce que l&apos;outil pourrait faire en 15 minutes de demo.
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
