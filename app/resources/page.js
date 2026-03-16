'use client'

import { useState } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { ExternalLink, Database, Home, CloudRain, Building, Heart, ChevronRight } from 'lucide-react'

// ===================================================================
// STRUCTURED DATA \u2014 All content preserved exactly as source
// ===================================================================

const resourceData = [
  {
    id: 'public-health-data',
    title: 'Public Health Data & Longitudinal Surveys',
    icon: Database,
    description: 'This section highlights nationally representative longitudinal and population-based datasets widely used in public health and social science research. These resources support research on health behaviors, health outcomes, social determinants of health, and life-course dynamics, and are valuable for studies linking health, housing, energy, and environmental conditions.',
    subcategories: [
      {
        id: 'ph-datasets',
        label: 'All Datasets',
        resources: [
          {
            title: 'National Longitudinal Study of Adolescent to Adult Health (Add Health)',
            url: 'https://dupri.duke.edu/national-longitudinal-study-adolescent-adult-health',
            description: 'The National Longitudinal Study of Adolescent to Adult Health (Add Health) is a nationally representative longitudinal study that follows U.S. adolescents from grades 7\u201312 in the 1994\u201395 school year into adulthood. The study includes multiple waves of data capturing physical and mental health, health behaviors, family background, education, and social contexts. Add Health is widely used to examine life-course health trajectories, social determinants of health, and population health disparities.',
          },
          {
            title: 'National Longitudinal Survey of Youth 1979 (NLSY79)',
            url: 'https://dupri.duke.edu/national-longitudinal-survey-youth-1979',
            description: 'The National Longitudinal Survey of Youth 1979 (NLSY79) follows a nationally representative cohort of individuals born between 1957 and 1964. Since 1979, the survey has collected detailed information on employment, income, education, family formation, and health. NLSY79 is a key resource for studying long-term socioeconomic conditions and their relationships with health and well-being across the life course.',
          },
          {
            title: 'Panel Study of Income Dynamics (PSID)',
            url: 'https://dupri.duke.edu/panel-study-income-dynamics',
            description: 'The Panel Study of Income Dynamics (PSID) is the longest-running nationally representative longitudinal household survey in the United States. Beginning in 1968, PSID tracks families and their descendants over time, collecting data on income, wealth, housing, employment, and health. The dataset supports research on economic inequality, health disparities, and intergenerational mobility.',
          },
          {
            title: 'National Health and Nutrition Examination Survey (NHANES)',
            url: 'https://dupri.duke.edu/national-health-and-nutrition-examination-survey',
            description: 'The National Health and Nutrition Examination Survey (NHANES) is a nationally representative survey conducted by the Centers for Disease Control and Prevention that combines interviews, physical examinations, and laboratory tests. NHANES provides critical data on population health, nutrition, chronic disease prevalence, and environmental exposures, and is widely used in public health research and policy analysis.',
          },
        ],
      },
    ],
  },
  {
    id: 'energy-housing',
    title: 'Energy & Housing',
    icon: Home,
    description: null,
    subcategories: [
      {
        id: 'weatherization',
        label: 'A. Weatherization',
        description: 'Educational resources and official programs that support home weatherization, energy efficiency improvements, and health benefits especially for low- and moderate-income households.',
        resources: [
          { title: 'How Weatherization Works', url: 'https://www.energy.gov/scep/weatherization/how-weatherization-works', description: 'An overview of common weatherization measures, including insulation, air sealing, heating and cooling system improvements, and health & safety checks.' },
          { title: 'Weatherization and Health & Safety', url: 'https://www.energy.gov/scep/weatherization/health-and-safety', description: 'Information on how DOE weatherization addresses indoor air quality, moisture, mold, ventilation, and other health-related issues.' },
          { title: 'Weatherization Best Practices (NREL)', url: 'https://www.nrel.gov/buildings/weatherization.html', description: 'Research-based guidance on effective weatherization strategies, building performance, and energy savings.' },
          { title: 'Residential Energy Efficiency Resources (NREL)', url: 'https://www.nrel.gov/buildings/residential.html', description: 'Technical and educational materials on home energy efficiency and retrofit strategies.' },
          { title: 'Healthy Indoor Environment & Weatherization (EPA)', url: 'https://www.epa.gov/indoor-air-quality-iaq', description: 'Resources on improving indoor air quality and reducing health risks through home energy improvements.' },
          { title: 'Indoor Air Quality Tools for Homes (EPA)', url: 'https://www.epa.gov/indoor-air-quality-iaq/iaq-tools-home', description: 'Practical guidance for reducing indoor pollutants, improving ventilation, and maintaining healthy homes.' },
          { title: 'Energy Saver (DOE Consumer Guide)', url: 'https://www.energy.gov/energysaver', description: 'Easy-to-understand tips on insulation, air sealing, heating, cooling, and home energy upgrades for households.' },
          { title: 'Low-Income Energy Affordability Network (LEAN)', url: 'https://www.li-en.org', description: 'A collaborative network sharing best practices and resources to support energy affordability and efficiency programs.' },
          { title: 'Weatherization Plus Health Initiative (DOE)', url: 'https://www.energy.gov/scep/weatherization/weatherization-plus-health', description: 'Integrates energy efficiency improvements with health interventions to maximize benefits for vulnerable households.' },
          { title: 'National Academies & Federal Reports on Weatherization and Health', url: 'https://nap.nationalacademies.org', description: 'Summaries of research linking home energy improvements with health, safety, and economic benefits.' },
        ],
      },
      {
        id: 'electrification',
        label: 'B. Electrification',
        description: 'Resources on building electrification, clean energy transitions, and household energy usage.',
        resources: [
          { title: 'Energy Saver Home Electrification', url: 'https://www.energy.gov/energysaver/electrification', description: 'Consumer-focused guidance on electric heating, cooking, and appliances.' },
          { title: 'Building Electrification & Decarbonization Research (LBNL)', url: 'https://buildings.lbl.gov', description: 'Research on heat pumps, induction cooking, electrical panel capacity, and equity considerations.' },
          { title: 'Rewiring America', url: 'https://www.rewiringamerica.org', description: 'Practical guidance on electrification incentives, household benefits, and workforce development.' },
          { title: 'ACEEE Building Electrification', url: 'https://www.aceee.org/topic/building-electrification', description: 'Analysis of electrification impacts on energy affordability, emissions, and health.' },
        ],
      },
      {
        id: 'indoor-air-quality',
        label: 'C. Indoor Air Quality & Health',
        description: 'Resources connecting indoor air quality, housing conditions, and physical and mental health outcomes.',
        resources: [
          { title: 'Indoor Air Quality (IAQ) (EPA)', url: 'https://www.epa.gov/indoor-air-quality-iaq', description: 'Comprehensive guidance on indoor pollutants, ventilation, and healthy homes.' },
          { title: 'IAQ Tools for Homes (EPA)', url: 'https://www.epa.gov/indoor-air-quality-iaq/iaq-tools-homes', description: 'Practical, easy-to-use resources for households and community educators.' },
          { title: 'Healthy Homes (CDC)', url: 'https://www.cdc.gov/healthyhomes', description: 'Information on housing-related health risks, including mold, combustion pollutants, and ventilation.' },
          { title: 'Indoor Air Quality & Health (Harvard T.H. Chan)', url: 'https://www.hsph.harvard.edu/iaq/', description: 'Research linking indoor environments, air pollution, and health outcomes.' },
          { title: 'WHO Housing and Health Guidelines', url: 'https://www.who.int/publications/i/item/9789241550376', description: 'International evidence-based recommendations on healthy housing conditions.' },
        ],
      },
      {
        id: 'microgrids',
        label: 'D. Microgrids',
        description: 'Resources on community microgrids, distributed energy systems, and energy justice focused on resilience solutions.',
        resources: [
          { title: 'Community Microgrids (DOE)', url: 'https://www.energy.gov/oe/community-microgrids', description: 'Overview of how community microgrids enhance energy resilience, reliability, and equity especially during extreme weather and power outages.' },
          { title: 'Office of Electricity Microgrid Research (DOE)', url: 'https://www.energy.gov/oe/microgrids', description: 'DOE research programs supporting microgrid planning, design, and deployment.' },
          { title: 'Microgrid Research and Analysis (NREL)', url: 'https://www.nrel.gov/grid/microgrids.html', description: 'Tools, case studies, and technical guidance for designing and evaluating microgrids.' },
          { title: 'Resilient Energy Systems & Microgrids (NREL)', url: 'https://www.nrel.gov/resilience', description: 'Research on how microgrids support critical facilities and vulnerable communities.' },
          { title: 'Clean Energy Group: Resilient Power Project', url: 'https://www.cleanegroup.org/ceg-project/resilient-power-project/', description: 'Case studies and policy guidance on solar+storage microgrids for affordable housing and critical services.' },
          { title: 'Rocky Mountain Institute (RMI): Community Energy Resilience', url: 'https://rmi.org/our-work/electricity/community-energy-resilience/', description: 'Strategies for equitable and community-centered energy resilience planning.' },
        ],
      },
      {
        id: 'resilience-actions',
        label: 'E. Resilience Actions or Plans',
        description: null,
        crossReference: 'climate-community-resilience',
        resources: [],
      },
      {
        id: 'energy-burden',
        label: 'F. Energy Burden & Housing Affordability',
        description: 'Resources on housing affordability, low-income energy assistance programs, and energy burden data.',
        resources: [
          { title: "Housing Our Future: Charleston County\u2019s Comprehensive Plan for Housing & Housing Affordability", url: 'https://www.charlestoncounty.org/departments/da-community-services/files/Housing%20Our%20Future_Final_Spring%202023.pdf', description: 'Charleston County. (2023). Comprehensive plan addressing housing affordability in Charleston County.' },
          { title: 'Low-Income Household Energy Burden Varies Among States\u2014Efficiency Can Help in All of Them', url: 'https://www.energy.gov/sites/default/files/2019/01/f58/WIP-Energy-Burden_final.pdf', description: 'U.S. Department of Energy, Weatherization and Intergovernmental Programs. (2019). Report on low-income household energy burden across states.' },
          { title: 'How Energy Efficiency Can Help Low-Income Households in South Carolina', url: 'https://www.aceee.org/sites/default/files/pdf/fact-sheet/ses-southcarolina-100917.pdf', description: 'American Council for an Energy-Efficient Economy. (2017). Fact sheet on energy efficiency benefits for low-income households in South Carolina.' },
          { title: 'Low Income Home Energy Assistance Program (LIHEAP) Model State Plan, Fiscal Year 2025', url: 'https://oeo.sc.gov/managedsites/prd/oeo/documents/DRAFT%202025%20LIHEAP%20Model%20State%20Plan_5.2024.pdf', description: 'South Carolina Office of Economic Opportunity. (2024). Unpublished state plan for LIHEAP fiscal year 2025.' },
        ],
      },
    ],
  },
  {
    id: 'climate-community-resilience',
    title: 'Climate & Community Resilience',
    icon: CloudRain,
    description: 'This section brings together resources on climate resilience, extreme weather preparedness, and community-based planning. The materials focus on how communities\u2014particularly vulnerable and underserved populations\u2014can anticipate, prepare for, and respond to climate-related risks through policy, planning, and cross-sector collaboration.',
    subcategories: [
      {
        id: 'federal-national',
        label: 'A. Federal & National Climate Resilience Resources',
        resources: [
          { title: 'Building Community Resilience (FEMA)', url: 'https://www.fema.gov/emergency-managers/risk-management/resilience', description: 'Guidance and tools to help communities prepare for, respond to, and recover from climate-related disasters and extreme events.' },
          { title: 'Climate Resilience Toolkit (NOAA)', url: 'https://toolkit.climate.gov', description: 'A collection of tools, datasets, and case studies that support climate-informed decision-making for communities, planners, and policymakers.' },
        ],
      },
      {
        id: 'planning-community',
        label: 'B. Planning & Community-Based Resilience Networks',
        resources: [
          { title: 'Urban Sustainability Directors Network (USDN)', url: 'https://www.usdn.org', description: 'A peer network and resource hub for local government leaders advancing sustainability and equity-focused climate resilience planning.' },
          { title: 'Resilience & Hazard Mitigation (American Planning Association)', url: 'https://www.planning.org/knowledgebase/resilience/', description: 'Planning frameworks and best practices that integrate climate risks, public health, and infrastructure resilience into local and regional planning.' },
        ],
      },
      {
        id: 'health-energy-climate',
        label: 'C. Health, Energy, and Climate Resilience',
        resources: [
          { title: 'Climate & Health Program (HHS)', url: 'https://www.hhs.gov/climate-change-health-equity-environmental-justice', description: 'Resources linking climate impacts to health risks and supporting integrated approaches to health-informed resilience planning.' },
        ],
      },
      {
        id: 'state-regional',
        label: 'D. State & Regional Resilience Planning (South Carolina)',
        resources: [
          { title: 'South Carolina Resilience Planning Archives (South Carolina Sea Grant Consortium)', url: 'https://www.scseagrant.org/resilience-planning/', description: 'A collection of resilience planning documents, proposals, and resources related to climate adaptation and hazard mitigation in South Carolina.' },
          { title: 'South Carolina Office of Resilience', url: 'https://scor.sc.gov/', description: 'State-level resources on resilience planning, mitigation strategies, and climate-related policies.' },
        ],
      },
      {
        id: 'research-reports',
        label: 'E. Research & Reports',
        resources: [
          { title: "Participatory and Spatial Analyses of Environmental Justice Communities\u2019 Concerns About a Proposed Storm Surge and Flood Protection Seawall", url: 'https://doi.org/10.3390/ijerph191811192', description: 'Taylor, J., Levine, N. S., Muhammad, E., Porter, D. E., Watson, A. M., & Sandifer, P. A. (2022). International Journal of Environmental Research and Public Health, 19(18), 11192.' },
          { title: 'Community as an Equal Partner for Region-Based Climate Change Vulnerability, Risk, and Resilience Assessments', url: 'https://doi.org/10.1016/j.cosust.2019.06.005', description: 'Cains, M. G., & Henshel, D. (2019). Current Opinion in Environmental Sustainability, 39, 24\u201330.' },
          { title: "Evolving Approaches to Vulnerability, Resilience, and Equity in Charleston, South Carolina\u2019s Planning Process", url: 'https://etd.ohiolink.edu/acprod/odb_etd/ws/send_file/send?accession=miami1689810018231528&disposition=inline', description: "Varel, E. C. (2023). Unpublished master's thesis. Miami University, Oxford, OH." },
          { title: 'Present and Future Sea Level Rise at the Intersection of Race and Poverty in the Carolinas: A Geospatial Analysis', url: 'https://www.sciencedirect.com/science/article/pii/S2667278221000250?via%3Dihub', description: 'Handwerger, L. R., Sugg, M. M., & Runkle, J. D. (2021). Science of the Total Environment, 776, 145912.' },
          { title: 'Flooding and Sea Level Rise Strategy (2nd ed.)', url: 'https://www.charleston-sc.gov/1981/Flooding-Sea-Level-Rise-Strategy', description: 'City of Charleston. (2019). City of Charleston Flooding and Sea Level Rise Strategy.' },
          { title: 'All Hazards Vulnerability and Risk Assessment (HVRA)', url: 'https://www.charleston-sc.gov/1975/All-Hazards-Vulnerability-Risk-Assessmen', description: 'City of Charleston. (2020). City of Charleston All Hazards Vulnerability and Risk Assessment.' },
          { title: 'Climate Risk Assessment: Charleston County, South Carolina', url: 'https://www.woodwellclimate.org/climate-risk-assessment-charleston-county-south-carolina/', description: 'Woodwell Climate Research Center. (2023). Climate risk assessment for Charleston County, South Carolina.' },
          { title: 'Strategic Statewide Resilience and Risk Reduction Plan: Chapter 4\u2014Climate Trends', url: 'https://scor.sc.gov/sites/scor/files/Documents/Chapter%204%20Climate%20Trends.pdf', description: 'South Carolina Office of Resilience. (2023). State report on climate trends in South Carolina.' },
          { title: 'Atlas of Disaster: South Carolina', url: 'https://rebuildbydesign.org/wp-content/uploads/2023/04/ATLAS-OF-DISASTER-compressed.pdf', description: 'Rebuild by Design. (2024). Report on disaster risks and resilience in South Carolina.' },
        ],
      },
    ],
  },
  {
    id: 'clemson-networks',
    title: 'Clemson University Networks & Internal Resources',
    icon: Building,
    description: null,
    subcategories: [
      {
        id: 'clemson-all',
        label: 'All Resources',
        resources: [
          { title: 'Building Healthy Communities at Clemson', url: 'https://www.clemson.edu/cbshs/about/building-healthy-communities.html', description: 'Building Healthy Communities is a college-wide effort to improve health and well-being in South Carolina by addressing the social determinants of health through research, partnerships, and community engagement.' },
          { title: 'Clemson University Center for Public Health Modeling and Response', url: 'https://www.clemson.edu/centers-institutes/public-health-modeling/', description: 'Tackles complex public health challenges with innovative solutions through collaborative approach, integrating the knowledge and skills to impactful research and deliver actionable insights for health organizations and communities.' },
        ],
      },
    ],
  },
  {
    id: 'community-engagement',
    title: 'Community Engagement Organizations',
    icon: Heart,
    description: 'Our research engages directly with community-based organizations, nonprofits, and advocacy groups committed to environmental justice, climate equity, and public health. These partners are central to our participatory research approach and help ensure that research outcomes benefit the communities most affected.',
    subcategories: [
      {
        id: 'ce-orgs',
        label: 'All Organizations',
        resources: [
          { title: 'Metanoia', url: 'https://www.metanoiacdc.org/', description: 'Community development and housing organization in Charleston.' },
          { title: 'Charleston Promise Neighborhood', url: 'https://www.charlestonpromise.org/', description: 'Comprehensive neighborhood revitalization initiative in North Charleston.' },
          { title: 'Engage Appalachia', url: 'https://engageappalachia.org/', description: 'Grassroots advocacy network focused on environmental and economic justice in Appalachia.' },
          { title: 'HOPE Credit Union (Formerly HOPE Policy Institute)', url: 'https://hopecu.org/', description: 'Financial services and advocacy for historically underserved communities in the Deep South.' },
          { title: 'Tennessee Interfaith Power & Light', url: 'https://www.tnipl.org/', description: 'Faith-based climate and environmental justice coalition.' },
          { title: 'Lowcountry Alliance for Model Communities', url: 'https://www.lamcnet.org/', description: 'Community development and affordable housing advocacy in the South Carolina Lowcountry.' },
          { title: 'Woodwell Climate Research Center', url: 'https://www.woodwellclimate.org/', description: 'Independent climate science research center focused on addressing climate risks.' },
        ],
      },
    ],
  },
]

