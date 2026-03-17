export interface Evento {
  id: string; dia: string; mes: string; ano: string;
  titulo: string; descricao: string; local: string; horario: string; categoria: string;
}
export interface Aviso {
  id: string; titulo: string; texto: string; ativo: boolean;
}
export interface HorarioMissa {
  id: string; local: string; dia: string; horarios: string;
}
export interface Poster {
  id: string; titulo: string; descricao: string; imageDataUrl: string; ativo: boolean;
}
export interface CapelaDado {
  id: string; nome: string; endereco: string; setor: string; missas: string; destaque: boolean;
}
export interface PadreDado {
  id: string; tipo: string; nome: string; ordenacao: string; bio: string; contato: string;
}
export interface ContentItem { label: string; info: string; }
export interface ContentBlock {
  key: string; titulo: string; subtitulo: string;
  descricao: string; citacao: string; itens: ContentItem[];
}

// ─── Default data ────────────────────────────────────────────────────────────

const defaultEventos: Evento[] = [
  { id: "1", dia: "12", mes: "Out", ano: "2025", titulo: "Festa da Padroeira", descricao: "Solenidade de Nossa Senhora Aparecida com missa solene e procissão.", local: "Igreja Matriz", horario: "09h00 e 18h30", categoria: "Solenidade" },
  { id: "2", dia: "08", mes: "Dez", ano: "2025", titulo: "Imaculada Conceição", descricao: "Missa solene com procissão e quermesse paroquial.", local: "Igreja Matriz", horario: "09h00 e 19h30", categoria: "Solenidade" },
  { id: "3", dia: "25", mes: "Dez", ano: "2025", titulo: "Missa do Natal", descricao: "Missa da Meia-Noite e do Dia com o Coral Paroquial.", local: "Igreja Matriz", horario: "00h00 e 09h00", categoria: "Solenidade" },
];

const defaultAvisos: Aviso[] = [
  { id: "1", titulo: "Intenções de Missa", texto: "Para solicitar intenções de missa, procure a secretaria paroquial com antecedência.", ativo: true },
];

const defaultHorarios: HorarioMissa[] = [
  { id: "1", local: "Igreja Matriz", dia: "Segunda a Sexta", horarios: "07h00" },
  { id: "2", local: "Igreja Matriz", dia: "Sábado", horarios: "08h00, 18h30" },
  { id: "3", local: "Igreja Matriz", dia: "Domingo", horarios: "07h00, 09h00, 11h00, 18h30" },
  { id: "4", local: "Capela São José", dia: "Quarta-feira", horarios: "19h00" },
  { id: "5", local: "Capela São José", dia: "Domingo", horarios: "08h00" },
  { id: "6", local: "Capela Sant'Ana", dia: "Sexta-feira", horarios: "19h00" },
  { id: "7", local: "Capela Sant'Ana", dia: "Domingo", horarios: "10h00" },
  { id: "8", local: "Capela São Francisco de Assis", dia: "Quinta-feira", horarios: "19h00" },
  { id: "9", local: "Capela São Francisco de Assis", dia: "Domingo", horarios: "09h30" },
  { id: "10", local: "Capela Nossa Senhora do Carmo", dia: "Terça-feira", horarios: "19h00" },
  { id: "11", local: "Capela Nossa Senhora do Carmo", dia: "Domingo", horarios: "08h30" },
];

const defaultPosters: Poster[] = [];

const defaultCapelas: CapelaDado[] = [
  { id: "1", nome: "Igreja Matriz — Nossa Senhora Aparecida", endereco: "Rua Cel. Quito Junqueira, s/n — Centro", setor: "Setor Central", missas: "Dom: 7h, 9h, 18h30 | Seg a Sex: 7h | Sáb: 18h30", destaque: true },
  { id: "2", nome: "Capela São José", endereco: "Rua São José, 200 — Bairro São José", setor: "Setor Norte", missas: "Dom: 8h | Qua: 19h", destaque: false },
  { id: "3", nome: "Capela Sant'Ana", endereco: "Av. Sant'Ana, 450 — Vila Sant'Ana", setor: "Setor Sul", missas: "Dom: 10h | Sex: 19h", destaque: false },
  { id: "4", nome: "Capela São Francisco de Assis", endereco: "Rua das Acácias, 80 — Jardim das Flores", setor: "Setor Leste", missas: "Dom: 9h30 | Qui: 19h", destaque: false },
  { id: "5", nome: "Capela Nossa Senhora do Carmo", endereco: "Rua do Carmo, 310 — Jardim Carmo", setor: "Setor Oeste", missas: "Dom: 8h30 | Ter: 19h", destaque: false },
];

