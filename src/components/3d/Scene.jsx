import React, { useRef, useMemo, Suspense, useEffect } from 'react';
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
import { 
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Float,
  Sparkles,
  Cloud,
  Stars,
  useGLTF,
  Stage,
  ContactShadows,
  Preload,
  Html,
  MeshReflectorMaterial,
  useProgress,
  useAnimations,
  PresentationControls,
  Center
} from '@react-three/drei';
import { 
  EffectComposer, 
  Bloom, 
  ChromaticAberration,
  Vignette,
  DepthOfField,
  SSAO,
  HueSaturation,
  BrightnessContrast
} from '@react-three/postprocessing';
import * as THREE from 'three';
import { BlendFunction } from 'postprocessing';

// Loading component
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="w-32 h-32 rounded-full border-4 border-cyan-500/20 border-t-cyan-500 animate-spin mb-4" />
        <div className="text-cyan-400 font-mono text-lg">
          Loading 3D Experience
        </div>
        <div className="text-cyan-300 font-mono text-sm mt-2">
          {progress.toFixed(0)}%
        </div>
      </div>
    </Html>
  );
}

// Professional particle system around the model
function ParticleField() {
  const points = useRef();
  const particlesCount = 2000;
  
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    const col = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Create particles in a sphere around the scene
      const radius = 15 + Math.random() * 25;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      pos[i] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i + 2] = radius * Math.cos(phi);
      
      // Professional color scheme - cyan to purple gradient
      const mixValue = Math.random();
      col[i] = mixValue;
      col[i + 1] = 0.8 - mixValue * 0.5;
      col[i + 2] = 1;
    }
    return [pos, col];
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.02;
      points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.05;
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
        <bufferAttribute
          attach="attributes-color"
          count={particlesCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Floating light orbs for professional ambiance
function FloatingLights() {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <Float
          key={i}
          speed={1 + i * 0.2}
          rotationIntensity={0.5}
          floatIntensity={2}
          floatingRange={[-1, 1]}
        >
          <mesh position={[
            Math.sin(i * Math.PI * 0.4) * 10,
            Math.cos(i * Math.PI * 0.4) * 3,
            Math.sin(i * Math.PI * 0.4) * 10
          ]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial
              emissive={i % 2 === 0 ? '#00d4ff' : '#ff00ff'}
              emissiveIntensity={2}
              color={i % 2 === 0 ? '#00d4ff' : '#ff00ff'}
              toneMapped={false}
            />
          </mesh>
          <pointLight
            color={i % 2 === 0 ? '#00d4ff' : '#ff00ff'}
            intensity={0.5}
            distance={20}
          />
        </Float>
      ))}
    </>
  );
}

// Professional ground plane with reflection
function GroundPlane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
      <planeGeometry args={[100, 100]} />
      <MeshReflectorMaterial
        blur={[300, 30]}
        resolution={2048}
        mixBlur={1}
        mixStrength={80}
        roughness={1}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#001122"
        metalness={0.8}
        mirror={0.5}
      />
    </mesh>
  );
}

// Main 3D Model Component
function Model3D({ modelPath = '/models/main.glb' }) {
  const group = useRef();
  const { scene, animations } = useGLTF(modelPath);
  const { actions } = useAnimations(animations, group);
  
  // Auto-rotate the model
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  // Play animations if they exist
  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const firstAction = Object.values(actions)[0];
      firstAction?.play();
    }
  }, [actions]);

  return (
    <group ref={group}>
      <primitive 
        object={scene} 
        scale={1}
        position={[0, 0, 0]}
      />
    </group>
  );
}

// Enhanced scene with professional lighting
function SceneContent({ modelPath }) {
  const { camera } = useThree();
  
  return (
    <>
      {/* Professional Lighting Setup */}
      <ambientLight intensity={0.3} color="#ffffff" />
      
      {/* Key Light - Main illumination */}
      <directionalLight
        position={[5, 10, 5]}
        intensity={1}
        color="#ffffff"
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      
      {/* Fill Light - Soften shadows */}
      <directionalLight
        position={[-5, 5, -5]}
        intensity={0.5}
        color="#00d4ff"
      />
      
      {/* Rim Light - Edge highlighting */}
      <directionalLight
        position={[0, 5, -10]}
        intensity={0.8}
        color="#ff00ff"
      />
      
      {/* Accent Lights */}
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#00ffcc" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
      
      {/* Spot lights for dramatic effect */}
      <spotLight
        position={[0, 15, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        color="#00d4ff"
        castShadow
      />
      
      {/* Background Elements */}
      <Stars 
        radius={100} 
        depth={50} 
        count={3000} 
        factor={4} 
        saturation={0} 
        speed={0.5}
      />
      
      {/* Fog for depth */}
      <fog attach="fog" args={['#000511', 10, 100]} />
      
      {/* Professional particle system */}
      <ParticleField />
      
      {/* Floating light orbs */}
      <FloatingLights />
      
      {/* Sparkles for magic effect */}
      <Sparkles 
        count={100} 
        scale={40} 
        size={2} 
        speed={0.4} 
        color="#00d4ff"
      />
      
      {/* Ground with reflection */}
      <GroundPlane />
      
      {/* Main 3D Model with presentation controls */}
      <PresentationControls
        global
        rotation={[0, 0, 0]}
        polar={[-Math.PI / 4, Math.PI / 4]}
        azimuth={[-Math.PI / 4, Math.PI / 4]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Center>
          <Model3D modelPath={modelPath} />
        </Center>
      </PresentationControls>
      
      {/* Contact shadows for grounding */}
      <ContactShadows
        position={[0, -3, 0]}
        opacity={0.5}
        scale={20}
        blur={2}
        far={10}
        color="#000000"
      />
      
      {/* Orbit Controls for user interaction */}
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.5}
      />
    </>
  );
}

// Main Scene Component
export default function Scene({ modelPath = '/models/main.glb' }) {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000511] via-[#001122] to-[#000819]" />
      
      {/* Canvas with 3D scene */}
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ 
          position: [0, 5, 15], 
          fov: 60,
          near: 0.1,
          far: 1000
        }}
        gl={{ 
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2,
          powerPreference: "high-performance"
        }}
      >
        <Suspense fallback={<Loader />}>
          <SceneContent modelPath={modelPath} />
          
          {/* Environment for realistic lighting */}
          <Environment preset="night" />
          
          {/* Post-processing effects for professional look */}
          <EffectComposer multisampling={4}>
            <Bloom 
              intensity={1}
              luminanceThreshold={0.3}
              luminanceSmoothing={0.9}
              mipmapBlur
              radius={0.8}
            />
            <ChromaticAberration
              offset={[0.0005, 0.0005]}
              blendFunction={BlendFunction.NORMAL}
            />
            <Vignette 
              darkness={0.5}
              offset={0.3}
            />
            <SSAO
              samples={30}
              radius={5}
              intensity={30}
              luminanceInfluence={0.1}
              color="black"
            />
            <HueSaturation
              hue={0}
              saturation={0.1}
            />
            <BrightnessContrast
              brightness={0}
              contrast={0.1}
            />
            <DepthOfField
              focusDistance={0.01}
              focalLength={0.1}
              bokehScale={3}
            />
          </EffectComposer>
          
          <Preload all />
        </Suspense>
      </Canvas>
      
      {/* Overlay gradients for extra depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5" />
      </div>
    </div>
  );
}

// Preload the model
useGLTF.preload('/models/main.glb');
