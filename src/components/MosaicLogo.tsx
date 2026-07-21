export function MosaicLogo({ className = '' }: { className?: string }) {
  return (
    <span className={`mosaic-logo ${className}`.trim()} aria-hidden="true">
      <svg
        className="mosaic-barcode"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 168 30"
        fill="currentColor"
        preserveAspectRatio="none"
      >
        <rect x="0" y="0" width="3" height="30" />
        <rect x="6" y="0" width="2" height="30" />
        <rect x="11" y="0" width="5" height="30" />
        <rect x="19" y="0" width="2" height="30" />
        <rect x="24" y="0" width="3" height="30" />
        <rect x="30" y="0" width="2" height="30" />
        <rect x="35" y="0" width="6" height="30" />
        <rect x="44" y="0" width="2" height="30" />
        <rect x="49" y="0" width="3" height="30" />
        <rect x="55" y="0" width="2" height="30" />
        <rect x="60" y="0" width="5" height="30" />
        <rect x="68" y="0" width="2" height="30" />
        <rect x="73" y="0" width="3" height="30" />
        <rect x="79" y="0" width="2" height="30" />
        <rect x="84" y="0" width="6" height="30" />
        <rect x="93" y="0" width="2" height="30" />
        <rect x="98" y="0" width="3" height="30" />
        <rect x="104" y="0" width="2" height="30" />
        <rect x="109" y="0" width="5" height="30" />
        <rect x="117" y="0" width="2" height="30" />
        <rect x="122" y="0" width="3" height="30" />
        <rect x="128" y="0" width="2" height="30" />
        <rect x="133" y="0" width="6" height="30" />
        <rect x="142" y="0" width="2" height="30" />
        <rect x="147" y="0" width="3" height="30" />
        <rect x="153" y="0" width="2" height="30" />
        <rect x="158" y="0" width="5" height="30" />
        <rect x="165" y="0" width="3" height="30" />
      </svg>
      <span className="mosaic-wordmark">
        <span>M</span>
        <span>O</span>
        <span>S</span>
        <span>A</span>
        <span>I</span>
        <span>C</span>
      </span>
    </span>
  )
}
