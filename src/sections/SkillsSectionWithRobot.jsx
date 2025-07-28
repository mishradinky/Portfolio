import React, { useState, useEffect } from 'react';
import WavingRobotLottie from '../components/WavingRobotLottie';

const SkillsSectionWithRobot = ({ currentSection, sectionIndex }) => {
  const [showSkills, setShowSkills] = useState(false);
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
      setShowSkills(false);
      setShowPopup(false);
    }
  }, [currentSection, sectionIndex]);

  const handleRobotClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const skills = [
    {
      category: "Programming Languages",
      items: ["Python", "PySpark", "SQL", "Java", "UNIX Shell", "JavaScript", "TypeScript", "Scala", "Bash", "PowerShell"]
    },
    {
      category: "Cloud Platforms",
      items: ["AWS", "Azure", "GCP", "Snowflake", "AWS Glue", "EMR", "S3", "Redshift", "Lambda", "Kinesis"]
    },
    {
      category: "Big Data Tools",
      items: ["Hadoop", "Hive", "Databricks", "Spark", "Kafka", "Azure Synapse", "Data Factory", "ADLS Gen2", "GCP DataProc", "BigQuery"]
    },
    {
      category: "Databases",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Elasticsearch", "Redis", "Cassandra", "SQL Server", "Amazon Neptune", "Neo4j"]
    },
    {
      category: "ETL & Orchestration",
      items: ["Apache Airflow", "AWS Glue", "Azure Data Factory", "ETL/ELT", "Real-time Streaming", "Batch Processing", "Cron", "Azure Logic Apps"]
    },
    {
      category: "DevOps & Tools",
      items: ["Git", "Docker", "Kubernetes", "Jenkins", "Terraform", "CloudFormation", "Helm", "Azure DevOps", "GitHub Actions"]
    },
    {
      category: "Visualization & BI",
      items: ["Tableau", "Power BI", "Grafana", "Looker", "Superset", "SSRS", "Real-time Dashboards", "Executive Reports"]
    },
    {
      category: "ML & AI",
      items: ["scikit-learn", "TensorFlow", "PyTorch", "BigQuery ML", "Databricks ML", "SageMaker", "MLflow", "Feature Store", "Hugging Face"]
    }
  ];

  return (
    <div className="skills-section-with-robot" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      position: 'relative'
    }}>
      {!showSkills ? (
        <div className="skills-intro" style={{
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
                  Want to see my skills?
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
              My Technical Skills
            </h1>
            <p style={{
              color: '#00f5ff',
              fontSize: '24px',
              marginBottom: '30px'
            }}>
              Click the robo to explore my expertise
            </p>
          </div>
        </div>
      ) : (
        <div className="skills-grid-container" style={{
          width: '100%',
          maxWidth: '1400px',
          padding: '40px',
          maxHeight: '80vh',
          overflowY: 'auto'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '30px'
          }}>
            <h1 style={{
              color: '#ffffff',
              fontSize: '36px',
              fontWeight: 'bold'
            }}>
              Technical Skills & Expertise
            </h1>
            <button 
              onClick={handleRobotClick}
              style={{
                background: 'rgba(0, 245, 255, 0.2)',
                border: '1px solid rgba(0, 245, 255, 0.5)',
                color: '#00f5ff',
                padding: '10px 20px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              Back to Robot
            </button>
          </div>
          
          <div className="skills-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '30px'
          }}>
            {skills.map((skillGroup, index) => (
              <div key={index} className="skill-card" style={{
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
                  {skillGroup.category}
                </h3>
                
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  justifyContent: 'center'
                }}>
                  {skillGroup.items.map((item, itemIndex) => (
                    <span key={itemIndex} style={{
                      background: 'rgba(0, 245, 255, 0.2)',
                      color: '#00f5ff',
                      padding: '6px 14px',
                      borderRadius: '20px',
                      fontSize: '13px',
                      fontFamily: 'monospace',
                      border: '1px solid rgba(0, 245, 255, 0.3)'
                    }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-container" onClick={(e) => e.stopPropagation()}>
            <div className="popup-header">
              <h2 className="popup-title">Technical Skills & Expertise</h2>
              <button className="popup-close" onClick={handleClosePopup}>
                ×
              </button>
            </div>
            
            <div className="popup-content">
              <div className="skills-grid">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="skill-card" style={{
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
                      {skillGroup.category}
                    </h3>
                    
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      justifyContent: 'center'
                    }}>
                      {skillGroup.items.map((item, itemIndex) => (
                        <span key={itemIndex} style={{
                          background: 'rgba(0, 245, 255, 0.2)',
                          color: '#00f5ff',
                          padding: '6px 14px',
                          borderRadius: '20px',
                          fontSize: '13px',
                          fontFamily: 'monospace',
                          border: '1px solid rgba(0, 245, 255, 0.3)'
                        }}>
                          {item}
                        </span>
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
  );
};

export default SkillsSectionWithRobot;
