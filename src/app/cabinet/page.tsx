import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Le cabinet Factory",
  description:
    "Factory est un cabinet d'expertise en intelligence artificielle fondé à Monaco. Maîtrise technique, connaissance du tissu économique monégasque, engagement de transmission.",
  alternates: { canonical: "https://factory-ai.com/cabinet" },
  openGraph: {
    title: "Le cabinet Factory",
    description:
      "Factory est un cabinet d'expertise en intelligence artificielle fondé à Monaco. Maîtrise technique, connaissance du tissu économique monégasque, engagement de transmission.",
    url: "https://factory-ai.com/cabinet",
    siteName: "Factory",
    locale: "fr_FR",
    type: "website",
  },
};

export default function CabinetPage() {
  return (
    <PageLayout>
      <PageHeader
        tag="Le cabinet"
        title="Factory."
        description="Cabinet d'expertise en intelligence artificielle fondé à Monaco par Guillaume."
      />

      <section className="section-padding section-light">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <RevealOnScroll>
              <div>
                <h2 className="text-xl font-bold mb-5">Notre conviction</h2>
                <div className="space-y-4 text-foreground/60 text-[14px] leading-relaxed">
                  <p>L&apos;intelligence artificielle n&apos;a de valeur que si elle s&apos;inscrit dans la réalité opérationnelle d&apos;une organisation. Pas dans une démonstration technologique, mais dans la transformation concrète de processus qui consomment du temps sans créer de valeur.</p>
                  <p>Nous conjuguons une maîtrise technique des technologies d&apos;IA de dernière génération avec une connaissance intime de l&apos;environnement économique et réglementaire de la Principauté.</p>
                  <p className="text-foreground/80 font-medium">Chaque engagement commence par l&apos;écoute. Chaque solution est conçue pour durer au-delà de notre intervention.</p>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={150}>
              <div>
                <h2 className="text-xl font-bold mb-5">Notre approche</h2>
                <div className="space-y-4 text-foreground/60 text-[14px] leading-relaxed">
                  <p>Nous ne vendons pas de la technologie. Nous résolvons des problèmes opérationnels. Chaque mission commence par une immersion dans votre réalité métier, pas dans un catalogue de solutions.</p>
                  <p>Notre portefeuille technologique couvre l&apos;ensemble du spectre IA : modèles de langage (Claude, GPT-4, Mistral), automatisation (n8n, Make), développement (Cursor, Lovable), CRM et données (HubSpot, Clay). Nous choisissons la stack adaptée à chaque projet.</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-6">Nos principes</h2>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { title: "Rigueur", text: "Chaque recommandation étayée par des données. Chaque solution testée avant déploiement. Chaque résultat mesuré." },
              { title: "Discrétion", text: "Conforme RGPD et CCAF. Vos données ne quittent jamais le périmètre convenu. Accord de confidentialité systématique." },
              { title: "Transmission", text: "Nous ne créons pas de dépendance. Nous transmettons les compétences pour que vous soyez autonomes." },
            ].map((p, i) => (
              <RevealOnScroll key={p.title} delay={i * 100}>
                <div className="p-7 rounded-2xl bg-surface border border-border h-full">
                  <h3 className="text-[14px] font-semibold mb-2">{p.title}</h3>
                  <p className="text-foreground/50 text-[13px] leading-relaxed">{p.text}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-tinted bg-gradient-to-b from-background via-accent-light/30 to-accent/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">Échangeons sur vos enjeux.</h2>
            <a href="https://wa.me/33645636107" className="group bg-accent text-dark font-semibold px-6 py-3 rounded-xl text-[13px] hover:bg-accent-dark transition-all inline-flex items-center gap-2 shadow-lg shadow-accent/20">
              Solliciter un entretien
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </RevealOnScroll>
        </div>
      </section>
    </PageLayout>
  );
}
