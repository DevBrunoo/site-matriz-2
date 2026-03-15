export default function Catequese() {
  return (
    <main className="w-full pt-20">
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-4 block">Pastorais</span>
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">Catequese</h1>
          <div className="w-12 h-px bg-secondary mt-6"></div>
        </div>
      </section>
      <section className="py-20 bg-background border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">Sobre a Catequese</h2>
            <div className="w-10 h-px bg-secondary mb-8"></div>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">A Catequese é a educação sistemática na fé cristã, que prepara os fiéis para receber os sacramentos da iniciação cristã: Batismo (reforço), Eucaristia e Crisma. É o caminho pelo qual a fé é transmitida às novas gerações.</p>
            <p className="text-muted-foreground font-light leading-relaxed">Nossa paróquia conta com uma equipe de catequistas dedicados que acompanham as crianças, jovens e adultos no crescimento da fé.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">Turmas e Inscrições</h2>
            <div className="w-10 h-px bg-secondary mb-8"></div>
            {[
              { label: "Catequese Infantil", info: "A partir dos 7 anos — Sábados 08h00 e 09h30" },
              { label: "Pré-eucaristia", info: "Preparação para a 1ª Eucaristia — 2 anos" },
              { label: "Catequese de Jovens", info: "A partir dos 13 anos — Sábados 10h30" },
              { label: "Catequese de Adultos (RICA)", info: "Para adultos não batizados ou não crismados" },
              { label: "Inscrições", info: "Na secretaria paroquial — Início de Fevereiro" },
              { label: "Contato", info: "catequese@nossasenhoraaparecida.org.br" },
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-start py-4 border-b border-gray-100">
                <span className="text-sm font-medium text-primary w-44 shrink-0">{item.label}</span>
                <span className="text-sm text-muted-foreground font-light text-right">{item.info}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
