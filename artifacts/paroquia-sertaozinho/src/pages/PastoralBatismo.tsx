import { PageHero } from "@/components/PageHero";
import { FileText, Clock, AlertCircle } from "lucide-react";

export default function PastoralBatismo() {
  return (
    <main className="w-full">
      <PageHero
        category="Sacramentos"
        title="Pastoral do Batismo"
        subtitle="Acolhendo e preparando as famílias para a celebração do primeiro sacramento da vida cristã"
      />

      <section className="py-16 sm:py-20 bg-background border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 text-muted-foreground font-light leading-relaxed text-[16px]">
          <p>
            A Pastoral do Batismo tem a missão de acolher, orientar e preparar os pais e padrinhos para a celebração do Batismo, primeiro sacramento da vida cristã. Por meio de encontros de formação, a pastoral ajuda as famílias a compreenderem a riqueza desse sacramento e a assumirem o compromisso de educar a criança na fé católica.
          </p>
          <p>
            O Batismo é a porta de entrada para a vida cristã. Nele, somos libertados do pecado, nos tornamos filhos de Deus, membros da Igreja e participantes da missão de Cristo. Por isso, a preparação dos pais e padrinhos é um momento importante de reflexão sobre a responsabilidade de testemunhar a fé e transmitir os valores cristãos às novas gerações.
          </p>
          <p>
            A Pastoral do Batismo busca acompanhar as famílias com espírito de acolhida e evangelização, ajudando-as a viver este momento não apenas como uma celebração, mas como o início de uma caminhada de fé e comunhão com a Igreja.
          </p>
          <p>
            Para informações sobre inscrições, documentação necessária, datas dos encontros de preparação e celebrações do Batismo, procure a secretaria paroquial.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-white border border-gray-100 p-8 hover:border-secondary/30 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-secondary/10 flex items-center justify-center shrink-0">
                <FileText className="w-4 h-4 text-secondary" />
              </div>
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">Documentos necessários</h2>
            </div>
            <ul className="space-y-4 text-[15px] text-muted-foreground font-light">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rotate-45 bg-secondary shrink-0 mt-2" />
                <span>Xerox da certidão de nascimento da criança</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rotate-45 bg-secondary shrink-0 mt-2" />
                <span>Xerox do comprovante de residência dos pais da criança</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rotate-45 bg-secondary shrink-0 mt-2" />
                <span>Nome completo dos padrinhos</span>
              </li>
            </ul>
            <div className="mt-6 flex items-start gap-3 bg-secondary/5 p-4 border border-secondary/20">
              <AlertCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
              <p className="text-[13px] text-muted-foreground font-light leading-relaxed">
                <strong className="text-primary font-semibold">Atenção:</strong> é necessário que os pais ou padrinhos sejam casados na Igreja Católica e que os padrinhos tenham recebido o sacramento do Crisma.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-100 p-8 hover:border-secondary/30 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-secondary/10 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4 text-secondary" />
              </div>
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">Catequese Batismal</h2>
            </div>
            <div className="space-y-0">
              {[
                { label: "1° domingo", info: "às 09h00" },
                { label: "2° e 3° sábado", info: "às 17h00" },
                { label: "Data do Batismo", info: "Costuma ser no 4° domingo" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0">
                  <span className="text-sm font-semibold text-primary">{item.label}</span>
                  <span className="text-sm text-muted-foreground font-light">{item.info}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-primary/5 border-t border-primary/8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-secondary" />
            <p className="text-primary font-medium text-sm">Mais informações na secretaria paroquial.</p>
          </div>
          <a
            href="/secretaria"
            className="shrink-0 bg-primary text-white px-6 py-2.5 text-xs font-semibold tracking-wider uppercase hover:bg-primary/90 transition-colors"
          >
            Fale com a Secretaria
          </a>
        </div>
      </section>
    </main>
  );
}
