import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, Video, TrendingUp } from 'lucide-react';
import { howItWorks } from '../../data/mock';

const stepIcons = [<Calendar size={24} />, <CheckCircle size={24} />, <Video size={24} />, <TrendingUp size={24} />];

export const ComoFuncionaSection: React.FC = () => (
  <section id="como-funciona" style={{ padding: '6rem 0', background: 'linear-gradient(135deg, rgba(15,91,58,0.04) 0%, rgba(124,179,66,0.06) 100%)' }}>
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.375rem 1rem', borderRadius: '9999px', background: 'rgba(124,179,66,0.12)', border: '1px solid rgba(124,179,66,0.3)', color: 'var(--color-accent)', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '1rem' }}>
          Como Funciona
        </div>
        <h2 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(1.875rem, 3vw, 2.75rem)', fontWeight: 700, marginBottom: '1rem', color: 'var(--color-text)' }}>
          O seu caminho para o <span className="gradient-text">bem-estar</span>
        </h2>
        <p style={{ color: 'var(--color-text-muted)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.75 }}>
          Um processo simples, acolhedor e totalmente adaptado ao seu ritmo de vida.
        </p>
      </motion.div>

      {/* Steps */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0', position: 'relative' }}>
        {/* Connector line (desktop) */}
        <div style={{ position: 'absolute', top: '40px', left: '12.5%', right: '12.5%', height: '2px', background: 'linear-gradient(90deg, #0F5B3A, #7CB342)', zIndex: 0, opacity: 0.3, display: 'none' }} className="step-connector" />
        {howItWorks.map((step, i) => (
          <motion.div key={step.step}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.12 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '2rem 1.5rem', position: 'relative', zIndex: 1 }}
          >
            {/* Connector between steps */}
            {i < howItWorks.length - 1 && (
              <div style={{ position: 'absolute', top: '40px', left: '75%', right: '-25%', height: '2px', background: 'linear-gradient(90deg, rgba(15,91,58,0.3), rgba(124,179,66,0.1))', display: 'flex', alignItems: 'center', zIndex: 0 }} className="step-line">
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-accent)', marginLeft: 'auto' }} />
              </div>
            )}
            {/* Step number circle */}
            <motion.div
              whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}
              style={{ width: '80px', height: '80px', borderRadius: '50%', background: `linear-gradient(135deg, #0F5B3A, #2E7D32)`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'white', boxShadow: '0 8px 24px rgba(15,91,58,0.3)', position: 'relative', zIndex: 1 }}
            >
              {stepIcons[i]}
            </motion.div>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '26px', height: '26px', borderRadius: '50%', background: 'var(--color-accent)', color: 'white', fontSize: '0.75rem', fontWeight: 700, marginBottom: '1rem' }}>
              {step.step}
            </div>
            <h3 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--color-text)' }}>{step.title}</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.75 }}>{step.description}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }} style={{ textAlign: 'center', marginTop: '3rem' }}>
        <a href="#contactos" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2.5rem', borderRadius: '9999px', background: 'linear-gradient(135deg, #0F5B3A, #2E7D32)', color: 'white', fontWeight: 700, textDecoration: 'none', boxShadow: '0 6px 24px rgba(15,91,58,0.35)', fontSize: '1rem', transition: 'all 0.3s' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; }}>
          <Calendar size={18} /> Começar Agora
        </a>
      </motion.div>
    </div>
  </section>
);
