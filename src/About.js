import React from 'react';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function About(){
    return(
        <div>
            <h1>What is Insomnium-Eye?</h1>
            <p>Since 2011, we've sought to create video games and comics that value artistic integrity and quality, in an age of censorship, propaganda, and greed. <br/>
                Our work adheres to the creative process without allowing personal beliefs, politics, or money to cloud our judgment. We first attempted to create our main ambition, 
                'Aieslum', in 2011, but had to cancel our prototype due to university, family, work, and other life priorities. <br/>
                Finally, after over a decade, we're ready to truly commit to our ambitions. So far, we've published 'Hero Fighter Origins', 'Idyll Haven', and 'Monday Comics', 
                and have several failed prototypes for Aieslum, as well as other game projects that never materialized. That changes now. Please check back later for links.
            </p>
            <br/>
            <h1>About the founder</h1>
            <p>David G. Piper is a software developer, artist, author, and aspiring game developer. Since a young age, all he's wanted to do is make games, and art.<br/>
                A student and general laborer since 2011, the passion to create has never faded away. 
            </p>
            <a href="https://github.com/Insomnium-Eye" target="_blank"><AiFillGithub/></a>
            <a href="https://www.linkedin.com/in/davidgpiper1/" target="_blank"><AiFillLinkedin/></a>
        </div>
    )
}

export default About;