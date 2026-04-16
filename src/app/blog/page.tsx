import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import BlogFilter from "@/components/BlogFilter";
import AnimatedCounter from "@/components/AnimatedCounter";
import RevealOnScroll from "@/components/RevealOnScroll";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog Intelligence Artificielle à Monaco",
  description:
    "Analyses, guides pratiques et retours d'expérience sur l'intégration de l'intelligence artificielle dans les entreprises monégasques. Par Quanta.",
  alternates: { canonical: "https://quantamonaco.com/blog" },
  openGraph: {
    title: "Blog Intelligence Artificielle à Monaco",
    description:
      "Analyses, guides pratiques et retours d'expérience sur l'intégration de l'intelligence artificielle dans les entreprises monégasques. Par Quanta.",
    url: "https://quantamonaco.com/blog",
    siteName: "Quanta",
    locale: "fr_FR",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <PageLayout>
      <PageHeader
        tag="Blog"
        title="Réflexions sur l'IA en entreprise."
        description="Analyses, guides pratiques et retours d'expérience pour les dirigeants monégasques qui veulent comprendre et intégrer l'intelligence artificielle."
      />

      {/* Stats bar */}
      <section className="py-10 section-surface">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1">
                  <AnimatedCounter value={43} />
                </div>
                <p className="text-foreground/40 text-[12px]">articles publiés</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1">
                  <AnimatedCounter value={5} />
                </div>
                <p className="text-foreground/40 text-[12px]">catégories</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1">
                  <AnimatedCounter value={8} suffix=" min" />
                </div>
                <p className="text-foreground/40 text-[12px]">lecture moyenne</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Articles with search & filters */}
      <section className="section-padding section-light">
        <div className="max-w-6xl mx-auto px-6">
          <BlogFilter posts={blogPosts} />
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-gradient-to-b from-background via-accent-light/30 to-accent/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">
            Restez informé de nos publications.
          </h2>
          <p className="text-foreground/60 text-[14px] mb-8">
            Recevez nos analyses et guides directement. Pas de spam, que du contenu actionnable.
          </p>
          <a
            href="https://wa.me/33645636107"
            className="group bg-accent text-dark font-semibold px-6 py-3 rounded-xl text-[13px] hover:bg-accent-dark transition-all inline-flex items-center gap-2 shadow-lg shadow-accent/20"
          >
            S&apos;inscrire aux publications
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
