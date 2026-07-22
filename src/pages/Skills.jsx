import Section from '../components/SectionWrapper.jsx'

const skills = {
  'Distributed Systems & Infrastructure': [
    'Kubernetes', 'Docker', 'Apache Spark (PySpark, Spark SQL)', 'Apache Kafka',
    'Hadoop', 'HDFS', 'HBase', 'Kudu', 'Airflow', 'CI/CD (GitHub Actions)', 'OpenShift'
  ],
  'ML Infrastructure & MLOps': [
    'Model Serving', 'MLflow', 'Experiment Tracking', 'Model Registry',
    'Drift Detection', 'Feature Engineering', 'Batch & Real-Time Inference',
    'Model Versioning', 'A/B Rollout', 'Rollback'
  ],
  'ML & Modeling': [
    'PyTorch', 'TensorFlow', 'Scikit-learn', 'Transformers', 'HuggingFace',
    'Anomaly Detection', 'Time-Series Forecasting (ARIMA)', 'NLP', 'Model Evaluation'
  ],
  'Agentic AI': [
    'LLM Agents', 'RAG', 'LangChain', 'Groq API', 'GPT-4o',
    'Tool Use', 'Multi-Step Reasoning', 'Prompt Engineering'
  ],
  'Cloud Platforms': [
    'AWS (EC2, S3)', 'Azure', 'GCP (BigQuery, Compute)', 'Databricks', 'Snowflake'
  ],
  'Programming': [
    'Python', 'SQL', 'Bash', 'Scala', 'System Design', 'Performance Debugging'
  ],
  'Certifications': [
    'AWS Certified Solutions Architect — Associate (In Progress)'
  ]
}

export default function Skills() {
  const groups = Object.entries(skills)
  return (
    <Section title="Skills" subtitle="My toolbox">
      {groups.map(([cat, items]) => (
        <div key={cat} className="card" style={{ padding: 20 }}>
          <h3>{cat}</h3>
          <div className="badges" style={{ marginTop: 8 }}>
            {items.map(s => (
              <span className="badge" key={s}>{s}</span>
            ))}
          </div>
        </div>
      ))}
    </Section>
  )
}
