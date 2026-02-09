import { motion } from 'framer-motion'
// import profilePic from '../assets/profile.jpg';

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
            Hello, I’m{' '}
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
              craft
            </em>{' '}
            production-grade AI/ML systems.
          </motion.h1>

          {/* Subtitle – split for clarity */}
          <motion.p
            className="mute"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            Machine Learning Engineer (Applied Systems & Inference) | MS in Data Science @ SUNY Buffalo (GPA 3.9/4.0) •
            3+ years building scalable AI systems
          </motion.p>

          <motion.p
            className="mute"
            style={{ marginTop: 6 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            Ex-TCS Big Data AI Developer • ML Infrastructure • GenAI • Seeking
            Full-time roles (Dec 2025)
          </motion.p>

          {/* CTA buttons */}
          <div
            style={{
              display: 'flex',
              gap: 12,
              marginTop: 26,
              flexWrap: 'wrap'
            }}
          >
            <a
              className="btn btn-primary"
              href="/Bharathraaj_Nagarajan_Resume.pdf"
              download
            >
              Download Resume (PDF)
            </a>
            <a
              className="btn"
              href="mailto:bharathraajnagarajan@gmail.com"
            >
              Contact Me
            </a>
          </div>

          <hr className="soft" />

          {/* Skill badges – ordered by seniority signal */}
          <div className="badges">
            {
              [
  'Spark',
  'Kubernetes',
  'ML Pipelines',
  'Model Serving',
  'MLOps',
  'TensorFlow',
  'PyTorch',
  'Cloud (AWS/GCP/Azure)',
  'SQL',
  'LLMs / RAG (LangChain)'
].map(tag => (
              <span key={tag} className="badge">
                {tag}
              </span>
            ))}
          </div>

          {/* Subtle forward-looking signal */}
          <p
            className="mute"
            style={{ marginTop: 10, fontSize: 14 }}
          >
            Currently building end-to-end ML pipelines, RAG systems, and model monitoring workflows for production use.
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
