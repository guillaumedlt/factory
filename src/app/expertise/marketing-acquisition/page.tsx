import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ExpertiseHero from "@/components/ExpertiseHero";
import { MarketingIllustration } from "@/components/ExpertiseIllustration";
import FAQ from "@/components/FAQ";
import FaqSchema from "@/components/FaqSchema";
import RevealOnScroll from "@/components/RevealOnScroll";
import StepTimeline from "@/components/StepTimeline";
import AnimatedCounter from "@/components/AnimatedCounter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marketing & acquisition IA à Monaco",
  description:
    "Sites web livres en 2 semaines, SEO par IA, campagnes d'acquisition optimisees. Quanta construit votre machine de croissance digitale a Monaco.",
  alternates: { canonical: "https://quantamonaco.com/expertise/marketing-acquisition" },
  openGraph: {
    title: "Marketing & acquisition IA à Monaco",
    description:
      "Sites web livres en 2 semaines, SEO par IA, campagnes d'acquisition optimisees. Quanta construit votre machine de croissance digitale a Monaco.",
    url: "https://quantamonaco.com/expertise/marketing-acquisition",
    siteName: "Quanta",
    locale: "fr_FR",
    type: "website",
  },
};

const faqItems = [
  {
    q: "Combien coute un site web professionnel a Monaco ?",
    a: "Nos sites web sur mesure demarrent a partir de 3 000 euros pour un site vitrine et montent jusqu'a 15 000 euros pour des sites metier complexes avec fonctionnalites avancees. Grace a l'IA, ces tarifs sont 3 a 5 fois inferieurs a ceux des agences traditionnelles pour un niveau de qualite equivalent ou superieur. Chaque projet fait l'objet d'un devis detaille apres un premier echange gratuit.",
  },
  {
    q: "Pourquoi un site web livre en 2 semaines et pas en 2 mois ?",
    a: "L'IA accelere chaque etape du processus : generation de contenu, prototypage de design, ecriture de code, optimisation SEO. La ou une agence classique mobilise une equipe de 5 personnes sur 8 semaines, notre methode assistee par IA permet a une equipe reduite de livrer un resultat equivalent en un quart du temps. Nous utilisons des frameworks modernes (Next.js, Vercel) qui eliminent les frictions techniques.",
  },
  {
    q: "Le contenu genere par IA est-il detecte par Google ?",
    a: "Google ne penalise pas le contenu assiste par IA en tant que tel. Ce que Google penalise, c'est le contenu de mauvaise qualite, qu'il soit ecrit par un humain ou une IA. Notre processus hybride garantit que chaque contenu est revu, enrichi et valide par des experts du sujet. Le resultat est un contenu original, pertinent et utile pour le lecteur, ce que Google recompense dans ses classements.",
  },
  {
    q: "En combien de temps le SEO produit-il des resultats ?",
    a: "Le referencement naturel est un investissement a moyen terme. Les premiers resultats apparaissent generalement entre 3 et 6 mois, avec une acceleration progressive a mesure que votre autorite de domaine se construit. Pour des resultats plus immediats, nous combinons le SEO avec des campagnes payantes (Google Ads, LinkedIn Ads) qui generent du trafic qualifie des la premiere semaine.",
  },
  {
    q: "Travaillez-vous uniquement avec des entreprises basees a Monaco ?",
    a: "Notre cabinet est base a Monaco et la majorite de nos clients sont dans la Principaute ou sur la Cote d'Azur. Nous travaillons egalement avec des entreprises internationales qui souhaitent developper leur presence digitale sur le marche monegasque. Notre connaissance du tissu economique local, des codes culturels et des attentes de la clientele HNWI est un atout pour toute entreprise ciblant cette zone.",
  },
];

const steps = [
  {
    title: "Audit de votre presence digitale",
    text: "Analyse complete de votre site actuel, de votre positionnement SEO, de vos canaux d'acquisition et de la concurrence sur vos mots-cles. Nous identifions les opportunites inexploitees et les points de friction qui freinent votre croissance en ligne.",
  },
  {
    title: "Strategie de mots-cles et contenus",
    text: "Identification des requetes de recherche a fort potentiel pour votre activite a Monaco. Definition d'un calendrier editorial avec les sujets prioritaires, les pages piliers et les articles satellites qui construiront votre autorite sur Google.",
  },
  {
    title: "Conception et developpement du site",
    text: "Design sur mesure, developpement avec les technologies les plus performantes (Next.js, Vercel), optimisation technique SEO des la premiere ligne de code. Balises structurees, sitemap, meta descriptions, vitesse de chargement optimale.",
  },
  {
    title: "Production de contenu par IA",
    text: "Generation assistee par IA de l'ensemble des contenus : pages de service, articles de blog, landing pages, sequences email. Chaque texte est revu et enrichi par nos redacteurs pour garantir la pertinence sectorielle et le ton adapte.",
  },
  {
    title: "Lancement des campagnes",
    text: "Mise en place des campagnes d'acquisition multicanal : Google Ads, LinkedIn Ads, email marketing, publication organique. A/B testing systematique sur les accroches, les visuels et les appels a l'action pour optimiser chaque euro investi.",
  },
  {
    title: "Mesure et optimisation continue",
    text: "Reporting mensuel detaille avec analyse des couts d'acquisition par canal, taux de conversion, positionnement SEO et ROI global. Ajustements continus bases sur les donnees reelles pour ameliorer les performances mois apres mois.",
  },
];

