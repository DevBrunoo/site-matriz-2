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
import img_svp1 from "@assets/20260111_174919_(1)_1783538694746.jpg";
import img_svp2 from "@assets/IMG_20251130_210403_645_1783538694747.jpg";
import img_svp3 from "@assets/IMG_20260402_080608_882_1783538694748.jpg";
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
import img_padroeira1 from "@assets/nossa-senhora-aparecida-1.jpg";
import img_novenaDia1_1 from "@assets/20261003_190335_1791342966057.jpg";
import img_novenaDia1_2 from "@assets/20261003_190834_1791342966059.jpg";
import img_novenaDia1_3 from "@assets/20261003_191150_1791343073926.jpg";
import img_novenaDia2_1 from "@assets/20261004_190847_1791343168703.jpg";
import img_novenaDia2_2 from "@assets/20261004_202032_1791343176772.jpg";
import img_novenaDia2_3 from "@assets/20261004_203757_1791343183309.jpg";
import img_novenaDia3_1 from "@assets/20261005_201230_1791343283085.jpg";
import img_novenaDia3_2 from "@assets/20261005_201356_1791343290895.jpg";
import img_novenaDia3_3 from "@assets/20261005_202622_1791343314854.jpg";
import img_novenaDia4_1 from "@assets/20261006_190537_1791343666642.jpg";
import img_novenaDia4_2 from "@assets/20261006_200940_1791343672691.jpg";
import img_novenaDia4_3 from "@assets/20261006_201915_1791343676815.jpg";
import img_novenaDia4_4 from "@assets/20261006_202708_1791343681161.jpg";

const POR_PAGINA = 12;

type Categoria =
  | "todas"
  | "matriz"
  | "capelas"
  | "semana-santa"
  | "festa-padroeira"
  | "celebracoes"
  | "novena-dia-1"
  | "novena-dia-2"
  | "novena-dia-3"
  | "novena-dia-4";

interface GaleriaItem {
  id: number;
  src: string;
  alt: string;
  cat: Categoria;
}

