// jshint esversion:6
import React from 'react';
// import './homepage.styles.scss';
import './usagepage.styles.scss';

const UsagePage = () => {
    return (
        <div>
        <div className='about-content'>
            <div className='about-title'>
                <h1 align='center'>HOW TO USE</h1>
            </div>
            <div className='about-list'>
            <ul>
            <li>npm i socket.io-client in folder with client package.json</li>
            <li>npm i socket.io in folder with server package.json</li>
            <p>
            import socketIOClient from 'socket.io-client';
            <br></br>
            export const socket = socketIOClient('http://localhost:4001');
            <br></br>
            <br></br>
            const io = socketIO(server);
            const express = require('express');
            <br></br>
            const http = require('http');
            <br></br>
            const socketIO = require('socket.io');
            <br></br>
            // our localhost port
            <br></br>
            const port = 4001;
            <br></br>
            const app = express();
            <br></br>
            // our server instance
            <br></br>
            const server = http.createServer(app);
            <br></br>
            // This creates our socket using the instance of the server
            <br></br>

            </p>
            </ul>
            </div>
        </div>
        <div className='color-change-example'>
            <div className='about-title'>
                <h1 align='center'>SOCKET.IO COMMANDS</h1>
            </div>
            <div className='about-list'>
            <ul>
            <li>Client Side</li>
            <p>
            socket.emit(eventName, data);
            <br></br>
            socket.on(eventName, cb);
            </p>
            <li>Server Side</li>
            <p>
            socket.emit(eventName, data);
            <br></br>
            socket.to(roomName).emit.(eventName, data);
            <br></br>
            io.emit(eventName, data);
            <br></br>
            io.on('connection', cb);
            <br></br>
            io.on('disconnect', cb);
            <br></br>
            socket.on(eventName, cb);
            </p>
            </ul>
            </div>
        </div>
        </div>
    );
};

export default UsagePage;