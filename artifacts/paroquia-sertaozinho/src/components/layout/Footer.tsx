import { Link } from "wouter";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t-[6px] border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full p-1">
                <img
                  src={`${import.meta.env.BASE_URL}logo.png`}
                  alt="Paróquia Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="%23D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 7L7 17M7 7l10 10"/></svg>';
                  }}
                />
              </div>
              <h3 className="font-display font-bold text-xl leading-tight">
                Paróquia Nossa Senhora<br/>Aparecida
              </h3>
            </div>
            <p className="text-white/80 text-sm">
              Sertãozinho - SP<br/>
              "Fazei tudo o que Ele vos disser" (Jo 2,5)
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-secondary">Navegação</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/80 hover:text-secondary transition-colors">Início</Link></li>
              <li><Link href="/historia" className="text-white/80 hover:text-secondary transition-colors">Nossa História</Link></li>
              <li><Link href="/agenda" className="text-white/80 hover:text-secondary transition-colors">Horários de Missa</Link></li>
              <li><Link href="/sacramentos" className="text-white/80 hover:text-secondary transition-colors">Sacramentos</Link></li>
              <li><Link href="/pastorais" className="text-white/80 hover:text-secondary transition-colors">Pastorais e Movimentos</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-secondary">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/80">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>Rua Cel. Quito Junqueira, S/N<br/>Centro, Sertãozinho - SP<br/>CEP: 14160-000</span>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span>(16) 3942-0000</span>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span>secretaria@paroquiaaparecida.org.br</span>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-secondary">Secretaria</h4>
            <ul className="space-y-2 text-white/80">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Seg - Sex:</span>
                <span>08:00 - 17:30</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Sábado:</span>
                <span>08:00 - 12:00</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Domingo:</span>
                <span>Fechado</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Paróquia Nossa Senhora Aparecida de Sertãozinho. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
