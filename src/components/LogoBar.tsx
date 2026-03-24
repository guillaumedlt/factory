import Image from "next/image";

const logos = [
  { name: "Claude", src: "/logos/claude.png" },
  { name: "ChatGPT", src: "/logos/chatgpt.png" },
  { name: "Mistral", src: "/logos/mistral.png" },
  { name: "Lovable", src: "/logos/lovable.png" },
  { name: "Linear", src: "/logos/linear.jpg" },
  { name: "Clay", src: "/logos/clay.png" },
  { name: "Cursor", src: "/logos/cursor.png" },
  { name: "HubSpot", src: "/logos/hubspot.png" },
  { name: "n8n", src: "/logos/n8n.png" },
];

export default function LogoBar() {
  return (
    <section className="py-10 sm:py-14 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-[11px] uppercase tracking-[0.2em] text-muted font-semibold text-center mb-8">
          Les outils que nous maîtrisons et déployons
        </p>
        <div className="flex items-center justify-center flex-wrap gap-x-10 gap-y-6">
          {logos.map((logo) => (
            <div key={logo.name} className="flex flex-col items-center gap-2.5 group">
              <div className="w-10 h-10 relative group-hover:scale-110 transition-transform duration-300">
                <Image src={logo.src} alt={logo.name} fill className="object-contain" sizes="40px" />
              </div>
              <span className="text-[10px] text-muted/70 group-hover:text-foreground transition-colors duration-300 font-medium">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
