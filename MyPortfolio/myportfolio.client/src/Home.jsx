// Home.jsx

import React, { useRef } from 'react';
import ReactPlayer from 'react-player'; // Using ReactPlayer for video rendering
import Contacts from './Contacts'; 
import githubLogo from './images/github-mark.png';
import linkedinLogo from './images/linkedin-logo.png';
import gmailLogo from './images/gmail-logo.png';
import homeVideo from './images/ht-logo-video.mp4';


const Home = () => {
    const videoRef = useRef(null); // Reference for video control
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
                    <div className="video-wrapper">
                        {/* Video placement before main content */}
                        <ReactPlayer
                            ref={videoRef}
                            url={homeVideo}
                            autoPlay={true} 
                      //  playing={true} // Initially paused
                            controls={true}
                            loop={true}
                            muted={false}
                            width="640"
                            height="360"
                        />
                        <div className="video-overlay">
                            <div className="video-text">
                                <h1>Welcome to My Portfolio</h1>
                                <h1>I am Habtamu Tegegne</h1>
                                <h3>Software Engineer, Full-Stack Developer</h3>
                                <h5>
                                    Highly motivated Computing graduate with a passion for full-stack development and database wizardry.
                                    Proficient in OOP, agile methodologies, and always eager to learn and improve. Let's build something incredible!
                                </h5>
                            </div>
                        </div>
                               
                          
                    </div>
                </div>
                <div className="contacts-home-section">
                    <button className="button download-btn" onClick={handleDownload}>
                        <h2>
                            Download Resume
                            {/* <a href="./assets/Habtamu-Tegegne-resume.pdf" download>
                                            Download Resume
                                        </a>*/}
                        </h2>
                    </button>
                    <h3>Contact Info</h3>
                         <div className="button-container">
                                <button className="button link-btn">
                                    <a href="tel:+1615-967-0280">Call me</a>
                                </button>
                                <button className="button link-btn">
                                    <a href="mailto:habamutegegne1@gmail.com">
                                        <img src={gmailLogo} alt="Gmail" />
                                    </a>
                                </button>
                                <button className="button link-btn">
                                    <a href="https://github.com/HabTeg21" target="_blank" rel="noopener noreferrer">
                                        <img src={githubLogo} alt="GitHub Logo" width="30" height="30" />
                                    </a>
                                </button>
                                <button className="button link-btn">
                                    <a href="https://www.linkedin.com/in/habtamu-tegegne/" target="_blank" rel="noopener noreferrer">
                                        <img src={linkedinLogo} alt="LinkedIn" />
                                    </a>
                                </button>
                         </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
