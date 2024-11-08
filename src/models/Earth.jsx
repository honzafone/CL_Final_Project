import React, { useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import earthModel from '../assets/3D/earth.glb';

function Earth() {
  const { scene, animations } = useGLTF(earthModel);
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions && actions['Clouds|CloudsAction']) {
      actions['Clouds|CloudsAction'].play();
      actions['Clouds|CloudsAction'].timeScale = 0.4;
    }

    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.roughness = 0.8;
        child.material.metalness = 0.0;
        child.material.color.set('#ffffff');
      }
    });
  }, [scene, actions]);

  // rotation of the planet
  useFrame(() => {
    scene.rotation.y -= 0.0001; // change of the rotation speed
  });

  return (
    <group>
      <primitive object={scene} scale={0.0017} position={[0, 0, 0]} />
    </group>
  );
}

export default function EarthModel() {
  return (
    <Canvas style={{ height: '100vh' }}>
      <ambientLight intensity={0.1} />
      <directionalLight position={[5, 5, 5]} intensity={3} />
      <Earth />
      <OrbitControls />
    </Canvas>
  );
}
