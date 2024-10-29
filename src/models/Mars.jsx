import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import marsModel from '../assets/3D/mars.glb';

function Mars() {
    const { scene } = useGLTF(marsModel);

    return (
        <group>
            <primitive object={scene} scale={0.13} position={[0, 0, 0]} />
        </group>
    );
}

export default function MarsModel() {
    return (
        <Canvas style={{ height: '100vh' }}>
            <ambientLight intensity={0.2} />
            <directionalLight position={[1, 1, 1]} intensity={3} />
            <Mars />
            <OrbitControls />
        </Canvas>
    );
}