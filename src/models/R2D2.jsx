import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import r2d2Model from '../assets/3D/extras/r2d2.glb';

function R2D2() {
    const { scene, animations } = useGLTF(r2d2Model);
    const { actions } = useAnimations(animations, scene);

    useEffect(() => {
        // play first animation from the list
        console.log("Available animations for R2-D2:", animations.map(anim => anim.name));

        // play first animation from the list
        if (animations.length > 0) {
            const firstAnimationName = animations[0].name;
            actions[firstAnimationName]?.play();
        }
    }, [animations, actions]);

    return (
        <group>
            <primitive object={scene} scale={3} position={[0, -2, 0]} />
        </group>
    );
}

export default function R2D2Model() {
    return (
        <div style={{ position: 'relative', height: '100vh' }}>
            <Canvas style={{ height: '100%' }}>
                <ambientLight intensity={1} />
                <directionalLight position={[5, 5, 5]} intensity={2.5} />
                <R2D2 />
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
                <h3 className='text-2xl font-bold mb-2 text-customSecondary'>R2-D2</h3>
                <p className='text-md text-customSecondary'>
                    R2-D2 is an astromech droid from the Star Wars universe, known for its bravery and resourcefulness. Its iconic design and tools make it an invaluable companion in galactic missions.
                </p>
            </div>
        </div>
    );
}
