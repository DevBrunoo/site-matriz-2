import { motion } from "framer-motion";
import { FileDown, Clock, MapPin, Phone, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

const DATAS_2026 = [
  { inicio: "07/02/2026 – 19h00", encerramento: "07/03/2026 – 19h00", status: "realizada" },
  { inicio: "25/04/2026 – 19h00", encerramento: "11/07/2026 – 19h00", status: "confirmada" },
  { inicio: "15/08/2026 – 19h00", encerramento: "07/11/2026 – 19h00", status: "confirmada" },
  { inicio: "12/12/2026 – 19h00", encerramento: "—", status: "agendada" },
];

const statusColor: Record<string, string> = {
  realizada: "text-muted-foreground/50",
  confirmada: "text-primary",
  agendada: "text-secondary",
};

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
          <p className="text-muted-foreground font-light leading-relaxed text-base">
            O sacramento do Matrimônio é a união sagrada entre um homem e uma mulher, estabelecida por Deus para toda a vida. Por meio dele, os esposos recebem a graça divina para viver o amor com fidelidade, formar uma família e ajudar um ao outro no caminho da santidade. O casamento cristão é um sinal do amor de Cristo por sua Igreja e uma vocação de amor, entrega e comunhão.
          </p>
          <blockquote className="mt-8 border-l-2 border-secondary pl-6 text-muted-foreground font-light italic text-sm leading-relaxed">
            "O que Deus uniu, o homem não separe." — Mt 19,6
          </blockquote>
        </motion.section>

        {/* Catequese Matrimonial 2026 */}
        <motion.section variants={fadeUp}>
          <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-secondary block mb-3">Preparação</span>
          <h2 className="font-display text-3xl font-bold text-primary mb-6">Catequese Matrimonial 2026</h2>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-px bg-secondary" />
            <div className="w-2 h-2 rotate-45 bg-secondary/50" />
          </div>
          <p className="text-muted-foreground font-light leading-relaxed text-sm mb-8">
            O Catecumenato Matrimonial estrutura-se em <strong>12 encontros</strong> de preparação para o Matrimônio, baseados no livro <em>"Matrimônio: Encontro de Preparação – Catequese Matrimonial"</em>, adotado pela Arquidiocese de Ribeirão Preto desde 2019.
          </p>

          {/* Tabela de datas */}
          <div className="border border-gray-100 overflow-hidden mb-8">
            <div className="grid grid-cols-2 bg-primary px-6 py-3 text-[11px] font-bold tracking-widest uppercase text-white/80">
              <span>Início</span>
              <span>Encerramento</span>
            </div>
            {DATAS_2026.map((d, i) => (
              <div
                key={i}
                className={`grid grid-cols-2 px-6 py-4 text-sm ${statusColor[d.status]} ${i < DATAS_2026.length - 1 ? "border-b border-gray-100" : ""} hover:bg-muted/20 transition-colors`}
              >
                <span className="font-light">{d.inicio}</span>
                <span className="font-light">{d.encerramento}</span>
              </div>
            ))}
          </div>

          {/* Download PDF */}
          <a
            href="/catequese-noivos-2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3.5 border border-secondary text-primary hover:bg-secondary/10 transition-colors group"
          >
            <FileDown className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium">Programação Completa 2026 — Pe. Rafael</span>
            <ArrowRight className="w-3.5 h-3.5 text-secondary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </a>
        </motion.section>

        {/* Como iniciar */}
        <motion.section variants={fadeUp}>
          <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-secondary block mb-3">Como iniciar</span>
          <h2 className="font-display text-3xl font-bold text-primary mb-6">Primeiro Passo</h2>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-px bg-secondary" />
            <div className="w-2 h-2 rotate-45 bg-secondary/50" />
          </div>
          <p className="text-muted-foreground font-light leading-relaxed text-sm mb-8">
            Os noivos devem procurar a Secretaria Paroquial para preencher a ficha de inscrição e obter todas as informações necessárias. Recomenda-se iniciar o processo com pelo menos <strong>1 ano e meio</strong> de antecedência.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex gap-4 p-6 border border-gray-100 bg-white">
              <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5 stroke-[1.5]" />
              <div>
                <p className="text-xs font-bold tracking-wider uppercase text-muted-foreground mb-1">Endereço</p>
                <p className="text-sm text-primary font-light">R. Barão do Rio Branco, s/n<br />Centro, Sertãozinho – SP</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 border border-gray-100 bg-white">
              <Clock className="w-5 h-5 text-secondary shrink-0 mt-0.5 stroke-[1.5]" />
              <div>
                <p className="text-xs font-bold tracking-wider uppercase text-muted-foreground mb-1">Horários</p>
                <p className="text-sm text-primary font-light">Ter–Sex: 08h–12h e 13h30–17h30<br />Sáb: 08h–12h e 15h–18h</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 border border-gray-100 bg-white">
              <Phone className="w-5 h-5 text-secondary shrink-0 mt-0.5 stroke-[1.5]" />
              <div>
                <p className="text-xs font-bold tracking-wider uppercase text-muted-foreground mb-1">Telefone</p>
                <p className="text-sm text-primary font-light">(16) 3947-6524</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 border border-gray-100 bg-white">
              <Phone className="w-5 h-5 text-secondary shrink-0 mt-0.5 stroke-[1.5]" />
              <div>
                <p className="text-xs font-bold tracking-wider uppercase text-muted-foreground mb-1">Casal responsável</p>
                <p className="text-sm text-primary font-light">Vanda e Nelson<br />(16) 99108-8629</p>
              </div>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </main>
  );
}