const defaultPadres: PadreDado[] = [
  { id: "1", tipo: "Pároco", nome: "Pe. João Carlos Oliveira", ordenacao: "Ordenado em 1998", bio: "Natural de Ribeirão Preto, lidera a Paróquia de Sertãozinho desde 2018. Graduado em Teologia pela PUC-SP.", contato: "paroquia@nossasenhoraaparecida.org.br" },
  { id: "2", tipo: "Padre Auxiliar", nome: "Pe. Marcos Antônio Silva", ordenacao: "Ordenado em 2010", bio: "Responsável pelas pastorais de juventude e catequese, e pelas capelas do setor norte e leste.", contato: "pastoral@nossasenhoraaparecida.org.br" },
  { id: "3", tipo: "Padre Auxiliar", nome: "Pe. Rafael Mendes", ordenacao: "Ordenado em 2015", bio: "Responsável pelos sacramentos e acompanhamento espiritual dos grupos de RCC e Terço dos Homens.", contato: "pastoral@nossasenhoraaparecida.org.br" },
  { id: "4", tipo: "Diácono Permanente", nome: "Dc. José Augusto Ferreira", ordenacao: "Ordenado diácono em 2012", bio: "Casado, pai de três filhos. Serve no ministério da caridade e auxilia nas celebrações.", contato: "diaconia@nossasenhoraaparecida.org.br" },
  { id: "5", tipo: "Diácono Permanente", nome: "Dc. Carlos Eduardo Rocha", ordenacao: "Ordenado diácono em 2018", bio: "Atua nas visitas aos enfermos e no acompanhamento de famílias em situação de vulnerabilidade.", contato: "diaconia@nossasenhoraaparecida.org.br" },
];

