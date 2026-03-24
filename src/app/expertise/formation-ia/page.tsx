import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ExpertiseHero from "@/components/ExpertiseHero";
import { FormationIllustration } from "@/components/ExpertiseIllustration";
import FAQ from "@/components/FAQ";
import FaqSchema from "@/components/FaqSchema";
import RevealOnScroll from "@/components/RevealOnScroll";
import StepTimeline from "@/components/StepTimeline";
import AnimatedCounter from "@/components/AnimatedCounter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Formation IA pour entreprises à Monaco",
  description:
    "Formations IA sur mesure pour vos equipes a Monaco : prompt engineering, outils metier, IA generative. Objectif autonomie et gains de productivite.",
  alternates: { canonical: "https://factory-ai.com/expertise/formation-ia" },
  openGraph: {
    title: "Formation IA pour entreprises à Monaco",
    description:
      "Formations IA sur mesure pour vos equipes a Monaco : prompt engineering, outils metier, IA generative. Objectif autonomie et gains de productivite.",
    url: "https://factory-ai.com/expertise/formation-ia",
    siteName: "Factory",
    locale: "fr_FR",
    type: "website",
  },
};

const faqItems = [
  {
    q: "Combien coute une formation IA pour nos equipes ?",
    a: "Nos formations demarrent a partir de 2 500 euros pour une session d'une journee (10 participants maximum). Les programmes sur plusieurs jours avec accompagnement post-formation sont proposes entre 5 000 et 15 000 euros selon la duree, le nombre de participants et le niveau de personnalisation. Chaque devis est etabli sur mesure apres un premier echange pour comprendre vos besoins.",
  },
  {
    q: "Nos collaborateurs n'ont aucune competence technique. Est-ce un probleme ?",
    a: "Absolument pas. Nos formations sont concues pour des profils non techniques. L'IA generative moderne (ChatGPT, Claude) s'utilise en langage naturel. Il suffit de savoir formuler une demande clairement, ce qui est justement l'objet du prompt engineering que nous enseignons. Les participants les moins a l'aise avec la technologie sont souvent ceux qui progressent le plus rapidement.",
  },
  {
    q: "Comment garantissez-vous que les equipes utilisent reellement l'IA apres la formation ?",
    a: "C'est le coeur de notre methode. Premierement, la formation porte sur les vrais cas d'usage des participants, donc les gains sont immediats et concrets. Deuxiemement, chacun repart avec des prompts et des workflows prets a l'emploi. Troisiemement, l'accompagnement de 4 semaines permet de debloquer les situations reelles et d'ancrer les nouvelles habitudes. Notre taux d'adoption a 30 jours depasse 85%.",
  },
  {
    q: "L'utilisation de l'IA pose-t-elle des problemes de confidentialite ?",
    a: "C'est une preoccupation legitime, particulierement a Monaco ou la confidentialite est primordiale. Nous integrons systematiquement un module sur la securite des donnees dans nos formations : quelles informations ne jamais partager avec une IA, comment utiliser les modes confidentiels, quelles alternatives deployer pour les donnees sensibles. Pour les secteurs reglementees (finance, sante, droit), nous recommandons des solutions d'IA deployees en environnement prive.",
  },
  {
    q: "Proposez-vous des formations a distance ou uniquement en presentiel ?",
    a: "Nous privilegions le presentiel dans vos locaux a Monaco pour maximiser l'engagement et permettre les echanges directs. Cependant, nous proposons egalement des formats hybrides pour les equipes dispersees geographiquement. Les sessions de suivi post-formation se font generalement a distance (visio, Slack, WhatsApp) pour plus de flexibilite et de reactivite.",
  },
];

