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
        style={{ borderLeft: '4px solid var(--accent)', backgroundColor: '#E6F1F4' }}
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
                style={{ color: '#1a365d' }}
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
      <section 
        className="py-6 md:py-8"
        style={{ background: 'white', borderBottom: '1px solid rgba(12, 35, 64, 0.1)' }}
      >
        <div className="mx-auto px-4 md:px-6" style={{ maxWidth: '1400px' }}>
          <p className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: '#F56600' }}>Research</p>
          <h1 
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: '#0c2340' }}
          >
            Research Thrusts
          </h1>
          <p 
            className="text-base leading-relaxed"
            style={{ color: '#4a5568', maxWidth: '72ch' }}
          >
            Six integrated research directions advancing equitable clean energy transitions and measurable health benefits. Select a thrust to explore our approach in detail.
          </p>
        </div>
      </section>

      <div className="mx-auto px-4 md:px-6 py-8 md:py-10" style={{ maxWidth: '1120px' }}>
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
