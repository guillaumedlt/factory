import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { blogPosts } from "@/lib/blog";
import Link from "next/link";

const post = blogPosts.find((p) => p.slug === "rgpd-donnees-personnelles-ia-monaco")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  alternates: { canonical: `https://quantamonaco.com/blog/${post.slug}` },
  openGraph: { title: post.title, description: post.description, type: "article", publishedTime: post.date, authors: ["Guillaume"] },
};

export default function Article() {
  return (
    <ArticleLayout post={post}>
      <h2>Monaco n&apos;est pas soumis au RGPD, mais dispose de sa propre loi</h2>
      <p>
        C&apos;est un point que beaucoup d&apos;entreprises méconnaissent : la Principauté de Monaco n&apos;est pas membre de
        l&apos;Union européenne et n&apos;est donc pas directement soumise au Règlement Général sur la Protection des Données
        (RGPD). En revanche, Monaco dispose depuis 2011 de la loi n°1.565 relative à la protection des informations
        nominatives, un cadre juridique propre qui partage de nombreux principes avec le RGPD tout en présentant des
        spécificités monégasques importantes.
      </p>
      <p>
        Avec l&apos;essor de l&apos;intelligence artificielle dans les entreprises de la Principauté, cette loi prend une
        dimension nouvelle. Les modèles de langage, les systèmes de scoring automatisé, les outils de reconnaissance
        documentaire : tous ces dispositifs traitent des données personnelles et sont donc soumis aux obligations
        de la loi n°1.565. Comprendre ce cadre est indispensable pour tout dirigeant qui déploie ou envisage de
        déployer des solutions IA à Monaco.
      </p>

      <blockquote>
        <p>
          « Monaco a fait le choix d&apos;une souveraineté juridique en matière de données personnelles. La loi n°1.565
          n&apos;est pas une copie du RGPD. C&apos;est un texte autonome, adapté au contexte et aux valeurs de la Principauté. »
        </p>
      </blockquote>

      <h2>Les principes fondamentaux de la loi n°1.565</h2>
      <p>
        La loi monégasque repose sur des principes que tout professionnel de l&apos;IA doit intégrer dans la conception
        et le déploiement de ses solutions.
      </p>
      <h3>Finalité et proportionnalité</h3>
      <p>
        Toute collecte de données personnelles doit répondre à une finalité déterminée, explicite et légitime.
        Les données collectées doivent être adéquates, pertinentes et non excessives au regard de cette finalité.
        En pratique, cela signifie qu&apos;un système d&apos;IA ne peut pas ingérer l&apos;intégralité des données d&apos;un client
        « au cas où ». Chaque donnée traitée doit être justifiée par un usage précis.
      </p>
      <h3>Consentement éclairé</h3>
      <p>
        Le traitement de données personnelles nécessite le consentement de la personne concernée, sauf exceptions
        prévues par la loi (exécution d&apos;un contrat, obligation légale, intérêt légitime). Le consentement doit être
        libre, spécifique et informé. Pour un système IA qui analyse les documents d&apos;un client, il faut que ce
        dernier ait été clairement informé de l&apos;utilisation de l&apos;IA dans le traitement de ses données.
      </p>
      <h3>Durée de conservation limitée</h3>
      <p>
        Les données ne peuvent être conservées au-delà de la durée nécessaire à la finalité du traitement.
        Un modèle d&apos;IA qui stocke des historiques de conversation client, des analyses de portefeuille ou des
        profils de risque doit intégrer des mécanismes de purge automatique conformes à cette exigence.
      </p>
      <h3>Sécurité et confidentialité</h3>
      <p>
        Le responsable du traitement doit mettre en place des mesures techniques et organisationnelles appropriées
        pour protéger les données contre la destruction, la perte, l&apos;altération ou la diffusion non autorisée.
        Pour les systèmes IA, cela implique le chiffrement des données en transit et au repos, le contrôle
        d&apos;accès aux modèles, et la traçabilité des requêtes.
      </p>

      <h2>Le rôle de la CCIN : l&apos;autorité de contrôle monégasque</h2>
      <p>
        La Commission de Contrôle des Informations Nominatives (CCIN) est l&apos;équivalent monégasque de la CNIL
        française. C&apos;est l&apos;autorité administrative indépendante chargée de veiller au respect de la loi n°1.565.
        Toute entreprise qui traite des données personnelles à Monaco doit effectuer certaines démarches auprès
        de la CCIN.
      </p>
      <ul>
        <li>
          <strong>Déclaration préalable</strong> : avant de mettre en oeuvre un traitement de données personnelles,
          l&apos;entreprise doit adresser une déclaration à la CCIN décrivant la nature du traitement, les catégories
          de données collectées, les finalités poursuivies et les mesures de sécurité mises en place.
        </li>
        <li>
          <strong>Autorisation pour les traitements sensibles</strong> : certains traitements nécessitent une
          autorisation préalable de la CCIN, notamment ceux qui portent sur des données sensibles (santé, infractions,
          données biométriques) ou qui comportent un transfert de données vers un pays ne présentant pas un niveau
          de protection adéquat.
        </li>
        <li>
          <strong>Pouvoir de contrôle et de sanction</strong> : la CCIN peut diligenter des contrôles, demander
          des modifications et, en cas de manquement, prononcer des sanctions pouvant aller jusqu&apos;à l&apos;interdiction
          du traitement.
        </li>
      </ul>
      <p>
        Pour les entreprises qui déploient des solutions IA, la déclaration à la CCIN doit explicitement mentionner
        l&apos;utilisation de l&apos;intelligence artificielle, les modèles utilisés, et les conditions d&apos;hébergement des données.
        C&apos;est un point que notre article sur{" "}
        <Link href="/blog/extended-monaco-programme-digital-principaute" className="text-accent hover:underline">
          le programme Extended Monaco
        </Link>{" "}
        détaille dans le volet cloud souverain.
      </p>

      <blockquote>
        <p>
          « La CCIN n&apos;est pas un frein à l&apos;innovation. C&apos;est un partenaire de confiance qui garantit que la
          digitalisation de la Principauté se fait dans le respect des droits fondamentaux des personnes. »
        </p>
      </blockquote>

      <h2>Comment la loi s&apos;applique concrètement à l&apos;IA</h2>
      <p>
        L&apos;utilisation de l&apos;intelligence artificielle soulève des questions spécifiques que la loi n°1.565 permet
        d&apos;adresser, même si elle n&apos;a pas été rédigée initialement pour l&apos;IA.
      </p>
      <h3>Le droit à l&apos;explication</h3>
      <p>
        Toute personne a le droit de connaître la logique qui sous-tend un traitement automatisé qui la concerne.
        En pratique, si un système IA refuse un crédit, calcule un score de risque ou génère une recommandation
        d&apos;investissement, le client doit pouvoir obtenir une explication intelligible de la décision. Cela impose
        aux entreprises de documenter le fonctionnement de leurs modèles et de prévoir des mécanismes d&apos;explicabilité.
      </p>
      <h3>L&apos;interdiction des décisions exclusivement automatisées</h3>
      <p>
        La loi monégasque, comme le RGPD, encadre strictement les décisions produisant des effets juridiques ou
        significatifs fondées exclusivement sur un traitement automatisé. Un système IA peut assister la prise de
        décision, mais une intervention humaine doit rester possible. C&apos;est le principe du « human in the loop »,
        fondamental dans les secteurs réglementés monégasques.
      </p>
      <h3>Le transfert de données hors de Monaco</h3>
      <p>
        Lorsqu&apos;un modèle IA est hébergé hors de la Principauté, les données personnelles qui lui sont transmises
        font l&apos;objet d&apos;un transfert international. La loi n°1.565 conditionne ce transfert à un niveau de protection
        adéquat dans le pays de destination. Les pays de l&apos;UE sont généralement considérés comme offrant un niveau
        adéquat. Pour les États-Unis, la situation est plus nuancée et nécessite des garanties contractuelles
        supplémentaires. Le choix du{" "}
        <Link href="/blog/chatgpt-claude-entreprise-monaco-quel-llm-choisir" className="text-accent hover:underline">
          bon modèle de langage et de son hébergement
        </Link>{" "}
        est donc directement lié à la conformité.
      </p>

      <h2>Checklist de conformité pour les projets IA à Monaco</h2>
      <p>
        Voici les étapes concrètes que toute entreprise monégasque doit suivre avant de déployer une solution IA
        traitant des données personnelles.
      </p>
      <ul>
        <li>
          <strong>Cartographier les données traitées</strong> : identifier précisément quelles données personnelles
          sont collectées, traitées et stockées par le système IA. Documenter les flux de données.
        </li>
        <li>
          <strong>Définir et documenter la finalité</strong> : chaque traitement IA doit avoir une finalité claire
          et documentée. Éviter les collectes « préventives » ou les traitements sans objectif défini.
        </li>
        <li>
          <strong>Appliquer la minimisation des données</strong> : ne transmettre au modèle IA que les données
          strictement nécessaires. Anonymiser ou pseudonymiser les données quand c&apos;est possible.
        </li>
        <li>
          <strong>Recueillir le consentement ou identifier la base légale</strong> : s&apos;assurer que le traitement
          repose sur une base légale valide (consentement, contrat, obligation légale, intérêt légitime).
        </li>
        <li>
          <strong>Effectuer la déclaration CCIN</strong> : déclarer le traitement auprès de la CCIN en précisant
          l&apos;utilisation de l&apos;IA, les modèles employés, les conditions d&apos;hébergement.
        </li>
        <li>
          <strong>Vérifier les conditions de transfert international</strong> : si le modèle IA est hébergé hors
          de Monaco, s&apos;assurer que le pays de destination offre un niveau de protection adéquat ou mettre en place
          des clauses contractuelles types.
        </li>
        <li>
          <strong>Implémenter le droit à l&apos;explication</strong> : prévoir un mécanisme permettant aux personnes
          concernées de comprendre les décisions prises par l&apos;IA.
        </li>
        <li>
          <strong>Garantir l&apos;intervention humaine</strong> : pour les décisions à effet juridique ou significatif,
          maintenir un processus de revue humaine.
        </li>
        <li>
          <strong>Sécuriser le système</strong> : chiffrement, contrôle d&apos;accès, journalisation, tests de pénétration.
          Documenter les mesures dans un registre de sécurité.
        </li>
        <li>
          <strong>Planifier la purge des données</strong> : définir et automatiser les durées de conservation.
          Supprimer les données lorsqu&apos;elles ne sont plus nécessaires.
        </li>
      </ul>

      <h2>Les sanctions encourues</h2>
      <p>
        La loi n°1.565 prévoit des sanctions administratives et pénales en cas de manquement. La CCIN peut prononcer
        des avertissements, des mises en demeure, et en cas de non-conformité persistante, interdire le traitement.
        Le Code pénal monégasque prévoit également des sanctions pour les infractions aux dispositions sur les
        données personnelles, pouvant aller jusqu&apos;à des amendes significatives et des peines d&apos;emprisonnement
        dans les cas les plus graves.
      </p>
      <p>
        Au-delà des sanctions juridiques, le risque réputationnel est considérable à Monaco. Dans une place
        financière de cette taille, un incident de protection des données peut avoir des conséquences durables
        sur la confiance des clients et des partenaires. La conformité n&apos;est pas un coût, c&apos;est un investissement
        dans la pérennité de l&apos;activité.
      </p>
      <p>
        Les entreprises du secteur financier sont particulièrement exposées. Pour comprendre les enjeux de conformité
        dans ce domaine, consultez notre{" "}
        <Link href="/blog/automatiser-conformite-lcb-ft-monaco" className="text-accent hover:underline">
          guide sur l&apos;automatisation de la conformité LCB-FT à Monaco
        </Link>.
      </p>

      <blockquote>
        <p>
          « À Monaco, la protection des données n&apos;est pas une contrainte administrative. C&apos;est un avantage
          compétitif. Les clients fortunés choisissent la Principauté précisément parce qu&apos;ils ont confiance dans
          la rigueur de son cadre juridique. »
        </p>
      </blockquote>

      <h2>Ce qu&apos;il faut retenir</h2>
      <p>
        La loi n°1.565 offre un cadre solide et cohérent pour encadrer l&apos;utilisation de l&apos;IA à Monaco. Voici
        les points essentiels à retenir.
      </p>
      <ul>
        <li>
          Monaco n&apos;est pas soumis au RGPD mais dispose de sa propre loi (n°1.565) avec des principes similaires
          et des spécificités locales.
        </li>
        <li>
          La CCIN est l&apos;autorité de contrôle monégasque. Toute utilisation d&apos;IA traitant des données personnelles
          doit faire l&apos;objet d&apos;une déclaration préalable.
        </li>
        <li>
          Le droit à l&apos;explication impose de documenter et de rendre intelligibles les décisions prises par les
          systèmes IA.
        </li>
        <li>
          Les décisions exclusivement automatisées à effet juridique sont encadrées : l&apos;intervention humaine
          doit rester possible.
        </li>
        <li>
          Le transfert de données hors de Monaco est conditionné à un niveau de protection adéquat dans le pays
          de destination.
        </li>
        <li>
          La minimisation des données, le consentement éclairé et la sécurité sont les trois piliers de toute
          mise en conformité pour un projet IA.
        </li>
        <li>
          Les sanctions peuvent être administratives (interdiction du traitement) et pénales, sans compter le
          risque réputationnel dans une place financière de la taille de Monaco.
        </li>
      </ul>
      <p>
        Pour un accompagnement dans la mise en conformité de vos projets IA, découvrez nos{" "}
        <Link href="/services" className="text-accent hover:underline">
          services de conseil en intelligence artificielle
        </Link>.
      </p>
    </ArticleLayout>
  );
}
