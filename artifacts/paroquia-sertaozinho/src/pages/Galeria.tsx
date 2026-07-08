import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { getGaleriaFotos } from "@/lib/adminData";

import img_missa1 from "@assets/20260111_174919_1783480653247.jpg";
import img_missa2 from "@assets/20260111_175549_1783480653247.jpg";
import img_padre1 from "@assets/20260531_103930_1783480660963.jpg";
import img_padre2 from "@assets/20260612_154353_1783480660963.jpg";
import img_padre3 from "@assets/20260612_160233_1783480660964.jpg";
import img_sem1 from "@assets/IMG-20260423-WA0078_1783480660965.jpg";
import img_sem2 from "@assets/IMG-20260531-WA0125_1783480660965.jpg";
import img_dc1 from "@assets/20260522_151900_1783480660961.jpg";
import img_ss_quaresma2 from "@assets/IMG-20260308-WA0067_1783480653257.jpg";
import img_ss_procissao1 from "@assets/IMG_20260402_080608_811_1783480718511.jpg";
import img_ss_vigilia1 from "@assets/20260404_221646_1783480653251.jpg";
import img_ss_vigilia2 from "@assets/20260404_223853_1783480755257.jpg";
import img_ss_procissao2 from "@assets/20260401_201346_1783481518442.jpg";
import img_ss_ceia from "@assets/20260402_202828_1783481518442.jpg";
import img_ss_sexta from "@assets/20260403_161617_1783481518443.jpg";
import img_ss_banner from "@assets/20260404_200716_1783481518443.jpg";
import img_ss_velas from "@assets/20260404_202753_1783481518443.jpg";
import img_ss_elevacao from "@assets/20260404_223849_1783481518443.jpg";
import img_ss_ressurreicao from "@assets/20260405_053841_1783481518444.jpg";
import img_ss_grupo from "@assets/20260401_220953(0)_1783481525733.jpg";
import img_tlc1 from "@assets/20250817_203552_1783481983366.jpg";

const POR_PAGINA = 12;

interface GaleriaItem {
  id: number;
  src: string;
  alt: string;
}

const FOTOS: GaleriaItem[] = [
  { id: 1,  src: img_missa1,           alt: "Celebração eucarística" },
  { id: 2,  src: img_missa2,           alt: "Padre distribuindo comunhão" },
  { id: 3,  src: img_padre1,           alt: "Padre celebrando missa" },
  { id: 4,  src: img_padre2,           alt: "Padre com microfone" },
  { id: 5,  src: img_padre3,           alt: "Padre na elevação" },
  { id: 6,  src: img_sem1,             alt: "Seminarista com padre" },
  { id: 7,  src: img_sem2,             alt: "Seminarista na celebração" },
  { id: 8,  src: img_dc1,              alt: "Diácono no ambão" },
  { id: 10, src: img_ss_quaresma2,    alt: "Elevação na Quaresma" },
  { id: 11, src: img_ss_procissao1,   alt: "Procissão noturna" },
  { id: 12, src: img_ss_vigilia1,     alt: "Vigília Pascal" },
  { id: 13, src: img_ss_vigilia2,     alt: "Coroinhas na Vigília Pascal" },
  { id: 14, src: img_ss_procissao2,   alt: "Procissão com imagem" },
  { id: 15, src: img_ss_ceia,         alt: "Encenação da Última Ceia" },
  { id: 16, src: img_ss_sexta,        alt: "Sexta-feira Santa" },
  { id: 17, src: img_ss_banner,       alt: "Fachada da Igreja Semana Santa" },
  { id: 18, src: img_ss_velas,        alt: "Vigília Pascal com velas" },
  { id: 19, src: img_ss_elevacao,     alt: "Padre elevando a hóstia" },
  { id: 20, src: img_ss_ressurreicao, alt: "Imagem da Ressurreição" },
  { id: 21, src: img_ss_grupo,        alt: "Grupo Semana Santa" },
  { id: 22, src: img_tlc1,            alt: "TLC — Treinamento de Liderança Cristã" },
  { id: 23, src: "/galeria/cc1.png",  alt: "Corpus Christi — exposição" },
  { id: 24, src: "/galeria/cc4.png",  alt: "Corpus Christi — padre no púlpito" },
  { id: 25, src: "/galeria/cc6.png",  alt: "Corpus Christi — padres ajoelhados" },
  { id: 26, src: "/galeria/cc8.png",  alt: "Procissão de Corpus Christi" },
  { id: 27, src: "/galeria/cc10.png", alt: "Ostensório na procissão" },
  { id: 28, src: "/galeria/cc12.png", alt: "Santíssimo com flores" },
  { id: 29, src: "/galeria/cc14.png", alt: "Comunhão em evento" },
  { id: 30, src: "/galeria/cc16.png", alt: "Padre pregando em arena" },
  { id: 31, src: "/galeria/cc18.png", alt: "Celebração em arena" },
  { id: 32, src: "/galeria/cc19.png", alt: "Crucifixo e Nossa Senhora Aparecida" },
  { id: 33, src: "/galeria/cc20.png", alt: "Celebração em arena — padres no altar" },
  { id: 34, src: "/galeria/cc21.png", alt: "Padres reunidos na celebração" },
];

