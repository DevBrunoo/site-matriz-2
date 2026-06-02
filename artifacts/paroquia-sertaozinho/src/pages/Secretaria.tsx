import { Clock, Phone, Mail, MapPin } from "lucide-react";

export default function Secretaria() {
  return (
    <main className="w-full pt-20">
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-4 block">
            Paróquia Nossa Senhora Aparecida
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            Secretaria Paroquial
          </h1>
          <div className="w-12 h-px bg-secondary mt-6"></div>
        </div>
      </section>

      <section className="py-20 bg-background border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Horários e Contato */}
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">Horário de Atendimento</h2>
              <div className="w-10 h-px bg-secondary mb-8"></div>

              <div className="flex flex-col gap-4 mb-10">
                {[
                  { dia: "Terça a Sexta", horario: "08h00 às 12h00 e 13h30 às 17h30" },
                  { dia: "Sábado", horario: "08h00 às 12h00" },
                ].map((item) => (
                  <div key={item.dia} className="flex items-start gap-4 py-4 border-b border-gray-100">
                    <Clock className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-primary text-sm">{item.dia}</p>
                      <p className="text-muted-foreground font-light text-sm">{item.horario}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-semibold text-primary mb-4">Contato</h2>
              <div className="w-10 h-px bg-secondary mb-8"></div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-muted-foreground font-light">(16) 3942-0000</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-muted-foreground font-light">secretaria@nossasenhoraaparecida.org.br</span>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground font-light">Rua Cel. Quito Junqueira, s/n — Centro, Sertãozinho - SP</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-muted-foreground font-light leading-relaxed text-base max-w-3xl">
            <strong className="text-primary font-semibold">Atenção:</strong> Para agendamentos de sacramentos, recomendamos o contato prévio por telefone ou e-mail para verificar disponibilidade e documentação necessária. O atendimento presencial é realizado exclusivamente nos horários indicados acima.
          </p>
        </div>
      </section>
    </main>
  );
}
