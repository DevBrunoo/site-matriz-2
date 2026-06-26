import { ArrowRight, MapPin, Mail, Phone, Instagram, Calendar, Users, Star } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const BASE = import.meta.env.BASE_URL;

export default function Tlc() {
  return (
    <main className="w-full">
      <PageHero
        category="Pastorais"
        title="TLC — Treinamento de Liderança Cristã"
        subtitle="Uma experiência da Graça de Deus em dois dias e meio de alegria, música e oração"
      />

      {/* ── FEATURE SECTION: imagem integrada ao layout ── */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">
        {/* Painel esquerdo: imagem sobre fundo primário */}
        <div className="relative bg-primary flex flex-col items-center justify-center py-20 px-10 overflow-hidden">
          {/* Círculo decorativo de fundo */}
          <div className="absolute w-[420px] h-[420px] rounded-full border border-white/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute w-[280px] h-[280px] rounded-full border border-white/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          {/* Logo */}
          <img
            src={`${BASE}logos/logo-tlc.png`}
            alt="Logo TLC Sertãozinho"
            className="relative w-72 max-w-full object-contain drop-shadow-[0_8px_40px_rgba(0,0,0,0.40)]"
          />

          {/* Badge "Desde 1970" */}
          <div className="mt-10 flex items-center gap-3">
            <div className="h-px w-10 bg-secondary/70" />
            <span className="text-secondary text-xs font-semibold tracking-[0.22em] uppercase">
              Em Sertãozinho desde 1970
            </span>
            <div className="h-px w-10 bg-secondary/70" />
          </div>
        </div>

        {/* Painel direito: texto de apresentação */}
        <div className="bg-white flex flex-col justify-center px-10 lg:px-16 py-20 border-b border-gray-100">
          <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-secondary block mb-4">
            O Movimento
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary leading-snug mb-6">
            O que é o TLC?
          </h2>
          <div className="w-10 h-px bg-secondary mb-8" />
          <p className="text-muted-foreground font-light leading-relaxed text-[15px] mb-5">
            É uma <span className="text-primary font-medium">experiência da Graça de Deus</span> que acontece em dois dias e meio de muita alegria, música, trabalho em grupo e oração.
          </p>
          <p className="text-muted-foreground font-light leading-relaxed text-[15px] mb-5">
            O TLC é um movimento da Igreja Católica Apostólica Romana, fundado em{" "}
            <span className="font-medium text-primary">1967</span> pelo Padre Haroldo Rahm, em Campinas-SP.
          </p>
          <p className="text-muted-foreground font-light leading-relaxed text-[15px]">
            Em Sertãozinho, o Movimento chegou em{" "}
            <span className="font-medium text-primary">02 de agosto de 1970</span>, com a missão de promover o desenvolvimento da liderança, o aprofundamento da fé e o compromisso com os valores da Igreja.
          </p>
        </div>
      </section>

      {/* ── TRÊS PILARES ── */}
      <section className="py-20 bg-gray-50/60 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Star className="w-6 h-6 text-secondary stroke-[1.5]" />,
                title: "Experiência",
                desc: "Dois dias e meio de imersão que retira o participante da rotina para um profundo auto encontro e encontro com Deus.",
              },
              {
                icon: <Users className="w-6 h-6 text-secondary stroke-[1.5]" />,
                title: "Liderança",
                desc: "Desenvolvimento de líderes cristãos comprometidos com a missão evangelizadora no trabalho, na família e na comunidade.",
              },
              {
                icon: <Calendar className="w-6 h-6 text-secondary stroke-[1.5]" />,
                title: "Comunidade",
                desc: "Uma família de fé que se reúne todo domingo às 18h30 para crescer juntos na vivência do Evangelho.",
              },
            ].map((p) => (
              <div key={p.title} className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-primary/5 flex items-center justify-center">
                  {p.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-primary">{p.title}</h3>
                <div className="w-6 h-px bg-secondary" />
                <p className="text-muted-foreground font-light text-[14px] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CITAÇÃO DESTAQUE ── */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full border border-white/5" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-secondary/60" />
            <div className="w-1.5 h-1.5 rotate-45 bg-secondary/70" />
            <div className="w-12 h-px bg-secondary/60" />
          </div>
          <p className="font-display text-2xl lg:text-3xl text-white/90 font-light italic leading-relaxed mb-6">
            "Deus propõe e chama…<br className="hidden sm:block" /> Ao jovem cabe a resposta."
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="w-12 h-px bg-secondary/60" />
            <div className="w-1.5 h-1.5 rotate-45 bg-secondary/70" />
            <div className="w-12 h-px bg-secondary/60" />
          </div>
        </div>
      </section>

      {/* ── COMO FUNCIONA + ENCONTROS ── */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Como funciona */}
          <div>
            <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-secondary block mb-4">Proposta</span>
            <h2 className="font-display text-2xl font-bold text-primary mb-5">Como funciona</h2>
            <div className="w-8 h-px bg-secondary mb-7" />
            <p className="text-muted-foreground font-light leading-relaxed text-[15px] mb-5">
              O TLC tem como estrutura um <span className="text-primary font-medium">curso de imersão</span> com duração de dois dias e meio. A proposta é retirar o participante da rotina para promover um auto encontro, um encontro com Deus e com o próximo.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed text-[15px]">
              Durante o curso são trabalhadas reflexões sobre a postura cristã no trabalho, na família e na comunidade — com muita música, partilha e alegria.
            </p>
          </div>

          {/* Encontros */}
          <div className="bg-primary/3 border border-primary/10 p-8">
            <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-secondary block mb-4">Sertãozinho/SP</span>
            <h2 className="font-display text-2xl font-bold text-primary mb-5">Encontros Semanais</h2>
            <div className="w-8 h-px bg-secondary mb-7" />
            <div className="flex flex-col gap-4">
              {[
                { label: "Dia", info: "Todo Domingo" },
                { label: "Horário", info: "18h30" },
                { label: "Local", info: "Centro Catequético Joaninha Gilberti" },
                { label: "Endereço", info: "R. Epitácio Pessoa, 1408 – Centro" },
                { label: "CEP", info: "14160-180" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 pb-4 border-b border-primary/8 last:border-0 last:pb-0">
                  <span className="text-xs font-bold tracking-wider uppercase text-secondary w-20 shrink-0 pt-0.5">{item.label}</span>
                  <span className="text-[15px] text-primary font-light">{item.info}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── COMO PARTICIPAR ── */}
      <section className="py-20 bg-gray-50/60 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-secondary block mb-3">Contato</span>
            <h2 className="font-display text-3xl font-bold text-primary mb-4">Como Participar</h2>
            <p className="text-muted-foreground font-light text-[15px] max-w-xl mx-auto">
              Entre em contato pelas nossas plataformas oficiais para saber sobre os próximos encontros e fazer parte do movimento.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <a
              href="https://www.instagram.com/tlcsertaozinho?igsh=ODRnbjA1eGMyOTY4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 bg-white border border-gray-100 p-6 hover:border-secondary/40 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0">
                <Instagram className="w-5 h-5 text-white stroke-[1.5]" />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-1">Instagram Oficial</p>
                <p className="text-base font-semibold text-primary group-hover:text-secondary transition-colors">@tlcsertaozinho</p>
              </div>
              <ArrowRight className="w-4 h-4 text-secondary ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </a>

            <a
              href="mailto:movimentotlc@tlc.org.br"
              className="flex items-center gap-5 bg-white border border-gray-100 p-6 hover:border-secondary/40 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-white stroke-[1.5]" />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-1">E-mail</p>
                <p className="text-base font-semibold text-primary group-hover:text-secondary transition-colors">movimentotlc@tlc.org.br</p>
              </div>
              <ArrowRight className="w-4 h-4 text-secondary ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </a>

            <a
              href="https://wa.me/5516996109741"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 bg-white border border-gray-100 p-6 hover:border-secondary/40 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-white stroke-[1.5]" />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-1">Éder Pereira</p>
                <p className="text-base font-semibold text-primary group-hover:text-secondary transition-colors">(16) 99610-9741</p>
              </div>
              <ArrowRight className="w-4 h-4 text-secondary ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </a>

            <a
              href="https://wa.me/5516988391325"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 bg-white border border-gray-100 p-6 hover:border-secondary/40 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-white stroke-[1.5]" />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-1">Jean Salerno</p>
                <p className="text-base font-semibold text-primary group-hover:text-secondary transition-colors">(16) 98839-1325</p>
              </div>
              <ArrowRight className="w-4 h-4 text-secondary ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </a>

          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-display text-2xl font-bold text-white mb-3">
              Faça parte do TLC Sertãozinho
            </h3>
            <p className="text-white/60 font-light text-[15px]">
              Aberto a jovens e adultos que desejam aprofundar a fé e viver a liderança cristã.
            </p>
          </div>
          <a
            href="https://www.instagram.com/tlcsertaozinho?igsh=ODRnbjA1eGMyOTY4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 shrink-0 bg-secondary text-primary px-7 py-3.5 text-xs font-bold tracking-wider uppercase hover:bg-secondary/90 transition-colors group"
          >
            Saiba Mais
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </main>
  );
}
