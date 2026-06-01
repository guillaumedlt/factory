import Image from "next/image";
import Link from "next/link";

export default function MonacoPresence() {
  return (
    <section className="relative my-12 sm:my-16 mx-4 rounded-[2rem] overflow-hidden">
      <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full">
        <Image
          src="https://images.unsplash.com/photo-1575540121783-60f174302cc2?w=2400&q=80&auto=format&fit=crop"
          alt="Port Hercule, Principauté de Monaco — vue aérienne"
          fill
          priority={false}
          sizes="(max-width: 768px) 100vw, 1400px"
          className="object-cover grayscale contrast-[1.05]"
        />
        {/* Top vignette + dark wash for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

        {/* Content overlay */}
        <div className="absolute inset-0 flex items-end sm:items-center">
          <div className="max-w-4xl mx-auto px-6 sm:px-10 pb-8 sm:pb-0 w-full">
            <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-accent font-semibold mb-3">
              Ancrés à Monaco
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4 leading-tight max-w-2xl">
              Implantés à Monaco. Intervention sur site dans toute la Principauté.
            </h2>
            <p className="text-white/70 text-[14px] sm:text-[15px] leading-relaxed max-w-xl mb-6">
              Quanta opère depuis Monaco et accompagne les entreprises de la Principauté en présentiel. Sessions de travail dans vos locaux, connaissance directe du cadre réglementaire monégasque (SICCFIN, CCAF, loi n° 1.362) et des codes d&apos;affaires locaux.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/cabinet"
                className="bg-white text-dark font-semibold px-5 py-2.5 rounded-xl text-[13px] hover:bg-white/90 transition-all"
              >
                Le cabinet
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 text-white font-medium px-5 py-2.5 rounded-xl text-[13px] border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                Nous rencontrer à Monaco
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Photo credit (Unsplash license — attribution optional but courteous) */}
      <p className="absolute bottom-2 right-3 text-[10px] text-white/30 z-10">
        Port Hercule · Matthias Mullie / Unsplash
      </p>
    </section>
  );
}
