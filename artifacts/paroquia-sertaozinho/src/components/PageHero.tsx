interface PageHeroProps {
  category: string;
  title: string;
  subtitle?: string;
}

export function PageHero({ category, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative pt-14 sm:pt-16 overflow-hidden">
      <div
        className="relative py-7 sm:py-8"
        style={{
          background: "linear-gradient(135deg, #0b1530 0%, #13204d 50%, #1a3070 100%)",
        }}
      >
        {/* Dot grid sutil */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(212,175,55,0.06) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Linha dourada vertical decorativa à esquerda */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent, #D4AF37 30%, #D4AF37 70%, transparent)",
            opacity: 0.5,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categoria */}
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-px bg-secondary/70" />
            <span className="text-secondary/90 font-bold tracking-[0.3em] uppercase text-[9px]">
              {category}
            </span>
          </div>

          {/* Título */}
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight tracking-tight">
            {title}
          </h1>

          {/* Subtítulo opcional — discreto */}
          {subtitle && (
            <p className="text-white/40 font-light text-xs sm:text-sm mt-1.5 max-w-lg leading-relaxed">
              {subtitle}
            </p>
          )}

          {/* Linha decorativa */}
          <div className="flex items-center gap-2 mt-4">
            <div className="w-8 h-px bg-secondary/70" />
            <div className="w-1 h-1 rotate-45 bg-secondary/50" />
            <div className="w-4 h-px bg-secondary/25" />
          </div>
        </div>
      </div>

      {/* Borda inferior sutil */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.2), transparent)" }}
      />
    </section>
  );
}
