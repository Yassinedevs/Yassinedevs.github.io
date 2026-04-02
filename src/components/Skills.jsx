import { useLanguage } from '../context/LanguageContext'

export default function Skills() {
  const { tr } = useLanguage()
  const s = tr.skills

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header" data-reveal>
          <p className="section-label">{s.label}</p>
          <h2 className="section-title">{s.title}</h2>
          <p className="section-desc">{s.desc}</p>
        </div>
        <div className="skills-grid">
          {s.categories.map((cat, i) => (
            <div
              key={cat.colorClass}
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
