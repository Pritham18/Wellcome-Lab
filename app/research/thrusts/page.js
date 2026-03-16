import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronRight } from 'lucide-react'
import { thrusts } from '@/lib/thrustsData'

// Thrust Card Component for Index Page
function ThrustCard({ thrust }) {
  return (
    <Link href={`/research/thrusts/${thrust.slug}`} className="block group h-full">
      <Card 
        className="section-card overflow-hidden transition-all duration-200 hover:shadow-lg h-full flex flex-col"
        style={{ borderLeft: '4px solid var(--accent)', backgroundColor: 'var(--surface)' }}
      >
        <CardContent className="p-6 md:p-8 flex flex-col flex-grow">
          <div className="flex items-start justify-between gap-4 flex-grow">
            <div className="flex-1">
              {/* Thrust Number */}
              <div 
                className="text-xs font-bold uppercase tracking-wider mb-2"
                style={{ color: 'var(--accent)' }}
              >
                Thrust {thrust.number}
              </div>
              
              {/* Title */}
              <h2 
                className="text-xl md:text-2xl font-bold mb-3 group-hover:text-[var(--accent)] transition-colors"
                style={{ color: 'var(--text)' }}
              >
                {thrust.title}
              </h2>
              
              {/* Summary */}
              <p 
                className="text-base leading-relaxed"
                style={{ color: 'var(--muted)' }}
              >
                {thrust.summary}
              </p>
            </div>
            
            {/* Arrow */}
            <div className="flex-shrink-0 mt-2">
              <ChevronRight 
                className="w-6 h-6 transition-transform duration-200 group-hover:translate-x-1"
                style={{ color: 'var(--accent)' }}
              />
            </div>
          </div>
          
          {/* Learn More Text */}
          <div className="mt-4 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
            <span 
              className="text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all"
              style={{ color: 'var(--accent)' }}
            >
              Learn More
              <ChevronRight className="w-4 h-4" />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export default function ThrustsPage() {
  return (
    <div style={{ background: 'var(--bg)' }}>
      <Breadcrumbs 
        items={[
          { label: 'Research', href: '/research/study-areas' },
          { label: 'Research Thrusts' }
        ]} 
      />
      
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container max-w-7xl px-6">
          <div className="accent-bar mb-4" />
          <h1 
            className="page-hero-title mb-3"
          >
            Research Thrusts
          </h1>
          <p 
            className="page-hero-description"
          >
            Six integrated research directions advancing equitable clean energy transitions and measurable health benefits. Select a thrust to explore our approach in detail.
          </p>
        </div>
      </section>

      <div className="container max-w-7xl px-6 py-8 md:py-10">
        {/* Thrust Cards - 2-column grid on tablet/desktop, 1-column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {thrusts.map((thrust) => (
            <ThrustCard key={thrust.slug} thrust={thrust} />
          ))}
        </div>
      </div>
    </div>
  )
}
