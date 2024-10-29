import React, { useEffect, useRef } from 'react';

const StarBackground = () => {
    // Vytvoříme pole pro hvězdy
    const stars = Array.from({ length: 100 }).map((_, index) => ({
        top: Math.random() * 100,  // náhodná pozice Y
        left: Math.random() * 100, // náhodná pozice X
        size: Math.random() * 0.2 + 0.01, // náhodná velikost hvězdy
        speed: Math.random() * 0.01 + 0.001, // náhodná rychlost pohybu
        glow: Math.random() * 0.5 + 0.5 // náhodná intenzita světélkování
    }));

    const starRefs = useRef([]);

    useEffect(() => {
        const animateStars = () => {
            starRefs.current.forEach((star, index) => {
                if (star) {
                    const newTop = (parseFloat(star.style.top) + stars[index].speed) % 100; // pohyb hvězdy
                    star.style.top = `${newTop}vh`;
                }
            });
            requestAnimationFrame(animateStars);
        };

        animateStars();
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            zIndex: -1,
            backgroundColor: 'black' // černé pozadí pro efekt hvězdné noci
        }}>
            {stars.map((star, index) => (
                <div 
                    key={index} 
                    ref={el => starRefs.current[index] = el} 
                    style={{
                        position: 'absolute',
                        top: `${star.top}vh`,
                        left: `${star.left}vw`,
                        width: `${star.size}rem`,
                        height: `${star.size}rem`,
                        borderRadius: '50%',
                        backgroundColor: 'white', // barva hvězd
                        opacity: 0.6,
                        boxShadow: `0 0 ${star.size * 4}px white`, // jemný efekt záření
                        animation: `glow ${2 + Math.random()}s ease-in-out infinite alternate` // animace světélkování
                    }} 
                />
            ))}
            <style>
                {`
                    @keyframes glow {
                        0% {
                            transform: scale(1);
                            opacity: 0.6;
                        }
                        100% {
                            transform: scale(1.2);
                            opacity: 1;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default StarBackground;
