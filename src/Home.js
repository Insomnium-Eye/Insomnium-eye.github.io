import React, { useState } from 'react';
import dgp from './images/DGP_Banner.jpg';
import Modal from './Modal';
import Gallery from './GalleryDiv';

function Home(){
    const [modalOpen, setModalOpen] = useState(false);

    return(
        <div>
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                <Gallery />
            </Modal>
            <div>
                <h1>Slow Updates</h1>
                <img src={dgp} alt="Post Image" width="600" /><br />
                <i>October 15th, 2023</i>
                <p>
                    These dreams never die. While I-Eye is my passion, in reality, I must spend most of my time working and commiting to my mental and physical health. Due to this, 
                    progress on I-Eye's projects is delayed. We will try to update this page as often as possible, however. 
                    Some updates are due:
                    -New artwork has been produced, and will be posted soon along with an 'Image Gallery' page.
                    -We've decided to use the Unreal Engine for our primary game
                    -We'll be selling existing art as merchandise 
                    -There will be more frequent updates to this website

                    We seek to attract investors for our projects, so hopefully someday we can do this full time. 
                    More updates coming soon...
                </p>
                <button onClick={() => setModalOpen(true)}>View Gallery</button>
            </div>
        </div>
    )
}
export default Home;
