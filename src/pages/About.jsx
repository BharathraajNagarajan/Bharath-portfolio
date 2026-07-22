import Section from '../components/SectionWrapper.jsx'

const S = {
  card: {
    padding: 22,
    maxWidth: 980,
    lineHeight: 1.65,
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
  },
  p: { margin: 0 },
  summary: {
    margin: 0,
    fontSize: 16,
    lineHeight: 1.7,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: 14,
    marginTop: 4,
  },
  block: {
    padding: 14,
    borderRadius: 14,
    border: '1px solid rgba(255,255,255,0.10)',
    background: 'rgba(255,255,255,0.03)',
  },
  titleRow: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 10,
  },
  h: {
    margin: 0,
    fontSize: 15,
    fontWeight: 800,
    letterSpacing: 0.2,
  },
  tag: {
    fontSize: 12,
    opacity: 0.75,
    whiteSpace: 'nowrap',
  },
  ul: {
    margin: 0,
    paddingLeft: 18,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  footer: {
    padding: 14,
    borderRadius: 14,
    border: '1px solid rgba(255,255,255,0.10)',
    background: 'rgba(255,255,255,0.02)',
  },
  small: { margin: 0, opacity: 0.85 },
}

export default function About() {
  return (
    <Section title="About" subtitle="A brief intro">
      <div className="card" style={S.card}>
        <p style={S.summary}>
          ML infrastructure engineer with <strong>2.5+ years at TCS</strong> building distributed ML systems for enterprise-scale workloads.
          I focus on the infrastructure that makes ML possible — <strong>model serving, data pipelines, experiment tracking, and research tooling</strong> —
          across distributed stacks (Spark, Kafka, HBase, Kudu) and cloud-native deployments (Kubernetes, OpenShift).
          MS in Data Science from <strong>University at Buffalo (GPA 3.875/4.0)</strong>.
        </p>

        <div style={S.grid}>

          <div style={S.block}>
            <div style={S.titleRow}>
              <p style={S.h}>Tata Consultancy Services</p>
              <span style={S.tag}>ML Infrastructure Engineer – Model Serving & Distributed Pipelines</span>
            </div>
            <ul style={S.ul}>
              <li>Engineered real-time and batch model serving infrastructure on Kubernetes for low-latency, high-throughput inference — 99.9% production uptime via containerized deployment, automated recovery, liveness probes, and observability instrumentation.</li>
              <li>Designed and optimized feature engineering and ETL pipelines using Spark (PySpark, Spark SQL), Kafka, HBase, and Kudu processing 100M+ records; reduced ML training and inference latency by ~40% through pipeline parallelization and partition strategy redesign.</li>
              <li>Owned end-to-end ML model lifecycle: data preparation pipelines, containerized deployment (Docker + Kubernetes), model versioning, A/B rollout, rollback, and real-time drift monitoring for enterprise-scale financial ML workloads.</li>
              <li>Profiled and optimized large-scale batch and streaming data pipelines, improving processing efficiency by ~47% through distributed node parallelization and systematic bottleneck identification.</li>
            </ul>
          </div>

          <div style={S.block}>
            <div style={S.titleRow}>
              <p style={S.h}>CSE Pulse – Research Activity Intelligence Platform</p>
              <span style={S.tag}>UB AI Innovation Lab</span>
            </div>
            <ul style={S.ul}>
              <li>Building production research data infrastructure aggregating scholarly activity for 64 UB CSE faculty across arXiv, DBLP, Semantic Scholar, IEEE, and RSS feeds; implemented entity resolution and deduplication across noisy multi-source signals.</li>
              <li>Built an LLM inference pipeline (Groq/Llama 3.1) classifying faculty research into grants, publications, collaborations, and research themes; automated departmental digests and stakeholder analytics via React dashboard.</li>
              <li>Deploying on UB's OpenShift Kubernetes cluster under enterprise security constraints — containerizing services with Docker while satisfying non-root execution requirements.</li>
            </ul>
          </div>

          <div style={S.block}>
            <div style={S.titleRow}>
              <p style={S.h}>Media Sales Plus Inc.</p>
              <span style={S.tag}>Machine Learning Intern</span>
            </div>
            <ul style={S.ul}>
              <li>Designed a multi-tenant data ingestion and schema normalization pipeline handling heterogeneous CSV/Excel formats across 10+ client datasets; automated schema detection, validation, and KPI computation.</li>
              <li>Implemented time-series forecasting (ARIMA, 12-month horizon) and statistical anomaly detection (IQR) as independent, modular processing components; deployed via Streamlit on Azure.</li>
              <li>Built a deterministic, rule-based analytics engine for structured business queries — architected as a modular, swappable component designed to support future LLM integration without platform restructuring.</li>
              <li>Engineered CI/CD automation using GitHub Actions and Docker for zero-downtime model deployment across cloud environments.</li>
            </ul>
          </div>

          <div style={S.block}>
            <div style={S.titleRow}>
              <p style={S.h}>University at Buffalo</p>
              <span style={S.tag}>MS in Data Science</span>
            </div>
            <ul style={S.ul}>
              <li>Coursework: Machine Learning, Data Intensive Computing, Distributed Systems, Database Management, Cybersecurity.</li>
              <li>Built Spark streaming pipelines with checkpoint recovery and benchmarked distributed Spark vs single-node processing on 100K+ datasets (20× speedup).</li>
              <li>Research interests: ML Systems, Distributed Training Infrastructure, Inference Efficiency, Empirical ML Research.</li>
            </ul>
          </div>

        </div>

        <div style={S.footer}>
          <p className="mute" style={S.p}>
            <strong>Available immediately</strong> — Open to full-time roles in ML infrastructure, distributed systems, and research engineering • F-1 OPT (STEM)
          </p>
        </div>
      </div>
    </Section>
  )
}
