import { Link } from 'react-router-dom'
import { expertise } from '../data/work'

export function Expertise() {
  return (
    <>
      <section className="expertise-hero">
        <h1>
          The most powerful force in the universe isn’t technology. It’s
          imagination.
        </h1>
      </section>

      <section className="expertise-panels" aria-label="Expertise areas">
        {expertise.map((item) => (
          <div key={item.title} className="expertise-panel">
            <div
              className="expertise-panel__media"
              style={{ ['--tile-bg' as string]: item.tileBg }}
              aria-hidden="true"
            />
            <div className="expertise-panel__content">
              <h2>{item.title}</h2>
              <p>{item.body}</p>
              <Link className="text-link text-link--light" to="/">
                View projects
              </Link>
            </div>
          </div>
        ))}
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
