import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";
import { getCapelas, CapelaDado } from "@/lib/adminData";

export default function Capelas() {
  const [capelas, setCapelas] = useState<CapelaDado[]>([]);
  useEffect(() => { setCapelas(getCapelas()); }, []);

  return (
    <main className="w-full pt-20">
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-4 block">Paróquia Nossa Senhora Aparecida</span>
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">Capelas e Setores</h1>
          <div className="w-12 h-px bg-secondary mt-6"></div>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-muted-foreground font-light leading-relaxed text-lg max-w-3xl mb-16">
            A Paróquia Nossa Senhora Aparecida é composta pela Igreja Matriz e por capelas distribuídas nos diferentes setores da cidade, levando a fé a cada bairro de Sertãozinho.
          </p>
          <div className="flex flex-col gap-6">
            {capelas.map((c) => (
              <div key={c.id} className={`p-8 border-l-4 ${c.destaque ? "border-secondary bg-muted/30" : "border-gray-100 bg-white"}`}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {c.destaque && <span className="text-xs font-semibold uppercase tracking-wider text-secondary bg-secondary/10 px-2 py-0.5">Matriz</span>}
                      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{c.setor}</span>
                    </div>
                    <h2 className="text-xl font-semibold text-primary mb-2">{c.nome}</h2>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm font-light">
                      <MapPin className="w-4 h-4 text-secondary shrink-0" />{c.endereco}
                    </div>
                  </div>
                  <div className="md:text-right shrink-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Missas</p>
                    <p className="text-sm text-primary font-medium">{c.missas}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
