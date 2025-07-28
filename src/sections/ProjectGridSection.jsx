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
      description: "Designed and implemented a solution to automatically shut down an AWS EKS (Kubernetes) test cluster on nights/weekends to save cloud costs. Using Docker/K8s on AWS and GitHub Actions for scheduling, I scripted the cordoning, draining, and scale-to-zero of nodes every Friday, with automatic spin-up on Monday morning. Integrated Datadog monitoring and Slack alerts to verify all services come back online as expected. This automation achieved significant cost savings (over $10K/year) without impacting development or testing productivity.",
      skills: ["Amazon EKS", "GitHub", "Docker Products", "Datadog", "Slack"]
    },
    {
      id: 2,
      title: "Analysis & Reporting System of Bank Account Details using Google Cloud Platform",
      description: "Applied preprocessing and transformations on datasets to extract meaningful insights using Databricks platform. Developed an efficient system utilizing Google Cloud Platform (GCP) Big Data tools for analysis and reporting of bank account details. Enhanced the efficiency of financial data analysis, contributing to informed decision-making in the banking sector.",
      skills: ["Google Cloud Platform", "Databricks Platform", "BigQuery", "PySpark", "SQL"]
    },
    {
      id: 3,
      title: "Big Data-Driven Medline Search & Retrieval System",
      description: "Reduced search latency by 99% by replacing 4,000+ per-document SQL calls with a single MySQL inverted-index lookup. Indexed 1.4 M terms from 4.5 K MedlinePlus articles using a Node.js/Puppeteer scraping and preprocessing pipeline. Boosted top-10 precision by 30% through NLP (tokenization, stemming, lemmatization) and TF-IDF + cosine-similarity ranking. Launched a real-time search UI with a Next.js frontend and Node.js/Express backend.",
      skills: ["Node.js", "Puppeteer", "MongoDB", "MySQL", "Next.js", "TF-IDF", "NLP"]
    },
    {
      id: 4,
      title: "Bitcoin Price Prediction Using Machine Learning and LLM",
      description: "Processed historical Bitcoin price data (2014–2024) from Yahoo Finance and Reddit sentiment data using Python, integrating sentiment scores derived from LLMs like FinBERT. Developed predictive models for weekly Bitcoin prices, achieving MAE of 2.3%, RMSE of 3.1%, and classification accuracy of 87% for price movement trends. Engineered features, including moving averages, RSI, MACD, and sentiment-based metrics, to enhance model performance and identify market patterns.",
      skills: ["Google Colab", "Python", "pandas", "scikit-learn", "NLTK", "spaCy", "Hugging Face Transformers"]
    },
    {
      id: 5,
      title: "Capstone Project: Case Study on Tamil Nadu's Plantation 2015-2016 using PySpark",
      description: "Executed comprehensive preprocessing and transformation of datasets using PySpark. Conducted a detailed case study on Tamil Nadu Plantation data, showcasing analytical insights into the trends and patterns of the plantation industry. Demonstrated the practical application of PySpark in processing large-scale datasets for informed decision-making.",
      skills: ["Databricks Platform", "PySpark", "SparkSQL", "Microsoft Power BI"]
    },
    {
      id: 6,
      title: "Data Visualization of IMDB Dataset using R-programming language",
      description: "Built a system for in-depth analysis of the IMDB dataset using machine learning algorithms. Applied various visualization techniques in R language to represent complex relationships within the dataset. Highlighted the importance of data visualization in gaining actionable insights and facilitating decision-making processes.",
      skills: ["R-studio", "R-programming", "recommenderlab", "ggplot2", "data.table"]
    },
    {
      id: 7,
      title: "Distributed Data Store Replication System",
      description: "Engineered a replication protocol for a 512 KB integer array, fragmenting WRITE updates into 32 item UDP frames. Handled READ requests by computing and returning an MD5 digest for immediate consistency verification. Achieved eventual consistency across four replicas by asynchronously broadcasting updates and reconciling stores.",
      skills: ["C", "UDP sockets", "OpenSSL MD5", "pthreads", "data fragmentation"]
    },
    {
      id: 8,
      title: "Distributed Mutual Exclusion Primitive",
      description: "Designed a distributed mutex API (init, lock, unlock) using timestamped REQUEST/REPLY messages and vector clocks. Deferred replies fairly, queued incoming requests, and blocked calling threads via semaphores until safe entry. Ensured mutual exclusion and automatic deferred reply broadcasting to maintain consistency across processes.",
      skills: ["C", "UDP sockets", "pthreads", "POSIX semaphores", "vector logical clocks"]
    },
    {
      id: 9,
      title: "Floppy Disk Shell Environment",
      description: "Built a remote floppy disk shell over UDP, enabling users to mount/umount, browse FAT tables, and list directories (standard and -l). Implemented sector hex dumps and file reads with client handles verified against source address/port. Simulated packet loss and incorporated retransmission logic for reliable remote disk operations.",
      skills: ["C", "UDP sockets", "pthreads", "POSIX file I/O", "handle based access control"]
    },
    {
      id: 10,
      title: "Minix Disk Explorer Console",
      description: "Engineered a Minix filesystem client that mounts disk images, parses superblock metadata, and unmounts cleanly. Supported directory traversal (plain and long listing), file type/permission decoding, and zone content dumps with ASCII filtering. Offered bonus hex dump of arbitrary files and a comprehensive help command for interactive disk inspection.",
      skills: ["C", "Linux syscalls", "inode/superblock parsing", "isprint()"]
    },
    {
      id: 11,
      title: "Object Recognition System using AI",
      description: "Developed a computer vision system enabling users to identify and locate objects in images or videos. Implemented a user-friendly interface for seamless interaction. Trained the model to predict outputs, enhancing object recognition accuracy with practical applications in diverse visual contexts.",
      skills: ["Python3.7", "TensorFlow", "NumPy", "OpenCV", "Keras", "Image AI"]
    },
    {
      id: 12,
      title: "RPC Based Distributed Computing Replicator",
      description: "Created an RPC driven replicator that distributes hyper_link simulation tasks across up to five servers. Monitored per server CPU load and applied threshold based job kill/reschedule policies to balance workload. Provided an interactive client interface for job submission, status reporting, and manual server control commands.",
      skills: ["C", "Sun RPC (rpcgen)", "fork()", "/proc/loadavg parsing", "pthreads"]
    },
    {
      id: 13,
      title: "UNIX-like Custom Shell",
      description: "Built a lightweight custom shell supporting built-in commands (cd, path, quit) and dynamic search path management. Implemented input/output redirection and external command execution via fork and execv, with clear error handling for missing commands and arguments. Enhanced user interaction through modular command parsing and a Makefile driven build process.",
      skills: ["C", "Makefile", "Linux system calls", "fork", "execv"]
    },
    {
      id: 14,
      title: "User Space Threading Library with Read-Write Lock",
      description: "Implemented sthreads, a user-space threading library featuring a custom read-write lock that allows multiple concurrent readers and exclusive writers. Managed fairness and ordering with separate reader/writer queues, thread suspension via semaphores, and try-lock support. Improved multithreaded performance by avoiding busy waiting and minimizing lock contention.",
      skills: ["C", "pthreads", "POSIX semaphores", "atomic test and set operations"]
    },
    {
      id: 15,
      title: "Virtual Memory Address Translation Simulator",
      description: "Developed a two-phase address translation tool: part 1 with a static page table and part 2 with dynamic frame allocation and LRU replacement. Read virtual addresses from binary input, mapped them to physical frames, and output results with MD5 checksum validation. Provided page fault counting and optimized memory management insights for system-level simulation.",
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
          textAlign: 'left'
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
                        textAlign: 'left',
                      }}>
                        {project.title}
                      </h3>
                      <a 
                        href={`https://github.com/mishradinky/project-${project.id}`}
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
