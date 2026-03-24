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
  metadataBase: new URL("https://factorymonaco.com"),
  title: {
    default: "Factory — Cabinet d'Expertise IA à Monaco",
    template: "%s | Factory",
  },
  description:
    "Factory est un cabinet d'expertise dédié à l'intégration opérationnelle de l'IA dans les entreprises monégasques. Stratégie, implémentation, formation et automatisation.",
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
    "Factory",
    "Principauté de Monaco",
  ],
  authors: [{ name: "Factory" }],
  creator: "Factory",
  publisher: "Factory",
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
    url: "https://factorymonaco.com",
    siteName: "Factory",
    title: "Factory — Cabinet d'Expertise IA à Monaco",
    description:
      "Cabinet d'expertise dédié à l'intégration opérationnelle de l'IA dans les entreprises monégasques.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Factory — Cabinet d'Expertise IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Factory — Cabinet d'Expertise IA à Monaco",
    description:
      "Cabinet d'expertise dédié à l'intégration opérationnelle de l'IA dans les entreprises monégasques.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://factorymonaco.com",
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
      "@type": "ProfessionalService",
      name: "Factory",
      description:
        "Cabinet d'expertise dédié à l'intégration opérationnelle de l'IA dans les entreprises monégasques.",
      url: "https://factorymonaco.com",
      logo: "https://factorymonaco.com/favicon.svg",
      founder: {
        "@type": "Person",
        name: "Guillaume Delachet",
        jobTitle: "Fondateur",
      },
      foundingDate: "2026",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Monaco",
        addressRegion: "Principauté de Monaco",
        addressCountry: "MC",
      },
      telephone: "+33645636107",
      email: "guillaume@ceres.agency",
      priceRange: "$$$$",
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
        name: "Services Factory",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Audit IA", url: "https://factorymonaco.com/expertise/audit-strategie-ia" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automatisation", url: "https://factorymonaco.com/expertise/automatisation-processus" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "IA sur mesure", url: "https://factorymonaco.com/expertise/developpement-ia-sur-mesure" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Marketing IA", url: "https://factorymonaco.com/expertise/marketing-acquisition" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Outils internes", url: "https://factorymonaco.com/expertise/outils-internes" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Formation IA", url: "https://factorymonaco.com/expertise/formation-ia" } },
        ],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Factory",
      url: "https://factorymonaco.com",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://factorymonaco.com/blog?q={search_term_string}",
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
