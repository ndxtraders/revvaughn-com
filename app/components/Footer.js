import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-rule bg-paper-grey">
      <div className="max-w-wide mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-small text-ink-muted">
        <div>© {year} Rev Vaughn. All rights reserved.</div>
        <div className="flex items-center gap-6">
          <Link href="/resources" className="hover:text-ink transition-colors">
            Resources
          </Link>
          <Link href="/contact" className="hover:text-ink transition-colors">
            Contact
          </Link>
          <Link href="/privacy-terms" className="hover:text-ink transition-colors">
            Privacy &amp; Terms
          </Link>
        </div>
      </div>
    </footer>
  )
}
