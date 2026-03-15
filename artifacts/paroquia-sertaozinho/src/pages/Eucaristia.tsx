import { Link } from "wouter";

export default function Eucaristia() {
  return (
    <main className="w-full pt-20">
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-4 block">
            Sacramentos
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">Eucaristia</h1>
          <div className="w-12 h-px bg-secondary mt-6"></div>
        </div>
      </section>

      <section className="py-20 bg-background border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">O Santíssimo Sacramento</h2>
            <div className="w-10 h-px bg-secondary mb-8"></div>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              A Eucaristia é o coração da vida da Igreja e fonte de toda a vida cristã. Na celebração eucarística, o pão e o vinho se tornam verdadeiramente o Corpo e o Sangue de Cristo. É a presença real de Jesus entre nós.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              "Eu sou o pão vivo descido do céu. Se alguém comer deste pão, viverá eternamente." (Jo 6,51)
            </p>
            <p className="text-muted-foreground font-light leading-relaxed">
              Para receber a Sagrada Comunhão, o fiel deve estar em graça — livre de pecado mortal — e em jejum de pelo menos uma hora antes da comunhão.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">Adoração ao Santíssimo</h2>
            <div className="w-10 h-px bg-secondary mb-8"></div>
            <p className="text-muted-foreground font-light leading-relaxed mb-6">
              Nossa paróquia oferece momentos de Adoração ao Santíssimo Sacramento, onde os fiéis podem estar em silêncio diante de Jesus presente na Hóstia Consagrada.
            </p>
            <div className="flex flex-col gap-0">
              {[
                { momento: "Todas as Sextas-feiras", horario: "08h00 às 19h00" },
                { momento: "Primeiro Sábado do Mês", horario: "07h30 às 09h00" },
                { momento: "Adoração da Madrugada", horario: "Primeiro Sábado — 00h00 às 06h00" },
              ].map((item) => (
                <div key={item.momento} className="flex justify-between items-center py-4 border-b border-gray-100">
                  <span className="text-sm font-medium text-primary">{item.momento}</span>
                  <span className="text-sm text-secondary font-semibold">{item.horario}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center gap-6">
          <p className="text-muted-foreground font-light">Consulte os horários de Missa e venha participar da Eucaristia.</p>
          <Link href="/missas" className="shrink-0 px-6 py-2 bg-primary text-white text-sm font-semibold tracking-wider uppercase hover:bg-primary/90 transition-colors">
            Ver Horários de Missa
          </Link>
        </div>
      </section>
    </main>
  );
}
