export function ServicesHighlight() {
  const services = [
    {
      title: "Web",
      problem: "Sites lentos e pouco confiáveis",
      benefits: "SEO, performance, acessibilidade AA",
      result: "Mais tráfego qualificado e conversão",
    },
    {
      title: "Apps/PWA",
      problem: "Experiências móveis desconectadas",
      benefits: "PWA offline, push, UX fluida",
      result: "Engajamento e retenção maiores",
    },
    {
      title: "APIs & Automações",
      problem: "Processos manuais e integrações frágeis",
      benefits: "APIs robustas, jobs e webhooks",
      result: "Escalabilidade e eficiência operacional",
    },
    {
      title: "Suporte & Manutenção",
      problem: "Incidentes e dívidas técnicas",
      benefits: "Monitoramento, correções, melhorias",
      result: "Estabilidade e segurança contínuas",
    },
  ];

  return (
    <section id="servicos" aria-labelledby="servicos-destaque" className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
      <h2 id="servicos-destaque" className="text-2xl md:text-3xl font-semibold">Serviços em destaque</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="group rounded-2xl border border-[#1E1E1E] bg-[#1E1E1E] p-5 hover:border-[#D90429]/50 transition-colors"
          >
            <div className="text-lg font-medium">{s.title}</div>
            <div className="mt-3 text-white/70">
              <div><span className="text-white">Problema:</span> {s.problem}</div>
              <div className="mt-2"><span className="text-white">Benefícios:</span> {s.benefits}</div>
              <div className="mt-2"><span className="text-white">Resultado:</span> {s.result}</div>
            </div>
            <div className="mt-4 h-0.5 w-0 bg-[#D90429] transition-all duration-200 group-hover:w-full" />
          </div>
        ))}
      </div>
    </section>
  );
}