import { useRef, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Scene from './components/3d/Scene' // ✅ Add your 3D background
import CornerScroller from './components/CornerScroller'
import Footer from './components/Footer'

import HomeSection from './sections/HomeSectionFixed'
import ProjectGridSection from './sections/ProjectGridSection'
import SkillsSectionWithRobot from './sections/SkillsSectionWithRobot'
import ExperienceSectionWithRobot from './sections/ExperienceSectionWithRobot'
import CertificationsSectionWithRobot from './sections/CertificationsSectionWithRobot'
import ContactSectionWithRobot from './sections/ContactSectionWithRobot'

function App() {
  const containerRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0) // ✅ Track scroll for 3D
  const [currentSection, setCurrentSection] = useState(0)
  const [homeSlideIndex, setHomeSlideIndex] = useState(0)
  const [skillsSlideIndex, setSkillsSlideIndex] = useState(0)
  const [experienceSlideIndex, setExperienceSlideIndex] = useState(0)
  const [projectsSlideIndex, setProjectsSlideIndex] = useState(0)
  const [certificationsSlideIndex, setCertificationsSlideIndex] = useState(0)

  // 🎯 Track vertical scroll progress (for 3D background sync)
  useEffect(() => {
    const container = containerRef.current

    const handleScroll = () => {
      const maxScroll = container.scrollHeight - container.clientHeight
      const currentScroll = container.scrollTop
      const progress = maxScroll > 0 ? currentScroll / maxScroll : 0
      setScrollProgress(progress)

      // Track current section
      const sectionHeight = window.innerHeight
      const currentSectionIndex = Math.round(currentScroll / sectionHeight)
      setCurrentSection(currentSectionIndex)
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  // 🖱️ Add drag support for vertical scrolling (only when on first slide of Home section)
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let isDown = false
    let startY
    let scrollTop

    const handleMouseDown = (e) => {
      // Block vertical drag if in Home section and not on first slide
      if (currentSection === 0 && homeSlideIndex > 0) {
        return
      }
      
      // Block vertical drag if in Skills section and not on first slide
      if (currentSection === 2 && skillsSlideIndex > 0) {
        return
      }
      
      // Block vertical drag if in Experience section and not on first slide
      if (currentSection === 3 && experienceSlideIndex > 0) {
        return
      }
      
      // Block vertical drag if in Projects section and not on first slide
      if (currentSection === 1 && projectsSlideIndex > 0) {
        return
      }
      
      // Block vertical drag if in Certifications section and not on first slide
      if (currentSection === 4 && certificationsSlideIndex > 0) {
        return
      }
      
      isDown = true
      container.classList.add('dragging')
      startY = e.pageY - container.offsetTop
      scrollTop = container.scrollTop
    }

    const handleMouseLeave = () => {
      isDown = false
      container.classList.remove('dragging')
    }

    const handleMouseUp = () => {
      isDown = false
      container.classList.remove('dragging')
    }

    const handleMouseMove = (e) => {
      if (!isDown) return
      e.preventDefault()
      const y = e.pageY - container.offsetTop
      const walk = (y - startY) * 2
      container.scrollTop = scrollTop - walk
    }

    // Touch support for mobile vertical scrolling
    let touchStartY = 0
    let touchScrollTop = 0

    const handleTouchStart = (e) => {
      // Block vertical touch if in Home section and not on first slide
      if (currentSection === 0 && homeSlideIndex > 0) {
        return
      }
      
      // Block vertical touch if in Skills section and not on first slide
      if (currentSection === 2 && skillsSlideIndex > 0) {
        return
      }
      
      // Block vertical touch if in Experience section and not on first slide
      if (currentSection === 3 && experienceSlideIndex > 0) {
        return
      }
      
      // Block vertical touch if in Projects section and not on first slide
      if (currentSection === 1 && projectsSlideIndex > 0) {
        return
      }
      
      // Block vertical touch if in Certifications section and not on first slide
      if (currentSection === 4 && certificationsSlideIndex > 0) {
        return
      }
      
      touchStartY = e.touches[0].clientY
      touchScrollTop = container.scrollTop
    }

    const handleTouchMove = (e) => {
      // Block vertical touch if in Home section and not on first slide
      if (currentSection === 0 && homeSlideIndex > 0) {
        return
      }
      
      // Block vertical touch if in Skills section and not on first slide
      if (currentSection === 2 && skillsSlideIndex > 0) {
        return
      }
      
      // Block vertical touch if in Experience section and not on first slide
      if (currentSection === 3 && experienceSlideIndex > 0) {
        return
      }
      
      // Block vertical touch if in Projects section and not on first slide
      if (currentSection === 1 && projectsSlideIndex > 0) {
        return
      }
      
      // Block vertical touch if in Certifications section and not on first slide
      if (currentSection === 4 && certificationsSlideIndex > 0) {
        return
      }
      
      const touchY = e.touches[0].clientY
      const walk = (touchStartY - touchY) * 2
      container.scrollTop = touchScrollTop + walk
    }

    // Block mouse wheel vertical scrolling when not on first slide of Home, Skills, or Experience section
    const handleWheel = (e) => {
      if (currentSection === 0 && homeSlideIndex > 0) {
        e.preventDefault()
        return
      }
      
      if (currentSection === 2 && skillsSlideIndex > 0) {
        e.preventDefault()
        return
      }
      
      if (currentSection === 3 && experienceSlideIndex > 0) {
        e.preventDefault()
        return
      }
      
      if (currentSection === 1 && projectsSlideIndex > 0) {
        e.preventDefault()
        return
      }
      
      if (currentSection === 4 && certificationsSlideIndex > 0) {
        e.preventDefault()
        return
      }
    }

    container.addEventListener('mousedown', handleMouseDown)
    container.addEventListener('mouseleave', handleMouseLeave)
    container.addEventListener('mouseup', handleMouseUp)
    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('touchstart', handleTouchStart, { passive: true })
    container.addEventListener('touchmove', handleTouchMove, { passive: true })
    container.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      container.removeEventListener('mousedown', handleMouseDown)
      container.removeEventListener('mouseleave', handleMouseLeave)
      container.removeEventListener('mouseup', handleMouseUp)
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
      container.removeEventListener('wheel', handleWheel)
    }
  }, [currentSection, homeSlideIndex, skillsSlideIndex, experienceSlideIndex, projectsSlideIndex, certificationsSlideIndex])

  return (
    <>
      {/* 🔮 3D Background Layer (rotates 360° with vertical scroll) */}
      <Scene scrollProgress={scrollProgress} />

      {/* 🧭 Sticky navbar */}
      <Navbar scrollContainerRef={containerRef} />

      {/* 📦 Full-page vertical layout */}
      <div className="viewport">
        <div className="vertical-scroll" ref={containerRef}>
          <section className="scroll-section">
            <HomeSection onSlideChange={setHomeSlideIndex} currentSection={currentSection} sectionIndex={0} />
          </section>
          <section className="scroll-section">
            <ProjectGridSection currentSection={currentSection} sectionIndex={1} />
          </section>
          <section className="scroll-section">
            <SkillsSectionWithRobot currentSection={currentSection} sectionIndex={2} />
          </section>
          <section className="scroll-section">
            <ExperienceSectionWithRobot currentSection={currentSection} sectionIndex={3} />
          </section>
          <section className="scroll-section">
            <CertificationsSectionWithRobot 
              currentSection={currentSection} 
              sectionIndex={4} 
              onSlideChange={setCertificationsSlideIndex}
            />
          </section>
          <section className="scroll-section">
            <ContactSectionWithRobot currentSection={currentSection} sectionIndex={5} />
          </section>
        </div>
      </div>

      {/* 🎯 Corner Scroll-to-Top Button */}
      <CornerScroller scrollContainerRef={containerRef} />
      
      {/* 🦶 Footer */}
      <Footer />
    </>
  )
}

export default App
