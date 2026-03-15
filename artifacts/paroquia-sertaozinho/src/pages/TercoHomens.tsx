export default function TercoHomens() {
  return (
    <main className="w-full pt-20">
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-4 block">Pastorais</span>
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">Terço dos Homens</h1>
          <div className="w-12 h-px bg-secondary mt-6"></div>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">Sobre o Grupo</h2>
            <div className="w-10 h-px bg-secondary mb-8"></div>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">O Terço dos Homens é um movimento de espiritualidade masculina que convida os homens a rezarem o Rosário juntos, fortalecendo sua fé, sua identidade cristã e seu papel como líderes espirituais na família e na sociedade.</p>
            <p className="text-muted-foreground font-light leading-relaxed">O grupo reúne homens de todas as idades em torno da oração mariana, com momentos de partilha, formação e fraternidade.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">Encontros e Atividades</h2>
            <div className="w-10 h-px bg-secondary mb-8"></div>
            {[
              { label: "Reunião Mensal", info: "Primeiro Sábado às 07h00 — Igreja Matriz" },
              { label: "Terço nas Capelas", info: "Rotativamente nas capelas da paróquia" },
              { label: "Encontro Diocesano", info: "Participação anual no encontro da diocese" },
              { label: "Contato", info: "tercohomens@nossasenhoraaparecida.org.br" },
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
