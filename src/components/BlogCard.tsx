import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

export default function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group flex flex-col rounded-2xl border border-border bg-surface hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 overflow-hidden ${
        featured ? "sm:col-span-2 sm:flex-row" : ""
      }`}
    >
      {/* Color bar top */}
      <div className={`h-1.5 bg-accent/20 group-hover:bg-accent transition-colors duration-300 ${featured ? "sm:h-auto sm:w-1.5" : ""}`} />

      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-md">
            {post.category}
          </span>
          <span className="text-[11px] text-muted">{post.readTime} de lecture</span>
        </div>

        <h2 className={`font-bold mb-3 leading-snug group-hover:text-accent transition-colors duration-300 ${
          featured ? "text-xl sm:text-2xl" : "text-[15px]"
        }`}>
          {post.title}
        </h2>

        <p className={`text-foreground/50 leading-relaxed flex-1 mb-5 ${
          featured ? "text-[14px]" : "text-[13px]"
        }`}>
          {post.description}
        </p>

        <div className="flex items-center justify-between">
          <time className="text-[11px] text-muted">
            {new Date(post.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
          </time>
          <span className="text-[12px] text-muted group-hover:text-accent transition-colors inline-flex items-center gap-1">
            Lire
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
