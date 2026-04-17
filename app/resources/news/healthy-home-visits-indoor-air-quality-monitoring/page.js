'use client'

import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Calendar, ArrowLeft } from 'lucide-react'

export default function HealthyHomeVisitsPage() {
  return (
    <div style={{ background: '#f8fafc' }}>
      <Breadcrumbs 
        items={[
          { label: 'Resources', href: '/resources' },
          { label: 'News', href: '/resources/news' },
          { label: 'Healthy Home Visits' }
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
                April 10, 2026
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
              Healthy Home Visits and Indoor Air Quality Monitoring Now Underway
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
              {/* Hero Image - Left Column */}
              <div className="md:sticky md:top-24 md:self-start">
                <img 
                  src="/images/news/healthy-home-visits.jpg"
                  alt="Research team preparing for a Healthy Home visit"
                  className="w-full rounded-lg shadow-sm"
                  style={{ border: '1px solid rgba(12, 35, 64, 0.1)' }}
                />
                <p className="text-xs text-center mt-2 italic" style={{ color: '#6b7280' }}>
                  Research team preparing for a Healthy Home visit
                </p>
              </div>

              {/* Article Body - Right Column */}
              <div 
                className="space-y-6 text-base leading-7"
                style={{ color: '#4a5568' }}
              >
                <p>
                  Beginning April 10, our research team launched in-home visits as part of the Healthy Home Intervention project. This initiative focuses on low-income households enrolled in Tennessee's Nurse-Family Partnership program. During each visit, our team conducts home safety and built environment assessments, administers surveys on weatherization and electrification, and installs indoor air quality sensors to better understand residential environmental conditions and associated health benefits.
                </p>

                <p>
                  The sensors collect data on temperature, ventilation, and air quality, helping us assess how home environments may influence residents' health and well-being. Participants also receive educational materials on improving indoor air quality and reducing energy consumption at home.
                </p>

                <div 
                  className="my-8 p-6 rounded-lg"
                  style={{ 
                    background: 'rgba(11, 95, 165, 0.05)',
                    borderLeft: '4px solid #0B5FA5'
                  }}
                >
                  <p className="text-sm font-semibold mb-2" style={{ color: '#0c2340' }}>
                    Privacy Statement
                  </p>
                  <p className="text-sm leading-6" style={{ color: '#4a5568' }}>
                    All activities are carried out with full respect for participant privacy. Any photos taken during visits will not include identifiable images of participants.
                  </p>
                </div>

                <p>
                  This work represents a meaningful step toward identifying practical policy strategies that promote indoor air quality, energy efficiency, and healthier living conditions for all.
                </p>
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
