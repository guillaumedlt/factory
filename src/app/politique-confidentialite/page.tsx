import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Quanta Monaco",
  description:
    "Politique de confidentialité de Quanta : traitement des données personnelles, droits RGPD et conformité à la loi monégasque n°1.565 sur la protection des données.",
  alternates: { canonical: "https://quantamonaco.com/politique-confidentialite" },
  openGraph: {
    title: "Politique de confidentialité — Quanta Monaco",
    description:
      "Politique de confidentialité de Quanta : traitement des données personnelles, droits RGPD et conformité à la loi monégasque n°1.565 sur la protection des données.",
    url: "https://quantamonaco.com/politique-confidentialite",
    siteName: "Quanta",
    locale: "fr_FR",
    type: "website",
  },
};

export default function PolitiqueConfidentialite() {
  return (
    <PageLayout>
      <PageHeader tag="Légal" title="Politique de confidentialité" description="" />
      <section className="section-padding section-light">
        <div className="max-w-3xl mx-auto px-6 prose-quanta">
          <p><strong>Dernière mise à jour : mars 2026</strong></p>

          <h2>Responsable du traitement</h2>
          <p>
            <strong>Ceres Growth Marketing SAS</strong><br />
            128 rue de la Boétie, 75008 Paris, France<br />
            Marque commerciale : Quanta<br />
            Antenne : The Office, Principauté de Monaco<br />
            Responsable : Guillaume Delachet
          </p>

          <h2>Données collectées</h2>
          <p>Nous collectons uniquement les données que vous nous fournissez volontairement via le formulaire de contact :</p>
          <ul>
            <li>Nom</li>
            <li>Nom de société (facultatif)</li>
            <li>Adresse email</li>
            <li>Secteur d&apos;activité (facultatif)</li>
            <li>Message</li>
          </ul>

          <h2>Finalité du traitement</h2>
          <p>Les données collectées sont utilisées exclusivement pour :</p>
          <ul>
            <li>Répondre à votre demande de contact</li>
            <li>Vous proposer un entretien confidentiel</li>
            <li>Vous informer de nos services si vous en faites la demande</li>
          </ul>

          <h2>Base légale</h2>
          <p>
            Le traitement de vos données repose sur votre consentement (envoi volontaire du formulaire) et notre intérêt légitime à répondre aux demandes commerciales.
          </p>

          <h2>Destinataires des données</h2>
          <p>
            Vos données sont transmises uniquement à l&apos;équipe Quanta (Ceres Growth Marketing SAS). Elles ne sont jamais vendues, louées ou partagées avec des tiers à des fins commerciales.
          </p>
          <p>
            Le service d&apos;envoi d&apos;emails est assuré par <strong>Resend</strong> (resend.com), qui agit en qualité de sous-traitant technique. Les emails sont traités conformément à leur politique de confidentialité et hébergés dans l&apos;Union européenne.
          </p>

          <h2>Durée de conservation</h2>
          <p>
            Vos données sont conservées pendant une durée maximale de 3 ans à compter du dernier contact. Au-delà, elles sont supprimées.
          </p>

          <h2>Vos droits</h2>
          <p>Conformément au RGPD et à la loi monégasque n°1.565 du 3 décembre 2024 relative à la protection des données personnelles, vous disposez des droits suivants :</p>
          <ul>
            <li><strong>Droit d&apos;accès</strong> : obtenir la confirmation que vos données sont traitées et en recevoir une copie</li>
            <li><strong>Droit de rectification</strong> : corriger des données inexactes ou incomplètes</li>
            <li><strong>Droit de suppression</strong> : demander l&apos;effacement de vos données</li>
            <li><strong>Droit d&apos;opposition</strong> : vous opposer au traitement de vos données</li>
            <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous via le <a href="/contact" className="text-accent hover:underline">formulaire de contact</a>.
          </p>

          <h2>Cookies</h2>
          <p>
            Ce site n&apos;utilise aucun cookie de suivi, cookie publicitaire ou outil d&apos;analyse comportementale. Aucun cookie tiers n&apos;est déposé. Seuls des cookies strictement nécessaires au fonctionnement technique du site peuvent être utilisés par l&apos;hébergeur (Vercel).
          </p>

          <h2>Sécurité</h2>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction. Le site est servi en HTTPS avec chiffrement TLS.
          </p>

          <h2>Cadre réglementaire applicable</h2>
          <ul>
            <li>Règlement (UE) 2016/679 (RGPD)</li>
            <li>Loi monégasque n°1.565 du 3 décembre 2024 relative à la protection des données personnelles</li>
            <li>Loi française n°78-17 du 6 janvier 1978 modifiée (Informatique et Libertés)</li>
          </ul>

          <h2>Modifications</h2>
          <p>
            Cette politique de confidentialité peut être mise à jour à tout moment. La date de dernière mise à jour est indiquée en haut de cette page. Nous vous invitons à la consulter régulièrement.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
