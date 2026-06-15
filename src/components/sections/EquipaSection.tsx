import React from 'react';
import { motion } from 'framer-motion';
import { Users, Star } from 'lucide-react';
import { team } from '../../data/mock';

export const EquipaSection: React.FC = () => (
  <section id="equipa" style={{ padding: '6rem 0', background: 'var(--color-bg)' }}>
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.375rem 1rem', borderRadius: '9999px', background: 'rgba(124,179,66,0.12)', border: '1px solid rgba(124,179,66,0.3)', color: 'var(--color-accent)', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '1rem' }}>
          <Users size={13} /> A Nossa Equipa
        </div>
        <h2 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(1.875rem, 3vw, 2.75rem)', fontWeight: 700, marginBottom: '1rem', color: 'var(--color-text)' }}>
          Profissionais <span className="gradient-text">dedicados ao seu bem-estar</span>
        </h2>
        <p style={{ color: 'var(--color-text-muted)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.75 }}>
          Uma equipa multidisciplinar de psicólogos qualificados, comprometidos com a sua saúde emocional.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member, i) => (
          <motion.div key={member.id}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.09 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            style={{ background: 'var(--color-white)', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)', transition: 'box-shadow 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-lg)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-sm)'; }}
          >
            {/* Header banner */}
            <div style={{ height: '100px', background: `linear-gradient(135deg, #0F5B3A, #2E7D32)`, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', bottom: '-30px', left: '50%', transform: 'translateX(-50%)', width: '120px', height: '120px', background: 'rgba(255,255,255,0.07)', borderRadius: '50%' }} />
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', background: 'rgba(124,179,66,0.15)', borderRadius: '50%' }} />
              {/* Monogram avatar */}
              <div style={{ position: 'absolute', bottom: '-28px', left: '50%', transform: 'translateX(-50%)', width: '56px', height: '56px', borderRadius: '50%', background: 'var(--color-white)', border: '3px solid var(--color-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', zIndex: 1 }}>
                <span style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '1.25rem', color: 'var(--color-primary)', lineHeight: 1 }}>
                  {member.name.split(' ').filter((_, i) => i === 1 || i === 2).map(w => w[0]).join('')}
                </span>
              </div>
            </div>
            <div style={{ padding: '2.5rem 1.5rem 1.75rem', textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '1rem', color: 'var(--color-text)', marginBottom: '0.25rem' }}>{member.name}</h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>{member.role}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', padding: '0.3rem 0.75rem', borderRadius: '9999px', background: 'rgba(124,179,66,0.1)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-primary)', margin: '0 auto' }}>
                  <Star size={11} fill="currentColor" /> {member.specialty}
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>Experiência</div>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-primary)' }}>{member.experience.split(' ')[0]} anos</div>
                </div>
                <div style={{ width: '1px', background: 'var(--color-border)' }} />
                <div style={{ textAlign: 'center', flex: 1, padding: '0 0.5rem' }}>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>Abordagem</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--color-text)' }}>{member.approach.split('(')[0].trim()}</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
