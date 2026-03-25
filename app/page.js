'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function Home() {
  const [showFullMessage, setShowFullMessage] = useState(false)

  return (
    <div style={{ background: 'var(--bg)' }}>
      {/* Hero Section - Full-width image with left text overlay */}
      <section 
        className="relative w-full min-h-[450px] md:min-h-[520px] lg:min-h-[580px] flex items-center overflow-hidden"
        aria-label="Empower Health hero section"
      >
        {/* Full-width Background Image - bright and natural */}
        <Image
          src="/clemson-campus-hero.png"
          alt="Clemson University campus aerial view"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        
        {/* Localized left-side gradient - Clemson blue to transparent */}
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
            
            {/* Main Heading - H1 */}
            <h1 
              className="font-extrabold tracking-tight mb-3"
              style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                lineHeight: '1.1',
                color: '#ffffff',
                letterSpacing: '-0.025em',
                textShadow: '0 2px 8px rgba(0,0,0,0.15), 0 0 30px rgba(255,255,255,0.1)',
              }}
            >
              Empower Health:
            </h1>
            
            {/* Subheading - Below H1 */}
            <p 
              className="font-semibold"
              style={{
                fontSize: 'clamp(18px, 2.5vw, 28px)',
                lineHeight: '1.35',
                color: '#ffffff',
                textShadow: '0 1px 4px rgba(0,0,0,0.2)',
                maxWidth: '620px',
              }}
            >
              A Community Co-designed Weatherization and Microgrid Plan for Energy Security and Environmental Health
            </p>
          </div>
        </div>
      </section>

      {/* Slogan Banner - Thin ribbon-style bar (below hero) */}
      <section 
        className="w-full"
        style={{
          background: 'rgba(234, 199, 102, 0.38)',
        }}
      >
        <div 
          className="mx-auto px-6 md:px-8 lg:px-10 py-3"
          style={{ 
            maxWidth: '1400px',
            borderLeft: '5px solid #F56600',
          }}
        >
          <p 
            className="text-base md:text-lg font-medium leading-snug"
            style={{
              color: 'var(--text)',
            }}
          >
            Shape the Future of Environmental Health — Through Practice, Policy, and Partnership
          </p>
        </div>
      </section>

      {/* ============================================
          OVERVIEW - Research-Style Engaging Section
          Strong hierarchy, scannable, research-professional
         ============================================ */}
      <section 
        id="overview"
        className="py-8 md:py-10"
        style={{ background: 'var(--bg)' }}
      >
        <div className="mx-auto px-5 md:px-8" style={{ maxWidth: '1400px' }}>
          
          {/* Content Column - Centered, readable width, no hyphenation */}
          <div 
            className="w-full mx-auto"
            style={{ 
              maxWidth: '1120px',
              hyphens: 'none',
              WebkitHyphens: 'none',
              MozHyphens: 'none',
              wordBreak: 'normal',
              overflowWrap: 'break-word',
            }}
          >
            
            {/* Mission Section */}
            <div className="mb-8">
              <div className="mb-5 md:mb-6">
                <div className="accent-bar mb-3" />
                <h2 
                  className="text-xl md:text-2xl font-bold"
                  style={{ color: 'var(--text)' }}
                >
                  Mission
                </h2>
              </div>
              
              <p 
                className="text-base leading-7 mb-4"
                style={{ color: 'var(--muted)' }}
              >
                Empower Health is a community-centered research initiative dedicated to advancing health, resilience, and energy efficiency in low- and moderate-income communities. The project produces actionable evidence designed to inform policy decisions and support an equitable transition to clean energy.
              </p>

              <p 
                className="text-base leading-7"
                style={{ color: 'var(--muted)' }}
              >
                Our research examines how weatherization, building electrification, and community microgrids affect household energy burdens, environmental health outcomes, and resilience to extreme weather events.
              </p>
            </div>

            {/* Methodology Section */}
            <div>
              <div className="mb-5 md:mb-6">
                <div className="accent-bar mb-3" />
                <h2 
                  className="text-xl md:text-2xl font-bold"
                  style={{ color: 'var(--text)' }}
                >
                  Approach
                </h2>
              </div>
              
              <p 
                className="text-base leading-7"
                style={{ color: 'var(--muted)' }}
              >
                Empower Health uses community-centered and mixed-methods research approaches to design and evaluate energy interventions that improve health and resilience outcomes. The initiative combines community co-design, interdisciplinary research, and program evaluation to assess the impacts of weatherization, electrification, microgrids, and indoor environmental quality improvements. Findings are translated into evidence-based insights that inform policy and support equitable energy transitions.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* Message from Dr. Chen */}
      <section className="py-10 md:py-14" style={{ background: 'white' }}>
        <div className="mx-auto px-5 md:px-8" style={{ maxWidth: '1400px' }}>
          <div className="accent-bar mb-3" />
          <h2 className="text-xl md:text-2xl font-bold mb-8" style={{ color: 'var(--text)' }}>
            From the Principal Investigator
          </h2>

          <div 
            className="rounded-xl overflow-hidden shadow-sm"
            style={{ background: '#ffffff', border: '1px solid var(--border)' }}
          >
            <div className="grid md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">
              {/* Photo - stretches to fill card height */}
              <div className="relative hidden md:block" style={{ minHeight: '100%' }}>
                <img 
                  src="https://customer-assets.emergentagent.com/job_empower-research/artifacts/2alyqhm7_Chien-fei%20Chen%20.jpeg" 
                  alt="Dr. Chien-fei Chen"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              {/* Mobile photo */}
              <div className="md:hidden">
                <img 
                  src="https://customer-assets.emergentagent.com/job_empower-research/artifacts/2alyqhm7_Chien-fei%20Chen%20.jpeg" 
                  alt="Dr. Chien-fei Chen"
                  className="w-full object-cover"
                  style={{ maxHeight: '300px' }}
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                <div className="mb-4">
                  <h3 className="text-lg font-bold" style={{ color: 'var(--text)' }}>Dr. Chien-fei Chen</h3>
                </div>

                <p className="text-base leading-7 mb-4" style={{ color: 'var(--muted)' }}>
                  With over a decade of experience leading research projects centered on energy transitions, energy burdens, the social determinants of health, and community resilience, I am honored to lead this initiative advancing research at the intersection of energy transitions, environmental health, and community resilience. Building on years of work examining energy burdens and the social determinants of health, this project brings together researchers, local governments, utilities, community organizations, and residents to accelerate equitable clean energy solutions.
                </p>

                <p className="text-base leading-7" style={{ color: 'var(--muted)' }}>
                  Our transdisciplinary team integrates expertise in public health, engineering, policy, and the social sciences to design and evaluate community-driven strategies, including microgrids, weatherization, and electrification, that reduce energy costs, improve health outcomes, and strengthen resilience to extreme weather. Grounded in community priorities and lived experiences, this project aims to generate practical solutions and evidence that support a just and inclusive energy transition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* Our Partners Section - Tighter */}
      <section className="py-8 md:py-12 bg-pattern-dots" style={{ background: 'var(--surface)' }}>
        <div className="mx-auto px-5 md:px-6" style={{ maxWidth: '1400px' }}>
          <h2 
            className="text-xl md:text-2xl font-bold mb-3"
            style={{ color: 'var(--text)' }}
          >
            Our Partners
          </h2>
          <p 
            className="mb-6 text-sm md:text-base leading-relaxed"
            style={{ color: 'var(--muted)' }}
          >
            We collaborate with leading institutions, community organizations, and local governments to advance our mission.
          </p>
          
          {/* Partner Logo Grid - Improved sizing for readability */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {[
              {
                name: 'Three3, Inc. (ThreeCubed)',
                logo: 'https://customer-assets.emergentagent.com/job_empower-research/artifacts/1upt974p_3.png',
                href: 'https://www.threecubed.org/',
              },
              {
                name: 'The University of Tennessee, Knoxville',
                logo: 'https://customer-assets.emergentagent.com/job_empower-research/artifacts/r66r4sm4_Tenesse.svg',
                href: 'https://www.utk.edu/',
              },
              {
                name: 'Harvard T.H. Chan School of Public Health',
                logo: 'https://customer-assets.emergentagent.com/job_empower-research/artifacts/mw7avxk3_Harvard.png',
                href: 'https://hsph.harvard.edu/',
              },
              {
                name: 'University of Nebraska Medical Center',
                logo: 'https://customer-assets.emergentagent.com/job_empower-research/artifacts/vovmk270_Nebraska.png',
                href: 'https://www.unmc.edu/',
              },
              {
                name: 'Nurse-Family Partnership®',
                logo: 'https://customer-assets.emergentagent.com/job_empower-research/artifacts/gork4bvu_Nurse.png',
                href: 'https://www.nursefamilypartnership.org/',
              },
              {
                name: 'Clemson University',
                logo: '/images/partners/clemson-tigers-logo.png',
                href: 'https://www.clemson.edu/',
              },
              {
                name: 'Southeast Energy Efficiency Alliance (SEEA)',
                logo: '/images/partners/seea.png',
                href: 'https://www.seealliance.org/',
              },
              {
                name: 'Clemson University Charleston',
                logo: '/images/partners/cic-hero.jpg',
                href: 'https://www.clemson.edu/innovation-campuses/charleston/',
                isPhoto: true,
              }
            ].map((partner, index) => {
              const card = (
              <div 
                className="rounded-xl transition-all hover:shadow-lg card-professional flex flex-col items-center"
                style={{ 
                  background: 'white',
                  height: '200px',
                  padding: '20px 16px 16px',
                }}
              >
                {/* Logo Container */}
                <div style={{ width: '100%', height: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <img 
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    style={partner.isPhoto
                      ? { width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', borderRadius: '8px', display: 'block' }
                      : { width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', display: 'block' }
                    }
                  />
                </div>
                {/* Partner Name */}
                <div style={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '8px', overflow: 'hidden' }}>
                  <p style={{ color: 'var(--muted)', fontSize: '12px', fontWeight: 500, lineHeight: '1.3', textAlign: 'center', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {partner.name}
                  </p>
                </div>
              </div>
              );
              return partner.href ? (
                <a key={index} href={partner.href} target="_blank" rel="noopener noreferrer" className="block">
                  {card}
                </a>
              ) : <div key={index}>{card}</div>;
            })}
          </div>
        </div>
      </section>

      {/* Our Funder Section - Shrink-wrap card */}
      <section 
        className="py-8 md:py-10"
        style={{ background: 'var(--card-bg-muted)' }}
      >
        {/* Centering wrapper */}
        <div className="flex justify-center px-4 md:px-6">
          {/* Card Container - Shrink-wrap to content */}
          <div 
            className="inline-flex w-fit max-w-full flex-col sm:flex-row items-center gap-4 sm:gap-5 rounded-xl p-5 md:p-6"
            style={{ background: '#0B5FA5' }}
          >
            {/* Left: Label + Logo */}
            <div className="flex-shrink-0 flex flex-col items-center">
              {/* "Our Funder" label */}
              <p 
                className="uppercase tracking-widest font-semibold mb-2 text-xs"
                style={{ 
                  color: 'rgba(255, 255, 255, 0.9)',
                  letterSpacing: '0.12em',
                }}
              >
                Our Funder
              </p>
              
              {/* Wellcome W Logo - Compact white box */}
              <div 
                className="w-[120px] h-[120px] rounded-lg bg-white flex items-center justify-center overflow-hidden"
              >
                <img 
                  src="https://customer-assets.emergentagent.com/job_0d3c79a8-02be-453a-b90c-6e841ad238d1/artifacts/16k705v1_wellcome-logo-black_1200x600_Df2ubHd.width-800.jpg"
                  alt="Wellcome Trust logo"
                  className="block"
                  style={{ 
                    width: '180%', 
                    height: '180%', 
                    objectFit: 'contain',
                    maxWidth: 'none', 
                    maxHeight: 'none',
                  }}
                />
              </div>
            </div>
            
            {/* Right: Text - constrained width */}
            <div className="text-center sm:text-left max-w-[52ch]">
              <p 
                className="text-sm leading-relaxed"
                style={{ 
                  color: 'rgba(255, 255, 255, 0.95)',
                  lineHeight: '1.7',
                }}
              >
                Empower Health is funded by the Wellcome Trust under the project{' '}
                <em style={{ fontStyle: 'italic', color: 'rgba(255, 255, 255, 0.9)' }}>
                  "Advancing climate mitigation policy solutions with health co-benefits in G7 countries"
                </em>{' '}
                (Project No. 227151/Z/23/Z).
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
