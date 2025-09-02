import React from 'react';
import SagesOfOzvaram from './SagesOfOzvaram';
import Blog from './Blog';

function Home() {
    return (
        <div>
            <title>Sages of Ozvaram - Home</title>
            <Blog />
            <hr />
            <SagesOfOzvaram expanded={false} />
        </div>
    );
}

export default Home;