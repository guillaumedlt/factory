import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import FAQ from "@/components/FAQ";
import FaqSchema from "@/components/FaqSchema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Agents IA à Monaco : automatisation intelligente Principauté",
  description:
    "Déployez des agents IA autonomes dans votre entreprise à Monaco. Tâches complexes 24/7 : conformité, reporting, prospection, OCR documentaire.",
  alternates: { canonical: "https://quantamonaco.com/agents-ia-monaco" },
  openGraph: {
    title: "Agents IA à Monaco : automatisation intelligente Principauté",
    description: "Déployez des agents IA autonomes dans votre entreprise à Monaco. Tâches complexes 24/7 : conformité, reporting, prospection, OCR documentaire.",
    url: "https://quantamonaco.com/agents-ia-monaco",
    siteName: "Quanta",
    locale: "fr_FR",
    type: "website",
  },
};

const faqItems = [
  { q: "Qu'est-ce qu'un agent IA exactement ?", a: "Un agent IA est un programme autonome qui combine un modèle de langage (Claude, GPT-4) avec des outils concrets : accès à vos emails, votre CRM, vos fichiers, vos bases de données. Contrairement à un chatbot qui se contente de répondre à des questions, un agent IA exécute des tâches complètes de bout en bout, sans intervention humaine sur les étapes intermédiaires." },
  { q: "Les agents IA sont-ils fiables pour des tâches critiques ?", a: "Nous concevons chaque agent avec un système de validation humaine sur les décisions critiques. L'agent traite 95% du travail en autonomie, et soumet les cas ambigus à un collaborateur. Pour la conformité LCB-FT par exemple, l'agent fait le screening complet et ne demande une intervention que sur les cas à risque moyen ou élevé." },
  { q: "Combien coûte le déploiement d'un agent IA à Monaco ?", a: "Un agent IA simple (monitoring, alertes, classification) démarre à partir de 8 000 €. Un agent complexe multi-outils (conformité complète, prospection multicanale) se situe entre 15 000 et 35 000 €. Le coût d'exploitation mensuel est de 50 à 200 € selon le volume de tâches. Le ROI est généralement atteint en 6 à 10 semaines." },
  { q: "Les agents IA respectent-ils la confidentialité des données à Monaco ?", a: "Absolument. Chaque agent est déployé dans un environnement conforme à la loi n°1.565 monégasque et au RGPD. Les données sont hébergées en Europe, chiffrées en transit et au repos. Nous signons un accord de confidentialité avant chaque mission. Les agents n'envoient jamais de données vers des tiers non autorisés." },
  { q: "Quelle est la différence entre automatisation et agent IA ?", a: "L'automatisation classique (Make, n8n, Zapier) suit des règles prédéfinies : si X alors Y. Un agent IA comprend le contexte, s'adapte aux cas imprévus, et prend des décisions intelligentes. Par exemple : un workflow automatique rejette un document mal formaté. Un agent IA le reformate, extrait les données quand même, et signale l'anomalie. C'est la différence entre un robot et un collaborateur digital." },
];

