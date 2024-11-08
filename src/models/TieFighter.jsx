import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import tieFighterModel from '../assets/3D/extras/tie_fighter.glb';

function TIEFighter() {
    const { scene, animations } = useGLTF(tieFighterModel);
    const { actions } = useAnimations(animations, scene);
    const modelRef = useRef();

    useEffect(() => {
        // Log available animations in the console
        console.log("Available animations for TIE Fighter:", animations.map(anim => anim.name));

        // Play the first available animation, if any
        if (animations.length > 0) {
            const firstAnimationName = animations[0].name;
            actions[firstAnimationName]?.play();
        }
    }, [animations, actions]);

    // Animate a slight up and down movement for a hovering effect
    useFrame((state) => {
        if (modelRef.current) {
            const time = state.clock.getElapsedTime();
            modelRef.current.position.y = Math.sin(time) * 0.2; // Adjusts oscillation value
        }
    });

    return (
        <group ref={modelRef}>
            <primitive object={scene} scale={0.004} position={[0, 0, 0]} />
        </group>
    );
}

export default function TIEFighterModel() {
    return (
        <div style={{ position: 'relative', height: '100vh' }}>
            <Canvas style={{ height: '100%' }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={2.5} />
                <TIEFighter />
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
                <h3 className='text-2xl font-bold mb-2 text-customSecondary'>TIE Fighter</h3>
                <p className='text-md text-customSecondary'>
                    The TIE Fighter is a versatile and agile fighter used by the Galactic Empire in the Star Wars universe. Known for its speed and distinctive design, it strikes fear into opponents with its menacing sound and agility.
                </p>
            </div>
        </div>
    );
}
