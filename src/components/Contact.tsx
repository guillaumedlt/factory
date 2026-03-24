import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact">
      <div className="bg-gradient-to-b from-background via-accent-light/40 to-accent/25 section-padding text-center">
        <div className="max-w-2xl mx-auto px-6">
          <span className="inline-flex text-[11px] uppercase tracking-[0.2em] font-semibold bg-surface text-foreground px-3 py-1.5 rounded-full border border-border mb-5">
            Commençons
          </span>
          <h3 className="text-3xl sm:text-[2.5rem] font-bold tracking-tight leading-tight mb-7">
            Prêt à transformer vos opérations ?
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Link href="/contact" className="group bg-accent text-dark font-semibold px-6 py-3 rounded-xl text-[13px] hover:bg-accent-dark transition-all inline-flex items-center gap-2 shadow-lg shadow-accent/20">
              Solliciter un entretien
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/methode" className="bg-surface text-foreground font-medium px-6 py-3 rounded-xl text-[13px] border border-border hover:border-foreground/20 transition-all">
              Notre méthode
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-[12px] text-foreground/40">
            <Link href="/tarifs" className="hover:text-foreground transition-colors">Tarifs</Link>
            <span className="text-foreground/15">·</span>
            <Link href="/resultats" className="hover:text-foreground transition-colors">Résultats</Link>
            <span className="text-foreground/15">·</span>
            <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
            <span className="text-foreground/15">·</span>
            <Link href="/faq" className="hover:text-foreground transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
