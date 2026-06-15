/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, TrendingUp, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { patientConsultations, patientMessages } from '../../data/mock';

const StatCard = ({ icon, label, value, color }: any) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
    style={{ background: 'var(--color-white)', borderRadius: '20px', padding: '1.5rem', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
    <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
      {icon}
    </div>
    <div>
      <div style={{ fontSize: '1.625rem', fontWeight: 800, color: 'var(--color-text)', fontFamily: 'Playfair Display', lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>{label}</div>
    </div>
  </motion.div>
);

export const PatientDashboard: React.FC = () => {
  const next = patientConsultations.find(c => c.status === 'Confirmada');
  const unread = patientMessages.filter(m => !m.read).length;

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'Playfair Display', fontSize: '1.875rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.375rem' }}>
          Bom dia, Maria 🌿
        </h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9375rem' }}>Como se sente hoje? Aqui está o resumo da sua jornada terapêutica.</p>
      </div>

      {/* Next consultation alert */}
      {next && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          style={{ background: 'linear-gradient(135deg, rgba(15,91,58,0.06), rgba(124,179,66,0.08))', border: '1px solid rgba(15,91,58,0.2)', borderRadius: '18px', padding: '1.25rem 1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'linear-gradient(135deg, #0F5B3A, #7CB342)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
            <Calendar size={18} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--color-primary)' }}>Próxima Consulta</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>{next.date} às {next.time} — {next.therapist} — {next.type}</div>
          </div>
          <div style={{ padding: '0.375rem 0.875rem', borderRadius: '9999px', background: 'rgba(124,179,66,0.15)', color: 'var(--color-primary)', fontSize: '0.75rem', fontWeight: 700 }}>{next.status}</div>
        </motion.div>
      )}

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        <StatCard icon={<Calendar size={22} />} label="Próxima Consulta" value="15 Jun" color="linear-gradient(135deg, #0F5B3A, #2E7D32)" />
        <StatCard icon={<CheckCircle2 size={22} />} label="Consultas Realizadas" value="11" color="linear-gradient(135deg, #2E7D32, #7CB342)" />
        <StatCard icon={<TrendingUp size={22} />} label="Semanas em Terapia" value="24" color="linear-gradient(135deg, #7CB342, #A5D6A7)" />
        <StatCard icon={<MessageCircle size={22} />} label="Mensagens Não Lidas" value={unread} color="linear-gradient(135deg, #0891b2, #06b6d4)" />
      </div>

      {/* Grid: recent consultations + messages */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {/* Recent consultations */}
        <div style={{ background: 'var(--color-white)', borderRadius: '20px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)', overflow: 'hidden' }}>
          <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '1rem', color: 'var(--color-text)' }}>Consultas Recentes</h3>
            <a href="/paciente/consultas" style={{ fontSize: '0.8125rem', color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>Ver todas <ArrowRight size={12} /></a>
          </div>
          <div style={{ padding: '0.5rem 0' }}>
            {patientConsultations.slice(0, 3).map(c => (
              <div key={c.id} style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '1px solid var(--color-border)' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: c.status === 'Confirmada' ? '#7CB342' : c.status === 'Realizada' ? '#94a3b8' : '#f59e0b', flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text)' }}>{c.date} — {c.time}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{c.type} · {c.notes}</div>
                </div>
                <span style={{ padding: '0.2rem 0.625rem', borderRadius: '9999px', fontSize: '0.7rem', fontWeight: 600, background: c.status === 'Confirmada' ? 'rgba(124,179,66,0.15)' : 'rgba(148,163,184,0.15)', color: c.status === 'Confirmada' ? '#0F5B3A' : '#64748b' }}>{c.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Messages */}
        <div style={{ background: 'var(--color-white)', borderRadius: '20px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)', overflow: 'hidden' }}>
          <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '1rem', color: 'var(--color-text)' }}>Mensagens</h3>
            <a href="/paciente/mensagens" style={{ fontSize: '0.8125rem', color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>Ver todas <ArrowRight size={12} /></a>
          </div>
          <div>
            {patientMessages.map(m => (
              <div key={m.id} style={{ padding: '1rem 1.5rem', borderBottom: '1px solid var(--color-border)', background: !m.read ? 'rgba(124,179,66,0.04)' : 'transparent' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.375rem' }}>
                  <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-primary)' }}>{m.from}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{m.time}</span>
                </div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' } as any}>{m.message}</p>
                {!m.read && <div style={{ marginTop: '0.5rem', display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-accent)' }} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
