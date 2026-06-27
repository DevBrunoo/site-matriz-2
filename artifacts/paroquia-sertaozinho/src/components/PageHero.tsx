interface PageHeroProps {
  category: string;
  title: string;
  subtitle?: string;
}

export function PageHero({ category, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative pt-14 sm:pt-16 overflow-hidden">
      <div
        className="relative py-10 sm:py-12"
        style={{
          background: "linear-gradient(160deg, #0c1736 0%, #152358 50%, #1E3A8A 100%)",
        }}
      >
        {/* Dot grid sutil */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(212,175,55,0.07) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Ambient glow suave */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 50% 120% at 0% 50%, rgba(212,175,55,0.04) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            {/* Ornamento pequeno */}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 opacity-80">
              <rect x="2" y="2" width="10" height="10" transform="rotate(45 7 7)" fill="none" stroke="#D4AF37" strokeWidth="1" />
              <circle cx="7" cy="7" r="1.5" fill="#D4AF37" />
            </svg>
            <span className="text-secondary font-semibold tracking-[0.26em] uppercase text-[10px]">
              {category}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="text-white/50 font-light text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
              {subtitle}
            </p>
          )}

          <div className="flex items-center gap-2.5 mt-5">
            <div className="w-10 h-px bg-secondary/80" />
            <div className="w-1.5 h-1.5 rotate-45 bg-secondary/60" />
            <div className="w-5 h-px bg-secondary/30" />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.03))" }}
      />
    </section>
  );
}
