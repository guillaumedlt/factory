import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import FAQ from "@/components/FAQ";
import FaqSchema from "@/components/FaqSchema";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IA pour les services professionnels a Monaco | Quanta AI",
  description:
    "OCR, classement predictif, facturation, echeances et correspondance automatises pour cabinets comptables, fiduciaires et prestataires a Monaco.",
  alternates: { canonical: "https://quantamonaco.com/secteurs/services-professionnels" },
  openGraph: {
    title: "IA pour les services professionnels a Monaco | Quanta AI",
    description:
      "OCR, classement predictif, facturation, echeances et correspondance automatises pour cabinets comptables, fiduciaires et prestataires a Monaco.",
    url: "https://quantamonaco.com/secteurs/services-professionnels",
    siteName: "Quanta",
    locale: "fr_FR",
    type: "website",
  },
};

const faqItems = [
  {
    q: "L'agent connait-il les specificites fiscales monegasques ?",
    a: "Oui. L'agent est configure pour les particularites du regime fiscal de Monaco : absence d'impot sur le revenu pour les personnes physiques, IS a 25 % pour les societes depassant le seuil de CA hors Principaute, regime specifique de TVA, cotisations CCSS, formalites RCI. Les echeances, les formulaires et les regles de calcul sont integres et mis a jour regulierement.",
  },
  {
    q: "L'IA s'integre-t-elle avec notre logiciel comptable ?",
    a: "Nos agents sont compatibles avec les principaux logiciels comptables utilises en Principaute : Sage, Cegid, EBP, QuickBooks, Xero, ainsi que les outils specifiques monegasques. L'integration se fait par API ou par import/export automatise. Si votre logiciel n'est pas dans la liste, nous realisons un audit technique gratuit pour evaluer la faisabilite.",
  },
  {
    q: "Les documents de mes clients sont-ils en securite ?",
    a: "Toutes les donnees sont hebergees dans un environnement securise conforme aux exigences de la CCIN (Commission de Controle des Informations Nominatives) de Monaco. Aucune donnee client n'est partagee avec des tiers. Les acces sont controles par roles, chaque action est tracee et nous signons un accord de confidentialite avant toute intervention. Le chiffrement est applique en transit et au repos.",
  },
  {
    q: "Combien de temps faut-il pour deployer l'OCR et le classement automatique ?",
    a: "Le deploiement prend generalement entre 2 et 4 semaines. La premiere semaine est consacree a l'analyse de votre arborescence de classement et de vos modeles de documents. Les deux semaines suivantes couvrent la configuration, les tests sur un echantillon representatif et les ajustements. La derniere semaine est dediee a la formation des collaborateurs.",
  },
  {
    q: "Peut-on automatiser uniquement certains processus ?",
    a: "Bien sur. Nous recommandons de commencer par le processus le plus chronophage (souvent la saisie comptable ou le classement documentaire), de valider les resultats sur 4 a 6 semaines, puis d'etendre progressivement. Cette approche progressive permet de mesurer le retour sur investissement a chaque etape et de securiser l'adhesion des equipes.",
  },
];

