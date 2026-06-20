import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const BASE = import.meta.env.BASE_URL;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

const CAPELAS = [
  {
    nome: "Nossa Senhora do Rosário",
    endereco: "R. João Mossin, 337 – Jardim dos Bandeirantes",
    cep: "CEP: 14170-800",
    foto: `${BASE}capelas/rosario.png`,
    mapsUrl: "https://maps.app.goo.gl/uKHKuypCcyzEcN6S8",
  },
  {
    nome: "Santo Antônio (Paty)",
    endereco: "Setor Santo Antônio de Pádua – Sertãozinho",
    cep: "",
    foto: `${BASE}capelas/santo-antonio.jpg`,
    mapsUrl: null,
  },
  {
    nome: "São Vicente de Paulo",
    endereco: "R. Frederico Ozanan, 931 – Centro",
    cep: "CEP: 14160-640",
    foto: `${BASE}capelas/sao-vicente.jpg`,
    mapsUrl: "https://maps.app.goo.gl/BreHPP8z2DRsXp8i8",
  },
];

const SETORES = [
  "Setor Santo Antônio (Paty)",
  "Setor Sagrado Coração de Jesus",
];

const CENTROS = [
  { nome: "Centro Catequético Joaninha Gilberti", endereco: "R. Epitácio Pessoa, 1408 – Centro", cep: "CEP: 14160-180" },
];

export default function Capelas() {
  return (
    <main className="w-full pb-24">
      <PageHero category="Paróquia Nossa Senhora Aparecida" title="Capelas e Setores" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-20">

        {/* Igreja Matriz */}
        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={stagger}>
          <motion.div variants={fadeUp} className="mb-8">
            <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-secondary block mb-3">Sede Paroquial</span>
            <h2 className="font-display text-3xl font-bold text-primary mb-4">Igreja Matriz</h2>
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-secondary" />
              <div className="w-2 h-2 rotate-45 bg-secondary/50" />
            </div>
          </motion.div>

          <motion.a
            variants={fadeUp}
            href="https://maps.app.goo.gl/ScQ5er7tC3tPE2E9A"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex gap-4 bg-white border border-gray-100 hover:border-secondary/30 hover:shadow-md transition-all p-7 w-full sm:w-auto sm:inline-flex"
          >
            <div className="w-9 h-9 bg-secondary/8 flex items-center justify-center shrink-0 mt-0.5">
              <MapPin className="w-4 h-4 text-secondary stroke-[1.5]" />
            </div>
            <div className="flex-1">
              <h3 className="font-display font-semibold text-primary text-[16px] mb-1 group-hover:text-secondary transition-colors">
                Nossa Senhora Aparecida — Matriz
              </h3>
              <p className="text-sm text-muted-foreground font-light">Largo da Matriz Cônego Antônio de Oliveira – Centro</p>
              <p className="text-xs text-muted-foreground/70 mt-1">CEP: 14160-000</p>
              <span className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold tracking-wider uppercase text-secondary">
                Ver no Google Maps <ExternalLink className="w-3 h-3" />
              </span>
            </div>
          </motion.a>
        </motion.section>

        {/* Capelas */}
        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={stagger}>
          <motion.div variants={fadeUp} className="mb-10">
            <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-secondary block mb-3">Paróquia Nossa Senhora Aparecida</span>
            <h2 className="font-display text-3xl font-bold text-primary mb-4">Capelas</h2>
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-secondary" />
              <div className="w-2 h-2 rotate-45 bg-secondary/50" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CAPELAS.map((c) => (
              <motion.div
                key={c.nome}
                variants={fadeUp}
                className="bg-white border border-gray-100 hover:border-secondary/30 hover:shadow-md transition-all overflow-hidden flex flex-col"
              >
                {/* Foto */}
                <div className="relative aspect-[4/3] overflow-hidden bg-primary/10">
                  <img
                    src={c.foto}
                    alt={`Capela ${c.nome}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                </div>

                {/* Info */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex gap-3 mb-4">
                    <div className="w-8 h-8 bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-secondary stroke-[1.5]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-semibold text-primary text-[15px] mb-1 leading-snug">{c.nome}</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">{c.endereco}</p>
                      {c.cep && <p className="text-xs text-muted-foreground/60 mt-1">{c.cep}</p>}
                    </div>
                  </div>

                  {c.mapsUrl && (
                    <div className="mt-auto pt-4 border-t border-gray-50">
                      <a
                        href={c.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-secondary hover:text-secondary/80 transition-colors"
                      >
                        <MapPin className="w-3.5 h-3.5" />
                        Ver no Google Maps
                        <ExternalLink className="w-3 h-3 opacity-70" />
                      </a>
                    </div>
                  )}
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

        {/* Centro Catequético */}
        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
          <motion.div variants={fadeUp} className="mb-10">
            <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-secondary block mb-3">Educação da Fé</span>
            <h2 className="font-display text-3xl font-bold text-primary mb-4">Centro Catequético</h2>
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-secondary" />
              <div className="w-2 h-2 rotate-45 bg-secondary/50" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-4">
            {CENTROS.map((c) => (
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

      </div>
    </main>
  );
}
