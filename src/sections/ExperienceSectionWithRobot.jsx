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
      title: "Graduate Assistant (Data Engineer & Teaching Assistant)",
      company: "Cleveland State University",
      duration: "April 2024 - May 2025",
      points: [
        "Automated grading analytics for 150+ students, enabling targeted academic support.",
        "Mentored 40+ students in programming languages and data engineering concepts.",
        "Co-created teaching resources and proto-typed a multi-agent website framework."
      ]
    },
    {
      title: "Data Engineer",
      company: "LTIMindtree (Formerly Mindtree Ltd)",
      duration: "Aug 2021 - Aug 2023",
      points: [
        "Designed, modeled, and implemented scalable data warehousing solutions in Azure Synapse, enabling data-driven decision making for IoT analytics and supporting over 10TB of structured and unstructured data across multiple business domains.",
        "Engineered and optimized PySpark-based ETL pipelines, improving data processing performance by 40% and ensuring high data quality, reliability, and availability for analytics and machine learning use cases.",
        "Automated CI/CD deployment workflows with Azure DevOps, reducing deployment cycle time by 60% and increasing the reliability of production data pipelines.",
        "Defined and managed SLAs for all critical datasets, proactively addressing data quality issues and ensuring compliance with privacy and governance standards.",
        "Built and maintained sophisticated data models and visualizations, collaborating cross-functionally with product managers, engineers, and data scientists to deliver actionable insights and support experimentation.",
        "Developed and implemented a synthetic data generation framework, accelerating client model validation and reducing proof-of-concept sign-off time by 30%.",
        "Led the adoption of distributed computing and cloud-based infrastructure, supporting petabyte-scale data processing and advanced analytics initiatives."
      ]
    },
    {
      title: "Software Engineer",
      company: "Yotta Data Center",
      duration: "Dec 2019 - July 2021",
      points: [
        "Built and maintained Jenkins CI/CD pipelines, increasing deployment frequency by 35% and improving reliability for data engineering projects.",
        "Migrated AWS data to SQL Server and built real time key performance indicators (KPIs) for strategic business decisions.",
        "Improved server and CPU performance, cutting downtime by 20% via proactive issue resolution.",
        "Collaborated with cross-functional teams to identify data opportunities, drive impact through data governance, and implement best practices in data privacy and compliance."
      ]
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

      {/* Popup Modal - Same structure as Skills */}
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
                    
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0
                    }}>
                      {exp.points.map((point, pointIndex) => (
                        <li key={pointIndex} style={{
                          color: '#cccccc',
                          fontSize: '14px',
                          lineHeight: '1.6',
                          marginBottom: '8px',
                          paddingLeft: '20px',
                          position: 'relative'
                        }}>
                          <span style={{
                            position: 'absolute',
                            left: 0,
                            top: '6px',
                            width: '6px',
                            height: '6px',
                            background: '#00f5ff',
                            borderRadius: '50%'
                          }} />
                          {point}
                        </li>
                      ))}
                    </ul>
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
