import { notFound } from 'next/navigation'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { getThrustBySlug, getAllThrustSlugs, getNextThrust, getPreviousThrust } from '@/lib/thrustsData'
import ImageLightbox from '@/components/ImageLightbox'

// Generate static params for all thrusts
export async function generateStaticParams() {
  const slugs = getAllThrustSlugs()
  return slugs.map((slug) => ({ slug }))
}

// Generate metadata for each thrust
export async function generateMetadata({ params }) {
  const thrust = getThrustBySlug(params.slug)
  if (!thrust) {
    return { title: 'Thrust Not Found' }
  }
  return {
    title: `Thrust ${thrust.number}: ${thrust.title} | Empower Health Research`,
    description: thrust.summary
  }
}

export default function ThrustDetailPage({ params }) {
  const thrust = getThrustBySlug(params.slug)
  
  if (!thrust) {
    notFound()
  }

  const nextThrust = getNextThrust(params.slug)
  const prevThrust = getPreviousThrust(params.slug)

  return (
    <div style={{ background: 'var(--bg)' }}>
      <Breadcrumbs 
        items={[
          { label: 'Research', href: '/research/study-areas' },
          { label: 'Research Thrusts', href: '/research/thrusts' },
          { label: `Thrust ${thrust.number}` }
        ]} 
      />

      {/* Back Navigation */}
      <div className="border-b" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
        <div className="container max-w-6xl px-6 py-4">
          <Link 
            href="/research/thrusts"
            className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
            style={{ color: 'var(--accent)' }}
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Research Thrusts
          </Link>
        </div>
      </div>

      {/* Page Header */}
      <section className="border-b" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
        <div className="container max-w-6xl px-6 py-6 md:py-10">
          <h1 
            className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-3"
            style={{ color: 'var(--brand)', maxWidth: '56rem' }}
          >
            {thrust.title}
          </h1>
          <p 
            className="text-base md:text-lg leading-7" 
            style={{ color: 'var(--muted)', maxWidth: '56rem' }}
          >
            {thrust.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container max-w-6xl px-6 py-8 md:py-10">
        <article className="space-y-10">
          
          {/* Overview Section */}
          <section>
            <h2 
              className="text-xl font-bold mb-4 pb-2 border-b"
              style={{ color: 'var(--text)', borderColor: 'var(--border)' }}
            >
              Overview
            </h2>
            <p className="text-base leading-7" style={{ color: 'var(--text)' }}>
              {thrust.overview}
            </p>
          </section>

          {/* Building Systems Visual Section for Thrust 3 */}
          {thrust.buildingSystemsSection && (
            <section>
              <h2 
                className="text-xl font-bold mb-6 pb-2 border-b"
                style={{ color: 'var(--text)', borderColor: 'var(--border)' }}
              >
                {thrust.buildingSystemsSection.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {thrust.buildingSystemsSection.images.map((image, index) => (
                  <ImageLightbox
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    caption={image.caption}
                    className=""
                    style={{ background: 'var(--card-bg)' }}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Time-Series Spatial Analysis Section for Thrust 4 */}
          {thrust.timeSeriesSection && (
            <section>
              <h2 
                className="text-xl font-bold mb-6 pb-2 border-b"
                style={{ color: 'var(--text)', borderColor: 'var(--border)' }}
              >
                {thrust.timeSeriesSection.title}
              </h2>
              {/* 3-column grid for maps: 3 cols on desktop, 2 on tablet, 1 on mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {thrust.timeSeriesSection.maps.map((map, index) => (
                  <ImageLightbox
                    key={index}
                    src={map.src}
                    alt={map.alt}
                    caption={map.caption}
                    className=""
                    style={{ background: 'var(--card-bg)' }}
                  />
                ))}
              </div>
              {/* Group caption */}
              {thrust.timeSeriesSection.groupCaption && (
                <p 
                  className="mt-4 text-sm italic text-center px-4 py-3 rounded-lg"
                  style={{ color: 'var(--muted)', background: 'var(--surface)' }}
                >
                  {thrust.timeSeriesSection.groupCaption}
                </p>
              )}
            </section>
          )}

          {/* Program & Outreach Section for Thrust 5 */}
          {thrust.programOutreachSection && (
            <section style={{ marginTop: '2.5rem' }}>
              <h2 
                className="text-xl font-bold mb-6 pb-2 border-b"
                style={{ color: 'var(--text)', borderColor: 'var(--border)' }}
              >
                {thrust.programOutreachSection.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6">
                {thrust.programOutreachSection.images.map((image, index) => (
                  <div 
                    key={index}
                    className="rounded-xl overflow-hidden"
                    style={{ 
                      background: 'white',
                      padding: '14px',
                      border: '1px solid #D7E6F2',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
                    }}
                  >
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto rounded-lg"
                      style={{ 
                        maxWidth: '100%',
                        objectFit: 'contain'
                      }}
                    />
                    <p 
                      className="text-sm mt-2 text-center"
                      style={{ color: 'var(--muted)' }}
                    >
                      {image.caption}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Research Focus & Methods */}
          <section>
            <h2 
              className="text-xl font-bold mb-4 pb-2 border-b"
              style={{ color: 'var(--text)', borderColor: 'var(--border)' }}
            >
              Research Focus & Methods
            </h2>
            <ul className="space-y-2">
              {thrust.researchFocus.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span 
                    className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: 'var(--accent)' }}
                  />
                  <span className="text-base leading-relaxed" style={{ color: 'var(--text)' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Key Themes */}
          <section>
            <h2 
              className="text-xl font-bold mb-4 pb-2 border-b"
              style={{ color: 'var(--text)', borderColor: 'var(--border)' }}
            >
              Key Themes
            </h2>
            <div className="flex flex-wrap gap-2">
              {thrust.keyThemes.map((theme, index) => (
                <span 
                  key={index}
                  className="inline-block px-4 py-2 rounded-full text-sm font-medium"
                  style={{ background: 'var(--surface)', color: 'var(--text)', border: '1px solid var(--border)' }}
                >
                  {theme}
                </span>
              ))}
            </div>
          </section>

          {/* Current Work */}
          <section>
            <h2 
              className="text-xl font-bold mb-4 pb-2 border-b"
              style={{ color: 'var(--text)', borderColor: 'var(--border)' }}
            >
              Current Work
            </h2>
            <p className="text-base leading-7" style={{ color: 'var(--text)' }}>
              {thrust.currentWork}
            </p>
          </section>

          {/* Policy & Community Relevance */}
          <section>
            <h2 
              className="text-xl font-bold mb-4 pb-2 border-b"
              style={{ color: 'var(--text)', borderColor: 'var(--border)' }}
            >
              Policy & Community Relevance
            </h2>
            <p className="text-base leading-7" style={{ color: 'var(--text)' }}>
              {thrust.policyRelevance}
            </p>
          </section>

          {/* Special Visual Section for Thrust 2 (Microgrids) */}
          {thrust.visualSection && (
            <section>
              <h2 
                className="text-xl font-bold mb-6 pb-2 border-b"
                style={{ color: 'var(--text)', borderColor: 'var(--border)' }}
              >
                {thrust.visualSection.title}
              </h2>
              
              {/* Systems Row - 2 Column */}
              <div className="mb-8">
                <h3 
                  className="text-lg font-semibold mb-4 flex items-center gap-2"
                  style={{ color: 'var(--text)' }}
                >
                  <span 
                    className="w-2 h-2 rounded-full"
                    style={{ background: 'var(--accent)' }}
                  />
                  {thrust.visualSection.systems.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {thrust.visualSection.systems.images.map((image, index) => (
                    <ImageLightbox
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      caption={image.caption}
                    />
                  ))}
                </div>
              </div>

              {/* Methods Row - Single Centered */}
              <div className="mb-8">
                <h3 
                  className="text-lg font-semibold mb-4 flex items-center gap-2"
                  style={{ color: 'var(--text)' }}
                >
                  <span 
                    className="w-2 h-2 rounded-full"
                    style={{ background: 'var(--accent)' }}
                  />
                  {thrust.visualSection.methods.title}
                </h3>
                <div className="max-w-2xl mx-auto">
                  {thrust.visualSection.methods.images.map((image, index) => (
                    <ImageLightbox
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      caption={image.caption}
                    />
                  ))}
                </div>
              </div>

              {/* Results Row - 2 Column */}
              <div>
                <h3 
                  className="text-lg font-semibold mb-4 flex items-center gap-2"
                  style={{ color: 'var(--text)' }}
                >
                  <span 
                    className="w-2 h-2 rounded-full"
                    style={{ background: 'var(--accent)' }}
                  />
                  {thrust.visualSection.results.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {thrust.visualSection.results.images.map((image, index) => (
                    <ImageLightbox
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      caption={image.caption}
                    />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Images (if available) */}
          {thrust.images && thrust.images.length > 0 && (
            <section>
              <h2 
                className="text-xl font-bold mb-4 pb-2 border-b"
                style={{ color: 'var(--text)', borderColor: 'var(--border)' }}
              >
                Visualizations
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {thrust.images.map((image, index) => (
                  <figure key={index} className="rounded-lg overflow-hidden border" style={{ borderColor: 'var(--border)' }}>
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto"
                    />
                    {image.caption && (
                      <figcaption className="p-3 text-sm border-t" style={{ color: 'var(--muted)', borderColor: 'var(--border)', background: 'var(--surface)' }}>
                        {image.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
              {thrust.imageCaption && (
                <p 
                  className="text-sm italic px-4 py-3 rounded-lg"
                  style={{ color: 'var(--muted)', background: 'var(--surface)' }}
                >
                  {thrust.imageCaption}
                </p>
              )}
            </section>
          )}
        </article>

        {/* Navigation Footer */}
        <nav className="mt-16 pt-8 border-t" style={{ borderColor: 'var(--border)' }}>
          <div className="flex items-center justify-between gap-4">
            {/* Previous Thrust */}
            <div className="flex-1">
              {prevThrust ? (
                <Link 
                  href={`/research/thrusts/${prevThrust.slug}`}
                  className="group inline-flex flex-col items-start"
                >
                  <span className="text-xs font-medium uppercase tracking-wide mb-1" style={{ color: 'var(--muted)' }}>
                    Previous
                  </span>
                  <span 
                    className="text-sm font-semibold flex items-center gap-1 group-hover:underline"
                    style={{ color: 'var(--accent)' }}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Thrust {prevThrust.number}
                  </span>
                </Link>
              ) : (
                <Link 
                  href="/research/thrusts"
                  className="group inline-flex flex-col items-start"
                >
                  <span className="text-xs font-medium uppercase tracking-wide mb-1" style={{ color: 'var(--muted)' }}>
                    Back to
                  </span>
                  <span 
                    className="text-sm font-semibold flex items-center gap-1 group-hover:underline"
                    style={{ color: 'var(--accent)' }}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    All Thrusts
                  </span>
                </Link>
              )}
            </div>

            {/* Next Thrust */}
            <div className="flex-1 text-right">
              {nextThrust ? (
                <Link 
                  href={`/research/thrusts/${nextThrust.slug}`}
                  className="group inline-flex flex-col items-end"
                >
                  <span className="text-xs font-medium uppercase tracking-wide mb-1" style={{ color: 'var(--muted)' }}>
                    Next
                  </span>
                  <span 
                    className="text-sm font-semibold flex items-center gap-1 group-hover:underline"
                    style={{ color: 'var(--accent)' }}
                  >
                    Thrust {nextThrust.number}
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </Link>
              ) : (
                <Link 
                  href="/research/thrusts"
                  className="group inline-flex flex-col items-end"
                >
                  <span className="text-xs font-medium uppercase tracking-wide mb-1" style={{ color: 'var(--muted)' }}>
                    Back to
                  </span>
                  <span 
                    className="text-sm font-semibold flex items-center gap-1 group-hover:underline"
                    style={{ color: 'var(--accent)' }}
                  >
                    All Thrusts
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </Link>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
