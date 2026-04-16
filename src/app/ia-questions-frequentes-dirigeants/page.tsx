import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import FAQ from "@/components/FAQ";
import FaqSchema from "@/components/FaqSchema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IA en entreprise : 20 questions des dirigeants à Monaco",
  description:
    "Les 20 questions les plus fréquentes des dirigeants monégasques sur l'intelligence artificielle. Budget, ROI, sécurité, RGPD, emploi, outils : réponses claires d'un cabinet expert en IA à Monaco.",
  alternates: { canonical: "https://quantamonaco.com/ia-questions-frequentes-dirigeants" },
  openGraph: {
    title: "IA en entreprise : 20 questions des dirigeants à Monaco",
    description:
      "Les 20 questions les plus fréquentes des dirigeants monégasques sur l'intelligence artificielle. Budget, ROI, sécurité, RGPD, emploi, outils : réponses claires d'un cabinet expert en IA à Monaco.",
    url: "https://quantamonaco.com/ia-questions-frequentes-dirigeants",
    siteName: "Quanta",
    locale: "fr_FR",
    type: "website",
  },
};

const faqItems = [
  {
    q: "Mon entreprise monégasque est-elle prête pour l'intelligence artificielle ?",
    a: "La grande majorité des entreprises monégasques sont prêtes, bien plus qu'elles ne le pensent. Si vous avez des processus répétitifs, des documents à classer, des clients à suivre, vous avez des opportunités d'IA rentables. La vraie question n'est pas la maturité, c'est la priorité. Un audit d'une à deux semaines suffit à identifier les trois à cinq projets les plus rentables pour votre contexte.",
  },
  {
    q: "Combien coûte vraiment un projet IA à Monaco ?",
    a: "Pour un premier projet avec audit plus déploiement d'une automatisation, comptez entre 15 000 et 40 000 euros. Pour un projet complet avec plusieurs automatisations et développement sur mesure, le budget se situe entre 40 000 et 120 000 euros. Les licences récurrentes coûtent entre 20 et 200 euros par utilisateur et par mois selon les outils. Le retour sur investissement se mesure généralement en trois à six mois.",
  },
  {
    q: "Faut-il licencier des collaborateurs après avoir déployé l'IA ?",
    a: "Non, et c'est même l'inverse de ce que nous observons. Sur 50 missions livrées à Monaco, aucun licenciement n'a été nécessaire. L'IA supprime des tâches, pas des rôles. Les collaborateurs libèrent du temps pour des missions à plus forte valeur ajoutée. Dans certains cas, les entreprises recrutent davantage car leur capacité de développement augmente sans alourdir les fonctions support.",
  },
  {
    q: "Comment mesurer précisément le retour sur investissement d'un projet IA ?",
    a: "Le retour sur investissement se mesure sur quatre dimensions : le temps économisé par collaborateur et par semaine, la réduction des erreurs et des reprises, l'augmentation du chiffre d'affaires attribuable, et l'amélioration de la satisfaction client. Chaque projet sérieux doit définir ses indicateurs avant le démarrage. Nos missions incluent systématiquement un tableau de bord de pilotage des gains.",
  },
  {
    q: "Quelles sont les obligations RGPD spécifiques à l'IA en entreprise ?",
    a: "L'IA n'échappe pas au RGPD. Elle y ajoute des obligations spécifiques : analyse d'impact si les traitements sont à risque, information claire des personnes concernées, contrôle humain des décisions automatisées, sécurisation des données d'entraînement. Pour les entreprises monégasques, le RGPD s'applique dès qu'il y a un traitement concernant des résidents européens. La conformité se traite dès la phase de cadrage du projet.",
  },
];

