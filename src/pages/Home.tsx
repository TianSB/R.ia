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
  fontSize: '0.78rem',
  fontWeight: 500,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'var(--text-secondary)',
  marginBottom: 10,
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

/* ── Ría SVG – dendritic delta flowing left→right ──
   Inspired by satellite imagery of the Bahía Blanca estuary.
   A web of channels that branch and meander like the real
   tidal wetland, flowing from the continent toward the Atlantic. ── */
function RiaAnimation() {
  return (
    <div className="ria-container">
      <svg
        className="ria-svg"
        viewBox="0 0 1000 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* ── Main channel – primary artery meandering left→right ── */}
        <path
          className="ria-path ria-path--main"
          d="M -10 130
             C 40 125, 80 145, 130 135
             C 180 125, 220 110, 280 120
             C 340 130, 390 155, 450 140
             C 510 125, 560 108, 620 118
             C 680 128, 730 155, 790 140
             C 850 125, 900 110, 1010 115"
          strokeWidth="2.8"
          strokeLinecap="round"
        />

        {/* ── Upper secondary branches ── */}
        <path
          className="ria-path ria-path--secondary"
          d="M 130 135
             C 155 110, 180 95, 220 85
             C 260 75, 300 65, 350 55"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          className="ria-path ria-path--secondary"
          d="M 280 120
             C 310 100, 340 85, 385 72
             C 430 59, 470 50, 525 42"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          className="ria-path ria-path--secondary"
          d="M 450 140
             C 480 118, 515 100, 560 88
             C 605 76, 650 68, 710 58"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          className="ria-path ria-path--secondary"
          d="M 620 118
             C 650 98, 680 82, 720 72
             C 760 62, 800 55, 860 48"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* ── Lower secondary branches ── */}
        <path
          className="ria-path ria-path--secondary"
          d="M 280 120
             C 305 145, 330 165, 370 175
             C 410 185, 450 190, 505 195"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          className="ria-path ria-path--secondary"
          d="M 620 118
             C 650 145, 680 165, 720 178
             C 760 191, 800 198, 860 205"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          className="ria-path ria-path--secondary"
          d="M 790 140
             C 820 160, 850 175, 890 185
             C 930 195, 960 200, 1010 202"
          strokeWidth="1.1"
          strokeLinecap="round"
        />

        {/* ── Tertiary tributaries (tidal creeks) ── */}
        <path
          className="ria-path ria-path--tertiary"
          d="M 220 85 C 240 70, 260 58, 290 48 C 320 38, 350 30, 395 22"
          strokeWidth="0.9"
          strokeLinecap="round"
        />
        <path
          className="ria-path ria-path--tertiary"
          d="M 385 72 C 410 55, 440 42, 480 32 C 520 22, 560 15, 615 8"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
        <path
          className="ria-path ria-path--tertiary"
          d="M 560 88 C 585 72, 615 58, 650 48 C 685 38, 720 30, 770 22"
          strokeWidth="0.7"
          strokeLinecap="round"
        />
        <path
          className="ria-path ria-path--tertiary"
          d="M 720 72 C 750 55, 780 42, 820 32 C 860 22, 890 15, 940 8"
          strokeWidth="0.6"
          strokeLinecap="round"
        />
        <path
          className="ria-path ria-path--tertiary"
          d="M 370 175 C 400 190, 430 202, 470 208 C 510 214, 550 218, 605 220"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
        <path
          className="ria-path ria-path--tertiary"
          d="M 720 178 C 750 192, 780 205, 820 212 C 860 219, 890 222, 940 225"
          strokeWidth="0.7"
          strokeLinecap="round"
        />

        {/* ── Tiny dendritic veining (capillary channels) ── */}
        <path className="ria-path ria-path--tiny" d="M 290 48 C 310 35, 330 25, 360 18" strokeWidth="0.4" strokeLinecap="round" />
        <path className="ria-path ria-path--tiny" d="M 480 32 C 500 20, 520 12, 550 6" strokeWidth="0.35" strokeLinecap="round" />
        <path className="ria-path ria-path--tiny" d="M 650 48 C 670 35, 690 25, 720 18" strokeWidth="0.35" strokeLinecap="round" />
        <path className="ria-path ria-path--tiny" d="M 820 32 C 840 20, 860 12, 890 6" strokeWidth="0.3" strokeLinecap="round" />
        <path className="ria-path ria-path--tiny" d="M 470 208 C 490 218, 510 224, 540 230" strokeWidth="0.4" strokeLinecap="round" />
        <path className="ria-path ria-path--tiny" d="M 820 212 C 840 222, 860 228, 890 232" strokeWidth="0.35" strokeLinecap="round" />
        <path className="ria-path ria-path--tiny" d="M 710 58 C 730 45, 750 35, 780 28" strokeWidth="0.4" strokeLinecap="round" />
        <path className="ria-path ria-path--tiny" d="M 860 48 C 880 35, 900 25, 930 18" strokeWidth="0.3" strokeLinecap="round" />

        {/* ── Mouth widening (estuary opening to the Atlantic) ── */}
        <path className="ria-path ria-path--mouth" d="M 940 8 C 960 4, 980 2, 1010 0" strokeWidth="0.3" strokeLinecap="round" />
        <path className="ria-path ria-path--mouth" d="M 940 225 C 960 228, 980 230, 1010 232" strokeWidth="0.3" strokeLinecap="round" />
        <path className="ria-path ria-path--mouth" d="M 860 205 C 890 212, 920 218, 960 222 C 990 225, 1010 226, 1020 228" strokeWidth="0.5" strokeLinecap="round" />
        <path className="ria-path ria-path--mouth" d="M 860 48 C 890 42, 920 36, 960 32 C 990 28, 1010 26, 1020 25" strokeWidth="0.5" strokeLinecap="round" />

        {/* ── Flow particles drifting rightward with the current ── */}
        <circle className="ria-particle ria-particle--1" cx="60" cy="132" r="1.8" />
        <circle className="ria-particle ria-particle--2" cx="200" cy="115" r="1.5" />
        <circle className="ria-particle ria-particle--3" cx="350" cy="62" r="1.3" />
        <circle className="ria-particle ria-particle--4" cx="500" cy="145" r="1.5" />
        <circle className="ria-particle ria-particle--5" cx="660" cy="112" r="1.2" />
        <circle className="ria-particle ria-particle--6" cx="320" cy="170" r="1.6" />
        <circle className="ria-particle ria-particle--7" cx="550" cy="95" r="1" />
        <circle className="ria-particle ria-particle--8" cx="810" cy="148" r="1.4" />
      </svg>
    </div>
  )
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
      {/* Ría – dendritic delta flowing left→right at the bottom */}
      <RiaAnimation />

      <div style={{
        position: 'absolute', inset: 0,
        background: `
          radial-gradient(ellipse 70% 50% at 20% 30%, rgba(201,123,93,0.07) 0%, transparent 70%),
          radial-gradient(ellipse 50% 40% at 80% 70%, rgba(201,123,93,0.05) 0%, transparent 60%)
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
          Ayudamos a que tu negocio funcione con menos esfuerzo y más claridad.
          Sin tecnología que complique, sin procesos que agoten.
        </p>
        <a
          href={brand.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-cta"
        >
          Contactanos
          <span className="hero-cta-arrow">→</span>
        </a>
      </div>
    </header>
  )
}

/* ── Areas ── */
function AreasSection() {
  return (
    <section id="areas" style={sectionStyle} className="section-warm">
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
          <div className="process-timeline">
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
            Cada negocio tiene su propio mapa de oportunidades.
            Esto es lo que miramos — y cómo lo convertimos en soluciones concretas.
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
    <section id="creemos" style={sectionStyle} className="section-warm">
      <div style={containerStyle}>
        <ScrollReveal>
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            textAlign: 'center', marginBottom: 48,
          }}>
            <div style={{ ...sectionLabel, marginBottom: 16 }}>Nuestra mirada</div>
            <h2 style={{
              ...sectionTitle,
              maxWidth: 680,
            }}>
              Conocé nuestra forma de entender los negocios.
            </h2>
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
        <div className="footer__ornament" />
        <div className="footer__tagline">{brand.tagline}</div>
        <div className="footer__brand">{brand.name}</div>
        <div className="footer__brand-sub">{brand.subtitle}</div>
        <a
          href={brand.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="footer__cta"
        >
          Contactanos
          <span style={{ display: 'inline-flex', transition: 'transform 0.2s' }}>→</span>
        </a>
        <p className="site-footer__text" style={{ marginTop: 28 }}>
          {brand.phone}
        </p>
        <a
          href={brand.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="site-footer__link"
        >
          {brand.name} · {brand.subtitle} · 2026
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
      <ConceptsSection />
      <AreasSection />
      <ProcessSection />
      <BeliefsSection />
      <Footer />
    </>
  )
}
