import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import './Projects.css'

const GH = 'https://github.com/BharathraajNagarajan/'

const featured = [
  {
    title: 'LLM Inference & GPU Serving Platform',
    url: GH + 'LLM-Inference-GPU-Serving-Platform',
    desc: 'A PyTorch/FastAPI GPU inference serving baseline, built to measure how an LLM endpoint behaves as request load grows.',
    points: [
      'GPU telemetry collected alongside every benchmark run',
      'Latency, throughput, and concurrency measured under increasing request concurrency',
      'Performance measurement and bottleneck analysis as the core workflow',
    ],
    evidence: [],
    stack: ['PyTorch', 'FastAPI', 'GPU telemetry', 'Concurrency testing', 'Benchmarking'],
  },
  {
    title: 'Durable & Governed Agent Execution',
    url: GH + 'governed-agent-exec',
    desc: 'Agent actions run as durable Temporal workflows, where a deterministic policy layer decides what an LLM is allowed to do and the system verifies what actually happened.',
    points: [
      'Temporal-based durable orchestration with retries and failure recovery',
      'Deterministic authorization and policy enforcement, with idempotent actions and an audit trail',
      'Post-action verification of outcomes; Claude, Keycard, and MongoDB integrated',
    ],
    evidence: [
      ['12/12', 'live failure scenarios validated'],
      ['162', 'unit and integration tests'],
    ],
    stack: ['Temporal', 'Claude', 'Keycard', 'MongoDB', 'Python'],
  },
  {
    title: 'Agentic AI Reliability & Tool Execution Engine',
    url: GH + 'Agentic-AI-Reliability-Tool-Execution-Engine',
    desc: 'A Python/FastAPI and LangGraph engine that puts every agent tool call through an explicit propose → authorize → execute → verify loop.',
    points: [
      'MCP-based tool execution behind deterministic authorization and schema validation',
      'Failure handling and evaluation built into the execution path',
      'Post-action verification confirms the tool call did what the agent claimed',
    ],
    evidence: [['191', 'passing tests']],
    stack: ['LangGraph', 'MCP', 'FastAPI', 'Python', 'Schema validation'],
  },
  {
    title: 'Streaming AI Agent Pipeline',
    subtitle: 'RetailPulse — real-time log analytics on Snowflake',
    url: GH + 'streaming-ai-agent-pipeline',
    desc: 'A real-time service-monitoring platform on Snowflake, validated by injecting a synthetic failure and watching it surface in the live dashboard.',
    points: [
      'Snowpipe Streaming ingestion into Bronze/Silver/Gold Dynamic Tables, with a Semantic View for governed business context',
      'Streamlit monitoring dashboard and a Cortex Agent integration for SRE-style incident explanation',
      'Documented real debugging: schema mismatches, PAT vs RSA authentication, role/ownership conflicts, and memory throttling in the streaming client',
    ],
    evidence: [
      ['51.4%', 'error rate observed during the synthetic failure'],
      ['5,084 ms', 'P95 latency observed during the synthetic failure'],
    ],
    evidenceNote: 'Observed incident metrics from an injected failure, not benchmarks or improvements. Live Cortex Agent conversations were blocked by the Snowflake trial entitlement.',
    stack: ['Snowflake', 'Snowpipe Streaming', 'Dynamic Tables', 'Semantic View', 'Cortex Agent', 'Streamlit', 'SQL'],
  },
]

