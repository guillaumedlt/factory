"use client";

import { useEffect, useRef } from "react";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";

const whatsappUrl = "https://wa.me/33645636107";

export default function ContactPage() {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load HubSpot script
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.async = true;
    script.onload = () => {
      if (window.hbspt && formRef.current) {
        window.hbspt.forms.create({
          portalId: "2703445",
          formId: "73471821-b85d-4c07-bba0-44be11228f6c",
          region: "na1",
          target: "#hubspot-form",
        });
      }
    };
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <PageLayout>
      <PageHeader
        tag="Contact"
        title="Échangeons sur vos enjeux."
        description="Premier entretien confidentiel de 30 minutes. Gratuit, sans engagement."
      />

      <section className="section-padding section-light">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10">
            {/* Left: HubSpot form */}
            <div className="p-8 rounded-2xl bg-surface border border-border">
              <div id="hubspot-form" ref={formRef} />
            </div>

            {/* Right: info cards */}
            <div className="space-y-4">
              {/* WhatsApp direct */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 hover:border-[#25D366]/40 hover:shadow-lg hover:shadow-[#25D366]/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-foreground group-hover:text-[#25D366] transition-colors">Écrire sur WhatsApp</div>
                  <div className="text-[12px] text-muted">Réponse rapide, souvent dans l&apos;heure</div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-auto text-muted/30 group-hover:text-[#25D366] group-hover:translate-x-0.5 transition-all">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              {/* Process */}
              <div className="p-6 rounded-2xl bg-surface border border-border">
                <h2 className="text-[14px] font-semibold mb-4">Comment ça se passe</h2>
                <div className="space-y-4">
                  {[
                    { n: "1", text: "Vous remplissez le formulaire ou écrivez sur WhatsApp" },
                    { n: "2", text: "Nous échangeons 30 min sur vos enjeux" },
                    { n: "3", text: "Nous identifions les premiers leviers" },
                    { n: "4", text: "Si pertinent, nous proposons une feuille de route" },
                  ].map((step) => (
                    <div key={step.n} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-md bg-accent/10 flex items-center justify-center text-[10px] font-bold text-foreground/50 shrink-0 mt-0.5">{step.n}</span>
                      <span className="text-[13px] text-foreground/55">{step.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="p-6 rounded-2xl bg-surface border border-border">
                <span className="text-[10px] uppercase tracking-wider text-muted font-semibold block mb-0.5">Localisation</span>
                <span className="text-[13px] text-foreground/70 font-medium">The Office, Principauté de Monaco</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

// Type declaration for HubSpot
declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (config: {
          portalId: string;
          formId: string;
          region: string;
          target: string;
        }) => void;
      };
    };
  }
}
