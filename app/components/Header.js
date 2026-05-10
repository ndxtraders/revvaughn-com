import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-rule bg-paper">
      <div className="max-w-wide mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg tracking-tight hover:text-accent transition-colors">
          Rev Vaughn
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-small">
          <Link href="/ai-priority-map" className="text-ink-muted hover:text-ink transition-colors">
            AI Priority Map
          </Link>
          <Link href="/#programs" className="text-ink-muted hover:text-ink transition-colors">
            Programs
          </Link>
          <Link href="/ai-inner-circle" className="text-ink-muted hover:text-ink transition-colors">
            AI Inner Circle
          </Link>
          <Link href="/#about" className="text-ink-muted hover:text-ink transition-colors">
            About
          </Link>
          <Link
            href="/resources"
            className="text-ink-muted hover:text-ink transition-colors"
          >
            Resources
          </Link>
          <Link
            href="/contact"
            className="text-ink hover:text-accent transition-colors font-medium"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
