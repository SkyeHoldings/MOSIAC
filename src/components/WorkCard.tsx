import { Link } from 'react-router-dom'
import type { CaseStudy } from '../data/work'
import { PhoneCollage } from './PhoneCollage'

type Props = {
  study: CaseStudy
}

export function WorkCard({ study }: Props) {
  const hasCollage = Boolean(study.tileCollage?.length)
  const hasImage = Boolean(study.tileImage)

  return (
    <Link
      to={`/work/${study.id}`}
      className={`work-card${study.wide ? ' is-wide' : ''}`}
    >
      <div
        className={[
          'work-card__media',
          hasCollage ? 'has-collage' : '',
          hasImage && !hasCollage ? 'has-image' : '',
        ]
          .filter(Boolean)
          .join(' ')}
        style={
          hasCollage || hasImage
            ? undefined
            : { ['--tile-bg' as string]: study.tileBg }
        }
        aria-hidden="true"
      >
        {hasCollage ? (
          <PhoneCollage images={study.tileCollage!} />
        ) : hasImage ? (
          <img
            className="work-card__image"
            src={study.tileImage}
            alt=""
            loading="lazy"
          />
        ) : null}
      </div>
      <div className="work-card__caption">
        <div className="work-card__client">{study.client}</div>
        <h2 className="work-card__title">{study.title}</h2>
      </div>
    </Link>
  )
}
