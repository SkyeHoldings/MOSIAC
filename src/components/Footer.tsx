import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="logo">Understory</div>
          <p>
            An AI marketing studio in the Pacific Northwest. The future,
            carefully made.
          </p>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <Link to="/expertise">Expertise</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h4>Studio</h4>
          <p>Pacific Northwest</p>
          <a href="mailto:hello@understory.studio">hello@understory.studio</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Understory Studio</span>
        <span>Placeholder name — swap when ready</span>
      </div>
    </footer>
  )
}
