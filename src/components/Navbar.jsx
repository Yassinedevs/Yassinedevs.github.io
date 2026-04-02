import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, toggle, tr } = useLanguage()

  const navLinks = [
    { href: '#skills', label: tr.nav.skills },
    { href: '#experience', label: tr.nav.experience },
    { href: '#education', label: tr.nav.education },
    { href: '#projects', label: tr.nav.projects },
    { href: '#contact', label: tr.nav.contact },
  ]

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
        <div className="nav-right">
          <button
            className="lang-toggle"
            onClick={toggle}
            aria-label="Toggle language"
          >
            <span className={lang === 'fr' ? 'lang-active' : ''}>FR</span>
            <span className="lang-sep">|</span>
            <span className={lang === 'en' ? 'lang-active' : ''}>EN</span>
          </button>
          <a href="#contact" className="btn btn-outline nav-cta">{tr.nav.contact}</a>
        </div>
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
          <button className="lang-toggle lang-toggle-mobile" onClick={toggle}>
            <span className={lang === 'fr' ? 'lang-active' : ''}>FR</span>
            <span className="lang-sep">|</span>
            <span className={lang === 'en' ? 'lang-active' : ''}>EN</span>
          </button>
        </div>
      )}
    </nav>
  )
}
