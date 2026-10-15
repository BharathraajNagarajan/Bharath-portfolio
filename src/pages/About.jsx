import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import './About.css'

const focus = ['Distributed Systems', 'Backend Engineering', 'ML Infrastructure', 'Agentic AI Reliability']

const chapters = [
  {
    n: '01',
    title: 'Learning to think in systems',
    body: 'Working with distributed infrastructure taught me to reason about data flow, performance bottlenecks, and failure modes rather than isolated components.',
  },
  {
    n: '02',
    title: 'Building for real users',
    body: 'Applied ML, backend integration, and research engineering taught me to translate ambiguous requirements into applications people can actually use.',
  },
  {
    n: '03',
    title: 'Going deeper into AI systems',
    body: "I'm now focused on inference performance, durable agent execution, evaluation, and the infrastructure needed to make AI systems reliable.",
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
          <h2 id="ab-journey">How I got here</h2>
          <ol className="ab-chapters">
            {chapters.map((c, i) => (
              <motion.li className="ab-chapter" key={c.n} {...inView(i)}>
                <span className="ab-chapter-n" aria-hidden="true">
                  {c.n}
                </span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
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
