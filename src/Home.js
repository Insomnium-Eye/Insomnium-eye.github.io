import React, { useState } from 'react';
import dgp from './images/DGP_Banner.jpg';
import Modal from './Modal';
import Gallery from './Gallery';

function Home(){
    const [modalOpen, setModalOpen] = useState(false);

    return(
        <div>
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                <Gallery />
            </Modal>
            <div>
                <h1>New Beginnings</h1>
                <img src={dgp} alt="Post Image" width="600" /><br />
                <i>March 22nd, 2023</i>
                <p>Welcome to our world. After many years of study and hard work, we have decided to rebrand entirely. We are rewriting the entire website using ReactJS to remove clutter and showcase our skills.</p>
                <p>Our ultimate goal is to showcase our game development and artistic ventures. However, for the time being, we will use this space as a blog to attract clients and investors by showcasing our coding skills. In this post, we're showcasing MODALS and Image Galleries.</p>
                <p>Most recent update: Optimized images, added About, Contact pages with React Router. </p>
                <button onClick={() => setModalOpen(true)}>View Gallery</button>
            </div>
        </div>
    )
}
export default Home;
