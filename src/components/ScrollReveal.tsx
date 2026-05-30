import { useEffect, useRef, useState, type ReactNode } from 'react'

type Direction = 'up' | 'left' | 'right' | 'none'

interface ScrollRevealProps {
  children: ReactNode
  direction?: Direction
  delay?: number
  className?: string
  threshold?: number
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  const directionClass = `reveal-${direction}`

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${directionClass}${isVisible ? ' visible' : ''}${className ? ` ${className}` : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
