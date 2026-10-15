import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import './Skills.css'

const GH = 'https://github.com/BharathraajNagarajan/'

const capabilities = [
  {
    title: 'Distributed Systems & Data Infrastructure',
    desc: 'Large-scale batch and streaming data processing, distributed storage, partitioning, fault tolerance, and performance optimization.',
    tech: ['Python', 'SQL', 'Apache Spark', 'PySpark', 'Spark SQL', 'Apache Kafka', 'Hadoop', 'HDFS', 'HBase', 'Kudu', 'Airflow', 'Spark Structured Streaming'],
    links: [['Distributed Systems Workflow Optimizer', GH + 'Distributed_Systems_Workflow_Optimizer']],
  },
  {
    title: 'Backend & Cloud Engineering',
    desc: 'Backend APIs, service integration, databases, containerized deployment, CI/CD, and operational troubleshooting.',
    tech: ['Python', 'FastAPI', 'SQL', 'PostgreSQL', 'MySQL', 'Docker', 'Kubernetes', 'OpenShift', 'GitHub Actions', 'AWS', 'Azure', 'GCP'],
    links: [['Career OS', GH + 'career-os']],
  },
  {
    title: 'ML Infrastructure & Inference Performance',
    desc: 'Model-serving workflows, PyTorch inference benchmarking, GPU telemetry, latency and throughput measurement, concurrency testing, and ML lifecycle tooling.',
    tech: ['PyTorch', 'TensorFlow', 'FastAPI', 'MLflow', 'Hugging Face Transformers', 'Scikit-learn', 'GPU telemetry', 'Inference benchmarking', 'Experiment tracking', 'Model evaluation'],
    links: [['LLM Inference & GPU Serving Platform', GH + 'LLM-Inference-GPU-Serving-Platform']],
  },
  {
    title: 'Agentic AI & Execution Reliability',
    desc: 'Stateful agent orchestration, governed tool execution, durable workflows, authorization, idempotency, retries, evaluation, and post-action verification.',
    tech: ['LangGraph', 'MCP', 'Temporal', 'LangChain', 'RAG', 'LLM APIs', 'Claude', 'GPT-4o', 'Tool execution', 'Workflow orchestration', 'Agent evaluation'],
    links: [
      ['Durable & Governed Agent Execution', GH + 'governed-agent-exec'],
      ['Agentic AI Reliability & Tool Execution Engine', GH + 'Agentic-AI-Reliability-Tool-Execution-Engine'],
    ],
  },
  {
    title: 'Applied AI, Analytics & Integration',
    wide: true,
    desc: 'Connecting data platforms, ML components, external services, and business requirements into usable applications and analytics workflows.',
    tech: ['Snowflake', 'Snowpipe Streaming', 'Dynamic Tables', 'BigQuery', 'Streamlit', 'React', 'REST APIs', 'Vector retrieval', 'ARIMA', 'Anomaly detection', 'Data integration'],
    links: [
      ['Streaming AI Agent Pipeline', GH + 'streaming-ai-agent-pipeline'],
      ['Patient AI Scheduling Portal', GH + 'kyron-medical'],
    ],
  },
]

const exploring = [
  'Parameter-efficient fine-tuning — LoRA / QLoRA',
  'Deeper LLM inference performance and serving optimization',
  'Model monitoring and drift detection',
]

export default function Skills() {
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
    <div className="sk">
      <header className="sk-hero">
        <div className="container">
          <motion.p className="sk-eyebrow" {...rise(0)}>
            Engineering Capabilities
          </motion.p>
          <motion.h1 {...rise(0.05)}>
            The tools matter. <span className="sk-grad">The systems they enable matter more.</span>
          </motion.h1>
          <motion.p className="sk-lead" {...rise(0.12)}>
            My foundation is in backend engineering, distributed data systems, and cloud infrastructure. I apply that experience to ML
            serving, inference performance, agent execution, and reliable AI applications—from implementation and integration to
            debugging, measurement, and delivery.
          </motion.p>
        </div>
      </header>

      <section className="sk-section" aria-label="Capabilities">
        <div className="container">
          <div className="sk-grid">
            {capabilities.map((c, i) => (
              <motion.article className={`sk-card${c.wide ? ' sk-wide' : ''}`} key={c.title} {...inView(i)} {...hover}>
                <h2>{c.title}</h2>
                <p className="sk-desc">{c.desc}</p>
                <ul className="sk-chips" aria-label="Technologies">
                  {c.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <p className="sk-related">
                  <span>See it in:</span>
                  {c.links.map(([name, url]) => (
                    <a key={url} href={url} target="_blank" rel="noreferrer" aria-label={`${name} on GitHub (opens in a new tab)`}>
                      {name} <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  ))}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="sk-section sk-last" aria-labelledby="sk-exploring">
        <div className="container">
          <motion.div className="sk-exploring" {...inView(0)}>
            <h2 id="sk-exploring">Currently exploring</h2>
            <p className="sk-desc">Extending my ML systems foundation through focused implementation and evaluation.</p>
            <ul className="sk-topics">
              {exploring.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
