import React, { useEffect } from 'react'; 
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three'; // Import THREE for loop settings
import solar_systemModel from '../assets/3D/solar_system.glb';

function SolarSystem() {
  const { scene, animations } = useGLTF(solar_systemModel);
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    console.log('Scene:', scene); // Logs the entire scene content
    console.log('Available animations:', animations); // Logs all animations
    console.log('Actions:', actions); // Logs actions for each animation, if available

    // Plays the animation and sets it to loop infinitely
    if (actions.DefaultTake) {
      // actions.DefaultTake.setLoop(THREE.LoopRepeat); // Sets to infinite loop
      actions.DefaultTake.play();
      actions.DefaultTake.timeScale = 0.05; // Sets animation speed
    }

    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.roughness = 0.8;
        child.material.metalness = 0.0;
        child.material.color.set('#ffffff');
      }
    });
  }, [scene, actions]);

  return (
    <group>
      <primitive object={scene} scale={0.4} rotation={[80, 0, 0]} position={[0, 0, 0]} /> 
    </group>
  );
}

export default function SolarSystemModel() {
  return (
    <Canvas style={{ height: '100vh' }}>
      <ambientLight intensity={2.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <SolarSystem />
      <OrbitControls />
    </Canvas>
  );
}
