import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Droplets, Heart, Coins } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const PASTORAIS = [
  {
    id: "pastoral-familiar",
    nome: "Pastoral Familiar",
    desc: "Cuida, acompanha e fortalece as famílias na fé e no amor. Coordenada por Agnes e Fernando Liboni. Encontros na última segunda-feira de cada mês, nas casas dos integrantes.",
    icon: Heart,
    href: "/pastoral-familiar",
  },
  {
    id: "associacao-do-rosario",
    nome: "Associação do Rosário",
    desc: "Grupo dedicado à devoção e rezar o Santo Rosário, fortalecendo a fé e a comunhão mariana na paróquia.",
    icon: Heart,
    href: "/associacao-do-rosario",
  },
  {
    id: "grupo-de-evangelizacao",
    nome: 'Grupo de Evangelização "Santa Terezinha do Menino Jesus"',
    desc: "Movimento de evangelização que leva a Palavra de Deus às famílias e comunidades, inspirado no carisma da pequena Santa Terezinha.",
    icon: BookOpen,
    href: "/grupo-de-evangelizacao",
  },
  {
    id: "pastoral-da-sobriedade",
    nome: "Pastoral da Sobriedade",
    desc: "Pastoral voltada ao acolhimento e apoio de pessoas e famílias afetadas pelo alcoolismo e outras dependências químicas.",
    icon: Droplets,
    href: "/pastoral-da-sobriedade",
  },
  {
    id: "pastoral-do-dizimo",
    nome: "Pastoral do Dízimo",
    desc: "Promove a cultura do dízimo como ato de fé e gratidão, sustentando a missão evangelizadora da paróquia.",
    icon: Coins,
    href: "/pastoral-do-dizimo",
  },
  {
    id: "renovacao-carismatica",
    nome: "Renovação Carismática Católica (RCC)",
    desc: "Grupo de oração focado no louvor, adoração e batismo no Espírito Santo. Clique para saber os horários e participar.",
    icon: ArrowRight,
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
              const Icon = p.icon;
              return (
                <motion.div key={p.id} variants={fadeUp}>
                  <Link href={p.href}>
                    <div className={`group flex items-start gap-5 p-7 border transition-all cursor-pointer ${p.destaque ? "border-secondary/40 bg-secondary/5 hover:bg-secondary/10" : "border-gray-100 bg-white hover:border-secondary/30 hover:shadow-sm"}`}>
                      <div className={`w-10 h-10 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${p.destaque ? "bg-secondary/20 group-hover:bg-secondary/30" : "bg-primary/8 group-hover:bg-primary/15"}`}>
                        <Icon className={`w-4 h-4 stroke-[1.5] ${p.destaque ? "text-secondary" : "text-primary"}`} />
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
