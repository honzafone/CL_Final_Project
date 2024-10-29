import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import venusModel from '../assets/3D/venus.glb';

function Venus() {
    const { scene } = useGLTF(venusModel);

    return (
        <group>
            <primitive object={scene} scale={0.125} position={[0, 0, 0]} />
        </group>
    );
}

export default function VenusModel() {
    return (
        <Canvas style={{ height: '100vh' }}>
            <ambientLight intensity={0.2} />
            <directionalLight position={[1, 1, 1]} intensity={3} />
            <Venus />
            <OrbitControls />
        </Canvas>
    );
}