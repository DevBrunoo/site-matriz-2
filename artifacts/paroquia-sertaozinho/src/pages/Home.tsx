import { Link } from "wouter";
import { Clock, Calendar, Heart, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="w-full pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-primary">
          <img
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
            alt="Interior da Igreja"
            className="w-full h-full object-cover opacity-30 mix-blend-overlay grayscale"
          />
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-20">
          <div>
            <span className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-6 block">
              Sertãozinho - SP
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-normal text-white mb-8 leading-tight">
              Paróquia Nossa Senhora <span className="text-secondary italic">Aparecida</span>
            </h1>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Bem-vindo à Casa do Senhor. Uma comunidade de fé, esperança e caridade, caminhando juntos com Maria.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/historia" className="px-8 py-3 bg-secondary text-white text-sm font-semibold tracking-wider uppercase hover:bg-secondary/90 transition-colors">
                Conheça Nossa História
              </Link>
              <Link href="/agenda" className="px-8 py-3 border border-white/60 text-white text-sm font-semibold tracking-wider uppercase hover:bg-white/10 transition-colors">
                Horários de Missa
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Grid */}
      <section className="py-24 bg-background border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <div className="bg-white flex flex-col p-6 border-l border-secondary/30">
              <div className="text-secondary mb-6">
                <Clock className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="font-display text-xl mb-3 text-primary">Horários de Missa</h3>
              <p className="text-muted-foreground mb-6 font-light leading-relaxed">
                Confira nossos horários de celebrações semanais e dominicais para participar conosco.
              </p>
              <Link href="/agenda" className="text-xs font-semibold tracking-wider uppercase text-primary hover:text-secondary flex items-center gap-2 mt-auto group transition-colors">
                Ver horários <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-white flex flex-col p-6 border-l border-secondary/30">
              <div className="text-secondary mb-6">
                <Heart className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="font-display text-xl mb-3 text-primary">Dízimo</h3>
              <p className="text-muted-foreground mb-6 font-light leading-relaxed">
                Seja um dizimista fiel e ajude nossa paróquia a manter suas obras de evangelização e caridade.
              </p>
              <Link href="/contato" className="text-xs font-semibold tracking-wider uppercase text-primary hover:text-secondary flex items-center gap-2 mt-auto group transition-colors">
                Como participar <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-white flex flex-col p-6 border-l border-secondary/30">
              <div className="text-secondary mb-6">
                <Calendar className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="font-display text-xl mb-3 text-primary">Secretaria</h3>
              <p className="text-muted-foreground mb-6 font-light leading-relaxed">
                Atendimento presencial de segunda a sexta das 08h às 17h30, e aos sábados até 12h.
              </p>
              <Link href="/contato" className="text-xs font-semibold tracking-wider uppercase text-primary hover:text-secondary flex items-center gap-2 mt-auto group transition-colors">
                Fale conosco <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sacramentos Highlights */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-display text-3xl text-primary mb-4">Os Sacramentos</h2>
            <div className="w-12 h-px bg-secondary mb-6"></div>
            <p className="text-muted-foreground max-w-2xl text-lg font-light">
              Sinais visíveis da graça invisível, instituídos por Jesus Cristo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Batismo', 'Eucaristia', 'Matrimônio', 'Confissão'].map((sacramento) => (
              <div
                key={sacramento}
                className="bg-white p-8 group border-t border-transparent hover:border-secondary transition-colors"
              >
                <h3 className="font-display text-lg mb-4 text-primary">{sacramento}</h3>
                <Link href="/sacramentos" className="text-xs tracking-wide text-muted-foreground group-hover:text-secondary transition-colors uppercase">
                  Saiba mais &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Próximos Eventos */}
      <section className="py-24 bg-background border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <h2 className="font-display text-3xl text-primary mb-4">Agenda Paroquial</h2>
              <div className="w-12 h-px bg-secondary"></div>
            </div>
            <Link href="/agenda" className="text-xs font-semibold tracking-wider uppercase text-primary hover:text-secondary transition-colors pb-1 border-b border-primary hover:border-secondary">
              Ver agenda completa
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            {[
              { day: "15", month: "Out", title: "Festa da Padroeira", desc: "Missa solene e procissão luminosa" },
              { day: "22", month: "Out", title: "Encontro de Jovens", desc: "No salão paroquial a partir das 19h" },
              { day: "05", month: "Nov", title: "Bazar Beneficente", desc: "Roupas e artesanatos em prol da paróquia" }
            ].map((event, i) => (
              <div
                key={i}
                className="flex items-center gap-8 py-6 border-b border-gray-100 hover:bg-muted/50 transition-colors px-4 -mx-4"
              >
                <div className="flex flex-col items-center justify-center shrink-0 w-16">
                  <span className="font-display text-2xl text-primary leading-none">{event.day}</span>
                  <span className="text-xs font-medium uppercase tracking-widest text-secondary mt-1">{event.month}</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-primary mb-1">{event.title}</h3>
                  <p className="text-muted-foreground text-sm font-light">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
