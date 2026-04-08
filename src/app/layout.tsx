import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://quantamonaco.com"),
  title: {
    default: "Quanta — Cabinet d'Expertise IA à Monaco",
    template: "%s | Quanta",
  },
  description:
    "Quanta est un cabinet d'expertise dédié à l'intégration opérationnelle de l'IA dans les entreprises monégasques. Stratégie, implémentation, formation et automatisation.",
  keywords: [
    "intelligence artificielle",
    "IA Monaco",
    "AI",
    "cabinet expertise IA",
    "agence IA Monaco",
    "transformation digitale Monaco",
    "automatisation",
    "machine learning",
    "consulting IA",
    "stratégie IA",
    "Quanta",
    "Principauté de Monaco",
  ],
  authors: [{ name: "Quanta" }],
  creator: "Quanta",
  publisher: "Quanta",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://quantamonaco.com",
    siteName: "Quanta",
    title: "Quanta — Cabinet d'Expertise IA à Monaco",
    description:
      "Cabinet d'expertise dédié à l'intégration opérationnelle de l'IA dans les entreprises monégasques.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Quanta — Cabinet d'Expertise IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quanta — Cabinet d'Expertise IA à Monaco",
    description:
      "Cabinet d'expertise dédié à l'intégration opérationnelle de l'IA dans les entreprises monégasques.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://quantamonaco.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f6f6f1" />
        <meta name="google-site-verification" content="rbOUKjbBxDi4yOF1fxt1jZ1e0GnpbRSRwSUmxD1t4GM" />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        {children}
        <JsonLd />
      </body>
    </html>
  );
}

function JsonLd() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": ["ProfessionalService", "LocalBusiness"],
      name: "Quanta",
      legalName: "Quanta",
      description:
        "Cabinet d'expertise dédié à l'intégration opérationnelle de l'IA dans les entreprises monégasques.",
      url: "https://quantamonaco.com",
      logo: "https://quantamonaco.com/favicon.svg",
      image: "https://quantamonaco.com/opengraph-image",
      founder: {
        "@type": "Person",
        name: "Guillaume Delachet",
        jobTitle: "Fondateur",
        url: "https://quantamonaco.com/cabinet",
      },
      foundingDate: "2026",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Principauté de Monaco",
        addressLocality: "Monaco",
        addressRegion: "Monaco",
        postalCode: "98000",
        addressCountry: "MC",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 43.7384,
        longitude: 7.4246,
      },
      telephone: "+33645636107",
      sameAs: ["https://www.linkedin.com/in/delachetguillaume/"],
      priceRange: "$$$$",
      currenciesAccepted: "EUR",
      paymentAccepted: "Virement bancaire",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      serviceType: [
        "Audit & stratégie IA",
        "Automatisation des processus",
        "Développement IA sur mesure",
        "Marketing & acquisition IA",
        "Outils internes sur mesure",
        "Formation IA",
      ],
      areaServed: {
        "@type": "Place",
        name: "Principauté de Monaco",
        geo: { "@type": "GeoCoordinates", latitude: 43.7384, longitude: 7.4246 },
      },
      knowsAbout: [
        "Intelligence Artificielle",
        "Automatisation",
        "Extraction documentaire",
        "Modèles de langage",
        "Droit monégasque",
        "Conformité LCB-FT",
        "Gestion de patrimoine",
        "KYC augmenté",
        "Machine Learning",
        "Prompt Engineering",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services Quanta",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Audit IA", description: "Cartographie des opportunités d'automatisation, priorisée par ROI", url: "https://quantamonaco.com/expertise/audit-strategie-ia" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automatisation", description: "Extraction documentaire, classification, conformité, reporting", url: "https://quantamonaco.com/expertise/automatisation-processus" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "IA sur mesure", description: "Assistants juridiques, veille réglementaire, KYC augmenté", url: "https://quantamonaco.com/expertise/developpement-ia-sur-mesure" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Marketing IA", description: "Sites web en 2 semaines, campagnes IA, acquisition digitale", url: "https://quantamonaco.com/expertise/marketing-acquisition" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Outils internes", description: "CRM, dashboards, portails clients livrés 10x plus vite", url: "https://quantamonaco.com/expertise/outils-internes" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Formation IA", description: "Programmes calibrés sur vos cas d'usage, objectif autonomie", url: "https://quantamonaco.com/expertise/formation-ia" } },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "12",
        bestRating: "5",
      },
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Directeur des opérations, SGP Monaco" },
          reviewRating: { "@type": "Rating", ratingValue: "5" },
          reviewBody: "Quanta a transformé notre façon de travailler. Ce qui prenait des jours se fait en minutes.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Associé, cabinet d'avocats Monaco" },
          reviewRating: { "@type": "Rating", ratingValue: "5" },
          reviewBody: "L'assistant de rédaction a changé notre productivité. Un premier jet en 5 minutes au lieu de 3 heures.",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Quanta",
      url: "https://quantamonaco.com",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://quantamonaco.com/blog?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
