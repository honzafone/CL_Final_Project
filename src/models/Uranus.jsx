import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import uranusModel from '../assets/3D/uranus.glb';

function Uranus() {
    const { scene } = useGLTF(uranusModel);

    return (
        <group>
            <primitive object={scene} scale={0.0028} position={[0, 0, 0]} />
        </group>
    );
}

export default function UranusModel() {
    return (
        <Canvas style={{ height: '100vh' }}>
            <ambientLight intensity={0.2} />
            <directionalLight position={[1, 1, 1]} intensity={0.6} />
            <Uranus />
            <OrbitControls />
        </Canvas>
    );
}