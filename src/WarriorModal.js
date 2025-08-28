// WarriorModal.js (Updated to position image at top-left with transparent background)
import React from 'react';
import Modal from './Modal';
import ApprenticeWarriorArt from './images/ApprenticeWarrior_copy.png';
import HighlightText from './HighlightText';

function WarriorModal({ onClose }) {
    return (
        <Modal isOpen={true} onClose={onClose}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', justifyContent: 'flex-start', alignItems: 'flex-start', flexWrap: 'wrap' }}> {/* Adjusted justifyContent to flex-start for left alignment */}
                <div style={{ flex: '0 0 30%', minWidth: '200px', border: '1px solid #ccc', padding: '10px', backgroundColor: 'transparent' }}> {/* Infobox with transparent background */}
                    <img src={ApprenticeWarriorArt} alt="Warrior Artwork" width="360" style={{ display: 'block', margin: '0 auto' }} /> {/* Fixed width to match reference */}
                    <h4>Apprentice Warrior</h4>
                    <p><strong>Class:</strong> Warrior</p>
                    <p><strong>Role:</strong> Average sustained damage, high survivability, low mobility</p>
                    <p><strong>Race:</strong> <HighlightText text="Apex - Lethios" /></p>
                </div>
                <div style={{ flex: '1 1 60%', minWidth: '300px' }}> {/* Main content section */}
                    <h1>Apprentice Warrior</h1> {/* Main title */}
                    <section>
                        <h2>Introduction</h2>
                        <p><HighlightText text="The Apprentice Warrior emerges from a rigorous upbringing, raised from the moment of hatching to embody strength and resilience, where the weak are culled to ensure only the fittest survive. Trained as masters of hand-to-hand combat, these warriors boast exceptional physical prowess and high strength, though their aptitude for arcane spells remains minimal. Their limited spellcasting, using Warrior spells up to lvl 20, focus on enhancing their own power or that of their allies, weakening adversaries, taunting foes to draw attention, or summoning new weapons to the battlefield. Among their summons, allied warriors and mechanized units stand as testaments to their martial prowess, forging a path of dominance in the harsh landscapes of Ozvaram." /></p>
                    </section>
                    <section>
                        <h2>Attacks</h2>
                        <p>[Coming Soon]</p>
                    </section>
                    <section>
                        <h2>Spells</h2>
                        <p>[Coming soon]</p>
                    </section>
                    {/* Add more sections as needed, e.g., Trivia, References */}
                </div>
            </div>
        </Modal>
    );
}
export default WarriorModal;