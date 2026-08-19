'use client'

import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Award, ArrowLeft } from 'lucide-react'

export default function YueyangFengAppamTravelGrantPage() {
  return (
    <div style={{ background: '#f8fafc' }}>
      <Breadcrumbs
        items={[
          { label: 'Resources', href: '/resources' },
          { label: 'News', href: '/resources/news' },
          { label: 'Clemson Student Graduate Travel Grant' }
        ]}
      />

      {/* Full-width header */}
      <section
        className="py-8 md:py-12"
        style={{ background: 'white', borderBottom: '1px solid rgba(12, 35, 64, 0.1)' }}
      >
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: '1400px' }}>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className="inline-flex items-center gap-1.5 text-sm font-medium"
              style={{ color: '#4a5568' }}
            >
              <Award className="w-4 h-4" style={{ color: '#F56600' }} />
              July 28, 2026
            </span>
            <span
              className="px-2.5 py-0.5 text-xs font-semibold rounded-full"
              style={{ background: 'rgba(245, 102, 0, 0.1)', color: '#c45500' }}
            >
              Recognition
            </span>
          </div>
          <div
            className="mb-2"
            style={{ width: '40px', height: '3px', background: '#F56600', borderRadius: '2px' }}
          />
          <h1
            className="text-2xl md:text-4xl font-bold leading-snug"
            style={{ color: '#0c2340', maxWidth: '900px' }}
          >
            Clemson Student Graduate Travel Grant to Present Wellcome Project&rsquo;s Research at APPAM 2026
          </h1>
        </div>
      </section>

      {/* Article body */}
      <div className="mx-auto px-6 md:px-10 py-10 md:py-14" style={{ maxWidth: '900px' }}>
        <div
          className="rounded-xl p-6 md:p-10"
          style={{
            background: 'white',
            border: '1px solid rgba(12, 35, 64, 0.09)',
            boxShadow: '0 1px 6px rgba(12, 35, 64, 0.07)'
          }}
        >
          <div className="space-y-5 text-base leading-relaxed" style={{ color: '#374151' }}>
            <p>
              <strong style={{ color: '#0c2340' }}>Yueyang Feng</strong>, a research assistant and Ph.D. student in Psychology, has been awarded a Graduate Travel Grant from Clemson University Graduate Student Government. The grant will support Yueyang&apos;s travel to Boston to attend the Association for Public Policy Analysis and Management (APPAM) 2026 Fall Research Conference. The travel grant will help offset conference-related expenses and support the dissemination of the team&apos;s research.
            </p>
            <p>
              At the conference, Yueyang will present research conducted as part of the Wellcome project. The presentation will provide an opportunity to share the research team&apos;s findings with scholars and policy professionals, receive feedback, and connect with researchers working on related public policy issues.
            </p>

            <blockquote
              className="my-6 pl-4 py-1 text-sm leading-relaxed italic"
              style={{ borderLeft: '3px solid #F56600', color: '#4a5568' }}
            >
              &ldquo;I am grateful to Clemson Graduate Student Government for its support and to my advisors, Dr. Chien-fei Chen and Dr. Jody Nicholson, for their guidance and encouragement. I look forward to representing the GRIT Lab at the Association for Public Policy Analysis and Management (APPAM) conference and sharing our research on public perceptions of climate change and community vulnerability across the United States.&rdquo;
              <span className="block mt-2 not-italic font-medium" style={{ color: '#0c2340' }}>
                &mdash; Yueyang Feng
              </span>
            </blockquote>

            <p>
              We congratulate Yueyang on this achievement.
            </p>
          </div>

          <div className="mt-10 pt-6" style={{ borderTop: '1px solid rgba(12, 35, 64, 0.1)' }}>
            <Link
              href="/resources/news"
              className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
              style={{ color: '#0B5FA5' }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to News
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
