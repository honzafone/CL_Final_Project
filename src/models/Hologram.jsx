import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import hologramModel from '../assets/3D/extras/hologram.glb';

function Hologram() {
    const { scene, animations } = useGLTF(hologramModel);
    const { actions } = useAnimations(animations, scene);

    useEffect(() => {
       // write available animations to console
        console.log("Available animations:", animations.map(anim => anim.name));

        // play first animation from the list
        if (animations.length > 0) {
            const firstAnimationName = animations[0].name;
            actions[firstAnimationName]?.play();
        }
    }, [animations, actions]);

    return (
        <group>
            <primitive object={scene} scale={0.01} position={[0, -2.2, 0]} />
        </group>
    );
}

export default function HologramModel() {
    return (
        <div style={{ position: 'relative', height: '100vh' }}>
            <Canvas style={{ height: '100vh'}}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1.5} />
                <Hologram />
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
                <h3 className='text-2xl font-bold mb-2 text-customSecondary'>Extras</h3>
                <p className='text-md text-customSecondary'>
                    Welcome to extra section with models only for registered users.
                </p>
            </div>
        </div>
    );
}
