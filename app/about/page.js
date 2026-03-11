'use client'

import Breadcrumbs from '@/components/Breadcrumbs'
import OnThisPage from '@/components/OnThisPage'
import { Card, CardContent } from '@/components/ui/card'

const sections = [
  { id: 'mission', label: 'Mission' },
  { id: 'methodology', label: 'Methodology' },
  { id: 'team', label: 'Our Team' },
  { id: 'partners', label: 'Our Partners' },
]

export default function AboutPage() {
  return (
    <div style={{ background: 'var(--bg)' }}>
      <Breadcrumbs items={[{ label: 'About' }]} />

      {/* Page Hero */}
      <section className="border-b" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
        <div className="container max-w-7xl px-6 py-6 md:py-10">
          <div className="max-w-4xl">
            <div className="section-eyebrow mb-2">About the Initiative</div>
            <h1 className="mb-3" style={{ fontSize: '2.5rem', lineHeight: '1.2' }}>
              EMPOWER-ALL
            </h1>
            <p className="text-lg leading-7" style={{ color: 'var(--muted)' }}>
              Environmental-Health, Electrification, Microgrids, and Power-saving Efficiency for Resilience-ALL
            </p>
          </div>
        </div>
      </section>

      <div className="container max-w-7xl px-6 py-8 md:py-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
          {/* Main Content */}
          <div className="xl:col-span-8 space-y-8">
            {/* Research Mission */}
            <section id="mission" className="scroll-mt-24">
              <div className="section-card">
                <h2 className="mb-6">Mission</h2>
                <p className="text-base leading-7 mb-4" style={{ color: 'var(--text)' }}>
                  EMPOWER-HEALTH is a community-centered research initiative advancing environmental health, energy resilience, and energy affordability in low- and moderate-income communities. The initiative integrates interdisciplinary research in weatherization, building electrification, and community microgrids to understand how energy systems influence household health outcomes, energy burdens, and climate resilience.
                </p>
                <p className="text-base leading-7" style={{ color: 'var(--text)' }}>
                  Through collaborative partnerships with communities, local governments, utilities, and public health researchers, the project generates actionable evidence that informs policy and supports equitable energy transitions.
                </p>
              </div>
            </section>

            {/* Research Methodology */}
            <section id="methodology" className="scroll-mt-24">
              <div className="section-card">
                <h2 className="mb-6">Methodology</h2>
                <p className="text-base leading-7 mb-4" style={{ color: 'var(--text)' }}>
                  EMPOWER-HEALTH employs interdisciplinary and mixed-methods research approaches to evaluate the impacts of energy interventions on health, resilience, and energy affordability. Our work integrates community co-design, program evaluation, environmental health assessment, and policy analysis.
                </p>
                <p className="text-base leading-7" style={{ color: 'var(--text)' }}>
                  Through partnerships with residents, utilities, and policymakers, we assess the effectiveness of weatherization programs, building electrification, and community-scale microgrids. Findings are translated into evidence-based policy recommendations that support resilient, equitable energy systems and healthier indoor environments.
                </p>
              </div>
            </section>

            {/* Our Team */}
            <section id="team" className="scroll-mt-24">
              <div className="section-card">
                <div className="section-eyebrow mb-3">People</div>
                <h2 className="mb-6">Our Team</h2>
                <p className="text-lg leading-7">
                  Our transdisciplinary team brings together expertise from public health, engineering, social sciences, and community practice. We will draw on our collective knowledge, tools, and creativity to strengthen local capacity, build trust, and foster confidence in practical, community-led approaches to clean energy and climate resilience.
                </p>
              </div>
            </section>

            {/* Our Partners */}
            <section id="partners" className="scroll-mt-24">
              <div className="section-card">
                <div className="section-eyebrow mb-3">Collaboration</div>
                <h2 className="mb-6">Our Partners</h2>
                <p className="mb-8" style={{ color: 'var(--muted)' }}>
                  We collaborate with leading institutions, community organizations, and local governments to advance our mission.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="rounded-xl p-6 border transition-shadow hover:shadow-md"
                      style={{
                        background: 'var(--surface)',
                        borderColor: 'var(--border)'
                      }}
                    >
                      <div className="flex items-center justify-center h-20">
                        <div className="text-center text-sm font-medium" style={{ color: 'var(--muted)' }}>
                          Partner {i}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Funding & Update */}
            <div
              className="rounded-xl p-6 border"
              style={{
                background: 'var(--surface)',
                borderColor: 'var(--border)'
              }}
            >
              <p className="text-sm mb-3" style={{ color: 'var(--muted)' }}>
                <span className="font-semibold" style={{ color: 'var(--text)' }}>Updated:</span> 01.24.2026
              </p>
              <div className="h-px mb-3" style={{ background: 'var(--border)' }} />
              <p className="text-sm leading-7" style={{ color: 'var(--muted)' }}>
                <span className="font-semibold" style={{ color: 'var(--text)' }}>Funding Acknowledgement:</span> This project is funded by the Wellcome Trust under Advancing Climate Mitigation Policy Solutions with Health Co-benefits in G7 Countries (Project No 227151/Z/23/Z).
              </p>
            </div>
          </div>

          {/* Sidebar - On This Page */}
          <div className="hidden xl:block xl:col-span-4">
            <OnThisPage sections={sections} />
          </div>
        </div>
      </div>
    </div>
  )
}
