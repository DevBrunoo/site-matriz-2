import { useState, useEffect } from "react";
import { getHorarios, HorarioMissa } from "@/lib/adminData";
import { PageHero } from "@/components/PageHero";

const LOCAIS = [
  "Igreja Matriz",
  "Capela São José",
  "Capela Sant'Ana",
  "Capela São Francisco de Assis",
  "Capela Nossa Senhora do Carmo",
];

export default function Missas() {
  const [horarios, setHorarios] = useState<HorarioMissa[]>([]);
  useEffect(() => { setHorarios(getHorarios()); }, []);

  const grouped = LOCAIS
    .map((l) => ({ local: l, dias: horarios.filter((h) => h.local === l) }))
    .filter((g) => g.dias.length > 0);

  return (
    <main className="w-full">
      <PageHero category="Agenda" title="Horários de Missa" />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-muted-foreground font-light leading-relaxed text-base max-w-2xl mb-16">
            As missas são celebradas diariamente na Igreja Matriz e semanalmente nas capelas. Venha participar da Eucaristia com nossa comunidade.
          </p>

          <div className="flex flex-col gap-12">
            {grouped.map(({ local, dias }) => (
              <div key={local}>
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-1 h-5 bg-secondary" />
                  <h2 className="text-lg font-semibold text-primary">{local}</h2>
                </div>
                <div className="ml-4 pl-4 border-l border-gray-100 mt-4 flex flex-col gap-0">
                  {dias.map((item) => (
                    <div key={item.id} className="flex items-center justify-between py-3.5 border-b border-gray-100">
                      <span className="text-sm font-medium text-primary">{item.dia}</span>
                      <div className="flex gap-2 flex-wrap justify-end">
                        {item.horarios.split(",").map((h) => (
                          <span
                            key={h}
                            className="text-xs font-bold text-secondary bg-secondary/10 px-3 py-1 tracking-wide"
                          >
                            {h.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 flex items-start gap-4 p-6 bg-primary/[0.03] border-l-2 border-secondary/40">
            <div className="w-1.5 h-1.5 rotate-45 bg-secondary mt-1.5 shrink-0" />
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              <strong className="text-primary font-semibold">Observação:</strong> Os horários podem sofrer alterações em datas festivas, Semana Santa e Natal. Entre em contato com a secretaria para confirmar.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
