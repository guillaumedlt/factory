export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  featured?: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "ia-monaco-etat-des-lieux-2026",
    title: "Intelligence artificielle à Monaco : état des lieux en 2026",
    description: "Où en sont les entreprises monégasques dans leur adoption de l'IA ? Analyse sectorielle, freins identifiés et opportunités concrètes pour la Principauté.",
    date: "2026-03-20",
    readTime: "8 min",
    category: "Analyse",
    featured: true,
  },
  {
    slug: "automatiser-conformite-lcb-ft-monaco",
    title: "Automatiser la conformité LCB-FT à Monaco : guide complet",
    description: "Comment l'IA transforme les processus de lutte contre le blanchiment dans les sociétés de gestion et banques privées de la Principauté.",
    date: "2026-03-15",
    readTime: "10 min",
    category: "Guide",
    featured: true,
  },
  {
    slug: "ia-gestion-patrimoine-monaco",
    title: "Comment l'IA transforme la gestion de patrimoine à Monaco",
    description: "Collecte documentaire, échéanciers, reporting SICCFIN : les cas d'usage concrets de l'IA pour les SGP et family offices monégasques.",
    date: "2026-03-10",
    readTime: "9 min",
    category: "Secteur",
  },
  {
    slug: "ia-cabinets-avocats-droit-monegasque",
    title: "IA et droit monégasque : ce que les cabinets doivent savoir",
    description: "Rédaction d'actes, recherche juridique, transcription d'audiences. L'IA au service des professionnels du droit à Monaco.",
    date: "2026-03-05",
    readTime: "8 min",
    category: "Secteur",
  },
  {
    slug: "creer-site-web-ia-2-semaines",
    title: "Créer un site web professionnel en 2 semaines avec l'IA",
    description: "Les outils, la méthode et les résultats. Comment l'IA permet de livrer des sites performants en une fraction du temps traditionnel.",
    date: "2026-02-28",
    readTime: "7 min",
    category: "Guide",
  },
  {
    slug: "roi-intelligence-artificielle-mesurer-gains",
    title: "ROI de l'IA : comment mesurer les gains réels",
    description: "Méthodologie concrète pour calculer le retour sur investissement de vos projets d'intelligence artificielle. Avec exemples chiffrés.",
    date: "2026-02-20",
    readTime: "9 min",
    category: "Méthodologie",
  },
  {
    slug: "kyc-augmente-ia-banque-privee",
    title: "KYC augmenté par IA : transformer la banque privée",
    description: "Due diligence accélérée, scoring de risque automatisé, détection d'anomalies. L'IA au service de la conformité bancaire à Monaco.",
    date: "2026-02-15",
    readTime: "8 min",
    category: "Secteur",
  },
  {
    slug: "former-equipes-ia-generative",
    title: "Former ses équipes à l'IA générative : par où commencer",
    description: "Programme en 4 niveaux pour embarquer vos collaborateurs. Du prompt engineering aux cas d'usage métier avancés.",
    date: "2026-02-10",
    readTime: "7 min",
    category: "Guide",
  },
  {
    slug: "5-processus-rentables-automatiser",
    title: "Les 5 processus les plus rentables à automatiser par IA",
    description: "Gestion documentaire, conformité, facturation, reporting, correspondance. Analyse ROI de chaque levier d'automatisation.",
    date: "2026-02-05",
    readTime: "8 min",
    category: "Analyse",
  },
  {
    slug: "immobilier-luxe-ia-monaco",
    title: "L'immobilier de luxe à Monaco à l'ère de l'IA",
    description: "Matching acheteurs-biens, brochures automatisées, veille urbanistique. Comment l'IA redéfinit la promotion immobilière dans la Principauté.",
    date: "2026-01-30",
    readTime: "7 min",
    category: "Secteur",
  },
];
