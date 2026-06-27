import { ArrowRight, MapPin, Mail, Phone, Instagram, Calendar, Users, Star } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import tlcPhoto from "@assets/01e9e729-24d8-4d0e-b5db-f2e71ad56d27_1782518624337.JPG";

const BASE = import.meta.env.BASE_URL;

export default function Tlc() {
  return (
    <main className="w-full">
      <PageHero
        category="Pastorais"
        title="TLC — Treinamento de Liderança Cristã"
        subtitle="Uma experiência da Graça de Deus em dois dias e meio de alegria, música e oração"
      />

      {/* ── FEATURE: imagem + apresentação ── */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Lado esquerdo: foto com decoração */}
            <div className="relative flex justify-center lg:justify-start">
              {/* Cantos decorativos */}
              <div className="absolute -top-5 -left-5 w-20 h-20 border-l-2 border-t-2 border-secondary/40 pointer-events-none" />
              <div className="absolute -bottom-5 -right-5 w-20 h-20 border-r-2 border-b-2 border-secondary/40 pointer-events-none" />

              {/* Imagem */}
              <div className="relative w-full max-w-sm">
                <img
                  src={tlcPhoto}
                  alt="TLC Sertãozinho — jovens celebrando"
                  className="w-full rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.20)] object-cover"
                  style={{ aspectRatio: "9/16", maxHeight: "540px", objectPosition: "center top" }}
                />

                {/* Badge flutuante */}
                <div className="absolute -bottom-5 -right-5 bg-white border border-gray-100 shadow-lg px-5 py-3">
                  <p className="text-[9px] font-bold tracking-[0.24em] uppercase text-secondary mb-0.5">Em Sertãozinho</p>
                  <p className="font-display text-xl font-bold text-primary leading-none">Desde 1970</p>
                </div>
              </div>
            </div>

            {/* Lado direito: texto */}
            <div className="lg:pl-4">
              <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-secondary block mb-5">
                O Movimento
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-primary leading-snug mb-6">
                O que é o TLC?
              </h2>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-px bg-secondary" />
                <div className="w-2 h-2 rotate-45 bg-secondary/50" />
              </div>
              <div className="space-y-5 text-muted-foreground font-light leading-relaxed text-[15px]">
                <p>
                  É uma <span className="text-primary font-medium">experiência da Graça de Deus</span> que acontece em dois dias e meio de muita alegria, música, trabalho em grupo e oração.
                </p>
                <p>
                  O TLC é um movimento da Igreja Católica Apostólica Romana, fundado em{" "}
                  <span className="font-medium text-primary">1967</span> pelo Padre Haroldo Rahm, em Campinas-SP.
                </p>
                <p>
                  Em Sertãozinho, o Movimento chegou em{" "}
                  <span className="font-medium text-primary">02 de agosto de 1970</span>, por meio de um jovem e um casal, com a missão de despertar e evangelizar jovens e adultos.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── TRÊS PILARES ── */}
      <section className="py-20 bg-gray-50/70 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Star className="w-5 h-5 text-secondary stroke-[1.5]" />,
                title: "Experiência",
                desc: "Dois dias e meio de imersão que retira o participante da rotina para um encontro profundo com Deus e consigo mesmo.",
              },
              {
                icon: <Users className="w-5 h-5 text-secondary stroke-[1.5]" />,
                title: "Liderança",
                desc: "Formação de líderes cristãos comprometidos com a missão evangelizadora no trabalho, na família e na comunidade.",
              },
              {
                icon: <Calendar className="w-5 h-5 text-secondary stroke-[1.5]" />,
                title: "Comunidade",
                desc: "Uma família de fé que se reúne todo domingo às 18h30 para crescer juntos na vivência do Evangelho.",
              },
            ].map((p) => (
              <div key={p.title} className="flex flex-col gap-5">
                <div className="w-11 h-11 bg-white border border-gray-100 shadow-sm flex items-center justify-center">
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-primary mb-2">{p.title}</h3>
                  <div className="w-5 h-px bg-secondary mb-4" />
                  <p className="text-muted-foreground font-light text-[14px] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CITAÇÃO ── */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-px bg-secondary/50" />
              <div className="w-2 h-2 rotate-45 bg-secondary/60" />
              <div className="w-14 h-px bg-secondary/50" />
            </div>
            <blockquote className="font-display text-2xl lg:text-3xl font-light text-primary leading-relaxed italic">
              "Deus propõe e chama…<br className="hidden sm:block" />
              Ao jovem cabe a resposta."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-14 h-px bg-secondary/50" />
              <div className="w-2 h-2 rotate-45 bg-secondary/60" />
              <div className="w-14 h-px bg-secondary/50" />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOTO FULL-WIDTH ── */}
      <section className="relative h-[480px] md:h-[580px] overflow-hidden">
        <img
          src={tlcPhoto}
          alt="TLC Sertãozinho"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
          style={{ objectPosition: "center 30%" }}
        />
        {/* Overlay gradiente azul escuro */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />
        {/* Conteúdo sobre a foto */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-lg">
              <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-secondary/80 block mb-4">
                Comunidade Viva
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-snug mb-6">
                Jovens transformados pela fé
              </h2>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-px bg-secondary" />
                <div className="w-2 h-2 rotate-45 bg-secondary/60" />
              </div>
              <p className="text-white/80 font-light text-[15px] leading-relaxed">
                O TLC reúne jovens e adultos em uma experiência única de fé, alegria e liderança cristã em Sertãozinho.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMO FUNCIONA + ENCONTROS ── */}
      <section className="py-20 bg-gray-50/70 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="bg-white border border-gray-100 p-10">
            <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-secondary block mb-4">Proposta</span>
            <h2 className="font-display text-2xl font-bold text-primary mb-5">Como funciona</h2>
            <div className="w-8 h-px bg-secondary mb-7" />
            <div className="space-y-4 text-muted-foreground font-light leading-relaxed text-[15px]">
              <p>
                O TLC tem como estrutura um <span className="text-primary font-medium">curso de imersão</span> com duração de dois dias e meio.
              </p>
              <p>
                A proposta é retirar o participante da rotina para promover um auto encontro, um encontro com Deus e com o próximo, refletindo sobre a postura cristã no trabalho, família e comunidade.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-100 p-10">
            <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-secondary block mb-4">Sertãozinho / SP</span>
            <h2 className="font-display text-2xl font-bold text-primary mb-5">Encontros Semanais</h2>
            <div className="w-8 h-px bg-secondary mb-7" />
            <div className="flex flex-col divide-y divide-gray-100">
              {[
                { label: "Dia", info: "Todo Domingo" },
                { label: "Horário", info: "18h30" },
                { label: "Local", info: "Centro Catequético Joaninha Gilberti" },
                { label: "Endereço", info: "R. Epitácio Pessoa, 1408 – Centro, CEP 14160-180" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 py-3.5 first:pt-0 last:pb-0">
                  <span className="text-xs font-bold tracking-wider uppercase text-secondary w-20 shrink-0 pt-0.5">{item.label}</span>
                  <span className="text-[15px] text-primary font-light">{item.info}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── COMO PARTICIPAR ── */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-secondary block mb-3">Contato</span>
            <h2 className="font-display text-3xl font-bold text-primary mb-4">Como Participar</h2>
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-secondary" />
              <div className="w-1.5 h-1.5 rotate-45 bg-secondary/50" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: <Instagram className="w-5 h-5 text-white stroke-[1.5]" />,
                label: "Instagram Oficial",
                value: "@tlcsertaozinho",
                href: "https://www.instagram.com/tlcsertaozinho?igsh=ODRnbjA1eGMyOTY4",
              },
              {
                icon: <Mail className="w-5 h-5 text-white stroke-[1.5]" />,
                label: "E-mail",
                value: "movimentotlc@tlc.org.br",
                href: "mailto:movimentotlc@tlc.org.br",
              },
              {
                icon: <Phone className="w-5 h-5 text-white stroke-[1.5]" />,
                label: "Éder Pereira",
                value: "(16) 99610-9741",
                href: "https://wa.me/5516996109741",
              },
              {
                icon: <Phone className="w-5 h-5 text-white stroke-[1.5]" />,
                label: "Jean Salerno",
                value: "(16) 98839-1325",
                href: "https://wa.me/5516988391325",
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-5 border border-gray-100 p-6 hover:border-secondary/40 hover:shadow-md transition-all group bg-white"
              >
                <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0">
                  {c.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-1">{c.label}</p>
                  <p className="text-[15px] font-semibold text-primary group-hover:text-secondary transition-colors truncate">{c.value}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-secondary shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-20 bg-primary/4 border-b border-primary/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-display text-2xl font-bold text-primary mb-2">
              Faça parte do TLC Sertãozinho
            </h3>
            <p className="text-muted-foreground font-light text-[15px]">
              Aberto a jovens e adultos que desejam aprofundar a fé e viver a liderança cristã.
            </p>
          </div>
          <a
            href="https://www.instagram.com/tlcsertaozinho?igsh=ODRnbjA1eGMyOTY4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 shrink-0 bg-primary text-white px-7 py-3.5 text-xs font-bold tracking-wider uppercase hover:bg-primary/90 transition-colors group"
          >
            Saiba Mais no Instagram
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </main>
  );
}
