import Breadcrumbs from '@/components/Breadcrumbs'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ResearchPage() {
  return (
    <div style={{ background: 'var(--bg)' }}>
      <Breadcrumbs items={[{ label: 'Research' }]} />
      
      {/* Page Hero */}
      <section className="border-b" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
        <div className="container max-w-7xl px-6 py-6 md:py-10">
          <div className="max-w-4xl">
            <div className="section-eyebrow mb-2">Research</div>
            <h1 className="mb-3">Research</h1>
            <p className="text-lg leading-7" style={{ color: 'var(--muted)' }}>
              Explore our research initiatives, study areas, and available resources
            </p>
          </div>
        </div>
      </section>

      <div className="container max-w-7xl px-6 py-8 md:py-10">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="section-card mb-8">
            <p className="text-lg leading-7">
              Our research focuses on advancing equitable clean energy transitions through community-centered approaches. We investigate the intersections of energy systems, public health, and social equity to develop evidence-based solutions that serve low- and moderate-income communities.
            </p>
          </div>

          {/* Research Areas */}
          <div className="space-y-6">
            {/* Study Areas Card */}
            <Card className="section-card hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="section-eyebrow mb-3">Study Areas</div>
                <h2 className="mb-4">Research Study Areas</h2>
                <p className="leading-7 mb-6" style={{ color: 'var(--muted)' }}>
                  Explore the geographic regions and communities where we conduct our research. Our study areas are selected based on energy burden, health disparities, and opportunities for equitable clean energy deployment.
                </p>
                <Button 
                  asChild
                  className="rounded-xl"
                  style={{ 
                    background: 'var(--brand)',
                    color: 'white'
                  }}
                >
                  <Link href="/research/study-areas">Explore Study Areas →</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Research Thrusts Card */}
            <Card className="section-card hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="section-eyebrow mb-3">Research Thrusts</div>
                <h2 className="mb-4">Research Thrusts</h2>
                <p className="leading-7 mb-6" style={{ color: 'var(--muted)' }}>
                  Learn about our primary research directions, including home electrification, weatherization, community microgrids, indoor air quality, and health outcomes assessment.
                </p>
                <Button 
                  asChild
                  className="rounded-xl"
                  style={{ 
                    background: 'var(--brand)',
                    color: 'white'
                  }}
                >
                  <Link href="/research/thrusts">View Research Thrusts →</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Resources Card */}
            <Card className="section-card hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="section-eyebrow mb-3">Resources</div>
                <h2 className="mb-4">Resources</h2>
                <p className="leading-7 mb-6" style={{ color: 'var(--muted)' }}>
                  Access our publications, tools, datasets, and other research materials. We are committed to sharing knowledge and supporting practitioners, policymakers, and communities.
                </p>
                <Button 
                  asChild
                  className="rounded-xl"
                  style={{ 
                    background: 'var(--brand)',
                    color: 'white'
                  }}
                >
                  <Link href="/research/resources">Access Resources →</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
