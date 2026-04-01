const projects = [
  {
    title: 'Application Mobile Flutter',
    desc: 'Application mobile cross-platform pour iOS et Android avec une UX optimisée, développée en alternance chez iBoo Technologies.',
    tags: ['Flutter', 'Dart', 'iOS', 'Android'],
    icon: '◱',
    color: 'green',
  },
  {
    title: 'ERP / CRM Sur Mesure',
    desc: "Lead développeur sur un ERP/CRM personnalisé, adapté aux processus métier spécifiques d'une entreprise cliente.",
    tags: ['Symfony', 'PHP', 'MySQL', 'Docker'],
    icon: '◧',
    color: 'orange',
  },
  {
    title: 'Application Web REST API',
    desc: "Développement et maintenance d'une application web sur mesure intégrant une API REST consommée par les clients.",
    tags: ['Node.js', 'REST API', 'React', 'PostgreSQL'],
    icon: '◨',
    color: 'blue',
  },
  {
    title: 'Back-Office & Administration',
    desc: "Mise en place de logiciels d'administration et de back-office en collaboration avec l'équipe de développement.",
    tags: ['React', 'Angular', 'GraphQL', 'CI/CD'],
    icon: '◩',
    color: 'purple',
  },
  {
    title: 'E-commerce Prestashop',
    desc: "Maintenance et amélioration d'un site e-commerce sous Prestashop avec l'ajout de nouvelles fonctionnalités.",
    tags: ['Prestashop', 'PHP', 'MySQL', 'JavaScript'],
    icon: '◪',
    color: 'cyan',
  },
  {
    title: 'Optimisation WordPress',
    desc: 'Optimisation des performances de sites web WordPress, résolution de problèmes techniques et amélioration du SEO.',
    tags: ['WordPress', 'PHP', 'NGINX', 'Performance'],
    icon: '◫',
    color: 'pink',
  },
]

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 17L17 7M7 7h10v10" />
  </svg>
)

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header" data-reveal>
          <p className="section-label">Projets</p>
          <h2 className="section-title">Réalisations</h2>
          <p className="section-desc">Projets développés au cours de mon parcours professionnel</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <a
              key={i}
              href="https://github.com/Yassinedevs"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              data-reveal
              data-reveal-delay={String((i % 3) + 1)}
            >
              <div className="project-top">
                <div className={`project-icon project-icon-${project.color}`}>{project.icon}</div>
                <span className="project-link-icon"><ArrowIcon /></span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
        <div className="projects-footer" data-reveal>
          <a
            href="https://github.com/Yassinedevs"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <GithubIcon />
            Voir tous mes projets sur GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
