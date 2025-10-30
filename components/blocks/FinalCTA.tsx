"use client";
import { trackEvent } from "@/lib/analytics";

export function FinalCTA() {
  return (
    <section id="contato" aria-labelledby="cta-final" className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
      <div className="rounded-2xl border border-[#1E1E1E] bg-[#1E1E1E] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 id="cta-final" className="text-2xl md:text-3xl font-semibold">Pronto para iniciar o briefing?</h2>
          <p className="text-white/70 mt-2">Responda algumas perguntas rápidas e receba um orçamento.</p>
        </div>
        <a
          href="/contato"
          className="rounded-2xl bg-[#D90429] px-5 py-3 font-medium hover:brightness-110"
          onClick={() => trackEvent("briefing_start", { from: "home_final_cta" })}
        >
          Iniciar briefing
        </a>
      </div>
    </section>
  );
}