import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../../data/mock';

export const BlogSection: React.FC = () => (
  <section id="blog" style={{ padding: '6rem 0', background: 'linear-gradient(180deg, var(--color-bg) 0%, rgba(165,214,167,0.06) 100%)' }}>
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.375rem 1rem', borderRadius: '9999px', background: 'rgba(124,179,66,0.12)', border: '1px solid rgba(124,179,66,0.3)', color: 'var(--color-accent)', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '1rem' }}>
            <BookOpen size={13} /> Blog
          </div>
          <h2 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(1.875rem, 3vw, 2.5rem)', fontWeight: 700, color: 'var(--color-text)' }}>
            Artigos sobre <span className="gradient-text">saúde mental</span>
          </h2>
        </div>
        <a href="#blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', padding: '0.625rem 1.25rem', borderRadius: '9999px', border: '1.5px solid var(--color-border)', color: 'var(--color-text-muted)', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', transition: 'all 0.2s', whiteSpace: 'nowrap' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-primary)'; (e.currentTarget as HTMLElement).style.color = 'var(--color-primary)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)'; (e.currentTarget as HTMLElement).style.color = 'var(--color-text-muted)'; }}>
          Ver todos <ArrowRight size={14} />
        </a>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '1.5rem' }}>
        {blogPosts.map((post, i) => (
          <motion.article key={post.id}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            style={{ background: 'var(--color-white)', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)', cursor: 'pointer', transition: 'box-shadow 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-lg)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-sm)'; }}
          >
            {/* Thumbnail */}
            <div style={{ height: '160px', background: `linear-gradient(135deg, #0F5B3A, #2E7D32)`, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '120px', height: '120px', background: 'rgba(255,255,255,0.06)', borderRadius: '50%' }} />
              <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', width: '100px', height: '100px', background: 'rgba(124,179,66,0.12)', borderRadius: '50%' }} />
              <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <BookOpen size={36} color="rgba(255,255,255,0.6)" />
                <div style={{ marginTop: '0.5rem', padding: '0.25rem 0.75rem', borderRadius: '9999px', background: 'rgba(255,255,255,0.15)', color: 'white', fontSize: '0.75rem', fontWeight: 600, display: 'inline-block' }}>
                  {post.category}
                </div>
              </div>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.875rem' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <Clock size={12} /> {post.readTime} leitura
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{post.date}</span>
              </div>
              <h3 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '1.0625rem', marginBottom: '0.75rem', lineHeight: 1.4, color: 'var(--color-text)' }}>{post.title}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>{post.excerpt}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                Ler artigo <ArrowRight size={14} />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
