import { motion } from 'framer-motion'

export default function Home(){
  return (
    <header className="section" style={{ paddingTop: 120, paddingBottom: 80 }}>
      <div
        className="container home"
        style={{
          display: 'grid',
          gap: 28,
          gridTemplateColumns: '1.1fr 1fr',
          alignItems: 'center'
        }}
      >
        {/* LEFT CONTENT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{
              fontSize: '3.3rem',
              lineHeight: 1.08,
              margin: '0 0 10px'
            }}
          >
            Hello, I'm{' '}
            <span style={{ color: 'var(--accent-b)' }}>
              Bharathraaj Nagarajan
            </span>
            <br />
            I{' '}
            <em
              style={{
                fontStyle: 'normal',
                color: 'var(--accent-c)'
              }}
            >
              build
            </em>{' '}
            ML infrastructure that ships.
          </motion.h1>

          <motion.p
            className="mute"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            ML Infrastructure Engineer | MS in Data Science @ SUNY Buffalo (GPA 3.875/4.0) •
            2.5+ years building distributed ML systems at TCS • Ex-TCS
          </motion.p>
          <motion.p
            className="mute"
            style={{ marginTop: 6 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            Focused on distributed systems, scalable inference, and production ML infrastructure • Available immediately | Open to full-time roles
          </motion.p>

          <div
            style={{
              display: 'flex',
              gap: 12,
              marginTop: 26,
              flexWrap: 'wrap'
            }}
          >
            
              className="btn btn-primary"
              href="/Bharathraaj_Nagarajan_Resume.pdf"
              download
            >
              Download Resume (PDF)
            </a>
            
              className="btn"
              href="mailto:bharathraajnagarajan@gmail.com"
            >
              Contact Me
            </a>
          </div>
          <hr className="soft" />

          <div className="badges">
            {[
              'Spark',
              'Kubernetes',
              'Kafka',
              'MLflow',
              'ML Pipelines',
              'Model Serving',
              'MLOps',
              'Docker',
              'PyTorch',
              'Cloud (AWS/GCP/Azure)',
            ].map(tag => (
              <span key={tag} className="badge">
                {tag}
              </span>
            ))}
          </div>

          <p
            className="mute"
            style={{ marginTop: 10, fontSize: 14 }}
          >
            Currently building CSE Pulse — a production research data platform for 64 UB faculty using Groq/Llama 3.1 and OpenShift Kubernetes.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ display: 'grid', placeItems: 'center' }}
        >
          <img
            src="/assets/profile.jpg"
            alt="Bharathraaj Nagarajan"
            style={{
              width: '80%',
              aspectRatio: '1 / 1',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid var(--surface)'
            }}
          />
        </motion.div>
      </div>
    </header>
  )
}
