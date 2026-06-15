import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Phone } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Equipa', href: '#equipa' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contactos', href: '#contactos' },
];

export const Navbar: React.FC = () => {
  const { toggleTheme, isDark } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isLanding = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          padding: scrolled ? '0.5rem 0' : '1rem 0',
          background: scrolled
            ? isDark
              ? 'rgba(13, 31, 24, 0.95)'
              : 'rgba(248, 245, 239, 0.95)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? `1px solid var(--color-border)` : 'none',
          boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', textDecoration: 'none' }}>
            <img src="/logo.jpeg" alt="Novo Florescer Terapêutico" style={{ height: '44px', width: '44px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--color-accent)' }} />
            <div>
              <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: '1.125rem', color: 'var(--color-primary)', lineHeight: 1.1 }}>Novo Florescer</div>
              <div style={{ fontSize: '0.625rem', color: 'var(--color-text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Terapêutico</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          {isLanding && (
            <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="hidden-mobile">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    padding: '0.5rem 0.875rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    color: 'var(--color-text-muted)',
                    textDecoration: 'none',
                    transition: 'all var(--transition-fast)',
                  }}
                  onMouseEnter={e => {
                    (e.target as HTMLElement).style.color = 'var(--color-primary)';
                    (e.target as HTMLElement).style.background = 'rgba(15,91,58,0.07)';
                  }}
                  onMouseLeave={e => {
                    (e.target as HTMLElement).style.color = 'var(--color-text-muted)';
                    (e.target as HTMLElement).style.background = 'transparent';
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              style={{
                width: '38px', height: '38px',
                borderRadius: '50%',
                border: '1.5px solid var(--color-border)',
                background: 'var(--color-surface)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--color-text-muted)',
                transition: 'all var(--transition-fast)',
              }}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {isLanding && (
              <>
                <Link
                  to="/paciente/login"
                  style={{
                    padding: '0.5rem 1.125rem',
                    borderRadius: 'var(--radius-full)',
                    border: '1.5px solid var(--color-primary)',
                    color: 'var(--color-primary)',
                    background: 'transparent',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'all var(--transition-fast)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'var(--color-primary)';
                    (e.currentTarget as HTMLElement).style.color = 'white';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'transparent';
                    (e.currentTarget as HTMLElement).style.color = 'var(--color-primary)';
                  }}
                >
                  Área do Paciente
                </Link>
                <a
                  href="#contactos"
                  style={{
                    padding: '0.5rem 1.25rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                    color: 'white',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    display: 'flex', alignItems: 'center', gap: '0.375rem',
                    transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)',
                    boxShadow: '0 4px 14px rgba(15,91,58,0.35)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(15,91,58,0.45)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.transform = '';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 14px rgba(15,91,58,0.35)';
                  }}
                >
                  <Phone size={14} /> Agendar
                </a>
              </>
            )}

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(o => !o)}
              className="mobile-only"
              aria-label="Menu"
              style={{
                width: '38px', height: '38px',
                borderRadius: '50%',
                border: '1.5px solid var(--color-border)',
                background: 'var(--color-surface)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--color-text)',
              }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: 0, right: 0, bottom: 0,
              width: '280px',
              zIndex: 999,
              background: 'var(--color-white)',
              borderLeft: '1px solid var(--color-border)',
              padding: '5rem 1.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              boxShadow: 'var(--shadow-xl)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--color-border)' }}>
              <img src="/logo.jpeg" alt="Logo" style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--color-primary)' }} />
              <span style={{ fontFamily: 'Playfair Display', fontWeight: 600, fontSize: '1.1rem', color: 'var(--color-primary)' }}>Menu</span>
            </div>
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: 'var(--color-text)',
                  textDecoration: 'none',
                  transition: 'all var(--transition-fast)',
                  background: 'transparent',
                }}
              >
                {link.label}
              </a>
            ))}
            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link to="/paciente/login" onClick={() => setMobileOpen(false)} style={{ padding: '0.875rem', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--color-primary)', color: 'var(--color-primary)', textAlign: 'center', fontWeight: 600, textDecoration: 'none' }}>
                Área do Paciente
              </Link>
              <a href="#contactos" onClick={() => setMobileOpen(false)} style={{ padding: '0.875rem', borderRadius: 'var(--radius-md)', background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))', color: 'white', textAlign: 'center', fontWeight: 600, textDecoration: 'none' }}>
                Agendar Consulta
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) { .mobile-only { display: none !important; } }
        @media (max-width: 767px) { .hidden-mobile { display: none !important; } }
      `}</style>
    </>
  );
};
