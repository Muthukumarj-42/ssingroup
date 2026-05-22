'use client'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 62, label: 'Diversified Businesses', suffix: '' },
  { value: 3, label: 'Continents of Operation', suffix: '' },
  { value: 25, label: 'Years of Built Trust', suffix: '+' },
]

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let start = 0
          const duration = 1800
          const step = 16
          const increment = target / (duration / step)
          const timer = setInterval(() => {
            start += increment
            if (start >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, step)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function StatsSection() {
  return (
    <section aria-label="Key statistics" style={{ backgroundColor: '#0A1628', padding: '6rem 0' }}>
      <div className="container-content">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0' }}>
          {stats.map((stat, i) => (
            <div key={i}
              style={{ textAlign: 'center', padding: '2rem', borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.12)' : 'none' }}>
              <div style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700, fontSize: 'clamp(3rem,6vw,4rem)', color: '#ffffff', lineHeight: 1, marginBottom: '0.75rem' }}>
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              </div>
              <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C9922B' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.stats-grid{grid-template-columns:1fr !important}}`}</style>
    </section>
  )
}
