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
          <p 
            className="text-sm font-bold uppercase tracking-wider mb-2" 
            style={{ color: '#F56600', fontFamily: 'inherit' }}
          >
            Research
          </p>
          <h1 
            className="text-2xl md:text-3xl font-bold mb-3 leading-tight"
            style={{ color: '#0c2340', fontFamily: 'inherit' }}
          >
            Research Objectives
          </h1>
          <p 
            className="text-base leading-relaxed"
            style={{ color: '#64748b', fontFamily: 'inherit' }}
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
              style={{ color: '#0c2340', borderColor: 'rgba(12, 35, 64, 0.1)', fontFamily: 'inherit' }}
            >
              Overview
            </h2>
            
            {/* Intro Paragraph */}
            <p 
              className="text-base leading-7 mb-6"
              style={{ color: '#374151', fontFamily: 'inherit', maxWidth: '75ch' }}
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
                style={{ color: '#0B5FA5', fontFamily: 'inherit' }}
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
                      className="text-sm leading-6"
                      style={{ color: '#475569', fontFamily: 'inherit' }}
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
              style={{ color: '#0c2340', borderColor: 'rgba(12, 35, 64, 0.1)', fontFamily: 'inherit' }}
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
                      style={{ color: '#0c2340', fontFamily: 'inherit' }}
                    >
                      Identify & Explain Bundled Disadvantages
                    </h3>
                    <p 
                      className="text-sm leading-relaxed"
                      style={{ color: '#64748b', fontFamily: 'inherit', maxWidth: '55ch' }}
                    >
                      Identify and explain the bundled disadvantages linking extreme weather exposure, household energy burdens, power outages, the built environment, and health-related infrastructure challenges in urban and rural LMI communities. Define and operationalize the socioeconomic, behavioral, and environmental dimensions of health.
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
                      style={{ color: '#0c2340', fontFamily: 'inherit' }}
                    >
                      Co-Develop Climate Mitigation Solutions
                    </h3>
                    <p 
                      className="text-sm leading-relaxed"
                      style={{ color: '#64748b', fontFamily: 'inherit', maxWidth: '55ch' }}
                    >
                      Co-develop climate mitigation solutions grounded in clean energy and community priorities, collect multi-scale data, and model the health co-benefits of integrated weatherization, electrification, and community microgrid acceptance for environmental and public health.
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
                      style={{ color: '#0c2340', fontFamily: 'inherit' }}
                    >
                      Create Community Co-Designed Pathways
                    </h3>
                    <p 
                      className="text-sm leading-relaxed"
                      style={{ color: '#64748b', fontFamily: 'inherit', maxWidth: '55ch' }}
                    >
                      Create a community co-designed clean-energy pathway and resilience engagement plan that centers local voices in policy implementation and develop a scalable research-to-practice model expanding from local demonstration to regional and national relevance.
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
                      style={{ color: '#0c2340', fontFamily: 'inherit' }}
                    >
                      Apply Evidence-Based Principles
                    </h3>
                    <p 
                      className="text-sm leading-relaxed"
                      style={{ color: '#64748b', fontFamily: 'inherit', maxWidth: '55ch' }}
                    >
                      Apply evidence-based and place-based principles to ensure meaningful participation of people from diverse backgrounds across the research team and community engagement process, strengthening representativeness, accountability, and shared benefits.
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
