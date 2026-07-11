import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import {
  LogOut, Calendar, Bell, Clock, Image as ImageIcon, MapPin,
  Users, Cross, ChevronDown, Plus, Pencil, Trash2, Check,
  X, ToggleLeft, ToggleRight, Upload, Eye, EyeOff,
} from "lucide-react";
import { logout } from "@/lib/adminAuth";
import {
  getEventos, saveEventos, Evento,
  getAvisos, saveAvisos, Aviso,
  getHorarios, saveHorarios, HorarioMissa,
  getPosters, savePosters, Poster,
  getCapelas, saveCapelas, CapelaDado,
  getPadres, savePadres, PadreDado,
  getGaleriaFotos, saveGaleriaFotos, FotoGaleria,
  getContentBlock, updateContentBlock, ContentBlock, ContentItem,
  generateId,
} from "@/lib/adminData";

// ─── Shared UI ────────────────────────────────────────────────────────────────

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-1.5">{label}</label>
      {children}
    </div>
  );
}
function Input({ value, onChange, placeholder = "", type = "text" }: { value: string; onChange: (v: string) => void; placeholder?: string; type?: string }) {
  return <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="w-full border border-gray-200 px-3 py-2 text-sm text-primary font-light focus:outline-none focus:border-primary" />;
}
function Textarea({ value, onChange, placeholder = "", rows = 3 }: { value: string; onChange: (v: string) => void; placeholder?: string; rows?: number }) {
  return <textarea value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} rows={rows} className="w-full border border-gray-200 px-3 py-2 text-sm text-primary font-light focus:outline-none focus:border-primary resize-none" />;
}
function Select({ value, onChange, options }: { value: string; onChange: (v: string) => void; options: string[] }) {
  return <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full border border-gray-200 px-3 py-2 text-sm text-primary font-light focus:outline-none focus:border-primary bg-white">{options.map((o) => <option key={o}>{o}</option>)}</select>;
}
function SavedBadge({ show }: { show: boolean }) {
  return show ? <span className="text-green-600 text-xs font-medium flex items-center gap-1"><Check className="w-3 h-3" /> Salvo</span> : null;
}
function SectionHeader({ title, subtitle, saved, onNew }: { title: string; subtitle: string; saved: boolean; onNew?: () => void }) {
  return (
    <div className="flex items-start justify-between mb-6">
      <div>
        <h2 className="text-xl font-semibold text-primary">{title}</h2>
        <p className="text-muted-foreground font-light text-sm">{subtitle}</p>
      </div>
      <div className="flex items-center gap-3 pt-1">
        <SavedBadge show={saved} />
        {onNew && <button onClick={onNew} className="flex items-center gap-2 bg-primary text-white px-4 py-2 text-sm font-semibold hover:bg-primary/90 transition-colors"><Plus className="w-4 h-4" /> Novo</button>}
      </div>
    </div>
  );
}
function FormBox({ title, children, onSave, onCancel }: { title: string; children: React.ReactNode; onSave: () => void; onCancel: () => void }) {
  return (
    <div className="border border-secondary/30 bg-secondary/5 p-6 mb-6">
      <h3 className="text-xs font-semibold uppercase tracking-widest text-primary mb-5">{title}</h3>
      {children}
      <div className="flex gap-3 justify-end mt-4">
        <button onClick={onCancel} className="flex items-center gap-1.5 px-4 py-2 border border-gray-200 text-sm text-muted-foreground hover:border-gray-300 transition-colors"><X className="w-3.5 h-3.5" /> Cancelar</button>
        <button onClick={onSave} className="flex items-center gap-1.5 px-4 py-2 bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors"><Check className="w-3.5 h-3.5" /> Salvar</button>
      </div>
    </div>
  );
}
function Row({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center gap-4 py-4 border-b border-gray-100">{children}</div>;
}
function ActionBtns({ onEdit, onDelete }: { onEdit: () => void; onDelete: () => void }) {
  return (
    <div className="flex gap-1 shrink-0">
      <button onClick={onEdit} className="p-2 text-muted-foreground hover:text-primary transition-colors"><Pencil className="w-4 h-4" /></button>
      <button onClick={onDelete} className="p-2 text-muted-foreground hover:text-red-500 transition-colors"><Trash2 className="w-4 h-4" /></button>
    </div>
  );
}

// ─── Eventos ──────────────────────────────────────────────────────────────────
const MESES = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];
const CATEGORIAS = ["Solenidade","Celebração","Juventude","Solidariedade","Liturgia","Formação","Outro"];

function emptyEvento(): Omit<Evento,"id"> { return { dia:"", mes:"Jan", ano: String(new Date().getFullYear()), titulo:"", descricao:"", local:"", horario:"", categoria:"Celebração" }; }

