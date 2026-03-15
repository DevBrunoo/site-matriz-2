export default function Coral() {
  return (
    <main className="w-full pt-20">
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-4 block">Pastorais</span>
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">Coral Paroquial</h1>
          <div className="w-12 h-px bg-secondary mt-6"></div>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">Sobre o Coral</h2>
            <div className="w-10 h-px bg-secondary mb-8"></div>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">O Coral Paroquial é um grupo de cantores que anima as celebrações litúrgicas da paróquia com músicas sacras, hinos e cantos gregorianos. A música é uma forma privilegiada de louvar a Deus e ajudar os fiéis a se unirem à oração.</p>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">"Quem canta, ora duas vezes." — Santo Agostinho</p>
            <p className="text-muted-foreground font-light leading-relaxed">O grupo é aberto a todos que amam cantar e desejam servir a Deus por meio da música. Não é necessário ter experiência musical prévia, apenas boa vontade e disponibilidade.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">Ensaios e Participação</h2>
            <div className="w-10 h-px bg-secondary mb-8"></div>
            {[
              { label: "Ensaios Semanais", info: "Quintas-feiras às 19h30 — Salão Paroquial" },
              { label: "Missas Animadas", info: "Domingos às 09h00 e datas especiais" },
              { label: "Cantatas", info: "Natal e Páscoa — apresentações especiais" },
              { label: "Naipes", info: "Soprano, Contralto, Tenor e Baixo" },
              { label: "Regente", info: "Maestro Paulo Roberto Lima" },
              { label: "Contato", info: "coral@nossasenhoraaparecida.org.br" },
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-start py-4 border-b border-gray-100">
                <span className="text-sm font-medium text-primary w-40 shrink-0">{item.label}</span>
                <span className="text-sm text-muted-foreground font-light text-right">{item.info}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