const steps = [
  {
    title: "Diagnostic des besoins",
    text: "Entretiens avec les managers et les equipes pour identifier les taches repetitives, les blocages et les cas d'usage prioritaires. Nous analysons le quotidien reel de vos collaborateurs, pas une description theorique de leurs fiches de poste.",
  },
  {
    title: "Conception du programme sur mesure",
    text: "Creation d'un programme de formation specifique a votre entreprise, avec des exercices bases sur vos vrais documents, vos vrais processus et vos vrais outils. Chaque session est construite pour produire des resultats immediatement applicables.",
  },
  {
    title: "Formation en presentiel a Monaco",
    text: "Sessions dans vos locaux, groupes de 10 personnes maximum. Alternance entre demonstrations en direct, exercices pratiques et mises en situation. Chaque participant repart avec des prompts testes et valides pour ses propres cas d'usage.",
  },
  {
    title: "Remise de guides personnalises",
    text: "Chaque participant recoit un guide interne avec les prompts, les workflows et les bonnes pratiques abordes en formation. Ce guide est specifique a votre entreprise et constitue une reference utilisable au quotidien, pas un support generique a ranger dans un tiroir.",
  },
  {
    title: "Accompagnement post-formation",
    text: "4 semaines de suivi individuel apres chaque session. Canal Slack ou WhatsApp dedie pour poser des questions, partager des cas d'usage et recevoir des conseils en temps reel. C'est dans cette phase que l'adoption se consolide reellement.",
  },
  {
    title: "Mesure des resultats et rapport",
    text: "A 30 jours, nous produisons un rapport d'impact : taux d'adoption, temps gagne, taches automatisees, satisfaction des participants. Ce rapport permet a votre direction de mesurer le ROI et de planifier les prochaines etapes de votre transformation IA.",
  },
];

