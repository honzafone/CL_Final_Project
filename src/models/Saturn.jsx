import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import saturnModel from '../assets/3D/saturn.glb';

function Saturn() {
    const { scene } = useGLTF(saturnModel);

    return (
        <group>
            <primitive object={scene} scale={0.15} position={[0, 0, 0]} />
        </group>
    );
}

export default function SaturnModel() {
    return (
        <Canvas style={{ height: '100vh' }}>
            <ambientLight intensity={0.2} />
            <directionalLight position={[1, 1, 1]} intensity={1.5} />
            <Saturn />
            <OrbitControls />
        </Canvas>
    );
}