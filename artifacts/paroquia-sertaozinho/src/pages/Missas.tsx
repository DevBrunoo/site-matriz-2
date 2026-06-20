import { PageHero } from "@/components/PageHero";

const WA_LINK = "https://wa.me/5516994648668";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-primary mb-1 border-l-4 border-secondary pl-3">{title}</h2>
      <div className="mt-4 space-y-2">{children}</div>
    </div>
  );
}

function DayBlock({ day, items }: { day: string; items: string[] }) {
  return (
    <div className="py-3 border-b border-gray-100 last:border-0">
      <p className="text-xs font-bold tracking-widest uppercase text-secondary mb-2">{day}</p>
      <ul className="space-y-1">
        {items.map((item, i) => (
          <li key={i} className="text-sm font-light text-foreground/80 pl-3 relative before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:bg-secondary/60 before:rounded-full">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Missas() {
  return (
    <main className="w-full">
      <PageHero category="Matriz" title="Programação da Paróquia" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-14">

        {/* Horários Fixos */}
        <Section title="Horários de Missas (fixos)">
          <DayBlock day="Domingo" items={[
            "07h00 — Igreja Matriz · Nossa Senhora Aparecida",
            "09h00 — Igreja Matriz · Nossa Senhora Aparecida",
            "17h00 — Capela São Vicente de Paulo",
            "19h00 — Igreja Matriz · Nossa Senhora Aparecida",
          ]} />
          <DayBlock day="Segunda-feira" items={[
            "Não há missa",
          ]} />
          <DayBlock day="Terça-feira" items={[
            "19h00 — Igreja Matriz · Nossa Senhora Aparecida",
          ]} />
          <DayBlock day="Quarta-feira" items={[
            "19h00 — Igreja Matriz · Nossa Senhora Aparecida",
          ]} />
          <DayBlock day="Quinta-feira" items={[
            "07h00 — Capela São Vicente de Paulo",
          ]} />
          <DayBlock day="Sexta-feira" items={[
            "15h00 — Igreja Matriz · Nossa Senhora Aparecida",
          ]} />
          <DayBlock day="Sábado" items={[
            "17h00 — Capela Nossa Senhora do Rosário",
            "19h00 — Igreja Matriz · Nossa Senhora Aparecida",
          ]} />
        </Section>

        {/* Confissões */}
        <Section title="Confissões e Atendimento">
          <DayBlock day="Quarta-feira" items={[
            "15h00 – 17h00",
            "18h00 – 18h30",
          ]} />
          <DayBlock day="Quinta-feira" items={[
            "Com agendamento na secretaria",
          ]} />
          <DayBlock day="Sexta-feira" items={[
            "10h00 – 12h00",
            "16h00 – 17h00",
          ]} />
        </Section>

        {/* Encontro das Pastorais */}
        <Section title="Encontro das Pastorais">
          <DayBlock day="Domingo" items={[
            "18h30 — Movimento Jovem TLC (Centro Catequético)",
          ]} />
          <DayBlock day="Segunda-feira" items={[
            "19h00 — Grupo de Oração Rainha da Paz (Matriz)",
            "20h00 — Pastoral da Saúde (Capela Nossa Senhora do Rosário)",
          ]} />
          <DayBlock day="Quarta-feira" items={[
            "19h30 — Recitação do Santo Terço",
          ]} />
          <DayBlock day="Quinta-feira" items={[
            "19h30 — Terço dos Homens (Capela São Vicente de Paulo)",
            "20h00 — Ensaio do Coral (exceto a 3ª quinta do mês)",
          ]} />
          <DayBlock day="Toda 3ª quinta-feira do mês" items={[
            "20h00 — Adoração ao Santíssimo Sacramento",
          ]} />
          <DayBlock day="Sexta-feira" items={[
            "20h00 — Pastoral da Sobriedade (Centro Catequético)",
          ]} />
          <DayBlock day="Todo 2º sábado do mês" items={[
            "17h00 — Reunião das Associações (Matriz)",
            "18h00 — Ofício da Imaculada (Matriz)",
          ]} />
          <DayBlock day="Todo 3º sábado do mês" items={[
            "14h00 — Reunião dos Servidores do Altar",
          ]} />
        </Section>

        {/* Nota */}
        <p className="text-sm font-light text-muted-foreground border-t border-gray-100 pt-8">
          Horários sujeitos a alterações. Para confirmar, entre em contato pela secretaria:{" "}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-secondary font-medium hover:underline">
            WhatsApp (16) 99464-8668
          </a>{" "}
          ou telefone <span className="font-medium text-primary">(16) 3947-6524</span>.
        </p>

      </div>
    </main>
  );
}
