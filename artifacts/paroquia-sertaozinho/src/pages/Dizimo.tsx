import { Heart, CreditCard, Building2, QrCode } from "lucide-react";

export default function Dizimo() {
  return (
    <main className="w-full pt-20">
      {/* Page Header */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-4 block">
            Paróquia Nossa Senhora Aparecida
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-normal text-white mb-4">
            Dízimo e Doações
          </h1>
          <div className="w-12 h-px bg-secondary mt-6"></div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-background border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl text-primary mb-4" id="dizimista">
              Seja um Dizimista
            </h2>
            <div className="w-12 h-px bg-secondary mb-8"></div>
            <p className="text-muted-foreground font-light leading-relaxed text-lg mb-6">
              O dízimo é uma expressão de fé e gratidão a Deus. Ao contribuir com 10% de seus rendimentos, você participa ativamente da missão evangelizadora da nossa paróquia, sustentando as obras sociais, a manutenção do templo e os serviços pastorais.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed text-lg">
              "Trazei todos os dízimos à casa do tesouro, para que haja mantimento na minha casa." (Malaquias 3:10)
            </p>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-display text-3xl text-primary mb-4">
              O que sustenta o dízimo
            </h2>
            <div className="w-12 h-px bg-secondary"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Heart,
                title: "Obras Sociais",
                desc: "Apoio às famílias em vulnerabilidade, distribuição de cestas básicas e ação junto às comunidades carentes da nossa cidade.",
              },
              {
                icon: Building2,
                title: "Manutenção do Templo",
                desc: "Conservação e melhorias da Igreja Matriz, das capelas e dos espaços de celebração e convivência paroquial.",
              },
              {
                icon: Heart,
                title: "Pastorais e Missões",
                desc: "Sustento das atividades pastorais, catequese, grupos de jovens e projetos missionários da paróquia.",
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col p-6 border-l border-secondary/30 bg-white">
                <div className="text-secondary mb-6">
                  <item.icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-display text-xl mb-3 text-primary">{item.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Contribuir */}
      <section className="py-20 bg-background border-t border-gray-100" id="como-contribuir">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-display text-3xl text-primary mb-4">
              Como Contribuir
            </h2>
            <div className="w-12 h-px bg-secondary"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="doacoes">
            {/* Transferência */}
            <div className="p-8 border border-gray-100">
              <div className="text-secondary mb-4">
                <CreditCard className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="font-display text-xl text-primary mb-3">Transferência Bancária</h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Realize sua contribuição via transferência bancária diretamente para a conta da paróquia. Guarde o comprovante e informe à secretaria.
              </p>
              <div className="text-sm text-muted-foreground space-y-1">
                <p><span className="font-medium text-primary">Banco:</span> <span className="font-light">000</span></p>
                <p><span className="font-medium text-primary">Agência:</span> <span className="font-light">0000-0</span></p>
                <p><span className="font-medium text-primary">Conta:</span> <span className="font-light">000000-0</span></p>
                <p><span className="font-medium text-primary">CNPJ:</span> <span className="font-light">00.000.000/0001-00</span></p>
              </div>
            </div>

            {/* PIX */}
            <div className="p-8 border border-gray-100">
              <div className="text-secondary mb-4">
                <QrCode className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="font-display text-xl text-primary mb-3">PIX</h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Faça sua doação de forma rápida e prática via PIX. Use a chave abaixo ou leia o QR Code na secretaria paroquial.
              </p>
              <div className="inline-block bg-muted/50 px-6 py-3 border border-secondary/20">
                <p className="text-sm text-muted-foreground font-light">Chave PIX (CNPJ):</p>
                <p className="font-display text-lg text-primary">00.000.000/0001-00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-normal text-white mb-4">
            Dúvidas? Fale conosco
          </h2>
          <p className="text-white/70 font-light mb-8 max-w-xl mx-auto">
            Nossa equipe da secretaria está pronta para ajudá-lo a se tornar um dizimista e participar ainda mais da vida paroquial.
          </p>
          <a
            href="/contato"
            className="inline-block px-8 py-3 bg-secondary text-white text-sm font-semibold tracking-wider uppercase hover:bg-secondary/90 transition-colors"
          >
            Entre em Contato
          </a>
        </div>
      </section>
    </main>
  );
}
