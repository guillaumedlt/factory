import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import FAQ from "@/components/FAQ";
import FaqSchema from "@/components/FaqSchema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Secteurs d'intervention IA à Monaco",
  description:
    "Gestion de patrimoine, banque privée, cabinets d'avocats, immobilier de luxe, hôtellerie, commerce, santé, services professionnels. L'IA pour Monaco.",
  alternates: { canonical: "https://quantamonaco.com/secteurs" },
  openGraph: {
    title: "Secteurs d'intervention IA à Monaco",
    description:
      "Gestion de patrimoine, banque privée, cabinets d'avocats, immobilier de luxe, hôtellerie, commerce, santé, services professionnels. L'IA pour Monaco.",
    url: "https://quantamonaco.com/secteurs",
    siteName: "Quanta",
    locale: "fr_FR",
    type: "website",
  },
};

const sectors = [
  { slug: "gestion-patrimoine", title: "Gestion de patrimoine & Family offices", desc: "Collecte documentaire, conformité LCB-FT, échéanciers, reporting SICCFIN.", icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>), metric: "-62%", metricLabel: "temps conformité" },
  { slug: "banque-privee", title: "Banque privée & institutions financières", desc: "KYC/KYB, scoring risques, anti-blanchiment, rapports réglementaires.", icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" /></svg>), metric: "-70%", metricLabel: "temps KYC" },
  { slug: "cabinets-avocats", title: "Cabinets d'avocats & études juridiques", desc: "Rédaction d'actes, recherche multi-juridictions, transcription d'audiences.", icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>), metric: "-80%", metricLabel: "temps rédaction" },
  { slug: "immobilier-luxe", title: "Immobilier de luxe & promotion", desc: "Gestion documentaire, brochures, veille urbanistique, matching IA.", icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>), metric: "+35%", metricLabel: "conversion" },
  { slug: "hotellerie-restauration", title: "Hôtellerie, restauration & événementiel", desc: "Yield management, avis clients, contenus multilingues, reporting.", icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>), metric: "+12%", metricLabel: "RevPAR" },
  { slug: "commerce-luxe", title: "Commerce de luxe & retail", desc: "CRM augmenté, stocks prédictifs, campagnes email IA, analytics.", icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>), metric: "x3", metricLabel: "panier moyen" },
  { slug: "sante-cliniques", title: "Santé, bien-être & cliniques privées", desc: "Dossiers patients, synthèse médicale, accréditations, communication.", icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>), metric: "-87%", metricLabel: "temps admin" },
  { slug: "services-professionnels", title: "Services professionnels & corporate", desc: "Facturation, OCR, classement prédictif, suivi administratif.", icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>), metric: "-80%", metricLabel: "saisie manuelle" },
];

const faqItems = [
  { q: "Travaillez-vous avec tous les secteurs à Monaco ?", a: "Nous intervenons principalement dans les 8 secteurs listés, qui représentent l'essentiel du tissu économique de la Principauté. Si votre activité n'est pas listée, contactez-nous pour évaluer la pertinence d'un accompagnement." },
  { q: "Comment adaptez-vous votre méthode à chaque secteur ?", a: "Le protocole en quatre phases reste le même, mais l'immersion terrain et les solutions déployées sont spécifiques à chaque métier. Un cabinet d'avocats n'a pas les mêmes contraintes qu'un hôtel de luxe." },
  { q: "Connaissez-vous les réglementations monégasques ?", a: "C'est notre spécialité. SICCFIN, CCAF, loi n°1.362, CCSS, ordonnances souveraines : nous intégrons le cadre réglementaire de la Principauté dans chaque recommandation." },
];

