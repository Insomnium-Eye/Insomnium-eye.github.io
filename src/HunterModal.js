import React from 'react';
import Modal from './Modal';
import ApprenticeHunterArt from './images/ApprenticeHunter_copy.png';
import HighlightText from './HighlightText';

function HunterModal({ onClose }) {
    return (
        <Modal isOpen={true} onClose={onClose}>
            <div className="character-modal">
                <div className="image-container">
                    <img src={ApprenticeHunterArt} alt="Hunter Artwork" />
                </div>
                <div className="info-container">
                    <h4>Apprentice Hunter</h4>
                    <p><strong>Class:</strong> Hunter</p>
                    <p><strong>Role:</strong> High burst physical damage, area denial</p>
                    <p><strong>Race:</strong> <HighlightText text="Apex - Human" /></p>
                </div>
                <div className="info-container">
                    <h1>Apprentice Hunter</h1>
                    <section>
                        <h2>Introduction</h2>
                        <p><HighlightText text="The Apprentice Hunter is forged through rigorous training with firearms and knives from an early age, honing their skills in the wilds where they were raised amidst nature, beasts, and monsters. Surrounded by this untamed environment, they have learned to discern which creatures to avoid, which to hunt, and which to befriend and tame, cultivating a deep connection with the wilderness. Their spells focus on summoning intricate traps, enhancing their weapons, taming beasts, or redirecting these creatures’ attention toward their enemies, showcasing their strategic prowess. Their summons, specializing in tamed beasts and monsters, serve as loyal allies in the perilous landscapes of Ozvaram, reflecting their mastery over the natural world. The Human resilience plays a key role in their survival." /></p>
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

export default HunterModal;