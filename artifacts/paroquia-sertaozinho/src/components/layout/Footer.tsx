import { Link } from "wouter";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="font-display text-xl leading-tight text-white font-normal">
              Paróquia Nossa Senhora<br/>Aparecida
            </h3>
            <div className="w-8 h-px bg-secondary"></div>
            <p className="text-white/70 text-sm font-light leading-relaxed">
              Sertãozinho - SP<br/>
              "Fazei tudo o que Ele vos disser" (Jo 2,5)
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm tracking-widest uppercase mb-6 text-secondary">Navegação</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><Link href="/" className="text-white/70 hover:text-white transition-colors">Início</Link></li>
              <li><Link href="/historia" className="text-white/70 hover:text-white transition-colors">Nossa História</Link></li>
              <li><Link href="/agenda" className="text-white/70 hover:text-white transition-colors">Horários de Missa</Link></li>
              <li><Link href="/sacramentos" className="text-white/70 hover:text-white transition-colors">Sacramentos</Link></li>
              <li><Link href="/pastorais" className="text-white/70 hover:text-white transition-colors">Pastorais</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm tracking-widest uppercase mb-6 text-secondary">Contato</h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-4 h-4 text-secondary shrink-0 mt-1 stroke-[1.5]" />
                <span className="leading-relaxed">Rua Cel. Quito Junqueira, S/N<br/>Centro, Sertãozinho - SP</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Phone className="w-4 h-4 text-secondary shrink-0 stroke-[1.5]" />
                <span>(16) 3942-0000</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Mail className="w-4 h-4 text-secondary shrink-0 stroke-[1.5]" />
                <span>secretaria@paroquiaaparecida.org.br</span>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="font-display text-sm tracking-widest uppercase mb-6 text-secondary">Secretaria</h4>
            <ul className="space-y-3 text-sm font-light text-white/70">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Seg - Sex</span>
                <span>08:00 - 17:30</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Sábado</span>
                <span>08:00 - 12:00</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Domingo</span>
                <span>Fechado</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-center text-xs font-light tracking-wide text-white/50">
          <p>&copy; {new Date().getFullYear()} Paróquia Nossa Senhora Aparecida. Sertãozinho - SP.</p>
        </div>
      </div>
    </footer>
  );
}
