import React, { useState, useEffect } from 'react';
import WavingRobotLottie from '../components/WavingRobotLottie';

const ProjectGridSection = ({ currentSection, sectionIndex, onRobotPopupChange }) => {
  const [showProjects, setShowProjects] = useState(false);
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

  const projects = [
  {
    id: 1,
    title: "Automated Cost Optimization for Non-Prod Kubernetes Environments",
    description: "In the cloud infrastructure domain, non-production Kubernetes environments often run 24/7, leading to unnecessary cloud costs during off-hours when no development or testing activities occur. The challenge was to implement an intelligent cost optimization solution that could automatically manage cluster resources without impacting team productivity. I developed an automated system using AWS EKS, Docker, and GitHub Actions that orchestrates the shutdown of test clusters during nights and weekends through scripted node cordoning, draining, and scaling to zero every Friday, with automatic restoration on Monday mornings. The solution integrates Datadog monitoring and Slack notifications to ensure seamless service recovery and maintain operational visibility. This intelligent automation delivered over $1M annual cost savings while maintaining zero impact on development workflows and ensuring 100% service availability during business hours.",
    skills: ["Amazon EKS", "GitHub", "Docker Products", "Datadog", "Slack"]
  },
  {
    id: 2,
    title: "Analysis & Reporting System of Bank Account Details using Google Cloud Platform",
    description: "In the financial services domain, banks struggle with efficiently processing and analyzing vast amounts of account data to derive actionable insights for strategic decision-making. The primary challenge was transforming raw banking datasets into meaningful analytical reports while ensuring scalability and performance. I architected a comprehensive data analysis and reporting platform leveraging Google Cloud Platform's Big Data ecosystem, implementing advanced preprocessing and transformation pipelines using Databricks and PySpark for large-scale data processing. The solution incorporated BigQuery for efficient querying and SQL-based analytics to extract valuable patterns from complex financial datasets. This system significantly enhanced the efficiency of financial data analysis, enabling data-driven decision-making processes and providing real-time insights that improved operational effectiveness and strategic planning capabilities in the banking sector.",
    skills: ["Google Cloud Platform", "Databricks Platform", "BigQuery", "PySpark", "SQL"]
  },
  {
    id: 3,
    title: "Big Data-Driven Medline Search & Retrieval System",
    description: "In the healthcare information domain, medical professionals and researchers face significant challenges accessing relevant medical literature due to inefficient search mechanisms that generate high latency and poor precision results. The existing system required over 4,000 individual SQL calls per document search, creating unacceptable delays and limiting practical usability. I engineered a revolutionary search architecture that replaced the inefficient multi-query approach with a single MySQL inverted-index lookup system, processing 1.4 million terms from 4,500 MedlinePlus articles using an automated Node.js/Puppeteer scraping and preprocessing pipeline. The solution incorporated advanced NLP techniques including tokenization, stemming, and lemmatization, combined with TF-IDF and cosine-similarity ranking algorithms, delivered through a responsive Next.js frontend and Node.js/Express backend. This transformation achieved a remarkable 99% reduction in search latency while boosting top-10 precision by 30%, creating a real-time medical literature search experience that dramatically improved healthcare information accessibility.",
    skills: ["Node.js", "Puppeteer", "MongoDB", "MySQL", "Next.js", "TF-IDF", "NLP"]
  },
  {
    id: 4,
    title: "Bitcoin Price Prediction Using Machine Learning and LLM",
    description: "In the cryptocurrency trading domain, investors face significant challenges predicting Bitcoin price movements due to the complex interplay of market data and social sentiment factors. The problem was developing accurate predictive models that could incorporate both historical price patterns and real-time sentiment analysis to forecast weekly Bitcoin trends. I developed a comprehensive machine learning solution that processes a decade of historical Bitcoin data (2014-2024) from Yahoo Finance, integrated with Reddit sentiment analysis powered by advanced LLMs including FinBERT for financial sentiment extraction. The system engineers sophisticated features including moving averages, RSI, MACD, and sentiment-based metrics to capture market patterns and emotional indicators. This innovative approach achieved exceptional accuracy with MAE of 2.3%, RMSE of 3.1%, and 87% classification accuracy for price movement predictions, providing traders and investors with reliable forecasting capabilities that significantly enhance decision-making in volatile cryptocurrency markets.",
    skills: ["Google Colab", "Python", "pandas", "scikit-learn", "NLTK", "spaCy", "Hugging Face Transformers"]
  },
  {
    id: 5,
    title: "Capstone Project: Case Study on Tamil Nadu's Plantation 2015-2016 using PySpark",
    description: "In the agricultural analytics domain, understanding plantation trends and patterns is crucial for policy-making and agricultural planning, but large-scale agricultural datasets require sophisticated big data processing capabilities. The challenge was analyzing comprehensive Tamil Nadu plantation data to extract meaningful insights about industry trends, productivity patterns, and regional variations. I executed a comprehensive big data analysis project using PySpark for distributed processing, implementing advanced preprocessing and transformation techniques to handle large-scale agricultural datasets efficiently. The solution incorporated SparkSQL for complex analytical queries and Microsoft Power BI for interactive visualization, creating a complete analytical pipeline from raw data to actionable insights. This project successfully demonstrated the practical application of big data technologies in agricultural analytics, delivering detailed insights into plantation industry trends, productivity patterns, and regional performance metrics that support informed decision-making for agricultural stakeholders and policymakers.",
    skills: ["Databricks Platform", "PySpark", "SparkSQL", "Microsoft Power BI"]
  },
  {
    id: 6,
    title: "Data Visualization of IMDB Dataset using R-programming language",
    description: "In the entertainment analytics domain, extracting meaningful insights from vast movie databases like IMDB requires sophisticated analytical and visualization techniques to understand complex relationships between ratings, genres, actors, and audience preferences. The challenge was developing a comprehensive analysis system that could process large-scale movie data and present findings through compelling visualizations. I built an advanced analytical platform using R programming language, implementing machine learning algorithms and recommendation systems using the recommenderlab package to analyze viewing patterns and predict user preferences. The solution incorporated ggplot2 for sophisticated data visualization and data.table for efficient large dataset processing, creating interactive visual representations that reveal hidden patterns in movie ratings, genre preferences, and demographic trends. This project successfully demonstrated the power of statistical analysis and data visualization in understanding entertainment industry dynamics, providing actionable insights that facilitate data-driven decision-making for content creators, distributors, and recommendation systems.",
    skills: ["R-studio", "R-programming", "recommenderlab", "ggplot2", "data.table"]
  },
  {
    id: 7,
    title: "Distributed Data Store Replication System",
    description: "In the distributed systems domain, maintaining data consistency across multiple nodes while handling concurrent read/write operations presents significant challenges in terms of performance, reliability, and data integrity. The problem was designing a robust replication protocol that could efficiently handle large data arrays while ensuring consistency verification and fault tolerance. I engineered a sophisticated replication system for 512 KB integer arrays, implementing a fragmentation protocol that breaks WRITE updates into 32-item UDP frames for efficient network transmission. The solution handles READ requests through MD5 digest computation for immediate consistency verification and achieves eventual consistency across four replicas using asynchronous broadcasting and intelligent store reconciliation mechanisms. This distributed architecture successfully demonstrated advanced concepts in distributed computing, delivering reliable data replication with automatic consistency checks, efficient network utilization, and robust fault tolerance that ensures data integrity across multiple nodes in a distributed environment.",
    skills: ["C", "UDP sockets", "OpenSSL MD5", "pthreads", "data fragmentation"]
  },
  {
    id: 8,
    title: "Distributed Mutual Exclusion Primitive",
    description: "In concurrent distributed systems, ensuring mutual exclusion across multiple processes without centralized coordination presents complex challenges in fairness, deadlock prevention, and consistency maintenance. The core problem was implementing a distributed mutex mechanism that could handle concurrent access requests while maintaining fairness and preventing race conditions. I designed and implemented a sophisticated distributed mutex API featuring timestamped REQUEST/REPLY messaging and vector clock synchronization to ensure logical ordering of events across distributed processes. The solution incorporates intelligent request deferral, fair queuing mechanisms, and POSIX semaphore-based thread blocking to guarantee safe critical section entry. This implementation successfully achieved true distributed mutual exclusion with automatic deferred reply broadcasting, ensuring consistency across processes while maintaining fairness in access ordering and preventing deadlock scenarios in complex distributed computing environments.",
    skills: ["C", "UDP sockets", "pthreads", "POSIX semaphores", "vector logical clocks"]
  },
  {
    id: 9,
    title: "Floppy Disk Shell Environment",
    description: "In legacy system administration, accessing and managing floppy disk contents remotely presents unique challenges due to network unreliability, packet loss, and security considerations in distributed environments. The problem was creating a reliable remote disk management system that could handle FAT filesystem operations over unreliable UDP connections. I developed a comprehensive remote floppy disk shell that enables secure mounting/unmounting, FAT table browsing, directory listing with detailed permissions, and sector-level hex dumps through UDP-based communication. The solution implements robust client handle verification against source address/port combinations and incorporates intelligent packet loss simulation with automatic retransmission logic for reliable remote operations. This system successfully demonstrated advanced network programming concepts, delivering a fully functional remote disk management interface with security features, fault tolerance, and comprehensive filesystem operations that maintain reliability even under adverse network conditions.",
    skills: ["C", "UDP sockets", "pthreads", "POSIX file I/O", "handle based access control"]
  },
  {
    id: 10,
    title: "Minix Disk Explorer Console",
    description: "In operating systems education and forensic analysis, understanding filesystem internals requires specialized tools that can parse and navigate complex filesystem structures at the metadata level. The challenge was developing a comprehensive filesystem client that could handle Minix filesystem operations including superblock parsing, inode management, and directory traversal with detailed metadata extraction. I engineered a sophisticated Minix filesystem explorer that mounts disk images, parses superblock metadata with automatic cleanup capabilities, and provides comprehensive directory traversal with both standard and detailed listing formats. The solution incorporates advanced file type and permission decoding, zone content analysis with ASCII filtering, and bonus features including arbitrary file hex dumps and interactive help systems. This implementation successfully demonstrated deep operating system concepts, providing a complete toolkit for filesystem analysis, educational exploration, and forensic investigation that offers both user-friendly interfaces and low-level system insights.",
    skills: ["C", "Linux syscalls", "inode/superblock parsing", "isprint()"]
  },
  {
    id: 11,
    title: "Object Recognition System using AI",
    description: "In computer vision applications, accurately identifying and localizing objects in diverse visual contexts remains a significant challenge due to variations in lighting, angles, backgrounds, and object appearances. The problem was developing a robust object recognition system that could process both static images and dynamic video streams while maintaining high accuracy across different environmental conditions. I developed an advanced computer vision platform using deep learning frameworks including TensorFlow and Keras, implementing convolutional neural networks optimized for real-time object detection and localization. The solution incorporates OpenCV for efficient image processing, NumPy for mathematical operations, and ImageAI for enhanced recognition capabilities, all delivered through an intuitive user interface. This system successfully achieved high-accuracy object recognition with practical applications spanning security surveillance, automated inventory management, and interactive media, demonstrating the power of AI-driven computer vision in solving real-world visual recognition challenges.",
    skills: ["Python3.7", "TensorFlow", "NumPy", "OpenCV", "Keras", "Image AI"]
  },
  {
    id: 12,
    title: "RPC Based Distributed Computing Replicator",
    description: "In high-performance computing environments, efficiently distributing computational tasks across multiple servers while managing varying load conditions and ensuring optimal resource utilization presents complex challenges in load balancing and fault tolerance. The problem was creating an intelligent distributed computing system that could dynamically manage workloads based on real-time server performance metrics. I developed a sophisticated RPC-driven replication system that distributes hyper_link simulation tasks across up to five servers, implementing intelligent CPU load monitoring with threshold-based job management policies for automatic task rescheduling and load balancing. The solution features an interactive client interface for job submission, comprehensive status reporting, and manual server control capabilities with automated workload redistribution. This distributed computing platform successfully demonstrated advanced concepts in parallel processing, achieving optimal resource utilization through intelligent load balancing, automatic fault recovery, and real-time performance monitoring that maximizes computational efficiency across distributed server environments.",
    skills: ["C", "Sun RPC (rpcgen)", "fork()", "/proc/loadavg parsing", "pthreads"]
  },
  {
    id: 13,
    title: "UNIX-like Custom Shell",
    description: "In operating systems development, creating efficient command-line interfaces that can handle complex I/O operations, process management, and dynamic path resolution presents fundamental challenges in system programming and user experience design. The problem was building a lightweight yet feature-rich shell that could compete with standard UNIX shells while maintaining simplicity and reliability. I engineered a comprehensive custom shell supporting essential built-in commands including cd, path management, and quit functionality, with dynamic search path configuration and advanced I/O redirection capabilities. The solution implements robust external command execution through fork and execv system calls, comprehensive error handling for missing commands and invalid arguments, and modular command parsing architecture with Makefile-driven build processes. This shell implementation successfully demonstrated core operating system concepts, delivering a fully functional command-line interface with advanced process management, flexible I/O handling, and user-friendly error reporting that provides both educational value and practical utility.",
    skills: ["C", "Makefile", "Linux system calls", "fork", "execv"]
  },
  {
    id: 14,
    title: "User Space Threading Library with Read-Write Lock",
    description: "In concurrent programming, traditional locking mechanisms often create performance bottlenecks when multiple threads need simultaneous read access while maintaining exclusive write operations. The challenge was developing a user-space threading library that could optimize concurrent access patterns while ensuring thread safety and fairness. I implemented sthreads, an advanced user-space threading library featuring a custom read-write lock mechanism that allows multiple concurrent readers with exclusive writer access, implementing sophisticated fairness algorithms with separate reader/writer queues and semaphore-based thread suspension. The solution incorporates try-lock support for non-blocking operations and atomic test-and-set operations to minimize lock contention and eliminate busy waiting. This threading library successfully achieved significant performance improvements in multithreaded applications by optimizing read-heavy workloads, reducing CPU usage through intelligent thread management, and providing a robust foundation for high-performance concurrent applications that require fine-grained synchronization control.",
    skills: ["C", "pthreads", "POSIX semaphores", "atomic test and set operations"]
  },
  {
    id: 15,
    title: "Virtual Memory Address Translation Simulator",
    description: "In operating systems education and performance analysis, understanding virtual memory management and address translation mechanisms requires sophisticated simulation tools that can model real-world memory management scenarios including page faults and replacement algorithms. The challenge was developing a comprehensive simulator that could demonstrate both static and dynamic memory management techniques with accurate performance metrics. I developed a sophisticated two-phase address translation simulator featuring static page table management in phase one and dynamic frame allocation with LRU replacement algorithms in phase two, processing virtual addresses from binary input files and mapping them to physical memory frames with comprehensive validation. The solution incorporates MD5 checksum verification for data integrity, detailed page fault counting and analysis, and optimized memory management insights for system-level performance evaluation. This simulation platform successfully demonstrated advanced virtual memory concepts, providing valuable insights into memory management efficiency, page replacement strategies, and system-level performance optimization that benefits both educational understanding and practical system design.",
    skills: ["C", "POSIX file I/O", "OpenSSL MD5", "gcc", "LRU replacement"]
  }
];

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
            margin: '10px',
            '@media (maxWidth: 768px)': {
              padding: '15px',
              margin: '5px',
              width: '98vw',
              maxHeight: '95vh'
            }
          }}>
            <div className="popup-header" style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px',
              borderBottom: '1px solid rgba(0, 245, 255, 0.3)',
              paddingBottom: '10px',
              '@media (maxWidth: 768px)': {
                marginBottom: '15px',
                paddingBottom: '8px'
              }
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
                gap: '20px',
                '@media (maxWidth: 768px)': {
                  gridTemplateColumns: '1fr',
                  gap: '15px'
                }
              }}>
                {projects.map((project) => (
                  <div key={project.id} className="project-card" style={{
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(0, 245, 255, 0.25)',
                    borderRadius: '15px',
                    padding: '25px',
                    boxShadow: '0 4px 20px rgba(0, 245, 255, 0.15)',
                    backdropFilter: 'blur(14px)'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '15px'
                    }}>
                      <h3 style={{
                        color: '#00f5ff',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        lineHeight: '1.4',
                        margin: 0,
                        whiteSpace: 'normal',
                        wordWrap: 'break-word',
                        wordBreak: 'break-word',
                        textAlign: 'center',
                      }}>
                        {project.title}
                      </h3>
                      <a 
                        href={project.githubUrl || `https://github.com/mishradinky`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: '#333333',
                          color: '#ffffff',
                          padding: '8px',
                          borderRadius: '50%',
                          textDecoration: 'none',
                          width: '32px',
                          height: '32px',
                          transition: 'all 0.3s ease',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = '#1a1e22';
                          e.target.style.transform = 'translateY(-1px)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = '#24292e';
                          e.target.style.transform = 'translateY(0)';
                        }}
                      >
                        <svg 
                          width="16" 
                          height="16" 
                          viewBox="0 0 16 16" 
                          fill="currentColor"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                      </a>
                    </div>
                    
                    <p style={{
                      color: '#ffffff',
                      fontSize: '14px',
                      lineHeight: '1.6',
                      marginBottom: '15px',
                      textAlign: 'left',
                    }}>
                      {project.description}
                    </p>
                    
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px'
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

export default ProjectGridSection;
