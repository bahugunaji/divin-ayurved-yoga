import { type ImgHTMLAttributes, useState } from 'react'

type Props = ImgHTMLAttributes<HTMLImageElement> & { ratio?: string }

export default function ImageWithShimmer({ ratio = '16/10', className, ...imgProps }: Props) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className={`relative w-full ${className || ''}`.trim()}>
      <div className={`block w-full rounded-2xl overflow-hidden`}>
        <div className={`w-full`} style={{ aspectRatio: ratio }}>
          {!loaded && <div className="shimmer w-full h-full" />}
          <img {...imgProps} className={`w-full h-full object-cover ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`} onLoad={() => setLoaded(true)} />
        </div>
      </div>
    </div>
  )
}


