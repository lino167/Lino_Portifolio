"use client";
import { Cpu, Rocket, ShieldCheck, Workflow } from "lucide-react";

const items = [
  { icon: Cpu, text: "Stack moderna" },
  { icon: Rocket, text: "Entrega ágil" },
  { icon: ShieldCheck, text: "Segurança" },
  { icon: Workflow, text: "Processo claro" },
];

export function TrustBar() {
  return (
    <section className="border-y border-[#1E1E1E] bg-black/20" aria-label="Barra de confiança">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((Item, i) => (
          <div key={i} className="group flex items-center gap-3 text-white/70">
            <Item.icon className="h-5 w-5 text-[#D90429] transition-transform group-hover:-translate-y-0.5" />
            <span>{Item.text}</span>
            <span className="ml-auto h-px w-0 bg-[#D90429] transition-all duration-200 group-hover:w-6" />
          </div>
        ))}
      </div>
    </section>
  );
}