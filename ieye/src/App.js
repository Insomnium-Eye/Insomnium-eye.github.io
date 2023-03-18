import './App.css';
import backgroundImage from './images/bg.jpg';
import logoImage from './images/logo_stroke.png';
import dgp from './images/DGP_Banner.jpg';
import Modal from './Modal';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <Router>
        <div className="background">
            <div className="header">
                <img src={logoImage} alt="Logo" height="40" />
                <nav>
                    <ul className="header-ul">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>

            </div>
            <div className="App" style={{ paddingTop: '60px' }}>
                <header className="App-header" />
                <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
                <div className="content">
                    <h1>New Beginnings</h1>
                    <img src={dgp} alt="Post Image" width="600" /><br />
                    <i>March 18th, 2023</i>
                    <p>Welcome to our world. After many years of study and hard work, we have decided to rebrand entirely. We are rewriting the entire website using ReactJS to remove clutter and showcase our skills.</p>
                    <p>Our ultimate goal is to showcase our game development and artistic ventures. However, for the time being, we will use this space as a blog to attract clients and investors by showcasing our coding skills. In this post, we're showcasing MODALS and Image Galleries.</p>
                    <p>Most recent update: Fixed Previous/Next arrows on gallery. </p>
                    <button onClick={() => setModalOpen(true)}>View Gallery</button>
                </div>
            </div>
            </div>
            </Router>
    );
}

export default App;