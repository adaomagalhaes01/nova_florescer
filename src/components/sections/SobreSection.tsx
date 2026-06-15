import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Award, Heart } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.65, delay: i * 0.1 } }),
};

export const SobreSection: React.FC = () => (
  <section id="sobre" style={{ padding: '6rem 0', background: 'var(--color-bg)', position: 'relative', overflow: 'hidden' }}>
    {/* Subtle bg pattern */}
    <div style={{ position: 'absolute', top: 0, right: 0, width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(165,214,167,0.15) 0%, transparent 70%)', borderRadius: '50%', transform: 'translate(30%, -30%)' }} />
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Visual side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
          style={{ position: 'relative' }}
        >
          {/* Main card */}
          <div style={{ background: 'linear-gradient(135deg, #0F5B3A, #2E7D32)', borderRadius: '32px', padding: '3rem 2rem', color: 'white', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '160px', height: '160px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }} />
            <div style={{ position: 'absolute', bottom: '-30px', left: '-30px', width: '200px', height: '200px', background: 'rgba(124,179,66,0.12)', borderRadius: '50%' }} />
            <Leaf size={40} style={{ marginBottom: '1.5rem', color: '#A5D6A7' }} />
            <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.75rem', marginBottom: '1rem', fontWeight: 700 }}>Nossa Missão</h3>
            <p style={{ opacity: 0.85, lineHeight: 1.75, fontSize: '0.9375rem' }}>
              Proporcionar um espaço de acolhimento e crescimento emocional, onde cada pessoa encontre suporte profissional para florescer em todas as dimensões da sua vida.
            </p>
            <div className="mt-8 flex flex-wrap gap-8 justify-start">
              {[{ n: '+248', l: 'Pacientes' }, { n: '4', l: 'Psicólogos' }, { n: '7', l: 'Serviços' }].map(s => (
                <div key={s.l} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, fontFamily: 'Playfair Display', color: '#A5D6A7' }}>{s.n}</div>
                  <div style={{ fontSize: '0.75rem', opacity: 0.7, letterSpacing: '0.05em' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating smaller card */}
          <motion.div
            animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'absolute', bottom: '-30px', right: '-20px', background: 'var(--color-white)', borderRadius: '20px', padding: '1rem 1.5rem', boxShadow: '0 12px 40px rgba(15,91,58,0.18)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
          >
            <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'linear-gradient(135deg, #0F5B3A, #7CB342)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Heart size={18} color="white" />
            </div>
            <div>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-primary)' }}>Atendimento Humanizado</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Cuidado com empatia genuína</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Text side */}
        <div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.375rem 1rem', borderRadius: '9999px', background: 'rgba(124,179,66,0.12)', border: '1px solid rgba(124,179,66,0.3)', color: 'var(--color-accent)', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '1.25rem' }}>
            <Leaf size={13} /> Sobre Nós
          </motion.div>
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
            style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(1.875rem, 3vw, 2.75rem)', fontWeight: 700, marginBottom: '1.5rem', lineHeight: 1.2, color: 'var(--color-text)' }}>
            Um espaço de <span className="gradient-text">transformação</span> e crescimento pessoal
          </motion.h2>
          <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={2}
            style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, fontSize: '0.9375rem', marginBottom: '1.25rem' }}>
            O Novo Florescer Terapêutico é um consultório de psicologia moderno, fundado com a missão de tornar o cuidado emocional acessível e de qualidade para todos em Angola.
          </motion.p>
          <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={3}
            style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, fontSize: '0.9375rem', marginBottom: '2.5rem' }}>
            A nossa equipa de psicólogos qualificados oferece um ambiente seguro, acolhedor e completamente confidencial, adaptado às necessidades únicas de cada pessoa que nos procura.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={4}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { title: 'Abordagem Integrativa', desc: 'Combinamos diferentes técnicas terapêuticas para resultados mais eficazes.' },
              { title: 'Supervisão Clínica Contínua', desc: 'Todos os nossos profissionais participam em supervisão clínica regular.' },
              { title: 'Ambiente Acolhedor', desc: 'Criamos um espaço de confiança onde pode ser autêntico e vulnerável.' },
            ].map(item => (
              <div key={item.title} style={{ display: 'flex', gap: '1rem', padding: '1rem', borderRadius: '16px', background: 'var(--color-surface)', border: '1px solid var(--color-border)', transition: 'all 0.2s' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, rgba(15,91,58,0.15), rgba(124,179,66,0.15))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Award size={16} color="var(--color-primary)" />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-text)', marginBottom: '0.25rem' }}>{item.title}</div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);
