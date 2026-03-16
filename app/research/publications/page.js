import Breadcrumbs from '@/components/Breadcrumbs'
import { FileText, ArrowUpRight, Users } from 'lucide-react'
import Link from 'next/link'

const publications = [
  {
    id: 1,
    title: 'An Invisible Threat? Exploring the Physical and Mental Health Risks of Coal Air Pollution in the United States',
    authors: 'Chien-fei Chen, Hang Shuai, R. Alexander Bentley, Lyudmyla Tsykalova, Zhenglai Shen',
    abstract: 'This study investigates the association between coal-related fine particulate matter (PM₂.₅) exposure and health outcomes across U.S. counties. Using county-level data for 2020 and nine indicators of physical and mental health conditions, the study examines how coal-related air pollution and household energy burdens jointly influence population health. The results show that even small increases in coal-related PM₂.₅ exposure are significantly associated with higher prevalence of several health conditions, including chronic obstructive pulmonary disease (COPD), diabetes, and mental health disorders. These effects vary geographically and are strongest in the southeastern United States. The study further finds that high household energy burdens amplify the negative health impacts of coal-related pollution. The findings highlight persistent regional inequalities and underscore the need for targeted policies to reduce exposure and address energy-related environmental injustice.',
    href: '/publications/Coal PM2.5 and Health_Chen.pdf',
  },
  {
    id: 2,
    title: 'Electric Power Reliability, Energy Burdens, and Climate Change Beliefs in the United States',
    authors: 'Hang Shuai, Chien-Fei Chen, Benjamin Sovacool, Suzanna Sumkhuu, Zhenglai Shen',
    abstract: 'This study explores whether power outages and household energy burdens are associated with public beliefs about climate change across the United States. Using county-level geospatial regression analysis, the research examines how electricity reliability and economic energy stress influence climate change perceptions. The results show that longer power outages are significantly associated with stronger climate change beliefs. However, the interaction between outages and energy burdens reveals a complex pattern: in several U.S. regions, higher energy costs weaken the belief-enhancing effect of outage experiences. These findings suggest that infrastructure disruptions and energy affordability play important roles in shaping public attitudes toward climate change, with implications for risk communication and climate policy.',
    href: '/publications/electric-power-reliability-energy-burdens-and-climate-change-beliefs-in-the-united-states.pdf',
    journal: 'Environmental Science & Technology',
  },
  {
    id: 3,
    title: 'The Equity Implications of Pecuniary Externalities on an Electric Grid',
    authors: 'Charles Sims, Gasser G. Ali, J. Scott Holladay, Tim Roberson, Chien-fei Chen, Islam H. El-adaway',
    abstract: 'This research examines how the adoption of rooftop photovoltaic (PV) systems by high-income households affects electricity costs for low- and middle-income households. Using an agent-based computational economic model combined with experimental data on solar adoption preferences, the study finds that widespread solar adoption among high-income households can increase electricity bills for low-income customers because utilities must recover fixed costs from a shrinking customer base. In the case study region, this pecuniary externality increases electricity bills for low-income households by approximately 10%, resulting in a collective annual increase of about $7.8 million. Although higher electricity rates may slightly increase solar adoption among low-income households, the benefits are insufficient to offset the financial burden. The study highlights the equity challenges of distributed renewable energy transitions and suggests that current assistance programs may not fully address these disparities.',
    href: '/publications/Equity implications of pecuniary externalities on an electrid grid.pdf',
  },
  {
    id: 4,
    title: 'Public Support for Mobile Community Microgrids: Socioeconomic, Perceptual and Outage Experience Determinants of Energy Resilience',
    authors: 'Junkang Xu, Chien-fei Chen, Yu Wang',
    abstract: 'This study examines the social and perceptual factors that influence public support for mobile community microgrids (MCMs) as a strategy to enhance energy resilience. Based on a nationally representative survey of nearly 2,000 U.S. residents, hierarchical regression analysis identifies key predictors of acceptance. The results show that the strongest drivers of support include the desire for improved power reliability, expectations of faster disaster response, and lower electricity costs. Experience with frequent power outages also increases support for microgrids. The study further finds that outage experiences influence preferences for where microgrids should be deployed, with respondents experiencing frequent outages prioritizing residential and disadvantaged communities. The findings emphasize the importance of public perceptions, equity considerations, and outage experiences in shaping support for resilient energy infrastructure.',
    href: '/publications/Public support for microgrids.pdf',
  },
  {
    id: 5,
    title: 'Health Co-Benefits and Low-Income Residential Weatherization in the United States',
    authors: 'Bruce Tonn, Erin Rose, Michaela Marincic',
    abstract: 'This report examines the health and household-related co-benefits of residential weatherization programs for low-income households in the United States. Weatherization measures, such as air sealing, insulation, and heating system improvements, are designed to improve energy efficiency and reduce energy costs. The report finds that these interventions also generate significant non-energy benefits, including improved indoor environmental quality, reduced exposure to allergens and pollutants, better sleep and thermal comfort, and improvements in physical and mental health. Survey-based evaluations of several weatherization programs indicate that households experience increased comfort, reduced energy financial stress, and improved well-being after interventions. The study highlights how weatherization programs can simultaneously address energy poverty, public health, and climate mitigation objectives.',
    href: '/publications/Residential Weatherization Report Draft July 28 2025.pdf',
    journal: 'Report',
  },
]

