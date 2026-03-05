'use client'

import { useEffect, useState } from 'react'

export default function OnThisPage({ sections }) {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -80% 0px' }
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sections])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="sticky top-24">
      <div 
        className="rounded-2xl border shadow-sm p-5"
        style={{ 
          background: 'white',
          borderColor: 'var(--border)'
        }}
      >
        <h3 className="font-semibold text-sm mb-4" style={{ color: 'var(--text)' }}>On this page</h3>
        <nav className="space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`nav-link-item block text-left text-sm py-2 px-3 rounded transition-all w-full border-l-2 ${
                activeSection === section.id
                  ? 'font-medium active'
                  : ''
              }`}
              style={{
                color: activeSection === section.id ? 'var(--brand)' : 'var(--muted)',
                background: activeSection === section.id ? 'var(--surface)' : 'transparent',
                borderLeftColor: activeSection === section.id ? 'var(--accent)' : 'transparent'
              }}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}
