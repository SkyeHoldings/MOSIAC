import { useState, type FormEvent } from 'react'

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <>
      <section className="page-hero">
        <h1>Start a project.</h1>
        <p>
          Tell us what you’re building, where you’re stuck, and what “good”
          looks like. We’ll reply with next steps — usually a short intro call.
        </p>
      </section>

      <section className="contact-grid">
        <div className="contact-info">
          <p>
            Understory works with founders, marketing leads, and product teams —
            especially when AI is part of the story or the operating model.
          </p>
          <div className="meta-block">
            <h4>Direct</h4>
            <p>
              <a href="mailto:hello@understory.studio">
                hello@understory.studio
              </a>
            </p>
            <p>Pacific Northwest · remote-friendly</p>
          </div>
        </div>

        {sent ? (
          <div className="contact-info">
            <h2 style={{ fontSize: '1.5rem' }}>Message noted</h2>
            <p>
              This draft form doesn’t send email yet — wire it to your inbox,
              Formspree, or CRM when you’re ready.
            </p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" required autoComplete="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
              />
            </div>
            <div className="field">
              <label htmlFor="company">Company</label>
              <input id="company" name="company" autoComplete="organization" />
            </div>
            <div className="field">
              <label htmlFor="message">What are you building?</label>
              <textarea id="message" name="message" required />
            </div>
            <button className="btn" type="submit">
              Send message
            </button>
            <p className="form-note">
              Placeholder form for the draft site. No data leaves the browser
              yet.
            </p>
          </form>
        )}
      </section>
    </>
  )
}
