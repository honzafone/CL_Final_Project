import React, { useState, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html } from '@react-three/drei';
import * as THREE from 'three';
import SunModel from '../assets/3D/small/sm_sun.glb';
import MercuryModel from '../assets/3D/small/sm_mercury.glb';
import VenusModel from '../assets/3D/small/sm_venus.glb';
import EarthModel from '../assets/3D/small/sm_earth.glb';
import MarsModel from '../assets/3D/small/sm_mars.glb';
import JupiterModel from '../assets/3D/small/sm_jupiter.glb';
import SaturnModel from '../assets/3D/small/sm_saturn.glb';
import UranusModel from '../assets/3D/small/sm_uranus.glb';
import NeptuneModel from '../assets/3D/small/sm_neptune.glb';

function Orbit({ radius, inclination }) {
    return (
        <mesh rotation={[Math.PI / 2 + inclination, 0, 0]}>
            <ringGeometry args={[radius - 0.01, radius + 0.01, 64]} />
            <meshBasicMaterial color="white" side={THREE.DoubleSide} />
        </mesh>
    );
}

function Planet({ model, orbitRadius, scale, speed, initialAngle, onClick, name }) {
    const { scene } = useGLTF(model);
    const planetRef = React.useRef();
    const [isHovered, setIsHovered] = useState(false);
    const [currentAngle, setCurrentAngle] = useState(initialAngle);

    useFrame(() => {
        if (!isHovered) {
            const newAngle = currentAngle + speed;
            setCurrentAngle(newAngle);
            planetRef.current.position.x = orbitRadius * Math.cos(newAngle);
            planetRef.current.position.z = orbitRadius * Math.sin(newAngle);
        }
    });

    return (
        <group>
            <primitive
                ref={planetRef}
                object={scene}
                scale={scale}
                onClick={onClick}
                onPointerOver={() => {
                    setIsHovered(true);
                    document.body.style.cursor = 'pointer';
                }}
                onPointerOut={() => {
                    setIsHovered(false);
                    document.body.style.cursor = 'auto';
                }}
            />
            {isHovered && (
                <Html distanceFactor={10}>
                    <div className="p-0 rounded text-customPrimary text-center fixed bottom-[00%] left-0 transform -translate-x-1/2 -translate-y-[-50%]">
                        {name}
                    </div>
                </Html>
            )}
        </group>
    );
}

function Sun({ onClick }) {
    const { scene } = useGLTF(SunModel);
    return (
        <primitive
            object={scene}
            scale={0.05}
            onClick={onClick}
            position={[0, 0, 0]}
        />
    );
}

export default function SolarSystem() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    return (
        <div className="relative w-full h-full bg-black">
            {loading && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl">
                    Loading Solar System...
                </div>
            )}
            <Canvas
                style={{ width: '100vw', height: '100vh' }}
                onCreated={() => setLoading(false)}
                camera={{ position: [0, 0, 5], rotation: [4, 4, 10] }}
            >
                <ambientLight intensity={0.4} />
                <pointLight position={[0, 0, 0]} intensity={2.5} />
                <directionalLight position={[0, 0, 0]} intensity={2} color="yellow" />
                <OrbitControls enableZoom={false} />
                <Suspense fallback={null}>
                    <Sun onClick={() => navigate('/models')} />
                    <Orbit radius={0.8} inclination={0.122} />
                    <Planet name="Mercury" model={MercuryModel} orbitRadius={0.8} scale={0.01} speed={0.01} initialAngle={0} onClick={() => navigate('/models/mercury')} />
                    <Orbit radius={1.2} inclination={0.059} />
                    <Planet name="Venus" model={VenusModel} orbitRadius={1.2} scale={0.01} speed={0.008} initialAngle={100} onClick={() => navigate('/models/venus')} />
                    <Orbit radius={1.6} inclination={0.00005} />
                    <Planet name="Earth" model={EarthModel} orbitRadius={1.6} scale={0.0002} speed={0.008} initialAngle={150} onClick={() => navigate('/models/earth')} />
                    <Orbit radius={2.0} inclination={0.032} />
                    <Planet name="Mars" model={MarsModel} orbitRadius={2.0} scale={0.008} speed={0.007} initialAngle={200} onClick={() => navigate('/models/mars')} />
                    <Orbit radius={2.5} inclination={0.022} />
                    <Planet name="Jupiter" model={JupiterModel} orbitRadius={2.5} scale={0.002} speed={0.005} initialAngle={250} onClick={() => navigate('/models/jupiter')} />
                    <Orbit radius={3.0} inclination={0.043} />
                    <Planet name="Saturn" model={SaturnModel} orbitRadius={3.0} scale={0.015} speed={0.004} initialAngle={300} onClick={() => navigate('/models/saturn')} />
                    <Orbit radius={3.5} inclination={0.014} />
                    <Planet name="Uranus" model={UranusModel} orbitRadius={3.5} scale={0.0004} speed={0.003} initialAngle={350} onClick={() => navigate('/models/uranus')} />
                    <Orbit radius={4.0} inclination={0.030} />
                    <Planet name="Neptune" model={NeptuneModel} orbitRadius={4.0} scale={0.0025} speed={0.002} initialAngle={400} onClick={() => navigate('/models/neptune')} />
                </Suspense>
            </Canvas>
        </div>
    );
}
