import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Mentions légales — Quanta Cabinet d'expertise IA Monaco",
  description:
    "Mentions légales de Quanta : informations sur l'éditeur du site, l'hébergeur, la propriété intellectuelle et les coordonnées de contact à Monaco.",
  alternates: { canonical: "https://quantamonaco.com/mentions-legales" },
  openGraph: {
    title: "Mentions légales — Quanta Cabinet d'expertise IA Monaco",
    description:
      "Mentions légales de Quanta : informations sur l'éditeur du site, l'hébergeur, la propriété intellectuelle et les coordonnées de contact à Monaco.",
    url: "https://quantamonaco.com/mentions-legales",
    siteName: "Quanta",
    locale: "fr_FR",
    type: "website",
  },
};

export default function MentionsLegales() {
  return (
    <PageLayout>
      <PageHeader tag="Légal" title="Mentions légales" description="" />
      <section className="section-padding section-light">
        <div className="max-w-3xl mx-auto px-6 prose-quanta">
          <h2>Éditeur du site</h2>
          <p>
            Le site quantamonaco.com est édité par <strong>Ceres Growth Marketing SAS</strong>, société par actions simplifiée immatriculée en France.
          </p>
          <ul>
            <li>Dénomination sociale : Ceres Growth Marketing SAS</li>
            <li>Siège social : 128 rue de la Boétie, 75008 Paris, France</li>
            <li>Marque commerciale : Quanta</li>
            <li>Antenne : The Office, Principauté de Monaco</li>
            <li>Directeur de la publication : Guillaume Delachet</li>
          </ul>

          <h2>Hébergeur</h2>
          <p>
            Le site est hébergé par <strong>Vercel Inc.</strong>
          </p>
          <ul>
            <li>Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
            <li>Site web : vercel.com</li>
          </ul>

          <h2>Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus présents sur ce site (textes, images, illustrations, graphismes, logo, structure) sont la propriété exclusive de Ceres Growth Marketing SAS ou de ses partenaires. Toute reproduction, représentation, modification, publication, adaptation totale ou partielle de ces éléments, quel que soit le moyen ou le procédé utilisé, est interdite sauf autorisation écrite préalable.
          </p>

          <h2>Données personnelles</h2>
          <p>
            Les informations collectées via le formulaire de contact sont destinées exclusivement à Ceres Growth Marketing SAS pour le traitement de votre demande. Elles ne sont transmises à aucun tiers. Conformément à la loi n°1.565 du 3 décembre 2024 relative à la protection des données personnelles de la Principauté de Monaco et au Règlement Général sur la Protection des Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données.
          </p>
          <p>
            Pour exercer ces droits, contactez-nous via le <a href="/contact" className="text-accent hover:underline">formulaire de contact</a>.
          </p>

          <h2>Cookies</h2>
          <p>
            Ce site n&apos;utilise pas de cookies de suivi ou de cookies publicitaires. Seuls des cookies techniques strictement nécessaires au fonctionnement du site peuvent être utilisés.
          </p>

          <h2>Limitation de responsabilité</h2>
          <p>
            Les informations contenues sur ce site sont présentées à titre indicatif. Ceres Growth Marketing SAS ne saurait être tenue responsable de tout dommage direct ou indirect résultant de l&apos;utilisation de ce site ou des informations qu&apos;il contient.
          </p>

          <h2>Droit applicable</h2>
          <p>
            Le présent site et ses mentions légales sont régis par le droit français. En cas de litige, les tribunaux de Paris seront seuls compétents.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
