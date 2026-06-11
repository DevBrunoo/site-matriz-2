import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

export default function Crisma() {
  return (
    <main className="w-full">
      <PageHero category="Sacramentos" title="Crisma" />

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
          <h2 className="font-display text-3xl font-bold text-primary mb-5">Sacramento da Confirmação</h2>
          <div className="flex items-center gap-3 mb-7">
            <div className="w-10 h-px bg-secondary" />
            <div className="w-2 h-2 rotate-45 bg-secondary/50" />
          </div>
          <div className="space-y-4 text-muted-foreground font-light leading-relaxed text-[15px]">
            <p>A Crisma, também chamada de Sacramento da Confirmação, é o sacramento que fortalece a graça recebida no Batismo e torna o cristão mais plenamente comprometido com a missão da Igreja. Por meio da unção com o Santo Crisma e da oração do bispo ou de seu representante, o fiel recebe de maneira especial os dons do Espírito Santo para viver e testemunhar a fé com maturidade.</p>
            <p>A preparação para a Crisma é um tempo de formação, crescimento espiritual e aprofundamento da vida cristã. É uma oportunidade para conhecer melhor a fé da Igreja, fortalecer a amizade com Deus e assumir de forma consciente o compromisso de seguir Jesus Cristo.</p>
          </div>
          <blockquote className="mt-7 border-l-2 border-secondary pl-6 text-muted-foreground font-light italic text-sm leading-relaxed">
            "Recebereis a força do Espírito Santo que descerá sobre vós." — At 1,8
          </blockquote>
        </motion.section>

        {/* Requisitos */}
        <motion.section variants={fadeUp}>
          <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-secondary block mb-3">Inscrição</span>
          <h2 className="font-display text-2xl font-bold text-primary mb-5">Requisitos para a Crisma</h2>
          <div className="flex items-center gap-3 mb-7">
            <div className="w-10 h-px bg-secondary" />
            <div className="w-2 h-2 rotate-45 bg-secondary/50" />
          </div>
          <div className="border border-gray-100 overflow-hidden">
            {[
              { label: "Idade mínima", info: "12 anos" },
              { label: "Documentos", info: "Certidão de nascimento, comprovante de residência, lembrança do batismo e lembrança da 1ª Eucaristia" },
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
        <motion.section variants={fadeUp} className="flex items-center justify-between gap-6 p-7 border border-secondary/30 bg-secondary/5">
          <p className="text-sm text-primary font-light leading-relaxed">
            Dúvidas sobre o processo de Crisma? Fale com a nossa secretaria paroquial.
          </p>
          <Link href="/secretaria">
            <span className="inline-flex items-center gap-2 shrink-0 text-xs font-bold tracking-wider uppercase text-primary hover:text-secondary transition-colors group">
              Secretaria <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.section>
      </motion.div>
    </main>
  );
}
