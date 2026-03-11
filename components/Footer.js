import Link from 'next/link'

export default function Footer() {
  return (
    <>
      {/* Professional Research Footer */}
      <footer 
        className="border-t" 
        style={{ 
          background: 'linear-gradient(180deg, #0c2340 0%, #091a2e 100%)', 
          borderColor: 'rgba(255,255,255,0.1)' 
        }}
      >
        <div className="container max-w-6xl px-6 py-10 md:py-12">
          {/* Three Column Layout: Contact | Quick Links | Project Identity */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">Contact</h3>
              <div className="space-y-2 text-sm">
                <p style={{ color: 'rgba(255,255,255,0.9)' }}>EMPOWER-HEALTH Research Initiative</p>
                <p style={{ color: 'rgba(255,255,255,0.9)' }}>Clemson University</p>
                <p style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Email: <a href="mailto:liaow@clemson.edu" className="hover:text-[#39D6D6] transition-colors">liaow@clemson.edu</a>
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">Quick Links</h3>
              <nav className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                <Link 
                  href="/research/objectives" 
                  className="transition-colors text-gray-400 hover:text-[#39D6D6]"
                >
                  Research Objectives
                </Link>
                <Link 
                  href="/research/study-areas" 
                  className="transition-colors text-gray-400 hover:text-[#39D6D6]"
                >
                  Study Areas
                </Link>
                <Link 
                  href="/research/thrusts" 
                  className="transition-colors text-gray-400 hover:text-[#39D6D6]"
                >
                  Research Thrusts
                </Link>
                <Link 
                  href="/our-team" 
                  className="transition-colors text-gray-400 hover:text-[#39D6D6]"
                >
                  Our Team
                </Link>
                <Link 
                  href="/resources" 
                  className="transition-colors text-gray-400 hover:text-[#39D6D6]"
                >
                  Resources
                </Link>
                <Link 
                  href="/resources/news" 
                  className="transition-colors text-gray-400 hover:text-[#39D6D6]"
                >
                  News
                </Link>
              </nav>
            </div>

            {/* Project Identity */}
            <div>
              <h3 className="font-bold mb-3 text-white text-sm uppercase tracking-wider">EMPOWER HEALTH</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-3">
                Environmental-Health, Electrification, Microgrids, and Power-saving Efficiency for Resilience-ALL.
              </p>
              <p className="text-xs text-gray-500">
                An interdisciplinary research initiative at Clemson University, funded by the Wellcome Trust.
              </p>
            </div>
          </div>

          {/* Bottom Bar: Copyright + Institutional Links */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} EMPOWER-HEALTH Research Initiative. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-gray-500">
              <a href="https://www.clemson.edu" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                Clemson University
              </a>
              <a href="https://wellcome.org" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                Wellcome Trust
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