function EventosSection() {
  const [data, setData] = useState<Evento[]>([]);
  const [editing, setEditing] = useState<string|null>(null);
  const [form, setForm] = useState(emptyEvento());
  const [show, setShow] = useState(false);
  const [saved, setSaved] = useState(false);
  useEffect(() => { setData(getEventos()); }, []);
  const f = (k: keyof typeof form) => (v: string) => setForm(p => ({ ...p, [k]: v }));
  function persist(d: Evento[]) { setData(d); saveEventos(d); setSaved(true); setTimeout(() => setSaved(false), 1500); }
  function open(ev?: Evento) { setEditing(ev?.id??null); setForm(ev ? { dia:ev.dia,mes:ev.mes,ano:ev.ano,titulo:ev.titulo,descricao:ev.descricao,local:ev.local,horario:ev.horario,categoria:ev.categoria } : emptyEvento()); setShow(true); }
  function close() { setShow(false); setEditing(null); setForm(emptyEvento()); }
  function doSave() { if (!form.titulo.trim()||!form.dia.trim()) return; editing ? persist(data.map(e=>e.id===editing?{...form,id:editing}:e)) : persist([...data,{...form,id:generateId()}]); close(); }
  function del(id:string) { if(confirm("Excluir evento?")) persist(data.filter(e=>e.id!==id)); }
  return (
    <div>
      <SectionHeader title="Eventos" subtitle="Gerencie os eventos da paróquia" saved={saved} onNew={() => open()} />
      {show && <FormBox title={editing?"Editar evento":"Novo evento"} onSave={doSave} onCancel={close}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <Field label="Dia"><Input value={form.dia} onChange={f("dia")} placeholder="12" /></Field>
          <Field label="Mês"><Select value={form.mes} onChange={f("mes")} options={MESES} /></Field>
          <Field label="Ano"><Input value={form.ano} onChange={f("ano")} placeholder="2025" /></Field>
          <Field label="Categoria"><Select value={form.categoria} onChange={f("categoria")} options={CATEGORIAS} /></Field>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Field label="Título"><Input value={form.titulo} onChange={f("titulo")} placeholder="Nome do evento" /></Field>
          <Field label="Horário"><Input value={form.horario} onChange={f("horario")} placeholder="09h00" /></Field>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="Local"><Input value={form.local} onChange={f("local")} placeholder="Igreja Matriz" /></Field>
          <Field label="Descrição"><Textarea value={form.descricao} onChange={f("descricao")} placeholder="Descrição..." rows={2} /></Field>
        </div>
      </FormBox>}
      {data.map(ev => (
        <Row key={ev.id}>
          <div className="w-12 text-center shrink-0"><span className="text-lg font-bold text-primary">{ev.dia}</span><span className="block text-xs font-semibold text-secondary uppercase">{ev.mes}</span></div>
          <div className="flex-1 min-w-0"><p className="font-medium text-primary text-sm truncate">{ev.titulo}</p><p className="text-muted-foreground text-xs font-light">{ev.local} · {ev.horario}</p></div>
          <span className="text-xs text-secondary bg-secondary/10 px-2 py-0.5 font-medium shrink-0 hidden sm:block">{ev.categoria}</span>
          <ActionBtns onEdit={() => open(ev)} onDelete={() => del(ev.id)} />
        </Row>
      ))}
      {data.length === 0 && <p className="text-muted-foreground font-light text-sm py-8 text-center">Nenhum evento.</p>}
    </div>
  );
}

