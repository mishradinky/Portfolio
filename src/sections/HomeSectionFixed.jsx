import React, { useState, useEffect } from 'react';
import './HomeSection.css';
import WavingRobotLottie from '../components/WavingRobotLottie';

const HomeSection = ({ onSlideChange, currentSection, sectionIndex }) => {
  const [showPopup, setShowPopup] = useState(false);

  // Reset to main screen when navigating away from this section
  useEffect(() => {
    if (currentSection !== sectionIndex) {
      setShowPopup(false);
    }
  }, [currentSection, sectionIndex]);

  const handleRobotClick = () => {
    setShowPopup(!showPopup);
  };

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showPopup]);

  const fullBio = [
    "Heya, I'm Dinky Mishra 👋 a Data and ML engineer with 5+ years of experience building scalable AI solutions and production-grade systems. currently based in San Francisco,USA with a Master's in Computer Science from Cleveland State University."
"I specialize in building production-grade data architectures, ML pipelines, and GenAI applications that handle 1TB+ datasets using python, pyspark, databricks, kafka, and cloud platforms (AWS, Azure, GCP). With 18+ certifications and experience across finance, healthcare, retail, and IoT, I've consulted C-suite executives and delivered big data solutions processing 70+ million data points while accelerating decision-making by 40%."
"Beyond tech, I'm Director of ACM-W at Cleveland State University and a Women in AI volunteer. When I'm not building scalable systems, you'll find me exploring new cities, dancing, or rating coffee shops based on their espresso game."
"This site showcases my journey through data engineering, machine learning, and the intersection of AI and human impact."
  ];

  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="home-section" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="home-content" style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: isMobile ? '20px' : '40px',
        maxWidth: isMobile ? '100%' : '1200px',
        width: '100%',
        padding: isMobile ? '10px' : '20px',
        textAlign: isMobile ? 'center' : 'left'
      }}>
        {/* Robot section */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}>
          {/* Thinking bubble */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            border: '2px solid rgba(0, 245, 255, 0.5)',
            borderRadius: '20px',
            padding: isMobile ? '10px 15px' : '15px 25px',
            position: 'relative',
            animation: 'pulse 2s infinite',
            boxShadow: '0 0 20px rgba(0, 245, 255, 0.3)',
            backdropFilter: 'blur(10px)',
            marginBottom: isMobile ? '15px' : '20px',
            maxWidth: isMobile ? '90%' : 'auto'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              flexWrap: isMobile ? 'wrap' : 'nowrap',
              justifyContent: 'center'
            }}>
              <div style={{
                display: 'flex',
                gap: '4px',
                alignItems: 'center'
              }}>
                <div style={{
                  width: isMobile ? '6px' : '8px',
                  height: isMobile ? '6px' : '8px',
                  background: '#00f5ff',
                  borderRadius: '50%',
                  animation: 'blink 1.5s infinite'
                }} />
                <div style={{
                  width: isMobile ? '4px' : '6px',
                  height: isMobile ? '4px' : '6px',
                  background: '#00f5ff',
                  borderRadius: '50%',
                  animation: 'blink 1.5s infinite 0.3s'
                }} />
                <div style={{
                  width: isMobile ? '6px' : '8px',
                  height: isMobile ? '6px' : '8px',
                  background: '#00f5ff',
                  borderRadius: '50%',
                  animation: 'blink 1.5s infinite 0.6s'
                }} />
              </div>
              <span style={{
                color: '#ffffff',
                fontSize: isMobile ? '16px' : '20px',
                fontWeight: 'bold',
                fontFamily: 'monospace',
                letterSpacing: '1px'
              }}>
                Hi, My name is Dinky
              </span>
            </div>
            <div style={{
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '10px solid transparent',
              borderRight: '10px solid transparent',
              borderTop: '10px solid rgba(0, 245, 255, 0.5)'
            }} />
          </div>
          
          <div className="hero-lottie" onClick={handleRobotClick} style={{ 
            cursor: 'pointer',
            maxWidth: isMobile ? '200px' : '350px',
            maxHeight: isMobile ? '200px' : '350px'
          }}>
            <WavingRobotLottie width={isMobile ? 200 : 350} height={isMobile ? 200 : 350} />
          </div>
        </div>

        {/* Welcome text */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: isMobile ? 'center' : 'flex-start',
          textAlign: isMobile ? 'center' : 'left'
        }}>
          <h1 style={{
            color: '#ffffff',
            fontSize: isMobile ? 'clamp(1.8rem, 6vw, 2.5rem)' : '48px',
            fontWeight: 'bold',
            marginBottom: '10px',
            lineHeight: '1.2'
          }}>
            Welcome to My Portfolio
          </h1>
          <p style={{
            color: '#00f5ff',
            fontSize: isMobile ? 'clamp(1.2rem, 4vw, 1.8rem)' : '24px',
            marginBottom: isMobile ? '20px' : '30px'
          }}>
            Click the robo to know more
          </p>
        </div>

        {/* Enhanced Popup */}
        {showPopup && (
          <div className="popup-overlay" onClick={() => setShowPopup(false)}>
            <div className="popup-container" onClick={(e) => e.stopPropagation()}>
              <div className="popup-header">
                <h2 className="popup-title">About Me</h2>
                <button className="popup-close" onClick={() => setShowPopup(false)}>
                  ×
                </button>
              </div>
              <div className="popup-content">
                {fullBio.map((paragraph, index) => (
                  <p key={index} style={{ marginBottom: '15px' }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="scroll-indicator" style={{
        position: 'absolute',
        bottom: '30px',
        left: '45%',
        transform: 'translateX(-50%)',
        color: '#00f5ff',
        fontSize: '22px'
      }}>
        {/* ↓ Scroll down to explore more ↓ */}
      </div>
    </div>
  );
};

export default HomeSection;
