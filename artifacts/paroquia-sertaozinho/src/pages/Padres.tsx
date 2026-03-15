import { Mail, Phone } from "lucide-react";

const clero = [
  {
    tipo: "Pároco",
    nome: "Pe. João Carlos Oliveira",
    ordenacao: "Ordenado em 1998",
    contato: "paroquia@nossasenhoraaparecida.org.br",
    bio: "Natural de Ribeirão Preto, lidera a Paróquia de Sertãozinho desde 2018. Graduado em Teologia pela PUC-SP, com especialização em Pastoral Familiar.",
  },
  {
    tipo: "Padre Auxiliar",
    nome: "Pe. Marcos Antônio Silva",
    ordenacao: "Ordenado em 2010",
    contato: "pastoral@nossasenhoraaparecida.org.br",
    bio: "Responsável pelas pastorais de juventude e catequese. Atua também nas celebrações das capelas do setor norte e leste.",
  },
  {
    tipo: "Padre Auxiliar",
    nome: "Pe. Rafael Mendes",
    ordenacao: "Ordenado em 2015",
    contato: "pastoral@nossasenhoraaparecida.org.br",
    bio: "Responsável pelas celebrações dos sacramentos e pelo acompanhamento espiritual dos grupos de RCC e Terço dos Homens.",
  },
  {
    tipo: "Diácono Permanente",
    nome: "Dc. José Augusto Ferreira",
    ordenacao: "Ordenado diácono em 2012",
    contato: "diaconia@nossasenhoraaparecida.org.br",
    bio: "Casado, pai de três filhos. Serve a paróquia no ministério da caridade e auxilia nas celebrações da Palavra e nos sacramentos do batismo e matrimônio.",
  },
  {
    tipo: "Diácono Permanente",
    nome: "Dc. Carlos Eduardo Rocha",
    ordenacao: "Ordenado diácono em 2018",
    contato: "diaconia@nossasenhoraaparecida.org.br",
    bio: "Atua nas visitas aos enfermos e no acompanhamento das famílias em situação de vulnerabilidade, além de presidir celebrações nas capelas.",
  },
];

export default function Padres() {
  return (
    <main className="w-full pt-20">
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-4 block">
            Paróquia Nossa Senhora Aparecida
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            Padres e Diáconos
          </h1>
          <div className="w-12 h-px bg-secondary mt-6"></div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-muted-foreground font-light leading-relaxed text-lg max-w-3xl mb-16">
            Conheça os sacerdotes e diáconos que servem à nossa comunidade paroquial com dedicação e amor à missão evangelizadora da Igreja.
          </p>

          <div className="flex flex-col gap-8">
            {clero.map((pessoa) => (
              <div key={pessoa.nome} className="p-8 border border-gray-100 bg-white">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-xl">
                      {pessoa.nome.split(" ").find(w => !["Pe.", "Dc."].includes(w))?.[0]}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-secondary bg-secondary/10 px-2 py-0.5">
                        {pessoa.tipo}
                      </span>
                      <span className="text-xs text-muted-foreground font-light">{pessoa.ordenacao}</span>
                    </div>
                    <h2 className="text-xl font-semibold text-primary mb-3">{pessoa.nome}</h2>
                    <p className="text-muted-foreground font-light leading-relaxed mb-4">{pessoa.bio}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="w-4 h-4 text-secondary" />
                      <span className="font-light">{pessoa.contato}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
