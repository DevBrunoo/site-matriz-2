import { Link } from "wouter";
import { ArrowRight, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const BASE = import.meta.env.BASE_URL;
const PHONE_DIZIMISTA = "5516991012308";

export default function PastoralDizimo() {
  return (
    <main className="w-full">
      {/* Botão flutuante fixo no topo — Torne-se um Dizimista */}
      <a
        href={`https://wa.me/${PHONE_DIZIMISTA}?text=Ol%C3%A1%2C%20gostaria%20de%20me%20tornar%20um%20dizimista!`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-16 right-4 z-50 flex items-center gap-2 bg-secondary text-white px-4 py-2.5 shadow-lg rounded-full text-xs font-bold tracking-wider uppercase hover:bg-secondary/90 transition-all hover:shadow-xl hover:scale-105 group"
        style={{ boxShadow: "0 4px 24px rgba(212,175,55,0.35)" }}
      >
        <Phone className="w-3.5 h-3.5 shrink-0" />
        <span className="hidden sm:inline">Torne-se Dizimista</span>
        <span className="sm:hidden">Dizimista</span>
      </a>

      <PageHero
        category="Pastorais"
        title="Pastoral do Dízimo"
        subtitle="Um caminho de fé, gratidão e compromisso com a missão evangelizadora"
      />

      {/* Logo */}
      <div className="bg-gradient-to-b from-primary/5 to-white py-16 border-b border-gray-100">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-secondary/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-secondary/40" />
            <div className="w-16 h-px bg-secondary/40" />
          </div>
          <div className="bg-white rounded-2xl shadow-[0_8px_48px_rgba(0,0,0,0.10)] border border-gray-100/80 px-14 py-10">
            <img
              src={`${BASE}logos/logo-dizimo.png`}
              alt="Logo Pastoral do Dízimo"
              className="h-40 w-auto object-contain"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-secondary/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-secondary/40" />
            <div className="w-16 h-px bg-secondary/40" />
          </div>
        </div>
      </div>

      {/* Descrição principal */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-muted-foreground font-light leading-relaxed text-[15px]">
            A Pastoral do Dízimo é um serviço essencial na vida da Igreja, que vai muito além de uma contribuição
            material. Trata-se de um caminho de fé, gratidão e compromisso com a missão evangelizadora.
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
              <span className="font-semibold text-primary">Roseli e Jociel</span>, que, junto com a equipe,
              promovem a conscientização e o espírito de corresponsabilidade na comunidade.
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
                { label: "Dia", info: "Primeiras quartas-feiras de cada mês" },
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
              Promover a evangelização, ajudando os fiéis a compreenderem que todos somos chamados a colaborar com
              a missão da Igreja.
            </p>
          </div>

          {/* Quem pode participar */}
          <div className="border border-gray-100 p-8 hover:border-secondary/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-secondary" />
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">👥 Quem pode participar?</h2>
            </div>
            <p className="text-muted-foreground font-light text-[15px] leading-relaxed">
              Todos podem participar. A Pastoral do Dízimo é aberta a qualquer pessoa que deseje servir à
              comunidade e crescer na vivência da fé.
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
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rotate-45 bg-secondary mt-2 shrink-0" />
                <p className="text-[15px] text-muted-foreground font-light">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que é o dízimo */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-secondary" />
            <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">💡 O que é o dízimo?</h2>
          </div>
          <p className="text-[15px] text-muted-foreground font-light mb-6 leading-relaxed">
            O dízimo é uma expressão concreta de fé e gratidão a Deus. É a devolução generosa de uma parte
            daquilo que recebemos, reconhecendo que tudo vem d'Ele. Mais do que uma obrigação, o dízimo é:
          </p>
          <div className="flex flex-col gap-3">
            {[
              "Um ato de amor",
              "Um gesto de confiança na Providência de Deus",
              "Um sinal de pertença à comunidade",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
                <div className="w-1 self-stretch bg-secondary/30 shrink-0 rounded-full" />
                <span className="text-sm text-primary font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que o dízimo é importante */}
      <section className="py-16 bg-primary/3 border-y border-primary/8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-secondary" />
            <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">🌾 Por que o dízimo é importante?</h2>
          </div>
          <p className="text-[15px] text-muted-foreground font-light mb-6 leading-relaxed">
            Através do dízimo, a Igreja pode:
          </p>
          <div className="flex flex-col gap-3 mb-8">
            {[
              "Manter suas atividades pastorais e missionárias",
              "Cuidar da evangelização",
              "Ajudar os mais necessitados",
              "Sustentar a estrutura da comunidade",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
                <div className="w-1 self-stretch bg-secondary/30 shrink-0 rounded-full" />
                <span className="text-sm text-primary font-medium">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-muted-foreground font-light leading-relaxed">
            Por isso, a Pastoral do Dízimo não é apenas arrecadar dinheiro, mas{" "}
            <span className="text-primary font-medium">formar consciências</span> e despertar nos fiéis o sentido
            de responsabilidade com a Igreja.
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
                Ser dizimista é dar um passo na maturidade da fé. Se você ainda não é dizimista, reze sobre isso
                e permita-se viver essa experiência de confiança e generosidade. Deus não se deixa vencer em
                generosidade!
              </p>
            </div>
            <a
              href={`https://wa.me/${PHONE_DIZIMISTA}?text=Ol%C3%A1%2C%20gostaria%20de%20me%20tornar%20um%20dizimista!`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 shrink-0 bg-secondary text-white px-6 py-2.5 text-xs font-semibold tracking-wider uppercase hover:bg-secondary/90 transition-colors group"
            >
              Torne-se Dizimista
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
