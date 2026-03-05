'use client'

import Breadcrumbs from '@/components/Breadcrumbs'
import OnThisPage from '@/components/OnThisPage'
import { Card, CardContent } from '@/components/ui/card'

const sections = [
  { id: 'overview', label: 'Project Overview' },
  { id: 'team', label: 'Our Team' },
  { id: 'approach', label: 'Community-Centered Approach' },
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
            <h1 className="mb-3">
              EMPOWER-ALL: Environmental-Health, Electrification, Microgrids, and Power-saving Efficiency for Resilience-ALL
            </h1>
          </div>
        </div>
      </section>

      <div className="container max-w-7xl px-6 py-8 md:py-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
          {/* Main Content */}
          <div className="xl:col-span-8 space-y-8">
            {/* Project Overview */}
            <section id="overview" className="scroll-mt-24">
              <div className="section-card">
                <div className="section-eyebrow mb-3">About</div>
                <h2 className="mb-6">Project Overview</h2>
                <p className="text-lg leading-7">
                  The Wellcome Project is a community-centered research initiative that aims to improve health, energy resilience, and living conditions in low- and moderate-income communities. We work with local partners to advance home electrification, weatherization, clean energy microgrids, and indoor air quality, while generating evidence to inform policy and support equitable energy transitions.
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

            {/* Community-Centered Approach */}
            <section id="approach" className="scroll-mt-24">
              <div className="section-card">
                <div className="section-eyebrow mb-3">Our Approach</div>
                <h2 className="mb-6">Community-Centered Approach</h2>
                <p className="text-lg leading-7">
                  Our work will grow with, and be responsive to, the communities we serve—meeting local leaders, residents, and organizations where they are, with all the challenges, resource gaps, and pressing needs they face. We will explore the barriers to, and enablers of, clean energy adoption across households and neighborhoods, creating spaces for listening, dialogue, and shared learning that empower communities to shape their own energy future.
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
