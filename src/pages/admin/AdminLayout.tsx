import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard, Users, Calendar, CreditCard, BarChart3,
  UserCog, Settings, LogOut, Menu, Leaf, Bell, Search, ChevronRight
} from 'lucide-react';

const navItems = [
  { to: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/admin/pacientes', icon: Users, label: 'Pacientes' },
  { to: '/admin/agenda', icon: Calendar, label: 'Agenda' },
  { to: '/admin/financeiro', icon: CreditCard, label: 'Financeiro' },
  { to: '/admin/relatorios', icon: BarChart3, label: 'Relatórios' },
  { to: '/admin/equipa', icon: UserCog, label: 'Equipa' },
  { to: '/admin/configuracoes', icon: Settings, label: 'Configurações' },
];

export const AdminLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const currentPage = navItems.find(item => location.pathname.startsWith(item.to))?.label || 'Dashboard';

  const SidebarContent = ({ isDesktopCollapsed }: { isDesktopCollapsed?: boolean }) => {
    const showText = !isDesktopCollapsed;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'linear-gradient(180deg, #0F5B3A 0%, #0d3d27 100%)' }}>
        {/* Logo */}
        <div style={{
          padding: showText ? '1.5rem 1.25rem' : '1.5rem 0.875rem',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          overflow: 'hidden',
          transition: 'padding 0.3s',
        }}>
          <div style={{
            width: '38px', height: '38px', flexShrink: 0,
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid rgba(255,255,255,0.2)',
          }}>
            <img src="/logo.jpeg" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          {showText && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: 0.1 }}>
              <p style={{ color: 'white', fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '0.9rem', lineHeight: 1.2 }}>
                Novo Florescer
              </p>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem' }}>Painel Admin</p>
            </motion.div>
          )}
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: '1rem 0.75rem', display: 'flex', flexDirection: 'column', gap: '0.25rem', overflowY: 'auto' }}>
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMobileOpen(false)}
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: showText ? '0.625rem 0.875rem' : '0.625rem',
                borderRadius: '12px',
                color: isActive ? 'white' : 'rgba(255,255,255,0.55)',
                background: isActive ? 'rgba(255,255,255,0.12)' : 'transparent',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: isActive ? 600 : 400,
                transition: 'all 200ms',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                justifyContent: showText ? 'flex-start' : 'center',
              })}
            >
              <Icon size={18} style={{ flexShrink: 0 }} />
              {showText && <span>{label}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Bottom */}
        <div style={{ padding: '1rem 0.75rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <button
            onClick={() => navigate('/')}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem',
              padding: showText ? '0.625rem 0.875rem' : '0.625rem',
              borderRadius: '12px', color: 'rgba(255,255,255,0.5)',
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: '0.875rem', width: '100%', transition: 'all 200ms',
              justifyContent: showText ? 'flex-start' : 'center',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'white')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
          >
            <LogOut size={18} />
            {showText && <span>Sair</span>}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--color-bg)' }}>
      {/* Desktop Sidebar */}
      <motion.aside
        animate={{ width: sidebarOpen ? 260 : 72 }}
        transition={{ duration: 0.3 }}
        className="admin-desktop-sidebar"
        style={{
          display: 'flex', flexDirection: 'column', height: '100vh',
          position: 'sticky', top: 0, overflow: 'hidden', flexShrink: 0,
          boxShadow: '4px 0 24px rgba(0,0,0,0.15)', zIndex: 40,
        }}
      >
        <SidebarContent isDesktopCollapsed={!sidebarOpen} />
      </motion.aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 100 }} />
            <motion.aside initial={{ x: -260 }} animate={{ x: 0 }} exit={{ x: -260 }}
              transition={{ duration: 0.3 }}
              style={{ position: 'fixed', top: 0, left: 0, bottom: 0, width: '260px', zIndex: 101, boxShadow: '4px 0 24px rgba(0,0,0,0.15)' }}>
              <SidebarContent isDesktopCollapsed={false} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="admin-main" style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        {/* Top Bar */}
        <header style={{
          height: '64px', background: 'var(--color-white)', borderBottom: '1px solid var(--color-border)',
          display: 'flex', alignItems: 'center', padding: '0 1.5rem', gap: '1rem',
          position: 'sticky', top: 0, zIndex: 30,
        }}>
          {/* Desktop Toggle */}
          <button className="admin-desktop-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center',
              padding: '0.5rem', borderRadius: '8px',
            }}
          >
            <Menu size={20} />
          </button>
          
          {/* Mobile Toggle */}
          <button className="admin-mobile-toggle"
            onClick={() => setMobileOpen(true)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center',
              padding: '0.5rem', borderRadius: '8px',
            }}
          >
            <Menu size={20} />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
            <span className="hidden sm:inline">Admin</span>
            <ChevronRight size={14} className="hidden sm:inline" />
            <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{currentPage}</span>
          </div>

          <div style={{ flex: 1 }} />

          {/* Search */}
          <div className="hidden sm:flex" style={{ position: 'relative', alignItems: 'center' }}>
            <Search size={16} style={{ position: 'absolute', left: '0.75rem', color: 'var(--color-text-muted)' }} />
            <input
              placeholder="Pesquisar..."
              style={{
                paddingLeft: '2.25rem', paddingRight: '1rem', height: '36px', borderRadius: '10px',
                border: '1.5px solid var(--color-border)', background: 'var(--color-bg)',
                fontSize: '0.875rem', outline: 'none', width: '200px', color: 'var(--color-text)',
              }}
            />
          </div>

          {/* Notifications */}
          <button style={{
            position: 'relative', background: 'none', border: 'none', cursor: 'pointer',
            color: 'var(--color-text-muted)', padding: '0.5rem', borderRadius: '8px',
          }}>
            <Bell size={20} />
            <span style={{
              position: 'absolute', top: '6px', right: '6px',
              width: '8px', height: '8px', background: '#EF4444',
              borderRadius: '50%', border: '2px solid white',
            }} />
          </button>

          {/* Avatar */}
          <div style={{
            width: '36px', height: '36px', background: 'linear-gradient(135deg, #0F5B3A, #7CB342)',
            borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontWeight: 700, fontSize: '0.8125rem', flexShrink: 0
          }}>
            AD
          </div>
        </header>

        {/* Page Content */}
        <main style={{ flex: 1, overflowX: 'hidden', padding: '1.5rem' }}>
          <Outlet />
        </main>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .admin-desktop-sidebar { display: none !important; }
          .admin-desktop-toggle { display: none !important; }
        }
        @media (min-width: 769px) {
          .admin-mobile-toggle { display: none !important; }
        }
        .hidden { display: none !important; }
        @media (min-width: 640px) {
          .sm\\:inline { display: inline !important; }
          .sm\\:flex { display: flex !important; }
        }
      `}</style>
    </div>
  );
};
