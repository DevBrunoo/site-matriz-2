import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import rainhaDaPaz from "@assets/Gemini_Generated_Image_tuv8n4tuv8n4tuv8_1783023162023.png";

export default function RenovacaoCarismatica() {
  return (
    <main className="w-full">
      <PageHero
        category="Pastorais"
        title="Renovação Carismática Católica"
        subtitle="Um espaço de oração, louvor e fraternidade"
      />

      {/* ── FEATURE: imagem + apresentação ── */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Lado esquerdo: imagem com decoração */}
            <div className="relative flex justify-center lg:justify-start">
              <div className="absolute -top-5 -left-5 w-20 h-20 border-l-2 border-t-2 border-secondary/40 pointer-events-none" />
              <div className="absolute -bottom-5 -right-5 w-20 h-20 border-r-2 border-b-2 border-secondary/40 pointer-events-none" />

              <div className="relative w-full max-w-sm">
                <div className="bg-white rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.13)] border border-gray-100 overflow-hidden">
                  <img
                    src={rainhaDaPaz}
                    alt="Nossa Senhora Rainha da Paz"
                    className="w-full max-h-96 object-cover"
                  />
                </div>

                {/* Badge flutuante */}
                <div className="absolute -bottom-5 -right-5 bg-white border border-gray-100 shadow-lg px-5 py-3">
                  <p className="text-[9px] font-bold tracking-[0.24em] uppercase text-secondary mb-0.5">Padroeira do Movimento</p>
                  <p className="font-display text-base font-bold text-primary leading-none">Rainha da Paz</p>
                </div>
              </div>
            </div>

            {/* Lado direito: texto */}
            <div className="lg:pl-4">
              <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-secondary block mb-5">
                O Movimento
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-primary leading-snug mb-6">
                Uma experiência viva com Jesus
              </h2>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-px bg-secondary" />
                <div className="w-2 h-2 rotate-45 bg-secondary/50" />
              </div>
              <div className="space-y-5 text-muted-foreground font-light leading-relaxed text-[15px]">
                <p>
                  A <span className="text-primary font-medium">Renovação Carismática Católica (RCC)</span> é um
                  movimento da Igreja que convida cada pessoa a fazer uma experiência viva e pessoal com Jesus
                  Cristo, por meio da ação do Espírito Santo.
                </p>
                <p>
                  É um espaço de oração, louvor e fraternidade, onde buscamos crescer na fé e na intimidade com
                  Deus.
                </p>
              </div>
            </div>
          </div>
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
              O grupo é coordenado por <span className="font-semibold text-primary">Luís Alberto da Silva</span>, que,
              junto com a equipe de servos, conduz os encontros com zelo, oração e dedicação.
            </p>
          </div>

          {/* Encontros */}
          <div className="border border-gray-100 p-8 hover:border-secondary/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-secondary" />
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">📅 Encontros</h2>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { label: "Dia", info: "Todas as segundas-feiras" },
                { label: "Horário", info: "20h" },
                { label: "Local", info: "Igreja Matriz" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                  <span className="text-sm font-semibold text-primary">{item.label}</span>
                  <span className="text-sm text-muted-foreground font-light">{item.info}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Missão */}
          <div className="border border-gray-100 p-8 hover:border-secondary/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-secondary" />
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">🎯 Missão</h2>
            </div>
            <p className="text-muted-foreground font-light text-[15px] leading-relaxed">
              Levar as pessoas a terem um encontro pessoal com Jesus Cristo, renovando sua fé e sua vida à luz do
              Espírito Santo.
            </p>
          </div>

          {/* Quem pode participar */}
          <div className="border border-gray-100 p-8 hover:border-secondary/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-secondary" />
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">👥 Quem pode participar?</h2>
            </div>
            <p className="text-muted-foreground font-light text-[15px] leading-relaxed">
              O grupo é aberto a todas as pessoas, sem distinção de idade, estado civil ou qualquer outra condição.
              Todos são bem-vindos!
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
              "Não é necessário apresentar documentos",
              "Basta chegar e participar!",
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
          <p className="text-[15px] text-muted-foreground font-light mb-8 leading-relaxed">
            Nos encontros da RCC, vivemos momentos profundos de espiritualidade e comunhão:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              "Louvor e adoração a Deus",
              "Pregação da Palavra",
              "Oração uns pelos outros",
              "Intercessão pelas necessidades da comunidade",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 py-3 border-b border-gray-100">
                <div className="w-1 self-stretch bg-secondary/30 shrink-0 rounded-full" />
                <span className="text-sm text-primary font-medium">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-muted-foreground font-light leading-relaxed">
            Há também uma equipe de intercessão, que reza continuamente pela Igreja, pelo grupo e pelas intenções
            colocadas na <span className="text-primary font-medium">"caixinha de pedidos"</span>, apresentada
            semanalmente.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary/5 border-t border-primary/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-px bg-secondary mt-3 shrink-0" />
              <p className="text-primary font-medium text-sm">
                Se você deseja renovar sua fé, encontrar paz e experimentar o amor de Deus de forma mais profunda,
                venha viver essa experiência conosco. Você será muito bem acolhido!
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
