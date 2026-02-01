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
        {/* Summary (keep this short) */}
        <p style={S.summary}>
          I’m a <strong>Recent MS Data Science graduate (GPA 3.9)</strong> from <strong>University at Buffalo</strong> with <strong>2.5+ years</strong> at <strong>TCS</strong>.
          I build <strong>scalable data pipelines</strong> and <strong>production ML systems</strong> across distributed stacks (Spark, Kafka) and cloud-native deployments (Kubernetes).
        </p>

        {/* Segmented blocks */}
        <div style={S.grid}>
          <div style={S.block}>
            <div style={S.titleRow}>
              <p style={S.h}>Tata Consultancy Services (TCS)</p>
              <span style={S.tag}>Data / ML Engineering</span>
            </div>
            <ul style={S.ul}>
              <li>Designed end-to-end ML pipelines with PySpark + TensorFlow/PyTorch, improving deployment efficiency by 28% and accuracy by 15%.</li>
              <li>Optimized distributed workflows (Cloudera, Kafka, HDFS, Kudu), reducing query latency by 40% and improving reliability.</li>
              <li>Tuned production Spark/Flink jobs for better throughput and stability.</li>
              <li>Supported Kubernetes deployments and production debugging with 99.9% uptime practices.</li>
            </ul>
          </div>

          <div style={S.block}>
            <div style={S.titleRow}>
              <p style={S.h}>University at Buffalo</p>
              <span style={S.tag}>MS in Data Science</span>
            </div>
            <ul style={S.ul}>
              <li>Strengthened ML + data engineering foundations: feature engineering, evaluation, and experimentation.</li>
              <li>Built Spark streaming pipelines (checkpoint recovery) and implemented Dijkstra in PySpark.</li>
              <li>Worked with graph analytics (Neo4j) and applied ML on real-world datasets.</li>
            </ul>
          </div>

          <div style={S.block}>
            <div style={S.titleRow}>
              <p style={S.h}>MediaSales Plus (CDA 500 Capstone)</p>
              <span style={S.tag}>Client project</span>
            </div>
            <ul style={S.ul}>
              <li>Built an analytics pipeline to automate recurring reporting across business units from monthly CSV/Excel sources.</li>
              <li>Implemented standardization + data quality checks and delivered a Streamlit KPI dashboard (trends/anomalies + forecasting summaries).</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div style={S.footer}>
          <p className="mute" style={S.p}>
            <strong>Seeking full-time roles (Jan 2026)</strong> — Data Engineering / ML Engineering / Analytics Engineering • Available immediately • F-1 OPT (STEM)
          </p>
          <p style={{ ...S.small, marginTop: 10 }}>
            Machine Learning Engineer | Data Engineer | MS in Data Science @ SUNY Buffalo | Ex-TCS | Building Scalable AI Systems
          </p>
        </div>
      </div>
    </Section>
  )
}
