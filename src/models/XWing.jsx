import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import xWingModel from '../assets/3D/extras/x_wing.glb';

function XWing() {
    const { scene, animations } = useGLTF(xWingModel);
    const { actions } = useAnimations(animations, scene);

    useEffect(() => {
        // Log available animation names in the console
        console.log("Available animations for X-Wing:", animations.map(anim => anim.name));

        // Play the first available animation, if any
        if (animations.length > 0) {
            const firstAnimationName = animations[0].name;
            actions[firstAnimationName]?.play();
        }
    }, [animations, actions]);

    return (
        <group>
            <primitive object={scene} scale={0.5} position={[0, 0, 0]} />
        </group>
    );
}

export default function XWingModel() {
    return (
        <div style={{ position: 'relative', height: '100vh' }}>
            <Canvas style={{ height: '100%' }}>
                <ambientLight intensity={1.5} />
                <directionalLight position={[5, 5, 5]} intensity={4} />
                <XWing />
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
                <h3 className='text-2xl font-bold mb-2 text-customSecondary'>X-Wing</h3>
                <p className='text-md text-customSecondary'>
                    The X-Wing is a versatile starfighter used by the Rebel Alliance in the Star Wars universe. Known for its agility and speed, it is equipped with laser cannons and proton torpedoes, making it a formidable opponent in space battles.
                </p>
            </div>
        </div>
    );
}
