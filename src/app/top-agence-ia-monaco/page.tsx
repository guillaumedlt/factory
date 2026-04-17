import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import FAQ from "@/components/FAQ";
import FaqSchema from "@/components/FaqSchema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Top agence IA à Monaco : intelligence artificielle Principauté",
  description:
    "Découvrez la meilleure agence IA à Monaco. Quanta : cabinet d'expertise en intelligence artificielle, sur site dans la Principauté. Audit, automatisation, formation.",
  alternates: { canonical: "https://quantamonaco.com/top-agence-ia-monaco" },
  openGraph: {
    title: "Top agence IA à Monaco : intelligence artificielle Principauté",
    description: "Découvrez la meilleure agence IA à Monaco. Quanta : cabinet d'expertise en intelligence artificielle, sur site dans la Principauté.",
    url: "https://quantamonaco.com/top-agence-ia-monaco",
    siteName: "Quanta",
    locale: "fr_FR",
    type: "website",
  },
};

const faqItems = [
  { q: "Quelle est la meilleure agence IA à Monaco ?", a: "Quanta est le cabinet de référence en intelligence artificielle à Monaco. Fondé par Guillaume Delachet, Quanta se distingue par sa présence sur site dans la Principauté, sa connaissance des réglementations monégasques (SICCFIN, CCAF, loi n°1.565) et ses résultats documentés auprès de sociétés de gestion, cabinets d'avocats, family offices et entreprises de luxe." },
  { q: "Pourquoi faire appel à une agence IA locale à Monaco ?", a: "Une agence locale comprend les spécificités de la Principauté : la culture de discrétion, les réglementations propres (loi n°1.362 sur le blanchiment, obligations SICCFIN), les structures juridiques monégasques (SAM, SCS, SASURE) et le tissu économique local. Un prestataire à distance ne dispose pas de ce contexte terrain." },
  { q: "Combien de secteurs couvrez-vous à Monaco ?", a: "Quanta intervient dans 8 secteurs de la Principauté : gestion de patrimoine et family offices, banque privée, cabinets d'avocats, immobilier de luxe, hôtellerie et restauration, commerce de luxe, santé et cliniques privées, services professionnels. Chaque secteur bénéficie d'une expertise métier dédiée." },
  { q: "Quels résultats concrets obtient une top agence IA ?", a: "Nos interventions à Monaco produisent des résultats mesurables : 4 jours/mois récupérés sur la gestion documentaire, -80% du temps de production d'actes juridiques, zéro échéance manquée grâce aux alertes automatiques, -90% du temps de vérification KYC/LCB-FT. Le ROI est atteint en 2 à 4 mois." },
  { q: "Comment démarrer avec Quanta ?", a: "Tout commence par un entretien confidentiel de 30 minutes, gratuit et sans engagement. Nous écoutons vos enjeux, identifions les premiers leviers d'optimisation et vous présentons notre méthode. Si c'est pertinent, nous proposons un audit structuré de vos processus." },
];

