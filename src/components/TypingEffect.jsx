import React, { useEffect, useState } from 'react';

const TypingEffect = ({ text, speed }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [idLetter, setIdLetter] = useState(1);

    useEffect(() => {
        const printText = () => {
            if (idLetter <= text.length) {
                setDisplayedText(text.slice(0, idLetter));
                setIdLetter(prev => prev + 1);
            }
        };

        const intervalId = setInterval(printText, speed);

        return () => clearInterval(intervalId); // clears interval on unmount
    }, [idLetter, text, speed]);

    return (
        <div
            id="text"
            style={{
                fontFamily: 'monospace',
                whiteSpace: 'pre-wrap', // allows text wrapping
                wordWrap: 'break-word', // ensures long words wrap
                width: '100%', // or set a specific width as needed
            }}
        >
            {displayedText}
        </div>
    );
};

export default TypingEffect;
