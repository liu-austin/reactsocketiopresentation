const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

// our localhost port
const port = process.env.PORT || 4001;

const app = express();
if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('socket-client/build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'socket-client', 'build', 'index.html'));
  });
}
// our server instance
const server = http.createServer(app);

// This creates our socket using the instance of the server
const io = socketIO(server);

// This is what the socket.io syntax is like, we will work this later
io.on('connection', socket => {
  console.log('New client connected');

  // just like on the client side, we have a socket.on method that takes a callback function
  socket.on('change color', (color) => {
    // once we get a 'change color' event from one of our clients, we will send it to the rest of the clients
    // we make use of the socket.emit method again with the argument given to use from the callback function above
    console.log('Color Changed to: ', color)
    io.sockets.emit('change color', color)
  });

  socket.on('sendMessage', function(data){
    io.emit('receiveMessage', data);
  });

  // disconnect is fired when a client leaves the server
  socket.on('disconnect', () => {
    console.log('user disconnected')
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
