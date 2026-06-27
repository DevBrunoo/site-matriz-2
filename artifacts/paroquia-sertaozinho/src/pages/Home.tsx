import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Clock, Calendar, Heart, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { getAvisos, Aviso } from "@/lib/adminData";

import photo1 from "@assets/5d75f078-bebd-4e71-a048-a0b2d64ac628_1782522399374.JPG";
import photo2 from "@assets/465f859d-64d1-4fff-969e-13aad3a9398b_1782522399375.JPG";
import photo3 from "@assets/0618ff30-91fb-4d08-8228-18216b8837de_1782522399377.JPG";
import photo4 from "@assets/05642895-2056-44c5-97ea-b2553f40b228_1782522399377.JPG";
import photo5 from "@assets/de8dc0f6-7d60-40ae-b748-ee301a6d85ea_1782522399378.JPG";
import photo6 from "@assets/f9d845bb-b479-47f3-9d0e-47e64fc5747e_1782522399378.JPG";

const SLIDES = [photo1, photo2, photo3, photo4, photo5, photo6];
const INTERVAL = 5500;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  const [avisos, setAvisos] = useState<Aviso[]>([]);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setAvisos(getAvisos().filter((a) => a.ativo).slice(0, 2));
  }, []);

  const advance = (dir: 1 | -1 = 1) => {
    setCurrent((c) => (c + dir + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => advance(1), INTERVAL);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [paused, current]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) advance(diff > 0 ? 1 : -1);
  };

  return (
    <main className="w-full pt-12 sm:pt-14">

      {/* ── Hero Carousel ─────────────────────────────────────────── */}
      <section
        className="relative min-h-[88vh] sm:min-h-[92vh] flex items-center justify-center overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* ── Slides (photos with Ken Burns) ── */}
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            className="absolute inset-0 will-change-transform"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          >
            <motion.img
              src={SLIDES[current]}
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center"
              initial={{ scale: 1 }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 7, ease: "linear" }}
            />
          </motion.div>
        </AnimatePresence>

        {/* ── Overlays ── */}
        {/* Strong bottom-to-top dark gradient for text readability */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(6,11,32,0.88) 0%, rgba(6,11,32,0.55) 45%, rgba(6,11,32,0.25) 100%)" }} />
        {/* Subtle side vignette */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(4,8,22,0.5) 100%)" }} />

        {/* ── Text content ── */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-20 sm:py-28">
          <motion.div initial="hidden" animate="show" variants={stagger}>

            <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-px bg-secondary/60" />
              <span className="text-[9px] font-bold tracking-[0.35em] uppercase text-secondary/90">
                Sertãozinho · SP
              </span>
              <div className="w-10 h-px bg-secondary/60" />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display font-bold text-white leading-[1.08] mb-5 sm:mb-6
                         text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Paróquia Nossa<br className="hidden sm:block" />{" "}
              Senhora <span className="text-secondary">Aparecida</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-white/65 text-base sm:text-lg font-light leading-relaxed mb-8 sm:mb-10 max-w-md sm:max-w-lg mx-auto"
            >
              Bem-vindo à Casa do Senhor. Uma comunidade de fé, esperança e caridade, caminhando juntos com Maria.
            </motion.p>

            <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-8 sm:mb-10">
              <div className="w-10 sm:w-16 h-px bg-gradient-to-r from-transparent to-secondary/60" />
              <div className="w-1.5 h-1.5 rotate-45 bg-secondary/70" />
              <div className="w-10 sm:w-16 h-px bg-gradient-to-l from-transparent to-secondary/60" />
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/historia"
                className="w-full sm:w-auto px-7 sm:px-9 py-3.5 bg-secondary text-white text-[11px] font-bold tracking-[0.18em] uppercase hover:bg-secondary/90 transition-all hover:shadow-lg hover:shadow-secondary/25 text-center"
              >
                Conheça a Paróquia
              </Link>
              <Link
                href="/missas"
                className="w-full sm:w-auto px-7 sm:px-9 py-3.5 border border-white/30 text-white text-[11px] font-bold tracking-[0.18em] uppercase hover:bg-white/10 hover:border-white/50 transition-all text-center backdrop-blur-sm"
              >
                Horários de Missa
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Prev / Next arrows (desktop) ── */}
        <button
          onClick={() => advance(-1)}
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20
                     w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center
                     border border-white/20 text-white/70 hover:text-white hover:border-white/50
                     hover:bg-white/10 transition-all backdrop-blur-sm rounded-full
                     opacity-0 group-hover:opacity-100"
          aria-label="Anterior"
          style={{ opacity: 0.6 }}
          onMouseEnter={() => setPaused(true)}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => advance(1)}
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20
                     w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center
                     border border-white/20 text-white/70 hover:text-white hover:border-white/50
                     hover:bg-white/10 transition-all backdrop-blur-sm rounded-full"
          aria-label="Próxima"
          style={{ opacity: 0.6 }}
          onMouseEnter={() => setPaused(true)}
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* ── Dots navigation ── */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); setPaused(true); setTimeout(() => setPaused(false), 8000); }}
              className={`transition-all duration-400 rounded-full ${
                i === current
                  ? "w-6 h-1.5 bg-secondary"
                  : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Slide counter */}
        <div className="absolute bottom-7 right-5 sm:right-8 z-20 text-[10px] font-bold tracking-widest text-white/35">
          {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
        </div>
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
        className="py-8 sm:py-14 bg-background border-b border-gray-100"
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
              { icon: Calendar, label: "Secretaria", desc: "Atendimento de terça a sexta das 08h às 17h30 e sábados das 08h às 12h.", href: "/secretaria", cta: "Fale conosco" },
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
            "O Senhor é o meu pastor, nada me faltará."
          </p>
          <div className="flex items-center justify-center gap-4 my-5 sm:my-6">
            <div className="w-12 h-px bg-secondary/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-secondary/60" />
            <div className="w-12 h-px bg-secondary/40" />
          </div>
          <p className="text-secondary font-bold tracking-[0.25em] uppercase text-[10px] sm:text-[11px]">
            Salmos 23:1
          </p>
        </div>
      </motion.section>

    </main>
  );
}
