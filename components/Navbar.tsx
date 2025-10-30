"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const onCTA = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackEvent("cta_click", { location: "header" });
  };

  return (
    <header className="sticky top-0 z-30 border-b border-[#1E1E1E] backdrop-blur bg-black/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" aria-label="Ir para início" className="flex items-center gap-2 group focus:outline-none focus-visible:ring ring-[#D90429] rounded">
          <Image
            src="/logo/Logo_sem_backgroud.png"
            alt="Logo LINO"
            width={120}
            height={32}
            priority
            className="h-8 w-auto"
          />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#servicos" className="hover:text-white focus:outline-none focus-visible:ring ring-[#D90429] rounded">Serviços</a>
          <a href="#portfolio" className="hover:text-white focus:outline-none focus-visible:ring ring-[#D90429] rounded">Portfólio</a>
          <a href="#blog" className="hover:text-white focus:outline-none focus-visible:ring ring-[#D90429] rounded">Blog</a>
          <a href="#contato" className="hover:text-white focus:outline-none focus-visible:ring ring-[#D90429] rounded">Contato</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#contato" onClick={onCTA} className="inline-flex items-center gap-2 rounded-2xl border border-[#D90429]/60 px-4 py-2 text-sm font-medium hover:bg-[#D90429] transition-colors focus:outline-none focus-visible:ring ring-[#D90429]">
            Contratar <ArrowRight className="h-4 w-4" />
          </a>
          <button aria-label="Abrir menu" className="md:hidden inline-flex items-center justify-center rounded-xl p-2 hover:bg-white/10 focus:outline-none focus-visible:ring ring-[#D90429]" onClick={() => setOpen(true)}>
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/80" role="dialog" aria-modal="true">
          <div className="absolute right-0 top-0 h-full w-72 bg-[#0A0A0A] border-l border-[#1E1E1E] p-6 flex flex-col gap-4">
            <button aria-label="Fechar menu" className="self-end rounded-md p-2 hover:bg-white/10 focus:outline-none focus-visible:ring ring-[#D90429]" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
            </button>
            <nav className="flex flex-col gap-4 text-white/80">
              <a href="#servicos" onClick={() => setOpen(false)} className="hover:text-white">Serviços</a>
              <a href="#portfolio" onClick={() => setOpen(false)} className="hover:text-white">Portfólio</a>
              <a href="#blog" onClick={() => setOpen(false)} className="hover:text-white">Blog</a>
              <a href="#contato" onClick={() => setOpen(false)} className="hover:text-white">Contato</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}