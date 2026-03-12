'use client'

import { useState } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { ChevronDown, ChevronUp, MapPin, Activity, Zap, Users, Target, ZoomIn, X, ExternalLink } from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  Map Lightbox                                                      */
/* ------------------------------------------------------------------ */
function MapLightbox({ src, alt, areaName }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className="group cursor-pointer rounded-xl overflow-hidden border transition-all hover:shadow-lg relative"
        style={{ borderColor: 'var(--border)', background: 'white' }}
        onClick={() => setIsOpen(true)}
      >
        <div className="w-full flex items-center justify-center p-4" style={{ minHeight: '260px' }}>
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-[300px] w-auto h-auto transition-transform group-hover:scale-[1.02]"
            style={{ objectFit: 'contain' }}
          />
        </div>
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

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.92)' }}
          onClick={() => setIsOpen(false)}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close map view"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-[95vw] max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="rounded-lg p-4" style={{ background: 'var(--card-bg)' }}>
              <img src={src} alt={alt} className="max-w-full max-h-[80vh] object-contain" />
            </div>
            <div className="mt-4 text-center text-white/90 text-sm">
              {areaName} {"\u2014"} Energy Burden Map
            </div>
          </div>
        </div>
      )}
    </>
  )
}

/* ------------------------------------------------------------------ */
/*  Section heading helper                                            */
/* ------------------------------------------------------------------ */
function SectionHeading({ children }) {
  return (
    <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: '#0c2340', letterSpacing: '0.08em' }}>
      <span className="pb-1" style={{ borderBottom: '2px solid #0B5FA5' }}>{children}</span>
    </h3>
  )
}

/* ------------------------------------------------------------------ */
/*  Expandable text block                                             */
/* ------------------------------------------------------------------ */
function ExpandableSection({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="mb-8">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-sm font-semibold mb-3 hover:underline"
        style={{ color: '#0B5FA5' }}
      >
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        {title}
      </button>
      {open && (
        <div className="animate-in slide-in-from-top-2 duration-200">
          {children}
        </div>
      )}
    </div>
  )
}

