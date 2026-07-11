import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Link } from "wouter";
import { PageHero } from "@/components/PageHero";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export default function Historia() {
  return (
    <main className="w-full pt-16 sm:pt-20 pb-24">
      <PageHero category="Paróquia Nossa Senhora Aparecida" title="História da Paróquia" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-16">

        {/* A Paróquia */}
        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
          <motion.div variants={fadeUp} className="mb-8">
            <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-secondary block mb-3">Sertãozinho · SP</span>
            <h2 className="font-display text-3xl font-bold text-primary mb-4">A Paróquia</h2>
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-secondary" />
              <div className="w-2 h-2 rotate-45 bg-secondary/50" />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-5 text-muted-foreground font-light leading-relaxed text-base">
            <p>
              A pedra fundamental para a construção da Matriz foi lançada no dia <strong className="text-primary font-medium">02 de fevereiro de 1919</strong>.
            </p>
            <p>
              Em <strong className="text-primary font-medium">06 de maio de 1928</strong>, foi inaugurada a atual Matriz — a Igreja Matriz Nossa Senhora Aparecida — tal como ela é hoje.
            </p>
            <p>
              Vinte dias depois, o bispo diocesano Dom Alberto José Gonçalves visitou a cidade autorizando a demolição da antiga Matriz.
            </p>
          </motion.div>
        </motion.section>

        {/* O Brasão */}
        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={stagger}>
          <motion.div variants={fadeUp} className="mb-8">
            <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-secondary block mb-3">Desde 2018</span>
            <h2 className="font-display text-3xl font-bold text-primary mb-4">O Brasão</h2>
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-secondary" />
              <div className="w-2 h-2 rotate-45 bg-secondary/50" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-start">
            <motion.div variants={fadeUp}>
              <img
                src={`${import.meta.env.BASE_URL}brasao.png`}
                alt="Brasão da Paróquia Nossa Senhora Aparecida"
                className="w-full max-w-[260px] mx-auto sm:mx-0 object-contain drop-shadow-lg"
              />
            </motion.div>
            <motion.div variants={fadeUp} className="space-y-4 text-muted-foreground font-light leading-relaxed text-sm">
              <p>
                Nosso brasão foi apresentado à comunidade em <strong className="text-primary font-medium">02 de outubro de 2018</strong>, na Celebração de Abertura da 72ª Festa da Padroeira <em>"Com Maria, celebrando o Ano Nacional do Laicato"</em>.
              </p>
              <p>
                O escudo apresenta o mesmo formato da Família Real Portuguesa, com dois escudos sobrepostos — o maior em amarelo e o menor em azul marinho — com a coroa real, o monograma <strong className="text-primary font-medium">AM</strong>, um lírio (pureza de Maria), a cana-de-açúcar (riqueza da cidade) e a Cruz Paroquial folheada a ouro.
              </p>
              <Link
                href="/brasao"
                className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] uppercase text-secondary hover:text-primary transition-colors border-b border-secondary/30 hover:border-primary pb-0.5"
              >
                Leia a explicação completa →
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Forania */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-gray-100 pt-10 flex flex-col sm:flex-row gap-6 text-sm text-muted-foreground font-light"
        >
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-secondary mb-1">Forania</p>
            <p className="text-primary font-medium">Nossa Senhora Aparecida</p>
          </div>
          <div className="sm:border-l sm:border-gray-200 sm:pl-6">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-secondary mb-1">Arquidiocese</p>
            <p className="text-primary font-medium">Ribeirão Preto</p>
          </div>
          <div className="sm:border-l sm:border-gray-200 sm:pl-6">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-secondary mb-1">Eregida</p>
            <p className="text-primary font-medium">18.05.1900</p>
          </div>
        </motion.section>

      </div>
    </main>
  );
}
