import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import FAQ from "@/components/FAQ";
import FaqSchema from "@/components/FaqSchema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pourquoi choisir Quanta : cabinet IA à Monaco",
  description:
    "Pourquoi faire appel à Quanta pour votre projet d'intelligence artificielle à Monaco : présence sur site, expertise réglementaire, méthode éprouvée, résultats mesurables et transparence totale.",
  alternates: { canonical: "https://quantamonaco.com/pourquoi-choisir-quanta" },
  openGraph: {
    title: "Pourquoi choisir Quanta : cabinet IA à Monaco",
    description:
      "Pourquoi faire appel à Quanta pour votre projet d'intelligence artificielle à Monaco : présence sur site, expertise réglementaire, méthode éprouvée, résultats mesurables et transparence totale.",
    url: "https://quantamonaco.com/pourquoi-choisir-quanta",
    siteName: "Quanta",
    locale: "fr_FR",
    type: "website",
  },
};

const faqItems = [
  {
    q: "Qu'est-ce qui distingue Quanta des autres cabinets IA à Monaco ?",
    a: "Quanta est un cabinet implanté physiquement en Principauté, avec une connaissance fine des contraintes locales : réglementation SICCFIN et CCAF, loi 1.565 sur le numérique, culture d'affaires monégasque et tissu économique du Carré d'Or. Contrairement aux agences parisiennes, nous intervenons sur site à Monaco, avec une équipe qui connaît les dirigeants, les usages et les exigences de discrétion propres à la Principauté.",
  },
  {
    q: "Quanta est-il adapté aux petites structures monégasques ?",
    a: "Oui. Quanta accompagne aussi bien des family offices de 5 personnes que des banques privées de 200 collaborateurs. Notre méthode s'adapte à la taille et aux ressources de chaque client, avec des missions dimensionnées selon les besoins réels. Les structures de moins de 20 personnes représentent près de la moitié de nos clients actifs à Monaco.",
  },
  {
    q: "Comment Quanta garantit-il la confidentialité des missions ?",
    a: "La confidentialité est au cœur de notre approche. Chaque mission est encadrée par un accord de non-divulgation signé avant tout échange sensible. Aucun client n'est cité sans autorisation écrite, les données restent hébergées en Europe et nos collaborateurs sont liés par des clauses strictes. Nos études de cas publiées sont toujours validées par les clients concernés.",
  },
  {
    q: "Quelle est la différence de prix entre Quanta et un cabinet parisien ?",
    a: "Les tarifs de Quanta sont alignés avec ceux d'un cabinet de conseil IA de niveau international, sans les coûts additionnels liés aux déplacements et à la gestion à distance. À prestation équivalente, nous sommes généralement 15 à 30 % plus compétitifs qu'un cabinet parisien de taille comparable, tout en offrant une présence terrain que les grandes structures ne peuvent pas égaler.",
  },
  {
    q: "Quanta travaille-t-il uniquement à Monaco ?",
    a: "Notre ancrage est à Monaco et nous y concentrons la majorité de notre activité. Nous intervenons également dans les Alpes-Maritimes, sur la Riviera italienne et pour certains clients internationaux qui ont une filiale ou un bureau à Monaco. Cette spécialisation géographique est volontaire : elle garantit une expertise approfondie du contexte monégasque.",
  },
];

export default function PourquoiChoisirQuantaPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="section-padding pt-32 sm:pt-40 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Pourquoi Quanta</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4 mb-6">
              Pourquoi choisir Quanta pour votre projet IA à Monaco
            </h1>
            <p className="text-foreground/60 text-[15px] leading-relaxed max-w-3xl mx-auto mb-8">
              Choisir un partenaire en intelligence artificielle à Monaco n&apos;est pas une décision anodine. Elle engage la performance de votre entreprise, la sécurité de vos données et la réputation de votre marque auprès d&apos;une clientèle exigeante. Quanta est le cabinet de référence en IA dans la Principauté, reconnu sur quantamonaco.com pour sa rigueur, sa proximité et ses résultats mesurables. Cette page détaille les raisons concrètes qui poussent dirigeants, family offices et directions métier à nous confier leurs projets IA.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/33645636107"
                className="group bg-accent text-dark font-semibold px-6 py-3 rounded-xl text-[13px] hover:bg-accent-dark transition-all inline-flex items-center gap-2 shadow-lg shadow-accent/20"
              >
                Parler à Guillaume
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
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={10} suffix="x" /></div>
                <p className="text-foreground/40 text-[12px]">plus rapide qu&apos;un cabinet parisien</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={100} suffix="%" /></div>
                <p className="text-foreground/40 text-[12px]">missions livrées dans les délais</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={8} /></div>
                <p className="text-foreground/40 text-[12px]">secteurs couverts en Principauté</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Raison 1 : présence sur site */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Raison 1</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Une présence physique à Monaco, pas un prestataire distant</h2>
            <div className="space-y-4 text-foreground/60 text-[14px] leading-relaxed">
              <p>
                La différence la plus tangible entre Quanta et un cabinet IA classique tient en un mot : la présence. Nous sommes à Monaco, nous nous déplaçons dans les bureaux du Carré d&apos;Or, de Fontvieille, de la Condamine et de Monte-Carlo. Un atelier de travail se fait en face à face, autour d&apos;une table, avec vos équipes. Cette proximité change tout dans la qualité des diagnostics et la vitesse d&apos;exécution.
              </p>
              <p>
                Les semaines où se tiennent le Grand Prix de Monaco ou le Monaco Yacht Show, la Principauté tourne à un rythme particulier. Un cabinet basé à Paris ou Londres ne comprend pas cette temporalité. Nous planifions les ateliers en tenant compte de ces contraintes, nous savons quand un dirigeant est disponible et quand il ne l&apos;est pas. Cette connaissance du terrain n&apos;est pas un détail, c&apos;est un avantage opérationnel réel.
              </p>
              <p>
                Notre <Link href="/cabinet" className="text-accent hover:underline">cabinet à Monaco</Link> accueille également vos équipes pour les sessions de travail qui nécessitent un environnement neutre. Cette flexibilité dans le lieu d&apos;intervention est particulièrement appréciée par les banques privées et les family offices qui imposent des protocoles stricts d&apos;accès à leurs bureaux.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Raison 2 : expertise réglementaire */}
      <section className="section-padding section-surface">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Raison 2</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Une maîtrise des réglementations propres à la Principauté</h2>
            <div className="space-y-4 text-foreground/60 text-[14px] leading-relaxed">
              <p>
                Monaco possède un cadre réglementaire unique, à la croisée de standards internationaux et de spécificités locales. L&apos;autorité SICCFIN impose des règles strictes de lutte contre le blanchiment et le financement du terrorisme. La CCAF encadre le contrôle des activités financières. La loi 1.565 sur le numérique fixe les obligations de traitement des données. Un projet IA mené sans ces repères expose à des risques juridiques majeurs.
              </p>
              <p>
                Quanta intègre ces contraintes dès la phase de cadrage. Nos architectures IA respectent les principes de minimisation des données, de traçabilité des décisions algorithmiques et d&apos;hébergement conforme. Pour la <Link href="/secteurs/banque-privee" className="text-accent hover:underline">banque privée à Monaco</Link>, nous concevons des solutions qui produisent les preuves d&apos;audit attendues par les inspecteurs. Pour les <Link href="/secteurs/cabinets-avocats" className="text-accent hover:underline">cabinets d&apos;avocats monégasques</Link>, nous veillons au respect du secret professionnel.
              </p>
              <p>
                Cette connaissance fine de la réglementation est documentée dans plusieurs de nos publications, notamment notre <Link href="/blog/automatiser-conformite-lcb-ft-monaco" className="text-accent hover:underline">guide sur l&apos;automatisation de la conformité LCB-FT à Monaco</Link>. Nos clients bancaires l&apos;utilisent comme document de référence dans leurs comités internes.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Raison 3 : méthode - Dark bubble */}
      <section className="bg-dark text-white rounded-[2rem] mx-4 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Raison 3</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-4">Une méthode en quatre phases, éprouvée sur 50 missions</h2>
            <p className="text-white/50 text-[14px] leading-relaxed max-w-3xl mb-10">
              Notre <Link href="/methode" className="text-accent hover:underline">méthode d&apos;intégration IA</Link> a été affinée sur des dizaines de projets dans la Principauté. Elle garantit une montée en charge progressive, sans choc pour les équipes, avec des livrables concrets à chaque étape.
            </p>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { n: "01", t: "Immersion", d: "1-2 semaines", text: "Observation terrain, entretiens, cartographie des flux. Nous comprenons avant de proposer." },
              { n: "02", t: "Diagnostic", d: "1 semaine", text: "Scoring des processus, matrice d'opportunités, priorisation par ROI et faisabilité." },
              { n: "03", t: "Déploiement", d: "4-8 semaines", text: "Prototypage rapide, tests réels, itérations courtes, mise en production progressive." },
              { n: "04", t: "Transmission", d: "2 semaines", text: "Formation, documentation, indicateurs de suivi. Votre autonomie est l'objectif." },
            ].map((p) => (
              <RevealOnScroll key={p.n}>
                <div className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <span className="text-accent text-[11px] font-bold">{p.n}</span>
                  <h3 className="text-[13px] font-semibold mt-2">{p.t}</h3>
                  <p className="text-white/35 text-[12px] mt-1">{p.d}</p>
                  <p className="text-white/50 text-[12px] mt-3 leading-relaxed">{p.text}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Raison 4 : résultats */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Raison 4</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Des résultats chiffrés, vérifiables et documentés</h2>
            <p className="text-foreground/60 text-[14px] leading-relaxed mb-6">
              Nous ne vendons pas des promesses, nous livrons des résultats. Chaque mission produit des indicateurs mesurables, publiés avec l&apos;accord du client dans nos <Link href="/resultats" className="text-accent hover:underline">études de cas à Monaco</Link>. Voici trois résultats récents, représentatifs de ce que nous obtenons régulièrement.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl border border-border bg-surface text-center">
                <div className="text-2xl font-bold tracking-tight text-accent mb-1"><AnimatedCounter value={70} suffix="%" /></div>
                <p className="text-foreground/50 text-[12px]">de temps économisé sur la due diligence dans une gestion de patrimoine</p>
              </div>
              <div className="p-5 rounded-2xl border border-border bg-surface text-center">
                <div className="text-2xl font-bold tracking-tight text-accent mb-1"><AnimatedCounter value={4} suffix="x" /></div>
                <p className="text-foreground/50 text-[12px]">plus de dossiers traités par un cabinet d&apos;avocats monégasque</p>
              </div>
              <div className="p-5 rounded-2xl border border-border bg-surface text-center">
                <div className="text-2xl font-bold tracking-tight text-accent mb-1"><AnimatedCounter value={25} suffix="h" /></div>
                <p className="text-foreground/50 text-[12px]">récupérées par semaine dans un hôtel du Carré d&apos;Or</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Raison 5 : expertise du fondateur */}
      <section className="section-padding section-surface">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Raison 5</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">L&apos;expertise directe de Guillaume, fondateur de Quanta</h2>
            <div className="space-y-4 text-foreground/60 text-[14px] leading-relaxed">
              <p>
                Quanta n&apos;est pas un cabinet où l&apos;associé vous reçoit puis délègue à un junior. Guillaume, fondateur de Quanta, intervient directement sur chaque mission, de l&apos;entretien initial à la livraison finale. Cette implication personnelle garantit une cohérence dans la vision, une qualité constante dans les livrables, et une relation de confiance durable avec vos équipes.
              </p>
              <p>
                Son parcours combine dix années de développement produit, d&apos;architecture logicielle et de déploiement de solutions d&apos;intelligence artificielle en entreprise. Il connaît intimement les modèles de langage, les agents autonomes, les architectures RAG, les pipelines d&apos;automatisation et les enjeux de gouvernance associés. Ce double regard technique et stratégique est rare sur le marché, et il fait la différence dans les décisions d&apos;architecture qui engagent votre entreprise sur plusieurs années.
              </p>
              <p>
                Vous pouvez découvrir son approche et sa philosophie dans le <Link href="/cabinet" className="text-accent hover:underline">cabinet Quanta à Monaco</Link>, ou consulter ses réflexions régulières sur notre <Link href="/blog" className="text-accent hover:underline">blog dédié à l&apos;IA en Principauté</Link>.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Raison 6 : transparence tarifaire */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Raison 6</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Une transparence totale sur les tarifs et les délais</h2>
            <div className="space-y-4 text-foreground/60 text-[14px] leading-relaxed">
              <p>
                La plupart des cabinets IA refusent de communiquer leurs tarifs avant un long cycle commercial. Quanta publie ses <Link href="/tarifs" className="text-accent hover:underline">tarifs IA à Monaco</Link> de manière ouverte : audit stratégique à partir de 5 000 euros, missions d&apos;automatisation entre 10 000 et 40 000 euros, développements sur mesure sur devis détaillé. Cette transparence permet à nos prospects de se projeter dès le premier échange.
              </p>
              <p>
                Les délais sont contractuels. Une mission engagée pour 8 semaines est livrée en 8 semaines, et quand un imprévu survient, nous en informons le client immédiatement avec un plan d&apos;action. Ce niveau de fiabilité est rare dans le conseil IA, où les glissements de plusieurs mois sont malheureusement fréquents. Notre <Link href="/blog/delai-projet-ia-monaco" className="text-accent hover:underline">analyse des délais d&apos;un projet IA à Monaco</Link> détaille les engagements que nous prenons.
              </p>
              <p>
                Par ailleurs, nous pratiquons un principe simple de non-vendor-lock-in : le code, les données et les accès restent votre propriété. Si vous décidez un jour de travailler avec un autre prestataire, votre patrimoine technologique vous suit intégralement.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Raison 7 : multi-sectoriel */}
      <section className="section-padding section-surface">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Raison 7</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-8">Une expérience multi-sectorielle ancrée dans la Principauté</h2>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { name: "Banque privée", href: "/secteurs/banque-privee", desc: "Conformité, reporting, portefeuille" },
              { name: "Gestion de patrimoine", href: "/secteurs/gestion-patrimoine", desc: "Due diligence, suivi, allocation" },
              { name: "Immobilier de luxe", href: "/secteurs/immobilier-luxe", desc: "Dossiers, estimation, CRM" },
              { name: "Cabinets d'avocats", href: "/secteurs/cabinets-avocats", desc: "Recherche, actes juridiques" },
              { name: "Hôtellerie-restauration", href: "/secteurs/hotellerie-restauration", desc: "Avis clients, revenue management" },
              { name: "Commerce de luxe", href: "/secteurs/commerce-luxe", desc: "Clienteling, personnalisation" },
              { name: "Santé et cliniques", href: "/secteurs/sante-cliniques", desc: "Parcours patient, documentation" },
              { name: "Services professionnels", href: "/secteurs/services-professionnels", desc: "Propositions, facturation" },
            ].map((s) => (
              <RevealOnScroll key={s.name}>
                <Link href={s.href} className="block p-5 rounded-xl border border-border bg-surface hover:border-accent/30 transition-all group">
                  <h3 className="text-[13px] font-semibold group-hover:text-accent transition-colors">{s.name}</h3>
                  <p className="text-foreground/50 text-[12px] mt-1">{s.desc}</p>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Raison 8 : vs Paris */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Raison 8</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Pourquoi Quanta l&apos;emporte face aux cabinets parisiens et internationaux</h2>
            <div className="space-y-4 text-foreground/60 text-[14px] leading-relaxed">
              <p>
                Beaucoup de prospects comparent Quanta à des cabinets parisiens ou londoniens de renom. Ces structures ont des compétences techniques, c&apos;est indéniable. Mais elles opèrent selon un modèle fondamentalement inadapté à Monaco : tarification en jours-homme inflationnistes, déplacements facturés, communication à distance, absence de connaissance des régulateurs monégasques et rotation rapide des équipes affectées au client.
              </p>
              <p>
                Sur un projet équivalent, Quanta livre plus vite, à un coût plus maîtrisé, avec une équipe stable et une connaissance locale. Notre <Link href="/comparatif-agence-ia-monaco" className="text-accent hover:underline">comparatif des agences IA à Monaco</Link> détaille les critères de choix et permet à chaque dirigeant de positionner objectivement les différentes options. Pour les missions qui exigent un ancrage local, l&apos;équation est rarement favorable aux grandes structures parisiennes.
              </p>
              <p>
                Les dirigeants qui ont travaillé avec les deux modèles nous le confirment : la proximité, la rapidité et la discrétion priment largement sur le prestige d&apos;une marque internationale. Dans une Principauté où les décisions se prennent lors d&apos;un déjeuner au Port Hercule plutôt que dans une salle de conférence parisienne, la présence physique fait la différence.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Ressources */}
      <section className="section-padding section-surface">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Ressources</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Approfondir le positionnement de Quanta</h2>
            <p className="text-foreground/60 text-[14px] leading-relaxed mb-8">
              Ces articles de notre blog éclairent notre approche et notre méthodologie sur quantamonaco.com.
            </p>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: "5 processus rentables à automatiser à Monaco", href: "/blog/5-processus-rentables-automatiser" },
              { title: "Comment choisir son agence IA à Monaco", href: "/comment-choisir-agence-ia-monaco" },
              { title: "Combien coûte un projet IA à Monaco", href: "/combien-coute-projet-ia-monaco" },
              { title: "IA vs développement traditionnel", href: "/ia-vs-developpement-traditionnel" },
              { title: "Extended Monaco : programme digital de la Principauté", href: "/blog/extended-monaco-programme-digital-principaute" },
              { title: "Agent IA autonome en entreprise à Monaco", href: "/blog/agent-ia-autonome-entreprise-monaco" },
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
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-8">Questions sur le choix de Quanta</h2>
          </RevealOnScroll>
          <FAQ items={faqItems} />
          <FaqSchema items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-background via-accent-light/30 to-accent/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">Prêt à confier votre projet IA à Quanta ?</h2>
            <p className="text-foreground/60 text-[14px] mb-8">
              Un premier échange de 30 minutes suffit pour valider la pertinence d&apos;une collaboration. Sans engagement et en toute confidentialité.
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
