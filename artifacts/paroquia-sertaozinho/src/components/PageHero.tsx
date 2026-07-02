interface PageHeroProps {
  category: string;
  title: string;
  subtitle?: string;
  logo?: string;
  logoSize?: number;
  sideImage?: string;
  sideImagePosition?: string;
  sideImageWidth?: string;
  sideWhiteOverlay?: boolean;
  images?: { src: string; alt: string }[];
}

export function PageHero({ category, title, subtitle, logo, logoSize = 120, sideImage, sideImagePosition = "center", sideImageWidth = "48%", sideWhiteOverlay = false, images }: PageHeroProps) {
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

      {/* ── Side image (blends naturally into blue) ── */}
      {sideImage && (
        <div className="absolute top-0 right-0 bottom-0 hidden sm:block pointer-events-none" style={{ width: sideImageWidth }}>
          <img
            src={sideImage}
            alt=""
            className="h-full w-full object-contain"
            style={{ objectPosition: sideImagePosition }}
            draggable={false}
          />
          {/* Fade left so image melts into blue */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, #0f1a3e 0%, rgba(15,26,62,0.6) 30%, transparent 65%)",
            }}
          />
          {/* White overlay cobrindo lado direito + base — só quando ativado */}
          {sideWhiteOverlay && (
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(ellipse 120% 90% at 110% 110%, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.55) 40%, transparent 70%)",
              }}
            />
          )}
        </div>
      )}

      {/* ── Content ── */}
      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6"
        style={{
          paddingTop: "calc(3.5rem + 22px)",
          paddingBottom: "22px",
        }}
      >
        {/* Text block */}
        <div className="min-w-0 flex-1 flex flex-col justify-center py-2">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-px bg-secondary/55" />
            <span className="text-secondary/80 font-bold tracking-[0.32em] uppercase text-[9px]">
              {category}
            </span>
          </div>

          <h1 className="font-display text-xl sm:text-2xl md:text-[1.85rem] font-semibold text-white leading-tight tracking-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="text-white/40 font-light text-[11px] sm:text-[12px] mt-2 max-w-sm leading-relaxed">
              {subtitle}
            </p>
          )}

          <div className="flex items-center gap-2 mt-4">
            <div className="w-7 h-px bg-secondary/55" />
            <div className="w-1 h-1 rotate-45 bg-secondary/35" />
            <div className="w-3 h-px bg-secondary/18" />
          </div>
        </div>

        {/* Logo — circular clip, clips white bg corners, shows emblem fully */}
        {logo && !sideImage && (
          <div
            className="hidden sm:flex shrink-0 items-center justify-center"
            style={{
              width: logoSize,
              height: logoSize,
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: "0 0 0 1.5px rgba(212,175,55,0.30), 0 8px 40px rgba(0,0,0,0.55)",
              background: "rgba(255,255,255,0.97)",
            }}
          >
            <img
              src={logo}
              alt=""
              className="object-contain"
              draggable={false}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        )}

        {/* Images grid (legacy) */}
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
    </section>
  );
}
