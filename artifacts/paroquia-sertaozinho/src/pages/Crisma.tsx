import { useState, useEffect } from "react";
import { Link } from "wouter";
import { getContentBlock, ContentBlock } from "@/lib/adminData";

export default function Crisma() {
  const [b, setB] = useState<ContentBlock>(() => getContentBlock("crisma"));
  useEffect(() => { setB(getContentBlock("crisma")); }, []);
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
            <h2 className="text-2xl font-semibold text-primary mb-4">Preparação e Inscrições</h2>
            <div className="w-10 h-px bg-secondary mb-8"></div>
            <div className="flex flex-col gap-0">
              {b.itens.map((item, i) => (
                <div key={i} className="flex gap-4 py-3 border-b border-gray-100">
                  <span className="w-6 h-6 bg-secondary/10 text-secondary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i+1}</span>
                  <div><p className="text-sm font-medium text-primary">{item.label}</p><p className="text-muted-foreground font-light text-sm">{item.info}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center gap-6">
          <p className="text-muted-foreground font-light">Quer se inscrever no curso de Crisma?</p>
          <Link href="/secretaria" className="shrink-0 px-6 py-2 bg-primary text-white text-sm font-semibold tracking-wider uppercase hover:bg-primary/90 transition-colors">Ver Secretaria</Link>
        </div>
      </section>
    </main>
  );
}
