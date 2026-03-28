'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import {
  Calendar,
  Clock,
  Video,
  Mail,
  Download,
  Copy,
  Check,
  CalendarPlus,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  User,
  MapPin,
} from 'lucide-react'

/* ─── Event Data ─── */
const EVENT = {
  title:
    'Exploring Community Impacts, Energy Transitions, and Conceptual Frontiers for Industrial Decarbonization and Net-Zero Societies',
  series: 'Greater Resilience, Innovation & Transformation (GRIT) Lab Seminar',
  date: 'April 6, 2026',
  time: '1:00 PM (ET)',
  isoStart: '20260406T170000Z', // 1 PM ET = 5 PM UTC
  isoEnd: '20260406T180000Z',
  format: 'Zoom (Virtual)',
  zoomUrl: 'https://clemson.zoom.us/j/92399744548',
  flyerPdf: '/publications/grit-seminar-benjamin-sovacool-apr-2026.pdf',
  contact: {
    name: 'Prof. Chien-fei Chen',
    email: 'chienfc@clemson.edu',
    role: 'Department of Sociology, Anthropology & Criminal Justice; Director of GRIT Lab',
  },
  speaker: {
    name: 'Dr. Benjamin K. Sovacool',
    roles: [
      'Director, Institute for Global Sustainability',
      'Professor of Earth & Environment, Boston University',
    ],
    bioExtended: [
      'Founding Director, Institute for Global Sustainability',
      'Professor of Energy Policy, Bennett Institute for Innovation & Policy Acceleration',
      'University of Sussex Business School',
    ],
  },
  abstract: `Decarbonizing Industry: Social, ethical, and political dimensions, industrial decarbonization is often framed as a technical challenge, given the sector's reliance on diverse fuels and complex processes across heterogeneous industries. Solutions typically focus on carbon capture, hydrogen, electrification, and energy efficiency. However, this perspective overlooks critical social and ethical dimensions. Communities and workers dependent on fossil-fuel industries may face economic disruption and livelihood loss. Decisions around complying with climate policies can reshape cultural, economic, and political systems. This presentation emphasizes these nontechnical aspects, highlighting frameworks like Just Transitions and exploring pathways for equitable and accelerated low-carbon transitions.`,
  bio: {
    academicLeadership: {
      heading: 'Academic Leadership',
      items: [
        'Fellow of the Royal Society for Arts, Manufactures and Commerce',
        'Fellow of the Academy of Social Sciences',
        'Fellow of Academia Europaea',
        'Previously: Director, Sussex Energy Group (SPRU), University of Sussex',
        'Previously: Director, Center for Energy Technologies, Aarhus University',
        'University Distinguished Professor',
      ],
    },
    researchFocus: {
      heading: 'Research Focus',
      items: [
        'Energy policy, energy justice, energy security',
        'Climate change mitigation and adaptation',
        'Renewable energy and energy efficiency',
        'Ethics and governance of energy systems',
        'Public policy for energy access and resilience',
        'Global work across Asia, Africa, Europe, and North America',
      ],
    },
    globalRecognition: {
      heading: 'Global Recognition',
      items: [
        'Endorsed by Bill Clinton, Gro Harlem Brundtland, and Elinor Ostrom',
        'Coordinating Lead Author, IPCC Seventh Assessment Report (AR7)',
        'Board Member, National Academies of Sciences',
        'Advisor, UK Department for Energy Security and Net Zero',
      ],
    },
    fundingImpact: {
      heading: 'Funding & Impact',
      items: [
        'Managed over $48 million in research funding',
        'Contributed to projects exceeding $259 million',
        'U.S. Department of Energy, National Science Foundation',
        'European Commission, European Research Council',
        'Rockefeller Foundation, MacArthur Foundation',
      ],
    },
    awards: {
      heading: 'Awards',
      items: [
        'USERN Prize (2019)',
        'Dedication to Justice Award (American Bar Association)',
        'Distinguished Alumni Award (Virginia Tech)',
        'Spirit Award (University of Sussex)',
        'Among the top 1% most cited social scientists globally',
        'Ranked in the top 1% annually from 2019–2025',
      ],
    },
  },
}

