import Link from "next/link";
import PageLayout from "./PageLayout";
import BlogCard from "./BlogCard";
import ArticleSchema from "./ArticleSchema";
import BreadcrumbSchema from "./BreadcrumbSchema";
import type { BlogPost } from "@/lib/blog";
import { blogPosts } from "@/lib/blog";

export default function ArticleLayout({
  post,
  children,
}: {
  post: BlogPost;
  children: React.ReactNode;
}) {
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <PageLayout>
      <ArticleSchema post={post} />
      <BreadcrumbSchema items={[
        { name: "Accueil", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: post.title, url: `/blog/${post.slug}` },
      ]} />
      {/* Article header */}
      <div className="pt-32 pb-10 sm:pt-36 sm:pb-14 bg-surface">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-5">
            <Link href="/blog" className="text-[12px] text-muted hover:text-foreground transition-colors inline-flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Blog
            </Link>
            <span className="text-foreground/15">·</span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-md">
              {post.category}
            </span>
          </div>
          <h1 className="text-[2rem] sm:text-[2.5rem] font-bold tracking-tight leading-tight mb-5">
            {post.title}
          </h1>
          <p className="text-foreground/60 text-[15px] leading-relaxed mb-6">
            {post.description}
          </p>
          <div className="flex items-center gap-4 text-[12px] text-muted">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-accent/15 flex items-center justify-center text-[9px] font-bold text-accent">GD</div>
              <span>Guillaume</span>
            </div>
            <span className="text-foreground/15">·</span>
            <time>{new Date(post.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</time>
            <span className="text-foreground/15">·</span>
            <span>{post.readTime} de lecture</span>
          </div>
        </div>
      </div>

      {/* Article body */}
      <article className="section-padding section-light">
        <div className="max-w-3xl mx-auto px-6 prose-factory">
          {children}
        </div>
      </article>

      {/* CTA inline */}
      <section className="py-14 bg-dark text-white rounded-[2rem] mx-4">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-xl font-bold mb-3">Ce sujet vous concerne ?</h2>
          <p className="text-white/45 text-[14px] mb-6">Échangeons 30 minutes sur votre contexte. Gratuit, confidentiel.</p>
          <a href="https://wa.me/33645636107" className="group bg-accent text-dark font-semibold px-6 py-3 rounded-xl text-[13px] hover:bg-accent-dark transition-all inline-flex items-center gap-2">
            Solliciter un entretien
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>
      </section>

      {/* Related articles */}
      <section className="section-padding section-tinted">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl font-bold mb-6">Articles liés</h2>
          <div className="grid sm:grid-cols-3 gap-3">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
