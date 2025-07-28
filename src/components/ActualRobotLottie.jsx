import React from 'react';
import Lottie from 'lottie-react';
import robotAnimation from '../lottie/robot.json';

const ActualRobotLottie = ({ width = 350, height = 350 }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%'
    }}>
      <Lottie 
        animationData={robotAnimation}
        loop={true}
        style={{
          width: width,
          height: height,
          filter: 'drop-shadow(0 0 15px rgba(0, 245, 255, 0.4))'
        }}
      />
    </div>
  );
};

export default ActualRobotLottie;