// ─── Avisos ───────────────────────────────────────────────────────────────────
function AvisosSection() {
  const [data, setData] = useState<Aviso[]>([]);
  const [editing, setEditing] = useState<string|null>(null);
  const [form, setForm] = useState({ titulo:"", texto:"" });
  const [show, setShow] = useState(false);
  const [saved, setSaved] = useState(false);
  useEffect(() => { setData(getAvisos()); }, []);
  function persist(d: Aviso[]) { setData(d); saveAvisos(d); setSaved(true); setTimeout(() => setSaved(false), 1500); }
  function open(av?: Aviso) { setEditing(av?.id??null); setForm(av?{titulo:av.titulo,texto:av.texto}:{titulo:"",texto:""}); setShow(true); }
  function close() { setShow(false); setEditing(null); setForm({titulo:"",texto:""}); }
  function doSave() { if(!form.titulo.trim()) return; editing ? persist(data.map(a=>a.id===editing?{...a,...form}:a)) : persist([...data,{id:generateId(),titulo:form.titulo,texto:form.texto,ativo:true}]); close(); }
  function del(id:string) { if(confirm("Excluir aviso?")) persist(data.filter(a=>a.id!==id)); }
  function toggle(id:string) { persist(data.map(a=>a.id===id?{...a,ativo:!a.ativo}:a)); }
  return (
    <div>
      <SectionHeader title="Avisos" subtitle="Avisos exibidos na página inicial" saved={saved} onNew={() => open()} />
      {show && <FormBox title={editing?"Editar aviso":"Novo aviso"} onSave={doSave} onCancel={close}>
        <div className="flex flex-col gap-4">
          <Field label="Título"><Input value={form.titulo} onChange={v=>setForm(p=>({...p,titulo:v}))} placeholder="Título do aviso" /></Field>
          <Field label="Texto"><Textarea value={form.texto} onChange={v=>setForm(p=>({...p,texto:v}))} placeholder="Conteúdo do aviso..." /></Field>
        </div>
      </FormBox>}
      {data.map(av => (
        <div key={av.id} className={`flex items-start gap-4 py-4 border-b border-gray-100 ${!av.ativo?"opacity-50":""}`}>
          <div className="flex-1 min-w-0"><p className="font-medium text-primary text-sm">{av.titulo}</p><p className="text-muted-foreground text-xs font-light mt-1 leading-relaxed">{av.texto}</p></div>
          <div className="flex items-center gap-1 shrink-0">
            <button onClick={() => toggle(av.id)} className={`p-2 transition-colors ${av.ativo?"text-green-600":"text-muted-foreground"}`}>{av.ativo?<ToggleRight className="w-5 h-5"/>:<ToggleLeft className="w-5 h-5"/>}</button>
            <button onClick={() => open(av)} className="p-2 text-muted-foreground hover:text-primary transition-colors"><Pencil className="w-4 h-4"/></button>
            <button onClick={() => del(av.id)} className="p-2 text-muted-foreground hover:text-red-500 transition-colors"><Trash2 className="w-4 h-4"/></button>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Horários ─────────────────────────────────────────────────────────────────
const LOCAIS = ["Igreja Matriz","Capela São José","Capela Sant'Ana","Capela São Francisco de Assis","Capela Nossa Senhora do Carmo"];

function HorariosSection() {
  const [data, setData] = useState<HorarioMissa[]>([]);
  const [editing, setEditing] = useState<string|null>(null);
  const [form, setForm] = useState({ local:"Igreja Matriz", dia:"", horarios:"" });
  const [show, setShow] = useState(false);
  const [saved, setSaved] = useState(false);
  useEffect(() => { setData(getHorarios()); }, []);
  function persist(d: HorarioMissa[]) { setData(d); saveHorarios(d); setSaved(true); setTimeout(() => setSaved(false), 1500); }
  function open(h?: HorarioMissa) { setEditing(h?.id??null); setForm(h?{local:h.local,dia:h.dia,horarios:h.horarios}:{local:"Igreja Matriz",dia:"",horarios:""}); setShow(true); }
  function close() { setShow(false); setEditing(null); setForm({local:"Igreja Matriz",dia:"",horarios:""}); }
  function doSave() { if(!form.dia.trim()) return; editing ? persist(data.map(h=>h.id===editing?{...form,id:editing}:h)) : persist([...data,{...form,id:generateId()}]); close(); }
  function del(id:string) { if(confirm("Excluir?")) persist(data.filter(h=>h.id!==id)); }
  const grouped = LOCAIS.map(l=>({local:l,items:data.filter(h=>h.local===l)})).filter(g=>g.items.length>0);
  return (
    <div>
      <SectionHeader title="Horários de Missa" subtitle="Celebrações por local e dia da semana" saved={saved} onNew={() => open()} />
      {show && <FormBox title={editing?"Editar horário":"Novo horário"} onSave={doSave} onCancel={close}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Field label="Local"><Select value={form.local} onChange={v=>setForm(p=>({...p,local:v}))} options={LOCAIS} /></Field>
          <Field label="Dia(s)"><Input value={form.dia} onChange={v=>setForm(p=>({...p,dia:v}))} placeholder="Segunda a Sexta" /></Field>
          <Field label="Horários"><Input value={form.horarios} onChange={v=>setForm(p=>({...p,horarios:v}))} placeholder="07h00, 19h00" /></Field>
        </div>
      </FormBox>}
      {grouped.map(({local,items}) => (
        <div key={local} className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-2">{local}</p>
          {items.map(h=>(
            <div key={h.id} className="flex items-center justify-between py-3 border-b border-gray-100">
              <div><span className="text-sm font-medium text-primary">{h.dia}</span><span className="text-sm text-muted-foreground font-light ml-4">{h.horarios}</span></div>
              <ActionBtns onEdit={()=>open(h)} onDelete={()=>del(h.id)} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// ─── Cartazes ─────────────────────────────────────────────────────────────────
function CargazesSection() {
  const [data, setData] = useState<Poster[]>([]);
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({ titulo:"", descricao:"", imageDataUrl:"" });
  const [show, setShow] = useState(false);
  const [editingId, setEditingId] = useState<string|null>(null);
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  useEffect(() => { setData(getPosters()); }, []);
  function persist(d: Poster[]) { setData(d); savePosters(d); setSaved(true); setTimeout(() => setSaved(false), 1500); }
  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]; if (!file) return;
    setUploading(true);
    const reader = new FileReader();
    reader.onload = () => { setForm(p=>({...p,imageDataUrl:reader.result as string})); setUploading(false); };
    reader.readAsDataURL(file);
  }
  function open(p?: Poster) { setEditingId(p?.id??null); setForm(p?{titulo:p.titulo,descricao:p.descricao,imageDataUrl:p.imageDataUrl}:{titulo:"",descricao:"",imageDataUrl:""}); setShow(true); }
  function close() { setShow(false); setEditingId(null); setForm({titulo:"",descricao:"",imageDataUrl:""}); }
  function doSave() { if(!form.titulo.trim()||!form.imageDataUrl) return; editingId ? persist(data.map(p=>p.id===editingId?{...p,...form}:p)) : persist([...data,{id:generateId(),titulo:form.titulo,descricao:form.descricao,imageDataUrl:form.imageDataUrl,ativo:true}]); close(); }
  function del(id:string) { if(confirm("Excluir cartaz?")) persist(data.filter(p=>p.id!==id)); }
  function toggle(id:string) { persist(data.map(p=>p.id===id?{...p,ativo:!p.ativo}:p)); }
  return (
    <div>
      <SectionHeader title="Cartazes" subtitle="Imagens e cartazes da paróquia" saved={saved} onNew={() => open()} />
      {show && <FormBox title={editingId?"Editar cartaz":"Novo cartaz"} onSave={doSave} onCancel={close}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Field label="Título"><Input value={form.titulo} onChange={v=>setForm(p=>({...p,titulo:v}))} placeholder="Nome do cartaz" /></Field>
          <Field label="Descrição"><Input value={form.descricao} onChange={v=>setForm(p=>({...p,descricao:v}))} placeholder="Breve descrição" /></Field>
        </div>
        <Field label="Imagem">
          <div className="flex items-start gap-4 mt-1">
            <button type="button" onClick={() => fileRef.current?.click()} className="flex items-center gap-2 border border-dashed border-secondary px-4 py-2.5 text-sm text-secondary font-medium hover:bg-secondary/5 transition-colors">
              <Upload className="w-4 h-4" /> {uploading ? "Carregando..." : "Escolher imagem"}
            </button>
            <input ref={fileRef} type="file" accept="image/*" onChange={handleFile} className="hidden" />
            {form.imageDataUrl && <img src={form.imageDataUrl} alt="preview" className="h-16 object-cover border border-gray-100" />}
          </div>
        </Field>
      </FormBox>}
      {data.length === 0 && <p className="text-muted-foreground font-light text-sm py-8 text-center">Nenhum cartaz. Clique em "Novo" para adicionar.</p>}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
        {data.map(p => (
          <div key={p.id} className={`border border-gray-100 ${!p.ativo?"opacity-50":""}`}>
            <img src={p.imageDataUrl} alt={p.titulo} className="w-full h-40 object-cover" />
            <div className="p-3">
              <p className="text-sm font-medium text-primary truncate">{p.titulo}</p>
              {p.descricao && <p className="text-xs text-muted-foreground font-light mt-0.5">{p.descricao}</p>}
              <div className="flex items-center gap-1 mt-2">
                <button onClick={()=>toggle(p.id)} className={`p-1.5 transition-colors ${p.ativo?"text-green-600":"text-muted-foreground"}`} title={p.ativo?"Desativar":"Ativar"}>{p.ativo?<Eye className="w-4 h-4"/>:<EyeOff className="w-4 h-4"/>}</button>
                <button onClick={()=>open(p)} className="p-1.5 text-muted-foreground hover:text-primary transition-colors"><Pencil className="w-4 h-4"/></button>
                <button onClick={()=>del(p.id)} className="p-1.5 text-muted-foreground hover:text-red-500 transition-colors"><Trash2 className="w-4 h-4"/></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Capelas ──────────────────────────────────────────────────────────────────
const TIPOS_SETOR = ["Setor Central","Setor Norte","Setor Sul","Setor Leste","Setor Oeste","Outro"];

function CapelasSection() {
  const [data, setData] = useState<CapelaDado[]>([]);
  const [editing, setEditing] = useState<string|null>(null);
  const [form, setForm] = useState({ nome:"", endereco:"", setor:"Setor Norte", missas:"", destaque:false });
  const [show, setShow] = useState(false);
  const [saved, setSaved] = useState(false);
  useEffect(() => { setData(getCapelas()); }, []);
  function persist(d: CapelaDado[]) { setData(d); saveCapelas(d); setSaved(true); setTimeout(() => setSaved(false), 1500); }
  function open(c?: CapelaDado) { setEditing(c?.id??null); setForm(c?{nome:c.nome,endereco:c.endereco,setor:c.setor,missas:c.missas,destaque:c.destaque}:{nome:"",endereco:"",setor:"Setor Norte",missas:"",destaque:false}); setShow(true); }
  function close() { setShow(false); setEditing(null); }
  function doSave() { if(!form.nome.trim()) return; editing ? persist(data.map(c=>c.id===editing?{...form,id:editing}:c)) : persist([...data,{...form,id:generateId()}]); close(); }
  function del(id:string) { if(confirm("Excluir?")) persist(data.filter(c=>c.id!==id)); }
  return (
    <div>
      <SectionHeader title="Capelas e Setores" subtitle="Igrejas e capelas da paróquia" saved={saved} onNew={() => open()} />
      {show && <FormBox title={editing?"Editar":"Nova"} onSave={doSave} onCancel={close}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Field label="Nome"><Input value={form.nome} onChange={v=>setForm(p=>({...p,nome:v}))} placeholder="Nome da chapel" /></Field>
          <Field label="Endereço"><Input value={form.endereco} onChange={v=>setForm(p=>({...p,endereco:v}))} placeholder="Rua..." /></Field>
          <Field label="Setor"><Select value={form.setor} onChange={v=>setForm(p=>({...p,setor:v}))} options={TIPOS_SETOR} /></Field>
          <Field label="Horários de Missa"><Input value={form.missas} onChange={v=>setForm(p=>({...p,missas:v}))} placeholder="Dom: 8h | Qua: 19h" /></Field>
        </div>
        <label className="flex items-center gap-2 cursor-pointer text-sm text-muted-foreground">
          <input type="checkbox" checked={form.destaque} onChange={e=>setForm(p=>({...p,destaque:e.target.checked}))} className="w-4 h-4" />
          Marcar como Matriz
        </label>
      </FormBox>}
      {data.map(c => (
        <Row key={c.id}>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">{c.destaque&&<span className="text-[10px] font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-1.5 py-0.5">Matriz</span>}<span className="text-xs text-muted-foreground">{c.setor}</span></div>
            <p className="font-medium text-primary text-sm truncate">{c.nome}</p>
            <p className="text-muted-foreground text-xs font-light">{c.endereco}</p>
          </div>
          <p className="text-xs text-muted-foreground font-light hidden md:block shrink-0 max-w-[160px] text-right">{c.missas}</p>
          <ActionBtns onEdit={()=>open(c)} onDelete={()=>del(c.id)} />
        </Row>
      ))}
    </div>
  );
}

// ─── Padres ───────────────────────────────────────────────────────────────────
const TIPOS_CLERO = ["Pároco","Padre Auxiliar","Diácono Permanente","Diácono em Formação"];

function PadresSection() {
  const [data, setData] = useState<PadreDado[]>([]);
  const [editing, setEditing] = useState<string|null>(null);
  const [form, setForm] = useState({ tipo:"Padre Auxiliar", nome:"", ordenacao:"", bio:"", contato:"" });
  const [show, setShow] = useState(false);
  const [saved, setSaved] = useState(false);
  useEffect(() => { setData(getPadres()); }, []);
  function persist(d: PadreDado[]) { setData(d); savePadres(d); setSaved(true); setTimeout(() => setSaved(false), 1500); }
  function open(p?: PadreDado) { setEditing(p?.id??null); setForm(p?{tipo:p.tipo,nome:p.nome,ordenacao:p.ordenacao,bio:p.bio,contato:p.contato}:{tipo:"Padre Auxiliar",nome:"",ordenacao:"",bio:"",contato:""}); setShow(true); }
  function close() { setShow(false); setEditing(null); }
  function doSave() { if(!form.nome.trim()) return; editing ? persist(data.map(p=>p.id===editing?{...form,id:editing}:p)) : persist([...data,{...form,id:generateId()}]); close(); }
  function del(id:string) { if(confirm("Excluir?")) persist(data.filter(p=>p.id!==id)); }
  return (
    <div>
      <SectionHeader title="Padres e Diáconos" subtitle="Equipe sacerdotal da paróquia" saved={saved} onNew={() => open()} />
      {show && <FormBox title={editing?"Editar":"Novo"} onSave={doSave} onCancel={close}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Field label="Tipo"><Select value={form.tipo} onChange={v=>setForm(p=>({...p,tipo:v}))} options={TIPOS_CLERO} /></Field>
          <Field label="Nome Completo"><Input value={form.nome} onChange={v=>setForm(p=>({...p,nome:v}))} placeholder="Pe. / Dc. ..." /></Field>
          <Field label="Ordenação"><Input value={form.ordenacao} onChange={v=>setForm(p=>({...p,ordenacao:v}))} placeholder="Ordenado em 2010" /></Field>
          <Field label="E-mail"><Input value={form.contato} onChange={v=>setForm(p=>({...p,contato:v}))} placeholder="email@..." /></Field>
        </div>
        <Field label="Biografia"><Textarea value={form.bio} onChange={v=>setForm(p=>({...p,bio:v}))} placeholder="Mini bio..." rows={3} /></Field>
      </FormBox>}
      {data.map(p => (
        <Row key={p.id}>
          <div className="flex-1 min-w-0">
            <span className="text-[10px] font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-1.5 py-0.5 mr-2">{p.tipo}</span>
            <p className="font-medium text-primary text-sm mt-1">{p.nome}</p>
            <p className="text-muted-foreground text-xs font-light">{p.ordenacao} · {p.contato}</p>
          </div>
          <ActionBtns onEdit={()=>open(p)} onDelete={()=>del(p.id)} />
        </Row>
      ))}
    </div>
  );
}

// ─── Generic ContentBlock editor (Sacramentos + Pastorais) ───────────────────
function ContentBlockEditor({ blockKey, groupLabel }: { blockKey: string; groupLabel: string }) {
  const [block, setBlock] = useState<ContentBlock>(() => getContentBlock(blockKey));
  const [saved, setSaved] = useState(false);
  const [editingItemIdx, setEditingItemIdx] = useState<number|null>(null);
  const [itemForm, setItemForm] = useState<ContentItem>({ label:"", info:"" });

  function persist(b: ContentBlock) { setBlock(b); updateContentBlock(blockKey, b); setSaved(true); setTimeout(() => setSaved(false), 1500); }
  function updateField(field: keyof ContentBlock, value: string) { persist({ ...block, [field]: value }); }

  function openItem(idx?: number) {
    if (idx !== undefined) { setEditingItemIdx(idx); setItemForm({ ...block.itens[idx] }); }
    else { setEditingItemIdx(-1); setItemForm({ label:"", info:"" }); }
  }
  function saveItem() {
    if (!itemForm.label.trim()) return;
    const itens = [...block.itens];
    if (editingItemIdx === -1) itens.push({ ...itemForm });
    else if (editingItemIdx !== null) itens[editingItemIdx] = { ...itemForm };
    persist({ ...block, itens });
    setEditingItemIdx(null);
  }
  function delItem(idx: number) { if (confirm("Excluir item?")) persist({ ...block, itens: block.itens.filter((_,i)=>i!==idx) }); }

  return (
    <div>
      <SectionHeader title={block.titulo} subtitle={`${groupLabel} — editar conteúdo`} saved={saved} />

      <div className="flex flex-col gap-5 mb-8">
        <Field label="Subtítulo"><Input value={block.subtitulo} onChange={v => updateField("subtitulo", v)} placeholder="Ex: Sacramento da Reconciliação" /></Field>
        <Field label="Descrição"><Textarea value={block.descricao} onChange={v => updateField("descricao", v)} rows={4} placeholder="Texto principal da página..." /></Field>
        <Field label="Citação bíblica / frase"><Input value={block.citacao} onChange={v => updateField("citacao", v)} placeholder='"Frase..." (referência)' /></Field>
      </div>

      <div className="flex items-center justify-between mb-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Informações / Horários</p>
        <button onClick={() => openItem()} className="flex items-center gap-1.5 text-xs text-secondary font-medium hover:underline"><Plus className="w-3 h-3"/> Adicionar</button>
      </div>

      {editingItemIdx !== null && (
        <div className="border border-secondary/30 bg-secondary/5 p-4 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            <Field label="Rótulo"><Input value={itemForm.label} onChange={v=>setItemForm(p=>({...p,label:v}))} placeholder="Ex: Reunião Semanal" /></Field>
            <Field label="Informação"><Input value={itemForm.info} onChange={v=>setItemForm(p=>({...p,info:v}))} placeholder="Ex: Terças às 19h30" /></Field>
          </div>
          <div className="flex gap-2 justify-end">
            <button onClick={() => setEditingItemIdx(null)} className="px-3 py-1.5 border border-gray-200 text-xs text-muted-foreground"><X className="w-3 h-3 inline mr-1"/>Cancelar</button>
            <button onClick={saveItem} className="px-3 py-1.5 bg-primary text-white text-xs font-semibold"><Check className="w-3 h-3 inline mr-1"/>Salvar</button>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-0 border-t border-gray-100">
        {block.itens.map((item, i) => (
          <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100">
            <div><span className="text-sm font-medium text-primary w-40 inline-block">{item.label}</span><span className="text-sm text-muted-foreground font-light">{item.info}</span></div>
            <div className="flex gap-1">
              <button onClick={() => openItem(i)} className="p-1.5 text-muted-foreground hover:text-primary"><Pencil className="w-3.5 h-3.5"/></button>
              <button onClick={() => delItem(i)} className="p-1.5 text-muted-foreground hover:text-red-500"><Trash2 className="w-3.5 h-3.5"/></button>
            </div>
          </div>
        ))}
        {block.itens.length === 0 && <p className="text-muted-foreground font-light text-xs py-4 text-center">Nenhum item. Clique em Adicionar.</p>}
      </div>
    </div>
  );
}

// ─── Galeria ──────────────────────────────────────────────────────────────────
function GaleriaSection() {
  const [data, setData] = useState<FotoGaleria[]>([]);
  const [saved, setSaved] = useState(false);
  const [altForm, setAltForm] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => { setData(getGaleriaFotos()); }, []);

  function persist(d: FotoGaleria[]) {
    setData(d); saveGaleriaFotos(d);
    setSaved(true); setTimeout(() => setSaved(false), 1500);
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setUploading(true);
    const arr = Array.from(files);
    let done = 0;
    const results: FotoGaleria[] = [];
    arr.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        results.push({ id: generateId(), imageDataUrl: reader.result as string, alt: file.name.replace(/\.[^/.]+$/, "") });
        done++;
        if (done === arr.length) {
          setUploading(false);
          if (arr.length === 1) {
            setPreviewUrl(results[0].imageDataUrl);
            setAltForm(results[0].alt);
            setShowForm(true);
          } else {
            persist([...getGaleriaFotos(), ...results]);
            if (fileRef.current) fileRef.current.value = "";
          }
        }
      };
      reader.readAsDataURL(file);
    });
  }

  function confirmSingle() {
    if (!previewUrl) return;
    persist([...getGaleriaFotos(), { id: generateId(), imageDataUrl: previewUrl, alt: altForm }]);
    setPreviewUrl(""); setAltForm(""); setShowForm(false);
    if (fileRef.current) fileRef.current.value = "";
  }

  function cancelSingle() {
    setPreviewUrl(""); setAltForm(""); setShowForm(false);
    if (fileRef.current) fileRef.current.value = "";
  }

  function del(id: string) {
    if (confirm("Remover esta foto da galeria?")) persist(data.filter(f => f.id !== id));
  }

  return (
    <div>
      <SectionHeader title="Galeria de Fotos" subtitle="Adicione e remova fotos da página Galeria" saved={saved} />

      <div className="mb-6">
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleFile}
          className="hidden"
        />
        <button
          onClick={() => fileRef.current?.click()}
          disabled={uploading}
          className="flex items-center gap-2 border border-dashed border-secondary px-5 py-3 text-sm text-secondary font-medium hover:bg-secondary/5 transition-colors disabled:opacity-50"
        >
          <Upload className="w-4 h-4" />
          {uploading ? "Carregando..." : "Adicionar fotos"}
        </button>
        <p className="text-xs text-muted-foreground font-light mt-2">Selecione uma ou várias fotos de uma vez.</p>
      </div>

      {showForm && previewUrl && (
        <div className="border border-secondary/30 bg-secondary/5 p-5 mb-6">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Confirmar foto</h3>
          <div className="flex gap-5 mb-4">
            <img src={previewUrl} alt="preview" className="h-28 object-cover border border-gray-100 shrink-0" />
            <div className="flex-1">
              <Field label="Descrição / legenda">
                <Input value={altForm} onChange={setAltForm} placeholder="Ex: Procissão de Corpus Christi" />
              </Field>
            </div>
          </div>
          <div className="flex gap-3 justify-end">
            <button onClick={cancelSingle} className="flex items-center gap-1.5 px-4 py-2 border border-gray-200 text-sm text-muted-foreground hover:border-gray-300 transition-colors"><X className="w-3.5 h-3.5" /> Cancelar</button>
            <button onClick={confirmSingle} className="flex items-center gap-1.5 px-4 py-2 bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors"><Check className="w-3.5 h-3.5" /> Adicionar</button>
          </div>
        </div>
      )}

      {data.length === 0 ? (
        <p className="text-muted-foreground font-light text-sm py-8 text-center">Nenhuma foto adicionada pelo admin ainda.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {data.map(foto => (
            <div key={foto.id} className="relative group border border-gray-100 overflow-hidden">
              <img src={foto.imageDataUrl} alt={foto.alt} className="w-full h-28 object-cover" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button onClick={() => del(foto.id)} className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              {foto.alt && <p className="text-[10px] text-muted-foreground font-light px-2 py-1 truncate">{foto.alt}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────
type SidebarGroup = { label: string; icon: React.ComponentType<{className?:string}>; items: { id: string; label: string }[] };

const SIDEBAR: SidebarGroup[] = [
  { label: "Comunicação", icon: Bell, items: [{ id:"avisos", label:"Avisos" }, { id:"cartazes", label:"Cartazes" }] },
  { label: "Agenda", icon: Calendar, items: [{ id:"eventos", label:"Eventos" }, { id:"horarios", label:"Horários de Missa" }] },
  { label: "Paróquia", icon: MapPin, items: [{ id:"capelas", label:"Capelas" }, { id:"padres", label:"Padres e Diáconos" }, { id:"galeria", label:"Galeria de Fotos" }] },
  { label: "Sacramentos", icon: Cross, items: [
    { id:"batismo", label:"Batismo" }, { id:"confissao", label:"Confissão" },
    { id:"eucaristia", label:"Eucaristia" }, { id:"crisma", label:"Crisma" }, { id:"matrimonio", label:"Matrimônio" },
  ]},
  { label: "Pastorais", icon: Users, items: [
    { id:"rcc", label:"RCC" }, { id:"tlc", label:"TLC" }, { id:"terco-dos-homens", label:"Terço dos Homens" },
    { id:"catequese", label:"Catequese" }, { id:"pascom", label:"PASCOM" },
    { id:"liturgia", label:"Liturgia" }, { id:"coral", label:"Coral" },
    { id:"sagrado-coracao-de-jesus", label:"Sagrado Coração de Jesus" },
  ]},
];

const SACRAMENTOS_KEYS = ["batismo","confissao","eucaristia","crisma","matrimonio"];
const PASTORAIS_KEYS = ["rcc","tlc","terco-dos-homens","catequese","pascom","liturgia","coral","sagrado-coracao-de-jesus"];

function SidebarGroup({ group, active, setActive }: { group: SidebarGroup; active: string; setActive: (s: string) => void }) {
  const [open, setOpen] = useState(() => group.items.some(i => i.id === active));
  useEffect(() => { if (group.items.some(i => i.id === active)) setOpen(true); }, [active]);
  const Icon = group.icon;
  return (
    <div>
      <button onClick={() => setOpen(o => !o)} className="flex items-center justify-between w-full px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
        <span className="flex items-center gap-2"><Icon className="w-3.5 h-3.5" />{group.label}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open?"rotate-180":""}`} />
      </button>
      {open && group.items.map(item => (
        <button key={item.id} onClick={() => setActive(item.id)}
          className={`flex items-center w-full px-6 py-2.5 text-sm transition-colors text-left ${active===item.id?"bg-primary text-white font-medium":"text-muted-foreground hover:text-primary hover:bg-muted/30"}`}>
          {item.label}
        </button>
      ))}
    </div>
  );
}

// ─── Dashboard ────────────────────────────────────────────────────────────────
export default function AdminDashboard() {
  const [active, setActive] = useState("avisos");
  const [, setLocation] = useLocation();

  function renderSection() {
    if (active === "eventos") return <EventosSection />;
    if (active === "avisos") return <AvisosSection />;
    if (active === "horarios") return <HorariosSection />;
    if (active === "cartazes") return <CargazesSection />;
    if (active === "capelas") return <CapelasSection />;
    if (active === "padres") return <PadresSection />;
    if (active === "galeria") return <GaleriaSection />;
    if (SACRAMENTOS_KEYS.includes(active)) return <ContentBlockEditor blockKey={active} groupLabel="Sacramento" />;
    if (PASTORAIS_KEYS.includes(active)) return <ContentBlockEditor blockKey={active} groupLabel="Pastoral" />;
    return null;
  }

  return (
    <div className="min-h-screen bg-muted/20">
      <header className="bg-primary text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-secondary/20 border border-secondary/40 flex items-center justify-center">
            <span className="text-secondary text-xs font-bold">A</span>
          </div>
          <div>
            <span className="font-semibold text-sm">Área Administrativa</span>
            <span className="block text-white/50 text-xs font-light hidden sm:block">Paróquia Nossa Senhora Aparecida</span>
          </div>
        </div>
        <button onClick={() => { logout(); setLocation("/admin"); }} className="flex items-center gap-2 text-white/70 hover:text-white text-sm font-light transition-colors">
          <LogOut className="w-4 h-4" /><span className="hidden sm:inline">Sair</span>
        </button>
      </header>

      <div className="flex min-h-[calc(100vh-60px)]">
        <nav className="bg-white border-r border-gray-100 w-56 shrink-0 overflow-y-auto sticky top-[60px] h-[calc(100vh-60px)]">
          <div className="py-3">
            {SIDEBAR.map(g => <SidebarGroup key={g.label} group={g} active={active} setActive={setActive} />)}
          </div>
        </nav>

        <main className="flex-1 p-8 md:p-10 max-w-4xl min-w-0">
          {renderSection()}
        </main>
      </div>
    </div>
  );
}
