export default function Tlc() {
  return (
    <main className="w-full pt-20">
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-4 block">Pastorais</span>
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-2">TLC</h1>
          <p className="text-white/70 font-light mb-4">Terço de Libertação e Cura</p>
          <div className="w-12 h-px bg-secondary mt-4"></div>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">Sobre o Grupo</h2>
            <div className="w-10 h-px bg-secondary mb-8"></div>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">O Terço de Libertação e Cura é uma devoção mariana voltada para pessoas que buscam cura interior, libertação espiritual e fortalecimento da fé por meio da oração do Rosário e da intercessão de Nossa Senhora.</p>
            <p className="text-muted-foreground font-light leading-relaxed">O grupo acolhe todos que desejam rezar com fé, pedir curas físicas, emocionais e espirituais, e crescer na devoção à Virgem Maria.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">Encontros e Atividades</h2>
            <div className="w-10 h-px bg-secondary mb-8"></div>
            {[
              { label: "Reunião Semanal", info: "Quartas-feiras às 19h00 — Igreja Matriz" },
              { label: "Terço Especial", info: "Primeiro Sábado do Mês às 08h00" },
              { label: "Retiro Anual", info: "Com pregação, adoração e confissões" },
              { label: "Contato", info: "tlc@nossasenhoraaparecida.org.br" },
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
