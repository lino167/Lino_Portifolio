"use client";
import { trackEvent } from "@/lib/analytics";

export function BlogTeaser() {
  const posts = [
    { title: "Arquitetura escalável em Next.js", date: "2024-08-12", summary: "Padrões de modularização e performance." },
    { title: "Design de APIs robustas", date: "2024-09-03", summary: "Contratos, versionamento e observabilidade." },
    { title: "Automação eficiente com Webhooks", date: "2024-10-01", summary: "Estratégias de reprocessamento e idempotência." },
  ];

  return (
    <section id="blog" aria-labelledby="blog-teaser" className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
      <h2 id="blog-teaser" className="text-2xl md:text-3xl font-semibold">Blog — artigos recentes</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((p, i) => (
          <article key={i} className="rounded-2xl border border-[#1E1E1E] bg-[#1E1E1E] p-5">
            <h3 className="text-lg font-medium">{p.title}</h3>
            <div className="text-xs text-white/50 mt-1">{p.date}</div>
            <p className="text-white/70 mt-3">{p.summary}</p>
            <a
              href="/blog"
              className="mt-4 inline-block rounded-2xl border border-white/15 px-4 py-2 text-sm hover:border-white/30"
              onClick={() => trackEvent("blog_read", { where: "teaser" })}
            >
              Ler mais
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}