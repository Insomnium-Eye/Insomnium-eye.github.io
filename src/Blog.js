import React, { useState } from 'react';
import GridDemo from './images/GridDemo.PNG'; // Adjust path if needed
import A1 from './images/Arena1.PNG';
import A2 from './images/Arena2.PNG';
import A3 from './images/Arena3.PNG';

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
                    <p>Future updates will refine the Arena’s mechanics and introduce additional stages to enrich the gameplay experience.</p>
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