import Section from '../components/SectionWrapper.jsx'

const shipped = [
  {
    name: "CSE Pulse – Research Activity Intelligence Platform",
    description:
      "Production research data infrastructure aggregating scholarly activity for 64 UB CSE faculty across arXiv, DBLP, Semantic Scholar, IEEE, and RSS feeds. LLM inference pipeline (Groq/Llama 3.1) classifies research into grants, publications, and collaborations. Deployed on OpenShift Kubernetes.",
    stack: ["Python", "Groq/Llama 3.1", "Docker", "OpenShift Kubernetes", "SQL", "React"],
    link: "https://github.com/BharathraajNagarajan"
  },
  {
    name: "End-to-End ML Pipeline with Dashboard (Train → Deploy → Monitor)",
    description:
      "Educational production-style ML pipeline demonstrating reproducible workflows across data ingestion, feature engineering, model training (PyTorch), containerized serving (Docker + Kubernetes), experiment tracking and model registry (MLflow), CI/CD automation, and drift monitoring.",
    stack: ["MLflow", "Docker", "Kubernetes", "PyTorch", "CI/CD", "GitHub Actions", "Drift Monitoring"],
    link: "https://github.com/BharathraajNagarajan/End_to_end_ML_Pipeline_w_Dashboard"
  },
  {
    name: "Distributed Edit Distance Benchmarking",
    description:
      "Built and benchmarked distributed processing pipelines on 100K+ datasets, achieving 20× speedup over single-node baseline via Spark multiprocessing. Analyzed throughput, latency, and compute efficiency tradeoffs across distributed node configurations.",
    stack: ["Apache Spark", "Hadoop", "Python", "Distributed Systems", "Benchmarking"],
    link: "https://github.com/BharathraajNagarajan/Distributed_Systems_Workflow_Optimizer"
  },
  {
    name: "Production-Grade ML/Streaming Systems Reliability (PySpark + Structured Streaming)",
    description:
      "Spark-based distributed workflow optimizer: (1) PySpark Dijkstra shortest paths for graph analytics, and (2) fault-tolerant Structured Streaming with checkpoint recovery. Documents real debugging pitfalls — concurrent query errors, output mode mismatches, Colab parallelism constraints.",
    stack: ["PySpark", "Spark Structured Streaming", "Checkpointing", "Fault Tolerance", "Graph Algorithms"],
    link: "https://github.com/BharathraajNagarajan/Distributed_Systems_Workflow_Optimizer"
  },
  {
    name: "AI Insights Engine",
    description:
      "Demo pipeline integrating GPU preprocessing (RAPIDS cuDF), PySpark, Kafka, Hugging Face Transformers, MLflow, and Kubernetes — documents real integration pitfalls: Kafka offset tuning, MLflow flavor mismatches, K8s image pull policy, cuDF/Spark dtype handling.",
    stack: ["RAPIDS cuDF", "PySpark", "Kafka", "MLflow", "Kubernetes", "Transformers"],
    link: "https://github.com/BharathraajNagarajan/AI_Insights_Engine"
  },
  {
    name: "AI-Powered Patient Scheduling Portal",
    description:
      "LLM-powered scheduling application with a clean agentic architecture: GPT-4o handles conversation and intent while all booking state is managed deterministically by application code — an explicit boundary that prevents hallucinations from corrupting booking data. Deployed live on AWS EC2 with Nginx + PM2.",
    stack: ["Next.js", "TypeScript", "GPT-4o", "AWS EC2", "Nginx", "Twilio", "Vapi"],
    link: "https://github.com/BharathraajNagarajan/kyron-medical"
  },
  {
    name: "TriClass Lab — LR vs Multi-class LR vs SVM (MNIST)",
    description:
      "Compact benchmark on MNIST comparing One-vs-All Logistic Regression, Softmax Multi-class LR, and SVM (Linear/RBF) with C/γ sweeps. Documents why γ=1 causes RBF overfitting, why multi-class LR outperforms one-vs-all, and training-vs-test gap analysis across all three.",
    stack: ["NumPy", "SciPy", "scikit-learn", "MNIST", "Model Comparison"],
    link: "https://github.com/BharathraajNagarajan/TriClass-Lab-Logistic-Regression-Multi-Class-SVM-Benchmark"
  },
  {
    name: "rawml-diabetes-predictor (From Scratch ML)",
    description:
      "From-scratch implementations of LDA, QDA, Ridge regression, Gradient Descent, and Polynomial Regression using only NumPy and SciPy — no sklearn for core algorithms. Built to understand what happens inside the black box.",
    stack: ["NumPy", "SciPy", "LDA/QDA", "Ridge", "Gradient Descent"],
    link: "https://github.com/BharathraajNagarajan/rawml-diabetes-predictor"
  }
]

