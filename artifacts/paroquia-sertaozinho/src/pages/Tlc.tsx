import { Link } from "wouter";
import { ArrowRight, MapPin, Mail, Phone, Instagram } from "lucide-react";
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
              src={`${BASE}logos/logo-tlc.png`}
              alt="Logo TLC Sertãozinho"
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

      {/* O que é o TLC */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-secondary" />
            <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">O que é o TLC</h2>
          </div>
          <p className="text-muted-foreground font-light leading-relaxed text-[15px] mb-5">
            É uma experiência da Graça de Deus que acontece em dois dias e meio de muita alegria, música, trabalho em grupo e oração.
          </p>
          <p className="text-muted-foreground font-light leading-relaxed text-[15px] mb-5">
            O TLC (Treinamento de Liderança Cristã) é um movimento da Igreja Católica Apostólica Romana, fundado em 1967 pelo{" "}
            <span className="font-medium text-primary">Padre Haroldo Rahm</span>, em Campinas-SP.
          </p>
          <p className="text-muted-foreground font-light leading-relaxed text-[15px]">
            Em Sertãozinho, o Movimento chegou em{" "}
            <span className="font-medium text-primary">02 de agosto de 1970</span>, por meio de um jovem e um casal, focado no despertar e na evangelização de jovens e adultos, com a missão de promover o desenvolvimento da liderança, o aprofundamento da fé e o compromisso com os valores da Igreja.
          </p>
        </div>
      </section>

      {/* Como funciona + encontros */}
      <section className="pb-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Como funciona */}
          <div className="border border-gray-100 p-8 hover:border-secondary/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-secondary" />
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">✨ Como funciona</h2>
            </div>
            <p className="text-muted-foreground font-light text-[15px] leading-relaxed mb-4">
              O TLC tem como estrutura um curso de imersão com duração de dois dias e meio. A proposta principal é retirar o participante da rotina para promover um auto encontro, um encontro com Deus e com o próximo, refletindo sobre a postura cristã no trabalho, família e na comunidade.
            </p>
            <blockquote className="border-l-2 border-secondary pl-4 text-muted-foreground font-light italic text-sm leading-relaxed">
              "Deus propõe e chama... Ao jovem cabe a resposta."
            </blockquote>
          </div>

          {/* Encontros */}
          <div className="border border-gray-100 p-8 hover:border-secondary/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-secondary" />
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">📅 Encontros</h2>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { label: "Dia", info: "Domingos" },
                { label: "Horário", info: "18h30" },
                { label: "Local", info: "Centro Catequético Joaninha Gilberti" },
                { label: "Endereço", info: "R. Epitácio Pessoa, 1408 – Centro, CEP 14160-180" },
              ].map((item) => (
                <div key={item.label} className="flex items-start justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0 gap-4">
                  <span className="text-sm font-semibold text-primary shrink-0">{item.label}</span>
                  <span className="text-sm text-muted-foreground font-light text-right">{item.info}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Como participar */}
      <section className="py-16 bg-primary/3 border-y border-primary/8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-secondary" />
            <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">Como participar</h2>
          </div>
          <p className="text-[15px] text-muted-foreground font-light leading-relaxed mb-8">
            Consulte nossas plataformas oficiais e redes sociais para saber sobre os próximos encontros e como fazer parte do movimento.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/tlcsertaozinho?igsh=ODRnbjA1eGMyOTY4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 border border-gray-100 p-6 hover:border-secondary/30 hover:bg-white transition-all group"
            >
              <span className="w-10 h-10 bg-secondary/10 flex items-center justify-center shrink-0">
                <Instagram className="w-5 h-5 text-secondary stroke-[1.5]" />
              </span>
              <div>
                <p className="text-xs font-bold tracking-wider uppercase text-muted-foreground mb-0.5">Instagram</p>
                <p className="text-sm font-medium text-primary group-hover:text-secondary transition-colors">@tlcsertaozinho</p>
              </div>
            </a>

            {/* E-mail */}
            <a
              href="mailto:movimentotlc@tlc.org.br"
              className="flex items-center gap-4 border border-gray-100 p-6 hover:border-secondary/30 hover:bg-white transition-all group"
            >
              <span className="w-10 h-10 bg-secondary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-secondary stroke-[1.5]" />
              </span>
              <div>
                <p className="text-xs font-bold tracking-wider uppercase text-muted-foreground mb-0.5">E-mail</p>
                <p className="text-sm font-medium text-primary group-hover:text-secondary transition-colors">movimentotlc@tlc.org.br</p>
              </div>
            </a>

            {/* Éder Pereira */}
            <a
              href="https://wa.me/5516996109741"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 border border-gray-100 p-6 hover:border-secondary/30 hover:bg-white transition-all group"
            >
              <span className="w-10 h-10 bg-secondary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-secondary stroke-[1.5]" />
              </span>
              <div>
                <p className="text-xs font-bold tracking-wider uppercase text-muted-foreground mb-0.5">Éder Pereira</p>
                <p className="text-sm font-medium text-primary group-hover:text-secondary transition-colors">(16) 99610-9741</p>
              </div>
            </a>

            {/* Jean Salerno */}
            <a
              href="https://wa.me/5516988391325"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 border border-gray-100 p-6 hover:border-secondary/30 hover:bg-white transition-all group"
            >
              <span className="w-10 h-10 bg-secondary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-secondary stroke-[1.5]" />
              </span>
              <div>
                <p className="text-xs font-bold tracking-wider uppercase text-muted-foreground mb-0.5">Jean Salerno</p>
                <p className="text-sm font-medium text-primary group-hover:text-secondary transition-colors">(16) 98839-1325</p>
              </div>
            </a>

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
                O TLC é aberto a jovens e adultos que desejam aprofundar sua fé e desenvolver sua liderança cristã. Venha descobrir essa experiência transformadora!
              </p>
            </div>
            <a
              href="https://www.instagram.com/tlcsertaozinho?igsh=ODRnbjA1eGMyOTY4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 shrink-0 bg-primary text-white px-6 py-2.5 text-xs font-semibold tracking-wider uppercase hover:bg-primary/90 transition-colors group"
            >
              Ver no Instagram
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