const FOTOS: GaleriaItem[] = [
  { id: 1,  src: img_missa1,           alt: "Celebração eucarística",               cat: "capelas" },
  { id: 2,  src: img_missa2,           alt: "Padre distribuindo comunhão",           cat: "capelas" },
  { id: 3,  src: img_padre1,           alt: "Padre celebrando missa",                cat: "matriz" },
  { id: 4,  src: img_padre2,           alt: "Padre com microfone",                   cat: "matriz" },
  { id: 5,  src: img_padre3,           alt: "Padre na elevação",                     cat: "matriz" },
  { id: 6,  src: img_sem1,             alt: "Seminarista com padre",                 cat: "matriz" },
  { id: 7,  src: img_sem2,             alt: "Seminarista na celebração",             cat: "matriz" },
  { id: 8,  src: img_dc1,              alt: "Diácono no ambão",                      cat: "matriz" },
  { id: 9,  src: img_ss_quaresma2,    alt: "Elevação na Quaresma",                  cat: "capelas" },
  { id: 10, src: img_ss_procissao1,   alt: "Procissão noturna",                     cat: "semana-santa" },
  { id: 11, src: img_ss_vigilia1,     alt: "Vigília Pascal",                        cat: "semana-santa" },
  { id: 12, src: img_ss_vigilia2,     alt: "Coroinhas na Vigília Pascal",           cat: "semana-santa" },
  { id: 13, src: img_ss_procissao2,   alt: "Procissão com imagem",                  cat: "semana-santa" },
  { id: 14, src: img_ss_ceia,         alt: "Encenação da Última Ceia",              cat: "semana-santa" },
  { id: 15, src: img_ss_sexta,        alt: "Sexta-feira Santa",                     cat: "semana-santa" },
  { id: 16, src: img_ss_banner,       alt: "Fachada da Igreja Semana Santa",        cat: "semana-santa" },
  { id: 17, src: img_ss_velas,        alt: "Vigília Pascal com velas",              cat: "semana-santa" },
  { id: 18, src: img_ss_elevacao,     alt: "Padre elevando a hóstia",               cat: "semana-santa" },
  { id: 19, src: img_ss_ressurreicao, alt: "Imagem da Ressurreição",                cat: "semana-santa" },
  { id: 20, src: img_ss_grupo,        alt: "Grupo Semana Santa",                    cat: "semana-santa" },
  { id: 21, src: img_tlc1,            alt: "TLC — Treinamento de Liderança Cristã", cat: "celebracoes" },
  { id: 22, src: img_padroeira1,      alt: "Nossa Senhora Aparecida",               cat: "festa-padroeira" },
  { id: 23, src: "/galeria/cc1.png",  alt: "Corpus Christi — exposição",            cat: "celebracoes" },
  { id: 23, src: "/galeria/cc4.png",  alt: "Corpus Christi — padre no púlpito",     cat: "celebracoes" },
  { id: 24, src: "/galeria/cc6.png",  alt: "Corpus Christi — padres ajoelhados",    cat: "celebracoes" },
  { id: 25, src: "/galeria/cc8.png",  alt: "Procissão de Corpus Christi",           cat: "celebracoes" },
  { id: 26, src: "/galeria/cc10.png", alt: "Ostensório na procissão",               cat: "celebracoes" },
  { id: 27, src: "/galeria/cc12.png", alt: "Santíssimo com flores",                 cat: "celebracoes" },
  { id: 28, src: "/galeria/cc14.png", alt: "Comunhão em evento",                    cat: "celebracoes" },
  { id: 29, src: "/galeria/cc16.png", alt: "Padre pregando em arena",               cat: "celebracoes" },
  { id: 30, src: "/galeria/cc18.png", alt: "Celebração em arena",                   cat: "celebracoes" },
  { id: 31, src: "/galeria/cc19.png", alt: "Crucifixo e Nossa Senhora Aparecida",   cat: "celebracoes" },
  { id: 32, src: "/galeria/cc20.png", alt: "Celebração em arena — padres no altar", cat: "celebracoes" },
  { id: 33, src: "/galeria/cc21.png", alt: "Padres reunidos na celebração",          cat: "celebracoes" },
  { id: 34, src: img_svp1,            alt: "Celebração na Capela São Vicente",       cat: "capelas" },
  { id: 35, src: img_svp2,            alt: "Adoração na Capela São Vicente",         cat: "capelas" },
  { id: 36, src: img_svp3,            alt: "Crucifixo — São Vicente de Paulo",       cat: "capelas" },
  { id: 37, src: img_novenaDia1_1,    alt: "Bispo durante o primeiro dia da novena", cat: "novena-dia-1" },
  { id: 38, src: img_novenaDia1_2,    alt: "Celebração no primeiro dia da novena",   cat: "novena-dia-1" },
  { id: 39, src: img_novenaDia1_3,    alt: "Bispo no altar no primeiro dia da novena", cat: "novena-dia-1" },
  { id: 40, src: img_novenaDia2_1,    alt: "Celebração no segundo dia da novena",    cat: "novena-dia-2" },
  { id: 41, src: img_novenaDia2_2,    alt: "Comunidade reunida no segundo dia da novena", cat: "novena-dia-2" },
  { id: 42, src: img_novenaDia2_3,    alt: "Celebrantes no segundo dia da novena",   cat: "novena-dia-2" },
  { id: 43, src: img_novenaDia3_1,    alt: "Preparação da celebração no terceiro dia da novena", cat: "novena-dia-3" },
  { id: 44, src: img_novenaDia3_2,    alt: "Imagem de Nossa Senhora no terceiro dia da novena", cat: "novena-dia-3" },
  { id: 45, src: img_novenaDia3_3,    alt: "Comunidade e celebrantes no terceiro dia da novena", cat: "novena-dia-3" },
  { id: 46, src: img_novenaDia4_1,    alt: "Celebrante no quarto dia da novena", cat: "novena-dia-4" },
  { id: 47, src: img_novenaDia4_2,    alt: "Encenação da Sagrada Família no quarto dia da novena", cat: "novena-dia-4" },
  { id: 48, src: img_novenaDia4_3,    alt: "Comunidade reunida diante de Nossa Senhora no quarto dia da novena", cat: "novena-dia-4" },
  { id: 49, src: img_novenaDia4_4,    alt: "Comunidade e celebrantes no quarto dia da novena", cat: "novena-dia-4" },
];

