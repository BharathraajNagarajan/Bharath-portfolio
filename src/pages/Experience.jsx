import Section from '../components/SectionWrapper.jsx'
import { motion } from 'framer-motion'

const roles = [
  {
    role: "Systems Engineer — Machine Learning / Big Data AI",
    company: "Tata Consultancy Services",
    duration: "Oct 2021 — Apr 2024 · 2 yrs 7 mos",
    stack: "PyTorch • TensorFlow • Spark/PySpark • Kafka • Kubernetes • AWS • Azure • GCP",
    bullets: [
      "Developed and deployed transformer-based NLP and sequence-to-sequence models in PyTorch, improving predictive accuracy by 18% across enterprise-scale use cases.",
      "Designed and built end-to-end ML pipelines in TensorFlow covering ingestion, feature engineering, training, evaluation, and deployment, reducing release cycles by 28%.",
      "Deployed and monitored ML services on Kubernetes, maintaining 99.9% production uptime while supporting scalable model serving and experimentation.",
      "Built scalable data and feature pipelines using Kafka, HDFS, HBase, and Kudu, reducing query latency by 40% in high-throughput ML workloads.",
      "Optimized PySpark and Spark SQL pipelines for model data preparation and batch workflows, reducing ETL processing time by 47% through execution tuning.",
      "Collaborated with cross-functional stakeholders to translate business requirements into production ML solutions using BigQuery, Scikit-learn, Azure, and Airflow."
    ]
  },
  {
    role: "Data Engineering Intern — Analytics",
    company: "Media Sales Plus Inc.",
    duration: "Aug 2025 — Dec 2025 · 5 mos",
    stack: "Python • Streamlit • Azure • GitHub Actions • ETL • NLP",
    bullets: [
      "Developed an executive-facing Streamlit analytics platform with KPI monitoring, anomaly detection, and ARIMA-based forecasting for recurring financial reporting.",
      "Built Python ETL pipelines to ingest, validate, aggregate, and backfill client datasets, standardizing schemas for analytics and ML-driven insights.",
      "Implemented CI/CD using GitHub Actions and integrated workflows with Azure services to enable secure, repeatable deployments.",
      "Built a rule-based NLP chatbot interface to translate natural-language business questions into computed metrics within the analytics application."
    ]
  }
]

export default function Experience() {
  return (
    <Section title="Experience" subtitle="A timeline of impact">
      <div className="grid">
        {roles.map((r, i) => (
          <motion.div
            key={i}
            className="card"
            style={{ padding: 20, position: 'relative' }}
            initial={{ opacity: 0, x: i % 2 ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              style={{
                position: 'absolute',
                left: -6,
                top: 22,
                width: 12,
                height: 12,
                borderRadius: 999,
                background: 'var(--accent-b)'
              }}
            />

            <h3 style={{ marginBottom: 4 }}>
              {r.role} <span className="mute">• {r.company}</span>
            </h3>

            <p className="mute" style={{ marginTop: 0, marginBottom: 8 }}>
              {r.duration}
            </p>

            {r.stack && (
              <p className="mute" style={{ marginTop: 0, marginBottom: 10 }}>
                {r.stack}
              </p>
            )}

            <ul style={{ marginTop: 10, paddingLeft: 18 }}>
              {r.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
