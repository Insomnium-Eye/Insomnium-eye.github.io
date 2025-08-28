// SorcererModal.js (Adjusted for consistent width and matching image size)
import React from 'react';
import Modal from './Modal';
import ApprenticeSorcArt from './images/ApprenticeSorc_copy.png';
import HighlightText from './HighlightText';

function SorcererModal({ onClose }) {
    return (
        <Modal isOpen={true} onClose={onClose}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', justifyContent: 'flex-start', alignItems: 'flex-start', flexWrap: 'wrap' }}> {/* Adjusted justifyContent to flex-start for left alignment */}
                <div style={{ flex: '0 0 30%', minWidth: '200px', border: '1px solid #ccc', padding: '10px', backgroundColor: 'transparent' }}> {/* Infobox with transparent background */}
                    <img src={ApprenticeSorcArt} alt="Sorcerer Artwork" width="180" style={{ display: 'block', margin: '0 auto' }} /> {/* Fixed width to match Warrior */}
                    <h4>Apprentice Sorcerer</h4>
                    <p><strong>Class:</strong> Sorcerer</p>
                    <p><strong>Role:</strong> High burst magic damage, low survivability</p>
                    <p><strong>Race:</strong> <HighlightText text="Apex - Vectium" /></p>
                </div>
                <div style={{ flex: '1 1 60%', minWidth: '300px' }}> {/* Main content section, matching width */}
                    <h1>Apprentice Sorcerer</h1> {/* Main title */}
                    <section>
                        <h2>Introduction</h2>
                        <p><HighlightText text="The Apprentice Sorcerer represents the foundational tier of arcane mastery, comprising dedicated students of the mystical arts who hone their craft through rigorous study and practice. Capable of wielding any Sorcerer class spell up to level 20, these initiates specialize in delivering high-damage magic spells, complemented by a select array of mobility-enhancing incantations such as Teleport and Mana Shield. Their repertoire further includes the summoning of formidable Elementals and Arcane Spirits, showcasing their early potential to manipulate the ethereal forces of Ozvaram." /></p>
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
export default SorcererModal;