import { useState, useEffect } from "react";
import { getPadres, PadreDado } from "@/lib/adminData";
import { PageHero } from "@/components/PageHero";

const fotoMap: Record<string, string> = {
  "1": "/clero-sergio.jpg",
  "2": "/clero-rafael.jpg",
  "3": "/clero-jorge.jpg",
  "4": "/clero-jose.jpg",
};

export default function Padres() {
  const [clero, setClero] = useState<PadreDado[]>([]);
  useEffect(() => { setClero(getPadres()); }, []);

  return (
    <main className="w-full">
      <PageHero category="Paróquia Nossa Senhora Aparecida" title="Padres e Diáconos" />

      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-muted-foreground font-light leading-relaxed text-base max-w-2xl mb-16">
            Conheça os sacerdotes e diáconos que servem à nossa comunidade com dedicação e amor à missão evangelizadora da Igreja.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clero.map((p) => (
              <div
                key={p.id}
                className="group flex flex-col sm:flex-row border border-gray-100 bg-white hover:border-secondary/40 hover:shadow-md transition-all overflow-hidden"
              >
                {/* Foto */}
                <div className="sm:w-44 sm:shrink-0 h-64 sm:h-auto overflow-hidden bg-gray-100">
                  {fotoMap[p.id] ? (
                    <img
                      src={fotoMap[p.id]}
                      alt={p.nome}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-primary flex items-center justify-center">
                      <span className="text-white font-bold text-3xl">
                        {p.nome.replace(/^(Pe\.|Dc\.|Diácono|Diacono)\s*/i, "")[0]}
                      </span>
                    </div>
                  )}
                </div>

                {/* Conteúdo */}
                <div className="flex-1 p-6 flex flex-col justify-center">
                  <div className="w-6 h-px bg-secondary mb-3" />
                  <h3 className="font-display text-lg font-semibold text-primary mb-1 leading-snug">
                    {p.nome}
                  </h3>
                  <p className="text-[11px] text-secondary font-medium mb-3 tracking-widest uppercase">
                    {p.ordenacao}
                  </p>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {p.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
