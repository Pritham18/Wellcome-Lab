import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Card, CardContent } from '@/components/ui/card'
import { getTeamByCategory, categories } from '@/lib/teamData'

// Minimal team card component
function TeamCard({ member }) {
  return (
    <Card className="section-card overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full rounded-lg">
      {/* Role Badge - Above Photo (only for Leadership) */}
      {(member.role === 'PI' || member.role === 'CO-PI') && (
      <div className="flex justify-end px-2 pt-1.5 pb-0.5">
        <span
          className="inline-block px-2.5 py-0.5 rounded-full font-semibold whitespace-nowrap"
          style={{ 
            background: member.badgeColor, 
            color: 'white', 
            fontSize: '13px'
          }}
        >
          {member.role}
        </span>
      </div>
      )}

      {/* Photo - fills card width */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '1/1' }}>
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-full"
          style={{ 
            objectFit: 'cover',
            objectPosition: '50% 20%'
          }}
        />
      </div>

      {/* Content */}
      <CardContent className="px-3 pt-3 pb-3 flex flex-col flex-grow">
        <h3 className="text-base font-bold leading-snug mb-3">{member.name}</h3>
        
        <div className="mt-auto">
          <Link 
            href={`/our-team/${member.slug}`}
            className="inline-block text-sm font-semibold px-4 py-1.5 rounded-md"
            style={{ background: 'var(--accent)', color: 'white' }}
          >
            View profile
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

// Team section component
function TeamSection({ category }) {
  const members = getTeamByCategory(category.id)
  
  if (members.length === 0) return null

  return (
    <section className={category.id !== 'leadership' ? 'mt-12' : ''}>
      <div className="mb-6">
        <div className="section-eyebrow mb-2">{category.label}</div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {members.map((member) => (
          <TeamCard key={member.slug} member={member} />
        ))}
      </div>
    </section>
  )
}

export default function OurTeamPage() {
  return (
    <div style={{ background: 'var(--bg)' }}>
      <Breadcrumbs items={[{ label: 'Our Team' }]} />

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container max-w-7xl px-6">
          <div className="accent-bar mb-4" />
          <h1 
            className="page-hero-title mb-3"
          >
            Our Team
          </h1>
          <p 
            className="page-hero-description"
          >
            Our team is an interdisciplinary group of researchers with expertise in public health, social science, engineering, and environmental studies. We collaborate across universities and research institutions to examine the interactions between energy systems, the built environment, climate, and health outcomes.
          </p>
        </div>
      </section>

      {/* Team Sections */}
      <div className="container max-w-7xl px-6 py-8 md:py-10">
        {categories.map((category) => (
          <TeamSection key={category.id} category={category} />
        ))}
      </div>
    </div>
  )
}
