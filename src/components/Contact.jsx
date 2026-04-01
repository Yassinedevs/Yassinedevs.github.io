import { useState } from 'react'

const contactItems = [
  {
    label: 'Email',
    value: 'yassine_49bouhi@hotmail.com',
    href: 'mailto:yassine_49bouhi@hotmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: 'Téléphone',
    value: '06 95 62 72 45',
    href: 'tel:+33695627245',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: 'Localisation',
    value: 'Partout en France — mobile & flexible',
    href: null,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'Yassinedevs',
    href: 'https://github.com/Yassinedevs',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('yassine_49bouhi@hotmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-grid">
          <div data-reveal>
            <p className="section-label">Contact</p>
            <h2 className="contact-headline">
              Travaillons<br />ensemble
            </h2>
            <p className="contact-sub">
              Disponible pour des missions freelance ou un poste en CDI.
              N'hésitez pas à me contacter pour discuter de vos projets.
            </p>
            <div className="contact-infos">
              {contactItems.map((item, i) => {
                const inner = (
                  <>
                    <div className="contact-info-icon">{item.icon}</div>
                    <div>
                      <div className="contact-info-label">{item.label}</div>
                      <div className="contact-info-value">{item.value}</div>
                    </div>
                  </>
                )
                return item.href ? (
                  <a
                    key={i}
                    href={item.href}
                    className="contact-info-item"
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={i} className="contact-info-item">{inner}</div>
                )
              })}
            </div>
          </div>

          <div data-reveal data-reveal-delay="2" className="contact-cta-card">
            <div className="contact-cta-inner">
              <div className="contact-cta-badge">
                <span className="badge-dot"></span>
                Disponible
              </div>
              <h3 className="contact-cta-title">Prêt à collaborer</h3>
              <p className="contact-cta-desc">
                Développeur full-stack & mobile avec 3 ans d'expérience. Télétravail ou présentiel,
                je suis à l'écoute de vos opportunités.
              </p>
              <div className="contact-cta-actions">
                <a
                  href="mailto:yassine_49bouhi@hotmail.com"
                  className="btn btn-primary contact-btn-full"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                  </svg>
                  Envoyer un email
                </a>
                <button onClick={copyEmail} className="btn btn-outline contact-btn-full">
                  {copied ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Copié !
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" />
                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                      </svg>
                      Copier l'email
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
