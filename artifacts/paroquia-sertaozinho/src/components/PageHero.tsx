interface PageHeroProps {
  category: string;
  title: string;
  subtitle?: string;
}

export function PageHero({ category, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative pt-12 sm:pt-14 overflow-hidden">
      <div
        className="relative py-28 md:py-36"
        style={{
          background: "linear-gradient(160deg, #0c1736 0%, #152358 45%, #1E3A8A 100%)",
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

        {/* Ambient glow */}
        <div
          className="absolute top-0 left-0 right-0 h-full pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 65% 70% at 20% 50%, rgba(212,175,55,0.05) 0%, transparent 70%)",
          }}
        />

        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 85% at 50% 50%, transparent 45%, rgba(8,14,40,0.6) 100%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Ornament */}
          <div className="flex justify-start mb-7">
            <div className="relative">
              <div
                className="absolute inset-0 -m-4 rounded-full blur-xl opacity-25"
                style={{ background: "radial-gradient(circle, #D4AF37, transparent 70%)" }}
              />
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="relative">
                <line x1="0" y1="20" x2="40" y2="20" stroke="#D4AF37" strokeWidth="0.7" opacity="0.4" />
                <line x1="20" y1="0" x2="20" y2="40" stroke="#D4AF37" strokeWidth="0.7" opacity="0.4" />
                <rect x="12" y="12" width="16" height="16" transform="rotate(45 20 20)" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.7" />
                <rect x="15.5" y="15.5" width="9" height="9" transform="rotate(45 20 20)" fill="none" stroke="#D4AF37" strokeWidth="0.5" opacity="0.35" />
                <circle cx="20" cy="20" r="2.5" fill="#D4AF37" opacity="0.9" />
              </svg>
            </div>
          </div>

          <span className="text-secondary font-semibold tracking-[0.28em] uppercase text-[10px] mb-4 block" style={{ opacity: 0.9 }}>
            {category}
          </span>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.06] mb-4">
            {title}
          </h1>

          {subtitle && (
            <p className="text-white/55 font-light text-lg mt-3 max-w-xl">{subtitle}</p>
          )}

          <div className="flex items-center gap-3 mt-8">
            <div className="w-14 h-px bg-secondary" />
            <div className="w-2 h-2 rotate-45 border border-secondary/70" />
            <div className="w-6 h-px bg-secondary/35" />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.04))" }}
      />
    </section>
  );
}
