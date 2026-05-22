'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
  duration?: number
  style?: React.CSSProperties
}

export default function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className,
  duration = 0.6,
  style,
}: FadeInProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const getInitial = () => {
    switch (direction) {
      case 'up': return { opacity: 0, y: 30, x: 0 }
      case 'down': return { opacity: 0, y: -30, x: 0 }
      case 'left': return { opacity: 0, y: 0, x: 30 }
      case 'right': return { opacity: 0, y: 0, x: -30 }
      case 'none': return { opacity: 0, y: 0, x: 0 }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : getInitial()}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}
