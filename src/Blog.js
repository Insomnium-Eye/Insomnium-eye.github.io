import React, { useState } from 'react';
import GridDemo from './images/GridDemo.PNG'; // Adjust path if needed
import A1 from './images/Arena1.PNG';
import A2 from './images/Arena2.PNG';
import A3 from './images/Arena3.PNG';
import SorcererSprite from './images/Sprites/SorcererSprite_1 copy.png';
import LethiosSprite from './images/Sprites/Lethios_Sprite_1.png';
import ClericSprite from './images/Sprites/Cleric Sprite_1 copy.png';
import HunterSprite from './images/Sprites/Hunter Sprite_1.png';
import RoachgoblinSprite from './images/Sprites/Roachgoblin_Sprite_1.png';
import ArcaneBoltCard from './images/CardArt/Spells/ArcaneBolt_CardArt.png';
import DuskRoachlinCard from './images/CardArt/Summons/DuskRoachlin_CardArt1.png';
import A4 from './images/Blog/09222026/CharacterSelect.png';
import A5 from './images/Blog/09222026/RNGMap.png';
import Attacks from './images/Blog/09222026/AttackMenu.png';
import Cards1 from './images/Blog/09222026/Spells1.png';
import Cards2 from './images/Blog/09222026/Spells2.png';
import Cards3 from './images/Blog/09222026/Spells3.png';


