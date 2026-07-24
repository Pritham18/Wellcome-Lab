'use client'

import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Calendar, ArrowLeft } from 'lucide-react'

export default function NewPublicationClimateRiskCleanEnergyPage() {
  return (
    <div style={{ background: '#f8fafc' }}>
      <Breadcrumbs
        items={[
          { label: 'Resources', href: '/resources' },
          { label: 'News', href: '/resources/news' },
          { label: 'New Publication: Climate Risk and Clean Energy' }
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
                July 2026
              </span>
              <span
                className="px-2.5 py-0.5 text-xs font-semibold rounded-full"
                style={{ background: 'rgba(11, 95, 165, 0.1)', color: '#0B5FA5' }}
              >
                Research Updates
              </span>
            </div>
            <h1
              className="text-2xl md:text-3xl font-bold leading-tight"
              style={{ color: '#0c2340', maxWidth: '900px' }}
            >
              New Publication Explores How Climate Risk Perception Shapes Support for the Clean Energy Transition
            </h1>
          </article>
        </div>
      </section>

      {/* Article Content */}
      <div className="py-8 md:py-10">
        <div className="mx-auto px-4 md:px-6" style={{ maxWidth: '1200px' }}>
          <article>
            <div
              className="space-y-6 text-base leading-7"
              style={{ color: '#4a5568', maxWidth: '80ch' }}
            >
              <p>
                Researchers from the Greater Resilience, Innovation and Transformation (GRIT) Lab at Clemson University have published a new study examining how climate risk perception, social vulnerability, and political context influence public support for the clean energy transition across the United States. The article appears in <em>Energy Research &amp; Social Science</em>.
              </p>

              <p>
                The study integrates county-level data from more than 3,000 U.S. counties, combining Yale Climate Opinion Maps, FEMA&apos;s National Risk Index, and the 2024 U.S. presidential election results to examine how objective climate risks and public perceptions vary across different communities.
              </p>

              <p>
                One of the study&apos;s key findings is that perceived climate risk is a stronger predictor of support for clean energy than objective climate hazards alone. While communities experiencing greater climate risks are often expected to show stronger support for clean energy policies, the research demonstrates that political context substantially shapes how people interpret those risks. In conservative-leaning counties, higher objective climate risk may not translate into greater perceived risk, whereas the opposite pattern is observed in more liberal communities.
              </p>

              <p>
                The findings highlight the importance of developing communication and policy strategies that reflect local social, political, and environmental conditions rather than relying solely on scientific assessments of climate hazards. The study also emphasizes the role of social vulnerability in shaping public attitudes toward the clean energy transition and offers practical recommendations for policymakers seeking to build broader public support.
              </p>

              <p>
                Dr. Chien-fei Chen, senior author of the study, noted:
              </p>

              <blockquote
                className="pl-5 py-1"
                style={{ borderLeft: '4px solid #0B5FA5' }}
              >
                <p className="text-base italic leading-7" style={{ color: '#0c2340' }}>
                  &ldquo;Understanding how communities perceive climate risks is essential for designing effective clean energy policies. Scientific evidence alone is not always enough to motivate public support. Successful policy strategies must also consider local experiences, political contexts, and community priorities.&rdquo;
                </p>
              </blockquote>

              <p>
                The publication reflects the GRIT Lab&apos;s ongoing research on climate resilience, energy affordability, environmental sociology, and data-driven approaches to sustainable energy transitions.
              </p>

              <p className="mt-3 italic" style={{ color: '#0c2340' }}>
                Tsykalova, L., Ayinla, P. A., &amp; Chen, C.-F. (2026). Risk in Translation: Climate Risk, Social Vulnerability, and Clean Energy Support Across the United States. <em>Energy Research &amp; Social Science</em>, 138, 104827.
              </p>

              <p>
                <a
                  href="https://doi.org/10.1016/j.erss.2026.104827"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:underline"
                  style={{ color: '#0B5FA5' }}
                >
                  View the full publication →
                </a>
              </p>
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
