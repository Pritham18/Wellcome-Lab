import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { getTeamByCategory, categories } from '@/lib/teamData'

// Minimal team card component
function TeamCard({ member }) {
  return (
    <Card className="section-card overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full">
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

      {/* Content - Minimal: Name + Button only */}
      <CardContent className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold mb-4">{member.name}</h3>
        
        <div className="mt-auto">
          <Button
            asChild
            className="w-full rounded-lg"
            style={{ background: 'var(--accent)', color: 'white' }}
          >
            <Link href={`/our-team/${member.slug}`}>
              View full profile
            </Link>
          </Button>
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
    <section className={category.id !== 'leadership' ? 'mt-16' : ''}>
      <div className="mb-8">
        <div className="section-eyebrow mb-3">{category.label}</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <section 
        className="py-6 md:py-8"
        style={{ background: 'white', borderBottom: '1px solid rgba(12, 35, 64, 0.1)' }}
      >
        <div className="mx-auto px-4 md:px-6" style={{ maxWidth: '1400px' }}>
          <h1 
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: '#0c2340' }}
          >
            Our Team
          </h1>
          <p 
            className="text-base leading-relaxed"
            style={{ color: '#4a5568', maxWidth: '72ch' }}
          >
            Our team is an interdisciplinary group of researchers with expertise in public health, social science, engineering, and environmental studies. We collaborate across universities and research institutions to examine the interactions between energy systems, the built environment, climate, and health outcomes.
          </p>
        </div>
      </section>

      {/* Team Sections */}
      <div className="mx-auto px-4 md:px-6 py-8 md:py-10" style={{ maxWidth: '1120px' }}>
        {categories.map((category) => (
          <TeamSection key={category.id} category={category} />
        ))}
      </div>
    </div>
  )
}
