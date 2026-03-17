import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { LogOut, Calendar, Bell, Clock, Plus, Pencil, Trash2, Check, X, ToggleLeft, ToggleRight } from "lucide-react";
import { logout } from "@/lib/adminAuth";
import {
  getEventos, saveEventos, Evento,
  getAvisos, saveAvisos, Aviso,
  getHorarios, saveHorarios, HorarioMissa,
  generateId,
} from "@/lib/adminData";

const TABS = [
  { id: "eventos", label: "Eventos", icon: Calendar },
  { id: "avisos", label: "Avisos", icon: Bell },
  { id: "horarios", label: "Horários de Missa", icon: Clock },
];

const CATEGORIAS = ["Solenidade", "Celebração", "Juventude", "Solidariedade", "Liturgia", "Formação", "Outro"];
const MESES = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

function InputField({ label, value, onChange, type = "text", placeholder = "" }: {
  label: string; value: string; onChange: (v: string) => void; type?: string; placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border border-gray-200 px-3 py-2 text-sm text-primary font-light focus:outline-none focus:border-primary"
      />
    </div>
  );
}

function TextareaField({ label, value, onChange, placeholder = "" }: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={3}
        className="w-full border border-gray-200 px-3 py-2 text-sm text-primary font-light focus:outline-none focus:border-primary resize-none"
      />
    </div>
  );
}

