import React, { useState, Suspense, useEffect, useRef } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import starBackground from '../assets/starsky.jpg'; // Nahraďte správnou cestou k vašemu obrázku


// Loading
const Loader = () => (
    <div className="flex items-center justify-center h-screen">
        <div className="loader text-white">Loading...</div>
    </div>
);

//////////////////////////////////////////////////////////////////////////////////
const StarWars = () => {
    const [menuOpen, setMenuOpen] = useState(false); // OPEN/CLOSE menu state
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); // MOUSE position state
    const menuRef = useRef(null); // Ref for menu

    // MACHINES
    const machineNames = {
        'bd-1': 'BD-1 Droid',
        'deathstar': 'Death Star',
        'atst': 'AT-ST Walker',
        'atat': 'AT-AT Walker',
        'xwing': 'X-Wing Starfighter',
        'tiehunter': 'TIE Hunter',
        'atte': 'AT-TE Walker',
        'r2d2': 'R2-D2',
        'tiefighter': 'TIE Fighter',
        'milleniumfalcon': 'Millennium Falcon',
    };

    //STYLES FOR SIDEBAR
    const linkStyles = (isActive) =>
        `${isActive
            ? "bg-customPrimary bg-opacity-10 text-customPrimary py-2 px-4 rounded font-bold border border-customPrimary"
            : "bg-customPrimary bg-opacity-10 text-customSecondary-500 py-2 px-4 rounded font-bold border border-transparent hover:bg-opacity-15"
        }`
    const burgerLinkStyles = (isActive) =>
        `${isActive
            ? "bg-customPrimary bg-opacity-50 text-customMuted py-2 px-4 rounded font-bold"
            : "bg-customMuted bg-opacity-60 text-customPrimary py-2 px-4 rounded font-bold"
        }`

    // Function to toggle the menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

   // Mouse movement handler
    const handleMouseMove = (event) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // change of movement intensity (parallax)
    const parallaxFactor = 0.05; // Factor for change of movement intensity (parallax)
    const parallaxX = (mousePosition.x / window.innerWidth - 0.5) * 100 * parallaxFactor; // Calculating for X
    const parallaxY = (mousePosition.y / window.innerHeight - 0.5) * 100 * parallaxFactor; // Calculating for Y

   // Funtion for closing menu, if clicked outside
    const handleClickOutside = (event) => {
        if (menuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        // event on document click
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <div className="flex " style={{ position: 'relative', overflow: '' }}>
            {/* Parallax background */}
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
                    transform: `translate(${parallaxX}px, ${parallaxY}px)`, // Parallax  X and Y
                    zIndex: -1,
                }}
            />

            {/* SIDEBAR */}
            <div
                className="hidden top-0 left-0 h-screen w-[14rem] bg-black shadow md:fixed md:block md:animate-slideInFromLeft border-r border-collapse border-customMuted"
                style={{ animationDuration: "1s", animationFillMode: "forwards" }}
            >
                 <nav className="p-4 flex flex-col gap-1">
                    {Object.keys(machineNames).map((machine) => (
                        <NavLink
                            key={machine}
                            to={`/sw/${machine}`}
                            className={({ isActive }) => linkStyles(isActive)}
                        >
                            {machineNames[machine]}
                        </NavLink>
                    ))}
                </nav>
            </div>

            {/* BURGER MENU BUTTON */}
            <div className="p-4 z-50 md:hidden mt-10">
                <button
                    onClick={toggleMenu}
                    className="text-customSecondary bg-customDark text-2xl  p-2 rounded-md focus:outline-none"
                >
                    ☰ Menu
                </button>
            </div>

            {/* BURGER MENU FOR SMALL DEVICES */}
            {menuOpen && (
                <div ref={menuRef} className="fixed top-[10] left-[10%] mt-[10%]  h-auto w-[80%] bg-customDark shadow-md z-[1001]  bg-opacity-30  text-4xl">
                    <nav className="p-4 flex flex-col gap-1">
                    {Object.keys(machineNames).map((machine) => (
                        <NavLink
                            key={machine}
                            to={`/sw/${machine}`}
                            className={({ isActive }) => burgerLinkStyles(isActive)}
                            onClick={toggleMenu}
                        >
                            {machineNames[machine]}
                        </NavLink>
                    ))}
                    </nav>
                </div>
            )}

            {/* DYNAMICALLY RENDERED CONTENT */}
            <div className="fixed ml-0 p-0 w-full md:static md:ml-[14rem]">
                <Suspense fallback={<Loader />}>  {/* Suspense */}
                    <Outlet />  {/* Dynamically choosen model */}
                </Suspense>
            </div>
        </div>
    );
};

export default StarWars;
