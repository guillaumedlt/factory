"use client";

import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";

const whatsappNumber = "33645636107";
const whatsappUrl = `https://wa.me/${whatsappNumber}`;

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", company: "", email: "", sector: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSent(true);
        setForm({ name: "", company: "", email: "", sector: "", message: "" });
      } else {
        setError("Une erreur est survenue. Réessayez ou contactez-nous sur WhatsApp.");
      }
    } catch {
      setError("Erreur réseau. Réessayez ou contactez-nous sur WhatsApp.");
    } finally {
      setSending(false);
    }
  }

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
            {/* Left: form */}
            <div className="p-8 rounded-2xl bg-surface border border-border">
              {sent ? (
                <div className="text-center py-12">
                  <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center mx-auto mb-5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold mb-2">Message envoyé.</h2>
                  <p className="text-foreground/50 text-[14px] mb-6">Nous vous répondons sous 24 heures.</p>
                  <button onClick={() => setSent(false)} className="text-[13px] text-accent hover:underline">Envoyer un autre message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-muted font-semibold block mb-2">Nom *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Votre nom"
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-[13px] outline-none focus:border-accent transition-colors placeholder:text-foreground/25"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-muted font-semibold block mb-2">Société</label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Votre entreprise"
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-[13px] outline-none focus:border-accent transition-colors placeholder:text-foreground/25"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-muted font-semibold block mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="votre@email.com"
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-[13px] outline-none focus:border-accent transition-colors placeholder:text-foreground/25"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-muted font-semibold block mb-2">Secteur d&apos;activité</label>
                    <select
                      value={form.sector}
                      onChange={(e) => setForm({ ...form, sector: e.target.value })}
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-[13px] outline-none focus:border-accent transition-colors text-foreground/70 appearance-none"
                    >
                      <option value="">Sélectionner...</option>
                      <option>Gestion de patrimoine / Family office</option>
                      <option>Banque privée</option>
                      <option>Cabinet d&apos;avocats / Étude juridique</option>
                      <option>Immobilier de luxe</option>
                      <option>Hôtellerie / Restauration</option>
                      <option>Commerce de luxe / Retail</option>
                      <option>Santé / Clinique privée</option>
                      <option>Services professionnels</option>
                      <option>Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-muted font-semibold block mb-2">Votre message *</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Décrivez brièvement votre contexte et vos enjeux..."
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-[13px] outline-none focus:border-accent transition-colors resize-none placeholder:text-foreground/25"
                    />
                  </div>

                  {error && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-[12px]">{error}</div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full bg-accent text-dark font-semibold px-6 py-3.5 rounded-xl text-[13px] hover:bg-accent-dark transition-all inline-flex items-center justify-center gap-2 shadow-lg shadow-accent/20 disabled:opacity-50"
                    >
                      {sending ? (
                        <>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-spin"><circle cx="12" cy="12" r="10" strokeDasharray="32" strokeDashoffset="12" /></svg>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          Envoyer le message
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-muted text-center">Réponse garantie sous 24 heures.</p>
                </form>
              )}
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
                    { n: "1", text: "Vous nous contactez via le formulaire ou WhatsApp" },
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
                <span className="text-[13px] text-foreground/70 font-medium">Principauté de Monaco</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
