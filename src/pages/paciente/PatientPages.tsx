/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { patientConsultations, patientDocuments, patientMessages, patientPayments } from '../../data/mock';

export const PatientConsultas: React.FC = () => (
  <div>
    <h1 style={{ fontFamily: 'Playfair Display', fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.5rem' }}>Histórico de Consultas</h1>
    <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Todas as suas sessões de psicoterapia.</p>
    <div style={{ background: 'var(--color-white)', borderRadius: '20px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)', overflow: 'hidden' }}>
      <table className="data-table">
        <thead>
          <tr><th>Data</th><th>Hora</th><th>Terapeuta</th><th>Tipo</th><th>Notas</th><th>Estado</th></tr>
        </thead>
        <tbody>
          {patientConsultations.map(c => (
            <tr key={c.id}>
              <td style={{ fontWeight: 600 }}>{c.date}</td>
              <td>{c.time}</td>
              <td style={{ color: 'var(--color-primary)', fontWeight: 500 }}>{c.therapist}</td>
              <td><span className={`badge ${c.type === 'Presencial' ? 'badge-green' : 'badge-yellow'}`}>{c.type}</span></td>
              <td style={{ color: 'var(--color-text-muted)' }}>{c.notes}</td>
              <td><span className={`badge ${c.status === 'Confirmada' ? 'badge-green' : 'badge-gray'}`}>{c.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export const PatientDocumentos: React.FC = () => {

  return (
    <div>
      <h1 style={{ fontFamily: 'Playfair Display', fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.5rem' }}>Documentos</h1>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Os seus documentos clínicos e relatórios.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {patientDocuments.map((d: any) => (
          <div key={d.id} style={{ background: 'var(--color-white)', borderRadius: '16px', padding: '1.25rem 1.5rem', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg, rgba(15,91,58,0.1), rgba(124,179,66,0.1))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', flexShrink: 0, fontSize: '0.75rem', fontWeight: 700 }}>PDF</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--color-text)', marginBottom: '0.25rem' }}>{d.name}</div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>{d.date} · {d.size}</div>
            </div>
            <button style={{ padding: '0.5rem 1rem', borderRadius: '9999px', border: '1.5px solid var(--color-border)', background: 'transparent', color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.8125rem', cursor: 'pointer', transition: 'all 0.2s' }}>
              Descarregar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export const PatientMensagens: React.FC = () => {

  const [selected, setSelected] = React.useState(0);
  const msg = patientMessages[selected];
  return (
    <div>
      <h1 style={{ fontFamily: 'Playfair Display', fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.5rem' }}>Mensagens</h1>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Comunicação segura com a sua equipa terapêutica.</p>
      <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '1.5rem', height: '500px' }}>
        {/* List */}
        <div style={{ background: 'var(--color-white)', borderRadius: '20px', border: '1px solid var(--color-border)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          {patientMessages.map((m: any, i: number) => (
            <div key={m.id} onClick={() => setSelected(i)} style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--color-border)', cursor: 'pointer', background: i === selected ? 'rgba(124,179,66,0.07)' : !m.read ? 'rgba(124,179,66,0.03)' : 'transparent', borderLeft: i === selected ? '3px solid var(--color-accent)' : '3px solid transparent', transition: 'all 0.15s' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.375rem' }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-primary)' }}>{m.from}</span>
                {!m.read && <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-accent)', flexShrink: 0, marginTop: '3px' }} />}
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.message}</p>
              <div style={{ fontSize: '0.6875rem', color: 'var(--color-text-muted)', marginTop: '0.375rem' }}>{m.time}</div>
            </div>
          ))}
        </div>
        {/* Message view */}
        <div style={{ background: 'var(--color-white)', borderRadius: '20px', border: '1px solid var(--color-border)', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ paddingBottom: '1rem', borderBottom: '1px solid var(--color-border)', marginBottom: '1.5rem' }}>
            <div style={{ fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.25rem' }}>{msg.from}</div>
            <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>{msg.time}</div>
          </div>
          <p style={{ lineHeight: 1.85, color: 'var(--color-text)', fontSize: '0.9375rem', flex: 1 }}>{msg.message}</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem' }}>
            <input className="form-input" placeholder="Escrever resposta..." style={{ flex: 1 } as any} />
            <button style={{ padding: '0.75rem 1.5rem', borderRadius: '9999px', background: 'linear-gradient(135deg, #0F5B3A, #2E7D32)', color: 'white', border: 'none', fontWeight: 700, fontSize: '0.875rem', cursor: 'pointer' }}>Enviar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PatientPagamentos: React.FC = () => {

  const total = patientPayments.reduce((s: number, p: any) => s + p.amount, 0);
  return (
    <div>
      <h1 style={{ fontFamily: 'Playfair Display', fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.5rem' }}>Pagamentos</h1>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>Histórico dos seus pagamentos e faturas.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        {[
          { label: 'Total Pago', value: `${(total/100).toLocaleString()} Kz`, color: '#0F5B3A' },
          { label: 'Pendente', value: '8.500 Kz', color: '#f59e0b' },
          { label: 'Sessões Pagas', value: '3', color: '#2E7D32' },
        ].map(s => (
          <div key={s.label} style={{ background: 'var(--color-white)', borderRadius: '16px', padding: '1.25rem', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>{s.label}</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: s.color, fontFamily: 'Playfair Display' }}>{s.value}</div>
          </div>
        ))}
      </div>
      <div style={{ background: 'var(--color-white)', borderRadius: '20px', border: '1px solid var(--color-border)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
        <table className="data-table">
          <thead><tr><th>Data</th><th>Descrição</th><th>Valor</th><th>Estado</th></tr></thead>
          <tbody>
            {patientPayments.map((p: any) => (
              <tr key={p.id}>
                <td style={{ fontWeight: 600 }}>{p.date}</td>
                <td>{p.description}</td>
                <td style={{ fontWeight: 700, color: 'var(--color-primary)' }}>{(p.amount / 100).toLocaleString()} Kz</td>
                <td><span className={`badge ${p.status === 'Pago' ? 'badge-green' : 'badge-yellow'}`}>{p.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const PatientAgendamento: React.FC = () => {
  const days = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const times = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'];
  const [sel, setSel] = React.useState<string | null>(null);
  return (
    <div>
      <h1 style={{ fontFamily: 'Playfair Display', fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.5rem' }}>Agendar Consulta</h1>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Escolha o dia e horário que preferir.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        <div style={{ background: 'var(--color-white)', borderRadius: '20px', padding: '1.75rem', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
          <h3 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '1rem', color: 'var(--color-text)', marginBottom: '1.25rem' }}>Junho 2025</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '0.5rem' }}>
            {days.map(d => <div key={d} style={{ textAlign: 'center', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)', paddingBottom: '0.5rem' }}>{d}</div>)}
            {[...Array(18)].map((_, i) => {
              const day = i + 16;
              const key = `${day}`;
              const isBooked = [17, 19, 22].includes(day);
              const isSelected = sel === key;
              return (
                <button key={i} onClick={() => !isBooked && setSel(key)} disabled={isBooked}
                  style={{ aspectRatio: '1', borderRadius: '10px', border: isSelected ? '2px solid var(--color-accent)' : '1.5px solid var(--color-border)', background: isBooked ? 'rgba(148,163,184,0.1)' : isSelected ? 'rgba(124,179,66,0.15)' : 'transparent', color: isBooked ? 'var(--color-text-muted)' : 'var(--color-text)', fontWeight: isSelected ? 700 : 500, fontSize: '0.8125rem', cursor: isBooked ? 'not-allowed' : 'pointer', transition: 'all 0.15s', opacity: isBooked ? 0.5 : 1 }}>
                  {day}
                </button>
              );
            })}
          </div>
        </div>
        <div style={{ background: 'var(--color-white)', borderRadius: '20px', padding: '1.75rem', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
          <h3 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '1rem', color: 'var(--color-text)', marginBottom: '1.25rem' }}>Horários Disponíveis</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
            {times.map(t => (
              <button key={t} style={{ padding: '0.75rem', borderRadius: '12px', border: '1.5px solid var(--color-border)', background: 'transparent', color: 'var(--color-text)', fontWeight: 500, fontSize: '0.875rem', cursor: 'pointer', transition: 'all 0.15s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-accent)'; (e.currentTarget as HTMLElement).style.background = 'rgba(124,179,66,0.08)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}>
                {t}
              </button>
            ))}
          </div>
          <button style={{ width: '100%', padding: '0.875rem', borderRadius: '9999px', background: 'linear-gradient(135deg, #0F5B3A, #2E7D32)', color: 'white', fontWeight: 700, border: 'none', cursor: 'pointer', fontSize: '0.9375rem', boxShadow: '0 4px 14px rgba(15,91,58,0.3)' }}>
            Confirmar Agendamento
          </button>
        </div>
      </div>
    </div>
  );
};

export const PatientPerfil: React.FC = () => (
  <div>
    <h1 style={{ fontFamily: 'Playfair Display', fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.5rem' }}>O Meu Perfil</h1>
    <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Gerir os seus dados pessoais e preferências.</p>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
      <div style={{ background: 'var(--color-white)', borderRadius: '20px', padding: '2rem', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--color-border)' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg, #0F5B3A, #7CB342)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '1.5rem', fontFamily: 'Playfair Display' }}>M</div>
          <div>
            <div style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '1.125rem', color: 'var(--color-text)' }}>Maria da Silva</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Paciente desde Janeiro 2025</div>
          </div>
        </div>
        {[{ label: 'Nome Completo', val: 'Maria da Silva' }, { label: 'Email', val: 'maria@email.com' }, { label: 'Telefone', val: '+244 912 345 678' }, { label: 'Data de Nascimento', val: '15/03/1990' }].map(f => (
          <div key={f.label} style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.375rem' }}>{f.label}</label>
            <input className="form-input" defaultValue={f.val} />
          </div>
        ))}
        <button style={{ width: '100%', padding: '0.875rem', borderRadius: '9999px', background: 'linear-gradient(135deg, #0F5B3A, #2E7D32)', color: 'white', fontWeight: 700, border: 'none', cursor: 'pointer', fontSize: '0.9375rem' }}>
          Guardar Alterações
        </button>
      </div>
    </div>
  </div>
);
