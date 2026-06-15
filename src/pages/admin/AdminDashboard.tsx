import React from 'react';
import { motion } from 'framer-motion';
import {
  Users, Calendar, CreditCard, TrendingUp, TrendingDown,
  Clock, CheckCircle2, AlertCircle, ArrowRight, Leaf
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const stats = [
  { label: 'Total de Pacientes', value: '248', change: '+12', up: true, icon: Users, color: '#0F5B3A' },
  { label: 'Consultas Este Mês', value: '94', change: '+8', up: true, icon: Calendar, color: '#2E7D32' },
  { label: 'Receita Mensal', value: '€ 8.340', change: '+5%', up: true, icon: CreditCard, color: '#7CB342' },
  { label: 'Taxa de Cancelamento', value: '4.2%', change: '-1.1%', up: false, icon: AlertCircle, color: '#F59E0B' },
];

const revenueData = [
  { mes: 'Jan', receita: 5200, consultas: 68 },
  { mes: 'Fev', receita: 6100, consultas: 72 },
  { mes: 'Mar', receita: 5800, consultas: 70 },
  { mes: 'Abr', receita: 7200, consultas: 85 },
  { mes: 'Mai', receita: 7900, consultas: 88 },
  { mes: 'Jun', receita: 8340, consultas: 94 },
];

const upcomingAppointments = [
  { time: '09:00', patient: 'Ana Costa', therapist: 'Dra. Sofia Mendes', type: 'Terapia Individual', status: 'confirmada' },
  { time: '10:30', patient: 'João Silva', therapist: 'Dr. Rui Ferreira', type: 'Terapia de Casal', status: 'confirmada' },
  { time: '11:00', patient: 'Maria Rodrigues', therapist: 'Dra. Sofia Mendes', type: 'Avaliação', status: 'pendente' },
  { time: '14:00', patient: 'Pedro Santos', therapist: 'Dra. Inês Carvalho', type: 'Terapia Individual', status: 'confirmada' },
  { time: '15:30', patient: 'Carla Neves', therapist: 'Dr. Rui Ferreira', type: 'Terapia Individual', status: 'pendente' },
];

const recentPatients = [
  { name: 'Beatriz Alves', date: 'Hoje, 08:42', avatar: 'BA', status: 'Ativo' },
  { name: 'Tomás Faria', date: 'Ontem, 15:10', avatar: 'TF', status: 'Ativo' },
  { name: 'Luísa Mendes', date: '13 Jun, 11:30', avatar: 'LM', status: 'Em pausa' },
  { name: 'Ricardo Costa', date: '12 Jun, 09:00', avatar: 'RC', status: 'Ativo' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload?.length) {
    return (
      <div style={{
        background: 'var(--color-white)', border: '1px solid var(--color-border)',
        borderRadius: '12px', padding: '0.75rem 1rem',
        boxShadow: '0 8px 24px rgba(15,91,58,0.12)',
      }}>
        <p style={{ fontWeight: 600, color: 'var(--color-primary)', marginBottom: '0.25rem' }}>{label}</p>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
          Receita: <b style={{ color: 'var(--color-text)' }}>€ {payload[0]?.value?.toLocaleString()}</b>
        </p>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
          Consultas: <b style={{ color: 'var(--color-text)' }}>{payload[1]?.value}</b>
        </p>
      </div>
    );
  }
  return null;
};

export const AdminDashboard: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.25rem' }}>
          Bem-vindo, Administrador 👋
        </h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9375rem' }}>
          Aqui está o resumo do dia — {new Date().toLocaleDateString('pt-PT', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            style={{
              background: 'var(--color-white)',
              borderRadius: '20px',
              padding: '1.5rem',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div style={{
                width: '44px', height: '44px',
                background: `${stat.color}15`,
                borderRadius: '12px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <stat.icon size={20} color={stat.color} />
              </div>
              <span style={{
                display: 'flex', alignItems: 'center', gap: '2px',
                fontSize: '0.75rem', fontWeight: 600,
                color: stat.up ? '#16A34A' : '#DC2626',
                background: stat.up ? '#F0FDF4' : '#FEF2F2',
                padding: '0.2rem 0.5rem', borderRadius: '20px',
              }}>
                {stat.up ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
                {stat.change}
              </span>
            </div>
            <p style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.25rem' }}>
              {stat.value}
            </p>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts + Appointments Row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '1.5rem', marginBottom: '1.5rem' }}>
        {/* Revenue Chart */}
        <motion.div
          custom={4}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          style={{
            background: 'var(--color-white)',
            borderRadius: '20px',
            padding: '1.5rem',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-text)' }}>
                Receita & Consultas
              </h2>
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>Últimos 6 meses</p>
            </div>
            <div style={{
              display: 'flex', gap: '1rem', fontSize: '0.75rem', color: 'var(--color-text-muted)',
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ width: '12px', height: '3px', background: '#0F5B3A', borderRadius: '2px', display: 'inline-block' }} />
                Receita
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ width: '12px', height: '3px', background: '#7CB342', borderRadius: '2px', display: 'inline-block' }} />
                Consultas
              </span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="colorReceita" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0F5B3A" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#0F5B3A" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorConsultas" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7CB342" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#7CB342" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
              <XAxis dataKey="mes" tick={{ fontSize: 12, fill: 'var(--color-text-muted)' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: 'var(--color-text-muted)' }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="receita" stroke="#0F5B3A" strokeWidth={2} fill="url(#colorReceita)" />
              <Area type="monotone" dataKey="consultas" stroke="#7CB342" strokeWidth={2} fill="url(#colorConsultas)" />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Today's Appointments */}
        <motion.div
          custom={5}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          style={{
            background: 'var(--color-white)',
            borderRadius: '20px',
            padding: '1.5rem',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-sm)',
            overflow: 'hidden',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-text)' }}>
              Consultas Hoje
            </h2>
            <button style={{
              display: 'flex', alignItems: 'center', gap: '4px',
              color: 'var(--color-primary)', fontSize: '0.8125rem', fontWeight: 600,
              background: 'none', border: 'none', cursor: 'pointer',
            }}>
              Ver todas <ArrowRight size={14} />
            </button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {upcomingAppointments.map((appt, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                padding: '0.625rem', borderRadius: '12px',
                background: 'var(--color-bg)',
              }}>
                <div style={{
                  width: '44px', textAlign: 'center', flexShrink: 0,
                }}>
                  <p style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-primary)' }}>{appt.time}</p>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {appt.patient}
                  </p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {appt.type}
                  </p>
                </div>
                <span style={{
                  padding: '0.2rem 0.5rem',
                  borderRadius: '20px',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  background: appt.status === 'confirmada' ? '#F0FDF4' : '#FFFBEB',
                  color: appt.status === 'confirmada' ? '#16A34A' : '#D97706',
                  flexShrink: 0,
                }}>
                  {appt.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Recent Patients + Quick Actions */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        {/* Recent Patients */}
        <motion.div
          custom={6}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          style={{
            background: 'var(--color-white)',
            borderRadius: '20px',
            padding: '1.5rem',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '1.25rem' }}>
            Pacientes Recentes
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {recentPatients.map((patient, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <div style={{
                  width: '40px', height: '40px',
                  background: 'linear-gradient(135deg, #0F5B3A, #7CB342)',
                  borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontWeight: 700, fontSize: '0.75rem',
                  flexShrink: 0,
                }}>
                  {patient.avatar}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text)' }}>{patient.name}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{patient.date}</p>
                </div>
                <span style={{
                  padding: '0.2rem 0.625rem', borderRadius: '20px',
                  fontSize: '0.6875rem', fontWeight: 600,
                  background: patient.status === 'Ativo' ? '#F0FDF4' : '#F8FAFC',
                  color: patient.status === 'Ativo' ? '#16A34A' : '#64748B',
                }}>
                  {patient.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          custom={7}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          style={{
            background: 'linear-gradient(135deg, #0F5B3A 0%, #1a4d30 100%)',
            borderRadius: '20px',
            padding: '1.5rem',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 700, color: 'white', marginBottom: '1.25rem' }}>
            Ações Rápidas
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem' }}>
            {[
              { label: 'Nova Consulta', icon: Calendar },
              { label: 'Novo Paciente', icon: Users },
              { label: 'Ver Relatório', icon: TrendingUp },
              { label: 'Pendentes', icon: Clock },
            ].map(({ label, icon: Icon }) => (
              <button key={label} style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '14px',
                padding: '1rem',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'background 200ms',
                fontSize: '0.8125rem',
                fontWeight: 500,
              }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
              >
                <Icon size={22} />
                {label}
              </button>
            ))}
          </div>

          <div style={{ marginTop: '1.25rem', padding: '1rem', background: 'rgba(255,255,255,0.07)', borderRadius: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Leaf size={14} color="#A5D6A7" />
              <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>Resumo do Dia</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {[
                { icon: CheckCircle2, label: '7 confirmadas', color: '#86EFAC' },
                { icon: Clock, label: '2 pendentes', color: '#FCD34D' },
                { icon: AlertCircle, label: '0 canceladas', color: '#FCA5A5' },
              ].map(({ icon: Icon, label, color }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Icon size={13} color={color} />
                  <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