export default function SecteursPage() {
  return (
    <PageLayout>
      <FaqSchema items={faqItems} />

      {/* Hero with illustration */}
      <div className="pt-32 pb-10 sm:pt-36 sm:pb-16 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-center">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted font-semibold">Secteurs</span>
              <h1 className="text-[2rem] sm:text-[2.5rem] font-bold mt-3 mb-5 tracking-tight leading-tight">
                Une expertise sectorielle ancrée dans la Principauté.
              </h1>
              <p className="text-foreground/60 text-[15px] leading-relaxed max-w-xl">
                Chaque secteur a ses exigences, ses réglementations et ses processus propres. Nous les connaissons.
              </p>
            </div>
            {/* Map illustration */}
            <div className="hidden lg:block">
              <div className="animate-float">
                <div className="rounded-2xl bg-dark p-6 shadow-xl border border-white/[0.06]">
                  <div className="text-[9px] text-white/30 uppercase tracking-wider font-semibold mb-4">Principauté de Monaco</div>
                  <div className="grid grid-cols-2 gap-2">
                    {sectors.slice(0, 8).map((s) => (
                      <div key={s.slug} className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-white/[0.04]">
                        <div className="w-5 h-5 rounded-md bg-accent/15 flex items-center justify-center text-accent shrink-0 scale-75">{s.icon}</div>
                        <span className="text-[8px] text-white/50 truncate">{s.title.split("&")[0].trim()}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-white/[0.06] flex justify-between text-[9px]">
                    <span className="text-white/25">8 secteurs</span>
                    <span className="text-accent font-semibold">100% Monaco</span>
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
                { v: 8, s: "", l: "secteurs couverts" },
                { v: 50, s: "+", l: "projets livrés" },
                { v: 100, s: "%", l: "ancrage monégasque" },
                { v: 98, s: "%", l: "clients satisfaits" },
              ].map((m) => (
                <div key={m.l} className="p-5 rounded-2xl bg-surface border border-border text-center">
                  <div className="text-2xl font-bold"><AnimatedCounter value={m.v} suffix={m.s} /></div>
                  <p className="text-muted text-[11px] mt-1">{m.l}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Sector cards with icons and metrics */}
      <section className="section-padding section-light">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-2">Nos secteurs d&apos;intervention</h2>
            <p className="text-foreground/50 text-[14px] mb-8">Cliquez sur un secteur pour découvrir nos cas d&apos;usage concrets.</p>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {sectors.map((s, i) => (
              <RevealOnScroll key={s.slug} delay={i * 60}>
                <Link
                  href={`/secteurs/${s.slug}`}
                  className="group p-6 rounded-2xl bg-surface border border-border hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-foreground/50 group-hover:bg-accent group-hover:text-dark transition-all duration-300 shrink-0">
                      {s.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-[14px] font-bold text-accent">{s.metric}</div>
                      <div className="text-[9px] text-muted">{s.metricLabel}</div>
                    </div>
                  </div>
                  <h2 className="text-[13px] font-semibold mb-2 group-hover:text-accent transition-colors leading-snug">{s.title}</h2>
                  <p className="text-foreground/45 text-[11px] leading-relaxed flex-1">{s.desc}</p>
                  <div className="mt-4 pt-3 border-t border-border flex items-center gap-1 text-[11px] text-muted group-hover:text-accent transition-colors">
                    Découvrir
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison: generic vs Quanta */}
      <section className="section-padding section-surface">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-6">Pourquoi une approche sectorielle ?</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="p-7 rounded-2xl bg-surface border border-border">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2 h-2 rounded-full bg-foreground/20" />
                  <span className="text-[11px] uppercase tracking-wider text-muted font-semibold">Cabinet IA généraliste</span>
                </div>
                <ul className="space-y-3">
                  {[
                    "Solutions identiques quel que soit le secteur",
                    "Aucune connaissance des réglementations locales",
                    "Processus standard qui ignorent vos spécificités",
                    "Données traitées hors de la Principauté",
                    "Support déconnecté de votre réalité métier",
                  ].map((t) => (
                    <li key={t} className="text-[12px] text-foreground/35 flex items-start gap-2">
                      <span className="text-foreground/20 mt-0.5 shrink-0">✕</span> {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-7 rounded-2xl bg-dark text-white border border-white/[0.06]">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-[11px] uppercase tracking-wider text-white/40 font-semibold">Quanta à Monaco</span>
                </div>
                <ul className="space-y-3">
                  {[
                    "Solutions calibrées pour votre secteur et votre juridiction",
                    "Maîtrise de SICCFIN, CCAF, loi n°1.362, CCSS",
                    "Immersion terrain dans vos processus réels",
                    "Données conformes RGPD, hébergées en Europe",
                    "Interlocuteur unique qui parle votre langue métier",
                  ].map((t) => (
                    <li key={t} className="text-[12px] text-white/55 flex items-start gap-2">
                      <span className="text-accent mt-0.5 shrink-0">✓</span> {t}
                    </li>
                  ))}
                </ul>
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
              <Link href="/resultats" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Résultats</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-background via-accent-light/30 to-accent/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">Votre secteur n&apos;est pas listé ?</h2>
            <p className="text-foreground/60 text-[14px] mb-8">Contactez-nous pour évaluer ensemble les opportunités IA dans votre activité.</p>
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
