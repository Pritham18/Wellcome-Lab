'use client'

import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcrumbs'
import OnThisPage from '@/components/OnThisPage'
import { Card, CardContent } from '@/components/ui/card'

const sections = [
  { id: 'mission', label: 'Mission' },
  { id: 'approach', label: 'Approach' },
  { id: 'team', label: 'Our Team' },
  { id: 'partners', label: 'Our Partners' },
]

export default function AboutPage() {
  return (
    <div style={{ background: 'var(--bg)' }}>
      <Breadcrumbs items={[{ label: 'About' }]} />

      {/* Page Hero - Full-width image with text overlay */}
      <section 
        className="relative w-full min-h-[350px] md:min-h-[420px] lg:min-h-[480px] flex items-center overflow-hidden"
        aria-label="About page hero section"
      >
        {/* Full-width Background Image */}
        <Image
          src="/clemson-campus-hero.png"
          alt="Clemson University campus aerial view"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        
        {/* Gradient overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(11, 95, 165, 0.75) 0%, rgba(11, 95, 165, 0.55) 25%, rgba(11, 95, 165, 0.25) 45%, transparent 65%)'
          }}
        />
        
        {/* Hero Text Content - Left aligned */}
        <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 py-12 md:py-16 lg:py-20">
          <div style={{ maxWidth: '680px' }}>
            {/* Orange accent line */}
            <div 
              className="mb-5"
              style={{ 
                width: '48px', 
                height: '4px', 
                background: '#F56600',
                borderRadius: '2px',
              }}
            />
            
            {/* Eyebrow */}
            <div 
              className="text-sm font-semibold uppercase tracking-wider mb-3"
              style={{ color: 'rgba(255,255,255,0.85)' }}
            >
              About the Initiative
            </div>
            
            {/* Main Heading */}
            <h1 
              className="font-extrabold tracking-tight mb-3"
              style={{
                fontSize: 'clamp(32px, 4.5vw, 50px)',
                lineHeight: '1.1',
                color: '#ffffff',
                letterSpacing: '-0.025em',
                textShadow: '0 2px 8px rgba(0,0,0,0.15), 0 0 30px rgba(255,255,255,0.1)',
              }}
            >
              Empower Health
            </h1>
            
            {/* Subtitle */}
            <p 
              className="font-semibold"
              style={{
                fontSize: 'clamp(16px, 2vw, 22px)',
                lineHeight: '1.35',
                color: '#ffffff',
                textShadow: '0 1px 4px rgba(0,0,0,0.2)',
                maxWidth: '620px',
              }}
            >
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
                  Empower Health is a community-centered research initiative dedicated to advancing health, resilience, and energy efficiency in low- and moderate-income communities. The project produces actionable evidence designed to inform policy decisions and support an equitable transition to clean energy.
                </p>
                <p className="text-base leading-7" style={{ color: 'var(--text)' }}>
                  Our research examines how weatherization, building electrification, and community microgrids affect household energy burdens, environmental health outcomes, and resilience to extreme weather events.
                </p>
              </div>
            </section>

            {/* Research Approach */}
            <section id="approach" className="scroll-mt-24">
              <div className="section-card">
                <h2 className="mb-6">Approach</h2>
                <p className="text-base leading-7" style={{ color: 'var(--text)' }}>
                  Empower Health uses community-centered and mixed-methods research approaches to design and evaluate energy interventions that improve health and resilience outcomes. The initiative combines community co-design, interdisciplinary research, and program evaluation to assess the impacts of weatherization, electrification, microgrids, and indoor environmental quality improvements. Findings are translated into evidence-based insights that inform policy and support equitable energy transitions.
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
