import Link from "next/link";

export default function WhitePaperBanner() {
  return (
    <section className="py-3 bg-dark">
      <div className="max-w-6xl mx-auto px-6">
        <Link
          href="/white-paper"
          className="group flex items-center justify-center gap-3 text-center"
        >
          <span className="text-[9px] font-bold uppercase tracking-wider text-dark bg-accent px-2 py-0.5 rounded shrink-0">
            Nouveau
          </span>
          <span className="text-[12px] text-white/60 group-hover:text-white transition-colors">
            White paper : L&apos;IA dans la Principauté de Monaco
          </span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="text-white/30 group-hover:text-accent group-hover:translate-x-0.5 transition-all shrink-0"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
