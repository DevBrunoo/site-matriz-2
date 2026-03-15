import { Link } from "wouter";
import { motion } from "framer-motion";
import { Clock, Calendar, Heart, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
            alt="Interior da Igreja"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-background"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block drop-shadow-md">
              Sertãozinho - SP
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Paróquia Nossa Senhora <span className="text-gold-gradient">Aparecida</span>
            </h1>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-md font-medium">
              Bem-vindo à Casa do Senhor. Uma comunidade de fé, esperança e caridade, caminhando juntos com Maria.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/historia">
                <Button variant="gold" size="lg" className="w-full sm:w-auto">
                  Conheça Nossa História
                </Button>
              </Link>
              <Link href="/agenda">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary">
                  Horários de Missa
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Info Grid */}
      <section className="py-16 bg-background relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl shadow-primary/5 border border-border flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Horários de Missa</h3>
              <p className="text-muted-foreground mb-4">Confira nossos horários de celebrações semanais e dominicais.</p>
              <Link href="/agenda" className="text-primary font-semibold hover:text-secondary flex items-center gap-1 mt-auto">
                Ver todos <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-primary text-white p-8 rounded-2xl shadow-xl shadow-primary/20 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/damask-seamless.png')]"></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-secondary mb-4 group-hover:bg-secondary group-hover:text-primary transition-colors">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Dízimo</h3>
                <p className="text-white/80 mb-4">Seja um dizimista fiel e ajude nossa paróquia a manter suas obras.</p>
                <Link href="/contato" className="text-secondary font-semibold hover:text-white flex items-center gap-1 mt-auto">
                  Como participar <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-xl shadow-primary/5 border border-border flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secretaria</h3>
              <p className="text-muted-foreground mb-4">Atendimento de segunda a sexta das 08h às 17h30. Sábados até 12h.</p>
              <Link href="/contato" className="text-primary font-semibold hover:text-secondary flex items-center gap-1 mt-auto">
                Fale conosco <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sacramentos Highlights */}
      <section className="py-20 bg-muted/30 relative">
         <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
          <img src={`${import.meta.env.BASE_URL}images/pattern-bg.png`} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Os Sacramentos</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Os sacramentos são sinais visíveis da graça invisível, instituídos por Jesus Cristo para a nossa santificação.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Batismo', 'Eucaristia', 'Matrimônio', 'Confissão'].map((sacramento, i) => (
              <motion.div
                key={sacramento}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-border hover:border-secondary/50 hover:shadow-xl transition-all text-center group cursor-pointer"
              >
                <div className="w-14 h-14 mx-auto border-2 border-primary/20 rounded-full flex items-center justify-center text-primary mb-4 group-hover:border-secondary group-hover:text-secondary transition-colors">
                  <Heart className="w-6 h-6" /> {/* Placeholder icon */}
                </div>
                <h3 className="text-lg font-bold mb-2">{sacramento}</h3>
                <Link href="/sacramentos" className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  Saiba mais &rarr;
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/sacramentos">
              <Button variant="outline">Ver todos os Sacramentos</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Próximos Eventos */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Próximos Eventos</h2>
              <div className="w-24 h-1 bg-secondary"></div>
            </div>
            <Link href="/agenda">
              <Button variant="gold">Agenda Completa</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { day: "15", month: "OUT", title: "Festa da Padroeira", desc: "Missa solene e procissão luminosa." },
              { day: "22", month: "OUT", title: "Encontro de Jovens", desc: "No salão paroquial a partir das 19h." },
              { day: "05", month: "NOV", title: "Bazar Beneficente", desc: "Roupas e artesanatos em prol da paróquia." }
            ].map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex gap-6 hover:bg-white/20 transition-colors"
              >
                <div className="flex flex-col items-center justify-center bg-white text-primary rounded-xl w-20 h-20 shrink-0 shadow-lg">
                  <span className="text-2xl font-bold leading-none">{event.day}</span>
                  <span className="text-sm font-semibold">{event.month}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-white/80 text-sm">{event.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