/* ─── .ics Calendar File Generator ─── */
function generateICS() {
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//GRIT Lab//Seminar//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `DTSTART:${EVENT.isoStart}`,
    `DTEND:${EVENT.isoEnd}`,
    `SUMMARY:${EVENT.title}`,
    `DESCRIPTION:GRIT Lab Seminar featuring ${EVENT.speaker.name}. Join via Zoom: ${EVENT.zoomUrl}`,
    `LOCATION:${EVENT.zoomUrl}`,
    `URL:${EVENT.zoomUrl}`,
    `ORGANIZER;CN=${EVENT.contact.name}:mailto:${EVENT.contact.email}`,
    'STATUS:CONFIRMED',
    `UID:grit-sovacool-apr2026@clemson.edu`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')

  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'grit-lab-sovacool-seminar.ics'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

/* ─── Bio Accordion Section ─── */
function BioSection({ heading, items, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div
      className="border rounded-lg overflow-hidden"
      style={{ borderColor: 'rgba(12, 35, 64, 0.12)' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-inset"
        style={{ focusRingColor: '#0B5FA5' }}
        aria-expanded={open}
      >
        <span className="text-sm font-semibold" style={{ color: '#0c2340' }}>
          {heading}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 flex-shrink-0" style={{ color: '#4a5568' }} />
        ) : (
          <ChevronDown className="w-4 h-4 flex-shrink-0" style={{ color: '#4a5568' }} />
        )}
      </button>
      {open && (
        <ul className="px-5 pb-4 space-y-1.5 animate-in fade-in slide-in-from-top-1 duration-200">
          {items.map((item, i) => (
            <li
              key={i}
              className="text-sm leading-relaxed flex items-start gap-2"
              style={{ color: '#4a5568' }}
            >
              <span
                className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: '#0B5FA5' }}
              />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

/* ─── Copy Button ─── */
function CopyZoomButton() {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EVENT.zoomUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      const ta = document.createElement('textarea')
      ta.value = EVENT.zoomUrl
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }, [])

  return (
    <button
      onClick={handleCopy}
      className="flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-lg text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 border"
      style={{
        color: '#0B5FA5',
        borderColor: '#0B5FA5',
        background: 'white',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(11, 95, 165, 0.06)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'white'
      }}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4" /> Copied!
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" /> Copy Zoom Link
        </>
      )}
    </button>
  )
}

/* ─── Page Component ─── */
export default function SovacoolSeminarPage() {
  return (
    <div style={{ background: '#f8fafc' }}>
      <Breadcrumbs
        items={[
          { label: 'Resources', href: '/resources' },
          { label: 'News', href: '/resources/news' },
          { label: 'Seminar' },
        ]}
      />

      {/* ── Hero Section ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, #0c2340 0%, #1e5a8e 50%, #2d9f7c 100%)',
        }}
      >
        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative mx-auto px-4 md:px-6 py-10 md:py-16" style={{ maxWidth: '1400px' }}>
          {/* Series label */}
          <span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-5"
            style={{
              background: 'rgba(255,255,255,0.15)',
              color: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(4px)',
            }}
          >
            <Video className="w-3.5 h-3.5" />
            {EVENT.series}
          </span>

          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4"
            style={{ color: '#ffffff', maxWidth: '52ch' }}
          >
            {EVENT.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> {EVENT.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> {EVENT.time}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-4 h-4" /> {EVENT.format}
            </span>
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <div className="mx-auto px-4 md:px-6 py-8 md:py-12" style={{ maxWidth: '1400px' }}>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left column – 2/3 width */}
          <div className="lg:col-span-2 space-y-8">
            {/* Abstract */}
            <section>
              <h2
                className="text-lg font-bold mb-4"
                style={{ color: '#0c2340' }}
              >
                Abstract
              </h2>
              <div
                className="rounded-xl p-6 md:p-8"
                style={{ background: 'white', border: '1px solid rgba(12, 35, 64, 0.08)' }}
              >
                <p
                  className="text-sm md:text-base leading-7"
                  style={{ color: '#4a5568' }}
                >
                  {EVENT.abstract}
                </p>
              </div>
            </section>

            {/* Speaker Bio Accordion */}
            <section>
              <h2
                className="text-lg font-bold mb-4"
                style={{ color: '#0c2340' }}
              >
                Speaker Biography
              </h2>
              <div className="space-y-3">
                {Object.values(EVENT.bio).map((section, i) => (
                  <BioSection
                    key={section.heading}
                    heading={section.heading}
                    items={section.items}
                    defaultOpen={i === 0}
                  />
                ))}
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2
                className="text-lg font-bold mb-4"
                style={{ color: '#0c2340' }}
              >
                Contact
              </h2>
              <div
                className="rounded-xl p-6"
                style={{ background: 'white', border: '1px solid rgba(12, 35, 64, 0.08)' }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(11, 95, 165, 0.1)' }}
                  >
                    <Mail className="w-5 h-5" style={{ color: '#0B5FA5' }} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: '#0c2340' }}>
                      {EVENT.contact.name}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: '#4a5568' }}>
                      {EVENT.contact.role}
                    </p>
                    <a
                      href={`mailto:${EVENT.contact.email}`}
                      className="inline-flex items-center gap-1 text-sm font-medium mt-2 hover:underline focus:outline-none focus:ring-2 rounded"
                      style={{ color: '#0B5FA5' }}
                    >
                      <Mail className="w-3.5 h-3.5" />
                      {EVENT.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer note */}
            <p className="text-xs italic" style={{ color: '#6b7280' }}>
              Supported by Wellcome Trust Foundation
            </p>
          </div>

          {/* Right sidebar */}
          <aside className="space-y-6">
            {/* Event Details Card */}
            <div
              className="rounded-xl p-6 sticky top-24"
              style={{ background: 'white', border: '1px solid rgba(12, 35, 64, 0.08)' }}
            >
              <h3
                className="text-base font-bold mb-5"
                style={{ color: '#0c2340' }}
              >
                Event Details
              </h3>

              <dl className="space-y-4 text-sm mb-6">
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#0B5FA5' }} />
                  <div>
                    <dt className="font-medium" style={{ color: '#0c2340' }}>Date</dt>
                    <dd style={{ color: '#4a5568' }}>{EVENT.date}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#0B5FA5' }} />
                  <div>
                    <dt className="font-medium" style={{ color: '#0c2340' }}>Time</dt>
                    <dd style={{ color: '#4a5568' }}>{EVENT.time}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Video className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#0B5FA5' }} />
                  <div>
                    <dt className="font-medium" style={{ color: '#0c2340' }}>Format</dt>
                    <dd style={{ color: '#4a5568' }}>{EVENT.format}</dd>
                  </div>
                </div>
              </dl>

              {/* CTA stack */}
              <div className="space-y-3">
                {/* Primary: Join on Zoom */}
                <a
                  href={EVENT.zoomUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-lg text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2"
                  style={{
                    background: '#0B5FA5',
                    color: '#ffffff',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#094d87'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#0B5FA5'
                  }}
                >
                  <Video className="w-4 h-4" />
                  Join on Zoom
                </a>

                {/* Secondary: Copy Zoom Link */}
                <CopyZoomButton />

                {/* Tertiary: Add to Calendar */}
                <button
                  onClick={generateICS}
                  className="flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
                  style={{
                    color: '#4a5568',
                    background: '#f1f5f9',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#e2e8f0'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#f1f5f9'
                  }}
                >
                  <CalendarPlus className="w-4 h-4" />
                  Add to Calendar
                </button>

                {/* Download Flyer */}
                <a
                  href={EVENT.flyerPdf}
                  download
                  className="flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
                  style={{
                    color: '#4a5568',
                    background: '#f1f5f9',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#e2e8f0'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#f1f5f9'
                  }}
                >
                  <Download className="w-4 h-4" />
                  Download Flyer (PDF)
                </a>
              </div>
            </div>

            {/* Speaker Card */}
            <div
              className="rounded-xl p-6"
              style={{ background: 'white', border: '1px solid rgba(12, 35, 64, 0.08)' }}
            >
              <h3
                className="text-base font-bold mb-4"
                style={{ color: '#0c2340' }}
              >
                Speaker
              </h3>
              <div className="flex items-start gap-4">
                {/* Avatar placeholder */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #0c2340 0%, #1e5a8e 100%)' }}
                >
                  <User className="w-7 h-7" style={{ color: 'rgba(255,255,255,0.85)' }} />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-sm" style={{ color: '#0c2340' }}>
                    {EVENT.speaker.name}
                  </p>
                  {EVENT.speaker.roles.map((role) => (
                    <p
                      key={role}
                      className="text-xs mt-1 leading-snug"
                      style={{ color: '#4a5568' }}
                    >
                      {role}
                    </p>
                  ))}
                  <div className="mt-2 pt-2" style={{ borderTop: '1px solid rgba(12,35,64,0.08)' }}>
                    {EVENT.speaker.bioExtended.map((line) => (
                      <p
                        key={line}
                        className="text-xs leading-snug mt-1"
                        style={{ color: '#6b7280' }}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Back link */}
        <div className="mt-10 pt-6" style={{ borderTop: '1px solid rgba(12, 35, 64, 0.08)' }}>
          <Link
            href="/resources/news"
            className="inline-flex items-center gap-1.5 text-sm font-medium hover:underline focus:outline-none focus:ring-2 rounded"
            style={{ color: '#0B5FA5' }}
          >
            ← Back to News
          </Link>
        </div>
      </div>
    </div>
  )
}
