import { useState, useEffect } from 'react'
import './Navbar.css'

const navItems = [
  'Home',
  'Projects',
  'Skills',
  'Experience',
  'Certifications',
  'Contact',
]

export default function Navbar({ scrollContainerRef }) {
  const [activeSection, setActiveSection] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollTo = (index) => {
    if (scrollContainerRef.current) {
      const sectionHeight = window.innerHeight
      scrollContainerRef.current.scrollTo({
        top: index * sectionHeight,
        behavior: 'smooth',
      })
      
      // Reset all section states when navigating via navbar
      // This ensures sections return to their initial/main screen state
      window.dispatchEvent(new CustomEvent('navbarNavigation', { 
        detail: { targetSection: index } 
      }))
      
      // Always close mobile menu after navigation
      setIsMobileMenuOpen(false)
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      const sectionHeight = window.innerHeight
      const scrollTop = container.scrollTop
      const currentSection = Math.round(scrollTop / sectionHeight)
      setActiveSection(currentSection)
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [scrollContainerRef])

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="navbar">
        {navItems.map((label, index) => (
          <button 
            key={index} 
            onClick={() => scrollTo(index)}
            className={activeSection === index ? 'active' : ''}
          >
            {label}
          </button>
        ))}
      </nav>

      {/* Mobile Hamburger */}
      <button 
        className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((label, index) => (
          <button 
            key={index} 
            onClick={() => scrollTo(index)}
            className={activeSection === index ? 'active' : ''}
          >
            {label}
          </button>
        ))}
      </div>
    </>
  )
}
