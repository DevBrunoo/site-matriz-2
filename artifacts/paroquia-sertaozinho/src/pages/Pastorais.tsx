import { Users, Heart, Music, BookOpen } from "lucide-react";

export default function Pastorais() {
  const pastorais = [
    {
      id: "rcc",
      name: "Renovação Carismática Católica (RCC)",
      desc: "Grupo de oração focado no louvor, adoração e batismo no Espírito Santo. Reuniões todas as quartas-feiras às 20h.",
      icon: <Heart className="w-8 h-8" />
    },
    {
      id: "tlc",
      name: "Terço de Libertação e Cura (TLC)",
      desc: "Momento profundo de oração do terço pedindo por curas e libertações. Toda primeira terça-feira do mês.",
      icon: <Users className="w-8 h-8" />
    },
    {
      id: "terco",
      name: "Terço dos Homens",
      desc: "Movimento de oração mariana exclusivo para homens. Reuniões às segundas-feiras, 19h30 na Igreja Matriz.",
      icon: <Users className="w-8 h-8" />
    },
    {
      id: "catequese",
      name: "Catequese",
      desc: "Preparação de crianças, jovens e adultos para os sacramentos da Iniciação Cristã.",
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      id: "pascom",
      name: "Pastoral da Comunicação (PASCOM)",
      desc: "Responsável pela evangelização através dos meios de comunicação: redes sociais, avisos e transmissões.",
      icon: <Users className="w-8 h-8" />
    },
    {
      id: "liturgia",
      name: "Equipe de Liturgia",
      desc: "Prepara e anima as celebrações litúrgicas da paróquia (leitores, ministros, acolhida).",
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      id: "coral",
      name: "Coral e Ministérios de Música",
      desc: "Grupos musicais que animam as missas e eventos da paróquia através do canto litúrgico.",
      icon: <Music className="w-8 h-8" />
    }
  ];

  return (
    <main className="pt-24 pb-20">
      <section className="bg-primary py-16 text-center text-white relative">
         <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
          <img src={`${import.meta.env.BASE_URL}images/pattern-bg.png`} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display text-white">Pastorais e Movimentos</h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-white/90">
            A Igreja é uma comunidade viva formada por diversos carismas e dons. Encontre o seu lugar e venha servir ao Senhor conosco!
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-background">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastorais.map((p) => (
            <div key={p.id} id={p.id} className="bg-white rounded-2xl p-8 shadow-lg border border-border hover:-translate-y-1 hover:shadow-xl transition-all group cursor-pointer relative overflow-hidden">
              {/* Decorative corner element */}
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full transition-transform group-hover:scale-150 duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{p.name}</h3>
                <p className="text-muted-foreground">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-primary/5 rounded-3xl p-10 border border-primary/10">
          <h3 className="text-2xl font-bold mb-4">Deseja participar de alguma pastoral?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Todas as pastorais estão abertas para novos membros. Procure a secretaria paroquial ou os coordenadores após as missas para saber como iniciar.
          </p>
          <a href="/contato" className="inline-flex items-center justify-center h-12 px-8 py-2 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors shadow-md">
            Entrar em Contato
          </a>
        </div>
      </section>
    </main>
  );
}
