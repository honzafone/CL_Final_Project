import React, { useEffect, useRef } from 'react';

const StarBackground = () => {
    // array for stars
    const stars = Array.from({ length: 100 }).map((_, index) => ({
        top: Math.random() * 100,  // random Y
        left: Math.random() * 100, // random X
        size: Math.random() * 0.2 + 0.01, // random size of star
        speed: Math.random() * 0.01 + 0.001, // random speed of star
        glow: Math.random() * 0.5 + 0.5 // random glow intensity
    }));

    const starRefs = useRef([]);

    useEffect(() => {
        const animateStars = () => {
            starRefs.current.forEach((star, index) => {
                if (star) {
                    const newTop = (parseFloat(star.style.top) + stars[index].speed) % 100; // star move
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
            backgroundColor: 'black' // black background
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
                        backgroundColor: 'white', // star color
                        opacity: 0.6,
                        boxShadow: `0 0 ${star.size * 4}px white`, // small glow
                        animation: `glow ${2 + Math.random()}s ease-in-out infinite alternate` // glow animation
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