export default function AgentsIAMonaco() {
  return (
    <PageLayout>
      <FaqSchema items={faqItems} />

      {/* Hero */}
      <div className="pt-32 pb-10 sm:pt-36 sm:pb-16 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted font-semibold">Agents IA Monaco</span>
          <h1 className="text-[2rem] sm:text-[2.75rem] font-bold mt-3 mb-5 tracking-tight leading-tight max-w-4xl">
            Agents IA à Monaco : des collaborateurs digitaux qui travaillent 24/7
          </h1>
          <p className="text-foreground/60 text-[15px] leading-relaxed max-w-2xl mb-6">
            Les agents IA ne se contentent plus de répondre à des questions. Ils exécutent des tâches complètes en autonomie : screening de conformité, collecte documentaire, prospection commerciale, reporting automatique. Quanta conçoit et déploie des agents IA sur mesure pour les entreprises de la Principauté.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="group bg-accent text-dark font-semibold px-6 py-3 rounded-xl text-[13px] hover:bg-accent-dark transition-all inline-flex items-center gap-2 shadow-lg shadow-accent/20">
              Déployer un agent IA
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/blog/agent-ia-autonome-entreprise-monaco" className="text-foreground/60 font-medium px-4 py-3 rounded-xl text-[13px] hover:text-foreground transition-colors inline-flex items-center gap-1.5">
              Lire l&apos;article complet
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <section className="py-10 section-surface">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { v: 24, s: "/7", l: "disponibilité des agents" },
                { v: 95, s: "%", l: "tâches traitées sans intervention" },
                { v: 10, s: "x", l: "plus rapide qu'un humain" },
                { v: 6, s: " sem.", l: "délai de déploiement moyen" },
              ].map((m) => (
                <div key={m.l} className="p-5 rounded-2xl bg-surface border border-border text-center">
                  <div className="text-2xl font-bold"><AnimatedCounter value={m.v} suffix={m.s} /></div>
                  <p className="text-muted text-[11px] mt-1">{m.l}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Agent vs chatbot vs automation */}
      <section className="section-padding section-light">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl sm:text-2xl font-bold mb-5">Agent IA vs chatbot vs automatisation : quelle différence ?</h2>
            <div className="grid sm:grid-cols-3 gap-3 mb-10">
              <div className="p-6 rounded-2xl bg-surface border border-border">
                <h3 className="text-[14px] font-semibold mb-3">Chatbot classique</h3>
                <p className="text-foreground/50 text-[12px] leading-relaxed mb-3">Répond à des questions. Ne peut pas agir. Limité à ce qui est dans sa base de connaissances. Pas d&apos;accès à vos outils.</p>
                <div className="text-[11px] text-foreground/30 uppercase tracking-wider font-semibold">Passif</div>
              </div>
              <div className="p-6 rounded-2xl bg-surface border border-border">
                <h3 className="text-[14px] font-semibold mb-3">Automatisation (Make/n8n)</h3>
                <p className="text-foreground/50 text-[12px] leading-relaxed mb-3">Exécute des règles prédéfinies. Si X alors Y. Rapide mais rigide. Ne s&apos;adapte pas aux cas imprévus.</p>
                <div className="text-[11px] text-foreground/30 uppercase tracking-wider font-semibold">Réactif</div>
              </div>
              <div className="p-6 rounded-2xl bg-accent/10 border border-accent/20">
                <h3 className="text-[14px] font-semibold mb-3 text-accent">Agent IA autonome</h3>
                <p className="text-foreground/60 text-[12px] leading-relaxed mb-3">Comprend le contexte. S&apos;adapte. Exécute des tâches complexes de bout en bout. Accède à vos outils (CRM, email, fichiers). Prend des décisions intelligentes.</p>
                <div className="text-[11px] text-accent uppercase tracking-wider font-semibold">Proactif</div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Cas d'usage agents IA Monaco */}
      <section className="bg-dark text-white rounded-[2rem] mx-4 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Cas d&apos;usage</span>
            <h2 className="text-xl sm:text-2xl font-bold mt-2 mb-8">Les agents IA que nous déployons à Monaco</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { title: "Agent conformité LCB-FT", desc: "Screening automatique de chaque nouveau client contre les listes de sanctions (ONU, UE, OFAC). Vérification PEP, scoring de risque, alerte en temps réel. Piste d'audit complète pour SICCFIN.", link: "/secteurs/gestion-patrimoine" },
                { title: "Agent collecte documentaire", desc: "Télécharge les relevés bancaires depuis les portails de chaque banque, extrait les données par OCR, classe par client et type, rapproche avec votre CRM. 150+ PDFs/mois traités sans intervention.", link: "/resultats/gestion-documentaire-bancaire" },
                { title: "Agent veille réglementaire", desc: "Surveille le Journal de Monaco, les publications SICCFIN et CCAF, les évolutions législatives. Synthétise les changements pertinents pour votre activité. Alerte proactive.", link: "/expertise/developpement-ia-sur-mesure" },
                { title: "Agent prospection B2B", desc: "Identifie les prospects sur LinkedIn et Apollo, enrichit les données, rédige des messages personnalisés, gère les séquences multicanales (email + LinkedIn). Scoring automatique des leads.", link: "/blog/automatiser-prospection-commerciale-monaco" },
                { title: "Agent reporting client", desc: "Consolide les données depuis vos sources (CRM, comptabilité, API bancaires), génère des rapports PDF brandés, les envoie aux clients selon un calendrier programmé.", link: "/resultats/reporting-client-trimestriel" },
                { title: "Agent suivi échéances", desc: "Monitore tous les documents à date d'expiration (passeports, cartes de séjour, permis, contrats). Alertes automatiques à J-90, J-60, J-30. Zéro échéance manquée.", link: "/resultats/conformite-documentaire" },
              ].map((a) => (
                <Link key={a.title} href={a.link} className="group p-6 rounded-2xl border border-white/[0.06] bg-white/[0.03] hover:border-accent/20 transition-all flex flex-col">
                  <h3 className="text-[14px] font-semibold group-hover:text-accent transition-colors mb-2">{a.title}</h3>
                  <p className="text-white/45 text-[12px] leading-relaxed flex-1">{a.desc}</p>
                </Link>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="section-padding section-light">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl sm:text-2xl font-bold mb-5">Comment nous concevons vos agents IA à Monaco</h2>
            <div className="grid sm:grid-cols-4 gap-3 mb-8">
              {[
                { n: "01", title: "Cadrage", desc: "On identifie la tâche à automatiser, les outils impliqués, les règles métier, les cas limites et le niveau de validation humaine requis." },
                { n: "02", title: "Architecture", desc: "Choix du modèle (Claude, GPT-4, Mistral), design des outils (API, scraping, OCR), définition du flux de décision et des garde-fous." },
                { n: "03", title: "Développement", desc: "Construction de l'agent, intégration avec vos outils existants (CRM, messagerie, ERP), tests unitaires et tests en conditions réelles." },
                { n: "04", title: "Déploiement", desc: "Mise en production progressive, monitoring en temps réel, ajustements sur les premiers jours, documentation et formation de votre équipe." },
              ].map((s) => (
                <div key={s.n} className="p-5 rounded-2xl bg-surface border border-border">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-7 h-7 rounded-lg bg-accent text-dark flex items-center justify-center text-[10px] font-bold">{s.n}</span>
                  </div>
                  <h3 className="text-[13px] font-semibold mb-1">{s.title}</h3>
                  <p className="text-foreground/50 text-[11px] leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link href="/methode" className="text-[13px] font-medium text-accent hover:underline">Découvrir notre méthode complète →</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Stack technique */}
      <section className="section-padding section-surface">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl sm:text-2xl font-bold mb-5">Technologies utilisées pour les agents IA</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
              {[
                { title: "Modèles de langage", desc: "Claude Opus 4 (Anthropic), GPT-4o (OpenAI), Mistral Large. Sélectionnés selon la tâche, le budget et les exigences de confidentialité." },
                { title: "Orchestration", desc: "LangChain, CrewAI, Claude Agent SDK. Frameworks qui permettent à l'agent de planifier, exécuter et vérifier ses actions en séquence." },
                { title: "Outils & API", desc: "Connexion à vos systèmes existants : HubSpot, CBS, portails bancaires, messagerie, bases de données. Via API ou scraping sécurisé." },
                { title: "OCR & extraction", desc: "Tesseract, Claude Vision, GPT-4V pour lire les documents PDF, scans et images. Extraction structurée des données." },
                { title: "Hébergement", desc: "Serveurs européens (Hetzner, Scaleway, Vercel). Chiffrement AES-256 au repos, TLS 1.3 en transit. Conforme loi n°1.565." },
                { title: "Monitoring", desc: "Logs temps réel, alertes sur anomalies, tableau de bord de performance. Vous voyez exactement ce que l'agent fait, quand, et avec quels résultats." },
              ].map((t) => (
                <div key={t.title} className="p-5 rounded-2xl bg-surface border border-border">
                  <h3 className="text-[13px] font-semibold mb-2">{t.title}</h3>
                  <p className="text-foreground/50 text-[11px] leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Résultats */}
      <section className="section-padding section-light">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl sm:text-2xl font-bold mb-5">Résultats des agents IA déployés à Monaco</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
              {[
                { metric: "4 j/mois", desc: "récupérés par agent de collecte documentaire", link: "/resultats/gestion-documentaire-bancaire" },
                { metric: "-90%", desc: "temps de screening conformité LCB-FT", link: "/resultats/controle-lcb-ft" },
                { metric: "0", desc: "échéance manquée depuis déploiement des alertes", link: "/resultats/conformite-documentaire" },
                { metric: "1 clic", desc: "pour un échéancier obligataire complet", link: "/resultats/echeancier-obligataire" },
              ].map((r) => (
                <Link key={r.desc} href={r.link} className="group p-5 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-all text-center">
                  <div className="text-xl font-bold text-accent mb-1">{r.metric}</div>
                  <p className="text-muted text-[11px]">{r.desc}</p>
                </Link>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Secteurs */}
      <section className="section-padding section-tinted">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl sm:text-2xl font-bold mb-5">Agents IA par secteur à Monaco</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
              {[
                { title: "Gestion de patrimoine", desc: "Collecte, conformité, reporting, échéanciers", link: "/secteurs/gestion-patrimoine" },
                { title: "Banque privée", desc: "KYC/KYB, screening, due diligence, alertes", link: "/secteurs/banque-privee" },
                { title: "Cabinets d'avocats", desc: "Recherche juridique, rédaction, transcription", link: "/secteurs/cabinets-avocats" },
                { title: "Immobilier de luxe", desc: "Matching, brochures, veille, suivi contrats", link: "/secteurs/immobilier-luxe" },
              ].map((s) => (
                <Link key={s.title} href={s.link} className="group p-5 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-all">
                  <h3 className="text-[13px] font-semibold group-hover:text-accent transition-colors mb-1">{s.title}</h3>
                  <p className="text-muted text-[11px]">{s.desc}</p>
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/expertise/automatisation-processus" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Automatisation des processus</Link>
              <Link href="/expertise/developpement-ia-sur-mesure" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Développement IA sur mesure</Link>
              <Link href="/ia-monaco" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">IA à Monaco</Link>
              <Link href="/combien-coute-projet-ia-monaco" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Tarifs projet IA</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding section-light">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-6">Questions fréquentes sur les agents IA à Monaco</h2>
            <FAQ items={faqItems} />
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-background via-accent-light/30 to-accent/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">Prêt à déployer un agent IA dans votre entreprise ?</h2>
            <p className="text-foreground/60 text-[14px] mb-8">Premier entretien confidentiel de 30 minutes. On identifie ensemble la première tâche à confier à un agent.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="group bg-accent text-dark font-semibold px-6 py-3 rounded-xl text-[13px] hover:bg-accent-dark transition-all inline-flex items-center gap-2 shadow-lg shadow-accent/20">
                Solliciter un entretien
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/top-agence-ia-monaco" className="bg-surface text-foreground font-medium px-6 py-3 rounded-xl text-[13px] border border-border hover:border-foreground/20 transition-all">Top agence IA Monaco</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </PageLayout>
  );
}
