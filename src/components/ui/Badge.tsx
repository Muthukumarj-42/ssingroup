interface BadgeProps {
  children: React.ReactNode
  variant?: 'gold' | 'navy' | 'green' | 'amber' | 'red' | 'blue'
  size?: 'sm' | 'md'
  className?: string
}

const variantStyles = {
  gold: { backgroundColor: 'rgba(201,146,43,0.12)', color: '#C9922B', border: '1px solid rgba(201,146,43,0.3)' },
  navy: { backgroundColor: '#0A1628', color: '#ffffff', border: '1px solid #0A1628' },
  green: { backgroundColor: 'rgba(34,197,94,0.1)', color: '#16a34a', border: '1px solid rgba(34,197,94,0.3)' },
  amber: { backgroundColor: 'rgba(245,158,11,0.1)', color: '#d97706', border: '1px solid rgba(245,158,11,0.3)' },
  red: { backgroundColor: 'rgba(239,68,68,0.1)', color: '#dc2626', border: '1px solid rgba(239,68,68,0.3)' },
  blue: { backgroundColor: 'rgba(59,130,246,0.1)', color: '#2563eb', border: '1px solid rgba(59,130,246,0.3)' },
}

export default function Badge({ children, variant = 'gold', size = 'md', className }: BadgeProps) {
  const styles = variantStyles[variant]
  return (
    <span
      className={className}
      style={{
        ...styles,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.25rem',
        padding: size === 'sm' ? '0.2rem 0.6rem' : '0.3rem 0.75rem',
        borderRadius: '100px',
        fontFamily: 'var(--font-montserrat)',
        fontWeight: 700,
        fontSize: size === 'sm' ? '0.625rem' : '0.6875rem',
        letterSpacing: '0.07em',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </span>
  )
}
