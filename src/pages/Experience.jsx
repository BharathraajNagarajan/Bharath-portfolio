import Section from '../components/SectionWrapper.jsx'
import { motion } from 'framer-motion'

const roles = [
  {
    role: "Research Engineer",
    company: "UB AI Innovation Lab – CSE Pulse",
    duration: "2025 – Present",
    location: "Buffalo, NY, USA",
    stack: "Python • SQL • Groq/Llama 3.1 • Docker • OpenShift Kubernetes • React",
    bullets: [
      "Building production research data infrastructure aggregating scholarly activity for 64 UB CSE faculty across arXiv, DBLP, Semantic Scholar, IEEE, and RSS feeds; implemented entity resolution and deduplication to produce reliable structured datasets from noisy multi-source signals.",
      "Built an LLM inference pipeline (Groq/Llama 3.1) classifying faculty research activity into grants, publications, collaborations, and research themes; automated departmental research digests and stakeholder analytics via React dashboard.",
      "Deploying on UB's OpenShift Kubernetes cluster under enterprise security constraints — containerizing services with Docker while satisfying non-root execution requirements."
    ]
  },
  {
    role: "Machine Learning Intern",
    company: "Media Sales Plus Inc.",
    duration: "Aug 2025 — Dec 2025 · 5 mos",
    location: "Buffalo, NY, USA",
    stack: "Python • ARIMA • IQR Anomaly Detection • GitHub Actions • Docker • Azure • ETL",
    bullets: [
      "Designed a multi-tenant data ingestion and schema normalization pipeline handling heterogeneous CSV/Excel formats across 10+ client datasets; automated schema detection, validation, and KPI computation to produce consistent structured outputs for downstream analytics.",
      "Implemented time-series forecasting (ARIMA, 12-month horizon) and statistical anomaly detection (IQR method) as independent, modular processing components; deployed via Streamlit on Azure for client-facing financial analytics.",
      "Built a deterministic, rule-based analytics engine for structured business queries (revenue trends, anomaly summaries, period comparisons); architected as a modular, swappable component designed to support future LLM integration without platform restructuring.",
      "Engineered CI/CD automation using GitHub Actions and Docker for automated, zero-downtime model deployment across cloud environments."
    ]
  },
  {
    role: "ML Infrastructure Engineer – Model Serving & Distributed Pipelines",
    company: "Tata Consultancy Services",
    client: "Lloyds Banking Group (UK)",
    duration: "Oct 2021 – Apr 2024 · 2 yrs 7 mos",
    location: "India",
    stack: "PySpark • Spark SQL • Kafka • Kubernetes • Docker • HBase • Kudu • Airflow • TensorFlow • PyTorch",
    bullets: [
      "Engineered real-time and batch model serving infrastructure on Kubernetes for low-latency, high-throughput inference — 99.9% production uptime through containerized deployment, automated recovery, liveness probes, and observability instrumentation.",
      "Designed and optimized feature engineering and ETL pipelines using Spark (PySpark, Spark SQL), Kafka, HBase, and Kudu processing 100M+ records; reduced ML training and inference latency by ~40% through pipeline parallelization, partition strategy redesign, and Airflow-orchestrated scheduling.",
      "Owned end-to-end ML model lifecycle — data preparation pipelines, containerized deployment (Docker + Kubernetes), model versioning, A/B rollout, rollback, and real-time drift monitoring — for enterprise-scale financial ML workloads.",
      "Profiled and optimized large-scale batch and streaming data pipelines for ML training and inference, improving processing efficiency by ~47% through distributed node parallelization, partition tuning, and systematic bottleneck identification.",
      "Collaborated with data science teams to translate model requirements into production-ready serving infrastructure, enabling standardized self-service deployment workflows for enterprise ML teams."
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
            <p className="mute" style={{ marginTop: 0, marginBottom: 4 }}>
              {r.duration}
            </p>
            {(r.location || r.client) && (
              <p className="mute" style={{ marginTop: 0, marginBottom: 8 }}>
                {r.location}{r.client ? ` • Client: ${r.client}` : ""}
              </p>
            )}
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
