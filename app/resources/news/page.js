'use client'

import { useState } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Calendar, Award, ChevronDown, ChevronUp } from 'lucide-react'

// News Item Component with expandable content
function NewsItem({ 
  date, 
  category, 
  categoryColor = '#0B5FA5', 
  categoryBg = 'rgba(11, 95, 165, 0.1)',
  icon: Icon = Calendar,
  iconColor = '#0B5FA5',
  title, 
  preview, 
  fullContent,
  bannerImage,
  bannerAlt,
  galleryImages = [],
  wideLayout = false
}) {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className="pb-6 md:pb-8 mb-6 md:mb-8" style={{ borderBottom: '1px solid rgba(12, 35, 64, 0.1)' }}>
      {/* Meta */}
      <div className="flex flex-wrap items-center gap-3 mb-3">
        <span 
          className="inline-flex items-center gap-1.5 text-sm font-medium"
          style={{ color: '#4a5568' }}
        >
          <Icon className="w-4 h-4" style={{ color: iconColor }} />
          {date}
        </span>
        <span 
          className="px-2.5 py-0.5 text-xs font-semibold rounded-full"
          style={{ background: categoryBg, color: categoryColor }}
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
        style={{ color: '#4a5568', maxWidth: '72ch' }}
      >
        {preview}
      </p>

      {/* View More Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="inline-flex items-center gap-1.5 text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 rounded px-1 -ml-1"
        style={{ color: '#0B5FA5' }}
      >
        {expanded ? 'View less' : 'View more'}
        {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>

      {/* Expanded Content */}
      {expanded && (
        <div className="mt-4 animate-in fade-in duration-200">
          {/* Banner Image (only shown when expanded and not wide layout) */}
          {bannerImage && !wideLayout && (
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
          
          {/* Gallery Images (if provided and not wide layout) */}
          {galleryImages.length > 0 && !wideLayout && (
            <div className="mb-5">
              <h4 className="text-sm font-semibold mb-3" style={{ color: '#0c2340' }}>Gallery</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {galleryImages.map((img, idx) => (
                  <img 
                    key={idx}
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full aspect-video object-cover rounded-lg"
                    style={{ border: '1px solid rgba(12, 35, 64, 0.10)' }}
                  />
                ))}
              </div>
            </div>
          )}
          
          {/* Full Content */}
          <div 
            className="space-y-4 text-sm leading-7"
            style={{ 
              color: '#4a5568', 
              maxWidth: wideLayout ? 'none' : '72ch'
            }}
          >
            {fullContent}
          </div>
        </div>
      )}
    </article>
  )
}

// Helper components for structured content
function SectionTitle({ children, className = "" }) {
  return (
    <h3 className={`text-base font-bold mb-3 ${className}`} style={{ color: '#0c2340' }}>
      {children}
    </h3>
  )
}

function InfoGrid({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 rounded-lg mb-4" style={{ background: 'rgba(11, 95, 165, 0.03)' }}>
      {items.map((item, idx) => (
        <div key={idx} className="flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#0B5FA5' }}>
            {item.label}
          </span>
          <span className="text-sm font-medium" style={{ color: '#0c2340' }}>
            {item.value}
          </span>
        </div>
      ))}
    </div>
  )
}

export default function NewsPage() {
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
            style={{ color: '#4a5568', maxWidth: '72ch' }}
          >
            Latest updates and announcements from the EMPOWER-ALL project.
          </p>
        </div>
      </section>

      {/* News Items */}
      <div className="py-6 md:py-8">
        <div className="mx-auto px-4 md:px-6" style={{ maxWidth: '1400px' }}>
          
          {/* News Item 1: Workshop Recap */}
          <NewsItem
            date="Feb 26–27, 2026"
            category="Workshop Recap"
            title="Powering Resilience and Health Workshop: Energy Transition, Community Resilience, and Public Health (Feb 26–27, 2026)"
            preview="The Powering Resilience and Health workshop (Feb 26–27, 2026) convened researchers, policymakers, industry leaders, and community organizations to examine how energy transitions can advance healthier and more resilient communities."
            wideLayout={true}
            fullContent={
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column - Main Content */}
                <div className="lg:col-span-8 space-y-6">
                  {/* Lead */}
                  <p className="text-base leading-relaxed" style={{ color: '#4a5568' }}>
                    Organized by Clemson University's GRIT Lab and funded by the Wellcome Foundation, this interdisciplinary event examined the critical connections between climate change, energy systems, the built environment, and public health. The workshop fostered cross-sector dialogue and knowledge exchange to advance equitable and scalable resilience solutions.
                  </p>

                  {/* Photo Highlights */}
                  <div>
                    <SectionTitle>Presenters and attendees during expert panel discussions</SectionTitle>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <img 
                          src="/images/news/workshop-feb-2026-main.jpg"
                          alt="Workshop participants engaged in discussion during the Powering Resilience and Health event"
                          loading="lazy"
                          className="w-full rounded-xl"
                          style={{ border: '1px solid rgba(12, 35, 64, 0.10)' }}
                        />
                      </div>
                      <div>
                        <img 
                          src="/images/news/workshop-feb-2026-gallery.jpg"
                          alt="Workshop presenters and attendees during a panel session"
                          loading="lazy"
                          className="w-full rounded-xl"
                          style={{ border: '1px solid rgba(12, 35, 64, 0.10)' }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Program highlights */}
                  <div>
                    <SectionTitle>Program Highlights</SectionTitle>
                    <div className="space-y-4">
                      <p>
                        More than 35 participants attended through both in-person and virtual participation, representing universities, nonprofit organizations, utilities, government agencies, and community groups. The event featured over a dozen expert presentations organized across five thematic panels.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: '#0B5FA5' }}></span>
                          <div>
                            <strong>Infrastructure Resilience:</strong> Dr. Amin Kargarian (Louisiana State University) presented grid optimization with battery storage, while Karan Patel (Rappahannock Electric Cooperative) discussed rural energy resilience strategies.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: '#0B5FA5' }}></span>
                          <div>
                            <strong>Health Co-benefits:</strong> Sessions focused on weatherization and electrification impacts, with presentations from Bruce Tonn (Three3, Inc.) and William Bryan (Southeast Energy Efficiency Alliance).
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: '#0B5FA5' }}></span>
                          <div>
                            <strong>Data Integration:</strong> Pritham Mahajan from Clemson's GRIT Lab highlighted the role of data integration for energy-climate-health research.
                          </div>
                        </li>
                      </ul>
                      <p>
                        The second day emphasized community resilience and workforce development, featuring speakers from regional organizations and government agencies. Catherine Min from the South Carolina Office of Resilience presented the state's approach to building local and statewide resilience, while Marilyn Hemingway discussed community engagement and flood resilience in the Pee Dee watershed.
                      </p>
                    </div>
                  </div>

                  {/* Acknowledgement */}
                  <div className="p-4 rounded-lg text-sm italic text-center" style={{ background: 'rgba(11, 95, 165, 0.03)', color: '#4a5568' }}>
                    Organized by Clemson University's GRIT Lab and supported by funding from the Wellcome Foundation.
                  </div>
                </div>

                {/* Right Column - Sidebar */}
                <div className="lg:col-span-4 space-y-6">
                  {/* At a glance */}
                  <div className="p-5 rounded-xl" style={{ border: '1px solid rgba(12, 35, 64, 0.1)', background: 'white' }}>
                    <SectionTitle className="mb-4">At a Glance</SectionTitle>
                    <div className="space-y-4">
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#0B5FA5' }}>Dates</div>
                        <div className="text-sm font-medium" style={{ color: '#0c2340' }}>February 26–27, 2026</div>
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#0B5FA5' }}>Location</div>
                        <div className="text-sm font-medium" style={{ color: '#0c2340' }}>Charleston Innovation Campus, Clemson University</div>
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#0B5FA5' }}>Participants</div>
                        <div className="text-sm font-medium" style={{ color: '#0c2340' }}>35+ researchers, policymakers, industry leaders</div>
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#0B5FA5' }}>Format</div>
                        <div className="text-sm font-medium" style={{ color: '#0c2340' }}>In-person + virtual participation</div>
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#0B5FA5' }}>Program</div>
                        <div className="text-sm font-medium" style={{ color: '#0c2340' }}>12+ presentations across five thematic panels</div>
                      </div>
                    </div>
                  </div>

                  {/* Featured speakers */}
                  <div className="p-5 rounded-xl" style={{ border: '1px solid rgba(12, 35, 64, 0.1)', background: 'white' }}>
                    <SectionTitle className="mb-4">Featured Speakers</SectionTitle>
                    <div className="space-y-3">
                      <div className="pb-3" style={{ borderBottom: '1px solid rgba(12, 35, 64, 0.05)' }}>
                        <div className="font-medium text-sm" style={{ color: '#0c2340' }}>Dr. Gary Adamkiewicz</div>
                        <div className="text-xs" style={{ color: '#6b7280' }}>Harvard School of Public Health</div>
                        <div className="text-xs mt-1">Indoor air quality impacts</div>
                      </div>
                      <div className="pb-3" style={{ borderBottom: '1px solid rgba(12, 35, 64, 0.05)' }}>
                        <div className="font-medium text-sm" style={{ color: '#0c2340' }}>Dr. Mary Willis</div>
                        <div className="text-xs" style={{ color: '#6b7280' }}>Boston University School of Public Health</div>
                        <div className="text-xs mt-1">Data center health implications</div>
                      </div>
                      <div className="pb-3" style={{ borderBottom: '1px solid rgba(12, 35, 64, 0.05)' }}>
                        <div className="font-medium text-sm" style={{ color: '#0c2340' }}>Dr. Amin Kargarian</div>
                        <div className="text-xs" style={{ color: '#6b7280' }}>Louisiana State University</div>
                        <div className="text-xs mt-1">Grid optimization strategies</div>
                      </div>
                      <div>
                        <div className="font-medium text-sm" style={{ color: '#0c2340' }}>Catherine Min</div>
                        <div className="text-xs" style={{ color: '#6b7280' }}>SC Office of Resilience</div>
                        <div className="text-xs mt-1">State resilience approaches</div>
                      </div>
                    </div>
                  </div>

                  {/* Outcomes & next steps */}
                  <div className="p-5 rounded-xl" style={{ border: '1px solid rgba(12, 35, 64, 0.1)', background: 'white' }}>
                    <SectionTitle className="mb-4">Outcomes & Next Steps</SectionTitle>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#0B5FA5' }}></span>
                        <span className="text-sm">Community-engagement playbook development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#0B5FA5' }}></span>
                        <span className="text-sm">Shared health and resilience indicators</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#0B5FA5' }}></span>
                        <span className="text-sm">Partnership roadmap for pilot projects</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#0B5FA5' }}></span>
                        <span className="text-sm">Enhanced cross-sector networks</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            }
          />

          {/* News Item 2: Dr. Chen Recognition */}
          <NewsItem
            date="Announcement"
            category="Recognition"
            categoryColor="#c45500"
            categoryBg="rgba(245, 102, 0, 0.1)"
            icon={Award}
            iconColor="#F56600"
            title="Dr. Chien-fei Chen Recognized Among World's Top 2% Most-Cited Scientists"
            preview="We are proud to share that Dr. Chien-fei Chen, Director of our lab and Professor of Sociology at Clemson University, has been recognized as one of the top 2% most-cited scientists worldwide."
            fullContent={
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
            }
          />

          {/* News Item 3: Nov 10, 2025 Seminar - Dr. Haizhong Wang */}
          <NewsItem
            date="November 10, 2025"
            category="Seminar"
            title="Community & Infrastructure Resilience Seminar: Human-Centered Emergency Management"
            preview="GRIT Lab collaborated with Clemson's Community and Infrastructure Resilience initiative to host Dr. Haizhong Wang for a seminar on human-centered behavioral analysis and modeling for rapid-onset disasters."
            bannerImage="/images/news/cir-seminar-haizhong-wang-nov-10-2025.png"
            bannerAlt="Flyer for seminar: Human-centered behavioral analysis and modeling for informed community emergency management in rapid onset disasters."
            fullContent={
              <p>
                Drawing on case studies of tsunamis and wildfires, Dr. Wang presented interdisciplinary, agent-based modeling approaches to better understand evacuation behavior and decision-making, offering insights to improve emergency planning and community resilience.
              </p>
            }
          />

          {/* News Item 4: Oct 31, 2025 Seminar - Dr. Gary Adamkiewicz */}
          <NewsItem
            date="October 31, 2025"
            category="GRIT Lab Fall 2025 Seminar Series"
            title="GRIT Lab Seminar: People, Places, and Policies—Addressing Environmental Exposures in Low-Income Housing"
            preview="As part of the GRIT Lab Fall 2025 Seminar Series, Dr. Gary Adamkiewicz shared new research on environmental exposures and health disparities in low-income housing."
            bannerImage="/images/news/grit-seminar-gary-adamkiewicz-oct-31-2025.png"
            bannerAlt="Flyer for GRIT Lab seminar: People, Places and Policies: Addressing Environmental Exposures within Low-income Housing."
            fullContent={
              <p>
                His talk emphasized how integrated interventions targeting people (education and engagement), places (building and system design), and policies (operations and maintenance) can significantly improve indoor environmental quality and health outcomes for vulnerable populations.
              </p>
            }
          />

          {/* News Item 5: Oct 24, 2025 Seminar - Dr. Yuan Yao */}
          <NewsItem
            date="October 24, 2025"
            category="GRIT Lab Fall 2025 Seminar Series"
            title="GRIT Lab Seminar: Environmental Applications and Impacts of Artificial Intelligence"
            preview="GRIT Lab hosted Dr. Yuan Yao (Yale University) as part of the Fall 2025 Seminar Series to discuss how artificial intelligence is being applied to advance sustainable development."
            bannerImage="/images/news/grit-seminar-yuan-yao-oct-24-2025.png"
            bannerAlt="Flyer for GRIT Lab seminar: Environmental Applications and Impacts of Artificial Intelligence."
            fullContent={
              <p>
                Dr. Yao highlighted AI's life-cycle environmental impacts, including greenhouse-gas emissions and potential consequences for human health and ecosystems. She also presented her group's AI-enabled approaches for nature-based carbon dioxide removal and climate-mitigation strategies.
              </p>
            }
          />

        </div>
      </div>
    </div>
  )
}
