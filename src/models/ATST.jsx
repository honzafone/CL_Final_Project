import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import atStModel from '../assets/3D/extras/at_st.glb';

function ATST() {
    const { scene, animations } = useGLTF(atStModel);
    const { actions } = useAnimations(animations, scene);

    useEffect(() => {
        // write available animations to console
        console.log("Available animations for AT-ST:", animations.map(anim => anim.name));

        // play first animation from the list
        if (animations.length > 0) {
            const firstAnimationName = animations[0].name;
            const action = actions[firstAnimationName];
            if (action) {
                action.timeScale = 0.5; // slower animation
                action.play();
            }
        }
    }, [animations, actions]);

    return (
        <group>
            <primitive object={scene} scale={0.5} position={[0, -3, 0]} />
        </group>
    );
}

export default function ATSTModel() {
    return (
        <div style={{ position: 'relative', height: '100vh' }}>
            <Canvas style={{ height: '100%' }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1.5} />
                <ATST />
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
                <h3 className='text-2xl font-bold mb-2 text-customSecondary'>AT-ST</h3>
                <p className='text-md text-customSecondary'>
                    The AT-ST (All Terrain Scout Transport) is a bipedal vehicle used by the Galactic Empire in the Star Wars universe. Known for its mobility and firepower, it is often deployed for reconnaissance and light combat support.
                </p>
            </div>
        </div>
    );
}
