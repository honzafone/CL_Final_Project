import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import mercuryModel from '../assets/3D/mercury.glb';

function Mercury() {
    const { scene } = useGLTF(mercuryModel);

    return (
        <group>
            <primitive object={scene} scale={0.125} position={[0, 0, 0]} />
        </group>
    );
}

export default function MercuryModel() {
    return (
        <Canvas style={{ height: '100vh' }}>
            <ambientLight intensity={0.2} /> {/* Slabé ambientní světlo */}
            <directionalLight position={[1, 1, 1]} intensity={3} />
            <Mercury />
            <OrbitControls />
        </Canvas>
    );
}