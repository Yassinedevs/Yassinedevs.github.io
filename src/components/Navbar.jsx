import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#skills', label: 'Compétences' },
  { href: '#experience', label: 'Expérience' },
  { href: '#education', label: 'Formation' },
  { href: '#projects', label: 'Projets' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">YB</a>
        <ul className="nav-links">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn btn-outline nav-cta">Contact</a>
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Menu"
        >
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
        </button>
      </div>
      {menuOpen && (
        <div className="nav-mobile-menu">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
