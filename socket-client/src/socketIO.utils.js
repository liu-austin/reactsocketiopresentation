// jshint esversion:6
import socketIOClient from 'socket.io-client';

const state = {
    endpoint: 'http://localhost:4001'
};

export const socket = socketIOClient(state.endpoint);

