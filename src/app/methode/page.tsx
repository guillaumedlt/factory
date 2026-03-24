import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import FAQ from "@/components/FAQ";
import FaqSchema from "@/components/FaqSchema";
import StepTimeline from "@/components/StepTimeline";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Notre méthode d'intervention",
  description:
    "Immersion, diagnostic, déploiement, transmission. Quatre phases pour intégrer l'IA dans votre organisation à Monaco avec rigueur et résultats mesurables.",
  alternates: { canonical: "https://factory-ai.com/methode" },
  openGraph: {
    title: "Notre méthode d'intervention",
    description:
      "Immersion, diagnostic, déploiement, transmission. Quatre phases pour intégrer l'IA dans votre organisation à Monaco avec rigueur et résultats mesurables.",
    url: "https://factory-ai.com/methode",
    siteName: "Factory",
    locale: "fr_FR",
    type: "website",
  },
};

const phases = [
  {
    n: "01", title: "Immersion", dur: "1–2 semaines",
    text: "Entretiens individuels avec chaque partie prenante. Observation des processus en conditions réelles. Cartographie exhaustive des flux documentaires, des circuits de validation et des points de friction.",
    details: ["Entretiens individuels structurés", "Observation terrain des processus", "Cartographie des flux documentaires", "Identification des points de friction", "Analyse des outils existants"],
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>),
  },
  {
    n: "02", title: "Diagnostic", dur: "1 semaine",
    text: "Analyse structurée de chaque processus selon cinq critères : volume, fréquence, complexité, potentiel d'automatisation et contraintes réglementaires. Restitution sous forme de matrice d'opportunités.",
    details: ["Scoring sur 5 critères objectifs", "Matrice d'opportunités priorisée", "Estimation ROI par levier", "Cartographie des dépendances", "Présentation comité de direction"],
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>),
  },
  {
    n: "03", title: "Déploiement", dur: "4–8 semaines",
    text: "Mise en œuvre des solutions retenues, en commençant par les leviers à fort impact et faible complexité. Cycle court : prototype, test en conditions réelles, ajustement, mise en production.",
    details: ["Priorisation impact/complexité", "Prototypage rapide", "Tests en conditions réelles", "Itérations courtes", "Mise en production progressive"],
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>),
  },
  {
    n: "04", title: "Transmission", dur: "2 semaines",
    text: "Formation approfondie des équipes. Documentation complète des solutions et des processus transformés. Mise en place d'indicateurs de suivi. Objectif : votre autonomie totale.",
    details: ["Formation personnalisée", "Documentation technique complète", "Guides de référence internes", "Indicateurs de suivi", "Sessions de support post-déploiement"],
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>),
  },
];

const timelineSteps = [
  { title: "Cadrage", text: "Définition du périmètre et des objectifs avec la direction." },
  { title: "Entretiens", text: "Rencontres individuelles avec chaque collaborateur concerné." },
  { title: "Analyse", text: "Scoring de chaque processus sur 5 critères objectifs." },
  { title: "Priorisation", text: "Matrice d'opportunités classée par ROI et faisabilité." },
  { title: "Prototype", text: "Première solution déployée en conditions réelles." },
  { title: "Production", text: "Ajustements et mise en production progressive." },
];

const faqItems = [
  { q: "La méthode est-elle adaptable à notre taille ?", a: "Oui. Le protocole est le même, mais nous calibrons la profondeur de chaque phase en fonction de la taille de votre organisation. Une PME de 10 personnes passera 1 semaine en immersion, une structure de 50+ collaborateurs en nécessitera 2." },
  { q: "Peut-on commencer par une seule phase ?", a: "Absolument. Beaucoup de clients démarrent par un audit (phases I et II) avant de s'engager sur le déploiement. C'est d'ailleurs ce que nous recommandons pour valider le potentiel avant d'investir." },
  { q: "Comment gérez-vous la confidentialité pendant l'immersion ?", a: "Nous signons un accord de confidentialité avant toute intervention. Les données collectées sont hébergées sur des serveurs conformes RGPD et ne sont jamais partagées avec des tiers." },
  { q: "Que se passe-t-il après la phase de transmission ?", a: "Nous restons disponibles pour du support ponctuel. La plupart de nos clients sont autonomes après la transmission, mais nous proposons des sessions de suivi trimestrielles pour les organisations qui le souhaitent." },
  { q: "Combien de temps avant de voir les premiers résultats ?", a: "Les premiers résultats mesurables arrivent généralement à la fin du premier mois de déploiement (phase III). Le ROI complet de la mission est observable entre 2 et 4 mois après la fin de l'intervention." },
];

