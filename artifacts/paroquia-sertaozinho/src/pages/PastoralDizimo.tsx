import { Link } from "wouter";
import { ArrowRight, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import dizimoBanner from "@assets/pastoral_dizimo_banner_1782857397028.png";
import dizimoLogo from "@assets/Gemini_Generated_Image_8cr9k38cr9k38cr9_1782852303409.png";

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
        sideImage={dizimoBanner}
        sideImagePosition="center bottom"
      />

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
            <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">O que é o Dízimo</h2>
          </div>
          <p className="text-[15px] text-muted-foreground font-light mb-8 leading-relaxed">
            O dízimo é uma expressão de fé, gratidão, pertença e corresponsabilidade, por meio da qual os fiéis
            sustentam a comunidade e a missão evangelizadora da Igreja, promovem a caridade e participam
            ativamente da construção da comunhão eclesial.
          </p>
          <blockquote className="relative pl-6 border-l-2 border-secondary/50 bg-primary/[0.025] py-5 pr-6 rounded-r-sm">
            <p className="text-[14px] text-primary/75 font-light leading-relaxed italic mb-3">
              "O dízimo é uma contribuição sistemática e periódica dos fiéis, por meio da qual cada comunidade
              assume, corresponsavelmente, sua sustentação e a da Igreja. Ele pressupõe pessoas evangelizadas
              e comprometidas com a evangelização."
            </p>
            <cite className="text-[11px] font-bold tracking-[0.2em] uppercase text-secondary not-italic">
              Documento 106 da CNBB, n.º 6
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Missão da Pastoral do Dízimo */}
      <section className="py-16 bg-primary/3 border-y border-primary/8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-secondary" />
            <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">Missão da Pastoral do Dízimo</h2>
          </div>
          <blockquote className="relative pl-6 border-l-2 border-secondary/50 bg-white py-5 pr-6 rounded-r-sm mb-8 shadow-sm">
            <p className="text-[14px] text-primary/75 font-light leading-relaxed italic mb-3">
              "A Pastoral do Dízimo é a ação eclesial que tem por finalidade motivar, planejar, organizar e
              executar iniciativas para a implantação e o funcionamento do dízimo, e acompanhar os membros da
              comunidade no que diz respeito à sua colaboração, em sintonia com a Pastoral de Conjunto na
              Igreja particular."
            </p>
            <cite className="text-[11px] font-bold tracking-[0.2em] uppercase text-secondary not-italic">
              Documento 106 da CNBB, n.º 36
            </cite>
          </blockquote>
          <p className="text-[15px] text-muted-foreground font-light leading-relaxed">
            A missão da Pastoral do Dízimo é{" "}
            <span className="text-primary font-medium">evangelizar os fiéis</span> para que compreendam, assumam
            e vivam o dízimo como expressão de fé, gratidão, pertença e corresponsabilidade na missão da Igreja.
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

      {/* ── Logo showcase final ── */}
      <section
        className="relative overflow-hidden py-20 flex flex-col items-center justify-center"
        style={{
          background: "linear-gradient(160deg, #080f22 0%, #0f1a3e 45%, #162860 100%)",
        }}
      >
        {/* dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(212,175,55,0.05) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        {/* faixa dourada topo */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(to right, transparent 5%, rgba(212,175,55,0.4) 35%, rgba(212,175,55,0.4) 65%, transparent 95%)",
          }}
        />

        {/* Ornamento de entrada */}
        <div className="relative flex items-center gap-3 mb-10">
          <div className="w-12 h-px bg-secondary/50" />
          <div className="w-1.5 h-1.5 rotate-45 bg-secondary/60" />
          <span className="text-secondary/70 font-bold tracking-[0.35em] uppercase text-[9px]">
            Pastoral do Dízimo
          </span>
          <div className="w-1.5 h-1.5 rotate-45 bg-secondary/60" />
          <div className="w-12 h-px bg-secondary/50" />
        </div>

        {/* Logo card */}
        <div
          className="relative flex items-center justify-center rounded-2xl p-6"
          style={{
            background: "rgba(255,255,255,0.96)",
            boxShadow: "0 0 0 1px rgba(212,175,55,0.35), 0 0 60px rgba(212,175,55,0.18), 0 24px 80px rgba(0,0,0,0.55)",
          }}
        >
          <img
            src={dizimoLogo}
            alt="Logo Pastoral do Dízimo"
            className="w-64 sm:w-80 object-contain"
            draggable={false}
          />
        </div>

        {/* Frase abaixo */}
        <p className="relative mt-10 text-white/40 font-light text-[12px] tracking-[0.2em] uppercase">
          Fé · Gratidão · Corresponsabilidade
        </p>

        {/* faixa dourada base */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(to right, transparent 5%, rgba(212,175,55,0.25) 50%, transparent 95%)",
          }}
        />
      </section>
    </main>
  );
}
