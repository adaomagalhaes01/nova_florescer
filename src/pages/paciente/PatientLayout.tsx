import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, Calendar, FileText, MessageCircle, CreditCard, User, LogOut, ChevronLeft, ChevronRight, Menu, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const navItems = [
  { to: '/paciente', icon: <LayoutDashboard size={18} />, label: 'Dashboard', end: true },
  { to: '/paciente/consultas', icon: <Calendar size={18} />, label: 'Consultas' },
  { to: '/paciente/agendar', icon: <Calendar size={18} />, label: 'Agendar' },
  { to: '/paciente/documentos', icon: <FileText size={18} />, label: 'Documentos' },
  { to: '/paciente/mensagens', icon: <MessageCircle size={18} />, label: 'Mensagens' },
  { to: '/paciente/pagamentos', icon: <CreditCard size={18} />, label: 'Pagamentos' },
  { to: '/paciente/perfil', icon: <User size={18} />, label: 'Perfil' },
];

export const PatientLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleTheme, isDark } = useTheme();
  const navigate = useNavigate();

  const sidebarW = collapsed ? '72px' : '240px';

  const SidebarContent = () => (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '1rem 0.75rem' }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', padding: '0.5rem 0.25rem', marginBottom: '1.5rem', overflow: 'hidden' }}>
        <img src="/logo.jpeg" alt="Logo" style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0, border: '2px solid var(--color-accent)' }} />
        {!collapsed && <div style={{ overflow: 'hidden' }}>
          <div style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-primary)', whiteSpace: 'nowrap' }}>Novo Florescer</div>
          <div style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Área do Paciente</div>
        </div>}
      </div>

      {/* Patient badge */}
      {!collapsed && (
        <div style={{ padding: '0.875rem', borderRadius: '14px', background: 'linear-gradient(135deg, rgba(15,91,58,0.08), rgba(124,179,66,0.08))', border: '1px solid var(--color-border)', marginBottom: '1.5rem' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, #0F5B3A, #7CB342)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '1rem', fontFamily: 'Playfair Display', marginBottom: '0.5rem' }}>M</div>
          <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-text)' }}>Maria da Silva</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Psicoterapia Individual</div>
        </div>
      )}

      {/* Nav */}
      <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
        {navItems.map(item => (
          <NavLink key={item.to} to={item.to} end={item.end}
            className={({ isActive }) => `sidebar-nav-item${isActive ? ' active' : ''}`}
            title={collapsed ? item.label : undefined}
            style={{ justifyContent: collapsed ? 'center' : 'flex-start' }}>
            <span style={{ flexShrink: 0 }}>{item.icon}</span>
            {!collapsed && <span>{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Bottom */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
        <button onClick={toggleTheme} className="sidebar-nav-item" style={{ justifyContent: collapsed ? 'center' : 'flex-start' }}>
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
          {!collapsed && <span>{isDark ? 'Modo Claro' : 'Modo Escuro'}</span>}
        </button>
        <button onClick={() => navigate('/')} className="sidebar-nav-item" style={{ justifyContent: collapsed ? 'center' : 'flex-start', color: '#ef4444' }}>
          <LogOut size={18} />
          {!collapsed && <span>Sair</span>}
        </button>
      </div>
    </div>
  );

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--color-bg)' }}>
      {/* Desktop sidebar */}
      <motion.aside animate={{ width: sidebarW }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{ background: 'var(--color-white)', borderRight: '1px solid var(--color-border)', position: 'fixed', top: 0, left: 0, bottom: 0, zIndex: 100, overflow: 'hidden', flexShrink: 0, boxShadow: 'var(--shadow-sm)' }}
        className="desktop-sidebar">
        <SidebarContent />
        {/* Collapse toggle */}
        <button onClick={() => setCollapsed(c => !c)}
          style={{ position: 'absolute', top: '50%', right: '-12px', transform: 'translateY(-50%)', width: '24px', height: '24px', borderRadius: '50%', background: 'var(--color-white)', border: '1.5px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--color-text-muted)', zIndex: 10 }}>
          {collapsed ? <ChevronRight size={13} /> : <ChevronLeft size={13} />}
        </button>
      </motion.aside>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 200 }} />
            <motion.aside initial={{ x: -240 }} animate={{ x: 0 }} exit={{ x: -240 }}
              transition={{ duration: 0.3 }} style={{ position: 'fixed', top: 0, left: 0, bottom: 0, width: '240px', background: 'var(--color-white)', zIndex: 201, borderRight: '1px solid var(--color-border)' }}>
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main */}
      <div style={{ flex: 1, marginLeft: sidebarW, transition: 'margin-left 0.3s', display: 'flex', flexDirection: 'column', minWidth: 0 }} className="patient-main">
        {/* Topbar */}
        <div style={{ background: 'var(--color-white)', borderBottom: '1px solid var(--color-border)', padding: '0 1.5rem', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 50, boxShadow: 'var(--shadow-sm)' }}>
          <button onClick={() => setMobileOpen(true)} className="mobile-hamburger" style={{ background: 'none', border: '1.5px solid var(--color-border)', borderRadius: '10px', padding: '0.5rem', cursor: 'pointer', color: 'var(--color-text)' }}>
            <Menu size={18} />
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a href="/" style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', textDecoration: 'none', fontWeight: 500 }}>← Site</a>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, #0F5B3A, #7CB342)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontFamily: 'Playfair Display', cursor: 'pointer' }}>M</div>
          </div>
        </div>
        <main style={{ flex: 1, padding: '2rem 1.5rem', maxWidth: '1100px', width: '100%' }}>
          <Outlet />
        </main>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-sidebar { display: none !important; }
          .patient-main { margin-left: 0 !important; }
        }
        @media (min-width: 769px) {
          .mobile-hamburger { display: none !important; }
        }
      `}</style>
    </div>
  );
};
