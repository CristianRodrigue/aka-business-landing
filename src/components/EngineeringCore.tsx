"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial, PerspectiveCamera, Stars, Text, Environment } from '@react-three/drei';
import * as THREE from 'three';

function Monolith() {
  const mesh = useRef<THREE.Mesh>(null!);
  const glowMesh = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Rotación sutil y autoritaria
    mesh.current.rotation.y = time * 0.15;
    mesh.current.rotation.x = Math.sin(time * 0.2) * 0.1;
    
    // Reacción al mouse (suave)
    const targetX = state.mouse.x * 0.5;
    const targetY = state.mouse.y * 0.5;
    mesh.current.rotation.y += (targetX - mesh.current.rotation.y) * 0.05;
    mesh.current.rotation.x += (-targetY - mesh.current.rotation.x) * 0.05;

    // Pulso del aura
    const pulse = 1.0 + Math.sin(time * 2) * 0.05;
    glowMesh.current.scale.set(pulse, pulse, pulse);
  });

  return (
    <group>
      {/* El Monolito Central */}
      <mesh ref={mesh} castShadow>
        <boxGeometry args={[2.2, 2.2, 2.2]} />
        <meshStandardMaterial 
          color="#050505" 
          roughness={0.1} 
          metalness={0.9} 
          emissive="#00f0ff"
          emissiveIntensity={0.1}
        />
        
        {/* Bordes de Energía / Alambre */}
        <lineSegments>
          <edgesGeometry args={[new THREE.BoxGeometry(2.22, 2.22, 2.22)]} />
          <lineBasicMaterial color="#00f0ff" linewidth={2} transparent opacity={0.6} />
        </lineSegments>
      </mesh>

      {/* Aura de Fulgor (Glow) */}
      <mesh ref={glowMesh}>
        <boxGeometry args={[2.4, 2.4, 2.4]} />
        <meshBasicMaterial 
          color="#00f0ff" 
          transparent 
          opacity={0.05} 
          side={THREE.BackSide} 
        />
      </mesh>

      {/* Núcleo Distorsionado Interno (Efecto de Energía) */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh scale={1.1}>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <MeshDistortMaterial
            color="#00f0ff"
            speed={4}
            distort={0.3}
            radius={1}
            transparent
            opacity={0.2}
          />
        </mesh>
      </Float>
    </group>
  );
}

function DataParticles({ count = 200 }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        p[i * 3] = (Math.random() - 0.5) * 15;
        p[i * 3 + 1] = (Math.random() - 0.5) * 15;
        p[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return p;
  }, [count]);

  const particlesRef = useRef<THREE.Points>(null!);

  useFrame((state) => {
    particlesRef.current.rotation.y += 0.001;
    particlesRef.current.rotation.x += 0.0005;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[points, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#00f0ff"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

export default function EngineeringCore() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#000' }}>
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={40} />
        
        {/* Iluminación Industrial */}
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f0ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff4b00" />
        <spotLight 
          position={[0, 5, 0]} 
          angle={0.3} 
          penumbra={1} 
          intensity={2} 
          castShadow 
        />

        {/* Elementos Escenográficos */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <Monolith />
        <DataParticles count={500} />

        {/* Entorno Quirúrgico */}
        <Environment preset="city" />
        
        <fog attach="fog" args={['#000', 5, 15]} />
      </Canvas>
    </div>
  );
}
