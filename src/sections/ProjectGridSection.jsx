import React, { useState, useEffect } from 'react';
import WavingRobotLottie from '../components/WavingRobotLottie';

const ProjectGridSection = ({ currentSection, sectionIndex, onRobotPopupChange }) => {
  const [showProjects, setShowProjects] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [flippedCards, setFlippedCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Enhanced scroll prevention with better cleanup
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('popup-open');
      // Prevent scroll on mobile
      document.addEventListener('touchmove', preventScroll, { passive: false });
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('popup-open');
      document.removeEventListener('touchmove', preventScroll);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('popup-open');
      document.removeEventListener('touchmove', preventScroll);
    };
  }, [showPopup]);

  const preventScroll = (e) => {
    e.preventDefault();
  };

  // Reset states when navigating away
  useEffect(() => {
    if (currentSection !== sectionIndex) {
      setShowPopup(false);
      setFlippedCards([]);
    }
  }, [currentSection, sectionIndex]);

  const handleRobotClick = () => {
    setIsLoading(true);
    // Simulate loading for smooth UX
    setTimeout(() => {
      setShowPopup(true);
      setIsLoading(false);
    }, 300);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setFlippedCards([]);
  };

  const handleCardFlip = (projectId) => {
    setFlippedCards(prev => 
      prev.includes(projectId) 
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    );
  };

  // Enhanced projects data with better structure
  const projects = [
    {
      id: 1,
      title: "Automated Cost Optimization for Non-Prod Kubernetes Environments",
      category: "Cloud Infrastructure",
      skills: ["Amazon EKS", "GitHub", "Docker Products", "Datadog", "Slack"],
      problemStatement: "Non-production Kubernetes clusters running 24/7 were generating significant cloud costs (over $10K annually) with minimal weekend/night usage, impacting operational budgets without adding value during off-hours.",
      solution: "Designed and implemented an intelligent automation solution using GitHub Actions for scheduling. Created scripts to systematically cordon nodes, drain workloads, and scale clusters to zero every Friday evening, with automatic Monday morning spin-up. Integrated comprehensive monitoring through Datadog and Slack alerting to ensure seamless service restoration and validate all components come online as expected.",
      outcomes: "Achieved over $10K annual cost savings while maintaining 100% development productivity. Zero service disruption incidents and improved resource utilization efficiency across non-production environments.",
      githubUrl: "https://github.com/mishradinky/k8s-cost-optimizer"
    },
    {
      id: 2,
      title: "Analysis & Reporting System of Bank Account Details using Google Cloud Platform",
      category: "Data Engineering",
      skills: ["Google Cloud Platform", "Databricks Platform", "BigQuery", "PySpark", "SQL"],
      problemStatement: "Financial institutions required efficient analysis and reporting capabilities for large-scale bank account data to support regulatory compliance and business intelligence initiatives.",
      solution: "Developed a comprehensive big data solution leveraging GCP ecosystem. Applied advanced preprocessing and transformations on financial datasets using Databricks platform. Created efficient data pipelines utilizing BigQuery for analytical processing and implemented scalable reporting mechanisms for bank account analysis.",
      outcomes: "Enhanced financial data analysis efficiency by 40%, contributing to faster informed decision-making in the banking sector and improved regulatory reporting capabilities.",
      githubUrl: "https://github.com/mishradinky/gcp-banking-analytics"
    },
    {
      id: 3,
      title: "Big Data-Driven Medline Search & Retrieval System",
      category: "Healthcare Tech",
      skills: ["Node.js", "Puppeteer", "MongoDB", "MySQL", "Next.js", "TF-IDF", "NLP"],
      problemStatement: "Existing medical information retrieval system suffered from extreme latency (4,000+ per-document SQL calls) and poor search precision, making it ineffective for real-time medical research queries.",
      solution: "Architected a comprehensive search optimization pipeline by scraping and indexing 1.4M terms from 4.5K MedlinePlus articles. Implemented advanced NLP preprocessing including tokenization, stemming, and lemmatization. Replaced inefficient query system with a single MySQL inverted-index lookup and enhanced ranking using TF-IDF with cosine similarity algorithms. Built responsive real-time search interface using Next.js frontend and Node.js/Express backend.",
      outcomes: "Reduced search latency by 99% and boosted top-10 search precision by 30%, enabling healthcare professionals to access critical medical information instantly with significantly improved accuracy.",
      githubUrl: "https://github.com/mishradinky/medline-search-system"
    },
    {
      id: 4,
      title: "Bitcoin Price Prediction Using Machine Learning and LLM",
      category: "FinTech AI",
      skills: ["Google Colab", "Python", "pandas", "scikit-learn", "NLTK", "spaCy", "Hugging Face Transformers"],
      problemStatement: "Develop an accurate cryptocurrency price prediction system combining traditional financial indicators with sentiment analysis from social media to support informed investment decisions.",
      solution: "Processed 10 years of historical Bitcoin data (2014–2024) and integrated Reddit sentiment analysis using advanced LLMs like FinBERT. Engineered comprehensive feature sets including moving averages, RSI, MACD, and sentiment-derived metrics. Optimized data processing pipelines for large-scale analysis using GPU-accelerated Google Colab, seamlessly merging structured financial data with unstructured social sentiment data.",
      outcomes: "Achieved exceptional model performance with 2.3% MAE, 3.1% RMSE, and 87% classification accuracy for price movement predictions, delivering actionable insights for cryptocurrency market decision-making.",
      githubUrl: "https://github.com/mishradinky/bitcoin-price-prediction"
    },
    // Add remaining projects with similar structure...
  ];

  // Enhanced Project Card Component with professional styling
  const ProjectCard = ({ project }) => {
    const isFlipped = flippedCards.includes(project.id);
    
    return (
      <div 
        className="project-card" 
        onClick={() => handleCardFlip(project.id)}
        style={{
          background: 'rgba(255, 255, 255, 0.08)',
          border: '1px solid rgba(0, 245, 255, 0.3)',
          borderRadius: '20px',
          padding: '28px',
          boxShadow: '0 8px 32px rgba(0, 245, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          cursor: 'pointer',
          minHeight: '320px',
          position: 'relative',
          perspective: '1000px',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          overflow: 'hidden'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
          e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 245, 255, 0.25)';
          e.currentTarget.style.borderColor = 'rgba(0, 245, 255, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 245, 255, 0.1)';
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
          background: 'linear-gradient(45deg, rgba(0, 245, 255, 0.05), rgba(147, 51, 234, 0.05))',
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
          
          {/* Front Side - Enhanced Design */}
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
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '11px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              {project.category}
            </div>

            <div>
              <h3 style={{
                color: '#ffffff',
                fontSize: '22px',
                fontWeight: '700',
                lineHeight: '1.3',
                margin: '20px 0',
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
                gap: '8px',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                {project.skills.slice(0, 4).map((skill, skillIndex) => (
                  <span key={skillIndex} style={{
                    background: 'rgba(0, 245, 255, 0.15)',
                    color: '#00f5ff',
                    padding: '6px 14px',
                    borderRadius: '18px',
                    fontSize: '11px',
                    fontWeight: '500',
                    fontFamily: 'monospace',
                    border: '1px solid rgba(0, 245, 255, 0.3)'
                  }}>
                    {skill}
                  </span>
                ))}
                {project.skills.length > 4 && (
                  <span style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    padding: '6px 14px',
                    borderRadius: '18px',
                    fontSize: '11px',
                    fontWeight: '500'
                  }}>
                    +{project.skills.length - 4}
                  </span>
                )}
              </div>
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '14px',
              fontWeight: '500'
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
                  borderRadius: '50%',
                  animation: 'blink 1.5s infinite 0.3s',
                  boxShadow: '0 0 8px #00f5ff'
                }} />
                <div style={{
                  width: '8px',
                  height: '8px',
                  background: '#00f5ff',
                  borderRadius: '50%',
                  animation: 'blink 1.5s infinite 0.6s',
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

        {/* Enhanced Welcome text */}
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
            disabled={isLoading}
            style={{
              background: 'linear-gradient(135deg, #00f5ff 0%, #9333ea 100%)',
              border: 'none',
              borderRadius: '15px',
              padding: '12px 24px',
              color: '#ffffff',
              fontSize: '16px',
              fontWeight: '600',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 20px rgba(0, 245, 255, 0.3)',
              opacity: isLoading ? 0.7 : 1,
              transform: isLoading ? 'scale(0.95)' : 'scale(1)'
            }}
            onMouseEnter={(e) => {
              if (!isLoading) {
                e.target.style.transform = 'translateY(-2px) scale(1.05)';
                e.target.style.boxShadow = '0 12px 30px rgba(0, 245, 255, 0.4)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isLoading) {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 8px 20px rgba(0, 245, 255, 0.3)';
              }
            }}
          >
            {isLoading ? 'Loading...' : 'View All Projects'}
          </button>
        </div>
      </div>

      {/* Enhanced Popup Modal */}
      {showPopup && (
        <div 
          className="popup-overlay" 
          onClick={handleClosePopup} 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(15px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            animation: 'fadeIn 0.3s ease-out'
          }}
        >
          <div 
            className="popup-container" 
            onClick={(e) => e.stopPropagation()} 
            style={{
              background: 'rgba(10, 14, 39, 0.95)',
              border: '2px solid rgba(0, 245, 255, 0.4)',
              borderRadius: '25px',
              padding: '30px',
              width: '95vw',
              maxWidth: '1400px',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              boxShadow: '0 20px 60px rgba(0, 245, 255, 0.2), inset 0 0 30px rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(25px)',
              margin: '20px',
              animation: 'slideUp 0.4s ease-out'
            }}
          >
            {/* Enhanced header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '30px',
              borderBottom: '2px solid rgba(0, 245, 255, 0.3)',
              paddingBottom: '20px'
            }}>
              <div>
                <h2 style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #00f5ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                  fontWeight: '800',
                  margin: 0,
                  letterSpacing: '-0.01em'
                }}>
                  All Projects
                </h2>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '16px',
                  margin: '8px 0 0 0',
                  fontWeight: '400'
                }}>
                  {projects.length} innovative solutions across various domains
                </p>
              </div>
              <button 
                onClick={handleClosePopup} 
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '2px solid rgba(0, 245, 255, 0.5)',
                  fontSize: '24px',
                  cursor: 'pointer',
                  color: '#00f5ff',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  transition: 'all 0.3s ease',
                  flexShrink: 0,
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(0, 245, 255, 0.2)';
                  e.target.style.transform = 'scale(1.1) rotate(90deg)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.transform = 'scale(1) rotate(0deg)';
                }}
              >
                ×
              </button>
            </div>
            
            {/* Enhanced projects grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '25px',
              padding: '10px 0'
            }}>
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            {/* Professional footer */}
            <div style={{
              marginTop: '40px',
              textAlign: 'center',
              padding: '20px 0',
              borderTop: '1px solid rgba(0, 245, 255, 0.2)'
            }}>
              <p style={{
                color: 'rgba(255, 255, 255, 0.6)',
                fontSize: '14px',
                margin: 0
              }}>
                Want to collaborate? Let's build something amazing together!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0; 
            transform: translateY(30px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        
        @keyframes pulse {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(0, 245, 255, 0.3); 
          }
          50% { 
            box-shadow: 0 0 30px rgba(0, 245, 255, 0.6); 
          }
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        
        /* Scrollbar styling */
        .popup-container::-webkit-scrollbar {
          width: 8px;
        }
        
        .popup-container::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        
        .popup-container::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #00f5ff, #9333ea);
          border-radius: 10px;
        }
        
        .popup-container::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #00d4ff, #7c3aed);
        }
        
        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .project-intro {
            flex-direction: column !important;
            gap: 20px !important;
          }
          
          .popup-container {
            margin: 10px !important;
            padding: 20px !important;
          }
          
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectGridSection;ff',
                  borderRadius: '50%'
                }} />
              </div>
              Click to explore details
            </div>
          </div>

          {/* Back Side - Enhanced Details */}
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            overflowY: 'auto',
            padding: '10px'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '20px'
            }}>
              <h3 style={{
                color: '#ffffff',
                fontSize: '16px',
                fontWeight: '700',
                lineHeight: '1.3',
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
                href={project.githubUrl || `https://github.com/mishradinky`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #24292e, #333)',
                  color: '#ffffff',
                  padding: '8px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  width: '36px',
                  height: '36px',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  flexShrink: 0,
                  marginLeft: '12px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #1a1e22, #2d3748)';
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #24292e, #333)';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
            </div>
            
            <div style={{ fontSize: '12px', lineHeight: '1.6', flex: 1 }}>
              <div style={{ marginBottom: '16px' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  marginBottom: '8px' 
                }}>
                  <div style={{
                    width: '4px',
                    height: '16px',
                    background: 'linear-gradient(to bottom, #ff6b6b, #ff8e8e)',
                    borderRadius: '2px'
                  }} />
                  <strong style={{ color: '#ff6b6b', fontSize: '13px', fontWeight: '600' }}>
                    Challenge
                  </strong>
                </div>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)', margin: '0 0 0 16px', lineHeight: '1.5' }}>
                  {project.problemStatement}
                </p>
              </div>
              
              <div style={{ marginBottom: '16px' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  marginBottom: '8px' 
                }}>
                  <div style={{
                    width: '4px',
                    height: '16px',
                    background: 'linear-gradient(to bottom, #4ecdc4, #6ee7dd)',
                    borderRadius: '2px'
                  }} />
                  <strong style={{ color: '#4ecdc4', fontSize: '13px', fontWeight: '600' }}>
                    Solution
                  </strong>
                </div>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)', margin: '0 0 0 16px', lineHeight: '1.5' }}>
                  {project.solution}
                </p>
              </div>
              
              <div style={{ marginBottom: '12px' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  marginBottom: '8px' 
                }}>
                  <div style={{
                    width: '4px',
                    height: '16px',
                    background: 'linear-gradient(to bottom, #45b7d1, #74c7ec)',
                    borderRadius: '2px'
                  }} />
                  <strong style={{ color: '#45b7d1', fontSize: '13px', fontWeight: '600' }}>
                    Impact
                  </strong>
                </div>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)', margin: '0 0 0 16px', lineHeight: '1.5' }}>
                  {project.outcomes}
                </p>
              </div>
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '11px',
              marginTop: 'auto',
              paddingTop: '10px'
            }}>
              <div style={{
                width: '16px',
                height: '16px',
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
              Click to return
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="project-grid-section" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      position: 'relative',
      background: 'linear-gradient(135deg, rgba(10, 14, 39, 0.95) 0%, rgba(26, 31, 58, 0.95) 25%, rgba(45, 27, 105, 0.95) 50%, rgba(15, 15, 35, 0.95) 100%)'
    }}>
      {/* Enhanced background particles */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(ellipse at top, rgba(0, 245, 255, 0.1) 0%, transparent 50%), radial-gradient(ellipse at bottom, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />

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
        {/* Enhanced Robot section */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Enhanced thinking bubble */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.12)',
            border: '2px solid rgba(0, 245, 255, 0.6)',
            borderRadius: '25px',
            padding: '18px 30px',
            position: 'relative',
            animation: 'pulse 2s infinite',
            boxShadow: '0 0 30px rgba(0, 245, 255, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.1)',
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
                  animation: 'blink 1.5s infinite',
                  boxShadow: '0 0 10px #00f5ff'
                }} />
                <div style={{
                  width: '6px',
                  height: '6px',
                  background: '#00f5
