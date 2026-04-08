import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import FAQ from "@/components/FAQ";
import FaqSchema from "@/components/FaqSchema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "L'IA dans la Principauté de Monaco : état des lieux, enjeux et feuille de route",
  description:
    "White paper Quanta. Analyse complète de l'écosystème monégasque face à l'intelligence artificielle. Données, cas d'usage, méthodologie et recommandations.",
  alternates: { canonical: "https://quantamonaco.com/white-paper" },
  openGraph: {
    title: "L'IA dans la Principauté de Monaco : état des lieux, enjeux et feuille de route",
    description: "White paper Quanta. Analyse complète de l'écosystème monégasque face à l'intelligence artificielle.",
    url: "https://quantamonaco.com/white-paper",
    siteName: "Quanta",
    locale: "fr_FR",
    type: "article",
  },
};

const faqItems = [
  { q: "Ce white paper est-il applicable à mon entreprise ?", a: "Oui, quelle que soit la taille de votre structure. Les recommandations sont calibrées pour les entreprises monégasques de 5 à 500 collaborateurs, avec des parcours adaptés selon votre maturité technologique." },
  { q: "Les chiffres cités sont-ils vérifiables ?", a: "Tous les chiffres proviennent soit de nos missions directes auprès d'entreprises de la Principauté, soit de sources institutionnelles (IMSEE, Extended Monaco, SICCFIN). Les estimations sont systématiquement conservatrices." },
  { q: "Comment démarrer concrètement après la lecture ?", a: "La dernière section propose une feuille de route en 4 phases. La première étape est un entretien de 30 minutes avec notre équipe pour évaluer votre situation. Gratuit et confidentiel." },
];

