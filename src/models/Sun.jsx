import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three'; 
import sunModel from '../assets/3D/sun.glb';

function Sun() {
  const { scene } = useGLTF(sunModel);

 
  useFrame(() => {
    scene.rotation.y += 0.001; // rotate y
  });

  // material settings
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.color.set('#FFD700'); // Gold
      child.material.emissive = new THREE.Color(1, 0.85, 0); // Orange
      child.material.emissiveIntensity = 1.5; //  emissive intensity
      child.material.needsUpdate = true; // material update
    }
  });

  return (
    <group>
      <primitive object={scene} scale={0.1} position={[0, 0, 0]} />
      {/* halo effect */}
      <pointLight position={[0, 0, 0]} intensity={2} color={new THREE.Color(1, 0.5, 0)} />
      {/* Halo efekt  Sphere */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshBasicMaterial color={0xffd700} opacity={0.3} transparent={true} />
      </mesh>
    </group>
  );
}

export default function SunModel() {
  return (
    <Canvas style={{ height: '100vh' }}>
      <ambientLight intensity={1} /> {/*  ambient light */}
      {/* <directionalLight position={[5, 5, 5]} intensity={0} /> */}
      <directionalLight position={[0, 0, 0]} intensity={2} color="yellow" />
      <Sun />
      <OrbitControls />
    </Canvas>
  );
}
