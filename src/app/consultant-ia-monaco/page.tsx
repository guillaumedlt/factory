import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import FAQ from "@/components/FAQ";
import FaqSchema from "@/components/FaqSchema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Consultant IA Monaco : accompagnement sur site à la Principauté",
  description:
    "Consultant IA à Monaco : expertise terrain, présence sur site et résultats mesurables. Méthodologie éprouvée pour intégrer l'intelligence artificielle dans votre entreprise monégasque.",
  alternates: { canonical: "https://quantamonaco.com/consultant-ia-monaco" },
  openGraph: {
    title: "Consultant IA Monaco : accompagnement sur site à la Principauté",
    description:
      "Consultant IA à Monaco : expertise terrain, présence sur site et résultats mesurables. Méthodologie éprouvée pour intégrer l'intelligence artificielle dans votre entreprise monégasque.",
    url: "https://quantamonaco.com/consultant-ia-monaco",
    siteName: "Quanta",
    locale: "fr_FR",
    type: "website",
  },
};

const faqItems = [
  {
    q: "Combien coûte un consultant IA à Monaco ?",
    a: "Les tarifs d'un consultant IA à Monaco varient selon la nature de la mission. Un audit stratégique démarre à 5 000 euros. Un projet d'automatisation ou de développement sur mesure se situe entre 15 000 et 50 000 euros. Nous proposons également des forfaits d'accompagnement mensuel à partir de 3 000 euros. Chaque devis est précédé d'un entretien gratuit de 30 minutes.",
  },
  {
    q: "Quelle est la différence entre un consultant IA et un développeur ?",
    a: "Un consultant IA commence par comprendre votre métier et vos processus avant de proposer une solution. Un développeur exécute un cahier des charges technique. Le consultant IA identifie les bons problèmes à résoudre, choisit les technologies adaptées et assure que la solution s'intègre dans votre organisation. Chez Quanta, nos consultants combinent les deux compétences : conseil stratégique et capacité de déploiement.",
  },
  {
    q: "Un consultant IA peut-il intervenir sur site à Monaco ?",
    a: "C'est notre mode de fonctionnement principal. Nos consultants IA se déplacent dans vos locaux à Monaco pour les phases d'immersion, de diagnostic et de formation. La présence sur site est essentielle pour observer les processus réels, comprendre les interactions entre équipes et garantir l'adoption des solutions déployées.",
  },
  {
    q: "Combien de temps dure une mission de consulting IA ?",
    a: "La durée varie selon le périmètre : un audit stratégique prend 2 à 3 semaines, un projet d'automatisation ciblé 6 à 8 semaines, et une transformation complète 10 à 12 semaines. Chaque mission inclut une phase de transmission pour garantir l'autonomie de vos équipes après notre départ.",
  },
  {
    q: "Comment savoir si mon entreprise à Monaco a besoin d'un consultant IA ?",
    a: "Si vos équipes passent plus de 20 % de leur temps sur des tâches répétitives (saisie, vérification, reporting, relances), si vous sentez que vos concurrents avancent plus vite, ou si vous recevez des exigences réglementaires croissantes, alors l'IA peut créer de la valeur pour votre activité. Un entretien de 30 minutes suffit pour évaluer le potentiel.",
  },
];

