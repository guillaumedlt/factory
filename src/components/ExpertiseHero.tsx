export default function ExpertiseHero({
  tag,
  title,
  description,
  illustration,
}: {
  tag: string;
  title: string;
  description: string;
  illustration: React.ReactNode;
}) {
  return (
    <div className="pt-32 pb-10 sm:pt-36 sm:pb-16 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_340px] gap-10 items-center">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted font-semibold">{tag}</span>
            <h1 className="text-[2rem] sm:text-[2.5rem] font-bold mt-3 mb-5 tracking-tight leading-tight">
              {title}
            </h1>
            <p className="text-foreground/60 text-[15px] leading-relaxed max-w-xl">{description}</p>
          </div>
          <div className="hidden lg:flex h-[280px] items-center justify-center">
            {illustration}
          </div>
        </div>
      </div>
    </div>
  );
}
