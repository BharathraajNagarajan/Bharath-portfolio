import { motion, useReducedMotion } from 'framer-motion'
import './Experience.css'

const experiences = [
  {
    n: '01',
    type: 'Industry Engineering',
    title: 'Distributed Data & ML Infrastructure',
    org: 'Lloyds Banking Group',
    dates: 'October 2021 – April 2024',
    summary:
      'Engineering on large-scale banking data platforms, turning technical and business requirements into distributed system designs for batch and streaming pipelines that fed ML workloads on Kubernetes.',
    points: [
      'Built and tuned Spark/PySpark, Spark SQL, and Kafka batch and streaming pipelines over HDFS, HBase, and Kudu storage, including the feature engineering and data preparation behind ML training and inference.',
      'Profiled pipelines and redesigned partitioning to remove bottlenecks, parallelizing work across nodes and orchestrating it with Airflow. Diagnosed production data-processing failures under real operational and reliability constraints.',
      'Worked on Docker and Kubernetes infrastructure for ML serving workflows, covering containerized deployment, recovery, observability, model versioning, and rollout, in collaboration with data science teams.',
    ],
    metrics: [
      ['100M+', 'records processed daily'],
      ['~40%', 'query latency improvement'],
    ],
    tech: ['PySpark', 'Spark SQL', 'Kafka', 'HDFS', 'HBase', 'Kudu', 'Airflow', 'Docker', 'Kubernetes', 'PyTorch', 'TensorFlow'],
  },
  {
    n: '02',
    type: 'Academic Industry Internship',
    title: 'Machine Learning Intern',
    org: 'Media Sales Plus Inc.',
    dates: 'August 2025 – December 2025',
    location: 'Buffalo, NY',
    summary:
      'A University at Buffalo academic industry engagement: I gathered requirements from finance-team and client stakeholders and turned them into backend and data workflows and applied ML that clients could use.',
    points: [
      'Built multi-tenant data integration across 10+ heterogeneous client datasets, with schema normalization, validation, data quality checks, and KPI computation on Python, Azure, and GCP/BigQuery.',
      'Implemented ARIMA-based forecasting and IQR-based anomaly detection as modular components, delivered to clients through Streamlit on Azure.',
      'Developed modular analytics services, including a deterministic business-query engine and LLM-powered retrieval-augmented querying with vector retrieval, delivered as a usable analytics application with Docker and GitHub Actions.',
    ],
    metrics: [['10+', 'client datasets']],
    tech: ['Python', 'ARIMA', 'IQR anomaly detection', 'Streamlit', 'Azure', 'GCP/BigQuery', 'RAG', 'Docker', 'GitHub Actions'],
  },
  {
    n: '03',
    type: 'University Research Engineering',
    title: 'Research Engineer',
    org: 'University at Buffalo — AI Innovation Lab',
    work: 'Faculty Research Intelligence Platform',
    dates: 'April 2026 – Present',
    summary:
      'Research engineering on a platform that pulls scattered research activity into structured data and agent-driven analysis.',
    points: [
      'Built multi-source academic and research data ingestion with entity resolution and deduplication into a MySQL-backed store.',
      'Developed FastAPI REST services and stateful LangGraph/LLM agent workflows with structured outputs and multi-provider LLM integration, serving a React dashboard through API and data integration work.',
      'Containerized services with Docker and handled OpenShift/Kubernetes deployment and configuration, debugging LLM timeout and retry failures and deployment reliability to make the agentic workflows operational and usable.',
    ],
    metrics: [
      ['65', 'faculty'],
      ['~15', 'external sources'],
      ['12', 'MySQL tables'],
      ['~9', 'FastAPI endpoints'],
    ],
    tech: ['Python', 'FastAPI', 'MySQL', 'LangGraph', 'LLM APIs', 'Docker', 'OpenShift', 'Kubernetes', 'React'],
  },
]

export default function Experience() {
  const reduce = useReducedMotion()
  const rise = (delay = 0) =>
    reduce ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay } }
  const inView = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-40px' },
        transition: { duration: 0.5 },
      }

  return (
    <div className="ex">
      <header className="ex-hero">
        <div className="container">
          <motion.p className="ex-eyebrow" {...rise(0)}>
            Experience
          </motion.p>
          <motion.h1 {...rise(0.05)}>
            Engineering experience, from <span className="ex-grad">distributed infrastructure to intelligent systems.</span>
          </motion.h1>
          <motion.p className="ex-lead" {...rise(0.12)}>
            Large-scale data infrastructure taught me performance and failure modes. Applied ML and backend work taught me to ship
            something people use. Research engineering is where I now combine both in reliable, agent-driven systems.
          </motion.p>
        </div>
      </header>

      <section className="ex-section" aria-label="Experience timeline">
        <div className="container">
          <ol className="ex-timeline">
            {experiences.map((e) => (
              <motion.li className="ex-item" key={e.n} {...inView}>
                <div className="ex-node" aria-hidden="true">
                  {e.n}
                </div>
                <article className="ex-card">
                  <p className="ex-type">{e.type}</p>
                  <h2>{e.title}</h2>
                  <p className="ex-org">{e.org}</p>
                  {e.work && <p className="ex-work">{e.work}</p>}
                  <p className="ex-meta">
                    <span>{e.dates}</span>
                    {e.location && <span>{e.location}</span>}
                  </p>
                  <p className="ex-summary">{e.summary}</p>
                  <ul className="ex-points">
                    {e.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <ul className="ex-metrics">
                    {e.metrics.map(([v, l]) => (
                      <li key={l}>
                        <strong className="ex-grad">{v}</strong>
                        <span>{l}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="ex-chips" aria-label="Technologies">
                    {e.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </article>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  )
}
