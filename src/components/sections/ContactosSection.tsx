/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const ContactosSection: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [sent, setSent] = React.useState(false);

  const onSubmit = (data: FormData) => {
    console.log(data);
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contactos" style={{ padding: '6rem 0', background: 'var(--color-bg)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.375rem 1rem', borderRadius: '9999px', background: 'rgba(124,179,66,0.12)', border: '1px solid rgba(124,179,66,0.3)', color: 'var(--color-accent)', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '1rem' }}>
            <Phone size={13} /> Contacte-nos
          </div>
          <h2 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(1.875rem, 3vw, 2.75rem)', fontWeight: 700, color: 'var(--color-text)' }}>
            Dê o primeiro <span className="gradient-text">passo</span>
          </h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '480px', margin: '1rem auto 0', lineHeight: 1.75 }}>
            Entre em contacto connosco e agende a sua primeira consulta. Estamos aqui para acolhê-lo.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
          {/* Contact info */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <div style={{ background: 'linear-gradient(135deg, #0F5B3A, #2E7D32)', borderRadius: '28px', padding: '2.5rem', color: 'white', marginBottom: '1.5rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '140px', height: '140px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }} />
              <h3 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '1.375rem', marginBottom: '1.75rem' }}>Fale connosco</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { icon: <MessageCircle size={18} />, label: 'WhatsApp', value: '+244 923 456 789', href: 'https://wa.me/244923456789' },
                  { icon: <Phone size={18} />, label: 'Telefone', value: '+244 222 345 678', href: 'tel:+244222345678' },
                  { icon: <Mail size={18} />, label: 'Email', value: 'geral@novoflorescer.ao', href: 'mailto:geral@novoflorescer.ao' },
                  { icon: <MapPin size={18} />, label: 'Morada', value: 'Rua da Mutamba, 42, Luanda, Angola', href: '#' },
                  { icon: <Clock size={18} />, label: 'Horário', value: 'Seg–Sex: 8h–19h | Sáb: 9h–13h', href: '#' },
                ].map(c => (
                  <a key={c.label} href={c.href} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', textDecoration: 'none', color: 'white' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {c.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', opacity: 0.65, marginBottom: '0.125rem' }}>{c.label}</div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 500 }}>{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick WhatsApp CTA */}
            <a href="https://wa.me/244923456789?text=Olá! Gostaria de agendar uma consulta." target="_blank" rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', padding: '1rem', borderRadius: '16px', background: '#25D366', color: 'white', textDecoration: 'none', fontWeight: 700, fontSize: '0.9375rem', boxShadow: '0 6px 20px rgba(37,211,102,0.35)', transition: 'all 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; }}>
              <MessageCircle size={20} /> Agendar via WhatsApp
            </a>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <div style={{ background: 'var(--color-white)', borderRadius: '28px', padding: '2.5rem', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
              <h3 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '1.375rem', marginBottom: '1.75rem', color: 'var(--color-text)' }}>Envie uma mensagem</h3>

              {sent && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                  style={{ padding: '1rem', borderRadius: '12px', background: 'rgba(124,179,66,0.12)', border: '1px solid rgba(124,179,66,0.3)', color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  ✅ Mensagem enviada! Entraremos em contacto brevemente.
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem' }}>Nome *</label>
                    <input className="form-input" placeholder="O seu nome" {...register('name', { required: true })} style={{ border: errors.name ? '1.5px solid #ef4444' : undefined } as any} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem' }}>Telefone</label>
                    <input className="form-input" placeholder="+244 9xx xxx xxx" {...register('phone')} />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem' }}>Email *</label>
                  <input className="form-input" type="email" placeholder="o.seu@email.com" {...register('email', { required: true })} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem' }}>Serviço de Interesse</label>
                  <select className="form-input" {...register('service')} style={{ appearance: 'none' as any }}>
                    <option value="">Selecione um serviço...</option>
                    <option>Psicoterapia Individual</option>
                    <option>Orientação Psicológica</option>
                    <option>Telepsicologia</option>
                    <option>Terapia Familiar</option>
                    <option>Terapia Infantil</option>
                    <option>Workshop</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem' }}>Mensagem *</label>
                  <textarea className="form-input" rows={4} placeholder="Conte-nos um pouco sobre o que procura..." {...register('message', { required: true })} style={{ resize: 'vertical' as any }} />
                </div>
                <button type="submit" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.875rem', borderRadius: '9999px', background: 'linear-gradient(135deg, #0F5B3A, #2E7D32)', color: 'white', fontWeight: 700, fontSize: '1rem', border: 'none', cursor: 'pointer', boxShadow: '0 6px 20px rgba(15,91,58,0.3)', transition: 'all 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; }}>
                  <Send size={17} /> Enviar Mensagem
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
