'use client'

import { useState } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Calendar, Award, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'

// News data organized by category
const newsData = [
  {
    id: 7,
    category: 'Project Updates',
    date: 'April 10, 2026',
    title: 'Healthy Home Visits and Indoor Air Quality Monitoring Now Underway',
    preview: 'Our team has started in-home visits to assess indoor air quality and home environment conditions as part of the Healthy Home Intervention project.',
    detailPage: '/resources/news/healthy-home-visits-indoor-air-quality-monitoring',
    bannerImage: '/images/news/healthy-home-visits.jpg',
    bannerAlt: 'Research team installing sensor',
    fullContent: null
  },
  {
    id: 1,
    category: 'Workshops',
    date: 'Feb 26–27, 2026',
    title: 'Powering Resilience and Health Workshop Explores Links Between Energy Transitions, Community Resilience and Health Benefits',
    preview: 'On February 26–27, 2026, Clemson University hosted an interdisciplinary workshop bringing together researchers, community leaders, public health practitioners, engineers, and policymakers to explore how energy transitions can advance community resilience and health equity.',
    fullContent: (
      <>
        <p className="text-base font-medium mb-4" style={{ color: '#0c2340' }}>
          Interdisciplinary gathering examines community-engaged approaches to energy transitions, health outcomes, and climate resilience
        </p>
        
        <p>
          On February 26–27, 2026, Clemson University hosted "Powering Resilience and Health: Energy Transition and Healthy Built Environments," a two-day interdisciplinary workshop convening researchers, community leaders, public health practitioners, engineers, planners, and local decision-makers. The workshop explored how community-engaged energy transitions can advance resilience, reduce energy burdens, and improve both physical and mental health outcomes in vulnerable communities across the Southeast.
        </p>

        <div className="my-5 flex justify-center">
          <div style={{ maxWidth: '480px' }}>
            <img 
              src="/images/news/workshop-feb-2026-main.jpg"
              alt="Workshop participants in group discussion"
              className="w-full rounded-lg"
              style={{ border: '1px solid rgba(12, 35, 64, 0.1)' }}
            />
            <p className="text-xs text-center mt-2 italic" style={{ color: '#6b7280' }}>
              Workshop participants at Clemson University, February 26–27, 2026
            </p>
          </div>
        </div>

        <h3 className="text-base font-semibold mt-6 mb-3" style={{ color: '#0c2340' }}>
          Workshop Participation and Goals
        </h3>
        <p>
          The workshop brought together a diverse group of stakeholders from academia, community organizations, public health agencies, energy systems engineering, urban planning, and local government. Participants included researchers with expertise in environmental sociology, energy justice, climate resilience, environmental health, and health policy, alongside practitioners working directly in energy transition programs and community-based resilience initiatives.
        </p>
        <p className="mt-3">
          The event was designed to facilitate meaningful exchange across sectors and disciplines, with a focus on co-developing practical frameworks for equitable energy transitions that center community voices and improve health outcomes. Through lightning talks, interactive breakout sessions, and case-based discussions, participants examined how energy infrastructure investments can simultaneously address energy burden, climate resilience, and public health disparities.
        </p>

        <h3 className="text-base font-semibold mt-6 mb-3" style={{ color: '#0c2340' }}>
          Key Topics and Discussions
        </h3>
        <p>
          Workshop sessions covered a broad range of interconnected topics relevant to community-engaged energy transitions and health co-benefits. Participants explored weatherization and building envelope improvements as strategies to reduce energy costs and improve indoor environmental quality in low-income housing. Discussions emphasized that weatherization not only lowers utility bills but also reduces exposure to indoor air pollutants, mold, and temperature extremes, contributing to respiratory health, cardiovascular outcomes, and mental well-being.
        </p>
        <p className="mt-3">
          Electrification pathways—including the transition from fossil fuel-based heating and appliances to electric heat pumps, induction stoves, and other clean energy technologies—were examined as mechanisms to improve indoor air quality by eliminating combustion byproducts inside the home. Participants discussed policy incentives, utility programs, and community education strategies to accelerate equitable electrification for vulnerable populations.
        </p>
        <p className="mt-3">
          Microgrid development and distributed energy systems emerged as key topics for enhancing energy resilience in communities facing power outages due to extreme weather events. The discussions highlighted how mobile microgrids and community-scale energy systems can provide backup power during emergencies, reduce energy burden, and support health services and cooling centers during heatwaves. Participants considered both technical and social dimensions of microgrid deployment, including community ownership models and equitable siting decisions.
        </p>
        <p className="mt-3">
          Additional topics included data collection and evaluation methods for tracking health and resilience outcomes, strategies for centering community voices in planning and implementation processes, and policy frameworks to scale solutions through cross-sector partnerships involving utilities, local governments, health departments, and community-based organizations.
        </p>

        <div className="my-5 flex justify-center">
          <div style={{ maxWidth: '420px' }}>
            <img 
              src="/images/news/workshop-feb-2026-group.jpg"
              alt="Workshop breakout session"
              className="w-full rounded-lg"
              style={{ border: '1px solid rgba(12, 35, 64, 0.1)' }}
            />
            <p className="text-xs text-center mt-2 italic" style={{ color: '#6b7280' }}>
              Breakout session discussions at the workshop
            </p>
          </div>
        </div>

        <h3 className="text-base font-semibold mt-6 mb-3" style={{ color: '#0c2340' }}>
          Research Leadership
        </h3>
        <p>
          The workshop was organized as part of the EMPOWER-HEALTH Research Initiative, led by <strong>Dr. Chien-fei Chen</strong> (Principal Investigator, Clemson University) in collaboration with Co-Principal Investigators <strong>Dr. Olufemi Omitaomu</strong> (Oak Ridge National Laboratory), <strong>Dr. Perry Sheffield</strong> (Icahn School of Medicine at Mount Sinai), and <strong>Dr. Miranda Waggoner</strong> (Florida State University). This interdisciplinary team brings expertise in environmental sociology, energy systems engineering, environmental health, and health policy to advance equity-centered approaches to climate resilience and public health.
        </p>
        <p className="mt-3">
          The research initiative builds on regional partnerships including collaborations with the South Carolina Sea Grant Consortium and coastal resilience networks, reflecting a commitment to place-based, community-driven research that addresses local vulnerabilities while contributing to broader knowledge on energy transitions and health equity.
        </p>

        <h3 className="text-base font-semibold mt-6 mb-3" style={{ color: '#0c2340' }}>
          Collaboration and Future Impact
        </h3>
        <p>
          Key outcomes from the workshop include the development of a community-engagement playbook, a shared set of health and resilience indicators, and a partnership roadmap to support future pilot projects and research collaborations. Participants emphasized the importance of centering community voices in decision-making processes, integrating health metrics into energy planning and policy, and fostering sustained cross-sector partnerships that include utilities, housing agencies, health departments, and community organizations.
        </p>
        <p className="mt-3">
          The discussions underscored the need for policy frameworks that support equitable energy transitions, including funding mechanisms that prioritize frontline communities, workforce development programs that create local employment opportunities, and regulatory reforms that align climate and health goals. Moving forward, workshop participants committed to ongoing collaboration to ensure that energy transitions contribute to health equity, environmental justice, and climate resilience.
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
        <p className="font-medium" style={{ color: '#0c2340' }}>
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
    id: 6,
    category: 'Seminars',
    date: 'April 6, 2026',
    title: 'Exploring Community Impacts, Energy Transitions, and Conceptual Frontiers for Industrial Decarbonization and Net-Zero Societies',
    preview: 'Join Dr. Benjamin K. Sovacool for a GRIT Lab seminar exploring the social, ethical, and political dimensions of industrial decarbonization—highlighting Just Transitions and equitable pathways to net-zero.',
    detailPage: '/resources/news/benjamin-sovacool-industrial-decarbonization',
    bannerImage: null,
    bannerAlt: '',
    fullContent: null
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
  bannerAlt,
  detailPage
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
          style={{ color: '#4a5568' }}
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
        style={{ color: '#0c2340' }}
      >
        {title}
      </h2>
      
      {/* Preview (always shown) */}
      <p 
        className="text-sm leading-relaxed mb-3"
        style={{ color: '#4a5568', maxWidth: '90ch' }}
      >
        {preview}
      </p>

      {/* View More Button */}
      {detailPage ? (
        <Link
          href={detailPage}
          className="inline-flex items-center gap-1.5 text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 rounded px-1 -ml-1"
          style={{ color: '#0B5FA5' }}
        >
          View event details
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      ) : (
        <button
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-1.5 text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 rounded px-1 -ml-1"
          style={{ color: '#0B5FA5' }}
        >
          {expanded ? 'View less' : 'View more'}
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      )}

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
            style={{ color: '#4a5568', maxWidth: '90ch' }}
          >
            {fullContent}
          </div>
        </div>
      )}
    </article>
  )
}

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('Project Updates')

  // Filter news by selected category
  const filteredNews = newsData.filter(item => item.category === activeCategory)

  // Category options
  const categories = ['Project Updates', 'Workshops', 'Seminars', 'Recognition']

  return (
    <div style={{ background: '#f8fafc' }}>
      <Breadcrumbs 
        items={[
          { label: 'Resources', href: '/resources' },
          { label: 'News' }
        ]} 
      />
      
      {/* Page Hero */}
      <section 
        className="py-6 md:py-8"
        style={{ background: 'white', borderBottom: '1px solid rgba(12, 35, 64, 0.1)' }}
      >
        <div className="mx-auto px-4 md:px-6" style={{ maxWidth: '1400px' }}>
          <h1 
            className="text-3xl md:text-4xl font-bold mb-2"
            style={{ color: '#0c2340' }}
          >
            News
          </h1>
          <p 
            className="text-base leading-relaxed"
            style={{ color: '#4a5568', maxWidth: '90ch' }}
          >
            Latest updates and announcements from the EMPOWER-ALL project.
          </p>
        </div>
      </section>

      {/* Main Content Area with Sidebar */}
      <div className="py-6 md:py-8">
        <div className="mx-auto px-4 md:px-6" style={{ maxWidth: '1400px' }}>
          
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
                color: '#0c2340'
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
                          color: isActive ? '#0c2340' : '#4a5568',
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
                    detailPage={item.detailPage}
                  />
                ))
              ) : (
                <p className="text-sm italic" style={{ color: '#6b7280' }}>
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
