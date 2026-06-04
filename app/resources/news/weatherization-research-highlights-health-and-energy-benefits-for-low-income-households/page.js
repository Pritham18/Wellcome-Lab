'use client'

import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Calendar, ArrowLeft } from 'lucide-react'

export default function WeatherizationResearchHighlightsPage() {
  return (
    <div style={{ background: '#f8fafc' }}>
      <Breadcrumbs
        items={[
          { label: 'Resources', href: '/resources' },
          { label: 'News', href: '/resources/news' },
          { label: 'Weatherization Research Highlights' }
        ]}
      />

      {/* Article Header */}
      <section
        className="py-8 md:py-10"
        style={{ background: 'white', borderBottom: '1px solid rgba(12, 35, 64, 0.1)' }}
      >
        <div className="mx-auto px-4 md:px-6" style={{ maxWidth: '1200px' }}>
          <article>
            <div className="flex items-center gap-3 mb-5">
              <span
                className="inline-flex items-center gap-1.5 text-sm font-medium"
                style={{ color: '#4a5568' }}
              >
                <Calendar className="w-4 h-4" style={{ color: '#0B5FA5' }} />
                May 2026
              </span>
              <span
                className="px-2.5 py-0.5 text-xs font-semibold rounded-full"
                style={{ background: 'rgba(11, 95, 165, 0.1)', color: '#0B5FA5' }}
              >
                Research Updates
              </span>
            </div>
            <h1
              className="text-2xl md:text-3xl font-bold leading-tight"
              style={{ color: '#0c2340', maxWidth: '900px' }}
            >
              Weatherization Research Highlights Health and Energy Benefits for Low-Income Households
            </h1>
          </article>
        </div>
      </section>

      {/* Article Content */}
      <div className="py-8 md:py-10">
        <div className="mx-auto px-4 md:px-6" style={{ maxWidth: '1200px' }}>
          <article>
            <div
              className="space-y-6 text-base leading-7"
              style={{ color: '#4a5568', maxWidth: '80ch' }}
            >
              <p>
                A new report highlights how residential weatherization programs can improve indoor living conditions, reduce household energy burdens, and support long-term community resilience in low-income households across the United States.
              </p>

              <p>
                The report, <em>Health Co-Benefits and Low-Income Residential Weatherization in the United States</em>, examines how energy efficiency improvements such as insulation, air sealing, and HVAC upgrades can lead to broader household benefits beyond energy savings. Findings show that weatherization can improve indoor comfort, reduce drafts and noise, support better sleep and physical health, and ease financial stress related to utility costs.
              </p>

              <p>
                The study also discusses how weatherization programs may strengthen resilience to extreme temperatures and climate-related stressors while supporting healthier indoor environments. Researchers analyzed multiple weatherization initiatives across the United States, including federal and utility-supported programs.
              </p>

              <p>
                Dr. Chien-fei Chen noted that the report aligns closely with ongoing research interests in energy affordability, indoor environmental quality, and community resilience:
              </p>

              <blockquote
                className="pl-5 py-1"
                style={{ borderLeft: '4px solid #0B5FA5' }}
              >
                <p className="text-base italic leading-7" style={{ color: '#0c2340' }}>
                  "Weatherization is not only about reducing energy use. It is also closely connected to housing quality, health, and long-term resilience for households and communities."
                </p>
              </blockquote>

              <p>
                The report contributes to broader conversations on sustainable housing, energy affordability, and infrastructure resilience, particularly for vulnerable and energy-burdened households.
              </p>
            </div>

            {/* Figures */}
            <div className="mt-10 space-y-10">

              {/* Figure 8 */}
              <figure>
                <div
                  className="flex justify-center rounded-lg overflow-hidden"
                  style={{ background: '#fff', border: '1px solid rgba(12,35,64,0.1)', padding: '24px' }}
                >
                  <img
                    src="/images/news/weatherization-systems-diagram.png"
                    alt="Figure 8: Three-Stage Least Squares Systems Diagram showing Weatherization Effect on Home Conditions, Life Events, Financial Problems, Life Satisfaction, and General Health Problems"
                    className="w-full"
                    style={{ maxWidth: '600px', height: 'auto' }}
                  />
                </div>
                <figcaption
                  className="mt-3 text-xs text-center italic"
                  style={{ color: '#6b7280' }}
                >
                  Figure 8. Three-Stage Least Squares Systems Diagram
                </figcaption>
              </figure>

              {/* Figure 9 */}
              <figure>
                <div
                  className="flex justify-center rounded-lg overflow-hidden"
                  style={{ background: '#fff', border: '1px solid rgba(12,35,64,0.1)', padding: '24px' }}
                >
                  <img
                    src="/images/news/weatherization-policy-map.png"
                    alt="Figure 9: National Weatherization Policy Map showing U.S. federal, state, and local governing bodies and their relationships to weatherization programs"
                    className="w-full"
                    style={{ maxWidth: '720px', height: 'auto' }}
                  />
                </div>
                <figcaption
                  className="mt-3 text-xs text-center italic"
                  style={{ color: '#6b7280' }}
                >
                  Figure 9: National Weatherization Policy Map
                </figcaption>
              </figure>

            </div>

            {/* Back Link */}
            <div className="mt-10 pt-8" style={{ borderTop: '1px solid rgba(12, 35, 64, 0.1)' }}>
              <Link
                href="/resources/news"
                className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
                style={{ color: '#0B5FA5' }}
              >
                <ArrowLeft className="w-4 h-4" />
                Back to News
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
