import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const BASE = import.meta.env.BASE_URL;

export default function SagradoCoracaoDeJesus() {
  return (
    <main className="w-full">
      <PageHero
        category="Pastorais"
        title="Sagrado Coração de Jesus"
        subtitle="Apostolado da Oração: oferta de vida, missão e amor ao Coração de Cristo"
      />

      <section className="py-16 bg-gradient-to-b from-primary/6 to-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="shrink-0 flex flex-col items-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-secondary/10 blur-2xl" />
                <img
                  src={`${BASE}pastorais/sagrado-coracao-de-jesus.jpg`}
                  alt="Sagrado Coração de Jesus"
                  className="relative w-64 h-64 sm:w-72 sm:h-72 object-contain drop-shadow-2xl"
                />
              </div>
              <div className="flex items-center gap-3 mt-6">
                <div className="w-10 h-px bg-secondary/50" />
                <div className="w-1.5 h-1.5 rotate-45 bg-secondary/50" />
                <div className="w-10 h-px bg-secondary/50" />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-secondary block mb-3">
                Apostolado da Oração
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary mb-4 leading-snug">
                Unidos ao Coração de Jesus
              </h2>
              <div className="flex items-center gap-3 mb-5 md:justify-start justify-center">
                <div className="w-10 h-px bg-secondary" />
                <div className="w-1.5 h-1.5 rotate-45 bg-secondary/60" />
              </div>
              <p className="text-muted-foreground font-light leading-relaxed text-[15px] mb-4">
                O Apostolado da Oração é um movimento da Igreja dedicado à espiritualidade do Sagrado Coração de Jesus,
                convidando os fiéis a oferecerem suas vidas, orações, trabalhos e sofrimentos pela missão da Igreja e
                pelas intenções do Santo Padre.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed text-[15px]">
                Inspirados pelo Coração de Jesus, seus membros buscam viver a fé com profunda união com Cristo,
                participação nos sacramentos e serviço concreto à comunidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-background pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-gray-100 p-8 hover:border-secondary/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-secondary" />
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">👤 Coordenação</h2>
            </div>
            <p className="text-muted-foreground font-light text-[15px] leading-relaxed">
              A coordenação é realizada por <span className="font-semibold text-primary">coordenadoras do movimento</span>, que acolhem os interessados e orientam a participação.
            </p>
          </div>

          <div className="border border-gray-100 p-8 hover:border-secondary/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-secondary" />
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">📅 Encontros</h2>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { label: "Santa Missa", info: "Primeira sexta-feira de cada mês, às 15h00, na Igreja Matriz" },
                { label: "Reunião mensal", info: "Quarto sábado de cada mês, às 17h00, na Igreja Matriz" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1 border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                  <span className="text-sm font-semibold text-primary">{item.label}</span>
                  <span className="text-sm text-muted-foreground font-light leading-relaxed">{item.info}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-gray-100 p-8 hover:border-secondary/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-secondary" />
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">🎯 Missão</h2>
            </div>
            <p className="text-muted-foreground font-light text-[15px] leading-relaxed">
              Evangelizar por meio da oração, cultivando uma profunda união com Cristo e testemunhando o amor de Deus no dia a dia.
            </p>
          </div>

          <div className="border border-gray-100 p-8 hover:border-secondary/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-secondary" />
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">👥 Quem pode participar?</h2>
            </div>
            <div className="flex flex-col gap-2">
              {[
                "Homens e mulheres que desejam aprofundar a vida de oração",
                "Fiéis com devoção ao Sagrado Coração de Jesus",
                "Quem deseja assumir o compromisso das nove primeiras sextas-feiras do mês",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rotate-45 bg-secondary mt-1.5 shrink-0" />
                  <p className="text-[14px] text-muted-foreground font-light">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/3 border-y border-primary/8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-secondary" />
            <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">📋 Como participar</h2>
          </div>
          <div className="flex flex-col gap-3">
            {[
              "É necessário realizar a inscrição diretamente com uma das coordenadoras do movimento",
              "Não é exigida documentação específica",
              "Basta fornecer alguns dados pessoais no momento da inscrição",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rotate-45 bg-secondary mt-2 shrink-0" />
                <p className="text-[15px] text-muted-foreground font-light">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-secondary" />
            <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">✝️ Compromisso espiritual</h2>
          </div>
          <p className="text-[15px] text-muted-foreground font-light mb-6 leading-relaxed">
            O apostolado convida os membros a viverem uma fé mais intensa e concreta, unindo oração, sacramentos e serviço.
          </p>
          <div className="flex flex-col gap-3">
            {[
              "Participação nas nove Missas das primeiras sextas-feiras do mês",
              "Oferta da vida, do trabalho e dos sofrimentos pela Igreja",
              "Serviço na comunidade com espírito de misericórdia e amor",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
                <div className="w-1 self-stretch bg-secondary/30 shrink-0 rounded-full" />
                <span className="text-sm text-primary font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-primary/5 border-t border-primary/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-px bg-secondary mt-3 shrink-0" />
              <p className="text-primary font-medium text-sm">
                Venha fazer parte do Apostolado da Oração e fortaleça sua caminhada cristã, unindo sua vida ao Coração de Jesus e colaborando, pela oração, com a missão evangelizadora da Igreja.
              </p>
            </div>
            <Link
              href="/contato"
              className="flex items-center gap-2 shrink-0 bg-primary text-white px-6 py-2.5 text-xs font-semibold tracking-wider uppercase hover:bg-primary/90 transition-colors group"
            >
              Entrar em Contato
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
