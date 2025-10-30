"use client";
import { trackEvent } from "@/lib/analytics";

export function PortfolioHighlight() {
  const cases = [
    { title: "E-commerce Pro", tag: "Web", kpi: "+37% conversão" },
    { title: "App Delivery", tag: "Apps/PWA", kpi: "+22% retenção" },
    { title: "Hub de Integrações", tag: "APIs", kpi: "-48% tempo de operação" },
  ];

  return (
    <section id="portfolio" aria-labelledby="portfolio-highlight" className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
      <h2 id="portfolio-highlight" className="text-2xl md:text-3xl font-semibold">Portfólio em destaque</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {cases.map((c, i) => (
          <div key={i} className="rounded-2xl border border-[#1E1E1E] bg-[#1E1E1E] p-5">
            <div className="flex items-center justify-between">
              <div className="text-lg font-medium">{c.title}</div>
              <span className="text-xs px-2 py-1 rounded bg-white/10 text-white/70">{c.tag}</span>
            </div>
            <div className="mt-3 text-[#D90429] font-semibold">{c.kpi}</div>
            <a
              href="/portfolio"
              className="mt-4 inline-block rounded-2xl border border-white/15 px-4 py-2 text-sm hover:border-white/30"
              onClick={() => trackEvent("portfolio_view", { where: "highlight" })}
            >
              Ver case
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}