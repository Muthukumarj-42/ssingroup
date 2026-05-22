import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary' | 'secondary-white' | 'gold'

interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  fullWidth?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  fullWidth = false,
}: ButtonProps) {
  const variantClass = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    'secondary-white': 'btn-secondary-white',
    gold: 'btn-gold',
  }[variant]

  const style = fullWidth ? { width: '100%', justifyContent: 'center' } : {}

  if (href) {
    return (
      <Link href={href} className={`${variantClass} ${className}`} style={style}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${variantClass} ${className}`}
      style={{ ...style, opacity: disabled ? 0.6 : 1, cursor: disabled ? 'not-allowed' : 'pointer' }}
    >
      {children}
    </button>
  )
}
