import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { PageHero } from "@/components/PageHero";

import img_missa1 from "@assets/20260111_174919_1783480653247.jpg";
import img_missa2 from "@assets/20260111_175549_1783480653247.jpg";
import img_ss1 from "@assets/20260404_221646_1783480653251.jpg";
import img_ss2 from "@assets/IMG_20260308_101345_514_1783480653254.jpg";
import img_ss3 from "@assets/IMG-20260308-WA0067_1783480653257.jpg";
import img_dc1 from "@assets/20260522_151900_1783480660961.jpg";
import img_padre1 from "@assets/20260531_103930_1783480660963.jpg";
import img_padre2 from "@assets/20260612_154353_1783480660963.jpg";
import img_padre3 from "@assets/20260612_160233_1783480660964.jpg";
import img_sem1 from "@assets/IMG-20260423-WA0078_1783480660965.jpg";
import img_sem2 from "@assets/IMG-20260531-WA0125_1783480660965.jpg";
import img_ss4 from "@assets/IMG_20260402_080608_811_1783480718511.jpg";
import img_ss5 from "@assets/20260404_223853_1783480755257.jpg";

type Category =
  | "todos"
  | "padres"
  | "seminaristas"
  | "diaconos"
  | "semana-santa"
  | "corpus-christi"
  | "crisma"
  | "tlc"
  | "fotos-capelas";

interface GaleriaItem {
  id: number;
  src: string;
  alt: string;
  categoria: Exclude<Category, "todos">;
  descricao?: string;
}

const FOTOS: GaleriaItem[] = [
  {
    id: 1,
    src: img_missa1,
    alt: "Celebração eucarística",
    categoria: "padres",
    descricao: "Celebração Eucarística na Matriz",
  },
  {
    id: 2,
    src: img_missa2,
    alt: "Padre distribuindo comunhão",
    categoria: "padres",
    descricao: "Distribuição da Sagrada Comunhão",
  },
  {
    id: 3,
    src: img_padre1,
    alt: "Padre celebrando missa",
    categoria: "padres",
    descricao: "Celebração Eucarística",
  },
  {
    id: 4,
    src: img_padre2,
    alt: "Padre com microfone",
    categoria: "padres",
    descricao: "Celebração na Matriz",
  },
  {
    id: 5,
    src: img_padre3,
    alt: "Padre na elevação",
    categoria: "padres",
    descricao: "Momento da Elevação",
  },
  {
    id: 6,
    src: img_sem1,
    alt: "Seminarista com padre",
    categoria: "seminaristas",
    descricao: "Seminarista após a celebração pascal",
  },
  {
    id: 7,
    src: img_sem2,
    alt: "Seminarista na celebração",
    categoria: "seminaristas",
    descricao: "Seminarista durante a liturgia",
  },
  {
    id: 8,
    src: img_dc1,
    alt: "Diácono no ambão",
    categoria: "diaconos",
    descricao: "Diácono proclamando a Palavra",
  },
  {
    id: 9,
    src: img_ss2,
    alt: "Missa da Quaresma",
    categoria: "semana-santa",
    descricao: "Celebração Quaresmal — cruz coberta",
  },
  {
    id: 10,
    src: img_ss3,
    alt: "Elevação na Quaresma",
    categoria: "semana-santa",
    descricao: "Elevação durante a Quaresma",
  },
  {
    id: 11,
    src: img_ss4,
    alt: "Procissão noturna",
    categoria: "semana-santa",
    descricao: "Procissão da Semana Santa",
  },
  {
    id: 12,
    src: img_ss1,
    alt: "Vigília Pascal",
    categoria: "semana-santa",
    descricao: "Vigília Pascal — Sábado Santo",
  },
  {
    id: 13,
    src: img_ss5,
    alt: "Coroinhas na Vigília Pascal",
    categoria: "semana-santa",
    descricao: "Coroinhas durante a Vigília Pascal",
  },
];

const CATEGORIAS: { key: Category; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "padres", label: "Padres" },
  { key: "seminaristas", label: "Seminaristas" },
  { key: "diaconos", label: "Diáconos" },
  { key: "semana-santa", label: "Semana Santa" },
  { key: "corpus-christi", label: "Corpus Christi" },
  { key: "crisma", label: "Crisma" },
  { key: "tlc", label: "TLC" },
  { key: "fotos-capelas", label: "Fotos Capelas" },
];

