"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { trackEvent } from "@/lib/analytics";

export function Hero() {
  const reduce = useReducedMotion();
  const duration = reduce ? 0 : 0.2;
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -40]);
  return (
    <section className="relative overflow-hidden">
      <motion.div style={{ y }} className="absolute -inset-px bg-gradient-to-br from-[#D90429]/20 via-transparent to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-28">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration }}
          className="text-4xl md:text-6xl font-display font-semibold leading-tight"
        >
          Tecnologia que inspira <span className="text-[#D90429]">confiança</span><br />
          e transforma ideias em soluções inteligentes.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration, delay: duration }}
          className="mt-6 max-w-2xl text-white/70"
        >
          Websites, sistemas, apps, APIs, automações e manutenção confiável.
        </motion.p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#contato"
            className="rounded-2xl bg-[#D90429] px-5 py-3 font-medium hover:brightness-110 transition"
            onClick={() => trackEvent("cta_click", { location: "hero" })}
          >
            Solicitar orçamento
          </a>
          <a href="#portfolio" className="rounded-2xl border border-white/15 px-5 py-3 font-medium hover:border-white/30">
            Ver portfólio
          </a>
        </div>
      </div>
    </section>
  );
}