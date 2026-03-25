import React, { useState, useEffect } from 'react';
import WavingRobotLottie from '../components/WavingRobotLottie';

const ExperienceSectionWithRobot = ({ currentSection, sectionIndex }) => {
  const [showPopup, setShowPopup] = useState(false);

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('popup-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('popup-open');
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('popup-open');
    };
  }, [showPopup]);

  // Reset to main screen when navigating away from this section
  useEffect(() => {
    if (currentSection !== sectionIndex) {
      setShowPopup(false);
    }
  }, [currentSection, sectionIndex]);

  const handleRobotClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const experiences = [
    {
      title: "Research Assistant",
      company: "Women in AI, USA",
      duration: "June 2025 – Present",
      description: 
        "Conducted research on AI bias mitigation techniques in educational data systems, contributing to institutional equity and inclusion initiatives. Developed automated data collection and analysis frameworks for gender representation studies using Python and SQL databases. Collaborated with cross-functional research teams to design data governance protocols ensuring ethical AI implementation in academic environments."
    },
    {
      title: "Senior Data Engineer (Graduate Assistant)",
      company: "Cleveland State University, USA",
      duration: "August 2023 – May 2025",
      description: 
        "Accelerated decision making by 40% with GenAI applications using HuggingFace & LangChain, delivering $200K+ in operational efficiency. Implemented MLOps practices for GenAI model deployment with AI guardrails & continuous model monitoring using MLflow with Azure Databricks. Led technical presentations to 70+ stakeholders, demonstrating cross-functional collaboration using Microsoft Azure, SQL and Power BI, enabling real-time monitoring of 15+ business metrics."
    },
    {
      title: "Data Engineer",
      company: "International Motors (formerly Navistar Inc.), USA",
      duration: "August 2021 – August 2023",
      description:
        "Designed scalable data architectures supporting 70+ million customer data points for marketing analytics and sales insights. Delivered $400K savings and 30% performance gains building multi-step ETL pipelines with data streaming using Apache Kafka, PySpark, Azure Synapse & Azure DevOps. Reduced data inconsistencies by 75% through governance frameworks and Salesforce CRM integration with SLAs."
    }
  ];

  return (
    <div className="experience-section-with-robot" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      position: 'relative'
    }}>
      <div className="experience-intro" style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '40px',
        maxWidth: '1200px',
        width: '100%',
        padding: '20px'
      }}>
        {/* Robot section */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Thinking bubble */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            border: '2px solid rgba(0, 245, 255, 0.5)',
            borderRadius: '20px',
            padding: '15px 25px',
            position: 'relative',
            animation: 'pulse 2s infinite',
            boxShadow: '0 0 20px rgba(0, 245, 255, 0.3)',
            backdropFilter: 'blur(10px)',
            marginBottom: '20px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <div style={{
                display: 'flex',
                gap: '4px',
                alignItems: 'center'
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  background: '#00f5ff',
                  borderRadius: '50%',
                  animation: 'blink 1.5s infinite'
                }} />
                <div style={{
                  width: '6px',
                  height: '6px',
                  background: '#00f5ff',
                  borderRadius: '50%',
                  animation: 'blink 1.5s infinite 0.3s'
                }} />
                <div style={{
                  width: '8px',
                  height: '8px',
                  background: '#00f5ff',
                  borderRadius: '50%',
                  animation: 'blink 1.5s infinite 0.6s'
                }} />
              </div>
              <span style={{
                color: '#ffffff',
                fontSize: '20px',
                fontWeight: 'bold',
                fontFamily: 'monospace',
                letterSpacing: '1px'
              }}>
                Let's dive into my experience!
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
          
          <div className="hero-lottie" onClick={handleRobotClick} style={{ cursor: 'pointer' }}>
            <WavingRobotLottie width={350} height={350} />
          </div>
        </div>

        {/* Welcome text */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          textAlign: 'left'
        }}>
          <h1 style={{
            color: '#ffffff',
            fontSize: '48px',
            fontWeight: 'bold',
            marginBottom: '10px'
          }}>
            Professional Experience
          </h1>
          <p style={{
            color: '#00f5ff',
            fontSize: '24px',
            marginBottom: '30px'
          }}>
            Click the robo to explore my career journey
          </p>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-container" onClick={(e) => e.stopPropagation()}>
            <div className="popup-header">
              <h2 className="popup-title">Professional Experience</h2>
              <button className="popup-close" onClick={handleClosePopup}>
                ×
              </button>
            </div>
            
            <div className="popup-content">
              <div className="experience-timeline" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '40px'
              }}>
                {experiences.map((exp, index) => (
                  <div key={index} className="experience-card" style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(0, 245, 255, 0.3)',
                    borderRadius: '15px',
                    padding: '25px',
                    boxShadow: '0 4px 20px rgba(0, 245, 255, 0.1)',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <h3 style={{
                      color: '#00f5ff',
                      fontSize: '20px',
                      fontWeight: 'bold',
                      marginBottom: '15px',
                      textAlign: 'center'
                    }}>
                      {exp.title}
                    </h3>
                    <p style={{
                      color: '#ffffff',
                      fontSize: '16px',
                      marginBottom: '5px',
                      textAlign: 'center'
                    }}>
                      {exp.company}
                    </p>
                    <p style={{
                      color: '#888888',
                      fontSize: '14px',
                      marginBottom: '15px',
                      textAlign: 'center'
                    }}>
                      {exp.duration}
                    </p>
                    
                    {/* Fixed description section - no bullets */}
                    <p style={{
                      color: '#cccccc',
                      fontSize: '14px',
                      lineHeight: '1.6',
                      textAlign: 'justify',
                      margin: 0
                    }}>
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceSectionWithRobot;
