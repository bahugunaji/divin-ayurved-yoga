import { PropsWithChildren, useEffect, useRef, useState } from 'react'

type AnimatedSectionProps = PropsWithChildren<{ className?: string }>

export default function AnimatedSection({ children, className }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`fade-in-up ${visible ? 'is-visible' : ''} ${className || ''}`.trim()}>
      {children}
    </div>
  )
}


