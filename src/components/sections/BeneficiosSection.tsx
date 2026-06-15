import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Lock, Wifi, Award } from 'lucide-react';
import { benefits } from '../../data/mock';

const iconMap: Record<string, React.ReactNode> = {
  'heart-handshake': <Heart size={32} />, lock: <Lock size={32} />, wifi: <Wifi size={32} />, award: <Award size={32} />,
};

export const BeneficiosSection: React.FC = () => (
  <section id="beneficios" style={{ padding: '6rem 0', background: 'var(--color-primary)', position: 'relative', overflow: 'hidden' }}>
    {/* Decorative */}
    <div style={{ position: 'absolute', top: '-100px', left: '-100px', width: '400px', height: '400px', background: 'rgba(255,255,255,0.03)', borderRadius: '50%' }} />
    <div style={{ position: 'absolute', bottom: '-80px', right: '-80px', width: '350px', height: '350px', background: 'rgba(124,179,66,0.08)', borderRadius: '50%' }} />
    {/* Leaf pattern */}
    {[...Array(6)].map((_, i) => (
      <div key={i} className="animate-float" style={{ position: 'absolute', opacity: 0.06, animationDelay: `${i * 1.2}s`, ...(i % 2 === 0 ? { top: `${10 + i * 15}%`, left: `${5 + i * 3}%` } : { top: `${20 + i * 12}%`, right: `${5 + i * 3}%` }) }}>
        <svg width="60" height="90" viewBox="0 0 60 90" fill="white">
          <path d="M30 90 Q-5 60 8 20 Q30 -8 52 20 Q65 60 30 90Z" />
        </svg>
      </div>
    ))}

    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.375rem 1rem', borderRadius: '9999px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.9)', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '1rem' }}>
          Porquê Escolher-nos
        </div>
        <h2 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(1.875rem, 3vw, 2.75rem)', fontWeight: 700, marginBottom: '1rem', color: 'white' }}>
          Comprometidos com <br />a sua transformação
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.75 }}>
          Cada detalhe do nosso serviço foi pensado para garantir a melhor experiência terapêutica.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
        {benefits.map((b, i) => (
          <motion.div key={b.id}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            style={{ background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderRadius: '24px', padding: '2rem', border: '1px solid rgba(255,255,255,0.12)', cursor: 'default' }}
          >
            <div style={{ width: '64px', height: '64px', borderRadius: '20px', background: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: '#A5D6A7' }}>
              {iconMap[b.icon]}
            </div>
            <h3 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.75rem', color: 'white' }}>{b.title}</h3>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75 }}>{b.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
