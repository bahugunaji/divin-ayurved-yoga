import { useEffect, useRef } from 'react'

type Props = {
  client?: string
  slot?: string
  layout?: string
  format?: string
  responsive?: boolean
  className?: string
}

export default function AdUnit({
  client = 'ca-pub-0000000000000000',
  slot = '0000000000',
  layout = '',
  format = 'auto',
  responsive = true,
  className,
}: Props) {
  const ref = useRef<HTMLModElement | null>(null)

  useEffect(() => {
    try {
      // @ts-expect-error Adsense global
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch {}
  }, [])

  return (
    <div className={className}>
      <ins
        ref={ref as any}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-layout={layout}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  )
}


