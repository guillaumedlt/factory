import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Quanta pour prendre rendez-vous avec notre cabinet de conseil IA à Monaco. Premier entretien confidentiel et sans engagement, réponse sous 24h.",
  alternates: { canonical: "https://quantamonaco.com/contact" },
  openGraph: {
    title: "Contact",
    description:
      "Contactez Quanta pour prendre rendez-vous avec notre cabinet de conseil IA à Monaco. Premier entretien confidentiel et sans engagement, réponse sous 24h.",
    url: "https://quantamonaco.com/contact",
    siteName: "Quanta",
    locale: "fr_FR",
    type: "website",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
