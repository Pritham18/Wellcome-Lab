'use client'

import { useState } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { ExternalLink, Database, Home, CloudRain, Building, Heart } from 'lucide-react'

// Section data
const sections = [
  { id: 'public-health-data', title: 'Public Health Data & Longitudinal Surveys', icon: Database },
  { id: 'energy-housing', title: 'Energy & Housing', icon: Home },
  { id: 'climate-community-resilience', title: 'Climate & Community Resilience', icon: CloudRain },
  { id: 'clemson-networks', title: 'Clemson University Networks & Internal Resources', icon: Building },
  { id: 'community-engagement', title: 'Community Engagement Organizations', icon: Heart }
]

// Resource Link Component
function ResourceLink({ title, url, description }) {
  return (
    <div 
      className="py-4 group"
      style={{ borderBottom: '1px solid rgba(12, 35, 64, 0.08)' }}
    >
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-base font-semibold mb-1.5 transition-colors hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0B5FA5] rounded"
        style={{ color: '#0B5FA5' }}
      >
        {title}
        <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
      </a>
      <p 
        className="text-sm leading-relaxed mt-1.5"
        style={{ color: '#4a5568' }}
      >
        {description}
      </p>
    </div>
  )
}

// Section Banner Component
function SectionBanner({ id, title, icon: IconComponent }) {
  return (
    <div 
      id={id}
      className="py-5 px-6 mb-6 rounded-lg flex items-center gap-4 scroll-mt-24"
      style={{ 
        background: 'linear-gradient(135deg, rgba(11, 95, 165, 0.08) 0%, rgba(45, 159, 124, 0.06) 100%)',
        borderLeft: '4px solid #F56600'
      }}
    >
      <div 
        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: 'rgba(11, 95, 165, 0.12)' }}
      >
        <IconComponent className="w-5 h-5" style={{ color: '#0B5FA5' }} />
      </div>
      <h2 
        className="text-xl md:text-2xl font-bold"
        style={{ color: '#0c2340' }}
      >
        {title}
      </h2>
    </div>
  )
}