function Blog() {
    const blogPosts = [
        {
            date: '08/28/2025',
            content: (
                <>
                    <p>It has been some time, adventurer. I am pleased to announce our latest endeavor, <b>Sages of Ozvaram</b>.</p>
                    <p>This tactical RPG/RTS is set in a fantasy realm where humanity seeks its role on an alien planet shaped by numerous cataclysms and arcane conflicts.</p>
                    <p>Players can command various characters, each with unique spells and game mechanics. Initially featuring four core classes: Sorcerer, Warrior, Cleric, and Hunter. Participants may engage in combat, utilize a deck of cards for spells and summons, or strike directly with fists, claws, or weapons.</p>
                </>
            ),
        },
        {
            date: '08/30/2025',
            content: (
                <>
                    <h1>Overworld - Core Features</h1>
                    <p>Outside of combat, players can navigate freely across the game map, offering an immersive exploration experience.</p>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        loading="lazy"
                        preload="metadata"
                        style={{ width: '100%', maxWidth: '600px', margin: '15px 0' }}
                    >
                        <source src="/clips/Demo1_compressed.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <p>Maps are constructed using a grid-based system. Currently, only flat, traversable tiles are implemented, with plans to introduce impassable terrain, hazard-inducing zones, and elevated platforms in upcoming updates.</p>
                    <img
                        src={GridDemo}
                        alt="10x10 flat grid map of Sages of Ozvaram overworld"
                        title="10x10 flat grid - dynamic"
                        loading="lazy"
                        style={{ width: '100%', maxWidth: '600px', margin: '15px 0' }}
                    />
                    <p>Distinguishing this game from others in its genre, the same maps serve dual purposes for both overworld exploration and battle engagements, ensuring a seamless transition between modes.</p>
                    <p>Engage with other units by approaching them directly. Their dialogue is dynamically generated, adapting based on player interactions for a personalized narrative experience.</p>
                    <p>Upcoming enhancements will focus on 'Battle Mode' instructions and graphic optimization.</p>
                </>
            ),
        },
        {
            date: '09/09/2025',
            content: (
                <>
                    <h1>Introducing the Arena Stage</h1>
                    <p>The Arena, the first official stage in <b>Sages of Ozvaram</b>, features a circular layout with a central wall, designed to test collision mechanics and provide strategic cover during battles.</p>
                    <p>Dynamic tile generation enhances replayability, with grass tiles spawning randomly on dirt tile locations each session, creating varied battle environments.</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', margin: '15px 0' }}>
                        <img
                            src={A1}
                            alt="Arena stage with central wall in Sages of Ozvaram"
                            title="Arena with central wall"
                            loading="lazy"
                            style={{ width: '100%', maxWidth: '300px' }}
                        />
                        <img
                            src={A2}
                            alt="Random grass tile generation in Arena stage"
                            title="Random grass tiles"
                            loading="lazy"
                            style={{ width: '100%', maxWidth: '300px' }}
                        />
                        <img
                            src={A3}
                            alt="Gameplay in Arena stage showing collision mechanics"
                            title="Collision mechanics"
                            loading="lazy"
                            style={{ width: '100%', maxWidth: '300px' }}
                        />
                    </div>
                    <p>Future updates will refine the Arena's mechanics and introduce additional stages to enrich the gameplay experience.</p>
                </>
            ),
        },
        {
            date: '05/31/2026',
            content: (
                <>
                    <h1>Artwork Update &mdash; Sprites &amp; Card Art</h1>

                    <h2>Unit Sprites</h2>
                    <p>Meet the four hero classes and one of the monsters you'll encounter in <b>Sages of Ozvaram</b>. Each unit is hand-crafted as a pixel sprite to fit the game's tactical grid.</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', margin: '15px 0', alignItems: 'flex-end' }}>
                        {[
                            { src: SorcererSprite, label: 'Vectium Sorcerer' },
                            { src: LethiosSprite, label: 'Lethios Warrior' },
                            { src: ClericSprite, label: 'Human Cleric' },
                            { src: HunterSprite, label: 'Human Hunter' },
                            { src: RoachgoblinSprite, label: 'Dusk Roachlin' },
                        ].map(({ src, label }) => (
                            <div key={label} style={{ textAlign: 'center' }}>
                                <img
                                    src={src}
                                    alt={label + ' sprite'}
                                    title={label}
                                    loading="lazy"
                                    style={{ imageRendering: 'pixelated', height: '120px', display: 'block', margin: '0 auto' }}
                                />
                                <span style={{ fontSize: '0.8rem', color: '#ccc', marginTop: '6px', display: 'block' }}>{label}</span>
                            </div>
                        ))}
                    </div>

                    <h2>Spell Card Art</h2>
                    <p>Spells in <b>Sages of Ozvaram</b> work like trading cards &mdash; each spell is a card with its own unique artwork, ready to be played from your hand during battle.</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', margin: '15px 0' }}>
                        {[
                            { src: ArcaneBoltCard, label: 'Arcane Bolt', desc: 'A mid-range spell for the Sorcerer.' },
                            { src: DuskRoachlinCard, label: 'Dusk Roachlin', desc: 'A generic summon card.' },
                        ].map(({ src, label, desc }) => (
                            <div key={label} style={{ textAlign: 'center', maxWidth: '240px' }}>
                                <img
                                    src={src}
                                    alt={label + ' card art'}
                                    title={label}
                                    loading="lazy"
                                    style={{ width: '100%', borderRadius: '8px', display: 'block' }}
                                />
                                <strong style={{ display: 'block', marginTop: '8px' }}>{label}</strong>
                                <span style={{ fontSize: '0.85rem', color: '#ccc' }}>{desc}</span>
                            </div>
                        ))}
                    </div>
                </>
            ),
        },
        {
            date: '09/22/2026',
            content: (
                <>
                    <h1>From Unreal to C#: Rebuilding Sages of Ozvaram</h1>

                    <h2>Introduction</h2>
                    <p><b>Sages of Ozvaram</b> has entered a new stage of development. The project is still the same turn-based tactical RPG set in the world of Ozvaram, but the technology underneath it has changed. After developing the earlier version in Unreal Engine, I have rebuilt the project in C# with .NET 8 and MonoGame DesktopGL.</p>
                    <p>This was a large change, but it has given the game a clearer foundation. The current version is focused on the parts that matter most right now: hex-grid movement, turn order, Action Points, Mana, weapons, class abilities, spell cards, summon cards, and decks.</p>

                    <h2>Why We Moved Away from Unreal</h2>
                    <p>Unreal Engine was useful during the earlier stage of development. It helped establish the idea of the game and gave the project a place to explore its visual direction and basic gameplay. As the design became more specific, however, I found that the project needed a different kind of foundation.</p>
                    <p>C# and MonoGame became a better fit for the current scope and needs of <b>Sages of Ozvaram</b>. MonoGame is a lightweight framework rather than a large all-in-one engine, which suits a 2D tactical RPG well. It gives me more direct control over the game systems and source code, while keeping the development environment focused on the actual problems the game needs to solve.</p>
                    <p>The change also makes it faster to iterate on turn systems, combat rules, cards, decks, and procedural maps. Instead of working around a general-purpose engine structure, the project can use a code-driven, data-oriented approach. Classes, weapons, spells, summons, and status effects can be represented as focused pieces of data and logic that are easier to adjust as the design develops.</p>

                    <h2>Rebuilding the Core in C#</h2>
                    <p>The first step was rebuilding the project as a C# and .NET 8 MonoGame project. That meant recreating the systems that had already been explored, then reshaping them around the new structure. It was not simply a matter of moving files from one project to another. The transition provided an opportunity to decide which parts of the game should be flexible data and which parts should be rules handled by the code.</p>
                    <p>That distinction is important for a game with several classes and many possible cards. A spell should be able to describe its artwork, cost, statistics, and effects without requiring an entirely new system for every card. The same idea applies to summons, weapons, and status effects. The current implementation is still growing, but it is now moving in that direction.</p>

                    <h2>The Tactical Foundation</h2>
                    <p>A playable tactical map is now in place using a hex grid. Maps can also be generated procedurally, so the project is no longer limited to one hand-built arrangement. Procedural generation means that the map is assembled by rules when it is created, giving the game a foundation for varied encounters and more replayable battles.</p>
                    <p>Units can be placed on the map and take turns according to their Speed statistic. The action-point system is also in place. Movement, attacks, defensive actions, and Guard all use Action Points, giving each turn a limited set of choices instead of allowing every unit to perform everything at once.</p>
                    <p>The initial hero roster is made up of the Sorcerer, Warrior, Cleric, and Hunter. Each class has its own identity, weapons, statistics, and class-specific spell cards. Generic summon cards are also available, which means different classes can include summons in their decks rather than keeping that part of the game locked to one hero.</p>
                    <p><strong>[SCREENSHOT 1 & 2: Current tactical map and units]</strong></p>
                    <img src={A4} alt="New character select" title="Character Select" loading="lazy" style={{ width: '100%', maxWidth: '600px', margin: '15px 0' }} />
                    <img src={A5} alt="Randomly Generated Map" title="Randomly Generated Map" loading="lazy" style={{ width: '100%', maxWidth: '600px', margin: '15px 0' }} />

                    <h2>The Attack & Card Deck System</h2>
                    <p>Units have a set of attacks they can perfmorm, based on that unit's typing. Additional attacks are unlocked if that unit has a weapon equipped.</p>
                    <p><strong>[SCREENSHOT 3: Dynamic Attack Menu]</strong></p>
                    <img src={Attacks} alt="Attack menu" title="Attack Menu" loading="lazy" style={{ width: '100%', maxWidth: '600px', margin: '15px 0' }} />

                    <p>The card system is the newest major gameplay layer. Spell cards and summon cards are rendered dynamically from card templates, artwork, statistics, costs, and descriptions. This allows the same interface to present different cards while the underlying data changes. Placeholder card artwork and unit sprites are being used wherever final art is not available yet.</p>
                    <p>Class decks are randomly generated from class-specific spells and generic summon cards. Each unit now begins with three cards in hand, and cards are displayed along the bottom of the interface. Players can browse their hand, highlight cards with either the keyboard or cursor, and zoom in on a selected card to inspect it.</p>
                    <p><strong>[SCREENSHOT 4: Card hand and deck interface]</strong></p>
                    <p>The draw process is now manual. Players spend Action Points to draw cards from their deck, and the cost increases each time during a turn: 1 AP, then 2 AP, then 4 AP, and finally 8 AP. Cards are no longer drawn automatically at the start of each turn. This makes drawing a deliberate choice: a player has to decide whether another card is worth giving up Action Points that could have been spent on movement, an attack, or defense.</p>
                    <p><strong>[SCREENSHOT 5: Spell card close-up]</strong></p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', margin: '15px 0' }}>
                        <img src={Cards1} alt="Cards" title="Random Cards" loading="lazy" style={{ width: '100%', maxWidth: '240px', borderRadius: '8px' }} />
                        <img src={Cards2} alt="Highlighted Card" title="Highlighted Card" loading="lazy" style={{ width: '100%', maxWidth: '240px', borderRadius: '8px' }} />
                        <img src={Cards3} alt="Another spell card" title="Another Spell" loading="lazy" style={{ width: '100%', maxWidth: '240px', borderRadius: '8px' }} />
                    </div>

                    <h2>Where the Project Stands Now</h2>
                    <p>The project now has a working tactical map, procedural generation, speed-based turns, Action Points, the four initial hero classes, and the first version of its deck and hand interface. The card templates can present spells and summons with their own artwork, costs, statistics, and descriptions. The current sprites and card images also make it easier to see how these systems will eventually fit together visually.</p>
                    <p><strong>[SCREENSHOT 4: Unit sprites or summon card]</strong></p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', margin: '15px 0', alignItems: 'flex-end' }}>
                        <img src={SorcererSprite} alt="Sorcerer unit sprite" title="Sorcerer" loading="lazy" style={{ imageRendering: 'pixelated', height: '120px' }} />
                        <img src={LethiosSprite} alt="Warrior unit sprite" title="Warrior" loading="lazy" style={{ imageRendering: 'pixelated', height: '120px' }} />
                        <img src={ClericSprite} alt="Cleric unit sprite" title="Cleric" loading="lazy" style={{ imageRendering: 'pixelated', height: '120px' }} />
                        <img src={HunterSprite} alt="Hunter unit sprite" title="Hunter" loading="lazy" style={{ imageRendering: 'pixelated', height: '120px' }} />
                    </div>
                    <p>This is still an early gameplay layer. The deck, hand, card presentation, and draw-cost systems are present, but actual spell casting and summon deployment are still being developed. Full combat resolution is not complete, so the current version should be understood as a foundation for those interactions rather than a finished battle system.</p>

                    <h2>What Comes Next</h2>
                    <p>The next stage is about connecting the cards to the tactical game. Players need to be able to cast spells directly from their hand, select valid targets, and follow range rules. Playing a card will also need to spend Mana, just as movement and attacks spend Action Points.</p>
                    <p>Summons will need their own deployment rules and behavior. Card effects will then be connected to combat, healing, buffs, debuffs, and movement. I also need to add discard and deck reshuffling rules, refine the interface and card interactions, and replace the placeholder artwork with final assets.</p>
                    <p>Once those pieces are working together, balancing can begin in a more meaningful way. Class strengths, spells, summons, Action Point costs, and Mana costs will all need testing and adjustment. The tactical map and combat encounters will expand alongside that work, so the systems are tested in situations that feel closer to the intended game.</p>

                    <h2>Closing Development Note</h2>
                    <p>Moving from Unreal Engine to C# was a significant step, but it has made the direction of <b>Sages of Ozvaram</b> feel more focused. The project now has a foundation that matches its current needs and gives me direct control over the systems I am building. There is still a lot to solve before the cards become fully playable, but the map, units, turns, decks, and hands are beginning to form a coherent game. I will keep building it piece by piece.</p>
                </>
            ),
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(blogPosts.length - 1);

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < blogPosts.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const currentPost = blogPosts[currentIndex];

    return (
        <div style={{ padding: '20px', color: 'white' }}>
            <h2>Development Blog</h2>
            <div style={{ marginBottom: '15px' }}>
                <strong>Date:</strong> {currentPost.date}
            </div>
            <div style={{ marginBottom: '15px' }}>
                {currentPost.content}
            </div>
            <div>
                <button
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                    style={{
                        padding: '5px 10px',
                        marginRight: '10px',
                        backgroundColor: currentIndex === 0 ? '#ccc' : '#000',
                        color: currentIndex === 0 ? '#666' : '#fff',
                        border: '1px solid #ccc',
                        cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
                    }}
                >
                    Previous
                </button>
                <button
                    onClick={handleNext}
                    disabled={currentIndex === blogPosts.length - 1}
                    style={{
                        padding: '5px 10px',
                        backgroundColor: currentIndex === blogPosts.length - 1 ? '#ccc' : '#000',
                        color: currentIndex === blogPosts.length - 1 ? '#666' : '#fff',
                        border: '1px solid #ccc',
                        cursor: currentIndex === blogPosts.length - 1 ? 'not-allowed' : 'pointer',
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Blog;
