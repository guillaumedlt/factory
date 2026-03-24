"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { CaseStudy } from "@/lib/cases";

export default function CaseFilter({ cases }: { cases: CaseStudy[] }) {
  const [search, setSearch] = useState("");
  const [activeSector, setActiveSector] = useState<string | null>(null);
  const [activeExpertise, setActiveExpertise] = useState<string | null>(null);

  const sectors = useMemo(() => [...new Set(cases.map((c) => c.sector))].sort(), [cases]);
  const expertises = useMemo(() => [...new Set(cases.map((c) => c.expertise))].sort(), [cases]);

  const filtered = useMemo(() => {
    return cases.filter((c) => {
      const matchSearch = !search || c.title.toLowerCase().includes(search.toLowerCase()) || c.tag.toLowerCase().includes(search.toLowerCase()) || c.metric.toLowerCase().includes(search.toLowerCase());
      const matchSector = !activeSector || c.sector === activeSector;
      const matchExpertise = !activeExpertise || c.expertise === activeExpertise;
      return matchSearch && matchSector && matchExpertise;
    });
  }, [cases, search, activeSector, activeExpertise]);

  function resetFilters() {
    setSearch("");
    setActiveSector(null);
    setActiveExpertise(null);
  }

  return (
    <>
      {/* Search */}
      <div className="relative mb-5">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted/50">
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
        </svg>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Rechercher un cas client..."
          className="w-full bg-surface border border-border rounded-xl pl-11 pr-4 py-3.5 text-[14px] outline-none focus:border-accent transition-colors placeholder:text-foreground/25"
        />
        {search && (
          <button onClick={() => setSearch("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted/40 hover:text-foreground transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
        )}
      </div>

      {/* Filter pills */}
      <div className="flex flex-wrap gap-4 mb-10">
        {/* Sector filters */}
        <div className="flex flex-wrap gap-1.5">
          <span className="text-[10px] uppercase tracking-wider text-muted font-semibold self-center mr-1">Secteur</span>
          <button
            onClick={() => setActiveSector(null)}
            className={`text-[11px] font-medium px-3 py-1.5 rounded-lg transition-all ${!activeSector ? "bg-accent text-dark" : "bg-surface border border-border text-foreground/50 hover:border-accent/30"}`}
          >Tous</button>
          {sectors.map((s) => (
            <button
              key={s}
              onClick={() => setActiveSector(activeSector === s ? null : s)}
              className={`text-[11px] font-medium px-3 py-1.5 rounded-lg transition-all ${activeSector === s ? "bg-accent text-dark" : "bg-surface border border-border text-foreground/50 hover:border-accent/30"}`}
            >{s}</button>
          ))}
        </div>

        {/* Expertise filters */}
        <div className="flex flex-wrap gap-1.5">
          <span className="text-[10px] uppercase tracking-wider text-muted font-semibold self-center mr-1">Expertise</span>
          <button
            onClick={() => setActiveExpertise(null)}
            className={`text-[11px] font-medium px-3 py-1.5 rounded-lg transition-all ${!activeExpertise ? "bg-accent text-dark" : "bg-surface border border-border text-foreground/50 hover:border-accent/30"}`}
          >Toutes</button>
          {expertises.map((e) => (
            <button
              key={e}
              onClick={() => setActiveExpertise(activeExpertise === e ? null : e)}
              className={`text-[11px] font-medium px-3 py-1.5 rounded-lg transition-all ${activeExpertise === e ? "bg-accent text-dark" : "bg-surface border border-border text-foreground/50 hover:border-accent/30"}`}
            >{e}</button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-[12px] text-muted">
          {filtered.length} cas client{filtered.length > 1 ? "s" : ""}
          {(activeSector || activeExpertise || search) && (
            <button onClick={resetFilters} className="text-accent ml-2 hover:underline">Réinitialiser</button>
          )}
        </p>
      </div>

      {/* Cases grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-foreground/15 text-5xl mb-4">?</div>
          <p className="text-foreground/40 text-[14px] mb-2">Aucun cas client trouvé.</p>
          <button onClick={resetFilters} className="text-accent text-[13px] hover:underline">Réinitialiser les filtres</button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-3">
          {filtered.map((c) => (
            <Link key={c.slug} href={`/resultats/${c.slug}`} className="group p-7 rounded-2xl bg-surface border border-border hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-[10px] text-muted font-semibold uppercase tracking-wider">{c.tag}</span>
                </div>
                <div className="flex gap-1.5">
                  <Link href={`/secteurs/${c.sectorSlug}`} className="text-[9px] text-foreground/30 bg-surface-dark px-2 py-0.5 rounded hover:text-accent transition-colors">{c.sector}</Link>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[15px] font-semibold mb-4">{c.title}</h3>

              {/* Before/After */}
              <div className="space-y-3 flex-1 mb-5">
                <div className="pl-3.5 border-l-2 border-border">
                  <span className="text-[9px] uppercase tracking-wider text-foreground/25 font-semibold">Avant</span>
                  <p className="text-[12px] text-foreground/40 leading-relaxed mt-0.5">{c.before}</p>
                </div>
                <div className="pl-3.5 border-l-2 border-accent">
                  <span className="text-[9px] uppercase tracking-wider text-accent font-semibold">Après</span>
                  <p className="text-[12px] text-foreground/65 leading-relaxed mt-0.5">{c.after}</p>
                </div>
              </div>

              {/* Metric + duration */}
              <div className="flex items-center gap-3 mt-auto">
                <div className="bg-accent/10 rounded-xl px-4 py-2.5 flex-1">
                  <span className="text-[13px] font-bold text-foreground">{c.metric}</span>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-[9px] text-muted uppercase tracking-wider">Durée</div>
                  <div className="text-[12px] font-medium text-foreground/60">{c.duration}</div>
                </div>
              </div>

              {/* Read more */}
              <div className="mt-4 pt-3 border-t border-border flex items-center gap-1 text-[11px] text-muted group-hover:text-accent transition-colors">
                Voir le cas complet
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
