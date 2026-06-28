import { Heart, Mail, Smartphone, Building2, QrCode, Phone } from "lucide-react";

const PHONE_DIZIMISTA = "5516991012308";

export default function Dizimo() {
  return (
    <main className="w-full pt-20">

      {/* Botão flutuante fixo no topo — Torne-se um Dizimista */}
      <a
        href={`https://wa.me/${PHONE_DIZIMISTA}?text=Ol%C3%A1%2C%20gostaria%20de%20me%20tornar%20um%20dizimista!`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-16 right-4 z-50 flex items-center gap-2 bg-secondary text-white px-4 py-2.5 shadow-lg rounded-full text-xs font-bold tracking-wider uppercase hover:bg-secondary/90 transition-all hover:shadow-xl hover:scale-105"
        style={{ boxShadow: "0 4px 24px rgba(212,175,55,0.35)" }}
      >
        <Phone className="w-3.5 h-3.5 shrink-0" />
        <span className="hidden sm:inline">Torne-se Dizimista</span>
        <span className="sm:hidden">Dizimista</span>
      </a>

      {/* ── DÍZIMO ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-4 block">
            Paróquia Nossa Senhora Aparecida
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-normal text-white mb-4">
            Dízimo
          </h1>
          <div className="w-12 h-px bg-secondary mt-6"></div>
        </div>
      </section>

      {/* Intro Dízimo */}
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

      {/* Como contribuir com o Dízimo */}
      <section className="py-20 bg-background border-t border-gray-100" id="como-contribuir-dizimo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-display text-3xl text-primary mb-4">
              Como Contribuir com o Dízimo
            </h2>
            <div className="w-12 h-px bg-secondary"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* PIX Dízimo — Email */}
            <div className="p-8 border border-gray-100">
              <div className="text-secondary mb-4">
                <Mail className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="font-display text-xl text-primary mb-3">PIX — Dízimo</h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-5">
                Faça sua contribuição de dízimo via PIX usando o e-mail da secretaria da Matriz.
              </p>
              <div className="inline-block bg-muted/50 px-6 py-4 border border-secondary/20 w-full">
                <p className="text-sm text-muted-foreground font-light mb-1">Chave PIX (E-mail):</p>
                <p className="font-display text-lg text-primary break-all">secret.matriz@hotmail.com</p>
              </div>
            </div>

            {/* Coletas e Intenções */}
            <div className="p-8 border border-gray-100">
              <div className="text-secondary mb-4">
                <QrCode className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="font-display text-xl text-primary mb-3">Coletas e Intenções</h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-5">
                Para intenções de missas, coletas e demais contribuições gerais, utilize o CNPJ da paróquia.
              </p>
              <div className="inline-block bg-muted/50 px-6 py-4 border border-secondary/20 w-full">
                <p className="text-sm text-muted-foreground font-light mb-1">CNPJ:</p>
                <p className="font-display text-lg text-primary">45.231.560/0015-90</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Dízimo */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-normal text-white mb-4">
            Quer se tornar dizimista?
          </h2>
          <p className="text-white/70 font-light mb-8 max-w-xl mx-auto">
            Entre em contato com a nossa equipe pelo WhatsApp e dê esse passo de fé!
          </p>
          <a
            href={`https://wa.me/${PHONE_DIZIMISTA}?text=Ol%C3%A1%2C%20gostaria%20de%20me%20tornar%20um%20dizimista!`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-secondary text-white text-sm font-semibold tracking-wider uppercase hover:bg-secondary/90 transition-colors"
          >
            Torne-se Dizimista
          </a>
        </div>
      </section>

      {/* ── DOAÇÃO ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-background border-t-4 border-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-4 block">
            Paróquia Nossa Senhora Aparecida
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-normal text-primary mb-4">
            Doação
          </h2>
          <div className="w-12 h-px bg-secondary mt-2 mb-8"></div>
          <div className="max-w-3xl">
            <p className="text-muted-foreground font-light leading-relaxed text-lg mb-6">
              Além do dízimo, você pode fazer uma doação espontânea para a paróquia ou contribuir especialmente para a
              reforma e conservação da nossa Matriz. Toda oferta é um gesto de amor a Deus e à nossa comunidade.
            </p>
          </div>
        </div>
      </section>

      {/* Formas de Doação */}
      <section className="pb-20 bg-background" id="doacoes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h3 className="font-display text-3xl text-primary mb-4">
              Formas de Doação
            </h3>
            <div className="w-12 h-px bg-secondary"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Doação Espontânea — CNPJ */}
            <div className="p-8 border border-gray-100">
              <div className="text-secondary mb-4">
                <Building2 className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="font-display text-xl text-primary mb-1">Doação Espontânea</h3>
              <p className="text-xs uppercase tracking-widest text-secondary font-semibold mb-4">PIX via CNPJ</p>
              <p className="text-muted-foreground font-light leading-relaxed mb-5">
                Para doações espontâneas à paróquia, utilize o CNPJ como chave PIX.
              </p>
              <div className="inline-block bg-muted/50 px-6 py-4 border border-secondary/20 w-full">
                <p className="text-sm text-muted-foreground font-light mb-1">Chave PIX (CNPJ):</p>
                <p className="font-display text-lg text-primary">45.231.560/0015-90</p>
              </div>
            </div>

            {/* Reforma da Paróquia — Celular */}
            <div className="p-8 border border-secondary/30 bg-secondary/3">
              <div className="text-secondary mb-4">
                <Smartphone className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="font-display text-xl text-primary mb-1">Reforma da Paróquia</h3>
              <p className="text-xs uppercase tracking-widest text-secondary font-semibold mb-4">PIX via Celular</p>
              <p className="text-muted-foreground font-light leading-relaxed mb-5">
                Contribua com a restauração e conservação da nossa Matriz. Use o celular abaixo como chave PIX.
              </p>
              <div className="inline-block bg-white px-6 py-4 border border-secondary/30 w-full">
                <p className="text-sm text-muted-foreground font-light mb-1">Chave PIX (Celular):</p>
                <p className="font-display text-lg text-primary">(16) 99196-4553</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-primary/5 border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-normal text-primary mb-4">
            Dúvidas? Fale conosco
          </h2>
          <p className="text-muted-foreground font-light mb-8 max-w-xl mx-auto">
            Nossa equipe da secretaria está pronta para ajudá-lo a participar ainda mais da vida paroquial.
          </p>
          <a
            href="/contato"
            className="inline-block px-8 py-3 bg-primary text-white text-sm font-semibold tracking-wider uppercase hover:bg-primary/90 transition-colors"
          >
            Entre em Contato
          </a>
        </div>
      </section>
    </main>
  );
}
