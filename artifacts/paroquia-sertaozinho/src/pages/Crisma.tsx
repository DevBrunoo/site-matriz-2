import { Link } from "wouter";

export default function Crisma() {
  return (
    <main className="w-full pt-20">
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-4 block">
            Sacramentos
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">Crisma</h1>
          <div className="w-12 h-px bg-secondary mt-6"></div>
        </div>
      </section>

      <section className="py-20 bg-background border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">O Sacramento da Confirmação</h2>
            <div className="w-10 h-px bg-secondary mb-8"></div>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              A Crisma é o sacramento pelo qual o cristão recebe plenamente o Espírito Santo para confirmar sua fé e tornar-se testemunha adulta de Cristo no mundo. É a confirmação do Batismo, a maturidade cristã.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              "Recebereis uma força, a do Espírito Santo que virá sobre vós, e sereis minhas testemunhas." (At 1,8)
            </p>
            <p className="text-muted-foreground font-light leading-relaxed">
              Os 7 dons do Espírito Santo — Sabedoria, Entendimento, Conselho, Fortaleza, Ciência, Piedade e Temor de Deus — são confirmados e fortalecidos no crismando.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">Preparação e Inscrições</h2>
            <div className="w-10 h-px bg-secondary mb-8"></div>
            <div className="flex flex-col gap-4">
              {[
                "A Crisma é destinada a jovens a partir de 15 anos e adultos",
                "Curso de preparação com duração de aproximadamente 1 ano",
                "Encontros semanais nas dependências da paróquia",
                "Requisito: ter recebido o Batismo e a 1ª Eucaristia",
                "Inscrições na secretaria paroquial no início de cada ano letivo",
                "O padrinho ou madrinha deve ser católico crismado e praticante",
              ].map((item, i) => (
                <div key={i} className="flex gap-4 py-3 border-b border-gray-100">
                  <span className="w-6 h-6 bg-secondary/10 text-secondary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center gap-6">
          <p className="text-muted-foreground font-light">Quer se inscrever no curso de Crisma? Fale com nossa secretaria.</p>
          <Link href="/secretaria" className="shrink-0 px-6 py-2 bg-primary text-white text-sm font-semibold tracking-wider uppercase hover:bg-primary/90 transition-colors">
            Ver Secretaria
          </Link>
        </div>
      </section>
    </main>
  );
}
