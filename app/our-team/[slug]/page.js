import { notFound } from 'next/navigation'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { getTeamMemberBySlug, getAllTeamSlugs } from '@/lib/teamData'

// Generate static params for all team members
export async function generateStaticParams() {
  const slugs = getAllTeamSlugs()
  return slugs.map((slug) => ({ slug }))
}

// Generate metadata for each team member
export async function generateMetadata({ params }) {
  const member = getTeamMemberBySlug(params.slug)
  if (!member) {
    return { title: 'Team Member Not Found' }
  }
  return {
    title: `${member.name} | EMPOWER-ALL Team`,
    description: member.bio?.substring(0, 160) || `Profile of ${member.name}`
  }
}

export default function TeamMemberPage({ params }) {
  const member = getTeamMemberBySlug(params.slug)

  if (!member) {
    notFound()
  }

  return (
    <div style={{ background: 'var(--bg)' }}>
      <Breadcrumbs 
        items={[
          { label: 'Our Team', href: '/our-team' },
          { label: member.name }
        ]} 
      />

      {/* Page Hero */}
      <section className="border-b" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
        <div className="container max-w-7xl px-6 py-8">
          <Link 
            href="/our-team"
            className="inline-flex items-center gap-2 text-sm font-medium hover:underline mb-6"
            style={{ color: 'var(--accent)' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Our Team
          </Link>
        </div>
      </section>

      {/* Profile Content */}
      <div className="container max-w-7xl px-6 py-8 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Photo & Quick Facts */}
          <div className="lg:col-span-1">
            <Card className="section-card overflow-hidden">
              {/* Photo - 4:5 Portrait Aspect Ratio */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/5' }}>
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full"
                  style={{ 
                    objectFit: 'cover',
                    objectPosition: '50% 20%'
                  }}
                />
                <div className="absolute top-3 right-3">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: member.badgeColor, color: 'white' }}
                  >
                    {member.role}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Name & Role */}
                <h1 className="text-xl font-bold mb-2">{member.name}</h1>
                
                {/* Special Badge (like Top 2% Cited) */}
                {member.specialBadge && (
                  <div className="mb-3">
                    <span 
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
                      style={{ background: 'var(--accent)', color: 'white' }}
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {member.specialBadge}
                    </span>
                  </div>
                )}

                {/* Titles/Affiliations */}
                <div className="mb-4">
                  {member.titles?.map((title, index) => (
                    <p 
                      key={index} 
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--muted)' }}
                    >
                      {title}
                    </p>
                  ))}
                </div>

                {/* Key Highlights */}
                {member.highlights && member.highlights.length > 0 && (
                  <div className="mb-4 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                    <p className="text-xs font-semibold uppercase mb-2" style={{ color: 'var(--accent)' }}>
                      Key Highlights
                    </p>
                    <ul className="text-sm space-y-1" style={{ color: 'var(--muted)' }}>
                      {member.highlights.map((highlight, index) => (
                        <li key={index}>• {highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* External Link Button */}
                {member.externalLink && (
                  <Button
                    asChild
                    className="w-full rounded-lg flex items-center justify-center gap-2 mt-4"
                    style={{ background: 'var(--accent)', color: 'white' }}
                  >
                    <a
                      href={member.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Official profile
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Bio & Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Featured Recognition Section (Dr. Chen only) */}
            {member.featuredRecognition && (
              <Card className="section-card">
                <CardContent className="p-8">
                  <div 
                    className="pl-5 border-l-4"
                    style={{ borderImage: 'linear-gradient(to bottom, #2d9f7c, #1e5a8e) 1' }}
                  >
                    <h2 className="text-lg font-bold mb-4" style={{ color: 'var(--accent)' }}>
                      {member.featuredRecognition.title}
                    </h2>
                    <p 
                      className="text-xl font-semibold mb-4 leading-snug"
                      style={{ color: 'var(--text)' }}
                    >
                      {member.featuredRecognition.headline}
                    </p>
                    <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
                      {member.featuredRecognition.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Main Bio Card */}
            <Card className="section-card">
              <CardContent className="p-8">
                <h2 className="text-lg font-bold mb-4" style={{ color: 'var(--accent)' }}>About</h2>
                
                <div className="prose max-w-none">
                  {member.bio.split('\n\n').map((paragraph, index) => (
                    <p 
                      key={index}
                      className="text-base leading-relaxed mb-4"
                      style={{ color: 'var(--foreground)' }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Expanded Biography (Dr. Chen only) */}
                {member.expandedBio && (
                  <div className="mt-6 pt-6 border-t" style={{ borderColor: 'var(--border)' }}>
                    {member.expandedBio.split('\n\n').map((paragraph, index) => (
                      <p 
                        key={index}
                        className="text-base leading-relaxed mb-4"
                        style={{ color: 'var(--foreground)' }}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {/* Affiliation */}
                <div className="mt-8 pt-6 border-t" style={{ borderColor: 'var(--border)' }}>
                  <h3 className="text-sm font-semibold uppercase mb-2" style={{ color: 'var(--accent)' }}>
                    Affiliation
                  </h3>
                  <p className="text-base" style={{ color: 'var(--foreground)' }}>
                    {member.affiliation}
                  </p>
                </div>

                {/* Role in Project */}
                <div className="mt-6 pt-6 border-t" style={{ borderColor: 'var(--border)' }}>
                  <h3 className="text-sm font-semibold uppercase mb-2" style={{ color: 'var(--accent)' }}>
                    Role in EMPOWER-ALL
                  </h3>
                  <p className="text-base" style={{ color: 'var(--foreground)' }}>
                    {member.roleLabel}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Selected Research Contributions (Dr. Chen only) */}
            {member.selectedContributions && (
              <Card className="section-card">
                <CardContent className="p-8">
                  <h2 className="text-lg font-bold mb-6" style={{ color: 'var(--accent)' }}>
                    Selected Research Contributions
                  </h2>
                  <ul className="space-y-4">
                    {member.selectedContributions.map((contribution, index) => (
                      <li key={index} className="flex gap-3">
                        <span 
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ background: 'var(--accent)' }}
                        />
                        <p className="text-base leading-relaxed" style={{ color: 'var(--foreground)' }}>
                          {contribution}
                        </p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Leadership & Research Impact (Dr. Chen only) */}
            {member.leadershipImpact && (
              <Card className="section-card">
                <CardContent className="p-8">
                  <h2 className="text-lg font-bold mb-4" style={{ color: 'var(--accent)' }}>
                    Leadership & Research Impact
                  </h2>
                  <div className="prose max-w-none">
                    {member.leadershipImpact.split('\n\n').map((paragraph, index) => (
                      <p 
                        key={index}
                        className="text-base leading-relaxed mb-4"
                        style={{ color: 'var(--foreground)' }}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
