import React, { useState, useEffect } from 'react';

const CornerScroller = ({ scrollContainerRef }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef?.current;
    if (!container) return;

    const handleScroll = () => {
      const maxScroll = container.scrollHeight - container.clientHeight;
      const currentScroll = container.scrollTop;
      const progress = maxScroll > 0 ? currentScroll / maxScroll : 0;
      
      setScrollProgress(progress);
      setIsVisible(currentScroll > 100);
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => container.removeEventListener('scroll', handleScroll);
  }, [scrollContainerRef]);

  const scrollToTop = () => {
    const container = scrollContainerRef?.current;
    if (container) {
      container.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const circumference = 2 * Math.PI * 20;

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0.8)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
      onClick={scrollToTop}
    >
      <div style={{
        position: 'relative',
        width: '60px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.1), rgba(0, 245, 255, 0.05))',
        borderRadius: '50%',
        backdropFilter: 'blur(15px)',
        border: '1px solid rgba(0, 245, 255, 0.3)',
        boxShadow: `
          0 0 20px rgba(0, 245, 255, 0.2),
          inset 0 0 20px rgba(0, 245, 255, 0.1),
          0 8px 32px rgba(0, 0, 0, 0.3)
        `,
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.boxShadow = `
          0 0 30px rgba(0, 245, 255, 0.4),
          inset 0 0 30px rgba(0, 245, 255, 0.2),
          0 12px 40px rgba(0, 0, 0, 0.4)
        `;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = `
          0 0 20px rgba(0, 245, 255, 0.2),
          inset 0 0 20px rgba(0, 245, 255, 0.1),
          0 8px 32px rgba(0, 0, 0, 0.3)
        `;
      }}
      >
        {/* Outer Progress Ring */}
        <svg 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            transform: 'rotate(-90deg)',
            filter: 'drop-shadow(0 0 8px rgba(0, 245, 255, 0.5))'
          }}
          viewBox="0 0 60 60"
        >
          <circle
            cx="30"
            cy="30"
            r="20"
            fill="none"
            stroke="rgba(0, 245, 255, 0.2)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle
            cx="30"
            cy="30"
            r="20"
            fill="none"
            stroke="#00f5ff"
            strokeWidth="2"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - scrollProgress)}
            strokeLinecap="round"
            style={{
              transition: 'stroke-dashoffset 0.1s ease-out',
              filter: 'drop-shadow(0 0 4px #00f5ff)'
            }}
          />
        </svg>

        {/* Inner Content - 3D Style */}
        <div style={{
          width: '30px',
          height: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.2), rgba(0, 245, 255, 0.1))',
          borderRadius: '50%',
          border: '1px solid rgba(0, 245, 255, 0.4)',
          boxShadow: 'inset 0 0 10px rgba(0, 245, 255, 0.3)'
        }}>
          <div style={{
            width: '12px',
            height: '12px',
            background: '#00f5ff',
            borderRadius: '50%',
            boxShadow: '0 0 10px #00f5ff, inset 0 0 5px rgba(255, 255, 255, 0.5)',
            animation: 'pulse 2s ease-in-out infinite'
          }} />
        </div>

        {/* Glowing Effect */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 245, 255, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
          animation: 'rotate 10s linear infinite'
        }} />
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1);
          }
        }
        
        @keyframes rotate {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default CornerScroller;
