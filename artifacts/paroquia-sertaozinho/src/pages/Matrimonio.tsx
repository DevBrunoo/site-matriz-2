import { motion } from "framer-motion";
import { FileDown, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

export default function Matrimonio() {
  return (
    <main className="w-full">
      <PageHero category="Sacramentos" title="Matrimônio" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-16"
      >
        {/* O Sacramento */}
        <motion.section variants={fadeUp}>
          <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-secondary block mb-3">O Sacramento</span>
          <h2 className="font-display text-3xl font-bold text-primary mb-6">O que é o Matrimônio?</h2>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-px bg-secondary" />
            <div className="w-2 h-2 rotate-45 bg-secondary/50" />
          </div>
          <p className="text-muted-foreground font-light leading-relaxed">
            O sacramento do Matrimônio é a união sagrada entre um homem e uma mulher, estabelecida por Deus para toda a vida. Por meio dele, os esposos recebem a graça divina para viver o amor com fidelidade, formar uma família e ajudar um ao outro no caminho da santidade. O casamento cristão é um sinal do amor de Cristo por sua Igreja e uma vocação de amor, entrega e comunhão.
          </p>
          <blockquote className="mt-8 border-l-2 border-secondary pl-6 text-muted-foreground font-light italic text-sm leading-relaxed">
            "O que Deus uniu, o homem não separe." — Mt 19,6
          </blockquote>
        </motion.section>

        {/* Preparação */}
        <motion.section variants={fadeUp}>
          <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-secondary block mb-3">Preparação</span>
          <h2 className="font-display text-3xl font-bold text-primary mb-6">Catequese Matrimonial</h2>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-px bg-secondary" />
            <div className="w-2 h-2 rotate-45 bg-secondary/50" />
          </div>
          <p className="text-muted-foreground font-light leading-relaxed mb-8">
            O Catecumenato Matrimonial estrutura-se em <strong>12 encontros</strong> de preparação para o Matrimônio, baseados no livro <em>"Matrimônio: Encontro de Preparação – Catequese Matrimonial"</em>, adotado pela Arquidiocese de Ribeirão Preto desde 2019.
          </p>

          {/* Download PDF */}
          <a
            href="/catequese-noivos-2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3.5 border border-secondary text-primary hover:bg-secondary/10 transition-colors group"
          >
            <FileDown className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium">Instruções gerais e documentos</span>
            <ArrowRight className="w-3.5 h-3.5 text-secondary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </a>
        </motion.section>

        {/* CTA */}
        <motion.section variants={fadeUp} className="p-7 border border-secondary/30 bg-secondary/5">
          <p className="text-sm text-primary font-light leading-relaxed">
            Para verificar o início da próxima turma, entre em contato com a secretaria paroquial pelo{" "}
            <a
              href="https://wa.me/5516994648668"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary font-medium hover:underline"
            >
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
