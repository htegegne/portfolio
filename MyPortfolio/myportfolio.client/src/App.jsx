/* eslint-disable react/jsx-no-undef */
//import { useEffect, useState } from 'react';
import './App.css';
//import './navBar.css'
import Education from './education';
import ProfessionalExperience from './experience';

import About from './About';

//import image from "./public/backgruond.png";
//import image from "./images/pro_pic.svg";
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Contacts from './contacts';







const App = () => {
    return (
        
             <div >
                   
                <Navbar id="navbar" expand="lg" >
                   {/*<Container>*/}
                      {/* <Navbar.Brand href="#home">Habtamu Tegegne</Navbar.Brand>*/}
               {/*  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                   */}
                        <Nav className="me-auto">
                            <BrowserRouter>
                                <Routes>
                                    <Route path="/" element={<NavBar />}>
                                        {<Route index element={<Home />} />}
                                        <Route path="home" element={<Home />} />
                                        <Route path="about" element={<About />} />
                                        <Route path="education" element={<Education />} />
                                <Route path="experience" element={<ProfessionalExperience />} />
                                <Route path="contacts" element={<Contacts/> } />
                                    </Route>
                                </Routes>
                    </BrowserRouter>
                   
                          </Nav>  
                    
                    {/*</Container>*/}
                </Navbar>
               
              
            </div>
       
    );
}
    
    /*async function populateWeatherData() {
        const response = await fetch('weatherforecast');
        const data = await response.json();
        setForecasts(data);
    }
    */

export default App;