export default function PublicationsPage() {
  return (
    <div style={{ background: 'var(--bg)' }}>
      <Breadcrumbs 
        items={[
          { label: 'Research', href: '/research/study-areas' },
          { label: 'Publications' }
        ]} 
      />
      
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container max-w-7xl px-6">
          <div className="accent-bar mb-4" />
          <h1 
            className="page-hero-title mb-3"
          >
            Publications
          </h1>
          <p 
            className="page-hero-description"
          >
            Academic publications and research papers from the Empower Health project.
          </p>
        </div>
      </section>

      {/* Publication List */}
      <div className="container max-w-7xl px-6 py-8 md:py-10">
        <div className="space-y-4">
          {publications.map((pub) => (
            <article
              key={pub.id}
              className="bg-white rounded-lg overflow-hidden transition-all hover:shadow-md"
              style={{ borderLeft: '3px solid #0B5FA5' }}
            >
              {/* Title Row — clickable link to PDF */}
              <Link
                href={pub.href}
                target="_blank"
                className="group flex items-start gap-4 md:gap-5 px-5 md:px-6 pt-5 pb-2"
              >
                <div className="flex-shrink-0 w-9 h-9 mt-0.5 rounded-md flex items-center justify-center" style={{ background: 'rgba(11, 95, 165, 0.08)' }}>
                  <FileText className="w-4 h-4" style={{ color: '#0B5FA5' }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[15px] md:text-base font-semibold leading-snug group-hover:text-[#0B5FA5] transition-colors" style={{ color: 'var(--text)' }}>
                    {pub.title}
                  </h3>
                  {pub.journal && (
                    <p className="text-xs mt-1 italic" style={{ color: 'var(--muted)' }}>{pub.journal}</p>
                  )}
                </div>
                <ArrowUpRight className="w-4 h-4 mt-1 flex-shrink-0 opacity-0 group-hover:opacity-60 transition-opacity" style={{ color: '#0B5FA5' }} />
              </Link>

              {/* Authors */}
              <div className="flex items-start gap-4 md:gap-5 px-5 md:px-6 pb-1">
                <div className="w-9 flex-shrink-0" />
                <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
                  <Users className="w-3 h-3 inline-block mr-1 -mt-px" style={{ color: '#9ca3af' }} />
                  {pub.authors}
                </p>
              </div>

              {/* Abstract — expandable via native <details> */}
              <div className="flex items-start gap-4 md:gap-5 px-5 md:px-6 pb-5">
                <div className="w-9 flex-shrink-0" />
                <details className="flex-1 min-w-0">
                  <summary className="text-xs font-medium cursor-pointer select-none hover:text-[#0B5FA5] transition-colors" style={{ color: '#0B5FA5' }}>
                    Abstract
                  </summary>
                  <p className="text-xs leading-relaxed mt-2" style={{ color: 'var(--muted)' }}>
                    {pub.abstract}
                  </p>
                </details>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
