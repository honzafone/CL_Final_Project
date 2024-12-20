import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import neptuneModel from '../assets/3D/neptune.glb';

function Neptune() {
    const { scene } = useGLTF(neptuneModel);

    return (
        <group>
            <primitive object={scene} scale={0.0085} position={[0, 0, 0]} />
        </group>
    );
}

export default function NeptuneModel() {
    return (
        <Canvas style={{ height: '100vh' }}>
            <ambientLight intensity={0.2} />
            <directionalLight position={[1, 1, 1]} intensity={1.9} />
            <Neptune />
            <OrbitControls />
        </Canvas>
    );
}  