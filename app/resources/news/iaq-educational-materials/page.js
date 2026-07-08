'use client'

import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Calendar, ArrowLeft } from 'lucide-react'

export default function IAQEducationalMaterialsPage() {
  return (
    <div style={{ background: '#f8fafc' }}>
      <Breadcrumbs
        items={[
          { label: 'Resources', href: '/resources' },
          { label: 'News', href: '/resources/news' },
          { label: 'Indoor Air Quality Educational Materials' }
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
                July 2026
              </span>
              <span
                className="px-2.5 py-0.5 text-xs font-semibold rounded-full"
                style={{ background: 'rgba(11, 95, 165, 0.1)', color: '#0B5FA5' }}
              >
                Project Updates
              </span>
            </div>
            <h1
              className="text-2xl md:text-3xl font-bold leading-tight"
              style={{ color: '#0c2340', maxWidth: '900px' }}
            >
              Indoor Air Quality Educational Materials Developed for Healthy Home Intervention Participants
            </h1>
          </article>
        </div>
      </section>

      {/* Article Content */}
      <div className="py-8 md:py-10">
        <div className="mx-auto px-4 md:px-6" style={{ maxWidth: '1200px' }}>
          <article>

            {/* Two-column layout on larger screens */}
            <div className="grid md:grid-cols-[350px_1fr] gap-6 md:gap-8 mb-8">
              {/* Flyer Image - Left Column */}
              <div className="md:sticky md:top-24 md:self-start">
                <img
                  src="/images/iaq-flyer-final.png"
                  alt="Helping Households Understand Their Indoor Air Quality"
                  className="w-full rounded-lg shadow-sm"
                  style={{ border: '1px solid rgba(12, 35, 64, 0.1)' }}
                />
                <p className="text-xs text-center mt-2 italic" style={{ color: '#6b7280' }}>
                  Helping Households Understand Their Indoor Air Quality
                </p>
              </div>

              {/* Article Body - Right Column */}
              <div
                className="space-y-6 text-base leading-7"
                style={{ color: '#4a5568' }}
              >
                <p>
                  The Healthy Home Intervention Project has developed a new educational resource to help participating households better understand indoor air quality (IAQ) and interpret the information collected by indoor environmental monitors.
                </p>

                <p>
                  The guide explains common indoor air quality indicators—including PM2.5, CO2, and volatile organic compounds (VOCs)—using clear language and practical examples. It also highlights common indoor pollutant sources, potential health impacts, and simple actions households can take to improve indoor air quality.
                </p>

                <p>
                  By combining environmental monitoring with accessible educational materials, the project aims to support participants in making informed decisions about their home environment while promoting healthier homes and improved well-being.
                </p>

                <div
                  className="my-8 p-6 rounded-lg"
                  style={{
                    background: 'rgba(11, 95, 165, 0.05)',
                    borderLeft: '4px solid #0B5FA5'
                  }}
                >
                  <p className="text-sm leading-6" style={{ color: '#4a5568' }}>
                    This work is part of the Wellcome-funded research program &ldquo;Advancing Climate Mitigation Policy Solutions with Health Co-benefits in G7 Countries,&rdquo; which explores how healthy housing interventions can reduce energy burden while improving indoor environmental quality and health.
                  </p>
                </div>
              </div>
            </div>

            {/* Back Link */}
            <div className="mt-6 pt-8" style={{ borderTop: '1px solid rgba(12, 35, 64, 0.1)' }}>
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
