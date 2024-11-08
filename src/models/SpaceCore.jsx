import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import SpaceCoreModel from '../assets/3D/space-core.glb';

function SpaceCore() {
    const { scene } = useGLTF(SpaceCoreModel);
    const spaceCoreRef = useRef();

    useFrame(() => {
        if (spaceCoreRef.current) {
            spaceCoreRef.current.position.x += 0.005; // move right
            spaceCoreRef.current.position.y = Math.sin(spaceCoreRef.current.position.x) * 0.5; // move up and down
            if (spaceCoreRef.current.position.x > 5) spaceCoreRef.current.position.x = -5; // Reset
        }
    });

    return (
        <group ref={spaceCoreRef}>
            <primitive object={scene} scale={0.0002} rotation ={[0, -90, 0]} position={[0, 0, 0]} />
        </group>
    );
}

export default function SpaceCoreCanvas() {
    return (
        <Canvas
            style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -5 }}
            camera={{ position: [0, 0, 5], zoom: 1 }}
        >
            <ambientLight intensity={0.2} /> {/* Ambient light */}
            <directionalLight position={[1, 1, 1]} intensity={3} />
            <SpaceCore />
        </Canvas>
    );
}
