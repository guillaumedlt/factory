import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import ExpertiseShowcase from "@/components/ExpertiseShowcase";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nos expertises IA",
  description:
    "Audit, automatisation, développement sur mesure, marketing, outils internes et formation. Six domaines pour transformer vos opérations à Monaco.",
  alternates: { canonical: "https://factory-ai.com/expertise" },
  openGraph: {
    title: "Nos expertises IA",
    description:
      "Audit, automatisation, développement sur mesure, marketing, outils internes et formation. Six domaines pour transformer vos opérations à Monaco.",
    url: "https://factory-ai.com/expertise",
    siteName: "Factory",
    locale: "fr_FR",
    type: "website",
  },
};

export default function ExpertisePage() {
  return (
    <PageLayout>
      <PageHeader
        tag="Expertises"
        title="Six leviers concrets pour transformer vos opérations."
        description="De l'audit stratégique à l'autonomie de vos équipes, nous couvrons l'ensemble du spectre de l'intégration IA en entreprise."
      />

      {/* Stats */}
      <section className="py-10 section-surface">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={6} /></div>
                <p className="text-foreground/40 text-[12px]">domaines d&apos;expertise</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={50} suffix="+" /></div>
                <p className="text-foreground/40 text-[12px]">projets livrés</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={12} suffix=" sem." /></div>
                <p className="text-foreground/40 text-[12px]">délai max</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Interactive showcase */}
      <ExpertiseShowcase />

      {/* Process overview */}
      <section className="bg-dark text-white rounded-[2rem] mx-4 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Notre approche</span>
                <h2 className="text-xl sm:text-2xl font-bold mt-3 mb-5">Chaque expertise suit le même protocole rigoureux.</h2>
                <p className="text-white/45 text-[14px] leading-relaxed mb-6">
                  Immersion, diagnostic, déploiement, transmission. Quatre phases calibrées pour minimiser les risques et maximiser la valeur livrée.
                </p>
                <Link href="/methode" className="group text-accent text-[13px] font-medium inline-flex items-center gap-1.5 hover:underline">
                  Découvrir notre méthode
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { n: "01", label: "Immersion", dur: "1-2 sem." },
                  { n: "02", label: "Diagnostic", dur: "1 sem." },
                  { n: "03", label: "Déploiement", dur: "4-8 sem." },
                  { n: "04", label: "Transmission", dur: "2 sem." },
                ].map((p) => (
                  <div key={p.n} className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                    <span className="text-accent text-[10px] font-bold">{p.n}</span>
                    <div className="text-[13px] font-semibold mt-1">{p.label}</div>
                    <div className="text-white/25 text-[11px] mt-0.5">{p.dur}</div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-background via-accent-light/30 to-accent/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">Par où commencer ?</h2>
            <p className="text-foreground/60 text-[14px] mb-8">Un premier entretien de 30 minutes suffit pour identifier vos leviers prioritaires.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="https://wa.me/33645636107" className="group bg-accent text-dark font-semibold px-6 py-3 rounded-xl text-[13px] hover:bg-accent-dark transition-all inline-flex items-center gap-2 shadow-lg shadow-accent/20">
                Solliciter un entretien
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <Link href="/tarifs" className="bg-surface text-foreground font-medium px-6 py-3 rounded-xl text-[13px] border border-border hover:border-foreground/20 transition-all">
                Voir les tarifs
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </PageLayout>
  );
}
