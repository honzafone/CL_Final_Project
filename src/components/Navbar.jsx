import { NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';
import { auth } from '../firebase.jsx'; // Data for firebase
import { onAuthStateChanged } from "firebase/auth";

const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsAuthenticated(!!user);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    return (
        <header className="fixed right-0 top-0 p-0 z-[1000] w-full bg-customAccent bg-opacity-40 md:w-auto">
            <nav className=" flex flex-wrap justify-center text-lg gap-0 md:gap-2 font-medium md:justify-end">
                <NavLink to="/" className={({ isActive }) => isActive
                    ? "px-1 md:px-2 py-3 md:p-2 text-customPrimary bg-customDark text-shadow border-s-2 border-e-2 border-customPrimary"
                    : "px-1 md:px-2 py-3 md:p-2 text-black-500 border-x-2 border-x-transparent hover:text-customSecondary"
                }>
                    Home
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive
                    ? "px-1 md:px-2 py-3 md:p-2 text-customPrimary bg-customDark text-shadow border-s-2 border-e-2 border-customPrimary"
                    : "px-1 md:px-2 py-3 md:p-2 text-black-500 border-x-2 border-x-transparent hover:text-customSecondary"
                }>
                    About
                </NavLink>
                <NavLink to="/models" className={({ isActive }) => isActive
                    ? "px-1 md:px-2 py-3 md:p-2 text-customPrimary bg-customDark text-shadow border-s-2 border-e-2 border-customPrimary"
                    : "px-1 md:px-2 py-3 md:p-2 text-black-500 border-x-2 border-x-transparent hover:text-customSecondary"
                }>
                    Models
                </NavLink>

                {isAuthenticated && (
                    <NavLink to="/exclusive" className={({ isActive }) => isActive
                        ? "px-1 md:px-2 py-3 md:p-2 text-customPrimary bg-customDark text-shadow border-s-2 border-e-2 border-customPrimary"
                        : "px-1 md:px-2 py-3 md:p-2 text-black-500 border-x-2 border-x-transparent hover:text-customSecondary"
                    }>
                        Exclusive
                    </NavLink>
                )}

                {isAuthenticated && (
                    <NavLink to="/sw" className={({ isActive }) => isActive
                    ? "px-1 md:px-2 py-3 md:p-2 text-customPrimary bg-customDark text-shadow border-s-2 border-e-2 border-customPrimary"
                    : "px-1 md:px-2 py-3 md:p-2 text-black-500 border-x-2 border-x-transparent hover:text-customSecondary"
                }>
                    SW
                </NavLink>
                )}
                    
            </nav>
        </header>
    );
};

export default Navbar;
