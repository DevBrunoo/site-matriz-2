import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

export default function Eucaristia() {
  return (
    <main className="w-full">
      <PageHero category="Sacramentos" title="Primeira Comunhão" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-14"
      >
        {/* O Sacramento */}
        <motion.section variants={fadeUp}>
          <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-secondary block mb-3">O Sacramento</span>
          <h2 className="font-display text-3xl font-bold text-primary mb-5">Eucaristia — Primeira Comunhão</h2>
          <div className="flex items-center gap-3 mb-7">
            <div className="w-10 h-px bg-secondary" />
            <div className="w-2 h-2 rotate-45 bg-secondary/50" />
          </div>
          <div className="space-y-4 text-muted-foreground font-light leading-relaxed text-[15px]">
            <p>A Pastoral da Eucaristia – Primeira Comunhão tem a missão de preparar crianças, adolescentes e, em alguns casos, adultos para receberem pela primeira vez Jesus Cristo na Sagrada Eucaristia. Por meio da catequese, os participantes são introduzidos no conhecimento da fé católica, da Palavra de Deus, da vida de oração e dos sacramentos.</p>
            <p>A Primeira Comunhão é um momento muito especial na vida cristã, pois é quando o fiel recebe pela primeira vez o Corpo e o Sangue de Cristo, presentes na Eucaristia. Mais do que uma celebração, trata-se de um encontro profundo com Jesus, que se oferece como alimento espiritual para fortalecer a fé e sustentar a caminhada cristã.</p>
            <p>A preparação catequética busca ajudar os catequizandos a compreenderem a importância da participação na Santa Missa, da vida sacramental, da oração e do compromisso de viver os ensinamentos de Cristo no dia a dia.</p>
          </div>
          <blockquote className="mt-7 border-l-2 border-secondary pl-6 text-muted-foreground font-light italic text-sm leading-relaxed">
            "Eu sou o pão vivo descido do céu." — Jo 6,51
          </blockquote>
        </motion.section>

        {/* Requisitos */}
        <motion.section variants={fadeUp}>
          <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-secondary block mb-3">Inscrição</span>
          <h2 className="font-display text-2xl font-bold text-primary mb-5">Requisitos para a 1ª Eucaristia</h2>
          <div className="flex items-center gap-3 mb-7">
            <div className="w-10 h-px bg-secondary" />
            <div className="w-2 h-2 rotate-45 bg-secondary/50" />
          </div>
          <div className="border border-gray-100 overflow-hidden">
            {[
              { label: "Idade mínima", info: "9 anos" },
              { label: "Documentos", info: "Certidão de nascimento, comprovante de residência e lembrança do batismo" },
              { label: "Quando inscrever", info: "Geralmente no início do ano (fevereiro)" },
            ].map((item, i, arr) => (
              <div key={item.label} className={`flex items-start gap-5 px-7 py-5 ${i < arr.length - 1 ? "border-b border-gray-100" : ""} hover:bg-muted/20 transition-colors`}>
                <div className="w-1.5 h-1.5 rotate-45 bg-secondary shrink-0 mt-2" />
                <div className="flex-1">
                  <span className="text-xs font-bold tracking-wider uppercase text-muted-foreground block mb-1">{item.label}</span>
                  <span className="text-sm text-primary font-light">{item.info}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-muted-foreground font-light leading-relaxed italic">
            Os documentos devem ser entregues no ato da inscrição para a Catequese da 1ª Eucaristia e Crisma. Para saber quando começa a próxima turma, entre em contato com a secretaria.
          </p>
        </motion.section>

        {/* CTA */}
        <motion.section variants={fadeUp} className="p-7 border border-secondary/30 bg-secondary/5">
          <p className="text-sm text-primary font-light leading-relaxed">
            Para verificar o início da próxima turma, entre em contato com a secretaria paroquial pelo{" "}
            <a href="https://wa.me/5516994648668" target="_blank" rel="noopener noreferrer" className="text-secondary font-medium hover:underline">
              WhatsApp (16) 99464-8668
            </a>{" "}
            ou telefone{" "}
            <span className="font-medium text-primary">(16) 3947-6524</span>.
          </p>
        </motion.section>
      </motion.div>
    </main>
  );
}
