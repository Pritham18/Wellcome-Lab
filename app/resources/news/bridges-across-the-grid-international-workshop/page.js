'use client'

import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Calendar, ArrowLeft } from 'lucide-react'

export default function BridgesAcrossTheGridWorkshopPage() {
  return (
    <div style={{ background: '#f8fafc' }}>
      <Breadcrumbs
        items={[
          { label: 'Resources', href: '/resources' },
          { label: 'News', href: '/resources/news' },
          { label: 'Bridges Across the Grid' }
        ]}
      />

      {/* Article Header */}
      <section
        className="py-8 md:py-10"
        style={{ background: 'white', borderBottom: '1px solid rgba(12, 35, 64, 0.1)' }}
      >
        <div className="mx-auto px-4 md:px-6" style={{ maxWidth: '1200px' }}>
          <article>
            <div className="flex items-center gap-3 mb-5">
              <span
                className="inline-flex items-center gap-1.5 text-sm font-medium"
                style={{ color: '#4a5568' }}
              >
                <Calendar className="w-4 h-4" style={{ color: '#0B5FA5' }} />
                August 10, 2026
              </span>
              <span
                className="px-2.5 py-0.5 text-xs font-semibold rounded-full"
                style={{ background: 'rgba(11, 95, 165, 0.1)', color: '#0B5FA5' }}
              >
                Workshops
              </span>
            </div>
            <h1
              className="text-2xl md:text-3xl font-bold leading-tight"
              style={{ color: '#0c2340', maxWidth: '900px' }}
            >
              Bridges Across the Grid: International Workshop Connects Research, Technology, and Community Resilience
            </h1>
          </article>
        </div>
      </section>

      {/* Article Content */}
      <div className="py-8 md:py-10">
        <div className="mx-auto px-4 md:px-6" style={{ maxWidth: '1200px' }}>
          <article>

            {/* Two-column layout on larger screens */}
            <div className="grid md:grid-cols-[350px_1fr] gap-6 md:gap-8 mb-8">
              {/* Featured Image - Left Column */}
              <div className="md:sticky md:top-24 md:self-start">
                <img
                  src="/images/news/bridges-across-the-grid-workshop-2026-1.jpg"
                  alt="Workshop participants attending a presentation"
                  className="w-full rounded-lg shadow-sm"
                  style={{ border: '1px solid rgba(12, 35, 64, 0.1)' }}
                />
                <p className="text-xs text-center mt-2 italic" style={{ color: '#6b7280' }}>
                  Power Grid, Sustainability and Resilience Stakeholder Engagement Workshop, Charleston, South Carolina
                </p>
              </div>

              {/* Article Body - Right Column */}
              <div
                className="space-y-6 text-base leading-7"
                style={{ color: '#4a5568' }}
              >
                <p>
                  On August 10, the Greater Resilience, Innovation and Transformation (GRIT) Lab at Clemson University hosted the Power Grid, Sustainability and Resilience Stakeholder Engagement Workshop, bringing together researchers, industry representatives, community leaders, and international partners for a day of interdisciplinary exchange in Charleston, South Carolina. Participants included a delegation from Taiwan representing the Taiwan Power Research Institute and five Taiwanese universities, along with Clemson faculty and community and industry stakeholders from South Carolina.
                </p>

                <p>
                  Convened by Dr. Chien-fei Chen, Professor and Director of the GRIT Lab, the workshop created a collaborative forum for connecting social science, engineering, community perspectives, and industry expertise around a shared question: how can research, technology, and stakeholder collaboration contribute to more resilient energy systems?
                </p>

                <p>
                  The day began with a tour of the Clemson Innovation Center led by Professor Kevin Tomsovic, providing participants with an opportunity to explore grid-related research facilities before the workshop sessions began.
                </p>

                <div className="my-5 flex justify-center">
                  <div style={{ maxWidth: '520px' }}>
                    <img
                      src="/images/news/bridges-across-the-grid-workshop-2026-2.jpg"
                      alt="Workshop participants visiting a grid research facility"
                      loading="lazy"
                      className="w-full rounded-lg"
                      style={{ border: '1px solid rgba(12, 35, 64, 0.1)' }}
                    />
                    <p className="text-xs text-center mt-2 italic" style={{ color: '#6b7280' }}>
                      Workshop participants during the Clemson Innovation Center tour
                    </p>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mt-6 mb-1" style={{ color: '#0c2340' }}>
                  Connecting Climate, Energy, and Health Data
                </h3>
                <p>
                  Dr. Chen and GRIT Lab team members Pritham Mahajan, Raghu Manjunatha, Miao Li, and Liao Wang introduced their work on Climate, Energy, and Health Data Hub Integration. The initiative seeks to connect data that are often analyzed separately—including weather, energy demand, and public health information—within an integrated framework that can support interdisciplinary resilience research and decision-making. The underlying AI platform was developed by Dr. Xueping Li of the University of Tennessee.
                </p>
                <p>
                  Hsiao-Wen Wang of National Cheng Kung University in Taiwan extended the discussion by examining how complex technical and climate information can be translated into actionable approaches for grid resilience. Drawing on an international perspective, her presentation highlighted the importance of connecting technical analysis with real-world implementation and community engagement.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-1" style={{ color: '#0c2340' }}>
                  Bringing Community and Industry Perspectives into Resilience Research
                </h3>
                <p>
                  The morning sessions also explored the relationship between energy infrastructure and community needs. Grant Scheffer of Sun Energy Solutions shared work on microgrids, community engagement, and workforce development in South Carolina, highlighting the importance of connecting new energy technologies with the communities where they are implemented.
                </p>
                <p>
                  Marilyn Hemingway, CEO of the Gullah Geechee Chamber Foundation, discussed energy and environmental engagement activities in South Carolina&apos;s coastal communities. Her presentation emphasized the value of incorporating local knowledge and community perspectives alongside technical and infrastructure-focused approaches to resilience.
                </p>
                <p>
                  Bryan Crandell, Executive Director of the Sustainability Institute, followed with an overview of the organization&apos;s work in sustainability, energy efficiency, weatherization, and community engagement. He also introduced the idea of creating a more unified point of entry for regional weatherization applications, prompting discussion about how programs and services might be better connected to community needs.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-1" style={{ color: '#0c2340' }}>
                  Advancing Resilient Grid Technologies
                </h3>
                <p>
                  The afternoon shifted toward the technologies and infrastructure supporting resilient energy systems.
                </p>
                <p>
                  Chen-Han Wu of the Taiwan Power Research Institute presented research on microgrid integration and verification platforms, examining how microgrid systems can be evaluated and integrated into larger power networks. Dr. Dingrui Li of Clemson University then discussed power electronics solutions for flexible and resilient power grids, highlighting technologies that can help modern power systems respond more effectively to changing conditions.
                </p>

                <div className="my-5 flex justify-center">
                  <div style={{ maxWidth: '520px' }}>
                    <img
                      src="/images/news/bridges-across-the-grid-workshop-2026-3.jpg"
                      alt="Workshop participants during a GRIT Lab facility visit"
                      loading="lazy"
                      className="w-full rounded-lg"
                      style={{ border: '1px solid rgba(12, 35, 64, 0.1)' }}
                    />
                    <p className="text-xs text-center mt-2 italic" style={{ color: '#6b7280' }}>
                      Workshop participants during the GRIT Lab facility visit
                    </p>
                  </div>
                </div>

                <p>
                  Dr. Yi Guo of Clemson University broadened the discussion to the opportunities and challenges associated with sustainable energy systems, while Mustafa Ozden presented work on a megawatt-scale heat recovery system with a flexible grid interconnect, demonstrating opportunities to recover and reuse energy while supporting grid integration.
                </p>
                <p>
                  The workshop concluded with extended discussion and feedback among participants, followed by a presentation from Dr. Kumar Venayagamoorthy on Intelligent Power Systems and advanced approaches to modern power-system operation.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-1" style={{ color: '#0c2340' }}>
                  Building Bridges for Future Collaboration
                </h3>
                <p>
                  Across the day, conversations connected data integration, microgrids, power electronics, sustainable energy systems, heat recovery, intelligent power systems, infrastructure resilience, and community engagement. The workshop demonstrated the value of bringing technical, social, community, and international perspectives together when considering the future of resilient energy systems.
                </p>
                <p>
                  For the GRIT Lab, the workshop also provided an opportunity to strengthen connections among Clemson researchers, South Carolina organizations and industry partners, and collaborators in Taiwan. These relationships create a foundation for continued knowledge exchange and future interdisciplinary research on energy systems, infrastructure resilience, community resilience, and data integration.
                </p>
              </div>
            </div>

            {/* Back Link */}
            <div className="mt-10 pt-8" style={{ borderTop: '1px solid rgba(12, 35, 64, 0.1)' }}>
              <Link
                href="/resources/news"
                className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
                style={{ color: '#0B5FA5' }}
              >
                <ArrowLeft className="w-4 h-4" />
                Back to News
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
