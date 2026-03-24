"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const expertiseLinks = [
  { href: "/expertise/audit-strategie-ia", label: "Audit & stratégie IA" },
  { href: "/expertise/automatisation-processus", label: "Automatisation" },
  { href: "/expertise/developpement-ia-sur-mesure", label: "IA sur mesure" },
  { href: "/expertise/marketing-acquisition", label: "Marketing & acquisition" },
  { href: "/expertise/outils-internes", label: "Outils internes" },
  { href: "/expertise/formation-ia", label: "Formation IA" },
];

const navLinks = [
  { href: "/expertise", label: "Expertise", submenu: true },
  { href: "/methode", label: "Méthode" },
  { href: "/secteurs", label: "Secteurs" },
  { href: "/resultats", label: "Résultats" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const subRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  function openSub() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setSubOpen(true);
  }

  function closeSub() {
    timeoutRef.current = setTimeout(() => setSubOpen(false), 200);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-5 pt-4">
      <nav className={`max-w-6xl mx-auto rounded-2xl px-5 py-3.5 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "bg-dark/95 backdrop-blur-md shadow-xl shadow-black/10" : "bg-dark"
      }`}>
        <Link href="/" className="text-white text-[15px] font-semibold tracking-tight">
          Factory<span className="text-accent text-[10px] align-top ml-0.5">&#8482;</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) =>
            link.submenu ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={openSub}
                onMouseLeave={closeSub}
              >
                <Link
                  href={link.href}
                  className="text-[13px] text-white/60 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  {link.label}
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform duration-200 ${subOpen ? "rotate-180" : ""}`}>
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </Link>

                {/* Dropdown */}
                <div
                  ref={subRef}
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                    subOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                  onMouseEnter={openSub}
                  onMouseLeave={closeSub}
                >
                  <div className="bg-dark/95 backdrop-blur-md border border-white/[0.08] rounded-xl shadow-2xl shadow-black/30 p-2 w-56">
                    <Link
                      href="/expertise"
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-white/[0.06] transition-colors text-[12px] text-white/50 hover:text-white mb-1"
                    >
                      <span className="w-6 h-6 rounded-md bg-accent/15 flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                          <path d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      </span>
                      Toutes les expertises
                    </Link>
                    <div className="h-px bg-white/[0.06] my-1" />
                    {expertiseLinks.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-white/[0.06] transition-colors text-[12px] text-white/45 hover:text-white"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={link.href} href={link.href} className="text-[13px] text-white/60 hover:text-white transition-colors">
                {link.label}
              </Link>
            )
          )}
        </div>

        <Link href="/contact" className="hidden md:inline-flex bg-accent text-dark text-[13px] font-semibold px-4 py-2 rounded-lg hover:bg-accent-dark transition-colors">
          Solliciter un entretien
        </Link>

        {/* Mobile toggle */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" aria-expanded={menuOpen}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </nav>

      {/* White paper banner */}
      <Link
        href="/white-paper"
        className="group max-w-6xl mx-auto mt-2 flex items-center justify-center gap-2.5 bg-dark/80 backdrop-blur-md rounded-xl px-4 py-2 transition-all hover:bg-dark"
      >
        <span className="text-[8px] font-bold uppercase tracking-wider text-dark bg-accent px-1.5 py-0.5 rounded shrink-0">
          Nouveau
        </span>
        <span className="text-[11px] text-white/50 group-hover:text-white/80 transition-colors truncate">
          White paper : L&apos;IA dans la Principauté de Monaco
        </span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white/20 group-hover:text-accent group-hover:translate-x-0.5 transition-all shrink-0">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark rounded-2xl mt-2 px-5 py-5 flex flex-col gap-1 animate-fade-in">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link href={link.href} onClick={() => setMenuOpen(false)} className="text-[13px] text-white/60 hover:text-white py-2 block">
                {link.label}
              </Link>
              {link.submenu && (
                <div className="pl-4 space-y-1 mb-2">
                  {expertiseLinks.map((sub) => (
                    <Link key={sub.href} href={sub.href} onClick={() => setMenuOpen(false)} className="text-[12px] text-white/35 hover:text-white/70 py-1.5 block">
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="bg-accent text-dark text-[13px] font-semibold px-4 py-2.5 rounded-lg text-center mt-2">
            Solliciter un entretien
          </Link>
        </div>
      )}
    </header>
  );
}
