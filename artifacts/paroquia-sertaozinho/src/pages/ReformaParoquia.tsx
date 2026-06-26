import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Heart, Paintbrush, Sparkles, Building2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const BASE = import.meta.env.BASE_URL;

const CAROUSEL_IMAGES = [
  {
    src: `${BASE}reforma/fachada-obras.png`,
    alt: "Vista da igreja com guindaste e vitrais protegidos durante a restauração",
    caption: "Obras na fachada da Matriz",
  },
  {
    src: `${BASE}reforma/torre-restauracao.png`,
    alt: "Equipe realizando restauração na torre da igreja",
    caption: "Restauração da torre e relógio",
  },
  {
    src: `${BASE}reforma/cruz-torre.png`,
    alt: "Trabalhadores restaurando a cruz no topo da torre",
    caption: "Conservação da cruz no topo da torre",
  },
  {
    src: `${BASE}reforma/fachada-lateral.png`,
    alt: "Lateral da igreja com vitrais e pintura em processo de conservação",
    caption: "Conservação da fachada lateral",
  },
  {
    src: `${BASE}reforma/pintura-interna.png`,
    alt: "Plataforma elevatória dentro da igreja para estudo de pintura interna",
    caption: "Estudo de pintura interna da igreja",
  },
  {
    src: `${BASE}reforma/vitral-quatrefoil.png`,
    alt: "Painel de vitral em restauração com motivo central em forma de flor",
    caption: "Restauração dos vitrais — painel central",
  },
  {
    src: `${BASE}reforma/vitral-circular.png`,
    alt: "Vitral circular sendo montado na oficina de restauração",
    caption: "Montagem de vitral circular",
  },
  {
    src: `${BASE}reforma/vitral-fragmentos-1.png`,
    alt: "Fragmentos de vitrais coloridos dispostos para restauração",
    caption: "Peças de vitral em processo de restauração",
  },
  {
    src: `${BASE}reforma/vitral-fragmentos-2.png`,
    alt: "Detalhes de peças de vitral sendo preparadas na oficina",
    caption: "Detalhes do trabalho artesanal nos vitrais",
  },
  {
    src: `${BASE}reforma/vitral-oficina.png`,
    alt: "Peças de vitral na oficina Kindgom Vitrais",
    caption: "Oficina de restauração Kindgom Vitrais",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <>
      <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-secondary block mb-3">
        {label}
      </span>
      <h2 className="font-display text-3xl font-bold text-primary mb-5">{title}</h2>
      <div className="flex items-center gap-3 mb-7">
        <div className="w-10 h-px bg-secondary" />
        <div className="w-2 h-2 rotate-45 bg-secondary/50" />
      </div>
    </>
  );
}

function ReformaCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "center" }}
        className="w-full"
      >
        <CarouselContent className="-ml-0">
          {CAROUSEL_IMAGES.map((image) => (
            <CarouselItem key={image.src} className="pl-0">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-sm shadow-2xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
                <p className="absolute bottom-0 left-0 right-0 px-6 py-5 text-white text-sm sm:text-base font-light tracking-wide">
                  {image.caption}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-4 sm:left-6 h-10 w-10 border-white/30 bg-white/90 text-primary hover:bg-white shadow-lg disabled:opacity-40" />
        <CarouselNext className="right-4 sm:right-6 h-10 w-10 border-white/30 bg-white/90 text-primary hover:bg-white shadow-lg disabled:opacity-40" />
      </Carousel>

      <div className="flex justify-center gap-2 mt-5">
        {CAROUSEL_IMAGES.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Ir para imagem ${index + 1}`}
            onClick={() => scrollTo(index)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              current === index ? "w-8 bg-secondary" : "w-1.5 bg-secondary/30 hover:bg-secondary/50"
            )}
          />
        ))}
      </div>
    </div>
  );
}

export default function ReformaParoquia() {
  return (
    <main className="w-full">
      <PageHero
        category="Paróquia Nossa Senhora Aparecida"
        title="Reforma da Paróquia"
        subtitle="Restauração, conservação e renovação dos espaços sagrados de nossa comunidade."
      />

      {/* Carrossel */}
      <section className="bg-muted/30 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-secondary block mb-3">
              Andamento das Obras
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary">
              Acompanhe a restauração da nossa Matriz
            </h2>
          </motion.div>
          <ReformaCarousel />
        </div>
      </section>

      {/* Conteúdo */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-14"
      >
        {/* Intro */}
        <motion.section variants={fadeUp}>
          <SectionHeader label="Nossa Missão" title="Ajude a Construir e Preservar a Nossa Paróquia" />
          <div className="space-y-4 text-muted-foreground font-light leading-relaxed text-[15px]">
            <p>
              Nossa paróquia está vivendo um importante momento de restauração, conservação e renovação de seus
              espaços. Para que possamos continuar avançando nessas obras e oferecer um ambiente cada vez mais digno
              para a oração, a evangelização e o acolhimento de todos, contamos com a sua ajuda.
            </p>
            <p>
              Cada contribuição, independentemente do valor, faz a diferença e nos permite dar continuidade aos
              projetos que estão sendo realizados. Confira abaixo o andamento das obras e a aplicação dos recursos
              arrecadados.
            </p>
          </div>
        </motion.section>

        {/* Pintura Interna */}
        <motion.section variants={fadeUp}>
          <div className="flex items-start gap-4 mb-2">
            <div className="p-2.5 bg-secondary/10 text-secondary shrink-0 mt-1">
              <Paintbrush className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <SectionHeader label="Projeto em Andamento" title="Pintura Interna da Igreja" />
            </div>
          </div>
          <div className="space-y-4 text-muted-foreground font-light leading-relaxed text-[15px]">
            <p>
              A empresa <strong className="text-primary font-medium">Estúdio Restaura</strong> foi escolhida e
              contratada para conduzir a fase inicial do projeto de pintura interna da igreja. Nesta etapa, foi
              realizado um estudo técnico e histórico, no valor de{" "}
              <strong className="text-primary font-medium">R$ 28.000,00</strong>, coordenado pela arquiteta{" "}
              <strong className="text-primary font-medium">Paula</strong>, com o objetivo de verificar a existência de
              pinturas artísticas sob a atual camada de tinta branca.
            </p>
            <p>
              O trabalho revelou a presença de cinco cores originais, demonstrando a riqueza histórica e artística de
              nosso templo. Atualmente, aguardamos a conclusão do projeto e do layout da Capela do Santíssimo, incluindo
              a definição da iluminação e da pintura. A previsão é iniciar esta nova fase entre os meses de agosto e
              setembro.
            </p>
          </div>
        </motion.section>

        {/* Vitrais */}
        <motion.section variants={fadeUp}>
          <div className="flex items-start gap-4 mb-2">
            <div className="p-2.5 bg-secondary/10 text-secondary shrink-0 mt-1">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <SectionHeader label="Patrimônio Artístico" title="Restauração dos Vitrais" />
            </div>
          </div>
          <div className="space-y-4 text-muted-foreground font-light leading-relaxed text-[15px]">
            <p>
              Os vitrais mais danificados pela ação do tempo já estão sendo restaurados pela empresa{" "}
              <strong className="text-primary font-medium">Kindgom Vitrais</strong>, em um investimento de{" "}
              <strong className="text-primary font-medium">R$ 33.500,00</strong>.
            </p>
            <p>
              Esta obra é fundamental para preservar a beleza, a identidade e o patrimônio artístico de nossa igreja
              para as futuras gerações.
            </p>
          </div>
        </motion.section>

        {/* Centro Catequético */}
        <motion.section variants={fadeUp}>
          <div className="flex items-start gap-4 mb-2">
            <div className="p-2.5 bg-secondary/10 text-secondary shrink-0 mt-1">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <SectionHeader label="Espaços de Formação" title="Reforma do Centro Catequético" />
            </div>
          </div>
          <div className="space-y-4 text-muted-foreground font-light leading-relaxed text-[15px]">
            <p>
              Estamos também na reta final da reforma e atualização do nosso Centro Catequético. Nos próximos dias
              serão realizadas as trocas das janelas e das lousas, além dos últimos ajustes necessários.
            </p>
            <p>
              Em seguida, iniciaremos a etapa de pintura, concluindo mais uma importante melhoria para os espaços de
              formação e evangelização de nossa comunidade.
            </p>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          variants={fadeUp}
          className="p-8 sm:p-10 border border-secondary/30 bg-gradient-to-br from-secondary/5 to-primary/5"
        >
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-5 h-5 text-secondary" />
            <h2 className="font-display text-2xl font-bold text-primary">Contamos com Você</h2>
          </div>
          <div className="space-y-4 text-muted-foreground font-light leading-relaxed text-[15px] mb-8">
            <p>
              Todas essas obras estão sendo realizadas graças à Providência de Deus e à generosidade dos fiéis. Ainda
              temos um longo caminho pela frente e precisamos da ajuda de toda a comunidade para concluir cada etapa.
            </p>
            <p>
              Se você deseja colaborar com a restauração e a conservação de nossa paróquia, faça sua doação. Sua
              contribuição é um gesto concreto de amor à Igreja e ajudará a preservar este patrimônio de fé para as
              próximas gerações.
            </p>
            <p>
              Juntos, podemos construir uma paróquia cada vez mais bela, acolhedora e preparada para a missão
              evangelizadora.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/dizimo"
              onClick={() => setTimeout(() => window.scrollTo(0, 0), 0)}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary text-white text-sm font-semibold tracking-wider uppercase hover:bg-secondary/90 transition-colors"
            >
              Fazer uma Doação
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/dizimo"
              onClick={() => setTimeout(() => window.scrollTo(0, 0), 0)}
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-secondary text-secondary text-sm font-semibold tracking-wider uppercase hover:bg-secondary/10 transition-colors"
            >
              Contribuir para a Reforma
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.section>
      </motion.div>
    </main>
  );
}
