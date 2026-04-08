import Link from "next/link";

const principles = [
  {
    title: "Rigueur",
    text: "Chaque recommandation étayée par des données. Chaque solution testée avant déploiement. Chaque résultat mesuré.",
  },
  {
    title: "Discrétion",
    text: "Conforme RGPD et CCAF. Vos données ne quittent jamais le périmètre convenu.",
  },
  {
    title: "Transmission",
    text: "Nous ne créons pas de dépendance. Nous transmettons les compétences pour que vous soyez autonomes.",
  },
];

export default function Cabinet() {
  return (
    <section className="bg-dark text-white rounded-[2rem] mx-4 py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute top-0 right-[10%] w-[300px] h-[300px] bg-accent/[0.04] rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
          {/* Left: title + principles */}
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Le cabinet</span>
            <h2 className="text-[1.75rem] sm:text-3xl font-bold mt-3 mb-6 tracking-tight">Quanta.</h2>
            <p className="text-white/45 text-[14px] leading-relaxed mb-8">
              Cabinet d&apos;expertise IA fondé à Monaco par Guillaume. Maîtrise technique de dernière génération, connaissance intime de l&apos;environnement réglementaire de la Principauté.
            </p>

            <div className="space-y-3">
              {principles.map((p) => (
                <div key={p.title} className="flex gap-4 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <div>
                    <h3 className="text-[13px] font-semibold text-white/80">{p.title}</h3>
                    <p className="text-white/35 text-[12px] leading-relaxed mt-0.5">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: quote card */}
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 sm:p-10 flex flex-col justify-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-accent/30 mb-5">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-white/60 text-[15px] leading-relaxed mb-6">
              L&apos;IA n&apos;a de valeur que si elle s&apos;inscrit dans la réalité opérationnelle d&apos;une organisation. Pas dans une démonstration technologique, mais dans la transformation concrète de processus qui consomment du temps sans créer de valeur.
            </p>
            <p className="text-white/70 text-[14px] italic">
              Chaque engagement commence par l&apos;écoute. Chaque solution est conçue pour durer au-delà de notre intervention.
            </p>
            <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-dark text-[11px] font-bold">G</div>
              <div>
                <div className="text-[13px] font-semibold text-white/80">Guillaume</div>
                <div className="text-[11px] text-white/30">Fondateur, Quanta</div>
              </div>
            </div>
            <Link href="/cabinet" className="group text-[12px] font-medium text-accent hover:underline inline-flex items-center gap-1 mt-4">
              En savoir plus sur Quanta
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
