import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import bd1Model from '../assets/3D/extras/rigged_bd1.glb';

function BD1() {
    const { scene, animations } = useGLTF(bd1Model);
    const { actions } = useAnimations(animations, scene);

    useEffect(() => {
        if (actions['Idle']) {
            actions['Idle'].play();
        }
    }, [actions]);

    return (
        <group>
            <primitive object={scene} scale={0.5} position={[0, -2, 0]} castShadow receiveShadow />
        </group>
    );
}

// Component for floor
function Floor() {
    return (
        <mesh rotation-x={-Math.PI / 2} position={[0, -2, 0]} receiveShadow>
            <planeGeometry args={[10, 10]} />
            <meshStandardMaterial color="darkgrey" />
        </mesh>
    );
}

// Component for light
function Lights() {
    return (
        <>
            <ambientLight intensity={0.3} />
            <directionalLight
                position={[3, 3, 5]}
                intensity={1.5}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-bias={-0.0001}
                shadow-camera-near={1}
                shadow-camera-far={20}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />
        </>
    );
}

export default function BD1Model() {
    return (
        <div style={{ position: 'relative', height: '100vh' }}>
            <Canvas style={{ height: '100%' }} shadows>
                <Lights />
                <BD1 />
                <Floor />
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
                <h3 className='text-2xl font-bold mb-2 text-customSecondary'>BD-1</h3>
                <p className='text-md text-customSecondary'>
                    BD-1 is a companion droid developed within the Star Wars universe. Its design includes the ability to scan the environment and store holographic data. It excels in friendly behavior and willingness to assist its companions on their adventures.
                </p>
            </div>
        </div>
    );
}