export default function Galeria() {
  const [categoriaAtiva, setCategoriaAtiva] = useState<Category>("todos");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const fotosFiltradas =
    categoriaAtiva === "todos"
      ? FOTOS
      : FOTOS.filter((f) => f.categoria === categoriaAtiva);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevPhoto = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + fotosFiltradas.length) % fotosFiltradas.length);
  }, [lightboxIndex, fotosFiltradas.length]);

  const nextPhoto = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % fotosFiltradas.length);
  }, [lightboxIndex, fotosFiltradas.length]);

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

  const contagem = (cat: Category) =>
    cat === "todos" ? FOTOS.length : FOTOS.filter((f) => f.categoria === cat).length;

  return (
    <main className="w-full">
      <PageHero
        category="Paróquia Nossa Senhora Aparecida"
        title="Galeria de Fotos"
        subtitle="Momentos e celebrações da nossa comunidade"
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filtros */}
          <div className="mb-10 overflow-x-auto pb-2">
            <div className="flex gap-2 min-w-max">
              {CATEGORIAS.map((cat) => {
                const qtd = contagem(cat.key);
                const ativa = categoriaAtiva === cat.key;
                return (
                  <button
                    key={cat.key}
                    onClick={() => {
                      setCategoriaAtiva(cat.key);
                      setLightboxIndex(null);
                    }}
                    className={[
                      "px-4 py-2 text-[12px] font-medium tracking-wide transition-all border",
                      ativa
                        ? "bg-primary text-white border-primary"
                        : "bg-white text-foreground border-gray-200 hover:border-secondary hover:text-secondary",
                      qtd === 0 && !ativa ? "opacity-50 cursor-default" : "",
                    ].join(" ")}
                  >
                    {cat.label}
                    {qtd > 0 && (
                      <span className={["ml-1.5 text-[10px] font-semibold", ativa ? "text-white/70" : "text-muted-foreground"].join(" ")}>
                        ({qtd})
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid de fotos */}
          {fotosFiltradas.length === 0 ? (
            <div className="py-24 flex flex-col items-center justify-center text-center">
              <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <ZoomIn className="w-6 h-6 text-gray-300" />
              </div>
              <p className="text-muted-foreground text-sm font-light">
                Nenhuma foto disponível nesta categoria ainda.
              </p>
              <p className="text-muted-foreground/60 text-xs mt-1">
                Em breve novas fotos serão adicionadas.
              </p>
            </div>
          ) : (
            <motion.div
              layout
              className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 space-y-3"
            >
              <AnimatePresence mode="popLayout">
                {fotosFiltradas.map((foto, idx) => (
                  <motion.div
                    key={foto.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                    className="break-inside-avoid group relative overflow-hidden cursor-pointer bg-gray-100"
                    onClick={() => openLightbox(idx)}
                  >
                    <img
                      src={foto.src}
                      alt={foto.alt}
                      loading="lazy"
                      className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                      <div>
                        <p className="text-white text-[11px] font-medium leading-snug">
                          {foto.descricao}
                        </p>
                        <span className="text-secondary text-[9px] uppercase tracking-widest font-semibold mt-0.5 block">
                          {CATEGORIAS.find((c) => c.key === foto.categoria)?.label}
                        </span>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-1">
                        <ZoomIn className="w-3.5 h-3.5 text-white" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && fotosFiltradas[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Fechar */}
            <button
              className="absolute top-4 right-4 z-10 text-white/70 hover:text-white p-2 transition-colors"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Anterior */}
            {fotosFiltradas.length > 1 && (
              <button
                className="absolute left-3 z-10 text-white/70 hover:text-white p-3 transition-colors"
                onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
            )}

            {/* Próxima */}
            {fotosFiltradas.length > 1 && (
              <button
                className="absolute right-3 z-10 text-white/70 hover:text-white p-3 transition-colors"
                onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            )}

            {/* Imagem */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.18 }}
              className="flex flex-col items-center max-w-5xl max-h-[90vh] px-14"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={fotosFiltradas[lightboxIndex].src}
                alt={fotosFiltradas[lightboxIndex].alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <div className="mt-3 text-center">
                <p className="text-white/80 text-sm font-light">
                  {fotosFiltradas[lightboxIndex].descricao}
                </p>
                <p className="text-secondary text-[10px] uppercase tracking-widest font-semibold mt-1">
                  {CATEGORIAS.find((c) => c.key === fotosFiltradas[lightboxIndex].categoria)?.label}
                </p>
              </div>
            </motion.div>

            {/* Contador */}
            {fotosFiltradas.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-[11px] tracking-widest">
                {lightboxIndex + 1} / {fotosFiltradas.length}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
