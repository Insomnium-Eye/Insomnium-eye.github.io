import './App.css';
import backgroundImage from './images/bg.jpg';
import logoImage from './images/logo_stroke.png';
import dgp from './images/DGP_Banner.jpg';
import Modal from './Modal';
import React, { useState } from 'react';


function App() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  };

  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    height: '60px',
    ul: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      li: {
        display: 'inline-block',
        marginRight: '10px',
        a: {
          color: 'white',
        },
      },
    },
  };

  const contentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'transparent',
    borderStyle: 'unset',
    boxShadow: '0px 0px 5px black',
    background: 'rgba(50, 40, 70, 0.7)',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '50px',
  };
  

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div style={backgroundStyle}>
      <div style={headerStyle}>
        <img src={logoImage} alt="Logo" height="40" />
        <nav>
          <ul style={headerStyle.ul}>
            <li style={headerStyle.ul.li}>
              <a href="/">Home</a>
            </li>
            <li style={headerStyle.ul.li}>
              <a href="/about">About</a>
            </li>
            <li style={headerStyle.ul.li}>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>

      </div>
      <div className="App" style={{ paddingTop: '60px' }}>
        <header className="App-header"/>
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        <div style={contentStyle}>
          <h1>New Beginnings</h1>
          <img src={dgp} alt="Post Image" width="600" /><br/>
          <i>March 4th, 2023</i>
          <p>Welcome to our world. After many years of study and hard work, we have decided to rebrand entirely. We are rewriting the entire website using ReactJS to remove clutter and showcase our skills.</p>
          <p>Our ultimate goal is to showcase our game development and artistic ventures. However, for the time being, we will use this space as a blog to attract clients and investors by showcasing our coding skills. In this post, we're showcasing MODALS and Image Galleries.</p>
          <p>To do: Fix arrow issue, add captions</p>
          <button onClick={() => setModalOpen(true)}>View Gallery</button>
        </div>
      </div>
    </div>
  );
}

export default App;