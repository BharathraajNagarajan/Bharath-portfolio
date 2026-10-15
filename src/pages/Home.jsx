import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Download, Mail, ArrowDownRight, ArrowUpRight } from 'lucide-react'
import './Home.css'

const GH = 'https://github.com/BharathraajNagarajan/'

const evidence = [
  { value: '100M+', label: 'records/day processed through distributed Spark/Kafka pipelines' },
  { value: '12/12', label: 'live failure scenarios — Durable & Governed Agent Execution' },
  { value: '191', label: 'tests — Agentic AI Reliability Engine' },
  { value: 'GPU', label: 'inference benchmarking — PyTorch serving baseline' },
]

const projects = [
  {
    title: 'LLM Inference & GPU Serving',
    url: GH + 'LLM-Inference-GPU-Serving-Platform',
    stack: ['PyTorch', 'FastAPI', 'GPU telemetry', 'Concurrency testing'],
    domain: 'ML Infrastructure',
    desc: 'PyTorch and FastAPI GPU serving platform with GPU telemetry and concurrency testing to benchmark LLM inference under load.',
  },
  {
    title: 'Durable & Governed Agent Execution',
    url: GH + 'governed-agent-exec',
    stack: ['Temporal', 'Claude', 'Keycard', 'MongoDB'],
    domain: 'Agentic AI',
    desc: 'Durable agent workflows with deterministic authorization, idempotent actions, and outcome verification. Validated against 12/12 live failure scenarios with 162 unit and integration tests.',
  },
  {
    title: 'Career OS',
    url: GH + 'career-os',
    stack: ['FastAPI', 'React', 'PostgreSQL', 'State machines', 'Background workers', 'LLM gateway'],
    domain: 'Backend Engineering',
    desc: 'Building a full-stack career workflow system with FastAPI, React, PostgreSQL, background workers, explicit state machines, recruiting workflows, and a unified LLM gateway.',
  },
  {
    title: 'Agentic AI Reliability & Tool Execution Engine',
    url: GH + 'Agentic-AI-Reliability-Tool-Execution-Engine',
    stack: ['LangGraph', 'MCP', 'FastAPI', 'Policy & verification'],
    domain: 'AI Reliability',
    desc: 'Agent reliability engine with deterministic authorization, MCP tool execution, and post-action verification, backed by 191 passing tests.',
  },
  {
    title: 'Streaming AI Agent Pipeline',
    url: GH + 'streaming-ai-agent-pipeline',
    stack: ['Snowflake', 'Snowpipe Streaming', 'Dynamic Tables', 'Semantic Views', 'Cortex Agent'],
    domain: 'Distributed Systems',
    desc: 'Built a live Snowflake streaming analytics pipeline with Snowpipe Streaming, Bronze/Silver/Gold Dynamic Tables, Semantic Views, and a Streamlit dashboard, with a grounded Cortex Agent integration.',
  },
  {
    title: 'Patient AI Scheduling Portal',
    url: GH + 'kyron-medical',
    stack: ['Next.js', 'GPT-4o', 'Vapi', 'AWS EC2', 'Deterministic booking'],
    domain: 'Applied AI',
    desc: 'GPT-4o patient intake with semantic doctor matching, a deterministic booking workflow, and Vapi voice integration, deployed on AWS EC2.',
  },
]

const flow = ['~15 external sources', 'Ingestion, entity resolution & deduplication', 'MySQL']
const layers = ['FastAPI backend services', 'Stateful LangGraph / LLM agent workflows', 'React dashboard', 'Deployed on OpenShift / Kubernetes']
const scope = [
  ['65', 'faculty members'],
  ['~15', 'external sources'],
  ['12', 'MySQL tables'],
  ['~9', 'FastAPI endpoints'],
]
const caseStack = ['Python', 'FastAPI', 'MySQL', 'LangGraph', 'LLM APIs', 'Docker', 'Kubernetes/OpenShift', 'React']

