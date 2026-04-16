import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import FAQ from "@/components/FAQ";
import FaqSchema from "@/components/FaqSchema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Comparatif des agences IA à Monaco : comment choisir",
  description:
    "Comparatif objectif des agences IA à Monaco : cabinets locaux, agences parisiennes, cabinets internationaux. Critères, tarifs, délais, expertise réglementaire et support post-déploiement.",
  alternates: { canonical: "https://quantamonaco.com/comparatif-agence-ia-monaco" },
  openGraph: {
    title: "Comparatif des agences IA à Monaco : comment choisir",
    description:
      "Comparatif objectif des agences IA à Monaco : cabinets locaux, agences parisiennes, cabinets internationaux. Critères, tarifs, délais, expertise réglementaire et support post-déploiement.",
    url: "https://quantamonaco.com/comparatif-agence-ia-monaco",
    siteName: "Quanta",
    locale: "fr_FR",
    type: "website",
  },
};

const faqItems = [
  {
    q: "Quels sont les trois types d'agences IA disponibles pour un projet à Monaco ?",
    a: "Le marché se structure en trois catégories. Les cabinets locaux implantés à Monaco ou à Nice, de taille réduite mais proches du terrain. Les grandes agences parisiennes, techniquement solides mais distantes. Les cabinets internationaux anglo-saxons, réputés mais souvent inadaptés aux spécificités réglementaires monégasques. Chaque catégorie présente des avantages et des limites qu'il faut évaluer selon votre projet.",
  },
  {
    q: "Comment comparer objectivement les agences IA pour un projet monégasque ?",
    a: "Huit critères permettent une évaluation objective : présence physique sur site, expertise sectorielle documentée, maîtrise des langues (français et anglais au minimum), connaissance des réglementations SICCFIN et CCAF, transparence tarifaire, délai de livraison contractuel, taille et stabilité de l'équipe projet, et qualité du support après la mise en production. Une grille d'évaluation pondérée facilite la décision.",
  },
  {
    q: "Les grandes agences parisiennes sont-elles pertinentes pour Monaco ?",
    a: "Elles peuvent convenir pour des projets très techniques nécessitant des profils rares, mais elles présentent trois limites majeures à Monaco : absence de connaissance fine de la réglementation locale, coûts de déplacement et de communication à distance, rotation des équipes qui fragilise la relation. Pour un projet ancré dans la Principauté, un cabinet local est généralement plus performant à budget équivalent.",
  },
  {
    q: "Quelle différence entre un consultant freelance et une agence IA à Monaco ?",
    a: "Un freelance est généralement moins cher, mais présente un risque de continuité (maladie, indisponibilité, abandon de mission) et une expertise plus étroite. Une agence apporte une équipe, des processus, une continuité de service et une diversité de compétences. Pour un projet critique engageant la production, une structure organisée comme Quanta est préférable à un profil isolé, même talentueux.",
  },
  {
    q: "Comment vérifier la réputation d'une agence IA à Monaco ?",
    a: "Quatre vérifications essentielles : demander trois références clients joignables dans votre secteur, consulter les études de cas publiées avec accord du client, vérifier l'ancienneté de la structure et la stabilité de son équipe, et demander à voir des livrables réels (pas uniquement des présentations commerciales). Une agence sérieuse accepte ces vérifications sans réticence.",
  },
];

export default function ComparatifAgenceIAMonacoPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="section-padding pt-32 sm:pt-40 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Comparatif agences IA Monaco</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4 mb-6">
              Comparatif des agences IA à Monaco : critères et options
            </h1>
            <p className="text-foreground/60 text-[15px] leading-relaxed max-w-3xl mx-auto mb-8">
              Choisir une agence d&apos;intelligence artificielle à Monaco suppose de comparer des offres très différentes : cabinets locaux, agences parisiennes, structures internationales, freelances spécialisés. Ce comparatif a été rédigé par les équipes de Quanta, cabinet de référence publié sur quantamonaco.com, pour aider les dirigeants de la Principauté à prendre une décision éclairée. Nous y présentons les trois grands profils, les huit critères qui comptent vraiment et des exemples concrets issus du marché monégasque.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/33645636107"
                className="group bg-accent text-dark font-semibold px-6 py-3 rounded-xl text-[13px] hover:bg-accent-dark transition-all inline-flex items-center gap-2 shadow-lg shadow-accent/20"
              >
                Discuter de votre projet
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <Link href="/contact" className="bg-surface text-foreground font-medium px-6 py-3 rounded-xl text-[13px] border border-border hover:border-foreground/20 transition-all">
                Nous contacter
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 section-surface">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={3} /></div>
                <p className="text-foreground/40 text-[12px]">grands profils d&apos;agences IA</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={8} /></div>
                <p className="text-foreground/40 text-[12px]">critères comparatifs essentiels</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={40} suffix="%" /></div>
                <p className="text-foreground/40 text-[12px]">écart de budget selon le profil</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={50} suffix="+" /></div>
                <p className="text-foreground/40 text-[12px]">missions Quanta à Monaco</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Trois profils */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Panorama du marché</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Les trois grands profils d&apos;agences IA accessibles à Monaco</h2>
            <div className="space-y-4 text-foreground/60 text-[14px] leading-relaxed">
              <p>
                Le marché du conseil IA accessible aux entreprises monégasques se structure en trois grandes familles, chacune avec sa logique économique, sa culture de service et son positionnement tarifaire. Bien comprendre ces profils évite des erreurs de casting coûteuses en temps et en argent.
              </p>
              <p>
                La première famille regroupe les cabinets locaux, implantés à Monaco ou sur la Côte d&apos;Azur. Ces structures, comme notre <Link href="/cabinet" className="text-accent hover:underline">cabinet Quanta à Monaco</Link>, sont généralement de petite taille (entre 5 et 25 personnes), mais profondément ancrées dans le tissu économique régional. Leur force tient à la proximité, la disponibilité, la connaissance fine des régulateurs et des acteurs. Leur limite potentielle est la capacité à absorber des projets très volumineux, au-delà de plusieurs centaines de milliers d&apos;euros.
              </p>
              <p>
                La deuxième famille rassemble les agences parisiennes spécialisées IA. Ces structures comptent plusieurs dizaines à plusieurs centaines de consultants. Elles disposent de ressources techniques significatives et d&apos;une marque reconnue. Leur principal défaut à Monaco tient à la distance : connaissance superficielle des réglementations locales, coûts de déplacement, rotation des équipes sur la durée du projet, difficulté à organiser des ateliers réguliers sur site.
              </p>
              <p>
                La troisième famille regroupe les cabinets internationaux anglo-saxons et les big four. Très visibles dans les appels d&apos;offres des grands groupes, ils apportent une expertise mondiale mais pratiquent des tarifs élevés et un mode opératoire souvent trop lourd pour des structures monégasques de taille intermédiaire. Leur pertinence se limite aux groupes internationaux qui ont déjà une relation historique avec ces acteurs.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Tableau comparatif - Dark bubble */}
      <section className="bg-dark text-white rounded-[2rem] mx-4 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Tableau comparatif</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-4">Comparatif synthétique sur huit critères</h2>
            <p className="text-white/50 text-[14px] leading-relaxed max-w-3xl mb-10">
              Ce tableau synthétise les forces et faiblesses des trois profils sur les critères qui comptent pour un projet IA à Monaco. Les appréciations reflètent une observation terrain sur plusieurs années d&apos;accompagnement en Principauté.
            </p>
          </RevealOnScroll>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-3 text-[12px] text-white/60 font-semibold">Critère</th>
                  <th className="p-3 text-[12px] text-white/60 font-semibold">Cabinet local Monaco</th>
                  <th className="p-3 text-[12px] text-white/60 font-semibold">Agence parisienne</th>
                  <th className="p-3 text-[12px] text-white/60 font-semibold">Cabinet international</th>
                </tr>
              </thead>
              <tbody className="text-[13px]">
                {[
                  ["Présence sur site", "Excellente", "Limitée", "Ponctuelle"],
                  ["Expertise sectorielle Monaco", "Très forte", "Variable", "Moyenne"],
                  ["Langues FR et EN", "Courante", "Courante", "Anglais dominant"],
                  ["Connaissance SICCFIN et CCAF", "Élevée", "Superficielle", "Externalisée"],
                  ["Transparence tarifaire", "Généralement publiée", "Sur devis", "Opaque"],
                  ["Délai de livraison", "8-12 semaines", "12-20 semaines", "6-12 mois"],
                  ["Taille équipe projet", "Stable", "Rotative", "Pyramidale"],
                  ["Support post-déploiement", "Direct", "Via helpdesk", "Contrat récurrent"],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5">
                    {row.map((cell, j) => (
                      <td key={j} className={`p-3 ${j === 0 ? "text-white/70 font-semibold" : "text-white/60"}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Critère 1-4 */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Critères 1 à 4</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Présence, expertise, langues et réglementation</h2>
            <div className="space-y-4 text-foreground/60 text-[14px] leading-relaxed">
              <p>
                La présence physique à Monaco est le premier critère différenciant. Un projet IA suppose des ateliers avec les équipes métier, des sessions d&apos;observation des processus et des points hebdomadaires avec la direction. Un cabinet local fait ces rendez-vous en 15 minutes de trajet ; une agence parisienne facture le déplacement et limite les venues sur site. Pour un family office, cette différence pèse lourd sur la qualité du diagnostic.
              </p>
              <p>
                L&apos;expertise sectorielle est le deuxième critère. Un cabinet qui n&apos;a jamais travaillé pour une banque privée monégasque ne connaîtra pas les spécificités du reporting CRS, des contrôles SICCFIN ou des exigences de confidentialité imposées par les clients UHNWI. Notre <Link href="/expertise" className="text-accent hover:underline">expertise IA à Monaco</Link> documente nos références sectorielles et permet de vérifier l&apos;adéquation entre nos missions passées et votre contexte.
              </p>
              <p>
                La maîtrise des langues est le troisième critère. Monaco fonctionne en français, mais une part significative des clients et des documents sont en anglais, italien ou russe. Un cabinet qui ne maîtrise que le français produit des livrables inutilisables pour une partie de vos équipes. Quanta livre systématiquement en français et en anglais, avec un vocabulaire adapté au secteur.
              </p>
              <p>
                La connaissance réglementaire est le quatrième critère et probablement le plus sous-estimé. SICCFIN, CCAF, loi 1.565 sur le numérique, loi 1.362 sur la lutte contre le blanchiment : ces textes impactent directement la conception des solutions IA. Un prestataire qui découvre ces sigles en phase de projet prend des mois de retard.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Critère 5-8 */}
      <section className="section-padding section-surface">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Critères 5 à 8</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Tarifs, délais, équipes et support</h2>
            <div className="space-y-4 text-foreground/60 text-[14px] leading-relaxed">
              <p>
                La transparence tarifaire est le cinquième critère. Certaines agences affichent leurs grilles en ligne, d&apos;autres ne les communiquent qu&apos;après plusieurs rendez-vous commerciaux. Notre page <Link href="/tarifs" className="text-accent hover:underline">tarifs IA à Monaco</Link> présente l&apos;ensemble de nos fourchettes, avec un détail par type de mission. Cette transparence évite les surprises et accélère la décision.
              </p>
              <p>
                Le délai de livraison contractuel est le sixième critère. Un audit IA sérieux se livre en 4 à 6 semaines, une mission d&apos;automatisation en 8 à 12 semaines, un développement sur mesure en 12 à 20 semaines. Les cabinets qui annoncent des délais significativement plus longs pratiquent souvent une surfacturation déguisée en jours-homme. Notre <Link href="/blog/delai-projet-ia-monaco" className="text-accent hover:underline">analyse des délais d&apos;un projet IA à Monaco</Link> explique en détail les phases et leurs durées normales.
              </p>
              <p>
                La stabilité de l&apos;équipe est le septième critère. Les grandes agences tournent leurs consultants sur plusieurs missions en parallèle, avec un risque de désengagement progressif. Un cabinet local affecte une équipe restreinte et stable, ce qui garantit une continuité de la connaissance et une relation de confiance durable avec vos collaborateurs.
              </p>
              <p>
                Le support post-déploiement est le huitième critère. Une fois la solution mise en production, que se passe-t-il ? Le code évolue, les modèles IA vieillissent, les intégrations se cassent. Un bon prestataire propose un contrat de maintenance clair, des indicateurs de suivi et un interlocuteur dédié. Quanta inclut systématiquement trois mois de support après la livraison dans ses missions.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Cas d'usage selon profil */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Cas d&apos;usage</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Quel profil d&apos;agence choisir selon votre projet</h2>
            <div className="space-y-4 text-foreground/60 text-[14px] leading-relaxed">
              <p>
                Pour un projet d&apos;automatisation des processus dans une structure de moins de 50 personnes à Monaco, un cabinet local comme Quanta est généralement le meilleur choix. Budget maîtrisé, délais courts, connaissance du terrain. Nos <Link href="/resultats" className="text-accent hover:underline">études de cas clients en Principauté</Link> illustrent ce type de mission.
              </p>
              <p>
                Pour un projet stratégique transverse impliquant plusieurs filiales internationales d&apos;un groupe monégasque, une agence parisienne peut être pertinente si elle travaille en co-traitance avec un cabinet local. Cette combinaison permet de bénéficier de la puissance de feu parisienne et de l&apos;ancrage monégasque.
              </p>
              <p>
                Pour un projet IA dans une <Link href="/secteurs/banque-privee" className="text-accent hover:underline">banque privée à Monaco</Link> ou une <Link href="/secteurs/gestion-patrimoine" className="text-accent hover:underline">gestion de patrimoine</Link>, privilégiez absolument un cabinet qui maîtrise les enjeux SICCFIN. L&apos;économie apparente d&apos;un prestataire non spécialisé se paie cher en phase d&apos;audit réglementaire.
              </p>
              <p>
                Pour un projet dans le <Link href="/secteurs/commerce-luxe" className="text-accent hover:underline">commerce de luxe</Link> ou l&apos;<Link href="/secteurs/hotellerie-restauration" className="text-accent hover:underline">hôtellerie-restauration</Link>, un cabinet local qui connaît la saisonnalité monégasque et les spécificités de la clientèle internationale apportera des recommandations bien plus pertinentes qu&apos;une agence distante.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Ressources */}
      <section className="section-padding section-surface">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Ressources</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Approfondir la décision</h2>
            <p className="text-foreground/60 text-[14px] leading-relaxed mb-8">
              Ces pages complémentaires vous aideront à finaliser votre choix d&apos;agence IA à Monaco.
            </p>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: "Comment choisir son agence IA à Monaco", href: "/comment-choisir-agence-ia-monaco" },
              { title: "Pourquoi choisir Quanta à Monaco", href: "/pourquoi-choisir-quanta" },
              { title: "Combien coûte un projet IA à Monaco", href: "/combien-coute-projet-ia-monaco" },
              { title: "Agence IA à Monaco : panorama", href: "/agence-ia-monaco" },
              { title: "Consultant IA à Monaco", href: "/consultant-ia-monaco" },
              { title: "Notre méthode d&apos;intégration IA", href: "/methode" },
            ].map((a) => (
              <RevealOnScroll key={a.title}>
                <Link href={a.href} className="block p-4 rounded-xl border border-border hover:border-accent/30 transition-all group">
                  <h3 className="text-[13px] font-semibold group-hover:text-accent transition-colors">{a.title}</h3>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Questions fréquentes</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-8">Comparer les agences IA à Monaco</h2>
          </RevealOnScroll>
          <FAQ items={faqItems} />
          <FaqSchema items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-background via-accent-light/30 to-accent/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">Besoin d&apos;aide pour comparer les offres reçues ?</h2>
            <p className="text-foreground/60 text-[14px] mb-8">
              Nous pouvons vous aider à analyser objectivement les propositions reçues, même si vous hésitez à travailler avec d&apos;autres cabinets. Un conseil franc, sans engagement.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="https://wa.me/33645636107" className="group bg-accent text-dark font-semibold px-6 py-3 rounded-xl text-[13px] hover:bg-accent-dark transition-all inline-flex items-center gap-2 shadow-lg shadow-accent/20">
                Échanger sur WhatsApp
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <Link href="/contact" className="bg-surface text-foreground font-medium px-6 py-3 rounded-xl text-[13px] border border-border hover:border-foreground/20 transition-all">
                Formulaire de contact
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </PageLayout>
  );
}
