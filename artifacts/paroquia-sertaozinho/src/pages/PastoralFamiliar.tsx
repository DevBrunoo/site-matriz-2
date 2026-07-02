import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const BASE = import.meta.env.BASE_URL;

export default function PastoralFamiliar() {
  return (
    <main className="w-full">
      <PageHero
        category="Pastorais"
        title="Pastoral Familiar"
        subtitle="Cuidando, acompanhando e fortalecendo as famílias na fé e no amor"
        sideImage={`${import.meta.env.BASE_URL}logos/logo-familiar.png`}
        sideImagePosition="center bottom"
        sideImageWidth="25%"
        sideWhiteOverlay={true}
      />

      {/* Descrição principal */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-muted-foreground font-light leading-relaxed text-[15px] mb-5">
            A Pastoral Familiar é um serviço da Igreja que cuida, acompanha e fortalece as famílias, ajudando-as
            a viver sua vocação com amor, fé e unidade.
          </p>
          <p className="text-muted-foreground font-light leading-relaxed text-[15px]">
            É um espaço onde a família é valorizada como igreja doméstica, lugar privilegiado do encontro com Deus.
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
              <span className="font-semibold text-primary">Agnes e Fernando Liboni</span>, que, com dedicação e
              espírito de serviço, conduzem os encontros e acompanham as famílias da comunidade.
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
                { label: "Dia", info: "Última segunda-feira de cada mês" },
                { label: "Local", info: "Casas dos integrantes" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                  <span className="text-sm font-semibold text-primary">{item.label}</span>
                  <span className="text-sm text-muted-foreground font-light text-right">{item.info}</span>
                </div>
              ))}
            </div>
            <p className="text-[13px] text-muted-foreground font-light italic">
              Os encontros nas casas favorecem um ambiente de proximidade, partilha e convivência fraterna.
            </p>
          </div>

          {/* Missão */}
          <div className="border border-gray-100 p-8 hover:border-secondary/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-secondary" />
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">🎯 Missão</h2>
            </div>
            <p className="text-muted-foreground font-light text-[15px] leading-relaxed">
              Promover a evangelização em família, ajudando os lares a crescerem na fé, no amor e na vivência dos
              valores cristãos.
            </p>
          </div>

          {/* Quem pode participar */}
          <div className="border border-gray-100 p-8 hover:border-secondary/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-secondary" />
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">👥 Quem pode participar?</h2>
            </div>
            <p className="text-muted-foreground font-light text-[15px] leading-relaxed mb-4">
              Não há restrições. A Pastoral Familiar é aberta a:
            </p>
            <div className="flex flex-col gap-2">
              {[
                "Casais",
                "Famílias com filhos",
                "Noivos e namorados",
                "Pessoas que desejam compreender melhor a vida familiar à luz da fé",
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
            <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">📋 Inscrição e participação</h2>
          </div>
          <div className="flex flex-col gap-3">
            {[
              "Para participar, basta procurar o líder do grupo ou os coordenadores",
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

      {/* O que a Pastoral oferece */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-secondary" />
            <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">💞 O que a Pastoral Familiar oferece?</h2>
          </div>
          <p className="text-[15px] text-muted-foreground font-light mb-6 leading-relaxed">
            A pastoral busca acompanhar as famílias em todas as fases da vida, oferecendo:
          </p>
          <div className="flex flex-col gap-3">
            {[
              "Momentos de oração e espiritualidade",
              "Partilha de experiências familiares",
              "Formação à luz dos ensinamentos da Igreja",
              "Apoio nas dificuldades do dia a dia",
              "Fortalecimento dos vínculos familiares",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
                <div className="w-1 self-stretch bg-secondary/30 shrink-0 rounded-full" />
                <span className="text-sm text-primary font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que participar */}
      <section className="py-16 bg-primary/3 border-y border-primary/8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-secondary" />
            <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">🌱 Por que participar?</h2>
          </div>
          <p className="text-[15px] text-muted-foreground font-light mb-6 leading-relaxed">
            A família enfrenta muitos desafios nos dias de hoje. Por isso, caminhar junto com outras famílias
            ajuda a:
          </p>
          <div className="flex flex-col gap-3">
            {[
              "Fortalecer o casamento",
              "Educar os filhos com valores sólidos",
              "Superar crises com mais fé e sabedoria",
              "Crescer no amor e na unidade",
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
                Sua família é um dom de Deus e merece ser cuidada. Participar da Pastoral Familiar é permitir que
                Deus esteja presente no seu lar, guiando cada passo. Venha caminhar conosco e fortalecer sua
                família na fé!
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
