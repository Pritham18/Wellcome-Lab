'use client'

import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Calendar, ArrowLeft } from 'lucide-react'

export default function DrChenWMNETZEROPage() {
  return (
    <div style={{ background: '#f8fafc' }}>
      <Breadcrumbs
        items={[
          { label: 'Resources', href: '/resources' },
          { label: 'News', href: '/resources/news' },
          { label: 'Dr. Chen at WM-NET ZERO Group' }
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
                May 21, 2026
              </span>
              <span
                className="px-2.5 py-0.5 text-xs font-semibold rounded-full"
                style={{ background: 'rgba(11, 95, 165, 0.1)', color: '#0B5FA5' }}
              >
                Seminars
              </span>
            </div>
            <h1
              className="text-2xl md:text-3xl font-bold leading-tight"
              style={{ color: '#0c2340', maxWidth: '900px' }}
            >
              Dr. Chen Presented Built Environment, Energy Burden, Power Outages, and Health at the WM-NET ZERO Group at the University of Birmingham
            </h1>
          </article>
        </div>
      </section>

      {/* Article Content */}
      <div className="py-8 md:py-10">
        <div className="mx-auto px-4 md:px-6" style={{ maxWidth: '1200px' }}>
          <article>

            {/* Two-column: photo left, text right */}
            <div className="grid md:grid-cols-[280px_1fr] gap-8 mb-8">

              {/* Photo */}
              <div className="md:sticky md:top-24 md:self-start">
                <img
                  src="/images/news/dr-chen-birmingham-2026.jpeg"
                  alt="Dr. Chien-fei Chen"
                  className="w-full rounded-lg"
                  style={{
                    border: '1px solid rgba(12, 35, 64, 0.1)',
                    maxWidth: '280px'
                  }}
                />
                <p className="text-xs text-center mt-2 italic" style={{ color: '#6b7280' }}>
                  Dr. Chien-fei Chen
                </p>
              </div>

              {/* Body text */}
              <div
                className="space-y-6 text-base leading-7"
                style={{ color: '#4a5568' }}
              >
              <p>
                Dr. Chen presented research on the multilevel links among the built environment, energy burden, power outages, and health outcomes to another Wellcome project group, WM-NET ZERO group, at the University of Birmingham on May 21, 2026. The presentation, titled "Examining Multilevel Links among the Built Environment, Energy Burden, Power Outages, and Health Outcome Using Mixed Methods," introduced a multidimensional framework for understanding how extreme weather, energy insecurity, housing conditions, and health risks intersected in local communities.
              </p>

              <p>
                Drawing on recent studies from the United States and the United Kingdom, Dr. Chen discussed how low-income households experienced energy burden, utility hardship, disconnection threats, thermal discomfort, poor indoor air quality, and difficult household trade-offs. These findings highlighted how energy poverty could create compounding health risks, particularly for communities already facing social and environmental vulnerabilities.
              </p>

              <p>
                The presentation also connected household-level experiences with broader county-level patterns. At the macro level, Dr. Chen presented a multidimensional model examining energy burden, power outages, and health outcomes across 3,142 U.S. counties. This mixed-methods approach integrated micro- and macro-level analyses of climate, social-psychological, behavioral, and built-environment factors shaping energy insecurity and health.
              </p>

              <p>
                Dr. Chen concluded by sharing community and household-level evidence from weatherization, electrification, and health co-benefits. The talk also featured findings from a local healthy-home intervention in Tennessee, demonstrating the potential health benefits of weatherization for low-income households.
              </p>
            </div>
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