export default function Home() {
  const reduce = useReducedMotion()
  const rise = (delay = 0) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay } }
  const inView = (i = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-40px' },
          transition: { duration: 0.5, delay: (i % 3) * 0.08 },
        }
  const hover = reduce ? {} : { whileHover: { y: -4 } }
  const photoMotion = reduce
    ? {}
    : { initial: { opacity: 0, scale: 0.94 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.7 } }

  return (
    <div className="hp">
      <header className="hp-hero">
        <div className="container hp-hero-grid">
          <div>
            <motion.span className="hp-eyebrow" {...rise(0)}>
              <i aria-hidden="true" /> Software Engineer · San Francisco Bay Area
            </motion.span>
            <motion.h1 className="hp-name" {...rise(0.05)}>
              Bharathraaj Nagarajan
            </motion.h1>
            <motion.h2 className="hp-statement" {...rise(0.1)}>
              Building AI systems that <span className="hp-grad">perform</span>, execute reliably, and survive failure.
            </motion.h2>
            <motion.p className="hp-role" {...rise(0.14)}>
              Distributed Systems · ML Infrastructure · Applied &amp; Agentic AI
            </motion.p>
            <motion.p className="hp-lead" style={{ marginTop: 18 }} {...rise(0.18)}>
              Engineering experience spanning large-scale data platforms, backend systems, and cloud infrastructure. Building on that
              foundation through hands-on LLM inference benchmarking, governed agent execution, and production-oriented AI systems.
            </motion.p>
            <motion.p className="hp-exp" {...rise(0.22)}>
              3.5 years of combined industry, academic capstone, and research engineering experience.
            </motion.p>
            <motion.p className="hp-exp" style={{ marginTop: 8 }} {...rise(0.25)}>
              Active in the Bay Area engineering community, building across AI infrastructure and applied AI.
            </motion.p>
            <motion.div className="hp-cta" {...rise(0.28)}>
              <a className="btn btn-primary" href="#featured-work">
                Explore My Work <ArrowDownRight size={18} aria-hidden="true" />
              </a>
              <a className="btn" href="/Bharathraaj_Nagarajan_Resume.pdf" download>
                <Download size={18} aria-hidden="true" /> Download Resume
              </a>
              <Link className="btn" to="/contact">
                <Mail size={18} aria-hidden="true" /> Contact Me
              </Link>
            </motion.div>
          </div>

          <motion.div className="hp-photo-wrap" {...photoMotion}>
            <div className="hp-ring">
              <img src="/assets/profile.jpg" alt="Portrait of Bharathraaj Nagarajan" />
            </div>
          </motion.div>
        </div>
      </header>

      <section className="hp-evidence" aria-label="Engineering evidence">
        <div className="container">
          <ul className="hp-ev-grid">
            {evidence.map((e) => (
              <li className="hp-ev" key={e.value}>
                <strong className="hp-grad">{e.value}</strong>
                <span>{e.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="hp-case" id="featured-work" aria-labelledby="hp-case-title">
        <div className="container">
          <motion.article className="hp-case-card" {...inView(0)}>
            <p className="hp-case-kicker">Featured case study · University at Buffalo · AI Innovation Lab</p>
            <h2 id="hp-case-title">
              <span className="hp-grad">Faculty Research Intelligence Platform</span>
            </h2>
            <p className="hp-case-desc">
              Engineered and enhanced a multi-source research intelligence platform serving 65 faculty members, contributing to data
              ingestion pipelines with entity resolution and deduplication, stateful agentic analysis workflows, backend integration, and Kubernetes-based deployment. Improved platform
              reliability through containerization, application routing, infrastructure configuration, and debugging LLM timeouts,
              retries, and deployment failures.
            </p>
            <ol className="hp-flow" aria-label="Architecture">
              {flow.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ol>
            <ul className="hp-flow hp-flow-plain" aria-label="Platform components">
              {layers.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <ul className="hp-scope">
              {scope.map(([n, l]) => (
                <li key={l}>
                  <strong className="hp-grad">{n}</strong>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
            <ul className="hp-stack" aria-label="Technology">
              {caseStack.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </motion.article>
        </div>
      </section>

      <section className="hp-work" aria-labelledby="hp-work-title">        <div className="container">
          <h2 id="hp-work-title">Engineering projects</h2>
          <p className="hp-work-sub">Systems for agent reliability, inference, streaming data, and applied AI.</p>
          <div className="hp-grid">
            {projects.map((p, i) => (
              <motion.article className="hp-card" key={p.title} {...inView(i)} {...hover}>
                <span className="hp-status">{p.domain}</span>
                <h3>{p.title}</h3>
                <ul className="hp-stack" aria-label="Tech stack">
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <p className="hp-desc">{p.desc}</p>
                <a
                  className="hp-link"
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${p.title} on GitHub (opens in a new tab)`}
                >
                  View on GitHub <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </motion.article>
            ))}
          </div>
          <p className="hp-note">
            More detail on the{' '}
            <Link to="/projects" className="hp-link">
              Projects page
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  )
}
