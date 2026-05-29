import ScrollReveal from '../components/ScrollReveal'
import { brand } from '../data/brand'
import { useState } from 'react'

const containerStyle: React.CSSProperties = {
  maxWidth: 1280,
  margin: '0 auto',
  padding: '0 32px',
}

const sectionStyle: React.CSSProperties = {
  padding: '96px 0',
}

const sectionLabel: React.CSSProperties = {
  fontSize: '0.68rem',
  fontWeight: 500,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'var(--text-tertiary)',
  marginBottom: 8,
  fontFamily: 'var(--font-mono)',
}

const sectionTitle: React.CSSProperties = {
  fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)',
  fontWeight: 450,
  color: 'var(--text-primary)',
  marginBottom: 48,
  lineHeight: 1.25,
  letterSpacing: '-0.02em',
}

/* ── Hero ── */
function Hero() {
  return (
    <header style={{
      background: 'var(--bg-primary)',
      color: 'var(--text-primary)',
      padding: '160px 0 80px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          radial-gradient(ellipse 70% 50% at 20% 30%, rgba(107,168,154,0.06) 0%, transparent 70%),
          radial-gradient(ellipse 50% 40% at 80% 70%, rgba(107,168,154,0.04) 0%, transparent 60%)
        `,
        pointerEvents: 'none',
      }} />
      <div style={{ ...containerStyle, position: 'relative', zIndex: 1 }}>
        <div className="hero-badge">
          {brand.tagline}
        </div>
        <h1 style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(2.8rem, 6vw, 5rem)',
          fontWeight: 500,
          lineHeight: 1.05,
          marginBottom: 4,
          letterSpacing: '-0.04em',
          color: 'var(--text-primary)',
        }}>
          {brand.name}
        </h1>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
          color: 'var(--accent)',
          marginBottom: 24,
          fontWeight: 400,
          letterSpacing: '-0.01em',
        }}>
          {brand.subtitle}
        </p>
        <p style={{
          fontSize: '1.05rem', maxWidth: 560, color: 'var(--text-secondary)',
          fontWeight: 350, lineHeight: 1.7, marginBottom: 36,
        }}>
          Diseñamos sistemas y automatizaciones para que los negocios funcionen
          de manera más liviana. Sin fricciones, sin desgaste.
        </p>
        <a
          href={brand.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-cta"
        >
          Escribinos por WhatsApp
          <span className="hero-cta-arrow">→</span>
        </a>
      </div>
    </header>
  )
}

/* ── Areas ── */
function AreasSection() {
  return (
    <section id="areas" style={sectionStyle}>
      <div style={containerStyle}>
        <ScrollReveal>
          <div style={sectionLabel}>Servicios</div>
          <h2 style={sectionTitle}>Áreas de transformación</h2>
        </ScrollReveal>
        <ScrollReveal direction='none' delay={150}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 16,
        }}>
          {brand.areas.map((a) => (
            <div key={a.title} className="area-card">
              <div className="area-card__symbol">{a.symbol}</div>
              <h3 className="area-card__title">{a.title}</h3>
              <p className="area-card__desc">{a.description}</p>
            </div>
          ))}
        </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

/* ── Process ── */
function ProcessSection() {
  return (
    <section id="proceso" style={{ ...sectionStyle, background: 'var(--bg-secondary)' }}>
      <div style={containerStyle}>
        <ScrollReveal>
          <div style={sectionLabel}>Metodología</div>
          <h2 style={sectionTitle}>Cómo trabajamos</h2>
        </ScrollReveal>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          maxWidth: 700,
          margin: '0 auto',
        }}>
          {brand.process.map((p, i) => (
            <ScrollReveal key={p.step} direction='up' delay={i * 120}>
              <div className="process-card">
                <div className="process-card__step">
                  {String(p.step).padStart(2, '0')}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 className="process-card__title">{p.title}</h3>
                  <p className="process-card__desc">{p.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Concepts as Services ── */
function ConceptsSection() {
  return (
    <section id="conceptos" style={sectionStyle}>
      <div style={containerStyle}>
        <ScrollReveal>
          <div style={sectionLabel}>Diagnóstico</div>
          <h2 style={sectionTitle}>Lo que vemos en tu negocio</h2>
          <p style={{
            fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7,
            maxWidth: 620, marginBottom: 40,
          }}>
            Cada negocio tiene su propio mapa de oportunidades y obstáculos.
            Esto es lo que detectamos — y cómo lo transformamos en soluciones concretas.
          </p>
        </ScrollReveal>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 16,
        }}>
          {brand.concepts.map((c, i) => (
            <ScrollReveal key={c.name} direction='up' delay={i * 60}>
              <div className="service-card">
                <div className="service-card__header">
                  <span className="service-card__symbol">{c.symbol}</span>
                  <span className="service-card__tag">{c.tag}</span>
                </div>
                <h3 className="service-card__title">{c.name}</h3>
                <p className="service-card__desc">{c.description}</p>
                <div className="service-card__line" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Beliefs – Interactive Accordion ── */

function BeliefCard({ belief, index }: { belief: typeof brand.beliefs[number]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <ScrollReveal key={index} direction='up' delay={index * 100}>
      <div className={`belief-card${open ? ' belief-card--open' : ''}`}>
        <button
          className="belief-card__trigger"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          <span className="belief-card__symbol" style={{
            background: `${belief.accent}14`,
            borderColor: `${belief.accent}33`,
            color: belief.accent,
          }}>
            {belief.symbol}
          </span>
          <p className="belief-card__short">{belief.short}</p>
          <span className={`belief-card__chevron${open ? ' chevron--rotated' : ''}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </span>
        </button>
        <div className={`belief-card__content${open ? ' content--visible' : ''}`}>
          <div className="belief-card__inner">
            <p>{belief.expanded}</p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

function BeliefsSection() {
  return (
    <section id="creemos" style={{ ...sectionStyle, background: 'var(--bg-secondary)' }}>
      <div style={containerStyle}>
        <ScrollReveal>
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            textAlign: 'center', marginBottom: 48,
          }}>
            <div style={{
              fontSize: '0.68rem', fontWeight: 500,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'var(--text-tertiary)', marginBottom: 8,
              fontFamily: 'var(--font-mono)',
            }}>
              Nuestra mirada
            </div>
            <h2 style={{
              fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)',
              fontWeight: 450, color: 'var(--text-primary)',
              lineHeight: 1.25, marginBottom: 12,
              letterSpacing: '-0.02em',
            }}>
              Cómo pensamos el trabajo
            </h2>
            <p style={{
              fontSize: '0.85rem', color: 'var(--text-secondary)',
              maxWidth: 460, lineHeight: 1.7,
            }}>
              Tocá cada card para conocer nuestra forma de entender los negocios.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          {brand.beliefs.map((b, i) => (
            <BeliefCard key={i} belief={b} index={i} />
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="beliefs-closing">
            <div className="beliefs-closing__ornament">◇</div>
            <p className="beliefs-closing__quote">{brand.frase}</p>
            <div className="beliefs-closing__attr">— {brand.name} · {brand.subtitle}</div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

/* ── Footer ── */
function Footer() {
  return (
    <footer className="site-footer">
      <div style={containerStyle}>
        <p className="site-footer__text">
          {brand.name} · {brand.subtitle} · {brand.tagline} · 2026
        </p>
        <a
          href={brand.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="site-footer__link"
        >
          {brand.phone}
        </a>
      </div>
    </footer>
  )
}

/* ── Home Page ── */
export default function Home() {
  return (
    <>
      <Hero />
      <AreasSection />
      <ProcessSection />
      <ConceptsSection />
      <BeliefsSection />
      <Footer />
    </>
  )
}