const defaultContentBlocks: ContentBlock[] = [
  // Sacramentos
  { key: "batismo", titulo: "Batismo", subtitulo: "", descricao: "O Batismo é o primeiro e fundamental sacramento da vida cristã. Por ele, somos libertos do pecado original, tornamo-nos filhos de Deus e membros da Igreja. É a porta de entrada para os demais sacramentos.", citacao: '"Quem crer e for batizado será salvo." (Mc 16,16)', itens: [{ label: "Agendamento", info: "Procure a Secretaria Paroquial" }, { label: "Preparação", info: "Encontro para pais e padrinhos" }, { label: "Documentos", info: "Certidão de nascimento, RG dos pais e padrinhos" }, { label: "Celebrações", info: "Sábados às 10h00" }] },
  { key: "confissao", titulo: "Confissão", subtitulo: "Sacramento da Reconciliação", descricao: "O Sacramento da Penitência e Reconciliação é o encontro com a misericórdia de Deus. Através do sacerdote, Jesus nos perdoa e nos reconcilia com Deus e com a Igreja.", citacao: '"Cujos pecados perdoardes, serão perdoados." (Jo 20,23)', itens: [{ label: "Segunda a Sexta", info: "Antes da Missa das 07h00" }, { label: "Sábado", info: "16h30 às 18h00" }, { label: "Domingo", info: "30 min antes de cada Missa" }, { label: "Quaresma", info: "Horários estendidos" }] },
  { key: "eucaristia", titulo: "Eucaristia", subtitulo: "O Santíssimo Sacramento", descricao: "A Eucaristia é o coração da vida da Igreja. Na celebração eucarística, o pão e o vinho se tornam verdadeiramente o Corpo e o Sangue de Cristo. É a presença real de Jesus entre nós.", citacao: '"Eu sou o pão vivo descido do céu." (Jo 6,51)', itens: [{ label: "Adoração — Sextas", info: "08h00 às 19h00" }, { label: "1º Sábado", info: "07h30 às 09h00" }, { label: "Madrugada", info: "1º Sábado — 00h00 às 06h00" }] },
  { key: "crisma", titulo: "Crisma", subtitulo: "Sacramento da Confirmação", descricao: "A Crisma é o sacramento pelo qual o cristão recebe plenamente o Espírito Santo para confirmar sua fé e tornar-se testemunha adulta de Cristo no mundo.", citacao: '"Recebereis uma força, a do Espírito Santo." (At 1,8)', itens: [{ label: "Idade mínima", info: "A partir dos 15 anos" }, { label: "Preparação", info: "Curso de aproximadamente 1 ano" }, { label: "Encontros", info: "Semanais nas dependências da paróquia" }, { label: "Inscrições", info: "Secretaria — início do ano letivo" }] },
  { key: "matrimonio", titulo: "Matrimônio", subtitulo: "Sacramento do Amor", descricao: "O Matrimônio é o sacramento pelo qual um homem e uma mulher estabelecem entre si uma aliança indissolúvel de amor, segundo a vontade de Deus.", citacao: '"O que Deus uniu, o homem não separe." (Mt 19,6)', itens: [{ label: "Antecedência", info: "Mínimo 6 meses" }, { label: "Curso de Noivos", info: "12 encontros semanais" }, { label: "Cerimônias", info: "Sex 20h | Sáb 10h, 15h, 17h" }] },
  // Pastorais
  { key: "rcc", titulo: "RCC", subtitulo: "Renovação Carismática Católica", descricao: "A Renovação Carismática Católica é um movimento de espiritualidade que enfatiza a experiência pessoal do Espírito Santo, a oração de louvor e adoração, os carismas e a evangelização.", citacao: "", itens: [{ label: "Reunião Semanal", info: "Terças-feiras às 19h30 — Salão Paroquial" }, { label: "Retiro do Espírito Santo", info: "Anual, com pregação e Louvor" }, { label: "OLES", info: "Mensalmente" }, { label: "Contato", info: "rcc@nossasenhoraaparecida.org.br" }] },
  { key: "tlc", titulo: "TLC", subtitulo: "Terço de Libertação e Cura", descricao: "O Terço de Libertação e Cura é uma devoção mariana voltada para pessoas que buscam cura interior, libertação espiritual e fortalecimento da fé por meio do Rosário.", citacao: "", itens: [{ label: "Reunião Semanal", info: "Quartas-feiras às 19h00 — Igreja Matriz" }, { label: "Terço Especial", info: "1º Sábado do Mês às 08h00" }, { label: "Contato", info: "tlc@nossasenhoraaparecida.org.br" }] },
  { key: "terco-dos-homens", titulo: "Terço dos Homens", subtitulo: "", descricao: "O Terço dos Homens convida os homens a rezarem o Rosário juntos, fortalecendo sua fé e seu papel como líderes espirituais na família e na sociedade.", citacao: "", itens: [{ label: "Reunião Mensal", info: "1º Sábado às 07h00 — Igreja Matriz" }, { label: "Terço nas Capelas", info: "Rotativamente nas capelas" }, { label: "Contato", info: "tercohomens@nossasenhoraaparecida.org.br" }] },
  { key: "catequese", titulo: "Catequese", subtitulo: "", descricao: "A Catequese é a educação sistemática na fé cristã. Nossa paróquia conta com uma equipe de catequistas dedicados que acompanham crianças, jovens e adultos no crescimento da fé.", citacao: "", itens: [{ label: "Catequese Infantil", info: "A partir dos 7 anos — Sáb 08h e 09h30" }, { label: "Pré-eucaristia", info: "Preparação para a 1ª Eucaristia — 2 anos" }, { label: "Jovens", info: "A partir dos 13 anos — Sáb 10h30" }, { label: "Adultos (RICA)", info: "Para adultos não batizados ou crismados" }, { label: "Contato", info: "catequese@nossasenhoraaparecida.org.br" }] },
  { key: "pascom", titulo: "PASCOM", subtitulo: "Pastoral da Comunicação", descricao: "A Pastoral da Comunicação leva a mensagem do Evangelho através dos meios de comunicação modernos: redes sociais, site, boletins e toda a comunicação visual da paróquia.", citacao: "", itens: [{ label: "Reunião Mensal", info: "1ª segunda do mês às 19h30" }, { label: "Redes Sociais", info: "Instagram e Facebook da paróquia" }, { label: "Boletim Semanal", info: "Produção e distribuição semanal" }, { label: "Contato", info: "pascom@nossasenhoraaparecida.org.br" }] },
  { key: "liturgia", titulo: "Liturgia", subtitulo: "Pastoral Litúrgica", descricao: "A Pastoral Litúrgica prepara e anima as celebrações da paróquia, garantindo que a liturgia seja vivida com beleza, dignidade e participação ativa de todos.", citacao: "", itens: [{ label: "Ministros da Eucaristia", info: "Formação e escala" }, { label: "Leitores e Salmistas", info: "Proclamação da Palavra" }, { label: "Acólitos", info: "Serviço no altar" }, { label: "Reunião", info: "Última terça às 19h30" }, { label: "Contato", info: "liturgia@nossasenhoraaparecida.org.br" }] },
  { key: "coral", titulo: "Coral Paroquial", subtitulo: "", descricao: "O Coral Paroquial anima as celebrações litúrgicas com músicas sacras, hinos e cantos. O grupo é aberto a todos que amam cantar e desejam servir a Deus por meio da música.", citacao: '"Quem canta, ora duas vezes." — Santo Agostinho', itens: [{ label: "Ensaios", info: "Quintas-feiras às 19h30 — Salão Paroquial" }, { label: "Missas Animadas", info: "Domingos às 09h00" }, { label: "Cantatas", info: "Natal e Páscoa" }, { label: "Contato", info: "coral@nossasenhoraaparecida.org.br" }] },
];

