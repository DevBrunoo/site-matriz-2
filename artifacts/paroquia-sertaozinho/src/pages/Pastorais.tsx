import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const BASE = import.meta.env.BASE_URL;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const PASTORAIS = [
  {
    id: "pastoral-familiar",
    nome: "Pastoral Familiar",
    desc: "Cuida, acompanha e fortalece as famílias na fé e no amor. Coordenada por Agnes e Fernando Liboni. Encontros na última segunda-feira de cada mês, nas casas dos integrantes.",
    img: `${BASE}logos/logo-familiar.png`,
    href: "/pastoral-familiar",
  },
  {
    id: "associacao-do-rosario",
    nome: "Associação do Rosário",
    desc: "Grupo dedicado à devoção e rezar o Santo Rosário, fortalecendo a fé e a comunhão mariana na paróquia.",
    img: `${BASE}rosario-associacao.png`,
    href: "/associacao-do-rosario",
  },
  {
    id: "grupo-de-evangelizacao",
    nome: 'Grupo de Evangelização "Santa Terezinha do Menino Jesus"',
    desc: "Movimento de evangelização que leva a Palavra de Deus às famílias e comunidades, inspirado no carisma da pequena Santa Terezinha.",
    img: `${BASE}pastorais/santa-teresinha.png`,
    href: "/grupo-de-evangelizacao",
  },
  {
    id: "terco-dos-homens",
    nome: "Terço dos Homens",
    desc: "Movimento mariano que reúne homens para rezar o Santo Terço, fortalecer a fé e crescer na vida cristã.",
    img: `${BASE}pastorais/terco-dos-homens.jpeg`,
    href: "/terco-dos-homens",
  },
  {
    id: "sagrado-coracao-de-jesus",
    nome: "Sagrado Coração de Jesus",
    desc: "Apostolado da Oração dedicado à espiritualidade do Sagrado Coração de Jesus, à oração pela Igreja e ao serviço fraterno.",
    img: `${BASE}pastorais/sagrado-coracao-de-jesus.jpg`,
    href: "/sagrado-coracao-de-jesus",
  },
  {
    id: "pastoral-da-sobriedade",
    nome: "Pastoral da Sobriedade",
    desc: "Pastoral voltada ao acolhimento e apoio de pessoas e famílias afetadas pelo alcoolismo e outras dependências químicas.",
    img: `${BASE}logos/logo-sobriedade.png`,
    href: "/pastoral-da-sobriedade",
  },
  {
    id: "pastoral-do-dizimo",
    nome: "Pastoral do Dízimo",
    desc: "Promove a cultura do dízimo como ato de fé e gratidão, sustentando a missão evangelizadora da paróquia.",
    img: `${BASE}logos/logo-dizimo.png`,
    href: "/pastoral-do-dizimo",
  },
  {
    id: "renovacao-carismatica",
    nome: "Renovação Carismática Católica (RCC)",
    desc: "Grupo de oração focado no louvor, adoração e batismo no Espírito Santo. Clique para saber os horários e participar.",
    img: `${BASE}pastorais/rcc.png`,
    href: "/renovacao-carismatica",
    destaque: true,
  },
];

export default function Pastorais() {
  return (
    <main className="w-full">
      <PageHero category="Paróquia Nossa Senhora Aparecida" title="Pastorais e Movimentos" />

      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-muted-foreground font-light leading-relaxed text-base max-w-2xl mb-16">
            A Igreja é uma comunidade viva formada por diversos carismas e dons. Encontre o seu lugar e venha servir ao Senhor conosco.
          </p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="flex flex-col gap-4"
          >
            {PASTORAIS.map((p) => {
              return (
                <motion.div key={p.id} variants={fadeUp}>
                  <Link href={p.href}>
                    <div className={`group flex flex-col sm:flex-row items-start gap-5 p-7 border transition-all cursor-pointer ${p.destaque ? "border-secondary/40 bg-secondary/5 hover:bg-secondary/10" : "border-gray-100 bg-white hover:border-secondary/30 hover:shadow-sm"}`}>
                      <div className={`w-full h-44 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-lg overflow-hidden flex items-center justify-center shrink-0 border transition-colors ${p.destaque ? "bg-secondary/10 border-secondary/30 group-hover:border-secondary/50" : "bg-gray-50 border-gray-100 group-hover:border-secondary/30"}`}>
                        <img
                          src={p.img}
                          alt={p.nome}
                          className="w-full h-full object-contain p-3"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="w-6 h-px bg-secondary mb-2" />
                        <h3 className="font-display font-semibold text-primary text-[15px] mb-1">{p.nome}</h3>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed">{p.desc}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-secondary shrink-0 mt-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="mt-16 p-8 border border-gray-100 bg-white">
            <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
              Todas as pastorais estão abertas para novos membros. Procure a secretaria paroquial ou os coordenadores após as missas para saber como participar.
            </p>
            <Link href="/secretaria">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-colors">
                Falar com a Secretaria <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
