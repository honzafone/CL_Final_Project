import React, { useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { AnimationMixer } from 'three';
import deathStarModel from '../assets/3D/extras/death_star.glb';

function DeathStar() {
    const { scene, animations } = useGLTF(deathStarModel);
    const mixer = new AnimationMixer(scene);

    useEffect(() => {
        console.log("Animations: ", animations);
    }, [animations]);

    useFrame(() => {
        scene.rotation.y += 0.001;  // rotation speed
    });

    return (
        <group>
            <primitive object={scene} scale={0.1} />
        </group>
    );
}

export default function DeathStar1() {
    return (
        <div style={{ position: 'relative', height: '100vh' }}>
        <Canvas style={{ height: '100vh' }}>
            <ambientLight intensity={0.1} />
            <directionalLight position={[2, 1, 1]} intensity={3} />
            <DeathStar />
            <OrbitControls />
        </Canvas>
        <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '10px',
            borderRadius: '8px',
            maxWidth: '250px'
        }}>
           <h3 className='text-2xl font-bold mb-2 text-customSecondary'>Death Star</h3>
<p className='text-md text-customSecondary'>
    The Death Star is a massive space station and weapon created by the Galactic Empire in the Star Wars universe.
    It is capable of destroying entire planets with a single blast from its superlaser and was intended to serve
    as a symbol of the Empire's unlimited power.
</p>
<p className='text-md text-customSecondary mt-2'>
    The first Death Star was destroyed by the rebels in the Battle of Yavin IV, while the second one met its end
    during the Battle of Endor.
</p>

        </div>
    </div>
    );
}
