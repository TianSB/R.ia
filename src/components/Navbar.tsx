import { useEffect, useState } from 'react'
import { brand } from '../data/brand'

const sections = [
  { id: 'areas', label: 'Áreas' },
  { id: 'proceso', label: 'Cómo trabajamos' },
  { id: 'conceptos', label: 'Diagnóstico' },
  { id: 'creemos', label: 'Nuestra mirada' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 769px)')
    const handler = () => { if (mq.matches) setMenuOpen(false) }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}${menuOpen ? ' navbar--menu-open' : ''}`}>
        <div className="navbar__inner">
          <button
            className="navbar__logo"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="navbar__logo-name">{brand.name}</span>
            <span className="navbar__logo-sub">{brand.subtitle}</span>
          </button>

          {/* Desktop links */}
          <div className="navbar__links">
            {sections.map((s) => (
              <button key={s.id} className="navbar__link" onClick={() => scrollTo(s.id)}>
                {s.label}
              </button>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger${menuOpen ? ' hamburger--active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && <div className="navbar__overlay" onClick={() => setMenuOpen(false)} />}

      {/* Mobile menu panel */}
      <div className={`navbar__mobile${menuOpen ? ' mobile--open' : ''}`}>
        <div className="mobile__links">
          {sections.map((s) => (
            <button
              key={s.id}
              className="mobile__link"
              onClick={() => scrollTo(s.id)}
            >
              <span className="mobile__link-dot" />
              {s.label}
            </button>
          ))}
        </div>
        <div className="mobile__footer">
          <span className="mobile__tagline">{brand.name} · {brand.subtitle}</span>
        </div>
      </div>
    </>
  )
}
