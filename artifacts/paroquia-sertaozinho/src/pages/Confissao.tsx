import { useState, useEffect } from "react";
import { Link } from "wouter";
import { getContentBlock, ContentBlock } from "@/lib/adminData";

export default function Confissao() {
  const [b, setB] = useState<ContentBlock>(() => getContentBlock("confissao"));
  useEffect(() => { setB(getContentBlock("confissao")); }, []);
  return (
    <main className="w-full pt-20">
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-4 block">Sacramentos</span>
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-2">{b.titulo}</h1>
          {b.subtitulo && <p className="text-white/70 font-light">{b.subtitulo}</p>}
          <div className="w-12 h-px bg-secondary mt-6"></div>
        </div>
      </section>
      <section className="py-20 bg-background border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">O Sacramento</h2>
            <div className="w-10 h-px bg-secondary mb-8"></div>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">{b.descricao}</p>
            {b.citacao && <p className="text-muted-foreground font-light leading-relaxed italic">{b.citacao}</p>}
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">Horários de Confissão</h2>
            <div className="w-10 h-px bg-secondary mb-8"></div>
            {b.itens.map((item, i) => (
              <div key={i} className="flex justify-between items-center py-4 border-b border-gray-100">
                <span className="text-sm font-medium text-primary">{item.label}</span>
                <span className="text-sm text-muted-foreground font-light">{item.info}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center gap-6">
          <p className="text-muted-foreground font-light">Precisa de acompanhamento espiritual? Fale com nossa equipe.</p>
          <Link href="/contato" className="shrink-0 px-6 py-2 bg-primary text-white text-sm font-semibold tracking-wider uppercase hover:bg-primary/90 transition-colors">Entrar em Contato</Link>
        </div>
      </section>
    </main>
  );
}
