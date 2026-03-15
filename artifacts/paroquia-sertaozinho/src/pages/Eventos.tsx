import { Calendar } from "lucide-react";

const eventos = [
  {
    data: { dia: "12", mes: "Out", ano: "2025" },
    titulo: "Novena de Nossa Senhora Aparecida",
    descricao: "Início da novena preparatória para a Festa da Padroeira, com missa e procissão diária durante 9 dias.",
    local: "Igreja Matriz",
    horario: "19h30",
    categoria: "Celebração",
  },
  {
    data: { dia: "12", mes: "Out", ano: "2025" },
    titulo: "Festa da Padroeira — Nossa Senhora Aparecida",
    descricao: "Solenidade da Padroeira do Brasil. Missa Solene com procissão luminosa pelas ruas do centro histórico de Sertãozinho.",
    local: "Igreja Matriz e Centro",
    horario: "09h00 e 18h30",
    categoria: "Solenidade",
  },
  {
    data: { dia: "22", mes: "Out", ano: "2025" },
    titulo: "Encontro Diocesano de Jovens",
    descricao: "Reunião de jovens de toda a diocese com dinâmicas, adoração, palestras e missa de encerramento.",
    local: "Salão Paroquial",
    horario: "09h00 às 22h00",
    categoria: "Juventude",
  },
  {
    data: { dia: "01", mes: "Nov", ano: "2025" },
    titulo: "Finados — Missa no Cemitério",
    descricao: "Celebração eucarística no cemitério municipal em memória dos nossos irmãos falecidos.",
    local: "Cemitério Municipal de Sertãozinho",
    horario: "08h00",
    categoria: "Celebração",
  },
  {
    data: { dia: "05", mes: "Nov", ano: "2025" },
    titulo: "Bazar Beneficente Paroquial",
    descricao: "Venda de roupas, artesanatos e alimentos em prol da manutenção da paróquia e obras sociais.",
    local: "Pátio da Igreja Matriz",
    horario: "08h00 às 17h00",
    categoria: "Solidariedade",
  },
  {
    data: { dia: "29", mes: "Nov", ano: "2025" },
    titulo: "Início do Advento",
    descricao: "Abertura do Tempo do Advento com a bênção da Coroa e início do ciclo de preparação para o Natal.",
    local: "Igreja Matriz",
    horario: "19h30",
    categoria: "Liturgia",
  },
  {
    data: { dia: "08", mes: "Dez", ano: "2025" },
    titulo: "Imaculada Conceição",
    descricao: "Missa solene em honra à Imaculada Conceição de Maria, com procissão e quermesse paroquial.",
    local: "Igreja Matriz",
    horario: "09h00 e 19h30",
    categoria: "Solenidade",
  },
  {
    data: { dia: "25", mes: "Dez", ano: "2025" },
    titulo: "Missa do Natal",
    descricao: "Celebração do Nascimento de Jesus Cristo. Missa da Meia-Noite e Missa do Dia com participação do Coral Paroquial.",
    local: "Igreja Matriz",
    horario: "00h00 e 09h00",
    categoria: "Solenidade",
  },
];

const categoriaCores: Record<string, string> = {
  Celebração: "bg-blue-50 text-blue-700",
  Solenidade: "bg-secondary/10 text-secondary",
  Juventude: "bg-green-50 text-green-700",
  Solidariedade: "bg-orange-50 text-orange-700",
  Liturgia: "bg-purple-50 text-purple-700",
};

export default function Eventos() {
  return (
    <main className="w-full pt-20">
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-secondary font-medium tracking-[0.2em] uppercase text-xs mb-4 block">
            Agenda
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            Eventos
          </h1>
          <div className="w-12 h-px bg-secondary mt-6"></div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-muted-foreground font-light leading-relaxed text-lg max-w-3xl mb-16">
            Acompanhe os principais eventos da nossa paróquia. Participe e fortaleça sua fé junto com a comunidade.
          </p>

          <div className="flex flex-col gap-0">
            {eventos.map((evento, i) => (
              <div
                key={i}
                className="flex gap-6 md:gap-10 py-8 border-b border-gray-100 hover:bg-muted/30 transition-colors px-4 -mx-4"
              >
                <div className="flex flex-col items-center justify-start shrink-0 w-14 pt-1">
                  <span className="text-2xl font-bold text-primary leading-none">{evento.data.dia}</span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-secondary mt-1">{evento.data.mes}</span>
                  <span className="text-xs text-muted-foreground mt-1">{evento.data.ano}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className={`text-xs font-semibold px-2 py-0.5 uppercase tracking-wider ${categoriaCores[evento.categoria] || "bg-gray-100 text-gray-600"}`}>
                      {evento.categoria}
                    </span>
                    <span className="text-xs text-muted-foreground font-light flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {evento.horario}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{evento.titulo}</h3>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed mb-2">{evento.descricao}</p>
                  <p className="text-xs text-secondary font-medium uppercase tracking-wide">{evento.local}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
