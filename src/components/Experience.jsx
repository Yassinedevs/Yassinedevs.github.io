import { useLanguage } from '../context/LanguageContext'

export default function Experience() {
  const { tr } = useLanguage()
  const e = tr.experience

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header" data-reveal>
          <p className="section-label">{e.label}</p>
          <h2 className="section-title">{e.title}</h2>
          <p className="section-desc">{e.desc}</p>
        </div>
        <div className="timeline">
          {e.items.map((exp, i) => (
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
                    <span className={`exp-badge exp-badge-${exp.typeKey}`}>
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
