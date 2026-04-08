import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import FAQ from "@/components/FAQ";
import FaqSchema from "@/components/FaqSchema";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IA pour les cliniques et le bien-etre a Monaco | Quanta AI",
  description:
    "Comptes rendus medicaux, dossiers patients, accreditations et communication multilingue automatises pour cliniques et centres de bien-etre a Monaco.",
  alternates: { canonical: "https://quantamonaco.com/secteurs/sante-cliniques" },
  openGraph: {
    title: "IA pour les cliniques et le bien-etre a Monaco | Quanta AI",
    description:
      "Comptes rendus medicaux, dossiers patients, accreditations et communication multilingue automatises pour cliniques et centres de bien-etre a Monaco.",
    url: "https://quantamonaco.com/secteurs/sante-cliniques",
    siteName: "Quanta",
    locale: "fr_FR",
    type: "website",
  },
};

const faqItems = [
  {
    q: "Les donnees de sante sont-elles protegees conformement a la reglementation monegasque ?",
    a: "Oui. Toutes les donnees sont hebergees dans un environnement securise conforme aux exigences de la Commission de Controle des Informations Nominatives (CCIN) de Monaco. Aucune donnee de sante n'est partagee avec des tiers ou utilisee pour entrainer des modeles externes. Les acces sont controles par roles, chaque action est tracee et nous signons un accord de confidentialite renforce avant toute intervention.",
  },
  {
    q: "L'agent de dictee medicale comprend-il le vocabulaire specialise ?",
    a: "L'agent est entraine sur du vocabulaire medical specialise et s'adapte au domaine de chaque praticien (dermatologie, cardiologie, chirurgie esthetique, ophtalmologie). Les termes techniques, les noms de medicaments et les nomenclatures sont reconnus avec un taux de precision superieur a 97 %. L'agent s'ameliore au fil des utilisations en apprenant les habitudes de dictee du praticien.",
  },
  {
    q: "Comment l'IA s'integre-t-elle avec notre logiciel de gestion medicale ?",
    a: "Nos agents s'integrent avec les principaux logiciels de gestion de cabinet et de clinique utilises a Monaco (Doctolib Pro, Cegedim, AxiSante, logiciels specifiques). L'integration se fait par API ou par connecteur securise. Le deploiement prend entre 2 et 4 semaines, incluant la phase de tests et la formation des equipes.",
  },
  {
    q: "L'IA gere-t-elle les specificites de la CCSS monegasque ?",
    a: "L'agent connait les formulaires et les procedures de la Caisse de Compensation des Services Sociaux de Monaco. Il peut pre-remplir les documents de prise en charge, verifier la conformite des codes actes et alerter le secretariat medical sur les pieces manquantes avant l'envoi du dossier a la CCSS, evitant les rejets et les retards de remboursement.",
  },
  {
    q: "Peut-on commencer par un seul cas d'usage avant de generaliser ?",
    a: "Absolument. Nous recommandons de commencer par le cas d'usage le plus impactant pour votre structure (generalement les comptes rendus automatises ou la communication patient multilingue), de mesurer les resultats sur 4 a 6 semaines, puis d'etendre progressivement a d'autres processus. Cette approche limite les risques et permet de valider le retour sur investissement avant de generaliser.",
  },
];

