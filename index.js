const express = require("express");
const socketio = require ('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socketio.listen(server);


//Static files
app.use(express.static('public'));

//Starting the server
server.listen(3000, () => {
	console.log('server on port 3000');
});

