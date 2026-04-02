import { useLanguage } from '../context/LanguageContext'

export default function Education() {
  const { tr } = useLanguage()
  const ed = tr.education

  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-header" data-reveal>
          <p className="section-label">{ed.label}</p>
          <h2 className="section-title">{ed.title}</h2>
          <p className="section-desc">{ed.desc}</p>
        </div>
        <div className="timeline">
          {ed.items.map((edu, i) => (
            <div key={i} className="timeline-item" data-reveal data-reveal-delay={String((i % 3) + 1)}>
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="edu-degree">{edu.degree}</div>
                <div className="edu-field">{edu.field}</div>
                <div className="edu-meta">
                  <span className="edu-school">{edu.school}</span>
                  <span className="timeline-sep">·</span>
                  <span>{edu.location}</span>
                  <span className="timeline-sep">·</span>
                  <span className="timeline-date">{edu.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
