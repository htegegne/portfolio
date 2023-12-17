import React from 'react';



import { Link, Outlet } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav>
                
                    <Link to="home">Home</Link>
               
                    <Link to="about">About</Link>
                
                    <Link to="education">Education</Link>
                
                    <Link to="experience">Experience</Link>

            <Outlet/>
        </nav>
    );
};
export default Navbar;