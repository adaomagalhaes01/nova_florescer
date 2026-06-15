import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar, BarChart3,
  Search, Plus, Filter, ChevronDown, Mail,
  TrendingUp, DollarSign, FileText, CheckCircle2,
  Edit, Trash2, Eye, Download
} from 'lucide-react';

// ─── PACIENTES ───────────────────────────────────────────────────────────────
const mockPatients = [
  { id: 1, name: 'Ana Costa', email: 'ana.costa@email.com', phone: '912 345 678', therapist: 'Dra. Sofia Mendes', sessions: 12, status: 'Ativo', joined: '03 Jan 2025', avatar: 'AC' },
  { id: 2, name: 'João Silva', email: 'joao.silva@email.com', phone: '913 456 789', therapist: 'Dr. Rui Ferreira', sessions: 8, status: 'Ativo', joined: '15 Fev 2025', avatar: 'JS' },
  { id: 3, name: 'Maria Rodrigues', email: 'maria.r@email.com', phone: '914 567 890', therapist: 'Dra. Sofia Mendes', sessions: 3, status: 'Ativo', joined: '22 Abr 2025', avatar: 'MR' },
  { id: 4, name: 'Pedro Santos', email: 'pedro.santos@email.com', phone: '915 678 901', therapist: 'Dra. Inês Carvalho', sessions: 21, status: 'Em pausa', joined: '10 Nov 2024', avatar: 'PS' },
  { id: 5, name: 'Carla Neves', email: 'carla.neves@email.com', phone: '916 789 012', therapist: 'Dr. Rui Ferreira', sessions: 6, status: 'Ativo', joined: '01 Mar 2025', avatar: 'CN' },
  { id: 6, name: 'Beatriz Alves', email: 'beatriz.alves@email.com', phone: '917 890 123', therapist: 'Dra. Inês Carvalho', sessions: 1, status: 'Novo', joined: '15 Jun 2025', avatar: 'BA' },
];

const PacientesPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const filtered = mockPatients.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-text)' }}>Pacientes</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>{mockPatients.length} pacientes registados</p>
        </div>
        <button style={{
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          padding: '0.625rem 1.25rem', borderRadius: '12px',
          background: 'linear-gradient(135deg, #0F5B3A, #2E7D32)',
          color: 'white', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.875rem',
          boxShadow: '0 4px 12px rgba(15,91,58,0.25)',
        }}>
          <Plus size={16} /> Novo Paciente
        </button>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem' }}>
        <div style={{ position: 'relative', flex: 1 }}>
          <Search size={16} style={{ position: 'absolute', left: '0.875rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Pesquisar paciente..."
            className="form-input"
            style={{ paddingLeft: '2.5rem' }}
          />
        </div>
        <button style={{
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          padding: '0.625rem 1rem', borderRadius: '12px',
          border: '1.5px solid var(--color-border)', background: 'var(--color-white)',
          color: 'var(--color-text-muted)', cursor: 'pointer', fontSize: '0.875rem',
        }}>
          <Filter size={15} /> Filtrar
        </button>
      </div>

      {/* Table */}
      <div style={{ background: 'var(--color-white)', borderRadius: '20px', border: '1px solid var(--color-border)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
        <table className="data-table">
          <thead>
            <tr>
              <th>Paciente</th>
              <th>Contacto</th>
              <th>Terapeuta</th>
              <th>Sessões</th>
              <th>Estado</th>
              <th>Desde</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(p => (
              <tr key={p.id}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '36px', height: '36px',
                      background: 'linear-gradient(135deg, #0F5B3A, #7CB342)',
                      borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'white', fontWeight: 700, fontSize: '0.75rem', flexShrink: 0,
                    }}>{p.avatar}</div>
                    <div>
                      <p style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-text)' }}>{p.name}</p>
                      <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>#{String(p.id).padStart(4, '0')}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-text)' }}>{p.email}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{p.phone}</p>
                </td>
                <td style={{ fontSize: '0.875rem', color: 'var(--color-text)' }}>{p.therapist}</td>
                <td style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-primary)' }}>{p.sessions}</td>
                <td>
                  <span style={{
                    padding: '0.2rem 0.625rem', borderRadius: '20px',
                    fontSize: '0.75rem', fontWeight: 600,
                    background: p.status === 'Ativo' ? '#F0FDF4' : p.status === 'Novo' ? '#EFF6FF' : '#F8FAFC',
                    color: p.status === 'Ativo' ? '#16A34A' : p.status === 'Novo' ? '#2563EB' : '#64748B',
                  }}>{p.status}</span>
                </td>
                <td style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>{p.joined}</td>
                <td>
                  <div style={{ display: 'flex', gap: '0.375rem' }}>
                    {[Eye, Edit, Trash2].map((Icon, i) => (
                      <button key={i} style={{
                        width: '32px', height: '32px', borderRadius: '8px',
                        border: '1px solid var(--color-border)',
                        background: 'none', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'var(--color-text-muted)',
                        transition: 'all 150ms',
                      }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-bg)'; e.currentTarget.style.color = 'var(--color-primary)'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'var(--color-text-muted)'; }}
                      >
                        <Icon size={14} />
                      </button>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// ─── AGENDA ──────────────────────────────────────────────────────────────────
const agendaSlots = [
  { time: '08:00', mon: null, tue: { name: 'Ana Costa', type: 'Individual' }, wed: null, thu: { name: 'João Silva', type: 'Casal' }, fri: null },
  { time: '09:00', mon: { name: 'Maria R.', type: 'Individual' }, tue: null, wed: { name: 'Pedro S.', type: 'Avaliação' }, thu: null, fri: { name: 'Ana Costa', type: 'Individual' } },
  { time: '10:00', mon: null, tue: { name: 'Carla N.', type: 'Individual' }, wed: null, thu: { name: 'Maria R.', type: 'Individual' }, fri: null },
  { time: '11:00', mon: { name: 'Beatriz A.', type: 'Individual' }, tue: null, wed: { name: 'João S.', type: 'Casal' }, thu: null, fri: { name: 'Pedro S.', type: 'Individual' } },
  { time: '14:00', mon: null, tue: { name: 'Pedro S.', type: 'Individual' }, wed: null, thu: { name: 'Carla N.', type: 'Individual' }, fri: null },
  { time: '15:00', mon: { name: 'João S.', type: 'Casal' }, tue: null, wed: { name: 'Ana Costa', type: 'Individual' }, thu: null, fri: { name: 'Maria R.', type: 'Individual' } },
  { time: '16:00', mon: null, tue: { name: 'Beatriz A.', type: 'Individual' }, wed: null, thu: { name: 'João S.', type: 'Individual' }, fri: null },
];

const days = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'];
const dayKeys = ['mon', 'tue', 'wed', 'thu', 'fri'] as const;

const AgendaPage: React.FC = () => (
  <div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
      <div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-text)' }}>Agenda Semanal</h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Semana de 9–13 Junho 2025</p>
      </div>
      <button style={{
        display: 'flex', alignItems: 'center', gap: '0.5rem',
        padding: '0.625rem 1.25rem', borderRadius: '12px',
        background: 'linear-gradient(135deg, #0F5B3A, #2E7D32)',
        color: 'white', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.875rem',
      }}>
        <Plus size={16} /> Nova Consulta
      </button>
    </div>

    <div style={{ background: 'var(--color-white)', borderRadius: '20px', border: '1px solid var(--color-border)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
      {/* Header row */}
      <div style={{ display: 'grid', gridTemplateColumns: '80px repeat(5, 1fr)', background: 'var(--color-bg)', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ padding: '1rem', fontSize: '0.75rem', color: 'var(--color-text-muted)' }} />
        {days.map((d, i) => (
          <div key={d} style={{ padding: '1rem', textAlign: 'center', borderLeft: '1px solid var(--color-border)' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{d}</p>
            <p style={{ fontSize: '1.25rem', fontWeight: 700, color: i === 0 ? 'var(--color-primary)' : 'var(--color-text)', marginTop: '0.25rem' }}>{9 + i}</p>
          </div>
        ))}
      </div>

      {/* Slots */}
      {agendaSlots.map((slot, si) => (
        <div key={slot.time} style={{ display: 'grid', gridTemplateColumns: '80px repeat(5, 1fr)', borderBottom: si < agendaSlots.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
          <div style={{ padding: '0.75rem', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', paddingRight: '1rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>{slot.time}</span>
          </div>
          {dayKeys.map((dk) => {
            const appt = slot[dk];
            return (
              <div key={dk} style={{ borderLeft: '1px solid var(--color-border)', padding: '0.375rem', minHeight: '60px' }}>
                {appt && (
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(15,91,58,0.08), rgba(124,179,66,0.08))',
                    border: '1px solid rgba(15,91,58,0.15)',
                    borderRadius: '8px', padding: '0.375rem 0.5rem',
                    cursor: 'pointer', height: '100%',
                  }}>
                    <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-primary)' }}>{appt.name}</p>
                    <p style={{ fontSize: '0.6875rem', color: 'var(--color-text-muted)' }}>{appt.type}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  </div>
);

// ─── FINANCEIRO ──────────────────────────────────────────────────────────────
const transactions = [
  { id: 'FAT-0042', patient: 'Ana Costa', amount: 75, date: '15 Jun 2025', status: 'Pago', method: 'MB Way' },
  { id: 'FAT-0041', patient: 'João Silva', amount: 120, date: '14 Jun 2025', status: 'Pago', method: 'Cartão' },
  { id: 'FAT-0040', patient: 'Maria Rodrigues', amount: 75, date: '13 Jun 2025', status: 'Pendente', method: 'Transferência' },
  { id: 'FAT-0039', patient: 'Pedro Santos', amount: 75, date: '12 Jun 2025', status: 'Pago', method: 'MB Way' },
  { id: 'FAT-0038', patient: 'Carla Neves', amount: 75, date: '11 Jun 2025', status: 'Em atraso', method: 'Cartão' },
  { id: 'FAT-0037', patient: 'Beatriz Alves', amount: 90, date: '10 Jun 2025', status: 'Pago', method: 'Numerário' },
];

const FinanceiroPage: React.FC = () => (
  <div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
      <div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-text)' }}>Financeiro</h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Gestão de faturação e pagamentos</p>
      </div>
      <button style={{
        display: 'flex', alignItems: 'center', gap: '0.5rem',
        padding: '0.625rem 1.25rem', borderRadius: '12px',
        border: '1.5px solid var(--color-border)', background: 'var(--color-white)',
        color: 'var(--color-text)', cursor: 'pointer', fontWeight: 600, fontSize: '0.875rem',
      }}>
        <Download size={16} /> Exportar
      </button>
    </div>

    {/* Summary Cards */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
      {[
        { label: 'Receita do Mês', value: '€ 8.340', sub: '+5% vs mês anterior', color: '#0F5B3A', bg: '#F0FDF4' },
        { label: 'A Receber', value: '€ 525', sub: '7 faturas pendentes', color: '#D97706', bg: '#FFFBEB' },
        { label: 'Em Atraso', value: '€ 75', sub: '1 fatura em atraso', color: '#DC2626', bg: '#FEF2F2' },
      ].map(s => (
        <div key={s.label} style={{ background: 'var(--color-white)', borderRadius: '16px', padding: '1.25rem', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ width: '40px', height: '40px', background: s.bg, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
            <DollarSign size={18} color={s.color} />
          </div>
          <p style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-text)' }}>{s.value}</p>
          <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>{s.label}</p>
          <p style={{ fontSize: '0.75rem', color: s.color, marginTop: '0.25rem', fontWeight: 500 }}>{s.sub}</p>
        </div>
      ))}
    </div>

    <div style={{ background: 'var(--color-white)', borderRadius: '20px', border: '1px solid var(--color-border)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
      <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-text)' }}>Transações Recentes</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--color-text-muted)', cursor: 'pointer' }}>
          Junho 2025 <ChevronDown size={14} />
        </div>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th>Fatura</th>
            <th>Paciente</th>
            <th>Valor</th>
            <th>Data</th>
            <th>Método</th>
            <th>Estado</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(t => (
            <tr key={t.id}>
              <td style={{ fontFamily: 'monospace', fontSize: '0.8125rem', color: 'var(--color-primary)', fontWeight: 600 }}>{t.id}</td>
              <td style={{ fontSize: '0.875rem', fontWeight: 500 }}>{t.patient}</td>
              <td style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-text)' }}>€ {t.amount}</td>
              <td style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>{t.date}</td>
              <td style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>{t.method}</td>
              <td>
                <span style={{
                  padding: '0.2rem 0.625rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600,
                  background: t.status === 'Pago' ? '#F0FDF4' : t.status === 'Pendente' ? '#FFFBEB' : '#FEF2F2',
                  color: t.status === 'Pago' ? '#16A34A' : t.status === 'Pendente' ? '#D97706' : '#DC2626',
                }}>{t.status}</span>
              </td>
              <td>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center' }}>
                  <Download size={15} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// ─── RELATÓRIOS ──────────────────────────────────────────────────────────────
const RelatoriosPage: React.FC = () => (
  <div>
    <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.25rem' }}>Relatórios</h1>
    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>Análise de desempenho e indicadores</p>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
      {[
        { title: 'Relatório Mensal', desc: 'Resumo completo de junho 2025', icon: FileText, color: '#0F5B3A' },
        { title: 'Taxa de Retenção', desc: '94.2% — acima da média do setor', icon: TrendingUp, color: '#7CB342' },
        { title: 'Satisfação dos Pacientes', desc: '4.9/5 — baseado em 38 avaliações', icon: CheckCircle2, color: '#2E7D32' },
        { title: 'Ocupação da Agenda', desc: '87% — alta eficiência operacional', icon: Calendar, color: '#0F5B3A' },
        { title: 'Receita por Terapeuta', desc: 'Análise individual de performance', icon: BarChart3, color: '#7CB342' },
        { title: 'Relatório Anual 2025', desc: 'Dados acumulados do ano em curso', icon: DollarSign, color: '#2E7D32' },
      ].map(r => (
        <div key={r.title} style={{
          background: 'var(--color-white)', borderRadius: '20px', padding: '1.5rem',
          border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)',
          cursor: 'pointer', transition: 'transform 200ms, box-shadow 200ms',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
        >
          <div style={{ width: '44px', height: '44px', background: `${r.color}12`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
            <r.icon size={20} color={r.color} />
          </div>
          <h3 style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--color-text)', marginBottom: '0.25rem' }}>{r.title}</h3>
          <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>{r.desc}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.875rem', color: 'var(--color-primary)', fontSize: '0.8125rem', fontWeight: 600 }}>
            <Download size={13} /> Exportar PDF
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ─── EQUIPA ──────────────────────────────────────────────────────────────────
const equipaMembers = [
  { name: 'Dra. Sofia Mendes', role: 'Psicóloga Clínica', specialty: 'Terapia Cognitivo-Comportamental', patients: 38, sessions: 142, avatar: 'SM', color: '#0F5B3A' },
  { name: 'Dr. Rui Ferreira', role: 'Psicoterapeuta', specialty: 'Terapia de Casal e Família', patients: 22, sessions: 89, avatar: 'RF', color: '#2E7D32' },
  { name: 'Dra. Inês Carvalho', role: 'Psicóloga Clínica', specialty: 'Psicologia Infantil e Adolescentes', patients: 31, sessions: 118, avatar: 'IC', color: '#7CB342' },
  { name: 'Dr. André Lopes', role: 'Psiquiatra Consultor', specialty: 'Avaliação e Diagnóstico', patients: 15, sessions: 52, avatar: 'AL', color: '#0F5B3A' },
];

const EquipaPage: React.FC = () => (
  <div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
      <div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-text)' }}>Equipa</h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Gestão de terapeutas e colaboradores</p>
      </div>
      <button style={{
        display: 'flex', alignItems: 'center', gap: '0.5rem',
        padding: '0.625rem 1.25rem', borderRadius: '12px',
        background: 'linear-gradient(135deg, #0F5B3A, #2E7D32)',
        color: 'white', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.875rem',
      }}>
        <Plus size={16} /> Adicionar Membro
      </button>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
      {equipaMembers.map(m => (
        <div key={m.name} style={{
          background: 'var(--color-white)', borderRadius: '20px', padding: '1.5rem',
          border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)',
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem' }}>
            <div style={{
              width: '56px', height: '56px', flexShrink: 0,
              background: `linear-gradient(135deg, ${m.color}, ${m.color}99)`,
              borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'white', fontWeight: 700, fontSize: '1rem',
            }}>{m.avatar}</div>
            <div>
              <h3 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--color-text)' }}>{m.name}</h3>
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-primary)', fontWeight: 500 }}>{m.role}</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.125rem' }}>{m.specialty}</p>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            <div style={{ background: 'var(--color-bg)', borderRadius: '12px', padding: '0.75rem', textAlign: 'center' }}>
              <p style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary)' }}>{m.patients}</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Pacientes</p>
            </div>
            <div style={{ background: 'var(--color-bg)', borderRadius: '12px', padding: '0.75rem', textAlign: 'center' }}>
              <p style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary)' }}>{m.sessions}</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Sessões</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
            <button style={{ flex: 1, padding: '0.5rem', borderRadius: '10px', border: '1.5px solid var(--color-border)', background: 'none', cursor: 'pointer', fontSize: '0.8125rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.375rem' }}>
              <Mail size={13} /> Email
            </button>
            <button style={{ flex: 1, padding: '0.5rem', borderRadius: '10px', border: '1.5px solid var(--color-border)', background: 'none', cursor: 'pointer', fontSize: '0.8125rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.375rem' }}>
              <Edit size={13} /> Editar
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ─── CONFIGURAÇÕES ────────────────────────────────────────────────────────────
const ConfiguracoesPage: React.FC = () => (
  <div>
    <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.25rem' }}>Configurações</h1>
    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>Preferências da plataforma</p>

    <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '1.5rem' }}>
      {/* Sidebar nav */}
      <div style={{ background: 'var(--color-white)', borderRadius: '16px', border: '1px solid var(--color-border)', padding: '0.75rem', height: 'fit-content' }}>
        {['Perfil da Clínica', 'Equipa & Permissões', 'Notificações', 'Integrações', 'Segurança', 'Faturação'].map((item, i) => (
          <button key={item} style={{
            display: 'block', width: '100%', textAlign: 'left',
            padding: '0.625rem 0.875rem', borderRadius: '10px',
            background: i === 0 ? 'rgba(15,91,58,0.08)' : 'none',
            border: 'none', cursor: 'pointer',
            color: i === 0 ? 'var(--color-primary)' : 'var(--color-text-muted)',
            fontSize: '0.875rem', fontWeight: i === 0 ? 600 : 400,
            transition: 'all 150ms',
          }}>
            {item}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ background: 'var(--color-white)', borderRadius: '20px', border: '1px solid var(--color-border)', padding: '2rem', boxShadow: 'var(--shadow-sm)' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--color-border)' }}>
          Perfil da Clínica
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
          {[
            { label: 'Nome da Clínica', value: 'Novo Florescer Terapêutico' },
            { label: 'NIF', value: '512 345 678' },
            { label: 'Email de Contacto', value: 'geral@novoflorescer.pt' },
            { label: 'Telefone', value: '+351 21 234 5678' },
            { label: 'Endereço', value: 'Rua das Flores, 42, Lisboa' },
            { label: 'Website', value: 'www.novoflorescer.pt' },
          ].map(f => (
            <div key={f.label}>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 500, color: 'var(--color-text-muted)', marginBottom: '0.375rem' }}>{f.label}</label>
              <input defaultValue={f.value} className="form-input" style={{ fontSize: '0.875rem' }} />
            </div>
          ))}
        </div>
        <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
          <button style={{ padding: '0.625rem 1.25rem', borderRadius: '12px', border: '1.5px solid var(--color-border)', background: 'none', cursor: 'pointer', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Cancelar</button>
          <button style={{ padding: '0.625rem 1.25rem', borderRadius: '12px', background: 'linear-gradient(135deg, #0F5B3A, #2E7D32)', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.875rem' }}>Guardar Alterações</button>
        </div>
      </div>
    </div>
  </div>
);

// ─── ROUTER ───────────────────────────────────────────────────────────────────
interface AdminPagesProps {
  page: 'pacientes' | 'agenda' | 'financeiro' | 'relatorios' | 'equipa' | 'configuracoes';
}

export const AdminPages: React.FC<AdminPagesProps> = ({ page }) => {
  const map: Record<string, React.ReactNode> = {
    pacientes: <PacientesPage />,
    agenda: <AgendaPage />,
    financeiro: <FinanceiroPage />,
    relatorios: <RelatoriosPage />,
    equipa: <EquipaPage />,
    configuracoes: <ConfiguracoesPage />,
  };
  return <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>{map[page]}</motion.div>;
};
