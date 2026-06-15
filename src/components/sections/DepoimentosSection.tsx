import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../../data/mock';

export const DepoimentosSection: React.FC = () => {
  const [active, setActive] = useState(0);
  const prev = () => setActive(a => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive(a => (a + 1) % testimonials.length);

  return (
    <section id="depoimentos" style={{ padding: '6rem 0', background: 'var(--color-bg)', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.375rem 1rem', borderRadius: '9999px', background: 'rgba(124,179,66,0.12)', border: '1px solid rgba(124,179,66,0.3)', color: 'var(--color-accent)', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '1rem' }}>
            <Star size={13} fill="currentColor" /> Depoimentos
          </div>
          <h2 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(1.875rem, 3vw, 2.75rem)', fontWeight: 700, color: 'var(--color-text)' }}>
            O que os nossos <span className="gradient-text">pacientes dizem</span>
          </h2>
        </motion.div>

        {/* Main testimonial */}
        <div style={{ maxWidth: '780px', margin: '0 auto', position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.div key={active}
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 md:p-12"
              style={{ background: 'var(--color-white)', borderRadius: '28px', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--color-border)', position: 'relative', overflow: 'hidden' }}
            >
              {/* Bg accent */}
              <div style={{ position: 'absolute', top: 0, right: 0, width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(124,179,66,0.08) 0%, transparent 70%)', borderRadius: '0 28px 0 100%' }} />
              {/* Quote icon */}
              <div style={{ position: 'absolute', top: '1.5rem', right: '1.75rem', color: 'var(--color-light-green)', opacity: 0.5 }}>
                <Quote size={40} />
              </div>
              {/* Stars */}
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem' }}>
                {[...Array(testimonials[active].rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#7CB342" color="#7CB342" />
                ))}
              </div>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.85, color: 'var(--color-text)', fontStyle: 'italic', marginBottom: '2rem', fontFamily: 'Playfair Display' }}>
                "{testimonials[active].text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #0F5B3A, #7CB342)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.125rem', color: 'white', fontFamily: 'Playfair Display' }}>
                    {testimonials[active].name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--color-text)' }}>{testimonials[active].name}</div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>{testimonials[active].service}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
            <button onClick={prev} style={{ width: '44px', height: '44px', borderRadius: '50%', border: '1.5px solid var(--color-border)', background: 'var(--color-white)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text)', transition: 'all 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--color-primary)'; (e.currentTarget as HTMLElement).style.color = 'white'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-primary)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--color-white)'; (e.currentTarget as HTMLElement).style.color = 'var(--color-text)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)'; }}>
              <ChevronLeft size={18} />
            </button>
            {/* Dots */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActive(i)}
                  style={{ width: i === active ? '24px' : '8px', height: '8px', borderRadius: '9999px', border: 'none', background: i === active ? 'var(--color-accent)' : 'var(--color-border)', cursor: 'pointer', transition: 'all 0.3s' }} />
              ))}
            </div>
            <button onClick={next} style={{ width: '44px', height: '44px', borderRadius: '50%', border: '1.5px solid var(--color-border)', background: 'var(--color-white)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text)', transition: 'all 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--color-primary)'; (e.currentTarget as HTMLElement).style.color = 'white'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-primary)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--color-white)'; (e.currentTarget as HTMLElement).style.color = 'var(--color-text)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)'; }}>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Thumbnail row */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '2rem', flexWrap: 'wrap' }}>
          {testimonials.map((t, i) => (
            <motion.button key={t.id} onClick={() => setActive(i)}
              whileHover={{ scale: 1.05 }}
              style={{ padding: '0.5rem 1rem', borderRadius: '9999px', border: `1.5px solid ${i === active ? 'var(--color-accent)' : 'var(--color-border)'}`, background: i === active ? 'rgba(124,179,66,0.1)' : 'var(--color-white)', color: i === active ? 'var(--color-accent)' : 'var(--color-text-muted)', fontSize: '0.8125rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}>
              {t.name}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};
