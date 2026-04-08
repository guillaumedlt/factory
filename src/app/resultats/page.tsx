import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import CaseFilter from "@/components/CaseFilter";
import FAQ from "@/components/FAQ";
import FaqSchema from "@/components/FaqSchema";
import { caseStudies } from "@/lib/cases";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Résultats et cas clients",
  description:
    "Résultats documentés de nos missions IA à Monaco. Sociétés de gestion, cabinets juridiques, immobilier, hôtellerie : découvrez les gains concrets.",
  alternates: { canonical: "https://quantamonaco.com/resultats" },
  openGraph: {
    title: "Résultats et cas clients",
    description:
      "Résultats documentés de nos missions IA à Monaco. Sociétés de gestion, cabinets juridiques, immobilier, hôtellerie : découvrez les gains concrets.",
    url: "https://quantamonaco.com/resultats",
    siteName: "Quanta",
    locale: "fr_FR",
    type: "website",
  },
};

const faqItems = [
  { q: "Ces résultats sont-ils garantis ?", a: "Chaque contexte est différent. Les chiffres présentés sont issus de missions réelles, mais les gains dépendent de la complexité de vos processus et de la qualité des données. Notre audit initial permet d'estimer précisément le potentiel avant tout engagement." },
  { q: "En combien de temps observe-t-on les premiers résultats ?", a: "Les premiers gains mesurables apparaissent généralement à la fin du premier mois de déploiement. Le ROI complet est observable entre 2 et 4 mois après l'intervention." },
  { q: "Peut-on voir une démonstration avant de s'engager ?", a: "Oui. Lors du premier entretien, nous pouvons vous montrer des démonstrations anonymisées de solutions déployées dans votre secteur. C'est gratuit et sans engagement." },
];

export default function ResultatsPage() {
  return (
    <PageLayout>
      <FaqSchema items={faqItems} />

      {/* Hero */}
      <div className="pt-32 pb-10 sm:pt-36 sm:pb-16 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-center">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted font-semibold">Résultats</span>
              <h1 className="text-[2rem] sm:text-[2.5rem] font-bold mt-3 mb-5 tracking-tight leading-tight">
                Ce que nos interventions produisent.
              </h1>
              <p className="text-foreground/60 text-[15px] leading-relaxed max-w-xl">
                Des résultats documentés, issus de missions réelles auprès d&apos;entreprises de la Principauté de Monaco. Filtrez par secteur ou expertise.
              </p>
            </div>
            {/* Illustration */}
            <div className="hidden lg:block">
              <div className="animate-float">
                <div className="rounded-2xl bg-dark p-6 shadow-xl border border-white/[0.06]">
                  <div className="text-[9px] text-white/30 uppercase tracking-wider font-semibold mb-4">Impact moyen constaté</div>
                  <div className="space-y-3">
                    {[
                      { l: "Temps économisé", v: "-80%", w: 80 },
                      { l: "Erreurs éliminées", v: "-95%", w: 95 },
                      { l: "ROI première année", v: "+340%", w: 85 },
                      { l: "Délai de résultat", v: "1 mois", w: 25 },
                    ].map((m) => (
                      <div key={m.l}>
                        <div className="flex justify-between mb-1">
                          <span className="text-[10px] text-white/45">{m.l}</span>
                          <span className="text-[10px] text-accent font-semibold">{m.v}</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/[0.06]">
                          <div className="h-full rounded-full bg-accent/50" style={{ width: `${m.w}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <section className="py-10 section-surface">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { v: 10, s: "", l: "cas documentés" },
                { v: 80, s: "%", p: "-", l: "temps moyen économisé" },
                { v: 3, s: " mois", l: "payback moyen" },
                { v: 0, s: "", l: "échéance manquée" },
              ].map((m) => (
                <div key={m.l} className="p-5 rounded-2xl bg-surface border border-border text-center">
                  <div className="text-2xl font-bold"><AnimatedCounter prefix={m.p} value={m.v} suffix={m.s} /></div>
                  <p className="text-muted text-[11px] mt-1">{m.l}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Cases with filter */}
      <section className="section-padding section-light">
        <div className="max-w-6xl mx-auto px-6">
          <CaseFilter cases={caseStudies} />
        </div>
      </section>

      {/* Testimonial quote */}
      <section className="bg-dark text-white rounded-[2rem] mx-4 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-accent/30 mb-4">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-white/60 text-[15px] leading-relaxed mb-4">
                  Quanta a transformé notre façon de travailler. Ce qui prenait des jours se fait en minutes. Et surtout, nos équipes ont compris et adopté les outils.
                </p>
                <p className="text-white/40 text-[13px]">Directeur des opérations, société de gestion monégasque</p>
              </div>
              <div>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-accent/30 mb-4">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-white/60 text-[15px] leading-relaxed mb-4">
                  L&apos;assistant de rédaction a changé notre productivité. Un premier jet en 5 minutes au lieu de 3 heures. La qualité est au rendez-vous.
                </p>
                <p className="text-white/40 text-[13px]">Associé, cabinet d&apos;avocats à Monaco</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding section-tinted">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-6">Questions fréquentes</h2>
            <FAQ items={faqItems} />
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="flex flex-wrap gap-3 mt-12">
              <Link href="/expertise" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Nos expertises</Link>
              <Link href="/methode" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Notre méthode</Link>
              <Link href="/secteurs" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Secteurs</Link>
              <Link href="/tarifs" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Tarifs</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-background via-accent-light/30 to-accent/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">Votre entreprise sera-t-elle la prochaine ?</h2>
            <p className="text-foreground/60 text-[14px] mb-8">Échangeons 30 minutes sur votre contexte. Gratuit, confidentiel.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="https://wa.me/33645636107" className="group bg-accent text-dark font-semibold px-6 py-3 rounded-xl text-[13px] hover:bg-accent-dark transition-all inline-flex items-center gap-2 shadow-lg shadow-accent/20">
                Solliciter un entretien
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <Link href="/contact" className="bg-surface text-foreground font-medium px-6 py-3 rounded-xl text-[13px] border border-border hover:border-foreground/20 transition-all">
                Nous contacter
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </PageLayout>
  );
}
