import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Sacramentos() {
  const sacramentos = [
    {
      id: "batismo",
      title: "Batismo",
      desc: "O Batismo é o fundamento de toda a vida cristã, a porta da vida no Espírito e a porta que abre o acesso aos demais sacramentos.",
      info: "Cursos de preparação todo 2º sábado do mês. Inscrições na secretaria paroquial com antecedência."
    },
    {
      id: "confissao",
      title: "Confissão (Penitência)",
      desc: "O sacramento da Reconciliação concede o perdão dos pecados cometidos após o Batismo.",
      info: "Atendimento de confissões: Quintas-feiras das 15h às 17h e Sextas-feiras após a missa das 19h."
    },
    {
      id: "eucaristia",
      title: "Eucaristia",
      desc: "A Eucaristia é o coração e o cume da vida da Igreja, pois nela Cristo associa sua Igreja e todos os seus membros ao seu sacrifício.",
      info: "Inscrições para catequese infantil abertas em Fevereiro. Jovens e adultos procurar a secretaria."
    },
    {
      id: "crisma",
      title: "Crisma (Confirmação)",
      desc: "A Confirmação aperfeiçoa a graça batismal; é o sacramento que dá o Espírito Santo para enraizar-nos mais profundamente na filiação divina.",
      info: "Preparação para jovens a partir de 14 anos. Encontros aos domingos pela manhã."
    },
    {
      id: "matrimonio",
      title: "Matrimônio",
      desc: "A aliança matrimonial, pela qual o homem e a mulher constituem entre si uma comunhão da vida toda, é ordenada ao bem dos cônjuges.",
      info: "Agendar com no mínimo 6 meses de antecedência. Curso de noivos obrigatório."
    },
    {
      id: "pastoral-do-batismo",
      title: "Pastoral do Batismo",
      desc: "Pastoral dedicada a acolher e preparar os pais e padrinhos para a celebração do Batismo, o primeiro sacramento da vida cristã.",
      info: "Catequese batismal: 1° domingo às 09h, 2° e 3° sábado às 17h. Data do batismo costuma ser no 4° domingo."
    }
  ];

  return (
    <main className="pt-24 pb-20">
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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sacramentos.map((s, index) => (
            <div 
              key={s.id} 
              id={s.id}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg border border-border flex flex-col ${index === sacramentos.length - 1 && sacramentos.length % 2 !== 0 ? 'md:col-span-2 md:max-w-3xl md:mx-auto' : ''}`}
            >
              <div className="p-8 flex-1">
                <h2 className="text-2xl font-bold text-primary mb-4 font-display">{s.title}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {s.desc}
                </p>
                <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                  <h4 className="font-semibold text-foreground mb-1 text-sm uppercase tracking-wider">Informações Práticas</h4>
                  <p className="text-sm text-muted-foreground">{s.info}</p>
                </div>
              </div>
              <div className="bg-gray-50 p-6 border-t border-border mt-auto flex justify-between items-center">
                <span className="text-sm font-medium text-foreground">Precisa de ajuda?</span>
                <Link href="/contato">
                  <Button variant="outline" size="sm">Falar com a Secretaria</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
