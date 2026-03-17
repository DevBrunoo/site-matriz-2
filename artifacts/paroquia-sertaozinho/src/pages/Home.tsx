import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Clock, Calendar, Heart, ArrowRight, Cross } from "lucide-react";
import { getEventos, getAvisos, Evento, Aviso } from "@/lib/adminData";

const SACRAMENTOS = [
  { label: "Batismo", href: "/batismo", desc: "Porta de entrada para a fé cristã" },
  { label: "Eucaristia", href: "/eucaristia", desc: "Presença real de Jesus entre nós" },
  { label: "Matrimônio", href: "/matrimonio", desc: "Aliança de amor segundo Deus" },
  { label: "Confissão", href: "/confissao", desc: "Reconciliação com Deus e a Igreja" },
];

export default function Home() {
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [avisos, setAvisos] = useState<Aviso[]>([]);

  useEffect(() => {
    setEventos(getEventos().slice(0, 3));
    setAvisos(getAvisos().filter((a) => a.ativo).slice(0, 2));
  }, []);

  return (
    <main className="w-full pt-20">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-[82vh] flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(145deg, #111e4a 0%, #1E3A8A 55%, #1a3275 100%)",
        }}
      >
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(212,175,55,0.10) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 90% at 50% 50%, transparent 40%, rgba(10,18,50,0.6) 100%)",
          }}
        />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/[0.04] to-transparent" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-24">
          {/* Ornament */}
          <div className="flex justify-center mb-8">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
              <line x1="0" y1="22" x2="44" y2="22" stroke="#D4AF37" strokeWidth="0.8" opacity="0.45" />
              <line x1="22" y1="0" x2="22" y2="44" stroke="#D4AF37" strokeWidth="0.8" opacity="0.45" />
              <rect x="13.5" y="13.5" width="17" height="17" transform="rotate(45 22 22)" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.65" />
              <circle cx="22" cy="22" r="3" fill="#D4AF37" opacity="0.9" />
            </svg>
          </div>

          <span className="text-secondary font-semibold tracking-[0.3em] uppercase text-[11px] mb-5 block opacity-90">
            Sertãozinho · SP
          </span>

          <h1 className="text-5xl md:text-7xl font-semibold text-white mb-6 leading-[1.08] tracking-tight">
            Paróquia Nossa<br />
            Senhora{" "}
            <span className="text-secondary">Aparecida</span>
          </h1>

          <p className="text-lg text-white/65 mb-10 max-w-xl mx-auto font-light leading-relaxed">
            Bem-vindo à Casa do Senhor. Uma comunidade de fé, esperança e caridade, caminhando juntos com Maria.
          </p>

          {/* Gold rule */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-12 h-px bg-secondary/50" />
            <div className="w-1.5 h-1.5 rotate-45 bg-secondary/60" />
            <div className="w-6 h-px bg-secondary/30" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/historia"
              className="px-8 py-3 bg-secondary text-white text-xs font-bold tracking-[0.18em] uppercase hover:bg-secondary/90 transition-colors"
            >
              Conheça a Paróquia
            </Link>
            <Link
              href="/missas"
              className="px-8 py-3 border border-white/30 text-white text-xs font-bold tracking-[0.18em] uppercase hover:bg-white/10 transition-colors"
            >
              Horários de Missa
            </Link>
          </div>
        </div>
      </section>

      {/* ── Avisos ───────────────────────────────────────────── */}
      {avisos.length > 0 && (
        <div className="bg-secondary/10 border-b border-secondary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary shrink-0">Avisos</span>
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

      {/* ── Quick Info ────────────────────────────────────────── */}
      <section className="py-24 bg-background border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[
              { icon: Clock, label: "Horários de Missa", desc: "Celebrações diárias na Matriz e semanais nas capelas da paróquia.", href: "/missas", cta: "Ver horários" },
              { icon: Heart, label: "Dízimo e Doações", desc: "Seja um dizimista fiel e contribua com a obra evangelizadora da nossa paróquia.", href: "/dizimo", cta: "Como participar" },
              { icon: Calendar, label: "Secretaria", desc: "Atendimento de segunda a sexta das 08h às 17h30 e sábados das 08h às 12h.", href: "/secretaria", cta: "Fale conosco" },
            ].map(({ icon: Icon, label, desc, href, cta }) => (
              <div key={label} className="group flex flex-col p-8 lg:p-10 border-l-2 border-secondary/20 hover:border-secondary transition-colors bg-white hover:shadow-sm">
                <div className="w-9 h-9 flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-secondary stroke-[1.5]" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">{label}</h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed flex-1 mb-6">{desc}</p>
                <Link href={href} className="flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase text-primary hover:text-secondary transition-colors mt-auto group/link">
                  {cta}
                  <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sacramentos ───────────────────────────────────────── */}
      <section className="py-24 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-secondary block mb-3">Igreja Católica</span>
              <h2 className="text-3xl font-semibold text-primary mb-4">Os Sacramentos</h2>
              <div className="flex items-center gap-2">
                <div className="w-10 h-px bg-secondary" />
                <div className="w-1.5 h-1.5 rotate-45 bg-secondary/60" />
              </div>
            </div>
            <p className="text-muted-foreground font-light max-w-sm text-sm leading-relaxed">
              Sinais visíveis da graça de Deus, instituídos por Jesus Cristo para nos santificar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100">
            {SACRAMENTOS.map(({ label, href, desc }) => (
              <Link
                key={label}
                href={href}
                className="group flex flex-col p-8 bg-white hover:bg-primary transition-colors duration-300"
              >
                <div className="w-6 h-px bg-secondary/40 group-hover:bg-secondary/60 transition-colors mb-6" />
                <h3 className="text-lg font-semibold text-primary group-hover:text-white transition-colors mb-2">{label}</h3>
                <p className="text-muted-foreground group-hover:text-white/60 text-sm font-light transition-colors flex-1">{desc}</p>
                <div className="flex items-center gap-2 mt-6 text-[11px] font-bold tracking-wider uppercase text-secondary group-hover:text-secondary/80 transition-colors">
                  Saiba mais <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Agenda ────────────────────────────────────────────── */}
      <section className="py-24 bg-background border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
            <div>
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-secondary block mb-3">Próximos Eventos</span>
              <h2 className="text-3xl font-semibold text-primary mb-4">Agenda Paroquial</h2>
              <div className="flex items-center gap-2">
                <div className="w-10 h-px bg-secondary" />
                <div className="w-1.5 h-1.5 rotate-45 bg-secondary/60" />
              </div>
            </div>
            <Link
              href="/eventos"
              className="flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase text-primary hover:text-secondary transition-colors group pb-1 border-b border-primary/30 hover:border-secondary"
            >
              Ver agenda completa <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex flex-col gap-0">
            {eventos.map((ev, i) => (
              <div
                key={ev.id}
                className="group flex items-center gap-6 md:gap-10 py-6 border-b border-gray-100 hover:bg-muted/30 transition-colors px-4 -mx-4"
              >
                <div className="flex flex-col items-center justify-center shrink-0 w-14 text-center">
                  <span className="text-2xl font-bold text-primary leading-none">{ev.dia}</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary mt-1">{ev.mes}</span>
                </div>
                <div className="w-px h-10 bg-gray-100 shrink-0 hidden md:block" />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-primary text-base truncate">{ev.titulo}</p>
                  <p className="text-muted-foreground text-sm font-light mt-0.5">{ev.local} · {ev.horario}</p>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-secondary bg-secondary/8 px-2.5 py-1 shrink-0 hidden sm:block">
                  {ev.categoria}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote strip ───────────────────────────────────────── */}
      <section
        className="py-20 text-center overflow-hidden relative"
        style={{
          background: "linear-gradient(135deg, #162d6e 0%, #1E3A8A 100%)",
          backgroundImage: "radial-gradient(circle, rgba(212,175,55,0.08) 1px, transparent 1px), linear-gradient(135deg, #162d6e 0%, #1E3A8A 100%)",
          backgroundSize: "28px 28px, auto",
        }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="mx-auto mb-6 opacity-60">
            <line x1="0" y1="16" x2="32" y2="16" stroke="#D4AF37" strokeWidth="0.75" opacity="0.5" />
            <line x1="16" y1="0" x2="16" y2="32" stroke="#D4AF37" strokeWidth="0.75" opacity="0.5" />
            <rect x="9" y="9" width="14" height="14" transform="rotate(45 16 16)" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.7" />
            <circle cx="16" cy="16" r="2" fill="#D4AF37" />
          </svg>
          <p className="text-white/80 text-xl md:text-2xl font-light leading-relaxed italic">
            "Fazei tudo o que Ele vos disser."
          </p>
          <p className="text-secondary font-semibold tracking-widest uppercase text-xs mt-4">
            Jo 2,5 — Nossa Senhora
          </p>
        </div>
      </section>

    </main>
  );
}
