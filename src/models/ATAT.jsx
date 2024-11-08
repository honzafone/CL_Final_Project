import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import atAtModel from '../assets/3D/extras/at_at.glb';

function ATAT() {
    const { scene, animations } = useGLTF(atAtModel);
    const { actions } = useAnimations(animations, scene);

    useEffect(() => {
        // write available animations to console
        console.log("Available animations for AT-AT:", animations.map(anim => anim.name));

        // play first animation from the list
        if (animations.length > 0) {
            const firstAnimationName = animations[0].name;
            actions[firstAnimationName]?.play();
        }
    }, [animations, actions]);

    return (
        <group>
            <primitive object={scene} scale={0.18} position={[0, -2, 0]} />
        </group>
    );
}

export default function ATATModel() {
    return (
        <div style={{ position: 'relative', height: '100vh' }}>
            <Canvas style={{ height: '100%' }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1.5} />
                <ATAT />
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
                <h3 className='text-2xl font-bold mb-2 text-customSecondary'>AT-AT</h3>
                <p className='text-md text-customSecondary'>
                    The AT-AT is an iconic combat vehicle in the Star Wars universe, known for its immense size and heavy armor. It was designed for ground assaults with a powerful array of weapons and thick armor.
                </p>
            </div>
        </div>
    );
}
