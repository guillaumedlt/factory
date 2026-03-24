"use client";

import { useState, useMemo } from "react";
import BlogCard from "./BlogCard";
import type { BlogPost } from "@/lib/blog";

export default function BlogFilter({ posts }: { posts: BlogPost[] }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    const cats = [...new Set(posts.map((p) => p.category))];
    return cats.sort();
  }, [posts]);

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchesSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      const matchesCat = !activeCategory || p.category === activeCategory;
      return matchesSearch && matchesCat;
    });
  }, [posts, search, activeCategory]);

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <>
      {/* Search + filters bar */}
      <div className="mb-10">
        {/* Search */}
        <div className="relative mb-5">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted/50"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher un article..."
            className="w-full bg-surface border border-border rounded-xl pl-11 pr-4 py-3.5 text-[14px] outline-none focus:border-accent transition-colors placeholder:text-foreground/25"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted/40 hover:text-foreground transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory(null)}
            className={`text-[12px] font-medium px-3.5 py-1.5 rounded-lg transition-all duration-200 ${
              !activeCategory
                ? "bg-accent text-dark"
                : "bg-surface border border-border text-foreground/50 hover:border-accent/30 hover:text-foreground"
            }`}
          >
            Tous
          </button>
          {categories.map((cat) => {
            const count = posts.filter((p) => p.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                className={`text-[12px] font-medium px-3.5 py-1.5 rounded-lg transition-all duration-200 inline-flex items-center gap-1.5 ${
                  activeCategory === cat
                    ? "bg-accent text-dark"
                    : "bg-surface border border-border text-foreground/50 hover:border-accent/30 hover:text-foreground"
                }`}
              >
                {cat}
                <span className={`text-[10px] ${
                  activeCategory === cat ? "text-dark/50" : "text-foreground/25"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-foreground/20 text-5xl mb-4">?</div>
          <p className="text-foreground/40 text-[14px] mb-2">Aucun article trouvé.</p>
          <button
            onClick={() => { setSearch(""); setActiveCategory(null); }}
            className="text-accent text-[13px] hover:underline"
          >
            Réinitialiser les filtres
          </button>
        </div>
      ) : (
        <>
          {/* Featured */}
          {featured.length > 0 && (
            <div className="mb-10">
              <h2 className="text-[11px] uppercase tracking-[0.2em] text-muted font-semibold mb-5">A la une</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {featured.map((post) => (
                  <BlogCard key={post.slug} post={post} featured />
                ))}
              </div>
            </div>
          )}

          {/* Rest */}
          {rest.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-[11px] uppercase tracking-[0.2em] text-muted font-semibold">
                  {activeCategory || search ? `${filtered.length} résultat${filtered.length > 1 ? "s" : ""}` : "Tous les articles"}
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {rest.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
