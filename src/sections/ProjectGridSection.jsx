import React, { useState, useEffect } from 'react';
import WavingRobotLottie from '../components/WavingRobotLottie';

const ProjectGridSection = ({ currentSection, sectionIndex, onRobotPopupChange }) => {
  const [showProjects, setShowProjects] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [flippedCards, setFlippedCards] = useState([]);

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
      setFlippedCards([]);
    }
  }, [currentSection, sectionIndex]);

  const handleRobotClick = () => {
    setShowPopup(true);
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

  const projects = [
    {
      id: 1,
      title: "Automated Cost Optimization for Non-Prod Kubernetes Environments",
      skills: ["Amazon EKS", "GitHub", "Docker Products", "Datadog", "Slack"],
      problemStatement: "Non-production Kubernetes clusters running 24/7 were generating significant cloud costs (over $10K annually) with minimal weekend/night usage, impacting operational budgets without adding value during off-hours.",
      solution: "Designed and implemented an intelligent automation solution using GitHub Actions for scheduling. Created scripts to systematically cordon nodes, drain workloads, and scale clusters to zero every Friday evening, with automatic Monday morning spin-up. Integrated comprehensive monitoring through Datadog and Slack alerting to ensure seamless service restoration and validate all components come online as expected.",
      outcomes: "Achieved over $10K annual cost savings while maintaining 100% development productivity. Zero service disruption incidents and improved resource utilization efficiency across non-production environments."
    },
    {
      id: 2,
      title: "Analysis & Reporting System of Bank Account Details using Google Cloud Platform",
      skills: ["Google Cloud Platform", "Databricks Platform", "BigQuery", "PySpark", "SQL"],
      problemStatement: "Financial institutions required efficient analysis and reporting capabilities for large-scale bank account data to support regulatory compliance and business intelligence initiatives.",
      solution: "Developed a comprehensive big data solution leveraging GCP ecosystem. Applied advanced preprocessing and transformations on financial datasets using Databricks platform. Created efficient data pipelines utilizing BigQuery for analytical processing and implemented scalable reporting mechanisms for bank account analysis.",
      outcomes: "Enhanced financial data analysis efficiency by 40%, contributing to faster informed decision-making in the banking sector and improved regulatory reporting capabilities."
    },
    {
      id: 3,
      title: "Big Data-Driven Medline Search & Retrieval System",
      skills: ["Node.js", "Puppeteer", "MongoDB", "MySQL", "Next.js", "TF-IDF", "NLP"],
      problemStatement: "Existing medical information retrieval system suffered from extreme latency (4,000+ per-document SQL calls) and poor search precision, making it ineffective for real-time medical research queries.",
      solution: "Architected a comprehensive search optimization pipeline by scraping and indexing 1.4M terms from 4.5K MedlinePlus articles. Implemented advanced NLP preprocessing including tokenization, stemming, and lemmatization. Replaced inefficient query system with a single MySQL inverted-index lookup and enhanced ranking using TF-IDF with cosine similarity algorithms. Built responsive real-time search interface using Next.js frontend and Node.js/Express backend.",
      outcomes: "Reduced search latency by 99% and boosted top-10 search precision by 30%, enabling healthcare professionals to access critical medical information instantly with significantly improved accuracy."
    },
    {
      id: 4,
      title: "Bitcoin Price Prediction Using Machine Learning and LLM",
      skills: ["Google Colab", "Python", "pandas", "scikit-learn", "NLTK", "spaCy", "Hugging Face Transformers"],
      problemStatement: "Develop an accurate cryptocurrency price prediction system combining traditional financial indicators with sentiment analysis from social media to support informed investment decisions.",
      solution: "Processed 10 years of historical Bitcoin data (2014–2024) and integrated Reddit sentiment analysis using advanced LLMs like FinBERT. Engineered comprehensive feature sets including moving averages, RSI, MACD, and sentiment-derived metrics. Optimized data processing pipelines for large-scale analysis using GPU-accelerated Google Colab, seamlessly merging structured financial data with unstructured social sentiment data.",
      outcomes: "Achieved exceptional model performance with 2.3% MAE, 3.1% RMSE, and 87% classification accuracy for price movement predictions, delivering actionable insights for cryptocurrency market decision-making."
    },
    {
      id: 5,
      title: "Capstone Project: Case Study on Tamil Nadu's Plantation 2015-2016 using PySpark",
      skills: ["Databricks Platform", "PySpark", "SparkSQL", "Microsoft Power BI"],
      problemStatement: "Understanding plantation trends and patterns is crucial for policy-making and agricultural planning, but large-scale agricultural datasets require sophisticated big data processing capabilities.",
      solution: "Executed a comprehensive big data analysis project using PySpark for distributed processing, implementing advanced preprocessing and transformation techniques to handle large-scale agricultural datasets efficiently. The solution incorporated SparkSQL for complex analytical queries and Microsoft Power BI for interactive visualization, creating a complete analytical pipeline from raw data to actionable insights.",
      outcomes: "Successfully demonstrated the practical application of big data technologies in agricultural analytics, delivering detailed insights into plantation industry trends, productivity patterns, and regional performance metrics."
    },
    {
      id: 6,
      title: "Data Visualization of IMDB Dataset using R-programming language",
      skills: ["R-studio", "R-programming", "recommenderlab", "ggplot2", "data.table"],
      problemStatement: "Extracting meaningful insights from vast movie databases like IMDB requires sophisticated analytical and visualization techniques to understand complex relationships between ratings, genres, actors, and audience preferences.",
      solution: "Built an advanced analytical platform using R programming language, implementing machine learning algorithms and recommendation systems using the recommenderlab package to analyze viewing patterns and predict user preferences. The solution incorporated ggplot2 for sophisticated data visualization and data.table for efficient large dataset processing, creating interactive visual representations that reveal hidden patterns in movie ratings, genre preferences, and demographic trends.",
      outcomes: "Successfully demonstrated the power of statistical analysis and data visualization in understanding entertainment industry dynamics, providing actionable insights that facilitate data-driven decision-making for content creators, distributors, and recommendation systems."
    },
    {
      id: 7,
      title: "Distributed Data Store Replication System",
      skills: ["C", "UDP sockets", "OpenSSL MD5", "pthreads", "data fragmentation"],
      problemStatement: "Build a reliable distributed storage system capable of maintaining data consistency across multiple replicas while handling concurrent read/write operations efficiently.",
      solution: "Engineered a sophisticated replication protocol for 512 KB integer arrays, implementing intelligent data fragmentation into 32-item UDP frames for optimized network transmission. Developed efficient READ request handling with MD5 digest computation for immediate consistency verification. Implemented asynchronous broadcasting mechanism with reconciliation algorithms to achieve eventual consistency across four distributed replicas.",
      outcomes: "Successfully achieved eventual consistency across all replicas with zero data loss, demonstrating robust distributed system design principles and reliable concurrent data operations."
    },
    {
      id: 8,
      title: "Distributed Mutual Exclusion Primitive",
      skills: ["C", "UDP sockets", "pthreads", "POSIX semaphores", "vector logical clocks"],
      problemStatement: "Ensuring mutual exclusion across multiple processes without centralized coordination presents complex challenges in fairness, deadlock prevention, and consistency maintenance.",
      solution: "Designed and implemented a sophisticated distributed mutex API featuring timestamped REQUEST/REPLY messaging and vector clock synchronization to ensure logical ordering of events across distributed processes. The solution incorporates intelligent request deferral, fair queuing mechanisms, and POSIX semaphore-based thread blocking to guarantee safe critical section entry.",
      outcomes: "Successfully achieved true distributed mutual exclusion with automatic deferred reply broadcasting, ensuring consistency across processes while maintaining fairness in access ordering."
    },
    {
      id: 9,
      title: "Floppy Disk Shell Environment",
      skills: ["C", "UDP sockets", "pthreads", "POSIX file I/O", "handle based access control"],
      problemStatement: "Accessing and managing floppy disk contents remotely presents unique challenges due to network unreliability, packet loss, and security considerations in distributed environments.",
      solution: "Developed a comprehensive remote floppy disk shell that enables secure mounting/unmounting, FAT table browsing, directory listing with detailed permissions, and sector-level hex dumps through UDP-based communication. The solution implements robust client handle verification against source address/port combinations and incorporates intelligent packet loss simulation with automatic retransmission logic for reliable remote operations.",
      outcomes: "Successfully demonstrated advanced network programming concepts, delivering a fully functional remote disk management interface with security features and fault tolerance."
    },
    {
      id: 10,
      title: "Minix Disk Explorer Console",
      skills: ["C", "Linux syscalls", "inode/superblock parsing", "isprint()"],
      problemStatement: "Understanding filesystem internals requires specialized tools that can parse and navigate complex filesystem structures at the metadata level.",
      solution: "Engineered a sophisticated Minix filesystem explorer that mounts disk images, parses superblock metadata with automatic cleanup capabilities, and provides comprehensive directory traversal with both standard and detailed listing formats. The solution incorporates advanced file type and permission decoding, zone content analysis with ASCII filtering, and bonus features including arbitrary file hex dumps and interactive help systems.",
      outcomes: "Successfully demonstrated deep operating system concepts, providing a complete toolkit for filesystem analysis and educational exploration."
    },
    {
      id: 11,
      title: "Object Recognition System using AI",
      skills: ["Python3.7", "TensorFlow", "NumPy", "OpenCV", "Keras", "Image AI"],
      problemStatement: "Develop an accurate and user-friendly computer vision system capable of identifying and localizing multiple objects within images and video streams for practical applications.",
      solution: "Implemented a comprehensive computer vision pipeline using state-of-the-art deep learning frameworks. Designed and trained neural network models for multi-object detection and classification. Created an intuitive user interface enabling seamless interaction with the recognition system. Optimized model performance through advanced training techniques and data augmentation strategies.",
      outcomes: "Successfully achieved high-accuracy object recognition with practical applications across diverse visual contexts, providing a robust foundation for real-world computer vision deployment."
    },
    {
      id: 12,
      title: "RPC Based Distributed Computing Replicator",
      skills: ["C", "Sun RPC (rpcgen)", "fork()", "/proc/loadavg parsing", "pthreads"],
      problemStatement: "Efficiently distributing computational tasks across multiple servers while managing varying load conditions and ensuring optimal resource utilization presents complex challenges in load balancing and fault tolerance.",
      solution: "Developed a sophisticated RPC-driven replication system that distributes hyper_link simulation tasks across up to five servers, implementing intelligent CPU load monitoring with threshold-based job management policies for automatic task rescheduling and load balancing. The solution features an interactive client interface for job submission, comprehensive status reporting, and manual server control capabilities with automated workload redistribution.",
      outcomes: "Successfully demonstrated advanced concepts in parallel processing, achieving optimal resource utilization through intelligent load balancing."
    },
    {
      id: 13,
      title: "UNIX-like Custom Shell",
      skills: ["C", "Makefile", "Linux system calls", "fork", "execv"],
      problemStatement: "Build a lightweight, efficient shell environment supporting essential command-line operations while maintaining compatibility with UNIX standards.",
      solution: "Architected a modular shell supporting built-in commands (cd, path, quit) with dynamic search path management. Implemented robust input/output redirection mechanisms and external command execution via fork and execv system calls. Developed comprehensive error handling for missing commands and invalid arguments, enhanced by clear user interaction through intelligent command parsing.",
      outcomes: "Created a fully functional shell environment with zero memory leaks and robust error handling, demonstrating deep understanding of operating system concepts and system programming expertise."
    },
    {
      id: 14,
      title: "User Space Threading Library with Read-Write Lock",
      skills: ["C", "pthreads", "POSIX semaphores", "atomic test and set operations"],
      problemStatement: "Traditional locking mechanisms often create performance bottlenecks when multiple threads need simultaneous read access while maintaining exclusive write operations.",
      solution: "Implemented sthreads, an advanced user-space threading library featuring a custom read-write lock mechanism that allows multiple concurrent readers with exclusive writer access, implementing sophisticated fairness algorithms with separate reader/writer queues and semaphore-based thread suspension. The solution incorporates try-lock support for non-blocking operations and atomic test-and-set operations to minimize lock contention and eliminate busy waiting.",
      outcomes: "Successfully achieved significant performance improvements in multithreaded applications by optimizing read-heavy workloads and reducing CPU usage through intelligent thread management."
    },
    {
      id: 15,
      title: "Virtual Memory Address Translation Simulator",
      skills: ["C", "POSIX file I/O", "OpenSSL MD5", "gcc", "LRU replacement"],
      problemStatement: "Understanding virtual memory management and address translation mechanisms requires sophisticated simulation tools that can model real-world memory management scenarios including page faults and replacement algorithms.",
      solution: "Developed a sophisticated two-phase address translation simulator featuring static page table implementation in phase 1 and dynamic frame allocation with LRU replacement policy in phase 2. Implemented binary input processing for virtual addresses, efficient physical frame mapping, and comprehensive output generation with MD5 checksum validation for result integrity.",
      outcomes: "Successfully demonstrated advanced virtual memory concepts, providing valuable insights into memory management efficiency."
    }
  ];

  // Project Card Component
  const ProjectCard = ({ project }) => {
    const isFlipped = flippedCards.includes(project.id);
    
    return (
      <div 
        key={project.id} 
        className="project-card" 
        onClick={() => handleCardFlip(project.id)}
        style={{
          background: 'rgba(255, 255, 255, 0.06)',
          border: '1px solid rgba(0, 245, 255, 0.25)',
          borderRadius: '15px',
          padding: '25px',
          boxShadow: '0 4px 20px rgba(0, 245, 255, 0.15)',
          backdropFilter: 'blur(14px)',
          cursor: 'pointer',
          minHeight: '300px',
          position: 'relative',
          perspective: '1000px',
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 245, 255, 0.25)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 245, 255, 0.15)';
        }}
      >
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}>
          
          {/* Front Side - Project Name */}
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <h3 style={{
              color: '#00f5ff',
              fontSize: '24px',
              fontWeight: 'bold',
              lineHeight: '1.4',
              margin: '0 0 20px 0',
              textAlign: 'center'
            }}>
              {project.title}
            </h3>
            
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              justifyContent: 'center'
            }}>
              {project.skills.map((skill, skillIndex) => (
                <span key={skillIndex} style={{
                  background: 'rgba(0, 245, 255, 0.2)',
                  color: '#00f5ff',
                  padding: '4px 12px',
                  borderRadius: '15px',
                  fontSize: '12px',
                  fontFamily: 'monospace'
                }}>
                  {skill}
                </span>
              ))}
            </div>
            
            <p style={{
              color: '#ffffff',
              fontSize: '14px',
              marginTop: '20px',
              opacity: '0.7'
            }}>
              Click to view details
            </p>
          </div>

          {/* Back Side - Project Details */}
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
              marginBottom: '15px'
            }}>
              <h3 style={{
                color: '#00f5ff',
                fontSize: '18px',
                fontWeight: 'bold',
                lineHeight: '1.3',
                margin: 0,
                flex: 1
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
                  background: '#333333',
                  color: '#ffffff',
                  padding: '6px',
                  borderRadius: '50%',
                  textDecoration: 'none',
                  width: '28px',
                  height: '28px',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  flexShrink: 0,
                  marginLeft: '10px'
                }}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
            </div>
            
            <div style={{ fontSize: '13px', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '12px' }}>
                <strong style={{ color: '#ff6b6b', fontSize: '14px' }}>Problem/Challenge:</strong>
                <p style={{ color: '#ffffff', margin: '5px 0 0 0' }}>
                  {project.problemStatement}
                </p>
              </div>
              
              <div style={{ marginBottom: '12px' }}>
                <strong style={{ color: '#4ecdc4', fontSize: '14px' }}>Solution:</strong>
                <p style={{ color: '#ffffff', margin: '5px 0 0 0' }}>
                  {project.solution}
                </p>
              </div>
              
              <div style={{ marginBottom: '10px' }}>
                <strong style={{ color: '#45b7d1', fontSize: '14px' }}>Outcomes:</strong>
                <p style={{ color: '#ffffff', margin: '5px 0 0 0' }}>
                  {project.outcomes}
                </p>
              </div>
            </div>
            
            <p style={{
              color: '#ffffff',
              fontSize: '12px',
              marginTop: 'auto',
              opacity: '0.7',
              textAlign: 'center'
            }}>
              Click to go back
            </p>
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
      position: 'relative'
    }}>
      <div className="project-intro" style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '30px',
        maxWidth: '1200px',
        width: '100%',
        padding: '10px'
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
                Hey, it's me again - Dinky!
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
          textAlign: 'center'
        }}>
          <h1 style={{
            color: '#ffffff',
            fontSize: '48px',
            fontWeight: 'bold',
            marginBottom: '5px',
            letterSpacing: 'normal',
            wordSpacing: '-2px'
          }}>
            Explore My Projects
          </h1>
          <p style={{
            color: '#00f5ff',
            fontSize: '24px',
            marginBottom: '15px'
          }}>
            Click the robo to view all projects
          </p>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay" onClick={handleClosePopup} style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'transparent',
          boxShadow: 'inset 0 0 250px rgba(0, 0, 0, 0.75)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          backdropFilter: 'blur(10px)',
          transition: 'background 0.3s ease-in-out'
        }}>
          <div className="popup-container" onClick={(e) => e.stopPropagation()} style={{
            background: 'rgba(0, 0, 0, 0.2)',
            border: '1px solid rgba(0, 245, 255, 0.3)',
            borderRadius: '20px',
            padding: '20px',
            width: '95vw',
            maxWidth: '1400px',
            maxHeight: '90vh',
            overflowY: 'auto',
            position: 'relative',
            boxShadow: '0 10px 30px rgba(0, 245, 255, 0.08)',
            backdropFilter: 'blur(10px)',
            margin: '10px'
          }}>
            <div className="popup-header" style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px',
              borderBottom: '1px solid rgba(0, 245, 255, 0.3)',
              paddingBottom: '10px'
            }}>
              <h2 className="popup-title" style={{
                color: '#ffffff',
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                fontWeight: 'bold',
                margin: 0
              }}>
                All Projects
              </h2>
              <button className="popup-close" onClick={handleClosePopup} style={{
                background: 'rgba(0, 245, 255, 0.2)',
                border: '1px solid rgba(0, 245, 255, 0.5)',
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                cursor: 'pointer',
                color: '#00f5ff',
                width: 'clamp(30px, 8vw, 40px)',
                height: 'clamp(30px, 8vw, 40px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                transition: 'all 0.3s ease',
                flexShrink: 0
              }}>
                ×
              </button>
            </div>
            
            <div className="popup-content">
              <div className="projects-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '20px'
              }}>
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectGridSection;
