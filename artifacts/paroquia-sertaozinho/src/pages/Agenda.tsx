import { Calendar, Clock, MapPin } from "lucide-react";

export default function Agenda() {
  const missas = [
    { day: "Segunda-feira", times: ["19:00"] },
    { day: "Terça-feira", times: ["07:00", "19:00"] },
    { day: "Quarta-feira", times: ["19:00 (Novena)"] },
    { day: "Quinta-feira", times: ["07:00", "19:00"] },
    { day: "Sexta-feira", times: ["19:00"] },
    { day: "Sábado", times: ["18:30"] },
    { day: "Domingo", times: ["07:00", "09:30", "19:00"] },
  ];

  const eventos = [
    { date: "15 de Outubro", title: "Festa da Padroeira", local: "Igreja Matriz", time: "Dia todo" },
    { date: "22 de Outubro", title: "Encontro de Jovens", local: "Salão Paroquial", time: "19:00 às 22:00" },
    { date: "05 de Novembro", title: "Bazar Beneficente", local: "Pátio da Igreja", time: "08:00 às 17:00" },
    { date: "12 de Novembro", title: "Batizados", local: "Igreja Matriz", time: "09:00" },
  ];

  return (
    <main className="pt-24 pb-20">
      <section className="bg-primary py-16 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display text-white">Agenda Paroquial</h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-white/90">
            Acompanhe os horários de nossas celebrações e eventos.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Missas */}
          <div id="missas">
            <div className="flex items-center gap-3 mb-8">
              <Clock className="w-8 h-8 text-secondary" />
              <h2 className="text-3xl font-bold">Horários de Missa</h2>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden">
              <table className="w-full">
                <thead className="bg-primary/5 border-b border-border">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold text-primary">Dia da Semana</th>
                    <th className="px-6 py-4 text-left font-bold text-primary">Horários</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {missas.map((item) => (
                    <tr key={item.day} className="hover:bg-primary/5 transition-colors">
                      <td className="px-6 py-4 font-medium">{item.day}</td>
                      <td className="px-6 py-4 text-muted-foreground">
                        {item.times.map((t, i) => (
                          <span key={i} className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-md text-sm font-semibold mr-2 mb-2">
                            {t}
                          </span>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-4 italic">
              * A Secretaria da Matriz atende de segunda a sexta, das 8h às 17h30.
            </p>
          </div>

          {/* Eventos */}
          <div id="eventos">
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="w-8 h-8 text-secondary" />
              <h2 className="text-3xl font-bold">Próximos Eventos</h2>
            </div>

            <div className="space-y-4">
              {eventos.map((ev, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-md border border-border flex flex-col sm:flex-row gap-6 hover:shadow-lg transition-shadow">
                  <div className="bg-primary text-white p-4 rounded-lg text-center min-w-[120px] flex flex-col justify-center">
                    <span className="text-xl font-bold leading-tight">{ev.date.split(' ')[0]}</span>
                    <span className="text-sm">{ev.date.split(' ').slice(1).join(' ')}</span>
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-2 text-foreground">{ev.title}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {ev.time}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {ev.local}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div id="via-sacra" className="mt-12 bg-primary/5 p-8 rounded-2xl border border-primary/20">
              <h3 className="text-2xl font-bold text-primary mb-3">Via Sacra</h3>
              <p className="text-foreground">
                Durante o tempo da Quaresma, realizamos a Via Sacra todas as sextas-feiras às 19:30, após a Santa Missa. Venha percorrer os passos de Jesus.
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