export default function Galeria() {
  const [pagina, setPagina] = useState(1);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [todasFotos, setTodasFotos] = useState(FOTOS);

  useEffect(() => {
    const extras = getGaleriaFotos();
    if (extras.length > 0) {
      const next = extras.map((f, i) => ({ id: 1000 + i, src: f.imageDataUrl, alt: f.alt }));
      setTodasFotos([...FOTOS, ...next]);
    }
  }, []);

  const totalPaginas = Math.ceil(todasFotos.length / POR_PAGINA);
  const inicio = (pagina - 1) * POR_PAGINA;
  const fotosPagina = todasFotos.slice(inicio, inicio + POR_PAGINA);

  const closeLightbox = () => setLightboxIndex(null);

  const prevPhoto = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + fotosPagina.length) % fotosPagina.length);
  }, [lightboxIndex, fotosPagina.length]);

  const nextPhoto = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % fotosPagina.length);
  }, [lightboxIndex, fotosPagina.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevPhoto();
      if (e.key === "ArrowRight") nextPhoto();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, prevPhoto, nextPhoto]);

  const irParaPagina = (p: number) => {
    setPagina(p);
    setLightboxIndex(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="w-full">
      <PageHero
        category="Paróquia Nossa Senhora Aparecida"
        title="Galeria de Fotos"
        subtitle="Momentos e celebrações da nossa comunidade"
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 space-y-3">
            {fotosPagina.map((foto, idx) => (
              <div
                key={foto.id}
                className="break-inside-avoid group relative overflow-hidden cursor-pointer bg-gray-100"
                onClick={() => setLightboxIndex(idx)}
              >
                <img
                  src={foto.src}
                  alt={foto.alt}
                  loading={idx < 4 ? "eager" : "lazy"}
                  decoding="async"
                  width={600}
                  className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          {/* Paginação */}
          {totalPaginas > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              <button
                disabled={pagina === 1}
                onClick={() => irParaPagina(pagina - 1)}
                className="p-2 text-gray-400 hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => irParaPagina(p)}
                  className={[
                    "w-9 h-9 text-sm font-medium border transition-all",
                    p === pagina
                      ? "bg-primary text-white border-primary"
                      : "bg-white text-foreground border-gray-200 hover:border-primary hover:text-primary",
                  ].join(" ")}
                >
                  {p}
                </button>
              ))}

              <button
                disabled={pagina === totalPaginas}
                onClick={() => irParaPagina(pagina + 1)}
                className="p-2 text-gray-400 hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 z-10 text-white/70 hover:text-white p-2 transition-colors"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </button>

            <button
              className="absolute left-3 z-10 text-white/70 hover:text-white p-3 transition-colors"
              onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            <button
              className="absolute right-3 z-10 text-white/70 hover:text-white p-3 transition-colors"
              onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            <motion.img
              key={lightboxIndex}
              src={fotosPagina[lightboxIndex].src}
              alt={fotosPagina[lightboxIndex].alt}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.12 }}
              className="max-w-[90vw] max-h-[90vh] object-contain px-14"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-[11px] tracking-widest">
              {lightboxIndex + 1} / {fotosPagina.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