export default function MethodePage() {
  return (
    <PageLayout>
      <FaqSchema items={faqItems} />

      {/* Hero with illustration */}
      <div className="pt-32 pb-10 sm:pt-36 sm:pb-16 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_380px] gap-10 items-center">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted font-semibold">Méthode</span>
              <h1 className="text-[2rem] sm:text-[2.5rem] font-bold mt-3 mb-5 tracking-tight leading-tight">
                Un protocole éprouvé, quatre phases.
              </h1>
              <p className="text-foreground/60 text-[15px] leading-relaxed max-w-xl">
                Rigueur d&apos;exécution, résultats mesurables, calendrier maîtrisé. Chaque mission suit le même cadre méthodologique, adapté à votre contexte.
              </p>
            </div>

            {/* Visual: animated timeline */}
            <div className="hidden lg:block">
              <div className="animate-float">
                <div className="rounded-2xl bg-dark p-6 shadow-xl border border-white/[0.06]">
                  <div className="text-[9px] text-white/30 uppercase tracking-wider font-semibold mb-4">Timeline projet type</div>
                  <div className="space-y-3">
                    {phases.map((p, i) => (
                      <div key={p.n} className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-md bg-accent/15 flex items-center justify-center text-accent text-[9px] font-bold shrink-0">{p.n}</span>
                        <div className="flex-1">
                          <div className="text-[11px] text-white/60 font-medium">{p.title}</div>
                          <div className="h-1.5 rounded-full bg-white/[0.06] mt-1 overflow-hidden">
                            <div className="h-full rounded-full bg-accent/40" style={{ width: `${[20, 10, 50, 20][i]}%` }} />
                          </div>
                        </div>
                        <span className="text-[9px] text-white/25 shrink-0">{p.dur}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex justify-between text-[9px]">
                    <span className="text-white/25">Semaine 1</span>
                    <span className="text-accent font-semibold">Semaine 12</span>
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
                { v: 4, s: "", l: "phases structurées" },
                { v: 12, s: " sem.", l: "durée maximale" },
                { v: 100, s: "%", l: "missions livrées dans les délais" },
                { v: 1, s: " mois", l: "avant premiers résultats" },
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

      {/* Detailed phases */}
      <section className="section-padding section-light">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-2">Les quatre phases en détail</h2>
            <p className="text-foreground/50 text-[14px] mb-10">Chaque phase a un objectif clair, un calendrier défini et des livrables mesurables.</p>
          </RevealOnScroll>

          <div className="space-y-4">
            {phases.map((p, i) => (
              <RevealOnScroll key={p.n} delay={i * 80}>
                <div className="grid lg:grid-cols-[1fr_1fr] gap-6 p-7 rounded-2xl bg-surface border border-border">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-foreground/60">
                        {p.icon}
                      </div>
                      <div>
                        <span className="text-accent text-[10px] font-bold uppercase tracking-wider">Phase {p.n}</span>
                        <h3 className="text-lg font-bold">{p.title}</h3>
                      </div>
                      <span className="ml-auto text-[11px] text-muted bg-surface-dark px-2.5 py-1 rounded-md">{p.dur}</span>
                    </div>
                    <p className="text-foreground/50 text-[13px] leading-relaxed">{p.text}</p>
                  </div>
                  <div className="bg-background rounded-xl p-5">
                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-muted font-semibold mb-3">Livrables</h4>
                    <ul className="space-y-2">
                      {p.details.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-[12px] text-foreground/55 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-[5px] shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Visual timeline */}
      <section className="section-padding section-tinted">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-2">Le déroulement concret</h2>
            <p className="text-foreground/50 text-[14px] mb-8">Six étapes clés, de la première réunion à la mise en autonomie.</p>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <StepTimeline steps={timelineSteps} />
          </RevealOnScroll>
        </div>
      </section>

      {/* Comparison */}
      <section className="section-padding section-surface">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-6">Ce qui nous distingue</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="p-7 rounded-2xl bg-surface border border-border">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2 h-2 rounded-full bg-foreground/20" />
                  <span className="text-[11px] uppercase tracking-wider text-muted font-semibold">Approche classique</span>
                </div>
                <ul className="space-y-3">
                  {[
                    "Audit générique basé sur un questionnaire standard",
                    "Recommandations déconnectées de la réalité terrain",
                    "Rapport de 200 pages qui finit dans un tiroir",
                    "Pas de suivi après la livraison du document",
                    "Solutions technologiques imposées sans contexte",
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
                  <span className="text-[11px] uppercase tracking-wider text-white/40 font-semibold">Méthode Factory</span>
                </div>
                <ul className="space-y-3">
                  {[
                    "Immersion terrain avec chaque collaborateur concerné",
                    "Recommandations testées en conditions réelles",
                    "Feuille de route exécutable trimestre par trimestre",
                    "Transmission complète et support post-déploiement",
                    "Stack technologique choisie pour votre contexte",
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

      {/* Dark bubble: Garanties */}
      <section className="bg-dark text-white rounded-[2rem] mx-4 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-6">Nos engagements</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { title: "Calendrier tenu", desc: "Chaque phase a un délai fixe. Nous n'avons jamais dépassé un calendrier annoncé." },
                { title: "Résultats mesurables", desc: "KPIs définis en amont, mesurés en continu. Pas de promesses vagues, des chiffres." },
                { title: "Confidentialité totale", desc: "NDA signé, données hébergées RGPD, aucun partage avec des tiers." },
                { title: "Autonomie garantie", desc: "Nous ne créons pas de dépendance. Documentation, formation, transfert complet." },
              ].map((g) => (
                <div key={g.title} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                  <h3 className="text-[13px] font-semibold mb-2">{g.title}</h3>
                  <p className="text-white/40 text-[12px] leading-relaxed">{g.desc}</p>
                </div>
              ))}
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
              <Link href="/resultats" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Résultats clients</Link>
              <Link href="/tarifs" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Tarifs</Link>
              <Link href="/contact" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Contact</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-background via-accent-light/30 to-accent/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">Prêt à lancer votre diagnostic ?</h2>
            <p className="text-foreground/60 text-[14px] mb-8">Premier entretien confidentiel de 30 minutes, gratuit et sans engagement.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="https://wa.me/33645636107" className="group bg-accent text-dark font-semibold px-6 py-3 rounded-xl text-[13px] hover:bg-accent-dark transition-all inline-flex items-center gap-2 shadow-lg shadow-accent/20">
                Solliciter un entretien
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <Link href="/expertise" className="bg-surface text-foreground font-medium px-6 py-3 rounded-xl text-[13px] border border-border hover:border-foreground/20 transition-all">
                Voir nos expertises
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </PageLayout>
  );
}
