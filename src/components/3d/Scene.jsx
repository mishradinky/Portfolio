import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  OrbitControls,
  useGLTF,
  Stars,
  Environment,
  ContactShadows,
  Html,
  useProgress
} from '@react-three/drei';
import * as THREE from 'three';

// Simple Loader Component
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{
        color: '#00d4ff',
        fontSize: '14px',
        fontFamily: 'monospace',
        textAlign: 'center'
      }}>
        Loading... {progress.toFixed(0)}%
      </div>
    </Html>
  );
}

// Model Component with error boundaries
function Model({ modelPath }) {
  const group = useRef();
  
  try {
    const { scene } = useGLTF(modelPath);
    
    // Auto-rotate
    useFrame((state) => {
      if (group.current) {
        group.current.rotation.y = state.clock.elapsedTime * 0.2;
      }
    });
    
    return (
      <group ref={group}>
        <primitive 
          object={scene} 
          scale={1}
          position={[0, 0, 0]}
        />
      </group>
    );
  } catch (error) {
    console.error('Error loading model:', error);
    return (
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>
    );
  }
}

// Main Scene Content
function SceneContent({ modelPath }) {
  return (
    <>
      {/* Basic Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1} 
        castShadow 
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00d4ff" />
      <pointLight position={[10, -10, 10]} intensity={0.5} color="#ff00ff" />
      
      {/* Simple Background */}
      <Stars 
        radius={100} 
        depth={50} 
        count={2000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={1}
      />
      
      {/* Ground Shadow */}
      <ContactShadows
        position={[0, -2, 0]}
        opacity={0.5}
        scale={10}
        blur={2}
        far={10}
      />
      
      {/* The 3D Model */}
      <Suspense fallback={<Loader />}>
        <Model modelPath={modelPath} />
      </Suspense>
      
      {/* Camera Controls */}
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.5}
        minDistance={5}
        maxDistance={20}
      />
      
      {/* Environment (optional - comment out if causing issues) */}
      <Environment preset="night" />
    </>
  );
}

// Main Scene Component
export default function Scene() {
  const modelPath = '/models/main.glb';
  
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: -1,
      background: 'linear-gradient(180deg, #000511 0%, #001122 50%, #000819 100%)'
    }}>
      <Canvas
        camera={{ 
          position: [0, 2, 10], 
          fov: 50
        }}
        gl={{ 
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1
        }}
        shadows
      >
        <SceneContent modelPath={modelPath} />
      </Canvas>
    </div>
  );
}

// Preload the model
useGLTF.preload('/models/main.glb');
