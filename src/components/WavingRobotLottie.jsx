import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import robotAnimation from '../lottie/robot.json';

const WavingRobotLottie = ({ width = 350, height = 350 }) => {
  const [isWaving, setIsWaving] = useState(false);

  // Trigger wave animation periodically
  useEffect(() => {
    const waveInterval = setInterval(() => {
      setIsWaving(true);
      setTimeout(() => setIsWaving(false), 1500);
    }, 4000);

    return () => clearInterval(waveInterval);
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      cursor: 'pointer',
      transform: isWaving ? 'translateY(-5px)' : 'translateY(0)',
      transition: 'transform 0.3s ease'
    }}>
      <Lottie 
        animationData={robotAnimation}
        loop={true}
        style={{
          width: width,
          height: height,
          filter: 'drop-shadow(0 0 15px rgba(0, 245, 255, 0.4))',
          transform: isWaving ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={() => setIsWaving(true)}
        onMouseLeave={() => setIsWaving(false)}
      />
    </div>
  );
};

export default WavingRobotLottie;