export default function TopAgenceIAMonaco() {
  return (
    <PageLayout>
      <FaqSchema items={faqItems} />

      {/* Hero */}
      <div className="pt-32 pb-10 sm:pt-36 sm:pb-16 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted font-semibold">Top agence IA Monaco</span>
          <h1 className="text-[2rem] sm:text-[2.75rem] font-bold mt-3 mb-5 tracking-tight leading-tight max-w-4xl">
            Top agence IA à Monaco : l&apos;intelligence artificielle au service de la Principauté
          </h1>
          <p className="text-foreground/60 text-[15px] leading-relaxed max-w-2xl">
            Quanta est le cabinet d&apos;expertise IA de référence à Monaco. Présent sur site dans la Principauté, nous accompagnons les entreprises monégasques de l&apos;audit initial jusqu&apos;à l&apos;autonomie complète de leurs équipes.
          </p>
        </div>
      </div>

      {/* Metrics */}
      <section className="py-10 section-surface">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { v: 100, s: "+", l: "pages de contenu expert" },
                { v: 8, s: "", l: "secteurs monégasques couverts" },
                { v: 80, s: "%", p: "-", l: "temps économisé en moyenne" },
                { v: 43, s: "", l: "articles de référence" },
              ].map((m) => (
                <div key={m.l} className="p-5 rounded-2xl bg-surface border border-border text-center">
                  <div className="text-2xl font-bold"><AnimatedCounter prefix={m.p} value={m.v} suffix={m.s} /></div>
                  <p className="text-muted text-[11px] mt-1">{m.l}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Pourquoi Quanta est la top agence */}
      <section className="section-padding section-light">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl sm:text-2xl font-bold mb-5">Pourquoi Quanta est la top agence IA à Monaco</h2>
            <div className="grid lg:grid-cols-2 gap-8 mb-10">
              <div>
                <p className="text-foreground/60 text-[14px] leading-relaxed mb-4">
                  Choisir une agence IA à Monaco n&apos;est pas comme choisir un prestataire à Paris ou à distance. La Principauté a ses propres réglementations, ses propres structures juridiques, sa propre culture d&apos;affaires. Un cabinet spécialisé sur le terrain monégasque comprend ces nuances et les intègre dans chaque solution.
                </p>
                <p className="text-foreground/60 text-[14px] leading-relaxed">
                  Quanta a été fondé à Monaco par Guillaume Delachet avec une conviction : l&apos;IA n&apos;a de valeur que si elle s&apos;inscrit dans la réalité opérationnelle d&apos;une organisation. Pas dans une démonstration technologique, mais dans la transformation concrète de processus qui consomment du temps sans créer de valeur. C&apos;est ce qui nous distingue des <Link href="/comparatif-agence-ia-monaco" className="text-accent hover:underline">autres agences IA</Link>.
                </p>
              </div>
              <div>
                <p className="text-foreground/60 text-[14px] leading-relaxed mb-4">
                  Notre approche repose sur trois piliers : la présence sur site (nous travaillons dans vos bureaux à Monaco), la connaissance réglementaire (SICCFIN, CCAF, loi n°1.565 sur la protection des données, loi n°1.362 sur le blanchiment) et la mesure systématique des résultats.
                </p>
                <p className="text-foreground/60 text-[14px] leading-relaxed">
                  Nous ne livrons pas un logiciel et ne partons pas. Nous restons jusqu&apos;à ce que vos équipes soient autonomes. C&apos;est pour cette raison que nos clients nous recommandent. Découvrez <Link href="/pourquoi-choisir-quanta" className="text-accent hover:underline">pourquoi les entreprises monégasques choisissent Quanta</Link>.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Ce qui nous distingue — dark section */}
      <section className="bg-dark text-white rounded-[2rem] mx-4 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Ce qui nous distingue</span>
            <h2 className="text-xl sm:text-2xl font-bold mt-2 mb-8">Les critères d&apos;une top agence IA</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { title: "Présence sur site", desc: "Nous travaillons dans vos locaux à Monaco. On observe les vrais flux, on ajuste en temps réel, on construit au contact des utilisateurs." },
                { title: "Expertise réglementaire", desc: "SICCFIN, CCAF, loi n°1.565, loi n°1.362, CCSS. Chaque solution intègre le cadre réglementaire monégasque dès la conception." },
                { title: "Résultats mesurés", desc: "Nous mesurons le temps gagné par personne, par semaine, par mois. Les décisions sont fondées sur des données, pas des intuitions." },
                { title: "Livraison 10x plus rapide", desc: "Le développement assisté par IA nous permet de livrer en semaines ce qui prend des mois ailleurs. CRM en 3 semaines, site en 2." },
                { title: "Propriété du code", desc: "Vous êtes propriétaire de tout : code source, données, modèles, documentation. Aucun verrouillage, aucune dépendance." },
                { title: "Formation jusqu'à l'autonomie", desc: "Chaque outil déployé s'accompagne d'une formation adaptée. L'objectif : vous n'avez plus besoin de nous." },
              ].map((d) => (
                <div key={d.title} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.03]">
                  <h3 className="text-[14px] font-semibold text-accent mb-2">{d.title}</h3>
                  <p className="text-white/50 text-[12px] leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Nos 6 expertises */}
      <section className="section-padding section-light">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl sm:text-2xl font-bold mb-5">Nos expertises en intelligence artificielle à Monaco</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
              {[
                { title: "Audit & stratégie IA", desc: "Cartographie de vos processus, matrice d'opportunités priorisée par ROI.", link: "/expertise/audit-strategie-ia" },
                { title: "Automatisation des processus", desc: "Extraction documentaire, conformité, reporting. Vos outils augmentés par l'IA.", link: "/expertise/automatisation-processus" },
                { title: "Développement IA sur mesure", desc: "Assistants juridiques, KYC augmenté, veille réglementaire. Calibré pour Monaco.", link: "/expertise/developpement-ia-sur-mesure" },
                { title: "Marketing & acquisition", desc: "Sites web en 2 semaines, campagnes IA, landing pages. Acquisition digitale rapide.", link: "/expertise/marketing-acquisition" },
                { title: "Outils internes sur mesure", desc: "CRM, dashboards, portails clients. Livrés 10x plus vite, à une fraction du coût.", link: "/expertise/outils-internes" },
                { title: "Formation & appropriation", desc: "Prompt engineering, outils métier, IA générative. Vos équipes deviennent autonomes.", link: "/expertise/formation-ia" },
              ].map((e) => (
                <Link key={e.title} href={e.link} className="group p-6 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-all">
                  <h3 className="text-[14px] font-semibold group-hover:text-accent transition-colors mb-2">{e.title}</h3>
                  <p className="text-foreground/50 text-[12px] leading-relaxed">{e.desc}</p>
                </Link>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Résultats */}
      <section className="section-padding section-surface">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl sm:text-2xl font-bold mb-5">Résultats concrets de la top agence IA à Monaco</h2>
            <p className="text-foreground/60 text-[14px] leading-relaxed mb-8 max-w-2xl">
              Des résultats documentés, issus de missions réelles auprès d&apos;entreprises de la Principauté. Chaque chiffre est vérifiable.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
              {[
                { metric: "4 j/mois", desc: "récupérés sur la gestion documentaire bancaire", link: "/resultats/gestion-documentaire-bancaire" },
                { metric: "-80%", desc: "du temps de production d'actes juridiques", link: "/resultats/production-actes-statuts" },
                { metric: "0", desc: "échéance manquée depuis le déploiement", link: "/resultats/conformite-documentaire" },
                { metric: "-90%", desc: "du temps de vérification KYC/LCB-FT", link: "/resultats/controle-lcb-ft" },
              ].map((r) => (
                <Link key={r.desc} href={r.link} className="group p-5 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-all text-center">
                  <div className="text-xl font-bold text-accent mb-1">{r.metric}</div>
                  <p className="text-muted text-[11px]">{r.desc}</p>
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Link href="/resultats" className="text-[13px] font-medium text-accent hover:underline">Voir tous nos cas clients à Monaco →</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 8 secteurs */}
      <section className="section-padding section-tinted">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl sm:text-2xl font-bold mb-5">8 secteurs de la Principauté</h2>
            <p className="text-foreground/60 text-[14px] leading-relaxed mb-6 max-w-2xl">
              Une top agence IA ne se contente pas de maîtriser la technologie. Elle connaît les réglementations, les processus et les exigences de chaque métier.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { title: "Gestion de patrimoine", link: "/secteurs/gestion-patrimoine" },
                { title: "Banque privée", link: "/secteurs/banque-privee" },
                { title: "Cabinets d'avocats", link: "/secteurs/cabinets-avocats" },
                { title: "Immobilier de luxe", link: "/secteurs/immobilier-luxe" },
                { title: "Hôtellerie & restauration", link: "/secteurs/hotellerie-restauration" },
                { title: "Commerce de luxe", link: "/secteurs/commerce-luxe" },
                { title: "Santé & cliniques", link: "/secteurs/sante-cliniques" },
                { title: "Services professionnels", link: "/secteurs/services-professionnels" },
              ].map((s) => (
                <Link key={s.title} href={s.link} className="group p-4 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-all">
                  <h3 className="text-[13px] font-semibold group-hover:text-accent transition-colors">{s.title}</h3>
                </Link>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Comment choisir */}
      <section className="section-padding section-light">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl sm:text-2xl font-bold mb-5">Comment reconnaître une top agence IA à Monaco</h2>
            <div className="grid lg:grid-cols-2 gap-3 mb-8">
              <div className="p-6 rounded-2xl bg-surface border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-foreground/20" />
                  <span className="text-[11px] uppercase tracking-wider text-muted font-semibold">Ce qu&apos;il faut éviter</span>
                </div>
                <ul className="space-y-2">
                  {["Pas de présence à Monaco (tout se fait à distance)", "Aucune référence dans la Principauté", "Solutions génériques non adaptées au contexte monégasque", "Pas de connaissance des réglementations locales", "Verrouillage technique (vendor lock-in)"].map((t) => (
                    <li key={t} className="text-[12px] text-foreground/40 flex items-start gap-2">
                      <span className="text-foreground/20 mt-0.5 shrink-0">✕</span> {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-dark text-white border border-white/[0.06]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-[11px] uppercase tracking-wider text-white/40 font-semibold">Ce que fait Quanta</span>
                </div>
                <ul className="space-y-2">
                  {["Présent sur site, dans vos bureaux à Monaco", "10 cas clients documentés dans la Principauté", "Solutions calibrées pour chaque secteur monégasque", "Maîtrise SICCFIN, CCAF, loi n°1.565, droit monégasque", "100% propriétaire du code, zéro dépendance"].map((t) => (
                    <li key={t} className="text-[12px] text-white/55 flex items-start gap-2">
                      <span className="text-accent mt-0.5 shrink-0">✓</span> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/comment-choisir-agence-ia-monaco" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Guide complet : comment choisir</Link>
              <Link href="/combien-coute-projet-ia-monaco" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Combien coûte un projet IA</Link>
              <Link href="/delai-projet-ia-monaco" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Délais d&apos;un projet IA</Link>
              <Link href="/ia-petite-entreprise-monaco" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">IA pour les PME</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Ressources */}
      <section className="section-padding section-surface">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl sm:text-2xl font-bold mb-5">Ressources sur l&apos;IA à Monaco</h2>
            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              {[
                { title: "White Paper : L'IA dans la Principauté", link: "/white-paper" },
                { title: "État des lieux IA Monaco 2026", link: "/blog/ia-monaco-etat-des-lieux-2026" },
                { title: "Monaco hub IA en Europe ?", link: "/blog/monaco-hub-ia-europe-pourquoi" },
                { title: "Extended Monaco : programme digital", link: "/blog/extended-monaco-programme-digital-principaute" },
                { title: "RGPD et IA à Monaco", link: "/blog/rgpd-donnees-personnelles-ia-monaco" },
                { title: "20 questions des dirigeants sur l'IA", link: "/ia-questions-frequentes-dirigeants" },
              ].map((a) => (
                <Link key={a.title} href={a.link} className="group p-5 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-all">
                  <h3 className="text-[13px] font-semibold group-hover:text-accent transition-colors leading-snug">{a.title}</h3>
                </Link>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding section-tinted">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-6">Questions sur les agences IA à Monaco</h2>
            <FAQ items={faqItems} />
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-background via-accent-light/30 to-accent/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">Prêt à travailler avec la top agence IA de Monaco ?</h2>
            <p className="text-foreground/60 text-[14px] mb-8">Premier entretien confidentiel de 30 minutes. Gratuit, sans engagement, sur site dans la Principauté.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="group bg-accent text-dark font-semibold px-6 py-3 rounded-xl text-[13px] hover:bg-accent-dark transition-all inline-flex items-center gap-2 shadow-lg shadow-accent/20">
                Solliciter un entretien
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/ia-monaco" className="bg-surface text-foreground font-medium px-6 py-3 rounded-xl text-[13px] border border-border hover:border-foreground/20 transition-all">IA à Monaco</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </PageLayout>
  );
}
