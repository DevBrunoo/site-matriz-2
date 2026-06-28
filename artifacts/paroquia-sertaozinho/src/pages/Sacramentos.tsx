const BASE = import.meta.env.BASE_URL;

export default function Sacramentos() {
  const sacramentos = [
    {
      id: "batismo",
      title: "Batismo",
      desc: "O Batismo é o fundamento de toda a vida cristã, a porta da vida no Espírito e a porta que abre o acesso aos demais sacramentos.",
      info: "Cursos de preparação todo 2º sábado do mês. Inscrições na secretaria paroquial com antecedência.",
      img: `${BASE}sacramento-batismo.png`,
    },
    {
      id: "eucaristia",
      title: "Eucaristia",
      desc: "A Eucaristia é o coração e o cume da vida da Igreja, pois nela Cristo associa sua Igreja e todos os seus membros ao seu sacrifício.",
      info: "Inscrições para catequese infantil abertas em Fevereiro. Jovens e adultos procurar a secretaria.",
      img: `${BASE}sacramento-eucaristia.png`,
    },
    {
      id: "crisma",
      title: "Crisma (Confirmação)",
      desc: "A Confirmação aperfeiçoa a graça batismal; é o sacramento que dá o Espírito Santo para enraizar-nos mais profundamente na filiação divina.",
      info: "Preparação para jovens a partir de 14 anos. Encontros aos domingos pela manhã.",
      img: `${BASE}sacramento-crisma.png`,
    },
    {
      id: "matrimonio",
      title: "Matrimônio",
      desc: "A aliança matrimonial, pela qual o homem e a mulher constituem entre si uma comunhão da vida toda, é ordenada ao bem dos cônjuges.",
      info: "Agendar com no mínimo 6 meses de antecedência. Curso de noivos obrigatório.",
      img: `${BASE}sacramento-matrimonio.png`,
    },
    {
      id: "uncao-dos-enfermos",
      title: "Unção dos Enfermos",
      desc: "A Unção dos Enfermos é o sacramento que une o doente ao sofrimento redentor de Cristo, para seu próprio bem e para o bem de toda a Igreja.",
      info: "Para chamar o padre em casos de enfermidade grave, entre em contato com a secretaria paroquial.",
      img: `${BASE}sacramento-uncao.png`,
    },
    {
      id: "confissao",
      title: "Confissão (Penitência)",
      desc: "O sacramento da Reconciliação concede o perdão dos pecados cometidos após o Batismo.",
      info: "Atendimento de confissões: Quintas-feiras das 15h às 17h e Sextas-feiras após a missa das 19h.",
      img: `${BASE}sacramento-confissao.png`,
    },
  ];

  return (
    <main className="pt-12 sm:pt-14 pb-16">
      <section className="bg-primary py-12 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/damask-seamless.png')]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 font-display text-white">Sacramentos</h1>
          <div className="w-16 h-0.5 bg-secondary mx-auto mb-4"></div>
          <p className="text-base text-white/85 max-w-xl mx-auto">
            "Os sete sacramentos tocam todas as etapas e todos os momentos importantes da vida do cristão." (CIC 1210)
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-6">
        {sacramentos.map((s, index) => {
          const imgRight = index % 2 === 1;
          return (
            <div
              key={s.id}
              id={s.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-border flex flex-col sm:flex-row"
            >
              {/* Imagem — alterna lado, inteira e responsiva */}
              <div
                className={`sm:w-40 md:w-48 shrink-0 bg-gray-50 flex items-center justify-center ${imgRight ? "sm:order-last" : ""}`}
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-44 sm:h-full object-contain p-3"
                  loading="lazy"
                />
              </div>

              {/* Conteúdo */}
              <div className="flex flex-col flex-1 p-5 sm:p-6">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-5 h-px bg-secondary shrink-0" />
                  <h2 className="text-lg font-bold text-primary font-display leading-tight">
                    {s.title}
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4 flex-1 text-sm">
                  {s.desc}
                </p>
                <div className="bg-primary/5 p-3 rounded-lg border border-primary/10">
                  <h4 className="font-semibold text-foreground mb-1 text-xs uppercase tracking-wider">
                    Informações Práticas
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.info}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-xs font-medium text-foreground">Precisa de ajuda?</span>
                  <a
                    href="/contato"
                    className="inline-flex items-center gap-1 px-3 py-1.5 border border-border rounded-md text-xs font-medium text-foreground hover:bg-gray-100 transition-colors"
                  >
                    Falar com a Secretaria
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
