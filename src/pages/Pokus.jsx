import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import SunModel from '../assets/3D/sun.glb';
import MercuryModel from '../assets/3D/mercury.glb';

function Sun({ onClick }) {
    const { scene } = useGLTF(SunModel);
    return (
        <primitive
            object={scene}
            scale={0.02}
            onClick={onClick}  // Předáváme onClick jako prop
            position={[0, 0, 0]}
        />
    );
}

function Mercury({ onClick }) {
    const { scene } = useGLTF(MercuryModel);
    const mercuryRef = React.useRef();
    const orbitRadius = 0.8;
    let angle = 0;

    useFrame(() => {
        angle += 0.01;
        mercuryRef.current.position.x = orbitRadius * Math.cos(angle);
        mercuryRef.current.position.z = orbitRadius * Math.sin(angle);
    });

    return (
        <primitive
            ref={mercuryRef}
            object={scene}
            scale={0.005}
            onClick={onClick} // Přidáváme onClick prop
        />
    );
}

export default function SolarSystem() {
    const navigate = useNavigate();
    
    return (
        <div className="relative w-full h-full bg-black">
            <Canvas style={{ width: '100vw', height: '100vh' }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <directionalLight position={[5, 5, 5]} />
                <OrbitControls enableZoom={false} />
                <Sun onClick={() => navigate('/models')} />  {/* Zde předáváme onClick */}
                <Mercury onClick={() => navigate('/models/mercury')} />
            </Canvas>
            
        </div>
    );
}
