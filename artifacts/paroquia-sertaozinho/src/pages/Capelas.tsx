import { useState, useEffect } from "react";
import { MapPin, Clock } from "lucide-react";
import { getCapelas, CapelaDado } from "@/lib/adminData";
import { PageHero } from "@/components/PageHero";

export default function Capelas() {
  const [capelas, setCapelas] = useState<CapelaDado[]>([]);
  useEffect(() => { setCapelas(getCapelas()); }, []);

  return (
    <main className="w-full">
      <PageHero category="Paróquia Nossa Senhora Aparecida" title="Capelas e Setores" />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-muted-foreground font-light leading-relaxed text-base max-w-2xl mb-16">
            A Paróquia é composta pela Igreja Matriz e por capelas distribuídas nos diferentes setores da cidade, levando a fé a cada bairro de Sertãozinho.
          </p>

          <div className="flex flex-col gap-4">
            {capelas.map((c) => (
              <div
                key={c.id}
                className={`group flex flex-col md:flex-row md:items-center gap-6 p-8 border transition-shadow hover:shadow-sm ${
                  c.destaque
                    ? "border-secondary/30 bg-primary/[0.02]"
                    : "border-gray-100 bg-white"
                }`}
              >
                {/* Left: identity */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {c.destaque && (
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-secondary px-2 py-0.5">
                        Matriz
                      </span>
                    )}
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-secondary">
                      {c.setor}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-primary mb-2">{c.nome}</h2>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm font-light">
                    <MapPin className="w-3.5 h-3.5 text-secondary shrink-0" />
                    {c.endereco}
                  </div>
                </div>

                {/* Right: missas */}
                <div className="shrink-0 md:text-right border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-8">
                  <div className="flex items-center gap-1.5 mb-1 md:justify-end">
                    <Clock className="w-3.5 h-3.5 text-secondary" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Missas</span>
                  </div>
                  <p className="text-sm text-primary font-medium leading-relaxed">{c.missas}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
