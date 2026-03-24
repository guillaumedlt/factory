import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import FAQ from "@/components/FAQ";
import FaqSchema from "@/components/FaqSchema";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IA pour l'hotellerie et la restauration a Monaco | Factory AI",
  description:
    "Yield management, analyse des avis clients, contenus multilingues et facturation automatisee pour les hotels et restaurants de Monaco grace a l'IA.",
  alternates: { canonical: "https://factory-ai.com/secteurs/hotellerie-restauration" },
  openGraph: {
    title: "IA pour l'hotellerie et la restauration a Monaco | Factory AI",
    description:
      "Yield management, analyse des avis clients, contenus multilingues et facturation automatisee pour les hotels et restaurants de Monaco grace a l'IA.",
    url: "https://factory-ai.com/secteurs/hotellerie-restauration",
    siteName: "Factory",
    locale: "fr_FR",
    type: "website",
  },
};

const faqItems = [
  {
    q: "L'IA peut-elle vraiment gerer le yield management pendant le Grand Prix de F1 ?",
    a: "Oui, et c'est precisement pendant les periodes de pic que l'agent est le plus utile. Il integre les donnees historiques du Grand Prix (taux d'occupation, tarifs pratiques les annees precedentes, delai de reservation moyen), les croise avec les reservations en cours et la demande en temps reel pour recommander des ajustements tarifaires toutes les heures. Le directeur conserve le controle final sur chaque modification de prix.",
  },
  {
    q: "Comment l'agent gere-t-il les specificites linguistiques de la clientele monegasque ?",
    a: "L'agent est entraine sur cinq langues principales (français, anglais, italien, russe, arabe) avec des adaptations culturelles pour chaque marche. Un menu traduit en arabe pour une clientele du Golfe ne sera pas formule de la meme maniere qu'une traduction destinee au marche libanais. Le ton, les formules de politesse et les references culturelles sont ajustes.",
  },
  {
    q: "L'IA s'integre-t-elle avec notre PMS et notre channel manager ?",
    a: "Nos agents sont compatibles avec les principaux PMS du marche (Opera, Mews, Protel) et les channel managers les plus utilises (SiteMinder, D-EDGE, Cubilis). L'integration se fait par API ou par connecteur, sans modification de vos processus existants. Le deploiement prend generalement entre 2 et 4 semaines.",
  },
  {
    q: "Quel est le cout d'un agent IA pour un hotel a Monaco ?",
    a: "Le tarif depend du perimetre d'automatisation et du nombre de chambres ou de couverts. Nous proposons un audit initial gratuit pour identifier les processus les plus rentables a automatiser. Le retour sur investissement est generalement atteint en moins de 3 mois grace aux gains de productivite et a l'augmentation du RevPAR.",
  },
  {
    q: "Les donnees de mes clients sont-elles protegees ?",
    a: "Toutes les donnees sont hebergees dans un environnement securise conforme aux reglementations applicables en Principaute de Monaco. Aucune donnee client n'est partagee avec des tiers. Les agents IA fonctionnent dans un perimetre cloisonne et les acces sont traces. Nous signons un accord de confidentialite avant toute intervention.",
  },
];

