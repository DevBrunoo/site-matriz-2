import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const CAPELAS = [
  { nome: "São Vicente de Paulo", endereco: "R: Frederico Ozanan, 931 – Centro", cep: "CEP: 14160-640" },
  { nome: "Nossa Senhora do Rosário", endereco: "R: João Mossin, 337 – Jardim dos Bandeirantes", cep: "CEP: 14170-800" },
];

const SETORES = [
  "Setor Santo Antônio (Paty)",
  "Setor Sagrado Coração de Jesus",
  "Centro Catequético",
];

export default function Capelas() {
  return (
    <main className="w-full pt-16 sm:pt-20 pb-24">
      <PageHero category="Paróquia Nossa Senhora Aparecida" title="Capelas e Setores" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-16">

        {/* Capelas */}
        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
          <motion.div variants={fadeUp} className="mb-10">
            <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-secondary block mb-3">Paróquia Nossa Senhora Aparecida</span>
            <h2 className="font-display text-3xl font-bold text-primary mb-4">Capelas</h2>
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-secondary" />
              <div className="w-2 h-2 rotate-45 bg-secondary/50" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CAPELAS.map((c) => (
              <motion.div
                key={c.nome}
                variants={fadeUp}
                className="bg-white border border-gray-100 hover:border-secondary/30 hover:shadow-sm transition-all p-7 flex gap-4"
              >
                <div className="w-9 h-9 bg-secondary/8 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-secondary stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-primary text-[16px] mb-1">{c.nome}</h3>
                  <p className="text-sm text-muted-foreground font-light">{c.endereco}</p>
                  <p className="text-xs text-muted-foreground/70 mt-1">{c.cep}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Setores */}
        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
          <motion.div variants={fadeUp} className="mb-10">
            <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-secondary block mb-3">Organização</span>
            <h2 className="font-display text-3xl font-bold text-primary mb-4">Setores</h2>
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-secondary" />
              <div className="w-2 h-2 rotate-45 bg-secondary/50" />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="border border-gray-100 overflow-hidden">
            {SETORES.map((s, i) => (
              <div
                key={s}
                className={`px-7 py-5 flex items-center gap-4 ${i < SETORES.length - 1 ? "border-b border-gray-100" : ""} hover:bg-muted/30 transition-colors`}
              >
                <div className="w-1.5 h-1.5 rotate-45 bg-secondary shrink-0" />
                <span className="font-medium text-primary text-sm">{s}</span>
              </div>
            ))}
          </motion.div>
        </motion.section>

      </div>
    </main>
  );
}
