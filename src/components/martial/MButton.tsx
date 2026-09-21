import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

interface MButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'pill'
  fullWidth?: boolean
  to?: string
  href?: string
}

export function MButton({
  variant = 'primary',
  fullWidth,
  to,
  href,
  className,
  children,
  ...props
}: MButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center font-display font-extrabold uppercase text-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mf-accent focus-visible:ring-offset-2 focus-visible:ring-offset-mf-bg',
    variant === 'primary' &&
      'bg-mf-accent text-white hover:bg-mf-accent-hover rounded-[10px] px-6 py-4 text-base',
    variant === 'outline' &&
      'border border-white text-white hover:bg-white hover:text-mf-bg rounded-[10px] px-6 py-4 text-base',
    variant === 'pill' &&
      'bg-mf-accent text-white hover:bg-mf-accent-hover rounded-[12px] px-5 py-2.5 text-sm',
    fullWidth && 'w-full',
    className,
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
