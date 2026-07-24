'use client'

import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Calendar, ArrowLeft } from 'lucide-react'

export default function InternationalResearchExchangeTaiwanPage() {
  return (
    <div style={{ background: '#f8fafc' }}>
      <Breadcrumbs
        items={[
          { label: 'Resources', href: '/resources' },
          { label: 'News', href: '/resources/news' },
          { label: 'International Research Exchange' }
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
                Seminars
              </span>
            </div>
            <h1
              className="text-2xl md:text-3xl font-bold leading-tight"
              style={{ color: '#0c2340', maxWidth: '900px' }}
            >
              International Research Exchange Strengthens Collaboration on Community Resilience and Data Integration
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
              {/* Featured Image - Left Column */}
              <div className="md:sticky md:top-24 md:self-start">
                <img
                  src="/images/news/international-research-exchange-taiwan-2026-1.jpg"
                  alt="Professor Chien-fei Chen with researchers from Clemson University, NCUE, Tunghai University, and National Taichung University of Education in Taiwan"
                  className="w-full rounded-lg shadow-sm"
                  style={{ border: '1px solid rgba(12, 35, 64, 0.1)' }}
                />
                <p className="text-xs text-center mt-2 italic" style={{ color: '#6b7280' }}>
                  Professor Chien-fei Chen with collaborating researchers in Taiwan
                </p>
              </div>

              {/* Article Body - Right Column */}
              <div
                className="space-y-6 text-base leading-7"
                style={{ color: '#4a5568' }}
              >
                <p>
                  Professor Chien-fei Chen recently visited the Department of Geography at National Changhua University of Education (NCUE) in Taiwan, continuing a growing international collaboration focused on community resilience, energy transitions, and socio-environmental research.
                </p>

                <p>
                  The visit brought together researchers from Clemson University, NCUE, Tunghai University, and National Taichung University of Education to exchange ideas on interdisciplinary approaches to studying social-ecological systems and sustainable community development.
                </p>

                <p>
                  During the meeting, Professor Wei-Pang Wang from Tunghai University presented findings from the Long-Term Social-Ecological Research (LTSER) Changhua site, highlighting research on energy landscapes and structural changes along Taiwan&apos;s Changhua coast. Distinguished Professor Yu-Ling Song also shared insights from long-term qualitative research examining the region&apos;s evolving social-ecological system.
                </p>

                <p>
                  Building on these presentations, Professor Chen led discussions on research design, data integration, and strategies for publishing interdisciplinary work in international journals. She emphasized the importance of selecting meaningful analytical variables, developing clear research narratives, and connecting local case studies to broader global conversations.
                </p>

                <p>
                  Professor Chen also introduced examples from her research in the United States, including county-level social and infrastructure databases and publicly available datasets used to study energy affordability, community resilience, and environmental change. These examples generated productive discussions about comparative research, integrated data platforms, and opportunities for future international collaboration.
                </p>

                <p>
                  The exchange took place just before Typhoon Bavi approached Taiwan. Despite the approaching storm, participants remained actively engaged in discussions on research projects, manuscript development, and collaborative opportunities, reflecting a shared commitment to advancing interdisciplinary scholarship.
                </p>

                <p>
                  Participants included Distinguished Professor Yu-Ling Song, Dean Su-Fen Wang, Chair Yi-Chin Chen, Professor Wei-Pang Wang of Tunghai University, Professor Tien-Hsuan Lu of National Taichung University of Education, and members of the LTSER research team.
                </p>

                <p>
                  The Wellcome Lab looks forward to continuing international partnerships that advance research on energy affordability, community resilience, environmental sociology, and data-driven approaches to sustainable development.
                </p>
              </div>
            </div>

            {/* Gallery */}
            <div className="mt-10">
              <div className="grid sm:grid-cols-2 gap-6">
                <figure>
                  <img
                    src="/images/news/international-research-exchange-taiwan-2026-2.jpg"
                    alt="Researchers from Clemson University, NCUE, Tunghai University, and National Taichung University of Education during the research exchange meeting"
                    className="w-full rounded-lg"
                    style={{ border: '1px solid rgba(12, 35, 64, 0.1)' }}
                  />
                  <figcaption className="mt-2 text-xs text-center italic" style={{ color: '#6b7280' }}>
                    Researchers from Clemson University, NCUE, Tunghai University, and National Taichung University of Education
                  </figcaption>
                </figure>
                <figure>
                  <img
                    src="/images/news/international-research-exchange-taiwan-2026-3.jpg"
                    alt="Discussion session during the international research exchange at National Changhua University of Education in Taiwan"
                    className="w-full rounded-lg"
                    style={{ border: '1px solid rgba(12, 35, 64, 0.1)' }}
                  />
                  <figcaption className="mt-2 text-xs text-center italic" style={{ color: '#6b7280' }}>
                    Discussion session during the research exchange at NCUE
                  </figcaption>
                </figure>
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
