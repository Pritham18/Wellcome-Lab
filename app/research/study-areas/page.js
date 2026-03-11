'use client'

import { useState } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronUp, MapPin, Activity, Zap, Users, Target, ZoomIn, X, ExternalLink } from 'lucide-react'

// Map Lightbox Component for Study Areas
function MapLightbox({ src, alt, areaName }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Clickable Map Container */}
      <div 
        className="group cursor-pointer rounded-xl overflow-hidden border transition-all hover:shadow-lg relative"
        style={{ 
          borderColor: 'var(--border)',
          background: 'white'
        }}
        onClick={() => setIsOpen(true)}
      >
        <div 
          className="w-full flex items-center justify-center p-4"
          style={{ minHeight: '280px' }}
        >
          <img 
            src={src}
            alt={alt}
            className="max-w-full max-h-[320px] lg:max-h-[360px] w-auto h-auto transition-transform group-hover:scale-[1.02]"
            style={{ 
              objectFit: 'contain'
            }}
          />
        </div>
        {/* Hover Overlay with "Click to enlarge" */}
        <div 
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          style={{ background: 'rgba(0,0,0,0.25)' }}
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 text-gray-800 text-sm font-medium shadow-md">
            <ZoomIn className="w-4 h-4" />
            Click to enlarge
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.92)' }}
          onClick={() => setIsOpen(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close map view"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Full Size Map */}
          <div 
            className="max-w-[95vw] max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-lg p-4" style={{ background: 'var(--card-bg)' }}>
              <img 
                src={src}
                alt={alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>
            <div className="mt-4 text-center text-white/90 text-sm">
              {areaName} — Energy Burden Map
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// Study Area Card Component
function StudyAreaCard({ area }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="section-card overflow-hidden transition-all duration-300">
      <CardContent className="p-0">
        <div className="flex flex-col lg:flex-row">
          {/* Map Column */}
          <div className="w-full lg:w-[42%] flex-shrink-0 p-4 lg:p-5">
            <MapLightbox 
              src={area.mapImage}
              alt={`${area.name} energy burden map`}
              areaName={area.name}
            />
            {/* Data Source Link */}
            <div className="mt-3 pt-2" style={{ borderTop: '1px solid rgba(12, 35, 64, 0.06)' }}>
              <p className="text-xs mb-1" style={{ color: '#64748b' }}>
                Explore data source:
              </p>
              <a 
                href="https://www.energy.gov/scep/slsc/lead-tool"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium hover:underline"
                style={{ color: '#0B5FA5' }}
              >
                U.S. Department of Energy LEAD (Local Energy Action Dashboard)
                <ExternalLink className="w-3 h-3 flex-shrink-0" />
              </a>
            </div>
          </div>
          
          {/* Card Content */}
          <div className="flex-1 p-6 lg:pl-2 lg:pr-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--text)' }}>
                  {area.name}
                </h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
                  {area.summary}
                </p>
                
                {/* Quick Stats Pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium" 
                        style={{ background: 'var(--surface)', color: 'var(--text)' }}>
                    <MapPin className="w-3 h-3" style={{ color: 'var(--accent)' }} />
                    County-level data
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium" 
                        style={{ background: 'var(--surface)', color: 'var(--text)' }}>
                    <Activity className="w-3 h-3" style={{ color: 'var(--accent)' }} />
                    Health outcomes
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium" 
                        style={{ background: 'var(--surface)', color: 'var(--text)' }}>
                    <Zap className="w-3 h-3" style={{ color: 'var(--accent)' }} />
                    Energy burden
                  </span>
                </div>
              </div>
            </div>
            
            {/* Expand/Collapse Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 -ml-2 text-[var(--brand)] hover:text-[var(--brand)] hover:bg-[var(--surface)]"
            >
              {isExpanded ? 'Show less' : 'Learn more'}
              <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
            </Button>
            
            {/* Expanded Content */}
            {isExpanded && (
              <div className="mt-6 pt-6 border-t animate-in slide-in-from-top-2 duration-200" style={{ borderColor: 'var(--border)' }}>
                {/* Overview */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text)' }}>Overview</h3>
                  <div className="space-y-3 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                    {area.overviewParagraphs.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>
                
                {/* Focal Community */}
                {area.focalCommunity && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text)' }}>{area.focalCommunity.title}</h3>
                    <div className="space-y-3 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                      {area.focalCommunity.paragraphs.map((para, idx) => (
                        <p key={idx}>{para}</p>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Key Challenges */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text)' }}>Key Challenges</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {area.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: 'var(--muted)' }}>
                        <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: 'var(--accent)' }} />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Broader Impact */}
                <div className="p-4 rounded-lg" style={{ background: 'var(--surface)' }}>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                    <strong style={{ color: 'var(--text)' }}>Broader Impact:</strong> {area.broaderImpact}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Study Area Data
const studyAreas = [
  {
    id: 'tennessee',
    name: 'State of Tennessee',
    summary: 'Following the Center for Neighborhood Technology (CNT) housing cost-burden threshold, we define low- and moderate-income (LMI) households as those with incomes at or below 80% of area median income (AMI).',
    mapImage: 'https://customer-assets.emergentagent.com/job_empower-research-1/artifacts/zrci20lm_image.png',
    overviewParagraphs: [
      'Following the Center for Neighborhood Technology (CNT) housing cost-burden threshold, we define low- and moderate-income (LMI) households as those with incomes at or below 80% of area median income (AMI). AMI is the midpoint of a region\'s income distribution.',
      'Tennessee is a key study region for understanding how energy burden intersects with housing quality, public health, and climate vulnerability across diverse urban and rural settings. County-level data reveal substantial variation in household energy burden, with many communities—particularly rural areas and older housing markets—spending a disproportionately high share of income on electricity and heating.'
    ],
    focalCommunity: {
      title: 'Knoxville, Tennessee (TN)',
      paragraphs: [
        'Knoxville is one of the primary study sites for several reasons. First, 10.9% of the population lives in poverty. Second, households at or below 200% of the Federal Poverty Level experience elevated energy burdens (approximately 9% of income). Third, transportation costs are high: annual vehicle operating costs can reach 29.03% of household income, and Knoxville has experienced a cumulative increase in average commute times since 2014. Fourth, many households face substantial tradeoffs between transportation and housing expenses (65.52%). Fifth, Knoxville has a large veteran population (29,035 residents between 2016 and 2020). Housing insecurity further compounds these pressures. Knoxville has a high share of renters (54.1%), and renters spend roughly 55% of income on housing and transportation combined, in addition to utility costs.',
        'Knoxville also faces notable outdoor air quality challenges. Located in Knox County within the eastern Tennessee Valley, bounded by the Appalachian Mountains to the southeast and the Cumberland Mountains to the northwest, the region\'s topography can shape weather patterns and contribute to pollutant accumulation. The American Lung Association ranked Knoxville 22nd nationally for year-round particle pollution in 2018, and Knox County received a "C" grade for ozone pollution. The same report indicates that more than 10% of Knox County residents have asthma (pediatric and adult), and roughly 25% have another underlying condition that increases vulnerability to air pollution exposure. Air quality concerns are especially salient in neighborhoods such as Pond Gap, Western Heights, Vestal, and Parkridge & Five Points.'
      ]
    },
    challenges: [
      'High energy burden in rural and low-income counties',
      'Inefficient building envelopes and aging housing stock',
      'Reliance on outdated HVAC systems',
      'Limited access to energy efficiency programs',
      'Increasing exposure to extreme heat and storms',
      'Elevated health risks for vulnerable populations'
    ],
    broaderImpact: 'Findings from Tennessee support the development of scalable, evidence-based strategies that advance equitable clean energy transitions and measurable health benefits across the Southeast.'
  },
  {
    id: 'south-carolina',
    name: 'State of South Carolina',
    summary: 'South Carolina faces substantial combined coastal and inland climate risks, with sea level rise, tidal flooding, and extreme precipitation posing long-term pressures on coastal counties.',
    mapImage: 'https://customer-assets.emergentagent.com/job_empower-research-1/artifacts/s2m1o1px_image.png',
    overviewParagraphs: [
      'South Carolina (SC) faces substantial combined coastal and inland climate risks, with sea level rise, tidal flooding, and extreme precipitation posing long-term pressures on coastal counties. State-level climate trend and resilience assessments indicate that these hazards are intensifying and are closely intertwined with social vulnerability, as low-income households are more likely to reside in lower-quality housing and infrastructure-constrained areas while simultaneously facing higher energy burdens and disaster-related impacts.',
      'Statewide disaster assessments further document repeated exposure to extreme weather events, infrastructure disruption, and prolonged power outages across South Carolina, particularly affecting socially and economically vulnerable populations. These intersecting risks underpin why the Strategic Statewide Resilience and Risk Reduction Plan prioritizes flooding, housing, energy affordability, and equity as core focus areas for statewide adaptation and resilience efforts.'
    ],
    focalCommunity: {
      title: 'Charleston, South Carolina (SC)',
      paragraphs: [
        'Charleston County contains 212,589 housing units and 181,680 households, with renter households accounting for a substantial share. Between 2010 and 2020, the county\'s population increased by approximately 16%, while the greater Charleston metropolitan area has grown by about 46% since 2000, representing a net increase of roughly 250,000 residents. Rapid population growth combined with rising housing demand has intensified housing affordability pressures, with particularly pronounced impacts on low-income and renter households.',
        'Energy costs pose a persistent challenge for low-income households. The U.S. Department of Energy\'s Weatherization and Intergovernmental Programs (WIP) reports that the average energy burden for all households in South Carolina is approximately 4.33%, while the burden for low-income households rises to about 8.36%; in Charleston County, low-income households experience an energy burden of approximately 8.5%, substantially higher than the national average. State-level assessments by the American Council for an Energy-Efficient Economy (ACEEE) further note that energy burdens for low-income households in South Carolina are among the highest in the United States, with some estimates reaching approximately 13%.',
        'Charleston is among the coastal cities in the southeastern United States most vulnerable to flooding and sea level rise. Peer-reviewed research indicates that relative sea level at the Charleston tide gauge has risen by approximately 1.07 feet (about 0.3 meters) over the past 100 years, with a markedly accelerated rate in recent decades. Between 2012 and 2021, Charleston experienced an average of approximately 50 high-tide flooding events per year reaching 7 feet (MLLW), more than twice the frequency observed between 2002 and 2011.',
        'Environmental justice research indicates that low-income and minority communities are more likely to be located in low-lying areas with inadequate drainage, proximity to major transportation corridors, or nearby pollution sources. Taylor et al. (2022) show that communities adjacent to the proposed flood protection seawall have long experienced compounded exposure to flooding, transportation-related fragmentation, and cumulative pollution. A systematic analysis indicates that under simulated storm surge scenarios, approximately 96% of highly vulnerable residential units are located within communities characterized by high social vulnerability, and about 99% of public housing units are exposed to significant flood risk.'
      ]
    },
    challenges: [
      'Persistently high energy costs relative to income',
      'Inefficient and aging housing stock',
      'Sea level rise and tidal flooding',
      'Exposure to hurricanes and power outages',
      'Environmental justice disparities',
      'Compounded health risks from climate hazards'
    ],
    broaderImpact: 'South Carolina functions as a living laboratory for scalable, equitable energy-health solutions, informing regional strategies applicable across the southeastern United States.'
  }
]

export default function StudyAreasPage() {
  const [showReferences, setShowReferences] = useState(false)

  return (
    <div style={{ background: 'var(--bg)' }} className="bg-gradient-mesh">
      <Breadcrumbs 
        items={[
          { label: 'Research', href: '/research' },
          { label: 'Study Areas' }
        ]} 
      />
      
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
            Study Areas
          </h1>
          <p 
            className="text-base leading-relaxed"
            style={{ color: '#4a5568' }}
          >
            The study uses a multi-scale design spanning community, state, regional, and national levels. Analyses will be tailored to the research objectives, study purpose, and data availability, with a primary emphasis on the U.S. Southeast—particularly Tennessee and South Carolina. Our focal communities include Knoxville and Chattanooga, Tennessee (TN), and Charleston, South Carolina (SC). Findings from these local case studies will be scaled to state, regional, and national levels to evaluate the health and resilience co-benefits of weatherization (Wx) and community microgrid adoption.
          </p>
        </div>
      </section>

      {/* Study Area Cards */}
      <div className="mx-auto px-4 md:px-6 py-8 md:py-10" style={{ maxWidth: '1400px' }}>
        <div className="space-y-6">
          {studyAreas.map((area) => (
            <StudyAreaCard key={area.id} area={area} />
          ))}
        </div>

        {/* References Section */}
        <div className="mt-10">
          <div 
            className="rounded-xl overflow-hidden"
            style={{ 
              background: 'white',
              border: '1px solid rgba(12, 35, 64, 0.1)',
            }}
          >
            <button
              onClick={() => setShowReferences(!showReferences)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <h2 
                className="text-xl md:text-2xl font-bold"
                style={{ color: '#0c2340' }}
              >
                References
              </h2>
              {showReferences ? (
                <ChevronUp className="w-5 h-5" style={{ color: '#4a5568' }} />
              ) : (
                <ChevronDown className="w-5 h-5" style={{ color: '#4a5568' }} />
              )}
            </button>
            
            {showReferences && (
              <div className="px-6 pb-6">
                <div className="space-y-5">
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold" style={{ background: 'rgba(11, 95, 165, 0.1)', color: '#0B5FA5' }}>[1]</span>
                    <p className="text-sm leading-7" style={{ color: '#4a5568' }}>
                      Taylor, J., Levine, N. S., Muhammad, E., Porter, D. E., Watson, A. M., & Sandifer, P. A. (2022). Participatory and spatial analyses of environmental justice communities' concerns about a proposed storm surge and flood protection seawall. <em>International Journal of Environmental Research and Public Health</em>, 19(18), 11192. <a href="https://doi.org/10.3390/ijerph191811192" target="_blank" rel="noopener noreferrer" className="text-[#0B5FA5] hover:underline break-all">https://doi.org/10.3390/ijerph191811192</a>
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold" style={{ background: 'rgba(11, 95, 165, 0.1)', color: '#0B5FA5' }}>[2]</span>
                    <p className="text-sm leading-7" style={{ color: '#4a5568' }}>
                      Cains, M. G., & Henshel, D. (2019). Community as an equal partner for region-based climate change vulnerability, risk, and resilience assessments. <em>Current Opinion in Environmental Sustainability</em>, 39, 24–30. <a href="https://doi.org/10.1016/j.cosust.2019.06.005" target="_blank" rel="noopener noreferrer" className="text-[#0B5FA5] hover:underline break-all">https://doi.org/10.1016/j.cosust.2019.06.005</a>
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold" style={{ background: 'rgba(11, 95, 165, 0.1)', color: '#0B5FA5' }}>[3]</span>
                    <p className="text-sm leading-7" style={{ color: '#4a5568' }}>
                      Varel, E. C. (2023). Evolving approaches to vulnerability, resilience, and equity in Charleston, South Carolina's planning process (Unpublished master's thesis). Miami University, Oxford, OH. <a href="https://etd.ohiolink.edu/acprod/odb_etd/ws/send_file/send?accession=miami1689810018231528&disposition=inline" target="_blank" rel="noopener noreferrer" className="text-[#0B5FA5] hover:underline break-all">https://etd.ohiolink.edu/</a>
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold" style={{ background: 'rgba(11, 95, 165, 0.1)', color: '#0B5FA5' }}>[4]</span>
                    <p className="text-sm leading-7" style={{ color: '#4a5568' }}>
                      Handwerger, L. R., Sugg, M. M., & Runkle, J. D. (2021). Present and future sea level rise at the intersection of race and poverty in the Carolinas: A geospatial analysis. <em>Science of the Total Environment</em>, 776, 145912. <a href="https://www.sciencedirect.com/science/article/pii/S2667278221000250" target="_blank" rel="noopener noreferrer" className="text-[#0B5FA5] hover:underline break-all">https://www.sciencedirect.com/</a>
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold" style={{ background: 'rgba(11, 95, 165, 0.1)', color: '#0B5FA5' }}>[5]</span>
                    <p className="text-sm leading-7" style={{ color: '#4a5568' }}>
                      City of Charleston. (2019). Flooding and sea level rise strategy (2nd ed.). <a href="https://www.charleston-sc.gov/1981/Flooding-Sea-Level-Rise-Strategy" target="_blank" rel="noopener noreferrer" className="text-[#0B5FA5] hover:underline break-all">https://www.charleston-sc.gov/1981/Flooding-Sea-Level-Rise-Strategy</a>
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold" style={{ background: 'rgba(11, 95, 165, 0.1)', color: '#0B5FA5' }}>[6]</span>
                    <p className="text-sm leading-7" style={{ color: '#4a5568' }}>
                      City of Charleston. (2020). All hazards vulnerability and risk assessment (HVRA). <a href="https://www.charleston-sc.gov/1975/All-Hazards-Vulnerability-Risk-Assessmen" target="_blank" rel="noopener noreferrer" className="text-[#0B5FA5] hover:underline break-all">https://www.charleston-sc.gov/1975/All-Hazards-Vulnerability-Risk-Assessmen</a>
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold" style={{ background: 'rgba(11, 95, 165, 0.1)', color: '#0B5FA5' }}>[7]</span>
                    <p className="text-sm leading-7" style={{ color: '#4a5568' }}>
                      Woodwell Climate Research Center. (2023). Climate risk assessment: Charleston County, South Carolina. <a href="https://www.woodwellclimate.org/climate-risk-assessment-charleston-county-south-carolina/" target="_blank" rel="noopener noreferrer" className="text-[#0B5FA5] hover:underline break-all">https://www.woodwellclimate.org/climate-risk-assessment-charleston-county-south-carolina/</a>
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold" style={{ background: 'rgba(11, 95, 165, 0.1)', color: '#0B5FA5' }}>[8]</span>
                    <p className="text-sm leading-7" style={{ color: '#4a5568' }}>
                      South Carolina Office of Resilience. (2023). Strategic statewide resilience and risk reduction plan: Chapter 4—Climate trends [State report]. <a href="https://scor.sc.gov/sites/scor/files/Documents/Chapter%204%20Climate%20Trends.pdf" target="_blank" rel="noopener noreferrer" className="text-[#0B5FA5] hover:underline break-all">https://scor.sc.gov/</a>
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold" style={{ background: 'rgba(11, 95, 165, 0.1)', color: '#0B5FA5' }}>[9]</span>
                    <p className="text-sm leading-7" style={{ color: '#4a5568' }}>
                      Charleston County. (2023). Housing Our Future: Charleston County's comprehensive plan for housing & housing affordability. <a href="https://www.charlestoncounty.org/departments/da-community-services/files/Housing%20Our%20Future_Final_Spring%202023.pdf" target="_blank" rel="noopener noreferrer" className="text-[#0B5FA5] hover:underline break-all">https://www.charlestoncounty.org/</a>
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold" style={{ background: 'rgba(11, 95, 165, 0.1)', color: '#0B5FA5' }}>[10]</span>
                    <p className="text-sm leading-7" style={{ color: '#4a5568' }}>
                      U.S. Department of Energy, Weatherization and Intergovernmental Programs. (2019). Low-income household energy burden varies among states—Efficiency can help in all of them. <a href="https://www.energy.gov/sites/default/files/2019/01/f58/WIP-Energy-Burden_final.pdf" target="_blank" rel="noopener noreferrer" className="text-[#0B5FA5] hover:underline break-all">https://www.energy.gov/</a>
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold" style={{ background: 'rgba(11, 95, 165, 0.1)', color: '#0B5FA5' }}>[11]</span>
                    <p className="text-sm leading-7" style={{ color: '#4a5568' }}>
                      American Council for an Energy-Efficient Economy. (2017). How energy efficiency can help low-income households in South Carolina. <a href="https://www.aceee.org/sites/default/files/pdf/fact-sheet/ses-southcarolina-100917.pdf" target="_blank" rel="noopener noreferrer" className="text-[#0B5FA5] hover:underline break-all">https://www.aceee.org/</a>
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold" style={{ background: 'rgba(11, 95, 165, 0.1)', color: '#0B5FA5' }}>[12]</span>
                    <p className="text-sm leading-7" style={{ color: '#4a5568' }}>
                      South Carolina Office of Economic Opportunity. (2024). Low Income Home Energy Assistance Program (LIHEAP) model state plan, fiscal year 2025 [Unpublished state plan]. <a href="https://oeo.sc.gov/managedsites/prd/oeo/documents/DRAFT%202025%20LIHEAP%20Model%20State%20Plan_5.2024.pdf" target="_blank" rel="noopener noreferrer" className="text-[#0B5FA5] hover:underline break-all">https://oeo.sc.gov/</a>
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold" style={{ background: 'rgba(11, 95, 165, 0.1)', color: '#0B5FA5' }}>[13]</span>
                    <p className="text-sm leading-7" style={{ color: '#4a5568' }}>
                      Rebuild by Design. (2024). Atlas of disaster: South Carolina [Report]. <a href="https://rebuildbydesign.org/wp-content/uploads/2023/04/ATLAS-OF-DISASTER-compressed.pdf" target="_blank" rel="noopener noreferrer" className="text-[#0B5FA5] hover:underline break-all">https://rebuildbydesign.org/</a>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Coming Soon */}
        <div className="mt-10 text-center">
          <p className="text-sm italic" style={{ color: 'var(--muted)' }}>
            Additional study areas coming soon as research expands.
          </p>
        </div>
      </div>
    </div>
  )
}