/* ================================================================== */
/*  PAGE                                                              */
/* ================================================================== */
export default function StudyAreasPage() {
  const [showTNReferences, setShowTNReferences] = useState(false)
  const [showSCReferences, setShowSCReferences] = useState(false)

  return (
    <div style={{ background: 'var(--bg)' }} className="bg-gradient-mesh">
      <Breadcrumbs
        items={[
          { label: 'Research', href: '/research' },
          { label: 'Study Areas' }
        ]}
      />

      {/* ---- Hero ---- */}
      <section
        className="py-6 md:py-8"
        style={{ background: 'white', borderBottom: '1px solid rgba(12, 35, 64, 0.1)' }}
      >
        <div className="mx-auto px-4 md:px-6" style={{ maxWidth: '1400px' }}>
          <h1 
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: '#0c2340' }}
          >Study Areas</h1>
          <p 
            className="text-base leading-relaxed"
            style={{ color: '#4a5568' }}
          >
            The study uses a multi-scale design spanning community, state, regional, and national levels. Analyses will be tailored to the research objectives, study purpose, and data availability, with a primary emphasis on the U.S. Southeast{"\u2014"}particularly Tennessee and South Carolina. Our focal communities include Knoxville and Chattanooga, Tennessee (TN), and Charleston, South Carolina (SC).
          </p>
        </div>
      </section>

      {/* ---- Content ---- */}
      <div className="mx-auto px-4 md:px-6 py-8 md:py-10" style={{ maxWidth: '1400px' }}>

        {/* ============================================================ */}
        {/*  TENNESSEE                                                   */}
        {/* ============================================================ */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#0c2340' }}>
            State of Tennessee
          </h2>

          <p className="text-base leading-7 mb-6" style={{ color: '#4a5568' }}>
            Following the Center for Neighborhood Technology (CNT) housing cost-burden threshold, we define low- and moderate-income (LMI) households as those with incomes at or below 80% of area median income (AMI). AMI is the midpoint of a region's income distribution.
          </p>

          {/* Map */}
          <div className="mb-8">
            <MapLightbox
              src="https://customer-assets.emergentagent.com/job_empower-research-1/artifacts/zrci20lm_image.png"
              alt="Tennessee energy burden map"
              areaName="Tennessee"
            />
            <div className="mt-2 pt-2" style={{ borderTop: '1px solid rgba(12,35,64,0.06)' }}>
              <p className="text-xs" style={{ color: '#64748b' }}>
                Data source:{' '}
                <a
                  href="https://www.energy.gov/scep/slsc/lead-tool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium hover:underline"
                  style={{ color: '#0B5FA5' }}
                >
                  U.S. DOE LEAD Tool <ExternalLink className="w-3 h-3" />
                </a>
              </p>
            </div>
          </div>

          {/* Key challenges */}
          <div className="mb-8">
            <SectionHeading>Key Challenges</SectionHeading>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {[
                'High energy burden in rural and low-income counties',
                'Inefficient building envelopes and aging housing stock',
                'Reliance on outdated HVAC systems',
                'Limited access to energy efficiency programs',
                'Increasing exposure to extreme heat and storms',
                'Elevated health risks for vulnerable populations'
              ].map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-sm leading-6" style={{ color: '#4a5568' }}>
                  <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: '#0B5FA5' }} />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Research approach pills */}
          <div className="mb-8">
            <SectionHeading>Research Approach</SectionHeading>
            <div className="flex flex-wrap gap-2">
              {[
                { Icon: MapPin, label: 'County-level mapping' },
                { Icon: Users, label: 'Household surveys' },
                { Icon: Activity, label: 'Indoor air quality monitoring' },
                { Icon: Zap, label: 'Building & HVAC modeling' },
                { Icon: Target, label: 'Health vulnerability analysis' }
              ].map((item, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium"
                      style={{ background: 'var(--surface)', color: 'var(--text)' }}>
                  <item.Icon className="w-3.5 h-3.5" style={{ color: '#0B5FA5' }} />
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          {/* Focal community - expandable */}
          <ExpandableSection title="Read about focal community: Knoxville, TN">
            <div className="space-y-4 text-sm leading-7" style={{ color: '#4a5568' }}>
              <p>
                Knoxville is one of the primary study sites for several reasons. First, 10.9% of the population lives in poverty. Second, households at or below 200% of the Federal Poverty Level experience elevated energy burdens (approximately 9% of income). Third, transportation costs are high: annual vehicle operating costs can reach 29.03% of household income, and Knoxville has experienced a cumulative increase in average commute times since 2014. Fourth, many households face substantial tradeoffs between transportation and housing expenses (65.52%). Fifth, Knoxville has a large veteran population (29,035 residents between 2016 and 2020). Housing insecurity further compounds these pressures. Knoxville has a high share of renters (54.1%), and renters spend roughly 55% of income on housing and transportation combined, in addition to utility costs.
              </p>
              <p>
                Knoxville also faces notable outdoor air quality challenges. Located in Knox County within the eastern Tennessee Valley, bounded by the Appalachian Mountains to the southeast and the Cumberland Mountains to the northwest, the region's topography can shape weather patterns and contribute to pollutant accumulation. The American Lung Association ranked Knoxville 22nd nationally for year-round particle pollution in 2018, and Knox County received a "C" grade for ozone pollution. The same report indicates that more than 10% of Knox County residents have asthma (pediatric and adult), and roughly 25% have another underlying condition that increases vulnerability to air pollution exposure. Air quality concerns are especially salient in neighborhoods such as Pond Gap, Western Heights, Vestal, and Parkridge &amp; Five Points.
              </p>
            </div>
          </ExpandableSection>

          {/* Broader impact */}
          <div className="p-4 rounded-lg mb-8" style={{ background: 'var(--surface)' }}>
            <p className="text-sm leading-7" style={{ color: '#4a5568' }}>
              <strong style={{ color: 'var(--text)' }}>Broader Impact:</strong> Findings from Tennessee support the development of scalable, evidence-based strategies that advance equitable clean energy transitions and measurable health benefits across the Southeast.
            </p>
          </div>

          {/* Tennessee references - collapsible */}
          <div className="rounded-xl overflow-hidden" style={{ background: 'white', border: '1px solid rgba(12,35,64,0.1)' }}>
            <button
              onClick={() => setShowTNReferences(!showTNReferences)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-lg font-bold" style={{ color: '#0c2340' }}>References</h3>
              {showTNReferences ? (
                <ChevronUp className="w-5 h-5" style={{ color: '#4a5568' }} />
              ) : (
                <ChevronDown className="w-5 h-5" style={{ color: '#4a5568' }} />
              )}
            </button>
            {showTNReferences && (
              <div className="px-6 pb-6">
                <div className="space-y-4">
                  <RefItem n={1}>O. Ma et al, &ldquo;Low-Income Energy Affordability Data (LEAD) Tool,&rdquo; Office of Energy Efficiency and Renewable Energy, 2019.</RefItem>
                  <RefItem n={2}>U.S. Census Bureau, &ldquo;Quick Facts: Knoxville City, Tennessee; Knox County, United States.&rdquo;</RefItem>
                  <RefItem n={3}>C. Chen, J. Feng, N. Luke, C.-P. Kuo, and J. S. Fu, &ldquo;Localized energy burden, concentrated disadvantage, and the feminization of energy poverty,&rdquo; <em>iScience</em>, vol. 25, no. 4, p. 104139, Apr. 2022, doi: <a href="https://doi.org/10.1016/j.isci.2022.104139" target="_blank" rel="noopener noreferrer" className="text-[#0B5FA5] hover:underline break-all">10.1016/j.isci.2022.104139</a>.</RefItem>
                  <RefItem n={4}>Center for Neighborhood Technology Housing and Transportation Index Data, &ldquo;Figure 1: Cumulative Change in Average Commute Times (Percent) Figure 2: Comparing Housing Affordability using Different Definitions.&rdquo;</RefItem>
                  <RefItem n={5}>L. Alexander, L. K. Bender, and D. Van Vleet, &ldquo;State of the Air,&rdquo; 2018.</RefItem>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ============================================================ */}
        {/*  SOUTH CAROLINA                                              */}
        {/* ============================================================ */}
        <section className="mb-16">
          <div className="mb-8 border-t pt-10" style={{ borderColor: 'rgba(12,35,64,0.1)' }} />

          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#0c2340' }}>
            State of South Carolina
          </h2>

          <p className="text-base leading-7 mb-6" style={{ color: '#4a5568' }}>
            South Carolina faces substantial combined coastal and inland climate risks, with sea level rise, tidal flooding, and extreme precipitation posing long-term pressures on coastal counties.
          </p>

          {/* Map */}
          <div className="mb-8">
            <MapLightbox
              src="https://customer-assets.emergentagent.com/job_empower-research-1/artifacts/s2m1o1px_image.png"
              alt="South Carolina energy burden map"
              areaName="South Carolina"
            />
            <div className="mt-2 pt-2" style={{ borderTop: '1px solid rgba(12,35,64,0.06)' }}>
              <p className="text-xs" style={{ color: '#64748b' }}>
                Data source:{' '}
                <a
                  href="https://www.energy.gov/scep/slsc/lead-tool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium hover:underline"
                  style={{ color: '#0B5FA5' }}
                >
                  U.S. DOE LEAD Tool <ExternalLink className="w-3 h-3" />
                </a>
              </p>
            </div>
          </div>

          {/* Key challenges */}
          <div className="mb-8">
            <SectionHeading>Key Challenges</SectionHeading>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {[
                'Persistently high energy costs relative to income',
                'Inefficient and aging housing stock',
                'Sea level rise and tidal flooding',
                'Exposure to hurricanes and power outages',
                'Environmental justice disparities',
                'Compounded health risks from climate hazards'
              ].map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-sm leading-6" style={{ color: '#4a5568' }}>
                  <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: '#0B5FA5' }} />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Research approach pills */}
          <div className="mb-8">
            <SectionHeading>Research Approach</SectionHeading>
            <div className="flex flex-wrap gap-2">
              {[
                { Icon: MapPin, label: 'County-level mapping' },
                { Icon: Users, label: 'Household surveys' },
                { Icon: Activity, label: 'Indoor air quality sensors' },
                { Icon: Zap, label: 'Utility & Census data' },
                { Icon: Target, label: 'Health vulnerability analysis' }
              ].map((item, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium"
                      style={{ background: 'var(--surface)', color: 'var(--text)' }}>
                  <item.Icon className="w-3.5 h-3.5" style={{ color: '#0B5FA5' }} />
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          {/* Detailed overview - expandable */}
          <ExpandableSection title="Read detailed overview">
            <div className="space-y-4 text-sm leading-7" style={{ color: '#4a5568' }}>
              <p>
                South Carolina (SC) faces substantial combined coastal and inland climate risks, with sea level rise, tidal flooding, and extreme precipitation posing long-term pressures on coastal counties. State-level climate trend and resilience assessments indicate that these hazards are intensifying and are closely intertwined with social vulnerability, as low-income households are more likely to reside in lower-quality housing and infrastructure-constrained areas while simultaneously facing higher energy burdens and disaster-related impacts.
              </p>
              <p>
                Statewide disaster assessments further document repeated exposure to extreme weather events, infrastructure disruption, and prolonged power outages across South Carolina, particularly affecting socially and economically vulnerable populations. These intersecting risks underpin why the Strategic Statewide Resilience and Risk Reduction Plan prioritizes flooding, housing, energy affordability, and equity as core focus areas for statewide adaptation and resilience efforts.
              </p>
            </div>
          </ExpandableSection>

          {/* Focal community - expandable */}
          <ExpandableSection title="Read about focal community: Charleston, SC">
            <div className="space-y-4 text-sm leading-7" style={{ color: '#4a5568' }}>
              <p>
                Charleston County contains 212,589 housing units and 181,680 households, with renter households accounting for a substantial share. Between 2010 and 2020, the county's population increased by approximately 16%, while the greater Charleston metropolitan area has grown by about 46% since 2000, representing a net increase of roughly 250,000 residents. Rapid population growth combined with rising housing demand has intensified housing affordability pressures, with particularly pronounced impacts on low-income and renter households.
              </p>
              <p>
                Energy costs pose a persistent challenge for low-income households. The U.S. Department of Energy's Weatherization and Intergovernmental Programs (WIP) reports that the average energy burden for all households in South Carolina is approximately 4.33%, while the burden for low-income households rises to about 8.36%; in Charleston County, low-income households experience an energy burden of approximately 8.5%, substantially higher than the national average.
              </p>
              <p>
                Charleston is among the coastal cities in the southeastern United States most vulnerable to flooding and sea level rise. Relative sea level at the Charleston tide gauge has risen by approximately 1.07 feet (about 0.3 meters) over the past 100 years, with a markedly accelerated rate in recent decades. Between 2012 and 2021, Charleston experienced an average of approximately 50 high-tide flooding events per year reaching 7 feet (MLLW), more than twice the frequency observed between 2002 and 2011.
              </p>
              <p>
                Critically, these physical climate risks strongly overlap with social and environmental inequalities. Environmental justice research in Charleston indicates that low-income and minority communities are more likely to be located in low-lying areas with inadequate drainage, proximity to major transportation corridors, or nearby pollution sources, and consequently bear disproportionate burdens from flooding, infrastructure disruption, and health risks.
              </p>
            </div>
          </ExpandableSection>

          {/* Broader impact */}
          <div className="p-4 rounded-lg mb-8" style={{ background: 'var(--surface)' }}>
            <p className="text-sm leading-7" style={{ color: '#4a5568' }}>
              <strong style={{ color: 'var(--text)' }}>Broader Impact:</strong> South Carolina functions as a living laboratory for scalable, equitable energy{"\u2013"}health solutions, informing regional strategies applicable across the southeastern United States.
            </p>
          </div>

          {/* SC References - collapsible */}
          <div className="rounded-xl overflow-hidden" style={{ background: 'white', border: '1px solid rgba(12,35,64,0.1)' }}>
            <button
              onClick={() => setShowSCReferences(!showSCReferences)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-lg font-bold" style={{ color: '#0c2340' }}>References</h3>
              {showSCReferences ? (
                <ChevronUp className="w-5 h-5" style={{ color: '#4a5568' }} />
              ) : (
                <ChevronDown className="w-5 h-5" style={{ color: '#4a5568' }} />
              )}
            </button>
            {showSCReferences && (
              <div className="px-6 pb-6">
                <div className="space-y-4">
                  <RefItem n={1}>Taylor, J., Levine, N. S., Muhammad, E., Porter, D. E., Watson, A. M., &amp; Sandifer, P. A. (2022). Participatory and spatial analyses of environmental justice communities' concerns about a proposed storm surge and flood protection seawall. <em>International Journal of Environmental Research and Public Health</em>, 19(18), 11192. <a href="https://doi.org/10.3390/ijerph191811192" target="_blank" rel="noopener noreferrer" className="text-[#0B5FA5] hover:underline break-all">https://doi.org/10.3390/ijerph191811192</a></RefItem>
                  <RefItem n={2}>Cains, M. G., &amp; Henshel, D. (2019). Community as an equal partner for region-based climate change vulnerability, risk, and resilience assessments. <em>Current Opinion in Environmental Sustainability</em>, 39, 24{"\u2013"}30. <a href="https://doi.org/10.1016/j.cosust.2019.06.005" target="_blank" rel="noopener noreferrer" className="text-[#0B5FA5] hover:underline break-all">https://doi.org/10.1016/j.cosust.2019.06.005</a></RefItem>
                  <RefItem n={3}>Varel, E. C. (2023). Evolving approaches to vulnerability, resilience, and equity in Charleston, South Carolina's planning process (Unpublished master's thesis). Miami University, Oxford, OH. <a href="https://etd.ohiolink.edu/acprod/odb_etd/ws/send_file/send?accession=miami1689810018231528&amp;disposition=inline" target="_blank" rel="noopener noreferrer" className="text-[#0B5FA5] hover:underline break-all">https://etd.ohiolink.edu/</a></RefItem>
                  <RefItem n={4}>Handwerger, L. R., Sugg, M. M., &amp; Runkle, J. D. (2021). Present and future sea level rise at the intersection of race and poverty in the Carolinas: A geospatial analysis. <em>Science of the Total Environment</em>, 776, 145912. <a href="https://www.sciencedirect.com/science/article/pii/S2667278221000250" target="_blank" rel="noopener noreferrer" className="text-[#0B5FA5] hover:underline break-all">https://www.sciencedirect.com/</a></RefItem>
                  <RefItem n={5}>City of Charleston. (2019). Flooding and sea level rise strategy (2nd ed.). <a href="https://www.charleston-sc.gov/1981/Flooding-Sea-Level-Rise-Strategy" target="_blank" rel="noopener noreferrer" className="text-[#0B5FA5] hover:underline break-all">https://www.charleston-sc.gov/</a></RefItem>
                  <RefItem n={6}>City of Charleston. (2020). All hazards vulnerability and risk assessment (HVRA). <a href="https://www.charleston-sc.gov/1975/All-Hazards-Vulnerability-Risk-Assessmen" target="_blank" rel="noopener noreferrer" className="text-[#0B5FA5] hover:underline break-all">https://www.charleston-sc.gov/</a></RefItem>
                  <RefItem n={7}>Woodwell Climate Research Center. (2023). Climate risk assessment: Charleston County, South Carolina. <a href="https://www.woodwellclimate.org/climate-risk-assessment-charleston-county-south-carolina/" target="_blank" rel="noopener noreferrer" className="text-[#0B5FA5] hover:underline break-all">https://www.woodwellclimate.org/</a></RefItem>
                  <RefItem n={8}>South Carolina Office of Resilience. (2023). Strategic statewide resilience and risk reduction plan: Chapter 4{"\u2014"}Climate trends [State report]. <a href="https://scor.sc.gov/sites/scor/files/Documents/Chapter%204%20Climate%20Trends.pdf" target="_blank" rel="noopener noreferrer" className="text-[#0B5FA5] hover:underline break-all">https://scor.sc.gov/</a></RefItem>
                  <RefItem n={9}>Charleston County. (2023). Housing Our Future: Charleston County's comprehensive plan for housing &amp; housing affordability. <a href="https://www.charlestoncounty.org/departments/da-community-services/files/Housing%20Our%20Future_Final_Spring%202023.pdf" target="_blank" rel="noopener noreferrer" className="text-[#0B5FA5] hover:underline break-all">https://www.charlestoncounty.org/</a></RefItem>
                  <RefItem n={10}>U.S. Department of Energy, Weatherization and Intergovernmental Programs. (2019). Low-income household energy burden varies among states{"\u2014"}Efficiency can help in all of them. <a href="https://www.energy.gov/sites/default/files/2019/01/f58/WIP-Energy-Burden_final.pdf" target="_blank" rel="noopener noreferrer" className="text-[#0B5FA5] hover:underline break-all">https://www.energy.gov/</a></RefItem>
                  <RefItem n={11}>American Council for an Energy-Efficient Economy. (2017). How energy efficiency can help low-income households in South Carolina. <a href="https://www.aceee.org/sites/default/files/pdf/fact-sheet/ses-southcarolina-100917.pdf" target="_blank" rel="noopener noreferrer" className="text-[#0B5FA5] hover:underline break-all">https://www.aceee.org/</a></RefItem>
                  <RefItem n={12}>South Carolina Office of Economic Opportunity. (2024). Low Income Home Energy Assistance Program (LIHEAP) model state plan, fiscal year 2025 [Unpublished state plan]. <a href="https://oeo.sc.gov/managedsites/prd/oeo/documents/DRAFT%202025%20LIHEAP%20Model%20State%20Plan_5.2024.pdf" target="_blank" rel="noopener noreferrer" className="text-[#0B5FA5] hover:underline break-all">https://oeo.sc.gov/</a></RefItem>
                  <RefItem n={13}>Rebuild by Design. (2024). Atlas of disaster: South Carolina [Report]. <a href="https://rebuildbydesign.org/wp-content/uploads/2023/04/ATLAS-OF-DISASTER-compressed.pdf" target="_blank" rel="noopener noreferrer" className="text-[#0B5FA5] hover:underline break-all">https://rebuildbydesign.org/</a></RefItem>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Coming soon */}
        <div className="text-center pt-4">
          <p className="text-sm italic" style={{ color: 'var(--muted)' }}>
            Additional study areas coming soon as research expands.
          </p>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Reference item helper                                             */
/* ------------------------------------------------------------------ */
function RefItem({ n, children }) {
  return (
    <div className="flex gap-3">
      <span className="flex-shrink-0 w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold" style={{ background: 'rgba(11,95,165,0.1)', color: '#0B5FA5' }}>[{n}]</span>
      <p className="text-sm leading-7" style={{ color: '#4a5568' }}>{children}</p>
    </div>
  )
}
