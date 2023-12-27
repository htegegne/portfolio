import React, { useState } from 'react';

import './navBar.css';

import { Link, Outlet } from 'react-router-dom';
import mainLogo from './images/ht-logo.png'


const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src={mainLogo} alt="Habtamu Tegegne Logo" className="logo" /> 
                </Link>
                <button
                    className="navbar-toggler collapsed"
                    onClick={toggleMenu}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation" >
                    <span

                        className="navbar-toggler-icon"></span>

                {/*  <div className="hamburger">
                        <div className="hamburger-line"></div>
                        <div className="hamburger-line"></div>
                        <div className="hamburger-line"></div>
                    </div>*/}
                </button>
             
                <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`} id="navbarNav" >

                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">  Home </Link>
                        </li>
                       
                        <li className="nav-item">
                            <Link to="education" className="nav-link"> Education </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="experience" className="nav-link"> Experience and Skills </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="about" className="nav-link"> About me</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="contacts" className="nav-link">Contact me</Link>
                        </li>

                    </ul>
                </div>
            </div>
            <Outlet />
        </nav>

    );
};


export default NavBar;