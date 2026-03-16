'use client'

import { useState } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Calendar, Award, ChevronDown, ChevronUp } from 'lucide-react'

// News data organized by category
const newsData = [
  {
    id: 1,
    category: 'Workshops',
    date: 'Feb 26–27, 2026',
    title: 'Powering Resilience and Health: Energy Transition and Healthy Environments',
    preview: 'Researchers, policymakers, industry leaders, and community organizations gathered at Clemson University\'s Charleston Innovation Campus to explore how energy transitions can strengthen community resilience and improve public health.',
    fullContent: (
      <>
        {/* Subtitle */}
        <p className="text-sm font-semibold mb-5" style={{ color: '#0B5FA5', letterSpacing: '0.02em' }}>
          Highlights Microgrids, Electrification, and Health Co-Benefits
        </p>

        {/* Overview */}
        <p>
          Organized by Clemson University's Greater Resilience, Innovation and Transformation (GRIT) Laboratory and funded by the Wellcome Trust, this two-day interdisciplinary workshop brought together more than 35 participants — both in person and virtually — representing universities, nonprofit organizations, utilities, government agencies, and community groups. The event featured over a dozen expert presentations across five thematic panels.
        </p>

        <div className="my-5 flex justify-center">
          <div style={{ maxWidth: '480px' }}>
            <img 
              src="/images/news/workshop-feb-2026-main.jpg"
              alt="Workshop participants in group discussion"
              className="w-full rounded-lg"
              style={{ border: '1px solid rgba(12, 35, 64, 0.1)' }}
            />
            <p className="text-xs text-center mt-2 italic" style={{ color: 'var(--muted)' }}>
              Workshop participants at Clemson University's Charleston Innovation Campus
            </p>
          </div>
        </div>

        {/* Opening & Leadership */}
        <h3 className="text-sm font-bold uppercase tracking-wider mt-6 mb-2" style={{ color: 'var(--text)' }}>
          Research Leadership
        </h3>
        <p>
          The event opened with remarks from Dr. Chien-Fei Chen, professor of sociology at Clemson University and director of the GRIT Laboratory. The workshop was supported by an interdisciplinary team of co-principal investigators:
        </p>
        <ul className="list-none pl-0 mt-3 space-y-1.5">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#0B5FA5' }} />
            <span><strong>Dr. Mingzhou Jin</strong> (University of Tennessee) — smart energy systems and energy infrastructure</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#0B5FA5' }} />
            <span><strong>Dr. Bruce Tonn</strong> (Three3, Inc.) — energy policy, weatherization programs, and health co-benefits</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#0B5FA5' }} />
            <span><strong>Dr. Gary Adamkiewicz</strong> (Harvard University) — indoor environmental quality and environmental health</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#0B5FA5' }} />
            <span><strong>Dr. Kristina Kintziger</strong> (University of Nebraska Medical Center) — climate, energy, and population health</span>
          </li>
        </ul>
        <p className="mt-3">
          Together, this team advances research on the energy–climate–health nexus, focusing on how microgrids, electrification, and building retrofits can improve resilience and health outcomes for low-income and climate-vulnerable communities.
        </p>

        {/* Thematic Panels */}
        <h3 className="text-sm font-bold uppercase tracking-wider mt-6 mb-2" style={{ color: 'var(--text)' }}>
          Key Themes
        </h3>
        <p>
          Sessions explored community microgrids, building electrification, weatherization, indoor environmental quality, and the health co-benefits of energy transitions. Researchers and practitioners discussed strategies for integrating battery storage, distributed energy resources, and community-scale microgrids to strengthen grid reliability and support critical services during emergencies.
        </p>
        <p className="mt-3">
          Presentations from energy and public health researchers emphasized how improvements in home energy efficiency, electrification of appliances, and indoor air quality can produce important health co-benefits — particularly for low-income households.
        </p>

        <div className="my-5 flex justify-center">
          <div style={{ maxWidth: '420px' }}>
            <img 
              src="/images/news/workshop-feb-2026-group.jpg"
              alt="Workshop breakout session"
              className="w-full rounded-lg"
              style={{ border: '1px solid rgba(12, 35, 64, 0.1)' }}
            />
            <p className="text-xs text-center mt-2 italic" style={{ color: 'var(--muted)' }}>
              Breakout session discussions at the workshop
            </p>
          </div>
        </div>

        {/* Regional Resilience */}
        <h3 className="text-sm font-bold uppercase tracking-wider mt-6 mb-2" style={{ color: 'var(--text)' }}>
          Regional Resilience
        </h3>
        <p>
          Shu-Mei Huang from the South Carolina Sea Grant Consortium presented the organization's Coastal Resilience Program, which supports climate and weather-driven disaster adaptation and resilience planning in coastal communities across South Carolina. Additional speakers from the South Carolina Office of Resilience, Southeast Energy Efficiency Alliance, and community organizations contributed perspectives on policy development, workforce training, and community engagement.
        </p>

        {/* Cross-Sector Collaboration */}
        <h3 className="text-sm font-bold uppercase tracking-wider mt-6 mb-2" style={{ color: 'var(--text)' }}>
          Cross-Sector Collaboration
        </h3>
        <p>
          Through cross-sector dialogue and collaboration, the workshop strengthened partnerships among researchers, policymakers, and community leaders working to advance equitable energy transitions, resilient infrastructure, and healthier communities.
        </p>
      </>
    )
  },
  {
    id: 2,
    category: 'Recognition',
    date: 'Announcement',
    title: 'Dr. Chien-fei Chen Recognized Among World\'s Top 2% Most-Cited Scientists',
    preview: 'We are proud to share that Dr. Chien-fei Chen, Director of our lab and Professor of Sociology at Clemson University, has been recognized as one of the top 2% most-cited scientists worldwide.',
    fullContent: (
      <>
        <p>
          This recognition is based on global citation metrics compiled by Stanford University and Elsevier, reflecting her sustained influence across interdisciplinary research in environmental sociology, energy justice, climate resilience, and community engagement.
        </p>
        <p>
          Dr. Chen's research bridges social science, environmental health, and energy transitions, deepening scholarly understanding of how socio-technical systems interact with community resilience and equitable environmental outcomes.
        </p>
        <p className="font-medium" style={{ color: 'var(--text)' }}>
          Among her recent and impactful publications are studies that explore critical dimensions of energy systems and equity:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Electric power reliability, energy burdens, and climate change beliefs in the United States</strong></li>
          <li><strong>The equity implications of pecuniary externalities on an electric grid</strong> (<em>PNAS Nexus</em>)</li>
          <li><strong>Intersectionality in residential solar adoption</strong></li>
          <li><strong>Mobile microgrids and community resilience</strong> (upcoming <em>iScience</em>)</li>
        </ul>
        <p>
          Her leadership extends beyond publications. Dr. Chen directs the Greater Resilience, Innovation & Transformation (GRIT) Lab, advancing interdisciplinary scholarship where energy justice, climate resilience, data justice, and community engagement intersect.
        </p>
        <p>
          Through her research, she has secured over $10 million in interdisciplinary grants as a Principal Investigator or Co-Principal Investigator from agencies including the National Science Foundation, the Environmental Protection Agency, the Wellcome Trust, and the Alfred P. Sloan Foundation.
        </p>
      </>
    )
  },
  {
    id: 3,
    category: 'Seminars',
    date: 'November 10, 2025',
    title: 'Community & Infrastructure Resilience Seminar: Human-Centered Emergency Management',
    preview: 'GRIT Lab collaborated with Clemson\'s Community and Infrastructure Resilience initiative to host Dr. Haizhong Wang for a seminar on human-centered behavioral analysis and modeling for rapid-onset disasters.',
    bannerImage: '/images/news/cir-seminar-haizhong-wang-nov-10-2025.png',
    bannerAlt: 'Flyer for seminar: Human-centered behavioral analysis and modeling for informed community emergency management in rapid onset disasters.',
    fullContent: (
      <p>
        Drawing on case studies of tsunamis and wildfires, Dr. Wang presented interdisciplinary, agent-based modeling approaches to better understand evacuation behavior and decision-making, offering insights to improve emergency planning and community resilience.
      </p>
    )
  },
  {
    id: 4,
    category: 'Seminars',
    date: 'October 31, 2025',
    title: 'GRIT Lab Seminar: People, Places, and Policies—Addressing Environmental Exposures in Low-Income Housing',
    preview: 'As part of the GRIT Lab Fall 2025 Seminar Series, Dr. Gary Adamkiewicz shared new research on environmental exposures and health disparities in low-income housing.',
    bannerImage: '/images/news/grit-seminar-gary-adamkiewicz-oct-31-2025.png',
    bannerAlt: 'Flyer for GRIT Lab seminar: People, Places and Policies: Addressing Environmental Exposures within Low-income Housing.',
    fullContent: (
      <p>
        His talk emphasized how integrated interventions targeting people (education and engagement), places (building and system design), and policies (operations and maintenance) can significantly improve indoor environmental quality and health outcomes for vulnerable populations.
      </p>
    )
  },
  {
    id: 5,
    category: 'Seminars',
    date: 'October 24, 2025',
    title: 'GRIT Lab Seminar: Environmental Applications and Impacts of Artificial Intelligence',
    preview: 'GRIT Lab hosted Dr. Yuan Yao (Yale University) as part of the Fall 2025 Seminar Series to discuss how artificial intelligence is being applied to advance sustainable development.',
    bannerImage: '/images/news/grit-seminar-yuan-yao-oct-24-2025.png',
    bannerAlt: 'Flyer for GRIT Lab seminar: Environmental Applications and Impacts of Artificial Intelligence.',
    fullContent: (
      <p>
        Dr. Yao highlighted AI's life-cycle environmental impacts, including greenhouse-gas emissions and potential consequences for human health and ecosystems. She also presented her group's AI-enabled approaches for nature-based carbon dioxide removal and climate-mitigation strategies.
      </p>
    )
  }
]

