import Breadcrumbs from '@/components/Breadcrumbs'
import { FileText, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export default function PublicationsPage() {
  return (
    <div style={{ background: '#f8fafc' }}>
      <Breadcrumbs 
        items={[
          { label: 'Research', href: '/research/study-areas' },
          { label: 'Publications' }
        ]} 
      />
      
      {/* Page Hero */}
      <section 
        className="py-8 md:py-10"
        style={{ background: '#0c2340' }}
      >
        <div className="mx-auto px-6 md:px-10 lg:px-16" style={{ maxWidth: '1400px' }}>
          <div className="mb-4" style={{ width: '40px', height: '3px', background: '#F56600', borderRadius: '2px' }} />
          <h1 
            className="text-3xl md:text-4xl font-bold mb-2"
            style={{ color: '#ffffff' }}
          >
            Publications
          </h1>
          <p 
            className="text-sm md:text-base"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            Academic publications and research papers from the EMPOWER-ALL project.
          </p>
        </div>
      </section>

      {/* Publication List */}
      <div className="mx-auto px-6 md:px-10 lg:px-16 py-8 md:py-10" style={{ maxWidth: '1400px' }}>
        <div className="space-y-3">

          {/* Publication 1 */}
          <Link 
            href="/publications/Public support for microgrids.pdf" 
            target="_blank"
            className="group block bg-white rounded-lg border border-transparent hover:border-slate-200 hover:shadow-sm transition-all"
            style={{ borderLeft: '3px solid #0B5FA5' }}
          >
            <div className="flex items-center gap-4 md:gap-6 px-5 md:px-6 py-4">
              <div className="flex-shrink-0 w-9 h-9 rounded-md flex items-center justify-center" style={{ background: 'rgba(11, 95, 165, 0.08)' }}>
                <FileText className="w-4 h-4" style={{ color: '#0B5FA5' }} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[15px] font-semibold leading-snug group-hover:text-[#0B5FA5] transition-colors" style={{ color: '#0c2340' }}>
                  Public Support for Mobile Community Microgrids: Perceptual, Socioeconomic, and Power Outage Experience Drivers of Energy Infrastructure Resilience
                </h3>
              </div>
              <ArrowUpRight className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-60 transition-opacity" style={{ color: '#0B5FA5' }} />
            </div>
          </Link>

          {/* Publication 2 */}
          <Link 
            href="/publications/electric-power-reliability-energy-burdens-and-climate-change-beliefs-in-the-united-states.pdf" 
            target="_blank"
            className="group block bg-white rounded-lg border border-transparent hover:border-slate-200 hover:shadow-sm transition-all"
            style={{ borderLeft: '3px solid #0B5FA5' }}
          >
            <div className="flex items-center gap-4 md:gap-6 px-5 md:px-6 py-4">
              <div className="flex-shrink-0 w-9 h-9 rounded-md flex items-center justify-center" style={{ background: 'rgba(11, 95, 165, 0.08)' }}>
                <FileText className="w-4 h-4" style={{ color: '#0B5FA5' }} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[15px] font-semibold leading-snug group-hover:text-[#0B5FA5] transition-colors" style={{ color: '#0c2340' }}>
                  Electric Power Reliability, Energy Burdens, and Climate Change Beliefs in the United States
                </h3>
                <p className="text-xs mt-1" style={{ color: '#6b7280' }}>
                  Environmental Science &amp; Technology
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-60 transition-opacity" style={{ color: '#0B5FA5' }} />
            </div>
          </Link>

          {/* Publication 3 */}
          <Link 
            href="/publications/Equity implications of pecuniary externalities on an electrid grid.pdf" 
            target="_blank"
            className="group block bg-white rounded-lg border border-transparent hover:border-slate-200 hover:shadow-sm transition-all"
            style={{ borderLeft: '3px solid #0B5FA5' }}
          >
            <div className="flex items-center gap-4 md:gap-6 px-5 md:px-6 py-4">
              <div className="flex-shrink-0 w-9 h-9 rounded-md flex items-center justify-center" style={{ background: 'rgba(11, 95, 165, 0.08)' }}>
                <FileText className="w-4 h-4" style={{ color: '#0B5FA5' }} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[15px] font-semibold leading-snug group-hover:text-[#0B5FA5] transition-colors" style={{ color: '#0c2340' }}>
                  The Equity Implications of Pecuniary Externalities on an Electric Grid
                </h3>
              </div>
              <ArrowUpRight className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-60 transition-opacity" style={{ color: '#0B5FA5' }} />
            </div>
          </Link>

          {/* Publication 4 */}
          <Link 
            href="/publications/Residential Weatherization Report Draft July 28 2025.pdf" 
            target="_blank"
            className="group block bg-white rounded-lg border border-transparent hover:border-slate-200 hover:shadow-sm transition-all"
            style={{ borderLeft: '3px solid #0B5FA5' }}
          >
            <div className="flex items-center gap-4 md:gap-6 px-5 md:px-6 py-4">
              <div className="flex-shrink-0 w-9 h-9 rounded-md flex items-center justify-center" style={{ background: 'rgba(11, 95, 165, 0.08)' }}>
                <FileText className="w-4 h-4" style={{ color: '#0B5FA5' }} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[15px] font-semibold leading-snug group-hover:text-[#0B5FA5] transition-colors" style={{ color: '#0c2340' }}>
                  Health Co-Benefits and Low-Income Residential Weatherization in the United States
                </h3>
                <p className="text-xs mt-1" style={{ color: '#6b7280' }}>
                  Report
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-60 transition-opacity" style={{ color: '#0B5FA5' }} />
            </div>
          </Link>

          {/* Publication 5 */}
          <Link 
            href="/publications/Coal PM2.5 and Health_Chen.pdf" 
            target="_blank"
            className="group block bg-white rounded-lg border border-transparent hover:border-slate-200 hover:shadow-sm transition-all"
            style={{ borderLeft: '3px solid #0B5FA5' }}
          >
            <div className="flex items-center gap-4 md:gap-6 px-5 md:px-6 py-4">
              <div className="flex-shrink-0 w-9 h-9 rounded-md flex items-center justify-center" style={{ background: 'rgba(11, 95, 165, 0.08)' }}>
                <FileText className="w-4 h-4" style={{ color: '#0B5FA5' }} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[15px] font-semibold leading-snug group-hover:text-[#0B5FA5] transition-colors" style={{ color: '#0c2340' }}>
                  Coal PM2.5 and Health
                </h3>
              </div>
              <ArrowUpRight className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-60 transition-opacity" style={{ color: '#0B5FA5' }} />
            </div>
          </Link>

        </div>
      </div>
    </div>
  )
}
