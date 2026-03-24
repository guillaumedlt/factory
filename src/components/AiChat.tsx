"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

type Message = { role: "user" | "assistant"; text: string; suggestions?: string[] };

const models = [
  { id: "claude", name: "Claude Opus 4", icon: "/logos/claude.png" },
  { id: "gpt", name: "GPT-4o", icon: "/logos/chatgpt.png" },
  { id: "mistral", name: "Mistral Large", icon: "/logos/mistral.png" },
];

const initialSuggestions = [
  "Que fait Factory ?",
  "Combien ça coûte ?",
  "Quels sont vos délais ?",
];

const knowledgeBase: { keywords: string[]; answer: string; followUp?: string[] }[] = [
  {
    keywords: ["fait", "factory", "quoi", "activité", "service", "propose"],
    answer:
      "Factory est un cabinet d'expertise IA basé à Monaco. Nous accompagnons les entreprises de la Principauté dans l'intégration opérationnelle de l'IA :\n\n→ Audit & stratégie IA\n→ Automatisation des processus\n→ Développement IA sur mesure\n→ Formation & appropriation\n\nNotre approche est pragmatique.nous transformons des processus concrets, pas des PowerPoints.",
    followUp: ["Combien ça coûte ?", "Comment ça se passe concrètement ?", "Quels secteurs ?"],
  },
  {
    keywords: ["prix", "coût", "coûte", "tarif", "budget", "combien", "investissement", "devis"],
    answer:
      "Nos honoraires dépendent du périmètre de la mission. À titre indicatif :\n\n→ Audit & diagnostic : à partir de 5 000 €\n→ Automatisation de processus : 10 000 – 40 000 €\n→ Développement IA sur mesure : sur devis\n→ Formation : à partir de 2 000 € / journée\n\nChaque engagement commence par un entretien gratuit pour cadrer vos besoins. Le ROI constaté chez nos clients couvre généralement l'investissement dès les 3 premiers mois.",
    followUp: ["Quel ROI attendre ?", "Comment démarre-t-on ?", "Quels délais ?"],
  },
  {
    keywords: ["roi", "retour", "rentab", "amortir", "gains", "économie"],
    answer:
      "Les résultats constatés auprès de nos clients à Monaco :\n\n→ 4 jours/mois récupérés sur la gestion documentaire\n→ -80% du temps de production d'actes juridiques\n→ 0 échéance manquée grâce aux alertes automatiques\n→ Génération d'échéanciers en 1 clic au lieu d'une demi-journée\n\nL'investissement est généralement amorti en 2 à 4 mois.",
    followUp: ["Combien ça coûte ?", "Un exemple concret ?", "Comment démarre-t-on ?"],
  },
  {
    keywords: ["délai", "durée", "temps", "combien de temps", "calendrier", "planning"],
    answer:
      "Notre méthode se déroule en quatre phases :\n\n→ Immersion : 1–2 semaines\n→ Diagnostic : 1 semaine\n→ Déploiement : 4–8 semaines\n→ Transmission : 2 semaines\n\nTotal : 8 à 13 semaines pour une transformation complète. Les premiers résultats mesurables arrivent dès la fin du premier mois de déploiement.",
    followUp: ["Comment ça se passe concrètement ?", "Combien ça coûte ?", "Un exemple concret ?"],
  },
  {
    keywords: ["monaco", "principauté", "monégasque", "pourquoi monaco", "uniquement"],
    answer:
      "Notre expertise est ancrée dans la Principauté. Nous connaissons intimement :\n\n→ L'environnement réglementaire (SICCFIN, CCAF)\n→ Le droit monégasque et ses spécificités (SASURE, etc.)\n→ Les pratiques des sociétés de gestion, cabinets d'avocats et family offices locaux\n\nC'est cette connaissance sectorielle + technique qui nous distingue des cabinets généralistes.",
    followUp: ["Quels secteurs ?", "Un exemple concret ?", "Comment démarre-t-on ?"],
  },
  {
    keywords: ["secteur", "client", "qui", "pour qui", "cible", "patrimoine", "avocat", "juridique", "immobilier", "family office"],
    answer:
      "Nous intervenons principalement auprès de quatre secteurs à Monaco :\n\n→ Gestion de patrimoine & Family offices.collecte documentaire, conformité LCB-FT, reporting SICCFIN\n→ Cabinets d'avocats & études juridiques.rédaction d'actes, recherches multi-juridictions\n→ Immobilier & promotion.gestion documentaire, veille urbanistique\n→ Services professionnels & corporate.facturation, OCR, suivi administratif",
    followUp: ["Un exemple concret ?", "Combien ça coûte ?", "Comment démarre-t-on ?"],
  },
  {
    keywords: ["exemple", "concret", "cas", "résultat", "preuve", "référence", "témoignage"],
    answer:
      "Quelques résultats documentés chez nos clients monégasques :\n\n→ Société de gestion : 150 relevés bancaires traités automatiquement, 4 jours/mois récupérés\n→ Cabinet juridique : statuts de société produits en 5 min au lieu de 3h (-80%)\n→ Administration : alertes automatiques à 90/60/30 jours, zéro échéance manquée\n→ Échéancier obligataire : tableau généré en 1 clic au lieu d'une demi-journée",
    followUp: ["Comment démarre-t-on ?", "Combien ça coûte ?", "Quels délais ?"],
  },
  {
    keywords: ["comment", "démarre", "commence", "premier", "échange", "contact", "rdv", "rendez", "entretien", "process"],
    answer:
      "Tout commence par un entretien confidentiel de 30 minutes.gratuit et sans engagement.\n\n1. Vous nous contactez par email ou via le formulaire\n2. Nous planifions un échange pour comprendre vos enjeux\n3. Nous identifions ensemble les premiers leviers\n4. Si pertinent, nous proposons une feuille de route\n\n→ guillaume@ceres.agency",
    followUp: ["Combien ça coûte ?", "Quels délais ?", "Quels secteurs ?"],
  },
  {
    keywords: ["outil", "techno", "technologie", "llm", "modèle", "claude", "gpt", "mistral", "cursor", "stack"],
    answer:
      "Nous maîtrisons et déployons les technologies IA les plus avancées :\n\n→ LLMs : Claude (Anthropic), GPT-4 (OpenAI), Mistral\n→ Automatisation : n8n, Make, scripts sur mesure\n→ Développement : Cursor, Lovable\n→ CRM & données : HubSpot, Clay, Linear\n→ Extraction documentaire : OCR avancé, RAG, pipelines ML\n\nNous choisissons la stack adaptée à chaque projet.pas de solution unique.",
    followUp: ["Comment ça se passe concrètement ?", "Un exemple concret ?", "Combien ça coûte ?"],
  },
  {
    keywords: ["sécurité", "confidentialité", "rgpd", "donnée", "données", "confidentiel", "privacy"],
    answer:
      "La confidentialité est au fondement de notre pratique :\n\n→ Solutions conformes au RGPD et aux exigences de la CCAF\n→ Les données clients ne quittent jamais le périmètre convenu\n→ Hébergement sécurisé, pas de transfert vers des tiers\n→ Chaque solution intègre les contraintes de confidentialité propres à la Principauté\n\nNous signons systématiquement un accord de confidentialité avant toute intervention.",
    followUp: ["Comment démarre-t-on ?", "Quels secteurs ?", "Que fait Factory ?"],
  },
  {
    keywords: ["formation", "former", "apprendre", "équipe", "compétence", "prompt", "appropriation"],
    answer:
      "Nous concevons des programmes de formation calibrés sur vos cas d'usage réels :\n\n→ Fondamentaux de l'IA générative\n→ Prompt engineering avancé\n→ Maîtrise de vos outils métier IA\n→ Bonnes pratiques de sécurité et confidentialité\n\nChaque collaborateur repart avec les compétences pour exploiter et faire évoluer les outils de manière autonome. Nous livrons aussi des guides de référence internes.",
    followUp: ["Combien ça coûte ?", "Quels délais ?", "Comment démarre-t-on ?"],
  },
  {
    keywords: ["automatisation", "automatiser", "processus", "workflow", "document", "ocr", "extraction"],
    answer:
      "Nous architecturons des solutions d'automatisation intégrées à votre environnement :\n\n→ Extraction documentaire (PDF, scans, emails)\n→ Classification intelligente et classement prédictif\n→ Contrôles de conformité automatisés\n→ Génération de rapports et facturation\n→ Workflows de validation\n\nChaque solution fonctionne avec vos outils actuels. Nous ne remplaçons pas votre infrastructure : nous l'augmentons.",
    followUp: ["Un exemple concret ?", "Combien ça coûte ?", "Quels délais ?"],
  },
  {
    keywords: ["guillaume", "fondateur", "qui êtes", "équipe", "cabinet"],
    answer:
      "Factory est un cabinet d'expertise IA fondé à Monaco par Guillaume.\n\nNotre conviction : l'IA n'a de valeur que si elle s'inscrit dans la réalité opérationnelle d'une organisation. Nous conjuguons maîtrise technique des technologies de dernière génération et connaissance intime de l'environnement économique et réglementaire de la Principauté.\n\nChaque engagement commence par l'écoute.",
    followUp: ["Comment démarre-t-on ?", "Que fait Factory ?", "Quels secteurs ?"],
  },
];

