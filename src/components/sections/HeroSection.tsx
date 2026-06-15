import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Calendar, ChevronDown, Sparkles, Shield, Video } from 'lucide-react';
import { HeroIllustration } from '../ui/HeroIllustration';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.12 } }),
};

export const HeroSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const illusY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  return (
    <motion.section
      id="hero"
      ref={ref}
      style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'var(--color-bg)' }}
    >
      {/* Parallax decorative background blobs */}
      <motion.div style={{ y: bgY, position: 'absolute', inset: 0, zIndex: 0 }}>
        <div style={{
          position: 'absolute', top: '-10%', right: '-5%',
          width: '600px', height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,179,66,0.18) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-15%', left: '-10%',
          width: '500px', height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(15,91,58,0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }} />
        {/* Organic leaf shapes */}
        {[
          { top: '15%', left: '5%', r: -20, s: 0.9, opacity: 0.12 },
          { top: '70%', left: '8%', r: 35, s: 0.7, opacity: 0.1 },
          { top: '20%', right: '3%', r: 15, s: 0.6, opacity: 0.1 },
          { bottom: '10%', right: '7%', r: -40, s: 0.8, opacity: 0.12 },
        ].map((l, i) => (
          <div
            key={i}
            className="animate-float"
            style={{
              position: 'absolute',
              ...l,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${6 + i}s`,
            }}
          >
            <svg width="80" height="120" viewBox="0 0 80 120" style={{ opacity: l.opacity, transform: `rotate(${l.r}deg) scale(${l.s})` }}>
              <path d="M40 120 Q-10 80 10 30 Q40 -10 70 30 Q90 80 40 120Z" fill="#0F5B3A" />
              <path d="M40 120 L40 20" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
            </svg>
          </div>
        ))}
      </motion.div>

      {/* Main content */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '7rem 1.5rem 4rem', width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        {/* Text */}
        <motion.div style={{ y: textY }}>
          {/* Tag */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={0}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.375rem 1rem', borderRadius: '9999px', background: 'rgba(124,179,66,0.12)', border: '1px solid rgba(124,179,66,0.3)', color: 'var(--color-accent)', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '0.04em' }}
          >
            <Sparkles size={13} />
            Consultório de Psicologia em Angola
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={1}
            style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '1.5rem', color: 'var(--color-text)' }}
          >
            Cuidar da mente é{' '}
            <span className="gradient-text">florescer a vida.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={2}
            style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: '480px' }}
          >
            Acompanhamento psicológico presencial e online para transformar vidas através do cuidado emocional.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={3}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}
          >
            <a
              href="#contactos"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.875rem 2rem',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #0F5B3A, #2E7D32)',
                color: 'white', fontWeight: 700, fontSize: '1rem',
                textDecoration: 'none',
                boxShadow: '0 6px 24px rgba(15,91,58,0.35)',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 30px rgba(15,91,58,0.45)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 24px rgba(15,91,58,0.35)'; }}
            >
              <Calendar size={18} /> Agendar Consulta
            </a>
            <a
              href="#servicos"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.875rem 2rem',
                borderRadius: '9999px',
                border: '2px solid var(--color-primary)',
                color: 'var(--color-primary)', fontWeight: 700, fontSize: '1rem',
                textDecoration: 'none',
                transition: 'all 0.3s',
                background: 'transparent',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--color-primary)'; (e.currentTarget as HTMLElement).style.color = 'white'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'var(--color-primary)'; }}
            >
              Conhecer Serviços <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={4}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}
          >
            {[
              { icon: <Shield size={15} />, text: 'Sigilo Profissional' },
              { icon: <Video size={15} />, text: 'Atendimento Online' },
              { icon: <Sparkles size={15} />, text: '+500 Pacientes Atendidos' },
            ].map(t => (
              <div key={t.text} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8125rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>
                <span style={{ color: 'var(--color-accent)' }}>{t.icon}</span>
                {t.text}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Illustration */}
        <motion.div
          style={{ y: illusY, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <div style={{ position: 'relative', width: '100%', maxWidth: '480px' }}>
            {/* Glow ring */}
            <div className="animate-pulse-soft" style={{
              position: 'absolute', inset: '-20px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(124,179,66,0.15) 0%, transparent 65%)',
            }} />
            <div className="animate-spin-slow" style={{
              position: 'absolute', inset: '10px',
              borderRadius: '50%',
              border: '1px dashed rgba(124,179,66,0.25)',
            }} />
            <HeroIllustration />
            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', top: '12%', left: '-8%',
                background: 'var(--color-white)',
                borderRadius: '16px',
                padding: '0.75rem 1.125rem',
                boxShadow: '0 8px 24px rgba(15,91,58,0.15)',
                border: '1px solid var(--color-border)',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-primary)',
                whiteSpace: 'nowrap',
              }}
            >
              <span style={{ fontSize: '1.125rem' }}>🌱</span> +248 Pacientes
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              style={{
                position: 'absolute', bottom: '18%', right: '-8%',
                background: 'linear-gradient(135deg, #0F5B3A, #2E7D32)',
                borderRadius: '16px',
                padding: '0.75rem 1.125rem',
                boxShadow: '0 8px 24px rgba(15,91,58,0.3)',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                fontSize: '0.8125rem', fontWeight: 600, color: 'white',
                whiteSpace: 'nowrap',
              }}
            >
              <span style={{ fontSize: '1.125rem' }}>⭐</span> 4.9 Avaliação
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', cursor: 'pointer', color: 'var(--color-text-muted)', zIndex: 1 }}
        onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={28} />
      </motion.div>
    </motion.section>
  );
};
