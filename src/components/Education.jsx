const education = [
  {
    degree: 'Master (Bac +5)',
    field: 'MBA Développeur full-stack',
    school: 'MyDigitalSchool – Campus ESPL',
    location: 'Angers',
    date: 'Sept. 2023 – Août 2025',
  },
  {
    degree: 'CDA (Bac +3)',
    field: "Concepteur Développeur d'Applications",
    school: 'MyDigitalSchool – Campus ESPL',
    location: 'Angers',
    date: '2022 – 2023',
  },
  {
    degree: 'DUT GEII (Bac +2)',
    field: 'Génie Électrique et Informatique Industrielle',
    school: "IUT d'Angers",
    location: 'Angers',
    date: '2021 – 2022',
  },
  {
    degree: 'Baccalauréat Général',
    field: 'Série Scientifique – Sciences de la Vie et de la Terre',
    school: 'Lycée David d\'Angers',
    location: 'Angers',
    date: '2018 – 2019',
  },
]

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-header" data-reveal>
          <p className="section-label">Formation</p>
          <h2 className="section-title">Diplômes & Certifications</h2>
          <p className="section-desc">Un parcours académique orienté vers le développement logiciel</p>
        </div>
        <div className="timeline">
          {education.map((edu, i) => (
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
