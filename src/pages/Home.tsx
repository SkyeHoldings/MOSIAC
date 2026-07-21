import { Link } from 'react-router-dom'
import { WorkCard } from '../components/WorkCard'
import { caseStudies, expertise } from '../data/work'

export function Home() {
  return (
    <>
      <section className="hero" aria-label="Showreel">
        <div className="hero-media">
          <video
            className="hero-video"
            width="100%"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-caption">
          <h1>
            Reshaping what’s possible when imagination leads and automation
            follows.
          </h1>
        </div>
      </section>

      <nav className="spotlight" aria-label="Spotlight">
        <div className="spotlight-bar">
          <span className="spotlight-label">Mosaic Spotlight</span>
          <Link className="spotlight-link" to="/expertise">
            Artificial Intelligence
          </Link>
          <Link className="spotlight-link" to="/expertise">
            Brand Storytelling
          </Link>
          <Link className="spotlight-link" to="/expertise">
            Growth Strategy
          </Link>
        </div>
      </nav>

      <section className="work-section" aria-label="Selected work">
        <div className="work-grid">
          {caseStudies.map((study) => (
            <WorkCard key={study.id} study={study} />
          ))}
        </div>
      </section>

      <section className="statement">
        <h2>
          We build brands, campaigns, and content systems with AI — quietly,
          carefully, and with craft.
        </h2>
        <p className="follow-up">
          Strategy leads. Models accelerate. Taste makes the final call.
        </p>
      </section>

      <section aria-label="Expertise">
        <div className="expertise-list">
          {expertise.map((item) => (
            <div key={item.title} className="expertise-row">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <Link className="text-link" to="/expertise">
                View expertise
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>The future, faster.</h2>
        <Link className="text-link" to="/contact">
          Get in touch
        </Link>
      </section>
    </>
  )
}