function SelectField({ label, value, onChange, options }: {
  label: string; value: string; onChange: (v: string) => void; options: string[];
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-200 px-3 py-2 text-sm text-primary font-light focus:outline-none focus:border-primary bg-white"
      >
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

const emptyEvento = (): Omit<Evento, "id"> => ({
  dia: "", mes: "Jan", ano: new Date().getFullYear().toString(),
  titulo: "", descricao: "", local: "", horario: "", categoria: "Celebração",
});

function EventosTab() {
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyEvento());
  const [showForm, setShowForm] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => { setEventos(getEventos()); }, []);

  function persist(data: Evento[]) {
    setEventos(data);
    saveEventos(data);
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  }

  function handleEdit(ev: Evento) {
    setEditingId(ev.id);
    setForm({ dia: ev.dia, mes: ev.mes, ano: ev.ano, titulo: ev.titulo, descricao: ev.descricao, local: ev.local, horario: ev.horario, categoria: ev.categoria });
    setShowForm(true);
  }

  function handleSave() {
    if (!form.titulo.trim() || !form.dia.trim()) return;
    if (editingId) {
      persist(eventos.map((e) => e.id === editingId ? { ...form, id: editingId } : e));
    } else {
      persist([...eventos, { ...form, id: generateId() }]);
    }
    setShowForm(false);
    setEditingId(null);
    setForm(emptyEvento());
  }

  function handleDelete(id: string) {
    if (confirm("Excluir este evento?")) persist(eventos.filter((e) => e.id !== id));
  }

  function handleCancel() {
    setShowForm(false);
    setEditingId(null);
    setForm(emptyEvento());
  }

  function f(key: keyof typeof form) {
    return (v: string) => setForm((prev) => ({ ...prev, [key]: v }));
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-primary">Eventos</h2>
          <p className="text-muted-foreground font-light text-sm">Gerencie os eventos da paróquia</p>
        </div>
        <div className="flex items-center gap-3">
          {saved && <span className="text-green-600 text-xs font-medium flex items-center gap-1"><Check className="w-3 h-3" /> Salvo</span>}
          {!showForm && (
            <button onClick={() => setShowForm(true)} className="flex items-center gap-2 bg-primary text-white px-4 py-2 text-sm font-semibold hover:bg-primary/90 transition-colors">
              <Plus className="w-4 h-4" /> Novo Evento
            </button>
          )}
        </div>
      </div>

      {showForm && (
        <div className="border border-secondary/30 bg-secondary/5 p-6 mb-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-5">
            {editingId ? "Editar Evento" : "Novo Evento"}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <InputField label="Dia" value={form.dia} onChange={f("dia")} placeholder="12" />
            <SelectField label="Mês" value={form.mes} onChange={f("mes")} options={MESES} />
            <InputField label="Ano" value={form.ano} onChange={f("ano")} placeholder="2025" />
            <SelectField label="Categoria" value={form.categoria} onChange={f("categoria")} options={CATEGORIAS} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <InputField label="Título" value={form.titulo} onChange={f("titulo")} placeholder="Nome do evento" />
            <InputField label="Horário" value={form.horario} onChange={f("horario")} placeholder="09h00" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <InputField label="Local" value={form.local} onChange={f("local")} placeholder="Igreja Matriz" />
            <TextareaField label="Descrição" value={form.descricao} onChange={f("descricao")} placeholder="Descrição do evento..." />
          </div>
          <div className="flex gap-3 justify-end">
            <button onClick={handleCancel} className="flex items-center gap-1.5 px-4 py-2 border border-gray-200 text-sm text-muted-foreground hover:border-gray-300 transition-colors">
              <X className="w-3.5 h-3.5" /> Cancelar
            </button>
            <button onClick={handleSave} className="flex items-center gap-1.5 px-4 py-2 bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors">
              <Check className="w-3.5 h-3.5" /> {editingId ? "Atualizar" : "Salvar"}
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-0">
        {eventos.length === 0 && (
          <p className="text-muted-foreground font-light text-sm py-8 text-center">Nenhum evento cadastrado.</p>
        )}
        {eventos.map((ev) => (
          <div key={ev.id} className="flex items-center gap-4 py-4 border-b border-gray-100">
            <div className="w-12 text-center shrink-0">
              <span className="text-lg font-bold text-primary">{ev.dia}</span>
              <span className="block text-xs font-semibold text-secondary uppercase">{ev.mes}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-primary text-sm truncate">{ev.titulo}</p>
              <p className="text-muted-foreground text-xs font-light">{ev.local} · {ev.horario}</p>
            </div>
            <span className="text-xs text-secondary bg-secondary/10 px-2 py-0.5 font-medium shrink-0 hidden sm:block">{ev.categoria}</span>
            <div className="flex gap-1 shrink-0">
              <button onClick={() => handleEdit(ev)} className="p-2 text-muted-foreground hover:text-primary transition-colors">
                <Pencil className="w-4 h-4" />
              </button>
              <button onClick={() => handleDelete(ev.id)} className="p-2 text-muted-foreground hover:text-red-500 transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AvisosTab() {
  const [avisos, setAvisos] = useState<Aviso[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({ titulo: "", texto: "" });
  const [saved, setSaved] = useState(false);

  useEffect(() => { setAvisos(getAvisos()); }, []);

  function persist(data: Aviso[]) {
    setAvisos(data);
    saveAvisos(data);
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  }

  function handleSave() {
    if (!form.titulo.trim()) return;
    if (editingId) {
      persist(avisos.map((a) => a.id === editingId ? { ...a, ...form } : a));
    } else {
      persist([...avisos, { id: generateId(), titulo: form.titulo, texto: form.texto, ativo: true }]);
    }
    setShowForm(false);
    setEditingId(null);
    setForm({ titulo: "", texto: "" });
  }

  function handleEdit(av: Aviso) {
    setEditingId(av.id);
    setForm({ titulo: av.titulo, texto: av.texto });
    setShowForm(true);
  }

  function handleDelete(id: string) {
    if (confirm("Excluir este aviso?")) persist(avisos.filter((a) => a.id !== id));
  }

  function toggleAtivo(id: string) {
    persist(avisos.map((a) => a.id === id ? { ...a, ativo: !a.ativo } : a));
  }

  function handleCancel() {
    setShowForm(false);
    setEditingId(null);
    setForm({ titulo: "", texto: "" });
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-primary">Avisos</h2>
          <p className="text-muted-foreground font-light text-sm">Avisos exibidos na página inicial</p>
        </div>
        <div className="flex items-center gap-3">
          {saved && <span className="text-green-600 text-xs font-medium flex items-center gap-1"><Check className="w-3 h-3" /> Salvo</span>}
          {!showForm && (
            <button onClick={() => setShowForm(true)} className="flex items-center gap-2 bg-primary text-white px-4 py-2 text-sm font-semibold hover:bg-primary/90 transition-colors">
              <Plus className="w-4 h-4" /> Novo Aviso
            </button>
          )}
        </div>
      </div>

      {showForm && (
        <div className="border border-secondary/30 bg-secondary/5 p-6 mb-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-5">
            {editingId ? "Editar Aviso" : "Novo Aviso"}
          </h3>
          <div className="flex flex-col gap-4 mb-4">
            <InputField label="Título" value={form.titulo} onChange={(v) => setForm((p) => ({ ...p, titulo: v }))} placeholder="Título do aviso" />
            <TextareaField label="Texto" value={form.texto} onChange={(v) => setForm((p) => ({ ...p, texto: v }))} placeholder="Escreva o conteúdo do aviso..." />
          </div>
          <div className="flex gap-3 justify-end">
            <button onClick={handleCancel} className="flex items-center gap-1.5 px-4 py-2 border border-gray-200 text-sm text-muted-foreground hover:border-gray-300 transition-colors">
              <X className="w-3.5 h-3.5" /> Cancelar
            </button>
            <button onClick={handleSave} className="flex items-center gap-1.5 px-4 py-2 bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors">
              <Check className="w-3.5 h-3.5" /> {editingId ? "Atualizar" : "Salvar"}
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-0">
        {avisos.length === 0 && (
          <p className="text-muted-foreground font-light text-sm py-8 text-center">Nenhum aviso cadastrado.</p>
        )}
        {avisos.map((av) => (
          <div key={av.id} className={`flex items-start gap-4 py-4 border-b border-gray-100 ${!av.ativo ? "opacity-50" : ""}`}>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-primary text-sm">{av.titulo}</p>
              <p className="text-muted-foreground text-xs font-light mt-1 leading-relaxed">{av.texto}</p>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <button onClick={() => toggleAtivo(av.id)} className={`p-2 transition-colors ${av.ativo ? "text-green-600" : "text-muted-foreground"}`} title={av.ativo ? "Desativar" : "Ativar"}>
                {av.ativo ? <ToggleRight className="w-5 h-5" /> : <ToggleLeft className="w-5 h-5" />}
              </button>
              <button onClick={() => handleEdit(av)} className="p-2 text-muted-foreground hover:text-primary transition-colors">
                <Pencil className="w-4 h-4" />
              </button>
              <button onClick={() => handleDelete(av.id)} className="p-2 text-muted-foreground hover:text-red-500 transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HorariosTab() {
  const [horarios, setHorarios] = useState<HorarioMissa[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({ local: "", dia: "", horarios: "" });
  const [saved, setSaved] = useState(false);

  const locais = ["Igreja Matriz", "Capela São José", "Capela Sant'Ana", "Capela São Francisco de Assis", "Capela Nossa Senhora do Carmo"];

  useEffect(() => { setHorarios(getHorarios()); }, []);

  function persist(data: HorarioMissa[]) {
    setHorarios(data);
    saveHorarios(data);
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  }

  function handleSave() {
    if (!form.local.trim() || !form.dia.trim()) return;
    if (editingId) {
      persist(horarios.map((h) => h.id === editingId ? { ...form, id: editingId } : h));
    } else {
      persist([...horarios, { ...form, id: generateId() }]);
    }
    setShowForm(false);
    setEditingId(null);
    setForm({ local: "", dia: "", horarios: "" });
  }

  function handleEdit(h: HorarioMissa) {
    setEditingId(h.id);
    setForm({ local: h.local, dia: h.dia, horarios: h.horarios });
    setShowForm(true);
  }

  function handleDelete(id: string) {
    if (confirm("Excluir este horário?")) persist(horarios.filter((h) => h.id !== id));
  }

  function handleCancel() {
    setShowForm(false);
    setEditingId(null);
    setForm({ local: "", dia: "", horarios: "" });
  }

  const groupedByLocal = locais.map((local) => ({
    local,
    items: horarios.filter((h) => h.local === local),
  })).filter((g) => g.items.length > 0);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-primary">Horários de Missa</h2>
          <p className="text-muted-foreground font-light text-sm">Edite os horários de celebração</p>
        </div>
        <div className="flex items-center gap-3">
          {saved && <span className="text-green-600 text-xs font-medium flex items-center gap-1"><Check className="w-3 h-3" /> Salvo</span>}
          {!showForm && (
            <button onClick={() => setShowForm(true)} className="flex items-center gap-2 bg-primary text-white px-4 py-2 text-sm font-semibold hover:bg-primary/90 transition-colors">
              <Plus className="w-4 h-4" /> Novo Horário
            </button>
          )}
        </div>
      </div>

      {showForm && (
        <div className="border border-secondary/30 bg-secondary/5 p-6 mb-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-5">
            {editingId ? "Editar Horário" : "Novo Horário"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <SelectField label="Local" value={form.local} onChange={(v) => setForm((p) => ({ ...p, local: v }))} options={locais} />
            <InputField label="Dia(s)" value={form.dia} onChange={(v) => setForm((p) => ({ ...p, dia: v }))} placeholder="Segunda a Sexta" />
            <InputField label="Horários" value={form.horarios} onChange={(v) => setForm((p) => ({ ...p, horarios: v }))} placeholder="07h00, 19h00" />
          </div>
          <div className="flex gap-3 justify-end">
            <button onClick={handleCancel} className="flex items-center gap-1.5 px-4 py-2 border border-gray-200 text-sm text-muted-foreground hover:border-gray-300 transition-colors">
              <X className="w-3.5 h-3.5" /> Cancelar
            </button>
            <button onClick={handleSave} className="flex items-center gap-1.5 px-4 py-2 bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors">
              <Check className="w-3.5 h-3.5" /> {editingId ? "Atualizar" : "Salvar"}
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-8">
        {groupedByLocal.map(({ local, items }) => (
          <div key={local}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary mb-3">{local}</h3>
            {items.map((h) => (
              <div key={h.id} className="flex items-center justify-between py-3 border-b border-gray-100">
                <div>
                  <span className="text-sm font-medium text-primary">{h.dia}</span>
                  <span className="text-sm text-muted-foreground font-light ml-4">{h.horarios}</span>
                </div>
                <div className="flex gap-1">
                  <button onClick={() => handleEdit(h)} className="p-1.5 text-muted-foreground hover:text-primary transition-colors">
                    <Pencil className="w-3.5 h-3.5" />
                  </button>
                  <button onClick={() => handleDelete(h.id)} className="p-1.5 text-muted-foreground hover:text-red-500 transition-colors">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
        {horarios.length === 0 && (
          <p className="text-muted-foreground font-light text-sm py-8 text-center">Nenhum horário cadastrado.</p>
        )}
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("eventos");
  const [, setLocation] = useLocation();

  function handleLogout() {
    logout();
    setLocation("/admin");
  }

  return (
    <div className="min-h-screen bg-muted/20">
      <header className="bg-primary text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="w-7 h-7 bg-secondary/20 border border-secondary/40 flex items-center justify-center">
            <span className="text-secondary text-xs font-bold">A</span>
          </div>
          <div>
            <span className="font-semibold text-sm">Área Administrativa</span>
            <span className="block text-white/50 text-xs font-light">Paróquia Nossa Senhora Aparecida</span>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-white/70 hover:text-white text-sm font-light transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span className="hidden sm:inline">Sair</span>
        </button>
      </header>

      <div className="flex flex-col md:flex-row min-h-[calc(100vh-60px)]">
        <nav className="bg-white border-b md:border-b-0 md:border-r border-gray-100 md:w-56 shrink-0">
          <div className="flex md:flex-col gap-1 p-3">
            {TABS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-3 px-4 py-3 text-sm font-medium w-full text-left transition-colors ${
                  activeTab === id
                    ? "bg-primary text-white"
                    : "text-muted-foreground hover:text-primary hover:bg-muted/30"
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </nav>

        <main className="flex-1 p-6 md:p-10 max-w-4xl">
          {activeTab === "eventos" && <EventosTab />}
          {activeTab === "avisos" && <AvisosTab />}
          {activeTab === "horarios" && <HorariosTab />}
        </main>
      </div>
    </div>
  );
}
