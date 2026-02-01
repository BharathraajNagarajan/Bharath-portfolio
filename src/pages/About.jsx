import Section from '../components/SectionWrapper.jsx'

const styles = {
  card: {
    padding: 22,
    maxWidth: 980,
    lineHeight: 1.7,
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
  },
  p: {
    margin: 0,
  },
  heading: {
    margin: '10px 0 0',
    fontSize: 16,
    fontWeight: 700,
    letterSpacing: 0.2,
  },
  ul: {
    margin: 0,
    paddingLeft: 18,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  mute: {
    marginTop: 6,
  },
}

export default function About() {
  return (
    <Section title="About" subtitle="A brief intro">
      <div className="card" style={styles.card}>
        <p style={styles.p}>
          I am a <strong>Recent Master’s Graduate</strong> in <em>Data Science &amp; Applications</em> (GPA 3.9) at the <strong>University at Buffalo</strong> (Dec 2025) with 2.5+ years at <strong>Tata Consultancy Services (TCS)</strong> as a Data Analyst, Big Data Python Developer, and AI Developer, along with a client-facing capstone engagement with <strong>MediaSales Plus</strong>.
        </p>

        <p style={styles.p}>
          My expertise lies in <strong>data engineering</strong> and <strong>ML systems</strong> — building scalable pipelines, reliable ETL/streaming workflows, and production-grade deployments across distributed platforms and applied analytics.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div>
            <div style={styles.heading}>At Tata Consultancy Services (TCS)</div>
            <ul style={styles.ul}>
              <li>Designed and deployed end-to-end ML pipelines using PySpark, TensorFlow, and PyTorch, improving deployment efficiency by 28% and increasing classification accuracy by 15%.</li>
              <li>Optimized distributed workflows with Cloudera, Kafka, HDFS, and Kudu, reducing query latency by 40% and improving data reliability.</li>
              <li>Managed and tuned distributed jobs (Spark/Flink) in production environments to improve processing performance and stability.</li>
              <li>Supported production-grade deployments with Kubernetes, ensuring 99.9% uptime with robust debugging and model evaluation practices.</li>
            </ul>
          </div>

          <div>
            <div style={styles.heading}>At University at Buffalo</div>
            <ul style={styles.ul}>
              <li>Data Engineering / ML Infrastructure — deployment, evaluation, optimization, debugging, pipeline reliability.</li>
              <li>Statistical Data Mining &amp; Applied ML — modeling, feature engineering, and evaluation using real-world datasets.</li>
              <li>Projects: Spark streaming pipelines (checkpoint recovery), graph algorithms (Dijkstra in PySpark), and graph analytics with Neo4j.</li>
            </ul>
          </div>

          <div>
            <div style={styles.heading}>At MediaSales Plus (CDA 500 Capstone)</div>
            <ul style={styles.ul}>
              <li>Built an end-to-end analytics pipeline to automate recurring reporting from monthly CSV/Excel datasets across business units.</li>
              <li>Implemented data standardization + quality validation checks and delivered a Streamlit KPI dashboard with trend/anomaly views and forecasting summaries.</li>
            </ul>
          </div>
        </div>

        <p className="mute" style={{ ...styles.p, ...styles.mute }}>
          <strong>Seeking full-time roles</strong> (Jan 2026) in Data Science / Data Engineering / Analytics Engineering / Machine Learning Engineering | Available immediately | F-1 OPT (STEM)
        </p>

        <p style={{ ...styles.p, opacity: 0.85 }}>
          Machine Learning Engineer | Data Engineer | MS in Data Science @ SUNY Buffalo | Ex-TCS | Building Scalable AI Systems
        </p>
      </div>
    </Section>
  )
}
