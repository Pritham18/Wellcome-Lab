import Breadcrumbs from '@/components/Breadcrumbs'
import { Calendar, User } from 'lucide-react'
import { notFound } from 'next/navigation'

// This would typically come from a CMS or database
const articles = {
  'iaq-educational-materials': {
    title: 'Project Update: Indoor Air Quality Educational Materials Developed',
    date: 'June 30, 2026',
    author: 'Empower Health Research Team',
    category: 'Project Updates',
    image: '/images/iaq-flyer-final.png',
    imageAlt: 'Indoor Air Quality Educational Flyer developed for the Healthy Home Intervention Project',
    content: `
      <p>The Healthy Home Intervention Project has developed a new educational resource to help participating households better understand indoor air quality (IAQ) and interpret the information collected by indoor environmental monitors.</p>
      
      <p>The guide explains common indoor air quality indicators—including PM₂.₅, CO₂, and volatile organic compounds (VOCs)—using clear language and practical examples. It also highlights common indoor pollutant sources, potential health impacts, and simple actions households can take to improve indoor air quality.</p>
      
      <p>By combining environmental monitoring with accessible educational materials, the project aims to support participants in making informed decisions about their home environment while promoting healthier homes and improved well-being.</p>
      
      <p>This work is part of the Wellcome-funded research program "Advancing Climate Mitigation Policy Solutions with Health Co-benefits in G7 Countries", which explores how healthy housing interventions can reduce energy burden while improving indoor environmental quality and health.</p>
    `
  },
  'sc-gullah-geechee-summit': {
    title: 'Community Partner Event: South Carolina Gullah Geechee Summit',
    date: 'June 30, 2026',
    author: 'Empower Health Research Team',
    category: 'Workshops',
    content: `
      <p>We are pleased to share this event hosted by one of our valued community partners, the Gullah Geechee Cultural Heritage Corridor.</p>
      
      <p>The South Carolina Gullah Geechee Summit was scheduled for June 25–26, 2026, in Georgetown, South Carolina. The summit brought together community leaders, researchers, preservation professionals, and local organizations to discuss Gullah Geechee culture, language preservation, land stewardship, cultural tourism, and community resilience.</p>
      
      <p>The event will feature community workshops, panel discussions, networking opportunities, and a keynote address by Ron Daise, a nationally recognized advocate for Gullah Geechee heritage.</p>
      
      <p>As part of our commitment to community-engaged research and collaborative partnerships, we are excited to support and highlight events that strengthen cultural heritage and community resilience.</p>
      
      <p><strong>📅 Date:</strong> June 25–26, 2026<br/><strong>📍 Location:</strong> Georgetown, South Carolina</p>
      
      <p>For registration and additional information, please scan the QR code on the event flyer or visit the event registration page.</p>
    `
  },
  'faculty-spotlight-chen-camhr': {
    title: 'Faculty Spotlight: Dr. Chien-fei Chen Featured by Clemson CAMHR',
    date: 'June 30, 2026',
    author: 'Empower Health Research Team',
    category: 'Recognition',
    content: `
      <p>We are delighted to share that Dr. Chien-fei Chen, Professor of Sociology at Clemson University and Director of the Greater Resilience, Innovation & Transformation (GRIT) Lab, has been featured by Clemson University's Center on Addiction and Mental Health Research (CAMHR) as one of its faculty affiliates.</p>
      
      <p>Dr. Chen's interdisciplinary research brings together climate change, energy systems, environmental justice, public health, and community resilience to address some of today's most pressing societal challenges. Her work examines how social, behavioral, technological, and built-environment factors influence energy insecurity, infrastructure resilience, environmental exposures, and health outcomes, particularly among underserved communities.</p>
      
      <p>Among her current research initiatives are community-based healthy home interventions, energy justice, climate resilience, power outages, microgrids, and the impacts of rapidly growing data centers on public and population health. Working closely with healthcare providers, nonprofit organizations, utilities, policymakers, and community partners, Dr. Chen's research supports evidence-based solutions that promote healthier, more resilient, and more equitable communities.</p>
      
      <p>Supported by organizations including the Wellcome Trust, the U.S. National Science Foundation (NSF), the U.S. Environmental Protection Agency (EPA), and the Alfred P. Sloan Foundation, Dr. Chen has led numerous interdisciplinary projects advancing climate mitigation and health co-benefits through research, community engagement, and policy innovation.</p>
      
      <p>We congratulate Dr. Chen on this recognition and look forward to continuing to share the impacts of our research through the Wellcome Climate–Energy–Health Resilience Project.</p>
    `
  },
  'community-microgrid-launch': {
    title: 'Community Microgrid Project Launches in Study Area 1',
    date: 'January 15, 2026',
    author: 'Dr. Chen',
    category: 'Project Update',
    content: `
      <p>We are thrilled to announce the official launch of our first community microgrid demonstration project in Study Area 1. This milestone represents years of collaborative planning with community members, local government, and utility partners.</p>
      
      <h2>Project Overview</h2>
      <p>The microgrid will provide clean, reliable electricity to 150 households in a neighborhood that has historically experienced high energy burden and frequent power outages. The system includes solar photovoltaic arrays, battery storage, and smart grid technology to optimize energy distribution.</p>
      
      <h2>Community Benefits</h2>
      <p>Participating households can expect reduced energy costs, improved power reliability, and lower carbon emissions. The project will also create local jobs for installation and ongoing maintenance.</p>
      
      <h2>Research Component</h2>
      <p>Our team will monitor health outcomes, energy usage patterns, and community satisfaction over the next three years. This research will inform future microgrid deployments and policy recommendations.</p>
      
      <p>We extend our gratitude to all community members who contributed to the planning process and our funding partners who made this project possible.</p>
    `
  },
  'new-research-publication': {
    title: 'New Research Published on Health Benefits of Home Electrification',
    date: 'December 20, 2025',
    author: 'Empower Health Research Team',
    category: 'Research',
    content: `
      <p>We are pleased to share our latest peer-reviewed research demonstrating significant respiratory health improvements following home electrification upgrades.</p>
      
      <h2>Study Design</h2>
      <p>The longitudinal study followed 300 households over 18 months, comparing health outcomes before and after replacing gas appliances with electric alternatives and implementing improved ventilation systems.</p>
      
      <h2>Key Findings</h2>
      <p>Participants reported 35% reduction in respiratory symptoms, 28% decrease in asthma-related emergency room visits, and improved indoor air quality measurements across all monitored pollutants.</p>
      
      <h2>Policy Implications</h2>
      <p>These findings support expanded funding for home electrification programs as a public health intervention, particularly in communities with high rates of respiratory disease.</p>
      
      <p>The full publication is available in the Journal of Environmental Health and can be accessed through our Resources page.</p>
    `
  },
  'partnership-announcement': {
    title: 'Empower Health Announces Partnership with Local Utility',
    date: 'November 8, 2025',
    author: 'Communications Team',
    category: 'Partnership',
    content: `
      <p>Empower Health is proud to announce a strategic partnership with Regional Energy Services to expand weatherization and electrification programs across our study areas.</p>
      
      <h2>Partnership Scope</h2>
      <p>This collaboration will enable us to reach an additional 500 low-income households with comprehensive home energy upgrades over the next two years.</p>
      
      <h2>Program Components</h2>
      <p>Eligible households will receive energy audits, insulation improvements, efficient electric heating and cooling systems, and appliance upgrades at no cost. Technical assistance and energy education will be provided throughout the process.</p>
      
      <h2>Community Engagement</h2>
      <p>We will work closely with community organizations to ensure equitable access and culturally appropriate outreach. Information sessions will be held in multiple languages.</p>
      
      <p>For more information about program eligibility and how to apply, please contact our community engagement team.</p>
    `
  },
  'community-workshop-series': {
    title: 'Community Workshop Series on Clean Energy Transitions',
    date: 'October 30, 2025',
    author: 'Community Engagement Team',
    category: 'Event',
    content: `
      <p>Join us for an interactive workshop series designed to empower residents with knowledge about clean energy options, benefits, and available assistance programs.</p>
      
      <h2>Workshop Topics</h2>
      <p>The four-part series will cover: understanding your energy bill and reducing costs; home electrification basics; accessing weatherization assistance; and preparing for extreme weather events with clean energy solutions.</p>
      
      <h2>Format & Accessibility</h2>
      <p>Workshops will be held both in-person and virtually to maximize accessibility. Translation services, childcare, and light refreshments will be provided for in-person sessions.</p>
      
      <h2>Registration</h2>
      <p>All workshops are free and open to community members. Space is limited for in-person sessions, so early registration is encouraged.</p>
      
      <p>Register through our website or contact our office for assistance with registration.</p>
    `
  },
  'funding-award-announcement': {
    title: 'Empower Health Receives Additional Funding for Expansion',
    date: 'October 5, 2025',
    author: 'Dr. Chen',
    category: 'Funding',
    content: `
      <p>We are honored to receive additional funding that will enable significant expansion of our research activities and community engagement efforts.</p>
      
      <h2>Grant Details</h2>
      <p>The new grant will support expansion into three additional regions, allowing us to test our community-centered approach in diverse geographic and demographic contexts.</p>
      
      <h2>Research Expansion</h2>
      <p>Funding will support new research on long-term health outcomes, economic impacts of clean energy adoption, and barriers to equitable implementation in different community contexts.</p>
      
      <h2>Community Investment</h2>
      <p>A significant portion of the grant is dedicated to community capacity building, ensuring that local organizations have resources and training to continue this work independently.</p>
      
      <p>We look forward to building new partnerships and learning from communities as we expand our efforts toward energy justice and health equity.</p>
    `
  },
}

