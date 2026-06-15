import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer style={{ background: 'var(--color-primary)', color: 'white', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/15">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1rem' }}>
              <img src="/logo.jpeg" alt="Logo" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.3)' }} />
              <div>
                <div style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '1.1rem' }}>Novo Florescer</div>
                <div style={{ fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.7 }}>Terapêutico</div>
              </div>
            </div>
            <p style={{ fontSize: '0.875rem', opacity: 0.75, lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Cuidar da mente é florescer a vida. Consultório de psicologia moderno comprometido com o seu bem-estar emocional.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: 'Playfair Display', fontWeight: 600, fontSize: '1rem', marginBottom: '1.25rem', opacity: 0.9 }}>Serviços</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {['Psicoterapia Individual', 'Orientação Psicológica', 'Telepsicologia', 'Terapia Familiar', 'Terapia Infantil', 'Workshops'].map(s => (
                <li key={s}>
                  <a href="#servicos" style={{ fontSize: '0.875rem', opacity: 0.7, textDecoration: 'none', color: 'white', transition: 'opacity 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '0.7')}>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ fontFamily: 'Playfair Display', fontWeight: 600, fontSize: '1rem', marginBottom: '1.25rem', opacity: 0.9 }}>Links Úteis</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {[
                { label: 'Sobre Nós', href: '#sobre' },
                { label: 'A Nossa Equipa', href: '#equipa' },
                { label: 'Blog', href: '#blog' },
                { label: 'Área do Paciente', href: '/paciente/login' },
                { label: 'Política de Privacidade', href: '#' },
                { label: 'Termos de Uso', href: '#' },
              ].map(l => (
                <li key={l.label}>
                  <a href={l.href} style={{ fontSize: '0.875rem', opacity: 0.7, textDecoration: 'none', color: 'white', transition: 'opacity 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '0.7')}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 style={{ fontFamily: 'Playfair Display', fontWeight: 600, fontSize: '1rem', marginBottom: '1.25rem', opacity: 0.9 }}>Contactos</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {[
                { icon: <MessageCircle size={15} />, text: '+244 923 456 789', href: 'https://wa.me/244923456789' },
                { icon: <Phone size={15} />, text: '+244 222 345 678', href: 'tel:+244222345678' },
                { icon: <Mail size={15} />, text: 'geral@novoflorescer.ao', href: 'mailto:geral@novoflorescer.ao' },
                { icon: <MapPin size={15} />, text: 'Rua da Mutamba, 42, Luanda', href: '#contactos' },
              ].map((c, i) => (
                <a key={i} href={c.href} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.875rem', opacity: 0.75, textDecoration: 'none', color: 'white', transition: 'opacity 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '0.75')}>
                  <span style={{ flexShrink: 0 }}>{c.icon}</span>
                  {c.text}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p style={{ fontSize: '0.8125rem', opacity: 0.55 }}>
            © 2025 Novo Florescer Terapêutico. Todos os direitos reservados.
          </p>
          <p style={{ fontSize: '0.8125rem', opacity: 0.55, display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
            Feito em Angola
          </p>
        </div>
      </div>
    </footer>
  );
};