// ─── Storage helpers ──────────────────────────────────────────────────────────

function load<T>(key: string, defaults: T[]): T[] {
  try { const s = localStorage.getItem(key); return s ? JSON.parse(s) : defaults; }
  catch { return defaults; }
}
function loadOne<T>(key: string, def: T): T {
  try { const s = localStorage.getItem(key); return s ? JSON.parse(s) : def; }
  catch { return def; }
}
function save<T>(key: string, data: T): void {
  localStorage.setItem(key, JSON.stringify(data));
}

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

// ─── CRUD exports ─────────────────────────────────────────────────────────────

export const getEventos = (): Evento[] => load("admin_eventos", defaultEventos);
export const saveEventos = (d: Evento[]) => save("admin_eventos", d);

export const getAvisos = (): Aviso[] => load("admin_avisos", defaultAvisos);
export const saveAvisos = (d: Aviso[]) => save("admin_avisos", d);

export const getHorarios = (): HorarioMissa[] => load("admin_horarios", defaultHorarios);
export const saveHorarios = (d: HorarioMissa[]) => save("admin_horarios", d);

export const getPosters = (): Poster[] => load("admin_posters", defaultPosters);
export const savePosters = (d: Poster[]) => save("admin_posters", d);

export const getCapelas = (): CapelaDado[] => load("admin_capelas", defaultCapelas);
export const saveCapelas = (d: CapelaDado[]) => save("admin_capelas", d);

export const getPadres = (): PadreDado[] => load("admin_padres", defaultPadres);
export const savePadres = (d: PadreDado[]) => save("admin_padres", d);

export const getContentBlocks = (): ContentBlock[] => load("admin_content_blocks", defaultContentBlocks);
export const saveContentBlocks = (d: ContentBlock[]) => save("admin_content_blocks", d);

export function getContentBlock(key: string): ContentBlock {
  const blocks = getContentBlocks();
  return blocks.find((b) => b.key === key) ?? defaultContentBlocks.find((b) => b.key === key)!;
}
export function updateContentBlock(key: string, updated: ContentBlock): void {
  const blocks = getContentBlocks();
  const idx = blocks.findIndex((b) => b.key === key);
  if (idx >= 0) blocks[idx] = updated; else blocks.push(updated);
  saveContentBlocks(blocks);
}