// Subsection Header Component
function SubsectionHeader({ title }) {
  return (
    <h3 
      className="text-sm font-semibold uppercase tracking-wider mb-4 mt-8 pb-2"
      style={{ 
        color: '#6b7280',
        borderBottom: '1px solid rgba(12, 35, 64, 0.1)'
      }}
    >
      {title}
    </h3>
  )
}

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState('public-health-data')

  return (
    <div style={{ background: '#f8fafc' }} className="bg-gradient-mesh">
      <Breadcrumbs 
        items={[
          { label: 'Resources' }
        ]} 
      />
      
      {/* Page Header */}
      <section 
        className="py-6 md:py-10"
        style={{ background: 'white', borderBottom: '1px solid rgba(12, 35, 64, 0.1)' }}
      >
        <div className="mx-auto px-4 md:px-6" style={{ maxWidth: '1400px' }}>
          <h1 
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: '#0c2340' }}
          >
            Resources
          </h1>
          <p 
            className="text-lg leading-relaxed"
            style={{ color: '#4a5568' }}
          >
            External tools, programs, educational materials, and organizations related to EMPOWER-ALL topics.
          </p>
        </div>
      </section>

      {/* Two-Column Layout */}
      <div className="py-8 md:py-10">
        <div className="mx-auto px-4 md:px-6" style={{ maxWidth: '1400px' }}>
          
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
                color: '#0c2340'
              }}
            >
              {sections.map((section) => (
                <option key={section.id} value={section.id}>
                  {section.title}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-8">
            
            {/* Left Sidebar Navigation */}
            <aside className="w-[280px] flex-shrink-0 hidden lg:block">
              <div className="sticky top-24">
                <nav className="space-y-1">
                  {sections.map((section) => {
                    const IconComponent = section.icon
                    const isActive = activeCategory === section.id
                    
                    return (
                      <button
                        key={section.id}
                        onClick={() => setActiveCategory(section.id)}
                        className="w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 group"
                        style={{
                          background: isActive ? 'rgba(11, 95, 165, 0.08)' : 'transparent',
                          borderLeft: isActive ? '3px solid #F56600' : '3px solid transparent',
                          color: isActive ? '#0c2340' : '#4a5568'
                        }}
                      >
                        <IconComponent 
                          className="w-5 h-5 flex-shrink-0" 
                          style={{ color: isActive ? '#0B5FA5' : '#9ca3af' }} 
                        />
                        <span className="text-sm font-medium leading-snug">
                          {section.title}
                        </span>
                      </button>
                    )
                  })}
                </nav>
              </div>
            </aside>

            {/* Right Content Area */}
            <div className="flex-1 min-w-0">
          
          {/* Section 1: Public Health Data & Longitudinal Surveys */}
          {activeCategory === 'public-health-data' && (
          <section>
            <SectionBanner id="public-health-data" title="Public Health Data & Longitudinal Surveys" icon={Database} />
            
            <p 
              className="text-base leading-7 mb-6"
              style={{ color: '#4a5568' }}
            >
              This section highlights nationally representative longitudinal and population-based datasets widely used in public health and social science research. These resources support research on health behaviors, health outcomes, social determinants of health, and life-course dynamics, and are valuable for studies linking health, housing, energy, and environmental conditions.
            </p>

            <div>
              <ResourceLink 
                title="National Longitudinal Study of Adolescent to Adult Health (Add Health)"
                url="https://dupri.duke.edu/national-longitudinal-study-adolescent-adult-health"
                description="The National Longitudinal Study of Adolescent to Adult Health (Add Health) is a nationally representative longitudinal study that follows U.S. adolescents from grades 7–12 in the 1994–95 school year into adulthood. The study includes multiple waves of data capturing physical and mental health, health behaviors, family background, education, and social contexts. Add Health is widely used to examine life-course health trajectories, social determinants of health, and population health disparities."
              />
              <ResourceLink 
                title="National Longitudinal Survey of Youth 1979 (NLSY79)"
                url="https://dupri.duke.edu/national-longitudinal-survey-youth-1979"
                description="The National Longitudinal Survey of Youth 1979 (NLSY79) follows a nationally representative cohort of individuals born between 1957 and 1964. Since 1979, the survey has collected detailed information on employment, income, education, family formation, and health. NLSY79 is a key resource for studying long-term socioeconomic conditions and their relationships with health and well-being across the life course."
              />
              <ResourceLink 
                title="Panel Study of Income Dynamics (PSID)"
                url="https://dupri.duke.edu/panel-study-income-dynamics"
                description="The Panel Study of Income Dynamics (PSID) is the longest-running nationally representative longitudinal household survey in the United States. Beginning in 1968, PSID tracks families and their descendants over time, collecting data on income, wealth, housing, employment, and health. The dataset supports research on economic inequality, health disparities, and intergenerational mobility."
              />
              <ResourceLink 
                title="National Health and Nutrition Examination Survey (NHANES)"
                url="https://dupri.duke.edu/national-health-and-nutrition-examination-survey"
                description="The National Health and Nutrition Examination Survey (NHANES) is a nationally representative survey conducted by the Centers for Disease Control and Prevention that combines interviews, physical examinations, and laboratory tests. NHANES provides critical data on population health, nutrition, chronic disease prevalence, and environmental exposures, and is widely used in public health research and policy analysis."
              />
            </div>
          </section>
          )}

          {/* Section 2: Energy & Housing */}
          {activeCategory === 'energy-housing' && (
          <section>
            <SectionBanner id="energy-housing" title="Energy & Housing" icon={Home} />
            
            {/* A. Weatherization */}
            <SubsectionHeader title="A. Weatherization" />
            <p 
              className="text-base leading-7 mb-4"
              style={{ color: '#4a5568' }}
            >
              Educational resources and official programs that support home weatherization, energy efficiency improvements, and health benefits especially for low- and moderate-income households.
            </p>
            <div className="mb-8">
              <ResourceLink 
                title="How Weatherization Works"
                url="https://www.energy.gov/scep/weatherization/how-weatherization-works"
                description="An overview of common weatherization measures, including insulation, air sealing, heating and cooling system improvements, and health & safety checks."
              />
              <ResourceLink 
                title="Weatherization and Health & Safety"
                url="https://www.energy.gov/scep/weatherization/health-and-safety"
                description="Information on how DOE weatherization addresses indoor air quality, moisture, mold, ventilation, and other health-related issues."
              />
              <ResourceLink 
                title="Weatherization Best Practices (NREL)"
                url="https://www.nrel.gov/buildings/weatherization.html"
                description="Research-based guidance on effective weatherization strategies, building performance, and energy savings."
              />
              <ResourceLink 
                title="Residential Energy Efficiency Resources (NREL)"
                url="https://www.nrel.gov/buildings/residential.html"
                description="Technical and educational materials on home energy efficiency and retrofit strategies."
              />
              <ResourceLink 
                title="Healthy Indoor Environment & Weatherization (EPA)"
                url="https://www.epa.gov/indoor-air-quality-iaq"
                description="Resources on improving indoor air quality and reducing health risks through home energy improvements."
              />
              <ResourceLink 
                title="Indoor Air Quality Tools for Homes (EPA)"
                url="https://www.epa.gov/indoor-air-quality-iaq/iaq-tools-home"
                description="Practical guidance for reducing indoor pollutants, improving ventilation, and maintaining healthy homes."
              />
              <ResourceLink 
                title="Energy Saver (DOE Consumer Guide)"
                url="https://www.energy.gov/energysaver"
                description="Easy-to-understand tips on insulation, air sealing, heating, cooling, and home energy upgrades for households."
              />
              <ResourceLink 
                title="Low-Income Energy Affordability Network (LEAN)"
                url="https://www.li-en.org"
                description="A collaborative network sharing best practices and resources to support energy affordability and efficiency programs."
              />
              <ResourceLink 
                title="Weatherization Plus Health Initiative (DOE)"
                url="https://www.energy.gov/scep/weatherization/weatherization-plus-health"
                description="Integrates energy efficiency improvements with health interventions to maximize benefits for vulnerable households."
              />
              <ResourceLink 
                title="National Academies & Federal Reports on Weatherization and Health"
                url="https://nap.nationalacademies.org"
                description="Summaries of research linking home energy improvements with health, safety, and economic benefits."
              />
            </div>

            {/* B. Electrification */}
            <SubsectionHeader title="B. Electrification" />
            <p 
              className="text-base leading-7 mb-4"
              style={{ color: '#4a5568' }}
            >
              Resources on building electrification, clean energy transitions, and household energy usage.
            </p>
            <div className="mb-8">
              <ResourceLink 
                title="Energy Saver Home Electrification"
                url="https://www.energy.gov/energysaver/electrification"
                description="Consumer-focused guidance on electric heating, cooking, and appliances."
              />
              <ResourceLink 
                title="Building Electrification & Decarbonization Research (LBNL)"
                url="https://buildings.lbl.gov"
                description="Research on heat pumps, induction cooking, electrical panel capacity, and equity considerations."
              />
              <ResourceLink 
                title="Rewiring America"
                url="https://www.rewiringamerica.org"
                description="Practical guidance on electrification incentives, household benefits, and workforce development."
              />
              <ResourceLink 
                title="ACEEE Building Electrification"
                url="https://www.aceee.org/topic/building-electrification"
                description="Analysis of electrification impacts on energy affordability, emissions, and health."
              />
            </div>

            {/* C. Indoor Air Quality & Health */}
            <SubsectionHeader title="C. Indoor Air Quality & Health" />
            <p 
              className="text-base leading-7 mb-4"
              style={{ color: '#4a5568' }}
            >
              Resources connecting indoor air quality, housing conditions, and physical and mental health outcomes.
            </p>
            <div className="mb-8">
              <ResourceLink 
                title="Indoor Air Quality (IAQ) (EPA)"
                url="https://www.epa.gov/indoor-air-quality-iaq"
                description="Comprehensive guidance on indoor pollutants, ventilation, and healthy homes."
              />
              <ResourceLink 
                title="IAQ Tools for Homes (EPA)"
                url="https://www.epa.gov/indoor-air-quality-iaq/iaq-tools-homes"
                description="Practical, easy-to-use resources for households and community educators."
              />
              <ResourceLink 
                title="Healthy Homes (CDC)"
                url="https://www.cdc.gov/healthyhomes"
                description="Information on housing-related health risks, including mold, combustion pollutants, and ventilation."
              />
              <ResourceLink 
                title="Indoor Air Quality & Health (Harvard T.H. Chan)"
                url="https://www.hsph.harvard.edu/iaq/"
                description="Research linking indoor environments, air pollution, and health outcomes."
              />
              <ResourceLink 
                title="WHO Housing and Health Guidelines"
                url="https://www.who.int/publications/i/item/9789241550376"
                description="International evidence-based recommendations on healthy housing conditions."
              />
            </div>

            {/* D. Microgrids */}
            <SubsectionHeader title="D. Microgrids" />
            <p 
              className="text-base leading-7 mb-4"
              style={{ color: '#4a5568' }}
            >
              Resources on community microgrids, distributed energy systems, and energy justice focused on resilience solutions.
            </p>
            <div className="mb-8">
              <ResourceLink 
                title="Community Microgrids (DOE)"
                url="https://www.energy.gov/oe/community-microgrids"
                description="Overview of how community microgrids enhance energy resilience, reliability, and equity especially during extreme weather and power outages."
              />
              <ResourceLink 
                title="Office of Electricity Microgrid Research (DOE)"
                url="https://www.energy.gov/oe/microgrids"
                description="DOE research programs supporting microgrid planning, design, and deployment."
              />
              <ResourceLink 
                title="Microgrid Research and Analysis (NREL)"
                url="https://www.nrel.gov/grid/microgrids.html"
                description="Tools, case studies, and technical guidance for designing and evaluating microgrids."
              />
              <ResourceLink 
                title="Resilient Energy Systems & Microgrids (NREL)"
                url="https://www.nrel.gov/resilience"
                description="Research on how microgrids support critical facilities and vulnerable communities."
              />
              <ResourceLink 
                title="Clean Energy Group: Resilient Power Project"
                url="https://www.cleanegroup.org/ceg-project/resilient-power-project/"
                description="Case studies and policy guidance on solar+storage microgrids for affordable housing and critical services."
              />
              <ResourceLink 
                title="Rocky Mountain Institute (RMI): Community Energy Resilience"
                url="https://rmi.org/our-work/electricity/community-energy-resilience/"
                description="Strategies for equitable and community-centered energy resilience planning."
              />
            </div>

            {/* E. Resilience Actions or Plans */}
            <SubsectionHeader title="E. Resilience Actions or Plans" />
            <p 
              className="text-base leading-7 mb-4"
              style={{ color: '#4a5568' }}
            >
              See{' '}
              <button 
                onClick={() => scrollToSection('climate-community-resilience')}
                className="text-[#0B5FA5] font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-[#0B5FA5] rounded"
              >
                Climate & Community Resilience
              </button>
              {' '}below for resilience planning resources.
            </p>

            {/* F. Energy Burden & Housing Affordability */}
            <SubsectionHeader title="F. Energy Burden & Housing Affordability" />
            <p 
              className="text-base leading-7 mb-4"
              style={{ color: '#4a5568' }}
            >
              Resources on housing affordability, low-income energy assistance programs, and energy burden data.
            </p>
            <div className="mb-8">
              <ResourceLink 
                title="Housing Our Future: Charleston County's Comprehensive Plan for Housing & Housing Affordability"
                url="https://www.charlestoncounty.org/departments/da-community-services/files/Housing%20Our%20Future_Final_Spring%202023.pdf"
                description="Charleston County. (2023). Comprehensive plan addressing housing affordability in Charleston County."
              />
              <ResourceLink 
                title="Low-Income Household Energy Burden Varies Among States—Efficiency Can Help in All of Them"
                url="https://www.energy.gov/sites/default/files/2019/01/f58/WIP-Energy-Burden_final.pdf"
                description="U.S. Department of Energy, Weatherization and Intergovernmental Programs. (2019). Report on low-income household energy burden across states."
              />
              <ResourceLink 
                title="How Energy Efficiency Can Help Low-Income Households in South Carolina"
                url="https://www.aceee.org/sites/default/files/pdf/fact-sheet/ses-southcarolina-100917.pdf"
                description="American Council for an Energy-Efficient Economy. (2017). Fact sheet on energy efficiency benefits for low-income households in South Carolina."
              />
              <ResourceLink 
                title="Low Income Home Energy Assistance Program (LIHEAP) Model State Plan, Fiscal Year 2025"
                url="https://oeo.sc.gov/managedsites/prd/oeo/documents/DRAFT%202025%20LIHEAP%20Model%20State%20Plan_5.2024.pdf"
                description="South Carolina Office of Economic Opportunity. (2024). Unpublished state plan for LIHEAP fiscal year 2025."
              />
            </div>
          </section>
          )}

          {/* Section 3: Climate & Community Resilience */}
          {activeCategory === 'climate-community-resilience' && (
          <section>
            <SectionBanner id="climate-community-resilience" title="Climate & Community Resilience" icon={CloudRain} />
            
            <p 
              className="text-base leading-7 mb-6"
              style={{ color: '#4a5568' }}
            >
              This section brings together resources on climate resilience, extreme weather preparedness, and community-based planning. The materials focus on how communities—particularly vulnerable and underserved populations—can anticipate, prepare for, and respond to climate-related risks through policy, planning, and cross-sector collaboration.
            </p>

            {/* A. Federal & National */}
            <SubsectionHeader title="A. Federal & National Climate Resilience Resources" />
            <div className="mb-8">
              <ResourceLink 
                title="Building Community Resilience (FEMA)"
                url="https://www.fema.gov/emergency-managers/risk-management/resilience"
                description="Guidance and tools to help communities prepare for, respond to, and recover from climate-related disasters and extreme events."
              />
              <ResourceLink 
                title="Climate Resilience Toolkit (NOAA)"
                url="https://toolkit.climate.gov"
                description="A collection of tools, datasets, and case studies that support climate-informed decision-making for communities, planners, and policymakers."
              />
            </div>

            {/* B. Planning & Community-Based */}
            <SubsectionHeader title="B. Planning & Community-Based Resilience Networks" />
            <div className="mb-8">
              <ResourceLink 
                title="Urban Sustainability Directors Network (USDN)"
                url="https://www.usdn.org"
                description="A peer network and resource hub for local government leaders advancing sustainability and equity-focused climate resilience planning."
              />
              <ResourceLink 
                title="Resilience & Hazard Mitigation (American Planning Association)"
                url="https://www.planning.org/knowledgebase/resilience/"
                description="Planning frameworks and best practices that integrate climate risks, public health, and infrastructure resilience into local and regional planning."
              />
            </div>

            {/* C. Health, Energy, and Climate */}
            <SubsectionHeader title="C. Health, Energy, and Climate Resilience" />
            <div className="mb-8">
              <ResourceLink 
                title="Climate & Health Program (HHS)"
                url="https://www.hhs.gov/climate-change-health-equity-environmental-justice"
                description="Resources linking climate impacts to health risks and supporting integrated approaches to health-informed resilience planning."
              />
            </div>

            {/* D. State & Regional */}
            <SubsectionHeader title="D. State & Regional Resilience Planning (South Carolina)" />
            <div className="mb-8">
              <ResourceLink 
                title="South Carolina Resilience Planning Archives (South Carolina Sea Grant Consortium)"
                url="https://www.scseagrant.org/resilience-planning/"
                description="A collection of resilience planning documents, proposals, and resources related to climate adaptation and hazard mitigation in South Carolina."
              />
              <ResourceLink 
                title="South Carolina Office of Resilience"
                url="https://scor.sc.gov/"
                description="State-level resources on resilience planning, mitigation strategies, and climate-related policies."
              />
            </div>

            {/* E. Research & Reports */}
            <SubsectionHeader title="E. Research & Reports" />
            <div className="mb-8">
              <ResourceLink 
                title="Participatory and Spatial Analyses of Environmental Justice Communities' Concerns About a Proposed Storm Surge and Flood Protection Seawall"
                url="https://doi.org/10.3390/ijerph191811192"
                description="Taylor, J., Levine, N. S., Muhammad, E., Porter, D. E., Watson, A. M., & Sandifer, P. A. (2022). International Journal of Environmental Research and Public Health, 19(18), 11192."
              />
              <ResourceLink 
                title="Community as an Equal Partner for Region-Based Climate Change Vulnerability, Risk, and Resilience Assessments"
                url="https://doi.org/10.1016/j.cosust.2019.06.005"
                description="Cains, M. G., & Henshel, D. (2019). Current Opinion in Environmental Sustainability, 39, 24–30."
              />
              <ResourceLink 
                title="Evolving Approaches to Vulnerability, Resilience, and Equity in Charleston, South Carolina's Planning Process"
                url="https://etd.ohiolink.edu/acprod/odb_etd/ws/send_file/send?accession=miami1689810018231528&disposition=inline"
                description="Varel, E. C. (2023). Unpublished master's thesis. Miami University, Oxford, OH."
              />
              <ResourceLink 
                title="Present and Future Sea Level Rise at the Intersection of Race and Poverty in the Carolinas: A Geospatial Analysis"
                url="https://www.sciencedirect.com/science/article/pii/S2667278221000250?via%3Dihub"
                description="Handwerger, L. R., Sugg, M. M., & Runkle, J. D. (2021). Science of the Total Environment, 776, 145912."
              />
              <ResourceLink 
                title="Flooding and Sea Level Rise Strategy (2nd ed.)"
                url="https://www.charleston-sc.gov/1981/Flooding-Sea-Level-Rise-Strategy"
                description="City of Charleston. (2019). City of Charleston Flooding and Sea Level Rise Strategy."
              />
              <ResourceLink 
                title="All Hazards Vulnerability and Risk Assessment (HVRA)"
                url="https://www.charleston-sc.gov/1975/All-Hazards-Vulnerability-Risk-Assessmen"
                description="City of Charleston. (2020). City of Charleston All Hazards Vulnerability and Risk Assessment."
              />
              <ResourceLink 
                title="Climate Risk Assessment: Charleston County, South Carolina"
                url="https://www.woodwellclimate.org/climate-risk-assessment-charleston-county-south-carolina/"
                description="Woodwell Climate Research Center. (2023). Climate risk assessment for Charleston County, South Carolina."
              />
              <ResourceLink 
                title="Strategic Statewide Resilience and Risk Reduction Plan: Chapter 4—Climate Trends"
                url="https://scor.sc.gov/sites/scor/files/Documents/Chapter%204%20Climate%20Trends.pdf"
                description="South Carolina Office of Resilience. (2023). State report on climate trends in South Carolina."
              />
              <ResourceLink 
                title="Atlas of Disaster: South Carolina"
                url="https://rebuildbydesign.org/wp-content/uploads/2023/04/ATLAS-OF-DISASTER-compressed.pdf"
                description="Rebuild by Design. (2024). Report on disaster risks and resilience in South Carolina."
              />
            </div>
          </section>
          )}

          {/* Section 4: Clemson University Networks & Internal Resources */}
          {activeCategory === 'clemson-networks' && (
          <section>
            <SectionBanner id="clemson-networks" title="Clemson University Networks & Internal Resources" icon={Building} />
            
            <p 
              className="text-base leading-7"
              style={{ color: '#4a5568' }}
            >
              Additional Clemson-specific research networks, internal data platforms, and collaboration resources will be added here.
            </p>
          </section>
          )}

          {/* Section 5: Community Engagement Organizations */}
          {activeCategory === 'community-engagement' && (
          <section>
            <SectionBanner id="community-engagement" title="Community Engagement Organizations" icon={Heart} />
            
            <p 
              className="text-base leading-7 mb-6"
              style={{ color: '#4a5568' }}
            >
              Our research engages directly with community-based organizations, nonprofits, and advocacy groups committed to environmental justice, climate equity, and public health. These partners are central to our participatory research approach and help ensure that research outcomes benefit the communities most affected.
            </p>

            <div>
              {/* Metanoia */}
              <div 
                className="py-4"
                style={{ borderBottom: '1px solid rgba(12, 35, 64, 0.08)' }}
              >
                <a 
                  href="https://www.metanoiacdc.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base font-semibold mb-1 transition-colors hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0B5FA5] rounded"
                  style={{ color: '#0B5FA5' }}
                >
                  Metanoia
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
                <p className="text-sm mt-1" style={{ color: '#4a5568' }}>
                  Community development and housing organization in Charleston.
                </p>
              </div>

              {/* Charleston Promise Neighborhood */}
              <div 
                className="py-4"
                style={{ borderBottom: '1px solid rgba(12, 35, 64, 0.08)' }}
              >
                <a 
                  href="https://www.charlestonpromise.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base font-semibold mb-1 transition-colors hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0B5FA5] rounded"
                  style={{ color: '#0B5FA5' }}
                >
                  Charleston Promise Neighborhood
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
                <p className="text-sm mt-1" style={{ color: '#4a5568' }}>
                  Comprehensive neighborhood revitalization initiative in North Charleston.
                </p>
              </div>

              {/* Engage Appalachia */}
              <div 
                className="py-4"
                style={{ borderBottom: '1px solid rgba(12, 35, 64, 0.08)' }}
              >
                <a 
                  href="https://engageappalachia.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base font-semibold mb-1 transition-colors hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0B5FA5] rounded"
                  style={{ color: '#0B5FA5' }}
                >
                  Engage Appalachia
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
                <p className="text-sm mt-1" style={{ color: '#4a5568' }}>
                  Grassroots advocacy network focused on environmental and economic justice in Appalachia.
                </p>
              </div>

              {/* HOPE Credit Union (Formerly HOPE Policy Institute) */}
              <div 
                className="py-4"
                style={{ borderBottom: '1px solid rgba(12, 35, 64, 0.08)' }}
              >
                <a 
                  href="https://hopecu.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base font-semibold mb-1 transition-colors hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0B5FA5] rounded"
                  style={{ color: '#0B5FA5' }}
                >
                  HOPE Credit Union (Formerly HOPE Policy Institute)
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
                <p className="text-sm mt-1" style={{ color: '#4a5568' }}>
                  Financial services and advocacy for historically underserved communities in the Deep South.
                </p>
              </div>

              {/* Tennessee Interfaith Power & Light */}
              <div 
                className="py-4"
                style={{ borderBottom: '1px solid rgba(12, 35, 64, 0.08)' }}
              >
                <a 
                  href="https://www.tnipl.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base font-semibold mb-1 transition-colors hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0B5FA5] rounded"
                  style={{ color: '#0B5FA5' }}
                >
                  Tennessee Interfaith Power & Light
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
                <p className="text-sm mt-1" style={{ color: '#4a5568' }}>
                  Faith-based climate and environmental justice coalition.
                </p>
              </div>

              {/* Lowcountry Alliance for Model Communities */}
              <div 
                className="py-4"
                style={{ borderBottom: '1px solid rgba(12, 35, 64, 0.08)' }}
              >
                <a 
                  href="https://www.lamcnet.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base font-semibold mb-1 transition-colors hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0B5FA5] rounded"
                  style={{ color: '#0B5FA5' }}
                >
                  Lowcountry Alliance for Model Communities
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
                <p className="text-sm mt-1" style={{ color: '#4a5568' }}>
                  Community development and affordable housing advocacy in the South Carolina Lowcountry.
                </p>
              </div>

              {/* Woodwell Climate Research Center */}
              <div 
                className="py-4"
                style={{ borderBottom: '1px solid rgba(12, 35, 64, 0.08)' }}
              >
                <a 
                  href="https://www.woodwellclimate.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base font-semibold mb-1 transition-colors hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0B5FA5] rounded"
                  style={{ color: '#0B5FA5' }}
                >
                  Woodwell Climate Research Center
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
                <p className="text-sm mt-1" style={{ color: '#4a5568' }}>
                  Independent climate science research center focused on addressing climate risks.
                </p>
              </div>
            </div>
          </section>
          )}

            </div>
            {/* End Right Content Area */}
            
          </div>
          {/* End Two-Column Layout */}

        </div>
      </div>
    </div>
  )
}
