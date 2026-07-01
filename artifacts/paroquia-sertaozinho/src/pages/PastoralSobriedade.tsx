import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import sobriedadeBanner from "@assets/pastoral_sobriedade_banner_1782874762708.png";

export default function PastoralSobriedade() {
  return (
    <main className="w-full">
      <PageHero
        category="Pastorais"
        title="Pastoral da Sobriedade"
        subtitle="Um caminho de transformação interior, fé e dignidade da pessoa humana"
        sideImage={sobriedadeBanner}
        sideImagePosition="center bottom"
      />

      {/* Descrição principal */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-muted-foreground font-light leading-relaxed text-[15px] mb-5">
            A Pastoral da Sobriedade é um serviço da Igreja que promove a libertação e a cura integral da pessoa
            humana, ajudando a superar dependências e a redescobrir o sentido da vida à luz do Evangelho.
          </p>
          <p className="text-muted-foreground font-light leading-relaxed text-[15px]">
            Mais do que combater vícios, a pastoral propõe um caminho de transformação interior, baseado na fé,
            na dignidade da pessoa e na força da graça de Deus.
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
              A pastoral é coordenada por{" "}
              <span className="font-semibold text-primary">Luís Carlos Alves Agranito Júnior</span> e{" "}
              <span className="font-semibold text-primary">Maria do Carmo Lopes Agranito</span>, que, com
              dedicação e espírito de serviço, acompanham os participantes nesse caminho de restauração.
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
                { label: "Dia", info: "Sexta-feira" },
                { label: "Horário", info: "20h" },
                { label: "Local", info: "Centro Catequético" },
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
              Atuar na prevenção e recuperação da dependência química e de outras dependências, promovendo a
              sobriedade como um verdadeiro estilo de vida.
            </p>
          </div>

          {/* Quem pode participar */}
          <div className="border border-gray-100 p-8 hover:border-secondary/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-secondary" />
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">👥 Quem pode participar?</h2>
            </div>
            <p className="text-muted-foreground font-light text-[15px] leading-relaxed mb-4">
              Qualquer pessoa pode participar. A pastoral é aberta:
            </p>
            <div className="flex flex-col gap-2">
              {[
                "A quem enfrenta algum tipo de dependência",
                "Aos familiares que desejam apoio e orientação",
                "A todos que buscam uma vida mais equilibrada e saudável",
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
              "Não é necessário apresentar documentos",
              "Basta chegar e participar com liberdade e acolhimento.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rotate-45 bg-secondary mt-2 shrink-0" />
                <p className="text-[15px] text-muted-foreground font-light">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que é viver a sobriedade */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-secondary" />
            <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">🌱 O que é viver a sobriedade?</h2>
          </div>
          <p className="text-[15px] text-muted-foreground font-light mb-6 leading-relaxed">
            A sobriedade vai além da abstinência. Ela é um estilo de vida novo, que envolve:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Autoconhecimento",
              "Disciplina",
              "Equilíbrio emocional",
              "Vida espiritual",
              "Reconstrução das relações",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 py-3 border-b border-gray-100">
                <div className="w-1 self-stretch bg-secondary/30 shrink-0 rounded-full" />
                <span className="text-sm text-primary font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como a Pastoral atua */}
      <section className="py-16 bg-primary/3 border-y border-primary/8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-secondary" />
            <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">🤝 Como a Pastoral atua?</h2>
          </div>
          <p className="text-[15px] text-muted-foreground font-light mb-6 leading-relaxed">
            A caminhada da Pastoral da Sobriedade é inspirada em um processo contínuo de crescimento humano e
            espiritual, que inclui:
          </p>
          <div className="flex flex-col gap-3 mb-6">
            {[
              "Encontros semanais de partilha e escuta",
              "Momentos de oração e espiritualidade",
              "Apoio mútuo entre os participantes",
              "Incentivo à responsabilidade pessoal",
              "Acompanhamento na superação das dependências",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
                <div className="w-1 self-stretch bg-secondary/30 shrink-0 rounded-full" />
                <span className="text-sm text-primary font-medium">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-muted-foreground font-light leading-relaxed">
            Tudo isso vivido com <span className="text-primary font-medium">respeito, sigilo e acolhimento</span>.
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
                A Pastoral da Sobriedade acredita que ninguém está perdido. Sempre é possível recomeçar. Se você
                ou alguém da sua família precisa de ajuda, não tenha medo de dar o primeiro passo. Aqui você
                encontrará um espaço de acolhida, compreensão e esperança.
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
