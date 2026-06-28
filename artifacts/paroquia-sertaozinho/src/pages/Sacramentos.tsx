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
    <main className="pt-12 sm:pt-14 pb-20">
      <section className="bg-primary py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/damask-seamless.png')]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display text-white">Sacramentos</h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-white/90">
            "Os sete sacramentos tocam todas as etapas e todos os momentos importantes da vida do cristão." (CIC 1210)
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col gap-10">
        {sacramentos.map((s, index) => {
          const imgRight = index % 2 === 1;
          return (
            <div
              key={s.id}
              id={s.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-border flex flex-col sm:flex-row"
              style={{ minHeight: 0 }}
            >
              {/* Imagem — alterna lado */}
              <div
                className={`sm:w-64 md:w-72 lg:w-80 shrink-0 flex items-stretch ${imgRight ? "sm:order-last" : ""}`}
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-60 sm:h-full object-contain object-center bg-gray-50"
                  loading="lazy"
                />
              </div>

              {/* Conteúdo */}
              <div className="flex flex-col flex-1 p-7 sm:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-6 h-px bg-secondary shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-bold text-primary font-display leading-tight">
                    {s.title}
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1 text-[15px]">
                  {s.desc}
                </p>
                <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                  <h4 className="font-semibold text-foreground mb-1 text-sm uppercase tracking-wider">
                    Informações Práticas
                  </h4>
                  <p className="text-sm text-muted-foreground">{s.info}</p>
                </div>
                <div className="mt-5 pt-5 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-sm font-medium text-foreground">Precisa de ajuda?</span>
                  <a
                    href="/contato"
                    className="inline-flex items-center gap-1.5 px-4 py-2 border border-border rounded-md text-sm font-medium text-foreground hover:bg-gray-100 transition-colors"
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
