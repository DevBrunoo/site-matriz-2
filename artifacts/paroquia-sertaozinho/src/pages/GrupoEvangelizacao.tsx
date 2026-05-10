import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export default function GrupoEvangelizacao() {
  return (
    <main className="w-full">
      <PageHero
        category="Pastorais"
        title='Grupo de Evangelização "Santa Terezinha do Menino Jesus"'
        subtitle="Vivendo o Evangelho no cotidiano com simplicidade e amor"
      />

      {/* Descrição principal */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-muted-foreground font-light leading-relaxed text-[15px]">
            Inspirado na espiritualidade simples e profunda de Santa Teresinha do Menino Jesus, este grupo nasce
            com o desejo de viver o Evangelho no cotidiano, levando o amor de Deus às pessoas de forma concreta,
            por meio da oração, da amizade e do serviço.
          </p>
        </div>
      </section>

      {/* Cards de informação */}
      <section className="pb-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Coordenação */}
          <div className="border border-gray-100 p-8 hover:border-secondary/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-secondary" />
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">👤 Coordenação</h2>
            </div>
            <p className="text-muted-foreground font-light text-[15px] leading-relaxed">
              O grupo é coordenado por{" "}
              <span className="font-semibold text-primary">Rosangela Pellá de Oliveira</span> e{" "}
              <span className="font-semibold text-primary">Maria de Fátima Canesin Viel</span>, que conduzem com
              dedicação e espírito de comunhão os encontros e atividades.
            </p>
          </div>

          {/* Encontros */}
          <div className="border border-gray-100 p-8 hover:border-secondary/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-secondary" />
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">📅 Encontros</h2>
            </div>
            <div className="flex flex-col gap-3 mb-4">
              {[
                { label: "Dias e horários", info: "Conforme disponibilidade do grupo" },
                { label: "Local", info: "Nas casas dos participantes" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                  <span className="text-sm font-semibold text-primary">{item.label}</span>
                  <span className="text-sm text-muted-foreground font-light text-right">{item.info}</span>
                </div>
              ))}
            </div>
            <p className="text-[13px] text-muted-foreground font-light italic">
              Esse formato favorece um ambiente mais próximo, familiar e acolhedor.
            </p>
          </div>

          {/* Missão */}
          <div className="border border-gray-100 p-8 hover:border-secondary/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-secondary" />
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">🎯 Missão</h2>
            </div>
            <div className="flex flex-col gap-2">
              {[
                "Evangelizar mais pessoas",
                "Rezar pelos mais necessitados",
                "Ajudar a Igreja sempre que necessário",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 py-2 border-b border-gray-100 last:border-0">
                  <div className="w-1 self-stretch bg-secondary/30 shrink-0 rounded-full" />
                  <span className="text-sm text-primary font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quem pode participar */}
          <div className="border border-gray-100 p-8 hover:border-secondary/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-secondary" />
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">👥 Quem pode participar?</h2>
            </div>
            <p className="text-muted-foreground font-light text-[15px] leading-relaxed">
              O grupo é aberto a qualquer pessoa que deseje participar. Atualmente, é formado por mulheres, mas
              todos que tiverem interesse são bem-vindos.
            </p>
          </div>

        </div>
      </section>

      {/* Inscrição */}
      <section className="py-16 bg-primary/3 border-y border-primary/8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-secondary" />
            <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">📋 Inscrição e documentos</h2>
          </div>
          <div className="flex flex-col gap-3">
            {[
              "Não é necessário fazer inscrição",
              "Basta manifestar o desejo de participar",
              "Não é necessário apresentar documentos",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rotate-45 bg-secondary mt-2 shrink-0" />
                <p className="text-[15px] text-muted-foreground font-light">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que você vai encontrar */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-secondary" />
            <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">🙏 O que você vai encontrar?</h2>
          </div>
          <p className="text-[15px] text-muted-foreground font-light mb-6 leading-relaxed">
            Um ambiente simples e cheio de fé, onde se vive:
          </p>
          <div className="flex flex-col gap-3">
            {[
              "Partilha da vida e da fé",
              "Momentos de oração e intercessão",
              "Espírito de fraternidade",
              "Disponibilidade para servir a comunidade",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
                <div className="w-1 self-stretch bg-secondary/30 shrink-0 rounded-full" />
                <span className="text-sm text-primary font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary/5 border-t border-primary/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-px bg-secondary mt-3 shrink-0" />
              <p className="text-primary font-medium text-sm">
                Se você deseja viver a fé de forma mais próxima, em um ambiente familiar e cheio de caridade,
                esse grupo pode ser um caminho para você. Deixe-se conduzir por Deus nas pequenas coisas, como
                nos ensinou Santa Teresinha.
              </p>
            </div>
            <Link
              href="/contato"
              className="flex items-center gap-2 shrink-0 bg-primary text-white px-6 py-2.5 text-xs font-semibold tracking-wider uppercase hover:bg-primary/90 transition-colors group"
            >
              Entrar em Contato
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
