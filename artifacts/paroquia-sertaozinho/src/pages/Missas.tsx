import { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import { getHorarios, HorarioMissa } from "@/lib/adminData";

const LOCAIS = ["Igreja Matriz","Capela São José","Capela Sant'Ana","Capela São Francisco de Assis","Capela Nossa Senhora do Carmo"];

export default function Missas() {
  const [horarios, setHorarios] = useState<HorarioMissa[]>([]);
  useEffect(() => { setHorarios(getHorarios()); }, []);

  const grouped = LOCAIS.map(l => ({ local: l, dias: horarios.filter(h => h.local === l) })).filter(g => g.dias.length > 0);

  return (
    <main className="w-full pt-20">
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-4 block">Agenda</span>
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">Horários de Missa</h1>
          <div className="w-12 h-px bg-secondary mt-6"></div>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-muted-foreground font-light leading-relaxed text-lg max-w-3xl mb-16">
            As missas são celebradas diariamente na Igreja Matriz e semanalmente nas capelas dos setores. Venha participar da Eucaristia.
          </p>
          <div className="flex flex-col gap-10">
            {grouped.map(({ local, dias }) => (
              <div key={local}>
                <div className="flex items-center gap-4 mb-6">
                  <Clock className="w-5 h-5 text-secondary" />
                  <h2 className="text-xl font-semibold text-primary">{local}</h2>
                </div>
                <div className="ml-9 border-t border-gray-100">
                  {dias.map((item) => (
                    <div key={item.id} className="flex items-center justify-between py-4 border-b border-gray-100">
                      <span className="text-sm font-medium text-primary w-48">{item.dia}</span>
                      <div className="flex gap-3 flex-wrap justify-end">
                        {item.horarios.split(",").map(h => (
                          <span key={h} className="text-sm font-semibold text-secondary bg-secondary/10 px-3 py-1">{h.trim()}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 p-6 border-l-4 border-secondary bg-secondary/5">
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              <strong className="text-primary font-semibold">Observação:</strong> Os horários podem sofrer alterações em datas festivas, Semana Santa e Natal. Consulte a secretaria para confirmar.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
