import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three'; // Nezapomeňte importovat THREE
import sunModel from '../assets/3D/sun.glb';

function Sun() {
  const { scene } = useGLTF(sunModel);

  // Použij useFrame k otáčení modelu
  useFrame(() => {
    scene.rotation.y += 0.001; // Pomalá rotace kolem osy Y
  });

  // Nastavení materiálu pro model Slunce
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.color.set('#FFD700'); // Zlatá barva
      child.material.emissive = new THREE.Color(1, 0.85, 0); // Oranžová emise
      child.material.emissiveIntensity = 1.5; // Intenzita emise
      child.material.needsUpdate = true; // Zajistěte, že materiál je aktualizován
    }
  });

  return (
    <group>
      <primitive object={scene} scale={0.1} position={[0, 0, 0]} />
      {/* Přidej světlo pro halo efekt */}
      <pointLight position={[0, 0, 0]} intensity={2} color={new THREE.Color(1, 0.5, 0)} />
      {/* Halo efekt pomocí Sphere */}
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
      <ambientLight intensity={1} /> {/* Slabé ambientní světlo */}
      {/* <directionalLight position={[5, 5, 5]} intensity={0} /> */}
      <directionalLight position={[0, 0, 0]} intensity={2} color="yellow" />
      <Sun />
      <OrbitControls />
    </Canvas>
  );
}
