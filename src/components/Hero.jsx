const stats = [
  { value: '3', label: 'ans d\'expérience' },
  { value: '2', label: 'entreprises' },
  { value: 'Bac +5', label: 'MBA Dev Full-Stack' },
]

const stackLeft = ['React', 'Angular', 'Vue.js', 'Flutter']
const stackRight = ['Node.js', 'Symfony', 'Docker', 'PostgreSQL']

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg">
        <div className="hero-grid"></div>
      </div>
      <div className="hero-content container">

        {/* LEFT */}
        <div className="hero-left">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Disponible pour de nouvelles opportunités
          </div>
          <p className="hero-intro">Bonjour, je suis</p>
          <h1 className="hero-name">
            Yassine <span>BOUHI</span>
          </h1>
          <h2 className="hero-title">Développeur full-stack &amp; mobile</h2>
          <p className="hero-desc">
            Jeune diplômé passionné par le développement full-stack et mobile,
            j'ai acquis 3 ans d'expérience en TPE, où j'ai mené des projets variés
            allant d'applications mobiles à des ERP/CRM sur mesure.
            Mon objectif&nbsp;: continuer à progresser et apporter une réelle valeur ajoutée.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Voir mes projets
            </a>
            <a href="#contact" className="btn btn-outline">
              Me contacter
            </a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/Yassinedevs" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
            <span className="social-divider"></span>
            <a href="mailto:yassine_49bouhi@hotmail.com" className="social-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
              </svg>
              Email
            </a>
            <span className="social-divider"></span>
            <a href="https://www.linkedin.com/in/yassine-bouhi" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">

          {/* Stats card */}
          <div className="hero-card hero-stats-card">
            <p className="hero-card-label">En chiffres</p>
            <div className="hero-stats">
              {stats.map((s, i) => (
                <div key={i} className="hero-stat">
                  <span className="hero-stat-value">{s.value}</span>
                  <span className="hero-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stack card */}
          <div className="hero-card hero-stack-card">
            <p className="hero-card-label">Stack principale</p>
            <div className="hero-stack-cols">
              <div className="hero-stack-col">
                {stackLeft.map(t => (
                  <span key={t} className="hero-stack-tag">{t}</span>
                ))}
              </div>
              <div className="hero-stack-col">
                {stackRight.map(t => (
                  <span key={t} className="hero-stack-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Availability card */}
          <div className="hero-card hero-avail-card">
            <div className="hero-avail-row">
              <span className="badge-dot"></span>
              <span className="hero-avail-text">Disponible — CDI ou freelance</span>
            </div>
            <div className="hero-avail-row hero-avail-sub">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              Partout en France · Télétravail ou présentiel
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
