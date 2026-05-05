import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Award, ArrowLeft } from 'lucide-react'

export default function DepartmentChairsAwardPage() {
  return (
    <div style={{ background: '#f8fafc' }}>
      <Breadcrumbs
        items={[
          { label: 'Resources', href: '/resources' },
          { label: 'News', href: '/resources/news' },
          { label: "Department Chair's Award 2026" }
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
              April 16, 2026
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
            style={{ color: '#0c2340' }}
          >
            Congratulations to the 2026 Department Chair&apos;s Award Recipients
          </h1>
        </div>
      </section>

      {/* Full-width two-column body */}
      <div className="mx-auto px-6 md:px-10 py-10 md:py-14" style={{ maxWidth: '1400px' }}>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* LEFT — Images column */}
          <div className="lg:w-5/12 flex-shrink-0 flex flex-col gap-5">
            {/* Colin */}
            <div
              className="rounded-xl overflow-hidden"
              style={{
                background: 'white',
                border: '1px solid rgba(12, 35, 64, 0.09)',
                boxShadow: '0 1px 6px rgba(12, 35, 64, 0.07)'
              }}
            >
              <div style={{ height: '380px', overflow: 'hidden' }}>
                <img
                  src="/images/news/department-chair-award-colin-cunniff-2026.png"
                  alt="Colin Cunniff holding a 2026 Department Chair's Award certificate"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block'
                  }}
                />
              </div>
              <div className="px-5 py-3" style={{ borderTop: '1px solid rgba(12, 35, 64, 0.08)' }}>
                <p className="text-sm font-semibold" style={{ color: '#0c2340' }}>Colin Cunniffe</p>
                <p className="text-xs mt-0.5" style={{ color: '#6b7280' }}>
                  2026 Department Chair&apos;s Award &middot; Sociology, Class of 2026
                </p>
              </div>
            </div>

            {/* Delaney */}
            <div
              className="rounded-xl overflow-hidden"
              style={{
                background: 'white',
                border: '1px solid rgba(12, 35, 64, 0.09)',
                boxShadow: '0 1px 6px rgba(12, 35, 64, 0.07)'
              }}
            >
              <div style={{ height: '380px', overflow: 'hidden' }}>
                <img
                  src="/images/news/department-chair-award-delaney-grimaldi-2026.jpg"
                  alt="Delaney Grimaldi holding a 2026 Department Chair's Award certificate"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block'
                  }}
                />
              </div>
              <div className="px-5 py-3" style={{ borderTop: '1px solid rgba(12, 35, 64, 0.08)' }}>
                <p className="text-sm font-semibold" style={{ color: '#0c2340' }}>Delaney Grimaldi</p>
                <p className="text-xs mt-0.5" style={{ color: '#6b7280' }}>
                  2026 Department Chair&apos;s Award
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — Article text column */}
          <div className="flex-1 min-w-0">
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
                  Two undergraduate students working with Dr. Chen have been honored with the
                  Department Chair&apos;s Award by the Department of Sociology, Anthropology, and
                  Criminal Justice at Clemson University.
                </p>
                <p>
                  <strong style={{ color: '#0c2340' }}>Colin Cunniffe</strong>, an undergraduate
                  research assistant and Sociology major (Class of 2026), and{' '}
                  <strong style={{ color: '#0c2340' }}>Delaney Grimaldi</strong> were recognized
                  during the College of Behavioral, Social, and Health Sciences (CBSHS) Honors and
                  Awards Ceremony held on April 16, 2026, at the Self Auditorium.
                </p>
                <p>
                  The Department Chair&apos;s Award recognizes students who demonstrate exceptional
                  service and contributions to the department beyond regular classroom expectations.
                  Both Colin and Delaney were selected for their dedication, leadership, and
                  meaningful engagement in departmental and research activities.
                </p>
                <p>
                  Colin has been actively involved as an undergraduate research assistant,
                  contributing to ongoing projects and supporting collaborative research efforts.
                  Delaney has also played a key role in departmental initiatives, demonstrating a
                  strong commitment to service and academic excellence.
                </p>

                <blockquote
                  className="my-6 pl-4 py-1 text-sm leading-relaxed italic"
                  style={{ borderLeft: '3px solid #F56600', color: '#4a5568' }}
                >
                  &ldquo;Colin and Delaney have consistently demonstrated initiative,
                  professionalism, and a strong commitment to both research and service. Their
                  contributions extend well beyond the classroom, and this recognition is a
                  well-deserved acknowledgment of their impact on our department and research
                  community.&rdquo;
                  <span className="block mt-2 not-italic font-medium" style={{ color: '#0c2340' }}>
                    &mdash; Dr. Chien-fei Chen
                  </span>
                </blockquote>

                <blockquote
                  className="my-6 pl-4 py-1 text-sm leading-relaxed italic"
                  style={{ borderLeft: '3px solid rgba(12, 35, 64, 0.2)', color: '#4a5568' }}
                >
                  &ldquo;I am honored to have received this award. Thank you again for the
                  nomination &mdash; this recognition means a great deal to me.&rdquo;
                  <span className="block mt-2 not-italic font-medium" style={{ color: '#0c2340' }}>
                    &mdash; Delaney Grimaldi
                  </span>
                </blockquote>

                <p>
                  The award highlights the importance of student engagement beyond coursework and
                  recognizes those who contribute to building a stronger academic and research
                  community. We are proud to celebrate Colin and Delaney for their achievements and
                  contributions.
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
      </div>
    </div>
  )
}
