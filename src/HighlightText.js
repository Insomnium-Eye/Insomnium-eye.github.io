// HighlightableText.js
import React, { useState } from 'react';
const HighlightableText = ({ text }) => {
    const [tooltip, setTooltip] = useState(null);
    const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
    // Define keyword-to-definition mappings
    const definitions = {
        'Apex': "The Apex are the enlightened species dominating Ozvaram, including Humans, Lethios, Vectiums, and others yet to be revealed. Distinguished by higher intelligence, they excel in speech, magical manipulation, technological innovation, cultural development, and societal advancement.",
        'Human': "Humans are a versatile species without pronounced strengths or weaknesses compared to Vectiums or Lethios, averaging across most stats. Their true power lies in overcoming adversity through unparalleled tenacity, creativity, and adaptability to diverse environments.",
        'Vectium': "Vectiums are small, cat-like aliens with an innate affinity for the ethereal, spirits, and arcane arts, perceiving phenomena invisible to Humans and Lethios. Physically weaker but highly nimble, they appear perpetually smiling but express emotions via ears, tails, and body language. Hyper-social by nature, isolation from fellow Vectiums leads to severe depression and illness.",
        'Lethios': "Lethios are powerful reptilian beings, kin to dragons, matching Humans and Vectiums in intelligence but with dulled arcane senses, hindering their mastery of magical and ethereal connections. Vulnerable to cold, they rely on light and heat for energy restoration. Primarily vegetarian with occasional carnivorous tendencies, they are less social than other Apex species."
        // Add more keywords and definitions as needed
    };
    const handleMouseEnter = (e, def) => {
        const rect = e.target.getBoundingClientRect();
        setTooltipPosition({
            top: rect.top + window.pageYOffset + (rect.height / 2),
            left: rect.right + window.pageXOffset + 10
        }); // Position to the right, vertically centered with viewport offset
        setTooltip(def);
    };
    // Split text into words and check for keywords with improved matching
    const words = text.split(' ');
    const highlightedText = words.map((word, index) => {
        const trimmedWord = word.replace(/[.,!?]/g, '').toLowerCase(); // Case-insensitive matching
        const originalWord = word; // Preserve original word for display
        if (Object.keys(definitions).some(key => key.toLowerCase() === trimmedWord)) {
            const matchedKey = Object.keys(definitions).find(key => key.toLowerCase() === trimmedWord);
            return (
                <span
                    key={index}
                    style={{ textDecoration: 'underline', cursor: 'default' }} // Straight underline, default cursor
                    onMouseEnter={(e) => handleMouseEnter(e, definitions[matchedKey])}
                    onMouseLeave={() => setTooltip(null)}
                >
                    {originalWord}{' '}
                </span>
            );
        }
        return <span key={index}>{word} </span>;
    });
    return (
        <div style={{ position: 'relative' }}>
            {highlightedText}
            {tooltip && (
                <div style={{
                    position: 'fixed', // Fixed to viewport to ensure visibility
                    top: tooltipPosition.top,
                    left: tooltipPosition.left,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    color: 'white',
                    padding: '5px 10px',
                    borderRadius: '4px',
                    zIndex: 1001,
                    maxWidth: '300px', // Constrain to a reasonable box size
                    wordWrap: 'break-word', // Ensure text wraps within the box
                    transform: 'translateY(-50%)' // Vertically center relative to the word
                }}>
                    {tooltip}
                </div>
            )}
        </div>
    );
};
export default HighlightableText;