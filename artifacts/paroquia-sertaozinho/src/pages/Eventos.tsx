import { useState, useEffect } from "react";
import { getEventos, Evento } from "@/lib/adminData";
import { PageHero } from "@/components/PageHero";

const CATEGORIA_COLORS: Record<string, string> = {
  Solenidade: "text-amber-700 bg-amber-50",
  Celebração: "text-blue-700 bg-blue-50",
  Juventude: "text-green-700 bg-green-50",
  Solidariedade: "text-orange-700 bg-orange-50",
  Liturgia: "text-purple-700 bg-purple-50",
  Formação: "text-teal-700 bg-teal-50",
};

export default function Eventos() {
  const [eventos, setEventos] = useState<Evento[]>([]);
  useEffect(() => { setEventos(getEventos()); }, []);

  return (
    <main className="w-full">
      <PageHero category="Agenda" title="Eventos" />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-muted-foreground font-light leading-relaxed text-base max-w-2xl mb-14">
            Acompanhe os principais eventos da paróquia. Participe e fortaleça sua fé junto com a comunidade.
          </p>

          <div className="flex flex-col gap-0">
            {eventos.map((ev) => (
              <div
                key={ev.id}
                className="group flex gap-6 md:gap-10 py-7 border-b border-gray-100 hover:bg-muted/30 transition-colors px-4 -mx-4"
              >
                {/* Date */}
                <div className="flex flex-col items-center justify-start shrink-0 w-12 pt-0.5">
                  <span className="text-2xl font-bold text-primary leading-none">{ev.dia}</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-secondary mt-1">{ev.mes}</span>
                  <span className="text-[10px] text-muted-foreground mt-0.5">{ev.ano}</span>
                </div>

                {/* Divider */}
                <div className="w-px bg-gray-100 shrink-0 hidden md:block" />

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider ${CATEGORIA_COLORS[ev.categoria] ?? "bg-gray-100 text-gray-600"}`}>
                      {ev.categoria}
                    </span>
                    <span className="text-[11px] text-muted-foreground font-light">{ev.horario}</span>
                  </div>
                  <h3 className="text-base font-semibold text-primary mb-1.5">{ev.titulo}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{ev.descricao}</p>
                  <p className="text-[11px] text-secondary font-semibold uppercase tracking-wide mt-2">{ev.local}</p>
                </div>
              </div>
            ))}
            {eventos.length === 0 && (
              <p className="text-muted-foreground font-light text-sm py-12 text-center">Nenhum evento cadastrado.</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
