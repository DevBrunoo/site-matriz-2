const estacoes = [
  { num: "I", titulo: "Jesus é condenado à morte", meditacao: "Contemplamos Jesus diante de Pilatos, inocente, condenado por pressão do povo. Quantas vezes somos condenados injustamente? Quanto silêncio temos diante das injustiças que nos rodeiam?" },
  { num: "II", titulo: "Jesus carrega a Cruz", meditacao: "Jesus aceita a Cruz por amor a nós. Cada peso que carregamos em nossa vida pode ser unido ao de Jesus, tornando-se caminho de redenção e crescimento." },
  { num: "III", titulo: "Jesus cai pela primeira vez", meditacao: "Jesus cai, mas se levanta. Nos momentos em que o peso nos derruba, ele nos convida a levantar com coragem, sabendo que não estamos sozinhos." },
  { num: "IV", titulo: "Jesus encontra sua Mãe", meditacao: "Maria e Jesus se encontram no caminho da dor. Maria não abandona o filho no sofrimento. Que Maria nos alcance a graça de estarmos presentes junto àqueles que sofrem." },
  { num: "V", titulo: "Simão Cirineu ajuda Jesus a carregar a Cruz", meditacao: "Simão, recrutado à força, torna-se cooperador da salvação. Que estejamos dispostos a ajudar os que carregam cruzes pesadas, mesmo quando não nos é conveniente." },
  { num: "VI", titulo: "Verônica enxuga o rosto de Jesus", meditacao: "Um gesto simples de compaixão. Verônica não hesita diante do sofrimento. O rosto de Jesus fica impresso no pano. Jesus se imprime em nós quando o servimos nos irmãos." },
  { num: "VII", titulo: "Jesus cai pela segunda vez", meditacao: "A queda não é o fim. Cada vez que nos sentimos esgotados e fracos, Jesus nos mostra que é possível continuar. Sua força se manifesta em nossa fraqueza." },
  { num: "VIII", titulo: "Jesus consola as mulheres de Jerusalém", meditacao: "Mesmo sofrendo, Jesus consola. Que sejamos pessoas que consolam, que escutam, que estão presentes para quem chora." },
  { num: "IX", titulo: "Jesus cai pela terceira vez", meditacao: "Três vezes caído, e ainda assim continua. Não desanimemos diante das recaídas em nossas fraquezas. A misericórdia de Deus é sempre maior." },
  { num: "X", titulo: "Jesus é despojado de suas vestes", meditacao: "Jesus é espoliado de tudo. Quantas vezes somos espoliados de nossa dignidade, de nossos direitos, de nosso bem. Jesus conhece essa dor e nos acompanha." },
  { num: "XI", titulo: "Jesus é pregado na Cruz", meditacao: "Os cravos fixam Jesus à Cruz por amor. Que a Cruz seja para nós não instrumento de morte, mas símbolo do amor infinito de Deus por cada um de nós." },
  { num: "XII", titulo: "Jesus morre na Cruz", meditacao: "\"Está consumado.\" Jesus entrega a vida por amor. A morte não é o fim, mas a passagem para a vida plena. Ele morreu para que tivéssemos vida." },
  { num: "XIII", titulo: "Jesus é retirado da Cruz e entregue a Maria", meditacao: "Maria acolhe o corpo do filho. Como Maria, somos chamados a acolher e cuidar dos mais frágeis, dos que sofrem, dos que nos foram confiados." },
  { num: "XIV", titulo: "Jesus é sepultado", meditacao: "Jesus desceu ao sepulcro, ao fundo da condição humana. Não há abismo tão profundo que Deus não possa alcançar. Ele desceu para nos encontrar onde estamos." },
];

export default function ViaSacra() {
  return (
    <main className="w-full pt-20">
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-4 block">
            Agenda — Quaresma
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            Via Sacra
          </h1>
          <div className="w-12 h-px bg-secondary mt-6"></div>
        </div>
      </section>

      <section className="py-16 bg-background border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-muted-foreground font-light leading-relaxed text-lg mb-6">
              A Via Sacra, ou Caminho da Cruz, é uma devoção que nos convida a acompanhar Jesus no seu caminhar até o Calvário. É celebrada especialmente durante a Quaresma, às sextas-feiras, como preparação para a Páscoa.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 bg-muted/30 border-l-4 border-secondary">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-secondary mb-1">Período</p>
                <p className="text-primary font-medium">Durante toda a Quaresma</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-secondary mb-1">Dia e Horário</p>
                <p className="text-primary font-medium">Sextas-feiras às 19h30</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-secondary mb-1">Local</p>
                <p className="text-primary font-medium">Igreja Matriz e Capelas</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-secondary mb-1">Via Sacra Especial</p>
                <p className="text-primary font-medium">Sexta-Feira Santa — 15h00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">As 14 Estações</h2>
          <div className="w-10 h-px bg-secondary mb-12"></div>

          <div className="flex flex-col gap-0">
            {estacoes.map((estacao) => (
              <div key={estacao.num} className="flex gap-6 py-8 border-b border-gray-100">
                <div className="w-10 h-10 border border-secondary/40 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-secondary font-bold text-sm">{estacao.num}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">{estacao.titulo}</h3>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">{estacao.meditacao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
