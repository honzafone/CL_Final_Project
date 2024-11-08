import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import millenniumFalconModel from '../assets/3D/extras/millennium_falcon.glb';

function MillenniumFalcon() {
    const { scene, animations } = useGLTF(millenniumFalconModel);
    const { actions } = useAnimations(animations, scene);
    const modelRef = useRef();

    useEffect(() => {
        // play first animation from the list
        console.log("Available animations for Millennium Falcon:", animations.map(anim => anim.name));

        // play first animation from the list
        if (animations.length > 0) {
            const firstAnimationName = animations[0].name;
            actions[firstAnimationName]?.play();
        }
    }, [animations, actions]);

    // up/down movement
    useFrame((state) => {
        if (modelRef.current) {
            const time = state.clock.getElapsedTime();
            modelRef.current.position.y = Math.sin(time) * 0.2; // set oscilation
        }
    });

    return (
        <group ref={modelRef}>
            <primitive object={scene} scale={0.3} position={[0, 0, 0]} />
        </group>
    );
}

export default function MillenniumFalconModel() {
    return (
        <div style={{ position: 'relative', height: '100vh' }}>
            <Canvas style={{ height: '100%' }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1.5} />
                <MillenniumFalcon />
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
                <h3 className='text-2xl font-bold mb-2 text-customSecondary'>Millennium Falcon</h3>
                <p className='text-md text-customSecondary'>
                    The Millennium Falcon is a highly modified YT-1300 Corellian light freighter, known for its speed, resilience, and role in key battles throughout the Star Wars saga.
                </p>
            </div>
        </div>
    );
}
