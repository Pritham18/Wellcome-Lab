import Breadcrumbs from '@/components/Breadcrumbs'
import { ExternalLink, Database } from 'lucide-react'

// Data resources array for easier management
const dataResources = [
  {
    title: 'CDC Environmental Justice Index (EJI) Explorer',
    description: 'An interactive mapping and analytics platform provided by the U.S. Centers for Disease Control and Prevention that visualizes environmental justice indicators at the community level. Users can explore socioeconomic, health, and environmental data to identify vulnerable populations and environmental burdens across geographic areas.',
    links: [
      { label: 'Open Explorer', url: 'https://www.atsdr.cdc.gov/place-health/php/eji/eji-explorer.html' }
    ]
  },
  {
    title: 'U.S. Department of Energy LEAD (Local Energy Action Dashboard)',
    description: 'The Local Energy Action Dashboard (LEAD) integrates energy-related data (including consumption, grid characteristics, and emissions) with demographic and socioeconomic information. It supports local planning and decision-making by enabling comparison of energy system metrics across regions.',
    links: [
      { label: 'Open Dashboard', url: 'https://www.energy.gov/scep/slsc/lead-tool' }
    ]
  },
  {
    title: 'South Carolina Office of Regulatory Staff — SSRRRP Progress Tools',
    description: 'A state-level public resource showing progress, reports, and data visualizations from the South Carolina State Energy Office\'s SSRRRP initiative. This tool helps users track regulatory, resilience, and energy reliability efforts, including metrics relevant to community energy planning.',
    links: [
      { label: 'View Progress', url: 'https://scor.sc.gov/SSRRRP/Progress' }
    ]
  },
  {
    title: 'Electricity Dependent DME (HHS emPOWER)',
    description: 'This dataset identifies Medicare beneficiaries who rely on electricity-dependent medical equipment, using claims data from the HHS emPOWER Program (2018–2025). Available at the state, county, and ZCTA levels, it supports analyses of health vulnerability and risk during power outages and extreme events.',
    links: [
      { label: 'Main Page', url: 'https://empowerprogram.hhs.gov/empowermap' },
      { label: 'Download', url: 'https://empowerprogram.hhs.gov/about-empowermap.html' }
    ]
  },
  {
    title: 'Heat and Health (CDC Tracking Data Explorer)',
    description: 'This data collection integrates multiple indicators linking extreme heat exposure to population health outcomes, including emergency department visits, hospitalizations, mortality, and heat-related vulnerability and preparedness measures. Sourced primarily from the CDC National Environmental Public Health Tracking Network and related federal datasets, it spans historical observations and future projections (approximately 2000–2025) across multiple geographic scales.',
    links: [
      { label: 'Explore Data', url: 'https://ephtracking.cdc.gov/DataExplorer/' }
    ]
  },
  {
    title: 'Area Health Resources Files (AHRF) — HRSA',
    description: 'The Area Health Resources Files (AHRF) compile county-, state-, and national-level data from over 50 sources on the U.S. health care workforce, facilities, population characteristics, and health system capacity. Maintained by HRSA, this dataset supports analyses of health care access, workforce availability, and structural vulnerability, and is commonly used to contextualize health outcomes and preparedness in relation to local service capacity.',
    links: [
      { label: 'Access Data', url: 'https://data.hrsa.gov/topics/health-workforce/nchwa/ahrf#aboutAnchor' }
    ]
  }
]

export default function DataPage() {
  return (
    <div style={{ background: 'var(--bg)' }}>
      <Breadcrumbs 
        items={[
          { label: 'Research', href: '/research/study-areas' },
          { label: 'Data' }
        ]} 
      />
      
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container max-w-7xl px-6">
          <div className="accent-bar mb-4" />
          <h1 
            className="page-hero-title mb-3"
          >
            Data Resources
          </h1>
          <p 
            className="page-hero-description"
          >
            Research datasets, tools, and data sources supporting the Empower Health project.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container max-w-7xl px-6 py-8 md:py-10">
        
        {/* Data Tools Section */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Database className="w-5 h-5" style={{ color: '#0B5FA5' }} />
            <h2 className="text-lg font-bold" style={{ color: 'var(--text)' }}>Data Tools & Datasets</h2>
          </div>
          
          {/* Compact Resource List */}
          <div className="space-y-3">
            {dataResources.map((resource, index) => (
              <article 
                key={index}
                className="p-4 rounded-lg bg-white"
                style={{ 
                  border: '1px solid rgba(12, 35, 64, 0.08)',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
                }}
              >
                {/* Title */}
                <h3 className="mb-1.5">
                  <a 
                    href={resource.links[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-base font-semibold hover:underline"
                    style={{ color: '#0B5FA5' }}
                  >
                    {resource.title}
                    <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                  </a>
                </h3>
                
                {/* Description */}
                <p 
                  className="text-sm leading-relaxed mb-2.5"
                  style={{ color: 'var(--muted)', lineHeight: '1.6' }}
                >
                  {resource.description}
                </p>
                
                {/* Links Row */}
                <div className="flex flex-wrap gap-3">
                  {resource.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-md transition-colors hover:bg-blue-100"
                      style={{ 
                        color: '#0B5FA5',
                        background: 'rgba(11, 95, 165, 0.06)',
                      }}
                    >
                      {link.label}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
