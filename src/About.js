import React from 'react';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import av from './images/DGP_Av.jpg';
function About() {
    return (
        <div>
            <section>
                <h1>About Insomnium-Eye</h1>
                <p>
                    Since 2011, Insomnium-Eye has been dedicated to creating video games and comics that prioritize artistic integrity and quality. In an era often marked by censorship, propaganda, and commercial pressures, our work remains true to the creative process, unswayed by personal beliefs, politics, or financial motives.
                </p>
                <p>
                    Our journey began with an ambitious project, <i>Aieslum</i>, initiated in 2011 but paused due to commitments to education, family, and work. Now, after more than a decade, we are fully committed to realizing our vision. To date, we have published <a href="https://hf-empire.com/hfo-empire/introduction" target="_blank" rel="noopener noreferrer" style={{ color: 'red' }}>Hero Fighter Origins</a>, <i>Idyll Haven</i>, and <i>Monday Comics</i>, alongside several unrealized prototypes for <i>Aieslum</i> and other game projects. This marks a new chapter of dedication. Please check back later for additional links.
                </p>
            </section>
            <section>
                <h1>About the Founder</h1>
                <img src={av} width="200" />
                <p>
                    David G. Piper is a software developer, artist, author, and aspiring game developer. From a young age, his passion has been to create games and art. Despite balancing roles as a student and general laborer since 2011, this passion has never diminished.
                </p>
                <a href="https://github.com/Insomnium-Eye" target="_blank" rel="noopener noreferrer" aria-label="Visit Insomnium-Eye GitHub profile">
                    <AiFillGithub style={{ fontSize: "3em", color: "white" }} />
                </a>
                <a href="https://www.linkedin.com/in/davidgpiper1/" target="_blank" rel="noopener noreferrer" aria-label="Visit David G. Piper's LinkedIn profile">
                    <AiFillLinkedin style={{ fontSize: "3em", color: "white" }} />
                </a>
            </section>
        </div>
    );
}
export default About;