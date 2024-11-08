import React, { useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import blackHoleModel from '../assets/3D/extras/blackhole.glb';

function BlackHole() {
    const { scene, animations } = useGLTF(blackHoleModel);
    const { actions } = useAnimations(animations, scene); 

    useEffect(() => {
        if (actions['Take 001']) { 
            actions['Take 001'].play(); 
            actions['Take 001'].timeScale = 0.5;
        }
    }, [actions]);

    return (
        <group>
            <primitive object={scene} scale={1} rotation={[0.1, 0, 0.2]} />
        </group>
    );
}

export default function BlackHole1() {
    return (
        <div style={{ position: 'relative', height: '100vh' }}>
            <Canvas style={{ height: '100%' }}>
                <BlackHole />
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
                <h3 className='text-2xl font-bold mb-2 text-customSecondary'>Black Hole</h3>
                <p className='text-md text-customSecondary'>
                    A black hole is a region of spacetime where gravity is so strong that nothing, not even light, can escape from it. 
                    They are formed when massive stars collapse under their own gravity, resulting in an object with an immense gravitational pull.
                </p>
            </div>
        </div>
    );
}