export default function MarketingAcquisition() {
  return (
    <PageLayout>
      <FaqSchema items={faqItems} />
      <ExpertiseHero
        tag="Expertise"
        title="Marketing & acquisition propulses par l&apos;IA."
        description="Un site performant en deux semaines, des campagnes qui convertissent, des contenus qui se positionnent sur Google. L'IA change les regles du jeu en acquisition digitale pour les entreprises de Monaco."
        illustration={<MarketingIllustration />}
      />

      {/* Intro courte + Metrics dashboard */}
      <section className="section-padding section-surface">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-xl font-bold mb-5">La vitesse comme avantage competitif a Monaco</h2>
                <p className="text-foreground/60 text-[14px] leading-relaxed">
                  Grace a l&apos;IA, nous livrons des sites web complets en deux semaines au lieu de deux mois. Il ne s&apos;agit pas de templates generiques, mais de sites sur mesure, optimises pour le referencement naturel, avec un design qui reflete le positionnement premium attendu dans la Principaute. Chaque page est pensee comme un actif commercial, pas comme une simple vitrine decorative.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-5">Campagnes et contenu generes par IA</h2>
                <p className="text-foreground/60 text-[14px] leading-relaxed">
                  L&apos;IA accelere la production de contenu d&apos;un facteur 5 a 10, sans compromettre la qualite editoriale. Nos experts affinent le ton, la precision factuelle et l&apos;angle strategique. Ce processus hybride permet de publier 10 fois plus de contenus qu&apos;une equipe marketing traditionnelle, avec un niveau de qualite adapte aux audiences exigeantes de Monaco.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-16">
              <div className="p-5 rounded-2xl bg-surface border border-border text-center">
                <div className="text-2xl font-bold"><AnimatedCounter value={2} suffix=" sem." /></div>
                <p className="text-muted text-[11px] mt-1">Delai moyen de livraison d&apos;un site complet</p>
              </div>
              <div className="p-5 rounded-2xl bg-surface border border-border text-center">
                <div className="text-2xl font-bold"><AnimatedCounter value={3} suffix="x" /></div>
                <p className="text-muted text-[11px] mt-1">Trafic organique multiplie en 6 mois</p>
              </div>
              <div className="p-5 rounded-2xl bg-surface border border-border text-center">
                <div className="text-2xl font-bold"><AnimatedCounter value={95} suffix="+" /></div>
                <p className="text-muted text-[11px] mt-1">Score Lighthouse moyen sur nos sites</p>
              </div>
              <div className="p-5 rounded-2xl bg-surface border border-border text-center">
                <div className="text-2xl font-bold"><AnimatedCounter value={60} prefix="-" suffix="%" /></div>
                <p className="text-muted text-[11px] mt-1">Cout de production de contenu marketing</p>
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

      {/* Cas d'application — dark bubble */}
      <section className="bg-dark text-white rounded-[2rem] mx-4 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-6">Cas d&apos;application concrets</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Site vitrine pour un family office</h3>
                <p className="text-white/50 text-[13px] leading-relaxed">
                  Site bilingue livre en 10 jours, score Lighthouse de 98 et premiere page Google sur les requetes cles de la gestion de patrimoine a Monaco.
                </p>
              </div>
              <div className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Strategie SEO pour un cabinet d&apos;avocats</h3>
                <p className="text-white/50 text-[13px] leading-relaxed">
                  Articles optimises par IA publies regulierement. Trafic organique multiplie par 4 en 6 mois, 15 demandes de consultation qualifiees par mois.
                </p>
              </div>
              <div className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Campagne LinkedIn pour une societe de conseil</h3>
                <p className="text-white/50 text-[13px] leading-relaxed">
                  Outreach LinkedIn automatise et personnalise par IA. 40 rendez-vous qualifies en 3 mois, cout par lead inferieur a 50 euros.
                </p>
              </div>
              <div className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Landing pages pour un promoteur immobilier</h3>
                <p className="text-white/50 text-[13px] leading-relaxed">
                  Systeme de generation rapide de landing pages avec integration CRM. Nouvelle page en moins de 48 heures pour chaque nouveau bien.
                </p>
              </div>
              <div className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Email marketing pour un commerce de luxe</h3>
                <p className="text-white/50 text-[13px] leading-relaxed">
                  Sequences email personnalisees par segment. Taux d&apos;ouverture de 42%, taux de clic de 8%, ROI de 12x sur 3 mois.
                </p>
              </div>
              <div className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Refonte digitale pour une clinique privee</h3>
                <p className="text-white/50 text-[13px] leading-relaxed">
                  Refonte complete en 2 semaines avec prise de rendez-vous integree, blog sante optimise SEO et strategie Google Ads ciblee.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Comparaison Sans / Avec Quanta */}
      <section className="section-padding section-light">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-8 text-center">Ce qui change avec Quanta</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-7 rounded-2xl bg-surface border border-border">
                <h3 className="text-[13px] font-semibold text-muted mb-4 uppercase tracking-wide">Sans Quanta</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-[13px] text-foreground/60">
                    <span className="text-red-400 mt-0.5 shrink-0">&#x2715;</span>
                    Site web livre en 2-3 mois par une agence traditionnelle
                  </li>
                  <li className="flex items-start gap-3 text-[13px] text-foreground/60">
                    <span className="text-red-400 mt-0.5 shrink-0">&#x2715;</span>
                    Contenus produits au compte-gouttes, calendrier editorial jamais tenu
                  </li>
                  <li className="flex items-start gap-3 text-[13px] text-foreground/60">
                    <span className="text-red-400 mt-0.5 shrink-0">&#x2715;</span>
                    Score Lighthouse mediocre, site lent et mal indexe
                  </li>
                  <li className="flex items-start gap-3 text-[13px] text-foreground/60">
                    <span className="text-red-400 mt-0.5 shrink-0">&#x2715;</span>
                    Budget marketing consomme sans visibilite sur le ROI
                  </li>
                  <li className="flex items-start gap-3 text-[13px] text-foreground/60">
                    <span className="text-red-400 mt-0.5 shrink-0">&#x2715;</span>
                    Campagnes d&apos;acquisition lancees sans A/B testing ni optimisation
                  </li>
                </ul>
              </div>
              <div className="p-7 rounded-2xl bg-dark text-white">
                <h3 className="text-[13px] font-semibold text-white/50 mb-4 uppercase tracking-wide">Avec Quanta</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-[13px] text-white/70">
                    <span className="text-accent mt-0.5 shrink-0">&#x2713;</span>
                    Site sur mesure livre en 2 semaines, pret a convertir
                  </li>
                  <li className="flex items-start gap-3 text-[13px] text-white/70">
                    <span className="text-accent mt-0.5 shrink-0">&#x2713;</span>
                    10x plus de contenus publies grace a la production assistee par IA
                  </li>
                  <li className="flex items-start gap-3 text-[13px] text-white/70">
                    <span className="text-accent mt-0.5 shrink-0">&#x2713;</span>
                    Score Lighthouse 95+, temps de chargement inferieur a 2 secondes
                  </li>
                  <li className="flex items-start gap-3 text-[13px] text-white/70">
                    <span className="text-accent mt-0.5 shrink-0">&#x2713;</span>
                    Reporting mensuel avec cout d&apos;acquisition par canal et ROI global
                  </li>
                  <li className="flex items-start gap-3 text-[13px] text-white/70">
                    <span className="text-accent mt-0.5 shrink-0">&#x2713;</span>
                    Campagnes multicanal avec A/B testing systematique
                  </li>
                </ul>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQ + Links */}
      <section className="section-padding section-tinted">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-6">Questions frequentes</h2>
            <FAQ items={faqItems} />
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <h2 className="text-xl font-bold mt-12 mb-6">Technologies et outils que nous utilisons</h2>
            <p className="text-foreground/60 text-[14px] leading-relaxed mb-4">
              Notre stack technique est selectionnee pour maximiser la performance, la vitesse de developpement et le referencement naturel. Cote developpement : Next.js 15, React, Tailwind CSS, Vercel pour l&apos;hebergement et le deploiement continu. Cote SEO et contenu : outils d&apos;analyse semantique, generateurs de contenu IA (GPT-4, Claude), outils de suivi de positionnement et d&apos;analyse de backlinks.
            </p>
            <p className="text-foreground/60 text-[14px] leading-relaxed mb-12">
              Pour les campagnes d&apos;acquisition : HubSpot ou Brevo pour l&apos;email marketing, LinkedIn Sales Navigator pour la prospection, Google Ads et Meta Ads pour le paid. Chaque outil est choisi en fonction de votre secteur, de votre audience cible et de votre budget. Nous ne vendons pas de licences logicielles : nous recommandons les outils les plus adaptes a votre situation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/methode" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Notre methode</Link>
              <Link href="/resultats" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Resultats clients</Link>
              <Link href="/expertise/automatisation-processus" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Automatisation des processus</Link>
              <Link href="/expertise/developpement-ia-sur-mesure" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Developpement IA sur mesure</Link>
              <Link href="/secteurs/immobilier-luxe" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Secteur immobilier de luxe</Link>
              <Link href="/secteurs/banque-privee" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Secteur banque privee</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA gradient */}
      <section className="section-padding bg-gradient-to-b from-background via-accent-light/30 to-accent/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">
              Votre prochain client vous cherche en ligne. Faites-vous trouver.
            </h2>
            <p className="text-foreground/60 text-[14px] mb-8">
              Discutons de votre strategie d&apos;acquisition digitale. Premier audit SEO offert pour les entreprises basees a Monaco.
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
