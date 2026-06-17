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

export default function Batismo() {
  return (
    <main className="w-full">
      <PageHero category="Sacramentos" title="Batismo" />

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
          <h2 className="font-display text-3xl font-bold text-primary mb-5">Pastoral do Batismo</h2>
          <div className="flex items-center gap-3 mb-7">
            <div className="w-10 h-px bg-secondary" />
            <div className="w-2 h-2 rotate-45 bg-secondary/50" />
          </div>
          <div className="space-y-4 text-muted-foreground font-light leading-relaxed text-[15px]">
            <p>A Pastoral do Batismo tem a missão de acolher, orientar e preparar os pais e padrinhos para a celebração do Batismo, primeiro sacramento da vida cristã. Por meio de encontros de formação, a pastoral ajuda as famílias a compreenderem a riqueza desse sacramento e a assumirem o compromisso de educar a criança na fé católica.</p>
            <p>O Batismo é a porta de entrada para a vida cristã. Nele, somos libertados do pecado, nos tornamos filhos de Deus, membros da Igreja e participantes da missão de Cristo. Por isso, a preparação dos pais e padrinhos é um momento importante de reflexão sobre a responsabilidade de testemunhar a fé e transmitir os valores cristãos às novas gerações.</p>
            <p>A Pastoral do Batismo busca acompanhar as famílias com espírito de acolhida e evangelização, ajudando-as a viver este momento não apenas como uma celebração, mas como o início de uma caminhada de fé e comunhão com a Igreja.</p>
          </div>
          <blockquote className="mt-7 border-l-2 border-secondary pl-6 text-muted-foreground font-light italic text-sm leading-relaxed">
            "Quem crer e for batizado será salvo." — Mc 16,16
          </blockquote>
        </motion.section>

        {/* Informações práticas */}
        <motion.section variants={fadeUp}>
          <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-secondary block mb-3">Informações Práticas</span>
          <h2 className="font-display text-2xl font-bold text-primary mb-5">Como agendar o Batismo</h2>
          <div className="flex items-center gap-3 mb-7">
            <div className="w-10 h-px bg-secondary" />
            <div className="w-2 h-2 rotate-45 bg-secondary/50" />
          </div>
          <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6 italic">
            As informações sobre inscrições, documentação necessária, datas dos encontros de preparação e celebrações do Batismo estão sendo atualizadas. Em breve serão disponibilizadas aqui. Enquanto isso, procure a secretaria paroquial.
          </p>
          <div className="border border-gray-100 overflow-hidden">
            {[
              { label: "Agendamento", info: "Procure a Secretaria Paroquial" },
              { label: "Preparação", info: "Encontro obrigatório para pais e padrinhos" },
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
