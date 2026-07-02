import { Link } from "wouter";
import { ArrowRight, Clock, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const BASE = import.meta.env.BASE_URL;

export default function TercoHomens() {
  return (
    <main className="w-full">
      <PageHero
        category="Pastorais"
        title="Terço dos Homens"
        subtitle="Espiritualidade mariana, fraternidade e oração no coração da comunidade"
      />

      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative flex justify-center lg:justify-start">
              <div className="absolute -top-5 -left-5 w-20 h-20 border-l-2 border-t-2 border-secondary/40 pointer-events-none" />
              <div className="absolute -bottom-5 -right-5 w-20 h-20 border-r-2 border-b-2 border-secondary/40 pointer-events-none" />

              <div className="relative w-full max-w-sm">
                <div className="bg-white rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.13)] border border-gray-100 flex items-center justify-center py-10 px-8">
                  <img
                    src={`${BASE}pastorais/terco-dos-homens.jpeg`}
                    alt="Terço dos Homens"
                    className="w-full max-h-[34rem] object-contain drop-shadow-xl"
                  />
                </div>

                <div className="absolute -bottom-5 -right-5 bg-white border border-gray-100 shadow-lg px-5 py-3">
                  <p className="text-[9px] font-bold tracking-[0.24em] uppercase text-secondary mb-0.5">Movimento Mariano</p>
                  <p className="font-display text-base font-bold text-primary leading-none">Terço dos Homens</p>
                </div>
              </div>
            </div>

            <div className="lg:pl-4">
              <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-secondary block mb-5">
                O Movimento
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-primary leading-snug mb-6">
                Rezar o Santo Terço e fortalecer a fé
              </h2>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-px bg-secondary" />
                <div className="w-2 h-2 rotate-45 bg-secondary/50" />
              </div>
              <div className="space-y-5 text-muted-foreground font-light leading-relaxed text-[15px]">
                <p>
                  O Terço dos Homens é um movimento de espiritualidade mariana que reúne homens para rezar o Santo Terço,
                  fortalecer a fé e crescer na amizade com Jesus Cristo pelas mãos da Virgem Maria.
                </p>
                <p>
                  Inspirados por Nossa Senhora, os participantes procuram viver uma vida cristã mais comprometida,
                  testemunhando o Evangelho em suas famílias, no trabalho e na comunidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-gray-100 p-8 hover:border-secondary/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-secondary" />
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">👤 Coordenação</h2>
            </div>
            <p className="text-muted-foreground font-light text-[15px] leading-relaxed">
              A coordenação do movimento acolhe os participantes e organiza os encontros semanais com espírito de fraternidade e oração.
            </p>
          </div>

          <div className="border border-gray-100 p-8 hover:border-secondary/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-secondary" />
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">📅 Encontros</h2>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { label: "Quando", info: "Todas as quintas-feiras, às 19h20" },
                { label: "Onde", info: "Capela São Vicente de Paula" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1 border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                  <span className="text-sm font-semibold text-primary">{item.label}</span>
                  <span className="text-sm text-muted-foreground font-light leading-relaxed">{item.info}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-gray-100 p-8 hover:border-secondary/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-secondary" />
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">🎯 Missão</h2>
            </div>
            <div className="space-y-3 text-muted-foreground font-light text-[15px] leading-relaxed">
              <p>
                A missão do movimento é proporcionar um encontro pessoal com o amor de Maria e a presença de seu Filho, Jesus Cristo.
              </p>
              <p>
                Cada encontro fortalece a vida de oração e incentiva os homens a assumirem seu papel como discípulos e missionários.
              </p>
            </div>
          </div>

          <div className="border border-gray-100 p-8 hover:border-secondary/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-secondary" />
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">👥 Quem pode participar?</h2>
            </div>
            <div className="flex flex-col gap-2">
              {[
                "Todos os homens, independentemente da idade ou do estado de vida",
                "Crianças, jovens, adultos, solteiros, casados e idosos",
                "Quem deseja crescer na oração, fraternidade e confiança em Nossa Senhora",
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

      <section className="py-16 bg-primary/3 border-y border-primary/8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-secondary" />
            <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">📋 Como participar</h2>
          </div>
          <div className="flex flex-col gap-3">
            {[
              "Não é necessária inscrição prévia",
              "Não é preciso apresentar documentos",
              "Basta comparecer aos encontros",
              "Também é possível entrar no grupo de WhatsApp do movimento para acompanhar os avisos",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rotate-45 bg-secondary mt-2 shrink-0" />
                <p className="text-[15px] text-muted-foreground font-light">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-secondary" />
            <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">🙏 O que você vai encontrar?</h2>
          </div>
          <p className="text-[15px] text-muted-foreground font-light mb-6 leading-relaxed">
            Um ambiente de oração, fraternidade e confiança em Maria, onde se vive:
          </p>
          <div className="flex flex-col gap-3">
            {[
              "Oração do Santo Terço em comunidade",
              "Partilha e apoio entre irmãos na fé",
              "Intenções pessoais e familiares colocadas diante de Nossa Senhora",
              "Compromisso cristão dentro da família, do trabalho e da comunidade",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
                <div className="w-1 self-stretch bg-secondary/30 shrink-0 rounded-full" />
                <span className="text-sm text-primary font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-primary/5 border-t border-primary/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-px bg-secondary mt-3 shrink-0" />
                <p className="text-primary font-medium text-sm">
                  Venha rezar conosco. Permita que Nossa Senhora conduza você a um encontro mais profundo com Jesus Cristo.
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

            <div className="border border-secondary/25 bg-white p-6 sm:p-7 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-secondary" />
                <h3 className="font-display text-lg font-semibold text-primary">Confissões e atendimento</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                <div>
                  <p className="font-semibold text-primary mb-1">Quarta-feira</p>
                  <p>15h00 – 17h00</p>
                  <p>18h00 – 18h30</p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-1">Quinta-feira</p>
                  <p>Com agendamento na secretaria</p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-1">Sexta-feira</p>
                  <p>10h00 – 12h00</p>
                  <p>16h00 – 17h00</p>
                </div>
              </div>
              <a
                href="https://padrerafaelcosta.com/o-que-e-a-confissao-e-como-se-confessar/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 w-fit px-5 py-3 border border-secondary text-secondary hover:bg-secondary hover:text-white transition-all group"
              >
                <ExternalLink className="w-4 h-4 shrink-0" />
                <span className="font-semibold text-sm tracking-wide">Como se confessar</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
