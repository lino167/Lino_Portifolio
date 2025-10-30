export function Sections() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <section id="servicos" aria-labelledby="servicos-title">
        <h2 id="servicos-title" className="text-2xl md:text-3xl font-semibold">Serviços</h2>
        <p className="text-white/70 mt-2">Criação de sistemas web, apps/PWA, APIs & automações, dashboards e manutenção.</p>
      </section>
      <section id="portfolio" aria-labelledby="portfolio-title">
        <h2 id="portfolio-title" className="text-2xl md:text-3xl font-semibold">Portfólio</h2>
        <p className="text-white/70 mt-2">Cases com contexto → solução → resultados (KPIs) e stack utilizada.</p>
      </section>
      <section id="blog" aria-labelledby="blog-title">
        <h2 id="blog-title" className="text-2xl md:text-3xl font-semibold">Blog</h2>
        <p className="text-white/70 mt-2">Artigos em MDX: arquitetura, performance, API design, observabilidade.</p>
      </section>
      <section id="contato" aria-labelledby="contato-title">
        <h2 id="contato-title" className="text-2xl md:text-3xl font-semibold">Contato</h2>
        <p className="text-white/70 mt-2">Briefing rápido para orçamento. Integração futura com Supabase/Resend.</p>
      </section>
    </main>
  );
}