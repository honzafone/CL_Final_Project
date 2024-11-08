import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import tieHunterModel from '../assets/3D/extras/tiehu_hunter.glb';

function TIEHunter() {
    const { scene, animations } = useGLTF(tieHunterModel);
    const { actions } = useAnimations(animations, scene);

    useEffect(() => {
        // Log available animation names in the console
        console.log("Available animations for TIE Hunter:", animations.map(anim => anim.name));

        // Play the first available animation, if any
        if (animations.length > 0) {
            const firstAnimationName = animations[0].name;
            actions[firstAnimationName]?.play();
        }

        // Set metallic appearance
        scene.traverse((child) => {
            if (child.isMesh) {
                child.material.metalness = 0.1;  // Nearly full metallic look
            }
        });
    }, [animations, actions, scene]);

    return (
        <group>
            <primitive object={scene} scale={0.5} position={[0, 0, 0]} />
        </group>
    );
}

export default function TIEHunterModel() {
    return (
        <div style={{ position: 'relative', height: '100vh' }}>
            <Canvas style={{ height: '100%' }}>
                <ambientLight intensity={0.1} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <TIEHunter />
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
                <h3 className='text-2xl font-bold mb-2 text-customSecondary'>TIE Hunter</h3>
                <p className='text-md text-customSecondary'>
                    The TIE Hunter is a rare starfighter used by the Galactic Empire in the Star Wars universe. Combining speed with advanced weaponry, it is known for its agility and effectiveness in space combat.
                </p>
            </div>
        </div>
    );
}
