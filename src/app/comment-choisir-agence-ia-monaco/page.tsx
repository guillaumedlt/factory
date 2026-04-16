import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import FAQ from "@/components/FAQ";
import FaqSchema from "@/components/FaqSchema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Comment choisir son agence IA à Monaco : guide complet",
  description:
    "Guide complet pour choisir une agence d'intelligence artificielle à Monaco : 10 critères essentiels, checklist pratique, red flags à éviter et méthodologie de sélection étape par étape.",
  alternates: { canonical: "https://quantamonaco.com/comment-choisir-agence-ia-monaco" },
  openGraph: {
    title: "Comment choisir son agence IA à Monaco : guide complet",
    description:
      "Guide complet pour choisir une agence d'intelligence artificielle à Monaco : 10 critères essentiels, checklist pratique, red flags à éviter et méthodologie de sélection étape par étape.",
    url: "https://quantamonaco.com/comment-choisir-agence-ia-monaco",
    siteName: "Quanta",
    locale: "fr_FR",
    type: "website",
  },
};

const faqItems = [
  {
    q: "Quelles questions poser à une agence IA avant de signer ?",
    a: "Cinq questions incontournables : avez-vous déjà travaillé dans mon secteur à Monaco avec des références vérifiables, quelle est votre méthodologie de projet avec livrables par phase, quels sont les tarifs et les délais contractuels, qui compose précisément l'équipe affectée à ma mission, et que se passe-t-il après la livraison en termes de support et d'évolution. Les réponses à ces questions dévoilent immédiatement le niveau de maturité de l'agence.",
  },
  {
    q: "Faut-il un cahier des charges détaillé avant de contacter une agence IA ?",
    a: "Non, un cahier des charges trop détaillé est souvent contre-productif. Il fige des solutions avant même le diagnostic. Préparez plutôt une note de contexte d'une page : vos objectifs business, vos contraintes (budget, calendrier, réglementation), les processus que vous voulez améliorer. Laissez l'agence proposer la solution technique après un audit. C'est sa valeur ajoutée.",
  },
  {
    q: "Comment vérifier qu'une agence IA maîtrise vraiment la technologie ?",
    a: "Demandez à voir des livrables réels (code, documentation technique, architectures), pas seulement des slides commerciales. Interrogez l'équipe technique directement sur des cas concrets. Vérifiez si l'agence publie du contenu technique de qualité sur son blog. Une agence qui ne sait pas expliquer simplement comment fonctionne un modèle de langage, une architecture RAG ou un agent autonome maîtrise probablement la communication plus que la technique.",
  },
  {
    q: "Combien de devis comparer avant de choisir une agence IA à Monaco ?",
    a: "Trois devis représentent un bon équilibre entre comparaison utile et investissement temps. Moins de trois limite la mise en perspective, plus de cinq génère une dispersion excessive et allonge la décision. Choisissez des profils différents : un cabinet local, une agence parisienne et éventuellement un consultant freelance. Cette diversité révèle les vraies différences d'approche et de tarification.",
  },
  {
    q: "Quels sont les red flags à éviter lors du choix d'une agence IA ?",
    a: "Six signaux d'alerte : refus de donner des références vérifiables, absence de méthodologie formalisée, tarification opaque en jours-homme sans engagement sur les livrables, promesses de résultats garantis sans audit préalable, proposition de solutions génériques sans compréhension de votre métier, et contrat imposant un vendor lock-in sur le code ou les données. Ces six points sont rédhibitoires.",
  },
];

export default function CommentChoisirAgenceIAMonacoPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="section-padding pt-32 sm:pt-40 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Guide de choix</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4 mb-6">
              Comment choisir une agence IA à Monaco : 10 critères essentiels
            </h1>
            <p className="text-foreground/60 text-[15px] leading-relaxed max-w-3xl mx-auto mb-8">
              Choisir une agence d&apos;intelligence artificielle est une décision structurante pour votre entreprise. Un mauvais choix se paie en retards, en budget dépassé, en solutions inadaptées et parfois en risques réglementaires sérieux. Ce guide rédigé par les équipes de Quanta, publié sur quantamonaco.com, vous présente une méthodologie rigoureuse en dix critères, avec une checklist pratique et les red flags à éviter absolument. Il s&apos;adresse aux dirigeants et directions métier de la Principauté qui souhaitent sécuriser leur processus de sélection.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/33645636107"
                className="group bg-accent text-dark font-semibold px-6 py-3 rounded-xl text-[13px] hover:bg-accent-dark transition-all inline-flex items-center gap-2 shadow-lg shadow-accent/20"
              >
                Poser vos questions
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
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={10} /></div>
                <p className="text-foreground/40 text-[12px]">critères essentiels de choix</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={6} /></div>
                <p className="text-foreground/40 text-[12px]">red flags à éviter</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={3} /></div>
                <p className="text-foreground/40 text-[12px]">devis à comparer idéalement</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={2} suffix=" sem."/></div>
                <p className="text-foreground/40 text-[12px]">pour un processus de sélection</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Étape 1 : Définir les besoins */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Étape 1</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Définir vos besoins avant de contacter une agence</h2>
            <div className="space-y-4 text-foreground/60 text-[14px] leading-relaxed">
              <p>
                Avant de solliciter le moindre cabinet, prenez le temps de clarifier vos besoins en interne. Cette étape paraît évidente, elle est pourtant largement négligée. Beaucoup de projets échouent parce que le cahier des charges initial masquait en réalité un problème d&apos;organisation ou un conflit interne non résolu. L&apos;IA n&apos;est pas une baguette magique : elle amplifie l&apos;existant, dans le bon comme dans le mauvais sens.
              </p>
              <p>
                Commencez par identifier trois à cinq processus qui consomment beaucoup de temps et qui génèrent peu de valeur ajoutée humaine. Reporting répétitif, saisie de données, relances clients, production de documents standardisés, recherche d&apos;information interne : ce sont les candidats naturels pour l&apos;automatisation IA. Quantifiez le temps passé chaque semaine sur ces tâches. Ce chiffre sera votre ancrage pour évaluer le retour sur investissement.
              </p>
              <p>
                Rédigez ensuite une note de contexte d&apos;une à deux pages : vos enjeux stratégiques, vos contraintes budgétaires, votre calendrier, les contraintes réglementaires spécifiques à Monaco (SICCFIN, CCAF, loi 1.565), les outils déjà en place. Cette note suffit pour un premier échange. Un bon cabinet vous aidera à la préciser et à la challenger, il ne vous demandera pas de rédiger un appel d&apos;offres de cinquante pages.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Étape 2 : Expérience */}
      <section className="section-padding section-surface">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Étape 2</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Vérifier l&apos;expérience et les références sectorielles</h2>
            <div className="space-y-4 text-foreground/60 text-[14px] leading-relaxed">
              <p>
                Une agence IA peut être très compétente techniquement sans connaître votre secteur. Or, chaque industrie a ses codes, ses vocabulaires, ses contraintes. Un projet dans la <Link href="/secteurs/banque-privee" className="text-accent hover:underline">banque privée à Monaco</Link> n&apos;a rien à voir avec un projet dans l&apos;<Link href="/secteurs/hotellerie-restauration" className="text-accent hover:underline">hôtellerie-restauration</Link> ou dans un <Link href="/secteurs/cabinets-avocats" className="text-accent hover:underline">cabinet d&apos;avocats monégasque</Link>. L&apos;expérience sectorielle accélère fortement la phase de diagnostic.
              </p>
              <p>
                Demandez systématiquement trois références clients joignables dans votre secteur. Une agence sérieuse acceptera, une agence qui refuse systématiquement sous prétexte de confidentialité cache souvent un manque de références réelles. Les échanges avec ces clients passés révèlent en vingt minutes ce qu&apos;aucune présentation commerciale ne peut dire : la qualité de l&apos;écoute, le respect des délais, la pertinence des livrables, la tenue du budget.
              </p>
              <p>
                Consultez également les <Link href="/resultats" className="text-accent hover:underline">études de cas clients</Link> publiées par l&apos;agence. Attention aux témoignages vagues et aux chiffres invérifiables. Les études de cas crédibles citent des indicateurs précis, un calendrier, des enjeux et un contexte. Elles ressemblent davantage à un retour d&apos;expérience qu&apos;à un argumentaire commercial.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Étape 3 : Livrables */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Étape 3</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Analyser les livrables proposés et la méthodologie</h2>
            <div className="space-y-4 text-foreground/60 text-[14px] leading-relaxed">
              <p>
                Une bonne proposition détaille les livrables phase par phase, avec des critères d&apos;acceptation clairs. Une mauvaise proposition se contente de chiffrer des jours-homme sans préciser ce qui sera produit. Exigez un plan de livraison : rapport de cadrage, matrice d&apos;opportunités, prototype, documentation technique, guide d&apos;utilisation, session de formation, plan de support.
              </p>
              <p>
                Notre <Link href="/methode" className="text-accent hover:underline">méthode d&apos;intégration IA</Link> en quatre phases (immersion, diagnostic, déploiement, transmission) produit une dizaine de livrables intermédiaires sur une mission type. Chaque livrable fait l&apos;objet d&apos;une validation explicite par le client avant passage à la phase suivante. Cette rigueur méthodologique protège les deux parties et garantit la tenue du cap.
              </p>
              <p>
                Vérifiez aussi que la méthodologie inclut des itérations courtes et une implication continue de vos équipes. Les méthodes en tunnel, où l&apos;agence disparaît pendant trois mois avant de revenir avec une solution finie, sont à fuir. L&apos;IA appliquée aux métiers exige des ajustements permanents au contact de la réalité terrain.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Étape 4 : Prix - Dark bubble */}
      <section className="bg-dark text-white rounded-[2rem] mx-4 py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Étape 4</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Comprendre la tarification et ses mécanismes</h2>
            <div className="space-y-4 text-white/60 text-[14px] leading-relaxed">
              <p>
                Trois modèles de tarification coexistent sur le marché du conseil IA à Monaco. La tarification au forfait, avec un prix ferme pour un périmètre défini, est la plus transparente et la plus sécurisante pour le client. La tarification en régie, facturée en jours-homme, offre de la flexibilité mais expose à des dérives budgétaires. La tarification hybride, avec un forfait pour le cadrage et une régie encadrée pour la réalisation, est un compromis intéressant pour les projets complexes.
              </p>
              <p>
                Notre grille de <Link href="/tarifs" className="text-accent hover:underline">tarifs IA à Monaco</Link> est publique et détaille chaque type de mission. Audit stratégique à partir de 5 000 euros, automatisation entre 10 000 et 40 000 euros selon la complexité, développement sur mesure sur devis détaillé. Cette transparence est rare sur le marché et elle est volontaire : elle permet une sélection rationnelle et évite les négociations à rallonge.
              </p>
              <p>
                Méfiez-vous des tarifs extrêmement bas : ils cachent souvent une sous-traitance offshore non déclarée ou une prestation minimaliste. Méfiez-vous aussi des tarifs très élevés : ils rémunèrent parfois une marque plus qu&apos;une expertise. La fourchette pertinente pour un projet IA à Monaco se situe entre 800 et 1 500 euros par jour, selon le niveau de seniorité requis.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Étape 5 : Communication */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Étape 5 et 6</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Tester la communication et encadrer la confidentialité</h2>
            <div className="space-y-4 text-foreground/60 text-[14px] leading-relaxed">
              <p>
                La qualité de la communication est un excellent prédicteur de la qualité de la mission. Observez la vitesse de réponse aux premiers emails, la clarté des propositions, la capacité à vulgariser des concepts techniques complexes, la disponibilité pour les échanges préparatoires. Un prestataire qui met dix jours à répondre en phase commerciale mettra trois semaines en phase projet.
              </p>
              <p>
                La confidentialité est un enjeu critique à Monaco, particulièrement pour les <Link href="/secteurs/banque-privee" className="text-accent hover:underline">banques privées</Link>, les <Link href="/secteurs/gestion-patrimoine" className="text-accent hover:underline">gestions de patrimoine</Link> et les family offices qui traitent des données de clients UHNWI. Exigez la signature d&apos;un accord de non-divulgation mutuel dès les premiers échanges détaillés. Vérifiez où seront hébergées vos données, qui y aura accès, pendant combien de temps elles seront conservées après la mission.
              </p>
              <p>
                Notre approche inclut systématiquement un volet confidentialité détaillé dans le contrat, avec hébergement européen, minimisation des données, traçabilité des accès et engagement de destruction en fin de mission. Ces clauses ne sont pas négociables pour les missions monégasques.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Étape 7-8 : Contrat */}
      <section className="section-padding section-surface">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Étape 7 et 8</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Négocier le contrat et prévoir le support post-déploiement</h2>
            <div className="space-y-4 text-foreground/60 text-[14px] leading-relaxed">
              <p>
                Le contrat de mission IA mérite une lecture attentive. Cinq clauses critiques méritent votre vigilance : la propriété intellectuelle sur le code et les modèles produits, la portabilité des données en cas de rupture du contrat, les conditions de réversibilité, les engagements de service (délais, taux de disponibilité), et les pénalités en cas de dépassement. Une agence honnête accepte de discuter ces clauses sans réticence.
              </p>
              <p>
                Le support post-déploiement est trop souvent négligé au moment de la signature. Pourtant, c&apos;est lui qui conditionne la durée de vie utile de votre solution. Prévoyez trois mois de support inclus minimum, puis un contrat de maintenance clair avec des niveaux de service définis. Un bon contrat de maintenance coûte entre 10 et 20 % du prix de la mission initiale, rapporté à l&apos;année.
              </p>
              <p>
                Envisagez également la question de la montée en compétences interne. Un bon cabinet IA vise votre autonomie à terme, pas votre dépendance. La <Link href="/expertise/formation-ia" className="text-accent hover:underline">formation IA</Link> de vos équipes fait partie intégrante d&apos;une mission bien menée, elle transforme une installation en véritable transformation durable.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Étape 9-10 : Red flags */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Étape 9 et 10</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Détecter les red flags et finaliser la checklist</h2>
            <div className="space-y-4 text-foreground/60 text-[14px] leading-relaxed mb-6">
              <p>
                Six signaux d&apos;alerte doivent vous pousser à écarter un prestataire. Premièrement, le refus de fournir des références vérifiables. Deuxièmement, l&apos;absence de méthodologie formalisée présentée clairement. Troisièmement, la tarification uniquement en jours-homme, sans engagement sur les livrables. Quatrièmement, les promesses de résultats garantis avant tout audit. Cinquièmement, les propositions de solutions génériques sans compréhension de votre métier. Sixièmement, les contrats imposant un vendor lock-in sur le code ou les données.
              </p>
              <p>
                Pour finaliser votre choix, utilisez une checklist simple : présence sur site confirmée, références sectorielles vérifiées, méthodologie documentée, livrables détaillés, tarifs transparents, délais contractuels, confidentialité encadrée, support post-déploiement prévu, contrat équilibré, absence de red flags. Si les dix cases sont cochées, le cabinet est un candidat sérieux.
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="p-6 rounded-2xl border border-accent/30 bg-accent-light/20">
              <h3 className="text-[15px] font-semibold mb-3">Checklist pratique de sélection</h3>
              <ul className="space-y-2 text-foreground/70 text-[13px]">
                <li>Trois références clients joignables dans votre secteur</li>
                <li>Méthodologie écrite en quatre phases minimum</li>
                <li>Livrables par phase avec critères d&apos;acceptation</li>
                <li>Tarifs et délais contractuels, pas indicatifs</li>
                <li>Accord de non-divulgation signé en amont</li>
                <li>Équipe projet stable, nommément identifiée</li>
                <li>Support post-déploiement de trois mois minimum</li>
                <li>Propriété intellectuelle intégralement cédée</li>
                <li>Portabilité des données garantie contractuellement</li>
                <li>Présence physique à Monaco documentée</li>
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Ressources */}
      <section className="section-padding section-surface">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Ressources</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Approfondir votre processus de choix</h2>
            <p className="text-foreground/60 text-[14px] leading-relaxed mb-8">
              Ces pages complètent la méthodologie présentée et vous aideront à finaliser votre sélection.
            </p>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: "Comparatif des agences IA à Monaco", href: "/comparatif-agence-ia-monaco" },
              { title: "Pourquoi choisir Quanta à Monaco", href: "/pourquoi-choisir-quanta" },
              { title: "Combien coûte un projet IA à Monaco", href: "/combien-coute-projet-ia-monaco" },
              { title: "Notre expertise IA à Monaco", href: "/expertise" },
              { title: "Cas clients dans la Principauté", href: "/resultats" },
              { title: "Questions fréquentes des dirigeants", href: "/ia-questions-frequentes-dirigeants" },
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
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Questions fréquentes</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-8">Choisir une agence IA à Monaco</h2>
          </RevealOnScroll>
          <FAQ items={faqItems} />
          <FaqSchema items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-background via-accent-light/30 to-accent/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">Besoin d&apos;un avis sur les propositions reçues ?</h2>
            <p className="text-foreground/60 text-[14px] mb-8">
              Nous vous aidons à évaluer objectivement les offres que vous recevez. Un conseil franc, même si vous envisagez de travailler avec un autre cabinet.
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
