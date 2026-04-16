import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-4 gap-10 mb-12">
          <div>
            <Link href="/" className="text-[15px] font-semibold tracking-tight">Quanta<span className="text-accent text-[10px] align-top ml-0.5">&#8482;</span></Link>
            <p className="text-[13px] text-muted leading-relaxed mt-2.5">Cabinet d&apos;expertise IA.<br />Principauté de Monaco.</p>
            <p className="text-[11px] text-foreground/25 leading-relaxed mt-3">The Office Monaco<br />Une marque de Ceres Growth Marketing<br />128 rue de la Boétie, 75008 Paris</p>
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

            <h4 className="text-[10px] uppercase tracking-[0.2em] text-muted font-semibold mb-3 mt-6">Ressources IA Monaco</h4>
            <nav className="flex flex-col gap-2" aria-label="Ressources">
              <Link href="/ia-monaco" className="text-[13px] text-foreground/50 hover:text-foreground transition-colors">IA à Monaco</Link>
              <Link href="/agence-ia-monaco" className="text-[13px] text-foreground/50 hover:text-foreground transition-colors">Agence IA Monaco</Link>
              <Link href="/consultant-ia-monaco" className="text-[13px] text-foreground/50 hover:text-foreground transition-colors">Consultant IA Monaco</Link>
              <Link href="/combien-coute-projet-ia-monaco" className="text-[13px] text-foreground/50 hover:text-foreground transition-colors">Tarifs projet IA</Link>
              <Link href="/comparatif-agence-ia-monaco" className="text-[13px] text-foreground/50 hover:text-foreground transition-colors">Comparatif agences</Link>
            </nav>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-muted font-semibold mb-3">Contact</h4>
            <div className="flex flex-col gap-2">
              <span className="text-[13px] text-foreground/50">The Office, Monaco</span>
              <a href="https://www.linkedin.com/in/delachetguillaume/" target="_blank" rel="noopener noreferrer" className="text-[13px] text-foreground/50 hover:text-foreground transition-colors inline-flex items-center gap-1">
                LinkedIn <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" /></svg>
              </a>
              <Link href="/contact" className="text-[13px] text-foreground/50 hover:text-foreground transition-colors">Nous contacter</Link>
            </div>

            <h4 className="text-[10px] uppercase tracking-[0.2em] text-muted font-semibold mb-3 mt-6">Légal</h4>
            <nav className="flex flex-col gap-2" aria-label="Légal">
              <Link href="/mentions-legales" className="text-[13px] text-foreground/50 hover:text-foreground transition-colors">Mentions légales</Link>
              <Link href="/politique-confidentialite" className="text-[13px] text-foreground/50 hover:text-foreground transition-colors">Politique de confidentialité</Link>
            </nav>
          </div>
        </div>
        <div className="h-px bg-border mb-6" />
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-[11px] text-foreground/25">
            &copy; {new Date().getFullYear()} Quanta. Tous droits réservés. Quanta est une marque de Ceres Growth Marketing SAS.
          </p>
          <a href="https://www.linkedin.com/in/delachetguillaume/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-muted hover:text-foreground hover:bg-accent/20 transition-all" aria-label="LinkedIn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
