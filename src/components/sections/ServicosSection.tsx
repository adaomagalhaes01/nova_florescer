import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Compass, Video, Users, Heart, Shield, Sparkles, ArrowRight } from 'lucide-react';
import { services } from '../../data/mock';

const iconMap: Record<string, React.ReactNode> = {
  brain: <Brain size={28} />, compass: <Compass size={28} />, video: <Video size={28} />,
  users: <Users size={28} />, heart: <Heart size={28} />, shield: <Shield size={28} />, sparkles: <Sparkles size={28} />,
};

export const ServicosSection: React.FC = () => (
  <section id="servicos" style={{ padding: '6rem 0', background: 'linear-gradient(180deg, var(--color-bg) 0%, rgba(165,214,167,0.08) 100%)' }}>
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.375rem 1rem', borderRadius: '9999px', background: 'rgba(124,179,66,0.12)', border: '1px solid rgba(124,179,66,0.3)', color: 'var(--color-accent)', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '1rem' }}>
          <Sparkles size={13} /> Os Nossos Serviços
        </div>
        <h2 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(1.875rem, 3vw, 2.75rem)', fontWeight: 700, marginBottom: '1rem', color: 'var(--color-text)' }}>
          Cuidado especializado para <span className="gradient-text">cada necessidade</span>
        </h2>
        <p style={{ color: 'var(--color-text-muted)', maxWidth: '540px', margin: '0 auto', lineHeight: 1.75 }}>
          Oferecemos uma gama completa de serviços psicológicos, adaptados às necessidades únicas de cada pessoa e família.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '1.5rem' }}>
        {services.map((s, i) => (
          <motion.div key={s.id}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.07 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            style={{ background: 'var(--color-white)', borderRadius: '24px', padding: '2rem', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)', cursor: 'pointer', position: 'relative', overflow: 'hidden', transition: 'box-shadow 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-lg)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-sm)'; }}
          >
            <div style={{ position: 'absolute', top: 0, right: 0, width: '100px', height: '100px', background: `linear-gradient(135deg, rgba(15,91,58,0.06), rgba(124,179,66,0.06))`, borderRadius: '0 24px 0 100px' }} />
            <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: `linear-gradient(135deg, #0F5B3A, #2E7D32)`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'white' }}>
              {iconMap[s.icon]}
            </div>
            <h3 style={{ fontFamily: 'Playfair Display', fontWeight: 600, fontSize: '1.125rem', marginBottom: '0.75rem', color: 'var(--color-text)' }}>{s.title}</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: '1.25rem' }}>{s.description}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-primary)', cursor: 'pointer' }}>
              Saber mais <ArrowRight size={14} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
