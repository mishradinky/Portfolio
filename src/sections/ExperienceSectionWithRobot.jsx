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
      description: 
        "Delivered comprehensive academic support by automating grading analytics for 150+ students while mentoring 40+ peers in programming and data engineering concepts, showcasing my ability to translate complex technical knowledge into accessible learning experiences. Through collaborative leadership, I co-created innovative teaching resources and prototyped a multi-agent website framework, demonstrating my technical versatility and passion for knowledge sharing."
    },
    {
      title: "Data Engineer",
      company: "LTIMindtree (Formerly Mindtree Ltd)",
      duration: "Aug 2021 - Aug 2023",
      description:
        "Architected and delivered enterprise-scale data solutions across Azure Synapse, PySpark, and DevOps ecosystems, managing 10TB+ of multi-domain data while achieving 40% performance improvements and 60% faster deployment cycles through strategic automation. By deeply understanding IoT analytics business requirements, I designed cost-effective data warehousing solutions and implemented robust SLAs that ensured compliance and data quality, while my cross-functional collaboration with product managers and data scientists drove actionable insights and accelerated client validation processes by 30%. Through meticulous monitoring and optimization, I boosted Azure Data Pipeline performance by an additional 30% while achieving a remarkable 75% reduction in logical and PySpark notebook errors through comprehensive unit testing and data validation frameworks. My proactive approach included developing PowerShell scripts for systematic cluster-linked notebook identification, designing monthly data quality assessments via Synapse notebooks, and generating weekly data integrity reports using Tableau that increased stakeholder confidence and enabled proactive issue resolution. Leveraging agile methodologies and cost-effective Spark cluster management, my technical expertise spanning distributed computing, synthetic data generation, and petabyte-scale infrastructure enabled advanced analytics initiatives that directly supported strategic business decisions while maintaining optimal performance and operational transparency."
    },
    {
      title: "Jr. ML Engineer",
      company: "Yotta Data Center",
      duration: "Dec 2019 - July 2021",
      description:
        "Transformed operational efficiency by building Jenkins CI/CD pipelines that increased deployment frequency by 35% while strategically migrating AWS data to cost-effective SQL Server solutions for real-time KPI generation. Through proactive problem-solving and cross-functional collaboration, I reduced system downtime by 20% and established data governance best practices that balanced business impact with privacy compliance, demonstrating my ability to understand both technical requirements and business constraints."
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
