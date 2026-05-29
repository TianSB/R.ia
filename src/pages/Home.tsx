import { brand } from '../data/brand'

const containerStyle: React.CSSProperties = {
  maxWidth: 1280,
  margin: '0 auto',
  padding: '0 32px',
}

const sectionStyle: React.CSSProperties = {
  padding: '72px 0',
}

const sectionLabel: React.CSSProperties = {
  fontSize: '0.7rem',
  fontWeight: 600,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: 'var(--slate)',
  marginBottom: 8,
}

const sectionTitle: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
  fontWeight: 600,
  color: 'var(--teal)',
  marginBottom: 48,
  lineHeight: 1.2,
}

/* ── Hero ── */
function Hero() {
  return (
    <header style={{
      background: 'linear-gradient(135deg, #1A3C5E 0%, #1A5C5E 50%, #2D5A3E 100%)',
      color: 'white',
      padding: '80px 0 60px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          radial-gradient(ellipse 80% 60% at 10% 20%, rgba(212,168,83,0.15) 0%, transparent 70%),
          radial-gradient(ellipse 60% 50% at 90% 80%, rgba(201,123,93,0.12) 0%, transparent 70%),
          radial-gradient(ellipse 50% 40% at 50% 50%, rgba(139,168,142,0.08) 0%, transparent 60%)
        `,
        pointerEvents: 'none',
      }} />
      <div style={{ ...containerStyle, position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'inline-block', fontSize: '0.75rem', fontWeight: 600,
          letterSpacing: '0.15em', textTransform: 'uppercase',
          color: 'var(--gold-light)',
          border: '1px solid rgba(212,168,83,0.4)',
          padding: '6px 16px', borderRadius: 100, marginBottom: 24,
        }}>
          {brand.tagline}
        </div>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 600, lineHeight: 1.15, marginBottom: 16,
        }}>
          {brand.name}
        </h1>
        <p style={{
          fontSize: '1.15rem', maxWidth: 600, opacity: 0.85,
          fontWeight: 300, lineHeight: 1.7,
        }}>
          Diseñamos sistemas y automatizaciones para que los negocios funcionen
          de manera más liviana. Sin fricciones, sin desgaste.
        </p>
      </div>
    </header>
  )
}

/* ── Archetype Cards ── */
function ArchetypeSection() {
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={sectionLabel}>Arquetipo</div>
        <h2 style={sectionTitle}>La personalidad de la marca</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24, marginBottom: 48,
        }}>
          {brand.archetypes.map((a) => (
            <div key={a.name} style={{
              background: 'white', borderRadius: 16, padding: 32,
              boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              border: '1px solid rgba(0,0,0,0.04)',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = ''
                e.currentTarget.style.boxShadow = ''
              }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem', marginBottom: 20,
                background: `${a.color}22`,
              }}>
                {a.icon}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontSize: '1.3rem',
                fontWeight: 600, color: 'var(--charcoal)', marginBottom: 4,
              }}>
                {a.name}
              </h3>
              <div style={{
                fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.12em',
                textTransform: 'uppercase', color: 'var(--slate)', marginBottom: 12,
              }}>
                {a.role}
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--slate)', lineHeight: 1.7 }}>
                {a.description}
              </p>
              <div style={{ marginTop: 12, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {a.tags.map((t) => (
                  <span key={t} style={{
                    display: 'inline-block', fontSize: '0.7rem', fontWeight: 600,
                    padding: '3px 10px', borderRadius: 100,
                    background: `${a.color}1A`, color: a.color,
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tagline box */}
        <div style={{
          background: 'linear-gradient(135deg, var(--teal), #2D5A3E)',
          borderRadius: 16, padding: 48, textAlign: 'center', color: 'white',
        }}>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
            fontStyle: 'italic', fontWeight: 400, lineHeight: 1.5,
            maxWidth: 700, margin: '0 auto 12px',
          }}>
            "Convertimos el desorden cotidiano en funcionamiento armónico."
          </div>
          <div style={{ fontSize: '0.85rem', opacity: 0.7 }}>
            — Esencia de marca
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Palette ── */
function PaletteSection() {
  return (
    <section style={{ ...sectionStyle, background: 'white' }}>
      <div style={containerStyle}>
        <div style={sectionLabel}>Color</div>
        <h2 style={sectionTitle}>Paleta cromática</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 16,
        }}>
          {brand.palette.map((c) => {
            const isLight = c.hex === '#F5F0EB'
            return (
              <div key={c.hex} style={{
                borderRadius: 16, overflow: 'hidden',
                background: 'white', border: '1px solid rgba(0,0,0,0.04)',
              }}>
                <div style={{
                  height: 120, background: c.hex,
                  display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end',
                  padding: 12,
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
                    color: isLight ? '#333' : 'white',
                    background: isLight ? 'rgba(0,0,0,0.08)' : 'rgba(0,0,0,0.35)',
                    backdropFilter: 'blur(8px)',
                    padding: '3px 10px', borderRadius: 6,
                  }}>
                    {c.hex}
                  </span>
                </div>
                <div style={{ padding: '14px 16px 16px' }}>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: 2 }}>
                    {c.name}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--slate)' }}>
                    {c.role}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ── Typography ── */
function TypographySection() {
  const fontFamilies: Record<string, string> = {
    'Playfair Display': "'Playfair Display', serif",
    'Inter': "'Inter', sans-serif",
    'JetBrains Mono': "'JetBrains Mono', monospace",
  }

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={sectionLabel}>Tipografía</div>
        <h2 style={sectionTitle}>Sistema tipográfico</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 32,
        }}>
          {brand.typography.map((t) => (
            <div key={t.name} style={{
              background: 'white', borderRadius: 16, padding: 32,
              border: '1px solid rgba(0,0,0,0.04)',
            }}>
              <div style={{
                fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em',
                textTransform: 'uppercase', color: 'var(--slate)', marginBottom: 20,
              }}>
                {t.type}
              </div>
              <div style={{
                fontFamily: fontFamilies[t.name],
                fontSize: t.name === 'Playfair Display' ? '2rem' : '1.15rem',
                fontWeight: t.name === 'Playfair Display' ? 600 : 500,
                color: 'var(--charcoal)', lineHeight: 1.2, marginBottom: 8,
              }}>
                {t.name}
              </div>
              {t.type === 'Titulares · Display' && (
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.15rem', fontStyle: 'italic', fontWeight: 500,
                  color: 'var(--charcoal)', marginBottom: 8,
                }}>
                  {t.preview}
                </div>
              )}
              {t.type === 'Cuerpo · UI' && (
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', color: 'var(--slate)', lineHeight: 1.7 }}>
                  {t.preview}
                </div>
              )}
              {t.type === 'Monospace · Datos' && (
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem',
                  color: 'var(--teal)', lineHeight: 1.8,
                }}>
                  {t.preview}
                </div>
              )}
              <div style={{
                marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--cream-dark)',
                fontSize: '0.82rem', color: 'var(--slate)',
              }}>
                <strong style={{ color: 'var(--charcoal)', fontWeight: 600 }}>{t.name}</strong>
                {' · '}{t.weights}<br />
                Usos: {t.usage}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Concepts ── */
function ConceptsSection() {
  return (
    <section style={{ ...sectionStyle, background: 'white' }}>
      <div style={containerStyle}>
        <div style={sectionLabel}>Conceptos</div>
        <h2 style={sectionTitle}>Vocabulario de marca</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 16,
        }}>
          {brand.concepts.map((c) => (
            <div key={c.name} style={{
              background: 'var(--cream)', borderRadius: 12, padding: 24,
              border: '1px solid var(--cream-dark)',
              transition: 'transform 0.2s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = '' }}
            >
              <h3 style={{
                fontFamily: 'var(--font-display)', fontSize: '1.1rem',
                fontWeight: 600, color: 'var(--teal)', marginBottom: 8,
              }}>
                {c.name}
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--slate)', lineHeight: 1.6 }}>
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Manifesto ── */
function ManifestoSection() {
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={sectionLabel}>Manifiesto</div>
        <h2 style={sectionTitle}>Creemos que...</h2>

        {/* Mago */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontSize: '1.2rem', color: 'var(--gold)', marginBottom: 16 }}>✧</div>
          <p style={{
            maxWidth: 680, margin: '0 auto', fontSize: '1rem',
            color: 'var(--charcoal)', lineHeight: 1.8,
          }}>
            {brand.manifesto.mago}
          </p>
          <div style={{ fontSize: '0.85rem', color: '#8B6F2E', fontStyle: 'italic', marginTop: 12 }}>
            — El Mago
          </div>
        </div>

        {/* Cuidador */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontSize: '1.2rem', color: 'var(--terracotta)', marginBottom: 16 }}>✧</div>
          <p style={{
            maxWidth: 680, margin: '0 auto', fontSize: '1rem',
            color: 'var(--charcoal)', lineHeight: 1.8,
          }}>
            {brand.manifesto.cuidador}
          </p>
          <div style={{ fontSize: '0.85rem', color: '#8A4E36', fontStyle: 'italic', marginTop: 12 }}>
            — El Cuidador
          </div>
        </div>

        {/* Sabio */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontSize: '1.2rem', color: 'var(--teal)', marginBottom: 16 }}>✧</div>
          <p style={{
            maxWidth: 680, margin: '0 auto', fontSize: '1rem',
            color: 'var(--charcoal)', lineHeight: 1.8,
          }}>
            {brand.manifesto.sabio}
          </p>
          <div style={{ fontSize: '0.85rem', color: 'var(--teal)', fontStyle: 'italic', marginTop: 12 }}>
            — El Sabio
          </div>
        </div>

        {/* Cierre */}
        <hr style={{
          border: 'none', borderTop: '1px solid var(--gold)', opacity: 0.4,
          margin: '0 auto 24px', maxWidth: 300,
        }} />
        <div style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
          fontStyle: 'italic', textAlign: 'center', maxWidth: 700,
          margin: '0 auto', color: 'var(--teal)', lineHeight: 1.5,
        }}>
          {brand.frase}
        </div>
      </div>
    </section>
  )
}

/* ── Footer ── */
function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--cream-dark)', padding: '32px 0',
      textAlign: 'center', color: 'var(--slate)', fontSize: '0.82rem',
    }}>
      <div style={containerStyle}>
        Microagencia · {brand.tagline} · 2026
      </div>
    </footer>
  )
}

/* ── Home Page ── */
export default function Home() {
  return (
    <>
      <Hero />
      <ArchetypeSection />
      <PaletteSection />
      <TypographySection />
      <ConceptsSection />
      <ManifestoSection />
      <Footer />
    </>
  )
}
