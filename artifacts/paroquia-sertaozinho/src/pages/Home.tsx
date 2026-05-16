import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Clock, Calendar, Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { getEventos, getAvisos, Evento, Aviso } from "@/lib/adminData";

const SACRAMENTOS = [
  { num: "I", label: "Batismo", href: "/batismo", desc: "Porta de entrada para a fé cristã" },
  { num: "II", label: "Eucaristia", href: "/eucaristia", desc: "Presença real de Jesus entre nós" },
  { num: "III", label: "Matrimônio", href: "/matrimonio", desc: "Aliança de amor segundo Deus" },
  { num: "IV", label: "Confissão", href: "/confissao", desc: "Reconciliação com Deus e a Igreja" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function Home() {
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [avisos, setAvisos] = useState<Aviso[]>([]);

  useEffect(() => {
    setEventos(getEventos().slice(0, 3));
    setAvisos(getAvisos().filter((a) => a.ativo).slice(0, 2));
  }, []);

  return (
    <main className="w-full pt-20">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[88vh] flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #0c1736 0%, #132257 40%, #1E3A8A 75%, #163278 100%)",
        }}
      >
        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(212,175,55,0.09) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* Radial ambient glow top-center */}
        <div
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(212,175,55,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 85% 90% at 50% 50%, transparent 35%, rgba(8,14,40,0.65) 100%)",
          }}
        />

        {/* Horizontal light line */}
        <div
          className="absolute top-1/2 left-0 right-0 h-px opacity-10 pointer-events-none"
          style={{ background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }}
        />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-28">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            {/* Ornament */}
            <motion.div variants={fadeUp} className="flex justify-center mb-10">
              <div className="relative">
                <div
                  className="absolute inset-0 -m-6 rounded-full blur-2xl opacity-30"
                  style={{ background: "radial-gradient(circle, #D4AF37, transparent 70%)" }}
                />
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" className="relative">
                  <line x1="0" y1="26" x2="52" y2="26" stroke="#D4AF37" strokeWidth="0.7" opacity="0.4" />
                  <line x1="26" y1="0" x2="26" y2="52" stroke="#D4AF37" strokeWidth="0.7" opacity="0.4" />
                  <rect x="16" y="16" width="20" height="20" transform="rotate(45 26 26)" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.7" />
                  <rect x="20" y="20" width="12" height="12" transform="rotate(45 26 26)" fill="none" stroke="#D4AF37" strokeWidth="0.5" opacity="0.4" />
                  <circle cx="26" cy="26" r="3" fill="#D4AF37" opacity="0.95" />
                </svg>
              </div>
            </motion.div>

            <motion.span
              variants={fadeUp}
              className="text-secondary font-semibold tracking-[0.35em] uppercase text-[10px] mb-5 block"
              style={{ opacity: 0.85 }}
            >
              Sertãozinho &nbsp;·&nbsp; SP
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-display text-6xl md:text-8xl font-semibold text-white mb-6 leading-[1.04]"
            >
              Paróquia Nossa<br />
              Senhora{" "}
              <em className="not-italic text-secondary">Aparecida</em>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-[17px] text-white/60 mb-10 max-w-lg mx-auto font-light leading-relaxed"
            >
              Bem-vindo à Casa do Senhor. Uma comunidade de fé, esperança e caridade, caminhando juntos com Maria.
            </motion.p>

            {/* Gold divider */}
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center gap-4 mb-10"
            >
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-secondary/60" />
              <div className="w-1.5 h-1.5 rotate-45 bg-secondary/70" />
              <div className="w-6 h-px bg-secondary/40" />
              <div className="w-1.5 h-1.5 rotate-45 bg-secondary/40" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-secondary/60" />
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/historia"
                className="px-9 py-3.5 bg-secondary text-white text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-secondary/90 transition-all hover:shadow-lg hover:shadow-secondary/25"
              >
                Conheça a Paróquia
              </Link>
              <Link
                href="/missas"
                className="px-9 py-3.5 border border-white/25 text-white text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-white/10 hover:border-white/40 transition-all"
              >
                Horários de Missa
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/[0.05] to-transparent" />
      </section>

      {/* ── Avisos ────────────────────────────────────────────────── */}
      {avisos.length > 0 && (
        <div className="bg-secondary/8 border-y border-secondary/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary shrink-0">Avisos</span>
            <div className="w-px h-4 bg-secondary/30 hidden sm:block" />
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
        className="py-24 bg-background border-b border-gray-100"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100">
            {[
              { icon: Clock, label: "Horários de Missa", desc: "Celebrações diárias na Matriz e semanais nas capelas da paróquia.", href: "/missas", cta: "Ver horários" },
              { icon: Heart, label: "Dízimo e Doações", desc: "Seja um dizimista fiel e contribua com a obra evangelizadora da nossa paróquia.", href: "/dizimo", cta: "Como participar" },
              { icon: Calendar, label: "Secretaria", desc: "Atendimento de segunda a sexta das 08h às 17h30 e sábados das 08h às 12h.", href: "/secretaria", cta: "Fale conosco" },
            ].map(({ icon: Icon, label, desc, href, cta }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="group flex flex-col p-10 bg-white hover:bg-primary/[0.02] transition-all duration-300 relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="w-10 h-10 flex items-center justify-center mb-7 relative">
                  <div className="absolute inset-0 bg-secondary/8 rotate-45 scale-75" />
                  <Icon className="w-5 h-5 text-secondary stroke-[1.5] relative" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-primary mb-3">{label}</h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed flex-1 mb-7">{desc}</p>
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
        className="py-24 bg-muted/50"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
          >
            <div>
              <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-secondary block mb-3">Igreja Católica</span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary mb-4">Os Sacramentos</h2>
              <div className="flex items-center gap-3">
                <div className="w-12 h-px bg-secondary" />
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
                  className="group flex flex-col p-8 lg:p-10 bg-white hover:bg-primary transition-colors duration-300 h-full"
                >
                  <span className="font-display text-[13px] text-secondary/60 group-hover:text-secondary/70 font-normal tracking-widest mb-4 transition-colors">
                    {num}
                  </span>
                  <div className="w-5 h-px bg-secondary/30 group-hover:bg-secondary/50 transition-colors mb-6" />
                  <h3 className="font-display text-2xl font-semibold text-primary group-hover:text-white transition-colors mb-2">{label}</h3>
                  <p className="text-muted-foreground group-hover:text-white/55 text-sm font-light transition-colors flex-1">{desc}</p>
                  <div className="flex items-center gap-2 mt-8 text-[10px] font-bold tracking-[0.18em] uppercase text-secondary group-hover:text-secondary/75 transition-colors">
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
        className="py-24 bg-background border-t border-gray-100"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6"
          >
            <div>
              <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-secondary block mb-3">Próximos Eventos</span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary mb-4">Agenda Paroquial</h2>
              <div className="flex items-center gap-3">
                <div className="w-12 h-px bg-secondary" />
                <div className="w-2 h-2 rotate-45 bg-secondary/50" />
              </div>
            </div>
            <Link
              href="/eventos"
              className="flex items-center gap-2 text-[10px] font-bold tracking-[0.18em] uppercase text-primary hover:text-secondary transition-colors group pb-1 border-b border-primary/20 hover:border-secondary"
            >
              Ver agenda completa <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="flex flex-col">
            {eventos.map((ev, i) => (
              <motion.div
                key={ev.id}
                variants={fadeUp}
                className="group flex items-center gap-6 md:gap-10 py-7 border-b border-gray-100 last:border-b-0 hover:bg-muted/40 transition-colors px-4 -mx-4"
              >
                <div className="flex flex-col items-center justify-center shrink-0 w-14 text-center border-r border-secondary/20 pr-5">
                  <span className="font-display text-3xl font-bold text-primary leading-none">{ev.dia}</span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-secondary mt-1.5">{ev.mes}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-primary text-[15px] truncate">{ev.titulo}</p>
                  <p className="text-muted-foreground text-sm font-light mt-0.5">{ev.local} · {ev.horario}</p>
                </div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-secondary border border-secondary/25 px-3 py-1.5 shrink-0 hidden sm:block group-hover:border-secondary/50 transition-colors">
                  {ev.categoria}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── Quote strip ───────────────────────────────────────────── */}
      <motion.section
        className="py-24 text-center overflow-hidden relative"
        style={{
          background: "linear-gradient(160deg, #0c1736 0%, #152358 45%, #1E3A8A 100%)",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
        viewport={{ once: true }}
      >
        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(212,175,55,0.07) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Center glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(212,175,55,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-2xl mx-auto px-6">
          <div className="flex justify-center mb-8">
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" className="opacity-70">
              <line x1="0" y1="19" x2="38" y2="19" stroke="#D4AF37" strokeWidth="0.7" opacity="0.45" />
              <line x1="19" y1="0" x2="19" y2="38" stroke="#D4AF37" strokeWidth="0.7" opacity="0.45" />
              <rect x="11" y="11" width="16" height="16" transform="rotate(45 19 19)" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.75" />
              <circle cx="19" cy="19" r="2.5" fill="#D4AF37" opacity="0.9" />
            </svg>
          </div>
          <p className="font-display text-white/90 text-3xl md:text-4xl font-normal leading-relaxed italic">
            "Fazei tudo o que Ele vos disser."
          </p>
          <div className="flex items-center justify-center gap-4 my-6">
            <div className="w-12 h-px bg-secondary/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-secondary/60" />
            <div className="w-12 h-px bg-secondary/40" />
          </div>
          <p className="text-secondary font-semibold tracking-[0.28em] uppercase text-[10px]">
            Jo 2,5 — Nossa Senhora
          </p>
        </div>
      </motion.section>

    </main>
  );
}
