import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { getContentBlock, ContentBlock } from "@/lib/adminData";

interface ContentPageLayoutProps {
  blockKey: string;
  category: string;
  leftTitle?: string;
  rightTitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function ContentPageLayout({
  blockKey,
  category,
  leftTitle = "Sobre",
  rightTitle = "Informações",
  ctaLabel = "Fale com a Secretaria",
  ctaHref = "/secretaria",
}: ContentPageLayoutProps) {
  const [b, setB] = useState<ContentBlock>(() => getContentBlock(blockKey));
  useEffect(() => { setB(getContentBlock(blockKey)); }, [blockKey]);

  return (
    <main className="w-full">
      <PageHero category={category} title={b.titulo} subtitle={b.subtitulo} />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            {/* Left column */}
            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">{leftTitle}</h2>
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-px bg-secondary" />
                <div className="w-1.5 h-1.5 rotate-45 bg-secondary/60" />
              </div>

              <p className="text-muted-foreground font-light leading-relaxed text-[15px] mb-8">
                {b.descricao}
              </p>

              {b.citacao && (
                <blockquote className="relative pl-5 border-l-2 border-secondary/40 mt-8">
                  <p className="text-primary/70 font-light leading-relaxed italic text-[15px]">
                    {b.citacao}
                  </p>
                </blockquote>
              )}
            </div>

            {/* Right column */}
            <div>
              <h2 className="text-xl font-semibold text-primary mb-3">{rightTitle}</h2>
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-px bg-secondary" />
                <div className="w-1.5 h-1.5 rotate-45 bg-secondary/60" />
              </div>

              <div className="flex flex-col gap-0">
                {b.itens.map((item, i) => (
                  <div
                    key={i}
                    className="group flex items-start gap-5 py-4 border-b border-gray-100 hover:bg-muted/30 transition-colors px-3 -mx-3"
                  >
                    <div className="w-1 self-stretch bg-secondary/20 group-hover:bg-secondary/60 transition-colors shrink-0 rounded-full" />
                    <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <span className="text-sm font-semibold text-primary">{item.label}</span>
                      <span className="text-sm text-muted-foreground font-light sm:text-right">{item.info}</span>
                    </div>
                  </div>
                ))}
                {b.itens.length === 0 && (
                  <p className="text-muted-foreground font-light text-sm py-4">Informações em breve.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-14 bg-primary/5 border-t border-primary/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-secondary" />
              <p className="text-primary font-medium text-sm">
                Precisa de mais informações ou deseja fazer um agendamento?
              </p>
            </div>
            <Link
              href={ctaHref}
              className="flex items-center gap-2 shrink-0 bg-primary text-white px-6 py-2.5 text-xs font-semibold tracking-wider uppercase hover:bg-primary/90 transition-colors group"
            >
              {ctaLabel}
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
