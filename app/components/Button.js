import Link from 'next/link'

const variants = {
  primary:
    'bg-ink text-paper hover:bg-accent hover:text-paper border border-ink hover:border-accent',
  secondary:
    'bg-paper text-ink border border-ink hover:bg-ink hover:text-paper',
  accent:
    'bg-accent text-paper border border-accent hover:bg-accent-hover hover:border-accent-hover',
  ghost:
    'bg-transparent text-ink hover:text-accent border border-transparent',
}

export default function Button({
  href,
  children,
  variant = 'primary',
  external = false,
  className = '',
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center px-6 py-3 text-small font-medium tracking-wide transition-all duration-200 rounded-none'
  const styles = `${base} ${variants[variant]} ${className}`

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={styles} {...rest}>
        {children}
      </a>
    )
  }

  if (href) {
    return (
      <Link href={href} className={styles} {...rest}>
        {children}
      </Link>
    )
  }

  return (
    <button className={styles} {...rest}>
      {children}
    </button>
  )
}
