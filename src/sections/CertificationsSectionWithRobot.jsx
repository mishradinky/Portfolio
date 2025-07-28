import React, { useState, useEffect } from 'react';
import WavingRobotLottie from '../components/WavingRobotLottie';
import './CertificationsSectionWithRobot.css';

const CertificationsSectionWithRobot = ({ currentSection, sectionIndex, onSlideChange }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Reset to main screen when navigating away from this section
  useEffect(() => {
    if (currentSection !== sectionIndex) {
      setShowPopup(false);
    }
  }, [currentSection, sectionIndex]);

  // Check if mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  const handleRobotClick = () => {
    setShowPopup(!showPopup);
  };

  const certifications = [
    {
      category: "Databricks & AI Certifications",
      items: [
        "Databricks Certified Machine Learning Associate",
        "Databricks Certified Data Engineer Associate",
        "Generative AI Engineering with Databricks"
      ]
    },
    {
      category: "SQL & Database Skills",
      items: [
        "SQL (Basic) – HackerRank",
        "SQL (Intermediate) – HackerRank",
        "Microsoft Certified Azure Fundamentals"
      ]
    },
    {
      category: "Cloud & Data Engineering",
      items: [
        "Azure Data Engineer Technologies for Beginner [Udemy Bundle]",
        "Hands-on PySpark for Big Data Analysis – Udemy",
        "Google Certified Professional Data Engineer"
      ]
    },
    {
      category: "Programming & Development",
      items: [
        "2022 Complete Python Bootcamp from Zero to Hero in Python – Udemy",
        "Google DevFest Certificate",
        "AWS Certified Cloud Practitioner"
      ]
    },
    {
      category: "Cloud Infrastructure",
      items: [
        "GCP Core Infrastructure – Xebia Academy",
        "Cloud Computing Basics (Cloud 101) – LearnQuest",
        "AWS Certified Cloud Practitioner"
      ]
    },
    {
      category: "Special Achievements & Certifications",
      items: [
        "Guinness World Record Event – Most users to take online computer programming lesson in 24 hours – HCL GUVI",
        "GitHub for Open Source Collaboration – IEEE Bombay Section",
        "How to Create Alexa Awareness Quiz – CyberFrat",
        "Databricks Lakehouse Platform Essentials"
      ]
    }
  ];

  const robotMessages = [
    "🏆 I hold 17+ professional certifications!",
    "🤖 Click me to explore my achievements!",
    "📊 Certified in Data Engineering & AI!",
    "☁️ Multi-cloud certified professional!",
    "🎯 Guinness World Record holder!"
  ];

  const [currentMessage, setCurrentMessage] = useState(0);

  const handleRobotHover = () => {
    setCurrentMessage((prev) => (prev + 1) % robotMessages.length);
  };

  return (
    <div className="certifications-section-with-robot">
      <div className="certifications-content" style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: isMobile ? '20px' : '40px',
        maxWidth: isMobile ? '100%' : '1200px',
        width: '100%',
        padding: isMobile ? '10px' : '20px',
        textAlign: isMobile ? 'center' : 'left',
        minHeight: '100vh'
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
                {robotMessages[currentMessage]}
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
            My Certifications & Achievements
          </h1>
          <p style={{
            color: '#00f5ff',
            fontSize: isMobile ? 'clamp(1.2rem, 4vw, 1.8rem)' : '24px',
            marginBottom: isMobile ? '20px' : '30px'
          }}>
            Click the robo to explore my 17+ professional certifications
          </p>
          <div style={{
            display: 'flex',
            gap: '15px',
            flexWrap: 'wrap',
            justifyContent: isMobile ? 'center' : 'flex-start'
          }}>
            <span style={{
              background: 'rgba(0, 245, 255, 0.2)',
              color: '#00f5ff',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: 'bold',
              border: '1px solid rgba(0, 245, 255, 0.3)'
            }}>
              17+ Certifications
            </span>
            <span style={{
              background: 'rgba(0, 245, 255, 0.2)',
              color: '#00f5ff',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: 'bold',
              border: '1px solid rgba(0, 245, 255, 0.3)'
            }}>
              Multi-Cloud Expert
            </span>
            <span style={{
              background: 'rgba(0, 245, 255, 0.2)',
              color: '#00f5ff',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: 'bold',
              border: '1px solid rgba(0, 245, 255, 0.3)'
            }}>
              AI/ML Certified
            </span>
          </div>
        </div>

        {/* Enhanced Popup */}
        {showPopup && (
          <div className="popup-overlay" onClick={() => setShowPopup(false)}>
            <div className="popup-container" onClick={(e) => e.stopPropagation()}>
              <div className="popup-header">
                <h2 className="popup-title">Professional Certifications & Achievements</h2>
                <button className="popup-close" onClick={() => setShowPopup(false)}>
                  ×
                </button>
              </div>
              <div className="popup-content">
                <div className="certifications-grid">
                  {certifications.map((category, index) => (
                    <div key={index} className="certification-category-card">
                      <h3 className="category-title">{category.category}</h3>
                      <div className="certification-items">
                        {category.items.map((cert, certIndex) => (
                          <div key={certIndex} className="certification-item">
                            <div className="certification-icon">🏆</div>
                            <span className="certification-name">{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificationsSectionWithRobot;
