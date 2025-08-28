import React from 'react';
import SagesOfOzvaram from './SagesOfOzvaram';

function Home() {
    return (
        <div>
            <title> Sages of Ozvaram - Home </title>
            <p>It has been some time, adventurer. I am pleased to announce our latest endeavor, <b>Sages of Ozvaram</b>.</p>
            <p>This tactical RPG/RTS is set in a fantasy realm where humanity seeks its role on an alien planet shaped by numerous cataclysms and arcane conflicts.</p>
            <p>Players can command various characters, each with unique spells and game mechanics. Initially featuring four core classes: Sorcerer, Warrior, Cleric, and Hunter. Participants may engage in combat, utilize a deck of cards for spells and summons, or strike directly with fists, claws, or weapons.</p>
            <hr />
            <SagesOfOzvaram expanded={false} />
        </div>
    );
}
export default Home;