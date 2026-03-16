import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b" style={{ borderColor: 'var(--border)' }}>
      <div className="container max-w-7xl px-6 py-4">
        <ol className="flex items-center space-x-2 text-sm" style={{ color: 'var(--muted)' }}>
          <li>
            <Link 
              href="/" 
              className="transition-colors hover:text-[var(--brand)]"
              style={{ color: 'var(--muted)' }}
            >
              About
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <ChevronRight className="h-4 w-4" />
              {item.href ? (
                <Link 
                  href={item.href} 
                  className="transition-colors hover:text-[var(--brand)]"
                  style={{ color: 'var(--muted)' }}
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium" style={{ color: 'var(--text)' }}>{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
