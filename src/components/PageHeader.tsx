export default function PageHeader({
  tag,
  title,
  description,
}: {
  tag: string;
  title: string;
  description: string;
}) {
  return (
    <div className="pt-32 pb-16 sm:pt-36 sm:pb-20 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <span className="text-[11px] uppercase tracking-[0.2em] text-muted font-semibold">{tag}</span>
        <h1 className="text-[2rem] sm:text-[2.75rem] font-bold mt-3 mb-5 tracking-tight leading-tight max-w-3xl">
          {title}
        </h1>
        <p className="text-foreground/60 text-[15px] leading-relaxed max-w-2xl">{description}</p>
      </div>
    </div>
  );
}
