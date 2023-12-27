// Home.jsx

import React from 'react';
import Contacts from './Contacts'; 
import githubLogo from './images/github-mark.png';
import linkedinLogo from './images/linkedin-logo.png';
import gmailLogo from './images/gmail-logo.png';

const Home = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = './assets/Habtamu-Tegegne-resume.pdf';
        link.download = 'Habtamu-Tegegne-resume.pdf';
        link.click();
    };
    return (
        <div className="section">
            <div className="content">
                <div className="main-content">
                    <h1>Welcome to My Portfolio</h1>
                    <h1>I am Habtamu Tegegne</h1>
                    <h3>Software Engineer, Full-Stack Developer</h3>
                    <h5>
                        Highly motivated Computing graduate with a passion for full-stack development and database wizardry.
                        Proficient in OOP, agile methodologies, and always eager to learn and improve. Let's build something incredible!
                    </h5>
                    <button className="button download-btn" onClick={handleDownload}>
                        <h4>
                            Download Resume
                           {/* <a href="./assets/Habtamu-Tegegne-resume.pdf" download>
                                Download Resume
                            </a>*/}
                        </h4>
                    </button>
                </div>
                <div className="contacts-home-section">
                    <h3>Contact Information</h3>
                   
                   <a href="tel:+1615-967-0280">Call me </a>  
                   
                     <a href="mailto:habamutegegne1@gmail.com"> <img src={gmailLogo} alt="Gmail" />
                    </a>
                    
                 <a href="https://github.com/HabTeg21" target="_blank" rel="noopener noreferrer">
                        <img src={githubLogo} alt="GitHub Logo" width="30" height="30" /></a> 
                  
 <a href="https://www.linkedin.com/in/habtamu-tegegne/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinLogo} alt="LinkedIn"  /> </a> 
                </div>
            </div>
        </div>
    );
};

export default Home;
