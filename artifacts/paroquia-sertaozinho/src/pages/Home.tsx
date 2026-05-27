import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Clock, Calendar, Heart, ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { getEventos, getAvisos, Evento, Aviso } from "@/lib/adminData";

const SACRAMENTOS = [
  { num: "I", label: "Batismo", href: "/batismo", desc: "Porta de entrada para a fé cristã" },
  { num: "II", label: "Eucaristia", href: "/eucaristia", desc: "Presença real de Jesus entre nós" },
  { num: "III", label: "Matrimônio", href: "/matrimonio", desc: "Aliança de amor segundo Deus" },
  { num: "IV", label: "Confissão", href: "/confissao", desc: "Reconciliação com Deus e a Igreja" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const CATEGORY_COLORS: Record<string, string> = {
  "Missa": "bg-blue-600",
  "Encontro": "bg-emerald-600",
  "Retiro": "bg-violet-600",
  "Evento": "bg-amber-600",
  "Celebração": "bg-rose-600",
};

function getCategoryColor(cat: string) {
  return CATEGORY_COLORS[cat] ?? "bg-primary";
}

export default function Home() {
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [avisos, setAvisos] = useState<Aviso[]>([]);

  useEffect(() => {
    setEventos(getEventos().slice(0, 4));
    setAvisos(getAvisos().filter((a) => a.ativo).slice(0, 2));
  }, []);

  return (
    <main className="w-full pt-16 sm:pt-20">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] sm:min-h-[88vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(155deg, #0b1535 0%, #132257 35%, #1a3580 65%, #1E3A8A 100%)" }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(212,175,55,0.12) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Top glow */}
        <div
          className="absolute top-0 inset-x-0 h-[55%] pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,175,55,0.07) 0%, transparent 100%)" }}
        />
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 30%, rgba(6,11,32,0.7) 100%)" }}
        />

        {/* Decorative large cross (very subtle) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.025]">
          <svg viewBox="0 0 200 200" className="w-[500px] h-[500px]" fill="none">
            <rect x="88" y="0" width="24" height="200" rx="4" fill="#D4AF37" />
            <rect x="0" y="72" width="200" height="24" rx="4" fill="#D4AF37" />
          </svg>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto py-20 sm:py-28">
          <motion.div initial="hidden" animate="show" variants={stagger}>

            {/* Ornament */}
            <motion.div variants={fadeUp} className="flex justify-center mb-7 sm:mb-9">
              <div className="relative">
                <div
                  className="absolute inset-0 -m-8 rounded-full blur-3xl opacity-20"
                  style={{ background: "radial-gradient(circle, #D4AF37, transparent 65%)" }}
                />
                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" className="relative">
                  <line x1="0" y1="23" x2="46" y2="23" stroke="#D4AF37" strokeWidth="0.7" opacity="0.45" />
                  <line x1="23" y1="0" x2="23" y2="46" stroke="#D4AF37" strokeWidth="0.7" opacity="0.45" />
                  <rect x="14" y="14" width="18" height="18" transform="rotate(45 23 23)" fill="none" stroke="#D4AF37" strokeWidth="1.2" opacity="0.75" />
                  <circle cx="23" cy="23" r="3" fill="#D4AF37" opacity="0.95" />
                </svg>
              </div>
            </motion.div>

            <motion.p variants={fadeUp} className="text-secondary/90 text-[10px] sm:text-[11px] font-bold tracking-[0.35em] uppercase mb-4 sm:mb-5">
              Sertãozinho &nbsp;·&nbsp; SP
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-display font-bold text-white leading-[1.1] mb-5 sm:mb-6
                         text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Paróquia Nossa<br className="hidden sm:block" />{" "}
              Senhora <span className="text-secondary">Aparecida</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-white/55 text-sm sm:text-base font-light leading-relaxed mb-8 sm:mb-10 max-w-md sm:max-w-lg mx-auto">
              Bem-vindo à Casa do Senhor. Uma comunidade de fé, esperança e caridade, caminhando juntos com Maria.
            </motion.p>

            {/* Divider */}
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-8 sm:mb-10">
              <div className="w-10 sm:w-16 h-px bg-gradient-to-r from-transparent to-secondary/60" />
              <div className="w-1.5 h-1.5 rotate-45 bg-secondary/70" />
              <div className="w-10 sm:w-16 h-px bg-gradient-to-l from-transparent to-secondary/60" />
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/historia"
                className="w-full sm:w-auto px-7 sm:px-9 py-3.5 bg-secondary text-white text-[11px] font-bold tracking-[0.18em] uppercase hover:bg-secondary/90 transition-all hover:shadow-lg hover:shadow-secondary/20 text-center"
              >
                Conheça a Paróquia
              </Link>
              <Link
                href="/missas"
                className="w-full sm:w-auto px-7 sm:px-9 py-3.5 border border-white/25 text-white text-[11px] font-bold tracking-[0.18em] uppercase hover:bg-white/10 hover:border-white/40 transition-all text-center"
              >
                Horários de Missa
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white/[0.04] to-transparent" />
      </section>

      {/* ── Avisos ────────────────────────────────────────────────── */}
      {avisos.length > 0 && (
        <div className="bg-secondary/8 border-y border-secondary/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary shrink-0 bg-secondary/10 px-2.5 py-1">Avisos</span>
            <div className="flex flex-col gap-1">
              {avisos.map((a) => (
                <p key={a.id} className="text-sm text-primary font-light">
                  <span className="font-semibold">{a.titulo}</span>{a.texto ? ` — ${a.texto}` : ""}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Quick Info ────────────────────────────────────────────── */}
      <motion.section
        className="py-16 sm:py-24 bg-background border-b border-gray-100"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-gray-100">
            {[
              { icon: Clock, label: "Horários de Missa", desc: "Celebrações diárias na Matriz e semanais nas capelas da paróquia.", href: "/missas", cta: "Ver horários" },
              { icon: Heart, label: "Dízimo e Doações", desc: "Seja um dizimista fiel e contribua com a obra evangelizadora da nossa paróquia.", href: "/dizimo", cta: "Como participar" },
              { icon: Calendar, label: "Secretaria", desc: "Atendimento de segunda a sexta das 08h às 17h30 e sábados das 08h às 12h.", href: "/secretaria", cta: "Fale conosco" },
            ].map(({ icon: Icon, label, desc, href, cta }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="group flex flex-col p-7 sm:p-10 bg-white hover:bg-primary/[0.02] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary/0 via-secondary/50 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-10 h-10 flex items-center justify-center mb-6 bg-secondary/8">
                  <Icon className="w-4 h-4 text-secondary stroke-[1.5]" />
                </div>
                <h3 className="font-display text-[17px] font-semibold text-primary mb-3">{label}</h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed flex-1 mb-6">{desc}</p>
                <Link href={href} className="flex items-center gap-2 text-[10px] font-bold tracking-[0.18em] uppercase text-primary hover:text-secondary transition-colors group/link">
                  {cta}
                  <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── Sacramentos ───────────────────────────────────────────── */}
      <motion.section
        className="py-16 sm:py-24 bg-muted/50"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 sm:mb-16">
            <div>
              <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-secondary block mb-3">Igreja Católica</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-4">Os Sacramentos</h2>
              <div className="flex items-center gap-3">
                <div className="w-10 h-px bg-secondary" />
                <div className="w-2 h-2 rotate-45 bg-secondary/50" />
              </div>
            </div>
            <p className="text-muted-foreground font-light max-w-sm text-sm leading-relaxed">
              Sinais visíveis da graça de Deus, instituídos por Jesus Cristo para nos santificar.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {SACRAMENTOS.map(({ num, label, href, desc }) => (
              <motion.div key={label} variants={fadeUp}>
                <Link
                  href={href}
                  className="group flex flex-col p-7 sm:p-8 lg:p-10 bg-white hover:bg-primary transition-colors duration-300 h-full"
                >
                  <span className="text-[11px] font-bold tracking-[0.2em] text-secondary/60 group-hover:text-secondary/70 mb-4 transition-colors">
                    {num}
                  </span>
                  <div className="w-5 h-px bg-secondary/30 group-hover:bg-secondary/50 transition-colors mb-5" />
                  <h3 className="font-display text-xl font-semibold text-primary group-hover:text-white transition-colors mb-2">{label}</h3>
                  <p className="text-muted-foreground group-hover:text-white/55 text-sm font-light transition-colors flex-1">{desc}</p>
                  <div className="flex items-center gap-2 mt-7 text-[10px] font-bold tracking-[0.18em] uppercase text-secondary group-hover:text-secondary/75 transition-colors">
                    Saiba mais <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── Agenda ────────────────────────────────────────────────── */}
      <motion.section
        className="py-16 sm:py-24 bg-background border-t border-gray-100"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 sm:mb-14 gap-4">
            <div>
              <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-secondary block mb-3">Próximos Eventos</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-4">Agenda Paroquial</h2>
              <div className="flex items-center gap-3">
                <div className="w-10 h-px bg-secondary" />
                <div className="w-2 h-2 rotate-45 bg-secondary/50" />
              </div>
            </div>
            <Link
              href="/eventos"
              className="flex items-center gap-2 text-[10px] font-bold tracking-[0.18em] uppercase text-primary hover:text-secondary transition-colors group pb-1 border-b border-primary/20 hover:border-secondary shrink-0"
            >
              Ver agenda completa <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Event cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {eventos.map((ev) => (
              <motion.div
                key={ev.id}
                variants={fadeUp}
                className="group bg-white border border-gray-100 hover:border-secondary/30 hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Top colored bar */}
                <div className={`h-1 w-full ${getCategoryColor(ev.categoria)}`} />

                <div className="p-5 flex flex-col flex-1">
                  {/* Date block */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex flex-col items-center justify-center w-12 h-12 bg-primary text-white shrink-0">
                      <span className="font-display font-bold text-xl leading-none">{ev.dia}</span>
                      <span className="text-[8px] font-bold uppercase tracking-widest text-secondary mt-0.5">{ev.mes}</span>
                    </div>
                    <div>
                      <span className={`text-[9px] font-bold uppercase tracking-widest text-white px-2 py-0.5 ${getCategoryColor(ev.categoria)}`}>
                        {ev.categoria}
                      </span>
                      <p className="text-[11px] text-muted-foreground mt-1">{ev.horario}</p>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-semibold text-[15px] text-primary mb-2 leading-snug group-hover:text-secondary transition-colors line-clamp-2 flex-1">
                    {ev.titulo}
                  </h3>

                  {/* Location */}
                  <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-gray-100">
                    <MapPin className="w-3 h-3 text-secondary shrink-0 stroke-[1.5]" />
                    <p className="text-[11px] text-muted-foreground truncate">{ev.local}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {eventos.length === 0 && (
            <motion.div variants={fadeUp} className="text-center py-16 text-muted-foreground text-sm font-light">
              Nenhum evento programado no momento.
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* ── Quote strip ───────────────────────────────────────────── */}
      <motion.section
        className="py-20 sm:py-24 text-center overflow-hidden relative"
        style={{ background: "linear-gradient(155deg, #0b1535 0%, #152358 45%, #1E3A8A 100%)" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.9 } }}
        viewport={{ once: true }}
      >
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(212,175,55,0.07) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 55% 55% at 50% 50%, rgba(212,175,55,0.05) 0%, transparent 70%)" }}
        />

        <div className="relative max-w-2xl mx-auto px-6">
          <div className="flex justify-center mb-7">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="opacity-65">
              <line x1="0" y1="18" x2="36" y2="18" stroke="#D4AF37" strokeWidth="0.7" opacity="0.5" />
              <line x1="18" y1="0" x2="18" y2="36" stroke="#D4AF37" strokeWidth="0.7" opacity="0.5" />
              <rect x="10" y="10" width="16" height="16" transform="rotate(45 18 18)" fill="none" stroke="#D4AF37" strokeWidth="1.1" opacity="0.8" />
              <circle cx="18" cy="18" r="2.5" fill="#D4AF37" opacity="0.9" />
            </svg>
          </div>
          <p className="font-display font-medium text-white/90 text-2xl sm:text-3xl md:text-4xl leading-relaxed">
            "Fazei tudo o que Ele vos disser."
          </p>
          <div className="flex items-center justify-center gap-4 my-5 sm:my-6">
            <div className="w-12 h-px bg-secondary/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-secondary/60" />
            <div className="w-12 h-px bg-secondary/40" />
          </div>
          <p className="text-secondary font-bold tracking-[0.25em] uppercase text-[10px] sm:text-[11px]">
            Jo 2,5 — Nossa Senhora
          </p>
        </div>
      </motion.section>

    </main>
  );
}
