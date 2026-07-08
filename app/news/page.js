import Breadcrumbs from '@/components/Breadcrumbs'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Calendar } from 'lucide-react'

const newsArticles = [
  {
    slug: 'community-microgrid-launch',
    title: 'Community Microgrid Project Launches in Study Area 1',
    excerpt: 'We are excited to announce the launch of our first community microgrid demonstration project, bringing clean, reliable energy to 150 households.',
    date: 'January 15, 2026',
    category: 'Project Update'
  },
  {
    slug: 'new-research-publication',
    title: 'New Research Published on Health Benefits of Home Electrification',
    excerpt: 'Our latest peer-reviewed study demonstrates significant improvements in respiratory health following home electrification upgrades.',
    date: 'December 20, 2025',
    category: 'Research'
  },
  {
    slug: 'partnership-announcement',
    title: 'Empower Health Announces Partnership with Local Utility',
    excerpt: 'Strategic partnership will expand weatherization and electrification programs to reach 500 additional low-income households.',
    date: 'November 8, 2025',
    category: 'Partnership'
  },
  {
    slug: 'community-workshop-series',
    title: 'Community Workshop Series on Clean Energy Transitions',
    excerpt: 'Join us for a series of free workshops designed to empower residents with knowledge about clean energy options and benefits.',
    date: 'October 30, 2025',
    category: 'Event'
  },
  {
    slug: 'funding-award-announcement',
    title: 'Empower Health Receives Additional Funding for Expansion',
    excerpt: 'New grant will support expansion of research activities and community engagement across three additional regions.',
    date: 'October 5, 2025',
    category: 'Funding'
  },
]

export default function NewsPage() {
  return (
    <div style={{ background: 'var(--bg)' }}>
      <Breadcrumbs items={[{ label: 'News' }]} />
      
      {/* Page Hero */}
      <section className="border-b" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
        <div className="container max-w-7xl px-6 py-6 md:py-10">
          <div className="max-w-5xl">
            <div className="section-eyebrow mb-2">News</div>
            <h1 className="mb-3">News & Updates</h1>
            <p className="text-lg leading-7" style={{ color: 'var(--muted)' }}>
              Stay informed about our latest research, partnerships, and community initiatives
            </p>
          </div>
        </div>
      </section>

      <div className="container max-w-7xl px-6 py-8 md:py-10">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            {newsArticles.map((article) => (
              <Card key={article.slug} className="section-card hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span 
                      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
                      style={{ 
                        background: 'var(--surface)',
                        color: 'var(--brand)'
                      }}
                    >
                      {article.category}
                    </span>
                    <div className="flex items-center text-sm" style={{ color: 'var(--muted)' }}>
                      <Calendar className="h-4 w-4 mr-1" />
                      {article.date}
                    </div>
                  </div>
                  <h2 className="mb-3">{article.title}</h2>
                  <p className="mb-4 leading-7">
                    {article.excerpt}
                  </p>
                  <Button 
                    asChild 
                    variant="link" 
                    className="p-0 h-auto"
                    style={{ color: 'var(--brand)' }}
                  >
                    <Link href={`/news/${article.slug}`}>
                      Read full article →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
