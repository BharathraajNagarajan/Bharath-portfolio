import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import './About.css'

const focus = ['Distributed Systems', 'Backend Engineering', 'ML Infrastructure', 'Agentic AI Reliability']

const stages = [
  {
    n: '01',
    kind: 'Industry engineering',
    title: 'Distributed infrastructure',
    org: 'Lloyds Banking Group',
    body: 'I worked on large-scale banking data platforms, building Spark/PySpark and Kafka batch and streaming pipelines, including distributed feature engineering and data preparation for ML workloads. Alongside data science teams, I worked on the Kubernetes-based infrastructure around those workloads: containerized deployment, recovery, and observability, plus model-serving, versioning, and rollout workflows. Day to day that meant partitioning, profiling, and bottleneck analysis, and it taught me to think in data flow and failure modes before anything else.',
    stats: [
      ['100M+', 'records/day through distributed pipelines'],
      ['~40%', 'query latency reduction'],
    ],
    tech: ['Python', 'SQL', 'Spark/PySpark', 'Kafka', 'HBase', 'Kudu', 'Airflow', 'Docker', 'Kubernetes', 'PyTorch', 'TensorFlow'],
  },
  {
    n: '02',
    kind: 'Research engineering & industry internship',
    title: 'Backend, cloud, and applied AI',
    parts: [
      {
        label: 'Research Engineer',
        name: 'University at Buffalo — AI Innovation Lab',
        org: 'Faculty Research Intelligence Platform',
        body: 'I contributed multi-source ingestion, entity resolution and deduplication, MySQL-backed integration, FastAPI backend services, stateful LangGraph/LLM workflows, and OpenShift/Kubernetes deployment and debugging.',
        stats: [
          ['65', 'faculty'],
          ['~15', 'external sources'],
          ['12', 'MySQL tables'],
          ['~9', 'FastAPI endpoints'],
        ],
        tech: ['FastAPI', 'MySQL', 'LangGraph', 'OpenShift', 'Kubernetes'],
      },
      {
        label: 'Machine Learning Intern',
        name: 'Media Sales Plus Inc.',
        org: 'Academic industry internship',
        body: 'I built multi-tenant ingestion and normalization workflows across 10+ heterogeneous client datasets (CSV/Excel), automating schema validation and KPI computation. I implemented ARIMA forecasting and IQR-based anomaly detection, developed a modular, deterministic business-query engine, and delivered the analytics through Streamlit on Azure, with Docker and GitHub Actions CI/CD. The work connected data engineering, applied machine learning, and business-facing delivery.',
        stats: [['10+', 'client datasets']],
        tech: ['ARIMA', 'IQR anomaly detection', 'Streamlit', 'Azure', 'Docker', 'GitHub Actions'],
      },
    ],
  },
  {
    n: '03',
    kind: 'Independent projects',
    title: 'ML systems and reliable AI infrastructure',
    org: 'Hands-on, ongoing',
    body: 'My current work is where distributed-systems habits meet AI workloads. I benchmark LLM inference with PyTorch and FastAPI, measuring GPU telemetry, latency, throughput, and concurrency. I also build agent systems around the failure cases: durable workflows, deterministic authorization, MCP tool execution, idempotency, retries, and post-action verification.',
    stats: [
      ['12/12', 'live failure scenarios, governed agent execution (162 tests)'],
      ['191', 'passing tests, agentic reliability engine'],
    ],
    tech: ['PyTorch', 'FastAPI', 'MCP', 'Temporal', 'LangGraph', 'State machines', 'LLM gateways'],
  },
]

const cards = [
  {
    title: 'Distributed Systems & Data Infrastructure',
    body: 'Large-scale data processing with Spark and Kafka: partitioning, query performance, distributed storage, and keeping pipelines reliable under load.',
  },
  {
    title: 'Backend & Cloud Engineering',
    body: 'Python, FastAPI, and SQL services; external integrations and APIs; Docker, Kubernetes, and OpenShift deployment workflows.',
  },
  {
    title: 'ML Infrastructure & Inference Performance',
    body: 'Model serving, PyTorch inference benchmarking, GPU telemetry, concurrency, latency and throughput analysis, evaluation, and observability.',
  },
  {
    title: 'Agentic AI & Execution Reliability',
    body: 'LangGraph, MCP, durable orchestration, deterministic authorization, retries, idempotency, auditability, and post-action verification.',
  },
]

