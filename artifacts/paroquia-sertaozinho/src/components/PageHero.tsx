interface PageHeroProps {
  category: string;
  title: string;
  subtitle?: string;
  logo?: string;
  images?: { src: string; alt: string }[];
}

export function PageHero({ category, title, subtitle, logo, images }: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden"
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

      {/* Borda inferior dourada */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.2), transparent)" }}
      />

      {/* Glow suave atrás do logo */}
      {logo && (
        <div
          className="absolute right-0 top-0 bottom-0 w-80 pointer-events-none hidden sm:block"
          style={{
            background: "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(212,175,55,0.08) 0%, transparent 70%)",
          }}
        />
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6
                      pt-[calc(3.5rem+23px)] pb-[23px]
                      sm:pt-[calc(4rem+32px)] sm:pb-[32px]">
        {/* Texto */}
        <div className="min-w-0 flex-1">
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

        {/* Logo em destaque na faixa azul */}
        {logo && (
          <div className="hidden sm:flex shrink-0 items-center justify-center">
            <div className="relative flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(212,175,55,0.18) 0%, transparent 70%)",
                  filter: "blur(20px)",
                  transform: "scale(1.6)",
                }}
              />
              <img
                src={logo}
                alt=""
                className="relative h-32 md:h-40 lg:h-44 w-auto max-w-[180px] object-contain drop-shadow-[0_8px_32px_rgba(0,0,0,0.55)]"
                style={{ filter: "drop-shadow(0 0 18px rgba(212,175,55,0.25))" }}
              />
            </div>
          </div>
        )}

        {/* Imagens opcionais lado a lado (fallback legado) */}
        {!logo && images && images.length > 0 && (
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
                <div className="absolute inset-0 rounded-xl ring-1 ring-white/10 pointer-events-none" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
