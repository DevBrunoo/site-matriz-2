import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Heart, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Link } from "wouter";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export default function UncaoEnfermos() {
  return (
    <main className="w-full pt-16 sm:pt-20 pb-24">
      <PageHero category="Sacramentos" title="Unção dos Enfermos" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-16">

        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
          <motion.div variants={fadeUp} className="mb-8">
            <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-secondary block mb-3">Sacramento</span>
            <h2 className="font-display text-3xl font-bold text-primary flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-secondary stroke-[1.5]" />
              O Sacramento da Unção dos Enfermos
            </h2>
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-secondary" />
              <div className="w-2 h-2 rotate-45 bg-secondary/50" />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-5 text-muted-foreground font-light leading-relaxed text-base">
            <p>
              A Unção dos Enfermos é o sacramento pelo qual a Igreja confia os doentes à misericórdia e ao cuidado de Cristo. Por meio da oração do sacerdote e da unção com o óleo abençoado, Deus concede ao enfermo força, consolo, paz e coragem para enfrentar as dificuldades causadas pela enfermidade ou pela idade avançada.
            </p>
            <p>
              Este sacramento não é destinado apenas aos momentos finais da vida. Ele pode ser recebido por qualquer fiel que esteja enfrentando uma doença grave, que vá se submeter a uma cirurgia de risco ou que se encontre debilitado pela idade. A Unção dos Enfermos une o sofrimento da pessoa ao de Cristo, fortalece sua fé e pode, segundo a vontade de Deus, contribuir também para a recuperação da saúde.
            </p>
            <p>
              Além disso, quando necessário, o sacramento oferece o perdão dos pecados, caso o enfermo não possa se confessar. É um sinal da proximidade amorosa de Deus, que não abandona seus filhos nos momentos de fragilidade, mas os acompanha com sua graça e seu conforto.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 bg-primary/[0.04] border border-primary/10 p-6 flex gap-4 items-start">
            <Phone className="w-5 h-5 text-secondary shrink-0 mt-0.5 stroke-[1.5]" />
            <p className="text-sm text-primary font-light leading-relaxed">
              <span className="font-semibold">Solicitar visita:</span> Se você ou algum familiar necessita receber a Unção dos Enfermos, entre em contato com a secretaria paroquial pelo{" "}
              <a href="https://wa.me/5516994648668" target="_blank" rel="noopener noreferrer" className="text-secondary underline underline-offset-2 hover:text-primary transition-colors font-medium">
                WhatsApp (16) 99464-8668
              </a>{" "}
              ou telefone <span className="font-medium">(16) 3947-6524</span> para que possamos providenciar a visita de um sacerdote.
            </p>
          </motion.div>
        </motion.section>

      </div>
    </main>
  );
}
