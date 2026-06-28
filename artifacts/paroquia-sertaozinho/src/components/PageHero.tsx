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
        background: "linear-gradient(135deg, #080f22 0%, #0f1a3e 50%, #162860 100%)",
      }}
    >
      {/* Dot grid sutil */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(212,175,55,0.06) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Faixa dourada esquerda */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #D4AF37 20%, #D4AF37 80%, transparent)",
          opacity: 0.5,
        }}
      />

      {/* Borda inferior dourada */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background: "linear-gradient(to right, transparent 5%, rgba(212,175,55,0.35) 35%, rgba(212,175,55,0.35) 65%, transparent 95%)",
        }}
      />

      {logo ? (
        /* ════════ LAYOUT COM LOGO ════════ */
        <div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-stretch"
          style={{
            paddingTop: "calc(3.5rem + 20px)",
            paddingBottom: "20px",
          }}
        >
          {/* ── Coluna de texto ── */}
          <div className="flex-1 min-w-0 flex flex-col justify-center pr-4 sm:pr-10 py-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-px bg-secondary/55" />
              <span className="text-secondary/80 font-bold tracking-[0.32em] uppercase text-[9px]">
                {category}
              </span>
            </div>

            <h1 className="font-display text-xl sm:text-2xl md:text-[1.85rem] font-semibold text-white leading-tight tracking-tight">
              {title}
            </h1>

            {subtitle && (
              <p className="text-white/38 font-light text-[11px] sm:text-[12px] mt-2 max-w-md leading-relaxed">
                {subtitle}
              </p>
            )}

            <div className="flex items-center gap-2 mt-4">
              <div className="w-7 h-px bg-secondary/60" />
              <div className="w-1 h-1 rotate-45 bg-secondary/40" />
              <div className="w-3 h-px bg-secondary/20" />
            </div>
          </div>

          {/* ── Coluna do logo ── */}
          <div
            className="hidden sm:flex shrink-0 relative items-center justify-center"
            style={{ width: 220 }}
          >
            {/* Gradiente cálido atrás do logo */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 85% 100% at 55% 50%, rgba(212,175,55,0.22) 0%, rgba(212,175,55,0.08) 45%, transparent 70%)",
              }}
            />

            {/* Arco de luz na borda direita */}
            <div
              className="absolute top-0 right-0 bottom-0 w-20 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(212,175,55,0.07))",
              }}
            />

            {/* Anel externo difuso */}
            <div
              className="absolute rounded-full border border-secondary/8 pointer-events-none"
              style={{ width: 208, height: 208 }}
            />
            {/* Anel médio */}
            <div
              className="absolute rounded-full border border-secondary/16 pointer-events-none"
              style={{ width: 170, height: 170 }}
            />
            {/* Anel próximo */}
            <div
              className="absolute rounded-full border border-secondary/28 pointer-events-none"
              style={{ width: 134, height: 134 }}
            />
            {/* Anel interno */}
            <div
              className="absolute rounded-full border border-secondary/20 pointer-events-none"
              style={{ width: 106, height: 106 }}
            />

            {/* Quatro pontos cardinais decorativos */}
            {[0, 90, 180, 270].map((deg) => (
              <div
                key={deg}
                className="absolute w-1 h-1 rounded-full bg-secondary/50 pointer-events-none"
                style={{
                  transform: `rotate(${deg}deg) translateY(-85px)`,
                }}
              />
            ))}

            {/* Halo brilhante atrás da logo */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 120,
                height: 120,
                background:
                  "radial-gradient(circle, rgba(212,175,55,0.38) 0%, rgba(212,175,55,0.10) 55%, transparent 75%)",
                filter: "blur(12px)",
              }}
            />

            {/* Logo: círculo com anel dourado */}
            <div
              className="relative z-10"
              style={{
                width: 100,
                height: 100,
                borderRadius: "50%",
                boxShadow:
                  "0 0 0 2.5px rgba(212,175,55,0.70), 0 0 0 5px rgba(212,175,55,0.18), 0 0 40px rgba(212,175,55,0.28), 0 12px 48px rgba(0,0,0,0.65)",
              }}
            >
              <img
                src={logo}
                alt=""
                className="w-full h-full rounded-full object-cover"
                draggable={false}
                style={{
                  filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.5))",
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        /* ════════ LAYOUT SEM LOGO ════════ */
        <div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6"
          style={{
            paddingTop: "calc(3.5rem + 23px)",
            paddingBottom: "23px",
          }}
        >
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
                  <div className="absolute inset-0 rounded-xl ring-1 ring-white/10 pointer-events-none" />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
