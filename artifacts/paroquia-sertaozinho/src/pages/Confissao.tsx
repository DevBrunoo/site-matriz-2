import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Clock, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const HORARIOS = [
  { dia: "Quarta-feira", horario: "15h00 – 17h00  ·  18h00 – 18h30" },
  { dia: "Quinta-feira", horario: "Com agendamento na secretaria" },
  { dia: "Sexta-feira",  horario: "10h00 – 12h00  ·  16h00 – 17h00" },
];

export default function Confissao() {
  return (
    <main className="w-full pt-16 sm:pt-20 pb-24">
      <PageHero category="Sacramentos" title="Confissão" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-16">

        {/* Horários */}
        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
          <motion.div variants={fadeUp} className="mb-8">
            <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-secondary block mb-3">Igreja Matriz</span>
            <h2 className="font-display text-3xl font-bold text-primary flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-secondary stroke-[1.5]" />
              Horários de Confissão
            </h2>
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-secondary" />
              <div className="w-2 h-2 rotate-45 bg-secondary/50" />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="border border-gray-100 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-5 sm:px-8 py-4 text-left text-[11px] font-bold tracking-[0.18em] uppercase">Dia</th>
                  <th className="px-5 sm:px-8 py-4 text-left text-[11px] font-bold tracking-[0.18em] uppercase">Horário</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {HORARIOS.map((h) => (
                  <tr key={h.dia} className="hover:bg-muted/40 transition-colors">
                    <td className="px-5 sm:px-8 py-4 font-semibold text-primary text-sm">{h.dia}</td>
                    <td className="px-5 sm:px-8 py-4 text-sm text-muted-foreground">{h.horario}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </motion.section>

        {/* Texto */}
        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
          <motion.div variants={fadeUp} className="mb-8">
            <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-secondary block mb-3">Sacramento</span>
            <h2 className="font-display text-3xl font-bold text-primary mb-4">O Sacramento da Confissão</h2>
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-secondary" />
              <div className="w-2 h-2 rotate-45 bg-secondary/50" />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="prose prose-lg max-w-none text-muted-foreground font-light leading-relaxed space-y-5">
            <p>
              O sacramento da Confissão, também chamado de Reconciliação ou Penitência, é o meio pelo qual recebemos o perdão dos pecados cometidos após o Batismo. Nele, confessamos sinceramente nossas faltas a um sacerdote, manifestamos arrependimento e recebemos a absolvição em nome de Cristo.
            </p>
            <p>
              Sua importância está no fato de que não apenas apaga os pecados, mas também restaura nossa amizade com Deus, fortalece a alma contra futuras quedas e traz paz à consciência. A Confissão é um encontro pessoal com a misericórdia de Deus, que nunca se cansa de acolher e renovar aqueles que retornam a Ele com coração humilde.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <a
              href="https://padrerafaelcosta.com/o-que-e-a-confissao-e-como-se-confessar/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 border border-secondary text-secondary hover:bg-secondary hover:text-white transition-all group"
            >
              <ExternalLink className="w-4 h-4 shrink-0" />
              <span className="font-semibold text-sm tracking-wide">Como se confessar — passo a passo</span>
            </a>
          </motion.div>
        </motion.section>

      </div>
    </main>
  );
}
