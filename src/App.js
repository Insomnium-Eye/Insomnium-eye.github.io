import './App.css';
import logoImage from './images/logo_stroke.png';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';


import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';



function App() {
    return (
        <div className="background">
            <div className="header">
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
                <div className='content'>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/about" element={<About/>}/>
                        <Route path="/contact" element={<Contact/>}/>  
                    </Routes>
                </div>
            </div>          
        </div>
    );
}

export default App;