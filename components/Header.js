'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Search, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path) => {
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  // Check if current page is under Research section
  const isResearchActive = () => {
    return pathname.startsWith('/research')
  }

  // Check if current page is under Resources section
  const isResourcesActive = () => {
    return pathname.startsWith('/resources')
  }

  return (
    <header className="sticky top-0 z-50 w-full" style={{ background: '#0B5FA5', overflow: 'visible' }}>
      
      <div className="border-b shadow-sm" style={{ borderColor: 'var(--header-border)', overflow: 'visible' }}>
        <div className="container px-4 md:px-6 lg:px-8" style={{ overflow: 'visible' }}>
          {/* Main Header Row - Increased height for full logo visibility */}
          <div 
            className="flex items-center justify-between py-3 md:py-4"
            style={{ minHeight: '100px', overflow: 'visible' }}
          >
            {/* LEFT SIDE: Clemson Seal + Text */}
            <Link 
              href="/" 
              className="flex items-center gap-3 md:gap-4 no-underline group focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B5FA5] rounded-lg py-1.5"
            >
              {/* Clemson University Seal - Larger size */}
              <div 
                className="relative flex-shrink-0 w-[68px] h-[68px] md:w-[80px] md:h-[80px] lg:w-[90px] lg:h-[90px] rounded-full flex items-center justify-center transition-all duration-200 ease-out group-hover:scale-[1.02]"
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(255,255,255,0.5)',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
                  padding: '5px',
                }}
              >
                <Image
                  src="/images/clemson-paw-logo.jpg"
                  alt="Clemson University seal"
                  width={90}
                  height={90}
                  className="w-full h-full rounded-full"
                  style={{
                    objectFit: 'contain',
                  }}
                  priority
                  unoptimized
                />
              </div>
              
              {/* Text Block */}
              <div className="flex flex-col gap-0">
                {/* Line 1: Clemson University - increased by one size step, responsive */}
                <span 
                  className="text-lg sm:text-xl md:text-2xl"
                  style={{ 
                    color: 'rgba(255,255,255,0.92)', 
                    fontWeight: '600',
                    letterSpacing: '0.01em',
                    lineHeight: '1.2',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Clemson University
                </span>
                
                {/* Line 2: Department - increased by one size step */}
                <span 
                  className="hidden sm:block text-base md:text-lg"
                  style={{ 
                    color: '#ffffff', 
                    fontWeight: '600',
                    letterSpacing: '-0.01em',
                    lineHeight: '1.25',
                  }}
                >
                  Department of Sociology, Anthropology & Criminal Justice
                </span>
                
                {/* Mobile: shorter department name - increased by one size step */}
                <span 
                  className="sm:hidden text-sm"
                  style={{ 
                    color: '#ffffff', 
                    fontWeight: '600',
                    lineHeight: '1.25',
                  }}
                >
                  Sociology, Anthropology & Criminal Justice
                </span>
              </div>
            </Link>

            {/* RIGHT SIDE: Empower Health Title + Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-3 no-underline group focus:outline-none"
            >
              <span
                className="hidden sm:block text-lg md:text-xl lg:text-2xl"
                style={{
                  color: '#ffffff',
                  fontWeight: '700',
                  letterSpacing: '0.01em',
                  lineHeight: '1.2',
                  whiteSpace: 'nowrap',
                }}
              >
                Empower Health
              </span>
              <div 
                className="flex-shrink-0 rounded-full overflow-hidden p-0 border-0 shadow-none bg-transparent transition-transform duration-200 ease-out group-hover:scale-[1.04] w-[64px] h-[64px] sm:w-[72px] sm:h-[72px] md:w-[84px] md:h-[84px] lg:w-[100px] lg:h-[100px]"
              >
                <Image
                  src="/images/empower-health-logo.png"
                  alt="Empower Health logo"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover object-center block"
                  priority
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Desktop Navigation Bar - Separate row, darker aqua background */}
      <div className="hidden lg:block" style={{ background: '#0B8D94' }}>
        <div className="container px-4 md:px-6 lg:px-8">
          <nav className="flex items-center justify-end gap-6 py-2">
              {/* About */}
              <Link 
                href="/" 
                className="header-nav-item font-medium transition-colors relative nav-header-link"
                style={{ 
                  color: pathname === '/' ? 'var(--header-fg)' : 'var(--header-fg-muted)',
                  textDecoration: pathname === '/' ? 'underline' : 'none',
                  textDecorationColor: 'rgba(255,255,255,0.9)',
                  textDecorationThickness: '2px',
                  textUnderlineOffset: '4px'
                }}
              >
                About
              </Link>
              
              {/* Research Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className="header-nav-item font-medium bg-transparent nav-header-link inline-flex items-center gap-1 cursor-pointer border-0 outline-none"
                    style={{ 
                      color: isResearchActive() ? 'var(--header-fg)' : 'var(--header-fg-muted)',
                      textDecoration: isResearchActive() ? 'underline' : 'none',
                      textDecorationColor: 'rgba(255,255,255,0.9)',
                      textDecorationThickness: '2px',
                      textUnderlineOffset: '4px'
                    }}
                  >
                    Research
                    <ChevronDown className="h-3 w-3" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-[240px] bg-white rounded-lg shadow-lg border" style={{ borderColor: 'var(--border)' }}>
                  <DropdownMenuItem asChild>
                    <Link
                      href="/research/objectives"
                      className="block select-none rounded-md px-3 py-2 header-dropdown-item font-medium leading-none no-underline outline-none transition-colors hover:bg-[var(--surface)] whitespace-nowrap cursor-pointer"
                      style={{ color: 'var(--text)' }}
                    >
                      Research Objectives
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href="/research/study-areas"
                      className="block select-none rounded-md px-3 py-2 header-dropdown-item font-medium leading-none no-underline outline-none transition-colors hover:bg-[var(--surface)] whitespace-nowrap cursor-pointer"
                      style={{ color: 'var(--text)' }}
                    >
                      Study Areas
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href="/research/thrusts"
                      className="block select-none rounded-md px-3 py-2 header-dropdown-item font-medium leading-none no-underline outline-none transition-colors hover:bg-[var(--surface)] whitespace-nowrap cursor-pointer"
                      style={{ color: 'var(--text)' }}
                    >
                      Thrusts
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href="/research/data"
                      className="block select-none rounded-md px-3 py-2 header-dropdown-item font-medium leading-none no-underline outline-none transition-colors hover:bg-[var(--surface)] whitespace-nowrap cursor-pointer"
                      style={{ color: 'var(--text)' }}
                    >
                      Data
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href="/research/publications"
                      className="block select-none rounded-md px-3 py-2 header-dropdown-item font-medium leading-none no-underline outline-none transition-colors hover:bg-[var(--surface)] whitespace-nowrap cursor-pointer"
                      style={{ color: 'var(--text)' }}
                    >
                      Publications
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Resources Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className="header-nav-item font-medium bg-transparent nav-header-link inline-flex items-center gap-1 cursor-pointer border-0 outline-none"
                    style={{ 
                      color: isResourcesActive() ? 'var(--header-fg)' : 'var(--header-fg-muted)',
                      textDecoration: isResourcesActive() ? 'underline' : 'none',
                      textDecorationColor: 'rgba(255,255,255,0.9)',
                      textDecorationThickness: '2px',
                      textUnderlineOffset: '4px'
                    }}
                  >
                    Resources
                    <ChevronDown className="h-3 w-3" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-[180px] bg-white rounded-lg shadow-lg border" style={{ borderColor: 'var(--border)' }}>
                  <DropdownMenuItem asChild>
                    <Link
                      href="/resources"
                      className="block select-none rounded-md px-3 py-2 header-dropdown-item font-medium leading-none no-underline outline-none transition-colors hover:bg-[var(--surface)] cursor-pointer"
                      style={{ color: 'var(--text)' }}
                    >
                      Resources
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href="/resources/news"
                      className="block select-none rounded-md px-3 py-2 header-dropdown-item font-medium leading-none no-underline outline-none transition-colors hover:bg-[var(--surface)] cursor-pointer"
                      style={{ color: 'var(--text)' }}
                    >
                      News
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Our Team */}
              <Link 
                href="/our-team" 
                className="header-nav-item font-medium transition-colors relative nav-header-link"
                style={{ 
                  color: isActive('/our-team') ? 'var(--header-fg)' : 'var(--header-fg-muted)',
                  textDecoration: isActive('/our-team') ? 'underline' : 'none',
                  textDecorationColor: 'rgba(255,255,255,0.9)',
                  textDecorationThickness: '2px',
                  textUnderlineOffset: '4px'
                }}
              >
                Our Team
              </Link>

              {/* Search Icon */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="nav-header-link"
                    style={{ color: 'var(--header-fg-muted)' }}
                  >
                    <Search className="h-5 w-5" />
                    <span className="sr-only">Search</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80" align="end">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm" style={{ color: 'var(--text)' }}>Search</h4>
                    <Input
                      type="search"
                      placeholder="Search site..."
                      className="w-full"
                    />
                  </div>
                </PopoverContent>
              </Popover>
            </nav>
        </div>
      </div>

      {/* Mobile Menu Button - Fixed position on tablet/mobile */}
      <div className="lg:hidden fixed right-4 z-50 flex items-center gap-2" style={{ top: 'calc(6px + 28px)' }}>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="nav-header-link"
              style={{ color: 'var(--header-fg-muted)', background: 'rgba(11, 95, 165, 0.9)' }}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80" align="end">
            <div className="space-y-2">
              <h4 className="font-semibold text-sm" style={{ color: 'var(--text)' }}>Search</h4>
              <Input
                type="search"
                placeholder="Search site..."
                className="w-full"
              />
            </div>
          </PopoverContent>
        </Popover>

        <Button
          variant="ghost"
          size="icon"
          className="nav-header-link"
          style={{ color: 'var(--header-fg)', background: 'rgba(11, 95, 165, 0.9)' }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t" style={{ borderColor: 'var(--header-border)', background: '#0B5FA5' }}>
          <nav className="container px-6 py-4 flex flex-col gap-4">
            {/* About */}
            <Link
              href="/"
              className="text-sm font-medium py-2"
              style={{ 
                color: pathname === '/' ? 'var(--header-fg)' : 'var(--header-fg-muted)',
                textDecoration: pathname === '/' ? 'underline' : 'none',
                textDecorationColor: '#39D6D6',
                textDecorationThickness: '2px',
                textUnderlineOffset: '4px'
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            
            {/* Research */}
            <div>
              <div 
                className="text-sm font-medium py-2"
                style={{ 
                  color: isResearchActive() ? 'var(--header-fg)' : 'var(--header-fg-muted)',
                  textDecoration: isResearchActive() ? 'underline' : 'none',
                  textDecorationColor: '#39D6D6',
                  textDecorationThickness: '2px',
                  textUnderlineOffset: '4px'
                }}
              >
                Research
              </div>
              <div className="pl-4 flex flex-col gap-1">
                <Link
                  href="/research/objectives"
                  className="text-sm py-2 whitespace-nowrap"
                  style={{ color: 'var(--header-fg-subtle)' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Research Objectives
                </Link>
                <Link
                  href="/research/study-areas"
                  className="text-sm py-2 whitespace-nowrap"
                  style={{ color: 'var(--header-fg-subtle)' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Study Areas
                </Link>
                <Link
                  href="/research/thrusts"
                  className="text-sm py-2 whitespace-nowrap"
                  style={{ color: 'var(--header-fg-subtle)' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Thrusts
                </Link>
                <Link
                  href="/research/data"
                  className="text-sm py-2 whitespace-nowrap"
                  style={{ color: 'var(--header-fg-subtle)' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Data
                </Link>
                <Link
                  href="/research/publications"
                  className="text-sm py-2 whitespace-nowrap"
                  style={{ color: 'var(--header-fg-subtle)' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Publications
                </Link>
              </div>
            </div>
            
            {/* Resources */}
            <div>
              <div 
                className="text-sm font-medium py-2"
                style={{ 
                  color: isResourcesActive() ? 'var(--header-fg)' : 'var(--header-fg-muted)',
                  textDecoration: isResourcesActive() ? 'underline' : 'none',
                  textDecorationColor: '#39D6D6',
                  textDecorationThickness: '2px',
                  textUnderlineOffset: '4px'
                }}
              >
                Resources
              </div>
              <div className="pl-4 flex flex-col gap-1">
                <Link
                  href="/resources"
                  className="text-sm py-2"
                  style={{ color: 'var(--header-fg-subtle)' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Resources
                </Link>
                <Link
                  href="/resources/news"
                  className="text-sm py-2"
                  style={{ color: 'var(--header-fg-subtle)' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  News
                </Link>
              </div>
            </div>
            
            {/* Our Team */}
            <Link
              href="/our-team"
              className="text-sm font-medium py-2"
              style={{ 
                color: isActive('/our-team') ? 'var(--header-fg)' : 'var(--header-fg-muted)',
                textDecoration: isActive('/our-team') ? 'underline' : 'none',
                textDecorationColor: '#39D6D6',
                textDecorationThickness: '2px',
                textUnderlineOffset: '4px'
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Team
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
