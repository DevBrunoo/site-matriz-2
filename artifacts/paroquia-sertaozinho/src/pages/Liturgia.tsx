export default function Liturgia() {
  return (
    <main className="w-full pt-20">
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-4 block">Pastorais</span>
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">Liturgia</h1>
          <div className="w-12 h-px bg-secondary mt-6"></div>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">Sobre a Pastoral</h2>
            <div className="w-10 h-px bg-secondary mb-8"></div>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">A Pastoral Litúrgica é responsável por preparar e animar as celebrações da paróquia, garantindo que a liturgia seja vivida com beleza, dignidade e participação ativa de todos os fiéis.</p>
            <p className="text-muted-foreground font-light leading-relaxed">O grupo cuida da formação dos ministros, da organização das procissões, das celebrações especiais e de toda a ambientação litúrgica da Igreja ao longo do ano.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">Ministérios e Formação</h2>
            <div className="w-10 h-px bg-secondary mb-8"></div>
            {[
              { label: "Ministros da Eucaristia", info: "Formação e escala para as missas" },
              { label: "Leitores e Salmistas", info: "Proclamação da Palavra nas celebrações" },
              { label: "Acólitos e Coroinhas", info: "Serviço no altar" },
              { label: "Acolhida", info: "Recepção dos fiéis nas celebrações" },
              { label: "Reunião Mensal", info: "Última terça-feira do mês às 19h30" },
              { label: "Contato", info: "liturgia@nossasenhoraaparecida.org.br" },
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
