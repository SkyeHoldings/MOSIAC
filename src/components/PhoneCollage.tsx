type Props = {
  images: string[]
}

/** AKQA-style overlapping phone mockups on a black field */
export function PhoneCollage({ images }: Props) {
  return (
    <div className="phone-collage">
      {images.map((src, index) => (
        <div
          key={`${src}-${index}`}
          className={`phone-collage__phone phone-collage__phone--${index + 1}`}
        >
          <img src={src} alt="" loading="lazy" />
        </div>
      ))}
    </div>
  )
}
