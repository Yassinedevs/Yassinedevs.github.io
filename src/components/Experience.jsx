const experiences = [
  {
    title: 'Développeur full-stack & mobile',
    company: 'iBoo Technologies',
    location: 'Angers',
    date: 'Oct. 2022 – Août 2025',
    type: 'Alternance',
    bullets: [
      "Création d'une application mobile cross-platform développée sous Flutter (iOS & Android)",
      "Développement et maintenance d'une application web sur mesure avec API REST",
      "Collaboration avec l'équipe pour mettre en place des logiciels d'administration (Back-Office & ERP)",
      'Optimisation des performances de sites web WordPress et résolution de problèmes techniques',
      "Lead développeur sur un projet d'ERP/CRM personnalisé adapté aux besoins de l'entreprise cliente",
    ],
  },
  {
    title: 'Stagiaire développeur full-stack',
    company: 'Moondream - GTI',
    location: 'Aubervilliers',
    date: 'Mai 2022 – Juil. 2022',
    type: 'Stage',
    bullets: [
      'Assistant du Webmaster de l\'entreprise Moondream - GTI',
      'Maintenance du site e-commerce sous Prestashop',
      'Manipulation et gestion des données en base de données',
      'Introduction de nouvelles fonctionnalités sur le site',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header" data-reveal>
          <p className="section-label">Expérience</p>
          <h2 className="section-title">Parcours professionnel</h2>
          <p className="section-desc">3 ans d'expérience en développement full-stack et mobile</p>
        </div>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-item" data-reveal data-reveal-delay={String(i + 1)}>
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <div className="timeline-meta">
                    <span className="timeline-company">{exp.company}</span>
                    <span className="timeline-sep">·</span>
                    <span>{exp.location}</span>
                    <span className="timeline-sep">·</span>
                    <span className="timeline-date">{exp.date}</span>
                    <span className={`exp-badge exp-badge-${exp.type === 'Alternance' ? 'alt' : 'stage'}`}>
                      {exp.type}
                    </span>
                  </div>
                </div>
                <ul className="timeline-bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