export default function ConsultantIAMonacoPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="section-padding pt-32 sm:pt-40 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Consultant IA Monaco</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4 mb-6">
              Consultant IA à Monaco : expertise terrain et résultats mesurables
            </h1>
            <p className="text-foreground/60 text-[15px] leading-relaxed max-w-3xl mx-auto mb-8">
              Faire appel à un consultant IA à Monaco, c&apos;est choisir un expert qui connait votre marché, vos contraintes réglementaires et les codes de la Principauté. Nos consultants interviennent sur site, comprennent votre métier avant de proposer la moindre solution, et ne quittent pas la mission tant que les résultats ne sont pas au rendez-vous.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/33645636107"
                className="group bg-accent text-dark font-semibold px-6 py-3 rounded-xl text-[13px] hover:bg-accent-dark transition-all inline-flex items-center gap-2 shadow-lg shadow-accent/20"
              >
                Échanger avec un consultant
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <Link href="/tarifs" className="bg-surface text-foreground font-medium px-6 py-3 rounded-xl text-[13px] border border-border hover:border-foreground/20 transition-all">
                Voir les tarifs
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
                <p className="text-foreground/40 text-[12px]">missions de consulting IA</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={8} /></div>
                <p className="text-foreground/40 text-[12px]">secteurs d&apos;activité couverts</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={100} suffix="%" /></div>
                <p className="text-foreground/40 text-[12px]">des interventions sur site</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={12} suffix=" sem." /></div>
                <p className="text-foreground/40 text-[12px]">durée max d&apos;une mission</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Bon vs mauvais consultant */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Exigences</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Ce qui distingue un bon consultant IA d&apos;un mauvais à Monaco</h2>
            <div className="space-y-4 text-foreground/60 text-[14px] leading-relaxed">
              <p>
                Le marché du consulting en intelligence artificielle est saturé de profils qui maitrisent le vocabulaire sans maitriser la pratique. À Monaco, où les enjeux financiers et réputationnels sont élevés, le choix du bon consultant IA est déterminant.
              </p>
              <p>
                Un bon consultant IA pose des questions avant de proposer des réponses. Il passe du temps dans vos locaux, observe vos processus, échange avec vos équipes opérationnelles. Il ne vous vend pas une technologie : il identifie un problème concret et déploie la solution la plus efficace pour le résoudre.
              </p>
              <p>
                Un mauvais consultant IA arrive avec une solution toute faite, vous présente des slides impressionnantes, et repart sans avoir compris votre métier. Vous vous retrouvez avec un outil que personne n&apos;utilise et une facture qui ne correspond à aucune valeur créée.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Dark bubble - Sur site vs remote */}
      <section className="bg-dark text-white rounded-[2rem] mx-4 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Sur site</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-4">Consultant IA sur site à Monaco : pourquoi la présence physique compte</h2>
            <p className="text-white/50 text-[14px] leading-relaxed max-w-3xl mb-10">
              L&apos;intégration de l&apos;intelligence artificielle n&apos;est pas un projet informatique classique. C&apos;est une transformation qui touche les habitudes de travail, les processus métier et la culture de l&apos;entreprise. La présence sur site change tout.
            </p>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 gap-4">
            <RevealOnScroll>
              <div className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-4 text-white/70">Consultant distant</h3>
                <ul className="space-y-3 text-white/40 text-[13px]">
                  <li>Visioconférences de cadrage ponctuelles</li>
                  <li>Compréhension superficielle des processus</li>
                  <li>Solutions standardisées, non adaptées</li>
                  <li>Formation en ligne, faible adoption</li>
                  <li>Pas de connaissance du contexte monégasque</li>
                </ul>
              </div>
            </RevealOnScroll>
            <RevealOnScroll>
              <div className="p-6 rounded-xl border border-accent/20 bg-accent/5">
                <h3 className="text-[14px] font-semibold mb-4 text-accent">Consultant IA Quanta (sur site)</h3>
                <ul className="space-y-3 text-white/60 text-[13px]">
                  <li>Immersion dans vos locaux à Monaco</li>
                  <li>Observation directe des flux de travail</li>
                  <li>Solutions sur mesure, testées en conditions réelles</li>
                  <li>Formation en présentiel, accompagnement individuel</li>
                  <li>Connaissance approfondie du droit et des usages monégasques</li>
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Pourquoi Monaco a besoin de consultants IA locaux */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Spécificités</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Pourquoi Monaco a besoin de consultants IA locaux</h2>
            <div className="space-y-4 text-foreground/60 text-[14px] leading-relaxed">
              <p>
                Monaco n&apos;est pas Nice. Monaco n&apos;est pas Paris. La Principauté possède son propre cadre juridique, ses propres autorités de régulation et une culture d&apos;affaires distincte. Un consultant IA qui ne comprend pas ces spécificités risque de déployer des solutions non conformes ou inadaptées.
              </p>
              <p>
                Les obligations de la SICCFIN en matière de lutte contre le blanchiment, les exigences de la CCAF pour les professions du chiffre, le droit monégasque des sociétés : autant de particularités que votre consultant IA doit maitriser. Chez Quanta, nous avons accompagné des <Link href="/secteurs/banque-privee" className="text-accent hover:underline">établissements bancaires</Link>, des <Link href="/secteurs/cabinets-avocats" className="text-accent hover:underline">cabinets d&apos;avocats</Link> et des <Link href="/secteurs/gestion-patrimoine" className="text-accent hover:underline">family offices</Link> dans le respect strict du cadre réglementaire local.
              </p>
              <p>
                La culture de discrétion est un autre élément clé. Les entreprises monégasques et leur clientèle attendent un niveau de confidentialité que les prestataires généralistes ne savent pas toujours garantir. Nos consultants connaissent ces codes et les intègrent dans chaque aspect de la mission.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Méthodologie */}
      <section className="section-padding section-surface">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Méthodologie</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Comment se déroule une mission de consulting IA à Monaco</h2>
            <p className="text-foreground/60 text-[14px] leading-relaxed mb-8">
              Notre <Link href="/methode" className="text-accent hover:underline">méthodologie en quatre phases</Link> structure chaque intervention. Voici ce que vous pouvez attendre concrètement, semaine par semaine.
            </p>
          </RevealOnScroll>
          <div className="space-y-3">
            {[
              {
                phase: "Semaines 1-2 : Immersion",
                text: "Votre consultant IA passe plusieurs jours dans vos locaux. Il rencontre chaque collaborateur concerné, observe les processus en conditions réelles, analyse les outils en place et les flux documentaires. À la fin de cette phase, il connait votre métier aussi bien que vos équipes.",
              },
              {
                phase: "Semaine 3 : Diagnostic",
                text: "Chaque processus est évalué sur cinq critères : volume, fréquence, complexité, potentiel d'automatisation et contraintes réglementaires. Le résultat : une matrice d'opportunités priorisée avec estimation du ROI pour chaque levier identifié.",
              },
              {
                phase: "Semaines 4-10 : Déploiement",
                text: "Les solutions IA sont construites et déployées en commençant par les leviers les plus impactants. Cycle court : prototype, test en conditions réelles, ajustement, production. Votre consultant IA pilote le projet de bout en bout.",
              },
              {
                phase: "Semaines 11-12 : Transmission",
                text: "Formation approfondie de vos équipes. Documentation complète. Mise en place d'indicateurs de suivi. L'objectif : votre autonomie totale après le départ du consultant. Un support post-mission est inclus pendant 4 semaines.",
              },
            ].map((p) => (
              <RevealOnScroll key={p.phase}>
                <div className="p-6 rounded-2xl border border-border bg-surface">
                  <h3 className="text-[14px] font-semibold mb-2">{p.phase}</h3>
                  <p className="text-foreground/50 text-[13px] leading-relaxed">{p.text}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Ce que vous obtenez */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Livrables</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Ce que vous obtenez avec un consultant IA Quanta à Monaco</h2>
            <p className="text-foreground/60 text-[14px] leading-relaxed mb-8">
              Pas de slides sans suite. Chaque mission produit des livrables concrets et opérationnels. Voici ce qui est inclus dans une intervention type.
            </p>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: "Cartographie des processus", desc: "Analyse complète de vos flux de travail avec identification des points de friction et des opportunités d'automatisation." },
              { title: "Matrice d'opportunités IA", desc: "Priorisation des leviers par ROI et faisabilité. Chaque opportunité est chiffrée avec un calendrier de mise en œuvre." },
              { title: "Solutions déployées", desc: "Outils IA opérationnels, intégrés dans votre environnement de travail et testés en conditions réelles." },
              { title: "Formation des équipes", desc: "Sessions en présentiel adaptées à chaque profil. Guides de référence et documentation technique complète." },
              { title: "Indicateurs de suivi", desc: "Tableau de bord avec les métriques clés pour mesurer l'impact de l'IA sur vos opérations au fil du temps." },
              { title: "Support post-mission", desc: "4 semaines de support incluses après la fin de la mission pour garantir la pérennité des solutions déployées." },
            ].map((item) => (
              <RevealOnScroll key={item.title}>
                <div className="p-5 rounded-2xl border border-border bg-surface">
                  <h3 className="text-[13px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-foreground/50 text-[12px] leading-relaxed">{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Transparence tarifaire */}
      <section className="section-padding section-surface">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Tarifs</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Transparence tarifaire : combien coûte un consultant IA à Monaco</h2>
            <div className="space-y-4 text-foreground/60 text-[14px] leading-relaxed mb-8">
              <p>
                Nous croyons à la transparence. Trop de consultants en IA fonctionnent avec des tarifs opaques et des dépassements systématiques. Chez Quanta, chaque mission fait l&apos;objet d&apos;un devis détaillé avec un prix fixe. Pas de surprise, pas de facturation au temps passé sans plafond.
              </p>
              <p>
                Nos <Link href="/tarifs" className="text-accent hover:underline">tarifs détaillés</Link> sont disponibles en ligne. Pour un premier aperçu : un audit stratégique IA se situe à partir de 5 000 euros, un projet d&apos;automatisation entre 15 000 et 35 000 euros, et un développement sur mesure entre 25 000 et 50 000 euros. L&apos;accompagnement mensuel démarre à 3 000 euros.
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl border border-border bg-surface text-center">
                <div className="text-2xl font-bold tracking-tight text-accent mb-1"><AnimatedCounter value={5000} prefix="" suffix=" EUR" /></div>
                <p className="text-foreground/50 text-[12px]">audit stratégique IA</p>
              </div>
              <div className="p-5 rounded-2xl border border-border bg-surface text-center">
                <div className="text-2xl font-bold tracking-tight text-accent mb-1"><AnimatedCounter value={15} suffix="k-35k" /></div>
                <p className="text-foreground/50 text-[12px]">projet d&apos;automatisation</p>
              </div>
              <div className="p-5 rounded-2xl border border-border bg-surface text-center">
                <div className="text-2xl font-bold tracking-tight text-accent mb-1"><AnimatedCounter value={3000} prefix="" suffix=" EUR/m" /></div>
                <p className="text-foreground/50 text-[12px]">accompagnement mensuel</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Ressources */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Ressources</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Approfondir avant de solliciter un consultant IA</h2>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: "5 processus rentables à automatiser avec l'IA", href: "/blog/5-processus-rentables-automatiser" },
              { title: "Agent IA autonome en entreprise à Monaco", href: "/blog/agent-ia-autonome-entreprise-monaco" },
              { title: "Automatiser la conformité LCB-FT à Monaco", href: "/blog/automatiser-conformite-lcb-ft-monaco" },
              { title: "Former ses équipes à l'IA générative", href: "/blog/former-equipes-ia-generative" },
              { title: "CRM et IA : transformer la relation client", href: "/blog/crm-ia-relation-client-monaco" },
              { title: "Family office et digitalisation IA à Monaco", href: "/blog/family-office-monaco-digitalisation-ia" },
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
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-8">Questions sur le consulting IA à Monaco</h2>
          </RevealOnScroll>
          <FAQ items={faqItems} />
          <FaqSchema items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-background via-accent-light/30 to-accent/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">Discutons de votre projet avec un consultant IA</h2>
            <p className="text-foreground/60 text-[14px] mb-8">
              30 minutes pour évaluer le potentiel de l&apos;intelligence artificielle dans votre entreprise à Monaco. Premier entretien offert, sans engagement.
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
