import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-4 gap-10 mb-12">
          <div>
            <Link href="/" className="text-[15px] font-semibold tracking-tight">Factory<span className="text-accent text-[10px] align-top ml-0.5">&#8482;</span></Link>
            <p className="text-[13px] text-muted leading-relaxed mt-2.5">Cabinet d&apos;expertise IA.<br />Principauté de Monaco.</p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-muted font-semibold mb-3">Expertise</h4>
            <nav className="flex flex-col gap-2" aria-label="Expertise">
              <Link href="/expertise/audit-strategie-ia" className="text-[13px] text-foreground/50 hover:text-foreground transition-colors">Audit & stratégie</Link>
              <Link href="/expertise/automatisation-processus" className="text-[13px] text-foreground/50 hover:text-foreground transition-colors">Automatisation</Link>
              <Link href="/expertise/developpement-ia-sur-mesure" className="text-[13px] text-foreground/50 hover:text-foreground transition-colors">IA sur mesure</Link>
              <Link href="/expertise/marketing-acquisition" className="text-[13px] text-foreground/50 hover:text-foreground transition-colors">Marketing</Link>
              <Link href="/expertise/formation-ia" className="text-[13px] text-foreground/50 hover:text-foreground transition-colors">Formation</Link>
            </nav>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-muted font-semibold mb-3">Pages</h4>
            <nav className="flex flex-col gap-2" aria-label="Navigation">
              <Link href="/methode" className="text-[13px] text-foreground/50 hover:text-foreground transition-colors">Méthode</Link>
              <Link href="/secteurs" className="text-[13px] text-foreground/50 hover:text-foreground transition-colors">Secteurs</Link>
              <Link href="/resultats" className="text-[13px] text-foreground/50 hover:text-foreground transition-colors">Résultats</Link>
              <Link href="/cabinet" className="text-[13px] text-foreground/50 hover:text-foreground transition-colors">Le cabinet</Link>
              <Link href="/tarifs" className="text-[13px] text-foreground/50 hover:text-foreground transition-colors">Tarifs</Link>
              <Link href="/faq" className="text-[13px] text-foreground/50 hover:text-foreground transition-colors">FAQ</Link>
              <Link href="/glossaire" className="text-[13px] text-foreground/50 hover:text-foreground transition-colors">Glossaire</Link>
              <Link href="/blog" className="text-[13px] text-foreground/50 hover:text-foreground transition-colors">Blog</Link>
            </nav>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-muted font-semibold mb-3">Contact</h4>
            <div className="flex flex-col gap-2">
              <a href="mailto:guillaume@ceres.agency" className="text-[13px] text-foreground/50 hover:text-foreground transition-colors">guillaume@ceres.agency</a>
              <span className="text-[13px] text-foreground/50">Monaco</span>
              <a href="#" className="text-[13px] text-foreground/50 hover:text-foreground transition-colors inline-flex items-center gap-1">
                LinkedIn <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" /></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="h-px bg-border mb-6" />
        <p className="text-[12px] text-muted">&copy; {new Date().getFullYear()} Factory. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
