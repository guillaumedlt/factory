import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import FAQ from "@/components/FAQ";
import FaqSchema from "@/components/FaqSchema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IA vs développement traditionnel : 10x plus rapide à Monaco",
  description:
    "Développement IA-assisté vs développement classique : comparatif détaillé des délais, des coûts et de la qualité. Pourquoi Cursor, Claude Code, Lovable et v0 changent tout pour les entreprises monégasques.",
  alternates: { canonical: "https://quantamonaco.com/ia-vs-developpement-traditionnel" },
  openGraph: {
    title: "IA vs développement traditionnel : 10x plus rapide à Monaco",
    description:
      "Développement IA-assisté vs développement classique : comparatif détaillé des délais, des coûts et de la qualité. Pourquoi Cursor, Claude Code, Lovable et v0 changent tout pour les entreprises monégasques.",
    url: "https://quantamonaco.com/ia-vs-developpement-traditionnel",
    siteName: "Quanta",
    locale: "fr_FR",
    type: "website",
  },
};

const faqItems = [
  {
    q: "Qu'est-ce que le développement assisté par IA ?",
    a: "Le développement assisté par IA utilise des outils comme Cursor, Claude Code, Lovable ou v0 pour accélérer la production de code. Un développeur expérimenté peut produire l'équivalent de cinq à dix fois plus de code, avec une qualité équivalente ou supérieure. L'IA ne remplace pas le développeur, elle multiplie son efficacité sur les tâches répétitives et la génération initiale.",
  },
  {
    q: "Est-ce adapté à toutes les applications métier ?",
    a: "Pour les applications internes, les outils de gestion, les tableaux de bord et les automatisations, c'est parfaitement adapté. Pour des systèmes critiques à haute disponibilité, des applications avec contraintes de sécurité extrême ou des algorithmes très spécialisés, une partie du code reste à écrire de manière traditionnelle avec validation ligne par ligne. Les deux approches cohabitent dans un projet sérieux.",
  },
  {
    q: "La qualité du code est-elle équivalente ?",
    a: "Oui, à condition qu'un ingénieur expérimenté encadre l'IA. Le code généré est souvent mieux structuré et mieux testé qu'un développement manuel pressé. Le piège est de laisser l'IA décider seule de l'architecture : dans ce cas la qualité chute. Un développeur expert qui dirige l'IA obtient un code de très haute qualité en un dixième du temps.",
  },
  {
    q: "Pourquoi c'est moins cher ?",
    a: "Trois raisons : moins de jours-hommes pour produire la même fonctionnalité, moins de bugs à corriger grâce aux tests générés automatiquement, et moins de temps perdu sur les tâches sans valeur ajoutée comme la mise en forme ou les CRUD répétitifs. Au total, un projet type coûte 40 à 60 pour cent de moins qu'en développement classique.",
  },
  {
    q: "Faut-il une équipe technique en interne pour en profiter ?",
    a: "Non. C'est précisément l'intérêt d'un cabinet comme Quanta : nous apportons l'expertise technique, la direction d'architecture et les outils IA. Vous fournissez la connaissance métier et les priorités. Vos équipes sont formées à l'usage des outils livrés, sans avoir besoin de les maintenir techniquement.",
  },
];

