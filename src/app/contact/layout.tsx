import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Factory pour un premier entretien confidentiel sur l'intégration de l'IA dans votre entreprise à Monaco. Réponse sous 24h via WhatsApp.",
  alternates: { canonical: "https://factory-ai.com/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
