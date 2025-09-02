import React from 'react';
import Modal from './Modal';
import ApprenticeSorcArt from './images/ApprenticeSorc_copy.png';
import HighlightText from './HighlightText';

function SorcererModal({ onClose }) {
    return (
        <Modal isOpen={true} onClose={onClose}>
            <div className="character-modal">
                <div className="image-container">
                    <img src={ApprenticeSorcArt} alt="Sorcerer Artwork" />
                </div>
                <div className="info-container">
                    <h4>Apprentice Sorcerer</h4>
                    <p><strong>Class:</strong> Sorcerer</p>
                    <p><strong>Role:</strong> High burst magic damage, low survivability</p>
                    <p><strong>Race:</strong> <HighlightText text="Apex - Vectium" /></p>
                </div>
                <div className="info-container">
                    <h1>Apprentice Sorcerer</h1>
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
                </div>
            </div>
        </Modal>
    );
}

export default SorcererModal;