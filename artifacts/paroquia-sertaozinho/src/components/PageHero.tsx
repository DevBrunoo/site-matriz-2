interface PageHeroProps {
  category: string;
  title: string;
  subtitle?: string;
}

export function PageHero({ category, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative pt-20 overflow-hidden">
      {/* Background with subtle dot pattern */}
      <div
        className="relative py-24 md:py-32"
        style={{
          background: "linear-gradient(135deg, #162d6e 0%, #1E3A8A 50%, #1a3580 100%)",
          backgroundImage: `
            linear-gradient(135deg, #162d6e 0%, #1E3A8A 50%, #1a3580 100%),
            radial-gradient(circle, rgba(212,175,55,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "auto, 28px 28px",
        }}
      >
        {/* Subtle vignette overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 50% 50%, transparent 50%, rgba(15,25,60,0.5) 100%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Decorative ornament */}
          <div className="flex justify-start mb-6">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <line x1="0" y1="18" x2="36" y2="18" stroke="#D4AF37" strokeWidth="0.75" opacity="0.5" />
              <line x1="18" y1="0" x2="18" y2="36" stroke="#D4AF37" strokeWidth="0.75" opacity="0.5" />
              <rect
                x="11" y="11" width="14" height="14"
                transform="rotate(45 18 18)"
                fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.7"
              />
              <circle cx="18" cy="18" r="2.5" fill="#D4AF37" />
            </svg>
          </div>

          <span className="text-secondary font-semibold tracking-[0.25em] uppercase text-[11px] mb-4 block opacity-90">
            {category}
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-4">
            {title}
          </h1>

          {subtitle && (
            <p className="text-white/60 font-light text-lg mt-2">{subtitle}</p>
          )}

          <div className="flex items-center gap-3 mt-8">
            <div className="w-14 h-px bg-secondary" />
            <div className="w-2 h-2 rotate-45 border border-secondary/70" />
            <div className="w-6 h-px bg-secondary/40" />
          </div>
        </div>
      </div>

      {/* Smooth bottom transition */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.06))",
        }}
      />
    </section>
  );
}
