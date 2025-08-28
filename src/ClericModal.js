// ClericModal.js (Updated to position image at top-left with transparent background)
import React from 'react';
import Modal from './Modal';
import ApprenticeClericArt from './images/ApprenticeCleric_copy.png'; // Adjust path if needed
import HighlightText from './HighlightText';
function ClericModal({ onClose }) {
    return (
        <Modal isOpen={true} onClose={onClose}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', justifyContent: 'flex-start', alignItems: 'flex-start', flexWrap: 'wrap' }}> {/* Adjusted justifyContent to flex-start for left alignment */}
                <div style={{ flex: '0 0 30%', minWidth: '200px', border: '1px solid #ccc', padding: '10px', backgroundColor: 'transparent' }}> {/* Infobox with transparent background */}
                    <img src={ApprenticeClericArt} alt="Cleric Artwork" width="360" style={{ display: 'block', margin: '0 auto' }} /> {/* Fixed width to match Warrior */}
                    <h4>Apprentice Cleric</h4>
                    <p><strong>Class:</strong> Cleric</p>
                    <p><strong>Role:</strong> Support, low sustained damage, high durability</p>
                    <p><strong>Race:</strong> <HighlightText text="Apex - Human" /></p>
                </div>
                <div style={{ flex: '1 1 60%', minWidth: '300px' }}> {/* Main content section */}
                    <h1>Apprentice Cleric</h1> {/* Main title */}
                    <section>
                        <h2>Introduction</h2>
                        <p><HighlightText text="The Apprentice Cleric stands as a fervent and zealous adherent of Tezzism, a faith devoted to Tezz, the revered 'God of Man,' whose worship spans numerous denominations. This particular cleric holds steadfast to the belief that Human bears a sacred duty to serve and save all other apex species, channeling this conviction into their divine practice. Tapping into humanity’s radiant light, able to use Cleric spells up to lvl 20, they wield magic to heal their allies, empower their weapons, or unleash smiting light magic against their enemies. Emphasizing survival, these clerics don heavy armor, wield shields, and favor one-handed weapons, embodying a bastion of defense. Their summons manifest as luminous light spirits, while they harbor a deep-seated disdain for demons, reflecting their unyielding devotion to Tezz’s will in the perilous realm of Ozvaram. The Human spirit drives their mission." /></p>
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
export default ClericModal;