const categories = [
  {
    title: 'Frontend',
    icon: '◈',
    colorClass: 'blue',
    skills: ['Angular', 'React', 'Vue.js'],
  },
  {
    title: 'Backend',
    icon: '⬡',
    colorClass: 'orange',
    skills: ['PHP', 'Symfony', 'Node.js', 'Java', 'Python'],
  },
  {
    title: 'Mobile',
    icon: '◐',
    colorClass: 'green',
    skills: ['React Native', 'Flutter'],
  },
  {
    title: 'Bases de données',
    icon: '◫',
    colorClass: 'purple',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'PowerBI'],
  },
  {
    title: 'DevOps & Outils',
    icon: '◷',
    colorClass: 'cyan',
    skills: ['Git', 'Jenkins', 'Docker', 'CI/CD', 'NGINX', 'Apache'],
  },
  {
    title: 'APIs & Intégration',
    icon: '◉',
    colorClass: 'pink',
    skills: ['REST API', 'GraphQL', 'AI Integration'],
  },
  {
    title: 'Méthodologies',
    icon: '◑',
    colorClass: 'yellow',
    skills: ['AGILE', 'Scrum', 'Kanban'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header" data-reveal>
          <p className="section-label">Compétences</p>
          <h2 className="section-title">Stack technique</h2>
          <p className="section-desc">Technologies et outils maîtrisés au fil des projets</p>
        </div>
        <div className="skills-grid">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className="skill-card"
              data-reveal
              data-reveal-delay={String((i % 3) + 1)}
            >
              <div className="skill-card-header">
                <div className={`skill-card-icon skill-icon-${cat.colorClass}`}>
                  {cat.icon}
                </div>
                <span className="skill-card-title">{cat.title}</span>
              </div>
              <div className="skill-tags">
                {cat.skills.map(skill => (
                  <span key={skill} className={`skill-tag skill-tag-${cat.colorClass}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
