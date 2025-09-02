import React from 'react';
import Modal from './Modal';
import ApprenticeClericArt from './images/ApprenticeCleric_copy.png';
import HighlightText from './HighlightText';

function ClericModal({ onClose }) {
    return (
        <Modal isOpen={true} onClose={onClose}>
            <div className="character-modal">
                <div className="image-container">
                    <img src={ApprenticeClericArt} alt="Cleric Artwork" />
                </div>
                <div className="info-container">
                    <h4>Apprentice Cleric</h4>
                    <p><strong>Class:</strong> Cleric</p>
                    <p><strong>Role:</strong> Support, low sustained damage, high durability</p>
                    <p><strong>Race:</strong> <HighlightText text="Apex - Human" /></p>
                </div>
                <div className="info-container">
                    <h1>Apprentice Cleric</h1>
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
                </div>
            </div>
        </Modal>
    );
}

export default ClericModal;