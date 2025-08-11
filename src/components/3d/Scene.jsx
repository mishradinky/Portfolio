import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  Stars, 
  Float, 
  Environment, 
  PerspectiveCamera,
  OrbitControls,
  useTexture,
  MeshDistortMaterial,
  Sphere,
  Box,
  Torus,
  Ring
} from '@react-three/drei';
import { 
  EffectComposer, 
  Bloom, 
  ChromaticAberration,
  Vignette,
  DepthOfField
} from '@react-three/postprocessing';
import * as THREE from 'three';

// Animated geometric shapes for professional look
function FloatingGeometry({ position, color, scale = 1, speed = 1 }) {
  const meshRef = useRef();
  const [r, g, b] = color;
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed) * 0.3;
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * speed * 0.5) * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color={`rgb(${r}, ${g}, ${b})`}
          emissive={`rgb(${r * 0.5}, ${g * 0.5}, ${b * 0.5})`}
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
          wireframe
        />
      </mesh>
    </Float>
  );
}

// Professional particle field
function ParticleField() {
  const points = useRef();
  const particlesCount = 3000;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i += 3) {
      const radius = 50;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      pos[i] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.02;
      points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#00d4ff"
        sizeAttenuation
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Data visualization grid
function DataGrid() {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.PI * -0.25;
      meshRef.current.position.y = -5 + Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -5, 0]}>
      <planeGeometry args={[50, 50, 30, 30]} />
      <meshStandardMaterial
        color="#001122"
        emissive="#00ffcc"
        emissiveIntensity={0.1}
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

// Glowing orbs
function GlowingOrb({ position, color, size = 1 }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      meshRef.current.scale.setScalar(scale * size);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={2}
        toneMapped={false}
      />
    </mesh>
  );
}

// Neural network visualization
function NeuralNetwork() {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  const nodes = useMemo(() => {
    const nodeArray = [];
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const radius = 10;
      nodeArray.push([
        Math.cos(angle) * radius,
        Math.sin(angle) * radius * 0.5,
        Math.sin(angle) * radius
      ]);
    }
    return nodeArray;
  }, []);

  return (
    <group ref={groupRef} position={[0, 0, -20]}>
      {nodes.map((pos, i) => (
        <GlowingOrb
          key={i}
          position={pos}
          color="#00ffff"
          size={0.3}
        />
      ))}
      {nodes.map((start, i) => 
        nodes.map((end, j) => {
          if (i >= j) return null;
          return (
            <line key={`${i}-${j}`}>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  count={2}
                  array={new Float32Array([...start, ...end])}
                  itemSize={3}
                />
              </bufferGeometry>
              <lineBasicMaterial color="#00ffff" transparent opacity={0.2} />
            </line>
          );
        })
      )}
    </group>
  );
}

// Main scene content
function SceneContent() {
  const { camera } = useThree();
  
  // Auto-rotate camera
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    camera.position.x = Math.sin(time * 0.1) * 30;
    camera.position.z = Math.cos(time * 0.1) * 30;
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
      <pointLight position={[0, 20, 0]} intensity={0.8} color="#ffffff" />
      
      {/* Background elements */}
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={1}
      />
      
      {/* Professional geometric elements */}
      <FloatingGeometry position={[15, 5, -10]} color={[0, 212, 255]} scale={2} speed={0.5} />
      <FloatingGeometry position={[-15, -5, -10]} color={[255, 0, 255]} scale={1.5} speed={0.7} />
      <FloatingGeometry position={[10, -8, 5]} color={[0, 255, 204]} scale={1.8} speed={0.6} />
      <FloatingGeometry position={[-10, 8, 5]} color={[100, 150, 255]} scale={1.2} speed={0.8} />
      
      {/* Data visualization elements */}
      <DataGrid />
      <ParticleField />
      <NeuralNetwork />
      
      {/* Core glowing sphere */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[3, 64, 64]} />
        <MeshDistortMaterial
          color="#001133"
          emissive="#00d4ff"
          emissiveIntensity={0.5}
          roughness={0.1}
          metalness={0.9}
          distort={0.3}
          speed={2}
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Rotating rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[8, 0.1, 16, 100]} />
        <meshStandardMaterial
          color="#00ffcc"
          emissive="#00ffcc"
          emissiveIntensity={0.5}
          transparent
          opacity={0.5}
        />
      </mesh>
      
      <mesh rotation={[0, Math.PI / 2, Math.PI / 4]}>
        <torusGeometry args={[12, 0.1, 16, 100]} />
        <meshStandardMaterial
          color="#ff00ff"
          emissive="#ff00ff"
          emissiveIntensity={0.5}
          transparent
          opacity={0.3}
        />
      </mesh>
    </>
  );
}

// Main Scene component
export default function Scene() {
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
          position: [0, 0, 30], 
          fov: 60,
          near: 0.1,
          far: 1000
        }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <Suspense fallback={null}>
          <SceneContent />
          
          {/* Post-processing effects */}
          <EffectComposer>
            <Bloom 
              intensity={0.5}
              luminanceThreshold={0.1}
              luminanceSmoothing={0.9}
              radius={0.8}
            />
            <ChromaticAberration
              offset={[0.0005, 0.0005]}
              radialModulation={false}
            />
            <Vignette 
              darkness={0.4}
              offset={0.3}
            />
            <DepthOfField
              focusDistance={0.01}
              focalLength={0.05}
              bokehScale={2}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
      
      {/* Gradient overlay for depth */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at center, transparent 0%, rgba(0,5,17,0.2) 70%, rgba(0,5,17,0.4) 100%)',
        pointerEvents: 'none'
      }} />
    </div>
  );
}
