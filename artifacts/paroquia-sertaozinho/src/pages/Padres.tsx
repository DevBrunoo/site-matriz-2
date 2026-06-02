import { useState, useEffect } from "react";
import { Mail } from "lucide-react";
import { getPadres, PadreDado } from "@/lib/adminData";
import { PageHero } from "@/components/PageHero";

export default function Padres() {
  const [clero, setClero] = useState<PadreDado[]>([]);
  useEffect(() => { setClero(getPadres()); }, []);

  return (
    <main className="w-full">
      <PageHero category="Paróquia Nossa Senhora Aparecida" title="Padres e Diáconos" />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-muted-foreground font-light leading-relaxed text-base max-w-2xl mb-16">
            Conheça os sacerdotes e diáconos que servem à nossa comunidade com dedicação e amor à missão evangelizadora da Igreja.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clero.map((p) => (
              <div key={p.id} className="group flex gap-5 p-8 border border-gray-100 bg-white hover:border-secondary/30 hover:shadow-sm transition-all">
                {/* Avatar */}
                <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white font-bold text-base">
                    {p.nome.replace(/^(Pe\.|Dc\.)\s*/i, "")[0]}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-primary mb-1">{p.nome}</h3>
                  <p className="text-[11px] text-muted-foreground font-light mb-3 tracking-wide">{p.ordenacao}</p>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">{p.bio}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground font-light border-t border-gray-100 pt-3">
                    <Mail className="w-3.5 h-3.5 text-secondary shrink-0" />
                    <span>{p.contato}</span>
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