const questions = [
  {
    q: "1. Mon entreprise monégasque est-elle prête pour l'intelligence artificielle ?",
    a: "La grande majorité des entreprises monégasques sont prêtes, bien plus qu'elles ne le pensent. Si vous avez des processus répétitifs, des documents à classer, des clients à suivre, des textes à rédiger : vous avez des opportunités d'IA rentables. La vraie question n'est pas la maturité technologique, mais la priorité stratégique. Un audit d'une à deux semaines suffit à identifier les trois à cinq projets les plus rentables pour votre contexte. La seule condition nécessaire est l'engagement de la direction.",
    lien: { href: "/expertise/audit-strategie-ia", anchor: "notre audit stratégique IA" },
  },
  {
    q: "2. Combien coûte vraiment un projet IA à Monaco ?",
    a: "Pour un premier projet avec audit plus déploiement d'une automatisation, comptez entre 15 000 et 40 000 euros. Pour un projet complet avec plusieurs automatisations et développement sur mesure, le budget se situe entre 40 000 et 120 000 euros. Les licences récurrentes des outils IA représentent entre 20 et 200 euros par utilisateur et par mois selon les technologies choisies. Tous nos devis sont chiffrés phase par phase, sans coût caché. Le retour sur investissement se mesure généralement en trois à six mois pour les projets bien cadrés.",
    lien: { href: "/combien-coute-projet-ia-monaco", anchor: "notre page détaillée sur le coût d'un projet IA à Monaco" },
  },
  {
    q: "3. Faut-il licencier des collaborateurs après avoir déployé l'IA ?",
    a: "Non, et c'est même l'inverse de ce que nous observons. Sur plus de 50 missions livrées à Monaco, aucun licenciement n'a été nécessaire à la suite d'un déploiement IA. L'IA supprime des tâches répétitives, pas des rôles humains. Les collaborateurs libèrent du temps pour des missions à plus forte valeur ajoutée : conseil client, stratégie, créativité, développement commercial. Dans certains cas, les entreprises recrutent davantage car leur capacité de production augmente sans alourdir les fonctions support. Les dirigeants monégasques responsables voient l'IA comme un levier d'attractivité pour les talents, pas comme un outil de restructuration.",
    lien: null,
  },
  {
    q: "4. Comment mesurer précisément le retour sur investissement d'un projet IA ?",
    a: "Le retour sur investissement se mesure sur quatre dimensions complémentaires. Premièrement, le temps économisé par collaborateur et par semaine, valorisé au coût complet. Deuxièmement, la réduction des erreurs et des reprises, particulièrement coûteuse dans les métiers réglementés monégasques. Troisièmement, l'augmentation du chiffre d'affaires directement attribuable aux nouveaux outils. Quatrièmement, l'amélioration de la satisfaction client mesurée par NPS ou par taux de rétention. Chaque projet sérieux doit définir ces indicateurs avant le démarrage. Nos missions incluent systématiquement un tableau de bord de pilotage des gains.",
    lien: { href: "/blog/roi-intelligence-artificielle-mesurer-gains", anchor: "notre guide ROI de l'intelligence artificielle" },
  },
  {
    q: "5. Quelles sont les obligations RGPD spécifiques à l'IA en entreprise ?",
    a: "L'IA n'échappe pas au RGPD, elle y ajoute des obligations spécifiques. Premièrement, une analyse d'impact obligatoire si les traitements sont à risque élevé. Deuxièmement, l'information claire des personnes concernées sur l'utilisation de l'IA pour les traiter. Troisièmement, le droit à l'intervention humaine pour toute décision automatisée significative. Quatrièmement, la sécurisation des données d'entraînement et des modèles. Pour les entreprises monégasques, le RGPD s'applique dès qu'il y a un traitement concernant des résidents européens. La conformité se traite dès la phase de cadrage du projet.",
    lien: { href: "/blog/rgpd-donnees-personnelles-ia-monaco", anchor: "notre article sur le RGPD et l'IA à Monaco" },
  },
  {
    q: "6. Et la sécurité des données confiées à des IA étrangères ?",
    a: "La question est légitime et doit être traitée avec rigueur. Trois options existent. Premièrement, utiliser des solutions cloud avec engagement contractuel de non-utilisation des données pour l'entraînement (disponible chez OpenAI, Anthropic, Microsoft). Deuxièmement, héberger les modèles sur des infrastructures européennes (via Mistral, Azure OpenAI en zone UE). Troisièmement, pour les données les plus sensibles, déployer des modèles en local ou sur cloud privé. Le choix dépend du niveau de confidentialité requis par votre métier. Pour une banque privée, une approche hybride est souvent recommandée.",
    lien: { href: "/blog/securite-donnees-ia-entreprise-monaco", anchor: "notre guide sécurité des données IA en entreprise" },
  },
  {
    q: "7. Quels outils IA choisir pour mon entreprise ?",
    a: "Il n'existe pas un outil unique, mais une combinaison adaptée à vos usages. Pour la rédaction et l'analyse, ChatGPT et Claude restent les références. Pour l'automatisation sans code, Zapier et Make dominent le marché. Pour les outils métier, des solutions spécialisées existent par secteur (banque, juridique, médical). Un cabinet comme Quanta ne vend pas d'outil : nous recommandons la combinaison la plus adaptée à votre contexte, avec transparence sur les coûts et les limites. Cette indépendance est essentielle pour éviter les recommandations biaisées.",
    lien: { href: "/blog/chatgpt-claude-entreprise-monaco-quel-llm-choisir", anchor: "notre comparatif ChatGPT vs Claude pour l'entreprise" },
  },
  {
    q: "8. Faut-il une équipe technique en interne pour utiliser l'IA ?",
    a: "Non, pas pour commencer. Les outils modernes sont conçus pour des utilisateurs non techniques. Un cabinet externe se charge de la mise en place initiale, du développement sur mesure et de la formation. Vos équipes utilisent les outils livrés comme n'importe quel logiciel métier. Si votre entreprise grandit et que l'IA devient un axe stratégique majeur, l'intégration progressive d'un profil hybride métier et tech peut devenir pertinente. Mais pour 90 pour cent des entreprises monégasques, le modèle du cabinet externe reste le plus efficace.",
    lien: null,
  },
  {
    q: "9. Quels sont les principaux risques d'un projet IA ?",
    a: "Les cinq risques majeurs sont les suivants. Premièrement, le risque de conformité : déployer sans respecter le RGPD ou les réglementations sectorielles. Deuxièmement, le risque de qualité : des réponses IA erronées non contrôlées en production. Troisièmement, le risque de dépendance : outils propriétaires sans stratégie de sortie. Quatrièmement, le risque d'adoption : outils déployés mais non utilisés faute de formation. Cinquièmement, le risque financier : budgets qui dérivent par manque de cadrage. Un cabinet sérieux traite ces cinq risques dès la phase d'audit initial.",
    lien: null,
  },
  {
    q: "10. Comment choisir entre une grande agence parisienne et un cabinet monégasque ?",
    a: "Les grandes agences parisiennes proposent des ressources importantes mais des coûts élevés, des cycles longs et un éloignement géographique. Les cabinets monégasques offrent proximité, connaissance du tissu économique local, compréhension des réglementations SICCFIN et CCAF, et agilité. Pour les entreprises de la Principauté, l'expertise locale est souvent décisive : une étude menée par une agence non-monégasque passe à côté de subtilités réglementaires et culturelles spécifiques. Le choix dépend surtout de la complexité technique et du budget.",
    lien: { href: "/comparatif-agence-ia-monaco", anchor: "notre comparatif des agences IA à Monaco" },
  },
  {
    q: "11. L'IA est-elle compatible avec les exigences SICCFIN et CCAF ?",
    a: "Oui, l'IA est parfaitement compatible avec les exigences monégasques si elle est déployée avec rigueur. Pour les établissements bancaires, les obligations de lutte contre le blanchiment (LCB-FT) imposent traçabilité, auditabilité et contrôle humain. Les modèles d'IA doivent être documentés, leurs décisions explicables, leurs biais surveillés. Plusieurs banques privées monégasques utilisent déjà l'IA pour le scoring KYC, la détection d'anomalies et la conformité documentaire, en conformité stricte avec la réglementation locale.",
    lien: { href: "/blog/automatiser-conformite-lcb-ft-monaco", anchor: "notre article sur l'automatisation de la conformité LCB-FT" },
  },
  {
    q: "12. Combien de temps avant de voir les premiers résultats concrets ?",
    a: "Les premiers résultats tangibles apparaissent dès la sixième semaine pour un projet standard. Il peut s'agir d'une première automatisation en production, d'un outil interne opérationnel, d'un gain de temps mesurable sur un processus spécifique. La méthode itérative que nous appliquons garantit une valeur livrée toutes les deux semaines. Aucun effet tunnel : chaque livraison est testée, validée et ajustée. La mise en production complète d'un projet d'automatisation se situe généralement entre la huitième et la treizième semaine.",
    lien: { href: "/delai-projet-ia-monaco", anchor: "notre page sur le délai d'un projet IA à Monaco" },
  },
  {
    q: "13. Faut-il anticiper une résistance des équipes ?",
    a: "Dans la majorité des cas, non, à condition que la démarche soit bien introduite. Les collaborateurs accueillent positivement les outils qui suppriment des tâches ingrates : facturation manuelle, relances, classement documentaire, comptes rendus de réunion. Ils résistent en revanche aux outils perçus comme un contrôle ou comme une menace pour leur emploi. La clé est la communication : expliquer le pourquoi, impliquer les équipes dans le choix des outils, former sérieusement. Une bonne conduite du changement représente 20 pour cent du budget mais 80 pour cent du succès.",
    lien: { href: "/expertise/formation-ia", anchor: "nos programmes de formation IA" },
  },
  {
    q: "14. Faut-il privilégier les LLM américains ou européens ?",
    a: "Les deux ont leur place. Les LLM américains (GPT-5, Claude) dominent sur la qualité générale et la polyvalence. Les modèles européens (Mistral) gagnent en maturité et offrent des garanties de souveraineté intéressantes pour certains cas d'usage sensibles. Pour la plupart des entreprises monégasques, une combinaison des deux est optimale : modèles américains pour les tâches complexes avec données anonymisées, modèles européens pour les traitements avec données identifiantes. Le choix ne doit pas être idéologique mais fondé sur les exigences fonctionnelles et réglementaires.",
    lien: null,
  },
  {
    q: "15. Que faire si l'IA fait une erreur coûteuse ?",
    a: "Trois protections sont à mettre en place systématiquement. Premièrement, le contrôle humain pour toutes les décisions à fort impact (financier, juridique, clientèle). Deuxièmement, des garde-fous techniques : validation des sorties, seuils d'alerte, détection d'anomalies. Troisièmement, une clause de responsabilité claire dans les contrats avec les prestataires et les éditeurs d'outils. En cas d'erreur, le processus doit permettre d'identifier rapidement la cause, de stopper le flux concerné et de corriger. Ces garde-fous font partie intégrante de nos livrables.",
    lien: null,
  },
  {
    q: "16. Comment intégrer l'IA sans perturber mes systèmes existants ?",
    a: "Notre approche repose sur l'intégration progressive et non intrusive. Dans la majorité des cas, l'IA s'ajoute par-dessus les outils existants via des API ou des connecteurs sans modifier les systèmes cœur. Les utilisateurs continuent à travailler dans leurs environnements habituels (Outlook, Salesforce, SAP) avec une surcouche IA transparente. Pour les cas plus complexes, nous segmentons les déploiements par processus ou par service pour limiter les impacts. Aucun arrêt d'activité n'est nécessaire sur nos missions types.",
    lien: { href: "/expertise/automatisation-processus", anchor: "notre expertise en automatisation de processus" },
  },
  {
    q: "17. L'IA peut-elle vraiment comprendre mon métier spécifique ?",
    a: "Les modèles IA modernes ont une très forte capacité de compréhension contextuelle, à condition d'être correctement paramétrés. Le secret réside dans la phase de spécialisation : fournir à l'IA vos procédures internes, vos documents de référence, votre jargon métier. Cette personnalisation transforme un outil générique en assistant expert de votre activité. Pour les secteurs très spécifiques (droit monégasque, conformité bancaire, gestion de patrimoine), nous combinons les LLM avec des bases de connaissance internes pour atteindre une précision élevée.",
    lien: { href: "/secteurs/cabinets-avocats", anchor: "nos projets IA pour cabinets d'avocats" },
  },
  {
    q: "18. Faut-il communiquer auprès de ses clients sur l'usage de l'IA ?",
    a: "Oui, avec mesure. La transparence sur l'usage de l'IA renforce la confiance, à condition qu'elle soit bien dosée. Expliquer que vous utilisez l'IA pour améliorer la rapidité et la précision de vos services est positif. Détailler techniquement chaque modèle utilisé serait contre-productif. La règle simple : informer sur le bénéfice client, rassurer sur le contrôle humain, documenter la conformité RGPD. Les clients apprécient les entreprises qui modernisent leurs outils tout en gardant l'humain au cœur de la relation.",
    lien: null,
  },
  {
    q: "19. Comment former efficacement mes équipes à l'IA ?",
    a: "Une bonne formation IA se structure sur trois niveaux. Pour la direction : une demi-journée stratégique pour comprendre les enjeux et arbitrer. Pour les référents internes : deux à trois jours de formation approfondie pour maîtriser les outils et accompagner leurs collègues. Pour les utilisateurs finaux : des ateliers courts et pratiques centrés sur leurs cas d'usage quotidiens. La clé est l'apprentissage par la pratique, avec des exemples tirés de leurs dossiers réels plutôt que de manuels théoriques.",
    lien: { href: "/blog/former-equipes-ia-generative", anchor: "notre article sur la formation des équipes à l'IA" },
  },
  {
    q: "20. Par où commencer concrètement si je veux me lancer ?",
    a: "La première étape, la plus rentable, est un audit stratégique IA de deux à trois semaines. Cet audit cartographie vos processus, identifie les opportunités les plus rentables et produit une roadmap chiffrée. À partir de ce livrable, vous arbitrez sereinement les premiers projets à lancer. Cette approche évite les investissements aveugles et garantit un retour sur investissement mesurable dès les premiers déploiements. Un premier entretien d'une demi-heure suffit à cadrer la démarche.",
    lien: { href: "/contact", anchor: "prendre contact avec le cabinet Quanta" },
  },
];

export default function IAQuestionsDirigeantsPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="section-padding pt-32 sm:pt-40 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Questions IA dirigeants</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4 mb-6">
              Les 20 questions que se posent les dirigeants monégasques sur l&apos;IA
            </h1>
            <p className="text-foreground/60 text-[15px] leading-relaxed max-w-3xl mx-auto mb-8">
              Depuis trois ans, les mêmes questions reviennent systématiquement dans nos entretiens avec les dirigeants monégasques. Maturité, budget, sécurité, emploi, conformité, retour sur investissement : cette page rassemble les 20 questions les plus fréquentes et leurs réponses précises. Document de référence pour tout dirigeant qui envisage un projet d&apos;intelligence artificielle dans son entreprise à Monaco.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/33645636107"
                className="group bg-accent text-dark font-semibold px-6 py-3 rounded-xl text-[13px] hover:bg-accent-dark transition-all inline-flex items-center gap-2 shadow-lg shadow-accent/20"
              >
                Poser votre propre question
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
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={20} /></div>
                <p className="text-foreground/40 text-[12px]">questions documentées</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={50} suffix="+" /></div>
                <p className="text-foreground/40 text-[12px]">dirigeants interrogés</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={8} /></div>
                <p className="text-foreground/40 text-[12px]">secteurs couverts à Monaco</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={3} suffix=" ans" /></div>
                <p className="text-foreground/40 text-[12px]">d&apos;entretiens et de missions</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Avant de lire</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Pourquoi cette compilation de questions dirigeants</h2>
            <div className="space-y-4 text-foreground/60 text-[14px] leading-relaxed">
              <p>
                Chaque semaine, nous recevons des dirigeants d&apos;entreprises monégasques qui réfléchissent à l&apos;intelligence artificielle sans savoir par où commencer. Les mêmes interrogations reviennent : combien ça coûte, combien de temps, quel impact sur les équipes, quelle conformité ? Plutôt que de répondre individuellement à chaque demande, nous avons structuré cette compilation des 20 questions les plus fréquentes, avec des réponses précises et honnêtes.
              </p>
              <p>
                Cette page complète notre <Link href="/faq" className="text-accent hover:underline">FAQ générale sur l&apos;IA à Monaco</Link> en se concentrant sur les préoccupations stratégiques de la direction. Les questions sont regroupées par thème : maturité, budget et ROI, équipes et emploi, sécurité et conformité, choix techniques, mise en œuvre. Vous pouvez la parcourir en entier ou naviguer directement vers les sujets qui vous intéressent.
              </p>
              <p>
                Si vous avez une question qui ne figure pas ici, le plus simple reste de nous écrire directement. Nous répondons en 24 heures ouvrées. Toutes les questions reçues alimentent cette page : plus vous nous écrivez, plus elle devient utile à l&apos;ensemble des dirigeants monégasques.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 20 questions en H2 */}
      <section className="section-padding section-surface">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Les 20 questions</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-8">Réponses détaillées aux 20 questions des dirigeants monégasques</h2>
          </RevealOnScroll>
          <div className="space-y-6">
            {questions.map((q) => (
              <RevealOnScroll key={q.q}>
                <article className="p-6 rounded-2xl border border-border bg-background">
                  <h2 className="text-[16px] sm:text-[17px] font-semibold mb-3 leading-snug">{q.q}</h2>
                  <p className="text-foreground/60 text-[14px] leading-relaxed mb-3">{q.a}</p>
                  {q.lien && (
                    <p className="text-foreground/50 text-[13px] leading-relaxed">
                      Pour aller plus loin : <Link href={q.lien.href} className="text-accent hover:underline">{q.lien.anchor}</Link>.
                    </p>
                  )}
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Synthèse - Dark bubble */}
      <section className="bg-dark text-white rounded-[2rem] mx-4 py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Synthèse</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Les cinq convictions qui ressortent de ces 20 questions</h2>
            <p className="text-white/50 text-[14px] leading-relaxed max-w-3xl mb-10">
              Au terme des 20 questions, cinq convictions fortes émergent. Elles résument la philosophie de Quanta pour accompagner les dirigeants monégasques dans leurs projets IA.
            </p>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "L'IA est un outil, pas un objectif", text: "Une entreprise ne doit pas faire de l'IA pour faire de l'IA. Chaque projet doit répondre à un enjeu business précis, mesurable et prioritaire. Tout le reste est de la démonstration technologique." },
              { title: "Le succès est humain avant d'être technique", text: "La meilleure technologie ne sert à rien si les équipes ne l'adoptent pas. 80 pour cent du succès vient de la conduite du changement, 20 pour cent de la technique." },
              { title: "L'audit précède le déploiement", text: "Pas de projet IA sérieux sans audit préalable. Cartographier, prioriser, chiffrer : c'est la seule manière d'éviter les gaspillages et de garantir le retour sur investissement." },
              { title: "La conformité se traite en amont", text: "RGPD, SICCFIN, CCAF : ces contraintes doivent être intégrées dès le cadrage. Corriger après coup coûte cinq à dix fois plus cher que de les anticiper." },
              { title: "L'autonomie du client est le vrai livrable", text: "Un cabinet qui rend ses clients dépendants n'est pas un bon cabinet. Notre objectif final est toujours votre autonomie : documentation, formation, transmission complète." },
              { title: "La proximité monégasque fait la différence", text: "Entre une grande agence parisienne à distance et un cabinet implanté en Principauté, la réactivité et la connaissance du tissu local changent tout sur la durée." },
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

      {/* Ressources complémentaires */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Ressources</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Continuer à explorer l&apos;IA à Monaco</h2>
            <p className="text-foreground/60 text-[14px] leading-relaxed mb-8">
              Au-delà de cette page, Quanta propose de nombreuses ressources pour approfondir les questions stratégiques de l&apos;intelligence artificielle en entreprise. Voici une sélection de pages complémentaires et d&apos;articles récents du <Link href="/blog" className="text-accent hover:underline">blog IA à Monaco</Link>.
            </p>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: "Pourquoi choisir Quanta comme cabinet IA", href: "/pourquoi-choisir-quanta" },
              { title: "Notre méthode d'intégration IA", href: "/methode" },
              { title: "Résultats et études de cas", href: "/resultats" },
              { title: "Tarifs des missions IA à Monaco", href: "/tarifs" },
              { title: "Agence IA à Monaco : comment choisir", href: "/comment-choisir-agence-ia-monaco" },
              { title: "Consultant IA à Monaco : le rôle", href: "/consultant-ia-monaco" },
              { title: "IA à Monaco : état des lieux 2026", href: "/blog/ia-monaco-etat-des-lieux-2026" },
              { title: "Monaco, hub IA en Europe : pourquoi", href: "/blog/monaco-hub-ia-europe-pourquoi" },
            ].map((a) => (
              <RevealOnScroll key={a.title}>
                <Link href={a.href} className="block p-4 rounded-xl border border-border hover:border-accent/30 transition-all group bg-surface">
                  <h3 className="text-[13px] font-semibold group-hover:text-accent transition-colors">{a.title}</h3>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - top 5 pour schema */}
      <section className="section-padding section-surface">
        <div className="max-w-3xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Top 5 des questions</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-8">Les cinq questions qui reviennent le plus souvent</h2>
          </RevealOnScroll>
          <FAQ items={faqItems} />
          <FaqSchema items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-background via-accent-light/30 to-accent/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">Votre question n&apos;est pas dans cette liste ?</h2>
            <p className="text-foreground/60 text-[14px] mb-8">
              Écrivez-nous directement. Nous répondons en 24 heures ouvrées et chaque nouvelle question vient enrichir cette ressource pour les dirigeants monégasques.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="https://wa.me/33645636107" className="group bg-accent text-dark font-semibold px-6 py-3 rounded-xl text-[13px] hover:bg-accent-dark transition-all inline-flex items-center gap-2 shadow-lg shadow-accent/20">
                Poser votre question sur WhatsApp
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