const inProgress = [
  {
    name: "RAG Chatbot (Docs + Retrieval + Evaluation)",
    description:
      "Retrieval-Augmented Generation chatbot with chunking, embeddings, reranking, and evaluation harness (precision/recall + groundedness).",
    stack: ["RAG", "Vector DB", "Embeddings", "Evaluation"],
    link: ""
  },
  {
    name: "LLM Fine-Tuning (LoRA/QLoRA)",
    description:
      "Parameter-efficient fine-tuning experiments with clear baselines, dataset curation, and evaluation for task performance and hallucinations.",
    stack: ["LoRA", "Transformers", "Training", "Eval"],
    link: ""
  },
  {
    name: "Model Monitoring + Drift Detection",
    description:
      "Monitoring pipeline to track data drift, concept drift signals, and alerting; includes a simple dashboard for metrics + thresholds.",
    stack: ["Drift", "Monitoring", "Dashboards", "Alerts"],
    link: ""
  },
  {
    name: "Agentic AI Workflow Engine",
    description:
      "Modular agentic pipeline with tool-use, memory, and multi-step reasoning — exploring patterns for reliable task decomposition and failure recovery in LLM-driven workflows.",
    stack: ["LLM Agents", "Tool Use", "Memory", "Python"],
    link: ""
  }
]

function TiltCard({ children }) {
  return (
    <div
      className="card tilt"
      style={{ padding: 20 }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        const x = (e.clientX - r.left) / r.width - 0.5
        const y = (e.clientY - r.top) / r.height - 0.5
        e.currentTarget.style.setProperty('--ry', `${x * 12}deg`)
        e.currentTarget.style.setProperty('--rx', `${-y * 12}deg`)
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.setProperty('--ry', '0deg')
        e.currentTarget.style.setProperty('--rx', '0deg')
      }}
    >
      {children}
    </div>
  )
}

export default function Projects() {
  return (
    <Section title="Projects" subtitle="Selected work + what I'm building next">
      <div style={{ maxWidth: 860, margin: "0 0 18px 0", opacity: 0.9, lineHeight: 1.6, fontSize: "0.98rem" }}>
        ML infrastructure, distributed systems, and agentic AI — from production pipelines and model serving to LLM-powered applications with clean architectural boundaries.
      </div>

      <div className="grid two">
        {shipped.map((p, i) => (
          <TiltCard key={i}>
            <h3 style={{ marginBottom: 6 }}>{p.name}</h3>
            <p className="mute" style={{ marginTop: 0 }}>{p.description}</p>
            <div className="badges" style={{ marginTop: 12 }}>
              {p.stack.map((t, j) => (
                <span className="badge" key={j}>{t}</span>
              ))}
            </div>
            <div style={{ marginTop: 14 }}>
              <a className="btn btn-primary" href={p.link} target="_blank" rel="noreferrer">
                View on GitHub
              </a>
            </div>
          </TiltCard>
        ))}
      </div>

      <div style={{ marginTop: 26 }}>
        <h3 style={{ marginBottom: 8 }}>In Progress</h3>
        <p className="mute" style={{ marginTop: 0 }}>
          Building these now — shipping demos and writeups as they stabilize.
        </p>
        <div className="grid two">
          {inProgress.map((p, i) => (
            <TiltCard key={`wip-${i}`}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'baseline' }}>
                <h3 style={{ marginBottom: 6 }}>{p.name}</h3>
                <span className="badge" style={{ opacity: 0.9 }}>WIP</span>
              </div>
              <p className="mute" style={{ marginTop: 0 }}>{p.description}</p>
              <div className="badges" style={{ marginTop: 12 }}>
                {p.stack.map((t, j) => (
                  <span className="badge" key={j}>{t}</span>
                ))}
              </div>
              <div style={{ marginTop: 14 }}>
                {p.link ? (
                  <a className="btn btn-primary" href={p.link} target="_blank" rel="noreferrer">
                    Preview
                  </a>
                ) : (
                  <span className="mute" style={{ fontSize: 14 }}>
                    Link will be added after the first stable release.
                  </span>
                )}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </Section>
  )
}
