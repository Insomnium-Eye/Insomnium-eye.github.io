import React from 'react';
import Modal from './Modal';
import ApprenticeWarriorArt from './images/ApprenticeWarrior_copy.png';
import HighlightText from './HighlightText';

function WarriorModal({ onClose }) {
    return (
        <Modal isOpen={true} onClose={onClose}>
            <div className="character-modal">
                <div className="image-container">
                    <img src={ApprenticeWarriorArt} alt="Warrior Artwork" />
                </div>
                <div className="info-container">
                    <h4>Apprentice Warrior</h4>
                    <p><strong>Class:</strong> Warrior</p>
                    <p><strong>Role:</strong> Average sustained damage, high survivability, low mobility</p>
                    <p><strong>Race:</strong> <HighlightText text="Apex - Lethios" /></p>
                </div>
                <div className="info-container">
                    <h1>Apprentice Warrior</h1>
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
                </div>
            </div>
        </Modal>
    );
}

export default WarriorModal;