import Breadcrumbs from '@/components/Breadcrumbs'
import { Card, CardContent } from '@/components/ui/card'
import { FileText } from 'lucide-react'

export default function PublicationsPage() {
  return (
    <div style={{ background: 'var(--bg)' }}>
      <Breadcrumbs 
        items={[
          { label: 'Research', href: '/research/study-areas' },
          { label: 'Publications' }
        ]} 
      />
      
      {/* Page Hero */}
      <section 
        className="py-6 md:py-8"
        style={{ background: 'white', borderBottom: '1px solid rgba(12, 35, 64, 0.1)' }}
      >
        <div className="mx-auto px-4 md:px-6" style={{ maxWidth: '1400px' }}>
          <h1 
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: '#0c2340' }}
          >
            Our Publications
          </h1>
          <p 
            className="text-base leading-relaxed"
            style={{ color: '#4a5568', maxWidth: '72ch' }}
          >
            Academic publications and research papers from the EMPOWER-ALL project.
          </p>
        </div>
      </section>

      <div className="mx-auto px-4 md:px-6 py-8 md:py-10" style={{ maxWidth: '1120px' }}>
        
        {/* Publications Section */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <FileText className="w-6 h-6" style={{ color: 'var(--accent)' }} />
            <h2 className="text-2xl font-bold" style={{ color: 'var(--text)' }}>Publications</h2>
          </div>
          
          <div className="space-y-4">
            {/* Publication 1 */}
            <Card className="section-card hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ background: 'var(--accent)' }}></span>
                  <div>
                    <h3 className="text-base font-semibold leading-relaxed" style={{ color: 'var(--text)' }}>
                      Public Support for Mobile Community Microgrids: Perceptual, Socioeconomic, and Power Outage Experience Drivers of Energy Infrastructure Resilience
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Publication 2 */}
            <Card className="section-card hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ background: 'var(--accent)' }}></span>
                  <div>
                    <h3 className="text-base font-semibold leading-relaxed" style={{ color: 'var(--text)' }}>
                      Electric Power Reliability, Energy Burdens, and Climate Change Beliefs in the United States
                    </h3>
                    <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>
                      Environmental Science & Technology
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Publication 3 */}
            <Card className="section-card hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ background: 'var(--accent)' }}></span>
                  <div>
                    <h3 className="text-base font-semibold leading-relaxed" style={{ color: 'var(--text)' }}>
                      The Equity Implications of Pecuniary Externalities on an Electric Grid
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Publication 4 */}
            <Card className="section-card hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ background: 'var(--accent)' }}></span>
                  <div>
                    <h3 className="text-base font-semibold leading-relaxed" style={{ color: 'var(--text)' }}>
                      Health Co-Benefits and Low-Income Residential Weatherization in the United States
                    </h3>
                    <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>
                      Report
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
