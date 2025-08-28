// App.js (Updated to remove nested anchors with null check)
import './App.css';
import logoImage from './images/logo_stroke.png';
import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Games from './Games.js';

function App() {
    useEffect(() => {
        const dropdownButton = document.querySelector('.dropButton');
        const dropdownContent = document.querySelector('.dropdown-content');
        if (!dropdownButton || !dropdownContent) return; // Null check guard clause
        const toggleDropdown = () => {
            dropdownContent.classList.toggle('show');
        };
        const closeDropdown = (event) => {
            if (!event.target.matches('.dropButton')) {
                dropdownContent.classList.remove('show');
            }
        };
        dropdownButton.addEventListener('click', toggleDropdown);
        window.addEventListener('click', closeDropdown);
        return () => {
            dropdownButton.removeEventListener('click', toggleDropdown);
            window.removeEventListener('click', closeDropdown);
        };
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
                            <Link to="/games">Games</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div className="dropDown">
                    <button className="dropButton">... <i /></button>
                    <div className="dropdown-content">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/games">Games</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>
            </header>
            <div className='content'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/games" element={<Games />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </div>
    );
}
export default App;