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

        return () => clearInterval(intervalId); // vyčistí interval při unmountu
    }, [idLetter, text, speed]);

    return (
        <div
            id="text"
            style={{
                fontFamily: 'monospace',
                whiteSpace: 'pre-wrap', // povolí zalamování textu
                wordWrap: 'break-word', // zajistí, že se dlouhá slova zalamují
                width: '100%', // nebo nastavte konkrétní šířku podle potřeby
            }}
        >
            {displayedText}
        </div>
    );
};

export default TypingEffect;
