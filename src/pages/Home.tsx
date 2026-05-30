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

/* ── Ría SVG – Generative tidal estuary ──
   Inspired by satellite imagery of the Bahía Blanca estuary (Argentina).
   Organic dendritic channels breathing with tidal flow.
   The composition flows from continent (left) toward the Atlantic (right),
   with the main canal widening at the mouth and branching into
   secondary, tertiary, and capillary tidal creeks. ── */
function RiaAnimation() {
  return (
    <div className="ria-container">
      <svg
        className="ria-svg"
        viewBox="0 0 1200 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Mouth glow – the widening where channels meet the Atlantic */}
          <radialGradient id="estuaryGlow" cx="88%" cy="50%" r="35%" fx="85%" fy="50%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.08" />
            <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.035" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
          {/* Continent glow – subtle source at the left */}
          <radialGradient id="continentGlow" cx="8%" cy="55%" r="25%" fx="10%" fy="55%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.05" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ── Ambient glows ── */}
        <rect className="ria-glow" x="0" y="0" width="1200" height="600" fill="url(#estuaryGlow)" />
        <rect className="ria-glow" x="0" y="0" width="1200" height="600" fill="url(#continentGlow)" />

        {/* ═══════════════════════════════════════════════════════
           CANAL PRINCIPAL (Main Channel)
           Flows NW→SE from the continent toward the Atlantic.
           Asymmetric meanders, widening subtly at the mouth.
           ═══════════════════════════════════════════════════════ */}

        {/* Primary channel – the main artery */}
        <path
          className="ria-channel channel--primary"
          d="M -40 340
             C 30 338, 80 360, 150 348
             C 220 336, 280 312, 360 325
             C 440 338, 510 375, 590 358
             C 670 341, 740 315, 820 330
             C 900 345, 970 370, 1050 355
             C 1110 344, 1170 335, 1240 340"
        />

        {/* Primary lower trace – subtle depth beneath the main channel */}
        <path
          className="ria-channel channel--primary-lower"
          d="M -20 345
             C 40 342, 90 365, 155 352
             C 225 339, 285 316, 365 330
             C 445 344, 515 380, 595 362
             C 675 344, 745 318, 825 334
             C 905 350, 975 374, 1055 358"
        />

        {/* ═══════════════════════════════════════════════════════
           SECONDARY CHANNELS – Upper Branches
           Branching upward from the main canal at irregular intervals.
           Some curve back down (reconnecting), forming tidal islands.
           ═══════════════════════════════════════════════════════ */}

        {/* Branch 1: upper, from x≈100 */}
        <path
          className="ria-channel channel--secondary"
          d="M 100 352
             C 120 330, 145 315, 180 305
             C 215 295, 250 290, 290 282
             C 330 274, 360 272, 390 278"
        />

        {/* Branch 2: upper, from x≈320 */}
        <path
          className="ria-channel channel--secondary"
          d="M 320 320
             C 350 298, 385 282, 430 272
             C 475 262, 520 258, 570 252
             C 620 246, 660 248, 700 258"
        />

        {/* Branch 3: upper, from x≈560 */}
        <path
          className="ria-channel channel--secondary"
          d="M 560 360
             C 585 338, 615 320, 655 308
             C 695 296, 735 290, 780 282
             C 825 274, 860 272, 900 278"
        />

        {/* Branch 4: upper, from x≈780 */}
        <path
          className="ria-channel channel--secondary"
          d="M 780 328
             C 805 308, 835 292, 870 282
             C 905 272, 940 268, 980 270"
        />

        {/* Rejoin branch 1: arcs back down toward main */}
        <path
          className="ria-channel channel--secondary-rejoin"
          d="M 390 278
             C 410 290, 425 305, 440 325
             C 450 338, 455 348, 460 356"
        />

        {/* Rejoin branch 2: arcs back down */}
        <path
          className="ria-channel channel--secondary-rejoin"
          d="M 700 258
             C 720 275, 735 295, 745 315
             C 752 330, 758 342, 765 352"
        />

        {/* ═══════════════════════════════════════════════════════
           SECONDARY CHANNELS – Lower Branches
           Branching downward from the main canal.
           ═══════════════════════════════════════════════════════ */}

        {/* Branch 5: lower, from x≈150 */}
        <path
          className="ria-channel channel--secondary"
          d="M 150 350
             C 165 375, 185 395, 215 408
             C 245 421, 275 428, 310 432"
        />

        {/* Branch 6: lower, from x≈360 */}
        <path
          className="ria-channel channel--secondary"
          d="M 360 330
             C 375 355, 395 378, 425 395
             C 455 412, 490 422, 530 428"
        />

        {/* Branch 7: lower, from x≈590 */}
        <path
          className="ria-channel channel--secondary"
          d="M 590 362
             C 608 388, 630 410, 660 425
             C 690 440, 725 448, 765 450"
        />

        {/* Branch 8: lower, from x≈820 */}
        <path
          className="ria-channel channel--secondary"
          d="M 820 334
             C 838 358, 860 380, 890 396
             C 920 412, 950 420, 990 424"
        />

        {/* ═══════════════════════════════════════════════════════
           TERTIARY TRIBUTARIES
           Finer channels branching from secondary channels.
           These form the intermediate tidal creek network.
           ═══════════════════════════════════════════════════════ */}

        {/* From upper branch 1 */}
        <path className="ria-channel channel--tertiary" d="M 215 295 C 235 278, 255 265, 280 255 C 305 245, 325 240, 350 238" />
        <path className="ria-channel channel--tertiary" d="M 290 282 C 310 268, 325 258, 345 250" />

        {/* From upper branch 2 */}
        <path className="ria-channel channel--tertiary" d="M 475 262 C 495 245, 520 232, 550 222 C 580 212, 610 208, 640 210" />
        <path className="ria-channel channel--tertiary" d="M 570 252 C 590 238, 610 228, 635 220 C 660 212, 682 210, 705 214" />

        {/* From upper branch 3 */}
        <path className="ria-channel channel--tertiary" d="M 695 296 C 715 280, 735 268, 760 258 C 785 248, 810 244, 840 242" />
        <path className="ria-channel channel--tertiary" d="M 825 274 C 845 260, 865 250, 890 242" />

        {/* From upper branch 4 */}
        <path className="ria-channel channel--tertiary" d="M 905 272 C 925 255, 950 242, 980 234 C 1010 226, 1035 224, 1060 228" />

        {/* From lower branch 5 */}
        <path className="ria-channel channel--tertiary" d="M 245 421 C 265 440, 285 452, 310 460 C 335 468, 360 470, 390 468" />
        <path className="ria-channel channel--tertiary" d="M 215 408 C 230 425, 248 438, 270 448" />

        {/* From lower branch 6 */}
        <path className="ria-channel channel--tertiary" d="M 425 395 C 445 415, 468 430, 495 440 C 522 450, 550 454, 580 452" />
        <path className="ria-channel channel--tertiary" d="M 530 428 C 550 442, 570 452, 595 458" />

        {/* From lower branch 7 */}
        <path className="ria-channel channel--tertiary" d="M 660 425 C 680 445, 700 458, 725 465 C 750 472, 775 474, 805 470" />
        <path className="ria-channel channel--tertiary" d="M 725 448 C 745 462, 765 472, 790 478" />

        {/* From lower branch 8 */}
        <path className="ria-channel channel--tertiary" d="M 890 396 C 910 418, 935 435, 965 445 C 995 455, 1025 458, 1060 455" />

        {/* ═══════════════════════════════════════════════════════
           CAPILLARY CHANNELS – Tidal Creeks
           Very fine, delicate channels that appear/disappear gradually.
           These create the dendritic "satellite map" texture.
           ═══════════════════════════════════════════════════════ */}

        {/* Upper capillary network */}
        <path className="ria-channel channel--capillary" d="M 350 238 C 365 228, 380 220, 400 215 C 420 210, 438 210, 455 214" />
        <path className="ria-channel channel--capillary" d="M 640 210 C 658 200, 678 192, 700 188 C 722 184, 742 186, 760 192" />
        <path className="ria-channel channel--capillary" d="M 840 242 C 855 232, 870 225, 888 220 C 906 215, 920 216, 935 222" />
        <path className="ria-channel channel--capillary" d="M 980 234 C 995 225, 1010 218, 1030 214 C 1050 210, 1068 212, 1085 218" />
        <path className="ria-channel channel--capillary" d="M 1060 228 C 1075 222, 1090 218, 1110 216" />

        {/* Lower capillary network */}
        <path className="ria-channel channel--capillary" d="M 390 468 C 410 472, 430 474, 450 472 C 470 470, 485 465, 500 458" />
        <path className="ria-channel channel--capillary" d="M 580 452 C 600 456, 620 458, 642 456 C 664 454, 682 448, 700 440" />
        <path className="ria-channel channel--capillary" d="M 805 470 C 825 474, 848 475, 870 472 C 892 469, 910 462, 928 452" />
        <path className="ria-channel channel--capillary" d="M 960 445 C 980 452, 1000 456, 1025 456 C 1050 456, 1070 452, 1090 445" />
        <path className="ria-channel channel--capillary" d="M 1060 455 C 1080 458, 1100 458, 1120 454" />

        {/* Fainter capillary creeks – dendritic tips */}
        <path className="ria-channel channel--capillary-faint" d="M 400 215 C 415 208, 430 204, 448 202" />
        <path className="ria-channel channel--capillary-faint" d="M 700 188 C 715 182, 732 180, 750 182" />
        <path className="ria-channel channel--capillary-faint" d="M 888 220 C 902 214, 918 210, 935 210" />
        <path className="ria-channel channel--capillary-faint" d="M 1030 214 C 1042 208, 1058 205, 1075 206" />
        <path className="ria-channel channel--capillary-faint" d="M 450 472 C 465 476, 480 476, 498 472" />
        <path className="ria-channel channel--capillary-faint" d="M 642 456 C 658 460, 675 460, 692 456" />
        <path className="ria-channel channel--capillary-faint" d="M 870 472 C 885 476, 900 476, 918 472" />
        <path className="ria-channel channel--capillary-faint" d="M 1025 456 C 1040 460, 1055 460, 1072 456" />
        <path className="ria-channel channel--capillary-faint" d="M 310 460 C 325 466, 340 468, 358 466" />
        <path className="ria-channel channel--capillary-faint" d="M 280 255 C 292 248, 305 244, 320 244" />
        <path className="ria-channel channel--capillary-faint" d="M 550 222 C 562 215, 578 210, 595 212" />
        <path className="ria-channel channel--capillary-faint" d="M 495 440 C 508 448, 522 452, 540 452" />
        <path className="ria-channel channel--capillary-faint" d="M 965 445 C 980 450, 995 452, 1012 450" />
        <path className="ria-channel channel--capillary-faint" d="M 725 465 C 740 472, 755 475, 772 472" />

        {/* ═══════════════════════════════════════════════════════
           MOUTH DISTRIBUTARIES – Estuary Opening
           The main channel widens as it approaches the Atlantic.
           Multiple divergent paths create the widening mouth effect.
           ═══════════════════════════════════════════════════════ */}

        {/* Upper distributaries */}
        <path className="ria-channel channel--mouth" d="M 1050 355 C 1090 340, 1120 325, 1160 315 C 1190 308, 1210 305, 1240 305" />
        <path className="ria-channel channel--mouth" d="M 1050 355 C 1085 348, 1115 342, 1150 340 C 1185 338, 1210 340, 1240 345" />

        {/* Lower distributaries */}
        <path className="ria-channel channel--mouth" d="M 1050 358 C 1088 370, 1120 382, 1155 390 C 1185 396, 1210 398, 1240 398" />
        <path className="ria-channel channel--mouth" d="M 1050 358 C 1082 365, 1112 372, 1148 378 C 1180 383, 1210 385, 1240 385" />

        {/* Wider, fainter mouth traces */}
        <path className="ria-channel channel--mouth-wide" d="M 1050 355 C 1095 332, 1130 315, 1170 305 C 1205 298, 1225 296, 1240 298" />
        <path className="ria-channel channel--mouth-wide" d="M 1050 358 C 1095 380, 1135 398, 1175 408 C 1208 415, 1228 418, 1240 418" />
        <path className="ria-channel channel--mouth-wide" d="M 900 278 C 940 265, 980 252, 1020 245 C 1060 238, 1100 232, 1140 230" />
        <path className="ria-channel channel--mouth-wide" d="M 990 424 C 1030 435, 1070 442, 1110 445 C 1150 448, 1185 446, 1240 442" />

        {/* ═══════════════════════════════════════════════════════
           SUBTLE CROSS-CHANNEL CONNECTIONS
           Channels that create the "reticular" network feel
           of a tidal wetland – connecting upper and lower branches.
           ═══════════════════════════════════════════════════════ */}

        <path className="ria-channel channel--capillary" d="M 505 195 C 520 230, 530 260, 540 302" />
        <path className="ria-channel channel--capillary" d="M 350 238 C 365 270, 375 295, 380 318" />
        <path className="ria-channel channel--capillary" d="M 700 258 C 710 290, 715 315, 718 335" />
        <path className="ria-channel channel--capillary" d="M 310 432 C 325 405, 340 380, 355 348" />
        <path className="ria-channel channel--capillary" d="M 765 450 C 775 420, 785 395, 795 365" />
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
      minHeight: '600px',
    }}>
      {/* Ría – generative tidal estuary filling the hero */}
      <RiaAnimation />

      <div style={{
        position: 'absolute', inset: 0,
        background: `
          radial-gradient(ellipse 60% 45% at 15% 35%, rgba(201,123,93,0.08) 0%, transparent 65%),
          radial-gradient(ellipse 45% 50% at 85% 65%, rgba(201,123,93,0.06) 0%, transparent 55%)
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
            Esto es lo que miramos, y cómo lo convertimos en soluciones concretas.
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
            <div className="beliefs-closing__attr">, {brand.name} · {brand.subtitle}</div>
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
