import './App.css';
import logoImage from './images/logo_stroke.png';
import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';

function App() {
  useEffect(() => {
    // Get the dropdown button and the dropdown content
    const dropdownButton = document.querySelector('.dropButton');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Add a click event listener to the dropdown button
    dropdownButton.addEventListener('click', () => {
      // Toggle the visibility of the dropdown content
      dropdownContent.classList.toggle('show');
    });

    // Close the dropdown when the user clicks outside of it
    window.addEventListener('click', (event) => {
      if (!event.target.matches('.dropButton')) {
        dropdownContent.classList.remove('show');
      }
    });

    // Remove event listeners when the component unmounts
    return () => {
      dropdownButton.removeEventListener('click');
      window.removeEventListener('click');
    }
  }, []);

  return (
    <div className="background">
      <header className="header">
        <img src={logoImage} alt="Logo" height="40" />
        <nav>
          <ul className="header-ul">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="dropDown">
          <button className="dropButton">... <i/></button>
          <div className="dropdown-content">
            <a><Link to="/">Home</Link></a>
            <a><Link to="/about">About</Link></a>
            <a><Link to="/contact">Contact</Link></a>
          </div>
        </div>
      </header>
      <div className='content'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>  
        </Routes>
      </div>
    </div>
  );
}

export default App;