export default function FormationIA() {
  return (
    <PageLayout>
      <FaqSchema items={faqItems} />
      <ExpertiseHero
        tag="Expertise"
        title="Formation IA pour vos equipes a Monaco."
        description="L'IA ne sert a rien si vos collaborateurs ne savent pas l'utiliser. Nous formons vos equipes sur leurs cas d'usage reels pour qu'elles deviennent autonomes, rapidement et durablement."
        illustration={<FormationIllustration />}
      />

      {/* Intro courte + Metrics dashboard */}
      <section className="section-padding section-surface">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-xl font-bold mb-5">Des formations calibrees sur votre metier</h2>
                <p className="text-foreground/60 text-[14px] leading-relaxed">
                  Chaque programme est calibre sur vos cas d&apos;usage reels, avec des exercices tires de votre quotidien professionnel. Nos formateurs montrent en direct comment utiliser ChatGPT, Claude, Copilot ou Midjourney pour resoudre les problemes que vos equipes rencontrent chaque jour. L&apos;objectif : 1 a 2 heures gagnees par collaborateur par jour.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-5">L&apos;adoption comme vrai indicateur de succes</h2>
                <p className="text-foreground/60 text-[14px] leading-relaxed">
                  Nous ne nous contentons pas de former : nous accompagnons. Chaque participant recoit un suivi individuel pendant 4 semaines apres la formation. Questions, blocages, cas d&apos;usage specifiques traites en temps reel jusqu&apos;a ce que l&apos;IA soit reellement integree dans les habitudes de travail quotidiennes.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-16">
              <div className="p-5 rounded-2xl bg-surface border border-border text-center">
                <div className="text-2xl font-bold"><AnimatedCounter value={96} suffix="%" /></div>
                <p className="text-muted text-[11px] mt-1">Taux de satisfaction des participants</p>
              </div>
              <div className="p-5 rounded-2xl bg-surface border border-border text-center">
                <div className="text-2xl font-bold"><AnimatedCounter value={85} suffix="%" /></div>
                <p className="text-muted text-[11px] mt-1">Taux d&apos;adoption a 30 jours</p>
              </div>
              <div className="p-5 rounded-2xl bg-surface border border-border text-center">
                <div className="text-2xl font-bold">1-2h</div>
                <p className="text-muted text-[11px] mt-1">Temps gagne par collaborateur par jour</p>
              </div>
              <div className="p-5 rounded-2xl bg-surface border border-border text-center">
                <div className="text-2xl font-bold"><AnimatedCounter value={10} /> max</div>
                <p className="text-muted text-[11px] mt-1">Participants par session</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* StepTimeline — tinted background */}
      <section className="section-padding section-tinted">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-6">Notre approche en 6 etapes</h2>
            <StepTimeline steps={steps} />
          </RevealOnScroll>
        </div>
      </section>

      {/* Cas d'application + Programmes — dark bubble */}
      <section className="bg-dark text-white rounded-[2rem] mx-4 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-6">Cas d&apos;application concrets</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Formation IA pour un cabinet d&apos;avocats</h3>
                <p className="text-white/50 text-[13px] leading-relaxed">
                  15 collaborateurs formes a l&apos;analyse de contrats et la recherche jurisprudentielle. 1h30 economisee par juriste par jour.
                </p>
              </div>
              <div className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Programme pour une banque privee</h3>
                <p className="text-white/50 text-[13px] leading-relaxed">
                  40 collaborateurs en 4 sessions. Synthese de rapports financiers, preparation de comites, veille reglementaire. Adoption a 30 jours : 92%.
                </p>
              </div>
              <div className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">IA pour les equipes commerciales</h3>
                <p className="text-white/50 text-[13px] leading-relaxed">
                  8 commerciaux formes au prompt engineering applique a la vente. Temps de preparation d&apos;une proposition divise par 3.
                </p>
              </div>
              <div className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Formation direction generale</h3>
                <p className="text-white/50 text-[13px] leading-relaxed">
                  Session d&apos;une demi-journee pour un comite de direction. Enjeux strategiques, projets prioritaires. Resultat : plan de transformation IA sur 12 mois.
                </p>
              </div>
              <div className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">IA pour les metiers de la compliance</h3>
                <p className="text-white/50 text-[13px] leading-relaxed">
                  Screening, analyse de transactions suspectes, rapports SAR. Focus sur les limites de l&apos;IA et les obligations de verification humaine.
                </p>
              </div>
              <div className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Accompagnement d&apos;une clinique privee</h3>
                <p className="text-white/50 text-[13px] leading-relaxed">
                  Personnel administratif forme a la gestion de plannings, courriers et syntheses. Gain : 45 minutes par collaborateur par jour.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={150}>
            <h2 className="text-xl font-bold mt-12 mb-6">Nos programmes de formation</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              <div className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-3">Fondamentaux de l&apos;IA en entreprise</h3>
                <p className="text-white/50 text-[13px] leading-relaxed mb-3">
                  Comprendre ce que l&apos;IA peut et ne peut pas faire, maitriser les bases du prompt engineering, utiliser efficacement ChatGPT, Claude et Gemini. Exercices pratiques sur vos documents reels.
                </p>
                <span className="text-[11px] font-medium text-white/40 bg-white/[0.06] px-2.5 py-1 rounded-lg">1 journee</span>
              </div>
              <div className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-3">IA pour les metiers reglementes</h3>
                <p className="text-white/50 text-[13px] leading-relaxed mb-3">
                  Programme specialise finance, droit et compliance a Monaco. Analyse de contrats, veille reglementaire, redaction juridique. Focus sur les limites et obligations de verification humaine.
                </p>
                <span className="text-[11px] font-medium text-white/40 bg-white/[0.06] px-2.5 py-1 rounded-lg">2 journees</span>
              </div>
              <div className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-3">Prompt engineering avance</h3>
                <p className="text-white/50 text-[13px] leading-relaxed mb-3">
                  Formation technique pour utilisateurs avances. Prompting structure, chain-of-thought, few-shot learning, integration d&apos;API. Construction de workflows automatises combinant plusieurs outils IA.
                </p>
                <span className="text-[11px] font-medium text-white/40 bg-white/[0.06] px-2.5 py-1 rounded-lg">2 journees</span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Comparaison Sans / Avec Factory */}
      <section className="section-padding section-light">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-8 text-center">Ce qui change avec Factory</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-7 rounded-2xl bg-surface border border-border">
                <h3 className="text-[13px] font-semibold text-muted mb-4 uppercase tracking-wide">Sans Factory</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-[13px] text-foreground/60">
                    <span className="text-red-400 mt-0.5 shrink-0">&#x2715;</span>
                    Licences IA achetees mais peu utilisees par les equipes
                  </li>
                  <li className="flex items-start gap-3 text-[13px] text-foreground/60">
                    <span className="text-red-400 mt-0.5 shrink-0">&#x2715;</span>
                    Formations generiques deconnectees des cas d&apos;usage reels
                  </li>
                  <li className="flex items-start gap-3 text-[13px] text-foreground/60">
                    <span className="text-red-400 mt-0.5 shrink-0">&#x2715;</span>
                    Pas de suivi post-formation, retour aux anciennes habitudes
                  </li>
                  <li className="flex items-start gap-3 text-[13px] text-foreground/60">
                    <span className="text-red-400 mt-0.5 shrink-0">&#x2715;</span>
                    Aucune mesure du ROI ni de l&apos;adoption reelle
                  </li>
                  <li className="flex items-start gap-3 text-[13px] text-foreground/60">
                    <span className="text-red-400 mt-0.5 shrink-0">&#x2715;</span>
                    Inquietudes sur la confidentialite non traitees
                  </li>
                </ul>
              </div>
              <div className="p-7 rounded-2xl bg-dark text-white">
                <h3 className="text-[13px] font-semibold text-white/50 mb-4 uppercase tracking-wide">Avec Factory</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-[13px] text-white/70">
                    <span className="text-accent mt-0.5 shrink-0">&#x2713;</span>
                    85% d&apos;adoption a 30 jours, utilisation quotidienne mesuree
                  </li>
                  <li className="flex items-start gap-3 text-[13px] text-white/70">
                    <span className="text-accent mt-0.5 shrink-0">&#x2713;</span>
                    Exercices sur vos vrais documents, prompts prets a l&apos;emploi
                  </li>
                  <li className="flex items-start gap-3 text-[13px] text-white/70">
                    <span className="text-accent mt-0.5 shrink-0">&#x2713;</span>
                    4 semaines d&apos;accompagnement individuel post-formation
                  </li>
                  <li className="flex items-start gap-3 text-[13px] text-white/70">
                    <span className="text-accent mt-0.5 shrink-0">&#x2713;</span>
                    Rapport d&apos;impact a 30 jours avec metriques de ROI
                  </li>
                  <li className="flex items-start gap-3 text-[13px] text-white/70">
                    <span className="text-accent mt-0.5 shrink-0">&#x2713;</span>
                    Module securite integre, adapte aux secteurs reglementees
                  </li>
                </ul>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQ + Modalites + Links */}
      <section className="section-padding section-tinted">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-6">Questions frequentes</h2>
            <FAQ items={faqItems} />
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <h2 className="text-xl font-bold mt-12 mb-6">Modalites pratiques</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
              <div className="p-7 rounded-2xl bg-surface border border-border">
                <h3 className="text-[14px] font-semibold mb-2">Sur site a Monaco</h3>
                <p className="text-foreground/50 text-[13px] leading-relaxed">Formations dispensees dans vos locaux, avec vos outils et vos documents.</p>
              </div>
              <div className="p-7 rounded-2xl bg-surface border border-border">
                <h3 className="text-[14px] font-semibold mb-2">Groupes restreints</h3>
                <p className="text-foreground/50 text-[13px] leading-relaxed">Maximum 10 participants par session pour un accompagnement personnalise.</p>
              </div>
              <div className="p-7 rounded-2xl bg-surface border border-border">
                <h3 className="text-[14px] font-semibold mb-2">Suivi 4 semaines</h3>
                <p className="text-foreground/50 text-[13px] leading-relaxed">Accompagnement individuel post-formation. Blocages traites en temps reel.</p>
              </div>
              <div className="p-7 rounded-2xl bg-surface border border-border">
                <h3 className="text-[14px] font-semibold mb-2">Guides personnalises</h3>
                <p className="text-foreground/50 text-[13px] leading-relaxed">Prompts, outils et workflows abordes, specifiques a votre entreprise.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/methode" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Notre methode</Link>
              <Link href="/resultats" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Resultats clients</Link>
              <Link href="/expertise/audit-strategie-ia" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Audit et strategie IA</Link>
              <Link href="/expertise/automatisation-processus" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Automatisation des processus</Link>
              <Link href="/secteurs/banque-privee" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Secteur banque privee</Link>
              <Link href="/secteurs/cabinets-avocats" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Secteur cabinets d&apos;avocats</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA gradient */}
      <section className="section-padding bg-gradient-to-b from-background via-accent-light/30 to-accent/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">
              Rendez vos equipes autonomes face a l&apos;IA.
            </h2>
            <p className="text-foreground/60 text-[14px] mb-8">
              Parlez-nous de vos equipes et de leurs metiers. Nous vous proposerons un programme adapte sous 48 heures.
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
                href="/expertise"
                className="bg-surface text-foreground font-medium px-6 py-3 rounded-xl text-[13px] border border-border hover:border-foreground/20 transition-all"
              >
                Toutes nos expertises
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </PageLayout>
  );
}
