import React from 'react';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import av from './images/DGP_Av.jpg';

function About(){
    return(
        <div>
            <h1>What is Insomnium-Eye?</h1>
            <p>Since 2011, we've sought to create video games and comics that value artistic integrity and quality, in an age of censorship, propaganda, and greed. <br/>
                Our work adheres to the creative process without allowing personal beliefs, politics, or money to cloud our judgment. We first attempted to create our main ambition, 
                'Aieslum', in 2011, but had to cancel our prototype due to university, family, work, and other life priorities. <br/>
                Finally, after over a decade, we're ready to truly commit to our ambitions. So far, we've published <a href="https://hf-empire.com/hfo-empire/introduction" target="_blank" style={{color: 'red'}}>'Hero Fighter Origins'</a>, 'Idyll Haven', and 'Monday Comics', 
                and have several failed prototypes for Aieslum, as well as other game projects that never materialized. That changes now. Please check back later for links.
            </p>
            <br/>
            <h1>About the founder</h1>
            <img src={av} alt="Avatary by Nazrul (RIP)" width="200" /><br />
            <p>David G. Piper is a software developer, artist, author, and aspiring game developer. Since a young age, all he's wanted to do is make games, and art.<br/>
                A student and general laborer since 2011, the passion to create has never faded away. 
            </p>
            <a href="https://github.com/Insomnium-Eye" target="_blank"><AiFillGithub style={{fontSize: "3em", color: "white"}}/></a>
            <a href="https://www.linkedin.com/in/davidgpiper1/" target="_blank"><AiFillLinkedin style={{fontSize: "3em", color: "white"}}/></a>
        </div>
    )
}

export default About;