export default function NewsArticlePage({ params }) {
  const article = articles[params.slug]
  
  if (!article) {
    notFound()
  }

  return (
    <div style={{ background: 'var(--bg)' }}>
      <Breadcrumbs 
        items={[
          { label: 'News', href: '/news' },
          { label: article.title }
        ]} 
      />

      {/* Article Header */}
      <section className="border-b" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
        <div className="container max-w-7xl px-6 py-6 md:py-10">
          <article className="max-w-4xl">
            <div className="flex items-center gap-3 mb-3">
              <span 
                className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
                style={{ 
                  background: 'white',
                  color: 'var(--brand)',
                  border: '1px solid var(--border)'
                }}
              >
                {article.category}
              </span>
            </div>
            <h1 className="mb-4">{article.title}</h1>
            <div className="flex items-center gap-6 text-sm" style={{ color: 'var(--muted)' }}>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {article.date}
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {article.author}
              </div>
            </div>
          </article>
        </div>
      </section>

      <div className="container max-w-7xl px-6 py-8 md:py-10">
        <article className="max-w-4xl mx-auto">
          {/* Featured Image */}
          {article.image && (
            <div className="mb-8 rounded-xl overflow-hidden border" style={{ borderColor: 'var(--border)' }}>
              <img
                src={article.image}
                alt={article.imageAlt || article.title}
                className="w-full h-auto"
                style={{ display: 'block' }}
              />
            </div>
          )}
          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none section-card"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Back Link */}
          <div className="mt-8">
            <a 
              href="/news" 
              className="hover:underline"
              style={{ color: 'var(--brand)' }}
            >
              ← Back to News
            </a>
          </div>
        </article>
      </div>
    </div>
  )
}
