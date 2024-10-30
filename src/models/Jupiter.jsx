import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import mercuryModel from '../assets/3D/jupiter.glb';

function Jupiter() {
    const { scene } = useGLTF(mercuryModel);

    return (
        <group>
            <primitive object={scene} scale={0.013} position={[0, 0, 0]} />
        </group>
    );
}

export default function JupiterModel() {
    return (
        <Canvas style={{ height: '100vh' }}>
            <ambientLight intensity={0.2} />
            <directionalLight position={[1, 1, 1]} intensity={1.2} />
            <Jupiter />
            <OrbitControls />
        </Canvas>
    );
}