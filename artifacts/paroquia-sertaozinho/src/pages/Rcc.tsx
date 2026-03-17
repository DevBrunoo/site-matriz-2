import { useState, useEffect } from "react";
import { getContentBlock, ContentBlock } from "@/lib/adminData";

export default function Rcc() {
  const [b, setB] = useState<ContentBlock>(() => getContentBlock("rcc"));
  useEffect(() => { setB(getContentBlock("rcc")); }, []);
  return <PastoralPage block={b} />;
}

function PastoralPage({ block: b }: { block: ContentBlock }) {
  return (
    <main className="w-full pt-20">
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-4 block">Pastorais</span>
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-2">{b.titulo}</h1>
          {b.subtitulo && <p className="text-white/70 font-light mb-2">{b.subtitulo}</p>}
          <div className="w-12 h-px bg-secondary mt-4"></div>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">Sobre o Grupo</h2>
            <div className="w-10 h-px bg-secondary mb-8"></div>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">{b.descricao}</p>
            {b.citacao && <p className="text-muted-foreground font-light leading-relaxed italic">{b.citacao}</p>}
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">Encontros e Atividades</h2>
            <div className="w-10 h-px bg-secondary mb-8"></div>
            {b.itens.map((item, i) => (
              <div key={i} className="flex justify-between items-start py-4 border-b border-gray-100">
                <span className="text-sm font-medium text-primary w-40 shrink-0">{item.label}</span>
                <span className="text-sm text-muted-foreground font-light text-right">{item.info}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