// ===================================================================
// PRESENTATION COMPONENTS
// ===================================================================

function ResourceCard({ title, url, description }) {
  return (
    <div
      className="group rounded-lg border transition-colors hover:border-[rgba(11,95,165,0.2)]"
      style={{
        background: 'white',
        borderColor: 'rgba(12, 35, 64, 0.08)',
      }}
    >
      <div className="px-5 py-4">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-start gap-2 text-[15px] font-semibold leading-snug transition-colors hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0B5FA5] rounded"
          style={{ color: '#0B5FA5' }}
        >
          <span className="flex-1">{title}</span>
          <ExternalLink className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 opacity-40 group-hover:opacity-80 transition-opacity" />
        </a>
        <p
          className="text-sm leading-relaxed mt-2"
          style={{ color: '#4a5568' }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}

function SubcategoryPill({ label, isActive, count, onClick }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#0B5FA5]"
      style={{
        background: isActive ? '#0B5FA5' : 'white',
        color: isActive ? 'white' : '#4a5568',
        border: isActive ? '1px solid #0B5FA5' : '1px solid rgba(12, 35, 64, 0.15)',
      }}
    >
      {label}
      <span
        className="text-xs rounded-full px-1.5 py-0.5"
        style={{
          background: isActive ? 'rgba(255,255,255,0.2)' : 'rgba(12, 35, 64, 0.06)',
          color: isActive ? 'rgba(255,255,255,0.9)' : '#6b7280',
        }}
      >
        {count}
      </span>
    </button>
  )
}

