import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { caseStudies } from "@/lib/cases";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://factory-ai.com";
  const now = new Date("2026-03-23");

  const expertises = [
    "audit-strategie-ia", "automatisation-processus", "developpement-ia-sur-mesure",
    "marketing-acquisition", "outils-internes", "formation-ia",
  ];

  const secteurs = [
    "gestion-patrimoine", "banque-privee", "cabinets-avocats", "immobilier-luxe",
    "hotellerie-restauration", "commerce-luxe", "sante-cliniques", "services-professionnels",
  ];

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/expertise`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/methode`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/resultats`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/secteurs`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/cabinet`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tarifs`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/glossaire`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/white-paper`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    ...expertises.map((slug) => ({
      url: `${base}/expertise/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...secteurs.map((slug) => ({
      url: `${base}/secteurs/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...caseStudies.map((c) => ({
      url: `${base}/resultats/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...blogPosts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
