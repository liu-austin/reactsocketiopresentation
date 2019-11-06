// jshint esversion:6
import React from 'react';
// import './homepage.styles.scss';
import './aboutpage.styles.scss';

const AboutPage = () => {
    return (
        <div>
        <div className='about-content'>
            <div className='about-title'>
                <h1 align='center'>WHAT IS SOCKET.IO?</h1>
            </div>
            <div className='about-list'>
            <ul>
            <li>A Javascript Library for realtime web apps</li>
            <li>Used for communication, live-sharing, multiplayer games</li>
            <li>Easy to use</li>
            <li>A client-side that runs in browser</li>
            <li>A server-side that uses Node.js</li>
            <li>Uses a connection method similar to WebSockets</li>
            </ul>
            </div>
        </div>
        <div className='color-change-example'>
            <div className='about-title'>
                <h1 align='center'>CHANGE BACKGROUND COLOR</h1>
            </div>
            <div className='about-list'>
            <ul>
            <li>Set state.color</li>
            <li>On click event listener sends state.color to server</li>
            <li>Server sends data to all clients</li>
            <li>Client event listener sets background color based on data</li>
            </ul>
            </div>
        </div>
        </div>
    );
};

export default AboutPage;