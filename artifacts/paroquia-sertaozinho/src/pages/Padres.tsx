import { useState, useEffect } from "react";
import { Mail } from "lucide-react";
import { getPadres, PadreDado } from "@/lib/adminData";

export default function Padres() {
  const [clero, setClero] = useState<PadreDado[]>([]);
  useEffect(() => { setClero(getPadres()); }, []);

  return (
    <main className="w-full pt-20">
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-4 block">Paróquia Nossa Senhora Aparecida</span>
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">Padres e Diáconos</h1>
          <div className="w-12 h-px bg-secondary mt-6"></div>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-muted-foreground font-light leading-relaxed text-lg max-w-3xl mb-16">
            Conheça os sacerdotes e diáconos que servem à nossa comunidade paroquial com dedicação e amor à missão evangelizadora da Igreja.
          </p>
          <div className="flex flex-col gap-8">
            {clero.map((p) => (
              <div key={p.id} className="p-8 border border-gray-100 bg-white">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-xl">{p.nome.replace(/^(Pe\.|Dc\.)\s*/,"")[0]}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-secondary bg-secondary/10 px-2 py-0.5">{p.tipo}</span>
                      <span className="text-xs text-muted-foreground font-light">{p.ordenacao}</span>
                    </div>
                    <h2 className="text-xl font-semibold text-primary mb-3">{p.nome}</h2>
                    <p className="text-muted-foreground font-light leading-relaxed mb-4">{p.bio}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="w-4 h-4 text-secondary" /><span className="font-light">{p.contato}</span>
                    </div>
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