const fallbackSuggestions = [
  "Que fait Factory ?",
  "Combien ça coûte ?",
  "Un exemple concret ?",
  "Comment démarre-t-on ?",
];

function findAnswer(input: string): { text: string; suggestions?: string[] } {
  const n = input.toLowerCase().replace(/[?!.,'']/g, "").trim();

  // Score each entry
  let bestScore = 0;
  let bestEntry: (typeof knowledgeBase)[0] | null = null;

  for (const entry of knowledgeBase) {
    let score = 0;
    for (const kw of entry.keywords) {
      if (n.includes(kw)) score += kw.length;
    }
    if (score > bestScore) {
      bestScore = score;
      bestEntry = entry;
    }
  }

  if (bestEntry && bestScore > 0) {
    return { text: bestEntry.answer, suggestions: bestEntry.followUp };
  }

  return {
    text: "Je n'ai pas assez d'informations pour répondre précisément à cette question. Voici ce que je peux vous aider à explorer :",
    suggestions: fallbackSuggestions,
  };
}

export default function AiChat() {
  const [activeModel, setActiveModel] = useState(models[0]);
  const [modelOpen, setModelOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollTo({ top: ref.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  function send(text: string) {
    if (!text.trim() || typing) return;
    setMessages((p) => [...p, { role: "user", text: text.trim() }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const result = findAnswer(text);
      setMessages((p) => [...p, { role: "assistant", text: result.text, suggestions: result.suggestions }]);
      setTyping(false);
    }, 500 + Math.random() * 700);
  }

  const hasMessages = messages.length > 0;

  return (
    <div className="rounded-2xl bg-dark/95 backdrop-blur-md border border-white/[0.1] overflow-visible shadow-2xl shadow-black/30">
      {/* Initial suggestions */}
      {!hasMessages && !typing && (
        <div className="flex items-center justify-center gap-2 px-4 pt-4 pb-2 flex-wrap">
          {initialSuggestions.map((s) => (
            <button key={s} onClick={() => send(s)} className="text-[11px] text-white/45 bg-white/[0.05] border border-white/[0.08] px-3 py-1.5 rounded-full hover:bg-white/[0.1] hover:text-white/70 hover:border-white/[0.15] transition-all">
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Messages */}
      {hasMessages && (
        <div ref={ref} className="max-h-[220px] overflow-y-auto px-4 pt-4 pb-2 space-y-3" style={{ scrollbarWidth: "none" }}>
          {messages.map((msg, i) => (
            <div key={i}>
              <div className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "assistant" && (
                  <div className="w-5 h-5 relative rounded-md overflow-hidden shrink-0 mt-1 ring-1 ring-white/[0.1]">
                    <Image src={activeModel.icon} alt="" fill className="object-contain" sizes="20px" />
                  </div>
                )}
                <div className={`max-w-[80%] px-3 py-2 text-[12px] leading-relaxed whitespace-pre-line ${
                  msg.role === "user"
                    ? "bg-accent text-dark rounded-2xl rounded-br-sm"
                    : "bg-white/[0.06] text-white/70 rounded-2xl rounded-tl-sm"
                }`}>
                  {msg.text}
                </div>
              </div>
              {/* Follow-up suggestions */}
              {msg.role === "assistant" && msg.suggestions && i === messages.length - 1 && !typing && (
                <div className="flex flex-wrap gap-1.5 mt-2 pl-7">
                  {msg.suggestions.map((s) => (
                    <button key={s} onClick={() => send(s)} className="text-[10px] text-white/40 bg-white/[0.04] border border-white/[0.07] px-2.5 py-1 rounded-full hover:bg-white/[0.08] hover:text-white/60 hover:border-white/[0.12] transition-all">
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {typing && (
            <div className="flex gap-2">
              <div className="w-5 h-5 relative rounded-md overflow-hidden shrink-0 mt-1 ring-1 ring-white/[0.1]">
                <Image src={activeModel.icon} alt="" fill className="object-contain" sizes="20px" />
              </div>
              <div className="bg-white/[0.06] px-3 py-2 rounded-2xl rounded-tl-sm flex items-center gap-1">
                {[0, 150, 300].map((d) => (
                  <span key={d} className="w-1.5 h-1.5 rounded-full bg-white/25 animate-bounce" style={{ animationDelay: `${d}ms` }} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Input */}
      <div className="px-4 pt-2 pb-3">
        <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 mb-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send(input)}
            placeholder="Posez une question sur Factory..."
            className="w-full bg-transparent text-white text-[13px] placeholder:text-white/25 outline-none"
          />
        </div>

        <div className="flex items-center justify-between">
          {/* Model selector */}
          <div className="relative">
            <button
              onClick={() => setModelOpen(!modelOpen)}
              className="flex items-center gap-2 h-8 px-2.5 rounded-lg bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.08] transition-all"
            >
              <div className="w-4 h-4 relative rounded-sm overflow-hidden shrink-0">
                <Image src={activeModel.icon} alt="" fill className="object-contain" sizes="16px" />
              </div>
              <span className="text-[11px] text-white/60 font-medium">{activeModel.name}</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`text-white/25 transition-transform duration-200 ${modelOpen ? "rotate-180" : ""}`}>
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {modelOpen && (
              <div className="absolute bottom-full left-0 mb-2 w-48 bg-[#2a2a2a] border border-white/[0.1] rounded-xl shadow-2xl shadow-black/50 py-1 z-20">
                {models.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => { setActiveModel(m); setModelOpen(false); }}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 hover:bg-white/[0.06] transition-colors ${m.id === activeModel.id ? "bg-white/[0.04]" : ""}`}
                  >
                    <div className="w-5 h-5 relative rounded-md overflow-hidden shrink-0">
                      <Image src={m.icon} alt={m.name} fill className="object-contain" sizes="20px" />
                    </div>
                    <span className="text-[12px] text-white/70 font-medium">{m.name}</span>
                    {m.id === activeModel.id && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-accent ml-auto"><path d="M5 13l4 4L19 7" /></svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => send(input)}
            disabled={!input.trim() || typing}
            className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center hover:bg-accent-dark transition-colors disabled:opacity-20 shrink-0"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-dark">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
