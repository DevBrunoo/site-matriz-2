interface PageHeroProps {
  category: string;
  title: string;
  subtitle?: string;
  images?: { src: string; alt: string }[];
}

export function PageHero({ category, title, subtitle, images }: PageHeroProps) {
  return (
    <section className="relative pt-14 sm:pt-16 overflow-hidden">
      <div
        className="relative py-5 sm:py-6"
        style={{
          background: "linear-gradient(135deg, #0b1530 0%, #13204d 55%, #1a3070 100%)",
        }}
      >
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(212,175,55,0.055) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        {/* Linha dourada vertical à esquerda */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[3px] pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent, #D4AF37 20%, #D4AF37 80%, transparent)",
            opacity: 0.45,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          {/* Texto */}
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-3 h-px bg-secondary/60" />
              <span className="text-secondary/85 font-bold tracking-[0.3em] uppercase text-[9px]">
                {category}
              </span>
            </div>

            <h1 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-tight tracking-tight">
              {title}
            </h1>

            {subtitle && (
              <p className="text-white/35 font-light text-[11px] sm:text-xs mt-1 max-w-md leading-relaxed">
                {subtitle}
              </p>
            )}

            <div className="flex items-center gap-2 mt-3">
              <div className="w-6 h-px bg-secondary/65" />
              <div className="w-1 h-1 rotate-45 bg-secondary/45" />
              <div className="w-3 h-px bg-secondary/22" />
            </div>
          </div>

          {/* Imagens opcionais lado a lado */}
          {images && images.length > 0 && (
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              {images.map((img) => (
                <div
                  key={img.alt}
                  className="relative overflow-hidden rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                  style={{ width: 90, height: 90 }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Borda sutil */}
                  <div className="absolute inset-0 rounded-xl ring-1 ring-white/10 pointer-events-none" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Borda inferior dourada sutil */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.18), transparent)" }}
      />
    </section>
  );
}
