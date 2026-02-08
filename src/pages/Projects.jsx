import Section from '../components/SectionWrapper.jsx'

<p className="mute" style={{ maxWidth: 820, marginBottom: 18 }}>
  These projects reflect my self-driven learning journey — starting from
  foundational machine learning implementations and advancing toward scalable,
  distributed, and production-grade AI systems.
</p>


const shipped = [
  {
    name: "Production-Grade ML/Streaming Systems Reliability (PySpark + Structured Streaming)",
    description:
      "Spark-based distributed workflow optimizer: (1) PySpark Dijkstra shortest paths for graph analytics, and (2) fault-tolerant Structured Streaming WordCount with checkpoint recovery.",
    stack: ["PySpark", "Spark Structured Streaming", "Checkpointing", "Graph Algorithms"],
    link: "https://github.com/BharathraajNagarajan/Distributed_Systems_Workflow_Optimizer"
  },
  {
    name: "AI Insights Engine",
    description: "Real-time analytics with ML pipelines (TensorFlow/PyTorch) deployed via Kubernetes; −35% deployment time and +40% processing efficiency.",
    stack: ["Spark-ML", "TensorFlow", "PyTorch", "Kubernetes", "AWS/GCP"],
    link: "https://github.com/BharathraajNagarajan/AI_Insights_Engine"
  },  
  {
    name: "TriClass Lab — LR vs Multi-class LR vs SVM (MNIST)",
    description:
      "Compact benchmark on MNIST comparing One-vs-All Logistic Regression, Softmax Multi-class LR, and SVM (Linear/RBF) with C/γ sweeps + accuracy plots.",
    stack: ["NumPy/SciPy", "scikit-learn", "MNIST", "Model Comparison"],
    link: "https://github.com/BharathraajNagarajan/TriClass-Lab-Logistic-Regression-Multi-Class-SVM-Benchmark"
  },
  {
    name: "rawml-diabetes-predictor (From Scratch ML)",
    description:
      "From-scratch implementations for classification + regression (LDA, QDA, Ridge, Gradient Descent, Polynomial Regression) on synthetic + diabetes datasets using NumPy/SciPy only.",
    stack: ["NumPy", "SciPy", "LDA/QDA", "Ridge", "Gradient Descent"],
    link: "https://github.com/BharathraajNagarajan/rawml-diabetes-predictor"
  },
  {
    name: "Neural Networks: Single-Layer vs Deep MLPs (CelebA/MNIST)",
    description:
      "Comparison of shallow NN vs deep MLPs (PyTorch) across CelebA and MNIST with hyperparameter tuning, regularization, and training-time tradeoffs.",
    stack: ["PyTorch", "NumPy", "CelebA", "MNIST", "Regularization"],
    link: "https://github.com/BharathraajNagarajan/Machine-Learning-Project---Handwritten-Digits-Classification"
  },
  {
    name: "Heart Attack Prediction (Group Project)",
    description:
      "End-to-end ML workflow for heart attack risk prediction: data cleaning, feature engineering, model training, and evaluation (group project).",
    stack: ["Python", "Pandas", "sklearn", "EDA", "Model Evaluation"],
    link: "https://github.com/BharathraajNagarajan/Heart_attack_Prediction_Group_Project"
  }
]

const inProgress = [
  {
    name: "End-to-End ML Pipeline with Dasboard (Train → Deploy → Monitor)",
    description:
      "Production-style ML pipeline with experiment tracking, containerized serving, and basic monitoring; focusing on reliability + reproducibility.",
    stack: ["MLflow", "Docker", "FastAPI", "CI/CD"],
    link: "https://github.com/BharathraajNagarajan/End_to_end_ML_Pipeline_w_Dashboard" // optional (leave empty if private/not ready)
  },
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
    name: "Multimodal AI (Text + Image)",
    description:
      "Small multimodal prototype combining text + vision for classification/search, with focus on clean demos and measurable baselines.",
    stack: ["Vision", "Multimodal", "Embeddings", "Prototype"],
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
    <Section title="Projects" subtitle="Selected work + what I’m building next">
      {/* ✅ This line is guaranteed visible (doesn't rely on .mute styles) */}
      <div
        style={{
          maxWidth: 860,
          margin: "0 0 18px 0",
          opacity: 0.9,
          lineHeight: 1.6,
          fontSize: "0.98rem"
        }}
      >
        These projects reflect my self-driven learning journey — starting from foundational
        machine learning implementations and advancing toward scalable, distributed, and
        production-grade AI systems.
      </div>

      {/* Shipped projects */}
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

      {/* In progress */}
      <div style={{ marginTop: 26 }}>
        <h3 style={{ marginBottom: 8 }}>In Progress</h3>
        <p className="mute" style={{ marginTop: 0 }}>
          Building these now—shipping demos + writeups as they stabilize.
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