// ===================================================================
// PAGE COMPONENT
// ===================================================================

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState('public-health-data')
  const [activeSubcategories, setActiveSubcategories] = useState({})

  const currentSection = resourceData.find((s) => s.id === activeCategory)

  const getActiveSubcategory = (sectionId) => {
    const section = resourceData.find((s) => s.id === sectionId)
    if (!section || section.subcategories.length <= 1) return section?.subcategories[0]?.id
    return activeSubcategories[sectionId] || section.subcategories[0].id
  }

  const setSubcategory = (sectionId, subcatId) => {
    setActiveSubcategories((prev) => ({ ...prev, [sectionId]: subcatId }))
  }

  const totalResources = (section) =>
    section.subcategories.reduce((sum, sub) => sum + sub.resources.length, 0)

  return (
    <div style={{ background: '#f8fafc' }}>
      <Breadcrumbs items={[{ label: 'Resources' }]} />

      {/* Page Header */}
      <section
        className="py-6 md:py-10"
        style={{ background: 'white', borderBottom: '1px solid rgba(12, 35, 64, 0.1)' }}
      >
        <div className="mx-auto px-4 md:px-6" style={{ maxWidth: '1200px' }}>
          <h1
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: '#0c2340' }}
          >
            Resources
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: '#4a5568', maxWidth: '720px' }}
          >
            External tools, programs, educational materials, and organizations related to Empower Health topics.
          </p>
        </div>
      </section>

      {/* Main Layout */}
      <div className="py-8 md:py-10">
        <div className="mx-auto px-4 md:px-6" style={{ maxWidth: '1200px' }}>

          {/* Mobile Category Selector */}
          <div className="lg:hidden mb-6">
            <label
              htmlFor="category-select"
              className="block text-sm font-medium mb-2"
              style={{ color: '#4a5568' }}
            >
              Select Category
            </label>
            <select
              id="category-select"
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg text-sm border focus:outline-none focus:ring-2 focus:ring-[#0B5FA5]"
              style={{
                background: 'white',
                borderColor: 'rgba(12, 35, 64, 0.2)',
                color: '#0c2340',
              }}
            >
              {resourceData.map((section) => (
                <option key={section.id} value={section.id}>
                  {section.title} ({totalResources(section)})
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-8">

            {/* Left Sidebar \u2014 Sticky Category Nav */}
            <aside className="w-[260px] flex-shrink-0 hidden lg:block">
              <div className="sticky top-24">
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-3 px-3"
                  style={{ color: '#9ca3af' }}
                >
                  Categories
                </p>
                <nav className="space-y-0.5">
                  {resourceData.map((section) => {
                    const IconComponent = section.icon
                    const isActive = activeCategory === section.id
                    const count = totalResources(section)

                    return (
                      <button
                        key={section.id}
                        onClick={() => setActiveCategory(section.id)}
                        className="w-full text-left px-3 py-2.5 rounded-lg transition-all flex items-center gap-2.5 group"
                        style={{
                          background: isActive ? 'rgba(11, 95, 165, 0.07)' : 'transparent',
                          borderLeft: isActive ? '3px solid #F56600' : '3px solid transparent',
                          color: isActive ? '#0c2340' : '#4a5568',
                        }}
                      >
                        <IconComponent
                          className="w-4 h-4 flex-shrink-0"
                          style={{ color: isActive ? '#0B5FA5' : '#9ca3af' }}
                        />
                        <span className="text-sm font-medium leading-snug flex-1">
                          {section.title}
                        </span>
                        <span
                          className="text-xs tabular-nums"
                          style={{ color: isActive ? '#0B5FA5' : '#9ca3af' }}
                        >
                          {count}
                        </span>
                      </button>
                    )
                  })}
                </nav>
              </div>
            </aside>

            {/* Right Content Area */}
            <div className="flex-1 min-w-0">
              {currentSection && (
                <div>
                  {/* Section Title */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <currentSection.icon
                        className="w-5 h-5 flex-shrink-0"
                        style={{ color: '#0B5FA5' }}
                      />
                      <h2
                        className="text-xl md:text-2xl font-bold"
                        style={{ color: '#0c2340' }}
                      >
                        {currentSection.title}
                      </h2>
                    </div>
                    {currentSection.description && (
                      <p
                        className="text-[15px] leading-7"
                        style={{ color: '#4a5568' }}
                      >
                        {currentSection.description}
                      </p>
                    )}
                  </div>

                  {/* Subcategory Pills \u2014 only shown when >1 subcategory */}
                  {currentSection.subcategories.length > 1 && (
                    <div
                      className="flex flex-wrap gap-2 pb-5 mb-6"
                      style={{ borderBottom: '1px solid rgba(12, 35, 64, 0.08)' }}
                    >
                      {currentSection.subcategories.map((sub) => (
                        <SubcategoryPill
                          key={sub.id}
                          label={sub.label}
                          count={sub.resources.length}
                          isActive={getActiveSubcategory(currentSection.id) === sub.id}
                          onClick={() => setSubcategory(currentSection.id, sub.id)}
                        />
                      ))}
                    </div>
                  )}

                  {/* Active Subcategory Content */}
                  {currentSection.subcategories.map((sub) => {
                    const isVisible =
                      currentSection.subcategories.length <= 1 ||
                      getActiveSubcategory(currentSection.id) === sub.id

                    if (!isVisible) return null

                    return (
                      <div key={sub.id}>
                        {/* Subcategory description */}
                        {sub.description && (
                          <p
                            className="text-[15px] leading-7 mb-5"
                            style={{ color: '#4a5568' }}
                          >
                            {sub.description}
                          </p>
                        )}

                        {/* Cross-reference */}
                        {sub.crossReference && (
                          <p
                            className="text-[15px] leading-7 mb-5"
                            style={{ color: '#4a5568' }}
                          >
                            See{' '}
                            <button
                              onClick={() => setActiveCategory(sub.crossReference)}
                              className="font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-[#0B5FA5] rounded"
                              style={{ color: '#0B5FA5' }}
                            >
                              Climate & Community Resilience
                            </button>
                            {' '}below for resilience planning resources.
                          </p>
                        )}

                        {/* Resource Cards Grid */}
                        {sub.resources.length > 0 && (
                          <div className="grid grid-cols-1 gap-3">
                            {sub.resources.map((resource, idx) => (
                              <ResourceCard
                                key={idx}
                                title={resource.title}
                                url={resource.url}
                                description={resource.description}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