export default function HotellerieRestaurationPage() {
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
                Intelligence artificielle pour l&apos;hotellerie et la restauration a Monaco
              </h1>
              <p className="text-foreground/60 text-[15px] leading-relaxed max-w-xl">
                Optimisez vos revenus, automatisez vos contenus multilingues et transformez les retours clients en leviers d&apos;amelioration grace a des agents IA conçus pour l&apos;excellence hospitality monegasque.
              </p>
            </div>

            {/* Illustration card */}
            <div className="hidden lg:block">
              <div className="animate-float">
                <div className="rounded-2xl bg-dark p-6 shadow-xl border border-white/[0.06]">
                  <div className="text-[9px] text-white/30 uppercase tracking-wider font-semibold mb-4">Tableau de bord hotel</div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-white/50">RevPAR optimise</span>
                      <span className="text-[13px] text-accent font-bold">+12 %</span>
                    </div>
                    <div className="h-px bg-white/[0.06]" />
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-white/50">Reponse aux avis</span>
                      <span className="text-[13px] text-accent font-bold">&lt; 4 h</span>
                    </div>
                    <div className="h-px bg-white/[0.06]" />
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-white/50">Langues actives</span>
                      <span className="text-[13px] text-accent font-bold">5</span>
                    </div>
                    <div className="h-px bg-white/[0.06]" />
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-white/50">Temps admin libere</span>
                      <span className="text-[13px] text-accent font-bold">15 h/sem</span>
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
                { v: 12, s: " %", p: "+", l: "RevPAR moyen" },
                { v: 4, s: " h", p: "", l: "reponse aux avis" },
                { v: 5, s: "", p: "", l: "langues automatisees" },
                { v: 15, s: " h/sem", p: "", l: "temps admin libere" },
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
                Monaco concentre une densite exceptionnelle d&apos;etablissements hoteliers de prestige et de restaurants etoiles sur un territoire de 2 km2. L&apos;Hotel de Paris, l&apos;Hermitage, le Monte-Carlo Bay, le Fairmont, le Louis XV d&apos;Alain Ducasse, le Blue Bay de Marcel Ravin : chaque adresse doit maintenir un niveau de service irreprochable face a une clientele ultra-exigeante et internationale. Le secteur fait face a des contraintes specifiques : rotation elevee du personnel saisonnier, clientele multilingue, pression sur les marges et obligation de maintenir des standards conformes a la reputation de la Principaute.
              </p>
              <p className="text-foreground/60 text-[14px] leading-relaxed">
                L&apos;intelligence artificielle permet de resoudre cette equation impossible : offrir un service encore plus personnalise tout en reduisant la charge operationnelle. Le yield management intelligent ajuste vos tarifs en temps reel, l&apos;analyse semantique des avis clients identifie les ameliorations prioritaires, et la production automatisee de contenus multilingues libere vos equipes pour ce qui compte : l&apos;accueil et l&apos;experience sur place.
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
                <h3 className="text-[14px] font-semibold mb-2">Yield management intelligent</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Analyse en continu du taux d&apos;occupation, des reservations, du calendrier evenementiel (F1, Jumping, Fete nationale) et des tarifs concurrents. Ajustements tarifaires quotidiens pour maximiser le RevPAR, recalcules toutes les heures pendant les pics.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Analyse des avis clients</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Collecte et analyse semantique sur TripAdvisor, Google, Booking.com et guides specialises. Score de sentiment par categorie, tableau de bord mensuel avec recommandations priorisees et alertes temps reel sur les avis negatifs.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Contenus multilingues</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Menus, newsletters, programmes d&apos;evenements traduits en anglais, italien, russe et arabe avec adaptations culturelles. Ton ajuste a l&apos;identite de votre maison, pret a publier en quelques minutes sur tous vos canaux.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Facturation operationnelle</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Extraction OCR des bons de livraison, rapprochement avec les bons de commande, detection des ecarts de prix et pre-validation des factures. Rapprochement bancaire quotidien automatise.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Reponses aux avis en ligne</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Reponses personnalisees dans la langue du client et le ton de l&apos;etablissement, soumises au directeur avant publication. Temps de reponse moyen de 48 h a moins de 4 h.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Prevision de frequentation</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Prediction a 7 et 14 jours en croisant historique, reservations, meteo et calendrier monegasque. Ajustement des commandes fournisseurs et plannings d&apos;equipe pour reduire le gaspillage.
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
            <h2 className="text-xl font-bold mb-6">Gestion traditionnelle vs intelligence artificielle</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="p-7 rounded-2xl bg-surface border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-foreground/20" />
                  <span className="text-[11px] uppercase tracking-wider text-muted font-semibold">Sans IA</span>
                </div>
                <ul className="space-y-2">
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Tarifs ajustes manuellement, souvent en retard sur la demande
                  </li>
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Avis clients traites avec 48 h de delai moyen
                  </li>
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Traductions externalisees, couteuses et lentes
                  </li>
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Facturation fournisseurs saisie a la main
                  </li>
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Previsions de frequentation approximatives
                  </li>
                </ul>
              </div>
              <div className="p-7 rounded-2xl bg-dark text-white border border-white/[0.06]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-[11px] uppercase tracking-wider text-white/40 font-semibold">Avec Factory</span>
                </div>
                <ul className="space-y-2">
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Yield management recalcule en temps reel, toutes les heures en pic
                  </li>
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Reponses aux avis en moins de 4 h, dans la langue du client
                  </li>
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Contenus en 5 langues generes en quelques minutes
                  </li>
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Facturation OCR avec detection automatique des ecarts
                  </li>
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Previsions a 14 jours basees sur donnees croisees
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
              <Link href="/expertise/marketing-acquisition" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Marketing</Link>
              <Link href="/secteurs/commerce-luxe" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Commerce de luxe</Link>
              <Link href="/secteurs/immobilier-luxe" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Immobilier de luxe</Link>
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
              Offrez une experience exceptionnelle, sans surcharger vos equipes
            </h2>
            <p className="text-foreground/60 text-[14px] mb-8">
              Echangeons sur les processus qui consomment le plus de temps dans votre etablissement. Nous identifierons ensemble les gains rapides accessibles grace a l&apos;IA en moins de 30 minutes.
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
