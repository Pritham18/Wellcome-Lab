import Breadcrumbs from '@/components/Breadcrumbs'
import { FileText, ArrowUpRight, Users, ExternalLink, Download } from 'lucide-react'
import Link from 'next/link'

const publications = [
  {
    id: 8,
    title: 'Risk in Translation: Climate Risk, Social Vulnerability, and Clean Energy Support Across the United States',
    authors: 'Lyudmyla Tsykalova, Praise Ayotola Ayinla, Chien-Fei Chen',
    abstract: 'This study examines how climate risk perception, social vulnerability, and political context shape public support for the clean energy transition across the United States. Integrating county-level data from more than 3,000 U.S. counties—combining Yale Climate Opinion Maps, FEMA’s National Risk Index, and 2024 U.S. presidential election results—the analysis finds that perceived climate risk is a stronger predictor of clean energy support than objective climate hazards alone. Political context substantially shapes how people interpret climate risk: in conservative-leaning counties, higher objective risk does not necessarily translate into greater perceived risk, while the opposite pattern holds in more liberal communities. The findings underscore the importance of communication and policy strategies that reflect local social, political, and environmental conditions, and highlight the role of social vulnerability in shaping public attitudes toward the clean energy transition.',
    href: '/publications/risk-in-translation-climate-risk-clean-energy-support-2026.pdf',
    doiUrl: 'https://doi.org/10.1016/j.erss.2026.104827',
    journal: 'Energy Research & Social Science, Vol. 138, Article 104827 (2026)',
  },
  {
    id: 7,
    title: 'A Utility-Level Analysis of Residential Electricity Use: Governance, Pricing, and Incentive Programs in the Southeastern U.S.',
    authors: 'Geyu Lyu, John Kim, Yu Wang, Chien-fei Chen, Brian An',
    abstract: 'This study examines utility-level variation in annual residential electricity consumption across Georgia and North Carolina, focusing on utility governance, electricity pricing, service-territory characteristics, and utility-run incentive programs. We construct a hand-collected inventory of 699 residential energy programs across 193 electric utilities and merge it with utility-level data, such as electricity consumption, rate, energy burden, climate, demographics and housing conditions, and EV charging-station data. The analytic sample includes 105 utilities with complete consumption and covariate data. Our results show that each additional EV program is associated with approximately 310 kWh (2.5%) higher annual per-household use, even after controlling for public EV charging-station density. Cooperative utilities initially exhibit higher household consumption than municipal utilities, but this difference loses statistical significance after accounting for program offerings and demographic factors. A one-cent/kWh higher electricity rate is associated with a 227 kWh (1.8%) to 334 kWh (2.7%) reduction in annual per-household electricity consumption, which may reflect both efficiency-driven conservation and energy-limiting behaviors. Prevalence of energy burden is associated with more electricity use after controlling for income, suggesting structural inefficiency in high-burden utility territories. These findings indicate that utility incentive programs should be paired with managed charging, demand response, targeted efficiency investment, and time-of-use pricing.',
    href: '/publications/utility-level-residential-electricity-use-2026.pdf',
    journal: 'Energy Policy',
  },
  {
    id: 6,
    title: 'Mapping Climate-Conditioned PM2.5 Response Under Climate Change in Taiwan Using a High-Resolution Geo-AI Model',
    authors: 'Pei-Yi Wong, Wei-Lun Hsu, Chieh-Ying Chen, Chien-Fei Chen, Chia-Wei Hsu, Shih-Chun Candice Lung, Ta-Chih Hsiao, Chia-Pin Yu, Wan-Yu Liu, Pau-Chung Chen, Wei Jie Seow, Chien-Hao Sung, Chih-Da Wu',
    abstract: 'This study develops a high-resolution Geo-AI framework to quantify the impact of future climate change on PM2.5 concentrations using Taiwan as a subtropical, monsoon-influenced island case. The model integrates long-term ground-based monitoring data (1994–2019), multi-scale geo-environmental predictors, and statistically downscaled CMIP6 meteorology, implemented using a Gradient Boosting Machine. The resulting model demonstrates strong predictive performance (R² = 0.81 and RMSE = 8.69 μg/m³) and effectively captures PM2.5 dynamics within complex islands and coastal environments. By explicitly coupling a Geo-AI model with Intergovernmental Panel on Climate Change (IPCC) Sixth Assessment Report (AR6) climate scenarios, this study extends data-driven PM2.5 modeling from historical estimation to climate-conditioned future projection, addressing a key methodological gap in existing air-quality research. SHAP-based interpretability analysis identifies temperature and precipitation as dominant predictors, underscoring their central role in shaping future aerosol variability, with both variables showing nonlinear, largely inverse relationships with PM2.5 concentrations across different temporal and regional scales. Across four Shared Socioeconomic Pathway scenarios, projected PM2.5 concentrations consistently decline in the near and midterm (between −1.25 and −1.5 μg/m³), followed by increasing spatial heterogeneity in the long term, with localized PM2.5 hotspots emerging under severe warming conditions. These findings suggest that climate change may generate uneven air-quality responses across space, highlighting the limitations of regional mean assessments and the need for high-resolution, climate-informed mitigation and adaptation planning.',
    href: '/publications/pm25-geoai-taiwan-2026.pdf',
    journal: 'Journal of Environmental Management',
  },
  {
    id: 1,
    badge: 'Latest Publication',
    title: 'Health Co-Benefits and Low-Income Residential Weatherization in the United States',
    authors: 'Bruce Tonn, Erin Rose, Michaela Marincic',
    organization: 'Three3, Inc.',
    date: 'May 2026',
    abstract: 'A new report highlights how residential weatherization programs can improve indoor living conditions, reduce household energy burdens, and support long-term community resilience in low-income households across the United States. The report examines how energy efficiency improvements such as insulation, air sealing, and HVAC upgrades can lead to broader household benefits beyond energy savings. Findings show that weatherization can improve indoor comfort, reduce drafts and noise, support better sleep and physical health, and ease financial stress related to utility costs. The study also discusses how weatherization programs may strengthen resilience to extreme temperatures and climate-related stressors while supporting healthier indoor environments.',
    href: '/publications/health-co-benefits-low-income-residential-weatherization-united-states-2026.pdf',
    journal: 'Report · Three3, Inc.',
  },
  {
    id: 2,
    title: 'An Invisible Threat? Exploring the Physical and Mental Health Risks of Coal Air Pollution in the United States',
    authors: 'Chien-fei Chen, Hang Shuai, R. Alexander Bentley, Lyudmyla Tsykalova, Zhenglai Shen',
    abstract: 'This study investigates the association between coal-related fine particulate matter (PM₂.₅) exposure and health outcomes across U.S. counties. Using county-level data for 2020 and nine indicators of physical and mental health conditions, the study examines how coal-related air pollution and household energy burdens jointly influence population health. The results show that even small increases in coal-related PM₂.₅ exposure are significantly associated with higher prevalence of several health conditions, including chronic obstructive pulmonary disease (COPD), diabetes, and mental health disorders. These effects vary geographically and are strongest in the southeastern United States. The study further finds that high household energy burdens amplify the negative health impacts of coal-related pollution. The findings highlight persistent regional inequalities and underscore the need for targeted policies to reduce exposure and address energy-related environmental injustice.',
    href: '/publications/Coal PM2.5 and Health_Chen.pdf',
  },
  {
    id: 3,
    title: 'Electric Power Reliability, Energy Burdens, and Climate Change Beliefs in the United States',
    authors: 'Hang Shuai, Chien-Fei Chen, Benjamin Sovacool, Suzanna Sumkhuu, Zhenglai Shen',
    abstract: 'This study explores whether power outages and household energy burdens are associated with public beliefs about climate change across the United States. Using county-level geospatial regression analysis, the research examines how electricity reliability and economic energy stress influence climate change perceptions. The results show that longer power outages are significantly associated with stronger climate change beliefs. However, the interaction between outages and energy burdens reveals a complex pattern: in several U.S. regions, higher energy costs weaken the belief-enhancing effect of outage experiences. These findings suggest that infrastructure disruptions and energy affordability play important roles in shaping public attitudes toward climate change, with implications for risk communication and climate policy.',
    href: '/publications/electric-power-reliability-energy-burdens-and-climate-change-beliefs-in-the-united-states.pdf',
    journal: 'Environmental Science & Technology',
  },
  {
    id: 4,
    title: 'The Equity Implications of Pecuniary Externalities on an Electric Grid',
    authors: 'Charles Sims, Gasser G. Ali, J. Scott Holladay, Tim Roberson, Chien-fei Chen, Islam H. El-adaway',
    abstract: 'This research examines how the adoption of rooftop photovoltaic (PV) systems by high-income households affects electricity costs for low- and middle-income households. Using an agent-based computational economic model combined with experimental data on solar adoption preferences, the study finds that widespread solar adoption among high-income households can increase electricity bills for low-income customers because utilities must recover fixed costs from a shrinking customer base. In the case study region, this pecuniary externality increases electricity bills for low-income households by approximately 10%, resulting in a collective annual increase of about $7.8 million. Although higher electricity rates may slightly increase solar adoption among low-income households, the benefits are insufficient to offset the financial burden. The study highlights the equity challenges of distributed renewable energy transitions and suggests that current assistance programs may not fully address these disparities.',
    href: '/publications/Equity implications of pecuniary externalities on an electrid grid.pdf',
  },
  {
    id: 5,
    title: 'Public Support for Mobile Community Microgrids: Socioeconomic, Perceptual and Outage Experience Determinants of Energy Resilience',
    authors: 'Junkang Xu, Chien-fei Chen, Yu Wang',
    abstract: 'This study examines the social and perceptual factors that influence public support for mobile community microgrids (MCMs) as a strategy to enhance energy resilience. Based on a nationally representative survey of nearly 2,000 U.S. residents, hierarchical regression analysis identifies key predictors of acceptance. The results show that the strongest drivers of support include the desire for improved power reliability, expectations of faster disaster response, and lower electricity costs. Experience with frequent power outages also increases support for microgrids. The study further finds that outage experiences influence preferences for where microgrids should be deployed, with respondents experiencing frequent outages prioritizing residential and disadvantaged communities. The findings emphasize the importance of public perceptions, equity considerations, and outage experiences in shaping support for resilient energy infrastructure.',
    href: '/publications/Public support for microgrids.pdf',
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
              style={{ borderLeft: pub.badge ? '3px solid #2e9d8f' : '3px solid #0B5FA5' }}
            >
              {/* Badge row */}
              {pub.badge && (
                <div className="px-5 md:px-6 pt-3 pb-0">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold" style={{ background: '#2e9d8f', color: 'white' }}>
                    {pub.badge}
                  </span>
                  {pub.date && (
                    <span className="ml-2 text-[11px]" style={{ color: 'var(--muted)' }}>{pub.date}</span>
                  )}
                </div>
              )}
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

              {/* View Article / Download PDF actions */}
              {pub.doiUrl && (
                <div className="flex items-start gap-4 md:gap-5 px-5 md:px-6 pb-5">
                  <div className="w-9 flex-shrink-0" />
                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href={pub.doiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium hover:underline"
                      style={{ color: '#0B5FA5' }}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      View Article
                    </a>
                    <a
                      href={pub.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium hover:underline"
                      style={{ color: '#0B5FA5' }}
                    >
                      <Download className="w-3.5 h-3.5" />
                      Download PDF
                    </a>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
