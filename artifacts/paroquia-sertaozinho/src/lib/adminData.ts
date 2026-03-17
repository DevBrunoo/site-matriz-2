export interface Evento {
  id: string;
  dia: string;
  mes: string;
  ano: string;
  titulo: string;
  descricao: string;
  local: string;
  horario: string;
  categoria: string;
}

export interface Aviso {
  id: string;
  titulo: string;
  texto: string;
  ativo: boolean;
}

export interface HorarioMissa {
  id: string;
  local: string;
  dia: string;
  horarios: string;
}

const EVENTOS_KEY = "admin_eventos";
const AVISOS_KEY = "admin_avisos";
const HORARIOS_KEY = "admin_horarios";

const defaultEventos: Evento[] = [
  { id: "1", dia: "12", mes: "Out", ano: "2025", titulo: "Festa da Padroeira", descricao: "Solenidade de Nossa Senhora Aparecida com missa solene e procissão.", local: "Igreja Matriz", horario: "09h00 e 18h30", categoria: "Solenidade" },
  { id: "2", dia: "08", mes: "Dez", ano: "2025", titulo: "Imaculada Conceição", descricao: "Missa solene com procissão e quermesse paroquial.", local: "Igreja Matriz", horario: "09h00 e 19h30", categoria: "Solenidade" },
  { id: "3", dia: "25", mes: "Dez", ano: "2025", titulo: "Missa do Natal", descricao: "Missa da Meia-Noite e Missa do Dia com o Coral Paroquial.", local: "Igreja Matriz", horario: "00h00 e 09h00", categoria: "Solenidade" },
];

const defaultAvisos: Aviso[] = [
  { id: "1", titulo: "Agenda de Intenções de Missa", texto: "Para solicitar intenções de missa, procure a secretaria paroquial com antecedência.", ativo: true },
];

const defaultHorarios: HorarioMissa[] = [
  { id: "1", local: "Igreja Matriz", dia: "Segunda a Sexta", horarios: "07h00" },
  { id: "2", local: "Igreja Matriz", dia: "Sábado", horarios: "08h00, 18h30" },
  { id: "3", local: "Igreja Matriz", dia: "Domingo", horarios: "07h00, 09h00, 11h00, 18h30" },
  { id: "4", local: "Capela São José", dia: "Quarta-feira", horarios: "19h00" },
  { id: "5", local: "Capela São José", dia: "Domingo", horarios: "08h00" },
  { id: "6", local: "Capela Sant'Ana", dia: "Sexta-feira", horarios: "19h00" },
  { id: "7", local: "Capela Sant'Ana", dia: "Domingo", horarios: "10h00" },
];

function load<T>(key: string, defaults: T[]): T[] {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaults;
  } catch {
    return defaults;
  }
}

function save<T>(key: string, data: T[]): void {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getEventos(): Evento[] { return load(EVENTOS_KEY, defaultEventos); }
export function saveEventos(data: Evento[]): void { save(EVENTOS_KEY, data); }

export function getAvisos(): Aviso[] { return load(AVISOS_KEY, defaultAvisos); }
export function saveAvisos(data: Aviso[]): void { save(AVISOS_KEY, data); }

export function getHorarios(): HorarioMissa[] { return load(HORARIOS_KEY, defaultHorarios); }
export function saveHorarios(data: HorarioMissa[]): void { save(HORARIOS_KEY, data); }

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}
