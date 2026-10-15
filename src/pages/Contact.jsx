import { motion, useReducedMotion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin, Briefcase, FileText } from 'lucide-react'
import './Contact.css'

const EMAIL = 'bharathraajnagarajan@gmail.com'

const channels = [
  { Icon: Mail, label: 'Email', text: EMAIL, href: `mailto:${EMAIL}` },
  {
    Icon: Linkedin,
    label: 'LinkedIn',
    text: 'linkedin.com/in/bharathraaj-nagarajan-898a66195',
    href: 'https://www.linkedin.com/in/bharathraaj-nagarajan-898a66195',
    external: true,
  },
  { Icon: Github, label: 'GitHub', text: 'github.com/BharathraajNagarajan', href: 'https://github.com/BharathraajNagarajan', external: true },
]

function handleSubmit(e) {
  e.preventDefault()
  const data = new FormData(e.currentTarget)
  const name = String(data.get('name') || '').trim()
  const email = String(data.get('email') || '').trim()
  const subject = String(data.get('subject') || '').trim()
  const message = String(data.get('message') || '').trim()

  const lines = [`Name: ${name}`]
  if (email) lines.push(`Email: ${email}`)
  const body = [...lines, '', message].join('\n')
  window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`[Portfolio] ${subject}`)}&body=${encodeURIComponent(body)}`
}

export default function Contact() {
  const reduce = useReducedMotion()
  const rise = (delay = 0) =>
    reduce ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay } }

  return (
    <div className="ct">
      <header className="ct-hero">
        <div className="container">
          <motion.p className="ct-eyebrow" {...rise(0)}>
            Let's connect
          </motion.p>
          <motion.h1 {...rise(0.05)}>
            Let's build <span className="ct-grad">something that matters.</span>
          </motion.h1>
          <motion.p className="ct-lead" {...rise(0.12)}>
            I'm open to engineering opportunities, technical collaboration, and conversations with teams building reliable software and
            AI systems. My interests span backend and distributed systems, ML infrastructure, agentic AI, and customer-facing
            engineering.
          </motion.p>
        </div>
      </header>

      <section className="ct-section" aria-label="Contact">
        <div className="container ct-grid">
          <motion.div className="ct-card" {...rise(0.18)}>
            <h2>Connect directly</h2>
            <ul className="ct-channels">
              {channels.map(({ Icon, label, text, href, external }) => (
                <li key={label}>
                  <Icon size={20} aria-hidden="true" />
                  <div>
                    <span className="ct-label">{label}</span>
                    <a href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
                      {text}
                    </a>
                  </div>
                </li>
              ))}
              <li>
                <MapPin size={20} aria-hidden="true" />
                <div>
                  <span className="ct-label">Location</span>
                  <span>San Francisco Bay Area, California</span>
                </div>
              </li>
              <li>
                <Briefcase size={20} aria-hidden="true" />
                <div>
                  <span className="ct-label">Availability</span>
                  <span>Open to full-time engineering opportunities across the US; open to relocation.</span>
                </div>
              </li>
            </ul>
            <a className="ct-resume" href="/Bharathraaj_Nagarajan_Resume.pdf" download>
              <FileText size={16} aria-hidden="true" /> Download resume (PDF)
            </a>
          </motion.div>

          <motion.div className="ct-card" {...rise(0.24)}>
            <h2>Send a message</h2>
            <form className="ct-form" onSubmit={handleSubmit}>
              <label>
                <span>Your name</span>
                <input required name="name" type="text" autoComplete="name" />
              </label>
              <label>
                <span>
                  Your email <em>(optional)</em>
                </span>
                <input name="email" type="email" autoComplete="email" />
              </label>
              <label>
                <span>Subject</span>
                <input required name="subject" type="text" />
              </label>
              <label>
                <span>Message</span>
                <textarea required name="message" rows="6" />
              </label>
              <button className="btn btn-primary ct-submit" type="submit">
                Prepare Email
              </button>
              <p className="ct-help">This opens your email app with the message prepared.</p>
            </form>
          </motion.div>
        </div>
        <div className="container">
          <p className="ct-closing">Based in the Bay Area. Open to building wherever the right engineering problems are.</p>
        </div>
      </section>
    </div>
  )
}
