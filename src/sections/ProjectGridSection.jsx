import React, { useState, useEffect } from 'react';
import WavingRobotLottie from '../components/WavingRobotLottie';

const ProjectGridSection = ({ currentSection, sectionIndex, onRobotPopupChange }) => {
  const [showProjects, setShowProjects] = useState(false);
  const [flippedCards, setFlippedCards] = useState([]);

  // Reset states when navigating away from this section
  useEffect(() => {
    if (currentSection !== sectionIndex) {
      setShowProjects(false);
      setFlippedCards([]);
    }
  }, [currentSection, sectionIndex]);

  const handleRobotClick = () => {
    setShowProjects(true);
  };

  const handleCloseProjects = () => {
    setShowProjects(false);
    setFlippedCards([]);
  };

  const handleCardFlip = (projectId) => {
    setFlippedCards(prev => 
      prev.includes(projectId) 
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    );
  };

  const projects = [
    {
      id: 1,
      title: "Kubernetes Cost Optimization",
      category: "Cloud Infrastructure",
      skills: ["Amazon EKS", "GitHub Actions", "Docker", "Datadog"],
      problemStatement: "Non-production Kubernetes clusters were running 24/7, generating over $10K in unnecessary costs during off-hours.",
      solution: "Built an intelligent automation system using GitHub Actions that automatically shuts down test clusters on weekends and evenings.",
      outcomes: "Saved over $10K annually while maintaining 100% developer productivity with zero service disruptions."
    },
    {
      id: 2,
      title: "Banking Data Analytics Platform",
      category: "Data Engineering",
      skills: ["Google Cloud", "BigQuery", "PySpark", "Databricks"],
      problemStatement: "Financial institutions needed efficient analysis of large-scale bank account data for regulatory compliance.",
      solution: "Developed a comprehensive big data solution using GCP ecosystem with advanced data processing pipelines.",
      outcomes: "Enhanced financial data analysis efficiency by 40% and improved regulatory reporting capabilities significantly."
    },
    {
      id: 3,
      title: "Medical Literature Search Engine",
      category: "Healthcare Tech",
      skills: ["Node.js", "MySQL", "Next.js", "NLP"],
      problemStatement: "Medical professionals struggled with a slow search system that took forever to find relevant medical literature.",
      solution: "Created a lightning-fast search system that indexes 1.4 million medical terms using advanced algorithms.",
      outcomes: "Reduced search time by 99% and improved search accuracy by 30%, helping healthcare professionals instantly."
    },
    {
      id: 4,
      title: "Bitcoin Price Prediction AI",
      category: "FinTech AI",
      skills: ["Python", "Machine Learning", "FinBERT", "TensorFlow"],
      problemStatement: "Cryptocurrency investors needed accurate price predictions combining market data with social media sentiment.",
      solution: "Built an AI system that analyzes 10 years of Bitcoin data plus Reddit sentiment using advanced language models.",
      outcomes: "Achieved 87% accuracy in predicting Bitcoin price movements, helping investors make informed trading decisions."
    },
    {
      id: 5,
      title: "Agricultural Data Analytics",
      category: "Agricultural Analytics",
      skills: ["PySpark", "SparkSQL", "Power BI", "Databricks"],
      problemStatement: "Government agencies needed insights from massive agricultural datasets to make informed policy decisions.",
      solution: "Created a complete data analysis pipeline that processes large agricultural datasets with interactive visualizations.",
      outcomes: "Delivered comprehensive insights into plantation trends and productivity patterns for better agricultural policies."
    },
    {
      id: 6,
      title: "Movie Recommendation System",
      category: "Entertainment Analytics",
      skills: ["R Programming", "ggplot2", "Machine Learning"],
      problemStatement: "Entertainment companies needed better ways to understand movie preferences and recommend content.",
      solution: "Built an advanced recommendation system using R that analyzes movie ratings, genres, and viewer patterns.",
      outcomes: "Created accurate recommendations that help content creators make data-driven decisions about production."
    },
    {
      id: 7,
      title: "Distributed Storage System",
      category: "Distributed Systems",
      skills: ["C Programming", "UDP Sockets", "System Design"],
      problemStatement: "Built a reliable distributed storage system that maintains data consistency across multiple servers.",
      solution: "Engineered a sophisticated system that breaks data into pieces and distributes them with automatic backup.",
      outcomes: "Achieved perfect data consistency across all servers with zero data loss and robust system design."
    },
    {
      id: 8,
      title: "AI Object Recognition System",
      category: "Computer Vision",
      skills: ["Python", "TensorFlow", "OpenCV", "Deep Learning"],
      problemStatement: "Businesses needed an accurate system to automatically identify and classify objects in images and videos.",
      solution: "Developed a computer vision system using deep learning that accurately identifies multiple objects in real-time.",
      outcomes: "Achieved high-accuracy object recognition for security, inventory management, and interactive media applications."
    }
  ];

  // Project Card Component
  const ProjectCard = ({ project }) => {
    const isFlipped = flippedCards.includes(project.id);
    
    return (
      <div 
        className="project-card" 
        onClick={() => handleCardFlip(project.id)}
        style={{
          background: 'rgba(255, 255, 255, 0.06)',
          border: '2px solid rgba(0, 245, 255, 0.3)',
          borderRadius: '20px',
          padding: '24px',
          boxShadow: '0 8px 32px rgba(0, 245, 255, 0.15)',
          backdropFilter: 'blur(20px)',
          cursor: 'pointer',
          height: '320px',
          width: '100%',
          position: 'relative',
          perspective: '1000px',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          overflow: 'hidden'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
          e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 245, 255, 0.25)';
          e.currentTarget.style.borderColor = 'rgba(0, 245, 255, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 245, 255, 0.15)';
          e.currentTarget.style.borderColor = 'rgba(0, 245, 255, 0.3)';
        }}
      >
        {/* Animated background glow */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, rgba(0, 245, 255, 0.03), rgba(147, 51, 234, 0.03))',
          opacity: isFlipped ? 1 : 0,
          transition: 'opacity 0.3s ease',
          borderRadius: '20px'
        }} />

        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}>
          
          {/* Front Side */}
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            textAlign: 'center'
          }}>
            {/* Category Badge */}
            <div style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              background: 'linear-gradient(135deg, #00f5ff, #9333ea)',
              color: '#ffffff',
              padding: '6px 12px',
              borderRadius: '16px',
              fontSize: '10px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              boxShadow: '0 4px 12px rgba(0, 245, 255, 0.3)'
            }}>
              {project.category}
            </div>

            <div style={{ paddingTop: '16px' }}>
              <h3 style={{
                color: '#ffffff',
                fontSize: '18px',
                fontWeight: '700',
                lineHeight: '1.3',
                margin: '0 0 16px 0',
                textAlign: 'center',
                background: 'linear-gradient(135deg, #ffffff, #00f5ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {project.title}
              </h3>
              
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '6px',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                {project.skills.slice(0, 3).map((skill, skillIndex) => (
                  <span key={skillIndex} style={{
                    background: 'rgba(0, 245, 255, 0.15)',
                    color: '#00f5ff',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    fontSize: '10px',
                    fontWeight: '500',
                    fontFamily: 'monospace',
                    border: '1px solid rgba(0, 245, 255, 0.3)'
                  }}>
                    {skill}
                  </span>
                ))}
                {project.skills.length > 3 && (
                  <span style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    fontSize: '10px',
                    fontWeight: '500'
                  }}>
                    +{project.skills.length - 3}
                  </span>
                )}
              </div>
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              fontWeight: '500',
              padding: '12px',
              background: 'rgba(0, 245, 255, 0.1)',
              borderRadius: '12px',
              border: '1px solid rgba(0, 245, 255, 0.2)'
            }}>
              <div style={{
                width: '20px',
                height: '20px',
                border: '2px solid #00f5ff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: '6px',
                  height: '6px',
                  background: '#00f5ff',
                  borderRadius: '50%'
                }} />
              </div>
              Click to explore details
            </div>
          </div>

          {/* Back Side */}
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            padding: '8px'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '12px'
            }}>
              <h3 style={{
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: '700',
                lineHeight: '1.2',
                margin: 0,
                flex: 1,
                background: 'linear-gradient(135deg, #ffffff, #00f5ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {project.title}
              </h3>
              <a 
                href="https://github.com/mishradinky"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #24292e, #333)',
                  color: '#ffffff',
                  padding: '6px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  width: '28px',
                  height: '28px',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  flexShrink: 0,
                  marginLeft: '8px'
                }}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
            </div>
            
            <div style={{ fontSize: '11px', lineHeight: '1.4', flex: 1 }}>
              <div style={{ marginBottom: '10px' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '6px', 
                  marginBottom: '6px' 
                }}>
                  <div style={{
                    width: '3px',
                    height: '12px',
                    background: 'linear-gradient(to bottom, #ff6b6b, #ff8e8e)',
                    borderRadius: '2px'
                  }} />
                  <strong style={{ color: '#ff6b6b', fontSize: '12px', fontWeight: '600' }}>
                    Problem
                  </strong>
                </div>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)', margin: '0 0 0 12px', lineHeight: '1.3' }}>
                  {project.problemStatement}
                </p>
              </div>
              
              <div style={{ marginBottom: '10px' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '6px', 
                  marginBottom: '6px' 
                }}>
                  <div style={{
                    width: '3px',
                    height: '12px',
                    background: 'linear-gradient(to bottom, #4ecdc4, #6ee7dd)',
                    borderRadius: '2px'
                  }} />
                  <strong style={{ color: '#4ecdc4', fontSize: '12px', fontWeight: '600' }}>
                    Solution
                  </strong>
                </div>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)', margin: '0 0 0 12px', lineHeight: '1.3' }}>
                  {project.solution}
                </p>
              </div>
              
              <div style={{ marginBottom: '8px' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '6px', 
                  marginBottom: '6px' 
                }}>
                  <div style={{
                    width: '3px',
                    height: '12px',
                    background: 'linear-gradient(to bottom, #45b7d1, #74c7ec)',
                    borderRadius: '2px'
                  }} />
                  <strong style={{ color: '#45b7d1', fontSize: '12px', fontWeight: '600' }}>
                    Results
                  </strong>
                </div>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)', margin: '0 0 0 12px', lineHeight: '1.3' }}>
                  {project.outcomes}
                </p>
              </div>
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '10px',
              marginTop: 'auto',
              paddingTop: '8px'
            }}>
              <div style={{
                width: '14px',
                height: '14px',
                border: '2px solid rgba(0, 245, 255, 0.5)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: '4px',
                  height: '4px',
                  background: 'rgba(0, 245, 255, 0.5)',
                  borderRadius: '50%'
                }} />
              </div>
              Click to go back
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (showProjects) {
    // Projects View - Show ALL projects in a broader grid
    return (
      <div className="projects-view" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.95)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        zIndex: 1000,
        overflowY: 'auto',
        padding: '20px'
      }}>
        {/* Close Button */}
        <button 
          onClick={handleCloseProjects}
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: 'rgba(0, 245, 255, 0.2)',
            border: '2px solid rgba(0, 245, 255, 0.5)',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#00f5ff',
            fontSize: '24px',
            fontWeight: 'bold',
            zIndex: 1001,
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(0, 245, 255, 0.3)';
            e.target.style.transform = 'scale(1.1) rotate(90deg)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(0, 245, 255, 0.2)';
            e.target.style.transform = 'scale(1) rotate(0deg)';
          }}
        >
          ×
        </button>

        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '30px',
          paddingTop: '60px'
        }}>
          <h1 style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #00f5ff 50%, #9333ea 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '800',
            marginBottom: '10px',
            letterSpacing: '-0.02em',
            lineHeight: '1.1'
          }}>
            All My Projects
          </h1>
          
          <p style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
            lineHeight: '1.4',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            {projects.length} projects showcasing different technical challenges. Click any card to see details.
          </p>
        </div>

        {/* Projects Grid - Responsive: 4 columns on large screens, 3 on medium, 2 on small, 1 on mobile */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          width: '100%',
          maxWidth: '1400px',
          padding: '0 10px'
        }}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom spacing */}
        <div style={{ height: '40px' }} />
      </div>
    );
  }

  // Intro View - Original landing page
  return (
    <div className="project-grid-section" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      position: 'relative'
    }}>
      <div className="project-intro" style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '40px',
        maxWidth: '1200px',
        width: '100%',
        padding: '20px',
        position: 'relative',
        zIndex: 1
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
            background: 'rgba(255, 255, 255, 0.12)',
            border: '2px solid rgba(0, 245, 255, 0.6)',
            borderRadius: '25px',
            padding: '18px 30px',
            position: 'relative',
            boxShadow: '0 0 30px rgba(0, 245, 255, 0.4)',
            backdropFilter: 'blur(20px)',
            marginBottom: '25px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{
                display: 'flex',
                gap: '5px',
                alignItems: 'center'
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  background: '#00f5ff',
                  borderRadius: '50%',
                  boxShadow: '0 0 10px #00f5ff'
                }} />
                <div style={{
                  width: '6px',
                  height: '6px',
                  background: '#00f5ff',
                  borderRadius: '50%',
                  boxShadow: '0 0 8px #00f5ff'
                }} />
                <div style={{
                  width: '8px',
                  height: '8px',
                  background: '#00f5ff',
                  borderRadius: '50%',
                  boxShadow: '0 0 10px #00f5ff'
                }} />
              </div>
              <span style={{
                color: '#ffffff',
                fontSize: '20px',
                fontWeight: '700',
                fontFamily: 'monospace',
                letterSpacing: '1px',
                textShadow: '0 0 10px rgba(0, 245, 255, 0.5)'
              }}>
                Hey, it's me again - Dinky!
              </span>
            </div>
            <div style={{
              position: 'absolute',
              bottom: '-12px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '12px solid transparent',
              borderRight: '12px solid transparent',
              borderTop: '12px solid rgba(0, 245, 255, 0.6)',
              filter: 'drop-shadow(0 0 5px rgba(0, 245, 255, 0.3))'
            }} />
          </div>
          
          <div 
            className="hero-lottie" 
            onClick={handleRobotClick} 
            style={{ 
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              filter: 'drop-shadow(0 0 20px rgba(0, 245, 255, 0.3))'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
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
            background: 'linear-gradient(135deg, #ffffff 0%, #00f5ff 50%, #9333ea 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: '800',
            marginBottom: '15px',
            letterSpacing: '-0.02em',
            lineHeight: '1.1',
            textShadow: '0 0 30px rgba(0, 245, 255, 0.3)'
          }}>
            Explore My Projects
          </h1>
          <p style={{
            color: 'rgba(0, 245, 255, 0.9)',
            fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
            marginBottom: '20px',
            fontWeight: '500',
            textShadow: '0 0 15px rgba(0, 245, 255, 0.4)'
          }}>
            Click the robo to view all projects
          </p>
          
          {/* Professional CTA button */}
          <button
            onClick={handleRobotClick}
            style={{
              background: 'linear-gradient(135deg, #00f5ff 0%, #9333ea 100%)',
              border: 'none',
              borderRadius: '15px',
              padding: '12px 24px',
              color: '#ffffff',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 20px rgba(0, 245, 255, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px) scale(1.05)';
              e.target.style.boxShadow = '0 12px 30px rgba(0, 245, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 8px 20px rgba(0, 245, 255, 0.3)';
            }}
          >
            View All Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectGridSection;