const engineering = [
  {
    title: 'Career OS',
    url: GH + 'career-os',
    desc: 'A full-stack career workflow system that is still evolving. FastAPI and React sit on PostgreSQL, which is both the source of truth and the database-backed work queue, with background workers behind it.',
    points: [
      'Explicit recruiting and application state machines, plus contact and recruiting workflows and JD ingestion',
      'An LLM gateway with structured provider integration and budget controls',
      'Authentication and immutable artifacts',
    ],
    stack: ['FastAPI', 'React', 'PostgreSQL', 'State machines', 'Background workers', 'LLM gateway'],
  },
  {
    title: 'AI-Powered Patient Scheduling Portal',
    url: GH + 'kyron-medical',
    desc: 'GPT-4o handles conversation and intent, while all booking state is managed deterministically by application code. That explicit boundary keeps LLM hallucinations from corrupting booking data.',
    points: [
      'Conversational intake with semantic doctor matching and Vapi voice integration',
      'Deployed on AWS EC2 with Nginx and PM2',
    ],
    stack: ['Next.js', 'TypeScript', 'GPT-4o', 'Vapi', 'AWS EC2', 'Nginx', 'PM2'],
  },
  {
    title: 'End-to-End ML Pipeline with Dashboard',
    url: GH + 'End_to_end_ML_Pipeline_w_Dashboard',
    desc: 'A production-style ML pipeline built for reproducible workflows from data ingestion and feature engineering through PyTorch training, containerized serving, and monitoring.',
    points: [
      'Docker and Kubernetes serving, with MLflow experiment tracking and model registry',
      'CI/CD automation and drift monitoring',
    ],
    stack: ['PyTorch', 'MLflow', 'Docker', 'Kubernetes', 'GitHub Actions', 'Drift monitoring'],
  },
  {
    title: 'Distributed Systems Workflow Optimizer',
    url: GH + 'Distributed_Systems_Workflow_Optimizer',
    desc: 'Two Spark experiments in one repository, covering distributed benchmarking and fault-tolerant streaming.',
    points: [
      'Distributed edit-distance benchmarking on 100K+ datasets: 20× speedup over the documented single-node baseline, with throughput, latency, and compute-efficiency tradeoffs analyzed',
      'PySpark Dijkstra shortest paths for graph analytics, and Structured Streaming with checkpoint recovery and fault tolerance',
      'Documented real debugging: concurrent query errors, output mode mismatches, and Colab parallelism constraints',
    ],
    evidence: [['20×', 'speedup vs. single-node baseline']],
    stack: ['Apache Spark', 'PySpark', 'Structured Streaming', 'Hadoop', 'Checkpointing', 'Fault tolerance'],
  },
  {
    title: 'AI Insights Engine',
    url: GH + 'AI_Insights_Engine',
    desc: 'A demo pipeline integrating GPU preprocessing with RAPIDS cuDF, PySpark, Kafka, Hugging Face Transformers, MLflow, and Kubernetes.',
    points: [
      'Documents real integration lessons: Kafka offset tuning, MLflow flavor mismatches, Kubernetes image pull policy, and cuDF/Spark dtype handling',
    ],
    stack: ['RAPIDS cuDF', 'PySpark', 'Kafka', 'Transformers', 'MLflow', 'Kubernetes'],
  },
  {
    title: 'Faculty Research Intelligence Platform',
    subtitle: 'University at Buffalo — AI Innovation Lab',
    url: 'https://github.com/BharathraajNagarajan',
    linkLabel: 'GitHub profile',
    desc: 'A research data platform that turns scattered faculty activity into structured data and agent-driven analysis. Featured on the home page.',
    points: [
      'Multi-source ingestion with entity resolution and deduplication into MySQL',
      'FastAPI backend and stateful LangGraph/LLM workflows',
      'OpenShift/Kubernetes deployment and reliability debugging',
    ],
    evidence: [
      ['65', 'faculty'],
      ['~15', 'external sources'],
      ['12', 'MySQL tables'],
      ['~9', 'FastAPI endpoints'],
    ],
    stack: ['Python', 'FastAPI', 'MySQL', 'LangGraph', 'Docker', 'OpenShift', 'Kubernetes'],
  },
]

const academic = [
  {
    title: 'TriClass Lab — Logistic Regression vs SVM',
    url: GH + 'TriClass-Lab-Logistic-Regression-Multi-Class-SVM-Benchmark',
    desc: 'A compact MNIST benchmark comparing One-vs-All Logistic Regression, Softmax multiclass Logistic Regression, and Linear/RBF SVM with C/γ experiments. Includes overfitting and generalization analysis, such as why γ=1 overfits an RBF kernel.',
    stack: ['NumPy', 'SciPy', 'scikit-learn', 'MNIST'],
  },
  {
    title: 'From-Scratch ML — Diabetes Predictor',
    url: GH + 'rawml-diabetes-predictor',
    desc: 'LDA, QDA, Ridge regression, gradient descent, and polynomial regression implemented with NumPy and SciPy, with no scikit-learn for the core algorithms, to understand what happens inside the black box.',
    stack: ['NumPy', 'SciPy', 'LDA/QDA', 'Ridge', 'Gradient descent'],
  },
]

const lab = [
  {
    title: 'LLM Fine-Tuning — LoRA / QLoRA',
    desc: 'Exploring parameter-efficient fine-tuning of language models using LoRA and QLoRA, with a focus on reproducible training, dataset preparation, baseline comparisons, GPU memory efficiency, and task-specific evaluation.',
    stack: ['LoRA', 'QLoRA', 'Hugging Face Transformers', 'PEFT', 'PyTorch', 'Evaluation'],
  },
  {
    title: 'Model Monitoring & Drift Detection',
    desc: 'Planning a monitoring and evaluation pipeline to detect changes in input data and model behavior, track performance over time, and investigate drift through metrics, dashboards, and actionable alerts.',
    stack: ['Data drift', 'Model monitoring', 'Evaluation', 'Observability', 'Dashboards', 'Alerting'],
  },
]

