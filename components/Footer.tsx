"use client";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#1E1E1E] py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-white/60 text-sm">© {new Date().getFullYear()} LINO — Code & Passion</div>
        <div className="flex items-center gap-8 text-sm">
          <nav className="flex items-center gap-6 text-white/70">
            <a href="#servicos" className="hover:text-white focus:outline-none focus-visible:ring ring-[#D90429] rounded">Serviços</a>
            <a href="#portfolio" className="hover:text-white focus:outline-none focus-visible:ring ring-[#D90429] rounded">Portfólio</a>
            <a href="#blog" className="hover:text-white focus:outline-none focus-visible:ring ring-[#D90429] rounded">Blog</a>
            <a href="#contato" className="hover:text-white focus:outline-none focus-visible:ring ring-[#D90429] rounded">Contato</a>
          </nav>
          <div className="flex items-center gap-4 text-white/70">
            <a href="#" className="hover:text-white inline-flex items-center gap-1 focus:outline-none focus-visible:ring ring-[#D90429] rounded"><Github className="h-5 w-5" />GitHub</a>
            <a href="#" className="hover:text-white inline-flex items-center gap-1 focus:outline-none focus-visible:ring ring-[#D90429] rounded"><Linkedin className="h-5 w-5" />LinkedIn</a>
            <a href="mailto:contato@lino.dev" className="hover:text-white inline-flex items-center gap-1 focus:outline-none focus-visible:ring ring-[#D90429] rounded"><Mail className="h-5 w-5" />E-mail</a>
          </div>
        </div>
        <div className="text-white/50 text-xs flex gap-4">
          <a href="#" className="hover:text-white">Política</a>
          <a href="#" className="hover:text-white">Termos</a>
        </div>
      </div>
    </footer>
  );
}