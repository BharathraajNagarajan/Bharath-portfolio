import Section from '../components/SectionWrapper.jsx'

const schools = [
  {
    name: "University at Buffalo, The State University of New York",
    degree: "Masters in Data Sciences and Applications (GPA: 3.9/4.0)",
    when: "Aug 2024 — Dec 2025",
    location: "Buffalo, NY, USA",
    mode: "On-campus",
    details: [
      "Coursework: Database Management Structure, Data Intensive Computing, Machine Learning, Data Modeling, Cybersecurity",
      "Industry Capstone (CDA 500): Client-facing MVP with MediaSales Plus",
      "Graduate Assistant : EAS 230 – Engineering Computations (MATLAB/DSA)"
    ]
  },
  {
    name: "Anna University - Sri Sivasubramaniya Nadar College of Engineering",
    degree: "Bachelor of Engineering, Minor in Computer Science",
    when: "Aug 2017 — May 2021",
    location: "Chennai, India",
    mode: "Full-time",
    details: []
  }
]

export default function Education() {
  return (
    <Section title="Education" subtitle="Degrees & highlights">
      <div className="grid two">
        {schools.map((s, i) => (
          <div
            key={i}
            className="card tilt"
            style={{ padding: 20 }}
            onMouseMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect()
              const x = (e.clientX - r.left) / r.width - 0.5
              const y = (e.clientY - r.top) / r.height - 0.5
              e.currentTarget.style.setProperty('--ry', `${x * 10}deg`)
              e.currentTarget.style.setProperty('--rx', `${-y * 10}deg`)
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.setProperty('--ry', '0deg')
              e.currentTarget.style.setProperty('--rx', '0deg')
            }}
          >
            {/* Top row: School (left) + Dates (right) */}
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 14 }}>
              <h3 style={{ marginBottom: 4, marginTop: 0 }}>{s.name}</h3>
              <p className="mute" style={{ margin: 0, whiteSpace: 'nowrap' }}>{s.when}</p>
            </div>

            {/* Degree line */}
            <p style={{ margin: 0 }}>{s.degree}</p>

            {/* Details bullets */}
            {s.details && s.details.length > 0 && (
              <ul style={{ marginTop: 8, paddingLeft: 20, marginBottom: 0 }}>
                {s.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
