import { useEffect, useState } from 'react'
import QRCode from 'qrcode'
import { MosaicLogo } from '../components/MosaicLogo'

const BUSINESS_CARD_URL = 'https://hellomosaic.ai/businesscard'
const SITE_URL = 'https://hellomosaic.ai/'
const CONTACT_EMAIL = 'hello@hellomosaic.ai'

const PILLARS = [
  {
    title: 'Empathy',
    body: 'We know this region — Coeur d’Alene, Spokane, and the communities between — so the work starts with people, not personas.',
  },
  {
    title: 'Awareness',
    body: 'We put local brands in front of the right neighbors at the right moment, across a market of more than 700,000.',
  },
  {
    title: 'Conversion',
    body: 'Awareness only matters when it turns into action — visits, calls, and customers who come back.',
  },
] as const

const PROOF = [
  { value: '+$200M', label: 'Managed in ad spend' },
  { value: '10 years', label: 'Of hands-on experience' },
  { value: 'Local + enterprise', label: 'Built for both scales' },
] as const

export function OneSheet() {
  const [qrSvg, setQrSvg] = useState('')

  useEffect(() => {
    const previous = document.title
    document.title = 'MOSAIC AI · One Sheet'

    void QRCode.toString(BUSINESS_CARD_URL, {
      type: 'svg',
      margin: 1,
      errorCorrectionLevel: 'M',
      color: {
        dark: '#0d0d0d',
        light: '#ffffff',
      },
    }).then(setQrSvg)

    return () => {
      document.title = previous
    }
  }, [])

  return (
    <section className="os" aria-label="MOSAIC AI one sheet">
      <div className="os__toolbar no-print">
        <p className="os__toolbar-hint">Printable one-sheet · US Letter</p>
        <button type="button" className="os__print" onClick={() => window.print()}>
          Print / Save PDF
        </button>
      </div>

      <article className="os__sheet">
        <header className="os__top">
          <a className="os__logo" href={SITE_URL} aria-label="MOSAIC home">
            <MosaicLogo />
          </a>

          <figure className="os__qr">
            <div
              className="os__qr-mark"
              role="img"
              aria-label="QR code linking to digital business card"
              dangerouslySetInnerHTML={qrSvg ? { __html: qrSvg } : undefined}
            />
            <figcaption>
              <span className="os__qr-label">Scan for card</span>
              <span className="os__qr-url">hellomosaic.ai/businesscard</span>
            </figcaption>
          </figure>
        </header>

        <div className="os__hero">
          <p className="os__eyebrow">For business owners in the Inland Northwest</p>
          <h1 className="os__headline">Marketing and AI systems that give your brand room to grow.</h1>
          <p className="os__lede">
            MOSAIC works with business owners to create campaigns and content systems with AI and
            local artists — quietly, carefully, and with craft. Clarity and consistency, without the
            noise.
          </p>
        </div>

        <ul className="os__pillars">
          {PILLARS.map((pillar) => (
            <li key={pillar.title} className="os__pillar">
              <h2>{pillar.title}</h2>
              <p>{pillar.body}</p>
            </li>
          ))}
        </ul>

        <dl className="os__proof">
          {PROOF.map((item) => (
            <div key={item.label} className="os__proof-item">
              <dt>{item.value}</dt>
              <dd>{item.label}</dd>
            </div>
          ))}
        </dl>

        <footer className="os__cta">
          <div className="os__cta-copy">
            <h2>Ideas no longer have to wait their turn.</h2>
            <p>
              Ready to reshape your future? Start a conversation at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
          </div>
          <a className="os__cta-button" href={`${SITE_URL}#contact`}>
            Get started
          </a>
        </footer>
      </article>
    </section>
  )
}
