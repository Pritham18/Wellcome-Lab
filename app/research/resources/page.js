import Breadcrumbs from '@/components/Breadcrumbs'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, ExternalLink, Download } from 'lucide-react'

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
              {/* Publication — New 2026 */}
              <Card className="section-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <FileText className="h-6 w-6" style={{ color: 'var(--brand)' }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 leading-tight">
                        Mapping climate-conditioned PM2.5 response under climate change in Taiwan using a high-resolution Geo-AI model
                      </h3>
                      <p className="text-sm mb-1" style={{ color: 'var(--muted)' }}>
                        Journal of Environmental Management · 2026
                      </p>
                      <a href="/publications/pm25-geoai-taiwan-2026.pdf" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline" style={{ color: 'var(--brand)' }}>
                        Download PDF →
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Publication — New 2026 */}
              <Card className="section-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <FileText className="h-6 w-6" style={{ color: 'var(--brand)' }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 leading-tight">
                        A utility-level analysis of residential electricity use: Governance, pricing, and incentive programs in the Southeastern U.S.
                      </h3>
                      <p className="text-sm mb-1" style={{ color: 'var(--muted)' }}>
                        Energy Policy · 2026
                      </p>
                      <a href="/publications/utility-level-residential-electricity-use-2026.pdf" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline" style={{ color: 'var(--brand)' }}>
                        Download PDF →
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Publication 1 — existing */}
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

          {/* Section 3: Project Resources */}
          <section>
            <h2 className="mb-8">Project Resources</h2>

            {/* Category: Energy & Housing */}
            <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text)' }}>
              Energy &amp; Housing
            </h3>
            <div className="space-y-6 mb-10">
              <Card className="section-card hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <FileText className="h-6 w-6" style={{ color: 'var(--brand)' }} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2 leading-tight">
                        TVA Home Uplift Metro Areas Final Report on Non-Energy Impacts (2022)
                      </h4>
                      <p className="text-sm mb-3 leading-relaxed" style={{ color: 'var(--muted)' }}>
                        Final report evaluating non-energy impacts of the TVA Home Uplift weatherization pilot, including energy affordability, indoor environmental quality, household well-being, and health-related outcomes.
                      </p>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="rounded-lg"
                        style={{ borderColor: 'var(--border)', color: 'var(--brand)' }}
                      >
                        <a
                          href="/publications/tva-home-uplift-nei-final-report-2022.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          Download PDF
                          <Download className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Category: Public Health Data & Longitudinal Surveys */}
            <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text)' }}>
              Public Health Data &amp; Longitudinal Surveys
            </h3>
            <div className="space-y-6">
              <Card className="section-card hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <FileText className="h-6 w-6" style={{ color: 'var(--brand)' }} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2 leading-tight">
                        TVA Home Uplift Survey for Residents – Round 2 Full Packet
                      </h4>
                      <p className="text-sm mb-3 leading-relaxed" style={{ color: 'var(--muted)' }}>
                        Resident survey packet for evaluating non-energy impacts of the Home Uplift program, including household conditions, indoor temperature, energy security, and health-related survey measures.
                      </p>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="rounded-lg"
                        style={{ borderColor: 'var(--border)', color: 'var(--brand)' }}
                      >
                        <a
                          href="/publications/tva-home-uplift-survey-round-2-packet.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          Download PDF
                          <Download className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 4: Data Tools */}
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
