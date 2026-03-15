import { motion } from "framer-motion";

export default function Historia() {
  const timeline = [
    {
      year: "1950",
      title: "O Início",
      description: "A história da paróquia começa com uma pequena capela construída por moradores locais, devotos de Nossa Senhora Aparecida."
    },
    {
      year: "1965",
      title: "Criação da Paróquia",
      description: "Por decreto diocesano, a capela é elevada à dignidade de Paróquia, recebendo seu primeiro pároco residente."
    },
    {
      year: "1982",
      title: "Construção da Matriz",
      description: "Lançamento da pedra fundamental do atual edifício da igreja Matriz, com grande campanha de arrecadação na cidade."
    },
    {
      year: "1995",
      title: "Dedicação do Templo",
      description: "Conclusão das obras principais e solene dedicação do templo, com a presença do Bispo Diocesano e milhares de fiéis."
    },
    {
      year: "2010",
      title: "Expansão Pastoral",
      description: "Criação de novas comunidades e capelas nos bairros adjacentes para melhor atender à crescente população."
    },
    {
      year: "Dias Atuais",
      title: "Uma Comunidade Viva",
      description: "Hoje, a paróquia conta com dezenas de pastorais e movimentos, sendo um polo de evangelização e caridade em Sertãozinho."
    }
  ];

  return (
    <main className="pt-24 pb-20">
      <section className="bg-primary py-16 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display text-white">Nossa História</h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-white/90">
            Conheça a trajetória de fé e devoção da comunidade dedicada a Nossa Senhora Aparecida em Sertãozinho.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Center Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-white shadow-md transform -translate-x-[7px] md:-translate-x-1/2 mt-6"></div>

                {/* Content Box */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-border hover:border-secondary/30 transition-colors">
                    <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-bold mb-4">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="capelas" className="bg-muted/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Capelas e Comunidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Comunidade São José', 'Capela Santa Rita', 'Comunidade Santo Antônio'].map((nome) => (
              <div key={nome} className="bg-white p-8 rounded-xl shadow-md border border-border">
                <h3 className="text-xl font-bold mb-2 text-primary">{nome}</h3>
                <p className="text-sm text-muted-foreground">Sertãozinho - SP</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