const CATEGORIAS: { key: Categoria; label: string }[] = [
  { key: "todas",          label: "Todas" },
  { key: "matriz",         label: "Matriz" },
  { key: "capelas",        label: "Capelas — São Vicente de Paulo / Nossa Senhora do Rosário" },
  { key: "semana-santa",   label: "Semana Santa" },
  { key: "festa-padroeira",label: "Festa da Padroeira" },
  { key: "celebracoes",    label: "Celebrações Diversas" },
  { key: "novena-dia-1",   label: "1º Dia da Novena" },
  { key: "novena-dia-2",   label: "2º Dia da Novena" },
  { key: "novena-dia-3",   label: "3º Dia da Novena" },
  { key: "novena-dia-4",   label: "4º Dia da Novena" },
];

export default function Galeria() {
  const [catAtiva, setCatAtiva] = useState<Categoria>("todas");
  const [pagina, setPagina] = useState(1);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [extrasBase, setExtrasBase] = useState<GaleriaItem[]>([]);

  useEffect(() => {
    const extras = getGaleriaFotos();
    if (extras.length > 0) {
      setExtrasBase(extras.map((f, i) => ({
        id: 1000 + i, src: f.imageDataUrl, alt: f.alt, cat: "celebracoes" as Categoria,
      })));
    }
  }, []);

  const todasFotos = [...FOTOS, ...extrasBase];
  const filtradas = catAtiva === "todas" ? todasFotos : todasFotos.filter(f => f.cat === catAtiva);
  const totalPaginas = Math.ceil(filtradas.length / POR_PAGINA);
  const inicio = (pagina - 1) * POR_PAGINA;
  const fotosPagina = filtradas.slice(inicio, inicio + POR_PAGINA);

  const temFotos = (cat: Categoria) => cat === "todas" || todasFotos.some(f => f.cat === cat);

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

  const mudarCategoria = (cat: Categoria) => {
    setCatAtiva(cat);
    setPagina(1);
    setLightboxIndex(null);
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

          {/* Filtros */}
          <div className="mb-10 overflow-x-auto pb-2">
            <div className="flex flex-wrap gap-2">
              {CATEGORIAS.map((cat) => {
                const ativa = catAtiva === cat.key;
                const tem = temFotos(cat.key);
                return (
                  <button
                    key={cat.key}
                    onClick={() => tem && mudarCategoria(cat.key)}
                    className={[
                      "px-4 py-2 text-[12px] font-medium tracking-wide transition-all border whitespace-nowrap",
                      ativa
                        ? "bg-primary text-white border-primary"
                        : "bg-white text-foreground border-gray-200 hover:border-secondary hover:text-secondary",
                      !tem ? "opacity-40 cursor-default pointer-events-none" : "",
                    ].join(" ")}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid */}
          {catAtiva.startsWith("novena-dia-") && (
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-secondary">
                  Novena de Nossa Senhora Aparecida
                </p>
                <h2 className="mt-1 font-display text-2xl font-semibold text-primary">
                  {CATEGORIAS.find((cat) => cat.key === catAtiva)?.label}
                </h2>
              </div>
              <span className="text-xs text-muted-foreground">
                {fotosPagina.length} {fotosPagina.length === 1 ? "foto" : "fotos"}
              </span>
            </div>
          )}
          {fotosPagina.length === 0 ? (
            <div className="py-24 text-center">
              <p className="text-muted-foreground text-sm font-light">Nenhuma foto disponível nesta categoria ainda.</p>
            </div>
          ) : (
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
                  {foto.cat.startsWith("novena-dia-") && (
                    <p className="border-t border-gray-100 bg-white px-3 py-2 text-xs font-medium text-primary">
                      {CATEGORIAS.find((cat) => cat.key === foto.cat)?.label}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

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
        {lightboxIndex !== null && fotosPagina[lightboxIndex] && (
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
