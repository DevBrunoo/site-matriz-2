import { motion } from "framer-motion";
import { Clock, MapPin, Phone, Mail, Instagram, Star } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

const FESTAS = [
  {
    titulo: "Festa da Padroeira — N. Sra. Aparecida",
    periodo: "12 de Outubro",
    descricao:
      "Dia da Padroeira do Brasil e da nossa paróquia. Celebração solene com Missa Festiva, procissão mariana e louvor à nossa querida Mãe Aparecida.",
    cor: "bg-secondary",
    icone: "👑",
  },
];

const CONTATO = [
  { icon: MapPin,    label: "Endereço",   valor: "Largo da Matriz Cônego Antônio de Oliveira – Centro, Sertãozinho/SP" },
  { icon: Phone,     label: "Telefone",   valor: "(16) 3947-6524 / (16) 3041-6221" },
  { icon: Phone,     label: "WhatsApp",   valor: "(16) 99464-8668", whatsapp: true },
  { icon: Mail,      label: "E-mail",     valor: "matrizstz@gmail.com" },
  { icon: Instagram, label: "Instagram",  valor: "@matrizstz" },
];

export default function Agenda() {
  return (
    <main className="pt-16 sm:pt-20 pb-24">
      <PageHero
        title="Agenda Paroquial"
        subtitle="Festas e informações de contato da Paróquia Nossa Senhora Aparecida."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-20">

        {/* ── Festas ────────────────────────────────────────────── */}
        <motion.section
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="mb-10">
            <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-secondary block mb-3">Celebrações Especiais</span>
            <h2 className="font-display text-3xl font-bold text-primary flex items-center gap-3 mb-4">
              <Star className="w-6 h-6 text-secondary stroke-[1.5]" />
              Festas da Paróquia
            </h2>
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-secondary" />
              <div className="w-2 h-2 rotate-45 bg-secondary/50" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FESTAS.map((f) => (
              <motion.div
                key={f.titulo}
                variants={fadeUp}
                className="bg-white border border-gray-100 hover:border-secondary/30 hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className={`h-1 w-full ${f.cor}`} />
                <div className="p-7 flex flex-col flex-1">
                  <div className="text-3xl mb-4">{f.icone}</div>
                  <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-secondary mb-2">{f.periodo}</span>
                  <h3 className="font-display text-[17px] font-semibold text-primary mb-3 leading-snug">{f.titulo}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{f.descricao}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Informações de Contato ────────────────────────────── */}
        <motion.section
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="mb-10">
            <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-secondary block mb-3">Paróquia Nossa Senhora Aparecida</span>
            <h2 className="font-display text-3xl font-bold text-primary flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-secondary stroke-[1.5]" />
              Informações e Contato
            </h2>
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-secondary" />
              <div className="w-2 h-2 rotate-45 bg-secondary/50" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-100">
            {CONTATO.map(({ icon: Icon, label, valor, whatsapp }) => (
              <motion.div key={label} variants={fadeUp} className="bg-white p-6 sm:p-8 flex gap-4 items-start">
                <div className="w-9 h-9 bg-secondary/8 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-secondary stroke-[1.5]" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-1">{label}</p>
                  {whatsapp ? (
                    <a
                      href={`https://wa.me/55${valor.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary hover:text-secondary transition-colors underline underline-offset-2"
                    >
                      {valor}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-primary">{valor}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Pároco */}
            <motion.div variants={fadeUp} className="bg-white p-6 sm:p-8 flex gap-4 items-start">
              <div className="w-9 h-9 bg-secondary/8 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-secondary font-bold text-sm">✝</span>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-1">Pároco</p>
                <p className="text-sm font-medium text-primary">Pe. Sérgio Donizetti Carmona</p>
              </div>
            </motion.div>

            {/* Fundação */}
            <motion.div variants={fadeUp} className="bg-white p-6 sm:p-8 flex gap-4 items-start">
              <div className="w-9 h-9 bg-secondary/8 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-secondary font-bold text-sm">⚜</span>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-1">Ano de Fundação</p>
                <p className="text-sm font-medium text-primary">1900</p>
              </div>
            </motion.div>
          </div>

          {/* Secretaria notice */}
          <motion.div variants={fadeUp} className="mt-6 bg-primary/[0.04] border border-primary/10 p-6 flex gap-4">
            <Clock className="w-5 h-5 text-secondary shrink-0 mt-0.5 stroke-[1.5]" />
            <p className="text-sm text-primary font-light leading-relaxed">
              <span className="font-semibold">Secretaria:</span> Seg–Sex das 08h às 17h30 · Sáb das 08h às 12h · Domingo aberto (horário a confirmar).
              Para dúvidas sobre sacramentos, batizados e casamentos, entre em contato pelo telefone ou WhatsApp.
            </p>
          </motion.div>
        </motion.section>

      </div>
    </main>
  );
}
