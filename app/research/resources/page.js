import Breadcrumbs from '@/components/Breadcrumbs'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, ExternalLink, Users } from 'lucide-react'

export default function ResourcesPage() {
  return (
    <div style={{ background: 'var(--bg)' }}>
      <Breadcrumbs 
        items={[
          { label: 'Research', href: '/research' },
          { label: 'Resources' }
        ]} 
      />
      
      {/* Page Hero */}
      <section className="border-b" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
        <div className="container max-w-7xl px-6 py-10 md:py-16">
          <div className="max-w-5xl">
            <div className="section-eyebrow mb-3">Research</div>
            <h1 className="mb-4">Resources</h1>
            <p className="text-lg leading-7" style={{ color: 'var(--muted)' }}>
              Publications, tools, and research materials
            </p>
          </div>
        </div>
      </section>

      <div className="container max-w-7xl px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Section 1: Our Publications */}
          <section>
            <h2 className="mb-8">Our Publications</h2>
            <div className="space-y-6">
              {/* Publication: Impact of Weatherization on Unhealthy Indoor Temperature and Humidity */}
              <Card className="section-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <FileText className="h-6 w-6" style={{ color: 'var(--brand)' }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 leading-tight">
                        The Impact of Weatherization on Unhealthy Indoor Temperature and Humidity
                      </h3>
                      <p className="text-sm mb-1" style={{ color: 'var(--muted)' }}>
                        <Users className="h-3.5 w-3.5 inline-block mr-1.5 -mt-0.5" />
                        Michaela Marincic, Bruce Tonn, Erin Rose
                      </p>
                      <p className="text-sm mb-3" style={{ color: 'var(--muted)' }}>
                        2026 ACEEE Summer Study on Energy Efficiency in Buildings
                      </p>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="rounded-lg"
                        style={{ borderColor: 'var(--border)', color: 'var(--brand)' }}
                      >
                        <a
                          href="/publications/impact-of-weatherization-on-indoor-temperature-and-humidity-2026.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          View PDF
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Publication: Reductions in Medicaid Spending Associated with Income-Eligible Home Weatherization */}
              <Card className="section-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <FileText className="h-6 w-6" style={{ color: 'var(--brand)' }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 leading-tight">
                        Reductions in Medicaid Spending Associated with Income-Eligible Home Weatherization in the Southeastern U.S.
                      </h3>
                      <p className="text-sm mb-1" style={{ color: 'var(--muted)' }}>
                        <Users className="h-3.5 w-3.5 inline-block mr-1.5 -mt-0.5" />
                        Michaela Marincic, Erin Rose, Bruce Tonn, Palash Arora
                      </p>
                      <p className="text-sm mb-3" style={{ color: 'var(--muted)' }}>
                        2026 ACEEE Summer Study on Energy Efficiency in Buildings
                      </p>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="rounded-lg"
                        style={{ borderColor: 'var(--border)', color: 'var(--brand)' }}
                      >
                        <a
                          href="/publications/reductions-in-medicaid-spending-income-eligible-weatherization-southeastern-us-2026.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          View PDF
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Publication 1 */}
              <Card className="section-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <FileText className="h-6 w-6" style={{ color: 'var(--brand)' }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 leading-tight">
                        Public Support for Mobile Community Microgrids: Perceptual, Socioeconomic, and Power Outage Experience Drivers of Energy Infrastructure Resilience
                      </h3>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Publication 2 */}
              <Card className="section-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <FileText className="h-6 w-6" style={{ color: 'var(--brand)' }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 leading-tight">
                        Electric Power Reliability, Energy Burdens, and Climate Change Beliefs in the United States
                      </h3>
                      <p className="text-sm" style={{ color: 'var(--muted)' }}>
                        Environmental Science & Technology
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Publication 3 */}
              <Card className="section-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <FileText className="h-6 w-6" style={{ color: 'var(--brand)' }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 leading-tight">
                        The equity implications of pecuniary externalities on an electric grid
                      </h3>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Publication 4 */}
              <Card className="section-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <FileText className="h-6 w-6" style={{ color: 'var(--brand)' }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 leading-tight">
                        Health Co-Benefits and Low-Income Residential Weatherization in the United States
                      </h3>
                      <p className="text-sm" style={{ color: 'var(--muted)' }}>
                        Report
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 2: Data Tools */}
          <section>
            <h2 className="mb-8">Data Tools</h2>
            <div className="space-y-6">
              {/* Tool 1: CDC EJI Explorer */}
              <Card className="section-card hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl font-semibold flex-1">
                      CDC Environmental Justice Index (EJI) Explorer
                    </h3>
                    <Button 
                      asChild
                      variant="outline" 
                      size="sm"
                      className="rounded-lg flex-shrink-0"
                      style={{ 
                        borderColor: 'var(--border)',
                        color: 'var(--brand)'
                      }}
                    >
                      <a 
                        href="https://www.atsdr.cdc.gov/place-health/php/eji/eji-explorer.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        Visit Tool
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  <p className="leading-7" style={{ color: 'var(--muted)' }}>
                    An interactive mapping and analytics platform provided by the U.S. Centers for Disease Control and Prevention that visualizes environmental justice indicators at the community level. Users can explore socioeconomic, health, and environmental data to identify vulnerable populations and environmental burdens across geographic areas.
                  </p>
                </CardContent>
              </Card>

              {/* Tool 2: DOE LEAD */}
              <Card className="section-card hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl font-semibold flex-1">
                      U.S. Department of Energy LEAD (Local Energy Action Dashboard)
                    </h3>
                    <Button 
                      asChild
                      variant="outline" 
                      size="sm"
                      className="rounded-lg flex-shrink-0"
                      style={{ 
                        borderColor: 'var(--border)',
                        color: 'var(--brand)'
                      }}
                    >
                      <a 
                        href="https://www.energy.gov/scep/slsc/lead-tool"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        Visit Tool
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  <p className="leading-7" style={{ color: 'var(--muted)' }}>
                    The Local Energy Action Dashboard (LEAD) integrates energy-related data (including consumption, grid characteristics, and emissions) with demographic and socioeconomic information. It supports local planning and decision-making by enabling comparison of energy system metrics across regions.
                  </p>
                </CardContent>
              </Card>

              {/* Tool 3: SC Office SSRRRP */}
              <Card className="section-card hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl font-semibold flex-1">
                      Resilience Plan Updates and Progress (SCOR)
                    </h3>
                    <Button 
                      asChild
                      variant="outline" 
                      size="sm"
                      className="rounded-lg flex-shrink-0"
                      style={{ 
                        borderColor: 'var(--border)',
                        color: 'var(--brand)'
                      }}
                    >
                      <a 
                        href="https://scor.sc.gov/SSRRRP/Progress"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        Visit Tool
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  <p className="leading-7" style={{ color: 'var(--muted)' }}>
                    A state-level public resource showing progress, reports, and data visualizations from the South Carolina State Energy Office's SSRRRP initiative. This tool helps users track regulatory, resilience, and energy reliability efforts, including metrics relevant to community energy planning.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
