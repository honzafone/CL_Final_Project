import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import atteModel from '../assets/3D/extras/at_te.glb';

function ATTE() {
    const { scene, animations } = useGLTF(atteModel);
    const { actions } = useAnimations(animations, scene);

    useEffect(() => {
        // write available animations to console
        console.log("Available animations for AT-TE:", animations.map(anim => anim.name));

        // play first animation from the list
        if (animations.length > 0) {
            const firstAnimationName = animations[0].name;
            actions[firstAnimationName]?.play();
        }

        // metallic AT-TE
        scene.traverse((child) => {
            if (child.isMesh) {
                child.material.metalness = 0.8;
                child.material.roughness = 0.2;
                child.material.color.set('#d3d3d3');
            }
        });
    }, [animations, actions, scene]);

    return (
        <group>
            <primitive object={scene} scale={0.3} position={[0, -1.5, 0]} />
        </group>
    );
}

export default function ATTEModel() {
    return (
        <div style={{ position: 'relative', height: '100vh' }}>
            <Canvas style={{ height: '100%' }}>
                <ambientLight intensity={1} />
                <directionalLight position={[5, 5, 5]} intensity={3.5} />
                <ATTE />
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
                <h3 className='text-2xl font-bold mb-2 text-customSecondary'>AT-TE</h3>
                <p className='text-md text-customSecondary'>
                    The AT-TE (All Terrain Tactical Enforcer) is a six-legged walker used by the Galactic Republic in the Star Wars universe. Known for its durability and versatility, it is equipped for both combat and transportation.
                </p>
            </div>
        </div>
    );
}