const counters = [
  [featured.length, 'Featured'],
  [engineering.length, 'Engineering'],
  [academic.length, 'Academic ML'],
  [lab.length, 'Learning Lab'],
]

const pad = (n) => String(n).padStart(2, '0')

function Link({ url, label = 'View on GitHub', name }) {
  return (
    <a className="pj-link" href={url} target="_blank" rel="noreferrer" aria-label={`${name} — ${label} (opens in a new tab)`}>
      {label} <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  )
}

function Chips({ items }) {
  return (
    <ul className="pj-chips" aria-label="Technologies">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  )
}

function Evidence({ items, note }) {
  if (!items || items.length === 0) return null
  return (
    <>
      <ul className="pj-evidence">
        {items.map(([v, l]) => (
          <li key={l}>
            <strong className="pj-grad">{v}</strong>
            <span>{l}</span>
          </li>
        ))}
      </ul>
      {note && <p className="pj-note">{note}</p>}
    </>
  )
}

export default function Projects() {
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
    <div className="pj">
      <header className="pj-hero">
        <div className="container">
          <motion.p className="pj-eyebrow" {...rise(0)}>
            Projects
          </motion.p>
          <motion.h1 {...rise(0.05)}>
            Engineering systems that <span className="pj-grad">perform, recover, and deliver.</span>
          </motion.h1>
          <motion.p className="pj-lead" {...rise(0.12)}>
            Selected work across ML infrastructure, distributed systems, reliable AI execution, and applied engineering — from GPU
            inference benchmarking and governed agent workflows to streaming analytics and end-to-end applications.
          </motion.p>
          <motion.ul className="pj-counters" aria-label="Project counts" {...rise(0.18)}>
            {counters.map(([n, l]) => (
              <li key={l}>
                <strong className="pj-grad">{pad(n)}</strong> {l}
              </li>
            ))}
          </motion.ul>
        </div>
      </header>

      <section className="pj-section" aria-labelledby="pj-featured">
        <div className="container">
          <h2 id="pj-featured">Featured Engineering Projects</h2>
          <div className="pj-grid">
            {featured.map((p, i) => (
              <motion.article className="pj-card pj-featured" key={p.title} {...inView(i)} {...hover}>
                <span className="pj-index" aria-hidden="true">
                  {pad(i + 1)}
                </span>
                <h3>{p.title}</h3>
                {p.subtitle && <p className="pj-sub">{p.subtitle}</p>}
                <p className="pj-desc">{p.desc}</p>
                <ul className="pj-points">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <Evidence items={p.evidence} note={p.evidenceNote} />
                <Chips items={p.stack} />
                <Link url={p.url} name={p.title} />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="pj-section" aria-labelledby="pj-more">
        <div className="container">
          <h2 id="pj-more">More Engineering Projects</h2>
          <div className="pj-grid">
            {engineering.map((p, i) => (
              <motion.article className="pj-card" key={p.title} {...inView(i)} {...hover}>
                <h3>{p.title}</h3>
                {p.subtitle && <p className="pj-sub">{p.subtitle}</p>}
                <p className="pj-desc">{p.desc}</p>
                <ul className="pj-points">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <Evidence items={p.evidence} />
                <Chips items={p.stack} />
                <Link url={p.url} label={p.linkLabel} name={p.title} />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="pj-section" aria-labelledby="pj-academic">
        <div className="container">
          <h2 id="pj-academic">Academic ML Foundations</h2>
          <div className="pj-grid">
            {academic.map((p, i) => (
              <motion.article className="pj-card pj-compact" key={p.title} {...inView(i)} {...hover}>
                <h3>{p.title}</h3>
                <p className="pj-desc">{p.desc}</p>
                <Chips items={p.stack} />
                <Link url={p.url} name={p.title} />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="pj-section pj-last" aria-labelledby="pj-lab">
        <div className="container">
          <h2 id="pj-lab">In Progress / Learning Lab</h2>
          <div className="pj-grid">
            {lab.map((p, i) => (
              <motion.article className="pj-card pj-compact pj-planned" key={p.title} {...inView(i)}>
                <span className="pj-planned-tag">Planned</span>
                <h3>{p.title}</h3>
                <p className="pj-desc">{p.desc}</p>
                <Chips items={p.stack} />
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
