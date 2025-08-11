import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

// Fallback component for when model fails to load
function Fallback() {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#4a90e2" />
    </mesh>
  )
}

// Loading fallback component for Three.js
function Loader() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#00f5ff" />
    </mesh>
  )
}

// Loading component for outside Canvas
function LoadingOverlay() {
  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'white',
      fontSize: '1.5rem',
      zIndex: 1000,
      textAlign: 'center'
    }}>
      <div style={{
        background: 'rgba(0, 0, 0, 0.8)',
        padding: '2rem',
        borderRadius: '10px',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          border: '4px solid rgba(0, 245, 255, 0.3)',
          borderTop: '4px solid #00f5ff',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '0 auto 1rem'
        }}></div>
        Loading 3D Model...
        <div style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '0.5rem' }}>
          Please wait while we prepare your immersive experience
        </div>
      </div>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

// Main 360-degree model component
export function MainModel(props) {
  const { scene } = useGLTF(import.meta.env.BASE_URL + './models/main.glb')
  
  if (!scene) {
    console.error('Main GLB model failed to load properly')
    return <Fallback />
  }

  return <primitive object={scene.clone()} {...props} />
}

// Main Scene component with Canvas - Mont-Fort style 360° rotation
export default function Scene({ scrollProgress = 0 }) {
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [])

  // Final coordinates from user's Leva panel
  const modelPosX = 4.4
  const modelPosY = -4.3
  const modelPosZ = 6.5
  const modelScaleX = 4.0
  const modelScaleY = 4.0
  const modelScaleZ = 4.0
  const modelRotX = 0.00
  const modelRotY = 0.00
  const modelRotZ = 0.00
  const cameraPosX = 0.0
  const cameraPosY = 0.0
  const cameraPosZ = 3.0
  const cameraFOV = 75
  const ambientIntensity = 0.4
  const directionalIntensity = 0.9
  const pointIntensity = 0.5
  const spotIntensity = 1.0
  // Create cinematic color transition based on scroll progress
  const getCinematicBackground = (progress) => {
    // Smooth color transitions across the entire scroll range
    const hue = 200 + progress * 160; // Blue to purple transition
    const saturation = 60 + progress * 40; // Increase saturation
    const lightness = 20 + progress * 30; // Subtle lightness change
    
    return {
      primary: `hsla(${hue}, ${saturation}%, ${lightness}%, 0.8)`,
      secondary: `hsla(${hue + 30}, ${saturation - 20}%, ${lightness + 10}%, 0.6)`,
      accent: `hsla(${hue - 30}, ${saturation + 10}%, ${lightness - 5}%, 0.4)`
    };
  };

  const cinematicColors = getCinematicBackground(scrollProgress);
  
  // Create multiple layered gradients for depth effect
  const createCinematicGradient = () => {
    return `
      radial-gradient(ellipse at 30% 20%, ${cinematicColors.accent} 0%, transparent 50%),
      radial-gradient(ellipse at 70% 80%, ${cinematicColors.secondary} 0%, transparent 60%),
      linear-gradient(180deg, 
        ${cinematicColors.primary} 0%, 
        ${cinematicColors.secondary} 40%, 
        ${cinematicColors.accent} 100%
      )
    `;
  };

  return (
    <>
      {isLoading && <LoadingOverlay />}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
        background: createCinematicGradient(),
        transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
      {/* Additional atmospheric layers */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `radial-gradient(circle at ${50 + scrollProgress * 50}% ${30 + scrollProgress * 40}%, 
          rgba(255, 255, 255, ${0.15 - scrollProgress * 0.1}) 0%, 
          transparent 40%)`,
        transition: 'all 1.5s ease-out'
      }} />
      
      {/* Cinematic vignette effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `radial-gradient(ellipse at center, 
          transparent 20%, 
          rgba(0, 0, 0, ${scrollProgress * 0.4}) 100%)`,
        transition: 'all 1.2s ease-out'
      }} />
      
      <Canvas
        camera={{ 
          position: [cameraPosX, cameraPosY, cameraPosZ],
          fov: cameraFOV
        }}
        onError={(error) => console.error('Canvas error:', error)}
      >
        <Suspense fallback={<Loader />}>
          {/* Dynamic lighting that changes with scroll */}
          <ambientLight intensity={ambientIntensity + scrollProgress * 0.4} color="#ffffff" />
          <directionalLight 
            position={[
              15 * Math.cos(scrollProgress * Math.PI * 2), 
              8, 
              15 * Math.sin(scrollProgress * Math.PI * 2)
            ]} 
            intensity={directionalIntensity + scrollProgress * 0.5} 
            color="#ffffff"
            castShadow
          />
          <pointLight 
            position={[
              -8 * Math.cos(scrollProgress * Math.PI), 
              4, 
              8 * Math.sin(scrollProgress * Math.PI)
            ]} 
            intensity={pointIntensity} 
            color={`hsl(${200 + scrollProgress * 160}, 70%, 70%)`}
          />
          <spotLight
            position={[0, 12, 0]}
            angle={Math.PI / 2.5}
            penumbra={0.4}
            intensity={spotIntensity + scrollProgress * 0.6}
            color="#ffffff"
            target-position={[0, 0, 0]}
          />

          {/* Main 360° rotating model - Fully controllable with Leva */}
          <MainModel
            position={[modelPosX, modelPosY, modelPosZ]}
            scale={[modelScaleX, modelScaleY, modelScaleZ]}
            rotation={[
              modelRotX, 
              modelRotY + (scrollProgress * Math.PI * 2), // Keep scroll rotation + manual rotation
              modelRotZ
            ]}
          />
        </Suspense>
      </Canvas>
      </div>
    </>
  )
}

// Preload the main model
useGLTF.preload(import.meta.env.BASE_URL +'./models/main.glb')