export default function ServicesProfessionnelsPage() {
  return (
    <PageLayout>
      <FaqSchema items={faqItems} />

      {/* Hero */}
      <div className="pt-32 pb-10 sm:pt-36 sm:pb-16 section-surface">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_380px] gap-10 items-center">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted font-semibold">Secteur</span>
              <h1 className="text-[2rem] sm:text-[2.5rem] font-bold mt-3 mb-5 tracking-tight leading-tight">
                Intelligence artificielle pour les services professionnels a Monaco
              </h1>
              <p className="text-foreground/60 text-[15px] leading-relaxed max-w-xl">
                Automatisez la facturation, le classement documentaire et le suivi administratif de votre cabinet grace a des agents IA qui comprennent les specificites fiscales et reglementaires de la Principaute.
              </p>
            </div>

            {/* Illustration card */}
            <div className="hidden lg:block">
              <div className="animate-float">
                <div className="rounded-2xl bg-dark p-6 shadow-xl border border-white/[0.06]">
                  <div className="text-[9px] text-white/30 uppercase tracking-wider font-semibold mb-4">Tableau de bord cabinet</div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-white/50">Saisie comptable</span>
                      <span className="text-[13px] text-accent font-bold">-80 %</span>
                    </div>
                    <div className="h-px bg-white/[0.06]" />
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-white/50">Echeances manquees</span>
                      <span className="text-[13px] text-accent font-bold">0</span>
                    </div>
                    <div className="h-px bg-white/[0.06]" />
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-white/50">Precision OCR</span>
                      <span className="text-[13px] text-accent font-bold">98 %</span>
                    </div>
                    <div className="h-px bg-white/[0.06]" />
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-white/50">Temps libere</span>
                      <span className="text-[13px] text-accent font-bold">20 h/sem</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <section className="py-10 section-surface">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { v: 80, s: " %", p: "-", l: "temps de saisie" },
                { v: 0, s: "", p: "", l: "echeance manquee" },
                { v: 98, s: " %", p: "", l: "precision OCR" },
                { v: 20, s: " h/sem", p: "", l: "temps libere par cabinet" },
              ].map((m) => (
                <div key={m.l} className="p-5 rounded-2xl bg-surface border border-border text-center">
                  <div className="text-2xl font-bold"><AnimatedCounter value={m.v} suffix={m.s} prefix={m.p} /></div>
                  <p className="text-muted text-[11px] mt-1">{m.l}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Short intro */}
      <section className="section-padding section-light">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <div className="grid lg:grid-cols-2 gap-12">
              <p className="text-foreground/60 text-[14px] leading-relaxed">
                Monaco abrite une concentration remarquable de cabinets comptables, de fiduciaires, de societes de domiciliation et de prestataires de services aux entreprises. Ces structures gerent quotidiennement des volumes importants de documents : factures fournisseurs, releves bancaires, declarations fiscales, dossiers de constitution aupres du RCI et formalites aupres du Departement de l&apos;Interieur. La clientele internationale avec des structures juridiques complexes (SAM, SCS, SNC, succursales) multiplie les obligations declaratives.
              </p>
              <p className="text-foreground/60 text-[14px] leading-relaxed">
                L&apos;intelligence artificielle prend en charge les taches a faible valeur ajoutee avec une fiabilite superieure au traitement manuel. L&apos;OCR intelligent extrait les donnees avec plus de 98 % de precision, le classement predictif attribue chaque document au bon dossier, et le suivi des echeances garantit qu&apos;aucun delai n&apos;est depasse. Chaque agent est adapte aux particularites fiscales monegasques.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Use cases - dark bubble */}
      <section className="bg-dark text-white rounded-[2rem] mx-4 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-6">Ce que nous automatisons</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">OCR et saisie automatique</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Extraction des donnees de chaque facture fournisseur par reconnaissance optique avancee. Pre-saisie dans votre logiciel comptable et soumission pour validation. Temps de saisie reduit de plus de 80 %, taux d&apos;erreur sous les 2 %.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Classement predictif des documents</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Analyse de chaque document entrant, identification du client et du type, classement automatique dans votre arborescence. Les documents multi-clients sont dispatches vers chaque dossier concerne.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Suivi des echeances administratives</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Declarations fiscales, renouvellements, assemblees generales, depot des comptes au Greffe, formalites RCI : alertes sequentielles (J-30, J-15, J-7, J-1) pour garantir qu&apos;aucun delai n&apos;est depasse.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Facturation automatisee</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Generation des factures a partir de vos feuilles de temps ou baremes, application des conditions negociees, envoi avec lien de paiement. Relances automatiques a J+15 et J+30.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Correspondance administrative</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Redaction assistee des courriers aux administrations monegasques (Direction des Services Fiscaux, RCI, CCSS, Departement de l&apos;Interieur). Formulaires, delais et ton adaptes a chaque interlocuteur.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Rapprochement bancaire</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Import des releves, rapprochement automatique avec factures emises ou reçues, identification des ecarts et signalement des mouvements non rapproches. Le lettrage qui prenait des heures est boucle en minutes.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Comparison */}
      <section className="section-padding section-surface">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-6">Cabinet traditionnel vs cabinet augmente par l&apos;IA</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="p-7 rounded-2xl bg-surface border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-foreground/20" />
                  <span className="text-[11px] uppercase tracking-wider text-muted font-semibold">Sans IA</span>
                </div>
                <ul className="space-y-2">
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Saisie manuelle de chaque facture et releve
                  </li>
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Classement papier chronophage et sujet aux erreurs
                  </li>
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Echeances suivies par tableur avec risque d&apos;oubli
                  </li>
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Lettrage bancaire de plusieurs heures par client
                  </li>
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Collaborateurs mobilises sur la saisie plutot que le conseil
                  </li>
                </ul>
              </div>
              <div className="p-7 rounded-2xl bg-dark text-white border border-white/[0.06]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-[11px] uppercase tracking-wider text-white/40 font-semibold">Avec Quanta</span>
                </div>
                <ul className="space-y-2">
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    OCR intelligent avec 98 % de precision sur les factures
                  </li>
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Classement automatique au bon dossier et bonne categorie
                  </li>
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Zero echeance manquee grace aux alertes sequentielles
                  </li>
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Rapprochement bancaire en quelques minutes
                  </li>
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    20 h/semaine redirigees vers le conseil client
                  </li>
                </ul>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding section-tinted">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-6">Questions frequentes</h2>
            <FAQ items={faqItems} />
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="flex flex-wrap gap-3 mt-10">
              <Link href="/expertise/automatisation-processus" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Automatisation</Link>
              <Link href="/expertise/outils-internes" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Outils internes</Link>
              <Link href="/expertise/audit-strategie-ia" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Audit IA</Link>
              <Link href="/secteurs/cabinets-avocats" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Cabinets d&apos;avocats</Link>
              <Link href="/secteurs/banque-privee" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Banque privee</Link>
              <Link href="/secteurs/gestion-patrimoine" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Gestion de patrimoine</Link>
              <Link href="/resultats" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Resultats</Link>
              <Link href="/methode" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Methode</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-background via-accent-light/30 to-accent/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">
              Liberez vos equipes de la saisie, concentrez-les sur le conseil
            </h2>
            <p className="text-foreground/60 text-[14px] mb-8">
              Identifions ensemble les processus les plus chronophages de votre cabinet lors d&apos;un entretien de 30 minutes. Les premiers gains sont souvent visibles des les premieres semaines.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/33645636107"
                className="group bg-accent text-dark font-semibold px-6 py-3 rounded-xl text-[13px] hover:bg-accent-dark transition-all inline-flex items-center gap-2 shadow-lg shadow-accent/20"
              >
                Solliciter un entretien
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <Link
                href="/secteurs"
                className="bg-surface text-foreground font-medium px-6 py-3 rounded-xl text-[13px] border border-border hover:border-foreground/20 transition-all"
              >
                Tous nos secteurs
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </PageLayout>
  );
}
