import AiChat from "./AiChat";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-24 pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7e99b8] via-[#9db0c7] to-[#bcc8d4]" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/90" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/40" />
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/[0.06] rounded-full blur-[150px]" />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        {/* Centered text */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="animate-fade-up">
            <span className="inline-flex text-[11px] uppercase tracking-[0.2em] font-semibold bg-accent text-dark px-3 py-1.5 rounded-md shadow-md shadow-accent/20">
              Cabinet d&apos;expertise IA · Monaco
            </span>
          </div>

          <h1 className="animate-fade-up delay-100 text-[2.25rem] sm:text-[2.75rem] lg:text-5xl font-bold tracking-tight leading-[1.1] mt-7 mb-6">
            Nous structurons l&apos;intelligence artificielle pour les entreprises monégasques.
          </h1>

          <p className="animate-fade-up delay-200 text-[15px] text-foreground/60 max-w-xl mx-auto mb-8 leading-relaxed">
            Quanta est un cabinet d&apos;expertise dédié à l&apos;intégration opérationnelle de l&apos;IA dans les organisations de la Principauté. Nous intervenons là où la technologie rencontre la réalité de vos métiers.
          </p>

          <div className="animate-fade-up delay-300 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className="group bg-accent text-dark font-semibold px-6 py-3 rounded-xl text-[13px] hover:bg-accent-dark transition-all inline-flex items-center gap-2 shadow-lg shadow-accent/20">
              Solliciter un entretien
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/methode" className="group text-foreground/70 font-medium text-[13px] hover:text-foreground transition-colors inline-flex items-center gap-1.5 px-3 py-3">
              Notre méthode
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>

        {/* Chat box — centered below */}
        <div className="animate-fade-up delay-400 max-w-2xl mx-auto">
          <AiChat />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
