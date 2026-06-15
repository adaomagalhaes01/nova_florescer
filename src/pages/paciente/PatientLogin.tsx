import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Leaf, Lock, Mail, ArrowRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export const PatientLogin: React.FC = () => {
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toggleTheme, isDark } = useTheme();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); navigate('/paciente'); }, 1200);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', background: 'var(--color-bg)', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative left panel */}
      <div style={{ flex: '0 0 45%', background: 'linear-gradient(145deg, #0A3D25, #0F5B3A, #1A7A4A)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem', position: 'relative', overflow: 'hidden' }} className="login-panel">
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: '-80px', left: '-80px', width: '300px', height: '300px', background: 'rgba(255,255,255,0.04)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '-60px', right: '-60px', width: '250px', height: '250px', background: 'rgba(124,179,66,0.08)', borderRadius: '50%' }} />
        {/* Floating leaves */}
        {[0,1,2,3,4].map(i => (
          <div key={i} className="animate-float" style={{ position: 'absolute', opacity: 0.08, animationDelay: `${i*1.3}s`, ...(i%2===0?{top:`${15+i*16}%`,left:`${8+i*2}%`}:{top:`${25+i*12}%`,right:`${8+i*2}%`}) }}>
            <svg width="40" height="60" viewBox="0 0 40 60" fill="white">
              <path d="M20 60 Q-5 40 5 15 Q20 -5 35 15 Q45 40 20 60Z" />
            </svg>
          </div>
        ))}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', color: 'white', position: 'relative', zIndex: 1 }}>
          <img src="/logo.jpeg" alt="Logo" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.3)', marginBottom: '1.5rem' }} />
          <h1 style={{ fontFamily: 'Playfair Display', fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.2 }}>
            Novo Florescer<br />Terapêutico
          </h1>
          <p style={{ opacity: 0.75, fontSize: '0.9375rem', lineHeight: 1.75, maxWidth: '280px', margin: '0 auto 2rem' }}>
            Bem-vindo à sua área pessoal. Acompanhe as suas consultas e evolução terapêutica.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', maxWidth: '240px', margin: '0 auto' }}>
            {['Consultas e Histórico', 'Documentos Clínicos', 'Mensagens Seguras', 'Agendamentos'].map(f => (
              <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.875rem', opacity: 0.85 }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(165,214,167,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem' }}>✓</div>
                {f}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right form */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', position: 'relative' }}>
        {/* Top bar */}
        <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <button onClick={toggleTheme} style={{ width: '38px', height: '38px', borderRadius: '50%', border: '1.5px solid var(--color-border)', background: 'var(--color-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--color-text-muted)' }}>
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link to="/" style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', textDecoration: 'none', fontWeight: 500 }}>← Voltar ao site</Link>
        </div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}
          style={{ width: '100%', maxWidth: '400px' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontFamily: 'Playfair Display', fontSize: '2rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.5rem' }}>Bem-vindo de volta</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9375rem' }}>Aceda à sua área do paciente</p>
          </div>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem' }}>Email</label>
              <div style={{ position: 'relative' }}>
                <Mail size={16} style={{ position: 'absolute', left: '0.875rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                <input className="form-input" type="email" defaultValue="paciente@email.com" placeholder="o.seu@email.com" style={{ paddingLeft: '2.625rem' } as any} />
              </div>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem' }}>Password</label>
              <div style={{ position: 'relative' }}>
                <Lock size={16} style={{ position: 'absolute', left: '0.875rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                <input className="form-input" type={showPass ? 'text' : 'password'} defaultValue="password123" style={{ paddingLeft: '2.625rem', paddingRight: '2.625rem' } as any} />
                <button type="button" onClick={() => setShowPass(s => !s)} style={{ position: 'absolute', right: '0.875rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)' }}>
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <a href="#" style={{ fontSize: '0.8125rem', color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none' }}>Esqueceu a password?</a>
            </div>
            <button type="submit" disabled={loading}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.875rem', borderRadius: '9999px', background: loading ? 'rgba(15,91,58,0.5)' : 'linear-gradient(135deg, #0F5B3A, #2E7D32)', color: 'white', fontWeight: 700, fontSize: '1rem', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', boxShadow: '0 6px 20px rgba(15,91,58,0.3)', transition: 'all 0.2s' }}>
              {loading ? <><div style={{ width: '18px', height: '18px', borderRadius: '50%', border: '2.5px solid rgba(255,255,255,0.3)', borderTopColor: 'white', animation: 'spin 0.8s linear infinite' }} /> A entrar...</> : <><Leaf size={17} /> Entrar</>}
            </button>
          </form>

          <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
            Também pode aceder como{' '}
            <Link to="/admin" style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none' }}>Administrador <ArrowRight size={12} style={{ display: 'inline' }} /></Link>
          </p>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) { .login-panel { display: none !important; } }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};
