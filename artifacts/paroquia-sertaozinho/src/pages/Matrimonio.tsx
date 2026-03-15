import { Link } from "wouter";

export default function Matrimonio() {
  return (
    <main className="w-full pt-20">
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-4 block">
            Sacramentos
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">Matrimônio</h1>
          <div className="w-12 h-px bg-secondary mt-6"></div>
        </div>
      </section>

      <section className="py-20 bg-background border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">O Sacramento do Amor</h2>
            <div className="w-10 h-px bg-secondary mb-8"></div>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              O Matrimônio é o sacramento pelo qual um homem e uma mulher estabelecem entre si uma aliança indissolúvel de amor, segundo a vontade de Deus. É sinal do amor de Cristo pela Igreja.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              "O que Deus uniu, o homem não separe." (Mt 19,6)
            </p>
            <p className="text-muted-foreground font-light leading-relaxed">
              Nossa paróquia oferece uma preparação cuidadosa para os noivos, acompanhando-os no caminho para a vida matrimonial cristã.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">Preparação ao Matrimônio</h2>
            <div className="w-10 h-px bg-secondary mb-8"></div>
            <div className="flex flex-col gap-4">
              {[
                "Agendar a data do casamento na Secretaria com pelo menos 6 meses de antecedência",
                "Participar do Curso de Noivos (12 encontros semanais)",
                "Apresentar certidão de batismo atualizada (menos de 6 meses) de ambos",
                "Apresentar RG, CPF, certidão de nascimento ou casamento civil (se houver)",
                "Testemunhos devem ser católicos batizados",
                "Cerimônias às sextas-feiras às 20h00 e sábados às 10h00, 15h00 e 17h00",
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
          <p className="text-muted-foreground font-light">Quer agendar seu casamento? Procure nossa secretaria.</p>
          <Link href="/secretaria" className="shrink-0 px-6 py-2 bg-primary text-white text-sm font-semibold tracking-wider uppercase hover:bg-primary/90 transition-colors">
            Ver Secretaria
          </Link>
        </div>
      </section>
    </main>
  );
}
