/* eslint-disable react/jsx-no-undef */
//import { useEffect, useState } from 'react';
import './App.css';
import Education from './education';
import ProfessionalExperience from './experience';

import About from './About';


import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Navbar from './NavBar';
import Home from './Home';




//import Education from './education.jsx'
//import ProfessionalExperience from './experience.jsx'

/*const Home = () => {
    return (
        <nav>
            <li> <a href="/">Home</a></li>
            <li> <a href="About">About</a> </li>
           
            <li> <a href="./education">Education</a></li>
           
            <li> <a href="./experience">Experience</a></li>
           
       
            <p>This component demonstrates fetching data from the server.</p>
        </nav>
    );
};
*/




const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar />}>
                        {<Route index element={<Home />} />}
                        <Route path="home" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="education" element={<Education />} />
                        <Route path="experience" element={<ProfessionalExperience />} />
                    </Route>
                </Routes>
            </BrowserRouter>

          
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