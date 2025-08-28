import React, { useState } from 'react';
import SagesLogo from './images/SagesLogo.png';
import ApprenticeSorcAvatar from './images/ApprenticeSorc_Avatar.png';
import ApprenticeWarriorAvatar from './images/ApprenticeWarrior_Avatar.png';
import ApprenticeClericAvatar from './images/ApprenticeCleric_Avatar.png';
import ApprenticeHunterAvatar from './images/ApprenticeHunter_Avatar.png';
import SorcererModal from './SorcererModal';
import WarriorModal from './WarriorModal';
import ClericModal from './ClericModal';
import HunterModal from './HunterModal';

function SagesOfOzvaram({ expanded = false }) {
    const [featuresOpen, setFeaturesOpen] = useState(expanded);
    const [charactersOpen, setCharactersOpen] = useState(expanded);
    const [storyOpen, setStoryOpen] = useState(expanded);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    const toggleFeatures = () => setFeaturesOpen(!featuresOpen);
    const toggleCharacters = () => setCharactersOpen(!charactersOpen);
    const toggleStory = () => setStoryOpen(!storyOpen);

    const openModal = (characterName) => {
        console.log('Opening modal for:', characterName);
        setSelectedCharacter(characterName);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedCharacter(null);
    };

    const characters = [
        { name: 'Sorcerer', avatar: ApprenticeSorcAvatar },
        { name: 'Warrior', avatar: ApprenticeWarriorAvatar },
        { name: 'Cleric', avatar: ApprenticeClericAvatar },
        { name: 'Hunter', avatar: ApprenticeHunterAvatar }
    ];

    return (
        <div>
            <img src={SagesLogo} alt="Sages of Ozvaram Logo" width="250" />
            <a href="https://docs.google.com/document/d/1zYVQhJ0ybtyVicHCFv6l_SrJ98ufJMEw3PHvlvrbQOc/edit?usp=sharing" rel="noreferrer">View Game Design Document</a>
            <h2>Core Mechanics</h2>
            <b>Turn-based Combat</b><br />
            Units take turns based on speed, allocated 5 action points to expend judiciously on attacks, spellcasting, movement, item utilization, environmental interaction, or defensive maneuvers.<br />
            <b>Deck-building Mechanics</b><br />
            Construct personalized decks of spells and summons for combat, with each spell requiring a specific mana cost for strategic selection.<br />
            <b>Dependable Attack System</b><br />
            In the absence of viable spells or mana reserves, access on-demand attacks determined by unit species or equipped weaponry.<br />
            <b>Creature Collection</b><br />
            Capture creatures using soul runes through casting and subsequent defeat, with options to recruit units or locate them within a deck.<br />
            <b>Free-range Overworld</b><br />
            Freely explore diverse areas, uncovering numerous hidden secrets, interacting with NPCs and items, and engaging creatures in battle, each region featuring a unique outline.<br />
            <b>Deep Lore</b><br />
            Delve into the world of Ozvaram, conceived in 2009, to reveal its mysteries, forge alliances, and understand its characters.<br />
            <h2 onClick={toggleFeatures} style={{ cursor: 'pointer' }}>Features ▼</h2>
            {featuresOpen && (
                <div>
                    <h3>Turn-based Combat</h3>
                    <p>Units alternate turns based on speed, utilizing 5 action points for attacks, spells, movement, item use, environmental interactions, or defense.</p>
                    <h3>Deck-building Mechanics</h3>
                    <p>Design custom decks of spells and summons, strategically managing mana costs during engagements.</p>
                    <h3>Dependable Attack System</h3>
                    <p>Employ on-demand attacks linked to unit species or equipped weapons when spell options are unavailable.</p>
                    <h3>Creature Collection</h3>
                    <p>Secure creatures with soul runes via casting and combat, enabling recruitment or discovery within decks.</p>
                    <h3>Free-range Overworld</h3>
                    <p>Navigate expansive areas freely, discovering secrets, engaging with NPCs and items, and battling creatures in distinct environments.</p>
                    <h3>Deep Lore</h3>
                    <p>Engage with Ozvaram’s rich history, established in 2009, to form alliances and uncover its narrative depth.</p>
                </div>
            )}
            <h2 onClick={toggleCharacters} style={{ cursor: 'pointer' }}>Characters ▼</h2>
            {charactersOpen && (
                <div>
                    {characters.map((char, index) => (
                        <div key={index} onClick={() => openModal(char.name)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                            <img src={char.avatar} alt={`${char.name} Avatar`} width="50" style={{ margin: '0' }} />
                            <span style={{ marginLeft: '1rem' }}>{char.name}</span>
                        </div>
                    ))}
                </div>
            )}
            <h2 onClick={toggleStory} style={{ cursor: 'pointer' }}>Story ▼</h2>
            {storyOpen && (
                <div>
                    <p>
                        In the realm of Ozvaram, humanity arrives on an alien planet marked by ancient cataclysms and arcane conflicts. As adventurers, players navigate this challenging terrain, establishing alliances, revealing hidden truths, and defining humanity’s purpose amid mystical forces and varied creatures. The narrative explores themes of survival, discovery, and decision-making, offering branching paths shaped by player choices.
                    </p>
                </div>
            )}
            {modalOpen && selectedCharacter && (
                <>
                    {selectedCharacter === 'Sorcerer' && <SorcererModal onClose={closeModal} />}
                    {selectedCharacter === 'Warrior' && <WarriorModal onClose={closeModal} />}
                    {selectedCharacter === 'Cleric' && <ClericModal onClose={closeModal} />}
                    {selectedCharacter === 'Hunter' && <HunterModal onClose={closeModal} />}
                </>
            )}
        </div>
    );
}
export default SagesOfOzvaram;