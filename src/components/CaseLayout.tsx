import Link from "next/link";
import PageLayout from "./PageLayout";
import RevealOnScroll from "./RevealOnScroll";
import AnimatedCounter from "./AnimatedCounter";
import BreadcrumbSchema from "./BreadcrumbSchema";
import type { CaseStudy } from "@/lib/cases";
import { caseStudies } from "@/lib/cases";

export default function CaseLayout({
  caseStudy,
  children,
}: {
  caseStudy: CaseStudy;
  children: React.ReactNode;
}) {
  const related = caseStudies
    .filter((c) => c.slug !== caseStudy.slug)
    .filter((c) => c.sectorSlug === caseStudy.sectorSlug || c.expertise === caseStudy.expertise)
    .slice(0, 3);

  return (
    <PageLayout>
      <BreadcrumbSchema items={[
        { name: "Accueil", url: "/" },
        { name: "Résultats", url: "/resultats" },
        { name: caseStudy.title, url: `/resultats/${caseStudy.slug}` },
      ]} />

      {/* Hero */}
      <div className="pt-32 pb-10 sm:pt-36 sm:pb-16 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-5">
            <Link href="/resultats" className="text-[12px] text-muted hover:text-foreground transition-colors inline-flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              Résultats
            </Link>
            <span className="text-foreground/15">·</span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-md">{caseStudy.tag}</span>
          </div>
          <h1 className="text-[2rem] sm:text-[2.5rem] font-bold tracking-tight leading-tight mb-5">
            {caseStudy.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-[12px] text-muted">
            <Link href={`/secteurs/${caseStudy.sectorSlug}`} className="bg-surface-dark px-2.5 py-1 rounded-md hover:text-foreground transition-colors">{caseStudy.sector}</Link>
            <span className="bg-surface-dark px-2.5 py-1 rounded-md">{caseStudy.expertise}</span>
            <span className="bg-surface-dark px-2.5 py-1 rounded-md">{caseStudy.duration}</span>
          </div>
        </div>
      </div>

      {/* Key metric */}
      <section className="py-10 section-surface">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <div className="rounded-2xl bg-accent/10 border border-accent/20 p-8 text-center">
              <div className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">{caseStudy.metric}</div>
              <p className="text-foreground/50 text-[13px]">Résultat principal de cette mission</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Before / After */}
      <section className="section-padding section-light">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <div className="grid sm:grid-cols-2 gap-3 mb-16">
              <div className="p-8 rounded-2xl bg-surface border border-border">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2 h-2 rounded-full bg-foreground/20" />
                  <span className="text-[11px] uppercase tracking-wider text-muted font-semibold">Situation initiale</span>
                </div>
                <p className="text-foreground/50 text-[14px] leading-relaxed">{caseStudy.before}</p>
              </div>
              <div className="p-8 rounded-2xl bg-dark text-white border border-white/[0.06]">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-[11px] uppercase tracking-wider text-white/40 font-semibold">Après intervention Quanta</span>
                </div>
                <p className="text-white/60 text-[14px] leading-relaxed">{caseStudy.after}</p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Detailed content */}
          {children}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark text-white rounded-[2rem] mx-4 py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-3">Ce cas vous parle ?</h2>
            <p className="text-white/45 text-[14px] mb-6">Échangeons 30 minutes sur votre contexte. Gratuit, confidentiel.</p>
            <a href="https://wa.me/33645636107" className="group bg-accent text-dark font-semibold px-6 py-3 rounded-xl text-[13px] hover:bg-accent-dark transition-all inline-flex items-center gap-2">
              Solliciter un entretien
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </RevealOnScroll>
        </div>
      </section>

      {/* Related cases */}
      {related.length > 0 && (
        <section className="section-padding section-tinted">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-xl font-bold mb-6">Cas clients similaires</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {related.map((r) => (
                <Link key={r.slug} href={`/resultats/${r.slug}`} className="group p-6 rounded-2xl bg-surface border border-border hover:border-accent/30 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-[10px] text-muted font-semibold uppercase tracking-wider">{r.tag}</span>
                  </div>
                  <h3 className="text-[14px] font-semibold mb-2 group-hover:text-accent transition-colors">{r.title}</h3>
                  <div className="text-[12px] font-bold text-accent">{r.metric}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  );
}
