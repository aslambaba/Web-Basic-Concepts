const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');
const app = express();


const PORT = 5000 | process.env.PORT;
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', socket=>{
    console.log("Socket.IO Connected");
})

server.listen(PORT, ()=>{
    console.log(`Your Server is running in Port: ${PORT}`);
})