const principles = [
  'Measure real system behavior',
  'Find the bottleneck before optimizing',
  'Understand how it fails',
  'Debug the integration, not just the code',
  'Recover from failure cleanly',
  'Verify external actions actually happened',
  'Ship something people can use',
]

function Detail({ body, stats, tech }) {
  return (
    <>
      <p className="ab-body">{body}</p>
      <ul className="ab-stats">
        {stats.map(([v, l]) => (
          <li key={l}>
            <strong className="ab-grad">{v}</strong>
            <span>{l}</span>
          </li>
        ))}
      </ul>
      <ul className="ab-chips" aria-label="Technologies">
        {tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </>
  )
}

export default function About() {
  const reduce = useReducedMotion()
  const rise = (delay = 0) =>
    reduce ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay } }
  const inView = (i = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-40px' },
          transition: { duration: 0.5, delay: (i % 2) * 0.08 },
        }
  const hover = reduce ? {} : { whileHover: { y: -4 } }

  return (
    <div className="ab">
      <header className="ab-hero">
        <div className="container">
          <motion.p className="ab-eyebrow" {...rise(0)}>
            About / Engineering Journey
          </motion.p>
          <motion.h1 {...rise(0.05)}>
            I build the systems behind <span className="ab-grad">intelligent applications.</span>
          </motion.h1>
          <motion.p className="ab-lead" {...rise(0.12)}>
            My engineering foundation is in distributed data platforms, backend services, and cloud infrastructure. I'm extending that
            foundation into ML inference, agent execution, and the performance and reliability challenges of modern AI systems.
          </motion.p>
          <motion.ul className="ab-tags" aria-label="Technical focus" {...rise(0.18)}>
            {focus.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </motion.ul>
        </div>
      </header>

      <section className="ab-section" aria-labelledby="ab-journey">
        <div className="container">
          <h2 id="ab-journey">Engineering journey</h2>
          <ol className="ab-timeline">
            {stages.map((s, i) => (
              <motion.li className="ab-stage" key={s.n} {...inView(i)}>
                <div className="ab-node" aria-hidden="true">
                  {s.n}
                </div>
                <div className="ab-stage-card">
                  <p className="ab-kind">{s.kind}</p>
                  <h3>{s.title}</h3>
                  {s.parts ? (
                    s.parts.map((p) => (
                      <div className="ab-part" key={p.name}>
                        <p className="ab-kind ab-part-label">{p.label}</p>
                        <h4>{p.name}</h4>
                        <p className="ab-org">{p.org}</p>
                        <Detail body={p.body} stats={p.stats} tech={p.tech} />
                      </div>
                    ))
                  ) : (
                    <>
                      <p className="ab-org">{s.org}</p>
                      <Detail body={s.body} stats={s.stats} tech={s.tech} />
                    </>
                  )}
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className="ab-section" aria-labelledby="ab-engineer">
        <div className="container">
          <h2 id="ab-engineer">What I engineer</h2>
          <div className="ab-cards">
            {cards.map((c, i) => (
              <motion.article className="ab-card" key={c.title} {...inView(i)} {...hover}>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="ab-section" aria-labelledby="ab-philosophy">
        <div className="container">
          <motion.div className="ab-philosophy" {...inView(0)}>
            <h2 id="ab-philosophy">
              A working prototype is the beginning. <span className="ab-grad">Reliability is the engineering.</span>
            </h2>
            <p>
              Getting something to work once is the easy part. I care about what happens next: how it behaves under real load, where it
              breaks, and whether it recovers without someone watching.
            </p>
            <ul className="ab-principles">
              {principles.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="ab-section ab-last" aria-labelledby="ab-edu">
        <div className="container">
          <motion.div className="ab-edu" {...inView(0)}>
            <div>
              <h2 id="ab-edu">Education</h2>
              <p className="ab-edu-name">University at Buffalo — State University of New York</p>
              <p className="ab-edu-deg">Master of Science in Data Science</p>
              <p className="ab-edu-meta">Graduated December 2025 · GPA 3.875/4.0</p>
              <div className="ab-edu-second">
                <p className="ab-edu-sname">SSN College of Engineering</p>
                <p className="ab-edu-meta">Bachelor of Engineering · 2017–2021</p>
              </div>
            </div>
            <div>
              <p className="ab-edu-dir">
                I'm looking at roles in software engineering, backend and platform engineering, ML infrastructure, AI systems, and applied
                or forward deployed AI engineering.
              </p>
              <Link className="ab-link" to="/projects">
                See projects <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
