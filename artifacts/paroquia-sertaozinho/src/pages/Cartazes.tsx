import { useState, useEffect } from "react";
import { getPosters, Poster } from "@/lib/adminData";

export default function Cartazes() {
  const [posters, setPosters] = useState<Poster[]>([]);
  useEffect(() => { setPosters(getPosters().filter(p => p.ativo)); }, []);

  return (
    <main className="w-full pt-20">
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-4 block">Comunicação</span>
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">Cartazes</h1>
          <div className="w-12 h-px bg-secondary mt-6"></div>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posters.length === 0 ? (
            <p className="text-muted-foreground font-light text-center py-20">Nenhum cartaz publicado no momento.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {posters.map(p => (
                <div key={p.id} className="border border-gray-100 bg-white group">
                  <div className="overflow-hidden">
                    <img src={p.imageDataUrl} alt={p.titulo} className="w-full object-cover group-hover:scale-105 transition-transform duration-500" style={{ maxHeight: 400 }} />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-primary">{p.titulo}</h3>
                    {p.descricao && <p className="text-muted-foreground text-sm font-light mt-1">{p.descricao}</p>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
