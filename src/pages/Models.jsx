import React, { useState, Suspense, useEffect, useRef } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import starBackground from '../assets/starsky.jpg'; // Nahraďte správnou cestou k vašemu obrázku


// Načítací spinner
const Loader = () => (
    <div className="flex items-center justify-center h-screen">
        <div className="loader text-white">Loading...</div>
    </div>
);

//sidebar active link
const activeLgSbBtn = "bg-customPrimary bg-opacity-10 text-customPrimary py-2 px-4 rounded font-bold"
//sidebar inactive link
const inactiveLgSbBtn = "bg-customPrimary bg-opacity-10 text-customMuted py-2 px-4 rounded font-bold"

const Models = () => {
    const [menuOpen, setMenuOpen] = useState(false); // Stav pro sledování otevření/zavření menu
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); // Stav pro sledování pozice myši
    const menuRef = useRef(null); // Ref pro menu

    // Funkce pro přepnutí menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Sledování pohybu myši
    const handleMouseMove = (event) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Snížení intenzity pohybu
    const parallaxFactor = 0.05; // Faktor pro snížení intenzity pohybu
    const parallaxX = (mousePosition.x / window.innerWidth - 0.5) * 100 * parallaxFactor; // Vypočítání posunu na ose X
    const parallaxY = (mousePosition.y / window.innerHeight - 0.5) * 100 * parallaxFactor; // Vypočítání posunu na ose Y

    // Funkce pro zavření menu, pokud se klikne mimo něj
    const handleClickOutside = (event) => {
        if (menuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        // Přidání události pro kliknutí na dokument
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <div className="flex " style={{ position: 'relative', overflow: '' }}>
            {/* Pozadí s parallax efektem */}
            <div
                style={{
                    position: 'fixed',
                    top: -100,
                    left: -100,
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${starBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '140%',
                    height: '140%',
                    transform: `translate(${parallaxX}px, ${parallaxY}px)`, // Parallax efekt pro X a Y
                    zIndex: -1,
                }}
            />
            {/* Postranní lišta */}
            <div
                className="hidden top-0 left-0 h-screen w-32 bg-black shadow md:fixed md:block md:animate-slideInFromLeft border-r border-collapse border-customMuted"
                style={{ animationDuration: "1s", animationFillMode: "forwards" }}
            >
                <nav className="p-4 flex flex-col gap-1  ">
                    <NavLink to="/models/mercury" className={({ isActive }) =>
                        isActive
                            ? "bg-customPrimary bg-opacity-10 text-customPrimary py-2 px-4 rounded font-bold border border-customPrimary"
                            : "bg-customPrimary bg-opacity-10 text-customSecondary-500 py-2 px-4 rounded font-bold border border-transparent hover:bg-opacity-15"}>
                        Mercury
                    </NavLink>
                    <NavLink to="/models/venus" className={({ isActive }) =>
                        isActive
                            ? "bg-customPrimary bg-opacity-10 text-customPrimary py-2 px-4 rounded font-bold border border-customPrimary"
                            : "bg-customPrimary bg-opacity-10 text-customSecondary-500 py-2 px-4 rounded font-bold border border-transparent hover:bg-opacity-15"}>
                        Venus
                    </NavLink>
                    <NavLink to="/models/earth" className={({ isActive }) =>
                        isActive
                            ? "bg-customPrimary bg-opacity-10 text-customPrimary py-2 px-4 rounded font-bold border border-customPrimary"
                            : "bg-customPrimary bg-opacity-10 text-customSecondary-500 py-2 px-4 rounded font-bold border border-transparent hover:bg-opacity-15"}>
                        Earth
                    </NavLink>
                    <NavLink to="/models/mars" className={({ isActive }) =>
                        isActive
                            ? "bg-customPrimary bg-opacity-10 text-customPrimary py-2 px-4 rounded font-bold border border-customPrimary"
                            : "bg-customPrimary bg-opacity-10 text-customSecondary-500 py-2 px-4 rounded font-bold border border-transparent hover:bg-opacity-15"}>
                        Mars
                    </NavLink>
                    <NavLink to="/models/jupiter" className={({ isActive }) =>
                        isActive
                            ? "bg-customPrimary bg-opacity-10 text-customPrimary py-2 px-4 rounded font-bold border border-customPrimary"
                            : "bg-customPrimary bg-opacity-10 text-customSecondary-500 py-2 px-4 rounded font-bold border border-transparent hover:bg-opacity-15"}>
                        Jupiter
                    </NavLink>
                    <NavLink to="/models/saturn" className={({ isActive }) =>
                        isActive
                            ? "bg-customPrimary bg-opacity-10 text-customPrimary py-2 px-4 rounded font-bold border border-customPrimary"
                            : "bg-customPrimary bg-opacity-10 text-customSecondary-500 py-2 px-4 rounded font-bold border border-transparent hover:bg-opacity-15"}>
                        Saturn
                    </NavLink>
                    <NavLink to="/models/uranus" className={({ isActive }) =>
                        isActive
                            ? "bg-customPrimary bg-opacity-10 text-customPrimary py-2 px-4 rounded font-bold border border-customPrimary"
                            : "bg-customPrimary bg-opacity-10 text-customSecondary-500 py-2 px-4 rounded font-bold border border-transparent hover:bg-opacity-15"}>
                        Uranus
                    </NavLink>
                    <NavLink to="/models/neptune" className={({ isActive }) =>
                        isActive
                            ? "bg-customPrimary bg-opacity-10 text-customPrimary py-2 px-4 rounded font-bold border border-customPrimary"
                            : "bg-customPrimary bg-opacity-10 text-customSecondary-500 py-2 px-4 rounded font-bold border border-transparent hover:bg-opacity-15"}>
                        Neptune
                    </NavLink>
                    <NavLink to="/models/sun" className={({ isActive }) =>
                        isActive
                            ? "bg-customPrimary bg-opacity-10 text-customPrimary py-2 px-4 rounded font-bold border border-customPrimary"
                            : "bg-customPrimary bg-opacity-10 text-customSecondary-500 py-2 px-4 rounded font-bold border border-transparent hover:bg-opacity-15"}>
                        Sun
                    </NavLink>
                    <NavLink to="/models/test" className={({ isActive }) =>
                        isActive
                            ? "bg-customPrimary bg-opacity-10 text-customPrimary py-2 px-4 rounded font-bold border border-customPrimary"
                            : "bg-customPrimary bg-opacity-10 text-customSecondary-500 py-2 px-4 rounded font-bold border border-transparent hover:bg-opacity-15"}>
                        Test
                    </NavLink>
                </nav>
            </div>

            {/* Burger menu button */}
            <div className="p-4 z-50 md:hidden mt-10">
                <button
                    onClick={toggleMenu}
                    className="text-customSecondary bg-customDark  p-2 rounded-md focus:outline-none"
                >
                    ☰ Menu
                </button>
            </div>

            {/* Burger menu pro malá zařízení */}
            {menuOpen && (
                <div ref={menuRef} className="absolute top-0 left-0 h-auto w-[50%] bg-customDark shadow-md z-50 md:hidden bg-opacity-30 mt-30 ml-5 text-4xl">
                    <nav className="p-4 flex flex-col gap-1 h-auto ">
                        <NavLink to="/models/mercury" className={({ isActive }) =>
                            isActive
                                ?
                                "bg-customPrimary bg-opacity-50 text-customMuted py-2 px-4 rounded font-bold"
                                :
                                "bg-customMuted bg-opacity-60 text-customPrimary py-2 px-4 rounded font-bold"
                                 }>
                            Mercury
                        </NavLink>
                        <NavLink to="/models/venus" className={({ isActive }) =>
                            isActive
                                ?
                                "bg-customPrimary bg-opacity-50 text-customMuted py-2 px-4 rounded font-bold"
                                :
                                "bg-customMuted bg-opacity-60 text-customPrimary py-2 px-4 rounded font-bold"
                                 }>
                            Venus
                        </NavLink>
                        <NavLink to="/models/earth" className={({ isActive }) =>
                            isActive
                                ?
                                "bg-customPrimary bg-opacity-50 text-customMuted py-2 px-4 rounded font-bold"
                                :
                                "bg-customMuted bg-opacity-60 text-customPrimary py-2 px-4 rounded font-bold"
                                 }>
                            Earth
                        </NavLink>
                        <NavLink to="/models/mars" className={({ isActive }) =>
                            isActive
                                ?
                                "bg-customPrimary bg-opacity-50 text-customMuted py-2 px-4 rounded font-bold"
                                :
                                "bg-customMuted bg-opacity-60 text-customPrimary py-2 px-4 rounded font-bold"
                                 }>
                            Mars
                        </NavLink>
                        <NavLink to="/models/jupiter" className={({ isActive }) =>
                            isActive
                                ?
                                "bg-customPrimary bg-opacity-50 text-customMuted py-2 px-4 rounded font-bold"
                                :
                                "bg-customMuted bg-opacity-60 text-customPrimary py-2 px-4 rounded font-bold"
                                 }>
                            Jupiter
                        </NavLink>
                        <NavLink to="/models/saturn" className={({ isActive }) =>
                            isActive
                                ?
                                "bg-customPrimary bg-opacity-50 text-customMuted py-2 px-4 rounded font-bold"
                                :
                                "bg-customMuted bg-opacity-60 text-customPrimary py-2 px-4 rounded font-bold"
                                 }>
                            Saturn
                        </NavLink>
                        <NavLink to="/models/uranus" className={({ isActive }) =>
                            isActive
                                ?
                                "bg-customPrimary bg-opacity-50 text-customMuted py-2 px-4 rounded font-bold"
                                :
                                "bg-customMuted bg-opacity-60 text-customPrimary py-2 px-4 rounded font-bold"
                                 }>
                            Uranus
                        </NavLink>
                        <NavLink to="/models/neptune" className={({ isActive }) =>
                            isActive
                                ?
                                "bg-customPrimary bg-opacity-50 text-customMuted py-2 px-4 rounded font-bold"
                                :
                                "bg-customMuted bg-opacity-60 text-customPrimary py-2 px-4 rounded font-bold"
                                 }>
                            Neptune
                        </NavLink>
                        <NavLink to="/models/sun" className={({ isActive }) =>
                            isActive
                                ?
                                "bg-customPrimary bg-opacity-50 text-customMuted py-2 px-4 rounded font-bold"
                                :
                                "bg-customMuted bg-opacity-60 text-customPrimary py-2 px-4 rounded font-bold"
                                 }>
                            Sun
                        </NavLink>
                        <NavLink to="/models/test" className={({ isActive }) =>
                            isActive
                                ?
                                "bg-customPrimary bg-opacity-50 text-customMuted py-2 px-4 rounded font-bold"
                                :
                                "bg-customMuted bg-opacity-60 text-customPrimary py-2 px-4 rounded font-bold"
                                 }>
                            Test
                        </NavLink>
                    </nav>
                </div>
            )}

            {/* Dynamický obsah modelů */}
            <div className="fixed ml-0 p-0 w-full md:static md:ml-32">
                <Suspense fallback={<Loader />}>  {/* Přidání Suspense */}
                    <Outlet />  {/* Zde se vykreslí dynamicky zvolený model */}
                </Suspense>
            </div>
        </div>
    );
};

export default Models;
