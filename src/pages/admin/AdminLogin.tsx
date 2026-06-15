import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Leaf } from 'lucide-react';

export const AdminLogin: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    await new Promise(r => setTimeout(r, 900));
    if (email === 'admin@novoflorescer.pt' && password === 'admin123') {
      navigate('/admin/dashboard');
    } else {
      setError('Credenciais inválidas. Tente admin@novoflorescer.pt / admin123');
    }
    setLoading(false);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0F5B3A 0%, #1a3a2a 50%, #0d1f18 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Animated bg orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            borderRadius: '50%',
            background: `rgba(124, 179, 66, ${0.04 + i * 0.02})`,
            width: `${200 + i * 120}px`,
            height: `${200 + i * 120}px`,
            top: `${10 + i * 15}%`,
            left: `${5 + i * 20}%`,
            filter: 'blur(60px)',
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: '100%',
          maxWidth: '440px',
          background: 'rgba(255,255,255,0.07)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: '28px',
          padding: '2.5rem',
          boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            width: '64px', height: '64px',
            borderRadius: '50%',
            overflow: 'hidden',
            margin: '0 auto 1rem',
            border: '3px solid rgba(255,255,255,0.2)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
          }}>
            <img src="/logo.jpeg" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", color: 'white', fontSize: '1.6rem', fontWeight: 700, marginBottom: '0.25rem' }}>
            Painel Admin
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem' }}>
            Novo Florescer Terapêutico
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: '0.8125rem', fontWeight: 500, marginBottom: '0.4rem' }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="admin@novoflorescer.pt"
              required
              style={{
                width: '100%', padding: '0.75rem 1rem',
                background: 'rgba(255,255,255,0.08)',
                border: '1.5px solid rgba(255,255,255,0.12)',
                borderRadius: '12px',
                color: 'white',
                fontSize: '0.9375rem',
                outline: 'none',
                transition: 'border-color 200ms',
                boxSizing: 'border-box',
              }}
              onFocus={e => e.target.style.borderColor = 'rgba(124,179,66,0.6)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: '0.8125rem', fontWeight: 500, marginBottom: '0.4rem' }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                style={{
                  width: '100%', padding: '0.75rem 3rem 0.75rem 1rem',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1.5px solid rgba(255,255,255,0.12)',
                  borderRadius: '12px',
                  color: 'white',
                  fontSize: '0.9375rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
                onFocus={e => e.target.style.borderColor = 'rgba(124,179,66,0.6)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)',
                  background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.5)',
                  display: 'flex', alignItems: 'center',
                }}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
              style={{
                background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)',
                borderRadius: '10px', padding: '0.75rem 1rem',
                color: '#FCA5A5', fontSize: '0.8125rem', marginBottom: '1rem',
              }}
            >
              {error}
            </motion.div>
          )}

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              width: '100%', padding: '0.875rem',
              background: loading ? 'rgba(124,179,66,0.5)' : 'linear-gradient(135deg, #7CB342, #0F5B3A)',
              border: 'none', borderRadius: '12px',
              color: 'white', fontSize: '0.9375rem', fontWeight: 600,
              cursor: loading ? 'not-allowed' : 'pointer',
              boxShadow: '0 4px 16px rgba(124,179,66,0.3)',
              transition: 'opacity 200ms',
            }}
          >
            {loading ? 'A autenticar...' : 'Entrar no Painel'}
          </motion.button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <a href="/" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8125rem', textDecoration: 'none' }}>
            ← Voltar ao site
          </a>
        </div>

        {/* Demo hint */}
        <div style={{
          marginTop: '1.5rem', padding: '0.75rem',
          background: 'rgba(124,179,66,0.08)', border: '1px solid rgba(124,179,66,0.2)',
          borderRadius: '10px', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)',
          textAlign: 'center',
        }}>
          <Leaf size={12} style={{ display: 'inline', marginRight: '4px' }} />
          Demo: admin@novoflorescer.pt / admin123
        </div>
      </motion.div>
    </div>
  );
};