export default function SanteCliniquesPage() {
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
                Intelligence artificielle pour les cliniques et le bien-etre a Monaco
              </h1>
              <p className="text-foreground/60 text-[15px] leading-relaxed max-w-xl">
                Simplifiez la gestion des dossiers patients, automatisez vos comptes rendus et renforcez la communication avec vos patients grace a des agents IA conformes aux exigences de confidentialite medicale de la Principaute.
              </p>
            </div>

            {/* Illustration card */}
            <div className="hidden lg:block">
              <div className="animate-float">
                <div className="rounded-2xl bg-dark p-6 shadow-xl border border-white/[0.06]">
                  <div className="text-[9px] text-white/30 uppercase tracking-wider font-semibold mb-4">Tableau de bord clinique</div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-white/50">Temps de dictee</span>
                      <span className="text-[13px] text-accent font-bold">-87 %</span>
                    </div>
                    <div className="h-px bg-white/[0.06]" />
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-white/50">Langues patients</span>
                      <span className="text-[13px] text-accent font-bold">5</span>
                    </div>
                    <div className="h-px bg-white/[0.06]" />
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-white/50">Precision OCR</span>
                      <span className="text-[13px] text-accent font-bold">97 %</span>
                    </div>
                    <div className="h-px bg-white/[0.06]" />
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-white/50">Temps admin libere</span>
                      <span className="text-[13px] text-accent font-bold">10 h/sem</span>
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
                { v: 87, s: " %", p: "-", l: "temps de redaction" },
                { v: 5, s: "", p: "", l: "langues automatisees" },
                { v: 97, s: " %", p: "", l: "precision dictee" },
                { v: 10, s: " h/sem", p: "", l: "temps libere par praticien" },
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
                La Principaute abrite le Centre Hospitalier Princesse Grace, des cliniques privees specialisees en chirurgie esthetique, cardiologie et ophtalmologie, des cabinets de medecine esthetique parmi les plus reputes d&apos;Europe, ainsi que des centres de bien-etre haut de gamme comme les Thermes Marins de Monte-Carlo. Les professionnels de sante font face a des contraintes specifiques : respect de la CCIN, affiliation a la CCSS, exigences d&apos;accreditation et communications multilingues pour une patientele internationale.
              </p>
              <p className="text-foreground/60 text-[14px] leading-relaxed">
                L&apos;intelligence artificielle permet de restituer aux praticiens le temps que l&apos;administratif leur prend. La redaction automatique des comptes rendus reduit le temps de documentation de 15 minutes a moins de 2 minutes par consultation. L&apos;indexation intelligente des dossiers, la preparation des accreditations et la communication patient multilingue constituent des gains de productivite immediats, sans compromettre la securite des donnees de sante.
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
                <h3 className="text-[14px] font-semibold mb-2">Comptes rendus medicaux automatises</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Le praticien dicte ses observations. L&apos;agent transcrit, structure le compte rendu selon le format de la clinique, code selon la nomenclature et soumet pour validation. De 15 minutes a moins de 2 minutes par consultation.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Gestion intelligente des dossiers</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Indexation de l&apos;ensemble des documents du dossier patient avec recherche en langage naturel. Le praticien peut demander &quot;derniere HbA1c&quot; ou &quot;historique des interventions&quot; et obtenir la reponse instantanement.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Preparation des accreditations</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Collecte des indicateurs qualite, compilation des protocoles, identification des ecarts et generation d&apos;un pre-rapport structure. De plusieurs semaines a quelques jours de preparation.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Communication patient multilingue</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Rappels de rendez-vous, consignes pre-operatoires, protocoles post-intervention generes dans la langue du patient (français, anglais, italien, russe, arabe). Contenu medicalement precis et comprehensible.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Suivi post-consultation</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Questionnaires de suivi personnalises envoyes automatiquement selon le protocole. Analyse des reponses et remontee immediate des signaux d&apos;alerte au medecin avec niveau d&apos;urgence.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Consentements eclaires</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Formulaires de consentement personnalises pour chaque intervention, dans la langue du patient, avec risques specifiques et alternatives therapeutiques. Envoyes en amont pour une lecture sereine.
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
            <h2 className="text-xl font-bold mb-6">Gestion administrative classique vs IA medicale</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="p-7 rounded-2xl bg-surface border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-foreground/20" />
                  <span className="text-[11px] uppercase tracking-wider text-muted font-semibold">Sans IA</span>
                </div>
                <ul className="space-y-2">
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    15 minutes de redaction par compte rendu de consultation
                  </li>
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Recherche manuelle dans des dizaines de pages de dossier
                  </li>
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Communications patient uniquement en français
                  </li>
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Accreditations preparees sur plusieurs semaines
                  </li>
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Suivi post-operatoire par appels telephoniques manuels
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
                    Comptes rendus structures en moins de 2 minutes par dictee
                  </li>
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Recherche en langage naturel dans tout le dossier patient
                  </li>
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Communications automatiques en 5 langues
                  </li>
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Pre-rapports d&apos;accreditation generes en quelques jours
                  </li>
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Suivi automatise avec alertes sur signaux critiques
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
              <Link href="/expertise/developpement-ia-sur-mesure" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">IA sur mesure</Link>
              <Link href="/expertise/formation-ia" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Formation IA</Link>
              <Link href="/secteurs/services-professionnels" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Services professionnels</Link>
              <Link href="/secteurs/hotellerie-restauration" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Hotellerie-restauration</Link>
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
              Plus de temps pour vos patients, moins de temps sur l&apos;administratif
            </h2>
            <p className="text-foreground/60 text-[14px] mb-8">
              Echangeons sur les processus administratifs qui alourdissent votre quotidien. Nous vous montrerons comment l&apos;IA peut les simplifier sans compromettre la qualite des soins ni la confidentialite des donnees.
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