// News Item Component with expandable content
function NewsItem({ 
  date, 
  category, 
  title, 
  preview, 
  fullContent,
  bannerImage,
  bannerAlt 
}) {
  const [expanded, setExpanded] = useState(false)

  // Category styling
  const getCategoryStyle = () => {
    switch(category) {
      case 'Recognition':
        return {
          color: '#c45500',
          bg: 'rgba(245, 102, 0, 0.1)',
          icon: Award,
          iconColor: '#F56600'
        }
      default:
        return {
          color: '#0B5FA5',
          bg: 'rgba(11, 95, 165, 0.1)',
          icon: Calendar,
          iconColor: '#0B5FA5'
        }
    }
  }

  const style = getCategoryStyle()
  const Icon = style.icon

  return (
    <article className="pb-6 md:pb-8 mb-6 md:mb-8" style={{ borderBottom: '1px solid rgba(12, 35, 64, 0.1)' }}>
      {/* Meta */}
      <div className="flex flex-wrap items-center gap-3 mb-3">
        <span 
          className="inline-flex items-center gap-1.5 text-sm font-medium"
          style={{ color: 'var(--muted)' }}
        >
          <Icon className="w-4 h-4" style={{ color: style.iconColor }} />
          {date}
        </span>
        <span 
          className="px-2.5 py-0.5 text-xs font-semibold rounded-full"
          style={{ background: style.bg, color: style.color }}
        >
          {category}
        </span>
      </div>
      
      {/* Title */}
      <h2 
        className="text-lg md:text-xl font-bold mb-3 leading-tight"
        style={{ color: 'var(--text)' }}
      >
        {title}
      </h2>
      
      {/* Preview (always shown) */}
      <p 
        className="text-sm leading-relaxed mb-3"
        style={{ color: 'var(--muted)', maxWidth: '90ch' }}
      >
        {preview}
      </p>

      {/* View More Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="inline-flex items-center gap-1.5 text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 rounded px-1 -ml-1"
        style={{ color: '#0B5FA5' }}
      >
        {expanded ? 'View less' : 'View more'}
        {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>

      {/* Expanded Content */}
      {expanded && (
        <div className="mt-4 animate-in fade-in duration-200">
          {/* Banner Image (only shown when expanded) */}
          {bannerImage && (
            <div className="mb-5 flex justify-center">
              <img 
                src={bannerImage}
                alt={bannerAlt || title}
                loading="lazy"
                className="w-full rounded-xl"
                style={{ 
                  maxWidth: '760px',
                  border: '1px solid rgba(12, 35, 64, 0.10)'
                }}
              />
            </div>
          )}
          
          {/* Full Content */}
          <div 
            className="space-y-4 text-sm leading-7"
            style={{ color: 'var(--muted)', maxWidth: '90ch' }}
          >
            {fullContent}
          </div>
        </div>
      )}
    </article>
  )
}

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('Seminars')

  // Filter news by selected category
  const filteredNews = newsData.filter(item => item.category === activeCategory)

  // Category options
  const categories = ['Workshops', 'Seminars', 'Recognition']

  return (
    <div style={{ background: 'var(--bg)' }}>
      <Breadcrumbs 
        items={[
          { label: 'Resources', href: '/resources' },
          { label: 'News' }
        ]} 
      />
      
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container max-w-7xl px-6">
          <div className="accent-bar mb-4" />
          <h1 
            className="page-hero-title mb-3"
          >
            News
          </h1>
          <p 
            className="page-hero-description"
          >
            Latest updates and announcements from the Empower Health project.
          </p>
        </div>
      </section>

      {/* Main Content Area with Sidebar */}
      <div className="py-8 md:py-10">
        <div className="container max-w-7xl px-6">
          
          {/* Mobile Category Dropdown */}
          <div className="mb-6 lg:hidden">
            <label htmlFor="category-select" className="sr-only">
              Select news category
            </label>
            <select
              id="category-select"
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0B5FA5]"
              style={{ 
                borderColor: 'rgba(12, 35, 64, 0.2)',
                color: 'var(--text)'
              }}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="flex gap-8">
            
            {/* Left Sidebar Navigation */}
            <aside className="w-[220px] flex-shrink-0 hidden lg:block">
              <div className="sticky top-24">
                <nav className="space-y-1">
                  {categories.map((category) => {
                    const isActive = activeCategory === category
                    
                    return (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className="w-full text-left px-4 py-3 rounded-md transition-all"
                        style={{
                          background: isActive ? 'rgba(11, 95, 165, 0.08)' : 'transparent',
                          borderLeft: isActive ? '3px solid #F56600' : '3px solid transparent',
                          color: isActive ? 'var(--text)' : 'var(--muted)',
                          fontWeight: isActive ? '600' : '500'
                        }}
                      >
                        <span className="text-sm">
                          {category}
                        </span>
                      </button>
                    )
                  })}
                </nav>
              </div>
            </aside>

            {/* Right Content Area */}
            <div className="flex-1 min-w-0">
              {filteredNews.length > 0 ? (
                filteredNews.map((item) => (
                  <NewsItem
                    key={item.id}
                    date={item.date}
                    category={item.category}
                    title={item.title}
                    preview={item.preview}
                    fullContent={item.fullContent}
                    bannerImage={item.bannerImage}
                    bannerAlt={item.bannerAlt}
                  />
                ))
              ) : (
                <p className="text-sm italic" style={{ color: 'var(--muted)' }}>
                  No news items in this category yet.
                </p>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
