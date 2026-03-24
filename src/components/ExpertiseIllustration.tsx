"use client";

export function AuditIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main chart card */}
      <div className="relative animate-float">
        <div className="w-56 rounded-xl bg-surface shadow-xl shadow-black/5 p-5 border border-border">
          <div className="text-[9px] font-semibold text-muted uppercase tracking-wider mb-3">Matrice d&apos;opportunités</div>
          <div className="flex items-end gap-[5px] h-20">
            {[30, 50, 80, 65, 45, 70, 90].map((h, i) => (
              <div key={i} className="flex-1 rounded-sm bg-accent/25 hover:bg-accent transition-colors duration-300" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-[8px] text-muted">
            <span>Faible</span>
            <span>ROI →</span>
            <span>Fort</span>
          </div>
        </div>
        {/* Floating ROI badge */}
        <div className="absolute -bottom-3 -right-4 w-24 rounded-lg bg-dark shadow-lg p-2.5 border border-white/[0.06]">
          <div className="text-[8px] text-white/40">ROI moyen</div>
          <div className="text-accent font-bold text-sm">+340%</div>
        </div>
        {/* Floating checklist */}
        <div className="absolute -top-3 -left-4 w-28 rounded-lg bg-surface shadow-lg p-2.5 border border-border">
          <div className="text-[8px] text-muted font-semibold mb-1.5">Processus</div>
          {["Analysé", "Scoré", "Priorisé"].map((t) => (
            <div key={t} className="flex items-center gap-1.5 text-[8px] text-foreground/50">
              <span className="text-accent text-[7px]">✓</span> {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AutomatisationIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="animate-float">
        {/* Pipeline flow */}
        <div className="flex items-center gap-2">
          {[
            { label: "PDF", sub: "Entrant", bg: "bg-surface" },
            { label: "OCR", sub: "Extraction", bg: "bg-surface" },
            { label: "IA", sub: "Classement", bg: "bg-accent" },
            { label: "✓", sub: "Validé", bg: "bg-dark text-white" },
          ].map((step, i) => (
            <div key={step.label} className="flex items-center gap-2">
              <div className={`w-14 h-14 rounded-xl ${step.bg} shadow-md border border-border flex flex-col items-center justify-center`}>
                <span className="text-[11px] font-bold">{step.label}</span>
                <span className="text-[7px] text-muted mt-0.5">{step.sub}</span>
              </div>
              {i < 3 && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-border">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              )}
            </div>
          ))}
        </div>
        {/* Stats below */}
        <div className="flex justify-center gap-3 mt-4">
          {[
            { v: "-80%", l: "temps" },
            { v: "97%", l: "précision" },
            { v: "0", l: "erreur" },
          ].map((s) => (
            <div key={s.l} className="px-3 py-1.5 rounded-lg bg-surface border border-border text-center">
              <div className="text-[11px] font-bold text-accent">{s.v}</div>
              <div className="text-[7px] text-muted">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DevSurMesureIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="animate-float">
        <div className="w-60 rounded-xl bg-dark shadow-xl p-5 font-mono text-[11px] leading-relaxed border border-white/[0.06]">
          <div className="flex gap-1.5 mb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/40" />
          </div>
          <div className="text-accent/60">{"// assistant-mc.ts"}</div>
          <div className="text-white/30">const assistant = <span className="text-accent">createAI</span>({"{"}</div>
          <div className="text-white/50 pl-3">corpus: <span className="text-accent">&quot;droit_monaco&quot;</span>,</div>
          <div className="text-white/50 pl-3">lang: <span className="text-accent">&quot;fr&quot;</span>,</div>
          <div className="text-white/50 pl-3">privacy: <span className="text-accent">&quot;RGPD&quot;</span>,</div>
          <div className="text-white/30">{"})"}</div>
          <div className="mt-2 text-green-400/50">{"// ✓ Deployed · Monaco"}</div>
        </div>
        {/* Badge */}
        <div className="absolute -bottom-2 -right-2 px-3 py-1.5 rounded-lg bg-accent shadow-md text-[9px] font-bold text-dark">
          100% propriétaire
        </div>
      </div>
    </div>
  );
}

export function MarketingIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="animate-float">
        <div className="w-56 rounded-xl bg-surface shadow-xl p-5 border border-border">
          <div className="flex items-center justify-between mb-3">
            <div className="text-[9px] font-semibold text-muted uppercase tracking-wider">Acquisition</div>
            <div className="text-[10px] text-accent font-bold">+215%</div>
          </div>
          <div className="flex items-end gap-[3px] h-16">
            {[12, 15, 14, 22, 30, 28, 38, 42, 40, 52, 65, 60].map((h, i) => (
              <div key={i} className="flex-1 rounded-sm bg-accent/30 hover:bg-accent transition-colors duration-200" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-[7px] text-muted">
            <span>Jan</span>
            <span>Déc</span>
          </div>
        </div>
        {/* Floating cards */}
        <div className="absolute -top-2 -right-3 flex gap-1.5">
          {["Site", "SEO", "Ads"].map((l) => (
            <span key={l} className="text-[8px] text-foreground/50 bg-surface shadow-md border border-border px-2 py-1 rounded-md font-medium">{l}</span>
          ))}
        </div>
        <div className="absolute -bottom-2 -left-3 px-3 py-1.5 rounded-lg bg-dark shadow-md border border-white/[0.06]">
          <div className="text-[8px] text-white/40">Lighthouse</div>
          <div className="text-accent font-bold text-[11px]">97/100</div>
        </div>
      </div>
    </div>
  );
}

export function OutilsInternesIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="animate-float">
        {/* App mockup */}
        <div className="w-60 rounded-xl bg-surface shadow-xl border border-border overflow-hidden">
          <div className="bg-surface-dark px-4 py-2 flex items-center gap-2 border-b border-border">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-[9px] text-muted font-medium">app.votre-entreprise.mc</span>
          </div>
          <div className="p-4">
            <div className="flex gap-2 mb-3">
              {["Dashboard", "Clients", "Docs"].map((t, i) => (
                <span key={t} className={`text-[8px] px-2 py-1 rounded-md ${i === 0 ? "bg-accent/15 text-accent font-semibold" : "text-muted bg-surface-dark"}`}>{t}</span>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { n: "142", l: "Clients actifs" },
                { n: "98%", l: "Uptime" },
                { n: "2.3s", l: "Temps réponse" },
                { n: "€24k", l: "Économisé/an" },
              ].map((s) => (
                <div key={s.l} className="p-2 rounded-md bg-background text-center">
                  <div className="text-[11px] font-bold">{s.n}</div>
                  <div className="text-[7px] text-muted">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute -bottom-2 -right-2 px-3 py-1.5 rounded-lg bg-accent shadow-md text-[9px] font-bold text-dark">
          Livré en 3 sem.
        </div>
      </div>
    </div>
  );
}

export function FormationIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="animate-float">
        <div className="w-56 space-y-2.5">
          {[
            { label: "Fondamentaux IA", pct: 100, done: true },
            { label: "Prompt Engineering", pct: 85, done: true },
            { label: "Outils métier", pct: 65, done: false },
            { label: "Autonomie", pct: 40, done: false },
          ].map((item) => (
            <div key={item.label} className="p-3 rounded-xl bg-surface border border-border shadow-sm">
              <div className="flex justify-between mb-1.5">
                <span className="text-[10px] text-foreground/60 font-medium">{item.label}</span>
                <span className={`text-[9px] font-semibold ${item.done ? "text-accent" : "text-foreground/25"}`}>
                  {item.done ? "✓" : `${item.pct}%`}
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-surface-dark overflow-hidden">
                <div className="h-full rounded-full bg-accent transition-all duration-700" style={{ width: `${item.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute -top-2 -right-3 px-3 py-1.5 rounded-lg bg-dark shadow-md border border-white/[0.06]">
          <div className="text-[8px] text-white/40">Adoption</div>
          <div className="text-accent font-bold text-[11px]">96%</div>
        </div>
      </div>
    </div>
  );
}
