import { NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';
import { auth } from '../firebase.jsx'; // Ujistěte se, že máte správnou cestu
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
        <header className="fixed right-0 top-0 p-0 z-[1000] bg-customAccent bg-opacity-40">
            <nav className="w-80% flex justify-end text-lg gap-5 font-medium">
                <NavLink to="/" className={({ isActive }) => isActive
                    ? "p-2 text-customPrimary bg-customDark text-shadow border-s-2 border-e-2 border-customPrimary"
                    : "p-2 text-black-500 border-x-2 border-x-transparent hover:text-customSecondary"
                }>
                    Home
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive
                    ? "p-2 text-customPrimary bg-customDark text-shadow border-s-2 border-e-2 border-customPrimary"
                    : "p-2 text-black-500 border-x-2 border-x-transparent hover:text-customSecondary"
                }>
                    About
                </NavLink>
                <NavLink to="/models" className={({ isActive }) => isActive
                    ? "p-2 text-customPrimary bg-customDark text-shadow border-s-2 border-e-2 border-customPrimary"
                    : "p-2 text-black-500 border-x-2 border-x-transparent hover:text-customSecondary"
                }>
                    Models
                </NavLink>

                {isAuthenticated && (
                    <NavLink to="/exclusive" className={({ isActive }) => isActive
                        ? "p-2 text-customPrimary bg-customDark text-shadow border-s-2 border-e-2 border-customPrimary"
                        : "p-2 text-black-500 border-x-2 border-x-transparent hover:text-customSecondary"
                    }>
                        Exclusive
                    </NavLink>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