export default function WhitePaper() {
  return (
    <PageLayout>
      <FaqSchema items={faqItems} />

      {/* Hero */}
      <div className="pt-32 pb-16 sm:pt-36 sm:pb-20 bg-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-[10%] w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-[120px]" />
        <div className="max-w-4xl mx-auto px-6 relative">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1.5 rounded-md">White Paper</span>
            <span className="text-[11px] text-white/30">Mars 2026</span>
          </div>
          <h1 className="text-[2rem] sm:text-[2.75rem] font-bold tracking-tight leading-[1.08] mb-6">
            L&apos;intelligence artificielle dans la Principauté de Monaco
          </h1>
          <p className="text-white/50 text-[16px] leading-relaxed mb-8 max-w-2xl">
            État des lieux, enjeux sectoriels et feuille de route pour les entreprises monégasques. Une analyse de terrain, pas un rapport théorique.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-[12px] text-white/30">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-accent/15 flex items-center justify-center text-[9px] font-bold text-accent">GD</div>
              <span>Par Guillaume Delachet, Quanta</span>
            </div>
            <span>·</span>
            <span>25 min de lecture</span>
            <span>·</span>
            <span>Données terrain + sources institutionnelles</span>
          </div>
        </div>
      </div>

      {/* Table des matières */}
      <section className="py-10 section-surface">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <div className="p-6 rounded-2xl bg-surface border border-border">
              <h2 className="text-[13px] font-bold mb-4 uppercase tracking-wider text-muted">Sommaire</h2>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                {[
                  ["1", "Monaco face à la révolution IA"],
                  ["2", "L'écosystème économique de la Principauté"],
                  ["3", "Les secteurs clés et leur maturité IA"],
                  ["4", "Le cadre réglementaire monégasque"],
                  ["5", "Les freins à l'adoption"],
                  ["6", "Ce que l'IA change concrètement"],
                  ["7", "Cas d'usage par secteur"],
                  ["8", "Le coût de l'inaction"],
                  ["9", "Feuille de route : par où commencer"],
                  ["10", "Conclusion et recommandations"],
                ].map(([n, t]) => (
                  <a key={n} href={`#section-${n}`} className="flex items-center gap-3 py-1.5 text-[13px] text-foreground/60 hover:text-accent transition-colors">
                    <span className="text-accent font-bold text-[11px] w-5">{n}.</span>
                    {t}
                  </a>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== SECTION 1: Monaco face à la révolution IA ===== */}
      <section id="section-1" className="section-padding section-light">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-accent text-[11px] font-bold uppercase tracking-wider">Chapitre 1</span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-2 mb-6 tracking-tight">Monaco face à la révolution IA</h2>
            <p className="text-foreground/60 text-[15px] leading-relaxed mb-5">
              La Principauté de Monaco occupe une position singulière dans le paysage mondial de l&apos;intelligence artificielle. Avec 39 000 habitants, un PIB par habitant parmi les plus élevés au monde et une concentration exceptionnelle de secteurs à forte valeur ajoutée, Monaco réunit paradoxalement toutes les conditions pour être un territoire pilote de l&apos;IA en entreprise.
            </p>
            <p className="text-foreground/60 text-[15px] leading-relaxed mb-5">
              Pourtant, en 2026, la majorité des entreprises monégasques fonctionnent encore sur des processus conçus avant l&apos;émergence des modèles de langage. Les sociétés de gestion impriment des centaines de relevés bancaires chaque mois. Les cabinets d&apos;avocats rédigent des statuts de sociétés en partant d&apos;une page blanche. Les hôtels de luxe répondent manuellement à chaque avis client sur cinq plateformes différentes.
            </p>
            <p className="text-foreground/60 text-[15px] leading-relaxed mb-8">
              Ce n&apos;est pas un retard technologique. C&apos;est une opportunité structurelle. Les entreprises qui intègreront l&apos;IA avec méthode dans les 12 prochains mois disposeront d&apos;un avantage concurrentiel durable sur un marché où la qualité de service est le premier critère de différenciation.
            </p>
          </RevealOnScroll>

          {/* Illustration: Monaco en chiffres */}
          <RevealOnScroll delay={100}>
            <div className="rounded-2xl bg-dark text-white p-8 mb-8">
              <h3 className="text-[11px] uppercase tracking-wider text-accent font-semibold mb-6">La Principauté en chiffres</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { v: 39000, s: "", l: "habitants" },
                  { v: 58000, s: "+", l: "emplois (salariés)" },
                  { v: 8, s: " Md€", l: "PIB (2024)" },
                  { v: 900, s: "+", l: "sociétés de services financiers" },
                ].map((m) => (
                  <div key={m.l} className="text-center">
                    <div className="text-2xl font-bold text-accent"><AnimatedCounter value={m.v} suffix={m.s} /></div>
                    <div className="text-[11px] text-white/40 mt-1">{m.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== SECTION 2: Écosystème économique ===== */}
      <section id="section-2" className="section-padding section-surface">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-accent text-[11px] font-bold uppercase tracking-wider">Chapitre 2</span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-2 mb-6 tracking-tight">L&apos;écosystème économique de la Principauté</h2>
            <p className="text-foreground/60 text-[15px] leading-relaxed mb-5">
              Monaco concentre sur 2 km² une densité d&apos;activités économiques sans équivalent en Europe. Le secteur financier (banques privées, sociétés de gestion, family offices) représente à lui seul plus de 15% du PIB. Le commerce de luxe, l&apos;immobilier, l&apos;hôtellerie haut de gamme et les services professionnels constituent les autres piliers d&apos;une économie tournée vers l&apos;excellence de service.
            </p>
            <p className="text-foreground/60 text-[15px] leading-relaxed mb-8">
              Cette concentration sectorielle crée un terreau idéal pour l&apos;IA : des entreprises de taille humaine (10 à 100 collaborateurs), des processus documentaires lourds, des exigences réglementaires fortes (SICCFIN, CCAF, loi n°1.362 sur le blanchiment) et une clientèle qui attend un service irréprochable. L&apos;IA n&apos;est pas ici un gadget technologique. C&apos;est un levier de compétitivité directe.
            </p>
          </RevealOnScroll>

          {/* Illustration: répartition sectorielle */}
          <RevealOnScroll delay={100}>
            <div className="rounded-2xl bg-surface border border-border p-8 mb-8">
              <h3 className="text-[11px] uppercase tracking-wider text-muted font-semibold mb-6">Répartition du tissu économique monégasque</h3>
              <div className="space-y-4">
                {[
                  { sector: "Services financiers & gestion de patrimoine", pct: 28, color: "bg-accent" },
                  { sector: "Commerce & retail de luxe", pct: 18, color: "bg-accent/70" },
                  { sector: "Immobilier & promotion", pct: 15, color: "bg-accent/55" },
                  { sector: "Hôtellerie, restauration & événementiel", pct: 14, color: "bg-accent/45" },
                  { sector: "Services professionnels & juridiques", pct: 12, color: "bg-accent/35" },
                  { sector: "Santé, bien-être & cliniques", pct: 8, color: "bg-accent/25" },
                  { sector: "Autres", pct: 5, color: "bg-accent/15" },
                ].map((s) => (
                  <div key={s.sector}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-[12px] text-foreground/60">{s.sector}</span>
                      <span className="text-[12px] font-bold text-foreground">{s.pct}%</span>
                    </div>
                    <div className="h-3 rounded-full bg-surface-dark overflow-hidden">
                      <div className={`h-full rounded-full ${s.color}`} style={{ width: `${s.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== SECTION 3: Maturité IA par secteur ===== */}
      <section id="section-3" className="bg-dark text-white rounded-[2rem] mx-4 py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-accent text-[11px] font-bold uppercase tracking-wider">Chapitre 3</span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-2 mb-6 tracking-tight">Les secteurs clés et leur maturité IA</h2>
            <p className="text-white/50 text-[15px] leading-relaxed mb-8">
              Tous les secteurs de la Principauté ne sont pas au même stade d&apos;adoption. Voici notre évaluation terrain, basée sur nos interventions directes et nos échanges avec les dirigeants monégasques.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className="space-y-3">
              {[
                { sector: "Gestion de patrimoine & SGP", maturity: 35, status: "En mouvement", detail: "Les pionniers automatisent la collecte documentaire et le reporting SICCFIN. La majorité reste sur Excel. Le potentiel est considérable : 4 à 7 jours/mois récupérables par collaborateur.", link: "/secteurs/gestion-patrimoine" },
                { sector: "Banque privée", maturity: 25, status: "Exploration", detail: "Le KYC augmenté et le scoring de risque intéressent, mais les contraintes réglementaires ralentissent. Les banques qui bougent constatent -60% du temps de vérification.", link: "/secteurs/banque-privee" },
                { sector: "Cabinets d'avocats", maturity: 20, status: "Émergent", detail: "Quelques cabinets testent la rédaction assistée d'actes. Les outils RAG formés au droit monégasque (SASURE, SAM) montrent des gains de -80% sur la production de statuts.", link: "/secteurs/cabinets-avocats" },
                { sector: "Immobilier de luxe", maturity: 10, status: "Pré-adoption", detail: "Le matching acheteurs-biens par IA et la génération de brochures automatisée sont des cas d'usage immédiats. Peu d'acteurs ont franchi le pas.", link: "/secteurs/immobilier-luxe" },
                { sector: "Hôtellerie & restauration", maturity: 15, status: "Fragmenté", detail: "Les grands groupes hôteliers commencent (yield management, chatbots). Les indépendants et restaurants de la Principauté sont encore en phase de sensibilisation.", link: "/secteurs/hotellerie-restauration" },
                { sector: "Commerce de luxe", maturity: 12, status: "Naissant", detail: "Le CRM augmenté et la personnalisation par IA sont pertinents pour le Carré d'Or, mais l'adoption est quasi nulle. Le marché est prêt, les outils existent.", link: "/secteurs/commerce-luxe" },
              ].map((s) => (
                <Link key={s.sector} href={s.link} className="group block p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-accent/20 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[14px] font-semibold group-hover:text-accent transition-colors">{s.sector}</h3>
                    <span className="text-[10px] text-accent bg-accent/10 px-2.5 py-1 rounded-md font-medium">{s.status}</span>
                  </div>
                  <p className="text-white/40 text-[12px] leading-relaxed mb-3">{s.detail}</p>
                  <div className="flex items-center gap-3">
                    <div className="h-2 flex-1 rounded-full bg-white/[0.06] overflow-hidden">
                      <div className="h-full rounded-full bg-accent/50" style={{ width: `${s.maturity}%` }} />
                    </div>
                    <span className="text-[11px] text-accent font-bold">{s.maturity}%</span>
                  </div>
                </Link>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== SECTION 4: Cadre réglementaire ===== */}
      <section id="section-4" className="section-padding section-light">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-accent text-[11px] font-bold uppercase tracking-wider">Chapitre 4</span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-2 mb-6 tracking-tight">Le cadre réglementaire monégasque</h2>
            <p className="text-foreground/60 text-[15px] leading-relaxed mb-5">
              Monaco n&apos;est pas soumis au AI Act européen, mais son cadre réglementaire impose des contraintes spécifiques que toute solution IA doit intégrer. La loi n°1.565 sur la protection des données personnelles (équivalent RGPD), les obligations SICCFIN en matière de lutte contre le blanchiment, et les exigences de la CCAF créent un environnement où la conformité n&apos;est pas optionnelle.
            </p>
            <p className="text-foreground/60 text-[15px] leading-relaxed mb-8">
              Cette réalité est un atout pour les entreprises qui choisissent des solutions IA conformes : elles peuvent démontrer à leurs clients que leurs données sont traitées selon les standards les plus exigeants. C&apos;est un argument commercial puissant dans un marché où la discrétion est une valeur fondamentale.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className="grid sm:grid-cols-3 gap-3 mb-8">
              {[
                { title: "Loi n°1.565", desc: "Protection des données personnelles. Équivalent RGPD avec des spécificités monégasques. Toute solution IA doit garantir la localisation et la sécurisation des données." },
                { title: "SICCFIN", desc: "Service d'Information et de Contrôle sur les Circuits Financiers. Obligations de déclaration, screening PEP/sanctions, traçabilité des opérations." },
                { title: "CCAF / AMSF", desc: "Commission de Contrôle des Activités Financières. Supervision des acteurs régulés. Exigences de conformité, audits réguliers, reporting obligatoire." },
              ].map((r) => (
                <div key={r.title} className="p-6 rounded-2xl bg-surface border border-border">
                  <h3 className="text-[14px] font-bold mb-2 text-accent">{r.title}</h3>
                  <p className="text-foreground/50 text-[12px] leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== SECTION 5: Freins à l'adoption ===== */}
      <section id="section-5" className="section-padding section-surface">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-accent text-[11px] font-bold uppercase tracking-wider">Chapitre 5</span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-2 mb-6 tracking-tight">Les freins à l&apos;adoption : pourquoi Monaco hésite</h2>
            <p className="text-foreground/60 text-[15px] leading-relaxed mb-8">
              Nos entretiens avec des dizaines de dirigeants monégasques révèlent quatre freins récurrents. Aucun n&apos;est insurmontable.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                { num: "01", title: "La taille des équipes", desc: "Les entreprises monégasques ont des équipes restreintes (5 à 50 personnes). Chaque collaborateur porte plusieurs casquettes. Personne n'a le temps de 'faire de l'IA'. C'est précisément pour cette raison que l'IA est pertinente : elle permet à une petite équipe de produire le travail de trois.", bar: 85 },
                { num: "02", title: "La culture du sur-mesure", desc: "À Monaco, chaque client est unique. Les dirigeants craignent que l'IA standardise leur service. En réalité, l'IA permet l'inverse : personnaliser à grande échelle. Un rapport client généré par IA peut être plus personnalisé qu'un rapport fait à la main, parce qu'il intègre plus de données.", bar: 70 },
                { num: "03", title: "La confidentialité", desc: "La discrétion est le fondement du business monégasque. Les dirigeants veulent savoir où vont leurs données. C'est légitime. Les solutions IA modernes permettent un hébergement européen, un chiffrement de bout en bout, et une isolation complète des données client.", bar: 90 },
                { num: "04", title: "Le déficit de talents", desc: "Il n'y a pas assez d'ingénieurs IA à Monaco. C'est vrai. Mais il n'est plus nécessaire d'avoir une équipe technique interne pour déployer l'IA. Les outils no-code/low-code et les cabinets spécialisés permettent de livrer des solutions opérationnelles sans recrutement.", bar: 60 },
              ].map((f) => (
                <div key={f.num} className="p-6 rounded-2xl bg-surface border border-border">
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center text-[10px] font-bold text-accent">{f.num}</span>
                    <h3 className="text-[14px] font-semibold">{f.title}</h3>
                  </div>
                  <p className="text-foreground/50 text-[12px] leading-relaxed mb-4">{f.desc}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-muted">Impact perçu</span>
                    <div className="h-1.5 flex-1 rounded-full bg-surface-dark overflow-hidden">
                      <div className="h-full rounded-full bg-accent/40" style={{ width: `${f.bar}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== SECTION 6: Ce que l'IA change concrètement ===== */}
      <section id="section-6" className="bg-dark text-white rounded-[2rem] mx-4 py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-accent text-[11px] font-bold uppercase tracking-wider">Chapitre 6</span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-2 mb-6 tracking-tight">Ce que l&apos;IA change concrètement</h2>
            <p className="text-white/50 text-[15px] leading-relaxed mb-5">
              L&apos;intelligence artificielle n&apos;est pas une révolution abstraite. Pour une entreprise monégasque, elle se traduit par des gains mesurables sur trois dimensions.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className="grid sm:grid-cols-3 gap-3 mb-10">
              {[
                { metric: "60%", label: "du temps administratif est automatisable", desc: "Collecte documentaire, classement, vérification, rapprochement, reporting. Ces tâches représentent souvent la majorité du temps de travail dans les services de back-office monégasques." },
                { metric: "80%", label: "de réduction sur la production documentaire", desc: "Statuts de société, rapports clients, courriers formalisés, dossiers de présentation. L'IA génère un premier jet en minutes au lieu d'heures." },
                { metric: "3 mois", label: "avant les premiers résultats mesurables", desc: "Contrairement aux projets IT traditionnels qui s'étalent sur des années, les solutions IA modernes produisent de la valeur dès le premier mois de déploiement." },
              ].map((m) => (
                <div key={m.label} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] text-center">
                  <div className="text-3xl font-bold text-accent mb-2">{m.metric}</div>
                  <div className="text-[12px] font-semibold text-white/70 mb-3">{m.label}</div>
                  <p className="text-white/35 text-[11px] leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <blockquote className="border-l-3 border-accent pl-6 py-2 mb-4">
              <p className="text-white/60 text-[15px] leading-relaxed italic">
                &laquo; L&apos;IA ne remplace pas l&apos;expertise humaine. Elle la démultiplie. Un gérant qui passe 4 jours par mois à télécharger des PDFs ne fait pas son métier. Il fait celui d&apos;une machine. &raquo;
              </p>
            </blockquote>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== SECTION 7: Cas d'usage par secteur ===== */}
      <section id="section-7" className="section-padding section-light">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-accent text-[11px] font-bold uppercase tracking-wider">Chapitre 7</span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-2 mb-6 tracking-tight">Cas d&apos;usage concrets par secteur</h2>
            <p className="text-foreground/60 text-[15px] leading-relaxed mb-8">
              Voici les cas d&apos;usage les plus rentables que nous avons identifiés et déployés dans la Principauté. Chaque ligne est un projet réel ou un potentiel validé par notre audit terrain.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className="space-y-3 mb-8">
              {[
                { sector: "Gestion de patrimoine", cases: ["Collecte et classement automatique de 150+ relevés bancaires/mois", "Échéancier obligataire généré en 1 clic", "Reporting SICCFIN automatisé", "Facturation sur encours avec contrôle TVA", "Alertes KYC (passeports, titres de séjour)"], gain: "4 à 7 jours/mois par collaborateur", link: "/resultats" },
                { sector: "Cabinets d'avocats", cases: ["Rédaction de statuts SASURE/SAM en 5 minutes", "Recherche juridique multi-juridictions par RAG", "Transcription et synthèse d'audiences", "Base documentaire propriétaire avec recherche sémantique"], gain: "-80% du temps de production d'actes", link: "/secteurs/cabinets-avocats" },
                { sector: "Immobilier de luxe", cases: ["Brochures de présentation générées automatiquement", "Matching acheteurs-biens par critères IA", "Suivi automatisé des échéances contractuelles", "Veille urbanistique de la Principauté"], gain: "45 min par dossier au lieu d'1 jour", link: "/secteurs/immobilier-luxe" },
                { sector: "Hôtellerie", cases: ["Analyse de sentiment sur les avis clients (5 plateformes)", "Réponses pré-rédigées multilingues", "Yield management augmenté", "Contenus marketing saisonniers générés par IA"], gain: "Réponse en 4h au lieu de 72h", link: "/secteurs/hotellerie-restauration" },
              ].map((s) => (
                <Link key={s.sector} href={s.link} className="group block p-6 rounded-2xl bg-surface border border-border hover:border-accent/20 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[14px] font-semibold group-hover:text-accent transition-colors">{s.sector}</h3>
                    <span className="text-[11px] font-bold text-accent">{s.gain}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {s.cases.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-[12px] text-foreground/50 leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-accent mt-[6px] shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </Link>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== SECTION 8: Le coût de l'inaction ===== */}
      <section id="section-8" className="section-padding section-surface">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-accent text-[11px] font-bold uppercase tracking-wider">Chapitre 8</span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-2 mb-6 tracking-tight">Le coût de l&apos;inaction</h2>
            <p className="text-foreground/60 text-[15px] leading-relaxed mb-5">
              Ne pas adopter l&apos;IA n&apos;est pas gratuit. C&apos;est un choix qui a un coût mesurable. Pour une société de gestion monégasque de 15 collaborateurs, le temps perdu sur des tâches automatisables représente l&apos;équivalent de 2 à 3 salaires à temps plein par an.
            </p>
            <p className="text-foreground/60 text-[15px] leading-relaxed mb-8">
              Les concurrents qui automatisent aujourd&apos;hui ne font pas que gagner du temps. Ils libèrent de la capacité pour acquérir de nouveaux clients, améliorer leur service, et attirer les meilleurs talents. L&apos;écart se creuse chaque trimestre.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              <div className="p-6 rounded-2xl bg-surface border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-foreground/20" />
                  <span className="text-[11px] uppercase tracking-wider text-muted font-semibold">Sans IA (statu quo)</span>
                </div>
                <ul className="space-y-2">
                  {["~20 jours/mois perdus en tâches automatisables", "Erreurs humaines récurrentes (TVA, classement, échéances)", "Incapacité à scaler sans recruter", "Risque de non-conformité sur les échéances réglementaires", "Perte de compétitivité face aux concurrents automatisés"].map((t) => (
                    <li key={t} className="text-[12px] text-foreground/40 flex items-start gap-2">
                      <span className="text-foreground/20 mt-0.5 shrink-0">✕</span> {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-dark text-white border border-white/[0.06]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-[11px] uppercase tracking-wider text-white/40 font-semibold">Avec IA (à 12 mois)</span>
                </div>
                <ul className="space-y-2">
                  {["20+ jours/mois réalloués à la relation client", "Zéro erreur sur les processus automatisés", "Capacité à servir 2x plus de clients sans recruter", "Conformité garantie avec alertes automatiques", "Avantage structurel sur les concurrents"].map((t) => (
                    <li key={t} className="text-[12px] text-white/55 flex items-start gap-2">
                      <span className="text-accent mt-0.5 shrink-0">✓</span> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== SECTION 9: Feuille de route ===== */}
      <section id="section-9" className="bg-dark text-white rounded-[2rem] mx-4 py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-accent text-[11px] font-bold uppercase tracking-wider">Chapitre 9</span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-2 mb-6 tracking-tight">Feuille de route : par où commencer</h2>
            <p className="text-white/50 text-[15px] leading-relaxed mb-8">
              La transformation IA ne commence pas par la technologie. Elle commence par la compréhension de vos processus. Voici le parcours que nous recommandons.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                { phase: "Mois 1-2", title: "Immersion & diagnostic", items: ["Audit de vos processus métier", "Entretiens avec chaque collaborateur", "Cartographie des opportunités", "Matrice ROI priorisée"], link: "/expertise/audit-strategie-ia" },
                { phase: "Mois 2-3", title: "Quick wins", items: ["Déploiement des leviers à fort impact", "Premiers résultats mesurables", "Validation de l'approche", "Ajustements terrain"], link: "/methode" },
                { phase: "Mois 3-6", title: "Transformation", items: ["Solutions structurantes", "Développements sur mesure", "Intégration aux outils existants", "Formation des équipes"], link: "/expertise/automatisation-processus" },
                { phase: "Mois 6+", title: "Autonomie", items: ["Transfert de compétences complet", "Documentation et guides internes", "Indicateurs de suivi", "Support ponctuel si nécessaire"], link: "/expertise/formation-ia" },
              ].map((p) => (
                <Link key={p.phase} href={p.link} className="group p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-accent/20 transition-all">
                  <span className="text-[10px] text-accent font-bold uppercase tracking-wider">{p.phase}</span>
                  <h3 className="text-[15px] font-semibold mt-1 mb-3 group-hover:text-accent transition-colors">{p.title}</h3>
                  <ul className="space-y-1.5">
                    {p.items.map((i) => (
                      <li key={i} className="flex items-start gap-2 text-[11px] text-white/40">
                        <span className="w-1 h-1 rounded-full bg-accent mt-[5px] shrink-0" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </Link>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== SECTION 10: Conclusion ===== */}
      <section id="section-10" className="section-padding section-light">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-accent text-[11px] font-bold uppercase tracking-wider">Conclusion</span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-2 mb-6 tracking-tight">Ne pas avoir peur du changement</h2>
            <p className="text-foreground/60 text-[15px] leading-relaxed mb-5">
              L&apos;intelligence artificielle n&apos;est pas une menace pour les entreprises monégasques. C&apos;est l&apos;outil qui leur permettra de maintenir leur niveau d&apos;excellence dans un monde qui accélère. Les processus manuels qui fonctionnaient hier ne suffiront plus demain.
            </p>
            <p className="text-foreground/60 text-[15px] leading-relaxed mb-5">
              Les entreprises qui réussiront ne sont pas celles qui ont le plus gros budget technologique. Ce sont celles qui comprennent que l&apos;IA est un outil au service de leur métier, pas une fin en soi. Un family office qui automatise sa collecte documentaire ne devient pas une entreprise tech. Il devient un family office plus efficace, plus fiable, plus disponible pour ses clients.
            </p>
            <p className="text-foreground/80 text-[15px] leading-relaxed font-medium mb-8">
              Le moment est maintenant. Les outils sont matures, les coûts sont accessibles, et les gains sont mesurables dès les premières semaines. Il ne manque qu&apos;une décision.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className="grid sm:grid-cols-3 gap-3 mb-8">
              {[
                { v: 45, s: "", l: "pages et cas d'usage sur notre site", link: "/expertise" },
                { v: 10, s: "", l: "cas clients documentés", link: "/resultats" },
                { v: 10, s: "", l: "articles de fond sur le blog", link: "/blog" },
              ].map((m) => (
                <Link key={m.l} href={m.link} className="group p-5 rounded-2xl bg-surface border border-border text-center hover:border-accent/20 transition-all">
                  <div className="text-2xl font-bold"><AnimatedCounter value={m.v} suffix={m.s} /></div>
                  <p className="text-muted text-[11px] mt-1 group-hover:text-accent transition-colors">{m.l}</p>
                </Link>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding section-tinted">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-6">Questions fréquentes</h2>
            <FAQ items={faqItems} />
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className="flex flex-wrap gap-3 mt-10">
              <Link href="/expertise" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Nos expertises</Link>
              <Link href="/secteurs" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Secteurs</Link>
              <Link href="/resultats" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Résultats</Link>
              <Link href="/tarifs" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Tarifs</Link>
              <Link href="/blog" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Blog</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-background via-accent-light/30 to-accent/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">Prêt à passer à l&apos;action ?</h2>
            <p className="text-foreground/60 text-[14px] mb-8">Premier entretien confidentiel de 30 minutes. Gratuit, sans engagement.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="group bg-accent text-dark font-semibold px-6 py-3 rounded-xl text-[13px] hover:bg-accent-dark transition-all inline-flex items-center gap-2 shadow-lg shadow-accent/20">
                Solliciter un entretien
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/expertise" className="bg-surface text-foreground font-medium px-6 py-3 rounded-xl text-[13px] border border-border hover:border-foreground/20 transition-all">
                Explorer nos expertises
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </PageLayout>
  );
}
