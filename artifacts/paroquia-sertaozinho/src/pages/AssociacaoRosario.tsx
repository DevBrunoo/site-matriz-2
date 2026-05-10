import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export default function AssociacaoRosario() {
  return (
    <main className="w-full">
      <PageHero
        category="Pastorais"
        title="Associação do Rosário"
        subtitle="Caminhando com Nossa Senhora pela oração do Santo Rosário"
      />

      {/* Descrição principal */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-muted-foreground font-light leading-relaxed text-[15px] mb-5">
            A Associação do Rosário é um grupo de fiéis que caminha com Nossa Senhora por meio da oração do Santo
            Rosário, buscando crescer na fé, na humildade e na fidelidade a Deus.
          </p>
          <p className="text-muted-foreground font-light leading-relaxed text-[15px]">
            Inspirados pelo exemplo de Maria, os membros são chamados a viver uma espiritualidade simples e
            profunda, marcada pela oração, pelo serviço e pela presença ativa na vida da Igreja.
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
              A associação é coordenada por{" "}
              <span className="font-semibold text-primary">Cleide Terezinha Palmieri</span>, que conduz o grupo
              com zelo e espírito mariano.
            </p>
          </div>

          {/* Local */}
          <div className="border border-gray-100 p-8 hover:border-secondary/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-secondary" />
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">📍 Local</h2>
            </div>
            <p className="text-muted-foreground font-light text-[15px] leading-relaxed">
              Igreja Matriz Nossa Senhora Aparecida
            </p>
          </div>

          {/* Encontros e compromissos */}
          <div className="border border-gray-100 p-8 hover:border-secondary/30 transition-colors md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-secondary" />
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">📅 Encontros e compromissos</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <p className="text-sm font-semibold text-primary mb-3">Missa mensal</p>
                <div className="flex flex-col gap-2">
                  {[
                    "Todo primeiro domingo do mês, às 7h, na Igreja Matriz",
                    "Os participantes utilizam a fita cor-de-rosa",
                    "Traje: blusa branca e calça ou saia preta",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rotate-45 bg-secondary mt-1.5 shrink-0" />
                      <p className="text-[14px] text-muted-foreground font-light">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary mb-3">Espiritualidade mensal</p>
                <div className="flex flex-col gap-2">
                  {[
                    "Segundo sábado do mês, às 17h, na Matriz",
                    "Encontro conduzido com os seminaristas",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rotate-45 bg-secondary mt-1.5 shrink-0" />
                      <p className="text-[14px] text-muted-foreground font-light">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Missão */}
          <div className="border border-gray-100 p-8 hover:border-secondary/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-secondary" />
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">🎯 Missão</h2>
            </div>
            <div className="flex flex-col gap-2">
              {[
                "Participar ativamente das missas",
                "Servir nos eventos da paróquia (quermesses, novenas, Semana Santa, entre outros)",
                "Atender ao chamado da Igreja para momentos de oração, especialmente o Santo Rosário",
                "Testemunhar a fé com espírito de serviço e devoção mariana",
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
            <p className="text-muted-foreground font-light text-[15px] leading-relaxed mb-4">
              Qualquer pessoa pode participar, desde que sinta o desejo de caminhar com Maria através do Rosário.
            </p>
            <div className="flex flex-col gap-2">
              {[
                "Não há restrição de sexo ou estado civil",
                "Em nossa comunidade, há inclusive participação de casal",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rotate-45 bg-secondary mt-1.5 shrink-0" />
                  <p className="text-[14px] text-muted-foreground font-light">{item}</p>
                </div>
              ))}
            </div>
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
              "Basta procurar a coordenadora ou algum membro da comunidade",
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

      {/* O valor do Santo Rosário */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-secondary" />
            <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">📿 O valor do Santo Rosário</h2>
          </div>
          <p className="text-[15px] text-muted-foreground font-light mb-6 leading-relaxed">
            O Rosário é uma das mais belas e profundas formas de oração da Igreja. Por meio dele, contemplamos a
            vida de Cristo com o olhar de Maria, crescendo na intimidade com Deus. Rezar o Rosário é:
          </p>
          <div className="flex flex-col gap-3">
            {[
              "Meditar os mistérios da salvação",
              "Buscar paz interior",
              "Fortalecer a fé no dia a dia",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
                <div className="w-1 self-stretch bg-secondary/30 shrink-0 rounded-full" />
                <span className="text-sm text-primary font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Um sinal de compromisso */}
      <section className="py-16 bg-primary/3 border-y border-primary/8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-secondary" />
            <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">🌸 Um sinal de compromisso</h2>
          </div>
          <p className="text-[15px] text-muted-foreground font-light mb-4 leading-relaxed">
            Ao ingressar na Associação, o membro recebe a{" "}
            <span className="text-primary font-medium">fita cor-de-rosa</span> no dia{" "}
            <span className="text-primary font-medium">7 de outubro</span>, memória de Nossa Senhora do Rosário.
            Esse rito acontece durante a Santa Missa e expressa um compromisso espiritual:
          </p>
          <blockquote className="relative pl-5 border-l-2 border-secondary/40 mt-6">
            <p className="text-primary/70 font-light leading-relaxed italic text-[15px]">
              Ser discípulo(a), à semelhança de Maria, vivendo na humildade, no serviço e na fidelidade ao
              projeto de Deus.
            </p>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary/5 border-t border-primary/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-px bg-secondary mt-3 shrink-0" />
              <p className="text-primary font-medium text-sm">
                Se você sente o chamado de se aproximar de Nossa Senhora e crescer na vida de oração, venha fazer
                parte da Associação do Rosário. Com Maria, aprendemos a dizer "sim" a Deus todos os dias.
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
