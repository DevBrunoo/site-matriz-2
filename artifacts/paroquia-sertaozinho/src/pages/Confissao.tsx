import { Link } from "wouter";

export default function Confissao() {
  return (
    <main className="w-full pt-20">
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-4 block">
            Sacramentos
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">Confissão</h1>
          <div className="w-12 h-px bg-secondary mt-6"></div>
        </div>
      </section>

      <section className="py-20 bg-background border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">O Sacramento da Reconciliação</h2>
            <div className="w-10 h-px bg-secondary mb-8"></div>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              O Sacramento da Penitência e Reconciliação é o encontro com a misericórdia de Deus. Através do sacerdote, Jesus nos perdoa e nos reconcilia com Deus e com a Igreja. É um ato de amor e humildade que renova nossa vida interior.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              "Cujos pecados perdoardes, serão perdoados; cujos retiverdeis, serão retidos." (Jo 20,23)
            </p>
            <p className="text-muted-foreground font-light leading-relaxed">
              Para receber o sacramento com fruto, é necessário: contrição (arrependimento), confissão dos pecados ao sacerdote, propósito de emenda e aceitação da penitência.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">Horários de Confissão</h2>
            <div className="w-10 h-px bg-secondary mb-8"></div>
            <div className="flex flex-col gap-0">
              {[
                { dia: "Segunda a Sexta", horario: "Antes da Missa das 07h00" },
                { dia: "Sábado", horario: "16h30 às 18h00" },
                { dia: "Domingo", horario: "30 minutos antes de cada Missa" },
                { dia: "Quaresma", horario: "Horários estendidos — consultar secretaria" },
              ].map((item) => (
                <div key={item.dia} className="flex justify-between items-center py-4 border-b border-gray-100">
                  <span className="text-sm font-medium text-primary">{item.dia}</span>
                  <span className="text-sm text-muted-foreground font-light">{item.horario}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 border-l-4 border-secondary bg-secondary/5">
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Para confissões fora desses horários ou encontro espiritual, entre em contato com a secretaria paroquial e agende um horário com um de nossos sacerdotes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center gap-6">
          <p className="text-muted-foreground font-light">Precisa de acompanhamento espiritual? Fale com nossa equipe.</p>
          <Link href="/contato" className="shrink-0 px-6 py-2 bg-primary text-white text-sm font-semibold tracking-wider uppercase hover:bg-primary/90 transition-colors">
            Entrar em Contato
          </Link>
        </div>
      </section>
    </main>
  );
}
