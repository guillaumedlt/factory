import Link from "next/link";
import PageLayout from "@/components/PageLayout";

export default function NotFound() {
  return (
    <PageLayout>
      <div className="pt-32 pb-20 sm:pt-40 sm:pb-28 text-center">
        <div className="max-w-md mx-auto px-6">
          <div className="text-7xl font-bold text-accent/20 mb-4">404</div>
          <h1 className="text-2xl font-bold mb-4">Page introuvable.</h1>
          <p className="text-foreground/50 text-[14px] leading-relaxed mb-8">
            Cette page n&apos;existe pas ou a été déplacée. Voici quelques liens pour vous réorienter.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/" className="bg-accent text-dark font-semibold px-6 py-3 rounded-xl text-[13px] hover:bg-accent-dark transition-colors">
              Retour à l&apos;accueil
            </Link>
            <Link href="/contact" className="bg-surface text-foreground font-medium px-6 py-3 rounded-xl text-[13px] border border-border hover:border-foreground/20 transition-colors">
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