export default function IAvsDeveloppementPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="section-padding pt-32 sm:pt-40 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">IA vs développement classique</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4 mb-6">
              Développement IA-assisté vs développement traditionnel : pourquoi c&apos;est 10x plus rapide
            </h1>
            <p className="text-foreground/60 text-[15px] leading-relaxed max-w-3xl mx-auto mb-8">
              La révolution silencieuse des deux dernières années ne se voit pas dans les salons de la tech, elle se voit dans les délais de livraison. Le développement assisté par intelligence artificielle divise par dix le temps nécessaire pour produire une application métier de qualité. Cette page explique concrètement pourquoi, avec des comparaisons chiffrées, des outils nommés et des exemples vécus dans les entreprises monégasques.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/33645636107"
                className="group bg-accent text-dark font-semibold px-6 py-3 rounded-xl text-[13px] hover:bg-accent-dark transition-all inline-flex items-center gap-2 shadow-lg shadow-accent/20"
              >
                Parler d&apos;un projet IA-assisté
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
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={10} suffix="x" /></div>
                <p className="text-foreground/40 text-[12px]">plus rapide sur une app métier</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={60} suffix="%" /></div>
                <p className="text-foreground/40 text-[12px]">de coût en moins versus cycle classique</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={3} suffix=" sem." /></div>
                <p className="text-foreground/40 text-[12px]">pour livrer un CRM interne complet</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={2} suffix="h" /></div>
                <p className="text-foreground/40 text-[12px]">pour une landing page professionnelle</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Le tournant historique */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Contexte</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Un changement de paradigme aussi important que l&apos;arrivée du cloud</h2>
            <div className="space-y-4 text-foreground/60 text-[14px] leading-relaxed">
              <p>
                Depuis deux ans, une génération d&apos;outils a transformé radicalement la manière dont on construit des logiciels. Cursor permet à un développeur d&apos;écrire du code à la vitesse de la pensée. Claude Code automatise des tâches entières d&apos;architecture. Lovable génère une application complète à partir d&apos;un prompt. v0 produit des interfaces utilisateur de qualité professionnelle en quelques secondes. Ces outils, combinés, ne divisent pas simplement le temps de développement par deux : ils le divisent par dix sur certaines phases.
              </p>
              <p>
                Pour une entreprise monégasque, cela change tout. Un outil interne qui aurait demandé six mois de développement à une agence parisienne classique se livre en trois semaines. Un site web institutionnel qui aurait coûté 50 000 euros se produit pour 5 000. Un prototype qui aurait nécessité un budget R&D se crée en un après-midi. Ces chiffres ne sont pas théoriques : nous les mesurons sur chaque mission à Monaco, qu&apos;il s&apos;agisse d&apos;un outil pour une <Link href="/secteurs/gestion-patrimoine" className="text-accent hover:underline">société de gestion de patrimoine</Link> ou d&apos;une application pour un <Link href="/secteurs/hotellerie-restauration" className="text-accent hover:underline">établissement hôtelier</Link>.
              </p>
              <p>
                Mais attention au piège : l&apos;IA ne rend pas le développement gratuit ni automatique. Elle démultiplie l&apos;efficacité d&apos;un expert. Entre les mains d&apos;un amateur, elle produit du code fragile, non testé, parfois dangereux. Notre conviction chez Quanta est claire : les meilleurs résultats viennent de la combinaison entre une expertise d&apos;ingénieur senior et une maîtrise fine de ces nouveaux outils. C&apos;est exactement ce que nous mettons en œuvre dans chaque <Link href="/expertise/developpement-ia-sur-mesure" className="text-accent hover:underline">projet de développement IA sur mesure</Link>.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Les outils qui changent tout */}
      <section className="section-padding section-surface">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Outils</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Les outils qui ont rendu le développement 10x plus rapide</h2>
            <p className="text-foreground/60 text-[14px] leading-relaxed mb-10 max-w-3xl">
              Voici les outils que nous utilisons quotidiennement pour nos projets IA à Monaco. Tous sont récents, tous sont déjà mûrs, et tous ont démontré leur apport sur des projets réels en Principauté.
            </p>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                nom: "Cursor",
                cat: "IDE avec IA intégrée",
                text: "Un éditeur de code qui comprend l'ensemble de votre base de code et propose des modifications multi-fichiers cohérentes. Un refactor qui aurait pris une semaine se fait en une heure. Essentiel pour tout développement sérieux en 2026.",
              },
              {
                nom: "Claude Code",
                cat: "Agent de développement autonome",
                text: "Capable d'exécuter des tâches entières de développement en autonomie : lire le code, modifier des fichiers, lancer des tests, corriger ses erreurs. Idéal pour les tâches répétitives de migration, de refactor et d'ajout de fonctionnalités standardisées.",
              },
              {
                nom: "Lovable",
                cat: "Générateur d'applications full-stack",
                text: "Produit une application web complète à partir d'une description textuelle : front-end, back-end, base de données, authentification. Parfait pour les prototypes rapides et les outils internes à faible complexité métier.",
              },
              {
                nom: "v0",
                cat: "Génération d'interfaces React",
                text: "Crée des composants d'interface utilisateur de qualité professionnelle en quelques secondes. Utilisé pour les landing pages, les tableaux de bord et les interfaces d'administration. Gain de temps considérable sur le front-end.",
              },
              {
                nom: "GitHub Copilot",
                cat: "Autocomplétion contextuelle",
                text: "Complète votre code en temps réel en comprenant le contexte. Moins puissant que Cursor sur les tâches multi-fichiers, mais parfaitement intégré aux environnements d'entreprise qui utilisent déjà GitHub.",
              },
              {
                nom: "Claude et GPT-5 via API",
                cat: "Intégration IA dans les apps",
                text: "Pour tout ce qui est fonctionnalité IA embarquée dans les applications livrées : classification de documents, extraction d'informations, génération de texte, analyse de données. Le cœur fonctionnel de la plupart de nos livraisons.",
              },
            ].map((o) => (
              <RevealOnScroll key={o.nom}>
                <div className="p-6 rounded-2xl border border-border bg-background">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-[15px] font-semibold">{o.nom}</h3>
                    <span className="text-accent text-[11px] font-semibold bg-accent/10 px-2 py-0.5 rounded">{o.cat}</span>
                  </div>
                  <p className="text-foreground/60 text-[13px] leading-relaxed">{o.text}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Comparatif chiffré - Dark bubble */}
      <section className="bg-dark text-white rounded-[2rem] mx-4 py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Comparatif</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-4">Développement classique vs IA-assisté : les chiffres</h2>
            <p className="text-white/50 text-[14px] leading-relaxed max-w-3xl mb-10">
              Voici trois projets réels réalisés pour des entreprises monégasques, avec les délais comparés entre un cycle de développement classique et notre approche IA-assistée. Les chiffres de la colonne classique viennent de devis reçus par nos clients avant de nous consulter.
            </p>
          </RevealOnScroll>
          <div className="space-y-4">
            {[
              {
                projet: "CRM interne pour société de gestion de patrimoine",
                classique: "6 mois / 90 000 €",
                ia: "3 semaines / 18 000 €",
                ecart: "8x plus rapide, 5x moins cher",
                text: "Fonctionnalités identiques : fiches clients enrichies, suivi des portefeuilles, alertes personnalisées, intégration bancaire, reporting automatisé.",
              },
              {
                projet: "Landing page professionnelle avec formulaire",
                classique: "2 semaines / 8 000 €",
                ia: "2 heures / 600 €",
                ecart: "40x plus rapide, 13x moins cher",
                text: "Design sur mesure, responsive, animations, intégration CRM, conformité RGPD. Qualité visuelle identique.",
              },
              {
                projet: "Outil de scoring KYC pour banque privée",
                classique: "9 mois / 180 000 €",
                ia: "8 semaines / 55 000 €",
                ecart: "5x plus rapide, 3x moins cher",
                text: "Intégration aux bases SICCFIN, scoring automatique, tableau de bord conformité, documentation auditable.",
              },
            ].map((c) => (
              <RevealOnScroll key={c.projet}>
                <div className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <h3 className="text-[14px] font-semibold text-accent mb-3">{c.projet}</h3>
                  <div className="grid sm:grid-cols-3 gap-4 mb-3">
                    <div>
                      <p className="text-white/40 text-[11px] uppercase tracking-wider mb-1">Classique</p>
                      <p className="text-white/80 text-[13px] font-semibold">{c.classique}</p>
                    </div>
                    <div>
                      <p className="text-accent text-[11px] uppercase tracking-wider mb-1">IA-assisté</p>
                      <p className="text-white text-[13px] font-semibold">{c.ia}</p>
                    </div>
                    <div>
                      <p className="text-white/40 text-[11px] uppercase tracking-wider mb-1">Écart</p>
                      <p className="text-accent text-[13px] font-semibold">{c.ecart}</p>
                    </div>
                  </div>
                  <p className="text-white/50 text-[12px] leading-relaxed">{c.text}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi c'est plus rapide */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Analyse</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Les cinq raisons techniques qui expliquent l&apos;accélération</h2>
            <p className="text-foreground/60 text-[14px] leading-relaxed mb-10 max-w-3xl">
              Comprendre pourquoi l&apos;IA accélère autant le développement permet de mieux cadrer ses projets. Voici les cinq mécanismes précis qui créent le facteur 10.
            </p>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "1. Code boilerplate automatisé", text: "Toutes les parties répétitives du code (modèles de données, routes API, formulaires CRUD, authentification) sont générées en secondes plutôt qu'en jours. Sur une application métier standard, c'est 40 pour cent du code qui disparaît du cycle manuel." },
              { title: "2. Tests générés automatiquement", text: "Les tests unitaires et d'intégration sont produits par l'IA en même temps que le code. Plus besoin de consacrer une phase dédiée aux tests. La qualité augmente mécaniquement et le nombre de bugs en production diminue." },
              { title: "3. Documentation automatique", text: "La documentation technique et utilisateur est générée et maintenue à jour en continu. Fini les semaines perdues à rédiger des spécifications ou à mettre à jour des manuels obsolètes." },
              { title: "4. Debug ultra-rapide", text: "Face à un bug, l'IA lit le code, identifie la cause probable et propose une correction en quelques secondes. Un bug qui aurait demandé une demi-journée d'investigation se résout en dix minutes." },
              { title: "5. Refactor sans douleur", text: "Les refactors à grande échelle, historiquement coûteux et risqués, deviennent accessibles. Une réorganisation architecturale qui aurait paralysé une équipe pendant un mois se fait en une journée avec validation humaine." },
              { title: "6. Moins d'allers-retours clients", text: "Les prototypes sont livrés si vite qu'on peut itérer visuellement avec le client au lieu de lui demander de valider des maquettes. Les malentendus sont détectés en heures plutôt qu'en semaines." },
            ].map((r) => (
              <RevealOnScroll key={r.title}>
                <div className="p-6 rounded-2xl border border-border bg-surface">
                  <h3 className="text-[14px] font-semibold mb-2">{r.title}</h3>
                  <p className="text-foreground/60 text-[13px] leading-relaxed">{r.text}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Limites et bonnes pratiques */}
      <section className="section-padding section-surface">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Limites</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Les pièges du développement IA-assisté et comment les éviter</h2>
            <p className="text-foreground/60 text-[14px] leading-relaxed mb-8">
              L&apos;accélération IA a un revers : entre des mains non expertes, elle produit du code instable, dupliqué, non maintenable. Voici les pièges les plus fréquents observés chez des clients qui avaient essayé seuls avant de nous consulter. Pour approfondir, voyez notre article sur les <Link href="/blog/ia-generative-monaco-opportunites-risques" className="text-accent hover:underline">opportunités et risques de l&apos;IA générative</Link>.
            </p>
          </RevealOnScroll>
          <div className="space-y-4">
            {[
              { title: "Le code-spaghetti généré", text: "Sans direction claire, l'IA empile des fonctionnalités sans cohérence d'architecture. Au bout de trois mois, le projet devient impossible à maintenir. Solution : un architecte logiciel définit les structures en amont, l'IA remplit les briques." },
              { title: "L'illusion de la compréhension", text: "Le code fonctionne, mais personne dans l'équipe ne le comprend vraiment. Risque majeur en cas de bug ou d'évolution. Solution : revue humaine systématique, documentation des décisions d'architecture, propriété intellectuelle transférée au client." },
              { title: "Les dépendances non maîtrisées", text: "L'IA ajoute des bibliothèques tierces sans vérifier leur licence, leur sécurité ou leur stabilité. Solution : audit systématique des dépendances ajoutées, alignement avec la politique de sécurité du client." },
              { title: "La sécurité ignorée", text: "Les questions de sécurité (authentification, chiffrement, validation des entrées) sont souvent traitées de manière générique par l'IA, insuffisantes en contexte bancaire ou juridique monégasque. Solution : revue sécurité dédiée avant mise en production." },
              { title: "La conformité RGPD oubliée", text: "L'IA n'a pas conscience des obligations RGPD spécifiques. Elle peut proposer des stockages ou des traitements non conformes. Solution : cadrage RGPD en amont, revue juridique avant production." },
            ].map((p) => (
              <RevealOnScroll key={p.title}>
                <div className="p-5 rounded-2xl border border-border bg-background">
                  <h3 className="text-[14px] font-semibold mb-2">{p.title}</h3>
                  <p className="text-foreground/60 text-[13px] leading-relaxed">{p.text}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Quand utiliser classique */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Arbitrage</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Quand préférer le développement traditionnel</h2>
            <div className="space-y-4 text-foreground/60 text-[14px] leading-relaxed mb-8">
              <p>
                L&apos;IA n&apos;est pas toujours la bonne réponse. Dans certains cas, un développement traditionnel reste préférable : systèmes critiques à très haute disponibilité, algorithmes propriétaires sensibles, code embarqué dans du matériel, contraintes de certification formelle. Pour la très grande majorité des besoins d&apos;une entreprise monégasque (outils métier, automatisations, sites web, applications internes, intégrations), l&apos;approche IA-assistée est supérieure sur tous les plans.
              </p>
              <p>
                La vraie question n&apos;est pas de choisir entre les deux mondes, mais de savoir les combiner. Chez Quanta, nous utilisons l&apos;IA à 80 pour cent pour la vitesse, et le développement traditionnel à 20 pour cent pour les parties critiques. Cette combinaison donne les meilleurs résultats sur tous nos projets, qu&apos;il s&apos;agisse d&apos;<Link href="/expertise/outils-internes" className="text-accent hover:underline">outils internes</Link> ou d&apos;<Link href="/expertise/automatisation-processus" className="text-accent hover:underline">automatisation de processus</Link>.
              </p>
              <p>
                Si vous envisagez un projet de développement à Monaco, la première étape est un audit de faisabilité. Notre <Link href="/expertise/audit-strategie-ia" className="text-accent hover:underline">audit stratégique IA</Link> arbitre pour chaque brique de votre projet quelle approche privilégier. Le résultat est un plan de développement optimisé en temps, en coût et en qualité.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Ressources et blog */}
      <section className="section-padding section-surface">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Ressources</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Approfondir le développement IA-assisté</h2>
            <p className="text-foreground/60 text-[14px] leading-relaxed mb-8">
              Nos articles de blog explorent les usages concrets du développement assisté par IA dans le contexte monégasque.
            </p>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: "Créer un site web avec l'IA en 2 semaines", href: "/blog/creer-site-web-ia-2-semaines" },
              { title: "No-code et low-code avec IA à Monaco", href: "/blog/no-code-low-code-ia-monaco" },
              { title: "ChatGPT vs Claude : quel LLM pour votre entreprise ?", href: "/blog/chatgpt-claude-entreprise-monaco-quel-llm-choisir" },
              { title: "Prompt engineering : guide pratique", href: "/blog/prompt-engineering-guide-pratique" },
              { title: "Délai d'un projet IA à Monaco : 8 à 13 semaines", href: "/delai-projet-ia-monaco" },
              { title: "Combien coûte un projet IA à Monaco ?", href: "/combien-coute-projet-ia-monaco" },
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
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-8">Développement IA versus développement classique : vos questions</h2>
          </RevealOnScroll>
          <FAQ items={faqItems} />
          <FaqSchema items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-background via-accent-light/30 to-accent/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">Votre projet de développement mérite l&apos;approche IA-assistée</h2>
            <p className="text-foreground/60 text-[14px] mb-8">
              Présentez-nous votre besoin, nous chiffrons l&apos;écart de temps et de budget entre les deux approches. Premier entretien offert, sans engagement.
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
