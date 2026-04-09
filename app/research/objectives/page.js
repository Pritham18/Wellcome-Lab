import Breadcrumbs from '@/components/Breadcrumbs'

export default function ResearchObjectivesPage() {
  return (
    <div style={{ background: '#f8fafc' }}>
      <Breadcrumbs 
        items={[
          { label: 'Research', href: '/research/study-areas' },
          { label: 'Research Objectives' }
        ]} 
      />
      
      {/* Page Hero */}
      <section 
        className="py-6 md:py-8"
        style={{ background: 'white', borderBottom: '1px solid rgba(12, 35, 64, 0.1)' }}
      >
        <div className="mx-auto px-4 md:px-6" style={{ maxWidth: '1100px' }}>
          <div className="accent-bar mb-4" />
          <h1 
            className="text-2xl md:text-3xl font-bold mb-3 leading-tight"
            style={{ color: '#0c2340' }}
          >
            Research Objectives
          </h1>
          <p 
            className="text-base leading-relaxed"
            style={{ color: '#64748b' }}
          >
            Our project goals for advancing equitable clean energy transitions and community health.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-8 md:py-12">
        <div className="mx-auto px-4 md:px-6" style={{ maxWidth: '1100px' }}>
          
          {/* Overview Section */}
          <section className="mb-10 md:mb-12">
            <h2 
              className="text-lg md:text-xl font-bold mb-4 pb-2 border-b"
              style={{ color: '#0c2340', borderColor: 'rgba(12, 35, 64, 0.1)' }}
            >
              Overview
            </h2>
            
            {/* Intro Paragraph */}
            <p 
              className="text-base leading-7 mb-6"
              style={{ color: '#374151', maxWidth: '75ch' }}
            >
              This project develops a community-centered sociotechnical framework and decision-support tool to help policymakers and researchers assess the multidimensional impacts of extreme weather on low- and moderate-income (LMI) communities. Using participatory approaches and mixed methods, we advance equitable clean energy transitions while building long-term capacity for community resilience and health improvement.
            </p>

            {/* Key Elements */}
            <div 
              className="p-5 rounded-lg"
              style={{ background: 'rgba(11, 95, 165, 0.03)', border: '1px solid rgba(11, 95, 165, 0.08)' }}
            >
              <h3 
                className="text-sm font-bold uppercase tracking-wide mb-3"
                style={{ color: '#0B5FA5' }}
              >
                Key Elements
              </h3>
              <ul className="space-y-2">
                {[
                  'Develop a community-centered sociotechnical framework and decision-support tool at both household (micro) and community/policy (macro) levels',
                  'Assess multidimensional impacts of extreme weather on LMI communities, including social vulnerability, energy insecurity, health outcomes, and psychological well-being',
                  'Advance localized electrification and weatherization plans through community co-designed, participatory approaches',
                  'Engage stakeholders throughout design and implementation, aligned with practical assistance policies and innovative clean-energy solutions',
                  'Train university students and support education and outreach activities that build long-term capacity for equitable energy transitions',
                  'Integrate transdisciplinary perspectives and mixed methods (qualitative and quantitative) to strengthen the evidence base',
                  'Generate actionable policy insights that can be scaled from local pilots to regional and national applications',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <span 
                      className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2"
                      style={{ background: '#0B5FA5' }}
                    />
                    <span 
                      className="text-base leading-6"
                      style={{ color: '#475569' }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Subtle Divider */}
          <div className="section-divider mb-8 md:mb-10" />

          {/* Specific Objectives Section */}
          <section>
            <h2 
              className="text-lg md:text-xl font-bold mb-5 pb-2 border-b"
              style={{ color: '#0c2340', borderColor: 'rgba(12, 35, 64, 0.1)' }}
            >
              Specific Objectives
            </h2>
            
            {/* Compact Objectives Grid - 2 columns on desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              
              {/* Objective 1 */}
              <div 
                className="rounded-lg p-4 bg-white"
                style={{ border: '1px solid rgba(12, 35, 64, 0.08)' }}
              >
                <div className="flex items-start gap-3">
                  <span 
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ background: '#F56600', color: 'white' }}
                  >
                    1
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 
                      className="text-sm font-semibold mb-1 leading-snug"
                      style={{ color: '#0c2340' }}
                    >
                      Identify & Explain Bundled Disadvantages
                    </h3>
                    <p 
                      className="text-sm leading-relaxed"
                      style={{ color: '#64748b', maxWidth: '55ch' }}
                    >
                      Examine how extreme weather exposure, household energy burdens, power outages, and built environment challenges combine to affect health outcomes in low- and moderate-income communities. The study operationalizes socioeconomic, behavioral, and environmental dimensions of vulnerability.
                    </p>
                  </div>
                </div>
              </div>

              {/* Objective 2 */}
              <div 
                className="rounded-lg p-4 bg-white"
                style={{ border: '1px solid rgba(12, 35, 64, 0.08)' }}
              >
                <div className="flex items-start gap-3">
                  <span 
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ background: '#F56600', color: 'white' }}
                  >
                    2
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 
                      className="text-sm font-semibold mb-1 leading-snug"
                      style={{ color: '#0c2340' }}
                    >
                      Co-Develop Climate Mitigation Solutions
                    </h3>
                    <p 
                      className="text-sm leading-relaxed"
                      style={{ color: '#64748b', maxWidth: '55ch' }}
                    >
                      Work with communities to design clean-energy strategies and evaluate the health co-benefits of integrated weatherization, electrification, and community microgrid adoption.
                    </p>
                  </div>
                </div>
              </div>

              {/* Objective 3 */}
              <div 
                className="rounded-lg p-4 bg-white"
                style={{ border: '1px solid rgba(12, 35, 64, 0.08)' }}
              >
                <div className="flex items-start gap-3">
                  <span 
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ background: '#F56600', color: 'white' }}
                  >
                    3
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 
                      className="text-sm font-semibold mb-1 leading-snug"
                      style={{ color: '#0c2340' }}
                    >
                      Create Community Co-Designed Pathways
                    </h3>
                    <p 
                      className="text-sm leading-relaxed"
                      style={{ color: '#64748b', maxWidth: '55ch' }}
                    >
                      Develop participatory implementation pathways that center local priorities while scaling successful models from local demonstration projects to regional and national applications.
                    </p>
                  </div>
                </div>
              </div>

              {/* Objective 4 */}
              <div 
                className="rounded-lg p-4 bg-white"
                style={{ border: '1px solid rgba(12, 35, 64, 0.08)' }}
              >
                <div className="flex items-start gap-3">
                  <span 
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ background: '#F56600', color: 'white' }}
                  >
                    4
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 
                      className="text-sm font-semibold mb-1 leading-snug"
                      style={{ color: '#0c2340' }}
                    >
                      Apply Evidence-Based Principles
                    </h3>
                    <p 
                      className="text-sm leading-relaxed"
                      style={{ color: '#64748b', maxWidth: '55ch' }}
                    >
                      Ensure meaningful participation across diverse communities by integrating equity, representation, and accountability into research design and community engagement.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
