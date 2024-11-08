import React, { useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { AnimationMixer } from 'three';
import blackHoleModel from '../assets/3D/extras/blackhole.glb';

function BlackHole() {
    const { scene, animations } = useGLTF(blackHoleModel);
    const mixer = new AnimationMixer(scene);

    useEffect(() => {
        console.log("Animations: ", animations);
    }, [animations]);

    return (
        <group>
            <primitive object={scene} scale={0.01} />
        </group>
    )
}

export default function BlackHole1() {
    return (
        <Canvas style={{ height: '100vh', backgroundColor: 'red' }}>
            <ambientLight intensity={0.2} />
            <directionalLight position={[2, 1, 1]} intensity={3} />
            <BlackHole />
            <OrbitControls />
        </Canvas>
    )
}