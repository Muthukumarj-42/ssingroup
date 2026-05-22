interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  light?: boolean
}

export default function SectionLabel({ children, className, light = false }: SectionLabelProps) {
  return (
    <span
      className={`section-label ${className || ''}`}
      style={light ? { color: 'rgba(201,146,43,0.9)' } : {}}
    >
      {children}
    </span>
  )
}
